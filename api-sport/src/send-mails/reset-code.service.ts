import { MailerService } from '@nestjs-modules/mailer'
import { BadRequestException, Injectable } from '@nestjs/common'
import { join } from 'path'
import { MoreThanOrEqual, Repository } from 'typeorm'
import { ResetCodeEntity } from './entities/reset-code.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { UsersService } from 'src/users/services/users.service'
import { UpdateUserDto } from 'src/users/dto/update-user.dto'

@Injectable()
export class ResetCodeService {
  constructor(
    private readonly mailerService: MailerService,
    @InjectRepository(ResetCodeEntity)
    private readonly resetCodeRepository: Repository<ResetCodeEntity>,
    private readonly usersService: UsersService
  ) {}

  async sendResetCodeEmail(email: string) {
    console.log('email', email)
    const sportspotLogo = join(
      __dirname,
      '..',
      '..',
      '..',
      'client',
      'assets',
      'spotsport.png'
    )
    const facebookIcon = join(
      __dirname,
      '..',
      '..',
      '..',
      'client',
      'assets',
      'icons',
      'facebook_icon.png'
    )
    const twitterIcon = join(
      __dirname,
      '..',
      '..',
      '..',
      'client',
      'assets',
      'icons',
      'twitter_icon.png'
    )
    const instagramIcon = join(
      __dirname,
      '..',
      '..',
      '..',
      'client',
      'assets',
      'icons',
      'instagram_icon.png'
    )
    // Generar un código de restablecimiento de contraseña
    const resetCode = Math.floor(1000 + Math.random() * 9000).toString()

    // Guardar el código en la base de datos

    await this.resetCodeRepository.save({
      code: resetCode,
      email: email,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // El código expira en 24 horas
    })

    const htmlTemplate = `
    <html>
    <head>
      <style>
        body {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 150vh;
          margin: 0;      
        }
        #container {
          text-align: center;
          padding: 20px;
          background-color: #fcece7;
        }
        img {
          width: 40%;
          height: auto;
          display: block;
          margin: 0 auto;
        }
        p {
          color: #642794;
          text-align: center;,       
        }
        .title {
          font-size: 2em;
          font-weight: bold;
        }
        .social {
          font-weight: 600;
          font-size: 1.5em;
        }
        .icons {
          display: flex;
          flex-direction: row;
          width: 40%;
          justify-content: center;
          align-items: center;
          margin-left: 30%;
        }
        .iconImg {
          width: 40px;
        }
      </style>
    </head>
    <body>
    <div id="container">
    <img src="cid:sportSpot" />
        <p class='title'>Tu código de restablecimiento de contraseña es: <b>${resetCode}</b></p>
        <p>Ya estás listo para comenzar a participar en los mejores eventos deportivos en el área que desees</p>
          <p class='social'>¡Síguenos en nuestras redes!</p>
          <div class='icons'>
            <img src="cid:facebookIcon" class='iconImg'/>
            <img src="cid:twitterIcon" class='iconImg'/>
            <img src="cid:instagramIcon" class='iconImg'/>
          </div>
      </div>
    </body>
    </html>
    `

    await this.mailerService.sendMail({
      to: email,
      subject: 'Código de restablecimiento de contraseña',
      html: htmlTemplate, // Archivo de plantilla de correo electrónico
      context: {}, // Datos adicionales que pueden ser pasados a la plantilla
      attachments: [
        {
          filename: 'sportspot.png',
          path: sportspotLogo,
          cid: 'sportSpot'
        },
        {
          filename: 'facebook_icon.png',
          path: facebookIcon,
          cid: 'facebookIcon'
        },
        { filename: 'twitter_icon.png', path: twitterIcon, cid: 'twitterIcon' },
        {
          filename: 'instagram_icon.png',
          path: instagramIcon,
          cid: 'instagramIcon'
        }
      ]
    })

    return `Correo enviado exitosamente code: ${resetCode}`
  }

  async validateResetCode(code: string, email: string, password: string) {
    const resetCode = await this.resetCodeRepository.findOne({
      where: {
        code: code,
        email: email,
        expiresAt: MoreThanOrEqual(new Date())
      }
    })

    const user = await this.usersService.findOneByEmail(email)

    if (resetCode) {
      const updateUserDto: UpdateUserDto = { password }
      await this.usersService.updateService(user.id, updateUserDto)
    } else {
      throw new BadRequestException(
        'El código de restablecimiento de contraseña no es válido'
      )
    }
    await this.resetCodeRepository.remove(resetCode)

    return 'Código de restablecimiento de contraseña válido'
  }
}
