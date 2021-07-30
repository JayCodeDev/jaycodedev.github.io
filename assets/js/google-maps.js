function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 42.370891, lng: -83.114320};
    const map = new google.maps.Map(document.getElementById("google-maps"), {
      zoom: 10,
      center: myLatLng,
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Detroit, MI",
    });
  }