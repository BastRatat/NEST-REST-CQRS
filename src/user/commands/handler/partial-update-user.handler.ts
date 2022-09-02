import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../../entity/user';
import { PartialUpdateUserCommand } from './../impl/partial-update-user.command';

@CommandHandler(PartialUpdateUserCommand)
export class PartialUpdateUserHandler
  implements ICommandHandler<PartialUpdateUserCommand>
{
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  async execute(command: PartialUpdateUserCommand) {
    const user = await this.userRepo.findOneByOrFail({ id: command.id });
    await this.userRepo.save({
      ...user,
      ...(command.first_name && { first_name: command.first_name }),
      ...(command.last_name && { last_name: command.last_name }),
      ...(command.age && { age: command.age }),
    });
  }
}
