// bot.onText(/\/meme/, (msg) => {
//     const chatid = msg.chat.id;
//     axios.get("https://meme-api.com/gimme/ProgrammerHumor/10")
//     .then(response => {
//         console.log(response.data); // Check if this returns memes
//     })
//     .catch(error => {
//         console.log("Error fetching memes:", error);
//     });
    
//     bot.sendPhoto(chatid, "https://meme-api.com/gimme/ProgrammerHumor/10.jpg")
    
// })