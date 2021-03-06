export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    getStrTime,
    showOnLyPartOfString,
    compareDatesByMs,
    compareString,
    getFullTimeStr
}

function getStrTime(time){
    const ms=new Date(time);
    const todayYime=new Date();
    const hrs = ms.getHours();
    const mins = ms.getMinutes();
    const day = ms.getHours();
    const month = ms.getMinutes();

    let str= `${hrs < 10 ? '0' : ''}${hrs}:${mins < 10 ? '0' : ''}${mins}`
   let date=`${day}/${month}`
   //if ((todayYime-ms)>(259,200,000)) return  date;

    return str;

}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function showOnLyPartOfString(str,num,withDotes) {

    let res=str;
    if (str.length>num){
     res=str.substring(0,num)
    }

     if(withDotes) {
     res=''+res+'...'
     }
    return res;
}

function compareDatesByMs(email1,email2){
    debugger;
let date1=new Date(email1.sentAt)
let date2=new Date(email2.sentAt)

if (date1 > date2) return 1
if (date1 < date2) return -1
return 0;
}

function compareString(mail1,mail2){
    var str1=mail1.subject.toLowerCase(), str2=mail2.subject.toLowerCase();
    if (str1 < str2) //sort string ascending
     return -1;
    if (str1 > str2)
     return 1;
    return 0;
}

function getFullTimeStr(time){
    debugger;
    let str='';
    const ms=new Date(time);
    const day=ms.getDay();
    const month=ms.getMonth();
    const year=ms.getYear();
    const hrs = ms.getHours();
    const mins = ms.getMinutes();

     str=str+ `${day}/${month}/${year} ${hrs < 10 ? '0' : ''}${hrs}:${mins < 10 ? '0' : ''}${mins}`
     console.log(str);
    return str;
}