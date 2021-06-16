const generateUserList = user =>
    user.map(item => ({
        isAdult: item.age > 18 ? true : false,
        fullName: `${item.firstName} ${item.lastName}`
    })
    )

const getUserNames = user => [...user.map(item => `${item.firstName} ${item.lastName}`)].join(',')

module.exports = Object.freeze({
    generateUserList,
    getUserNames
})