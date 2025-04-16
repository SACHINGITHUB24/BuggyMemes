const express  = require('express')
const app = express()
const telegrambot = require('node-telegram-bot-api')
const axios  = require('axios')
const cron = require('node-cron')



const token = '7700048151:AAE84drvL6g_mfuKkCRwHdZDPtzy-cUCCOg'

const bot = new telegrambot(token, {polling: true})


bot.onText(/\/start/, (msg,match) => {
    const chatid = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatid, "Welcome to BuggyMemesBot Made By Sachin Mehta");
})

bot.onText(/\/meme/, async (msg) => {
    const chatid = msg.chat.id;

    try{
        const response = await axios.get('https://www.reddit.com/r/ProgrammerHumor/top.json?limit=500000')
        const meme = response.data.data.children
        .filter(post => post.data.post_hint === 'image')
        .map(post => post.data.url);

        const randommeme = meme[Math.floor(Math.random() * meme.length)];
  

        cron.schedule('* 40 6 * * *', () => {

            bot.sendPhoto(chatid,randommeme); 

        })



        

    }catch(error){
        bot.sendMessage(chatid,"Sorry there is an Technical Issue")
    }
   

    
})



bot.on('Hello BuggyMemesBot', (msg) => {
    const chatid = msg.chat.id;
    

    bot.sendMessage(chatid,"Hello Welcome to BuggyMemesBot")

})