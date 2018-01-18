var model = {
    //初始化UEditor富文本框插件
    initUEditor : function (eve, param) {
        var params = {
            toolbars : [
                ['undo', 'redo', '|',
                    'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
                    'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain','|',
                    'print', 'preview', 'searchreplace', 'drafts', 'help'
                ], [
                    'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', '|',
                    'link', 'insertimage', 'emotion', 'scrawl', 'insertvideo', 'attachment', 'insertcode', '|',
                    'horizontal', 'date', 'time', 'spechars', '|',
                    'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols'
                ]
            ],
            initialFrameWidth : '100%',//宽度自适应
            initialFrameHeight : '80%',
            maximumWords : '1000',//最大1000字
            elementPathEnabled : false//关闭元素统计
        };
        $.extend(true,params,param);
        return UE.getEditor(eve ,params);
    }
};