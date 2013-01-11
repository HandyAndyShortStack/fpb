Meteor.startup(function() {
    if (Meteor.isClient) {
///////////////////////////

var sidebar = $('#sidebar');
var logo = $('#logo');

sidebar.css('height', document.height);
logo.css('height', sidebar.width());
logo.css('width', sidebar.width());

/////
    }
});
