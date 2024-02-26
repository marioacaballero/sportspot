import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, VerifyCallback, Profile } from 'passport-google-oauth20'

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.get<string>('GOOGLE_APIID'),
      clientSecret: configService.get<string>('GOOGLE_APIKEY'),
      callbackURL: 'http://localhost:3000/auth/google/callback', // La misma que configuraste en Google Developer Console
      passReqToCallback: true,
      scope: ['profile', 'email'] // Ámbitos que deseas solicitar al usuario
    })
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback
  ): Promise<any> {
    const { name, emails } = profile
    const user = {
      email: emails[0].value,
      name: name.givenName + ' ' + name.familyName,
      accessToken
    }
    done(null, user)
  }
}
