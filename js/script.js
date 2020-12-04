  function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 41.048750, lng: 28.792600},
      zoom: 15
    });
  const marker = new google.maps.Marker({
    position: {lat: 41.048750, lng: 28.792600},
    map: map,
    animation: google.maps.Animation.DROP,
  });
  marker.addListener("click", toggleBounce);
  }
 function toggleBounce(){
   if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
  }