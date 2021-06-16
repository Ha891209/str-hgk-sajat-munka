//1. feladat
const createStarterTemplate = require('./utils')
const folders = ['controllers', 'routers', 'views']

const files = [
    './controllers/site.controller.js',
    './routers/site.router.js',
    './views/index.html',
    './app.js'
]
createStarterTemplate(folders, files)