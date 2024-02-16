import { PartialType } from '@nestjs/mapped-types';
import { CreateJsonwebtokenDto } from './create-jsonwebtoken.dto';

export class UpdateJsonwebtokenDto extends PartialType(CreateJsonwebtokenDto) {}
