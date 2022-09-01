import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';

import { User } from '../entities/user';
import { UserController } from './user.controller';
import { GetUsersHandler } from './queries/handlers/get-users.handler';
import { GetUserHandler } from './queries/handlers/get-user.handler';
import { SaveUserHandler } from './commands/handler/save-user.handler';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CqrsModule],
  controllers: [UserController],
  providers: [GetUsersHandler, GetUserHandler, SaveUserHandler],
})
export class UserModule {}
