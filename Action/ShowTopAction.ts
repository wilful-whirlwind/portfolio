import {Action} from "./Action.ts";

export class ShowTopAction extends Action {
    public validate() {
    }

    public execute() {
        this.validate();
        return new Response("this is top page.", {
            status: 200,
            headers: {
                "content-type": "application/json",
            },
        });
    }
}