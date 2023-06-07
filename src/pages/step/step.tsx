/*
 * @Author: luoda
 * @Date: 2023-05-22 09:40:07
 * @LastEditTime: 2023-05-22 10:15:35
 * @LastEditors: luoda
 * @Description:
 */

import { View, Image } from "@tarojs/components";
import stepImgOne from "@/static/images/15_step01.png";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";

import "./step.styl";

export default function step() {
  const jumpToCalibration: () => void = () => {
    Taro.navigateTo({
      url: "/pages/calibration/calibration",
    });
  };
  return (
    <View className="step-page">
      <Image
        style={{ width: "606rpx", height: "980rpx" }}
        src={stepImgOne}
      ></Image>
      <AtButton
        onClick={jumpToCalibration}
        className="next-btn"
        type="primary"
        circle
      >
        下一步
      </AtButton>
    </View>
  );
}
