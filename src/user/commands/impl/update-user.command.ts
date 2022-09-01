export class UpdateUserCommand {
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public age: number,
  ) {}
}
