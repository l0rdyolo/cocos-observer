System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, instantiate, Vec3, UITransform, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, GridManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eea26cVpJNEGJqZyBLaREfp", "GridManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'Vec3', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridManager", GridManager = (_dec = ccclass('GridManager'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = class GridManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "cellPrefab", _descriptor, this);

          _initializerDefineProperty(this, "parentNode", _descriptor2, this);

          _initializerDefineProperty(this, "gridSize", _descriptor3, this);

          _initializerDefineProperty(this, "cellSpacing", _descriptor4, this);
        }

        start() {
          this.createGrid();
        }

        createGrid() {
          if (!this.cellPrefab || !this.parentNode) {
            console.error('where the fuck is parent and cellPrefab?');
            return;
          }

          var cellSize = this.cellPrefab.data.getComponent(UITransform).contentSize;
          var startX = -((this.gridSize - 1) * (cellSize.width + this.cellSpacing)) / 2;
          var startY = -((this.gridSize - 1) * (cellSize.height + this.cellSpacing)) / 2;

          for (var row = 0; row < this.gridSize; row++) {
            for (var col = 0; col < this.gridSize; col++) {
              var cellNode = instantiate(this.cellPrefab);
              var posX = startX + col * (cellSize.width + this.cellSpacing);
              var posY = startY + row * (cellSize.height + this.cellSpacing);
              cellNode.setPosition(new Vec3(posX, posY, 0));
              this.parentNode.addChild(cellNode);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "parentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gridSize", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cellSpacing", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=507d48fda9fa9a73881be6cee0ce66ec08d07b8b.js.map