import {Action} from "./Action.ts";
import {html} from "../Front/top/top.tsx";

export class ShowTopAction extends Action {
    public validate() {
    }

    public execute() {
        this.validate();
        return new Response(html, {
            status: 200,
            headers: {
                "content-type": "text/html; charset=utf-8",
            },
        });
    }
}