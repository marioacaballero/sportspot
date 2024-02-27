import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { join } from 'path'
import { UpdateEventDto } from 'src/events/dto/update-event.dto'
import { EventEntity } from 'src/events/entities/event.entity'
import { UserEntity } from 'src/users/entities/users.entity'
import { Repository } from 'typeorm'

@Injectable()
export class SendMailsService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    private readonly mailerService: MailerService
  ) {}

  async sendRegistrationNotification(email: string) {
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
        <p class='title'>¡Gracias por registrarte!</p>
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
      subject: 'Registro exitoso',
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

    return 'Correo enviado exitosamente'
  }

  async sendEventDeletedNotification(event: EventEntity) {
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
        <p class='title'>El evento deportivo ${event.title} ha sido cancelado</p>
        <p>Disculpe las molestias</p>
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

    for (const user of event.suscribers) {
      await this.mailerService.sendMail({
        to: user.email,
        subject: 'Evento cancelado',
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
          {
            filename: 'twitter_icon.png',
            path: twitterIcon,
            cid: 'twitterIcon'
          },
          {
            filename: 'instagram_icon.png',
            path: instagramIcon,
            cid: 'instagramIcon'
          }
        ]
      })
    }

    return 'Correo enviado exitosamente'
  }

  async sendEventModificationNotification(
    event: EventEntity,
    updateEventDto: UpdateEventDto
  ) {
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
        <p class='title'>Se han modificado los siguientes datos del evento ${event.title}</p>
          <p>Lista de cambios: 
            ${updateEventDto.dateStart ? `<p>Fecha de comienzo:${updateEventDto.dateInscription}</p>` : ''}
            ${updateEventDto.dateInscription ? `<p>Fecha de inscripcion:${updateEventDto.dateInscription}</p>` : ''}
            ${updateEventDto.timeStart ? `<p>Hora de comienzo:${updateEventDto.timeStart}</p>` : ''}
            ${updateEventDto.location ? `<p>Localidad:${updateEventDto.location}</p>` : ''}
            ${updateEventDto.modality ? `<p>Modalidad:${updateEventDto.modality}</p>` : ''}
          </p>
          <p>Disculpe las molestias</p>
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
    for (const user of event.suscribers) {
      await this.mailerService.sendMail({
        to: user.email,
        subject: 'Evento modificado',
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
          {
            filename: 'twitter_icon.png',
            path: twitterIcon,
            cid: 'twitterIcon'
          },
          {
            filename: 'instagram_icon.png',
            path: instagramIcon,
            cid: 'instagramIcon'
          }
        ]
      })
    }
    return 'Correo enviado exitosamente'
  }
}
