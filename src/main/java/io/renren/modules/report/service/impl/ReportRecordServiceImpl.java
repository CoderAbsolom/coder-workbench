package io.renren.modules.report.service.impl;

import io.renren.modules.report.dao.ReportRecordDao;
import io.renren.modules.report.entity.ReportRecordEntity;
import io.renren.modules.report.service.ReportRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by PanZhe on 2018/1/17.
 */
@Service("reportRecordService")
public class ReportRecordServiceImpl implements ReportRecordService {

    @Autowired
    private ReportRecordDao reportRecordDao;

    @Override
    @Transactional
    public void save(ReportRecordEntity record) {
        reportRecordDao.save(record);
    }
}
