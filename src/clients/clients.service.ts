import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  create(createClientDto: CreateClientDto) {
    return 'This action adds a new client, estoy probando,aqui se llama  a post';
  }

  findAll() {
    return `Estamos probando el metodo Get para Clients... Aqui devolvemos para todo los clientes`;
  }

  findOne(id: number) {
    return `Este metodo Get + parametro #${id} devolvera un cliente #100`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
