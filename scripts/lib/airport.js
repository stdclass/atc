define(["fiber"], function(fiber){
    
    var fiber = require("fiber");
    
    var Airport = fiber.extend(function(){
        return {
            scene: null,
            icao: "",
            name: "",
            runways: [],
            fixes: [],
            width: 0.4,
            length: 6,
            INDICATOR_WIDTH: 1,
            INDICATOR_LENGTH: 3,
            init: function(options){
                
                this.icao = options.icao;
                this.name = options.name;
                this.runways = options.runways;
                this.fixes = options.fixes;
                
            },
            render: function(){
                
                this.renderRunways();
                
                this.renderFixes();
                
            },
            renderRunways: function(){
                
                var canvas = this.scene.getCanvas("airport");
                
                for( var i = 0, runway; i < this.runways.length; i++ ){
                    
                    runway = this.runways[i];
                    
                    canvas.ctx.save();
                    
                    canvas.ctx.fillStyle = "#fff";
                    canvas.ctx.fillRect(
                        runway.position.x * this.scene.scale, 
                        runway.position.y * this.scene.scale, 
                        this.width * this.scene.scale,
                        this.length * this.scene.scale
                    );
                    
                    canvas.ctx.fillRect(
                        ( runway.position.x + this.width / 2 ) * this.scene.scale - ( this.INDICATOR_WIDTH / 2 ),
                        ( runway.position.y + this.length / 2 ) * this.scene.scale - ( ( this.length * this.scene.scale * this.INDICATOR_LENGTH ) / 2),
                        this.INDICATOR_WIDTH,
                        this.length * this.INDICATOR_LENGTH * this.scene.scale
                    );
                    
                    canvas.ctx.restore();

                    
                }
                
            },
            
            renderFixes: function(){
                
                var canvas = this.scene.getCanvas("airport")
                    
                for( var icao in this.fixes ){
                    
                    fix = this.fixes[icao];
                    
                    canvas.ctx.save();
                    
                    canvas.ctx.fillStyle = "#fff";
                    
                    canvas.ctx.fillRect(
                        fix[0] * this.scene.scale,
                        fix[1] * this.scene.scale,
                        10,
                        10
                    );
                    
                    canvas.ctx.restore();
                    
                }
                
            }
        }
    });
    
    return Airport;
    
});