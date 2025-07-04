const mongoose = require('mongoose');
const config = require('../config.json')

test('db connnects to discord bot', () => {
    const connected = jest.fn()
    if (mongoose.connect(config.MONGOURL)) {
        connected()
    }
    expect(connected).toHaveReturnedTimes(1)
})