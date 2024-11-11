// нужный переменные
var placeTemplate = "header.hbs";
var placeData = "data.json"
// Это  второй персрнаж делающий форму каробок
// ему нужен инструменты такие как:
const fs = require("fs");
const Handlebars = require('../../node_modules/handlebars');


// получаем шаблон коробок 
// Чтение шаблона из файла
const takeTamplete = fs.readFileSync(placeTemplate, "utf-8");
const takedata = fs.readFileSync(placeData, "utf-8");

// создаем форму каробок
// Компиляция шаблона
const template = Handlebars.compile(takeTamplete);

// тепер работа за третием персонажом курера 
// его работа определение адресата хозяем какой каробок к кому.
// Объект данных для шаблона
const data = JSON.parse(takedata);


// отправляем к готовый коробки к хозяевам
// Генерация HTML с использованием данных и шаблона

const html = template(data);

fs.writeFileSync("generate.html", html);
console.log("generate.html создан");