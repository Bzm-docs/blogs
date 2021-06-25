FROM node:latest
LABEL description="vuepress 构建 镜像"
WORKDIR /docs
RUN npm install @vuepress-reco/theme-cli -g
EXPOSE 8080/tcp
ENTRYPOINT start.sh
CMD ["node"]
# docker run -itp 8080:8080 --name=vuepress -v $(pwd):/docs vuepress/demo
