const utils = require('./utils')
const utils2 = require('./utils2')

// 1. feladat
console.log(utils.increaseAndFormatDate([new Date('1989-12-09T11:50:10'), new Date('2020-01-04T11:50:10'), new Date('1990-01-10T11:50:10')]))


//2. feladat
const user = [
    {
        firstName: 'Kópis-Horváth',
        lastName: 'Anikó',
        age: 31
    },
    {
        firstName: 'Kópis',
        lastName: 'Merse',
        age: 1
    },
    {
        firstName: 'Kópis',
        lastName: 'Dávid',
        age: 31
    }
]
console.log(utils2.generateUserList(user))
console.log(utils2.getUserNames(user))