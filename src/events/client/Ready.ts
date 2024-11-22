import { AutoPoster } from 'topgg-autoposter';
import { env } from '../../env';
import { Event, type Lavamusic } from '../../structures/index';

export default class Ready extends Event {
	constructor(client: Lavamusic, file: string) {
		super(client, file, {
			name: 'ready',
		});
	}

	public async run(): Promise<void> {
		this.client.logger.success(`${this.client.user?.tag} is ready!`);

		this.client.user?.setPresence({
			activities: [
				{
					name: env.BOT_ACTIVITY,
					type: env.BOT_ACTIVITY_TYPE,
				},
			],
			status: env.BOT_STATUS as any,
		});

		if (env.TOPGG) {
			const autoPoster = AutoPoster(env.TOPGG, this.client);
			setInterval(() => {
				autoPoster.on('posted', _stats => {
					null;
				});
			}, 86400000); // 24 hours in milliseconds
		} else {
			this.client.logger.warn('Top.gg token not found. Skipping auto poster.');
		}
		await this.client.manager.init({ ...this.client.user!, shards: 'auto' });
	}
}

