export class Endpoint {
    app_id:number;
    path: string;
    method: string;
    status: string;
    id: number;
    duration: number;
    constructor(path: string = '', method: string='', status: string='', id: number= 0, duration: number=0) {
        this.path = path;
        this.method = method;
        this.status = status;
        this.id = id;
        this.duration = duration;
    }
}
