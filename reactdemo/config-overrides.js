const path = require("path");

module.exports = {
  webpack: (config) => {
    // 微应用的包名，这里与主应用中注册的微应用名称一致
    config.output.library = `ReactApp`;
    // 将你的 library 暴露为所有的模块定义下都可运行的方式
    config.output.libraryTarget = "umd";
    // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
    config.output.jsonpFunction = `webpackJsonp_ReactApp`;

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    console.log(11111, config);
    config.module.rules.push({
      // test: /\.svg$/,
      test: /\.(png|jp(e*)g|svg|gif)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "images/[hash]-[name].[ext]",
          },
        },
        // {
        //   loader: "svg-url-loader",
        //   options: {
        //     // make all svg images to work in IE
        //     iesafe: true,
        //   },
        // },
        {
          loader: "url-loader",
          options: {
            limit: 8192, // 小于等于8KB的SVG转换为Base64
            name: "[name].[ext]", // 输出文件的名称
            outputPath: "images", // 输出文件的路径
          },
        },
        // {
        //   loader: "svgo-loader", // 使用svgo-loader进行SVG压缩
        //   options: {
        //     plugins: [
        //       { removeTitle: true },
        //       { convertColors: { shorthex: false } },
        //       { convertPathData: false },
        //     ],
        //   },
        // },
      ],
    });

    return config;
  },
  devtool: "source-map",
  // devServer:{
  //     disableHostCheck:true,
  //     headers:{
  //         "Access-Control-Allow-Origin": "*",
  //     },
  //     historyApiFallback:true,
  //     port:8000
  // }
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      // 关闭主机检查，使微应用可以被 fetch
      config.disableHostCheck = true;
      // 配置跨域请求头，解决开发环境的跨域问题
      config.headers = {
        "Access-Control-Allow-Origin": "*",
      };
      // 配置 history 模式
      config.historyApiFallback = true;
      return config;
    };
  },
};
