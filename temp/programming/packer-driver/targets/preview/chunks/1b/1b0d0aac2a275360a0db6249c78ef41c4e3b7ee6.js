System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EventTarget, _dec, _class, _class2, _crd, ccclass, EventSystem;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      EventTarget = _cc.EventTarget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61ebd9SczRJHbBPUX0kjgLx", "EventSystem", undefined);

      __checkObsolete__(['_decorator', 'EventTarget']);

      ({
        ccclass
      } = _decorator);

      _export("EventSystem", EventSystem = (_dec = ccclass('EventSystem'), _dec(_class = (_class2 = class EventSystem {
        constructor() {
          this.eventTarget = new EventTarget();
        }

        static getInstance() {
          if (!this._instance) {
            this._instance = new EventSystem();
          }

          return this._instance;
        }

        on(eventType, callback, target) {
          this.eventTarget.on(eventType, callback, target);
        }

        off(eventType, callback, target) {
          this.eventTarget.off(eventType, callback, target);
        }

        emit(eventType) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          this.eventTarget.emit(eventType, ...args);
        }

      }, _class2._instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1b0d0aac2a275360a0db6249c78ef41c4e3b7ee6.js.map