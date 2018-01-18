$(function () {
    $("#jqGrid").jqGrid({
        url: baseURL + 'report/list',
        datatype: "json",
        colModel: [
            { label: '周报ID', name: 'reportId', index: "report_id", width: 0, key: true, hidden:true },
            { label: '标题', name: 'title', width: 100 },
            { label: '内容', name: 'content', width: 0, hidden:true },
            { label: '提交人', name: 'nickname',width: 30 },
            { label: '提交时间', name: 'createTime', index: "create_time", width: 40}
        ],
        viewrecords: true,
        height: 385,
        rowNum: 10,
        rowList : [10,30,50],
        rownumbers: true,
        rownumWidth: 25,
        autowidth:true,
        multiselect: true,
        pager: "#jqGridPager",
        jsonReader : {
            root: "page.list",
            page: "page.currPage",
            total: "page.totalPage",
            records: "page.totalCount"
        },
        prmNames : {
            page:"page",
            rows:"limit",
            order: "order"
        },
        gridComplete:function(){
            //隐藏grid底部滚动条
            $("#jqGrid").closest(".ui-jqgrid-bdiv").css({ "overflow-x" : "hidden" });
        }
    });
    ue = model.initUEditor('container',{
        readonly: true
    });
});

var ue;
var vm = new Vue({
    el:'#rrapp',
    data:{
        q:{
            nickname: null
        },
        showList: true
    },
    methods: {
        query: function () {
            vm.reload();
        },
        details : function () {
            vm.showList = false;
            var reportData = getSelectedRowsData("jqGrid");
            if(reportData == null){
                return ;
            }
            ue.setContent(reportData.content);
        },
        returnMain : function () {
            vm.showList = true;
        },
        del: function () {
            var reportIds = getSelectedRows();
            if(reportIds == null){
                return ;
            }

            confirm('确定要删除选中的记录？', function(){
                $.ajax({
                    type: "POST",
                    url: baseURL + "report/delete",
                    contentType: "application/json",
                    data: JSON.stringify(reportIds),
                    success: function(r){
                        if(r.code == 0){
                            alert('操作成功', function(){
                                vm.reload();
                            });
                        }else{
                            alert(r.msg);
                        }
                    }
                });
            });
        },
        reload: function () {
            vm.showList = true;
            var page = $("#jqGrid").jqGrid('getGridParam','page');
            $("#jqGrid").jqGrid('setGridParam',{
                postData:{'nickname': vm.q.nickname},
                page:page
            }).trigger("reloadGrid");
        }
    }
});