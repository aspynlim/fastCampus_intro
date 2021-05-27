function initMap() {
  const myLatLng = {
    lat: 37.782293,
    lng: -122.391240
  }

  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      center: myLatLng,
      // scroll 시 축소/확대 되는 것 방지
      scrollwheel: false,
      zoom: 18
    }
  );

  const marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'GitHub'
  });
}