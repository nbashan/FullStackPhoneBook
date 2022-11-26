import { CreateContactInput } from './create-contact.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Optional } from '@nestjs/common';

@InputType()
export class UpdateContactInput extends PartialType(CreateContactInput) {
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
