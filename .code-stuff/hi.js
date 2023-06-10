const path = require("path");
const {
  readdirSync,
  readFileSync,
  lstatSync,
  writeFileSync,
  mkdirSync,
} = require("fs");
const showdown = require("showdown");
const converter = new showdown.Converter();

const { dirname } = path;

const fileHtmlList = [];
const updatedDirName = path.join(__dirname, "..");
const fileNameList = readdirSync(updatedDirName);

function hi(fileNameList, addedPath = "") {
  fileNameList.forEach((fileName) => {
    const alteredAddedPath = addedPath ? `/${addedPath}` : "";
    let currentPath = `${updatedDirName}${alteredAddedPath}/${fileName}`;
    if (lstatSync(currentPath).isDirectory()) {
      if (fileName.startsWith(".") || fileName === "docs") {
        return;
      }
      const newList = readdirSync(currentPath);
      hi(newList, `${alteredAddedPath}/${fileName}`);
      return;
    }
    const result = readFileSync(currentPath);
    try {
      let fileNameToSet = `${alteredAddedPath}/${fileName}`.slice(
        0,
        `${alteredAddedPath}/${fileName}`.length - 3
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

function bye() {
  fileHtmlList.forEach(({ fileName, htmlContent }) => {
    const pathToSet = path.join(__dirname, "..", "docs", fileName + ".html");
    try {
      mkdirSync(dirname(pathToSet));
    } catch (_) {}
    writeFileSync(pathToSet, htmlContent);
  });
}

hi(fileNameList);
bye();
