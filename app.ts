const {app, BrowserWindow, Menu} = require('electron')

let url
if (process.env.NODE_ENV === 'DEV') {
  url = 'http://localhost:8080/'
} else {
  url = `file://${process.cwd()}/dist/index.html`
}

app.on('ready', () => {
  let window = new BrowserWindow({width: 800, height: 600})
  window.removeMenu();
  window.loadURL(url)
})