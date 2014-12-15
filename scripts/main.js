require.config({
    paths: {
        fiber: 'vendor/fiber.min'
    }
});

require(["fiber"], function(fiber) {
    
    console.log(fiber);
    
});