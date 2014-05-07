$(function() {
  $('#listen-link').on('click', function(event) {
    $('#listen').toggle();
    if ($('#listen').is(':visible')) {
      FPB.listening = true;
    } else {
      FPB.listening = false;
    }
    event.preventDefault();
  });

  if (new RegExp('^/listen$').test(location.pathname)) {
    console.log('listening');
  }
});
