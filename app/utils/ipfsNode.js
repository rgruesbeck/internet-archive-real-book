import IPFS from 'ipfs';
import { series } from 'async';
//import concat from 'concat-stream';

class ipfsNode {

  constructor() {
  }

  test() {
    const fileMultihash = 'QmZVDEVjtwQ7Cd9oMJ3V4FWW9rbapz7V5sQmfGfXV96PET';
    const node = new IPFS();
    series([
      (cb) => node.on('ready', cb),
      (cb) => node.version((err, version) => {
        if (err) { return cb(err); }
        console.log('IPFS Version:', version.version);
        cb();
      }),
      (cb) => node.on('start', () => {
        node.swarm.peers({}, function(err, peers) {
          console.log('Connected to', peers.length, 'peers');
        });
        cb();
      }),
      (cb) => node.files.add({
        path: 'hello.txt',
        content: Buffer.from('Hello Totemic!')
      }, (err, result) => {
        if (err) { return cb(err); }
        console.log(result[0].hash);
      }),
      (cb) => node.files.get(fileMultihash, (err, stream) => {
        if (err) { return cb(err); }
        console.log('ipfs streaming!');
        //stream.pipe();
        stream.on('data', (buf) => { console.log(buf); });
        stream.on('end', () => { console.log('stream end'); });
      })
    ]);
  }
}

export default IpfsNode;
