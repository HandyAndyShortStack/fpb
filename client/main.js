Meteor.startup(function() {
///////////////////////////

// handles
var content_links = $('.sidebar-link');
var content_pages = $('.content');
var topbar = $('#topbar');
var sidebar = $('#sidebar');
var logo = $('#logo-link');
var sidebar_links = $('.sidebar-link');
var title_letters = $('.title-letter');
var shirt = $('#shirt');
var random_color = 'white';
var front_page = $('#front');

// setup
sidebar.css('height', document.height);
logo.attr('height', (9 / 10) * sidebar.width());
logo.attr('width', (9 / 10) * sidebar.width());
logo.css('margin-top', (1 / 20) * sidebar.width());
content_pages.hide();
front_page.show();

// content injection

for (var i = 0; i < content_pages.length; i += 1) {
    page = content_pages[i];
    $(page).html(Template[page.id]());
}

// content navigation
content_links.on('click', function() {
    front_page.hide();
    $('.selected').css('color', 'white');
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
    $('.selected').css('color', random_color);
    content_pages.hide();
    $('#' + this.id.slice(0, -5)).show();
    sidebar.css('height', document.height);
});

// front page navigation
topbar.on('click', function() {
    content_pages.hide();
    front_page.show();
    $('.selected').css('color', 'white');
    $('.selected').removeClass('selected');
});
logo.on('click', function() {
    content_pages.hide();
    front_page.show();
    $('.selected').removeClass('selected');
});

// fancy colors for the links
function getRandomColor() {
    var coin = Math.random();
    if (coin < (1 / 6)) {
        return 'limegreen';
    } else if (coin < (2 / 6)) {
        return 'orchid';
    } else if (coin < (3 / 6)) {
        return 'red';
    } else if (coin < (4 / 6)) {
        return 'yellow';
    } else if (coin < (5 / 6)) {
        return 'deepskyblue';
    } else {
        return 'orange'
    }
}
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

///
});
