import { IsString, IsInt } from 'class-validator';

export class PartialUpdateUserCommand {
  @IsInt()
  public id: number;

  @IsString()
  public first_name: string | undefined;

  @IsString()
  public last_name: string | undefined;

  @IsInt()
  public age: number | undefined;

  constructor(
    id: number,
    first_name?: string | undefined,
    last_name?: string | undefined,
    age?: number | undefined,
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }
}
