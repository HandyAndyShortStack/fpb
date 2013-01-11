// we will be reading files later
var require = __meteor_bootstrap__.require;
var fs = require('fs');

// the files will be published to this collection
pages = new Meteor.Collection('pages');
Meteor.publish('pages', function() {
    return pages.find();
});

// grab file contents and put them in the pages collection
pages.remove({});
var pageList = fs.readdirSync('.');
for (var i = 0; i < pageList.length; i += 1) {
    console.log(pageList[i]);
}
