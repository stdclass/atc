define(["fiber"], function(fiber){
    
    var fiber = require("fiber");
    
    var Aircraft = fiber.extend(function(){
        return {
            scene: null,
            init: function(options){
                
                this.icao = options.icao;
                this.name = options.name;
                
                
            },
            render: function(){
                
                
            },
        }
    });
    
    return Aircraft;
    
});