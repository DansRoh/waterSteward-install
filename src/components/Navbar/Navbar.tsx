/*
 * @Author: luoda
 * @Date: 2023-05-17 14:47:36
 * @LastEditTime: 2023-05-17 16:08:49
 * @LastEditors: luoda
 * @Description:
 */
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { useState, useEffect } from "react";

interface INavBarProps {
  title?: string; // 导航栏标题
  hideBack?: boolean; // 是否隐藏返回按钮，默认为 false
  backgroundColor?: string; // 导航栏背景色，默认为白色
  color?: string; // 导航栏文字颜色，默认为黑色
  children?: React.ReactNode;
}

const NavBar: React.FC<INavBarProps> = ({
  title,
  hideBack = false,
  backgroundColor = "#fff",
  color = "#000",
  children,
}) => {
  const [statusBarHeight, setstatusBarHeight] = useState<number>(0);
  const [navHeight, setnavHeight] = useState<number>(0);
  const [navPaddingRight, setnavPaddingRight] = useState<number>(0);
  useEffect(() => {
    const { statusBarHeight: statusBarHeightValue, windowWidth } =
      Taro.getSystemInfoSync();
    const { height, top, left } = Taro.getMenuButtonBoundingClientRect();

    setstatusBarHeight(statusBarHeightValue as number);
    setnavHeight((top - (statusBarHeightValue || 0)) * 2 + height);
    setnavPaddingRight(windowWidth - left + 10);
  }, []);

  const handleBackClick = () => {
    Taro.navigateBack();
  };

  return (
    <view>
      <View
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: navHeight + statusBarHeight + "px",
          paddingTop: statusBarHeight + "px",
          backgroundColor,
          width: "100vw",
          boxSizing: "border-box",
          color,
          paddingLeft: Taro.pxTransform(16),
          paddingRight: navPaddingRight + "px",
          zIndex: 9999,
        }}
      >
        {!hideBack && (
          <View onClick={handleBackClick}>
            <Text className="iconfont icon-left"></Text>
          </View>
        )}
        <Text>{title}</Text>
        <View>{children}</View>
      </View>
      {/* 添加一个同样高度的占位元素，防止内容被导航栏遮挡 */}
      <view style={{ height: statusBarHeight + navHeight + "px" }}></view>
    </view>
  );
};

export default NavBar;
