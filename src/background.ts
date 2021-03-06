import {
  app, protocol, BrowserWindow, ipcMain,
} from 'electron';
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib';
// eslint-disable-next-line import/no-extraneous-dependencies
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer';
// import url from 'url';
import path from 'path';
import { readFile, writeFile, rename } from 'fs';

const isDevelopment = process.env.NODE_ENV !== 'production';

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } },
]);

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    show: false,
    webPreferences: {

      // Use pluginOptions.nodeIntegration, leave this alone
      // See
      //  nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration
      //  for more info
      nodeIntegration: (process.env
        .ELECTRON_NODE_INTEGRATION as unknown) as boolean,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
    },
  });
  win.once('ready-to-show', () => {
    win.show();
  });
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol('app');
    // Load the index.html when not in development
    win.loadURL('app://./index.html');
  }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS3_DEVTOOLS);
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString());
    }
    // installExtension(VUEJS3_DEVTOOLS)
    // .then((name) => console.log(`Added Extension:  ${name}`))
    // .catch((err) => console.log('An error occurred: ', err));
  }
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit();
      }
    });
  } else {
    process.on('SIGTERM', () => {
      app.quit();
    });
  }
}

ipcMain.on('readXmlFileToStr', (event) => {
  // process.env.PORTABLE_EXECUTABLE_DIR
  console.log(process.env.PORTABLE_EXECUTABLE_DIR);
  const targetDir: string = process.env.PORTABLE_EXECUTABLE_DIR !== undefined ? process.env.PORTABLE_EXECUTABLE_DIR : 'F:/Project/auto_xml_helper/data/';
  const targetPath: string = path.join(targetDir, 'm.xml');
  console.log(process.env.IS_ELECTRON !== undefined && process.env.IS_ELECTRON);
  console.log(targetDir);
  readFile(targetPath, 'utf-8', (err, data) => {
    if (err) {
      app.quit();
    }
    // eslint-disable-next-line no-param-reassign
    event.returnValue = data;
  });
});

ipcMain.on('writeXmlFileFromStr', (event, args: { data: string }) => {
  const { data } = args;
  const targetDir: string = process.env.PORTABLE_EXECUTABLE_DIR !== undefined ? process.env.PORTABLE_EXECUTABLE_DIR : 'F:/Project/auto_xml_helper/data/';
  const targetPath: string = path.join(targetDir, 'm.xml');
  writeFile(targetPath, data, 'utf8', ((err) => {
    if (err) {
      event.sender.send('writeXmlFileFromStr-reply', {
        status: false,
        data: err,
      });
    } else {
      event.sender.send('writeXmlFileFromStr-reply', {
        status: true,
        data: null,
      });
    }
  }));
});

ipcMain.on('xmlFileBackup', (event, args: { date: string }) => {
  const { date } = args;
  const targetDir: string = process.env.PORTABLE_EXECUTABLE_DIR !== undefined ? process.env.PORTABLE_EXECUTABLE_DIR : 'F:/Project/auto_xml_helper/data/';
  const targetPath: string = path.join(targetDir, 'm.xml');
  rename(targetPath, path.join(targetDir, `old-${date}_m.xml`), (err) => {
    // console.log('in rename callback');
    if (err) {
      event.sender.send('xmlFileBackup-reply', {
        status: false,
        data: err,
      });
    } else {
      event.sender.send('xmlFileBackup-reply', {
        status: true,
        data: null,
      });
    }
  });
});
//
// ipcMain.on('synchronous-message', (event, arg) => {
//   console.log(arg); // prints "ping"
//   // event.returnValue = 'pong';
//   event.sender.send('pong');
// });

// ipcMain.on('getXmlConfig', (event, arg) => {
//   // console.log("in")
//   const targetPath = path.join(__dirname, '../data/m.xml');
//   // console.log(targetPath)
//   readFile(targetPath, 'utf-8', (err, data) => {
//     if (err) {
//       // event.sender.send('asynchronous-reply', "????????????");
//       console.log('????????????');
//     } else {
//       // event.sender.send('asynchronous-reply', data);
//       console.log(`????????????:\n\t${data.slice(0, 20)}...`);
//       event.reply('getXmlConfig-replay', data);
//     }
//   });
// });
