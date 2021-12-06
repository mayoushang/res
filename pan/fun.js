//IE日期兼容
var ua=navigator.userAgent.toLowerCase();var geckos=ua.match(/rv:([\d.]+)\) like gecko/);var msies=ua.match(/msie ([\d.]+)/);var downTimezone=false;if(geckos){downTimezone=true}if(msies){var msieVersion=msies[1].split(".");if(parseInt(msieVersion[0])>=11){downTimezone=true}}if(!/windows|win32/i.test(navigator.userAgent)){downTimezone=false}if(downTimezone){loadScript("https://cdn.jsdelivr.net/gh/mayoushang/date-time-format-timezone@1.2/src/date-time-format-timezone-complete-min.js")}function loadScript(){var scriptArr=Array.prototype.slice.apply(arguments);var script=document.createElement("script");script.type="text/javascript";var rest=scriptArr.slice(1);if(rest.length>0){script.onload=script.onreadystatechange=function(){if(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"){loadScript.apply(null,rest);script.onload=script.onreadystatechange=null}}}script.src=scriptArr[0];document.body.appendChild(script)};

console.log("\n".concat(" %c 一支穿云箭"," ").concat("千军万马来相见"," %c Bilnn Cloud Disk By Myxf ","\n","\n"),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;")

function opengame(){
    var token = getcookie("token");
    if (token==''){alert("请先登录");return false;}
    var url = '/app/index.php?c=game&a=duobao&token='+token;
    openifm("幸运夺宝",url,420,735);
}

function opensendgift(id){
    var token = getcookie("token");
    if (token==''){alert("请先登录");return false;}
    var url = '/app/index.php?c=gift&a=send_gift&id='+id+'&token='+token;
    openifm("打赏礼物",url,420,735);
}

function opengiftshop(){
    var token = getcookie("token");
    if (token==''){alert("请先登录");return false;}
    var url = '/app/index.php?c=gift&a=index&token='+token;
    openifm("打赏礼物",url,420,735);
}

function openifm(title_,url_,width_,height_){
    var _width = "100%";
    var _height = "100%";
    if (!IsMobile()){_width = width_;_height = height_;}
    $.NZ_Window.show({title: title_,width: _width,height: _height,url: url_});
}

function IsMobile() {
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i) ? true : false;
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i) ? true : false;
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i) ? true : false;
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
        }
    };
    return isMobile.any(); //是移动设备
}