import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContactInput } from './dto/create-contact.input';
import { UpdateContactInput } from './dto/update-contact.input';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async create(createContactInput: CreateContactInput) {
    return await this.prisma.contact.create({
      data: {
        firstName: createContactInput.firstName,
        lastName: createContactInput.lastName,
        nickName: createContactInput.nickName,
        address: createContactInput.address,
        phoneNumbers: createContactInput.phoneNumbers,
        photo: createContactInput.photo,
      },
    });
  }

  findAll() {
    return this.prisma.contact.findMany({
      orderBy: [
        {
          nickName: 'desc',
        },
        {
          firstName: 'desc',
        },
        {
          lastName: 'desc',
        },
      ],
    });
  }

  findOne(id: number) {
    return this.prisma.contact.findUnique({ where: { id } });
  }

  update(id: number, updateContactInput: UpdateContactInput) {
    return this.prisma.contact.update({
      where: { id },
      data: {
        firstName: updateContactInput.firstName,
        lastName: updateContactInput.lastName,
        nickName: updateContactInput.nickName,
        address: updateContactInput.address,
        phoneNumbers: updateContactInput.phoneNumbers,
        photo: updateContactInput.photo,
      },
    });
  }

  remove(id: number) {
    return this.prisma.contact.delete({ where: { id } });
  }
}
