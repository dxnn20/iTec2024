import {Endpoint} from "./security/endpoint";

export class App {
  name: string;
  status: string;
  endpoint: Endpoint;
  id: string;

  constructor(name: string, status: string, endpoint: Endpoint, id: string) {
    this.name = name;
    this.status = status;
    this.endpoint = endpoint;
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }
}
