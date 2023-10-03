import { serve } from "https://deno.land/std@0.202.0/http/server.ts";

const handler = async (_request: Request): Promise<Response> => {

    return new Response("Hallo Deno 7", {
        status: 200,
        headers: {
            "content-type": "application/json",
        },
    });
};

serve(handler);