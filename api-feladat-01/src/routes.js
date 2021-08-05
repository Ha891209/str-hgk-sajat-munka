const express = require('express');
const { join } = require('path');
const { getFileContent } = require('./utils');

const controller = express.Router();

const people$ = getFileContent(join(__dirname, '..', 'server', 'db.json'));

controller.get('/count', async (req, res) => {
    const people = await people$;
    res.json(people.length);
});

controller.get('/vaccinated', async (req, res) => {
    const people = await people$;
    const vaccinatedPeople = people.filter(person => person.vaccine);
    res.json(vaccinatedPeople);
});

module.exports = controller;