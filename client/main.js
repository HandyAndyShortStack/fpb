Meteor.startup(function() {
///////////////////////////

var pages = new Meteor.Collection('pages');
Meteor.subscribe('pages');

var sidebar = $('#sidebar');
var logo = $('#logo');
var sidebar_links = $('.sidebar-link');

sidebar.css('height', document.height);
logo.css('height', sidebar.width());
logo.css('width', sidebar.width());

///
});
