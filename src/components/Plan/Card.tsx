/*
 * @Author: luoda
 * @Date: 2023-05-18 11:43:58
 * @LastEditTime: 2023-05-18 16:19:10
 * @LastEditors: luoda
 * @Description: card component of the plan page
 */

import { useEffect } from "react";
import { AtButton } from 'taro-ui'
import { View, Image } from "@tarojs/components";
import installImg09 from "@/static/images/09_install.png";
import peopleImg from "@/static/images/10_people.png";
import phoneImg from "@/static/images/11_phone.png";
import localImg12 from "@/static/images/12_local.png";
import phoneImg13 from "@/static/images/13_phone.png";
import localImg14 from "@/static/images/14_local.png";
import "./Card.styl";

interface ICardProps {
  status: number;
  orderNum: string;
  conventionDate: string;
  name: string;
  phone: string;
  address: string;
}
export const Card: React.FC<ICardProps> = (props) => {
  useEffect(() => {
    console.log("1111", props);
  }, []);
  return (
    <View className="plan-card-component">
      <View className="title-info">
        <View>
          <Image
            src={installImg09}
            style={{ width: "32rpx", height: "32rpx", marginBottom: '-4rpx' }}
          ></Image>
          安装预约
        </View>
        <View>工单号{props.orderNum}</View>
      </View>
      <View className="conventionDate-box">
        <text>
          <text style={{ color: "#5E5E5E", fontSize: "24rpx" }}>预约时间:</text>{" "}
          {props.conventionDate}
        </text>
        <text>还剩3天4小时</text>
      </View>
      <View className="user-info">
        <View className="info-item">
          <View className="left">
            <Image className="left-icon" src={peopleImg}></Image>
            {props.name}
          </View>
        </View>
        <View className="info-item">
          <View className="left">
            <Image className="left-icon" src={phoneImg}></Image>
            {props.phone}
          </View>
          <Image className="right-icon" src={phoneImg13}></Image>
        </View>
        <View className="info-item">
          <View className="left">
            <Image className="left-icon" src={localImg12}></Image>
            <view style={{width: '500rpx'}}>{props.address}</view>
          </View>
          <Image className="right-icon" src={localImg14}></Image>
        </View>
      </View>
      <View className="hadle-box">
        <AtButton className="atbtn left-btn" circle>改日期</AtButton>
        <AtButton className="atbtn right-btn" circle>开始安装</AtButton>
      </View>
    </View>
  );
};
