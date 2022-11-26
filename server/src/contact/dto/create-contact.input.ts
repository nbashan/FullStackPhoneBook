import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateContactInput {
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
