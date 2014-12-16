define(["fiber"], function(fiber){
    
    var fiber = require("fiber");
    
    var Scene = fiber.extend(function(){
        return {
            canvases: {},
            airport: null,
            aircrafts: {},            
            
            // pixels per mile
            scale: 10,
            init: function(){
                
            },
            setScale: function(scale){
                
                if( scale > 3 && scale < 50 ){
                    this.scale = scale;
                }
                
            },
            getScale: function(){
                
                return this.scale;
                
            },            
            addCanvas: function(canvas){
                
                canvas.scene = this;
                this.canvases[canvas.id] = canvas;
                
            },
            getCanvas: function(id){
                
                return this.canvases[id];
                
            },
            addAircraft: function(aircraft){
            
                this.aircrafts[aircraft.icao] = aircraft;
            
            },
            removeAircraft: function(aircraft){
            
                delete this.aircrafts[aircraft.icao];
            
            },
            getAircraft: function(icao){
            
                return this.aircrafts[icao];
            
            },
            getAircrafts: function(){
                
                return this.aircrafts;
            
            },
            setAirport: function(airport){
                
                airport.scene = this;
                this.airport = airport;
                
            },
            render: function(){
                
                for( var id in this.canvases ){
                    this.canvases[id].render();
                }
               
                this.airport.render();
                
            }
        }
    });
    
    return Scene;
    
});