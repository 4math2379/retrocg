

var express = require('express');
var app = express();
var jade = require('jade');
var router = require('./router');



app.set('view engine', 'jade');
/* met le user ici  pour le blocker sur la page index*/
app.get ('/index',function (req, res) {
  var username = {
    gamer: 'Synesios'
  }


/*Gamer dans le context*/
res.render('index', {username: username});


res.render('index', function(err, jade) {
  res.send(jade);

  });
  console.log("INDEX PAGE LOADED !");

});



app.get ('/user', function(req, res){

  res.render('user');

  res.render('user', { name: 'Tobi' }, function(err, jade) {



  });
  console.log('USER PAGE LOADED !');

});

app.get ('/deck', function(req,res) {

  res.render('deck');

  res.render('deck', function(err,jade){


  });
  console.log('deckPage Loaded!');
});


app.get ('/article', function (req,res) {
  res.render('article');

  res.render('article', function (err,jade) {
    // body...
  })
  // body...
  console.log('article page LOADED !');
})




/*REBOSSE LA RECHERCHE PAR ID OU CLASSE */


app.get ('/aragorn', function(req,res) {

  res.render('aragorn');

  res.render('aragorn', function(req,res) {

  });
  console.log('aragorn LOADED !');
})




/* page contact*/

app.get ('/contact', function (req,res) {
  res.render('contact');

  res.render('contact', function (err,jade) {

  })
  console.log('contact page loaded !');
})


/*Email et twitter*/

app.get ('johnniy5@me.com', function (req,res) {
  res.render('johnniy5@me.com');

  res.render('#johnniy5@me.com', function (err, jade) {

  })
  console.log('Email ok');
})

/*post method*/








app.listen(3000);
console.log("Server on!");
