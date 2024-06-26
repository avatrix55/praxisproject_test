import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { InfluxDB, QueryApi } from '@influxdata/influxdb-client';

@Injectable({
  providedIn: 'root',
})
export class InfluxDBService {
  private influxDBClient: InfluxDB;
  private queryApi: QueryApi;

  constructor() {
    this.influxDBClient = new InfluxDB({
      url: environment.influxDB.url,
      token: environment.influxDB.token,
    });
    this.queryApi = this.influxDBClient.getQueryApi(environment.influxDB.org);
  }

  // Example method to query data
  public async queryData(fluxQuery: string): Promise<any> {
    // Implement query logic here    const results: any[] = [];
    const results: any[] = [];
    return new Promise((resolve, reject) => {
      this.queryApi.queryRows(fluxQuery, {
        next(row, tableMeta) {
          const o = tableMeta.toObject(row);
          results.push(o);
        },
        error(error) {
          console.error('Query error:', error);
          reject(error);
        },
        complete() {
          resolve(results);
        },
      });
    });
  }
}
