### 移动端h5导航小插件

> 利用 juery + iscroll 

### 说明
> 一步登天做不到，但一步一个脚印能做到；一鸣惊人不好做，但一股劲做好一件事，可以做；一下成为天才不可能，但每天进步一点点有可能

> 这是我第一次写一个 jquery 的小插件 仿照了网上的一个demo

> 插件可能功能不多 不过我会尽量的去优化 有问题大家就在 issues 里给我留言哦

> 喜欢可以给我点小星星哦

### 参数说明

```js
    scrollTime: 300, // 滑动时间 默认300
    defaultClick: 0, // 初始选中第n个，默认第0个
    scrollCallback: function(thisCallback) {} // 回调函数
```

### 调用说明

```js

    1. 直接调用

        $('#nav').navscroll();
    
    2. 传入参数    

    	$('#nav').navscroll({
			scrollTime: 500, // 滑动时间 默认300
   		 	defaultClick: 3, // 初始选中第n个，默认第0个
    		scrollCallback: function(thisCallback) {} // 回调函数
		});
```

### 预览

<img src="./images/1.gif">