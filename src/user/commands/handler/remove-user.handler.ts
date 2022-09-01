import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../../entity/user';
import { RemoveUserCommand } from '../impl/remove-user.command';

@CommandHandler(RemoveUserCommand)
export class RemoveUserHandler implements ICommandHandler<RemoveUserCommand> {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  async execute(command: RemoveUserCommand) {
    await this.userRepo.delete({ id: command.id });
  }
}
