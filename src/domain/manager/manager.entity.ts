import { Client } from '../client/client.entity';

export class Manager {
  id: string;
  name: string;
  clients: Client[];

  constructor(name: string) {
    this.name = name;
    this.clients = [];
  }
}
