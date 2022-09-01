import { Controller, Body, Get, Post, HttpCode } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { GetUsersQuery } from './queries/impl/get-users.query';
import { SaveUserCommand } from './commands/impl/save-user.command';

@Controller('user')
export class UserController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get()
  async getAll() {
    return await this.queryBus.execute(new GetUsersQuery());
  }

  @Post()
  @HttpCode(201)
  async createUser(@Body() newUser: SaveUserCommand) {
    return await this.commandBus.execute(newUser);
  }
}
