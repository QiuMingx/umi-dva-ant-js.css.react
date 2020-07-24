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
### 5. `position:sticky`： 滚动吸顶效果实现
```
在需要滚动吸顶的元素加上以下样式便可以实现这个效果：

.sticky {
    position: sticky;
    top: 0;
}
```

