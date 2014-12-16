define(["fiber"], function(fiber){
    
    var fiber = require("fiber");
    
    var Canvas = fiber.extend(function(){
        return {
            id: null,
            $el: null,
            $container: null,
            ctx: null,
            init: function(id, $container){
                
                this.id = id;
                this.$container = $container;
                
                this.$el = document.createElement("canvas");
                
                this.$el.setAttribute("id", this.id);
                
                this.resize();
                
                this.ctx = this.$el.getContext("2d");
                
                this.$container.appendChild(this.$el);
                
            },
            resize: function(){

                this.$el.setAttribute("width", this.$container.offsetWidth);
                this.$el.setAttribute("height", this.$container.offsetHeight);
                
            },
            render: function(){
                
            }
        }
    });
    
    return Canvas;
    
});