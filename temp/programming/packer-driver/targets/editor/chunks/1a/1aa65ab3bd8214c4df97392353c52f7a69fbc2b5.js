System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ColorProvider, EventSystem, Events, _dec, _class, _crd, ccclass, Cell;

  function _reportPossibleCrUseOfColorProvider(extras) {
    _reporterNs.report("ColorProvider", "./ColorProvider", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventSystem(extras) {
    _reporterNs.report("EventSystem", "./EventSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvents(extras) {
    _reporterNs.report("Events", "./Events", _context.meta, extras);
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
    }, function (_unresolved_3) {
      EventSystem = _unresolved_3.EventSystem;
    }, function (_unresolved_4) {
      Events = _unresolved_4.Events;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd6f02NFEtKPKlfg16s1Vpd", "Cell", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite']);

      ({
        ccclass
      } = _decorator);

      _export("Cell", Cell = (_dec = ccclass('Cell'), _dec(_class = class Cell extends Component {
        constructor(...args) {
          super(...args);
          this.type = 0;
          this.m_grounded = false;
        }

        init(type) {
          this.type = type;
          if (this.type > 0) this.m_grounded = true;
          (_crd && ColorProvider === void 0 ? (_reportPossibleCrUseOfColorProvider({
            error: Error()
          }), ColorProvider) : ColorProvider).getInstance().changeColor(type, this.node);
          this.registerEvents();
        }

        registerEvents() {
          (_crd && EventSystem === void 0 ? (_reportPossibleCrUseOfEventSystem({
            error: Error()
          }), EventSystem) : EventSystem).getInstance().on((_crd && Events === void 0 ? (_reportPossibleCrUseOfEvents({
            error: Error()
          }), Events) : Events).PerformAction, this.onPerformAction.bind(this), this);
        }

        onPerformAction(actionType) {
          if (!this.m_grounded) return;
          console.log(`Cell at ${this.node.name} performing action: ${actionType}`);
        }

        onDestroy() {
          (_crd && EventSystem === void 0 ? (_reportPossibleCrUseOfEventSystem({
            error: Error()
          }), EventSystem) : EventSystem).getInstance().off((_crd && Events === void 0 ? (_reportPossibleCrUseOfEvents({
            error: Error()
          }), Events) : Events).PerformAction, this.onPerformAction.bind(this), this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1aa65ab3bd8214c4df97392353c52f7a69fbc2b5.js.map