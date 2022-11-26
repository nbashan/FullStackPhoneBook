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

  @Field(() => String, { defaultValue: 'no nickName' })
  nickName: string;

  @Field()
  address: string;

  @Field((type) => [String], { defaultValue: [] }) // nullable: false makes no difference at all
  phoneNumbers: string[];

  @Field(() => String, { defaultValue: 'no picture' })
  photo: string;
}
