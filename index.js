const TelegramBot = require('node-telegram-bot-api');
const db = require('./db.json');
const TOKEN = process.env.TELEGRAM_TOKEN || '6540506785:AAEsT4W7nl1q5pw_Izho4Lb8DCF4Pd_T_UM';
const options = {
    polling: true
};
const bot = new TelegramBot(TOKEN, options);


let result = undefined
const searchResult = (dataBase, searchItem) => {
    dataBase.forEach((obj, index) => {
        obj.bsw.forEach((bswNumber) => {
            if (bswNumber === searchItem) {
                result =
`bsw: ${obj.bsw.join(', ')}

Номер шкафа: ${obj.boxNumber}
                           
Адрес: ${obj.address}
                             
Размещение: ${obj.placement}
                     
Доступ: ${obj.access || 'Нет информации'}
                            
Ключ: ${obj.keyType}`
            }
            if (dataBase.length - 1 === index && bswNumber !== searchItem && result === ''){
                result = 'Ничего не найдено'
            }
        })
        
    })
}

bot.on("polling_error", err => console.log(err.data.error.message));
bot.on('text', async msg => {
    try {
       console.log(msg.text)
       await searchResult(db, msg.text)
       await bot.sendMessage(msg.chat.id, result).then(result = '')
        }
    catch(error) {console.log(error)}
})