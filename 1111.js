//FIREBASE--------------------------------------------------------------------------------------------------------

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWGZVi75cYj0VnTLb2oLkzre6YBfjMWoc",
    authDomain: "chichiemem2-79108.firebaseapp.com",
    databaseURL: "https://chichiemem2-79108-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chichiemem2-79108",
    storageBucket: "chichiemem2-79108.appspot.com",
    messagingSenderId: "204565850648",
    appId: "1:204565850648:web:65e48cf58188413ebe716d",
    measurementId: "G-XGGWV0LCDD"
};
// Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);

firebase.database().ref("/Sensors/DHT11").on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("nhietdo").innerHTML = "Temperature: " + data.Nhietdokk + "°C";
    document.getElementById("doam").innerHTML = "Humidity: " + data.Doam + "%";
});

firebase.database().ref("/Sensors/DSB18B20").on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("nhietdo2").innerHTML = " " + data + "°C";
});

firebase.database().ref("/Sensors/PH").on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("ph").innerHTML = data;
});
firebase.database().ref("/Sensors/Mucnuoc").on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("mucnuoc").innerHTML = data + "cm";
});

// nhút nhấn manual/auto và kích hoát máy bơm
var btauto = document.getElementById("Auto");
var btmanual = document.getElementById("Manual");
btauto.onclick = function () {
    document.getElementById("chedo").src = "auto.png" 
        firebase.database().ref("status").update({
            "chedo": 1
        });
}
btmanual.onclick = function () {
    document.getElementById("chedo").src = "manual.png" 
        firebase.database().ref("status").update({
            "chedo": 0
        });
}
var bton = document.getElementById("on");
var btoff = document.getElementById("off");
bton.onclick = function () {
    document.getElementById("buomtuoi").src = "on.png"
    firebase.database().ref("status").update({
        "maybom": 1
    });
}
btoff.onclick = function () {
    document.getElementById("buomtuoi").src = "off.png"
    firebase.database().ref("status").update({
        "maybom": 0
    });
}