import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../../../entities/user';
import { SaveUserCommand } from '../impl/save-user.command';

@CommandHandler(SaveUserCommand)
export class SaveUserHandler implements ICommandHandler<SaveUserCommand> {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  async execute(command: SaveUserCommand) {
    const { id, age, first_name, last_name } = command;
    const user = new User();
    user.id = id;
    user.age = age;
    user.first_name = first_name;
    user.last_name = last_name;
    await this.userRepo.insert(user);
  }
}
