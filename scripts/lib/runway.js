define(["fiber"], function(fiber){
    
    var fiber = require("fiber");
    
    var Runway = fiber.extend(function(){
        return {
            airport: null,
            init: function(options){
                
                this.icao = options.icao;
                this.name = options.name;
                
                
            },
            render: function(){
                
                
            },
        }
    });
    
    return Runway;
    
});