const { player } = require(".");

module.exports = async () => {
  player.on("trackStart", async (queue, track) => {
    queue.metadata.channel.send(`🎵 Tocando \`${track.title}\``);
  });
  player.on("trackAdd", async (queue, track) => {
    queue.metadata.channel.send(`🎵 Adicionando a playlist \`${track.title}\``);
  });
};
