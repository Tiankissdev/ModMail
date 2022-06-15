const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, args, config) => {

  try {
    message.channel.send({embed: {
      color: 7419530,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
      },
      title: "Métodos de pago",
      url: "",
      description: "",
      fields: [{
          name: "**PAYPAL**",
          value: "jorgenieves920@gmail.com"
        },
        {
          name: "**MERCADO PAGO**",
          value: "Gmail: jorgenieves920@gmail.com",
          value: "CVU: 0000003100068079563552",
          value: "Alias: BarderoLife"
        },
        {
          name: "**UALA**",
          value: "CVU: 0000007900204327890131",
          value: "Alias: JUANIRODRIGUEZ7.UALA"
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: "Barderos Life"
      }
    }
});
  } catch (error) {
    console.log(error)
  }
}