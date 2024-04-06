import {Endpoint} from "./security/endpoint";

export class App {
  name: string;
  seconds : number;
  status: string = "DOWN";
  endpoint: Endpoint[] = [];
  id: string;

  constructor(name: string = '' , status: string = 'DOWN', endpoint: Endpoint[] = [], id: string = ''){
    this.name = name;
    this.status = status;
    this.endpoint = endpoint;
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public getStatus(): string {
    return this.status;
  }

  public getEndpoint(): Endpoint[] | undefined {
    return this.endpoint;
  }
}
