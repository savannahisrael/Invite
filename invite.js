$("#submit").on("click", function(event){
    event.preventDefault();
    //Store User Input
    // var TrainName = $("#trainname").val().trim();
    var hostName = $("#hostNameForm").val().trim();
    var eventDate = $("#eventDateForm").val().trim();
    var eventTime = $("#eventTimeForm").val().trim();
    var customMessage = $("#customMessageForm").val().trim();

    console.log(hostName);
    console.log(eventDate);
    console.log(eventTime);
    console.log(customMessage);

    $("#hostName").html(hostName);
    $("#eventDate").html(eventDate);
    $("#eventTime").html(eventTime);
    $("#customMessage").html(customMessage);
});