$ ->
  listen = $('#listen').hide()
  $('#listen-link').on 'click', (event) ->
    event.preventDefault()
    listen.toggle()
