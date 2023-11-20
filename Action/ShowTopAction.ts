import {Action} from "./Action.ts";
import Home from "../Front/top/top.tsx";
import { renderToString } from "preact-render-to-string";
import Top from "../Front/top/top.tsx";

export class ShowTopAction extends Action {
    public validate() {
    }

    public execute() {
        this.validate();
        let home = new Top();
        return new Response(renderToString(home.render()), {
            status: 200,
            headers: {
                "content-type": "text/html; charset=utf-8",
            },
        });
    }
}