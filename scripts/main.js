require.config({
    baseUrl: "scripts/lib",
    paths: {
        fiber: '../vendor/fiber.min'
    }
});

require(["canvas", "fiber"], function(Canvas) {
    
    var $container = document.getElementById("container");
    
    var AirportCanvas = new Canvas("airport", $container);
    
    AirportCanvas.render();
    
});