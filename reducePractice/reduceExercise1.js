const before = [{
    key: "year",
    value: '2016'
}, {
    key: "make",
    value: "Porsche"
}, {
    key: "model",
    value: "911 R"
}, {
    key: "color",
    value: 'white'
}, {
    key: 'msrp',
    value: '$184,900'
}];
//arr.reduce(function(acc, arrItem[,index,currArr]){/*executable function here*/},[defines acc])

const after = before.reduce(function (acc, item) {
    if (item.key != "msrp") {
        acc[item.key] = item.value;
    }
    return acc;
}, {});

console.log(after);
