import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';

import { User } from '../entities/user';
import { UserController } from './user.controller';
import { GetUsersHandler } from './queries/handlers/get-users.handler';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CqrsModule],
  controllers: [UserController],
  providers: [GetUsersHandler],
})
export class UserModule {}
