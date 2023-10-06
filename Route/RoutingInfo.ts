import {HttpMethod} from "./HttpMethod.ts";

export class RoutingInfo {
    public path: string;
    public httpMethod: HttpMethod
    public actionName: string

    constructor (
        controllerName: string,
        httpMethod: HttpMethod,
        actionName: string
    ) {
        this.path = controllerName;
        this.httpMethod = httpMethod;
        this.actionName = actionName;
    }
}