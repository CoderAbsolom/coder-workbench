$(function () {
    var ue = model.initUEditor('container');
    ue.ready(function () {
        //获取周报模板内容
        // $.ajax({
        //     type: "get",
        //     url: "../../reporttemplate.html",
        //     dataType: "text",
        //     async: true
        // }).done(function (data) {
        //     ue.setContent(data);
        // });
        $.getJSON(baseURL + "sys/user/info", function(r){
            var content = '';
            var week = util.getThisWeek();
            content += '<h1 style="border-bottom-color:#cccccc;border-bottom-width:2px;border-bottom-style:solid;padding:0px 4px 0px 0px;text-align:center;margin:0px 0px 20px;">\n'
                + '    <span style="color:#c0504d;">' + week[0].format("yyyy/MM/dd") + ' - ' + week[6].format("yyyy/MM/dd") + '周报</span>\n'
                + '</h1>\n'
                + '<p style="text-align:center;">\n'
                + '    <strong>' + r.user.username + '</strong>\n'
                + '</p>';
            for(var i = 0; i < 5; i++){
                content += '<h3>\n'
                    + '    <span style="font-family:幼圆">' + week[i].format("yyyy/MM/dd") + '</span>\n'
                    + '</h3>\n'
                    + '<p style="text-indent:2em;">\n'
                    + '    工作内容\n'
                    + '</p>';
            }
            ue.setContent(content);
        });

    });
});

var vm = new Vue({
    el:'#rrapp',
    data:{

    },
    methods: {

    }
});