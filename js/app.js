var initialLocs = [
  {
    name: "Unternehmen Mitte", 
    adress: "Gerbergasse 30, 4001 Basel",
    loc: {lat: 47.556580, lng: 7.588368}
  },
  { 
    name: "Irrsinn Bar", 
    adress: "Rebgasse 43, 4058 Basel",
    loc: {lat: 47.559682, lng: 7.595897}
  },
  {
    name: "Cargobar", 
    adress: "St. Johanns-Rheinweg 46, 4056 Basel",
    loc: {lat: 47.564293, lng: 7.584177}
  },
  { 
    name: "Paddy Reilly’s", 
    adress: "Steinentorstrasse 45, 4051 Basel",
    loc: {lat: 47.550941, lng: 7.588073}
  },
  {
    name: "Mr. Pickwick Pub", 
    adress: "Steinenvorstadt 13, 4051 Basel",
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
  addMapMarkers();
}

function addMapMarkers() {
	for (bar in initialLocs) {
    var marker = new google.maps.Marker({
      position: initialLocs[bar].loc,
      map: map,
      title: initialLocs[bar].name
    });

    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>'+initialLocs[bar].name+'</b>,' +
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });


    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }
}


google.maps.event.addDomListener(window, 'load', initialize);
/*
  var myLatLng = {lat: 47.556580, lng: 7.588368};
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Unternehmen Mitte'
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>,' +
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}


/*model*/
var locations = {
	bar_1: {
		name: 'Unternehmen Mitte',
		loc: 'lat: 47.556580, lng: 7.588368'
	}
}