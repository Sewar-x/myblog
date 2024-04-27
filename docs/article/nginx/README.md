---
star: false
category:
  - Node.js
tag:
  - Node ORM
  - Squelize
---

# Nginx

Nginx（engine x）是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务

## 特点

- **高并发性能**：Nginx通过其事件驱动、异步非阻塞的架构设计，能够高效地处理大量并发连接，尤其是对于静态文件请求，效率极高。有报告表明，Nginx能支持高达50000个并发连接数。

- **反向代理和负载均衡**：Nginx提供强大的反向代理功能，可以作为后端服务器集群的前端，根据配置实现HTTP、HTTPS、TCP等多种协议的负载均衡，支持会话持久化、健康检查等功能。

- **热部署**：Nginx支持在不停止服务的情况下更新配置文件和软件升级，非常方便。

- 低内存消耗：在保持高性能的同时，Nginx对系统资源特别是内存的占用率较低，使得在相同的硬件条件下能提供更高的服务能力。静态内容处理：对静态文件如HTML、图片、CSS、JavaScript等有非常快速的处理能力，适合用于缓存和直接服务静态资源。

- 跨平台：Nginx可以在大多数类Unix操作系统上编译运行，并且也提供了Windows版本的移植。

- 可扩展性和可定制化：Nginx支持众多的第三方模块，可以根据需要进行自定义开发，实现更多的功能。同时，它也可以根据需要进行高度定制化，将不需要的模块和功能剔除掉，从而减少不必要的代码和资源浪费。

- 高度可靠性：Nginx是基于稳定的、成熟的事件驱动架构开发的，能够有效的避免由于代码错误或者第三方库的问题而导致的崩溃，从而保证了服务的高可靠性。




## 常用功能

**Nginx 对前端开发者有什么用？**

在前端部署过程中，我们经常会使用 Nginx 的静态文件服务功能部署前端静态资源，使用反向代理访问我们资源服务，使用Nginx 配置 HTTPS，使用 Nginx 缓存常用静态资源等：

1. **静态文件服务**：Nginx可以有效地作为静态资源服务器，用于托管和提供前端项目中的静态文件，如HTML、CSS、JavaScript、图片等。通过在Nginx中配置适当的目录和文件路径，前端开发者可以确保这些资源被正确地提供给客户端。
2. **反向代理**：Nginx可以作为一个反向代理服务器，用于转发客户端的请求到后端服务器。这种配置特别适用于前后端分离的开发模式，其中前端应用通过API与后端服务进行通信。通过Nginx作为反向代理，可以实现请求的路由、负载均衡、缓存等功能，提高应用的性能和可扩展性。
3. **HTTPS 配置**：Nginx支持SSL/TLS协议，可以用于配置HTTPS服务，确保前端应用与客户端之间的通信是加密的，提高应用的安全性。
4. **缓存**：Nginx支持静态资源缓存，可以将经常访问的静态文件缓存到本地，减少对后端服务器的请求，从而提高应用的响应速度和用户体验。
5. **负载均衡**：对于大型的前端应用，可能需要部署多个后端服务器来处理请求。Nginx可以作为负载均衡器，根据配置的算法（如轮询、加权轮询、IP哈希等）将请求分发到不同的后端服务器上，从而确保请求被均衡地处理，提高系统的稳定性和吞吐量。
6. **访问控制和安全设置**：Nginx提供了丰富的访问控制和安全设置选项，如限制IP访问、设置HTTP头信息、防止跨站脚本攻击（XSS）等，有助于保护前端应用免受恶意攻击。



## 安装

### **使用包管理器安装**

在大多数Linux发行版中，你可以使用包管理器来安装Nginx，这种方式更为简单和方便。

以Ubuntu为例，可以使用apt-get命令来安装：

1. **更新软件包列表**：首先，使用`sudo apt-get update`命令更新你的软件包列表。
2. **安装Nginx**：然后，使用`sudo apt-get install nginx`命令来安装Nginx。这个命令会自动处理所有的依赖关系，并下载和安装Nginx及其所需的库和工具。
3. **启动Nginx**：安装完成后，你可以使用`sudo systemctl start nginx`命令来启动Nginx服务。

### **使用Docker安装**

使用Docker安装Nginx的步骤主要包括拉取Nginx镜像、运行Nginx容器以及映射配置文件等步骤：

1. **拉取Nginx镜像**：

   - 首先，你需要访问Docker Hub或者其他镜像仓库，查找你需要的Nginx镜像版本。
     - 例如，你可以选择`nginx:1.24.0`这个版本。
   - 在终端中执行`docker pull nginx:1.24.0`命令来拉取这个版本的Nginx镜像。Docker将会从远程仓库下载该镜像并存储在你的本地主机上。

