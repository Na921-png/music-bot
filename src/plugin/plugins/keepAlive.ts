import http from 'node:http';
import { env } from '../../env';
import type { Lavamusic } from '../../structures/index';
import type { BotPlugin } from '../index';

const keepAlive: BotPlugin = {
	name: 'KeepAlive Plugin',
	version: '1.0.0',
	author: 'Appu',
	initialize: (client: Lavamusic) => {
		if (env.KEEP_ALIVE) {
			const server = http.createServer((_req, res) => {
				res.writeHead(200, { 'Content-Type': 'text/plain' });
				res.end(`I'm alive! Currently serving ${client.guilds.cache.size} guilds.`);
			});
			server.listen(3000, () => {
				client.logger.info('Keep-Alive server is running on port 3000');
			});
		}
	},
};

export default keepAlive;

