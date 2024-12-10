import { _decorator, Component, Node, Sprite } from 'cc';
import { ColorProvider } from './ColorProvider';
import { EventSystem } from './EventSystem';
import { Events } from './Events';
const { ccclass } = _decorator;

@ccclass('Cell')
export class Cell extends Component {
    public type: number = 0;

    public init(type: number) {
        this.type = type;
        ColorProvider.getInstance().changeColor(type, this.node);
        this.registerEvents();
    }

    private registerEvents() {
        EventSystem.getInstance().on(Events.PerformAction, this.onPerformAction.bind(this), this);
    }

    private onPerformAction(actionType: string) {
        console.log(`Cell at ${this.node.name} performing action: ${actionType}`);
    }

    onDestroy() {
        EventSystem.getInstance().off(Events.PerformAction, this.onPerformAction.bind(this), this);
    }
}
