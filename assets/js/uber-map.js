!function(a,b){var c=function(a,b,c){var d;return function(){function e(){c||a.apply(f,g),d=null}var f=this,g=arguments;d?clearTimeout(d):c&&a.apply(f,g),d=setTimeout(e,b||100)}};jQuery.fn[b]=function(a){return a?this.bind("resize",c(a)):this.trigger(b)}}(jQuery,"smartresize"),$(function(){var a=$(".scroller"),b=$(".nav-bar"),c=$(".map-footer"),d=function(){var d=$(window).height()-b.outerHeight()-c.outerHeight();a.css("height",d+"px")};d(),$(window).smartresize(function(){d()});var e=3,f=Cesium.Color.YELLOW,g=new Cesium.Color(1,.5,0,1),h=0,i=9999999,j=5e3,a=$(".left-panel .scroller");ko=Cesium.knockout,Cesium.BingMapsApi.defaultKey="AgRxdroanFbgogMNQ3HpvADZ2txGKmu1cTTRqlrAUSFLfbP38ZhuYKBSY1ZK0aHl";var k=new Cesium.Viewer("cesiumContainer",{animation:!1,homeButton:!1,timeline:!1,sceneModePicker:!1,baseLayerPicker:!1,fullscreenButton:!1,navigationHelpButton:!1,geocoder:!1,infoBox:!1,terrainProvider:new Cesium.CesiumTerrainProvider({url:"//cesiumjs.org/stk-terrain/tilesets/world/tiles",credit:'Routes plotted by <a href="http://erikhenne.com">Erik Henne</a>'})});k.extend(Cesium.viewerEntityMixin);var l=k.scene,m=(l.primitives,l.camera);Cesium.knockout.getObservable(k,"selectedEntity").subscribe(function(a){void 0!==a&&$("#"+a.id).trigger("click")});var n=new Cesium.GeoJsonDataSource;n.loadUrl("/assets/gpx/ski-tours-complete.geojson",{stroke:f,fill:Cesium.Color.PINK,strokeWidth:e,markerSymbol:"?"}).then(function(){n.entities.entities;r()}).otherwise(function(){alert("Tours could not be found. Please reload the page.")}),k.dataSources.add(n),m.lookAt(Cesium.Cartesian3.fromDegrees(-121.81263,44,2e5),Cesium.Cartesian3.fromDegrees(-121.81263,48.706652,0),Cesium.Cartesian3.UNIT_Z);var o=l.globe.ellipsoid,p=l.primitives.add(new Cesium.LabelCollection);label=p.add();var q=new Cesium.ScreenSpaceEventHandler(l.canvas);q.setInputAction(function(a){var b=l.pick(a.endPosition),c=l.camera.pickEllipsoid(a.endPosition,o);c&&b&&b.id&&b.id.properties?(label.show=!0,label.text=b.id.properties.name,label.position=c,label.font="1.2rem pt_sans, 'Helvetica Neue', arial, sans-serif",label.outlineWidth=0,label.horizontalOrigin=Cesium.HorizontalOrigin.CENTER,label.verticalOrigin=Cesium.VerticalOrigin.BOTTOM,$("#"+b.id.id).addClass("hover")):(label.show=!1,$(".left-panel .hover").removeClass("hover"))},Cesium.ScreenSpaceEventType.MOUSE_MOVE);var r=function(){function b(a){this.id=ko.observable(a.id),this.name=ko.observable(a.name),this.description=ko.observable(a.description),this.distance=ko.observable(a.distance),this.link=ko.observable(a.link),this.formattedDistance=ko.computed(function(){return this.distance()?this.distance()+"mi":void 0},this)}function c(){var c=this;c.tours=ko.observableArray([]),c.query=ko.observable(""),c.minDistanceQuery=ko.observable(""),c.maxDistanceQuery=ko.observable(""),c.filteredTours=ko.computed(function(){var a=this.query().toLowerCase(),b=this.minDistanceQuery()||h,c=this.maxDistanceQuery()||i;return a||b!=h||c!=i?ko.utils.arrayFilter(this.tours(),function(d){return a?-1!==d.name().toLowerCase().indexOf(a)&&d.distance()>=b&&d.distance()<=c:d.distance()>=b&&d.distance()<=c}):this.tours()},c),c.tourMouseOver=function(){},c.tourMouseOut=function(){},c.tourClick=function(b,c){var d=n.entities.getById(c.id()),e=$("#"+c.id()),h=e.position().top;(h>a.scrollTop()+a.height()||h<a.scrollTop())&&a.animate({scrollTop:h},2e3),e.addClass("selected").siblings().removeClass("selected");for(var i=n.entities.entities,k=0;k<i.length;k++){var l=i[k];l.polyline&&(l.polyline.material=Cesium.ColorMaterialProperty.fromColor(f)),l.polygon&&(l.polygon.material=Cesium.ColorMaterialProperty.fromColor(f))}if(d.polyline){var o=d.polyline.positions.getValue(new Cesium.JulianDate.now);d.polyline.material=Cesium.ColorMaterialProperty.fromColor(g)}else{var o=d.polygon.positions.getValue(new Cesium.JulianDate.now);d.polygon.material=Cesium.ColorMaterialProperty.fromColor(g)}o=Cesium.Ellipsoid.WGS84.cartesianArrayToCartographicArray(o);for(var p,q,r=Cesium.Rectangle.fromCartographicArray(o),s=Cesium.Rectangle.center(r),k=0;k<o.length;k++){var t=o[k];("undefined"==typeof p||t.height>p)&&(p=t.height),("undefined"==typeof q||t.height<q)&&(q=t.height)}s.height=(p+q)/2+j;var u=Cesium.Ellipsoid.WGS84.cartographicToCartesian(s);return m.flyTo({destination:u}),!0};var d=$.map(n.entities.entities,function(a){return new b({id:a.id,name:a.name,description:a.properties.description,distance:a.properties.distance,link:a.properties.link})});c.tours(d),c.filteredTours.subscribe(function(a){for(var b=n.entities.entities,c=0;c<b.length;c++){var d=b[c];d.polyline&&(d.polyline.show=new Cesium.ConstantProperty(!1)),d.polygon&&(d.polygon.show=new Cesium.ConstantProperty(!1))}$.each(a,function(){var a=this,b=n.entities.getById(a.id());b.polyline&&(b.polyline.show=new Cesium.ConstantProperty(!0)),b.polygon&&(b.polygon.show=new Cesium.ConstantProperty(!0))})})}$(".left-panel").removeClass("loading"),ko.applyBindings(new c,document.getElementById("tour-filter-form"))}});