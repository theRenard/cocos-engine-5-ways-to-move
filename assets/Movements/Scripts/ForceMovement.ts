import { _decorator, Component, Node, RigidBody2D, Vec2 } from "cc";
const { ccclass, property } = _decorator;
import { Globals } from "./Globals";

@ccclass("ForceMovement")
export class ForceMovement extends Component {
  rigidBody?: RigidBody2D;
  isMovingLeft: boolean = false;
  isMovingRight: boolean = false;

  get updateInLoop() {
    return Globals.updateInLoop;
  };

  start() {
    console.log("ForceMovement start");
    this.rigidBody = this.getComponent(RigidBody2D);
  }

  moveLeft() {
    this.isMovingLeft = true;
    if (!this.updateInLoop) this.applyForceLeft(100);
  }

  moveRight() {
    this.isMovingRight = true;
    if (!this.updateInLoop) this.applyForceRight(100);
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

  applyForceRight(ammount) {
    console.log("moveRight");
    this.rigidBody.applyForceToCenter(new Vec2(ammount, 0), true);
  }

  applyForceLeft(ammount) {
    console.log("moveLeft");
    this.rigidBody.applyForceToCenter(new Vec2(-ammount, 0), true);
  }

  update(deltaTime: number) {
    if (this.updateInLoop) {
      if (this.isMovingLeft) this.applyForceLeft(10);
      if (this.isMovingRight) this.applyForceRight(10);
    }
  }
}
