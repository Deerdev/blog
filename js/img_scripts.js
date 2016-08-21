function getChildElement(parent,content){
	var contentArr = [];
	var allcontent = parent.getElementsByTagName("*");
	for(var i = 0;i<allcontent.length;i++){
		if(allcontent[i].className==content){
			contentArr.push(allcontent[i]);
		}
	}
	return contentArr;
}

function getminheightLocation(BoxHeightArr,minheight){
	for(var i in BoxHeightArr){
		if(BoxHeightArr[i]==minheight){
			return i;
		}
	}
}

function imgLocation(parent,content){
	var allImgDiv = document.getElementById("img-divcontianer");
	var divWidth = allImgDiv.offsetWidth;
	var cparent = document.getElementById(parent);
	var ccontent = getChildElement(cparent,content);
	var imgWidth = ccontent[0].offsetWidth;
	var num = Math.floor(divWidth / imgWidth);
	cparent.style.cssText = "width:"+imgWidth*num+"px;margin:0 auto";

	var BoxHeightArr=[];
	var maxHeight = 0;
	for(var i=0;i<ccontent.length;i++){
		if(i<num){
			BoxHeightArr[i]=ccontent[i].offsetHeight;
		}else{
			var minheight = Math.min.apply(null,BoxHeightArr);
			var minIndex = getminheightLocation(BoxHeightArr,minheight);
			ccontent[i].style.position = "absolute";
			ccontent[i].style.top = minheight + "px";
			ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";
			BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight;
			maxHeight = Math.max.apply(null,BoxHeightArr);
		}
	}
	if (maxHeight > 0) {
		// 添加高度，防止图片越界
		// var infoHeight = document.getElementById("gallery-info").offsetHeight;
		// console.log(maxHeight)
		// maxHeight +=infoHeight;
		console.log(maxHeight)
		maxHeight +=250;
		allImgDiv.style.cssText = "height: "+maxHeight+"px;";
	};
}

window.onload = function(){
	imgLocation("image_container","box_imgs");
}