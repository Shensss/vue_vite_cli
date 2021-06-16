## 描述

### 本地运行用vite 打包生产用webpack，集成qiankun（此项目为子应用）

## 开始

### esbuild存在一点坑，可能会安装失败，建议使用yarn安装
```
yarn install
```

### 运行使用vite
```
npm run dev
```

### 打包使用webpack，即vue-cli的打包配置
```
npm run build
```

## 注意事项

### 关于环境变量
1、由于打包是用的webpack，所以vite的import环境变量写法不可用
2、由于运行是vite，所以代码中process的环境变量写法不可用

### 关于打包生成结果
结果文件中，由于qiankun不支持type=module的script引入，所以打包之后要去除vite的入口文件写法，由于运行是vite，所以不能用语句直接在index.html中判断，需要手动去除
```
<script type="module" src="/src/main.js"></script>
```
