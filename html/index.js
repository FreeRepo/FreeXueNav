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
  alert(data);
});
		  
	var width=document.body.clientWidth;
	var height=document.body.clientHeight;
	var rightwidth=document.body.clientWidth-120;
	$("#main").width(width+"px");
	$("#right").width(rightwidth+"px");
	$(".subchoice").hide();

	$("#left").mouseenter(function(){
		$(".choice").css({
			"filter":"alpha(opacity=100)",
 			"-moz-opacity":"1",
 			"-khtml-opacity":"1",
 			"opacity":"1"	
		});		
	});

	$("#left").mouseleave(function(){
		$(".choice").css({
			"filter":"alpha(opacity=60)",
 			"-moz-opacity":"0.6",
 			"-khtml-opacity":"0.6",
 			"opacity":"0.6"	
		});	
		$(".subchoice li a").css({
			"filter":"alpha(opacity=60)",
 			"-moz-opacity":"0.6",
 			"-khtml-opacity":"0.6",
 			"opacity":"0.6"			
		});		
	});	
	
	$(".choice").mouseenter(function(){
		$(".choice").css({
			"color":"#777777"
		});	
		$(".subchoice li a").css({
			"filter":"alpha(opacity=100)",
 			"-moz-opacity":"1",
 			"-khtml-opacity":"1",
 			"opacity":"1"	
		});	
		$(this).css({
			"color":"#95c13d"
		});		
	});

	$(".choice").mouseleave(function(){
		$(".choice").css({
			"color":"#777777"
		});		
	});	
	
	$(".subchoice li a").mouseenter(function(){
		$(this).css({
			"color":"#95c13d"
		});		
	});
	
	$(".subchoice li a").mouseleave(function(){

		if($(this).attr("id")=="selected"){
			$(this).css({
			"filter":"alpha(opacity=60)",
 			"-moz-opacity":"0.6",
 			"-khtml-opacity":"0.6",
 			"opacity":"0.6"	
		});
			}
		else{
			$(this).css({
			"color":"#777777",
			"filter":"alpha(opacity=60)",
 			"-moz-opacity":"0.6",
 			"-khtml-opacity":"0.6",
 			"opacity":"0.6"	
		});
			
			}
		
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
			"color":"#95c13d",

		});	
		$(".subchoice li a").attr("id","");
		$(this).find("a").attr("id","selected");
		
		
	//	alert($(this).attr("title"));
		$("#right").html("<div align=\"center\"><img src=\"img/loading.gif\" /></div>");
		
	});
	
$(".content").click(function(){
	location.href=$(this).attr("title");
	});
	
	$(".discription").mouseenter(function(){	
		 $(this).animate({top:"-213px"});	
		 $(this).css({
			"background-color":"#000000",
			"color":"#e5e5e5",
			"filter":"alpha(opacity=85)",
 			"-moz-opacity":"0.85",
 			"-khtml-opacity":"0.85",
 			"opacity":"0.85"	
		});		 
	});

	$(".discription").mouseleave(function(){
		
		 $(this).animate({top:"10px"});
		 		 $(this).css({
			"background-color":"#e5e5e5",
			"color":"#666666",
			"filter":"alpha(opacity=100)",
 			"-moz-opacity":"1",
 			"-khtml-opacity":"1",
 			"opacity":"1"	
		});		
	});
});