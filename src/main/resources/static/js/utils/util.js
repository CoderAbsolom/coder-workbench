var util = {
    //计算本周起止日期
    getThisWeek : function () {
        return getDays();
    }
};

//取得当前日期一周内的某一天
function getWeek(i) {
    var now = new Date();
    var n = now.getDay();
    var start = new Date();
    start.setDate(now.getDate() - n + i); //取得一周内的第一天、第二天、第三天...
    return start;
}

//取得当前日期一周内的七天
function getDays() {
    var days = new Array();
    for (var i = 1; i <= 7; i++) {
        days[i - 1] = getWeek(i);
    }
    return days;
}