const Max = Object.freeze({
    name: 'Max',
    age: 17,
    dayOff: 'Thursday',
    hireDate: '2018-1-1',
    salary: '$8.00'
});

const Sepp = Object.freeze({
    name: 'Sepp',
    age: 19,
    dayOff: 'Tuesday',
    hireDate: '2016-1-1',
    salary: '$10.00'
});

const Tom = Object.freeze({
    name: 'Tom',
    age: 20,
    dayOff: 'Wednesday',
    hireDate: '2019-1-1',
    salary: '$20.00'
});

const Nina = Object.freeze({
    name: 'Nina',
    age: 15,
    dayOff: 'Wednesday',
    hireDate: '2019-1-1',
    salary: '$11.50'
});

const Mike = Object.freeze({
    name: 'Mike',
    age: 30,
    dayOff: 'Saturday',
    hireDate: '2010-1-1',
    salary: '$30.00'
});

let Employees = [Max, Sepp, Tom, Nina, Mike];

module.exports = Employees;