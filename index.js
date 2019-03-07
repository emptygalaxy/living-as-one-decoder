var Rosstalk = require('rosstalk');

var _decoder;

function connect(ip)
{
    _decoder = new Rosstalk({
        host: ip
    });
}

function play()
{
	_decoder.cc(1, 1);
}

function pause()
{
	_decoder.cc(1, 2);
}


exports.connect = connect;
exports.play = play;
exports.pause = pause;