require('dotenv').config()

const express = require('express')
const { Client, GatewayIntentBits } = require('discord.js')
const cors = require('cors')
  
const app = express()
app.use(cors())
app.use(express.json())

const discordClient = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] })
discordClient.login(process.env.BOT_KEY)
const channelId = process.env.SERVER_ID

discordClient.once('ready', () => {
  console.log(`Bot logado como ${discordClient.user.tag}`)
})

app.post('/roll', async (req, res) => {
  try {
    const channel = await discordClient.channels.fetch(channelId)
    const body = req.body

    await channel.send(body.formatedData)
    res.status(200).send('Mensagem enviada')
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error)
    res.status(500).send('Erro ao enviar mensagem no Discord')
  }
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
