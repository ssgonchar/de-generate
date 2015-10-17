App = function(config) {
  this.config = config;

  var appTitle = 'De-generator';

  this.generate = function(tag, classes, label)
  {
    var html = '';

    html += '<';
    html += tag;
    html += ' class="'+ classes +'"';
    html += '>';
    html += label.replace(/%s/g, appTitle);
    html += '</';
    html += tag;
    html += '>';

    return html;
  }

  this.show = function( button )
  {
    $('h1').html('You will be happy with us. You should start be happy and  '+button);
  }
}

config = {
  'env' : 'dev',
}

var app = new App(config);

var button = app.generate('button','btn btn-primary', 'This is %s !');
