import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { GetUsersQuery } from '../queries/impl/get-users.query';
import { GetUserQuery } from '../queries/impl/get-user.query';
import { SaveUserCommand } from '../commands/impl/save-user.command';
import { RemoveUserCommand } from '../commands/impl/remove-user.command';
import { UpdateUserCommand } from '../commands/impl/update-user.command';

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

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeUser(@Param() params: { id: number }) {
    return await this.commandBus.execute(new RemoveUserCommand(params.id));
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async updateUser(
    @Body()
    updatedFields: { first_name: string; last_name: string; age: number },
    @Param() params: { id: number },
  ) {
    const { first_name, last_name, age } = updatedFields;
    return await this.commandBus.execute(
      new UpdateUserCommand(params.id, first_name, last_name, age),
    );
  }
}
