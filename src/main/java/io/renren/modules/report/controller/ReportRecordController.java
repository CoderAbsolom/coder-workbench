package io.renren.modules.report.controller;

import io.renren.common.annotation.SysLog;
import io.renren.common.utils.IdGen;
import io.renren.common.utils.R;
import io.renren.common.validator.ValidatorUtils;
import io.renren.common.validator.group.AddGroup;
import io.renren.modules.report.entity.ReportRecordEntity;
import io.renren.modules.report.service.ReportRecordService;
import io.renren.modules.sys.controller.AbstractController;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

/**
 * 周报管理
 * @author PanZhe
 * @date 2018/1/17
 */
@RestController
@RequestMapping("/report")
public class ReportRecordController extends AbstractController{

    @Autowired
    private ReportRecordService reportRecordService;

    /**
     * 周报列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("report:list")
    public R list(){


        return R.ok();
    }

    /**
     * 提交周报
     */
    @RequestMapping("/save")
    @RequiresPermissions("report:save")
    public R save(@RequestBody ReportRecordEntity report){
        ValidatorUtils.validateEntity(report);
        report.setReportId(IdGen.uuid());
        report.setCreateUserId(getUserId());
        report.setCreateTime(new Date());
        reportRecordService.save(report);
        return R.ok();
    }
}
