(function() {
    'use strict';
    angular
        .module('app.examples.maps')
        .controller('MapLabelDemoController', MapLabelDemoController);

    /* @ngInject */
    function MapLabelDemoController(uiGmapGoogleMapApi,$http){
        var vm = this;
        var dataObtained;
        vm.arrayCollection = [3,2,25];
        $http.get('assets/location/location.json').success(function(data){
            dataObtained = data;
			uiGmapGoogleMapApi.then(function(maps){
				vm.pathData = dataObtained,
				// specifying path parameters
				vm.polylines = [{
			        stroke: {
			            color: '#ff0000',
			            weight: 4
			        },
			        editable: true,
			        draggable: true,
			        geodesic: true,
			        visible: true,
			        icons: [{
			            icon: {
			                path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW,
			                url: 'assets/images/maps/blue_marker.png'
			            },
			            offset: '25px',
			            repeat: '50px'
			        }]
    			}];
    			//displaying maps properties
    			vm.labeledMap = {
				    center:{
				        latitude: 42.3349940452867,
				        longitude:-71.03531688843693
				    },
				    zoom: 12,
				    marker:{
				        options: {
				            icon: {
				                url: 'assets/images/maps/blue_marker.png',
				            },
				            // map: map,
						    draggable: true,

				            // animation: google.maps.Animation.BOUNCE
				        }

				    },   
				    options:{
				        scrollwheel:false,
				        // mapTypeId:google.maps.MapTypeId.HYBRID,
				        zoomControl: true,
				        // panControl:true
				    },
				    locationData: dataObtained
				};

				    // vm.labelTitle = 'Bibek Shah says "Hello from Arizona!';
			});

        });

    }
})();

