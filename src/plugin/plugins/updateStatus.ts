import type { Lavamusic } from '../../structures/index';
import type { BotPlugin } from '../index';

const updateStatusPlugin: BotPlugin = {
	name: 'Update Status Plugin',
	version: '1.0.0',
	author: 'Appu',
	initialize: (client: Lavamusic) => {
		client.on('ready', () => client.utils.updateStatus(client));
	},
};

export default updateStatusPlugin;

