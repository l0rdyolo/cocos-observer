System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Color, director, Sprite, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, ColorProvider;

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

      _export("ColorProvider", ColorProvider = (_dec = ccclass("ColorProvider"), _dec2 = property([Color]), _dec(_class = (_class2 = (_class3 = class ColorProvider extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "colors", _descriptor, this);
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

        changeColor(type, node) {
          const sprite = node.getComponent(Sprite);

          if (sprite) {// sprite.color = ColorProvider.getInstance().getColor(type);
          } else {
            console.log("wtf?  sprite is not fo");
          }
        }

      }, _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "colors", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0cee55bb1083911b9f2fd7f0f2e62a7458418861.js.map