import {Injectable} from '@angular/core';
import {ServerInfo} from './daily.server.info';
import {VideoServerInfo} from './video.server.info';
/**
 * Created by Administrator on 2017/5/28.
 */

@Injectable()
export class DailyServer {
  getUrl(interfaceName: any) {
    return ServerInfo.protocol + '://' + ServerInfo.host + ServerInfo.interfaces.find((value, index) => interfaceName === value.name).url;
  }
}

@Injectable()
export class VideoServer {
  getUrl(interfaceName: any) {
    return VideoServerInfo.protocol + '://' + VideoServerInfo.host
      + VideoServerInfo.interfaces.find((value, index) => interfaceName === value.name).url;
  }
}

