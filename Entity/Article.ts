import { Entity } from "./Entity.ts";

export class Article extends Entity {
    private author: string;
    private blogSite: string;

    constructor(author: string, blogSite: string) {
        super();
        this.author = author;
        this.blogSite = blogSite;
    }

    public getAuthor() : string {
        return this.author;
    }

    public getBlogSite() : string {
        return this.blogSite;
    }
}