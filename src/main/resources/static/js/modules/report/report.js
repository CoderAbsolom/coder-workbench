$(function () {
    ue = model.initUEditor('container');
    ue.ready(function () {
        loadTemplate();
    });
});

//UEditor对象
var ue;
var nickName;
//缓存周报数据
var templateData;

/**
 * 载入周报模板
 * 加入缓存机制，避免重复提交请求
 */
function loadTemplate() {
    if (null == templateData) {
        //获取周报模板内容
        // $.ajax({
        //     type: "get",
        //     url: "../../reporttemplate.html",
        //     dataType: "text",
        //     async: true
        // }).done(function (data) {
        //     ue.setContent(data);
        // });
        $.getJSON(baseURL + "sys/user/info", function (r) {
            var content = '';
            var week = util.getThisWeek();
            nickName = r.user.nickname;
            content += '<h1 style="border-bottom-color:#cccccc;border-bottom-width:2px;border-bottom-style:solid;padding:0px 4px 0px 0px;text-align:center;margin:0px 0px 20px;">\n'
                + '    <span style="color:#c0504d;">' + week[0].format("yyyy/MM/dd") + ' - ' + week[4].format("yyyy/MM/dd") + '周报</span>\n'
                + '</h1>\n'
                + '<p style="text-align:center;">\n'
                + '    <strong>' + nickName + '</strong>\n'
                + '</p>';
            for (var i = 0; i < 5; i++) {
                content += '<h3>\n'
                    + '    <span style="font-family:幼圆">' + week[i].format("yyyy/MM/dd") + '</span>\n'
                    + '</h3>\n'
                    + '<p style="text-indent:2em;">\n'
                    + '    工作内容\n'
                    + '</p>';
            }
            templateData = content;
            ue.setContent(content);
        }, function (r) {
            alert("获取用户信息失败" + r);
        });
    } else {
        ue.setContent(templateData);
    }
}

var vm = new Vue({
    el: '#rrapp',
    data: {
        reportData: {
            title: '',
            content: ''
        }
    },
    methods: {
        commit: function () {
            confirm("提交后不可更改，是否确认提交？",function (e) {
                if('ok' == e){
                    vm.reportData.title = nickName + "的周报";
                    vm.reportData.content = ue.getContent();
                    $.ajax({
                        type: "POST",
                        url: baseURL + "report/save",
                        contentType: "application/json",
                        data: JSON.stringify(vm.reportData),
                        success: function(r){
                            if(r.code === 0){
                                alert('操作成功', function(){
                                    // vm.reload();
                                });
                            }else{
                                alert(r.msg);
                            }
                        }
                    });
                }
            });
        },
        loadTemplate: function () {
            loadTemplate();
        }
    }
});