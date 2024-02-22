export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/index2/index'
  ],
  tabBar: {
    color: '#999',
    selectedColor: '#000',
    borderStyle: 'white',
    backgroundColor: '#fff',
    custom: true,
    list: [
      {
        iconPath: "image/icon_component.png",
        selectedIconPath: "image/icon_component_HL.png",
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: "image/icon_API.png",
        selectedIconPath: "image/icon_API_HL.png",
        pagePath: 'pages/index2/index',
        text: 'index2',
      },
    ]
  },
  usingComponents: {

  },
  lazyCodeLoading: "requiredComponents",
  rendererOptions: {
    skyline: {
      defaultDisplayBlock: true,
      defaultContentBox: true,
    },
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
