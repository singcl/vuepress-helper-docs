# 快速开始

[[toc]]

## 准备

- 安装 Java 环境
- 安装 maven 编译环境

**安装 Java 环境**

进入网址 https://www.java.com ，通过网站引导即可进行安装。

**安装 maven 编译环境**

参考 Maven 官方文档：http://maven.apache.org/

## 下载

```
git clone https://gitee.com/JPressProjects/jpress.git
```

## 编译

```
cd jpress
mvn clean package
```

## 运行

```
cd starter/target/starter-4.0
./jpress.sh start
```

## 停止

```
./jpress stop
```

## 重启

```
./jpress restart
```
