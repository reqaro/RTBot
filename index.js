const TelegramBot = require('node-telegram-bot-api');
const db = require('./db.json');
const includes = require('lodash.includes');
const TOKEN = process.env.TELEGRAM_TOKEN || '6240651253:AAHGrQabSvHwz4kGxXkOyQdTrA4h2TCQBeE';
const options = {
    polling: true
};
const bot = new TelegramBot(TOKEN, options);

/*
const users = [
    {
        userID: 428762299,
        userName: 'admin'
    },
    {
        userID: 6248527725,
        userName: 'admin2'
    },
    {
        userID: 426072283,
        userName: 'Харин Никита Олегович'
    },
    {
        userID: 668864146,
        userName: 'Агафонов Илья Андреевич'
    },
    {
        userID: 1061466468,
        userName: 'Гришин Александр Павлович'
    },
    {
        userID: 502934061,
        userName: 'Наговицын Денис Анатольевич'
    },
    {
        userID: 1312199908,
        userName: 'Матюнин Евгений Сергеевич'
    },
    {
        userID: 602091061,
        userName: 'Копылов Александр Иванович'
    },
    {
        userID: 5679740990,
        userName: 'Сметанин Василий Юдифович'
    },
    {
        userID: 160804062,
        userName: 'Сидоркин Евгений'
    },
    {
        userID: 1398577310,
        userName: 'Екатерина Лобастова'
    },
    {
        userID: 898485999,
        userName: 'Ефименко Дима'
    },
    {
        userID: 435153612,
        userName: 'Савинский Евгений Васильевич'
    },
    {
        userID: 362467459,
        userName: 'Шихов Лев Николаевич'
    },
    {
        userID: 1183735095,
        userName: 'Шуги Заид'
    },
    {
        userID: 845546208,
        userName: 'Фрик Артем Олегович'
    },
    {
        userID: 505349920,
        userName: 'Худяков Денис Юрьевич'
    },
    {
        userID: 5109121035,
        userName: 'Аверин Антон Сергеевич'
    },
    {
        userID: 5289428093,
        userName: 'Шалгин Денис Алексеевич'
    },
    {
        userID: 798369458,
        userName: 'Татаринов Фёдор Алексеевич'
    },
    {
        userID: 215340391,
        userName: 'Шишмаков Сергей Николаевич'
    },
    {
        userID: 183944443,
        userName: 'Олег'
    },
    {
        userID: 1444645313,
        userName: 'Важенин Сергей Александрович'
    },
    {
        userID: 5372876842,
        userName: 'Евдокимов Вячеслав Викторович'
    },
    {
        userID: 470042019,
        userName: 'Банников Сергей Аркадьевич'
    },
    {
        userID: 982193643,
        userName: 'Еремеев Александр Сергеевич'
    },
    {
        userID: 301135340,
        userName: 'Ткаленко Ефим Евгеньевич'
    },
    {
        userID: 6423799761,
        userName: 'Терехов Павел Алексеевич'
    },
    {
        userID: 312910221,
        userName: 'Сычев Сергей Алексеевич'
    },
    {
        userID: 300536750,
        userName: 'Габов Михаил Сергеевич'
    },
    {
        userID: 609934310,
        userName: 'Сморкалов Григорий Александрович'
    },
    {
        userID: 426011159,
        userName: 'Игнатьев Никита Анатольевич'
    },
    {
        userID: 909981288,
        userName: 'Половников Алексей Александрович'
    },
    {
        userID: 1644980928,
        userName: 'Сидоров Роман Викторович'
    },
    {
        userID: 6661421631,
        userName: 'Егоров Максим Алексеевич'
    },
    {
        userID: 346536777,
        userName: 'Овчинников Роман Олегович'
    },
    {
        userID: 203900025,
        userName: 'Караваев Александр Аркадьевич'
    },
    {
        userID: 480810485,
        userName: 'Курдюмов Константин Сергеевич'
    },
    {
        userID: 227973738,
        userName: 'Чураков Виталий Евгеньевич'
    },
    {
        userID: 204824868,
        userName: 'Смирнов Вячеслав Анатольевич'
    },
    {
        userID: 517906844,
        userName: 'Кунаков Дмитрий Александрович'
    },
    {
        userID: 1719443270,
        userName: 'Липнин Кирилл Александрович'
    },
    {
        userID: 943014930,
        userName: 'Шустов Тимофей Сергеевич'
    },
    {
        userID: 459237996,
        userName: 'Дубовцев Данил Дмитриевич'
    },
    {
        userID: 1879290823,
        userName: 'Кошурников Андрей Васильевич'
    },
    {
        userID: 5223867191,
        userName: 'Пирожков Дмитрий Владимирович'
    },
    {
        userID: 516308883,
        userName: 'Маркашанский Денис Владимирович'
    },
    {
        userID: 1313999888,
        userName: 'Шалагинов Константин Юрьевич'
    },
    {
        userID: 462817909,
        userName: 'Дудин Виктор Геннадьевич'
    },

    

]
const usersID = users.map((elem) => elem.userID)
*/

let result = ''
const searchResult = (dataBase, searchBsw) => {
    dataBase.forEach((obj, index) => {
        obj.bsw.forEach((bswNumber) => {
            if (bswNumber.trim() === searchBsw) {
                result =
                    `bsw: ${obj.bsw.join(', ')}

Номер шкафа: ${obj.boxNumber}
                           
Адрес: ${obj.address}
                             
Размещение: ${obj.placement}
                     
Доступ: ${obj.access || 'Нет информации'}
                            
Ключ: ${obj.keyType}`
            }
            if (dataBase.length - 1 === index && bswNumber !== searchBsw && result === '') {
                result = 'Ничего не найдено, убедитесь в корректности введенных данных. Пример: <code>bsw1160603</code>, <code>Bsw1160603</code>, <code>BSW1160603</code>'
            }
        })

    })
}

bot.on('text', async msg => {
    try {
        console.log('id:',
            msg.from.id,
            ',firstName: ',
            msg.from.first_name,
            ',lastName: ',
            msg.from.last_name,
            ',Время: ',
            `${new Date().getHours()}:${new Date().getMinutes()}/${new Date().getDate()}.${new Date().getMonth()+1}`,
            ',text: ' + msg.text,)


        if(msg.text === '/start') {
            await bot.sendMessage(msg.chat.id, `
Например введите: <code>bsw1160603</code>
`, {
                parse_mode: "HTML"
            })}

//        if (includes(usersID, msg.from.id)) {
            await searchResult(db, msg.text.toLowerCase())
            await bot.sendMessage(msg.chat.id, result, {parse_mode: "HTML"}).then(result = '')
//        }
        
    } catch (error) {
        console.log(error)
    }
})

bot.on("polling_error", err => console.log(err.data.error.message));
