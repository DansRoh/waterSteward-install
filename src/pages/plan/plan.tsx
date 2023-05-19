/*
 * @Author: luoda
 * @Date: 2023-05-17 14:26:32
 * @LastEditTime: 2023-05-18 16:31:36
 * @LastEditors: luoda
 * @Description:
 */
import { useState } from "react";
import { View, Image, Picker } from "@tarojs/components";
import Navbar from "@/components/Navbar/Navbar";
import { Card } from "@/components/Plan/card";
import { AtButton } from "taro-ui";
import navLogoImg from "@/static/images/04_nav_logo.png";
import chatImg from "@/static/images/05_chat.png";
import installImg from "@/static/images/06_install.png";
import installActImg from "@/static/images/06_install_act.png";
import toolImg from "@/static/images/07_tool.png";
import toolActImg from "@/static/images/07_tool_act.png";
import dismatleImg from "@/static/images/08_dismatle.png";
import dismatleActImg from "@/static/images/08_dismatle_act.png";
import "./plan.styl";

export default function plan() {
  let startDate = "2022-03",
    endDate = "2023-01";
  const devInfoData = {
    status: 0,
    orderNum: "SC2536858",
    conventionDate: "2023.01.24",
    name: "罗达",
    phone: "18672824915",
    address: "重庆市渝中区长江路地产大厦2号楼2-14-1",
  };

  const onTimeChange = () => {};

  return (
    <View className="plan-page">
      <Navbar>
        <view
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            src={navLogoImg}
            style={{ width: "220rpx", height: "40rpx" }}
          ></Image>
          <Image
            src={chatImg}
            style={{ width: "48rpx", height: "48rpx" }}
          ></Image>
        </view>
      </Navbar>

      <View className="wapper-box">
        <View className="filter-box">
          <View className="top-btn">
            <AtButton className="atbtn">全部</AtButton>
            <AtButton className="atbtn">
              <Image src={installImg} className="icon"></Image>安装
            </AtButton>
            <AtButton className="atbtn">
              <Image src={toolImg} className="icon"></Image>维护
            </AtButton>
            <AtButton className="atbtn">
              <Image src={dismatleImg} className="icon"></Image>拆机
            </AtButton>
          </View>

          <View className="bottom-picker">
            <text>按时间</text>从
            <Picker
              mode="date"
              value={startDate}
              fields="month"
              onChange={onTimeChange}
            >
              <AtButton className="picker-date-btn">{2023.01}</AtButton>
            </Picker>
            至
            <Picker
              mode="date"
              value={endDate}
              fields="month"
              onChange={onTimeChange}
            >
              <AtButton className="picker-date-btn">{2023.01}</AtButton>
            </Picker>
            <AtButton className="search-btn">搜索</AtButton>
          </View>
        </View>

        <Card {...devInfoData}></Card>
      </View>
    </View>
  );
}
