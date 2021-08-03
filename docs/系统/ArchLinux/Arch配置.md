---
date: 2021-07-29
autoIgnore: false
autoSort: 1000
categories:
 - 系统
tags:
 - ArchLinux
isShowComments: true
publish: true
---

# Arch配置

### 安装openssh服务

```shell
pacman -S openssh //安装openssh服务
systemctl start sshd.service //启动openssh服务
systemctl enable sshd.service //设置开机启动ssh服务
vim /etc/ssh/sshd_config //编辑sshd配置文件
  # Authentication:   //运行root用户进行ssh登入
  LoginGraceTime 2m  //将注释#号去掉
  #PermitRootLogin prohibit-password
  PermitRootLogin yes   //添加一行
  StrictModes yes      //将注释#号去掉
```

### 创建用户 

```shell
useradd -m -G wheel bzm
passwd
vim /etc/sudoers

#%wheel ALL=(ALL) ALL //将注释#去掉，让这个组中用户可以执行任何命令。保存退出

su - bzm
```

### archlinuxcn源

```shell
sudo vim /etc/pacman.conf

# 腾讯云 (Global CDN) (ipv4, http, https)
Server = https://mirrors.cloud.tencent.com/archlinuxcn/$arch

#更新软件包缓存：
sudo pacman -Syy
sudo pacman -S archlinuxcn-keyring

sudo pacman -S yay
yay --aururl "https://aur.tuna.tsinghua.edu.cn" --save

sudo pacman -Syu
```



```sh
sudo pacman -S git wget curl base-devel xorg networkmanager netctl pcsclite

# 时间同步
sudo timedatectl set-ntp true

sudo git clone https://gitee.com/BuZM/config ~/.config
```

### zsh

```shell
sudo pacman -S zsh
chsh -s $(which zsh)
sudo git clone https://gitee.com/BuZM/oh-my-zsh ~/.oh-my-zsh
ln .config/zsh/zshrc .zshrc

# zsh plugs
cd ~/.oh-my-zsh/plugins

# 历史记录
git clone git://github.com/zsh-users/zsh-autosuggestions.git
# 语法检查
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
```

### neovim

```shell
sudo pacman -S neovim python-pip nodejs npm
sudo pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
sudo pip3 install --user neovim
python3 -m pip install --user --upgrade pynvim
sudo npm config set registry https://registry.npm.taobao.org
sudo npm config get registry
sudo npm install -g neovim
```

> PlugInstall

### FZF

```shell
cd ~
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install
ln ~/.fzf/bin/fzf /usr/local/bin/

# ag
sudo pacman -S the_silver_searcher
```

### 常用软件

```shell
# 输入法
yaourt -S fcitx fcitx-im fcitx-sogoupinyin kcm-fcitx fcitx-configtool

# 浏览器
sudo pacman -S chromium

# markdown编辑器
sudo pacman -S typora

# 网易云音乐
sudo pacman -S netease-cloud-music 
```

