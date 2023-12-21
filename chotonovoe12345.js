document.addEventListener("DOMContentLoaded", function() {  
// Следующая строка говорит браузеру добавить слушатель события "DOMContentLoaded" к объекту document. 
// Это означает, что код внутри функции будет выполнен, когда весь DOM документа полностью загружен, включая структуру документа и стили.
    document.getElementById("submitBtn").addEventListener("click", printValues);
}); 
 // Здесь мы добавляем слушатель события "click" к объекту, полученному по идентификатору "submitBtn". 
 // Когда кнопка с идентификатором "submitBtn" будет нажата, будет вызвана функция printValues.



function printValues() { // Функция printValues собирает значения из различных полей формы и выполняет различные операции с этими значениями.

    var height = document.getElementById("height").value; // Получить значение поля "height"
    var weight = document.getElementById("weight").value; // Получить значение поля "weight"
    var name = document.getElementById("name").value; // Получить значение поля "name"
    var surname = document.getElementById("surname").value;  // Получить значение поля "surname"

    var bmi = weight / ((height / 100) * (height / 100)); // Рассчитать индекс массы тела (базовый уровень массы тела)
    console.log("Индекс массы тела: " + bmi); // Вывести индекс массы тела в консоль

    console.log("Имя: " + name + " " + surname + ", поздравляем Вас с Днем рождения и желаем крепкого здоровья!"); // Вывести поздравление с именем и отчеством в консоль

    console.log("Тип поля 'Рост': " + typeof height); // Вывести тип данных поля "рост" в консоль
    console.log("Тип поля 'Вес': " + typeof weight); // Вывести тип данных поля "вес" в консоль
    console.log("Тип поля 'Имя': " + typeof name); // Вывести тип данных поля "имя" в консоль
    console.log("Тип поля 'Отчество': " + typeof surname); // Вывести тип данных поля "отчество" в консоль
}