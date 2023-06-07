/*
 * @Author: luoda
 * @Date: 2023-05-19 14:17:44
 * @LastEditTime: 2023-05-22 09:48:17
 * @LastEditors: luoda
 * @Description:
 */

import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtButton } from "taro-ui";
import "./scanresult.styl";

export default function scanresult() {
  const jumpToStep: () => void = () => {
    Taro.navigateTo({
      url: '/pages/step/step'
    });
  };
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
      <AtButton onClick={jumpToStep} className="next-btn">
        信息匹配，下一步 &gt;
      </AtButton>
    </View>
  );
}
