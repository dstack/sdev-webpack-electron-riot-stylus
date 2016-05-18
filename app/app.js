const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

require('electron-reload')(__dirname, {
  electron: require('electron-prebuilt')
});

let win;

function createWindow() {
  win = new BrowserWindow({width: 800, height: 650, resizable: true});
  win.loadURL(`file://${__dirname}/index.html`);
  console.log(win);
  //win.webContents.openDevTools();
  win.setMenu(null);
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
