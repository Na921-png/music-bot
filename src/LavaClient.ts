import { type ClientOptions, GatewayIntentBits } from 'discord.js';
import { env } from './env';
import Lavamusic from './structures/Lavamusic';

const { GuildMembers, MessageContent, GuildVoiceStates, GuildMessages, Guilds, GuildMessageTyping } = GatewayIntentBits;

const clientOptions: ClientOptions = {
	intents: [Guilds, GuildMessages, MessageContent, GuildVoiceStates, GuildMembers, GuildMessageTyping],
	allowedMentions: { parse: ['users', 'roles'], repliedUser: false },
};

const client = new Lavamusic(clientOptions);
client.start(env.TOKEN);

