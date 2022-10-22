export interface MovementsInterface {
    start(): void;
    moveLeft(): void;
    moveRight(): void;
    stopMoving(): void;
    moveUp(): void;
    moveDown(): void;
    update(deltaTime: number): void;

}