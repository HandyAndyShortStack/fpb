Meteor.startup(function() {
///////////////////////////

pages = new Meteor.Collection('pages');
Meteor.subscribe('pages');

// load content and register click handlers to the links
var cursor = pages.find();
var observer = cursor.observe({
    added: function(page) {
        $('#' + page.title).html(page.html);
        $('#' + page.title + '-link').on('click', function() {
            $('.selected').css('color', 'white');
            $('.selected').removeClass('selected');
            $(this).addClass('selected');
            content_pages.hide();
            $('#' + page.title).show();
            sidebar.css('height', document.height);
        });
    }
});

// handles
var content_links = $('.sidebar-link');
var content_pages = $('.content');
var topbar = $('#topbar');
var sidebar = $('#sidebar');
var logo = $('#logo-link');
var sidebar_links = $('.sidebar-link');
var title_letters = $('.title-letter');
var shirt = $('#shirt');

// setup
sidebar.css('height', document.height);
logo.attr('height', (9 / 10) * sidebar.width());
logo.attr('width', (9 / 10) * sidebar.width());
logo.css('margin-top', (1 / 20) * sidebar.width());
content_pages.hide();
$('#front').show();

// front page navigation
function showFront() {
    content_pages.hide();
    $('#front').show();
    $('.selected').css('color', 'white');
    $('.selected').removeClass('selected');
}
topbar.on('click', showFront);
logo.on('click', showFront);

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
    var color = getRandomColor();
    self.css('color', color);
    logo.attr('src', 'logo_' + color + '.png');
    shirt.attr('src', 'shirt_' + color + '.png');
});
content_links.on('mouseout', function() {
    var color = $('.selected').css('color');
    var self = $('#' + this.id);
    self.css('color', 'white');
    logo.attr('src', 'logo_white.png');
    $('.selected').css('color', color);
    shirt.attr('src', 'shirt_white.png');
});
logo.on('mouseover', function() {
    var color = getRandomColor();
    logo.attr('src', 'logo_' + color + '.png');
    title_letters.css('color', color);
    sidebar_links.css('color', color);
    shirt.attr('src', 'shirt_' + color + '.png');
});
logo.on('mouseout', function() {
    var color = $('.selected').css('color');
    logo.attr('src', 'logo_white.png');
    title_letters.css('color', 'white');
    sidebar_links.css('color', 'white');
    $('.selected').css('color', color);
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
    var color = getRandomColor();
    shirt.attr('src', 'shirt_' + color + '.png');
    logo.attr('src', 'logo_' + color + '.png');
});
shirt.on('mouseout', function() {
    shirt.attr('src', 'shirt_white.png');
    logo.attr('src', 'logo_white.png');
});

///
});
