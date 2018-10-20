import { app, BrowserWindow } from 'electron'
import * as path from 'path'

require('electron-context-menu')({
  prepend: (params: Electron.ContextMenuParams, browserWindow: BrowserWindow) => [{
    visible: params.mediaType === 'image',
  }],
})

let mainWindow: Electron.BrowserWindow
const appURL = 'https://allo.google.com/web'
const appName = 'Allo linux'
const bgColor = '#fffff'

const createWindow = () => {
  mainWindow = new BrowserWindow({
    backgroundColor: bgColor,
    height: 600,
    icon: path.join(__dirname, 'icon/64x64.png'),
    width: 1000,
  })

  mainWindow.loadURL(appURL)
  mainWindow.setTitle(appName)
  mainWindow.setMenuBarVisibility(false)
  mainWindow.setAutoHideMenuBar(true)
}

app.on('ready', () => createWindow())
app.on('window-all-closed', () => app.quit())
