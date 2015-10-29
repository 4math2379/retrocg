/*mise en place du chaps de recherche*/
var $input = $("<input></input>");

/*Mise en place de l'overlay*/
var $overlay = $('<div id="overlay"></div>');

/*fenetre de controle du deck*/
var $controler = $("<canvas id='control' width="300" height="300"></canvas>")
var $caption= $("<p></p>");
var $button = $("<button></button>");









/*durant cet overlay placer une champs de recherche avec une fennetre de rajout
de bouton deans le deck ou la recherche*/
$overlay.append($controler);

/*attach l'overlay au body*/
$("body").append($overlay);


/*ouverture de la recherche*/
$('#content.action').click(function(event){
  event.preventDefault();
  var canvasLocation = $(this).attr("href");
  //1.1 update overlay > ouverture du canvas
  $controler.attr("src", canvasLocation);

  //1.2 show l'overlay
  $overlay.show();




  //1.3 get child alt attribute and set caption
  var captionText = $(this).children("canvas").attr("alt");
  $caption.text(captionText);


  });
