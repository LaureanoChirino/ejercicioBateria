document.addEventListener("DOMContentLoaded", function() {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            function updateBatteryStatus() {
                if (battery.level <= 0.1 && !battery.charging) {
                    document.body.classList.add('no-animation');
                } else {
                    document.body.classList.remove('no-animation');
                }
            }

            updateBatteryStatus();

            battery.addEventListener('chargingchange', updateBatteryStatus);
            battery.addEventListener('levelchange', updateBatteryStatus);
        });
    } else {
        console.log("La API de Batería no es soportada en este navegador.");
    }
});