# yeomen
yeomen/脚手架的搭建

   
// 注意：generator的命名必须是generator-[name]

//0. 创建一个文件夹作为一个项目，执行npm init -y 创建package.json
//1. 安装激励依赖 npm install yeoman-generator
//2. 引入，生成Generator实例
const Generator = require('yeoman-generator');

//3.继承Generator，导出一个类必须继承Generator


// 如何使用创建的generator
//  1.将创建的generator挂载到全局命令行----npm link ----不想要的时候执行 npm unlink
// npm link 只是将生成的依赖挂载到本地，要想挂载到npm官网需要执行发布 npm public
//  2.执行 yo [name]   

