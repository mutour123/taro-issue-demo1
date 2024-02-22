import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

import './index.less'

export default function CustomTabBar() {
  const jumpToTab = (path: string) => {
    console.log('Jump to tab:', path)
    Taro.switchTab({
      url: path,
    });
  }
  return <View className='custom-tab-bar'>
    <View
      className='tab-bar-item'
      onClick={() => {
        jumpToTab('/pages/index/index')
      }}
    >首页</View>
    <View
      className='tab-bar-item'
      onClick={() => {
        jumpToTab('/pages/index2/index')
      }}
    >index2</View>
  </View>
}
