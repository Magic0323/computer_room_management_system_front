const {Menu, BrowserWindow} = require("electron");

// 菜单栏
  const template = [
    {
      label: "a",
      submenu:[
        {
          label:'a-a',
          click () {
            new BrowserWindow({ width: 800, height: 600 });
          }
        }
      ]
    },
  ];

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)