require('phina.js').globalize();
require('./scene/main-scene');

phina.main(function(){
  var app = phina.game.GameApp({
    startLabel: 'main'
  });
  app.run();
});
