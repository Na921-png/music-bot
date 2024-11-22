<center><img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=KYUU&fontSize=80&fontAlignY=35&animation=twinkling&fontColor=gradient" /></center>

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">KYUU</h1>
  <p align="center">KYUU is a Discord music bot that uses Discord.js, lavalink-client, and TypeScript.
    <br />
    <a href="https://discord.gg/wnhyvUD5Ze/issues">Report Bug & Request Feature</a>
  </p>
</p>

## 🔥 Unique Features

- User-friendly and Easy to Use
- Highly Configurable
- Customizable Prefix
- Multilingual support [Here](/Translation.md)
- Hybrid Command Handling (Slash and Normal Commands)
- Developed using TypeScript and Discord.js v14
- Advanced Music System
- Powerful Search Engine
- 12 + Music Filters
- 24/7 Music Playback
- Playlist commands
- Music channel system


- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) [Recommend LTS or higher](https://nodejs.org/)
- ![Lavalink](https://img.shields.io/badge/Lavalink-7289DA?style=for-the-badge&logo=discord&logoColor=white) [v4 or higher](https://github.com/lavalink-devs/lavalink)

### Optional

- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) [Optional](https://www.mongodb.com/try/download/community) (For MongoDB database)

## 🚀 Installation from source

1. Clone the Lavamusic repository:

```bash
git clone https://discord.gg/wnhyvUD5Ze.git
```

2. Change to the Lavamusic directory:

```bash
cd lavamusic
```

3. Install the required packages:

```bash
npm i
```

4. Copy the .env.example file to .env and fill in all required values.
Note: Optional values ​​are noted as comments in the settings.

5. Generate the Prisma client:

```bash
npm run db:push
```

6. Run the migrations (Only if you want to migrate your database):

```bash
npm run db:migrate
```

7. Run the bot:

If you are using Windows, click run.bat on Windows explorer.

```bash
npm start
```

8. Invite the bot to your server:

Generate an invite link for your bot and invite it to your server using the [Discord Developer Portal](https://discord.com/developers/applications) or [Permissions Calculator](https://discordapi.com/permissions.html).

## 🚀 Installation using Docker Compose

This section assumes you have Docker and Docker Compose installed and running correctly.
Edit docker-compose.yml and make sure to set the following variables:
Your .env file should look like this or you can use the .env.example file.

```yaml
TOKEN="." # Your bot token and remember, don't show everyone your bot token
DEFAULT_LANGUAGE= "EnglishUS" # Default language for bot
PREFIX="!" # Your prefix
OWNER_IDS=["859640640640640640","859640640640640640"] # Your discord id, you can add multiple ids
GUILD_ID="859640640640640640" # Your server ID (if you want to use it for a single server)
```

For more information how to fill all the variables go to this page.
You do not need to edit anything like the LAVALINK_SERVERS, DATABASE_URL and the ports unless you know what you're doing.
After saving your changes you can open a terminal and go to the same location as the docker-compose.yml file. Then run the following:

```bash
docker-compose up -d
```

The above command will start all your services and your bot should be up and running!
If you want to run it from the console, remove the -d argument.

To update, you only have to type the following:

```bash
docker-compose up --force-recreate --build -d
image prune -f
```

You can automate this by using [Watchtower](https://github.com/containrrr/watchtower). The following should be sufficient:

```bash
docker run --detach \
    --name watchtower \
    --volume /var/run/docker.sock:/var/run/docker.sock \
    --restart on-failure \
    containrrr/watchtower --cleanup
```

Do note that the bot will restart itself to update to the latest!

## 🔗 Useful Links

- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) [Node.js](https://nodejs.org/en/download/)
- ![Discord.js](https://img.shields.io/badge/Discord.js-7289DA?style=for-the-badge&logo=discord&logoColor=white) [Discord.js](https://discord.js.org/#/)
- ![Lavalink](https://img.shields.io/badge/Lavalink-7289DA?style=for-the-badge&logo=discord&logoColor=white) [Lavalink](https://github.com/lavalink-devs/Lavalink)
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) [MongoDB](https://www.mongodb.com/try/download/community)
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white) [PostgreSQL](https://www.postgresql.org/download/)
- ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) [Docker](https://www.docker.com/)
- ![Docker-Compose](https://img.shields.io/badge/Docker--Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white) [Docker-Compose](https://docs.docker.com/compose/)

## 📝 Tutorial

A tutorial has been uploaded on YouTube. Watch it by [clicking here](https://youtu.be/x5lQD2rguz0).

## 📜 Contributing

Thank you for your interest in contributing to Lavamusic! Here are some guidelines to follow when contributing:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Write clean and concise code that follows the established coding style.
3. Create detailed and thorough documentation for any new features or changes.
4. Write and run tests for your code.
5. Submit a pull request with your changes.
Your contribution will be reviewed by the project maintainers, and any necessary feedback or changes will be discussed with you. We appreciate your help in making Lavamusic better!

## 🔐 License

Distributed under the GPL-3.0 license. See ![LICENSE](https://img.shields.io/github/license/appujet/lavamusic?style=social) for more information.

## ☕ Donate

Do you like this project? Support it by donating!
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/H2H7LKT9L)

## 👥 Contributors

Thanks go to these wonderful people:
<a href="https://discord.gg/wnhyvUD5Ze/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=appujet/lavamusic" />
</a>

[version-shield]: https://img.shields.io/github/package-json/v/appujet/lavamusic?style=for-the-badge
[contributors-shield]: https://img.shields.io/github/contributors/appujet/lavamusic.svg?style=for-the-badge
[contributors-url]: https://discord.gg/wnhyvUD5Ze/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/appujet/lavamusic.svg?style=for-the-badge
[forks-url]: https://discord.gg/wnhyvUD5Ze/network/members
[stars-shield]: https://img.shields.io/github/stars/appujet/lavamusic.svg?style=for-the-badge
[stars-url]: https://discord.gg/wnhyvUD5Ze/stargazers
[issues-shield]: https://img.shields.io/github/issues/appujet/lavamusic.svg?style=for-the-badge
[issues-url]: https://discord.gg/wnhyvUD5Ze/issues
[license-shield]: https://img.shields.io/github/license/appujet/lavamusic.svg?style=for-the-badge
[license-url]: https://discord.gg/wnhyvUD5Ze/blob/master/LICENSE
[support-server]: https://discord.gg/PMpJnJaHmy
[support-shield]: https://img.shields.io/discord/942117923001098260.svg?style=for-the-badge&logo=discord&colorB=7289DA
