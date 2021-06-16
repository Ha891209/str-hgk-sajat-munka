const { mkdir, writeFile } = require('fs').promises

const createStarterTemplate = (folders, files) => {
    folders.map(folder => mkdir(folder))
    files.map(file => writeFile(file, ''))
}

module.exports = createStarterTemplate