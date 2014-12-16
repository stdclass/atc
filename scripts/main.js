require.config({
    baseUrl: "scripts/lib",
    paths: {
        fiber: '../vendor/fiber.min'
    },
    urlArgs: "bust=" + (new Date()).getTime()
});

require(
    [
        "canvas", 
        "scene", 
        "airport", 
        "aircraft"
    ], 
    function(
        Canvas, 
        Scene, 
        Airport, 
        Aircraft
    ){
    
    var $container = document.getElementById("container");
    
    var Scene = new Scene;
    
    var AirportCanvas = new Canvas("airport", $container);
    
    Scene.addCanvas(AirportCanvas);
    
    var KDBG = new Airport({
        icao: "KDBG",
        name: "Debug Airport",
        fixes: {
            "ROMNY": [ -187.17,    -96     ],
            "ROKME": [ -138.17,     64     ],
            "HERMN": [ -187.17,     37.33  ],
            "NEPIC": [ -61.83,      21     ],
            "MENIO": [ -13.83,     -1.5    ],
            "PONKE": [ -29.5,       5.67   ],
            "WETOR": [  12.17,     -11.33  ],
            "DIVEC": [  47.5,      -24.67  ],
            "FAITH": [  97.17,     -47.33  ],
            "DUMBO": [  83.5,      -64.33  ],
            "CEPIN": [  93.17,     -5.67   ],
            "MEHTA": [  164.83,    -51.33  ],
            "WOODS": [  118.17,    -92     ],
            "AXMUL": [  173.5,      18.67  ],
            "ROGGE": [  173.17,     82     ],
            "BERKS": [  92.83,      46.33  ],
            "PORTE": [  33.17,      59.67  ],
            "QUITE": [  13.5,       45.67  ],
            "BOBAK": [  8.83,       22.33  ],
            "LOCMT": [  0,          18     ],
            "RANDM": [ -2.83,       46.33  ],
            "MUSTE": [ -36.83,      73     ],
            "PRONU": [  26.83,      79.67  ],
            "ENCAB": [ -7.5,        88.33  ],
            "LESOT": [ -84.17,      56     ],
            "GUSTO": [ -99.5,      -101.67 ],
            "LENVO": [ -49.5,      -71.67  ],
            "FALSE": [ -65.5,      -35     ],
            "EXCIT": [  37.83,     -95     ],
            "LEFTE": [  22.17,     -48.67  ],
            "ABOFA": [ -2.83,      -66     ],
            "JSATO": [  103.17,    -83     ],
            "KAITO": [ -0.9,       -27     ],
            "GOODY": [ -1.5,       -20     ]
        },
        runways: [
            {
                name: ["18R", "36L"],
                position: {
                    x: 1,
                    y: 0
                },
                angle: 200
            },
            {
                name: ["18L", "36R"],
                position: {
                    x: 0,
                    y: 0
                },
                angle: 200
            }
        ]
    });
    
    Scene.setAirport(KDBG);
    
    Scene.render();
    
    document.getElementById("plus").onclick = function(){
        Scene.setScale( Scene.getScale() + 5 );
        Scene.render();
    };
    document.getElementById("minus").onclick = function(){
        Scene.setScale( Scene.getScale() - 5 );
        Scene.render();
    };
    
    window.s = Scene;
});