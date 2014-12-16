define(["fiber"], function(fiber){
    
    var fiber = require("fiber");
    
    var Canvas = fiber.extend(function(){
        return {
            scene: null,
            id: null,
            $el: null,
            $container: null,
            ctx: null,
            width: 0,
            height: 0,
            init: function(id, $container){
                
                this.id = id;
                this.$container = $container;
                
                this.$el = document.createElement("canvas");
                this.$el.setAttribute("id", this.id);
                
                this.ctx = this.$el.getContext("2d");
                
                this.$container.appendChild(this.$el);
                
                this.resize();
                
                this.center();
                                
            },
            resize: function(){
                
                this.width = this.$container.offsetWidth;
                this.height = this.$container.offsetHeight;

                this.$el.setAttribute("width", this.width);
                this.$el.setAttribute("height", this.height);
                
                
            },
            center: function(){
                
                this.ctx.save();
                
                this.ctx.translate(this.width / 2, this.height / 2);
                
            },
            render: function(){
                
                this.ctx.restore();
                
                this.ctx.clearRect(0, 0, this.width, this.height);
                
                this.center();
            }
        }
    });
    
    return Canvas;
    
});