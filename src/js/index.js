const { BrowserWindow, ipcRenderer } = require("@electron/remote");
const { shell, getCurrentWindow } = require("@electron/remote");

// ipcRenderer.send('openAutoStart')

// ipcRenderer.send('closeAutoStart')


// 新建窗口
const newWindow = document.querySelector(".new-window");
newWindow.onclick = () => {
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
};

// 关闭窗口
// https://blog.51cto.com/u_15127492/2657160
const closeWindow = document.querySelector(".close-window");
closeWindow.onclick = () => {
  getCurrentWindow().close();
};

// 打开chrome
const chormeClick = document.querySelector(".baidu");
chormeClick.onclick = () => {
  shell.openExternal("https://www.baidu.com");
};

// 读取系统信息
const si = require("systeminformation");

// promises style - new since version 3
// cpu
// si.cpu()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// si.mem().then((data) => console.log(data));
// si.diskLayout().then(data => console.log(data));
// si.graphics().then(data => console.log(data));
// define all values, you want to get back
// valueObject = {
//   cpu: '*',
//   osInfo: 'platform, release',
//   system: 'model, manufacturer'
// }

// si.get(valueObject).then(data => console.log(data));
// si.processes((data) => console.log(data))
// 磁盘
si.diskLayout((data) => console.log(data))