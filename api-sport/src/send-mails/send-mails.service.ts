import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'
import { join } from 'path'
import { UpdateEventDto } from 'src/events/dto/update-event.dto'
import { EventEntity } from 'src/events/entities/event.entity'
import { UserEntity } from 'src/users/entities/users.entity'

@Injectable()
export class SendMailsService {
  constructor(private readonly mailerService: MailerService) {}

  public async sendRegistrationNotification(email: string) {
    const sportspotLogo = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'spotsport.png'
    )
    const facebookIcon = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'facebook_icon.webp'
    )
    const twitterIcon = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'twitter_icon.png'
    )
    const instagramIcon = join(
      __dirname,
      '..',
      '..',
      'public',
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
          gap: 10px;
          flex-direction: row;
          justify-content: space-around;
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
        <img src="cid:spotsport" />
        <p class='title'>¡Gracias por registrarte!</p>
        <p>Ya estás listo para comenzar a participar en los mejores eventos deportivos en el área que desees</p>
        <p class='social'>¡Síguenos en nuestras redes!</p>
        <div class='icons'>
          <a href="https://www.facebook.com/profile.php?id=61557312863138" target=_blank rel="noopener noreferrer"><img src="cid:facebookIcon" class='iconImg' width=30 height=30 style="margin-left:5"/></a>
          <img src="cid:twitterIcon" class='iconImg' width=30 height=30 style="margin-left:5"/>
          <a href="https://www.instagram.com/spotsport_app/" target=_blank rel="noopener noreferrer"><img src="cid:instagramIcon" class='iconImg' width=30 height=30 style="margin-left:5"/></a>
        </div>
      </div>
    </body>
    </html>
    `
    const result = await this.mailerService.sendMail({
      to: email,
      subject: 'Registro exitoso',
      html: htmlTemplate, // Archivo de plantilla de correo electrónico
      // context: {}, // Datos adicionales que pueden ser pasados a la plantilla
      attachments: [
        {
          filename: 'spotsport.png',
          path: sportspotLogo,
          cid: 'spotsport'
        },
        {
          filename: 'facebook_icon.webp',
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
    return result
  }

  public async sendReviewMail(email: string) {
    const sportspotLogo = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'spotsport.png'
    )
    const facebookIcon = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'facebook_icon.webp'
    )
    const twitterIcon = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'twitter_icon.png'
    )
    const instagramIcon = join(
      __dirname,
      '..',
      '..',
      'public',
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
          gap: 10px;
          flex-direction: row;
          justify-content: space-around;
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
        <img src="cid:spotsport" />
        <p class='title'>Crea tu reseña.</p>
        <p>Sabemos que ayer has participado en uno de nuestros eventos. Esperamos que lo hayas disfrutado. Aporta tu experiencia dejando una reseña y además… ¡GANA PUNTOS! Hacer deporte nunca había sido tan ganador.</p>
        <p class='social'>¡Síguenos en nuestras redes!</p>
        <div class='icons'>
          <a href="https://www.facebook.com/profile.php?id=61557312863138" target=_blank rel="noopener noreferrer"><img src="cid:facebookIcon" class='iconImg' width=30 height=30 style="margin-left:5"/></a>
          <img src="cid:twitterIcon" class='iconImg' width=30 height=30 style="margin-left:5"/>
          <a href="https://www.instagram.com/spotsport_app/" target=_blank rel="noopener noreferrer"><img src="cid:instagramIcon" class='iconImg' width=30 height=30 style="margin-left:5"/></a>
        </div>
      </div>
    </body>
    </html>
    `
    const result = await this.mailerService.sendMail({
      to: email,
      subject: "Crea tu reseña.",
      html: htmlTemplate, // Archivo de plantilla de correo electrónico
      // context: {}, // Datos adicionales que pueden ser pasados a la plantilla
      attachments: [
        {
          filename: 'spotsport.png',
          path: sportspotLogo,
          cid: 'spotsport'
        },
        {
          filename: 'facebook_icon.webp',
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
    return result
  }


  public async sendRegistrationMail(email: string) {
    const sportspotLogo = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'spotsport.png'
    )
    const facebookIcon = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'facebook_icon.webp'
    )
    const twitterIcon = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'twitter_icon.png'
    )
    const instagramIcon = join(
      __dirname,
      '..',
      '..',
      'public',
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
          gap: 10px;
          flex-direction: row;
          justify-content: space-around;
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
        <img src="cid:spotsport" />
        <p class='title'>Tu inscripción ha sido registrada.</p>
        <p>SpotSport confirma que tu inscripción ha sido correctamente registrada. Te invitamos a que sigas disfrutando del deporte a través de SpotSport.</p>
        <p class='social'>¡Síguenos en nuestras redes!</p>
        <div class='icons'>
          <a href="https://www.facebook.com/profile.php?id=61557312863138" target=_blank rel="noopener noreferrer"><img src="cid:facebookIcon" class='iconImg' width=30 height=30 style="margin-left:5"/></a>
          <img src="cid:twitterIcon" class='iconImg' width=30 height=30 style="margin-left:5"/>
          <a href="https://www.instagram.com/spotsport_app/" target=_blank rel="noopener noreferrer"><img src="cid:instagramIcon" class='iconImg' width=30 height=30 style="margin-left:5"/></a>
        </div>
      </div>
    </body>
    </html>
    `
    const result = await this.mailerService.sendMail({
      to: email,
      subject: 'Tu inscripción ha sido registrada.',
      html: htmlTemplate, // Archivo de plantilla de correo electrónico
      // context: {}, // Datos adicionales que pueden ser pasados a la plantilla
      attachments: [
        {
          filename: 'spotsport.png',
          path: sportspotLogo,
          cid: 'spotsport'
        },
        {
          filename: 'facebook_icon.webp',
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
    return result
  }



  public async sendEventDeletedNotification(
    event: EventEntity
  ): Promise<string> {
    const sportspotLogo = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'spotsport.png'
    )
    const facebookIcon = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'facebook_icon.webp'
    )
    const twitterIcon = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'twitter_icon.png'
    )
    const instagramIcon = join(
      __dirname,
      '..',
      '..',
      'public',
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
          gap: 10px;
          flex-direction: row;
          justify-content: space-around;
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
            <a href="https://www.facebook.com/profile.php?id=61557312863138" target=_blank rel="noopener noreferrer"><img src="cid:facebookIcon" class='iconImg' width=30 height=30 style="margin-left:5"/></a>
            <a href="#" target=_blank rel="noopener noreferrer"> 
            <img src="cid:twitterIcon" class='iconImg' width=30 height=30 style="margin-left:5"/>
            </a>
            <a href="https://www.instagram.com/spotsport_app/" target=_blank rel="noopener noreferrer"><img src="cid:instagramIcon" class='iconImg' width=30 height=30 style="margin-left:5"/></a>
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
            filename: 'spotsport.png',
            path: sportspotLogo,
            cid: 'sportSpot'
          },
          {
            filename: 'facebook_icon.webp',
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

  public async sendUserRolNotification(
    user: UserEntity
  ): Promise<string> {
    const sportspotLogo = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'spotsport.png'
    )
    const facebookIcon = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'facebook_icon.webp'
    )
    const twitterIcon = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'twitter_icon.png'
    )
    const instagramIcon = join(
      __dirname,
      '..',
      '..',
      'public',
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
          gap: 10px;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          margin-left: 30%;
        }
        .iconImg {
          width: 40px;
        }
      </style>
      <script>
      let button = document.getElementById('button');
      button.addEventListener('click', function () {
        async function changeRol() {
          try {
            await fetch("http://c5e7a731-cc55-4137-a1e8-04915e54dee9.pub.instances.scw.cloud:3000/api/users/${user.id}", {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                updateUserDto: { rol: "organizer" }
              })
            });
          } catch (error) {
            console.error('Error al enviar la solicitud PATCH:', error);
          }
        }
      })
    </script>
    </head>
    <body>
    <div id="container">
    <img src="cid:sportSpot" />
        <p class='title'>El usuario ${user.email} solicita ser organizador</p>
        <p>Usted corrobora el cambio de rol?</p>
        <a href="http://192.168.1.179:3000/api/users/rol/${user.id}" >ACEPTAR </a>        
          <p class='social'>¡Síguenos en nuestras redes!</p>
          <div class='icons'>
            <a href="https://www.facebook.com/profile.php?id=61557312863138" target=_blank rel="noopener noreferrer"><img src="cid:facebookIcon" class='iconImg' width=30 height=30 style="margin-left:5"/></a>
            <a href="#" target=_blank rel="noopener noreferrer"> 
            <img src="cid:twitterIcon" class='iconImg' width=30 height=30 style="margin-left:5"/>
            </a>
            <a href="https://www.instagram.com/spotsport_app/" target=_blank rel="noopener noreferrer"><img src="cid:instagramIcon" class='iconImg' width=30 height=30 style="margin-left:5"/></a>
        </div>
      </div>
    </body>
    </html>
    `   
      await this.mailerService.sendMail({
        to: "spotsports.test@hotmail.com",
        subject: 'Soliciutud de organizador',
        html: htmlTemplate, 
        context: {}, 
        attachments: [
          {
            filename: 'spotsport.png',
            path: sportspotLogo,
            cid: 'sportSpot'
          },
          {
            filename: 'facebook_icon.webp',
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
    
    return 'Correo enviado exitosamente'
  }

  public async sendEventModificationNotification(
    event: EventEntity,
    updateEventDto: UpdateEventDto
  ): Promise<string> {
    const sportspotLogo = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'spotsport.png'
    )
    const facebookIcon = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'facebook_icon.webp'
    )
    const twitterIcon = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'twitter_icon.png'
    )
    const instagramIcon = join(
      __dirname,
      '..',
      '..',
      'public',
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
          gap: 10px;
          flex-direction: row;
          justify-content: space-around;
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
            <a href="https://www.facebook.com/profile.php?id=61557312863138" target=_blank rel="noopener noreferrer"><img src="cid:facebookIcon" class='iconImg' width=30 height=30 style="margin-left:5"/></a>
            <a href="#" target=_blank rel="noopener noreferrer"> 
            <img src="cid:twitterIcon" class='iconImg' width=30 height=30 style="margin-left:5"/>
            </a>
            <a href="https://www.instagram.com/spotsport_app/" target=_blank rel="noopener noreferrer"><img src="cid:instagramIcon" class='iconImg' width=30 height=30 style="margin-left:5"/></a>
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
            filename: 'spotsport.png',
            path: sportspotLogo,
            cid: 'sportSpot'
          },
          {
            filename: 'facebook_icon.webp',
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

  public async sendOrganizerNotification(email: string): Promise<string> {
    const sportspotLogo = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'spotsport.png'
    )
    const facebookIcon = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'facebook_icon.webp'
    )
    const twitterIcon = join(
      __dirname,
      '..',
      '..',
      'public',
      'icons',
      'twitter_icon.png'
    )
    const instagramIcon = join(
      __dirname,
      '..',
      '..',
      'public',
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
          gap: 10px;
          flex-direction: row;
          justify-content: space-around;
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
        <p class='title'>Has sido aceptado "${email}" como organizador</p>
        <p>Ya puedes organizar eventos</p>

          <p class='social'>¡Síguenos en nuestras redes!</p>
          <div class='icons'>
            <a href="https://www.facebook.com/profile.php?id=61557312863138" target=_blank rel="noopener noreferrer"><img src="cid:facebookIcon" class='iconImg' width=30 height=30 style="margin-left:5"/></a>
            <a href="#" target=_blank rel="noopener noreferrer"> 
            <img src="cid:twitterIcon" class='iconImg' width=30 height=30 style="margin-left:5"/>
            </a>
            <a href="https://www.instagram.com/spotsport_app/" target=_blank rel="noopener noreferrer"><img src="cid:instagramIcon" class='iconImg' width=30 height=30 style="margin-left:5"/></a>
        </div>
      </div>
    </body>
    </html>
    `   
      await this.mailerService.sendMail({
        to: email,
        subject: '¡¡Ya eres organizador!!',
        html: htmlTemplate, 
        context: {}, 
        attachments: [
          {
            filename: 'spotsport.png',
            path: sportspotLogo,
            cid: 'sportSpot'
          },
          {
            filename: 'facebook_icon.webp',
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
    
    return 'Correo enviado exitosamente'
    
  }
}
