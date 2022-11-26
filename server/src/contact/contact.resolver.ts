import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ContactService } from './contact.service';
import { Contact } from './entities/contact.entity';
import { CreateContactInput } from './dto/create-contact.input';
import { UpdateContactInput } from './dto/update-contact.input';

@Resolver(() => Contact)
export class ContactResolver {
  constructor(private readonly contactService: ContactService) {}

  @Mutation(() => Contact)
  createContact(
    @Args('createContactInput') createContactInput: CreateContactInput,
  ) {
    return this.contactService.create(createContactInput);
  }

  @Query(() => [Contact], { name: 'contacts' })
  findAll() {
    return this.contactService.findAll();
  }

  @Query(() => Contact, { name: 'contact' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.contactService.findOne(id);
  }

  @Mutation(() => Contact)
  updateContact(
    @Args('updateContactInput') updateContactInput: UpdateContactInput,
  ) {
    return this.contactService.update(
      updateContactInput.id,
      updateContactInput,
    );
  }

  @Mutation(() => Contact)
  removeContact(@Args('id', { type: () => Int }) id: number) {
    return this.contactService.remove(id);
  }
}
