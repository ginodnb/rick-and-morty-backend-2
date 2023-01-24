"use strict"

const express = require('express');
const rickRouter = express.Router();
const rickHandlers = require("../controllers/Rick");

rickRouter.get("/rick/episodeapi", rickHandlers.getEpisodesAPI);
rickRouter.get("/rick/charapi", rickHandlers.getCharAPI);


// POST localhost:3004/rick (body:{
//     "id": 2,
// "name": "Lawnmower Dog",
// "air_date": "December 9, 2013",
// "episode": "S01E02",
// "characters": [
// "https://rickandmortyapi.com/api/character/1",
// "https://rickandmortyapi.com/api/character/2",
// ],
// "url": "https://rickandmortyapi.com/api/episode/2",
// "created": "2017-11-10T12:56:33.916Z"
// }
// })

rickRouter.post("/rick",rickHandlers.addCharHandler)

rickRouter.get("/rick", rickHandlers.getFaveChar);

rickRouter.delete("/rick/:id", rickHandlers.deleteChar);



module.exports = rickRouter;