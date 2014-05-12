window.FPB = {
  
  getRandomColor: function() {
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
      return 'orange';
    }
  },

  events: $('<div></div>')
};
