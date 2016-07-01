(function () {

  function isInputEmpty (input) {
    if(input.type === "text") { return (input.value.length > 0); }
    return false;
  }

  function addClasses (input) {
    input.classList.add(options.dirtyClassName);

    // check cleaned
    if(options.checkCleaned) {
      if(isInputEmpty(input)) {
        input.classList.add(options.cleanedClassName);
      } else {
        input.classList.remove(options.cleanedClassName);
      }
    }
  }

  function addEventListeners (input) {
    for(var j=0; j < options.events.length; j++) {
      addEventListener(options.events[j], input);
    }
  }

  function addEventListener (event, input) {
    input.addEventListener(event, function (e) {
      addClasses(this);
    });
  }

  function install (Vue, options) {
    // general options
    options = options || {};
    options.events = options.events || ("input change keyup paste").split(" ");
    options.checkCleaned = options.checkCleaned || true;

    // custom class name options
    options.dirtyClassName = options.dirtyClassName || "dirty";
    options.cleanedClassName = options.cleanedClassName || "cleaned";

    Vue.startDirtyInputWatch = function () {
      var inputs = document.getElementsByTagName("input");

      for(var i=0; i < inputs.length; i++) {
        (function (index) {
          for(var j=0; j < options.events.length; j++) {
            addEventListeners(inputs[index]);
          }
        })(i);
      }
    };
  }

  if (typeof exports == "object") {
    module.exports = install;
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return install; });
  } else if (window.Vue) {
    Vue.use(install);
  }
})();