---
title: Dubbo
date: 2018/06/12
categories:
- 分布式
tags:
- 分布式
- rpc
---

# Dubbo

> Dubbo 是一个基于 Java 开发的高性能 RPC 框架。

<!-- TOC depthFrom:2 depthTo:3 -->

- [概述](#概述)
    - [服务治理](#服务治理)
- [Dubbo 架构](#dubbo-架构)
- [配置](#配置)
    - [配置方式](#配置方式)
    - [配置项](#配置项)
- [Dubbo 支持的协议](#dubbo-支持的协议)
- [资料](#资料)
    - [Dubbo 官方资源](#dubbo-官方资源)

<!-- /TOC -->

## 概述

### 服务治理

- 当服务越来越多时，服务 URL 配置管理变得非常困难，F5 硬件负载均衡器的单点压力也越来越大。
- 当进一步发展，服务间依赖关系变得错踪复杂，甚至分不清哪个应用要在哪个应用之前启动，架构师都不能完整的描述应用的架构关系。
- 接着，服务的调用量越来越大，服务的容量问题就暴露出来，这个服务需要多少机器支撑？什么时候该加机器？

以上问题可以归纳为服务治理问题，这也是 Dubbo 的核心功能。

## Dubbo 架构

<div align="center">
<img src="https://raw.githubusercontent.com/dunwu/java-web/master/images/distributed/rpc/dubbo/dubbo基本架构.png" width="600"/>
</div>

节点角色：

| 节点      | 角色说明                               |
| --------- | -------------------------------------- |
| Provider  | 暴露服务的服务提供方                   |
| Consumer  | 调用远程服务的服务消费方               |
| Registry  | 服务注册与发现的注册中心               |
| Monitor   | 统计服务的调用次数和调用时间的监控中心 |
| Container | 服务运行容器                           |

调用关系：

1.  务容器负责启动，加载，运行服务提供者。
2.  服务提供者在启动时，向注册中心注册自己提供的服务。
3.  服务消费者在启动时，向注册中心订阅自己所需的服务。
4.  注册中心返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者。
5.  服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用。
6.  服务消费者和提供者，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心。

## 配置

dubbo 所有配置最终都将转换为 URL 表示，并由服务提供方生成，经注册中心传递给消费方，各属性对应 URL 的参数，参见配置项一览表中的 "对应 URL 参数" 列。

> **注意**
>
> 只有 group，interface，version 是服务的匹配条件，三者决定是不是同一个服务，其它配置项均为调优和治理参数。
>
> **URL 格式**
>
> `protocol://username:password@host:port/path?key=value&key=value`

### 配置方式

Dubbo 支持多种配置方式：

- xml 配置
- properties 配置
- API 配置
- 注解配置

如果同时存在多种配置方式，遵循以下覆盖策略：

- JVM 启动 -D 参数优先，这样可以使用户在部署和启动时进行参数重写，比如在启动时需改变协议的端口。
- XML 次之，如果在 XML 中有配置，则 dubbo.properties 中的相应配置项无效。
- Properties 最后，相当于缺省值，只有 XML 没有配置时，dubbo.properties 的相应配置项才会生效，通常用于共享公共配置，比如应用名。

<div align="center">
<img src="https://raw.githubusercontent.com/dunwu/java-web/master/images/distributed/rpc/dubbo/dubbo配置覆盖策略.jpg" width="300"/>
</div>

#### xml 配置

示例：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:dubbo="http://dubbo.apache.org/schema/dubbo"
    xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-4.3.xsd http://dubbo.apache.org/schema/dubbo http://dubbo.apache.org/schema/dubbo/dubbo.xsd">  
    <dubbo:application name="hello-world-app"  />  
    <dubbo:registry address="multicast://224.5.6.7:1234" />  
    <dubbo:protocol name="dubbo" port="20880" />  
    <dubbo:service interface="com.alibaba.dubbo.demo.DemoService" ref="demoServiceLocal" />  
    <dubbo:reference id="demoServiceRemote" interface="com.alibaba.dubbo.demo.DemoService" />  
</beans>
```

#### properties 配置

示例：

```properties
dubbo.application.name=foo
dubbo.application.owner=bar
dubbo.registry.address=10.20.153.10:9090
```

### 配置项

所有配置项分为三大类

- 服务发现：表示该配置项用于服务的注册与发现，目的是让消费方找到提供方。

- 服务治理：表示该配置项用于治理服务间的关系，或为开发测试提供便利条件。

- 性能调优：表示该配置项用于调优性能，不同的选项对性能会产生影响。

| 标签              | 用途         | 解释                                                                                             |
| ----------------- | ------------ | ------------------------------------------------------------------------------------------------ |
| dubbo:service     | 服务配置     | 用于暴露一个服务，定义服务的元信息，一个服务可以用多个协议暴露，一个服务也可以注册到多个注册中心 |
| dubbo:reference   | 引用配置     | 用于创建一个远程服务代理，一个引用可以指向多个注册中心                                           |
| dubbo:protocol    | 协议配置     | 用于配置提供服务的协议信息，协议由提供方指定，消费方被动接受                                     |
| dubbo:application | 应用配置     | 用于配置当前应用信息，不管该应用是提供者还是消费者                                               |
| dubbo:module      | 模块配置     | 用于配置当前模块信息，可选                                                                       |
| dubbo:registry    | 注册中心配置 | 用于配置连接注册中心相关信息                                                                     |
| dubbo:monitor     | 监控中心配置 | 用于配置连接监控中心相关信息，可选                                                               |
| dubbo:provider    | 提供方配置   | 当 ProtocolConfig 和 ServiceConfig 某属性没有配置时，采用此缺省值，可选                          |
| dubbo:consumer    | 消费方配置   | 当 ReferenceConfig 某属性没有配置时，采用此缺省值，可选                                          |
| dubbo:method      | 方法配置     | 用于 ServiceConfig 和 ReferenceConfig 指定方法级的配置信息                                       |
| dubbo:argument    | 参数配置     | 用于指定方法参数配置                                                                             |

> 详细配置说明请参考：[官方配置](http://dubbo.apache.org/books/dubbo-user-book/references/xml/introduction.html)

#### 配置之间的关系

<div align="center">
<img src="https://raw.githubusercontent.com/dunwu/java-web/master/images/distributed/rpc/dubbo/dubbo配置关系.jpg" width="300"/>
</div>

#### 配置覆盖关系

以 timeout 为例，显示了配置的查找顺序，其它 retries, loadbalance, actives 等类似：

- 方法级优先，接口级次之，全局配置再次之。
- 如果级别一样，则消费方优先，提供方次之。

其中，服务提供方配置，通过 URL 经由注册中心传递给消费方。

<div align="center">
<img src="https://raw.githubusercontent.com/dunwu/java-web/master/images/distributed/rpc/dubbo/dubbo配置覆盖关系.jpg" width="400"/>
</div>

## Dubbo 支持的协议

Dubbo 支持以下通信协议：

- dubbo
- rmi
- hessian
- http
- webservice
- thrift
- memcached
- redis

不同协议适合不同的服务场景，可以根据实际应用场景来选择合适的协议。

dubbo 协议是 dubbo 默认的协议。dubbo 协议采用单一长连接和 NIO 异步通讯，适合于小数据量大并发的服务调用，以及服务消费者机器数远大于服务提供者机器数的情况。反之，dubbo 缺省协议不适合传送大数据量的服务，比如传文件，传视频等，除非请求量很低。

选用哪个协议，可以通过 `<dubbo:protocol>` 标签配置。

> 更多详情请参考：[Dubbo 官方协议参考手册](https://dubbo.gitbooks.io/dubbo-user-book/references/protocol/introduction.html)

## 资料

### Dubbo 官方资源

[Github](https://github.com/apache/incubator-dubbo) | [用户手册](https://dubbo.gitbooks.io/dubbo-user-book/content/) | [开发手册](https://dubbo.gitbooks.io/dubbo-dev-book/content/) | [管理员手册](https://dubbo.gitbooks.io/dubbo-admin-book/content/)