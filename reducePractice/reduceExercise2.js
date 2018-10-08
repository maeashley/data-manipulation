var person = [{
    key: 'name',
    value: 'jared'
}, {
    key: 'age',
    value: 'old'
}, {
    key: 'food',
    value: 'bacon'
}, {
    key: 'food',
    value: 'pizza'
}, {
    key: 'food',
    value: 'cubbys'
}, {
    key: 'pets',
    value: 'dog'
}, {
    key: 'food',
    value: 'wings'
}, {
    key: 'food',
    value: 'shakes'
}, {
    key: 'pets',
    value: 'bird'
}, ];

//solution 1
var personObj = person.reduce(function (acc, item) {
    if (acc[item.key] === undefined) {
        acc[item.key] = item.value;
    } else {
        if (typeof acc[item.key] === 'string') {
            acc[item.key] = [acc[item.key]];
        }

        acc[item.key].push(item.value);
    }
    return acc;
}, {});


personObj.kids = 'gazillions';
console.log('person', personObj);

//solution 2
/* var personObj = person.reduce(function (acc, item, i) {
    if (acc[item.key] === undefined) {
        acc[item.key] = item.value;
    } else if (typeof acc[item.key] === 'string') {
        acc[item.key] = [acc[item.key], item.value];
    } else if (Array.isArray(acc[item.key])) {
        acc[item.key].push(item.value);
    }
    return acc;
}, {}); */

//expected output:
/* var obj = { 
    age: 'old',
    kids: 'gazillions', <-- this is NOT in the original array
    name: 'jared',
    food: ['bacon', 'pizza', "cubby's", 'wings', 'shakes'] <-- these are originally 
} */