package io.renren.modules.report.service;

import io.renren.modules.report.entity.ReportRecordEntity;

/**
 * Created by PanZhe on 2018/1/17.
 */
public interface ReportRecordService {

    /**
     * 提交周报
     * @param record
     */
    void save(ReportRecordEntity record);
}
