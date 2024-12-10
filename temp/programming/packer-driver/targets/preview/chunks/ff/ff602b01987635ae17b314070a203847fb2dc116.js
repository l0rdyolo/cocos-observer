System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, EventSystem, Events, _dec, _class, _crd, ccclass, property, GameManager;

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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      EventSystem = _unresolved_2.EventSystem;
    }, function (_unresolved_3) {
      Events = _unresolved_3.Events;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c14d7bv92FPJJ8DOTWGAuFL", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec(_class = class GameManager extends Component {
        start() {
          this.node.on(Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
        }

        onMouseDown() {
          (_crd && EventSystem === void 0 ? (_reportPossibleCrUseOfEventSystem({
            error: Error()
          }), EventSystem) : EventSystem).getInstance().emit((_crd && Events === void 0 ? (_reportPossibleCrUseOfEvents({
            error: Error()
          }), Events) : Events).PerformAction);
        }

        onDestroy() {
          this.node.off(Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
        }

        checkNeighbors() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ff602b01987635ae17b314070a203847fb2dc116.js.map