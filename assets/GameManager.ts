import { _decorator, Component, Node } from 'cc';
import { EventSystem } from './EventSystem';
import { Events } from './Events';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    start() {
        this.node.on(Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    }

    private onMouseDown() {
        EventSystem.getInstance().emit(Events.PerformAction);
    }

    onDestroy() {
        this.node.off(Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    }

    checkNeighbors(){
        
    }
}
