const engrapfo = require("./engrapfo");

const a = new engrapfo.Load(`
name:cuong
age:14
`);

console.log(a.getValue("name"));