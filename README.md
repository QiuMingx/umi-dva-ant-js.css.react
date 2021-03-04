# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ npm start

```
## 1. 第一部分：JavaScript
### 1. 谷歌浏览器下载http链接文件失败使用from组件action操作
```
const downloadFile = (
      url = "http://download.etaxcn.com/ycs/plugin/TaxHwHubEntSetup.exe"
  ) => () => {
      var winForm = window.open("", "_blank")
      var form = document.createElement("form")
      form.style.display = "none"
      form.method = "get"
      form.action = url
      winForm.document.body.appendChild(form)
      form.submit()
      form = null
      setTimeout(() => {
          winForm.close()
          winForm = null
      }, 1000)
  }

```

## 1. 第二部分：CSS
### 1. `filter`：CSS属性将模糊或颜色偏移等图形效果应用于元素.
```
filter: blur(5px) 给图像设置高斯模糊
filter: brightness(0.5) 给图片应用一种线性乘法，使其看起来更亮或更暗

```
### 2. `transform`：transform属性允许你旋转，缩放，倾斜或平移给定元素.
```
 transform: scale(1.5); 定义 2D 缩放转换

 transform-origin: center top;  让你更改一个元素变形的原点。
```
### 3. `transition`：transition 过渡可以为一个元素在不同状态之间切换的时候定义不同的过渡效果.
```
transition: all 0.5s ease-out;

```
### 4. `animation`： 属性用来指定一组或多组动画，每组之间用逗号相隔
```


```
### 5. `text-indent`： 规定文本块中首行文本的缩进

```
实现自动换行后缩进——padding空开，用text-indext把第一行收回
padding-left:25px;
text-indent:-25px;
```
### 6. `position:sticky`： 滚动吸顶效果实现
```
在需要滚动吸顶的元素加上以下样式便可以实现这个效果：

.sticky {
    position: sticky;
    top: 0;
}
```
### 7. 两个div设置为display: inline-block;可能会出现两个div顶端不对齐的情况

```css
右侧div设置vertical-align: top;
.right{
  vertical-align: top;
}
```
### 8. 两个div设置为display: inline-block;可能会出现两个div顶端不对齐的情况

```css
右侧div设置vertical-align: top;
.right{
  vertical-align: top;
}
```
### 9. CSS 实现矩形切角
```css
background: 
           linear-gradient(-45deg,transparent 15px, #00185E 16px, #041a58 80px , #00228a)bottom right,              
           linear-gradient(-135deg,transparent 15px, #00185E 16px, #041a58 80px , #00228a)top right,              
           linear-gradient(135deg,transparent 15px,#002FBC 16px, #002594 80px , #04217b)top left,              
           linear-gradient(45deg,transparent 15px,#002FBC 16px, #002594 80px , #04217b)bottom left;
background-size: 50% 50%;
```
### 10.CSS 多重背景设置
```css
.box{
    background-color:#00144F;
		background-image:  url(./img/topLeft.png), url(./img/topRight.png), url(./img/bottomLeft.png);
		background-position: left top, right top, left bottom;
  	background-repeat: no-repeat,  no-repeat,  no-repeat;
}
```
