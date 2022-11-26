import { Optional } from '@nestjs/common';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Contact {
  @Field(() => Int)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  nickName: string;

  @Field()
  address: string;

  @Field(() => [String])
  phoneNumbers: string[];

  @Field()
  photo: string;
}
