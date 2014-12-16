require.config({
    baseUrl: "scripts/lib",
    paths: {
        fiber: '../vendor/fiber.min'
    },
    urlArgs: "bust=" + (new Date()).getTime()
});

require(["canvas", "scene", "airport"], function(Canvas, Scene, Airport) {
    
    var $container = document.getElementById("container");
    
    var Scene = new Scene;
    
    var AirportCanvas = new Canvas("airport", $container);
    
    Scene.addCanvas(AirportCanvas);
    
    var KDBG = new Airport({
        icao: "KDBG",
        name: "Debug Airport"
    });
    
    Scene.addAirport(KDBG);
    
    
    Scene.render();
    
});