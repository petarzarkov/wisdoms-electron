const path = require('path');
const { app, BrowserWindow } = require('electron');

if (process.env.IS_DEV) {
    require('electron-reload')(__dirname);
}

app.once('ready', () => {
    const window = new BrowserWindow({
        width: 600,
        height: 600,
        darkTheme: true,
        autoHideMenuBar: true,
        icon: "images/pepo.ico",
        // transparent: true,
        // titleBarStyle: "hidden",
        // titleBarOverlay: {
        //     color: "#30363d",
        //     symbolColor: "#f0f6fc"
        // },
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    window.loadFile('index.html');
    if (process.env.IS_DEV) {
        window.webContents.openDevTools();
    }
});