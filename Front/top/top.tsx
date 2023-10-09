/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, renderToString } from "mod";

// Only functional components are supported
export function HelloWorld({ name }: {name: string}) {
    return <h1>Hello {name}!</h1>;
}

// However, the components may be asynchronous
export async function File({ path }: { path: string }) {
    return <p>{await Deno.readTextFile(path)}</p>;
}

export const html = await renderToString(
    <>
        <HelloWorld name="Deno" />
        <File path="README.md" />
    </>
);
console.log(html);