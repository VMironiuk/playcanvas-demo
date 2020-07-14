// Crate application
var canvas = document.getElementById("application-canvas");
var app = new pc.Application(canvas);
app.start();
app.setCanvasFillMode(pc.FILL_MODE_FILL_WINDOW)
app.setCanvasResolution(pc.RESOLUTION_AUTO)