//new WorldWind instance on canvasOne
var wwd = new WorldWind.WorldWindow("canvasOne");

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
var placemarkLayer = new WorldWind.RenderableLayer("Placemark");
wwd.addLayer(placemarkLayer);

//placemark attributes
var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);

placemarkAttributes.imageOffset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION, 0.3,
    WorldWind.OFFSET_FRACTION, 0.0);

placemarkAttributes.labelAttributes.color = WorldWind.Color.RED;
placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION, 0.5,
    WorldWind.OFFSET_FRACTION, 1.0);
ddd

