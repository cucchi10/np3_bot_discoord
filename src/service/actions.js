const { convertToLowerCase } = require('../utils/processWords')
const { ImagesDAO } = require('../db/dao/images-dao')

const imagesDAO = new ImagesDAO();

const ACTIONS = {
    1: async (message)=>{
        message.reply("¿ Quieres PENE ?");
    },

    2: async (message)=>{
        message.reply("¿ Usted desea PENE ?");
    },

    3: async (message)=>{
        const data = await imagesDAO.getImageByName('berenjena')
        if(!data) return
        message.reply(data[0].link)
    },

    4: async (message)=>{
        const data = await imagesDAO.getImageByName('durazno')
        if(!data) return
        message.reply(data[0].link)
    },

    5: async (message)=>{
        const data = await imagesDAO.getImageByName('durazno1')
        if(!data) return
        message.reply(data[0].link)
    },
}

function getActionOfmessage (message) {
    const messageLower = convertToLowerCase(message)
    try {
        if (messageLower.includes('hola')) {
            return 1
        }
        if (messageLower.includes('bueno')) {
            return 2
        }
        if (messageLower.includes('o')){
            return 3
        }
        if (messageLower.includes('e')){
            return 4
        }
        if (messageLower.includes('a')){
            return 5
        }
    
        return null
    } catch (error) {
        console.error(error)
        return null
    }
}


async function handleAction (message, action) {
    try {
        await ACTIONS[action](message)
    } catch (error) {
        console.error(error)
    }
}


module.exports = {
    getActionOfmessage,
    handleAction
}