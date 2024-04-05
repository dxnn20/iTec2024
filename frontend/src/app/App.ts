import {Endpoint} from "./security/endpoint";

export class App {
  name: string;
  status: string;
  endpoint: Endpoint;

  constructor(name: string, status: string, endpoint: Endpoint) {
    this.name = name;
    this.status = status;
    this.endpoint = endpoint;
  }
}
