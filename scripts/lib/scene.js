define(["fiber"], function(fiber){
    
    var fiber = require("fiber");
    
    var Scene = fiber.extend(function(){
        return {
            canvases: {},
            airports: {},
            init: function(){
                
            },
            addCanvas: function(canvas){
                canvas.scene = this;
                this.canvases[canvas.id] = canvas;
            },
            addAirport: function(airport){
                airport.scene = this;
                this.airports[airport.icao] = airport;
            },
            render: function(){
                for( var id in this.canvases ){
                    this.canvases[id].render();
                }
            }
        }
    });
    
    return Scene;
    
});