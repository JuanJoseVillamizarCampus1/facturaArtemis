import app from"./app.js";
const main = ()=>{
app.listen(app.get("port"));
console.log(`The super company's server is running on port ${app.get("port")}`);
}
main();