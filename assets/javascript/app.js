$(document).ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCRYwu7YowK0Wrsqgo_bP64x7Tc859XMhE",
        authDomain: "train-time-44ea9.firebaseapp.com",
        databaseURL: "https://train-time-44ea9.firebaseio.com",
        projectId: "train-time-44ea9",
        storageBucket: "",
        messagingSenderId: "493942418497"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    $("#submitButton").on("click", function (event) {
        event.preventDefault();

        // convert first train to unix timestamp
        var firstTrainInUnix = moment($('#firstTrain').val().trim(), "HH:mm").format("X");
        // convert now to unix timestamp
        var nowInUnix = moment().format("X");
        // convert frequency into seconds
        var intervalInSeconds = ($("#frequency").val() * 60)

        // write function to check if firstTrainInUnix < nowInUnix
        // 

        var newTrain = {
            trainName: $("#trainName").val(),
            destination: $("#destination").val(),
            firstTrain: $("#firstTrain").val(),
            frequency: $("#frequency").val(),
            //nextTrain: getNextTrain(firstTrain),
            //minutesAway: 
        }

        // add train to database
        database.ref().push(newTrain);
        // clear the form 
        $('input').val('');
    })

    database.ref().on("child_added", function (snapshot) {

        $("tbody").append('<tr>');
        $("tbody").append('<td>' + snapshot.val().trainName + '</td>');
        $("tbody").append('<td>' + snapshot.val().destination + '</td>');
        $("tbody").append('<td>' + snapshot.val().frequency + '</td>');
        // $("tbody").append('<td>' + snapshot.val().nextArrival + '</td>');
        //  $("tbody").append('<td>' + snapshot.val().minutesAway + '</td>');
        $("tbody").append('</tr>');

    })



});