import {RoutingInfo} from "./RoutingInfo.ts";
import {HttpMethod} from "./HttpMethod.ts";
import ActionList from "./ActionList.ts";


export class FrontController {
    public route: RoutingInfo[];
    public path: string;
    public httpMethod: HttpMethod;

    constructor(path: string, httpMethod: HttpMethod) {
        this.path = path;
        this.route = this.setRoute();
        this.httpMethod = httpMethod;
    }

    public async execute(): Promise<Response> {
        let res = null;
        for (let i = 0; i < this.route.length; i++) {
            if (this.path.indexOf("css") > 0) {
                const css = await Deno.readTextFile("./Resource/assets/css" + this.path);
                return new Response(css, {
                    status: 200,
                    headers: {
                        "content-type": "text/css",
                    },
                });
            }

            if (this.path !== this.route[i].path) {
                continue;
            }
            if (this.httpMethod.val() !== this.route[i].httpMethod.val()) {
                continue;
            }

            const actionName = this.route[i].actionName + "Action";
            const action = new ActionList[actionName]();
            return action.execute();
        }

        return new Response("not found", {
            status: 404,
            headers: {
                "content-type": "application/json",
            },
        });

    }

    private setRoute(): RoutingInfo[] {
        let res = [];
        res.push(new RoutingInfo("/", new HttpMethod("GET"), "ShowTop"));
        return res;
    }
}