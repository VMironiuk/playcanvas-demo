var canvas = document.getElementById("application-canvas");

// Crate and start application
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

// Create light
var light = new pc.Entity();
light.addComponent("light");
app.root.addChild(light);
light.rotate(45, 0, 0);
app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);

// Create cube
var box = new pc.Entity();
box.addComponent("model", {type: "box"});
app.root.addChild(box);
box.rotate(10, 15, 0);
box.translate(-2, 0, 0);

// Create cube's material
var boxMaterial = new pc.PhongMaterial();
boxMaterial.diffuse.set(0, 0.58, 0.86);
boxMaterial.update();
box.model.model.meshInstances[0].material = boxMaterial;

// Create cylinder
var cylinder = new pc.Entity();
cylinder.addComponent("model", {type: "cylinder"});
app.root.addChild(cylinder);
cylinder.rotate(15, 0, 0);

// Create cylinder's material
var cylinderMaterial = new pc.PhongMaterial();
cylinderMaterial.diffuse.set(1, 0.58, 0);
cylinderMaterial.update();
cylinder.model.model.meshInstances[0].material = cylinderMaterial;

// Create cone
var cone = new pc.Entity();
cone.addComponent("model", {type: "cone"});
app.root.addChild(cone);
cone.translate(2, 0, 0);

// Create cone's material
var coneMaterial = new pc.PhongMaterial();
coneMaterial.diffuse.set(0.9, 0.9, 0.9);
coneMaterial.update();
cone.model.model.meshInstances[0].material = coneMaterial;