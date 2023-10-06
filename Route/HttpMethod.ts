export class HttpMethod {
    public httpMethod: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

    constructor(httpMethod: "GET" | "POST" | "PUT" | "DELETE" | "PATCH") {
        this.httpMethod = httpMethod;
    }

    public val(): string {
        return this.httpMethod;
    }
}