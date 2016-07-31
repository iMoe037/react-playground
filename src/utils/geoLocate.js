export function geoLocate () {

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  function success(pos){
    const cord = pos.coords;
    console.log(pos.coords);
    return cord;
  }

  function error(err) {
    console.warn('Error(' + err.code + '): ' + err.message);
  };

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }
};
