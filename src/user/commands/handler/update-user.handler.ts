import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../../entity/user';
import { UpdateUserCommand } from './../impl/update-user.command';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  async execute(command: UpdateUserCommand) {
    const { id, age, first_name, last_name } = command;
    const user = await this.userRepo.findOneByOrFail({ id });
    user.age = age;
    user.first_name = first_name;
    user.last_name = last_name;
    await this.userRepo.save(user);
  }
}
