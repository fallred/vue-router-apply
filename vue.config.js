let path = require('path');
module.exports = {
    // baseURL
    publicPath: process.env.NODE_ENV === 'production' ? 'http://www.zhufeng.cn' : '/',
    assetsDir: 'asserts',
    outputDir: '/dist',
    runtimeCompiler: false,// 使用模板方式，默认不使用
    productionSourceMap: false, // 打包不适用sourcemap
    chainWebpack: config=>{
        // 可以获取webpack配置，并增加一些自己的逻辑
        // 配置目录别名，别名叫
        config.resolve.alias.set('+',path.resolve(__dirname,'src/components'));
    },
    configureWebpack: {// webpack-merge
        plugins: [],
        module: {

        }
    },
    devServer: {// 开发服务器
        proxy: {
            '/api/getUser': {
                target: 'http://localhost:3000',
                pathRewrite:{
                    '/api':''
                }
            }
        }
    },
    pluginOptions: {
        'style-resources-loader':{
            preProcessor: 'less',
            patterns: [
                'D:\\project\\vue-router-apply\\src\\assets\\common.less'
            ]
        }
    }
};
//vue ui 安装插件
// vue add style-resources-loader
// npm install @vue/cli-style-resource-loader
