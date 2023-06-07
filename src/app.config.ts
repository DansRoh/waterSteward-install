export default defineAppConfig({
  pages: [
    "pages/login/login",
    "pages/vericode/vericode",
    "pages/plan/plan",
    "pages/account/account",
    "pages/mine/mine",
    "pages/scanresult/scanresult",
    "pages/step/step",
    "pages/calibration/calibration"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#262626",
    selectedColor: "#262626",
    borderStyle: "white",
    backgroundColor: "#FFFFFF",
    list: [
      {
        pagePath: "pages/plan/plan",
        iconPath: "static/icons/icon_plan.png",
        selectedIconPath: "static/icons/icon_plan_active.png",
        text: "预约列表",
      },
      {
        pagePath: "pages/account/account",
        iconPath: "static/icons/icon_account.png",
        selectedIconPath: "static/icons/icon_account_active.png",
        text: "账户佣金",
      },
      {
        pagePath: "pages/mine/mine",
        iconPath: "static/icons/icon_mine.png",
        selectedIconPath: "static/icons/icon_mine_active.png",
        text: "我的",
      },
    ],
  },
});
