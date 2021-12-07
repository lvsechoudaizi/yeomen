// 注意⚠️：generator的命名必须是generator-[name]

//0. 创建一个文件夹作为一个项目，执行npm init -y 创建package.json
//1. 安装激励依赖 npm install yeoman-generator
//2. 引入，生成Generator实例
const Generator = require('yeoman-generator');

//3.继承Generator，导出一个类必须继承Generator

// 注意:node.js项目，必须使用nodejs 支持的语法,nodejs的命令行工具
module.exports = class extends Generator{
  
  // 3.交互命令
  prompting(){
    // 一定要retrun 出去  ！！！！！！return！！！！！！
    return this.prompt([
      {
        type: 'input',
        name: 'title',
        message: '你的项目名称：',
        default: this.appname,  //用户不输入的时候，默认目录名称为项目名称
      }
    ]).then(answers => {
      this.answers = answers
    })
  }
  // 脚手架的工作就是帮我们生成目录或文件，所以需要写入
  writing(){
    // fs 不是nodejs,是基于nodejs的一次封装
    // this.destinationPath 获取命令行当前目录

    // 1.最简单的demo
    // this.fs.write(this.destinationPath('test.txt'), Math.random().toString())

    // 2.使用模版和命令行交互
    // const temp =  this.templatePath('index.html')
    // const output = this.destinationPath('index.html')
    // const context = this.answers
    // this.fs.copyTpl(temp, output, context)

    // 4.多文件生成
    const templates = [
      'public/images/logo.png',
      'src/index.js',
      'index.html'
    ]
    templates.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
        )
    })
  }
}

// 如何使用创建的generator
//  1.将创建的generator挂载到全局命令行----npm link ----不想要的时候执行 npm unlink
// npm link 只是将生成的依赖挂载到本地，要想挂载到npm官网需要执行发布 npm public
//  2.执行 yo [name]   

// umi 定制化需求适用，其他时候都不太使用