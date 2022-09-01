import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../entities/user';
import { Repository } from 'typeorm';
import { GetUsersQuery } from '../impl/get-users.query';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
  constructor(@InjectRepository(User) private UserRepo: Repository<User>) {}
  async execute(query: GetUsersQuery): Promise<User[]> {
    return await this.UserRepo.find();
  }
}
