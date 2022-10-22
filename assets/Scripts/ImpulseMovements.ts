import { _decorator, Component, Node, RigidBody2D, Vec2 } from "cc";
const { ccclass, property } = _decorator;
import { Globals } from "./Globals";

@ccclass("ImpulseMovements")
export class ImpulseMovements extends Component {
  rigidBody?: RigidBody2D;
  isMovingLeft: boolean = false;
  isMovingRight: boolean = false;

  get updateInLoop() {
    return Globals.updateInLoop;
  };

  start() {
    console.log("ImpulseMovements start");
    this.rigidBody = this.getComponent(RigidBody2D);
  }

  moveLeft() {
    this.isMovingLeft = true;
    if (!this.updateInLoop) this.applyImpulseLeft(5);
  }

  moveRight() {
    this.isMovingRight = true;
    if (!this.updateInLoop) this.applyImpulseRight(5);
  }

  stopMoving() {
    this.isMovingLeft = false;
    this.isMovingRight = false;
    console.log("stopMoving");
  }

  moveUp() {
    console.log("moveUp");
  }

  moveDown() {
    console.log("moveDown");
  }

  applyImpulseRight(ammount) {
    console.log("moveRight");
    this.rigidBody.applyLinearImpulseToCenter(new Vec2(ammount, 0), true);
  }

  applyImpulseLeft(ammount) {
    console.log("moveLeft");
    this.rigidBody.applyLinearImpulseToCenter(new Vec2(-ammount, 0), true);
  }

  update(deltaTime: number) {
    if (this.updateInLoop) {
      if (this.isMovingLeft) this.applyImpulseLeft(0.5);
      if (this.isMovingRight) this.applyImpulseRight(0.5);
    }
  }
}
