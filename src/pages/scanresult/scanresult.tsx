/*
 * @Author: luoda
 * @Date: 2023-05-19 14:17:44
 * @LastEditTime: 2023-05-19 14:43:24
 * @LastEditors: luoda
 * @Description:
 */

import { View } from "@tarojs/components";
import { AtButton } from 'taro-ui'
import "./scanresult.styl";

export default function scanresult() {
  return (
    <View className="scanresult-page">
      <text style={{ color: "#262626", fontSize: "32rpx" }}>
        核对客户与净水器信息是否匹配
      </text>
      <View className="dev-info">
        <View className="top-user-info">
          <View className="info-item">
            <View className="label">客户姓名</View>
            <View className="value">张三</View>
          </View>
          <View className="info-item">
            <View className="label">联系电话</View>
            <View className="value">18672648978</View>
          </View>
        </View>
        <View className="bottom-info">
          <View className="info-item">
            <View className="label">物联网卡运营商</View>
            <View className="value">中国移动</View>
          </View>
        </View>
      </View>
      <AtButton className="next-btn">信息匹配，下一步 &gt;</AtButton>
    </View>
  );
}
