var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        mapInit();
    }
};
var mapInit = function(){
	var OneMap ;
    
    require(["esri/map","esri/symbols/PictureMarkerSymbol","esri/graphic",
            "esri/SpatialReference",
            "esri/geometry/Point",
            "dojo/on","dojo/domReady!"],
        function(Map,PictureMarkerSymbol,Graphic,SpatialReference,Point,on) {
            var helper = null;

           
        OneMap = new GetOneMap('mapDiv','SM');  


                navigator.geolocation.getCurrentPosition(locationSuccess,locationError,{setHighAccuracy:true});
				 function locationSuccess(position){
                if(position.coords.latitude != null || position.coords.longitude != null)
				{
				var xVal = position.coords.longitude;
				var yVal = position.coords.latitude;
				OneMap.showLocation(xVal,yVal);
                  
                  
                }
            }
        function locationError(err){
                console.log("locationError: " + err.toString());
            }

            

        

         
          

        } 
    ); 
};
app.initialize();
