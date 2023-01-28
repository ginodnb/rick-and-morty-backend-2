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
    await charModel.findByIdAndDelete(id);
    // console.log(deleteCharacter)
    // res.send(`${deleteCharacter.charName} character has been deleted`)
    let allEpisodes = await charModel.find({});
    res.send(allEpisodes);
}

async function addCharHandler(req,res) {
    //body
    const {airDate, episodeName, episodeNumber, url, created } = req.body;
    let newChar = await charModel.create({
        // userName: email,
        episodeName,
        episodeNumber,
        airDate,
        url,
        created,
    })
    res.send(newChar);
}

async function updateCharHandler(req,res) {
    const id = req.params.id;
    const {airDate, episodeName, episodeNumber, url, created } = req.body;
    console.log("inside update", req.body);
    let updatedChar = await charModel.findByIdAndUpdate(id, {
        episodeName,
        episodeNumber,
        airDate,
        url,
        created,
    })
    // res.send(updatedChar);
    
    let allCharacters = await charModel.find({});
    res.send(allCharacters);
}

module.exports = {
    getEpisodesAPI,
    getCharAPI,
    getFaveChar,
    addCharHandler,
    deleteChar,
    updateCharHandler
}
