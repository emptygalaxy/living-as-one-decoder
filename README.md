
# Living As One Decoder

This library contains classes to control a Living As One decoder over the local network, using the Rosstalk protocol.  
To control any encoders, see [living-as-one-encoder](https://github.com/emptygalaxy/living-as-one-encoder).

```mermaid
graph LR
    E[Encoder] -- Internet --> S((Living As One Cloud))
    S -- Internet --> D
    
    IN[[Video source]] --> E
    D --> OUT[[Video output]]
    
    subgraph nodejs
      LAOE[living-as-one-encoder]
      LAOD[living-as-one-decoder]
    end
    LAOE -- Living As One API --> S
    LAOE -. controls .-> E
    LAOD -- RossTalk over Local Network --> D[Decoder]
    
    click LAOE "https://github.com/emptygalaxy/living-as-one-encoder" "living-as-one-encoder"
    click LAOD "https://github.com/emptygalaxy/living-as-one-decoder" "living-as-one-decoder"
```



## Installation

Install living-as-one-decoder with npm

```bash
  npm install living-as-one-decoder
```

## Features

- Play the video on the decoder
- Pause the video on the decoder


## Usage/Examples

```typescript
import {LivingAsOneDecoder} from 'living-as-one-decoder';

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
```

```mermaid
graph LR
    D[Living As One Decoder] -- Local Network --> D[Decoder] 
```
