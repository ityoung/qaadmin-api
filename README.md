## QA Admin

[![Build Status](https://travis-ci.org/intest-tech/qaadmin.svg?branch=master)](https://travis-ci.org/intest-tech/qaadmin)

[ 中文 | [EN](https://github.com/intest-tech/qaadmin/blob/master/README_en.md) ]

测试报告归档与分享平台，服务端使用[Flask](https://github.com/pallets/flask)驱动。

## 环境

- Python 3.6
- Ubuntu 16.04
- MongoDB 4.0

## 使用

### 方法一: 本地安装

1. 安装依赖：

```
pip install pipenv
pipenv install
```

2. 修改配置：

参照`config.ini.example`的内容新建一个`config.ini`, 修改你的自定义配置(不作任何改动亦可).

3. 启动服务：

```
python manage.py runserver
```

### 方法二: Docker 安装

使用项目: [qaadmin-docker](https://github.com/intest-tech/qaadmin-docker)

## 测试

1. 安装依赖：
```
pipenv install --dev
```

2. 执行测试
```
nosetests tests
```

## SDK

使用下列SDK实现测试结果上传：

语言|框架|链接
---|---|---
Python|unittest|[qaa-sdk-pyunit](https://github.com/intest-tech/qaa-sdk-pyunit)
Python|pytest|TODO
Java|TestNG|TODO
Java|Junit|TODO
JavaScript|Mocha|TODO

> 欢迎[联系我](mailto:ityoung@foxmail.com)贡献您的SDK!

## 关于

作者：严北 | 博客主页：[Shin's Blog](https://intest.tech) | 简书专题：[测试开发实践](https://www.jianshu.com/c/b4b2bd0cb60d)
