import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType() // Decorador para marcar como um tipo GraphQL
export class User {
  @Field((type) => Int) // Define que esse campo é exposto no GraphQL
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}
