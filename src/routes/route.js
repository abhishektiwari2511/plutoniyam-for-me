const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})
//1 
router.get("/movies",function(req,res){
    const moviename =["Rang de basanti", "The shining","Lord of the rings", "Batman begins"]

 res.send(moviename)
})
//2 & 3
router.get("/movies/:indexnumber",function(req,res){
    const moviename =["Rang de basanti", "The shining","Lord of the rings", "Batman begins"]
    let indexofmovie =  req.params.indexnumber
     if( indexofmovie < 0 || indexofmovie > moviename.length){
        console.log("please insert valid index")
        res.send("please insert valid index")
     }
     else{
        console.log(moviename[indexofmovie])
        res.send(moviename[indexofmovie])
     }
})
//4
router.get("/films",function(req,res){
    const movie= [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       console.log(movie)
       res.send(movie)
    })
    //5
router.get("/films/:filmId",function(req,res){
    const movie= [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

      const filmid = req.params.filmId
      for(let i=0;i<movie.length;i++) {
        let a= movie[i]
        
        if(a.id==filmid){
            console.log(a)
            return res.send(a)
        }
      }
      console.log("no movie exists with this id")
      return res.send("no movie exists with this id")
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;