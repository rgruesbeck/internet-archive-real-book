import request from 'superagent';
import { IPFS_PUBLIC_GATEWAY } from './constants';

class IpfsGateWay {

  constructor(gatewayUrl) {
    this.gatewayUrl = gatewayUrl || IPFS_PUBLIC_GATEWAY;
  }

  get(fileMultihash) {
    return request
      .get(this.gatewayUrl + fileMultihash);
  }

  add(file) {
    return request
      .post(this.gatewayUrl)
      .send(file);
  }

}

export default IpfsGateWay;
