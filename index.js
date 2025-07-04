const { ShardingManager } = require('discord.js');
const config = require('./config.json');
const { default: chalk } = require('chalk');

const manager = new ShardingManager('./bot.js', { token: config.TOKEN })
manager.on('shardCreate', shard => console.log(chalk.magentaBright('SHARDING MANAGER'), chalk.green(`Launched shard ${shard.id}`)) )
 
manager.spawn();
    
