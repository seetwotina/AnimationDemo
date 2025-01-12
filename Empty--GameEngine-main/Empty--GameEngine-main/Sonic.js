class Sonic {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./PngItem_222200.png"), 0, 0, 44, 40, 8, .2);

		this.x = 0;
		this.y = 0;
		this.speed = 500;
	};

	update() {
		this.x += this.speed*this.game.clockTick;
		if(this.x > 1024) this.x = 0;
	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
		//ctx.drawImage(ASSET_MANAGER.getAsset("./PngItem_2222200.png"),0,0)
	};
}