const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const exeName = path.basename(process.execPath);


app.setLoginItemSettings({
  openAtLogin: true,
});

// 热加载
// const reloader = require("electron-reloader");
// reloader(module);

// 监听初始化完成的生命周期
app.on("ready", () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // 创建无边框窗口
    frame: false,
    webPreferences: {
      // 开启渲染进程使用node
      nodeIntegration: true,
      contextIsolation: false, //Electron 12.0以上版本需要的额外设置此项}
    },
  });
  require("@electron/remote/main").enable(win.webContents);
  require("@electron/remote/main").initialize();
  // win.loadFile("src/index.html");
  win.loadFile(path.join(__dirname, "src/index.html"));
  //   win.loadURL("https://github.com");

  win.webContents.openDevTools(); // 打开开发者工具 ctrl + shift + i

  // 菜单栏
  require("./menu.js");

  // 获取可执行文件位置
  const ex = process.execPath;

  // 定义事件，渲染进程中直接使用

  // 开启 开机自启动
  ipcMain.on('openAutoStart', () => {
    console.log('updateExe', ex)
    app.setLoginItemSettings({
      openAtLogin: true,
      path: ex,
      args: []
    });
  });
  // 关闭 开机自启动
  ipcMain.on('closeAutoStart', () => {
    app.setLoginItemSettings({
      openAtLogin: false,
      path: ex,
      args: []
    });
  })

});
