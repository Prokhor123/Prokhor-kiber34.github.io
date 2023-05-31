function half_perimeter() {
    return (a+b+c)/2
}

function square(a, b, c) {
    var p = half_perimeter()
    return Math.sqrt(p*(p-a)*(p-b)*(p-c))
}


a=prompt('Введите сторону треугольника a')
b=prompt('Введите сторону треугольника b')
c=prompt('Введите сторону треугольника c')

var a = Number(prompt('Введите сторону'))
var b = Number(prompt('Введите сторону'))
var c = Number(prompt('Введите сторону'))

alert ('Площадь треугольника: ' + square(a, b, c))