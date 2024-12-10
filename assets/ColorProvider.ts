import { _decorator, Component, Color, director , Node, MeshRenderer, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass("ColorProvider")
export class  ColorProvider extends Component {

    @property
    public static color1: Color = Color.RED.clone();

    @property
    public static color2: Color = Color.GREEN.clone();

    @property
    public static color3: Color = Color.BLUE.clone();

    @property
    public static color4: Color = Color.YELLOW.clone();

    @property
    public static color5: Color = Color.CYAN.clone();

    @property
    public static color6: Color = Color.MAGENTA.clone();

    @property
    public static ground: Color = Color.MAGENTA.clone();
    
    @property
    public static highlight: Color = Color.MAGENTA.clone();
    



    public static getColor(type: number): Color {
        switch (type) {
            case 0: return this.color1.clone();
            case 1: return this.color2.clone();
            case 2: return this.color3.clone();
            case 3: return this.color4.clone();
            case 4: return this.color5.clone();
            case 5: return this.color6.clone();
            case 6: return this.ground.clone();
            case 7: return this.highlight.clone();
            default: return Color.WHITE.clone();
        }
    }

    public static changeColor(type : number , node : Node){
        const sprite = node.getComponent(Sprite)
        if(sprite){
            sprite.color = ColorProvider.getColor(type);
            console.log(node.name , "is changed color");
            
        }
        else{
            console.log("wtf?  sprite is not fo");
        }
    }
}