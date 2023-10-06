import { FrontController } from './Route/FrontController.ts';
import { HttpMethod } from './Route/HttpMethod.ts';

const handler = async (_request: Request): Promise<Response> => {

    const url = _request.url;
    let urlParseArray = url.replace("http://", "").replace("https://", "").split("/");
    urlParseArray[0] = "";
    let method = _request.method;
    const res= new FrontController(urlParseArray.join("/"), new HttpMethod("GET"));
    return res.execute();
};

Deno.serve(handler);
