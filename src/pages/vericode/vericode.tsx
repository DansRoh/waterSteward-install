/*
 * @Author: luoda
 * @Date: 2023-05-16 14:51:03
 * @LastEditTime: 2023-05-17 14:16:49
 * @LastEditors: luoda
 * @Description:
 */
import { View } from "@tarojs/components";
import { useEffect, useState } from "react";
import { AtInput, AtForm, AtButton } from "taro-ui";
import "./vericode.styl";

export default function vericode() {
  const [loginForm, setloginForm] = useState({
    phone: "",
    vericode: "",
  });
  const bindChange = (key: string, e: any) => {
    setloginForm({
      ...loginForm,
      [key]: e,
    });
  };
  const onsubmit = () => {
    console.log(loginForm);
  };
  return (
    <View className="vericode-page">
      <view className="title">
        <view className="title-h">登录/注册</view>
        <view className="desc">省心入户·鲜水管家欢迎你~</view>
      </view>
      <AtForm onSubmit={onsubmit}>
        <AtInput
          name="phone"
          className="phone-inp"
          title="+86"
          type="number"
          value={loginForm.phone}
          onChange={(e) => bindChange("phone", e)}
        ></AtInput>
        <AtInput
          name="vericode"
          title="验证码"
          type="text"
          maxLength={4}
          value={loginForm.vericode}
          onChange={(e) => bindChange('vericode', e)}
        >
          <text className="getcode-btn">发送验证码</text>
        </AtInput>
        <AtButton className="submit-btn" formType="submit" circle>
          立即登录
        </AtButton>
      </AtForm>
    </View>
  );
}
