/**
 * Created by gregw on 3/31/2016.
 */
// This example creates a 2-pixel-wide red polyline showing the path of William
// Kingsford Smith's first trans-Pacific flight between Oakland, CA, and
// Brisbane, Australia.

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        center: {lat:36.565516, lng:-79.1285763},
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

    var symbolOne = {
        path: 'M -2,0 0,-2 2,0 0,2 z',
        strokeColor: '#000000',
        fillColor: '#F00',
        fillOpacity: 0.1,
        strokeWeight: 5,
        scale:20
    };

    var symbolTwo = {
        path: 'M -1,0 A 1,1 0 0 0 -3,0 1,1 0 0 0 -1,0M 1,0 A 1,1 0 0 0 3,0 1,1 0 0 0 1,0M -3,3 Q 0,5 3,3',
        strokeColor: '#00F',
        rotation: 45
    };

    var symbolThree = {
        path: 'M -2,-2 2,2 M 2,-2 -2,2',
        strokeColor: '#292',
        strokeWeight: 4
    };

    var lineSymboltwo = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 20,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0
    };

    var lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 5,
        strokeColor: '#393',
        strokeOpacity: 1.0
    };


    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
    });

    function placeMarker(location) {
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: image
        });
    }

    var flightPlanCoordinatesTwo = [
        {lat:36.585516, lng:-79.375763},
        {lat:36.530516, lng:-79.3482978111111},
        {lat:36.475516, lng:-79.3208326222222},
        {lat:36.420516, lng:-79.2933674333333},
        {lat:36.365516, lng:-79.2659022444444},
        {lat:36.365516, lng:-79.2384370555556},
        {lat:36.415516, lng:-79.2109718666667},
        {lat:36.465516, lng:-79.1835066777778},
        {lat:36.515516, lng:-79.1560414888889},
        {lat:36.565516, lng:-79.1285763},
        {lat:36.585516, lng:-79.375763}


    ];


    var flightPathTwo = new google.maps.Polyline({
        path: flightPlanCoordinatesTwo,
        icons: [{
            icon: symbolOne,
            offset: '100%'
        }],
        strokeColor: '#FF0000',
        strokeOpacity: 0.3,
        strokeWeight: 30,
        map: map
    });

    //  flightPathTwo.setMap(map);

    var flightPlanCoordinates = [
        {lat:36.585516, lng:-79.385763},
        {lat:36.530516, lng:-79.3582978111111},
        {lat:36.475516, lng:-79.3445652166667},
        {lat:36.420516, lng:-79.3308326222222},
        {lat:36.365516, lng:-79.3102337305556},
        {lat:36.365516, lng:-79.2759022444444},
        {lat:36.415516, lng:-79.2209718666667},
        {lat:36.465516, lng:-79.1935066777778},
        {lat:36.515516, lng:-79.1660414888889},
        {lat:36.565516, lng:-79.1385763},
        {lat:36.585516, lng:-79.385763}

    ];

    // Create the polyline and add the symbol to it via the 'icons' property.
    var line = new google.maps.Polyline({
        path: flightPlanCoordinates,
        icons: [{
            icon: lineSymbol,
            offset: '100%'
        }],
        strokeOpacity:0.2,
        strokeColor: '#393',
        map: map
    });

    animateCircle(line,flightPathTwo);


}

// Use the DOM setInterval() function to change the offset of the symbol
// at fixed intervals.
function animateCircle(line,flightPathTwo) {
    var count = 0;
    window.setInterval(function() {
        count = (count + 1) % 500;

        var icons = line.get('icons');
        icons[0].offset = (count / 4) + '%';
        line.set('icons', icons);

        var iconstwo = flightPathTwo.get('icons');
        iconstwo[0].offset = (count / 4) + '%';
        flightPathTwo.set('icons', iconstwo);
    }, 20);




}
