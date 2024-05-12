import { HttpException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { hash } from 'bcrypt'
import { EventsService } from 'src/events/events.service'
import { JsonwebtokenService } from 'src/jsonwebtoken/jsonwebtoken.service'
import { CreateNotificationDto } from 'src/notifications/dto/create-notification.dto'
import { NotificationsService } from 'src/notifications/notifications.service'
import { SendMailsService } from 'src/send-mails/send-mails.service'
import { Repository } from 'typeorm'
import { EventEntity } from '../../events/entities/event.entity'
import { UserEventHistoryEntity } from '../../events/entities/userEvent.entity'
import { UpdateUserDto } from '../dto/update-user.dto'
import { UserDTO } from '../dto/user.dto'
import { UserEntity } from '../entities/users.entity'
import Stripe from 'stripe';

@Injectable()
export class UsersService {
  private readonly stripe: Stripe;
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly notificationsService: NotificationsService,
    private readonly eventService: EventsService,
    private readonly jsonwebtokenService: JsonwebtokenService,
    private readonly sendMailsService: SendMailsService,
    @InjectRepository(EventEntity)
    private readonly eventsRepository: Repository<EventEntity>,
    @InjectRepository(UserEventHistoryEntity)
    private readonly usersEventRepository: Repository<UserEventHistoryEntity>
  ) {
    this.stripe = new Stripe(
      'sk_test_51OocYQGmE60O5ob7URy3YpGfHVIju6x3fuDdxXUy5R0rAdaorSHfskHNcBHToSoEfwJhFHtFDCguj7aGPlywD2pp00f2X9h9et',
    )
  }
  public async create(createUserDto: UserDTO) {
    try {
      // Encriptar la contraseña del usuario
      createUserDto.password = await hash(
        createUserDto.password,
        +process.env.HASH_SALT
      );

      // Verificar si el usuario ya existe en la base de datos
      const existingUser: UserEntity = await this.userRepository
        .createQueryBuilder('user')
        .where({ email: createUserDto.email })
        .getOne();
      // Si el usuario ya existe, lanzar una excepción
      if (existingUser) {
        return ({
          type: 'BAD_REQUEST',
          message: 'The email is already registered in the database'
        });
      }
      const stripeCustomer = await this.stripe.customers.create({
        email: createUserDto.email,
        name: createUserDto.name, // Puedes ajustar esto según tu lógica de aplicación
      });

      // Guardar el ID de cliente de Stripe en el DTO del usuario
      createUserDto.stripeId = stripeCustomer.id;
      // Guardar el nuevo perfil del usuario en la base de datos
      const newProfile: UserEntity =
        await this.userRepository.save(createUserDto);
      // Si no se pudo crear el nuevo perfil, lanzar una excepción
      if (!newProfile) {
        return({
          type: 'BAD_REQUEST',
          message: 'The new profile is not created'
        });
      }
      // Devolver el nuevo perfil del usuario
      return newProfile;
    } catch (error) {
      return ({
        type: 'BAD_REQUEST-CATCH',
        message: 'CATCH CREATE USER'
      });
    }
  }

  // Método para crear usuario con Firebase
  public async createUserAuth(createUserDto: UserDTO) {
    try {
      let existingUser: any;

      // Verificar si el usuario ya existe en tu base de datos local
      if (createUserDto.googleId) {
        existingUser = await this.userRepository.findOne({ where: { googleId: createUserDto.googleId } });
      } else if (createUserDto.appleId) {
        existingUser = await this.userRepository.findOne({ where: { appleId: createUserDto.appleId } });
      } else if (createUserDto.facebookId) {
        existingUser = await this.userRepository.findOne({ where: { facebookId: createUserDto.facebookId } });
      }

      // Si el usuario ya existe, lanzar una excepción
      if (existingUser) {
       return {user:existingUser,message:"el usuario existe"}
      }






      // Crear el nuevo perfil del usuario en tu base de datos
      createUserDto.eventsCreated = null
      createUserDto.events = null
      createUserDto.notifications = null
      createUserDto.eventHistory = null
      createUserDto.reviews = null
      const newProfile: UserEntity = await this.userRepository.save(createUserDto);
      // Si no se pudo crear el nuevo perfil, lanzar una excepción
      if (!newProfile) {
        return ({
          type: 'BAD_REQUEST',
          message: 'Failed to create new user profile'
        });
      }

      // Enviar notificación de registro por correo electrónico
      // if (newProfile.email) {
      //   await this.sendMailService.sendRegistrationNotification(newProfile.email);
      //   console.log(newProfile, "new profile")
      // }
      // Devolver el nuevo perfil del usuario
      return newProfile;
    } catch (error) {
      console.log(error)
      // Manejar errores
      return ({
        type: 'BAD_REQUEST-CATCH',
        message: 'CATCH CREATE USER'
      });
    }
  }



  async createSubscription(customerId: string, priceId: string): Promise<any> {
    try {
      const subscription = await this.stripe.subscriptions.create({
        customer: customerId,
        items: [{
          price: priceId,
        }],
        payment_behavior: 'default_incomplete',
        payment_settings: { save_default_payment_method: 'on_subscription' },
        expand: ['latest_invoice.payment_intent'],
      });
      console.log("prueba")

      return {
        subscriptionId: subscription.id,
        clientSecret: subscription,
      };
    } catch (error) {
      throw new Error('Error creating subscription');
    }
  }

  async createCustomer(email: string, name: string): Promise<any> {
    try {
      const customer = await this.stripe.customers.create({
        email,
        name,
        shipping: {
          address: {
            city: 'Brothers',
            country: 'US',
            line1: '27 Fredrick Ave',
            postal_code: '97712',
            state: 'CA',
          },
          name,
        },
        address: {
          city: 'Brothers',
          country: 'US',
          line1: '27 Fredrick Ave',
          postal_code: '97712',
          state: 'CA',
        },
      });
      return customer;
    } catch (error) {
      throw new Error('Error creating customer');
    }
  }



  public async register(userObject: UserDTO) {
    //Hash password
    userObject.password = await hash(
      userObject.password,
      +process.env.HASH_SALT
    )

    

    const existingUser: UserEntity = await this.userRepository
      .createQueryBuilder('user')
      .where({ email: userObject.email })
      .getOne()

    if (existingUser) {
      throw new HttpException(
        'The email is already registered in the database',
        409
      )
    }

    const stripeCustomer = await this.stripe.customers.create({
      email: userObject.email,
      name: userObject.name, // Puedes ajustar esto según tu lógica de aplicación
    });

    // Guardar el ID de cliente de Stripe en el DTO del usuario
    userObject.stripeId = stripeCustomer.id;

    const newProfile = await this.userRepository.save(userObject)

    if (!newProfile) {
      throw new HttpException('The new profile is not created', 501)
    } else {
      try {
        await this.sendMailsService.sendRegistrationNotification(
          newProfile.email
        )
      } catch (error) {
        console.log('cae en el error ->', error)
      }
    }

    return newProfile
  }

  public async changeRolUser(id: string) {
    const user = await this.getOneService(id)

    if (!user) {
      throw new HttpException('User not found', 501)
    } else {
      try {
        await this.sendMailsService.sendUserRolNotification(user)
      } catch (error) {
        console.error(error)
      }
    }
  }

  public async changePasswordService(
    id: string,
    oldPassword: string,
    newPassword: string
  ) {
    const user = await this.getOneService(id)

    if (!user) {
      throw new HttpException(`Usuario con ID ${id} no encontrado`, 404)
    }

    const isPasswordValid = await this.jsonwebtokenService.verifyPassword(
      user,
      oldPassword
    )

    if (!isPasswordValid) {
      throw new HttpException('La contraseña actual no es válida', 401)
    }

    user.password = await hash(newPassword, +process.env.HASH_SALT)

    return await this.userRepository.save(user)
  }

  public async getAllService() {
    return await this.userRepository.find({ where: { isDelete: false } })
  }

  public async getAllEventsUsersService(
    eventId: string
  ): Promise<UserEntity[]> {
    const event = await this.eventService.getOneService(eventId)
    if (!event) {
      throw new HttpException(`Evento con ID ${eventId} no encontrado`, 404)
    }

    // Cargar la relación de usuarios para el evento
    const users = await this.usersEventRepository
      .createQueryBuilder()
      .relation(UserEntity, 'users')
      .of(event)
      .loadMany()

    return users.filter((user) => !user.isDelete)
  }

  public async getOneService(id: string) {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where({ id })
      .leftJoinAndSelect('user.events', 'events')
      .getOne()

    if (!user)
      throw new HttpException(`Usuario con ID ${id} no encontrado`, 404)

    return user
  }

  public async getOneEvent(id: string) {
    const event = await this.eventsRepository
      .createQueryBuilder('event')
      .where({ id })
      .leftJoinAndSelect('event.creator', 'creator') // Incluimos la relación con el creador del evento
      .leftJoinAndSelect('event.suscribers', 'suscribers') // Incluimos la relación con los suscriptores
      .getOne()

    if (!event)
      throw new HttpException(`Evento con ID ${id} no encontrado`, 404)

    return event
  }

  public async getByEmailService(email: string) {
    return await this.userRepository
      .createQueryBuilder('user')
      .select([
        'user.id',
        'user.nickname',
        'user.name',
        'user.password',
        'user.email',
        'user.rol',
        'user.preferences'
      ])
      .where({ email })
      .getOne()
  }

  public async deleteService(id) {
    await this.userRepository.update(id, { isDelete: true })
    return await this.getOneService(id)
  }

  public async updateService(
    id: string,
    updateUserDto: UpdateUserDto
  ): Promise<UserEntity> {
    const user = await this.getOneService(id)

    if (updateUserDto.eventId) {
      const event = await this.eventService.getOneService(updateUserDto.eventId)

      if (event && !user.events.some((e) => e.id === event.id)) {
        user.events = [...user.events, event]
        const newNotification: CreateNotificationDto = {
          recipientId: id,
          eventId: updateUserDto.eventId,
          title: event.title,
          message: `el evento se realizara el dia ${event.dateStart}`,
          date: new Date(),
          eventType: 'Your event type',
          read: false,
          recipient: user
        }

        await this.notificationsService.createService(newNotification)
      }
    }

    if (!user)
      throw new HttpException(`Usuario con ID ${id} no encontrado`, 404)

    for (const key in updateUserDto) {
      if (key === 'password') {
        user[key] = await hash(updateUserDto[key], +process.env.HASH_SALT)
      } else {
        user[key] = updateUserDto[key]
      }
    }

    return await this.userRepository.save(user)
  }

  public async changeUserPreferences(
    id: string,
    userPreferences: JSON
  ): Promise<UserEntity> {
    const user = await this.getOneService(id)
    if (!user) {
      throw new HttpException(`Usuario con ID ${id} no encontrado`, 404)
    }

    user.preferences = userPreferences

    return await this.userRepository.save(user)
  }

  public async addSubscriptionService(
    userId: string,
    eventId: string
  ): Promise<UserEntity> {
    const user = await this.getOneService(userId)
    if (!user) {
      throw new HttpException(`Usuario con ID ${userId} no encontrado`, 404)
    }

    const event = await this.eventService.getOneService(eventId)
    // Cargar la relación de eventos para poder modificarla
    await this.userRepository
      .createQueryBuilder()
      .relation(UserEntity, 'events')
      .of(user)
      .add(event)

    // await this.notificationsService.createService({
    //   recipientId: userId,
    //   eventId: eventId
    // })
    return await this.getOneService(userId) // Recargar el usuario
  }

  public async deleteSubscriptionService(
    userId: string,
    eventId: string
  ): Promise<EventEntity> {
    const user = await this.getOneService(userId)
    if (!user) {
      throw new HttpException(`Usuario con ID ${userId} no encontrado`, 404)
    }

    const event = await this.eventService.getOneService(eventId)
    // Cargar la relación de eventos para poder modificarla
    await this.eventsRepository
      .createQueryBuilder()
      .relation(EventEntity, 'suscribers')
      .of(event)
      .remove(user)

    await this.notificationsService.destroyService({
      recipientId: userId,
      eventId: eventId
    })

    return await this.getOneEvent(eventId) // Recargar el usuario para reflejar los cambios
  }

  public async eventFavoritesService(
    userId: string,
    eventId: string
  ): Promise<UserEntity> {
    const user = await this.getOneService(userId)
    if (!user) {
      throw new HttpException(`Usuario con ID ${userId} no encontrado`, 404)
    }

    const event = await this.eventService.getOneService(eventId)
    if (!event) {
      throw new HttpException(`Evento con ID ${eventId} no encontrado`, 404)
    }

    user.eventFavorites = user.eventFavorites ? user.eventFavorites : []
    const index = user.eventFavorites.findIndex((e) => e === eventId)
    if (index === -1) {
      user.eventFavorites = [...user.eventFavorites, eventId] // Guardar el ID del evento
    } else {
      user.eventFavorites = user.eventFavorites.filter((e) => e !== eventId)
    }

    return await this.userRepository.save(user)
  }

  public async mailOrganizer(id: string) {
    const user = await this.getOneService(id)
    if (!user) {
      throw new HttpException(`Usuario con ID ${id} no encontrado`, 404)
    } else {
      try {
        await this.sendMailsService.sendOrganizerNotification(user.email)
      } catch (error) {
        console.error(error)
      }
    }
  }

  public async findOneByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { email } })
    if (!user) {
      throw new HttpException(`Usuario con ID ${email} no encontrado`, 404)
    }
    return user
  }
}
