System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, ColorProvider;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "943efdt+lpEKYgemdLgE7Fg", "ColorProvider", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ColorProvider", ColorProvider = (_dec = ccclass('ColorProvider'), _dec(_class = class ColorProvider extends Component {
        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d2d75f6702c97b453ec6d85f0720d5e63c0a53e8.js.map