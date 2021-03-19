var cpx = require("cpx");
var path = require('path')
const log = require("node-pretty-log");

const rootDir = path.join(__dirname, "../../../")
const srcDir = path.join(rootDir, "/src")

const htmlFilePath = path.join(__dirname, "./index.html")
const polyfillsFilePath = path.join(__dirname, "./polyfills.ts")
const tsconfigFilePath = path.join(__dirname, "./tsconfig.app.json")
const maintsFilePath = path.join(__dirname, "./main.ts")


//console.log(`The htmlFilePath is ${htmlFilePath}`)
//console.log(`The srcDir is ${srcDir}`)

log("info", "Copying over tsconfig.app.json");
cpx.copySync(tsconfigFilePath, rootDir);
log("info", "Copying over index.html");
cpx.copySync(htmlFilePath, srcDir);
log("info", "Copying over main.ts");
cpx.copySync(maintsFilePath, srcDir);
log("info", "Copying over polyfills.ts");
cpx.copySync(polyfillsFilePath, srcDir);
