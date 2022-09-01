import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetUsersQuery } from './queries/impl/get-users.query';

@Controller('user')
export class UserController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('all')
  async getAll() {
    return await this.queryBus.execute(new GetUsersQuery());
  }
}
