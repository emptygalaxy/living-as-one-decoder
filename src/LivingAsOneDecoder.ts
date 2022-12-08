import Rosstalk from 'rosstalk';

export class LivingAsOneDecoder {
  private _decoder?: Rosstalk;

  public connect(ip: string) {
    this._decoder = new Rosstalk({
      host: ip,
    });
  }

  public play() {
    this._decoder?.cc(1, 1);
  }

  public pause() {
    this._decoder?.cc(1, 2);
  }
}
