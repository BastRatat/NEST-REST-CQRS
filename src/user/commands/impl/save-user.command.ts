import { IsString, IsInt, IsNotEmpty } from 'class-validator';
export class SaveUserCommand {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsInt()
  @IsNotEmpty()
  age: number;

  constructor(id: number, first_name: string, last_name: string, age: number) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }
}
