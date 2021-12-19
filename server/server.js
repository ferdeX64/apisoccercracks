require('./config/config')
const express = require('express')
const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.get('/',function(req,res){
    res.json(
        {
            "status": 200,
            "message": "Success query",
            "content": [
              {
                "age": 22,
                "firstname": "Meritan",
                "height": "185 cm",
                "lastname": "Shabani",
                "name": "M. Shabani",
                "nationality": "Germany",
                "photo": "https://media.api-sports.io/football/players/518.png",
                "weight": "78 kg"
              },
              {
                "age": 37,
                "firstname": "Branislav",
                "height": "185 cm",
                "lastname": "Ivanović",
                "name": "B. Ivanović",
                "nationality": "Serbia",
                "photo": "https://media.api-sports.io/football/players/1200.png",
                "weight": "89 kg"
              },
              {
                "age": 40,
                "firstname": "Wilfredo Daniel",
                "height": "186 cm",
                "lastname": "Caballero",
                "name": "W. Caballero",
                "nationality": "Argentina",
                "photo": "https://media.api-sports.io/football/players/2275.png",
                "weight": "81 kg"
              },
              {
                "age": 35,
                "firstname": "Christian",
                "height": "187 cm",
                "lastname": "Fuchs",
                "name": "C. Fuchs",
                "nationality": "Austria",
                "photo": "https://media.api-sports.io/football/players/18773.png",
                "weight": "89 kg"
              },
              {
                "age": 37,
                "firstname": "Wes",
                "height": "186 cm",
                "lastname": "Morgan",
                "name": "W. Morgan",
                "nationality": "Jamaica",
                "photo": "https://media.api-sports.io/football/players/18774.png",
                "weight": "101 kg"
              },
              {
                "age": 29,
                "firstname": "Jack",
                "height": "172 cm",
                "lastname": "Wilshere",
                "name": "J. Wilshere",
                "nationality": "England",
                "photo": "https://media.api-sports.io/football/players/18829.png",
                "weight": "68 kg"
              },
              {
                "age": 33,
                "firstname": "Kevin",
                "height": "188 cm",
                "lastname": "McDonald",
                "name": "K. McDonald",
                "nationality": "Scotland",
                "photo": "https://media.api-sports.io/football/players/19029.png",
                "weight": "82 kg"
              },
              {
                "age": 39,
                "firstname": "Gareth",
                "height": "183 cm",
                "lastname": "Barry",
                "name": "G. Barry",
                "nationality": "England",
                "photo": "https://media.api-sports.io/football/players/19153.png",
                "weight": "78 kg"
              },
              {
                "age": 34,
                "firstname": "Ahmed Eissa",
                "height": "183 cm",
                "lastname": "El Mohamady Abdel Fattah",
                "name": "Ahmed El Mohamady",
                "nationality": "Egypt",
                "photo": "https://media.api-sports.io/football/players/19186.png",
                "weight": "75 kg"
              },
              {
                "age": 30,
                "firstname": "José Ignacio",
                "height": "180 cm",
                "lastname": "Peleteiro Ramallo",
                "name": "Jota Peleteiro",
                "nationality": "Spain",
                "photo": "https://media.api-sports.io/football/players/19533.png",
                "weight": "70 kg"
              },
              {
                "age": 20,
                "firstname": "Elia",
                "height": "191 cm",
                "lastname": "Caprile",
                "name": "E. Caprile",
                "nationality": "Italy",
                "photo": "https://media.api-sports.io/football/players/30731.png",
                "weight": "74 kg"
              },
              {
                "age": 31,
                "firstname": "Henri",
                "height": "174 cm",
                "lastname": "Saivet",
                "name": "H. Saivet",
                "nationality": "Senegal",
                "photo": "https://media.api-sports.io/football/players/50237.png",
                "weight": "76 kg"
              },
              {
                "age": 18,
                "firstname": "Will",
                "height": "180 cm",
                "lastname": "Osula",
                "name": "W. Osula",
                "nationality": "England",
                "photo": "https://media.api-sports.io/football/players/315237.png",
                "weight": "81 kg"
              }
            ]
          }

    )
})

app.listen(process.env.PORT, () => {
  console.log(`Escuchando peticiones en el puerto 3000`)
})