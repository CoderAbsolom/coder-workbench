package io.renren.modules.report.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by PanZhe on 2018/1/17.
 */
public class ReportRecordEntity implements Serializable{

    private static final long serialVersionUID = 1L;

    private String reportId;

    private String title;

    private String content;

    private Long createUserId;

    private Date createTime;

    public String getReportId() {
        return reportId;
    }

    public void setReportId(String reportId) {
        this.reportId = reportId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getCreateUserId() {
        return createUserId;
    }

    public void setCreateUserId(Long createUserId) {
        this.createUserId = createUserId;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}
