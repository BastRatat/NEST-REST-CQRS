import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';

import { User } from './entity/user';
import { UserController } from './controller/user.controller';
import { GetUsersHandler } from './queries/handlers/get-users.handler';
import { GetUserHandler } from './queries/handlers/get-user.handler';
import { SaveUserHandler } from './commands/handler/save-user.handler';
import { RemoveUserHandler } from './commands/handler/remove-user.handler';
import { UpdateUserHandler } from './commands/handler/update-user.handler';
import { PartialUpdateUserHandler } from './commands/handler/partial-update-user.handler';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CqrsModule],
  controllers: [UserController],
  providers: [
    GetUsersHandler,
    GetUserHandler,
    SaveUserHandler,
    RemoveUserHandler,
    UpdateUserHandler,
    PartialUpdateUserHandler,
  ],
})
export class UserModule {}