2. **运行Nginx容器**：

   - 当你有了Nginx镜像之后，就可以运行一个Nginx容器了。使用 `docker run`命令来启动容器，并指定一些必要的参数。例如：

     ```bash
     docker run --name nginx-container -p 80:80 -d nginx:1.24.0
     ```

     - `--name nginx-container`：给容器指定一个名称，这里是`nginx-container`。
     - `-p 80:80`：将容器的80端口映射到主机的80端口。这样，你就可以通过访问主机的80端口来访问Nginx服务了。
     - `-d`：以守护进程模式运行容器，这样容器会在后台运行。

3. **映射Nginx配置文件到本地**（可选步骤）：

   - 如果你需要自定义Nginx的配置，可以将容器内的配置文件映射到本地主机上。

   - 首先，创建一个本地目录来存储配置文件。

   - 使用 `docker cp`命令将容器内的配置文件复制到本地目录。例如：

     ```bash
     mkdir -p /opt/docker/nginx  
     docker cp nginx-container:/etc/nginx/ /opt/docker/nginx  
     docker cp nginx-container:/usr/share/nginx/html /opt/docker/nginx
     ```

     这样，你就可以在 `/opt/docker/nginx`目录下找到Nginx的配置文件和HTML目录，并进行相应的修改。

4. **验证安装**：

   - 安装完成后，你可以通过访问`http://<你的主机IP地址>`来验证Nginx是否正常运行。如果一切正常，你应该能看到Nginx的默认欢迎页面。





### Nginx 常见配置

|       配置项       |               描述               |                    示例值                    |
| :----------------: | :------------------------------: | :------------------------------------------: |
|       `user`       |   指定运行Nginx进程的用户和组    |             `user nginx nginx;`              |
| `worker_processes` |        设置工作进程的数量        |           `worker_processes auto;`           |
|    `error_log`     | 设置错误日志文件的路径和日志级别 |  `error_log /var/log/nginx/error.log warn;`  |
|       `pid`        |   设置Nginx主进程的PID文件路径   |          `pid /var/run/nginx.pid;`           |
|      `events`      |          事件相关配置块          |        `{ worker_connections 1024; }`        |
|       `http`       |          HTTP相关配置块          |                  `{ ... }`                   |
|      `server`      |          虚拟主机配置块          |                  `{ ... }`                   |
|      `listen`      |             监听端口             |                 `listen 80;`                 |
|   `server_name`    |               域名               |          `server_name example.com;`          |
|     `location`     |           URL匹配位置            |             `location / { ... }`             |
|       `root`       |         设置请求的根目录         |            `root /var/www/html;`             |
|      `index`       |         设置默认索引文件         |        `index index.html index.htm;`         |
|    `access_log`    | 设置访问日志文件的路径和日志格式 | `access_log /var/log/nginx/access.log main;` |

## Nginx 配置示例

使用 Nginx将监听80端口，并将所有请求映射到`/var/www/html`目录。

当用户访问`example.com`时，Nginx会尝试返回`/var/www/html/index.html`或`/var/www/html/index.htm`文件作为默认页面。

同时，所有的访问和错误日志都会分别记录在`/var/log/nginx/access.log`和`/var/log/nginx/error.log`文件中。

```nginx
# 设置Nginx运行的用户和组  
user nginx nginx;  
  
# 设置工作进程的数量，auto表示自动检测CPU核心数  
worker_processes auto;  
  
# 设置错误日志文件的路径和日志级别  
error_log /var/log/nginx/error.log warn;  
  
# 设置Nginx主进程的PID文件路径  
pid /var/run/nginx.pid;  
  
events {  
    # 设置每个工作进程的最大连接数  
    worker_connections 1024;  
}  
  
http {  
    # 包含其他HTTP模块的配置文件  
    include /etc/nginx/mime.types;  
    default_type application/octet-stream;  
  
    # 设置日志格式  
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '  
                    '$status $body_bytes_sent "$http_referer" '  
                    '"$http_user_agent" "$http_x_forwarded_for"';  
  
    # 设置访问日志文件的路径和日志格式  
    access_log /var/log/nginx/access.log main;  
  
    # 配置虚拟主机  
    server {  
        # 监听80端口  
        listen 80;  
  
        # 设置域名  
        server_name example.com;  
  
        # 配置URL匹配位置  
        location / {  
            # 设置请求的根目录  
            root /var/www/html;  
  
            # 设置默认索引文件  
            index index.html index.htm;  
  
            # 允许访问所有请求  
            try_files $uri $uri/ =404;  
        }  
    }  
}
```

