(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{646:function(s,a,n){s.exports=n.p+"assets/img/image-20210827101110013-16300304266261.202ea89d.png"},803:function(s,a,n){"use strict";n.r(a);var t=n(6),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"arch-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arch-配置"}},[s._v("#")]),s._v(" Arch 配置")]),s._v(" "),t("h3",{attrs:{id:"安装-openssh-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-openssh-服务"}},[s._v("#")]),s._v(" 安装 openssh 服务")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("pacman -S openssh //安装openssh服务\nsystemctl start sshd.service //启动openssh服务\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" sshd.service //设置开机启动ssh服务\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config //编辑sshd配置文件\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Authentication:   //运行root用户进行ssh登入")]),s._v("\n  LoginGraceTime 2m  //将注释"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#号去掉")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#PermitRootLogin prohibit-password")]),s._v("\n  PermitRootLogin "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("   //添加一行\n  StrictModes "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("      //将注释"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#号去掉")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"配置静态-ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置静态-ip"}},[s._v("#")]),s._v(" 配置静态 ip")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status systemd-networkd\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" //  或者 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("如图可见我的网卡名称是："),t("code",[s._v("ens32")]),s._v(" ，所以我们在在 "),t("code",[s._v("/etc/systemd/network")]),s._v(" 目录下添加配置文件 "),t("code",[s._v("10-static-enp1s0.network")])]),s._v(" "),t("p",[t("img",{attrs:{src:n(646),alt:"image-20210827101110013"}})]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/systemd/network/10-static-ens32.network\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Match"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ens32\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Network"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Address")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".112.200/24\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Gateway")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".112.254\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DNS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("114.114")]),s._v(".114.114\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl reenable systemd-networkd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("重启")])]),s._v(" "),t("h3",{attrs:{id:"创建用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建用户"}},[s._v("#")]),s._v(" 创建用户")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -m -G wheel bzm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/sudoers\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#%wheel ALL=(ALL) ALL //将注释#去掉，让这个组中用户可以执行任何命令。保存退出")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" - bzm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"archlinuxcn-源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#archlinuxcn-源"}},[s._v("#")]),s._v(" archlinuxcn 源")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/pacman.conf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 腾讯云 (Global CDN) (ipv4, http, https)")]),s._v("\nServer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" https://mirrors.cloud.tencent.com/archlinuxcn/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$arch")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#更新软件包缓存：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -Syy\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S archlinuxcn-keyring\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S yay\nyay --aururl "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://aur.tuna.tsinghua.edu.cn"')]),s._v(" --save\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -Syu\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("blockquote",[t("p",[s._v("https://github.com/archlinuxcn/mirrorlist-repo")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" base-devel xorg networkmanager netctl pcsclite nerd-fonts\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 时间同步")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" timedatectl set-ntp "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://gitee.com/BuZM/config ~/.config\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"zsh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zsh"}},[s._v("#")]),s._v(" zsh")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v("\nchsh -s "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://gitee.com/BuZM/oh-my-zsh ~/.oh-my-zsh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" .config/zsh/zshrc .zshrc\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zsh plugs")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.oh-my-zsh/plugins\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 历史记录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git://github.com/zsh-users/zsh-autosuggestions.git\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 语法检查")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/zsh-users/zsh-syntax-highlighting.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"neovim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#neovim"}},[s._v("#")]),s._v(" neovim")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S neovim python-pip nodejs "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" xclip\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pip config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" global.index-url https://pypi.tuna.tsinghua.edu.cn/simple\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pip3 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --user neovim\npython3 -m pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --user --upgrade pynvim\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get registry\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g neovim\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"fzf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fzf"}},[s._v("#")]),s._v(" FZF")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone --depth "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" https://github.com/junegunn/fzf.git ~/.fzf\n~/.fzf/install\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" ~/.fzf/bin/fzf /usr/local/bin/\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ag")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S the_silver_searcher\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"ranger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ranger"}},[s._v("#")]),s._v(" Ranger")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S ranger w3m highlight ueberzug nerd-fonts atool p7zip ffmpegthumbnailer\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.config/ranger/rc.conf\ndefault_linemode devicons2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"dwm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dwm"}},[s._v("#")]),s._v(" dwm")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("pacman -S wmname\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"微信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微信"}},[s._v("#")]),s._v(" 微信")]),s._v(" "),t("p",[s._v("https://github.com/huan/docker-wechat")]),s._v(" "),t("p",[s._v("https://github.com/vufa/deepin-wine-wechat-arch")]),s._v(" "),t("blockquote",[t("p",[s._v("将 $HOME/.deepinwine/Spark-WeChat/user.reg 文件中的 Noto Sans CJK SC Regular 全部替换成 Noto Sans CJK SC 就行了\n"),t("a",{attrs:{href:"https://github.com/vufa/deepin-wine-wechat-arch/issues/129#issuecomment-886052122",target:"_blank",rel:"noopener noreferrer"}},[s._v("微信输入框中输入中文文字显示异常"),t("OutboundLink")],1)])]),s._v(" "),t("h3",{attrs:{id:"代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代理"}},[s._v("#")]),s._v(" 代理")]),s._v(" "),t("p",[s._v("https://cdn.v2free.net/doc/#/linux/clash")]),s._v(" "),t("h3",{attrs:{id:"常用软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用软件"}},[s._v("#")]),s._v(" 常用软件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入法")]),s._v("\nyaourt -S fcitx fcitx-im fcitx-sogoupinyin kcm-fcitx fcitx-configtool\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 浏览器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S chromium\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# markdown编辑器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S typora\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网易云音乐")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S netease-cloud-music\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S xmind-zen\n\nyay -S wps-office-cn wps-office-mui-zh-cn ttf-wps-fonts python-xlsx2csv\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S flameshot dunst\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S obs-studio\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h3",{attrs:{id:"鼠标速度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#鼠标速度"}},[s._v("#")]),s._v(" 鼠标速度")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/126336905",target:"_blank",rel:"noopener noreferrer"}},[s._v("修改 Linux 系统的鼠标滚轮的速度"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("https://blog.csdn.net/qq_32767041/article/details/84034280")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('sudo pacman -S imwheel\nvim ~/.imwheelrc\n\n".*"\nNone,      Up,   Button4, 3\nNone,      Down, Button5, 3\nControl_L, Up,   Control_L|Button4\nControl_L, Down, Control_L|Button5\nShift_L,   Up,   Shift_L|Button4\nShift_L,   Down, Shift_L|Button5\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("Arch 虚拟机下 KDE 分辨率问题（闪一下又还原）")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("pacman -S open-vm-tools gtkmm gtkmm3 gtk2 xf86-input-vmouse xf86-video-vmware mesa\nsystemctl start vmware-vmblock-fuse.service\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" vmware-vmblock-fuse.service\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" vmtoolsd.service\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/mkinitcpio.conf "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改MODULES=( )为")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MODULES")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vsock vmw_vsock_vmci_transport vmw_balloon vmw_vmci vmwgfx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmkinitcpio -p linux或 mkinitcpio -P\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"修改键位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改键位"}},[s._v("#")]),s._v(" 修改键位")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.Xmodmap\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("将 ESC 键与 CapsLock 键交换位置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("remove Lock "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Caps_Lock\nkeysym Escape "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Caps_Lock\nkeysym Caps_Lock "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Escape\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" Lock "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Caps_Lock\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("xmodmap ~/.Xmodmap\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);