"use strict";

const {
  findCoverImageOfMusician,
} = require("../../repositories/multimedia-repository");

const createJsonError = require("../errors/create-json-errors");

async function getCoverImageOfMusician(req, res) {
  try {
    const { idSolista } = req.params;

    const coverImage = await findCoverImageOfMusician(idSolista, "CoverImage");

    res.send(coverImage);
  } catch (err) {
    createJsonError(err, res);
  }
}

module.exports = getCoverImageOfMusician;
