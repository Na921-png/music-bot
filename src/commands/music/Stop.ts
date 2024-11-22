import { Command, type Context, type Lavamusic } from '../../structures/index';

export default class Stop extends Command {
	constructor(client: Lavamusic) {
		super(client, {
			name: 'stop',
			description: {
				content: 'cmd.stop.description',
				examples: ['stop'],
				usage: 'stop',
			},
			category: 'music',
			aliases: ['sp'],
			cooldown: 3,
			args: false,
			vote: false,
			player: {
				voice: true,
				dj: true,
				active: true,
				djPerm: null,
			},
			permissions: {
				dev: false,
				client: ['SendMessages', 'ReadMessageHistory', 'ViewChannel', 'EmbedLinks'],
				user: [],
			},
			slashCommand: true,
			options: [],
		});
	}

	public async run(client: Lavamusic, ctx: Context): Promise<any> {
		const player = client.manager.getPlayer(ctx.guild!.id);
		const embed = this.client.embed();

		player.stopPlaying(true, false);

		return await ctx.sendMessage({
			embeds: [embed.setColor(this.client.color.main).setDescription(ctx.locale('cmd.stop.messages.stopped'))],
		});
	}
}


