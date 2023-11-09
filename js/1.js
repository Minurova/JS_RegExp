function task1()
{
    let isUrl = urlString => {
        let url = new RegExp('^(https?:\\/\\/)?'   + // проверка протокола
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'  + // проверка имени домена
        '((\\d{1,3}\\.){3}\\d{1,3}))'                       + // проверка ip адреса (версия 4, не 6)
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'                   + // проверка порта и пути
        '(\\?[;&a-z\\d%_.~+=-]*)?'                          + // проверка параметров запроса
        '(\\#[-a-z\\d_]*)?$','i');                            // проверка хэша
        return url.test(urlString);
        }
        let url = prompt("Введите URL адрес");
        console.log(isUrl(url)); 
}
function task2()
{
    function isName (name) {
        let re = /^([a-zA-Z\_\$])+[\dA-Za-z]*$/;                       
        return name.search(re);
        }
        let name = prompt("Введите название переменной JS");
        if (isName(name)!=-1)
            alert("Название переменной JS корректно");
        else
        alert("Название переменной JS некорректно");
}
function task3()
{
    let str=prompt("Введите строку");
    function isSymbol(str)
    {let re=/^[a-zA-Zа-яА-Я0-9]+$/;
        return str.search(re);
    }
    if (isSymbol(str)!=-1)
    alert("Строка состоит только из букв и цифр");
else
alert("Строка состоит не только из букв и цифр");
}
function task4()
{
    let str=prompt("Введите строку");
    function isSymbol(str)
    {let re=/^[^\.\^\$\*\+\?\{\}\[\]\\\|\(\)\d]{10,}$/;
        return str.search(re);
    }
    if (isSymbol(str)!=-1)
    alert("Строка не содержит спецсимволов и цифр и ее длина не менее 10 символов");
else
alert("Строка содержит либо спецсимвол, либо цифру, либо ее длина менее 10 символов");
}
function task5()
{
    let str=prompt("Введите строку");
    let letters=str.replace(/\d/gi,'');
    let numbers=str.replace(/\D/g,'');
    console.log(str);
    console.log('количество букв = ' + letters.length + ', количество цифр = ' + numbers.length);
}