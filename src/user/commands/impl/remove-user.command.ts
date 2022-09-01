import { IsInt, IsNotEmpty } from 'class-validator';

export class RemoveUserCommand {
  @IsInt()
  @IsNotEmpty()
  public id: number;
  constructor(id: number) {
    this.id = id;
  }
}
