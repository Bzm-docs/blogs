# Arch问题解决

## emoji导致X崩溃

### 原因

X Error of failed request:  BadLength (poly request too large or internal Xlib length error)

![image-20211026174340331](media/emoji.assets/image-20211026174340331.png)

### 解决

[参考资料](https://unix.stackexchange.com/questions/629281/gitk-crashes-when-viewing-commit-containing-emoji-x-error-of-failed-request-ba)

```bash
yay -S libxft-bgra
```

