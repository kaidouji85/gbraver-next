phina.globalize();
require('./scene/main-scene');

phina.main(()=>{
  let app = phina.game.GameApp({
    startLabel: 'main'
  });
  app.run();
});