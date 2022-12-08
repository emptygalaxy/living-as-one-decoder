import {LivingAsOneDecoder} from './LivingAsOneDecoder';

const decoderIP = '0.0.0.0';

const decoder = new LivingAsOneDecoder();
decoder.connect(decoderIP);

// pause after one second
setTimeout(() => {
  decoder.pause();
}, 1000);

// resume playing after two seconds
setTimeout(() => {
  decoder.play();
}, 2000);
