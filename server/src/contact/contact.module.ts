import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactResolver } from './contact.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ContactResolver, ContactService, PrismaService],
})
export class ContactModule {}
