onmessage = function (e) {
    console.log('Получено сообщение от основного потока');
    let workerResult = 'Результат: ' + (Number(e.data[0])  + Number(e.data[1]));
    console.log('Отправка сообщения в основной поток');
    postMessage(workerResult);
}