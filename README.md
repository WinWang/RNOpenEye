# React Native（0.72）版本OpenEye项目，主要用来熟悉并上手RN项目的开发，是FlutterOpenEye项目的RN版本

1、项目整体基于ts开发，使用react-navigation6作为路由管理，使用axios作为网络请求库 <br>
2、基于axios+hooks(useRequestStatus)封装页面通用状态（加载中、加载失败、网络错误、空数据、加载成功） <br>
3、封装StateComponent组件，用来处理页面通用状态和骨架屏展示-具体参照homePage demo运用 <br>
4、视频播放以及视频列表播放功能 <br>
5、页面路由基本使用和封装 <br>
6、封装图片加载组件，支持图片加载占位功能 <br>

## 其他一些学习练手的项目

**Flutter版本**开眼App链接(getx+retrofit+dio+jsonserialize+自定义控件demo)：https://github.com/WinWang/open_eye <br>

**Flutter版本**的音乐播放App链接(getx+retrofit+dio)：https://github.com/WinWang/music_listener <br>

**React版本**的开眼App链接(React18+React-Vant+Mobx+axios)：https://github.com/WinWang/react-oepn-eye <br>

**Vue2版本**WanAndroid项目链接(Vue2+vuex+vant+axios)：https://github.com/WinWang/Vue-WanAndroid <br>

**Vue3版本**WanAndroid链接(vue3+typeScript+pinia+vant+vite)：https://github.com/WinWang/Vue3-wanAndroid

**Android组件化项目**ReadingGallery链接(jetpack+kotlin+koin+couroutine)：https://github.com/WinWang/ReadingGallery <br>

**Android组件化项目初始化工具**ApplicationInit链接(gradle-plugin+注解APT+ASM)
：https://github.com/WinWang/ApplicationInit <br>

<img src="https://s2.loli.net/2023/09/27/oyYBAN5XUKC987L.png" width="400px">

下载链接 https://www.xcxwo.com/gW5fpw

## 项目运行截图展示

<div style="display: flex; flex-direction: row">
<img src="https://s2.loli.net/2023/09/27/qAw5dX8IJcHvWte.jpg" width="25%">
<img src="https://s2.loli.net/2023/09/27/FbwZe5yX6t8TErY.jpg" width="25%">
<img src="https://s2.loli.net/2023/09/27/zUpmRVDf3uOCTLH.jpg" width="25%">
</div>

<div style="display: flex; flex-direction: row">
<img src="https://s2.loli.net/2023/09/27/HODNcVhQn9uzSkf.jpg" width="25%">
<img src="https://s2.loli.net/2023/09/27/dsHgnORyxaSGtN8.jpg" width="25%">
<img src="https://s2.loli.net/2023/09/27/5NtHSmG8bY1Q6x9.jpg" width="25%">
</div>

<div style="display: flex; flex-direction: row">
<img src="https://s2.loli.net/2023/09/27/pNPd1ZqarWMG9Y3.jpg" width="25%">
<img src="https://s2.loli.net/2023/09/27/i14nvPWu2AH8CLV.jpg" width="25%">
<img src="https://s2.loli.net/2023/09/27/NPnW87zQJm2iV5F.jpg" width="25%">
</div>

<div style="display: flex; flex-direction: row">
<img src="https://s2.loli.net/2023/09/27/MtGLgSDFA8Ok6WT.jpg" width="25%">
<img src="https://s2.loli.net/2023/09/27/K9uGmJ82vjngIWq.jpg" width="25%">
<img src="https://s2.loli.net/2023/09/27/4Kg1zbdwIUPEHVi.jpg" width="25%">
</div>

<div style="display: flex; flex-direction: row">
<img src="https://s2.loli.net/2023/09/27/pJZGqkLmCcsQjIT.jpg" width="25%">
<img src="https://s2.loli.net/2023/09/27/kYTJpdcFh7SiysG.jpg" width="25%">
<img src="https://s2.loli.net/2023/09/27/aQKbt6DP9GEgMOp.jpg" width="25%">
</div>

<div style="display: flex; flex-direction: row">
<img src="https://s2.loli.net/2023/09/27/6uIAmM2EZcTnztd.jpg" width="25%">
<img src="https://s2.loli.net/2023/09/27/mQPznbeoHyDsRB3.jpg" width="25%">
<img src="https://s2.loli.net/2023/09/27/CzbAOXly9nP6V25.jpg" width="25%">
</div>

<div style="display: flex; flex-direction: row">
<img src="https://s2.loli.net/2023/09/27/Xs9jUlZt2JyamMb.jpg" width="25%">
<img src="" width="25%">
<img src="" width="25%">
</div>







## 运行方式

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped
using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed
> the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new
> application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the
following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_
shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd>
   + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out
  the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out
  the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your
  environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for
  React Native.
