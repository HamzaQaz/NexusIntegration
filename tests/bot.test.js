const { Client, Events } = require('discord.js')
const token = process.env.TOKEN

jest.setTimeout(2000)
describe('Discord Client', () => {
    let client;

    beforeEach(() => {
        client = new Client({ intents: [] })


    });
    afterEach(() => {
        client.destroy()
    })

    test('should login and emit the ready event', async () => {
        const onReady = jest.fn()

        await new Promise((resolve) => {
            client.once(Events.ClientReady, () => {
                onReady()
                resolve()
            })

            client.login(token)

        })
        expect(onReady).toHaveBeenCalled()
    })
})
