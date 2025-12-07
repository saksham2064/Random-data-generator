const { doesNotMatch } = require('assert');
const express = require('express')
const mongoose = require('mongoose')
const Employee = require("./models/Employee")
const app = express()
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/company')

 app.set('view engine', 'ejs');
 const getRandom = (arr) =>{
    let rno = Math.floor(Math.random() * (arr.length - 1))
   return arr[rno]
 }

app.get('/', (req, res) => {
  res.render('index', {foo : 'Foo'})
})

app.get('/generate',async (req, res) => {
    //Generate Random Data
      await Employee.deleteMany({})


    let randomName = ["Skm", "Meme", "Vonzy"]
    let randomLang = ["JS", "PY", "Dart"]
    let randomCity = ["California", "Australia", "Indonesia"]
    for(let index = 0; index<10; index++){
    let e = Employee.create({
        name: getRandom(randomName),
       
        salary: Math.floor(Math.random(0, 20000)),
        language: getRandom(randomLang),
        city: getRandom(randomCity),
        isManager: Math.random()>0?true:false,


    })

    console.log(e)
 }
  res.render('index', {foo : 'Foo'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
