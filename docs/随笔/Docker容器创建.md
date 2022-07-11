### docker 容器创建

###### redis

```
docker run -p 6379:6379 --restart always -v $PWD/data:/data  -d redis:3.2 redis-server --appendonly yes
```

###### mysql

[修改默认编码为 utf8](https://blog.csdn.net/jiegemena/article/details/80062653)

```shell
# 拉取镜像
$ docker pull mysql:5.7

# 运行mysql
$ sudo docker run -d -p 3306:3306 --restart always --name mysql01 -e MYSQL_ROOT_PASSWORD=123456 -d -v /home/bzm/Data/Docker/redi/mysql/data:/var/lib/mysql  mysql:5.7 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

# 进入docker本地连接mysql客户端
$ sudo docker exec -it mysql bash
$ mysql -uroot -p123456
```



###### Nginx

```shell
# 创建nginx
docker run -d --name nginx01 -p 80:80  nginx 

docker run \
-p 8021:80 \
--name images-nginx \
--restart=always \
-v /opt/docker/nginx/html:/usr/share/nginx/html \
-d \
nginx:1.19.1

# 进入nginx
docker exec -it 64ab6 /bin/bash
```

###### httpd

```shell
docker run \
-p 8021:80 \
--name images-httpd \
-v /opt/docker/httpd/htdocs:/usr/local/apache2/htdocs \
-v /opt/docker/httpd/conf:/usr/local/apache2/conf \
--restart=always \
-d \
httpd:2.4
```

###### elasticsearch+kibana

```shell
docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.6.2
```

###### Portainer

```shell
docker run -d -p 9000:9000 --restart=always -v /var/run/docker.sock:/var/run/docker.sock --name prtainer  portainer/portainer
```

###### RabbitMQ

```shell
$ docker run --name rabbitmq -d -p 15672:15672 -p 5672:5672 --restart always rabbitmq:3.7.7-management
# 访问管理界面的地址就是 http://[宿主机IP]:15672
```

###### Zookeeper

```shell
$ docker run -d -p 2181:2181 --name some-zookeeper --restart always zookeeper:3.4.9
```

###### Consul

```shell
$ docker run -d -p 8500:8500 -v /data/consul:/consul/data -e CONSUL_BIND_INTERFACE='eth0' --name=consul_server_1 consul:1.6.1 agent -server -bootstrap -ui -node=1 -client='0.0.0.0' 

$ docker run -d -p 8500:8500 -v /data/consul:/consul/data --name=dev-consul -e CONSUL_BIND_INTERFACE=eth0 --restart always consul:1.6.1
```

###### gitlab

```shell
docker run -d --hostname gitlab.example.com -p 8443:443 -p 80:80 -p 2222:22 --name gitlab --restart always -v /home/docker/gitlab/config:/etc/gitlab -v /home/docker/gitlab/logs:/var/log/gitlab -v /home/docker/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce:latest          
```



```
docker run -d --hostname gitlab.example.com -p 8443:443 -p 80:80 -p 2222:22 --name gitlab1 --restart always -v /home/docker/gitlab/config:/etc/gitlab -v /home/docker/gitlab/logs:/var/log/gitlab -v /home/docker/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce:latest          
```
