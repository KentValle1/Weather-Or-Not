<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script>
        $(document).on("ready", function(){
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2020-09-01?inboundpartialdate=2020-12-01",
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    "x-rapidapi-key": "f655d74b8dmsh7124e9f74a7fa7ep1abd4ajsn3b73d28c941a"
                }
            }});
            $.ajax(settings).done(function (response) {
                console.log(response);
            });
            </script>
    </body>
</html>