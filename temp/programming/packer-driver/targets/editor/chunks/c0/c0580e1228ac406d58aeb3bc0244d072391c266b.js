System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Color, director, Sprite, _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3, _crd, ccclass, property, ColorProvider;

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
      Color = _cc.Color;
      director = _cc.director;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "943efdt+lpEKYgemdLgE7Fg", "ColorProvider", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Color', 'director', 'Node', 'MeshRenderer', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ColorProvider", ColorProvider = (_dec = ccclass("ColorProvider"), _dec(_class = (_class2 = (_class3 = class ColorProvider extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "color1", _descriptor, this);

          _initializerDefineProperty(this, "color2", _descriptor2, this);

          _initializerDefineProperty(this, "color3", _descriptor3, this);

          _initializerDefineProperty(this, "color4", _descriptor4, this);

          _initializerDefineProperty(this, "color5", _descriptor5, this);

          _initializerDefineProperty(this, "color6", _descriptor6, this);

          _initializerDefineProperty(this, "ground", _descriptor7, this);

          _initializerDefineProperty(this, "highlight", _descriptor8, this);
        }

        onLoad() {
          if (ColorProvider._instance === null) {
            ColorProvider._instance = this;
            director.addPersistRootNode(this.node);
          } else {
            this.destroy();
            console.warn("Only one instance of ColorProvider is allowed.");
          }
        }

        static getInstance() {
          if (!ColorProvider._instance) {
            console.error("ColorProvider instance is not yet initialized.");
          }

          return ColorProvider._instance;
        }

        getColor(type) {
          switch (type) {
            case 0:
              return this.color1.clone();

            case 1:
              return this.color2.clone();

            case 2:
              return this.color3.clone();

            case 3:
              return this.color4.clone();

            case 4:
              return this.color5.clone();

            case 5:
              return this.color6.clone();

            case 6:
              return this.ground.clone();

            case 7:
              return this.highlight.clone();

            default:
              return Color.WHITE.clone();
          }
        }

        changeColor(type, node) {
          const sprite = node.getComponent(Sprite);

          if (sprite) {
            sprite.color = ColorProvider.getInstance().getColor(type);
          } else {
            console.log("wtf?  sprite is not fo");
          }
        }

      }, _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "color1", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Color.RED.clone();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "color2", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Color.GREEN.clone();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "color3", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Color.BLUE.clone();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "color4", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Color.YELLOW.clone();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "color5", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Color.CYAN.clone();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "color6", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Color.MAGENTA.clone();
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "ground", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Color.MAGENTA.clone();
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "highlight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Color.MAGENTA.clone();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c0580e1228ac406d58aeb3bc0244d072391c266b.js.map