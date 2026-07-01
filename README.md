# 齐博千个人链接页

这是一个可以挂在 X/Twitter 主页的 Linktree 风格静态页面。

## 修改内容

打开 `config.js`，替换里面的昵称、简介、社交链接和推广链接即可。

常改的位置：

- `profile.name`：页面主标题
- `profile.handle`：X 用户名
- `profile.telegram`：Telegram 用户名
- `socials`：顶部圆形社交按钮
- `links`：主体链接卡片

## 本地预览

直接打开 `index.html` 即可预览。

也可以在这个目录运行：

```bash
python3 -m http.server 4173
```

然后访问：

```text
http://localhost:4173
```

## 部署

把整个文件夹上传到 Vercel、Netlify、Cloudflare Pages、GitHub Pages 或任意静态网站托管服务即可。
