import { _decorator, Component, Node, PhysicsSystem2D, EPhysics2DDrawFlags } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Debug')
export class Debug extends Component {

    @property debug = false;

    onLoad() {
        if (this.debug) {
        PhysicsSystem2D.instance.debugDrawFlags =
          EPhysics2DDrawFlags.Aabb |
          EPhysics2DDrawFlags.Pair |
          EPhysics2DDrawFlags.CenterOfMass |
          EPhysics2DDrawFlags.Joint |
          EPhysics2DDrawFlags.Shape;
      }
    }
}

