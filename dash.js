$(document).on("ready", function() {
console.log("yo"); // Sanity Check

$('#start').click(function() {

   function getWinner() {

          if( raceDone === false ) {
              raceDone = true;
          } else {
              place = 'second';
          }

      }


    var lengthOfCar = $("#green").width();

    var randomSpeedA = Math.floor( (Math.random() * 10000) + 1 );
    var randomSpeedB = Math.floor( (Math.random() * 10000) + 1 );

    var raceDone = false;

    var place = 'first';
    var carWidth = $('#green').width();

    var lengthOfTrack = $(window).width() - carWidth;

    $('#green').animate({

        left: lengthOfTrack

    }, randomSpeedA, function() {

        getWinner();

        $('#aM span').text( 'Finished in ' + place + ' place!!');
        alert( place + ' place!!');

        });

    // red car will only move on spacebar key up, player has to remember
    $('#start').keyup(function (e){
    if (e.keyCode === 32) {
      $('#red').animate({

        left: lengthOfTrack

    }, randomSpeedB, function() {

        getWinner();

        $('#cS span').text( 'Finished in ' + place + ' place!!' );
        alert( place + ' place!!');

    $('#reset').click(function() {
        $('.cars').css('left','0');
         $('.lBd span').text('');
        });
      });
     }
    });
  });
});
