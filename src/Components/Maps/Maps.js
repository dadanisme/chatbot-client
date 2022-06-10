// import { useEffect, useRef } from "react";

// function Maps() {
//   const mapRef = useRef(null);
//   var service;
//   var infowindow;

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src =
//       "https://maps.googleapis.com/maps/api/js?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&libraries=places&callback=initMap";
//     script.defer = true;
//     document.body.appendChild(script);

//     window.initMap = function () {
//       var map = new window.google.maps.Map(mapRef.current, {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8,
//       });
//       var infoWindow = new window.google.maps.InfoWindow();
//       var service = new window.google.maps.places.PlacesService(map);
//       service.nearbySearch(
//         {
//           location: { lat: -34.397, lng: 150.644 },
//           radius: 500,
//           type: ["restaurant"],
//         },
//         callback
//       );
//       function callback(results, status) {
//         if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//           for (var i = 0; i < results.length; i++) {
//             createMarker(results[i]);
//           }
//         }
//       }
//       function createMarker(place) {
//         var placeLoc = place.geometry.location;
//         var marker = new window.google.maps.Marker({
//           map: map,
//           position: place.geometry.location,
//         });
//         window.google.maps.event.addListener(marker, "click", function () {
//           infoWindow.setContent(place.name);
//           infoWindow.open(map, this);
//         });
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <div ref={mapRef} style={{ width: "100%", height: "100%" }}>
//         Hello
//       </div>
//     </div>
//   );
// }

// export default Maps;
