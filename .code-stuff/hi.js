const path = require("path");
const { readdirSync, readFileSync, lstatSync } = require("fs");
const showdown = require("showdown");
const axios = require("axios");

const fileHtmlList = [];

const converter = new showdown.Converter();

const updatedDirName = path.join(__dirname, "..");

const fileNameList = readdirSync(updatedDirName);

function hi(fileNameList, addedPath = "") {
  fileNameList.forEach((fileName) => {
    let currentPath = `${updatedDirName}${
      addedPath ? "/" + addedPath : ""
    }/${fileName}`;
    if (lstatSync(currentPath).isDirectory()) {
      if (fileName.startsWith(".")) {
        return;
      }
      const newList = readdirSync(currentPath);
      hi(newList, fileName);
      return;
    }
    const result = readFileSync(currentPath);
    try {
      fileHtmlList.push({
        fileName: currentPath,
        htmlContent: converter.makeHtml(result.toString()),
      });
    } catch (err) {
      console.error(err);
    }
  });
}

hi(fileNameList);

function bye() {}

// finish later
// ...

// steps:
// 1. push into correct folders in html folder
// 2. guess i need list linking in index.html --- manual :(
// 3. should just work, each list item has href="emotions/anger" or the like

// example: http://acme.com/
