export const environment = {
  production: false,
  influxDB: {
    url: 'https://influxdb.fortrafficdev.de', // Your InfluxDB URL
    token: 'MdzuXOANhbdCb_H5g68dvrsCQPKrnY25i-1yfXXlYssR0oLYvwK8vsMgrFkyW_BsHrucbAH-ySk4HqAFgNn8jQ==', // Your InfluxDB authentication token
    org: '4Traffic', // Your InfluxDB organization name
    bucket: '4T_Main', // Your InfluxDB bucket name
  },
};
