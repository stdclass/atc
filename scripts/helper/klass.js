define(function(require){
    
    return {
        create: function(proto){
            
            function Klass(){
                this.constructor.call( [].slice.call(arguments) );
            }
            
            Klass.prototype = proto;
            
            return Klass;            
        }
    };
        
})