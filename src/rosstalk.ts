declare module 'rosstalk' {
  import {EventEmitter} from 'events';

  class Rosstalk extends EventEmitter
  {
    constructor(opts: {host: string; port?: number});

    /**
     * Connect to the switcher
     */
    connect(): void;

    /**
     *  Transition an me
     *
     *  @param {Number} me - the me number
     *  @param {Boolean} auto - whether or not to auto trans
     */
    trans(me: number, auto: boolean): void;

    /**
     *  Fire a custom control
     *
     *  @param {Number} bank - the cc bank number
     *  @param {Number} num - the cc in the bank to fire
     */
    cc(bank: number, num: number): void;

    /**
     *  Fade to black
     */
    ftb(): void;

    /**
     * Trans a keyer
     * @param {Number} me - the me number
     * @param {Number} key - the keyer on the me
     * @param {Boolean} auto - auto trans for keyer
     */
    transKey(me: number, key: number, auto: boolean): void;
  }

  export = Rosstalk;
}
