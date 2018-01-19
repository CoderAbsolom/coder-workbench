package io.renren.modules.report.controller;

import io.renren.common.annotation.SysLog;
import io.renren.common.utils.*;
import io.renren.common.validator.ValidatorUtils;
import io.renren.common.validator.group.AddGroup;
import io.renren.modules.report.entity.ReportRecordEntity;
import io.renren.modules.report.service.ReportRecordService;
import io.renren.modules.sys.controller.AbstractController;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 周报管理
 *
 * @author PanZhe
 * @date 2018/1/17
 */
@RestController
@RequestMapping("/report")
public class ReportRecordController extends AbstractController {

    @Autowired
    private ReportRecordService reportRecordService;

    /**
     * 周报列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("report:list")
    public R list(@RequestParam Map<String, Object> params) {
        //只有超级管理员，才能查看所有管理员列表
        /*if(getUserId() != Constant.SUPER_ADMIN){
            params.put("createUserId", getUserId());
        }*/
        //查询列表数据
        Query query = new Query(params);
        query.put("sidx","create_time");
        query.put("order","desc");
        List<ReportRecordEntity> reportList = reportRecordService.queryList(query);
        int total = reportRecordService.queryTotal(query);

        PageUtils pageUtil = new PageUtils(reportList, total, query.getLimit(), query.getPage());

        return R.ok().put("page", pageUtil);
    }

    /**
     * 提交周报
     */
    @RequestMapping("/save")
    @RequiresPermissions("report:save")
    public R save(@RequestBody ReportRecordEntity report) {
        ValidatorUtils.validateEntity(report);
        report.setReportId(IdGen.uuid());
        report.setCreateUserId(getUserId());
        report.setCreateTime(new Date());
        reportRecordService.save(report);
        return R.ok();
    }

    /**
     * 删除周报
     */
    @SysLog("删除周报")
    @RequestMapping("/delete")
    @RequiresPermissions("report:delete")
    public R save(@RequestBody String[] reportIds) {
        Map<String, Object> params = new HashMap<>();
        if(getUserId() != Constant.SUPER_ADMIN){
            params.put("createUserId", getUserId());
        }
        params.put("reportIds",reportIds);
        reportRecordService.deleteBatch(params);
        return R.ok();
    }
}
