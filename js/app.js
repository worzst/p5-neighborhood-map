var initialLocs = [
  {
    title: "Unternehmen Mitte", 
    text: "test test test",
    address: "Gerbergasse 30, 4001 Basel",
    loc: {lat: 47.556580, lng: 7.588368}
  },
  { 
    title: "Irrsinn Bar", 
    text: "test test test",
    address: "Rebgasse 43, 4058 Basel",
    loc: {lat: 47.559682, lng: 7.595897}
  },
  {
    title: "Cargobar", 
    text: "test test test",
    address: "St. Johanns-Rheinweg 46, 4056 Basel",
    loc: {lat: 47.564293, lng: 7.584177}
  },
  { 
    title: "Paddy Reilly’s", 
    text: "test test test",
    address: "Steinentorstrasse 45, 4051 Basel",
    loc: {lat: 47.550941, lng: 7.588073}
  },
  {
    title: "Mr. Pickwick Pub", 
    text: "test test test",
    address: "Steinenvorstadt 13, 4051 Basel",
    loc: {lat: 47.553512, lng: 7.589183}
  }
];



var map,
allMarkers = [];

function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 13,
    center: {lat: 47.55468, lng: 7.58940},
    disableDefaultUI: true,
    styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
  });
  addMapMarkers(initialLocs);
}

function addMapMarkers(mark) {

  var infoWindow = new google.maps.InfoWindow();

  function createInfoWindow(markInf) {
    var infoContent = '<div class="info_content"><h4>' + markInf.title + '</h4>' 
      + '<p>' + markInf.text + '</p><p class="info_address">' + markInf.address + '</p></div>';

    infoWindow.setContent(String(infoContent));
    infoWindow.open(map, markInf);
  }

  function deleteMarkers() {
    for (var i = 0; i < allMarkers.length; i++) {
      allMarkers[i].setMap(null);
    }
    allMarkers = [];
  }

  for (var i = 0; i < mark.length; i++){
    var marker = new google.maps.Marker({
      position: mark[i].loc,
      map: map,
      title: mark[i].title,
      text: mark[i].text,
      address: mark[i].address
    });

    allMarkers.push(marker);

    google.maps.event.addListener(marker, 'click', (function(mark, i) {
      return function() {
        createInfoWindow(mark);
      }
    })(marker, i));
  }
}


google.maps.event.addDomListener(window, 'load', initialize);