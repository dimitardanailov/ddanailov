```sql
AzureMetrics
| where $__timeFilter(TimeGenerated)
| where Resource == "" and SubscriptionId == "" and MetricName == "dtu_consumption_percent"
| summarize avg(Total) by bin(TimeGenerated, 60s)
| project-rename avg_total_dtu_consumption_percent=avg_Total 
| sort by TimeGenerated asc
```

```sql
AzureMetrics
| where $__timeFilter(TimeGenerated)
| where Resource == "" and SubscriptionId == "" and MetricName == "dtu_used"
| summarize avg(Total) by bin(TimeGenerated, 60s)
| project-rename avg_total_dtu_used=avg_Total 
| sort by TimeGenerated asc
```

```sql
AzureMetrics
| where $__timeFilter(TimeGenerated)   
| where Resource == "" and SubscriptionId == "" and MetricName == "deadlock"
| summarize sum(Total) by bin(TimeGenerated, 60s) 
| project-rename total_deadlock=sum_Total 
| sort by TimeGenerated asc
```

```sql
AzureMetrics
| where $__timeFilter(TimeGenerated)    
| where Resource == "" and SubscriptionId == "" and MetricName == "Storage"
| summarize avg(Average / (1024*1024*1024)) by bin(TimeGenerated, 60s)
| project-rename Average_GB=avg_  
| sort by TimeGenerated asc
```

```sql
AzureMetrics
| where $__timeFilter(TimeGenerated)    
| where ResourceProvider == "MICROSOFT.WEB" and ResourceId == "" and MetricName == "Requests"
| summarize sum(Total) by bin(TimeGenerated, 60s)
| sort by TimeGenerated asc
```

```sql
AzureMetrics
| where $__timeFilter(TimeGenerated)    
| where ResourceProvider == "MICROSOFT.WEB" and ResourceId == "" and MetricName == "Http5xx"
| summarize sum(Total) by bin(TimeGenerated, 60s)
| project-rename Http5xx_total_erors=sum_Total 
| sort by TimeGenerated asc
```

```sql
AzureMetrics
| where $__timeFilter(TimeGenerated)    
| where ResourceProvider == "MICROSOFT.WEB" and ResourceId == "" and MetricName == "BytesReceived"
| summarize sum(Total / 1000) by bin(TimeGenerated, 60s)
| project-rename sum_BytesReceived_kb=sum_Total 
| sort by TimeGenerated asc
```

```sql
AzureMetrics
| where $__timeFilter(TimeGenerated)    
| where ResourceProvider == "MICROSOFT.WEB" and ResourceId == "" and MetricName == "Http404"
| summarize sum(Total) by bin(TimeGenerated, 60s)
| project-rename Http404_total_erors=sum_Total 
| sort by TimeGenerated asc
```

```sql
AzureMetrics
| where $__timeFilter(TimeGenerated)    
| where ResourceProvider == "MICROSOFT.WEB" and ResourceId == "" and MetricName == "Http401"
| summarize sum(Total) by bin(TimeGenerated, 60s)
| project-rename Http401_total_erors=sum_Total 
| sort by TimeGenerated asc
```

```sql
AzureMetrics
| where $__timeFilter(TimeGenerated)    
| where ResourceProvider == "MICROSOFT.WEB" and ResourceId == "" and MetricName == "Http3xx"
| summarize sum(Total) by bin(TimeGenerated, 60s)
| project-rename Http3xx_total_erors=sum_Total 
| sort by TimeGenerated asc
```

```sql
AzureMetrics
| where $__timeFilter(TimeGenerated)    
| where ResourceProvider == "MICROSOFT.WEB" and ResourceId == "" and MetricName == "Http2xx"
| summarize sum(Total) by bin(TimeGenerated, 60s)
| project-rename Http2xx_total_erors=sum_Total 
| sort by TimeGenerated asc
```

```sql
AzureMetrics 
| where $__timeFilter(TimeGenerated)    
| where ResourceProvider == "MICROSOFT.WEB" and ResourceId == "" and MetricName == "MemoryWorkingSet"
| summarize avg(Total / 1000000) by bin(TimeGenerated, 5s)
| sort by TimeGenerated asc
```


```sql
AzureMetrics 
| where $__timeFilter(TimeGenerated) 
| where ResourceProvider == "MICROSOFT.WEB" and ResourceId == "" and MetricName == "CpuTime"
| summarize avg(Total) by bin(TimeGenerated, 5s)
| sort by TimeGenerated asc
```

```sql
AzureMetrics 
| where $__timeFilter(TimeGenerated) 
| where ResourceProvider == "MICROSOFT.WEB" and ResourceId == "" and MetricName == "AverageResponseTime"
| summarize avg(Total) by bin(TimeGenerated, 5s)
| sort by TimeGenerated asc
```


This includes the following matrices names:
- CpuTime
- Requests
- BytesReceived
- BytesSent
- Http101
- Http2xx
- Http3xx
- Http401
- Http403
- Http404
- Http406
- Http4xx
- Http5xx
- MemoryWorkingSet
- AverageMemoryWorkingSet
- AverageResponseTime
- AppConnections
- Handles
- Threads
- PriateBytes
- IoReadBytesPerSecond
- IoWriteBytesPerSecond
- IoOtherBytesPerSecond
- IoReadOperationsPerSecond
- IoWriteOperationsPerSecond
- IoOtherOperationsPerSecond
- RequestsInApplicationQueue
- CurrentAssemblies
- TotalAppDomains
- TotalAppDomainsUnloaded
- Gen0Collections
- Gen1Collections
- Gen2Collections

### CPU 

> What is the meaning of Total. 

`Count`: is how many CPU usage captured during the time Grain (1 minute)  = 4 times.

`Total`: is the sum of all CPU usages captured in 1 minute. so if you have a count of 4 CPU usages  and the Average CPU usage of them is  0.07375 the total will be 4 x 0.3051666667 = 0.295

`Minimum`: the lowest CPU usage captured out of the 4 snapshots captured in this sample.

`Maximum`: the Highest CPU usage captured out of the 4 snapshots captured in this sample.

`Avg`: the average of all the 4 CPU usages captured during the 1 minute.

