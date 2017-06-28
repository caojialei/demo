/**
 * 
 * */
function getProvinceBuy(){
    $("body .dqld_div").remove();
	$("body .dqld_div_bg").remove();
	var province=eval(proStr);
	var newStr=new Array();
	newStr.push("<div class=\"dqld_div_bg\"></div>"+"</div>");
	newStr.push("<div class=\"dqld_div\" style=\"\"><ul>");
	newStr.push("<li style=\"text-align:center;color:#222\">"+'选择地区'+"<a class=\"close\">"+"<img src=\"image/close.png\" />"+"</a>"+"</li>");
	for(var i=0,psize=province.length;i<psize;i++){
		province[i].NAME;
		newStr.push("<li onclick=\"getCityBuy("+i+")\">"+province[i].NAME+"</li>");
	}
	newStr.push("</ul></div>");
	$("body").append(newStr.join(""));
	close_dqld();
}

function getCityBuy(val){
	var province=eval(proStr);
	var city=eval(province[val].ITEMS);
	var newStr=new Array();
	newStr.push("<div class=\"dqld_div\"><ul>");
	newStr.push("<li style=\"text-align:center;color:#222\">"+'选择地区'+"<a class=\"close\">"+"<img src=\"image/close.png\" />"+"</a>"+"</li>");
	newStr.push("<li onclick=\"getProvinceBuy()\" style=\"background-color:#f2f2f2;\">"+province[val].NAME+"<img src=\"image/right.png\" />"+"</li>");
	for(var j=0,csize=city.length;j<csize;j++){
		newStr.push("<li onclick=\"getAreaBuy("+j+","+val+")\"  style=\"padding-left:20px;\">"+city[j].NAME+"</li>");
	}
	newStr.push("</ul></div>");
	$("body .dqld_div").remove();
	$("body").append(newStr.join(""));
	close_dqld();
}

function getAreaBuy(val,val1){
	var province=eval(proStr);
	var city=eval(province[val1].ITEMS);
	var area=eval(city[val].ITEMS);
	var newStr=new Array();
	newStr.push("<div class=\"dqld_div_bg\"></div>"+"</div>");
	newStr.push("<div class=\"dqld_div\"><ul>");
	newStr.push("<li style=\"text-align:center;color:#222\">"+'选择地区'+"<a class=\"close\">"+"<img src=\"image/close.png\" />"+"</a>"+"</li>");
	newStr.push("<li onclick=\"getProvinceBuy()\" style=\"background-color:#e2e2e2;\" class=\"province\">"+province[val1].NAME+"<img src=\"image/right.png\" />"+"</li>");
	newStr.push("<li onclick=\"getCityBuy("+val1+")\" style=\"background-color:#f2f2f2;padding-left:10px;\">"+city[val].NAME+"<img src=\"image/right.png\" />"+"</li>");
	for(var t=0,asize=area.length;t<asize;t++){
		area[t].NAME;
		newStr.push("<li  style=\"padding-left:25px;\" onclick=\"getallArea("+val1+","+val+","+t+")\">"+area[t].NAME+"</li>");
	}
	newStr.push("</ul></div>");
	if(asize==0){
		var allarea=province[val1].NAME+city[val].NAME;
		$("#shengshi").attr({"SS":province[val1].NAME,"SQ":city[val].NAME,"XS":""});
		$("#shengshi").val(allarea);
		$("body .dqld_div").remove();
		$("body .dqld_div_bg").remove();
	}
	else{
		$("body .dqld_div").remove();
		$("body .dqld_div_bg").remove();
		$("body").append(newStr.join(""));
	}
    close_dqld();
}

function getallArea(val,val1,val2){
	var province=eval(proStr);
	var city=eval(province[val].ITEMS);
	var area=eval(city[val1].ITEMS);
	var allarea=province[val].NAME+city[val1].NAME+area[val2].NAME;
	$("#shengshi").attr({"SS":province[val].NAME,"SQ":city[val1].NAME,"XS":area[val2].NAME});
	$("#shengshi").val(allarea);
	$("body .dqld_div").remove();
	$("body .dqld_div_bg").remove();
	close_dqld();
}

function close_dqld()
{
	$(".dqld_div .close").click(function(){
		$(".dqld_div").hide();	
		$(".dqld_div_bg").hide();	
	});
}