import request from 'superagent';
import {
  IPFS_PUBLIC_GATEWAY
} from './constants';

class IpfsGateWay {

  constructor(getGateWayUrl) {
    this.getGateWay = getGateWayUrl || IPFS_PUBLIC_GATEWAY;
    this.addGateWay = IPFS_PUBLIC_GATEWAY;
  }

  get(fileMultihash) {
    return request
      .get(this.getGateWay + fileMultihash);
  }

  add(file) {
    return request
      .post(this.addGateWay)
      .send(file);
  }

}

export default IpfsGateWay;
