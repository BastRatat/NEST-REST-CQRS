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
}
