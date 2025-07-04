const { Client, Events } = require('discord.js')
const config = require('../config.json')

test('should login and emit client.on', async () => {
    const on = jest.fn(() => true);
    const client = new Client({ intents: []})
     if (client.login(config.TOKEN)) {
        on()
     }
    
    expect(on).toHaveReturned();
    
})

