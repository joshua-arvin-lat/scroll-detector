Scroll Detector - CoffeeScript - JavaScript
===========================================

Easy to use scroll detector script. Requires jQuery.

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

Installation
------------

~~~ html
<script type='text/javascript' src='js/jquery.min.js'></script>
<script type='text/javascript' src='js/scroll-detector.js'></script>
~~~

Acknowledgements
----------------

© 2013, Joshua Arvin Lat. Released under the [MIT License](LICENSE).
