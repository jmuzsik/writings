const path = require("path");
const {
  readdirSync,
  readFileSync,
  lstatSync,
  writeFileSync,
  mkdirSync,
} = require("fs");
const showdown = require("showdown");

const getDirName = path.dirname;

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
      if (fileName.startsWith(".") || fileName === "docs") {
        return;
      }
      const newList = readdirSync(currentPath);
      hi(newList, fileName);
      return;
    }
    const result = readFileSync(currentPath);
    try {
      let fileNameToSet = `${
        addedPath ? "/" + addedPath : ""
      }/${fileName}`.slice(
        0,
        `${addedPath ? "/" + addedPath : ""}/${fileName}`.length - 3
      );
      if (fileName === "init.md") {
        fileNameToSet = addedPath;
      }
      fileHtmlList.push({
        fileName: fileNameToSet,
        htmlContent: converter.makeHtml(result.toString()),
      });
    } catch (err) {
      console.error(err);
    }
  });
}

hi(fileNameList);

function bye() {
  fileHtmlList.forEach(({ fileName, htmlContent }) => {
    const pathToSet = path.join(__dirname, "..", "docs", fileName + ".html");
    try {
      console.log("hi");
      mkdirSync(getDirName(pathToSet));
    } catch (err) {
      console.log(err);
    }
    console.log("here", pathToSet);
    writeFileSync(pathToSet, htmlContent);
  });
}

console.log(fileHtmlList.map(({ fileName }) => fileName));
// bye();
// finish later
// ...

// steps:
// 1. push into correct folders in docs folder
// 2. guess i need list linking in index.html --- manual :(
// 3. should just work, each list item has href="emotions/anger" or the like

// example: http://acme.com/
