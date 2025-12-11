export const quizData = [
  {
    id: 1,
    category: "Monitoring and Troubleshooting",
    question: "Which SAP HANA Cloud tools would you use to diagnose and analyze errors in database trace files? Note: There are 2 correct answers to this question.",
    options: [
      { id: "A", text: "SAP HANA database explorer" },
      { id: "B", text: "SAP HANA Cloud Central" },
      { id: "C", text: "SQL trace analyzer" },
      { id: "D", text: "Full system information dump" }
    ],
    correctAnswers: ["A", "D"]
  },
  {
    id: 2,
    category: "Monitoring and Troubleshooting",
    question: "Which SAP HANA cockpit application can you use to investigate a system offline situation?",
    options: [
      { id: "A", text: "Alert Monitor" },
      { id: "B", text: "Full System Information Dumps" },
      { id: "C", text: "Troubleshoot Unresponsive System" },
      { id: "D", text: "Performance Monitor" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 3,
    category: "Monitoring and Troubleshooting",
    question: "Which SAP HANA trace must you activate to analyze performance issues with systems where third-party software cannot be installed?",
    options: [
      { id: "A", text: "End-to-end" },
      { id: "B", text: "Kernel profiler" },
      { id: "C", text: "SQL" },
      { id: "D", text: "Performance trace" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 4,
    category: "Monitoring and Troubleshooting",
    question: "You want to compare and analyze session-specific data. In what format can you save data sets from the SAP HANA cockpit sessions app? Note: There are 3 correct answers to this question.",
    options: [
      { id: "A", text: "HTML file" },
      { id: "B", text: "XML file" },
      { id: "C", text: "TXT file" },
      { id: "D", text: "JSON file" },
      { id: "E", text: "CSV file" }
    ],
    correctAnswers: ["A", "C", "E"]
  },
  {
    id: 5,
    category: "Monitoring and Troubleshooting",
    question: "What can you store in the statement library? Note: There are 2 correct answers to this question.",
    options: [
      { id: "A", text: "The executed statements trace" },
      { id: "B", text: "Your personal stored procedures" },
      { id: "C", text: "Your personal SQL scripts" },
      { id: "D", text: "The SAP SQL statement collection" }
    ],
    correctAnswers: ["C", "D"]
  },
  {
    id: 6,
    category: "Monitoring and Troubleshooting",
    question: "From which system views can you export content when using the Performance Monitor app? Note: There are 3 correct answers to this question.",
    options: [
      { id: "A", text: "SYS.M_WORKLOAD" },
      { id: "B", text: "SYS.M_SERVICE_STATISTICS" },
      { id: "C", text: "SYS.M_LOAD_HISTORY_HOST" },
      { id: "D", text: "SYS.M_SERVICES" },
      { id: "E", text: "SYS.M_DATABASE" }
    ],
    correctAnswers: ["C", "D", "E"]
  },
  {
    id: 7,
    category: "Monitoring and Troubleshooting",
    question: "What is the purpose of the statement library in the SAP HANA database explorer? Note: There are 2 correct answers to this question.",
    options: [
      { id: "A", text: "To execute scripts from the SQL statement collection for SAP HANA" },
      { id: "B", text: "To collect all the executed SQL statements and generate a searchable library list" },
      { id: "C", text: "To share custom SQL scripts with the whole administration team" },
      { id: "D", text: "To determine special database information not available in the SAP HANA cockpit" }
    ],
    correctAnswers: ["A", "D"]
  },
  {
    id: 8,
    category: "Monitoring and Troubleshooting",
    question: "Which properties can you change in the Alert Definitions app? Note: There are 3 correct answers to this question.",
    options: [
      { id: "A", text: "The interval settings" },
      { id: "B", text: "The proposed solution" },
      { id: "C", text: "The category" },
      { id: "D", text: "The schedule" },
      { id: "E", text: "The thresholds" }
    ],
    correctAnswers: ["A", "D", "E"]
  },
  {
    id: 9,
    category: "Monitoring and Troubleshooting",
    question: "Which output channels can the SAP Alert Notification service for SAP BTP use for notification actions? Note: There are 2 correct answers to this question.",
    options: [
      { id: "A", text: "Slack" },
      { id: "B", text: "Microsoft Teams" },
      { id: "C", text: "WhatsApp" },
      { id: "D", text: "Signal" }
    ],
    correctAnswers: ["A", "B"]
  },
  {
    id: 10,
    category: "Monitoring and Troubleshooting",
    question: "What tools can you use to view the expensive statement trace file? Note: There are 2 correct answers to this question.",
    options: [
      { id: "A", text: "SAP HANA Cloud Central" },
      { id: "B", text: "SAP BTP cockpit" },
      { id: "C", text: "SAP HANA cockpit" },
      { id: "D", text: "SAP HANA database explorer" }
    ],
    correctAnswers: ["C", "D"]
  },
  {
    id: 11,
    category: "Monitoring and Troubleshooting",
    question: "Which services are shared in the Manage Services app in the SAP HANA Cloud database? Note: There are 2 correct answers to this question.",
    options: [
      { id: "A", text: "Compile server" },
      { id: "B", text: "Name server" },
      { id: "C", text: "DP server" },
      { id: "D", text: "DI server" }
    ],
    correctAnswers: ["A", "B"]
  },
  {
    id: 12,
    category: "Monitoring and Troubleshooting",
    question: "What can you check with the SAP HANA hardware and cloud measurement tool (HCMT)? Note: There are 2 correct answers to this question.",
    options: [
      { id: "A", text: "Linux kernel information" },
      { id: "B", text: "Cloud connector status" },
      { id: "C", text: "CPU states" },
      { id: "D", text: "NUMA memory bandwidth test" }
    ],
    correctAnswers: ["C", "D"]
  },
  {
    id: 13,
    category: "Monitoring and Troubleshooting",
    question: "Which tools are available in SAP HANA Cloud Central? Note: There are 2 correct answers to this question.",
    options: [
      { id: "A", text: "Service Plan Assignment editor" },
      { id: "B", text: "Start Recovery wizard" },
      { id: "C", text: "Manage Configuration editor" },
      { id: "D", text: "Cloud Foundry CLI" }
    ],
    correctAnswers: ["B", "C"]
  },
  {
    id: 14,
    category: "Monitoring and Troubleshooting",
    question: "Which feature do you use to dynamically control SAP HANA database workloads per client session?",
    options: [
      { id: "A", text: "Workload classes" },
      { id: "B", text: "Workload analysis" },
      { id: "C", text: "Admission control" },
      { id: "D", text: "Load unit configuration" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 15,
    category: "Database Security",
    question: "What is the maximum number of replicas you can configure for SAP HANA Cloud?",
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "3" },
      { id: "C", text: "2" },
      { id: "D", text: "4" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 16,
    category: "Database Security",
    question: "What do you need in a multitenant database container (MDC) system to run queries across tenant databases? Note: There are 2 correct answers to this question.",
    options: [
      { id: "A", text: "The user in the source system must have sufficient privileges in the target database." },
      { id: "B", text: "The cross-tenant database communication must be explicitly activated." },
      { id: "C", text: "The user in the source system must be associated with a user in the target database." },
      { id: "D", text: "The bidirectional communication channel must be allowed." }
    ],
    correctAnswers: ["A", "B"]
  },
  {
    id: 17,
    category: "Database Security",
    question: "How can you view the audit trail in the SAP HANA Cloud, SAP HANA database? Note: There are 2 correct answers to this question.",
    options: [
      { id: "A", text: "Using the expensive statements trace in the SAP HANA cockpit" },
      { id: "B", text: "Using the Auditing card in the SAP HANA cockpit" },
      { id: "C", text: "Using the SQL Console in the SAP HANA database explorer" },
      { id: "D", text: "Using the kernel profiler trace in the SAP HANA database explorer" }
    ],
    correctAnswers: ["B", "C"]
  },
  {
    id: 18,
    category: "Database Security",
    question: "Which options for Audited Action Status are available in the SAP HANA Cloud, SAP HANA database? Note: There are 2 correct answers to this question.",
    options: [
      { id: "A", text: "Critical" },
      { id: "B", text: "Enabled" },
      { id: "C", text: "All" },
      { id: "D", text: "Unsuccessful" }
    ],
    correctAnswers: ["C", "D"]
  },
  {
    id: 19,
    category: "Database Security",
    question: "Which audit trail target is used by default in the SAP HANA Cloud, SAP HANA database?",
    options: [
      { id: "A", text: "Database table" },
      { id: "B", text: "Kernel trace" },
      { id: "C", text: "Linux syslog" },
      { id: "D", text: "CSV text file" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 20,
    category: "Database Security",
    question: "What is the default single sign-on method when using hdbsql?",
    options: [
      { id: "A", text: "Token based" },
      { id: "B", text: "SAML based" },
      { id: "C", text: "Kerberos based" },
      { id: "D", text: "Certificate based" }
    ],
    correctAnswers: ["B"]
  },
    {
    id: 21,
    category: "Installation and Setup",
    question: "Which configuration file is used to define system parameters in SAP HANA?",
    options: [
      { id: "A", text: "indexserver.ini" },
      { id: "B", text: "global.ini" },
      { id: "C", text: "daemon.ini" },
      { id: "D", text: "nameserver.ini" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 22,
    category: "Installation and Setup",
    question: "Which tool installs SAP HANA database on Linux systems?",
    options: [
      { id: "A", text: "hdblcm" },
      { id: "B", text: "hdbinst" },
      { id: "C", text: "sapinst" },
      { id: "D", text: "hanasetup" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 23,
    category: "Architecture",
    question: "Which SAP HANA service manages startup and shutdown of the database?",
    options: [
      { id: "A", text: "Index Server" },
      { id: "B", text: "Name Server" },
      { id: "C", text: "Daemon" },
      { id: "D", text: "Preprocessor Server" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 24,
    category: "Architecture",
    question: "Which server is responsible for handling SQL execution?",
    options: [
      { id: "A", text: "Name Server" },
      { id: "B", text: "Index Server" },
      { id: "C", text: "Compile Server" },
      { id: "D", text: "XS Engine" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 25,
    category: "Security",
    question: "Which authentication method uses an external system for login?",
    options: [
      { id: "A", text: "Internal authentication" },
      { id: "B", text: "LDAP" },
      { id: "C", text: "SAML" },
      { id: "D", text: "SSO" }
    ],
    correctAnswers: ["B", "C", "D"]
  },
  {
    id: 26,
    category: "Security",
    question: "Which SAP HANA object manages user privileges?",
    options: [
      { id: "A", text: "Views" },
      { id: "B", text: "Roles" },
      { id: "C", text: "Packages" },
      { id: "D", text: "Schemas" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 27,
    category: "Backup and Recovery",
    question: "Which backup type captures only changed data blocks?",
    options: [
      { id: "A", text: "Full" },
      { id: "B", text: "Differential" },
      { id: "C", text: "Incremental" },
      { id: "D", text: "Snapshot" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 28,
    category: "Backup and Recovery",
    question: "Which log is required for point-in-time recovery?",
    options: [
      { id: "A", text: "Authentication log" },
      { id: "B", text: "Trace log" },
      { id: "C", text: "Redo log" },
      { id: "D", text: "System log" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 29,
    category: "Performance",
    question: "Which tool analyzes expensive SQL statements?",
    options: [
      { id: "A", text: "SQL Plan Cache" },
      { id: "B", text: "Backup Console" },
      { id: "C", text: "Import Monitor" },
      { id: "D", text: "Transport Manager" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 30,
    category: "Performance",
    question: "What causes high memory consumption in SAP HANA?",
    options: [
      { id: "A", text: "Large tables" },
      { id: "B", text: "Unused indexes" },
      { id: "C", text: "Wrong data types" },
      { id: "D", text: "Large result sets" }
    ],
    correctAnswers: ["A", "C", "D"]
  },
  {
    id: 31,
    category: "Monitoring",
    question: "Which view provides memory usage statistics?",
    options: [
      { id: "A", text: "M_CS_ALL_COLUMNS" },
      { id: "B", text: "M_MEMORY" },
      { id: "C", text: "M_CONNECTIONS" },
      { id: "D", text: "M_SERVICE_MEMORY" }
    ],
    correctAnswers: ["B", "D"]
  },
  {
    id: 32,
    category: "Monitoring",
    question: "Which cockpit app monitors alerts and threshold violations?",
    options: [
      { id: "A", text: "Performance Monitor" },
      { id: "B", text: "Alert Monitor" },
      { id: "C", text: "SQL Analyzer" },
      { id: "D", text: "Trace Viewer" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 33,
    category: "High Availability",
    question: "Which mechanism provides failover?",
    options: [
      { id: "A", text: "System replication" },
      { id: "B", text: "Scale-out" },
      { id: "C", text: "Backup" },
      { id: "D", text: "Snapshots" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 34,
    category: "High Availability",
    question: "Which mode ensures automatic takeover?",
    options: [
      { id: "A", text: "Active/Active" },
      { id: "B", text: "Active/Passive" },
      { id: "C", text: "Standby" },
      { id: "D", text: "Mirror" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 35,
    category: "Data Provisioning",
    question: "Which tool replicates data in real time?",
    options: [
      { id: "A", text: "SLT" },
      { id: "B", text: "LVM" },
      { id: "C", text: "ETL" },
      { id: "D", text: "Snapshot" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 36,
    category: "Data Provisioning",
    question: "Which technology loads batch data?",
    options: [
      { id: "A", text: "SLT" },
      { id: "B", text: "SDI" },
      { id: "C", text: "SDA" },
      { id: "D", text: "ETL tools" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 37,
    category: "Troubleshooting",
    question: "Which command checks running services?",
    options: [
      { id: "A", text: "HDB info" },
      { id: "B", text: "HDB start" },
      { id: "C", text: "HDB stop" },
      { id: "D", text: "HDB restart" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 38,
    category: "Troubleshooting",
    question: "Which file stores process crash details?",
    options: [
      { id: "A", text: "Trace files" },
      { id: "B", text: "Audit log" },
      { id: "C", text: "Backup log" },
      { id: "D", text: "Config file" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 39,
    category: "Updates and Patching",
    question: "Which tool updates SAP HANA?",
    options: [
      { id: "A", text: "hdblcm" },
      { id: "B", text: "sapinst" },
      { id: "C", text: "patcher" },
      { id: "D", text: "updater" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 40,
    category: "Updates and Patching",
    question: "Which step should be done before updating?",
    options: [
      { id: "A", text: "Restart system" },
      { id: "B", text: "Take full backup" },
      { id: "C", text: "Delete logs" },
      { id: "D", text: "Disable users" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 41,
    category: "Security",
    question: "Which privilege allows users to create database objects?",
    options: [
      { id: "A", text: "SELECT" },
      { id: "B", text: "CREATE" },
      { id: "C", text: "EXECUTE" },
      { id: "D", text: "ALTER" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 42,
    category: "Security",
    question: "Which role is always present in SAP HANA?",
    options: [
      { id: "A", text: "PUBLIC" },
      { id: "B", text: "ADMIN" },
      { id: "C", text: "SUPERUSER" },
      { id: "D", text: "DBA" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 43,
    category: "Architecture",
    question: "Which component maintains table metadata?",
    options: [
      { id: "A", text: "Index server" },
      { id: "B", text: "Name server" },
      { id: "C", text: "Statistics server" },
      { id: "D", text: "Compile server" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 44,
    category: "Architecture",
    question: "Where are temporary results stored?",
    options: [
      { id: "A", text: "Data memory" },
      { id: "B", text: "Log volume" },
      { id: "C", text: "Disk storage" },
      { id: "D", text: "Column store" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 45,
    category: "Backup and Recovery",
    question: "When performing log backup, what is stored?",
    options: [
      { id: "A", text: " entire database" },
      { id: "B", text: " Changed pages" },
      { id: "C", text: " Redo entries" },
      { id: "D", text: " Metadata only" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 46,
    category: "Backup and Recovery",
    question: "Which backup mode copies only changed data since last full backup?",
    options: [
      { id: "A", text: " Incremental" },
      { id: "B", text: " Differential" },
      { id: "C", text: " Log" },
      { id: "D", text: " Snapshot" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 47,
    category: "Performance",
    question: "Which factor directly impacts query execution speed?",
    options: [
      { id: "A", text: " Indexing" },
      { id: "B", text: " Partitioning" },
      { id: "C", text: " Network speed" },
      { id: "D", text: " Hardware configuration" }
    ],
    correctAnswers: ["A", "B", "D"]
  },
  {
    id: 48,
    category: "Performance",
    question: "Which tool helps visualize execution plans?",
    options: [
      { id: "A", text: " SQL Analyzer" },
      { id: "B", text: " Plan Visualizer" },
      { id: "C", text: " Trace Viewer" },
      { id: "D", text: " Memory Analyzer" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 49,
    category: "Monitoring",
    question: "Which view shows active sessions?",
    options: [
      { id: "A", text: " M_CONNECTIONS" },
      { id: "B", text: " M_MEMORY" },
      { id: "C", text: " M_SERVICES" },
      { id: "D", text: " M_DISKS" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 50,
    category: "Monitoring",
    question: "Which alert indicates low disk space?",
    options: [
      { id: "A", text: " OOM" },
      { id: "B", text: " Disk full" },
      { id: "C", text: " Long running SQL" },
      { id: "D", text: " High CPU" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 51,
    category: "High Availability",
    question: "Which tool monitors replication health?",
    options: [
      { id: "A", text: " SAP HANA Studio" },
      { id: "B", text: " Replication Monitor" },
      { id: "C", text: " Cockpit" },
      { id: "D", text: " System Monitor" }
    ],
    correctAnswers: ["B", "C"]
  },
  {
    id: 52,
    category: "High Availability",
    question: "Which situation triggers failover?",
    options: [
      { id: "A", text: " Node crash" },
      { id: "B", text: " Maintenance" },
      { id: "C", text: " Backup" },
      { id: "D", text: " Update" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 53,
    category: "Data Provisioning",
    question: "Which component transforms incoming data?",
    options: [
      { id: "A", text: " SLT" },
      { id: "B", text: " SDI" },
      { id: "C", text: " SDA" },
      { id: "D", text: " ETL" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 54,
    category: "Data Provisioning",
    question: "Which feature supports virtual tables?",
    options: [
      { id: "A", text: " SLT" },
      { id: "B", text: " SDI" },
      { id: "C", text: " SDA" },
      { id: "D", text: " LVM" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 55,
    category: "Troubleshooting",
    question: "What causes performance degradation?",
    options: [
      { id: "A", text: " Expensive SQL" },
      { id: "B", text: " Hardware failure" },
      { id: "C", text: " Network latency" },
      { id: "D", text: " Small tables" }
    ],
    correctAnswers: ["A", "B", "C"]
  },
  {
    id: 56,
    category: "Troubleshooting",
    question: "Which step isolates error sources?",
    options: [
      { id: "A", text: " Debugging" },
      { id: "B", text: " Testing" },
      { id: "C", text: " Logging" },
      { id: "D", text: " Monitoring" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 57,
    category: "Updates",
    question: "What is the purpose of revision upgrades?",
    options: [
      { id: "A", text: " Add features" },
      { id: "B", text: " Fix bugs" },
      { id: "C", text: " Remove users" },
      { id: "D", text: " Change license" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 58,
    category: "Updates",
    question: "Which file should be checked after patching?",
    options: [
      { id: "A", text: " Trace files" },
      { id: "B", text: " Audit logs" },
      { id: "C", text: " Backup logs" },
      { id: "D", text: " Error logs" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 59,
    category: "Administration",
    question: "Which task is part of system administration?",
    options: [
      { id: "A", text: " User management" },
      { id: "B", text: " Reporting" },
      { id: "C", text: " Data modeling" },
      { id: "D", text: " App development" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 60,
    category: "Administration",
    question: "Which cockpit feature handles user creation?",
    options: [
      { id: "A", text: " User Management" },
      { id: "B", text: " Performance Analyzer" },
      { id: "C", text: " Monitoring Dashboard" },
      { id: "D", text: " Backup Manager" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 61,
    category: "Security",
    question: "Which feature enforces password complexity rules?",
    options: [
      { id: "A", text: " Authentication parameters" },
      { id: "B", text: " Password policy" },
      { id: "C", text: " User profile" },
      { id: "D", text: " Grant structure" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 62,
    category: "Security",
    question: "Which privilege is needed to create users?",
    options: [
      { id: "A", text: " USER ADMIN" },
      { id: "B", text: " ROLE ADMIN" },
      { id: "C", text: " SYSTEM" },
      { id: "D", text: " SECURITY ADMIN" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 63,
    category: "Architecture",
    question: "Which service handles SQL parsing?",
    options: [
      { id: "A", text: " Compile Server" },
      { id: "B", text: " Index Server" },
      { id: "C", text: " XS Engine" },
      { id: "D", text: " Name Server" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 64,
    category: "Architecture",
    question: "Which layer manages session context?",
    options: [
      { id: "A", text: " Persistence layer" },
      { id: "B", text: " SQL layer" },
      { id: "C", text: " Application layer" },
      { id: "D", text: " Presentation layer" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 65,
    category: "Backup and Recovery",
    question: "Which recovery restores database to exact failure time?",
    options: [
      { id: "A", text: " Full restore" },
      { id: "B", text: " Differential restore" },
      { id: "C", text: " Point-in-time recovery" },
      { id: "D", text: " Snapshot restore" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 66,
    category: "Backup and Recovery",
    question: "Where are backups stored?",
    options: [
      { id: "A", text: " Data volume" },
      { id: "B", text: " Log volume" },
      { id: "C", text: " Backup location" },
      { id: "D", text: " Memory" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 67,
    category: "Performance",
    question: "Which practice improves query speed?",
    options: [
      { id: "A", text: " Index optimization" },
      { id: "B", text: " Table partitioning" },
      { id: "C", text: " Query rewrite" },
      { id: "D", text: " All of the above" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 68,
    category: "Performance",
    question: "Which cache stores query results?",
    options: [
      { id: "A", text: " SQL cache" },
      { id: "B", text: " Table cache" },
      { id: "C", text: " Result cache" },
      { id: "D", text: " Plan cache" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 69,
    category: "Monitoring",
    question: "Which view shows CPU load?",
    options: [
      { id: "A", text: " M_CPU" },
      { id: "B", text: " M_SERVICES" },
      { id: "C", text: " M_MEMORY" },
      { id: "D", text: " M_CONNECTIONS" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 70,
    category: "Monitoring",
    question: "Which monitor tracks blocked transactions?",
    options: [
      { id: "A", text: " Lock Monitor" },
      { id: "B", text: " SQL Monitor" },
      { id: "C", text: " Thread Monitor" },
      { id: "D", text: " Alert Monitor" }
    ],
    correctAnswers: ["A"]
  },
  {
    id: 71,
    category: "High Availability",
    question: "Which setup allows immediate switch?",
    options: [
      { id: "A", text: " Cold standby" },
      { id: "B", text: " Warm standby" },
      { id: "C", text: " Hot standby" },
      { id: "D", text: " Offline copy" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 72,
    category: "High Availability",
    question: "Which keeps systems synchronized?",
    options: [
      { id: "A", text: " Backup scheduler" },
      { id: "B", text: " Replication" },
      { id: "C", text: " Load balancer" },
      { id: "D", text: " Snapshot" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 73,
    category: "Data Provisioning",
    question: "Which tool connects remote databases?",
    options: [
      { id: "A", text: " SLT" },
      { id: "B", text: " SDI" },
      { id: "C", text: " SDA" },
      { id: "D", text: " ETL" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 74,
    category: "Data Provisioning",
    question: "Which approach avoids data duplication?",
    options: [
      { id: "A", text: " ETL" },
      { id: "B", text: " Replication" },
      { id: "C", text: " Virtualization" },
      { id: "D", text: " Snapshot" }
    ],
    correctAnswers: ["C"]
  },
  {
    id: 75,
    category: "Troubleshooting",
    question: "Which helps root cause analysis?",
    options: [
      { id: "A", text: " Logs" },
      { id: "B", text: " Monitoring" },
      { id: "C", text: " Alerts" },
      { id: "D", text: " Logs and Monitoring" }
    ],
    correctAnswers: ["D"]
  },
  {
    id: 76,
    category: "Troubleshooting",
    question: "First step when system crashes?",
    options: [
      { id: "A", text: " Restart system" },
      { id: "B", text: " Check logs" },
      { id: "C", text: " Reinstall software" },
      { id: "D", text: " Delete cache" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 77,
    category: "Updates",
    question: "What does SP mean?",
    options: [
      { id: "A", text: " Security Patch" },
      { id: "B", text: " Service Pack" },
      { id: "C", text: " Software Patch" },
      { id: "D", text: " System Program" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 78,
    category: "Updates",
    question: "Which minimizes downtime?",
    options: [
      { id: "A", text: " Live update" },
      { id: "B", text: " Rolling update" },
      { id: "C", text: " Offline update" },
      { id: "D", text: " Batch update" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 79,
    category: "Administration",
    question: "Which role manages backup configuration?",
    options: [
      { id: "A", text: " Backup Admin" },
      { id: "B", text: " System Admin" },
      { id: "C", text: " Security Admin" },
      { id: "D", text: " Database User" }
    ],
    correctAnswers: ["B"]
  },
  {
    id: 80,
    category: "Administration",
    question: "Which task checks system health?",
    options: [
      { id: "A", text: " Monitoring" },
      { id: "B", text: " Development" },
      { id: "C", text: " Sales" },
      { id: "D", text: " Accounting" }
    ],
    correctAnswers: ["A"]
  }
];

export const quizConfig = {
  title: "SAP HANA C_DBADM_2404 Quiz",
  totalQuestions: 80,
  passingScore: 70
};