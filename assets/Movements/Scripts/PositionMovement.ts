import { _decorator, Component, Node, RigidBody2D, Vec2, Vec3, NodeSpace } from "cc";
import { Globals } from "./Globals";

const { ccclass, property } = _decorator;

@ccclass("PositionMovements")
export class PositionMovements extends Component {
  rigidBody?: RigidBody2D;
  isMovingLeft: boolean = false;
  isMovingRight: boolean = false;
  get updateInLoop() {
    return Globals.updateInLoop;
  };

  start() {
    console.log("PositionMovements start");
    this.rigidBody = this.getComponent(RigidBody2D);
  }

  moveLeft() {
    this.isMovingLeft = true;
    if (!this.updateInLoop) this.applyPositionLeft(10);
  }

  moveRight() {
    this.isMovingRight = true;
    if (!this.updateInLoop) this.applyPositionRight(10);
  }

  stopMoving() {
    this.isMovingLeft = false;
    this.isMovingRight = false;
  }

  moveUp() {
    console.log("moveUp");
  }

  moveDown() {
    console.log("moveDown");
  }

  applyPositionRight(ammount) {
    console.log("moveRight");
    const position = this.node.getPosition();
    this.node.setPosition(new Vec3(position.x + ammount, position.y));
  }

  applyPositionLeft(ammount) {
    console.log("moveLeft");
    const position = this.node.getPosition();
    this.node.setPosition(new Vec3(position.x - ammount, position.y));
  }

  update(deltaTime: number) {
    if (this.updateInLoop) {
      if (this.isMovingLeft) this.applyPositionLeft(100 * deltaTime);
      if (this.isMovingRight) this.applyPositionRight(100 * deltaTime);
    }
  }
}
