// Js Object
var family = {
    name:'Deepak',
    sisters:[{
        name:'Jyoti Jha',
        contact:'9123342134'
    },{
        name:'Nobady',
        contact:"9283323132"
    }]
};
// Results
console.log(family.name + " Have "+family.sisters.length+" Sisters");
console.log("My First Sister Name "+family.sisters[0].name+".");
console.log("My First Sister Contact No. "+family.sisters[0].contact+".");
console.log("My Second Sister Name "+family.sisters[1].name+".");
console.log("My Second Sister Name "+family.sisters[1].contact+".");
