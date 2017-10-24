var primo1;
var primo2;
var mensaje = 500;
var pkey;
var p;
var q;
var n;
var phi;
var e;
var d;
var bigInt = require('big-integer');
var msgR;
var msgDec

exports.prueba = function (req, res){
    console.log(req.params.j);
    var respuesta = req.params.j;
    res.send("Mensaje: " + respuesta);
}

exports.sendMsg = function(req, res) {
    console.log('POST');
    console.log(req.body);
    msgDec = bigInt(req.body.msgCodif).modPow(d, n);
    console.log("Mensaje: " + msgDec);
    res.send("Mensaje recibido");
};

exports.PublicKey = function (req, res){
    console.log('GET');
    p = bigInt.randBetween("1e100","10e100");
    q = bigInt.randBetween("1e100","10e100");

    while (!bigInt(p).isPrime()){
        p = bigInt.randBetween("1e100","10e100");
    }

    while (!bigInt(q).isPrime()){
        q = bigInt.randBetween("1e100","10e100");
    }

    n = bigInt(p).multiply(q);
    phi = bigInt(bigInt(p).prev()).multiply(bigInt(q).prev());

    e = bigInt.randBetween("1e100", bigInt(phi));

    while ((!bigInt(e).isPrime())&&(bigInt.lcm(e, phi) != 1)){
        e = bigInt.randBetween("1e5", bigInt(phi));
    }

    d = bigInt(e).modInv(phi);

    //res.send("e: " + e + ", n: " + n);
    res.send(JSON.stringify({ e: e, n: n }));

}

