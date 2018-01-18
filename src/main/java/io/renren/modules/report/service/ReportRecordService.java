package io.renren.modules.report.service;

import io.renren.modules.report.entity.ReportRecordEntity;

import java.util.List;
import java.util.Map;

/**
 * Created by PanZhe on 2018/1/17.
 */
public interface ReportRecordService {

    /**
     * 提交周报
     * @param record
     */
    void save(ReportRecordEntity record);

    /**
     * 查询周报列表
     * @return
     */
    List<ReportRecordEntity> queryList(Map<String, Object> map);

    /**
     * 查询总数
     */
    int queryTotal(Map<String, Object> map);

    /**
     * 删除周报
     */
    void deleteBatch(String[] reportIds);
}
