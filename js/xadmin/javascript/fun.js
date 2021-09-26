function vpost(urls,datas){
    var back;
    $.ajax({
        url : urls,
        type : "POST",
        data : datas,
        async:false,
        dataType: "json",
        success : function(result) {
            back = result;
        },
        error:function(msg){
            var jsonData = "{msg:'-1'}";
            back = JSON.stringify(jsonData);
        }
    })
    return back;
}

function vget(urls){
    var back;
    $.ajax({
        url : urls,
        type : "GET",
        async:false,
        dataType: "json",
        success : function(result) {
            back = result;
        },
        error:function(msg){
            var jsonData = "{msg:'-1'}";
            back = JSON.stringify(jsonData);
        }
    })
    return back;
}