//auto resize canvas
let canvas = document.getElementById('canvasOne');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//new WorldWind instance on canvasOne
let wwd = new WorldWind.WorldWindow("canvasOne");

//low res fallback layer
wwd.addLayer(new WorldWind.BMNGOneImageLayer());

//high res layer
wwd.addLayer(new WorldWind.BMNGLandsatLayer());

//compass layer
wwd.addLayer(new WorldWind.CompassLayer());

//coordinates display layer
wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));

//view controls layer
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

//placemark layer
let placemarkLayer = new WorldWind.RenderableLayer("Placemark");
wwd.addLayer(placemarkLayer);

//create placemark attributes




//create home placemark

//home placemark label


//placemark class
class Placemark {
  constructor(lon, lat, z, color, placemarkLabel, imageSource, offsetX) {
    let placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
    //image offset
    placemarkAttributes.imageOffset = new WorldWind.Offset(
      WorldWind.OFFSET_FRACTION, offsetX,
      WorldWind.OFFSET_FRACTION, 0.0);

    //label color
    placemarkAttributes.labelAttributes.color = WorldWind.Color[color];

    //label offset
    placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
      WorldWind.OFFSET_FRACTION, 0.5,
      WorldWind.OFFSET_FRACTION, 1.0);

    //placemark image
    placemarkAttributes.imageSource = imageSource;

    //placemark position
    let position = new WorldWind.Position(lon, lat, z);

    this.placemark = new WorldWind.Placemark(position, false, placemarkAttributes);
    this.placemark.label = `${placemarkLabel}\n` +
      "Lat " + this.placemark.position.latitude.toPrecision(4).toString() + "\n" +
      "Lon " + this.placemark.position.longitude.toPrecision(5).toString();
    this.placemark.alwaysOnTop = true;

    placemarkLayer.addRenderable(this.placemark);
  }
  toggle() {
    if (this.placemark.enabled) {
      this.placemark.enabled = false;
    } else {
      this.placemark.enabled = true;
    }
  }
}

let placemarks = [];

placemarks.push(new Placemark(36.091919, -115.294617, 100, "YELLOW", "Las Vegas Home", "images/clickbait.png", 1));

placemarks.push(new Placemark(41.452040, -74.438760, 100, "GREEN", "Northern Academy", "images/plain-red.png", 0.3));


function placemarkToggle() {
  placemarks.forEach(placemark => {
    placemark.toggle();
  })
}
