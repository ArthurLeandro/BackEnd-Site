const fs = require('fs');
var express = require("express");
var bodyparser = require("body-parser");
var app = express();

var port = 8080;
// var url = "https://paperboardstudios.github.io/";

var urlEncoderParser = bodyparser.urlencoded({extended:false});

app.set("view engine", 'ejs');

app.use("/dist", express.static("dist"));
app.use("/images", express.static("images"));
app.use("/assets", express.static("assets"));

app.get("/",function(req,res){
  console.log("SERVER - opening index");
  res.render("index");
});

app.post("/",urlEncoderParser, function(req,res){
  let email = req.body.email + "\n";
  console.log(email);
  fs.appendFile('home-mail-list.txt',email,'utf-8',(err)=>{
    if(err) throw err;
    console.log("FILE SAVED");
    res.render("obrigado");
  })
  //salvar o email dentro de um arquivo txt para montar a base de pessoas interessadas nos nossos produtos
  //renderizar janela agradecendo
});

app.get("/us",function(req,res){
  console.log("SERVER - opening index-us");
  res.render("index-us");
});

app.post("/us",urlEncoderParser, function(req,res){
  console.log(res.body);
  let email = req.body.e-mail + "\n";
  console.log(req.body);
  fs.appendFile('home-mail-list.txt',email,'utf-8',(err)=>{
    if(err) throw err;
    console.log("FILE SAVED");
    res.render("obrigado-us");
  })
  //salvar o email dentro de um arquivo txt para montar a base de pessoas interessadas nos nossos produtos
  //renderizar janela agradecendo
});

app.get("/gallery",function(req,res){
  console.log("SERVER - opening gallery");
  res.render("gallery");
});
app.get("/gallery-us",function(req,res){
  console.log("SERVER - opening gallery-us");
  res.render("gallery-us");
});
app.get("/despertar-das-cinzas",function(req,res){
  console.log("SERVER - opening eventually");
  res.render("despertar-das-cinzas");
});
app.post("/despertar-das-cinzas",urlEncoderParser, function(req,res){
  let email = req.body.email + "\n";
  console.log(email);
  fs.appendFile('despertar-das-cinzas.txt',email,'utf-8',(err)=>{
    if(err) throw err;
    console.log("FILE SAVED");
    res.render("obrigado-us");
  })
  //salvar o email dentro de um arquivo txt para montar a base de pessoas interessadas nos nossos produtos
  //renderizar janela agradecendo
});

app.get("/despertar-das-cinzas-us",function(req,res){
  console.log("SERVER - opening eventually-us");
  res.render("despertar-das-cinzas-us");
});
app.post("/despertar-das-cinzas-us",urlEncoderParser, function(req,res){
  let email = req.body.email + "\n";
  console.log(email);
  fs.appendFile('despertar-das-cinzas.txt',email,'utf-8',(err)=>{
    if(err) throw err;
    console.log("FILE SAVED");
    res.render("obrigado");
  })
  //salvar o email dentro de um arquivo txt para montar a base de pessoas interessadas nos nossos produtos
  //renderizar janela agradecendo
});

app.get("*",function(req,res){
  res.render("404");
});

app.listen(port, function(){
  console.log("SERVER - Listening on:  "+ port);
});
