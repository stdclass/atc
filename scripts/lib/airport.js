define(["fiber"], function(fiber){
    
    var fiber = require("fiber");
    
    var Airport = fiber.extend(function(){
        return {
            init: function(options){
                this.icao = options.icao;
                this.name = options.name;
            }
        }
    });
    
    return Airport;
    
});