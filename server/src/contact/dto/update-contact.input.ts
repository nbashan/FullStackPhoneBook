import { CreateContactInput } from './create-contact.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContactInput extends PartialType(CreateContactInput) {
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
