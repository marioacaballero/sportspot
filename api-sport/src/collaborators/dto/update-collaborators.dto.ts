import { PartialType } from '@nestjs/mapped-types'
import { CreateCollaboratorDto } from './create-collaborators.dto'

export class UpdateCollaboratorDto extends PartialType(CreateCollaboratorDto) {}
