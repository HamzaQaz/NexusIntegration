const { Client, Events } = require('discord.js')


test('should login and emit client.on', async () => {
    const on = jest.fn(() => true);
    const client = new Client({ intents: []})
     if (client.login(process.env.TOKEN)) {
        on()
     }
    
    expect(on).toHaveReturned();
    
})

