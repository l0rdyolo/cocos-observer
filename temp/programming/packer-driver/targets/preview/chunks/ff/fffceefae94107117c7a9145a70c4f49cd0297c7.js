System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ColorProvider, _dec, _class, _crd, ccclass, Cell;

  function _reportPossibleCrUseOfColorProvider(extras) {
    _reporterNs.report("ColorProvider", "./ColorProvider", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      ColorProvider = _unresolved_2.ColorProvider;
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
          (_crd && ColorProvider === void 0 ? (_reportPossibleCrUseOfColorProvider({
            error: Error()
          }), ColorProvider) : ColorProvider).getInstance().changeColor(type, this.node);
        }

        start() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fffceefae94107117c7a9145a70c4f49cd0297c7.js.map