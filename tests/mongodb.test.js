const mongoose = require('mongoose');
jest.setTimeout(2000)


describe('Mongo Connection Test', () => {

    beforeEach(async () =>{
        try {
            await mongoose.connect(process.env.MONGOURL)
        } catch (error) {
            console.error(error)
            throw error
        }
    })

    afterEach(async () =>{
        await mongoose.connection.close(true)
    })

    test('should connect to the database', () =>{
        expect(mongoose.connection.readyState).toBe(1)
    })
})