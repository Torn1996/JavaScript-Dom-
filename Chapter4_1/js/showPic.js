
	//onclik
	 function showPic(whichpic){
			//根据ID获取标签元素
			var img = document.getElementById("palceholder");
			//获取标签的href属性值
			var source = whichpic.getAttribute("href");
			//给src属性赋值
			img.setAttribute("src",source);
			//获取标签title食物属性值
			var text = whichpic.getAttribute("title");
			//根据ID获取标签元素
			var des = document.getElementById("description");
			//获取子节点的个数
			var length = des.childNodes.length;
			for(var i=0;i<length;i++){
				//遍历子节点，根据子节点的类型进行对应的处理
				//返回的节点可能会有子元素节点，属性节点，文本节点
				//子元素节点对应的类型为1，属性节点对应的类型为2，文本节点对应的类型为3
				if(des.childNodes[i].nodeType == 3){
					//给文本节点赋予图片的title值
					des.childNodes[i].nodeValue = text;
					//另外的一种处理办法 lastChild firstChild
					//des.firstChild.nodeValue = text;
				}
			}
		} 