const { default: fetch }  = require('node-fetch')
const { MessageFlags, MessageFlagsBitField } = require('discord.js')
const { BASEURL } = require('./constants')
const { keys } = require('../../schemas/erlckeys')
const { default: chalk } = require('chalk')

module.exports = function validateKey(apikey, guild){
    if (!apikey) return 'Please specify a apikey'
        try {
        async function validate(apikey) {
            const response = await fetch('https://api.policeroleplay.community/v1/server', {
                headers: {
                    'Server-Key': 'LLRnRYBcdSrFHVmMSwjv-rlqJgydZXKhkmyopCFxNspbYliBVLePmZxesVmQa'
                }
            })
            const data = await response.json()
            return data
        }
            

            const response = validate(apikey)
            if (response.ok) {
                console.log(chalk.magentaBright(`ERLCAPI`), chalk.green(response))
                return 'ERLC KEY has been added!'
                
            } else {
                console.warn(chalk.magentaBright(`ERLCAPI`), chalk.yellow(`${guild}'s ERLC key is invalid or PRC API is down.`), response)
                return 'Invaild key.'
                
            }
        } catch (error) {
            console.warn(chalk.magentaBright(`ERLCAPI`), chalk.yellow(`${guild}'s ERLC key is invalid or PRC API is down.`), error)
            return `${guild}'s ERLC key is invalid or PRC API is down.`
        }


    }










