function hello() {
    document.getElementById('example').innerHTML = 'Привет МИР!'
}

function reset() {
    document.getElementById('example').innerHTML = ''
}

function set_text(id, text) {
    document.getElementById(id).innerHTML = text
}

function set_text2(id, text) {
    document.getElementById(id).innerHTML = text
}

function set_text3(id, text) {
    document.getElementById(id).innerHTML = text
}

function set_text4(id, text) {
    document.getElementById(id).innerHTML = text
}

function submit() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var status = document.getElementById('status');

    if (name == '') {
        status.innerHTML = 'Заполнить поле ФИО'

    } else if (email == '') {
        status.innerHTML = 'Заполнить поле email'

    } else if (phone == '') {
        status.innerHTML = 'Заполнить поле телефон'
    } else {
        status.innerHTML = `Регистрация прошла успешно. Ваши данные на сайте: ФИО - ${name}  /   email - ${email}  /   телефон - ${phone}`;
    }
}

function set_body_color_red() {
    document.body.style.backgroundColor = 'red'
}

function set_body_color_green() {
    document.body.style.backgroundColor = 'green';
}

function set_body_color_yellow() {
    document.body.style.backgroundColor = 'yellow';
}

function set_body_color_blue() {
    document.body.style.backgroundColor = 'blue';
}

function input_color() {
    var input_color = document.getElementById('color').value;
    set_body_color(input_color);
}

function set_font_size(id, size) {
    document.getElementById(id).styie.fontsize = size;
}

// создание объекта
var person = new Object();
// доб свойств со знач-ями 
person.name = 'Ваня'
person.surname = 'Пупкин'
person.age = '180 годиков'
person.weight = '120'

person.fullName = function () {
    return this.name + ' ' + this.surname
}

function showPerson() {
    document.getElementById('person').innerHTML = person.fullName() + ':' + person.age
}

var avto = new Object();
avto.brand = 'Audi'
avto.model = 'A6'



function showAvto() { 
    document.getElementById('Avto').innerHTML = 'бренд: ' + avto.brand + '<br>'     + 'Модель: ' + avto.model
}
    

let cat = {
    poroda: 'Spninx',
    color: 'black',
    age:'3 y.o.'
}

cat.eyes = 'green'
cat.showInfo = function () {
    document.getElementById('cat').innerHTML = 
    `Порода: ${cat.poroda} <br>
    Цвет: ${cat.color} <br> 
    Возраст: ${cat.age} <br>
    Глаза: ${cat.eyes} <br>`
}



const questions = [
    {
        question:'В каком году было крещение Руси?',
        answers: {
            1:'no',
            2:'no',
            3:'no',
            4:'Yes'
        },
        rightAnswer:'4'
    },
    {
        question:'В каком году была семилетняя война?',
        answers: {
            1:'no',
            2:'Yes',
            3:'no',
            4:'no'
        },
        rightAnswer:'2'
    },
    {
        question:'Вопрос3',
        answers: {
            1:'yes',
            2:'no',
            3:'no',
            4:'no'
        },
        rightAnswer:'1'
    },
    {
        question:'Вопрос 4?',
        answers: {
            1:'no',
            2:'no',
            3:'Yes',
            4:'no'
        },
        rightAnswer:'3'
    }
];

for (let ans_text in questions[i].answers) {
    answers.push(
        `<label><br><input type="radio" name="question${i}" value="${ans_text}"> ${ans_text}) ${questions[i].answers[ans_text]} </label>`
    );
}



