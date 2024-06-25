import fs from "fs";
// const colors = require("colors");
import colors from "colors";

function logger (req, res, next) {
    let requestMethod = {
        GET: "green",
        POST: "yellow",
        PUT: "blue",
        DELETE: "red"
    };

    let start = Date.now();

    res.on("finish", () => {
        let end = Date.now();
        let today = new Date();
        let log = `${today.toLocaleDateString()} - ${req.method} - ${req.originalUrl} - ${req.ip} - ${res.statusCode} - ${end - start}ms`;
        console.log(log[requestMethod[req.method]]);
        fs.appendFile("logFile.txt", `\n${log}`, (err) => {
            if(err) {
                console.log("Error");
            }
        })
    })
   
    next();
}

export default logger;