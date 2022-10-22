import { _decorator, Component, Node, Toggle, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Globals')
export class Globals extends Component {
    static updateInLoop: boolean = false;

    chaneUpdateInLoop(e: Toggle) {
        Globals.updateInLoop = e.isChecked;
    }

    restartScene() {
        director.loadScene("Main");
    }
}

