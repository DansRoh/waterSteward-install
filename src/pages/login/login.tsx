/*
 * @Author: luoda
 * @Date: 2023-05-16 10:11:08
 * @LastEditTime: 2023-05-16 16:52:11
 * @LastEditors: luoda
 * @Description:
 */

import { Image, View } from "@tarojs/components";
import logoImg from "@/static/images/01_logo.png";
import wechatImg from "@/static/images/02_wechat.png";
import phoneImg from "@/static/images/03_phone.png";
import { AtButton, AtForm } from "taro-ui";
import "./login.styl";

export default function login() {
  return (
    <View className="login-page">
      <Image style="width:328rpx;height:136rpx;" src={logoImg}></Image>
      <AtButton className="wxlogin-btn" circle>
        <Image className="btn-icon" src={wechatImg}></Image>
        微信授权登录
      </AtButton>
      <AtButton type="secondary" circle>
        <Image className="btn-icon" src={phoneImg}></Image>
        手机快捷登录
      </AtButton>
    </View>
  );
}
