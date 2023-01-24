"use strict";

const axios = require("axios");
const charModel = require("../models/rick");

async function getEpisodesAPI(req,res) {
    let allEpisodes = await axios.get("https://rickandmortyapi.com/api/episode");
    res.send(allEpisodes.data)
};

async function getCharAPI(req,res) {
    let allCharacters = await axios.get("https://rickandmortyapi.com/api/character");
    res.send(allCharacters.data)
};

async function getFaveChar(req,res) {
    let allCharacters = await charModel.find({});
    res.send(allCharacters)
};

async function deleteChar(req,res) {
    const id = req.params.id;
    let deleteCharacter = await charModel.findByIdAndDelete(id);
    console.log(deleteCharacter)
    res.send(`${deleteCharacter.charName} character has been deleted`)
}

async function addCharHandler(req,res) {
    //body
    const {name,status, location, image, episodes } = req.body;
    let newChar = await charModel.create({
        charName: name,
        charStatus: status,
        charLocation: location,
        charImage: image,
        charEpisodes: episodes
    })
    res.send(newChar);
}

module.exports = {
    getEpisodesAPI,
    getCharAPI,
    getFaveChar,
    addCharHandler,
    deleteChar
}
