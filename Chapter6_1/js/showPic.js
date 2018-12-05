/**
 * 
 * 解决平稳退化
 * 如果浏览器的JavaScript被禁用了
 * 通过给a标签的href设置具体的路径而不是用#或者伪JavaScript代码
 */

/**
 * 解决JavaScript和HTML标记分离
 * 上一个版本把onclick函数放在了HTML中
 * 挂钩
 * 
 * 
 */

/**
 * 只可以用来绑定一个函数
 * window.onload = prepareGallery;
 * 可以绑定对各函数
 * window.onload = function(){
 *	 firstFunction
 *	 secondFunction();
 *	}
 */
//最佳解决方案
//func是需要绑定的函数
function addLoadEvent(func){
	var oldonload = window.onload;
	//判断是否绑定了函数
	if(typeof window.oldonload != 'function' ){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

//给每个a标签加上一个onclick函数
//考虑平稳退化
function prepareGallery() {
	//检查浏览器是否理解名为getElementsByTagNme
	if (!document.getElementsByTagName)
		return false;
	//检查浏览器是否理解名为getElementById
	if (!document.getElementById)
		return false;
	//检查html中是否有id为imagegalley
	var gallery = document.getElementById("imagegallery");
	if (!gallery)
		return false;
	//获取imagegallery中的所有链接
	var links = gallery.getElementsByTagName("a");
	//遍历所有链接，加上onclick事件
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			//true则不触发a的默认行为
			return !showPic(this);
			//禁用链接的默认行为
			//return false;
		}
	}
}
//考虑平稳退化
//onclik
function showPic(whichpic) {
	//检查html中是否有id为placeholder
	var placeHolder = document.getElementById("placeholder");
	if (!placeHolder)
		return false;
	//根据ID获取标签元素
	var img = document.getElementById("placeholder");
	//获取标签的href属性值
	var source = whichpic.getAttribute("href");
	//给src属性赋值
	img.setAttribute("src", source);
	//获取标签title食物属性值
	//var text = whichpic.getAttribute("title");
	//优化,处理title不存在的情况
	if(whichpic.getAttribute("title")){
		var text = whichpic.getAttribute("title")
	}else{
		var text = "";
	}
	//检查html中是否有id为description
	var description= document.getElementById("description");
	if (description){
		//根据ID获取标签元素
		var des = document.getElementById("description");
		//获取子节点的个数
		var length = des.childNodes.length;
		for (var i = 0; i < length; i++) {
			//遍历子节点，根据子节点的类型进行对应的处理
			//返回的节点可能会有子元素节点，属性节点，文本节点
			//子元素节点对应的类型为1，属性节点对应的类型为2，文本节点对应的类型为3
			if (des.childNodes[i].nodeType == 3) {
				//给文本节点赋予图片的title值
				des.childNodes[i].nodeValue = text;
				//另外的一种处理办法 lastChild firstChild
				//des.firstChild.nodeValue = text;
			}
		}
		return true;
	}	
}
addLoadEvent(prepareGallery)