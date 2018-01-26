**项目说明** 
- 基于[renren-fast](http://git.oschina.net/babaio/renren-fast)开源平台编写的Coder Workbench(才不会承认是欠公司的)
- 周报模块完成

**技术选型：** 
- 核心框架：Spring Boot 1.5
- 安全框架：Apache Shiro 1.3
- 视图框架：Spring MVC 4.3
- 持久层框架：MyBatis 3.3
- 定时器：Quartz 2.3
- 数据库连接池：Druid 1.0
- 日志管理：SLF4J 1.7、Log4j
- 页面交互：Vue2.x 

 **本地部署**
- 通过git下载源码
- 创建数据库renren_fast，数据库编码为UTF-8
- 执行doc/db.sql文件，初始化数据
- 修改application-dev.yml，更新MySQL账号和密码
- Eclipse、IDEA运行RenrenApplication.java，则可启动项目
- 项目访问路径：http://localhost
- 账号密码：admin/admin