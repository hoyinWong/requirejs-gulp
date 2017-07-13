require.config({
    path: {
        "jquery": "./jquery",
        "math": "./math",
        "demo": "/demo"
    },
    shim: {
        "jquery": {
            exports: '$'
        }
    }
});

require(['math', 'demo'], function(math, demo){
    math.add(3,5);
    demo.init();
});