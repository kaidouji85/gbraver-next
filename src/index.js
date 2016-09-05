var phina = require('phina.js');
phina.globalize();

require('./scene/main-scene');

// メイン処理
phina.main(function() {
  // アプリケーション生成
  var app = phina.game.GameApp({
    startLabel: 'main', // メインシーンから開始する
  });
  // アプリケーション実行
  app.run();
});
