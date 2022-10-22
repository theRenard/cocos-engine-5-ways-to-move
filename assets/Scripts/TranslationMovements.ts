import { _decorator, Component, Node, RigidBody2D, Vec2, Vec3, NodeSpace } from "cc";
import { Globals } from "./Globals";
const { ccclass, property } = _decorator;

@ccclass("TranslationMovements")
export class TranslationMovements extends Component {
  rigidBody?: RigidBody2D;
  isMovingLeft: boolean = false;
  isMovingRight: boolean = false;

  get updateInLoop() {
    return Globals.updateInLoop;
  };

  @property worldSpace: boolean = false;

  get worldPosition() {
    return this.worldSpace ? NodeSpace.WORLD : NodeSpace.LOCAL;
  }

  start() {
    console.log("TranslationMovements start");
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
    this.node.translate(new Vec3(ammount, 0), this.worldPosition);
  }

  applyPositionLeft(ammount) {
    console.log("moveLeft");
    this.node.translate(new Vec3(-ammount, 0), this.worldPosition);
  }

  update(deltaTime: number) {
    if (this.updateInLoop) {
      if (this.isMovingLeft) this.applyPositionLeft(100 * deltaTime);
      if (this.isMovingRight) this.applyPositionRight(100 * deltaTime);
    }
  }
}
