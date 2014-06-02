$(function() {
  var content_links = $('.sidebar-link');
  var content_pages = $('.content');
  var topbar = $('#topbar');
  var sidebar = $('#sidebar');
  var logo = $('#logo-link');
  var sidebar_links = $('.sidebar-link');
  var title_letters = $('.title-letter');
  var shirt = $('#shirt');
  var random_color = 'white';
  var getRandomColor = FPB.getRandomColor;

  content_links.css('color', 'white');
  content_links.on('mouseover', function() {
    var self = $('#' + this.id);
    random_color = getRandomColor();
    self.css('color', random_color);
    logo.attr('src', 'logo_' + random_color + '.png');
    shirt.attr('src', 'shirt_' + random_color + '.png');
  });
  content_links.on('mouseout', function() {
    random_color = $('.selected').css('color');
    var self = $('#' + this.id);
    self.css('color', 'white');
    logo.attr('src', 'logo_white.png');
    $('.selected').css('color', random_color);
    shirt.attr('src', 'shirt_white.png');
  });
  title_letters.css('color', 'white');
  logo.on('mouseover', function() {
    random_color = getRandomColor();
    logo.attr('src', 'logo_' + random_color + '.png');
    title_letters.css('color', random_color);
    sidebar_links.css('color', random_color);
    shirt.attr('src', 'shirt_' + random_color + '.png');
  });
  logo.on('mouseout', function() {
    random_color = $('.selected').css('color');
    logo.attr('src', 'logo_white.png');
    title_letters.css('color', 'white');
    sidebar_links.css('color', 'white');
    $('.selected').css('color', random_color);
    shirt.attr('src', 'shirt_white.png');
  });
  topbar.on('mouseover', function() {
    for (var i = 0; i < title_letters.length; i += 1) {
      $(title_letters[i]).css('color', getRandomColor());
    }
  });
  topbar.on('mouseout', function() {
    title_letters.css('color', 'white');
  });
  shirt.on('mouseover', function() {
    random_color = getRandomColor();
    shirt.attr('src', 'shirt_' + random_color + '.png');
    logo.attr('src', 'logo_' + random_color + '.png');
  });
  shirt.on('mouseout', function() {
    shirt.attr('src', 'shirt_white.png');
    logo.attr('src', 'logo_white.png');
  });
});
