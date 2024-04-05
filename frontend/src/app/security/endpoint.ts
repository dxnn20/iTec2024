export class Endpoint {
    path: string;
    method: string;
    status: string;
    id: number;
    seconds: number;
    constructor(path: string, method: string, status: string, id: number, seconds: number) {
        this.path = path;
        this.method = method;
        this.status = status;
        this.id = id;
        this.seconds = seconds;
    }
}
