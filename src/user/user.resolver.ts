import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.model';

@Resolver((of) => User) // Define que este resolver lida com o tipo User
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [User]) // Define a query `users`, que retorna uma lista de usuários
  users(): User[] {
    return this.userService.findAll();
  }
}
