System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, _dec, _class, _crd, ccclass, Cell;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd6f02NFEtKPKlfg16s1Vpd", "Cell", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Sprite']);

      ({
        ccclass
      } = _decorator);

      _export("Cell", Cell = (_dec = ccclass('Cell'), _dec(_class = class Cell extends Component {
        constructor() {
          super(...arguments);
          this.type = 0;
        }

        init(type) {
          this.node.getComponent(Sprite).color;
        }

        start() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2eb047982fe24610e9132752cc0effee37294b62.js.map