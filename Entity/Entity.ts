export abstract class Entity {
    private createdAt: number;
    private updatedAt: number;
    private deletedAt: Date|null;

    protected constructor() {
        this.createdAt = Date.now();
        this.updatedAt = Date.now();
        this.deletedAt = null;
    }
}