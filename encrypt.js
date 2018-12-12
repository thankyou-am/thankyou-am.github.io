document.querySelector('#encrypt').onclick = function() {
    document.querySelector('#encrypted').value =
        ',"' + cryptico.encrypt(encode(document.querySelector('#raw').value), "3e/zzxz2VTYC4kxPfjCrzf1f4H9oh7iPGIp2mWzejIub+T1KLBCuC/xT8JsyF8SkRxDPD2sO53bP9nsZc2mLvoH8mxzJ7Vxu+fFiKrlCNMufBh0KrGq67eEQLmYRsdM4wtT1n2TIXnyB5kievMGdQNnyV/tfqXqIWuFAqomY/RM=").cipher + '"'
}