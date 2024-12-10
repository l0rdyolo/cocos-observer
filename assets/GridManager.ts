
import { _decorator, Component, Node, Prefab, instantiate, Vec3, UITransform, Sprite, Color } from 'cc';
import { Cell } from './Cell';
const { ccclass, property } = _decorator;

@ccclass('GridManager')
export class GridManager extends Component {
    @property(Prefab)
    public cellPrefab: Prefab = null;

    @property(Node)
    public parentNode: Node = null;

    @property
    public levelConfig: number[][] = [
        [0, 1, 2, 3, 0],
        [1, 2, 3, 0, 1],
        [2, 3, 0, 1, 2],
        [3, 0, 1, 2, 3],
        [0, 1, 2, 3, 0]
    ];

    @property
    public cellSpacing: number = 10;


    start() {
        this.createGrid();
    }

    private createGrid() {
        if (!this.cellPrefab || !this.parentNode) {
            console.error('where the fuck is parent and cellPrefab?');
            return;
        }

        const cellSize = this.cellPrefab.data.getComponent(UITransform).contentSize;
        const startX = -((this.levelConfig[0].length - 1) * (cellSize.width + this.cellSpacing)) / 2;
        const startY = -((this.levelConfig.length - 1) * (cellSize.height + this.cellSpacing)) / 2;

        for (let row = 0; row < this.levelConfig.length; row++) {
            for (let col = 0; col < this.levelConfig[row].length; col++) {
                const type = this.levelConfig[row][col];
                const cellNode = instantiate(this.cellPrefab);
                const cellComp = cellNode.getComponent(Cell)
                cellComp.init(type);
                const posX = startX + col * (cellSize.width + this.cellSpacing);
                const posY = startY + row * (cellSize.height + this.cellSpacing);
                cellNode.setPosition(new Vec3(posX, posY, 0));
                this.parentNode.addChild(cellNode);
            }
        }
    }
}
