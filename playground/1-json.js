const fs = require(`fs`);

const buffer = fs.readFileSync(`./1-json.json`);

const json = JSON.parse(buffer.toString());

json.name = "Gabriel";
json.age = 26;

const jsonString = JSON.stringify(json);

fs.writeFileSync(`1-json.json`, jsonString);