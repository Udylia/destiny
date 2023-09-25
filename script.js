const image = document.querySelector('.myImage');
const text = document.querySelector('h2');

const buttonOne = document.querySelector('.btnOne');
const buttonTwo = document.querySelector('.btnTwo');

buttonOne.addEventListener('click', yes);
buttonTwo.addEventListener('click', no);

function yes(){
    image.setAttribute('src', 'https://avatars.mds.yandex.net/i?id=1d516e52cef2af855cb0632e9f1913ed9ed7d65d-7801542-images-thumbs&n=13');
    text.innerHTML = "Приедут ли ребята в Жуки?";
    buttonOne.innerHTML = "ПРИЕДУТ";
    buttonTwo.innerHTML = "НИКОГДА";

    buttonOne.addEventListener('click', bugs);
    buttonTwo.addEventListener('click', noBugs);
}

function bugs(){
    image.setAttribute('src', 'https://avatars.mds.yandex.net/i?id=7ecd2905150bb246ea3a1cc507e30596-5877328-images-thumbs&n=13');
    text.innerHTML = "Найдут свою любовь и приключения";
    buttonOne.style = 'display:none';
    buttonTwo.style = 'display:none';
}

function noBugs() {
    image.setAttribute('src', 'https://avatars.mds.yandex.net/i?id=cf661e1d3f047f8bd170a4fb03cd3d9989cbcecd-7822413-images-thumbs&n=13');
    text.innerHTML = "Уйдут служить в армию";
    buttonOne.style = 'display:none';
    buttonTwo.style = 'display:none';
}

function no(){
    image.setAttribute('src', 'https://avatars.mds.yandex.net/i?id=560351b0e46c08614ad41736b14330aed615ce59-8392873-images-thumbs&n=13');
    text.innerHTML = "Обманет ли их Инвестор?";
    buttonOne.innerHTML = "ОбМАНЕТ";
    buttonTwo.innerHTML = "ЗАПЛАТИТ";

    buttonOne.addEventListener('click', lie);
    buttonTwo.addEventListener('click', millioners);
}

function lie() {
    image.setAttribute('src', 'https://www.kino-teatr.ru/news/18683/168051.jpg');
    text.innerHTML = "Приедут на альтернативную службу в Жуки";
    buttonOne.style = 'display:none';
    buttonTwo.style = 'display:none';
}

function millioners(){
    image.setAttribute('src', 'https://avatars.mds.yandex.net/i?id=27464d744bbe89bdf4dcdb33ccffe27d8b4bb5f7-4143030-images-thumbs&n=13');
    text.innerHTML = "Уедут жить в Америку и станут богатыми";
    buttonOne.style = 'display:none';
    buttonTwo.style = 'display:none';
}