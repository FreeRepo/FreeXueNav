function QueryString()
{
var name,value,i;
var str=location.href;
var num=str.indexOf("?")
str=str.substr(num+1);
var arrtmp=str.split("&");
for(i=0;i < arrtmp.length;i++){
num=arrtmp[i].indexOf("=");
if(num>0){
name=arrtmp[i].substring(0,num);
value=arrtmp[i].substr(num+1);
this[name]=value;
}
}
}


$(document).ready(function(){
	
 $.get('test.html', function(data) {
  alert('Load was performed.');
});
		  
	var width=document.body.clientWidth;
	var height=document.body.clientHeight;
	var rightwidth=document.body.clientWidth-120;
	$("#main").width(width+"px");
	$("#right").width(rightwidth+"px");
	$(".subchoice").hide();

	$("#left").mouseenter(function(){
		$(".choice").css({
			"color":"#777777"
		});		
	});

	$("#left").mouseleave(function(){
		$(".choice").css({
			"color":"#bbbbc5"
		});		
	});	
	
	$(".choice").mouseenter(function(){
		$(".choice").css({
			"color":"#777777"
		});	
		$(this).css({
			"color":"#95c13d"
		});		
	});
	
	
	 $(".cho").toggle(
	  function(){
	  $(this).parent().find(".subchoice").show();},
	  function(){
	 $(this).parent().find(".subchoice").hide();
	 }
	);
	
	$(".subchoice li").click(function(){
		
		$(".subchoice li").find("a").css({
			"color":"#777777"
		});	
		 $(this).find("a").css({
			"color":"#95c13d"
		});	
		$("#right").html("<div align=\"center\"><img src=\"img/loading.gif\" /></div>");
		
	});
	
$(".content").click(function(){
	location.href=$(this).attr("title");
	});
	
	$(".discription").mouseenter(function(){	
		 $(this).animate({top:"-213px"});	
		 $(this).css({
			"background-color":"#000000",
			"color":"#e5e5e5"
		});		 
	});

	$(".discription").mouseleave(function(){
		
		 $(this).animate({top:"10px"});
		 		 $(this).css({
			"background-color":"#e5e5e5",
			"color":"#666666"
		});		
	});
});