import {
  _decorator,
  Component,
  input,
  Input,
  EventKeyboard,
  KeyCode,
} from "cc";
const { ccclass, property } = _decorator;
import { ForceMovement } from "./ForceMovement";
import { VelocityMovements } from "./VelocityMovements";
import { ImpulseMovements } from "./ImpulseMovements";
import { PositionMovements } from "./PositionMovement";
import { TranslationMovements } from "./TranslationMovements";

@ccclass("Controller")
export class Controller extends Component {
  movements: ForceMovement | VelocityMovements | PositionMovements | ImpulseMovements | TranslationMovements;

  onLoad() {
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    this.movements =
      this.getComponent(ForceMovement) ||
      this.getComponent(VelocityMovements) ||
      this.getComponent(PositionMovements) ||
      this.getComponent(TranslationMovements) ||
      this.getComponent(ImpulseMovements);
  }

  onKeyDown(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.ARROW_LEFT:
        this.movements.moveLeft();
        break;
      case KeyCode.ARROW_RIGHT:
        this.movements.moveRight();
        break;
      case KeyCode.ARROW_UP:
        this.movements.moveUp();
        break;
      case KeyCode.ARROW_DOWN:
        this.movements.moveDown();
        break;
    }
  }

  onKeyUp(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.ARROW_LEFT:
      case KeyCode.ARROW_RIGHT:
      case KeyCode.ARROW_UP:
      case KeyCode.ARROW_DOWN:
        this.movements.stopMoving();
    }
  }
}
