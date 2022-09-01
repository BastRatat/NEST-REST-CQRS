import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from '../../entity/user';
import { Repository } from 'typeorm';
import { GetUserQuery } from '../impl/get-user.query';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  constructor(@InjectRepository(User) private UserRepo: Repository<User>) {}
  async execute(query: GetUserQuery): Promise<User> {
    return await this.UserRepo.findOneBy({ id: query.id });
  }
}
