var app = {

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        document.getElementById("location").innerHTML = "Android Sürümü: " +  window.device.version + "</br>" +
        "</br>" + "UUID: " +  window.device.uuid + "</br>" +
        "</br>" + "Platform: " +  window.device.platform + "</br>" +
        "</br>" + "Üretici: " +  window.device.manufacturer + "</br>" ;
    },


    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
