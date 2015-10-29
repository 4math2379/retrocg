//animation click de la souris avec gametext sans quitter la page runner
// soluce: create overlay pour une image plus large- lightbox
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption= $("<p></p>");
var $button = $("<button></button>");


// add l'image
$overlay.append($image);


// a Caption
$overlay.append($caption);

//le bouton pour le deck
$overlay.append($button);



// add an overlay
$("body").append($overlay);




//1.Capture le click event on a link on a image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //1.1 update overlay > image link
  $image.attr("src", imageLocation);

  //1.2 show l'overlay
  $overlay.show();




  //1.3 get child alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);


  });

//2. when overlay is clicked
$overlay.click(function(){
  //2.1 hide l'overlay
  $overlay.hide();





  });


//mouse hover a revoir lol
// $('img').hover(function(){
//     $(this).attr('src','src');
// },function(){
//      $(this).attr('src','src');
// });

$("#imageGallery").hover(function(){

    $(this).find("img").handlerOut();

}, function() {

    $(this).find("img").handlerIn();

});



//propriété du bouton//
$button.text("Create deck");

//liens vers la page du creation du deck via le button
$button.click(function(){
   window.location.href='../user/mydecklist.html';
})
