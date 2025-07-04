const { Client, Events } = require('discord.js')
const config = require('../../config.json')


function clienttest() {
    const client = new Client({ intents: []})
client.login(config.TOKEN)
client.once(Events.ClientReady, () => {
    return "connnected"

})

}

module.exports = clienttest


    
    
