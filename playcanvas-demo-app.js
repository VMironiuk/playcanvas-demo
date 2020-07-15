// Crate application
var canvas = document.getElementById("application-canvas");

var app = new pc.Application(canvas);
app.start();

app.setCanvasFillMode(pc.FILL_MODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);

// Create camera
var camera = new pc.Entity();
camera.addComponent("camera", {
    clearColor: new pc.Color(0.8, 0.8, 0.8)
});

app.root.addChild(camera);
camera.setPosition(0, 0, 7);

// Geometry
var box = new pc.Entity();
box.addComponent("model", {type: "box"});
app.root.addChild(box);
box.rotate(10, 15, 0);

// Lights
var light = new pc.Entity();
light.addComponent("light");
app.root.addChild(light);
light.rotate(45, 0, 0);

app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);