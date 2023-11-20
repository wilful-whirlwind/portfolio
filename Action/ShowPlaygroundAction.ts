import {Action} from "./Action.ts";
import Playground from "../Front/playground/playground.tsx";
import { renderToString } from "preact-render-to-string";

export class ShowPlaygroundAction extends Action {
    public validate() {
    }

    public execute() {
        this.validate();
        let playground = new Playground();
        return new Response(renderToString(playground.render()), {
            status: 200,
            headers: {
                "content-type": "text/html; charset=utf-8",
            },
        });
    }
}