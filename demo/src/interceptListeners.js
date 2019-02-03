// Seem like this should be easier 🤷‍♂️
// https://stackoverflow.com/a/34901121/4838267
(function () {
  function interceptListener(type, element) {
    if (typeof element[type] == "function") {
      element[type] = (function () {
        var original = this[type];
        this.allListeners = this.allListeners || {};
        return function () {
          this.allListeners[arguments[0]] = arguments[0] in this.allListeners ? this.allListeners[arguments[0]] + 1 : 1;
          return original.apply(this, arguments);
        }
      }.bind(element))();
    }
  }
  interceptListener("attachEvent", window);
  interceptListener("addEventListener", window);
})();
