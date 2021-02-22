CREATE EXTERNAL TABLE `twitter_data`.`json_records`( 
    `deviceid` string COMMENT 'from deserializer', 
    `deviceos` string COMMENT 'from deserializer', 
    `time` timestamp COMMENT 'from deserializer', 
    `heart_rate` int COMMENT 'from deserializer',
    `latitude` string COMMENT 'from deserializer',
    `longitude` string COMMENT 'from deserializer') 
    ROW FORMAT SERDE 
      'org.openx.data.jsonserde.JsonSerDe' 
    WITH SERDEPROPERTIES ( 
      'paths'='deviceos,deviceid,time,heart_rate,latitude,longitude') 
    STORED AS INPUTFORMAT 
      'org.apache.hadoop.mapred.TextInputFormat' 
    OUTPUTFORMAT 
      'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat' 
    LOCATION 
      's3://<app-bucket>/data/json-records/' 
    TBLPROPERTIES ('has_encrypted_data'='false');



CREATE EXTERNAL TABLE `twitter_data`.`json_records`( 
    `deviceid` string COMMENT 'from deserializer', 
    `deviceos` string COMMENT 'from deserializer', 
    `time` timestamp COMMENT 'from deserializer', 
    `heart_rate` int COMMENT 'from deserializer',
    `latitude` string COMMENT 'from deserializer',
    `longitude` string COMMENT 'from deserializer')
    ROW FORMAT SERDE 
  'org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe' 
STORED AS INPUTFORMAT 
  'org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat' 
OUTPUTFORMAT 
  'org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat'
LOCATION
  's3://<app-bucket><parquet-directory>/'
TBLPROPERTIES ('has_encrypted_data'='false',
'classification'='parquet', 
'compressionType'='none');