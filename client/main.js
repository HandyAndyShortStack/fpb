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

// setup
sidebar.css('height', document.height);
logo.attr('height', sidebar.width());
logo.attr('width', sidebar.width());
content_pages.hide();

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
});
content_links.on('mouseout', function() {
    var self = $('#' + this.id);
    self.css('color', 'white');
    logo.attr('src', 'logo_white.png');
});
logo.on('mouseover', function() {
    var color = getRandomColor();
    logo.attr('src', 'logo_' + color + '.png');
    topbar.css('color', color);
    sidebar_links.css('color', color);
});
logo.on('mouseout', function() {
    var color = getRandomColor();
    logo.attr('src', 'logo_white.png');
    topbar.css('color', 'white');
    sidebar_links.css('color', 'white');
});

///
});
