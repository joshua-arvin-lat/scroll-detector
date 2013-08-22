class ScrollDetector
  @locked = false
  @scrollTop = 0
  @counter = 1
  @finished = false
  @disabled = false
  @defaults = 
    bottom: 300
    event: =>
      @unlock()
      false

  @options = @defaults
  @scrollFunction = =>
    currentScrollTop = $(window).scrollTop()

    if currentScrollTop > @scrollTop and not @locked and not @finished and not @disabled
      if currentScrollTop >= $(document).height() - $(window).height() - @options.bottom
        @lock()
        @options.event @counter
        @counter += 1
    
      # update scroll top
      @scrollTop = currentScrollTop

  @bind = (options) =>
    @options = $.extend({}, @defaults, options)
    $(window).scroll @scrollFunction

  @unbind = =>
    $(window).unbind "scroll", @scrollFunction
    false

  @lock = =>
    @locked = true
    false

  @unlock = =>
    @locked = false
    false

  @enable = =>
    @disabled = false

  @disable = =>
    @disabled = true

  @finish = =>
    @finished = true

  @reset = =>
    @locked = false
    @disabled = false
    @finished = false
    @counter = 1

window.ScrollDetector = ScrollDetector