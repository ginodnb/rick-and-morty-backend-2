"use strict";

const mongoose = require("./index");

const charSchema = new mongoose.Schema({
    // username: String,
    episodeName: String,
    episodeNumber: String,
    airDate: String,
    url: String,
    created: String
    // charName: String,
    // charStatus: String,
    // charLocation: String,
    // charImage: String,
    // charEpisodes: String
})

const charModel = mongoose.model("episodes",charSchema);

function seedData() {
    const newChar = new charModel({
        username: "eeeyyesss@gmail.com",
        episodeName: "PILOT",
        episodeNumber: "S1, ep3",
        airDate: "june",
        url: "site",
        // charImage: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        created: "january"
    })
    newChar.save();
}

// seedData();

module.exports = charModel;