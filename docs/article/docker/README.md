---
star: false
category:
  - Docker
tag:
  - Docker
---
# Docker
Docker是一种开源的应用容器引擎，旨在简化应用程序的开发、部署和运行过程。它提供了一种轻量级、可移植和自包含的容器化环境，使得开发人员能够在不同的计算机上以一致的方式构建、打包和分发应用程序。
## 作用
通过Docker，开发者可以将应用以及依赖包打包到一个可移植的镜像中，然后发布到任何流行的Linux或Windows操作系统的机器上，也能实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。
## 优点
- 更高效的利用系统资源
- 更快速的启动时间
- 一致的运行环境
- 持续交付和部署
- 更轻松的迁移
- 更轻松的维护和扩展

## 缺点
- 运行环境依赖
- 配置文件复杂

## 安装
- [Docker 官方文档](https://docs.docker.com/engine/install/)
- [Docker 中文文档](https://www.runoob.com/docker/docker-tutorial.html)

## 核心概念

|      核心概念      |                             描述                             |
| :----------------: | :----------------------------------------------------------: |
|   镜像（Image）    | Docker 镜像是一个**只读模板**，用于创建 Docker 容器。它包含应用程序及其依赖，并作为容器化环境的基础。 |
| 容器（Container）  | Docker 容器是基于 Docker 镜像创建的**运行时实例**。它提供了隔离的运行环境，使得应用程序可以独立于其他应用程序运行。 |
| 仓库（Repository） | Docker 仓库用于存储和共享 Docker 镜像。公共和私有仓库都可用，使得开发者可以方便地获取和分发镜像。 |
|     Dockerfile     | Dockerfile 是一个文本文件，包含构建 Docker 镜像的指令和配置。通过编写 Dockerfile，开发者可以定义镜像的构成、依赖关系、环境变量等。 |
|   Docker Compose   | Docker Compose 是一个工具，用于定义和运行多容器 Docker 应用程序。它使用 `docker-compose.yml` 文件描述多个容器之间的依赖关系、网络配置等，简化复杂应用程序的部署和管理。 |

## 常用命令

- 启动Docker服务：`systemctl start docker`
- 停止Docker服务：`systemctl stop docker`
- 重启Docker服务：`systemctl restart docker`
- 查看Docker版本：`docker -v`
- 查看Docker信息：`docker info`

以下是一些Docker的常用命令：

| 命令                                   | 描述                               |
| -------------------------------------- | :--------------------------------- |
| `docker version`                       | 显示Docker的版本信息               |
| `docker info`                          | 显示Docker的系统信息               |
| `docker images`                        | 列出本地主机上的所有镜像           |
| `docker search [镜像名]`               | 在Docker Hub中搜索镜像             |
| `docker pull [镜像名[:标签]]`          | 从Docker Hub或其他注册表中拉取镜像 |
| `docker push [镜像名[:标签]]`          | 将镜像推送到Docker Hub或其他注册表 |
| `docker rmi [镜像名[:标签]]`           | 删除一个或多个镜像                 |
| `docker build [选项] <路径>`           | 使用Dockerfile构建镜像             |
| `docker run [选项] 镜像名 [命令]`      | 创建一个新的容器并运行一个命令     |
| `docker start [容器ID或名称]`          | 启动一个或多个已经停止的容器       |
| `docker stop [容器ID或名称]`           | 停止一个或多个正在运行的容器       |
| `docker restart [容器ID或名称]`        | 重启一个或多个容器                 |
| `docker ps [选项]`                     | 列出当前正在运行的容器             |
| `docker ps -a`                         | 列出所有容器，包括已停止的容器     |
| `docker logs [容器ID或名称]`           | 获取容器的日志输出                 |
| `docker exec [选项] 容器ID或名称 命令` | 在正在运行的容器中执行命令         |
| `docker cp <源路径> <目标路径>`        | 在主机和容器之间复制文件或目录     |
| `docker rm [容器ID或名称]`             | 删除一个或多个容器                 |
| `docker network create [网络名]`       | 创建一个新的网络                   |
| `docker network ls`                    | 列出所有的网络                     |
| `docker network rm [网络名]`           | 删除一个或多个网络                 |



## Docker 实践

[使用 docker 部署 Node 服务 | Sewen 博客 (sewar-x.github.io)](https://sewar-x.github.io/myblog/article/node/使用docker服务node部署.html)

[搭建私有NPM仓库 | Sewen 博客 (sewar-x.github.io)](https://sewar-x.github.io/myblog/article/npm/搭建私有npm.html)
