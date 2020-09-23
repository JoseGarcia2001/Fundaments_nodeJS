const { app, BrowserWindow } = require('electron');

app.on(ready, createWindow)

const createWindow = () => {
  let mainWindow;
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadFile('index.html')
};
