function initMap() {
        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center:  {lat: 43.471521, lng: -80.553370},
          mapTypeId: google.maps.MapTypeId.TERRAIN
        });
        var flightPlanCoordinates = [
          {lat: 43.471521, lng: -80.553370},
          {lat:43.471972, lng: -80.552151},
          {lat: 43.471345, lng: -80.551614},
          {lat: 43.471174, lng: -80.551416}
          // {lat: 21.291, lng: -157.821},
          // {lat: -18.142, lng: 178.431},
          // {lat: -27.467, lng: 153.027}
        ];
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: getRandomColor(),
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);
     }