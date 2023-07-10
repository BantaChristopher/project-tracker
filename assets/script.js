var currentDate = dayjs().format('MMM DD, YYYY');
var currentTime = dayjs().format('hh:mm:ss a')
$('#dateTime').text(currentDate + " at " + currentTime);

function countSeconds() {  
    setInterval(function () {
        var currentTime = dayjs().format('hh:mm:ss a')
        $('#dateTime').text(currentDate + " at " + currentTime);
    }, 1000);
  };

countSeconds()