System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Color, Sprite, _dec, _dec2, _class, _class2, _descriptor, _init, _init2, _init3, _init4, _init5, _init6, _init7, _class3, _crd, ccclass, property, ColorProvider;

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

      _export("ColorProvider", ColorProvider = (_dec = ccclass("ColorProvider"), _dec2 = property(Color), _dec(_class = (_class2 = (_class3 = class ColorProvider extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "color1", _descriptor, this);
        }

        static getColor(type) {
          switch (type) {
            // case 0: return this.color1.clone();
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

        static changeColor(type, node) {
          var sprite = node.getComponent(Sprite);

          if (sprite) {
            sprite.color = ColorProvider.getColor(type);
            console.log(node.name, "is changed color");
          } else {
            console.log("wtf?  sprite is not fo");
          }
        }

      }, _class3.color2 = Color.GREEN.clone(), _class3.color3 = Color.BLUE.clone(), _class3.color4 = Color.YELLOW.clone(), _class3.color5 = Color.CYAN.clone(), _class3.color6 = Color.MAGENTA.clone(), _class3.ground = Color.MAGENTA.clone(), _class3.highlight = Color.MAGENTA.clone(), _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "color1", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.RED.clone();
        }
      }), _applyDecoratedDescriptor(_class2, "color2", [property], (_init = Object.getOwnPropertyDescriptor(_class2, "color2"), _init = _init ? _init.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
          return _init;
        }
      }), _class2), _applyDecoratedDescriptor(_class2, "color3", [property], (_init2 = Object.getOwnPropertyDescriptor(_class2, "color3"), _init2 = _init2 ? _init2.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
          return _init2;
        }
      }), _class2), _applyDecoratedDescriptor(_class2, "color4", [property], (_init3 = Object.getOwnPropertyDescriptor(_class2, "color4"), _init3 = _init3 ? _init3.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
          return _init3;
        }
      }), _class2), _applyDecoratedDescriptor(_class2, "color5", [property], (_init4 = Object.getOwnPropertyDescriptor(_class2, "color5"), _init4 = _init4 ? _init4.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
          return _init4;
        }
      }), _class2), _applyDecoratedDescriptor(_class2, "color6", [property], (_init5 = Object.getOwnPropertyDescriptor(_class2, "color6"), _init5 = _init5 ? _init5.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
          return _init5;
        }
      }), _class2), _applyDecoratedDescriptor(_class2, "ground", [property], (_init6 = Object.getOwnPropertyDescriptor(_class2, "ground"), _init6 = _init6 ? _init6.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
          return _init6;
        }
      }), _class2), _applyDecoratedDescriptor(_class2, "highlight", [_dec2], (_init7 = Object.getOwnPropertyDescriptor(_class2, "highlight"), _init7 = _init7 ? _init7.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
          return _init7;
        }
      }), _class2)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a51127a6b482780230b2ddc0bbe008d54a25f04a.js.map