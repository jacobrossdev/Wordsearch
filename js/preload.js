var Preload = function(game){};

Preload.prototype = {

  init: function (){

      var me = this;

      var style = {
          font: "32px Arial",
          fill: "#ffffff",
          align: "center"
      };

      this.text = this.add.text(me.game.world.centerX, me.game.world.centerY, "Loading: 0%", style);
      this.text.anchor.x = 0.5;
  },

	preload: function(){ 
		this.game.load.text('dictionary', 'assets/dictionary.txt');
    this.game.load.image('background', 'assets/drugs.jpg');
	},


  fileLoaded: function(progress){
      this.text.text = "Loading: " + progress + "%";
  },

	create: function(){
		this.game.state.start("Main");
	}
}