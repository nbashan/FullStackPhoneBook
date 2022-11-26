import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactResolver } from './contact.resolver';

@Module({
  providers: [ContactResolver, ContactService]
})
export class ContactModule {}
