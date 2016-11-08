$(function(){
	var banner=$(".banner-center")[0]
    var imgs=$(".pic")
	var circle=$(".circle")
	var left=$(".top-a")[0]
    var right=$(".top-b")[0]
	var width=parseInt(getStyle(banner,"width"));
    var n=0;
	var next=0;
	var flag=true;
    var t=setInterval(move,4000)
	function move(){
		if(!flag){
			return;
		}
		flag=false;
		next=n+1;
		if(next>=imgs.length){
			next=0;
		}
		imgs[next].style.left=width+"px"
		animate(imgs[n],{left:-width},600)
		animate(imgs[next],{left:0},600,function(){
			flag=true;
		})
		circle[n].style.background="#ccc"
		circle[next].style.background="#E72487"
		n=next;
	}
	banner.onmouseover=function(){
        clearInterval(t);

	}
	banner.onmouseout=function(){
		t=setInterval(move,4000)
	}
	right.onclick=function(){

		move();
       
	}
	left.onclick=function(){
        if(!flag){
        	return;
        }
        flag=false;
		next=n-1;
		if(next<0){
			next=imgs.length-1;
		}
		imgs[next].style.left=-width+"px"
		animate(imgs[n],{left:width},600)
		animate(imgs[next],{left:0},600,function(){
			flag=true
		})

		circle[n].style.background="#ccc"
		circle[next].style.background="#E72487"
		n=next;
	}
	for(var i=0;i<circle.length;i++){
		circle[i].index=i;
		circle[i].onclick=function(){
			if(this.index>n){
				if(!flag){
					return
				}
				flag=false
			imgs[this.index].style.left=width+"px"
			animate(imgs[n],{left:-width},600)
			animate(imgs[this.index],{left:0},600,function(){
				flag=true;
			})
			
		    }
			else if(this.index<n){

			imgs[this.index].style.left=-width+"px"
			animate(imgs[n],{left:width},600)
			animate(imgs[this.index],{left:0},600,function(){
				flag=true;
			})
			
			}
			circle[n].style.background="#ccc"
			circle[this.index].style.background="#E72487"
			n=this.index;
		}
		
	}
	// 轮播
	var lunbo=$(".viwe")[0]
	var imgBox=$(".viwe-border");
	// console.log(imgBox)
	var obj=$(".lunbo")[0]
	// console.log(obj)
	var leftone=$(".view-left")[0]
	var rightone=$(".view-right")[0]
    var widthone=parseInt(getStyle($(".viwe-border")[0],"width"));
    // console.log(widthone)
    var time=setInterval(lub,2000)
		function lub(){
			animate(obj,{left:-widthone},1000,function(){
			var imgFirst=getFirst(obj)
			// console.log(imgFirst)
			obj.appendChild(imgFirst)
			obj.style.left=0+"px"

			})
			
		}
	lunbo.onmouseover=function(){
       clearInterval(time)
	}
	lunbo.onmouseout=function(){
		time=setInterval(lub,2000)
	} 
	leftone.onclick=function(){
	
       var last=getLast(obj);
       var First=getFirst(obj);

       insertBefore(last,First);
       obj.style.left=-widthone+"px"
       animate(obj,{left:0},1000)

	}
	rightone.onclick=function(){

		lub();
	}

 // 下拉框

  var box=$(".aaaa")[0]
		box.onmouseover=function(){
			var ewm=$(".hidden")[0]
			ewm.style.display="block"
		}
		box.onmouseout=function(){
			var ewm=$(".hidden")[0]
			ewm.style.display="none"
		}


var box=$(".menu-a")[0]
		box.onmouseover=function(){
			ewm.style.display="block"
		}
		box.onmouseout=function(){
			var ewm=$(".hidden-a")[0]
			ewm.style.display="none"
		}

var box=$(".menu-b")[0]
		box.onmouseover=function(){
			var ewm=$(".hidden-b")[0]
			ewm.style.display="block"
		}
		box.onmouseout=function(){
			// this.style.background=""
			var ewm=$(".hidden-b")[0]
			ewm.style.display="none"
		}

var box=$(".menu-c")[0]
		box.onmouseover=function(){
			var ewm=$(".hidden-c")[0]
			ewm.style.display="block"
		}
		box.onmouseout=function(){
			var ewm=$(".hidden-c")[0]
			ewm.style.display="none"
		}





	var ting=$(".ting")[0]
	
	ting.onmouseover=function(){
		ting.style.background="#fff"
		var ewm=$(".ewm")[0]
		ewm.style.display="block"
	}
	ting.onmouseout=function(){
		ting.style.background="#F6F6F6"
		var ewm=$(".ewm")[0]

		ewm.style.display="none"
	}



	var loading=$(".loading")[0]
	
	loading.onmouseover=function(){
		this.style.background="#fff"
		var input=$(".input")[0]
		input.style.display="block"
	}
	loading.onmouseout=function(){
		this.style.background="#F6F6F6"
		var input=$(".input")[0]

		input.style.display="none"
	}


	var aa=getClass('cjwt')[0];
var bb=getClass('zxzx')[0];
var cc=getClass('tsjy')[0];
  function fixed(small){
  	hover(small,function(){
  		animate(small,{right:130},300,Tween.Quad.easeOut)
  	},function(){
  		animate(small,{right:80},300,Tween.Quad.easeOut)

  	})
  }
  fixed(aa)
  fixed(bb)
  fixed(cc)

  	
})	




	

    
	
 
 







