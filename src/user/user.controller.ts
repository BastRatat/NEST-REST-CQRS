import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { GetUsersQuery } from './queries/impl/get-users.query';
import { GetUserQuery } from './queries/impl/get-user.query';
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

  @Get(':id')
  async getOne(@Param() params: { id: number }) {
    return await this.queryBus.execute(new GetUserQuery(params.id));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() newUser: SaveUserCommand) {
    return await this.commandBus.execute(newUser);
  }
}
