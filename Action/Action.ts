export abstract class Action {
    public abstract validate(): void;
    public abstract execute(): Response;
}