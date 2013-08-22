Scroll Detector - CoffeeScript - JavaScript
===========================================

Easy to use scroll detector script

Basic usage
-----------

~~~ coffee
ScrollDetector.bind event: (counter) ->
  console.log "scroll"
  ScrollDetector.unlock()
~~~

Lock / Unlock

~~~ coffee
ScrollDetector.lock()
ScrollDetector.unlock()
~~~

Enable / Disable

~~~ coffee
ScrollDetector.enable()
ScrollDetector.disable()
~~~

Finish (can't be enabled anymore)

~~~ coffee
ScrollDetector.finish()
~~~

Unbind

~~~ coffee
ScrollDetector.unbind()
~~~

Reset

~~~ coffee
ScrollDetector.reset()
~~~