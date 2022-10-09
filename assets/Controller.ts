import {
  _decorator,
  Component,
  Vec3,
  input,
  Input,
  EventKeyboard,
  KeyCode,
  Animation,
  RigidBody2D,
  Vec2,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("Controller")
export class Controller extends Component {
  @property walkSpeed = 1;
  xAmmount: number = 0;
  yAmmount: number = 0;
  speed: number = 1;
  rigidBody: RigidBody2D;

  onLoad() {
    // PhysicsSystem2D.instance.debugDrawFlags =
    //   EPhysics2DDrawFlags.Aabb |
    //   EPhysics2DDrawFlags.Pair |
    //   EPhysics2DDrawFlags.CenterOfMass |
    //   EPhysics2DDrawFlags.Joint |
    //   EPhysics2DDrawFlags.Shape;

    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    this.rigidBody = this.node.getComponent(RigidBody2D);
  }

  onKeyDown(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.ARROW_LEFT:
        this.xAmmount = -this.walkSpeed;
        break;
      case KeyCode.ARROW_RIGHT:
        this.xAmmount = this.walkSpeed;
        break;
      case KeyCode.KEY_A:
        break;
      case KeyCode.KEY_D:
        break;
      case KeyCode.ARROW_UP:
        // this.yAmmount = 10;
        this.rigidBody.applyForceToCenter(new Vec2(0, 1000), false);
        break;
        case KeyCode.ARROW_DOWN:
            this.rigidBody.applyLinearImpulseToCenter(new Vec2(0, 100), false);
            // this.yAmmount = -1;
            break;
        }
    }

    onKeyUp(event: EventKeyboard) {
        this.xAmmount = 0;
        this.yAmmount = 0;
  }
  update(deltaTime: number) {

    // set velocity
    const actualVelocity = this.rigidBody.linearVelocity;
    this.rigidBody.linearVelocity = new Vec2( actualVelocity.x + this.xAmmount, actualVelocity.y + this.yAmmount);
  }
}
