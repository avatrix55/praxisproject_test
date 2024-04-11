export const environment = {
  production: false,
  influxDB: {
    url: 'http://localhost:8086', // Your InfluxDB URL
    token: 'Your-InfluxDB-Token-Here', // Your InfluxDB authentication token
    org: 'Your-Organization-Name', // Your InfluxDB organization name
    bucket: 'Your-Bucket-Name', // Your InfluxDB bucket name
  },
};
