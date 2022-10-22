import { _decorator, Component, Node, RigidBody2D, Vec2 } from "cc";
import { Globals } from "./Globals";
const { ccclass, property } = _decorator;


@ccclass("VelocityMovements")
export class VelocityMovements extends Component {
  rigidBody?: RigidBody2D;
  isMovingLeft: boolean = false;
  isMovingRight: boolean = false;

  get updateInLoop() {
    return Globals.updateInLoop;
  };

  start() {
    console.log("VelocityMovements start");
    this.rigidBody = this.getComponent(RigidBody2D);
  }

  moveLeft() {
    this.isMovingLeft = true;
    if (!this.updateInLoop) this.applyLinearVelocityLeft(10);
  }

  moveRight() {
    this.isMovingRight = true;
    if (!this.updateInLoop) this.applyLinearVelocityRight(10);
  }

  stopMoving() {
    this.isMovingLeft = false;
    this.isMovingRight = false;
    if (!this.updateInLoop) this.removeLinearVelocity();
}

moveUp() {
    console.log("moveUp");
  }

  moveDown() {
    console.log("moveDown");
}

applyLinearVelocityRight(ammount) {
    console.log("moveRight");
    const velocity = this.rigidBody.linearVelocity;
    this.rigidBody.linearVelocity = new Vec2(velocity.x + ammount, velocity.y);
}

applyLinearVelocityLeft(ammount) {
    console.log("moveLeft");
    const velocity = this.rigidBody.linearVelocity;
    this.rigidBody.linearVelocity = new Vec2(velocity.x - ammount, velocity.y);
}

removeLinearVelocity() {
    console.log("stopMoving");
    const velocity = this.rigidBody.linearVelocity;
    this.rigidBody.linearVelocity = new Vec2(0, velocity.y);
}

  update(deltaTime: number) {
    if (this.updateInLoop) {
      if (this.isMovingLeft) this.applyLinearVelocityLeft(10 * deltaTime);
      if (this.isMovingRight) this.applyLinearVelocityRight(10 * deltaTime);
      // if (!this.isMovingLeft && !this.isMovingRight) this.removeLinearVelocity();
    }
  }
}
