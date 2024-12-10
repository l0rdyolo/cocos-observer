import { _decorator, Component, Sprite } from 'cc';
import { ColorProvider } from './ColorProvider';
const { ccclass } = _decorator;

@ccclass('Cell')
export class Cell extends Component {
    public type: number = 0;

    public init(type: number){
        ColorProvider.changeColor(type,this.node);
    }
    
    start() {
    
    }


}
