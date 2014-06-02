#= require jquery
#= require jquery_ujs
#= require twitter/bootstrap
#= require wiselinks
#= require_tree .

$(document).ready ->
  window.wiselinks = new Wiselinks($('.content'))
