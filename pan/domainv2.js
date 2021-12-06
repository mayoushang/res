window.reserve_domain = "pan.bilnn.cn";
$.ajax({
    url: "/api/v3/site/ping",
    type: "GET",
    timeout:2000,
    dataType: "json",
    complete: function(response, textStatus) {
        if(response.status != 200 && response.status != 501 && response.status != 500) {
            if(document.domain != reserve_domain && reserve_domain!=""){
                window.location.href = window.location.href.replace(document.domain,reserve_domain);
            }
        }
    }
});