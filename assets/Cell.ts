import { _decorator, Component, Sprite } from 'cc';
const { ccclass } = _decorator;

@ccclass('Cell')
export class Cell extends Component {
    public type: number = 0;

    public init(type: number){
        this.node.getComponent(Sprite).color
    }
    
    start() {
    
    }


}
