const { SlashCommandBuilder, blockQuote } = require('discord.js')

const getOffense = [
    'Você não passa de uma paquita do capeta',
    'Até um espantalho do fandangos trabalha melhor que você',
    'Um bife de rato é mais agradável do que você',
    'Mano, você é um saco de vacilo',
    'Olha, pra mim você é pior que um saco de lixo de peruca',
    'Sai daqui seu geladinho de chorume',
    'Ou escova o dente, ou sai daqui com esse bafo de bunda',
    'Nossa mano, você só fala merda, até parece com uma metralhadora de bosta',
    'Lá vem o sofá de zona',
    'Lá vem o cara de cu com cãibra',
    'Vai coçar o cu com serrote',
    'Cala a boca e me respeita que eu só não sou teu pai porque tua mãe não tinha troco pra 10',
    'Esse sujeito sofre de esgotocefalia',
    'Zé Bostola!',
    'Fala com a boca e deixa o cu pra cagar',
    'Fica quieto ai que você é mais largo que a cueca do Claytin',
    'Alá, o filho de puta com caminhoneiro',
    'Você é burro de nascença ou estudou na escola do Gray?',
    'Vai pra lá, aborto de rato...'
]

module.exports = {
    data: new SlashCommandBuilder()
        .setName('insult')
        .setDescription('Gives a free insult to your friend')
        .addUserOption((opt) =>
            opt
                .setName('user')
                .setDescription('The friend you want to insult')
                .setRequired(true)
        ),

    async execute(interaction) {
        // interaction.guild is the object representing the Guild in which the command was run
        await interaction.reply(
            `${interaction.user} **diz para** ${interaction.options.getUser(
                'user'
            )}:  \`\`\`"${getOffense[Math.floor(Math.random() * getOffense.length)]}"\`\`\` `
        )
    },
}
