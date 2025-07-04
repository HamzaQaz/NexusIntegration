const { SlashCommandBuilder, PermissionFlags, PermissionFlagsBits, PermissionsBitField, IntentsBitField, MessageFlags } = require('discord.js')

const validateKey = require('../../utils/Packages/ErlcAPI')

module.exports = {
    owner: true,
    data: new SlashCommandBuilder()
        .setName('erlc-initnalize')
        .setDescription('Initnalize the erlc integration! (API KEY REQUIRED!)')
        .addStringOption(option => option.setName('key').setDescription('Enter your ERLC API KEY here!').setRequired(true)),
    async execute(interaction) {
        const guild = interaction.member.guild
        const apikey = interaction.options.getString('key')
        const valid = validateKey(apikey, guild)
        interaction.reply(`${valid}`, MessageFlags.Ephemeral)
        

    }
    
}