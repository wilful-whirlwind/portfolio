import {Action} from "./Action.ts";
import Home from "../Front/top/top.tsx";
import { renderToString } from "preact-render-to-string";

export class ShowTopAction extends Action {
    public validate() {
    }

    public execute() {
        this.validate();
        let home = new Home();
        return new Response(renderToString(home.render()), {
            status: 200,
            headers: {
                "content-type": "text/html; charset=utf-8",
            },
        });
    }
}