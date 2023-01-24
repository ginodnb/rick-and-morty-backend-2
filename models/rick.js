"use strict";

const mongoose = require("./index");

const charSchema = new mongoose.Schema({
    CharName: String,
    CharStatus: String,
    CharLocation: String,
    CharImage: String,
    CharEpisodes: String
})

const charModel = mongoose.model("characters",charSchema);

function seedData() {
    const newChar = new charModel({
        charName: "Rick Sanchez",
        charStatus: "alive",
        charLocation: "citidal of ricks",
        charImage: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        charEpisodes: "all"
    })
    newChar.save();
}

// seedData();

module.exports = charModel;