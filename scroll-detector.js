var ScrollDetector;

ScrollDetector = (function() {
  var _this = this;

  function ScrollDetector() {}

  ScrollDetector.locked = false;

  ScrollDetector.scrollTop = 0;

  ScrollDetector.counter = 1;

  ScrollDetector.finished = false;

  ScrollDetector.disabled = false;

  ScrollDetector.defaults = {
    bottom: 300,
    event: function() {
      ScrollDetector.unlock();
      return false;
    }
  };

  ScrollDetector.options = ScrollDetector.defaults;

  ScrollDetector.scrollFunction = function() {
    var currentScrollTop;
    currentScrollTop = $(window).scrollTop();
    if (currentScrollTop > ScrollDetector.scrollTop && !ScrollDetector.locked && !ScrollDetector.finished && !ScrollDetector.disabled) {
      if (currentScrollTop >= $(document).height() - $(window).height() - ScrollDetector.options.bottom) {
        ScrollDetector.lock();
        ScrollDetector.options.event(ScrollDetector.counter);
        ScrollDetector.counter += 1;
      }
      return ScrollDetector.scrollTop = currentScrollTop;
    }
  };

  ScrollDetector.bind = function(options) {
    ScrollDetector.options = $.extend({}, ScrollDetector.defaults, options);
    return $(window).scroll(ScrollDetector.scrollFunction);
  };

  ScrollDetector.unbind = function() {
    $(window).unbind("scroll", ScrollDetector.scrollFunction);
    return false;
  };

  ScrollDetector.lock = function() {
    ScrollDetector.locked = true;
    return false;
  };

  ScrollDetector.unlock = function() {
    ScrollDetector.locked = false;
    return false;
  };

  ScrollDetector.enable = function() {
    return ScrollDetector.disabled = false;
  };

  ScrollDetector.disable = function() {
    return ScrollDetector.disabled = true;
  };

  ScrollDetector.finish = function() {
    return ScrollDetector.finished = true;
  };

  ScrollDetector.reset = function() {
    ScrollDetector.locked = false;
    ScrollDetector.disabled = false;
    ScrollDetector.finished = false;
    return ScrollDetector.counter = 1;
  };

  return ScrollDetector;

}).call(this);

window.ScrollDetector = ScrollDetector;
