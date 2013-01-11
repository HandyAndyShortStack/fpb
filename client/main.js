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
var sidebar = $('#sidebar');
var logo = $('#logo');
var sidebar_links = $('.sidebar-link');

// setup
sidebar.css('height', document.height);
logo.css('height', sidebar.width());
logo.css('width', sidebar.width());
content_pages.hide();


///
});
