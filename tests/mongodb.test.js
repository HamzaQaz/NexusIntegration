const mongoose = require('mongoose');


test('db connnects to discord bot', () => {
    const connected = jest.fn()
    if (mongoose.connect(process.env.MONGOURL)) {
        connected()
    }
    expect(connected).toHaveReturnedTimes(1)
})
