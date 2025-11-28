9nnoq789wklc.js
;
;
const __vite__fileDeps = [
        './sezq6sbep5aw.js',
        './hyhxrurq5wm0.js',
        './r9z1zbki536i.js',
        './l0q6q8mwzv89.js',
        './2wxi96ko2a7u.css',
        './sjktsg3nxwt3.js',
        './bmsw585fdhoj.css'
    ], __vite__mapDeps = _0x340696 => _0x340696.map(_0x5c8962 => __vite__fileDeps[_0x5c8962]);
var i1 = Object.defineProperty, r1 = (_0x521114, _0x66f75d, _0x7347ed) => _0x66f75d in _0x521114 ? i1(_0x521114, _0x66f75d, {
        'enumerable': true,
        'configurable': true,
        'writable': true,
        'value': _0x7347ed
    }) : _0x521114[_0x66f75d] = _0x7347ed, Dn = (_0xde2302, _0xa723cd, _0x5dbc9c) => (r1(_0xde2302, typeof _0xa723cd != 'symbol' ? _0xa723cd + '' : _0xa723cd, _0x5dbc9c), _0x5dbc9c);
(function () {
    const _0x3424b4 = document.createElement('link').relList;
    if (_0x3424b4 && _0x3424b4.supports && _0x3424b4.supports('modulepreload')) {
        return;
    }
    for (const _0x564da1 of document.querySelectorAll('link[rel="modulepreload"]'))
        _0x1d2808(_0x564da1);
    const _0x2c189f = {
        childList: true,
        subtree: true
    };
    ;
    ;
    new MutationObserver(_0x1e112e => {
        ;
        for (const _0x256a74 of _0x1e112e)
            if (_0x256a74.type === 'childList') {
                for (const _0x5dcec0 of _0x256a74.addedNodes)
                    _0x5dcec0.tagName === 'LINK' && _0x5dcec0.rel === 'modulepreload' && _0x1d2808(_0x5dcec0);
            }
    }).observe(document, _0x2c189f);
    ;
    function _0x5b9c2b(_0x103bd0) {
        const _0x177c1c = {};
        return _0x103bd0.integrity && (_0x177c1c.integrity = _0x103bd0.integrity), _0x103bd0.referrerPolicy && (_0x177c1c.referrerPolicy = _0x103bd0.referrerPolicy), _0x103bd0.crossOrigin === 'use-credentials' ? _0x177c1c.credentials = 'include' : _0x103bd0.crossOrigin === 'anonymous' ? _0x177c1c.credentials = 'omit' : _0x177c1c.credentials = 'same-origin', _0x177c1c;
    }
    function _0x1d2808(_0x4f25ca) {
        ;
        if (_0x4f25ca.ep) {
            return;
        }
        _0x4f25ca.ep = true;
        const _0x3c3fdd = _0x5b9c2b(_0x4f25ca);
        fetch(_0x4f25ca.href, _0x3c3fdd);
    }
}());
const a1 = 'modulepreload', o1 = function (_0x24bd1f, _0x2080f7) {
        ;
        return new URL(_0x24bd1f, _0x2080f7).href;
    }, Lr = {}, ze = function (_0x179179, _0x414978, _0x3191c7) {
        ;
        let _0x1e16a9 = Promise.resolve();
        if (_0x414978 && _0x414978.length > 0) {
            const _0x5d76a0 = document.getElementsByTagName('link'), _0x5ab082 = document.querySelector('meta[property=csp-nonce]'), _0x2d3e59 = _0x5ab082?.nonce || _0x5ab082?.getAttribute('nonce');
            _0x1e16a9 = Promise.all(_0x414978.map(_0x5a8fd8 => {
                ;
                if (_0x5a8fd8 = o1(_0x5a8fd8, _0x3191c7), _0x5a8fd8 in Lr) {
                    return;
                }
                Lr[_0x5a8fd8] = true;
                const _0x9a3735 = _0x5a8fd8.endsWith('.css'), _0x43fd4f = _0x9a3735 ? '[rel="stylesheet"]' : '';
                if (!!_0x3191c7) {
                    for (let _0x17d938 = _0x5d76a0.length - 1; _0x17d938 >= 0; _0x17d938--) {
                        const _0xd7dd20 = _0x5d76a0[_0x17d938];
                        if (_0xd7dd20.href === _0x5a8fd8 && (!_0x9a3735 || _0xd7dd20.rel === 'stylesheet')) {
                            return;
                        }
                    }
                } else {
                    if (document.querySelector('link[href="' + _0x5a8fd8 + '"]' + _0x43fd4f)) {
                        return;
                    }
                }
                const _0x5af838 = document.createElement('link');
                if (_0x5af838.rel = _0x9a3735 ? 'stylesheet' : a1, _0x9a3735 || (_0x5af838.as = 'script', _0x5af838.crossOrigin = ''), _0x5af838.href = _0x5a8fd8, _0x2d3e59 && _0x5af838.setAttribute('nonce', _0x2d3e59), document.head.appendChild(_0x5af838), _0x9a3735) {
                    return new Promise((_0x3c94fc, _0x2a015f) => {
                        ;
                        _0x5af838.addEventListener('load', _0x3c94fc);
                        _0x5af838.addEventListener('error', () => _0x2a015f(new Error('Unable to preload CSS for ' + _0x5a8fd8)));
                        ;
                    });
                }
            }));
        }
        return _0x1e16a9.then(() => _0x179179()).catch(_0x3d08d8 => {
            ;
            const _0x484efd = { cancelable: true };
            ;
            const _0x47ba79 = new Event('vite:preloadError', _0x484efd);
            if (_0x47ba79.payload = _0x3d08d8, window.dispatchEvent(_0x47ba79), !_0x47ba79.defaultPrevented) {
                throw _0x3d08d8;
            }
        });
    }, xr = [
        'web.telegram.org',
        'webk.telegram.org'
    ], nm = '8f0e2ce3', Mr = Math.min(4, navigator.hardwareConcurrency ?? 4), ne = {
        'id': 2496,
        'hash': '8da85b0d5bfe62527e5b244c209159c3',
        'version': '2.2',
        'versionFull': '2.2 (906)',
        'build': 906,
        'langPackVersion': 215995,
        'langPackLocalVersion': 16,
        'langPack': 'webk',
        'langPackCode': 'en',
        'domains': xr,
        'baseDcId': 2,
        'isMainDomain': xr.includes(location.hostname),
        'suffix': 'K',
        'threads': Mr,
        'cryptoWorkers': Mr,
        'mtproxy': null,
        'hostname': null
    };
ne.isMainDomain && (ne.id = 2496, ne.hash = '8da85b0d5bfe62527e5b244c209159c3');
function ja() {
    ;
    return document.activeElement?.blur ? (document.activeElement.blur(), true) : false;
}
const a0_0xc3305d = {};
a0_0xc3305d.value = 'Module';
const Fe = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch, Mi = typeof window < 'u' ? window : self, ks = navigator ? navigator.userAgent : null, Et = navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i) !== -1, Ii = navigator.userAgent.toLowerCase().indexOf('android') !== -1, Ri = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor), Ha = ((() => {
        ;
        try {
            return +navigator.userAgent.match(/Chrom(?:e|ium)\/(.+?)(?:\s|\.)/)[1];
        } catch {
        }
    })()), ps = (/iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) && !Mi.MSStream, be = 'safari' in Mi || !!(ks && (/\b(iPad|iPhone|iPod)\b/.test(ks) || ks.match('Safari') && !ks.match('Chrome'))), wt = navigator.userAgent.toLowerCase().indexOf('firefox') > -1, bs = be && ps, Re = (navigator.maxTouchPoints === void 0 || navigator.maxTouchPoints > 0) && navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i) != -1, c1 = Object.freeze(Object.defineProperty({
        '__proto__': null,
        'CHROMIUM_VERSION': Ha,
        'IS_ANDROID': Ii,
        'IS_APPLE': Et,
        'IS_APPLE_MOBILE': ps,
        'IS_CHROMIUM': Ri,
        'IS_FIREFOX': wt,
        'IS_MOBILE': Re,
        'IS_MOBILE_SAFARI': bs,
        'IS_SAFARI': be,
        'USER_AGENT': ks
    }, Symbol.toStringTag, a0_0xc3305d));
function yt(_0x593506, _0x4e89b8) {
    ;
    return _0x593506.closest('.' + _0x4e89b8);
}
let Ds;
function Oe(_0x24dde1) {
    ;
    Ds ? Ds.push(_0x24dde1) : (Ds = [_0x24dde1], requestAnimationFrame(() => {
        const _0xeec519 = Ds;
        Ds = void 0;
        _0xeec519.forEach(_0x15c61c => _0x15c61c());
        ;
    }));
}
let Wt;
function d1() {
    ;
    return Wt || (Wt = new Promise(_0x4dc32c => Oe(() => _0x4dc32c())), Wt.then(() => {
        Wt = void 0;
    }), Wt);
}
function Wa() {
    return new Promise(_0x1e6792 => {
        Oe(() => {
            Oe(_0x1e6792);
        });
    });
}
function Ir(_0x1a394f) {
    ;
    _0x1a394f.style.transform = 'translateY(-99999px)';
    _0x1a394f.focus();
    Wa().then(() => {
        ;
        _0x1a394f.style.transform = '';
    });
    ;
}
const Va = be && Re && Fe && false;
if (Va) {
    const s = 'clientY';
    let e = 0;
    const a0_0x248a90 = {
        capture: true,
        passive: false
    };
    ;
    ;
    ;
    const t = a0_0x248a90, f = _0x42fccd => {
            const _0x15452a = _0x42fccd.touches[0], _0x250157 = yt(_0x15452a.target, 'scrollable-y');
            if (_0x250157) {
                const _0x36655c = _0x15452a[s], _0x13d124 = e - _0x36655c, _0xc02ef1 = _0x250157.scrollTop, _0x521081 = _0x250157.scrollHeight, _0x581258 = _0x250157.clientHeight, _0x24c127 = _0xc02ef1 ? Math.round(_0xc02ef1 + _0x250157.clientHeight + _0x13d124) : _0xc02ef1 + _0x13d124;
                (_0x521081 === _0x581258 || _0x24c127 >= _0x521081 || _0x24c127 <= 0) && _0x42fccd.preventDefault();
            } else {
                _0x42fccd.preventDefault();
            }
        };
    let n = 0;
    const a0_0x5cee71 = { passive: true };
    ;
    const a0_0x30cece = { passive: true };
    ;
    const a0_0x178982 = { passive: true };
    ;
    document.addEventListener('focusin', _0xec62a3 => {
        ;
        !_0xec62a3.target.classList.contains('is-sticky-input-bugged') || _0xec62a3.timeStamp - n < 50 || (Ir(_0xec62a3.target), document.addEventListener('touchmove', f, t), document.addEventListener('touchstart', _0x21c7c0 => {
            ;
            if (_0x21c7c0.touches.length > 1) {
                return;
            }
            e = _0x21c7c0.touches[0][s];
        }));
    }, a0_0x5cee71);
    document.addEventListener('focusout', _0x1d52a5 => {
        ;
        document.removeEventListener('touchmove', f, t);
        n = _0x1d52a5.timeStamp;
        ;
    }, a0_0x30cece);
    document.addEventListener('visibilitychange', () => {
        ;
        document.activeElement && document.activeElement.classList.contains('is-sticky-input-bugged') && document.activeElement.blur && Ir(document.activeElement);
    }, a0_0x178982);
    ;
    ;
}
function im(_0x53aa3b) {
    ;
    Va && _0x53aa3b.classList.add('is-sticky-input-bugged');
}
const Vs = 'Roboto', za = Vs + ', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif', l1 = '16px', u1 = '400', rm = u1 + ' ' + l1 + ' ' + za;
function ve() {
}
function ft(_0x34b692) {
    return new Promise(_0x3fc13f => {
        setTimeout(_0x3fc13f, _0x34b692);
    });
}
const Oi = 'tgico';
function am(_0x24677f) {
    return Oi + '-' + _0x24677f;
}
const a0_0x5cb0c4 = {};
a0_0x5cb0c4.text = Vs;
a0_0x5cb0c4.icons = Oi;
a0_0x5cb0c4.monospace = 'Roboto Mono';
;
const Sn = [
        'b',
        'б'
    ], An = {}, h1 = a0_0x5cb0c4, a0_0x507436 = {};
a0_0x507436.text = Sn;
a0_0x507436.icons = void 0;
a0_0x507436.monospace = Sn;
;
function om(_0x5520e1 = a0_0x507436) {
    ;
    if (!('fonts' in document)) {
        return Promise.resolve();
    }
    const _0x4189d7 = [];
    for (const _0x10f90a in _0x5520e1) {
        let _0x49eb0f = _0x5520e1[_0x10f90a];
        _0x49eb0f === 'all' && (_0x49eb0f = Sn);
        const _0x5ceafa = h1[_0x10f90a], _0x2a5e6e = _0x10f90a === 'icons' ? [500] : [
                400,
                500
            ];
        for (const _0x5c4aae of _0x2a5e6e) {
            const _0x33bea3 = (_0x49eb0f || [void 0]).map(_0x1f0869 => {
                ;
                var _0x1a2bd0, _0x1ece80;
                const _0x3880a0 = [
                    _0x5c4aae,
                    '1rem',
                    _0x5ceafa
                ].join(' ');
                return (_0x1a2bd0 = An[_0x3880a0] ?? (An[_0x3880a0] = {}))[_0x1ece80 = _0x1f0869 || ''] ?? (_0x1a2bd0[_0x1ece80] = document.fonts.load(_0x3880a0, _0x1f0869));
            });
            _0x4189d7.push(..._0x33bea3);
        }
    }
    return Promise.race([
        Promise.all(_0x4189d7).catch(ve),
        ft(1000)
    ]);
}
const Ni = navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i) !== -1, fs = 'account', cm = 3, m1 = 4, Rr = m1;
function Ga(_0x2a112d) {
    ;
    return _0x2a112d instanceof URL || (_0x2a112d = new URL(_0x2a112d + '', location.href)), location.search && _0x2a112d.protocol !== 'blob:' && new URLSearchParams(location.search).forEach((_0x59ce34, _0x2bab6c) => {
        ;
        _0x2bab6c !== fs && _0x2a112d.searchParams.set(_0x2bab6c, _0x59ce34);
    }), _0x2a112d.searchParams.delete('swfix'), _0x2a112d;
}
function g1() {
    const _0x678129 = {
        'construct'(_0x1f4429, _0x440f8b) {
            return _0x440f8b[0] = Ga(_0x440f8b[0]), new _0x1f4429(..._0x440f8b);
        }
    };
    [
        Worker,
        typeof SharedWorker < 'u' && SharedWorker
    ].filter(Boolean).forEach(_0x3ae7f2 => {
        ;
        window[_0x3ae7f2.name] = new Proxy(_0x3ae7f2, _0x678129);
    });
}
g1();
function dm() {
    ;
    Element.prototype.toggleAttribute || (Element.prototype.toggleAttribute = function (_0x3a68f8, _0x7f709c) {
        ;
        return _0x7f709c !== void 0 && (_0x7f709c = !!_0x7f709c), this.hasAttribute(_0x3a68f8) ? _0x7f709c ? true : (this.removeAttribute(_0x3a68f8), false) : _0x7f709c === false ? false : (this.setAttribute(_0x3a68f8, ''), true);
    });
}
const Bi = 0, lm = 1271266957, um = 489000, hm = 777, mm = 2666000, gm = 777000, pm = 2147483647, bm = '', ym = 20971520, jn = '', vm = [
        7322096,
        16766590,
        13338331,
        9367192,
        16749490,
        16478047
    ], Em = 'default_static', Mf = 4294967296, wm = Mf + 1, Dm = false, p1 = new Set([
        'web',
        'k',
        'z',
        'a'
    ]), Sm = 2147483646, Am = new Set([
        'image/jpeg',
        'image/png',
        'image/bmp',
        'image/gif'
    ]), Cm = 'XTR', km = 5000, Fm = -1, b1 = 0, y1 = 1, v1 = new Set([
        b1,
        y1
    ]);
Math.max(...Array.from(v1)) + 1;
const Pm = false;
class je {
    constructor(_0x5f505a) {
        ;
        this['_constructor'](_0x5f505a);
    }
    ['_constructor'](_0x125537) {
        ;
        this.reuseResults = _0x125537;
        this.listeners = {};
        this.listenerResults = {};
        ;
    }
    ['addEventListener'](_0xf6783b, _0xb2cc32, _0x26ecef) {
        ;
        var _0x1a5fa4;
        const _0x184272 = {
            callback: _0xb2cc32,
            options: _0x26ecef
        };
        ;
        ;
        ;
        const _0x168763 = _0x184272;
        if (((_0x1a5fa4 = this.listeners)[_0xf6783b] ?? (_0x1a5fa4[_0xf6783b] = new Set())).add(_0x168763), this.listenerResults.hasOwnProperty(_0xf6783b) && (_0xb2cc32(...this.listenerResults[_0xf6783b]), _0x26ecef?.once)) {
            this.listeners[_0xf6783b].delete(_0x168763);
            return;
        }
    }
    ['addMultipleEventsListeners'](_0x574532) {
        ;
        for (const _0x5ab018 in _0x574532)
            this.addEventListener(_0x5ab018, _0x574532[_0x5ab018]);
    }
    ['removeEventListener'](_0x18d3fa, _0x53df44, _0x5e3100) {
        ;
        if (this.listeners[_0x18d3fa]) {
            for (const _0x57c906 of this.listeners[_0x18d3fa])
                if (_0x57c906.callback === _0x53df44) {
                    this.listeners[_0x18d3fa].delete(_0x57c906);
                    break;
                }
        }
    }
    ['invokeListenerCallback'](_0x3109d3, _0x5d45f0, ..._0x9fe980) {
        ;
        let _0x1769d4, _0x1071f2;
        try {
            _0x1769d4 = _0x5d45f0.callback(..._0x9fe980);
        } catch (_0x227e88) {
            _0x1071f2 = _0x227e88;
        }
        if (_0x5d45f0.options?.once && this.removeEventListener(_0x3109d3, _0x5d45f0.callback), _0x1071f2) {
            throw _0x1071f2;
        }
        return _0x1769d4;
    }
    ['_dispatchEvent'](_0xcf74bc, _0x1f2377, ..._0x5368fe) {
        ;
        this.reuseResults && (this.listenerResults[_0xcf74bc] = _0x5368fe);
        const _0x103d7c = _0x1f2377 && [], _0x355db7 = this.listeners[_0xcf74bc];
        if (_0x355db7) {
            for (const _0x1d0736 of _0x355db7) {
                const _0x11a95c = this.invokeListenerCallback(_0xcf74bc, _0x1d0736, ..._0x5368fe);
                _0x103d7c && _0x103d7c.push(_0x11a95c);
            }
        }
        return _0x103d7c;
    }
    ['dispatchResultableEvent'](_0x9e2840, ..._0x2f9a6a) {
        ;
        return this['_dispatchEvent'](_0x9e2840, true, ..._0x2f9a6a);
    }
    ['dispatchEvent'](_0x266be2, ..._0x3f27f0) {
        ;
        this['_dispatchEvent'](_0x266be2, false, ..._0x3f27f0);
    }
    ['cleanup']() {
        ;
        this.listeners = {};
        this.listenerResults = {};
        ;
    }
}
const _m = false, qa = false, E1 = typeof window < 'u' ? window : self, N = E1, If = Date.now() % Math.random() * 100000000 | 0;
function xe(_0x281088, _0x383854) {
    const _0x5014b6 = _0x281088.indexOf(_0x383854);
    return (_0x5014b6 === -1 ? void 0 : _0x281088.splice(_0x5014b6, 1))?.[0];
}
const a0_0x500c13 = {};
a0_0x500c13.includeUncontrolled = false;
a0_0x500c13.type = 'window';
;
const Zs = typeof ServiceWorkerGlobalScope < 'u' && self instanceof ServiceWorkerGlobalScope, rn = typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && !Zs, bt = rn || Zs, w1 = () => self.clients.matchAll(a0_0x500c13), $a = (_0x492471, ..._0x1038fa) => {
        ;
        try {
            _0x492471.postMessage(..._0x1038fa);
        } catch {
        }
    }, Ya = (_0x269b6d, ..._0x599bd5) => {
        ;
        w1().then(_0x19b73d => {
            ;
            _0x19b73d.length && _0x19b73d.slice(_0x269b6d ? 0 : -1).forEach(_0x46e9d7 => {
                ;
                $a(_0x46e9d7, ..._0x599bd5);
            });
        });
    }, Ka = (..._0x3511cb) => {
        $a(self, ..._0x3511cb);
    }, Ja = () => {
    };
Zs && Ya.bind(null, false);
Zs && Ya.bind(null, true);
;
function Ee(_0x32e363, _0x519af8) {
    const _0x41cb20 = new Error(), _0x3c5ea2 = {
            'type': _0x32e363,
            'stack': _0x41cb20.stack
        };
    return _0x519af8 && (_0x3c5ea2.message = _0x519af8), _0x3c5ea2;
}
const D1 = Date.now();
function Or() {
    ;
    return '[' + ((Date.now() - D1) / 1000).toFixed(3) + ']';
}
var ef = (_0x425aff => (_0x425aff[_0x425aff.None = 0] = 'None', _0x425aff[_0x425aff.Error = 1] = 'Error', _0x425aff[_0x425aff.Warn = 2] = 'Warn', _0x425aff[_0x425aff.Log = 4] = 'Log', _0x425aff[_0x425aff.Debug = 8] = 'Debug', _0x425aff))(ef || {});
const a0_0x12ffde = {};
a0_0x12ffde.black = '\x1B[30m';
a0_0x12ffde.red = '\x1B[31m';
a0_0x12ffde.green = '\x1B[32m';
a0_0x12ffde.yellow = '\x1B[33m';
a0_0x12ffde.blue = '\x1B[34m';
a0_0x12ffde.magenta = '\x1B[35m';
a0_0x12ffde.cyan = '\x1B[36m';
a0_0x12ffde.white = '\x1B[37m';
;
const a0_0x32e3a8 = {};
a0_0x32e3a8.black = '\x1B[40m';
a0_0x32e3a8.red = '\x1B[41m';
a0_0x32e3a8.green = '\x1B[42m';
a0_0x32e3a8.yellow = '\x1B[43m';
a0_0x32e3a8.blue = '\x1B[44m';
a0_0x32e3a8.magenta = '\x1B[45m';
a0_0x32e3a8.cyan = '\x1B[46m';
a0_0x32e3a8.white = '\x1B[47m';
;
const a0_0x5aafae = {};
a0_0x5aafae.reset = '\x1B[0m';
a0_0x5aafae.bright = '\x1B[1m';
a0_0x5aafae.dim = '\x1B[2m';
a0_0x5aafae.underscore = '\x1B[4m';
a0_0x5aafae.blink = '\x1B[5m';
a0_0x5aafae.reverse = '\x1B[7m';
a0_0x5aafae.hidden = '\x1B[8m';
a0_0x5aafae.fg = a0_0x12ffde;
a0_0x5aafae.bg = a0_0x32e3a8;
;
const S1 = [
        0,
        1,
        2,
        4,
        8
    ], A1 = be || wt, Nr = !A1, Cn = a0_0x5aafae, C1 = [
        [
            'debug',
            8
        ],
        [
            'info',
            4
        ],
        [
            'warn',
            2
        ],
        [
            'error',
            1
        ],
        [
            'assert',
            1
        ],
        [
            'trace',
            4
        ],
        [
            'group',
            4
        ],
        [
            'groupCollapsed',
            4
        ],
        [
            'groupEnd',
            4
        ]
    ];
function Q(_0x1f4e0a, _0x43d0a4 = 7, _0x5d9344 = false, _0x486053 = '') {
    ;
    let _0x3bfd39;
    _0x5d9344 || (_0x43d0a4 = 1);
    Nr ? _0x486053 || (Zs ? _0x486053 = Cn.fg.yellow : rn && (_0x486053 = Cn.fg.cyan)) : _0x486053 = '';
    ;
    const _0x2ef279 = _0x486053;
    _0x486053 ? _0x486053 = '%s ' + _0x486053 + '%s' : _0x486053 = '%s';
    const _0x1e55c1 = function (..._0x25688f) {
        return _0x43d0a4 & 4 && void 0;
    };
    C1.forEach(([_0x1a4a6e, _0x148b23]) => {
        _0x1e55c1[_0x1a4a6e] = function (..._0x56a708) {
            return _0x43d0a4 & _0x148b23 && void 0;
        };
    });
    _0x1e55c1.setPrefix = function (_0x2e4cd4) {
        _0x3bfd39 = _0x2e4cd4;
        _0x1f4e0a = '[' + _0x2e4cd4 + ']';
        ;
    };
    _0x1e55c1.setPrefix(_0x1f4e0a);
    _0x1e55c1.setLevel = function (_0xc87ff2) {
        ;
        _0x43d0a4 = S1.slice(0, _0xc87ff2 + 1).reduce((_0x524f9c, _0x21db5e) => _0x524f9c | _0x21db5e, 0);
    };
    ;
    const _0x167394 = {};
    return _0x1e55c1.bindPrefix = function (_0x526d6b, _0x38ea42 = _0x43d0a4) {
        ;
        return _0x167394[_0x526d6b] ?? (_0x167394[_0x526d6b] = Q(_0x3bfd39 + '] ' + (Nr && _0x2ef279 ? Cn.reset : '') + '[' + _0x526d6b, _0x38ea42, _0x5d9344, _0x2ef279));
    }, _0x1e55c1;
}
const k1 = true;
class zs extends je {
    constructor(_0x3391f2) {
        ;
        super(false);
        this.logSuffix = _0x3391f2;
        this.onMessage = _0x110642 => {
            ;
            const _0x52eccf = _0x110642.data, _0xf8800c = _0x110642.source || _0x110642.currentTarget;
            this.processTaskMap[_0x52eccf.type](_0x52eccf, _0xf8800c, _0x110642);
        };
        this.processResultTask = _0x582c71 => {
            const {
                    taskId: _0xb7d4d,
                    result: _0x2b921d,
                    error: _0x58dce1
                } = _0x582c71.payload, _0x1b4911 = this.awaiting[_0xb7d4d];
            _0x1b4911 && (this.debug && this.log.debug('done', _0x1b4911.taskType, _0x2b921d, _0x58dce1), 'error' in _0x582c71.payload ? _0x1b4911.reject(_0x58dce1) : _0x1b4911.resolve(_0x2b921d), delete this.awaiting[_0xb7d4d]);
        };
        this.processAckTask = _0x5cc0c6 => {
            const _0x2a7433 = _0x5cc0c6.payload, _0x1b4c0e = this.awaiting[_0x2a7433.taskId];
            if (!_0x1b4c0e) {
                return;
            }
            const _0x39419a = _0x1b4c0e.resolve, _0x5ea521 = {
                    'cached': _0x2a7433.cached,
                    'result': _0x2a7433.cached ? 'result' in _0x2a7433 ? Promise.resolve(_0x2a7433.result) : Promise.reject(_0x2a7433.error) : new Promise((_0x468ccd, _0x1998a6) => {
                        ;
                        _0x1b4c0e.resolve = _0x468ccd;
                        _0x1b4c0e.reject = _0x1998a6;
                        ;
                    })
                };
            _0x39419a(_0x5ea521);
            _0x2a7433.cached && delete this.awaiting[_0x2a7433.taskId];
            ;
        };
        this.processPingTask = (_0x152792, _0x1e21bc, _0x4e8fff) => {
            ;
            this.pushTask(this.createTask('pong', void 0), _0x4e8fff.source);
        };
        this.processPongTask = (_0x540c5c, _0x1c356c, _0x581898) => {
            const _0x2fa4b0 = this.pingResolves.get(_0x1c356c);
            _0x2fa4b0 && (this.pingResolves.delete(_0x1c356c), _0x2fa4b0());
        };
        this.processCloseTask = (_0x447780, _0x11b6b0, _0x27927f) => {
            ;
            this.detachPort(_0x11b6b0);
        };
        this.processBatchTask = (_0x12bbf0, _0x4284cc, _0x1058df) => {
            const _0x3ae796 = {
                data: _0x1058df.data,
                source: _0x1058df.source,
                currentTarget: _0x1058df.currentTarget
            };
            ;
            ;
            ;
            ;
            const _0x18b339 = _0x3ae796;
            _0x12bbf0.payload.forEach(_0x53b0b4 => {
                ;
                _0x18b339.data = _0x53b0b4;
                this.onMessage(_0x18b339);
                ;
            });
        };
        this.processLockTask = (_0x2510d9, _0x2c2aa9, _0x2ce100) => {
            const _0x941b01 = _0x2510d9.payload;
            this.requestedLocks.has(_0x941b01) || (this.requestedLocks.set(_0x941b01, _0x2c2aa9), navigator.locks.request(_0x941b01, () => {
                ;
                this.processCloseTask(void 0, _0x2c2aa9, void 0);
                this.requestedLocks.delete(_0x941b01);
                ;
            }));
        };
        this.processInvokeTask = async (_0x5a3bd3, _0x332547, _0xde887e) => {
            const _0x56970f = _0x5a3bd3.id, _0x4cdd35 = _0x5a3bd3.payload;
            let _0x3a78a1, _0x59cd03, _0x1962d2;
            const _0x3fc398 = { taskId: _0x56970f };
            ;
            const _0x202d44 = {
                taskId: _0x56970f,
                cached: true
            };
            ;
            ;
            _0x4cdd35.void || (_0x3a78a1 = _0x3fc398, _0x59cd03 = this.createTask('result', _0x3a78a1));
            _0x4cdd35.withAck && (_0x1962d2 = this.createTask('ack', _0x202d44));
            ;
            ;
            let _0x2afbec;
            try {
                const _0x660fcc = this.listeners[_0x4cdd35.type];
                if (!_0x660fcc?.size) {
                    throw new Error('no listener');
                }
                const _0x4100c4 = _0x660fcc.values().next().value;
                let _0x58d73d = this.invokeListenerCallback(_0x4cdd35.type, _0x4100c4, _0x4cdd35.payload, _0x332547, _0xde887e);
                if (_0x4cdd35.void) {
                    return;
                }
                if (_0x2afbec = _0x58d73d instanceof Promise, _0x1962d2) {
                    const _0x36af73 = !_0x2afbec;
                    if (_0x1962d2.payload.cached = _0x36af73, _0x36af73 && (_0x1962d2.payload.result = _0x58d73d), this.pushTask(_0x1962d2, _0x332547), _0x36af73) {
                        return;
                    }
                }
                _0x2afbec && (_0x58d73d = await _0x58d73d);
                if (_0x58d73d instanceof zs.TransferableResult) {
                    _0x59cd03.transfer = _0x58d73d.transferables;
                    _0x58d73d = _0x58d73d.value;
                }
                _0x3a78a1.result = _0x58d73d;
                ;
            } catch (_0x253013) {
                if (this.log.error('worker task error:', _0x253013, _0x5a3bd3), _0x4cdd35.void) {
                    return;
                }
                if (_0x1962d2 && _0x1962d2.payload.cached) {
                    _0x1962d2.payload.error = _0x253013;
                    this.pushTask(_0x1962d2, _0x332547);
                    ;
                    return;
                }
                _0x3a78a1.error = _0x253013;
            }
            this.pushTask(_0x59cd03, _0x332547);
        };
        this.listenPorts = [];
        this.sendPorts = [];
        this.pingResolves = new Map();
        this.taskId = Math.random();
        this.awaiting = {};
        this.pending = new Map();
        this.log = Q('MP' + (_0x3391f2 ? '-' + _0x3391f2 : ''));
        this.debug = qa;
        this.heldLocks = new Map();
        this.requestedLocks = new Map();
        this.processTaskMap = {
            'result': this.processResultTask,
            'ack': this.processAckTask,
            'invoke': this.processInvokeTask,
            'ping': this.processPingTask,
            'pong': this.processPongTask,
            'close': this.processCloseTask,
            'lock': this.processLockTask,
            'batch': this.processBatchTask
        };
        ;
    }
    ['setOnPortDisconnect'](_0x130332) {
        ;
        this.onPortDisconnect = _0x130332;
    }
    ['attachPort'](_0x49f94c) {
        ;
        this.attachListenPort(_0x49f94c);
        this.attachSendPort(_0x49f94c);
        ;
    }
    ['attachListenPort'](_0x13005c) {
        ;
        this.listenPorts.push(_0x13005c);
        _0x13005c.addEventListener('message', this.onMessage);
        ;
    }
    ['attachSendPort'](_0x350ef2) {
        ;
        if (this.log.warn('attaching send port'), _0x350ef2.start?.(), this.sendPorts.push(_0x350ef2), typeof window < 'u' && k1) {
            if ('locks' in navigator) {
                const _0x2faa6e = [
                    'lock',
                    If,
                    this.logSuffix || '',
                    Math.random() * 2147483647 | 0
                ].join('-');
                this.log.warn('created lock', _0x2faa6e);
                const _0x40b335 = new Promise(_0x23cc5e => this.heldLocks.set(_0x350ef2, {
                    'resolve': _0x23cc5e,
                    'id': _0x2faa6e
                })).then(() => this.heldLocks.delete(_0x350ef2));
                navigator.locks.request(_0x2faa6e, () => (this.resendLockTask(_0x350ef2), _0x40b335));
            } else {
                window.addEventListener('beforeunload', () => {
                    const _0x28597d = this.createTask('close', void 0);
                    this.postMessage(void 0, _0x28597d);
                });
            }
        }
        this.releasePending();
    }
    ['resendLockTask'](_0x1f2818) {
        const _0x4964ab = this.heldLocks.get(_0x1f2818);
        _0x4964ab && this.pushTask(this.createTask('lock', _0x4964ab.id), _0x1f2818);
    }
    ['detachPort'](_0x20e97a) {
        ;
        this.log.warn('disconnecting port');
        xe(this.listenPorts, _0x20e97a);
        xe(this.sendPorts, _0x20e97a);
        _0x20e97a.removeEventListener?.('message', this.onMessage);
        _0x20e97a.close?.();
        this.onPortDisconnect?.(_0x20e97a);
        this.heldLocks.get(_0x20e97a)?.resolve();
        ;
        const _0x413ebc = Ee('PORT_DISCONNECTED');
        for (const _0x40c804 in this.awaiting) {
            const _0x5a2d2a = this.awaiting[_0x40c804];
            if (_0x5a2d2a.port === _0x20e97a) {
                _0x5a2d2a.reject(_0x413ebc);
                delete this.awaiting[_0x40c804];
            }
        }
    }
    ['postMessage'](_0x44161e, _0x39f40b) {
        ;
        (Array.isArray(_0x44161e) ? _0x44161e : _0x44161e ? [_0x44161e] : this.sendPorts).forEach(_0x478345 => {
            ;
            _0x478345.postMessage(_0x39f40b, _0x39f40b.transfer);
        });
    }
    async ['releasePending']() {
        ;
        this.releasingPending || (this.releasingPending = true, await Promise.resolve(), this.debug && this.log.debug('releasing tasks, length:', this.pending.size), this.pending.forEach((_0x116bee, _0x5e6ce5) => {
            ;
            let _0x5554ff = _0x116bee;
            {
                let _0x2fd18a;
                _0x5554ff = [];
                _0x116bee.forEach(_0x124d54 => {
                    ;
                    _0x124d54.transfer ? (_0x2fd18a = void 0, _0x5554ff.push(_0x124d54)) : (_0x2fd18a || (_0x2fd18a = this.createTask('batch', []), _0x5554ff.push(_0x2fd18a)), _0x2fd18a.payload.push(_0x124d54));
                });
                ;
            }
            const _0x5c1678 = _0x5e6ce5 ? [_0x5e6ce5] : this.sendPorts;
            _0x5c1678.length && (_0x5554ff.forEach(_0x11f43f => {
                ;
                try {
                    this.postMessage(_0x5c1678, _0x11f43f);
                } catch (_0x301104) {
                    this.log.error('postMessage error:', _0x301104, _0x11f43f, _0x5c1678);
                }
            }), this.pending.delete(_0x5e6ce5));
        }), this.debug && this.log.debug('released tasks'), this.releasingPending = false);
    }
    ['createTask'](_0x34b527, _0x4a23ff, _0x174ba1) {
        const _0x3fd9c3 = {};
        return _0x3fd9c3.type = _0x34b527, _0x3fd9c3.payload = _0x4a23ff, _0x3fd9c3.id = this.taskId++, _0x3fd9c3.transfer = _0x174ba1, _0x3fd9c3;
    }
    ['createInvokeTask'](_0x475575, _0x52c014, _0x2a73f8, _0x2c32cb, _0xf24a80) {
        const _0x7fcd9b = {};
        return _0x7fcd9b.type = _0x475575, _0x7fcd9b.payload = _0x52c014, _0x7fcd9b.withAck = _0x2a73f8, _0x7fcd9b.void = _0x2c32cb, this.createTask('invoke', _0x7fcd9b, _0xf24a80);
    }
    ['pushTask'](_0x3ee040, _0x394e8e) {
        ;
        let _0x192e62 = this.pending.get(_0x394e8e);
        _0x192e62 || this.pending.set(_0x394e8e, _0x192e62 = []);
        _0x192e62.push(_0x3ee040);
        this.releasePending();
        ;
    }
    ['invokeVoid'](_0x5b0ae4, _0x130d1, _0x42a294, _0x3421ac) {
        const _0x577b4c = this.createInvokeTask(_0x5b0ae4, _0x130d1, void 0, true, _0x3421ac);
        this.pushTask(_0x577b4c, _0x42a294);
    }
    ['invoke'](_0x387bc6, _0x5372d9, _0x2b5ecc, _0x9a6615, _0x104d92) {
        ;
        this.debug && this.log.debug('start', _0x387bc6, _0x5372d9);
        let _0x18fb8a;
        const _0x121f56 = new Promise((_0x4b1c3e, _0x2f50cb) => {
            ;
            _0x18fb8a = this.createInvokeTask(_0x387bc6, _0x5372d9, _0x2b5ecc, void 0, _0x104d92);
            this.awaiting[_0x18fb8a.id] = {
                'resolve': _0x4b1c3e,
                'reject': _0x2f50cb,
                'taskType': _0x387bc6,
                'port': _0x9a6615
            };
            this.pushTask(_0x18fb8a, _0x9a6615);
            ;
        });
        if (bt) {
            _0x121f56.finally(() => {
                clearInterval(_0x54ef5c);
            });
            const _0x54ef5c = Mi.setInterval(() => {
                ;
                this.log.error('task still has no result', _0x18fb8a, _0x9a6615);
            }, 60000);
        }
        return _0x121f56;
    }
    ['invokeExceptSource'](_0x486462, _0x4b15a0, _0x1b36f8) {
        const _0x749df5 = this.sendPorts.slice();
        xe(_0x749df5, _0x1b36f8);
        _0x749df5.forEach(_0x490587 => {
            ;
            this.invokeVoid(_0x486462, _0x4b15a0, _0x490587);
        });
        ;
    }
    async ['invokeExceptSourceAsync'](_0x8c5f2b, _0x30e523, _0x308fdd) {
        const _0x12037d = this.sendPorts.slice();
        xe(_0x12037d, _0x308fdd);
        await Promise.all(_0x12037d.map(_0x526033 => this.invoke(_0x8c5f2b, _0x30e523, void 0, _0x526033)));
        ;
    }
}
(_0x53115a => {
    ;
    class _0x562e6f {
        constructor(_0x394c42, _0x5587cd) {
            ;
            this.value = _0x394c42;
            this.transferables = _0x5587cd;
            ;
        }
    }
    _0x53115a.TransferableResult = _0x562e6f;
})(zs || (zs = {}));
const Ui = zs;
class ns extends Ui {
    constructor() {
        ;
        super('MTPROTO');
        ns.INSTANCE = this;
        N && (N.mtprotoMessagePort = this);
        ;
    }
    static ['getInstance']() {
        return this.INSTANCE;
    }
}
class F1 extends je {
    constructor() {
        ;
        super();
        this.myId = Bi;
        this.connectionStatus = {};
        this.premium = false;
        this.addEventListener('user_auth', ({id: _0x36919f}) => {
            ;
            this.myId = _0x36919f.toPeerId();
        });
        this.addEventListener('premium_toggle_private', ({
            isNew: _0x73b314,
            isPremium: _0x1314c0
        }) => {
            ;
            this.premium = _0x1314c0;
            _0x73b314 || this.dispatchEventSingle('premium_toggle', _0x1314c0);
            ;
        });
        this.addEventListener('connection_status_change', _0x4db937 => {
            ;
            this.connectionStatus[_0x4db937.name] = _0x4db937;
        });
        this.dispatchEvent = (_0xc5d413, ..._0x23d34e) => {
            ;
            super.dispatchEvent(_0xc5d413, ..._0x23d34e);
            ((async () => {
                const _0x22973c = this.managers ? await this.managers.apiManager.getAccountNumber() : void 0, _0x421db4 = {
                        name: _0xc5d413,
                        args: _0x23d34e,
                        accountNumber: _0x22973c
                    };
                ;
                ;
                ;
                ns.getInstance().invokeVoid('event', _0x421db4);
                ;
            })());
            ;
        };
        ;
    }
    ['getConnectionStatus']() {
        ;
        return this.connectionStatus;
    }
    ['getPremium']() {
        ;
        return this.premium;
    }
    ['getMyId']() {
        ;
        return this.myId;
    }
    ['dispatchEventSingle'](_0x33369f, ..._0x5eba4d) {
        ;
        super.dispatchEvent(_0x33369f, ..._0x5eba4d);
    }
}
const I = new F1();
N.rootScope = I;
function Rf(_0x3d3fac, _0x1237b5, _0x54317c) {
    const _0x47980f = _0x54317c && new Set(_0x54317c), _0x3e587e = _0x181098 => Object.keys(_0x181098).filter(_0xccc105 => _0x181098[_0xccc105] !== void 0), _0x15c79f = _0x54317c ? _0x468219 => _0x3e587e(_0x468219).filter(_0x2b2a75 => !_0x47980f.has(_0x2b2a75)) : _0x3e587e, _0xad6cac = typeof _0x3d3fac;
    return _0x3d3fac && _0x1237b5 && _0xad6cac === 'object' && _0xad6cac === typeof _0x1237b5 ? _0x15c79f(_0x3d3fac).length === _0x15c79f(_0x1237b5).length && _0x15c79f(_0x3d3fac).every(_0x140f40 => Rf(_0x3d3fac[_0x140f40], _0x1237b5[_0x140f40], _0x54317c)) : _0x3d3fac === _0x1237b5;
}
function Hn(_0x5d8b00, _0x6f2145) {
    if (_0x6f2145) {
        for (const _0x53c0bb in _0x6f2145)
            _0x6f2145[_0x53c0bb] !== void 0 && (_0x5d8b00[_0x53c0bb] = _0x6f2145[_0x53c0bb]);
    }
    return _0x5d8b00;
}
function an(_0x49ddb9) {
    ;
    return _0x49ddb9.charAt(0).toUpperCase() + _0x49ddb9.slice(1);
}
const P1 = new Set(['javascript:']);
function ji(_0x56e011) {
    ;
    if (!_0x56e011) {
        return null;
    }
    try {
        const _0x3ed665 = new URL(_0x56e011).protocol;
        return P1.has(_0x3ed665) ? null : _0x3ed665;
    } catch {
        return null;
    }
}
const a0_0x514174 = {};
a0_0x514174.Telegram = 'tg://search_hashtag?hashtag={1}';
a0_0x514174.Twitter = 'https://twitter.com/hashtag/{1}';
a0_0x514174.Instagram = 'https://instagram.com/explore/tags/{1}/';
a0_0x514174['Google Plus'] = 'https://plus.google.com/explore/{1}';
;
const a0_0x1a5a16 = {};
a0_0x1a5a16['`'] = 'messageEntityCode';
a0_0x1a5a16['``'] = 'messageEntityPre';
a0_0x1a5a16['**'] = 'messageEntityBold';
a0_0x1a5a16['__'] = 'messageEntityItalic';
a0_0x1a5a16['~~'] = 'messageEntityStrike';
a0_0x1a5a16['_-_'] = 'messageEntityUnderline';
a0_0x1a5a16['||'] = 'messageEntitySpoiler';
;
const Xa = '((?:\uD83D\uDC68\uD83C\uDFFB‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFC‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFD‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFE‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFF‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFB‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFB‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFC‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFC‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFD‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFD‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFE‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFE‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFF‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFF‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFB‍\u2764️?‍\uD83D\uDC8B‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFC‍\u2764️?‍\uD83D\uDC8B‍\uD83E\uDDD1\uFFFD[\uFFFD\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFD‍\u2764️?‍\uD83D\uDC8B‍\uD83E\uDDD1\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83E\uDDD1\uD83C\uDFFE‍\u2764️?‍\uD83D\uDC8B‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD\uFFFD]|\uD83E\uDDD1\uD83C\uDFFF‍\u2764️?‍\uD83D\uDC8B‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFB‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFC‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFD‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83D\uDC68\uD83C\uDFFE‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD\uFFFD]|\uD83D\uDC68\uD83C\uDFFF‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFB‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFB‍\u2764️?‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFC‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFC‍\u2764️?‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83D\uDC69\uFFFD[\uFFFD\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFD‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFD‍\u2764️?‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83D\uDC69\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83D\uDC69\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83D\uDC69\uD83C\uDFFE‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFE‍\u2764️?‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD\uFFFD]|\uD83D\uDC69\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD\uFFFD]|\uD83D\uDC69\uD83C\uDFFF‍\u2764️?‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFF‍\u2764️?‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83D\uDC68\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC69\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83D\uDC69\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFB‍\u2764️?‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFB‍\uD83E\uDD1D‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFC‍\u2764️?‍\uD83E\uDDD1\uFFFD[\uFFFD\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFC‍\uD83E\uDD1D‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFD‍\u2764️?‍\uD83E\uDDD1\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83E\uDDD1\uD83C\uDFFD‍\uD83E\uDD1D‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFE‍\u2764️?‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD\uFFFD]|\uD83E\uDDD1\uD83C\uDFFE‍\uD83E\uDD1D‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFF‍\u2764️?‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDDD1\uD83C\uDFFF‍\uD83E\uDD1D‍\uD83E\uDDD1\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68‍\u2764️?‍\uD83D\uDC8B‍\uD83D\uDC68|\uD83D\uDC69‍\u2764️?‍\uD83D\uDC8B‍\uFFFD[\uFFFD\uFFFD]|\uD83E\uDEF1\uD83C\uDFFB‍\uD83E\uDEF2\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDEF1\uD83C\uDFFC‍\uD83E\uDEF2\uFFFD[\uFFFD\uFFFD-\uFFFD]|\uD83E\uDEF1\uD83C\uDFFD‍\uD83E\uDEF2\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83E\uDEF1\uD83C\uDFFE‍\uD83E\uDEF2\uFFFD[\uFFFD-\uFFFD\uFFFD]|\uD83E\uDEF1\uD83C\uDFFF‍\uD83E\uDEF2\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC68‍\u2764️?‍\uD83D\uDC68|\uD83D\uDC69‍\u2764️?‍\uFFFD[\uFFFD\uFFFD]|\uD83E\uDDD1‍\uD83E\uDD1D‍\uD83E\uDDD1|\uD83D\uDC6B\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC6C\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC6D\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC8F\uFFFD[\uFFFD-\uFFFD]|\uD83D\uDC91\uFFFD[\uFFFD-\uFFFD]|\uD83E\uDD1D\uFFFD[\uFFFD-\uFFFD]|\uFFFD[\uFFFD-\uFFFD\uFFFD\uFFFD]|\uD83E\uDD1D)|(?:\uFFFD[\uFFFD\uFFFD]|\uD83E\uDDD1)(?:\uFFFD[\uFFFD-\uFFFD])?‍(?:\u2695️?|\u2696️?|\u2708️?|\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uFFFD[\uFFFD-\uFFFD\uFFFD\uFFFD])|(?:\uFFFD[\uFFFD\uFFFD]|\uFFFD[\uFFFD\uFFFD]|\u26F9)(?:(?:\uFFFD[\uFFFD-\uFFFD]|️?)‍[\u2640\u2642]️?)|(?:\uFFFD[\uFFFD\uFFFD\uFFFD]|\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD]|\uFFFD[\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD])(?:\uFFFD[\uFFFD-\uFFFD])?‍[\u2640\u2642]️?|(?:\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC66‍\uD83D\uDC66|\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC67‍\uFFFD[\uFFFD\uFFFD]|\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC66‍\uD83D\uDC66|\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67‍\uFFFD[\uFFFD\uFFFD]|\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC66‍\uD83D\uDC66|\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC67‍\uFFFD[\uFFFD\uFFFD]|\uD83D\uDC68‍\uD83D\uDC66‍\uD83D\uDC66|\uD83D\uDC68‍\uD83D\uDC67‍\uFFFD[\uFFFD\uFFFD]|\uD83D\uDC68‍\uD83D\uDC68‍\uFFFD[\uFFFD\uFFFD]|\uD83D\uDC68‍\uD83D\uDC69‍\uFFFD[\uFFFD\uFFFD]|\uD83D\uDC69‍\uD83D\uDC66‍\uD83D\uDC66|\uD83D\uDC69‍\uD83D\uDC67‍\uFFFD[\uFFFD\uFFFD]|\uD83D\uDC69‍\uD83D\uDC69‍\uFFFD[\uFFFD\uFFFD]|\uD83C\uDFF3️?‍\u26A7️?|\uD83C\uDFF3️?‍\uD83C\uDF08|\uD83D\uDE36‍\uD83C\uDF2B️?|\u2764️?‍\uD83D\uDD25|\u2764️?‍\uD83E\uDE79|\uD83C\uDFF4‍\u2620️?|\uD83D\uDC15‍\uD83E\uDDBA|\uD83D\uDC3B‍\u2744️?|\uD83D\uDC41‍\uD83D\uDDE8|\uD83D\uDC68‍\uFFFD[\uFFFD\uFFFD]|\uD83D\uDC69‍\uFFFD[\uFFFD\uFFFD]|\uD83D\uDC6F‍\u2640️?|\uD83D\uDC6F‍\u2642️?|\uD83D\uDE2E‍\uD83D\uDCA8|\uD83D\uDE35‍\uD83D\uDCAB|\uD83E\uDD3C‍\u2640️?|\uD83E\uDD3C‍\u2642️?|\uD83E\uDDDE‍\u2640️?|\uD83E\uDDDE‍\u2642️?|\uD83E\uDDDF‍\u2640️?|\uD83E\uDDDF‍\u2642️?|\uD83D\uDC08‍\u2B1B)|[#*0-9]️??\u20E3|(?:[\xA9\xAE\u2122\u265F]️?)|(?:\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD]|\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD]|[\u203C\u2049ℹ\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F8\u26FA\u26FD\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299])(?:️?|(?!︎))|(?:(?:\uFFFD[\uFFFD\uFFFD]|\uFFFD[\uFFFD\uFFFD\uFFFD]|[\u261D\u26F7\u26F9\u270C\u270D])(?:️?|(?!︎))|(?:\uFFFD[\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD]|\uFFFD[\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD]|\uFFFD[\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD]|[\u270A\u270B]))(?:\uFFFD[\uFFFD-\uFFFD])?|(?:\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F|\uD83C\uDDE6\uFFFD[\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDE7\uFFFD[\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDE8\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD]|\uD83C\uDDE9\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDEA\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD]|\uD83C\uDDEB\uFFFD[\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDEC\uFFFD[\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD]|\uD83C\uDDED\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDEE\uFFFD[\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD]|\uD83C\uDDEF\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDF0\uFFFD[\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDF1\uFFFD[\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD]|\uD83C\uDDF2\uFFFD[\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD]|\uD83C\uDDF3\uFFFD[\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF5\uFFFD[\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF7\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDF8\uFFFD[\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD]|\uD83C\uDDF9\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDFA\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDFB\uFFFD[\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD]|\uD83C\uDDFC\uFFFD[\uFFFD\uFFFD]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFE\uFFFD[\uFFFD\uFFFD]|\uD83C\uDDFF\uFFFD[\uFFFD\uFFFD\uFFFD]|\uFFFD[\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD]|\uFFFD[\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD]|\uFFFD[\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD\uFFFD-\uFFFD]|[\u23E9-\u23EC\u23F0\u23F3\u267E\u26CE\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\uE50A])|️)', Ms = 'a-z\\u00c0-\\u00d6\\u00d8-\\u00f6\\u00f8-\\u00ff\\u0100-\\u024f\\u0253\\u0254\\u0256\\u0257\\u0259\\u025b\\u0263\\u0268\\u026f\\u0272\\u0289\\u028b\\u02bb\\u0300-\\u036f\\u1e00-\\u1eff\\u0400-\\u04ff\\u0500-\\u0527\\u2de0-\\u2dff\\ua640-\\ua69f\\u0591-\\u05bf\\u05c1-\\u05c2\\u05c4-\\u05c5\\u05c7\\u05d0-\\u05ea\\u05f0-\\u05f4\\ufb1d-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40-\\ufb41\\ufb43-\\ufb44\\ufb46-\\ufb4f\\u0610-\\u061a\\u0620-\\u065f\\u066e-\\u06d3\\u06d5-\\u06dc\\u06de-\\u06e8\\u06ea-\\u06ef\\u06fa-\\u06fc\\u06ff\\u0750-\\u077f\\u08a0\\u08a2-\\u08ac\\u08e4-\\u08fe\\ufb50-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\u200c\\u0e01-\\u0e3a\\u0e40-\\u0e4e\\u1100-\\u11ff\\u3130-\\u3185\\uA960-\\uA97F\\uAC00-\\uD7AF\\uD7B0-\\uD7FF\\u3003\\u3005\\u303b\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uff9f\\uffa1-\\uffdc', _1 = '0-9_' + Ms, Br = '\xB7', lf = '[' + Ms + '0-9]', T1 = '((?:https?|ftp)://|mailto:)?', Qa = T1 + '(?:' + lf + '{1,64}(?::' + lf + '{0,64})?@)?(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}|' + lf + '[' + Ms + Br + '0-9-]{0,64}(?:\\.' + lf + '[' + Ms + Br + '0-9-]{0,64}){0,10}(?:\\.(xn--[0-9a-z]{2,16}|[' + Ms + ']{2,24})))(?::\\d{2,5})?(?:/(?:\\S{0,255}[^\\s.;,(\\[\\]{}<>"\'])?)?', Za = '[a-zA-Z\\d_]{5,32}', L1 = '(?:\\s|^)((?:(\\d{1,2}):(?:[0-5]?[0-9])|(?:\\d{1,2}|\\d{3,})):(?:[0-5][0-9]))(?:\\s|$)', x1 = '\\/([a-zA-Z\\d_]{1,32})(?:@(' + Za + '))?(\\b|$)', Ur = new RegExp('(^| )(@)(' + Za + ')|(' + Qa + ')|(\\n)|(' + Xa + ')|(^|[\\s\\(\\]])(#[' + _1 + ']{2,64})|(^|\\s)' + x1 + '|' + L1, 'i'), M1 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Tm = /(^|\s|\n)(````?)([\s\S]+?)(````?)([\s\n\.,:?!;]|$)|(^|\s|\x01)(`|~~|\*\*|__|_-_|\|\|)([^\n]+?)\7([\x01\s\.,:?!;]|$)|@(\d+)\s*\((.+?)\)|(\[(.+?)\]\((.+?)\))/m, I1 = a0_0x514174, Wn = a0_0x1a5a16;
new Set(Object.values(Wn));
const Of = new Set([
        'messageEntityEmoji',
        'messageEntityLinebreak',
        'messageEntityCaret'
    ]), R1 = new Set(Of);
for (const s in Wn)
    Of.add(Wn[s]);
const O1 = /^\+\d+$/;
function on(_0x2a5c5b, _0x24820e) {
    ;
    ji(_0x2a5c5b) || (_0x2a5c5b = 'https://' + _0x2a5c5b);
    const _0x313fbc = { url: _0x2a5c5b };
    ;
    const _0x11ac54 = _0x313fbc;
    let _0x2ab6e8, _0x51e12e, _0x12e3d1;
    if (_0x2ab6e8 = _0x2a5c5b.match(/^(?:https?:\/\/)?(?:(.+?)\.)?(?:(?:web|k|z|a)\.)?t(?:elegram)?\.me(?:\/(.+))?/)) {
        const _0x2f08ad = new URL(_0x2a5c5b);
        let _0x4314e5 = _0x2ab6e8[1];
        _0x4314e5 && p1.has(_0x2ab6e8[1]) && (_0x4314e5 = void 0);
        _0x4314e5 && (_0x2f08ad.pathname = _0x4314e5 + (_0x2f08ad.pathname === '/' ? '' : _0x2f08ad.pathname));
        ;
        const _0x13c072 = _0x2f08ad.pathname.slice(1), _0x1bceb8 = _0x13c072.split('/');
        if (_0x1bceb8[0] && _0x1bceb8[0][0] === '$' && _0x1bceb8[0].length > 1) {
            _0x12e3d1 = 'invoice';
        } else {
            if (/^\+/.test(_0x13c072) && !O1.test(_0x13c072)) {
                _0x12e3d1 = 'joinchat';
            } else {
                if (_0x1bceb8[0]) {
                    switch (_0x1bceb8[0]) {
                    case 'm':
                    case 'addlist':
                    case 'joinchat':
                    case 'addstickers':
                    case 'addemoji':
                    case 'voicechat':
                    case 'invoice':
                    case 'boost':
                    case 'giftcode':
                    case 'share':
                    case 'nft':
                        if (_0x1bceb8.length !== 1 && !_0x4314e5) {
                            _0x12e3d1 = _0x1bceb8[0];
                            break;
                        }
                    default:
                        if (_0x1bceb8.length <= 2 || _0x1bceb8[1]?.match(/^\d+(?:\?(?:comment|thread)=\d+)?$/) || _0x1bceb8[1] === 's') {
                            _0x12e3d1 = 'im';
                            break;
                        }
                        break;
                    }
                }
            }
        }
    } else {
        _0x2a5c5b.match(/^(?:https?:\/\/)?telesco\.pe\/([^/?]+)\/(\d+)/) ? _0x12e3d1 = 'im' : (_0x51e12e = _0x2a5c5b.match(/tg:(?:\/\/)?(.+?)(?:\?|$)/)) && (_0x12e3d1 = 'tg_' + _0x51e12e[1]);
    }
    return window[_0x12e3d1] || (_0x12e3d1 = void 0), _0x11ac54.onclick = _0x12e3d1, _0x11ac54;
}
N && (N.wrapUrl = on);
function N1(_0x3f40ac, _0x33c044) {
    ;
    tf(_0x3f40ac);
    _0x33c044 === void 0 ? _0x3f40ac.replaceChildren() : typeof _0x33c044 == 'string' ? _0x33c044 ? _0x3f40ac.textContent = _0x33c044 : _0x3f40ac.replaceChildren() : _0x3f40ac.replaceChildren(_0x33c044);
    ;
}
function tf(_0x4ade76) {
    ;
    _0x4ade76.setAttribute('dir', 'auto');
}
;
function Sf(_0x2c35d4) {
    ;
    return _0x2c35d4.target = '_blank', _0x2c35d4.rel = 'noopener noreferrer', _0x2c35d4;
}
const a0_0x41f994 = {};
a0_0x41f994.context = void 0;
a0_0x41f994.registry = void 0;
;
const B1 = a0_0x41f994, eo = (_0x1a91f0, _0x33074f) => _0x1a91f0 === _0x33074f, ie = Symbol('solid-proxy'), Gs = Symbol('solid-track'), Nf = { 'equals': eo };
let to = ao;
const a0_0x5eeb95 = {};
a0_0x5eeb95.owned = null;
a0_0x5eeb95.cleanups = null;
a0_0x5eeb95.context = null;
a0_0x5eeb95.owner = null;
;
const Ne = 1, Bf = 2, so = a0_0x5eeb95, kn = {};
var W = null;
let Fn = null, U1 = null, z = null, ae = null, $e = null, cn = 0;
function vt(_0x1b3e6b, _0x18bd4a) {
    const _0x3d3c22 = z, _0x1b7322 = W, _0x285330 = _0x1b3e6b.length === 0, _0x2414a8 = _0x18bd4a === void 0 ? _0x1b7322 : _0x18bd4a, _0x249435 = _0x285330 ? so : {
            'owned': null,
            'cleanups': null,
            'context': _0x2414a8 ? _0x2414a8.context : null,
            'owner': _0x2414a8
        }, _0x3f5620 = _0x285330 ? _0x1b3e6b : () => _0x1b3e6b(() => he(() => dn(_0x249435)));
    W = _0x249435;
    z = null;
    ;
    try {
        return Xe(_0x3f5620, true);
    } finally {
        z = _0x3d3c22;
        W = _0x1b7322;
        ;
    }
}
function ke(_0x147b1b, _0x5bb040) {
    ;
    _0x5bb040 = _0x5bb040 ? Object.assign({}, Nf, _0x5bb040) : Nf;
    const _0x41e474 = {
        value: _0x147b1b,
        observers: null,
        observerSlots: null,
        comparator: _0x5bb040.equals || void 0
    };
    ;
    ;
    ;
    ;
    ;
    const _0x50efa7 = _0x41e474, _0x401c43 = _0x4cc768 => (typeof _0x4cc768 == 'function' && (_0x4cc768 = _0x4cc768(_0x50efa7.value)), ro(_0x50efa7, _0x4cc768));
    return [
        io.bind(_0x50efa7),
        _0x401c43
    ];
}
function jr(_0x278f65, _0x33c122, _0x563259) {
    const _0x34e961 = ys(_0x278f65, _0x33c122, true, Ne);
    Ct(_0x34e961);
}
function Tt(_0x288c6a, _0x216958, _0xf69689) {
    const _0x3af444 = ys(_0x288c6a, _0x216958, false, Ne);
    Ct(_0x3af444);
}
function rt(_0x4534c5, _0x3edc57, _0x54723d) {
    ;
    to = $1;
    const _0x1fab35 = ys(_0x4534c5, _0x3edc57, false, Ne);
    (!_0x54723d || !_0x54723d.render) && (_0x1fab35.user = true);
    $e ? $e.push(_0x1fab35) : Ct(_0x1fab35);
    ;
}
function xm(_0x24dab6, _0x433468) {
    let _0x392b58;
    const _0x24f527 = ys(() => {
        _0x392b58 ? _0x392b58() : he(_0x24dab6);
        _0x392b58 = void 0;
        ;
    }, void 0, false, 0);
    return _0x24f527.user = true, _0x13f5b6 => {
        _0x392b58 = _0x13f5b6;
        Ct(_0x24f527);
        ;
    };
}
function Be(_0x3b138b, _0x33c33a, _0x229ae2) {
    ;
    _0x229ae2 = _0x229ae2 ? Object.assign({}, Nf, _0x229ae2) : Nf;
    const _0x239962 = ys(_0x3b138b, _0x33c33a, true, 0);
    return _0x239962.observers = null, _0x239962.observerSlots = null, _0x239962.comparator = _0x229ae2.equals || void 0, Ct(_0x239962), io.bind(_0x239962);
}
function j1(_0x431504) {
    ;
    return _0x431504 && typeof _0x431504 == 'object' && 'then' in _0x431504;
}
function Mm(_0x40bda5, _0x4b334f, _0x18510a) {
    ;
    let _0x361e3b, _0x3b0b6f, _0x5a6aed;
    arguments.length === 2 && typeof _0x4b334f == 'object' || arguments.length === 1 ? (_0x361e3b = true, _0x3b0b6f = _0x40bda5, _0x5a6aed = _0x4b334f || {}) : (_0x361e3b = _0x40bda5, _0x3b0b6f = _0x4b334f, _0x5a6aed = {});
    let _0x739f8c = null, _0x557842 = kn, _0x19848a = false, _0x46cb7e = 'initialValue' in _0x5a6aed, _0x613abe = typeof _0x361e3b == 'function' && Be(_0x361e3b);
    const _0x5333eb = { equals: false };
    ;
    const _0x197e0a = new Set(), [_0x4adb15, _0x53ea55] = (_0x5a6aed.storage || ke)(_0x5a6aed.initialValue), [_0x214d00, _0x429b4f] = ke(void 0), [_0x332bf2, _0x4a10e9] = ke(void 0, _0x5333eb), [_0x1b7ab4, _0x3fceaa] = ke(_0x46cb7e ? 'ready' : 'unresolved');
    function _0xd55d01(_0x3234aa, _0x3b0b40, _0x20d564, _0x31feb1) {
        ;
        return _0x739f8c === _0x3234aa && (_0x739f8c = null, _0x31feb1 !== void 0 && (_0x46cb7e = true), (_0x3234aa === _0x557842 || _0x3b0b40 === _0x557842) && _0x5a6aed.onHydrated && queueMicrotask(() => _0x5a6aed.onHydrated(_0x31feb1, { 'value': _0x3b0b40 })), _0x557842 = kn, _0x8fd065(_0x3b0b40, _0x20d564)), _0x3b0b40;
    }
    function _0x8fd065(_0xbef632, _0x28278d) {
        ;
        Xe(() => {
            ;
            _0x28278d === void 0 && _0x53ea55(() => _0xbef632);
            _0x3fceaa(_0x28278d !== void 0 ? 'errored' : _0x46cb7e ? 'ready' : 'unresolved');
            _0x429b4f(_0x28278d);
            ;
            for (const _0x79a04c of _0x197e0a.keys())
                _0x79a04c.decrement();
            _0x197e0a.clear();
        }, false);
    }
    function _0x3d2bce() {
        const _0xe431ba = z1, _0x3001f0 = _0x4adb15(), _0x31355c = _0x214d00();
        if (_0x31355c !== void 0 && !_0x739f8c) {
            throw _0x31355c;
        }
        return z && !z.user && _0xe431ba && jr(() => {
            ;
            _0x332bf2();
            _0x739f8c && (_0xe431ba.resolved || _0x197e0a.has(_0xe431ba) || (_0xe431ba.increment(), _0x197e0a.add(_0xe431ba)));
            ;
        }), _0x3001f0;
    }
    function _0x50a6c4(_0x3777ac = true) {
        ;
        if (_0x3777ac !== false && _0x19848a) {
            return;
        }
        _0x19848a = false;
        const _0x3309ca = _0x613abe ? _0x613abe() : _0x361e3b;
        if (_0x3309ca == null || _0x3309ca === false) {
            _0xd55d01(_0x739f8c, he(_0x4adb15));
            return;
        }
        const _0x2a155b = _0x557842 !== kn ? _0x557842 : he(() => _0x3b0b6f(_0x3309ca, {
            'value': _0x4adb15(),
            'refetching': _0x3777ac
        }));
        return j1(_0x2a155b) ? (_0x739f8c = _0x2a155b, 'value' in _0x2a155b ? (_0x2a155b.status === 'success' ? _0xd55d01(_0x739f8c, _0x2a155b.value, void 0, _0x3309ca) : _0xd55d01(_0x739f8c, void 0, void 0, _0x3309ca), _0x2a155b) : (_0x19848a = true, queueMicrotask(() => _0x19848a = false), Xe(() => {
            ;
            _0x3fceaa(_0x46cb7e ? 'refreshing' : 'pending');
            _0x4a10e9();
            ;
        }, false), _0x2a155b.then(_0x2865c5 => _0xd55d01(_0x2a155b, _0x2865c5, void 0, _0x3309ca), _0x2308c0 => _0xd55d01(_0x2a155b, void 0, co(_0x2308c0), _0x3309ca)))) : (_0xd55d01(_0x739f8c, _0x2a155b, void 0, _0x3309ca), _0x2a155b);
    }
    return Object.defineProperties(_0x3d2bce, {
        'state': { 'get': () => _0x1b7ab4() },
        'error': { 'get': () => _0x214d00() },
        'loading': {
            'get'() {
                const _0x581647 = _0x1b7ab4();
                return _0x581647 === 'pending' || _0x581647 === 'refreshing';
            }
        },
        'latest': {
            'get'() {
                if (!_0x46cb7e) {
                    return _0x3d2bce();
                }
                const _0x234364 = _0x214d00();
                if (_0x234364 && !_0x739f8c) {
                    throw _0x234364;
                }
                return _0x4adb15();
            }
        }
    }), _0x613abe ? jr(() => _0x50a6c4(false)) : _0x50a6c4(false), [
        _0x3d2bce,
        {
            'refetch': _0x50a6c4,
            'mutate': _0x53ea55
        }
    ];
}
function Im(_0x4fe393, _0x225169 = eo, _0x3f2bfb) {
    const _0x48b643 = new Map(), _0x460a54 = ys(_0x1bab6b => {
            const _0x3260f3 = _0x4fe393();
            for (const [_0x1321fd, _0x5cacbd] of _0x48b643.entries())
                if (_0x225169(_0x1321fd, _0x3260f3) !== _0x225169(_0x1321fd, _0x1bab6b)) {
                    for (const _0x5f2093 of _0x5cacbd.values())
                        _0x5f2093.state = Ne, _0x5f2093.pure ? ae.push(_0x5f2093) : $e.push(_0x5f2093);
                }
            return _0x3260f3;
        }, void 0, true, Ne);
    return Ct(_0x460a54), _0x4b375d => {
        const _0x5cfb76 = z;
        if (_0x5cfb76) {
            let _0x3f9dfe;
            (_0x3f9dfe = _0x48b643.get(_0x4b375d)) ? _0x3f9dfe.add(_0x5cfb76) : _0x48b643.set(_0x4b375d, _0x3f9dfe = new Set([_0x5cfb76]));
            is(() => {
                ;
                _0x3f9dfe.delete(_0x5cfb76);
                !_0x3f9dfe.size && _0x48b643.delete(_0x4b375d);
                ;
            });
            ;
        }
        return _0x225169(_0x4b375d, _0x460a54.value);
    };
}
function Zt(_0x4b314d) {
    return Xe(_0x4b314d, false);
}
function he(_0x23d5c5) {
    if (z === null) {
        return _0x23d5c5();
    }
    const _0x5b27da = z;
    z = null;
    try {
        return _0x23d5c5();
    } finally {
        z = _0x5b27da;
    }
}
function Is(_0x3705ea, _0x56580b, _0x29127d) {
    const _0x3e49b7 = Array.isArray(_0x3705ea);
    let _0x27ffe7, _0x2b3ee3 = _0x29127d && _0x29127d.defer;
    return _0x1ae98e => {
        ;
        let _0x373e24;
        if (_0x3e49b7) {
            _0x373e24 = Array(_0x3705ea.length);
            for (let _0xca604b = 0; _0xca604b < _0x3705ea.length; _0xca604b++) {
                _0x373e24[_0xca604b] = _0x3705ea[_0xca604b]();
            }
        } else {
            _0x373e24 = _0x3705ea();
        }
        if (_0x2b3ee3) {
            return _0x2b3ee3 = false, _0x1ae98e;
        }
        const _0x49101f = he(() => _0x56580b(_0x373e24, _0x27ffe7, _0x1ae98e));
        return _0x27ffe7 = _0x373e24, _0x49101f;
    };
}
function Rm(_0x253e85) {
    rt(() => he(_0x253e85));
}
function is(_0x13a07c) {
    ;
    return W === null || (W.cleanups === null ? W.cleanups = [_0x13a07c] : W.cleanups.push(_0x13a07c)), _0x13a07c;
}
function qs() {
    return z;
}
function fo() {
    return W;
}
function no(_0x3baa92, _0x52f4f1) {
    const _0x23991a = W, _0x514ed7 = z;
    W = _0x3baa92;
    z = null;
    ;
    try {
        return Xe(_0x52f4f1, true);
    } catch (_0x41e37e) {
        Wi(_0x41e37e);
    } finally {
        W = _0x23991a;
        z = _0x514ed7;
        ;
    }
}
function H1(_0x403ddd) {
    const _0x4f7644 = z, _0x3b6407 = W;
    return Promise.resolve().then(() => {
        ;
        z = _0x4f7644;
        W = _0x3b6407;
        ;
        let _0x7d8e2f;
        return Xe(_0x403ddd, false), z = W = null, _0x7d8e2f ? _0x7d8e2f.done : void 0;
    });
}
const [W1, Om] = ke(false);
function Nm() {
    return [
        W1,
        H1
    ];
}
function Hi(_0x56f3ac, _0xbb18ce) {
    const _0x3e5e98 = Symbol('context');
    return {
        'id': _0x3e5e98,
        'Provider': Y1(_0x3e5e98),
        'defaultValue': _0x56f3ac
    };
}
function Uf(_0x320666) {
    ;
    return W && W.context && W.context[_0x320666.id] !== void 0 ? W.context[_0x320666.id] : _0x320666.defaultValue;
}
function V1(_0xfb9874) {
    const _0x3d348f = Be(_0xfb9874), _0x1f2011 = Be(() => Vn(_0x3d348f()));
    return _0x1f2011.toArray = () => {
        ;
        const _0x57a61a = _0x1f2011();
        return Array.isArray(_0x57a61a) ? _0x57a61a : _0x57a61a != null ? [_0x57a61a] : [];
    }, _0x1f2011;
}
let z1;
function io() {
    ;
    if (this.sources && this.state) {
        if (this.state === Ne) {
            Ct(this);
        } else {
            const _0x89e60e = ae;
            ae = null;
            Xe(() => Hf(this), false);
            ae = _0x89e60e;
            ;
        }
    }
    if (z) {
        const _0x537b0a = this.observers ? this.observers.length : 0;
        z.sources ? (z.sources.push(this), z.sourceSlots.push(_0x537b0a)) : (z.sources = [this], z.sourceSlots = [_0x537b0a]);
        this.observers ? (this.observers.push(z), this.observerSlots.push(z.sources.length - 1)) : (this.observers = [z], this.observerSlots = [z.sources.length - 1]);
        ;
    }
    return this.value;
}
function ro(_0x309d58, _0x27abc1, _0x3846ce) {
    ;
    let _0x184f8e = _0x309d58.value;
    return (!_0x309d58.comparator || !_0x309d58.comparator(_0x184f8e, _0x27abc1)) && (_0x309d58.value = _0x27abc1, _0x309d58.observers && _0x309d58.observers.length && Xe(() => {
        ;
        for (let _0x23742c = 0; _0x23742c < _0x309d58.observers.length; _0x23742c += 1) {
            const _0x2ff23a = _0x309d58.observers[_0x23742c], _0x19a82a = Fn && Fn.running;
            _0x19a82a && Fn.disposed.has(_0x2ff23a);
            (_0x19a82a ? !_0x2ff23a.tState : !_0x2ff23a.state) && (_0x2ff23a.pure ? ae.push(_0x2ff23a) : $e.push(_0x2ff23a), _0x2ff23a.observers && oo(_0x2ff23a));
            _0x19a82a || (_0x2ff23a.state = Ne);
            ;
        }
        if (ae.length > 1000000) {
            throw ae = [], new Error();
        }
    }, false)), _0x27abc1;
}
function Ct(_0x2fd624) {
    ;
    if (!_0x2fd624.fn) {
        return;
    }
    dn(_0x2fd624);
    const _0x538dad = cn;
    G1(_0x2fd624, _0x2fd624.value, _0x538dad);
}
function G1(_0x1822df, _0x299d10, _0x26e665) {
    ;
    let _0x1d1f1e;
    const _0x3f7c9a = W, _0x201b49 = z;
    z = W = _0x1822df;
    try {
        _0x1d1f1e = _0x1822df.fn(_0x299d10);
    } catch (_0x456f7c) {
        return _0x1822df.pure && (_0x1822df.state = Ne, _0x1822df.owned && _0x1822df.owned.forEach(dn), _0x1822df.owned = null), _0x1822df.updatedAt = _0x26e665 + 1, Wi(_0x456f7c);
    } finally {
        z = _0x201b49;
        W = _0x3f7c9a;
        ;
    }
    (!_0x1822df.updatedAt || _0x1822df.updatedAt <= _0x26e665) && (_0x1822df.updatedAt != null && 'observers' in _0x1822df ? ro(_0x1822df, _0x1d1f1e) : _0x1822df.value = _0x1d1f1e, _0x1822df.updatedAt = _0x26e665);
}
function ys(_0x94f9c1, _0x124382, _0x599027, _0x554009 = Ne, _0xca79b8) {
    const _0x172ab6 = {
        fn: _0x94f9c1,
        state: _0x554009,
        updatedAt: null,
        owned: null,
        sources: null,
        sourceSlots: null,
        cleanups: null,
        value: _0x124382,
        owner: W,
        context: W ? W.context : null,
        pure: _0x599027
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    const _0x562522 = _0x172ab6;
    return W === null || W !== so && (W.owned ? W.owned.push(_0x562522) : W.owned = [_0x562522]), _0x562522;
}
function jf(_0x5c06a6) {
    ;
    if (_0x5c06a6.state === 0) {
        return;
    }
    if (_0x5c06a6.state === Bf) {
        return Hf(_0x5c06a6);
    }
    if (_0x5c06a6.suspense && he(_0x5c06a6.suspense.inFallback)) {
        return _0x5c06a6.suspense.effects.push(_0x5c06a6);
    }
    const _0x54137a = [_0x5c06a6];
    for (; (_0x5c06a6 = _0x5c06a6.owner) && (!_0x5c06a6.updatedAt || _0x5c06a6.updatedAt < cn);) {
        _0x5c06a6.state && _0x54137a.push(_0x5c06a6);
    }
    for (let _0x500fbb = _0x54137a.length - 1; _0x500fbb >= 0; _0x500fbb--) {
        if (_0x5c06a6 = _0x54137a[_0x500fbb], _0x5c06a6.state === Ne) {
            Ct(_0x5c06a6);
        } else {
            if (_0x5c06a6.state === Bf) {
                const _0x3fa05c = ae;
                ae = null;
                Xe(() => Hf(_0x5c06a6, _0x54137a[0]), false);
                ae = _0x3fa05c;
                ;
            }
        }
    }
}
function Xe(_0x4d395f, _0x39fb91) {
    if (ae) {
        return _0x4d395f();
    }
    let _0x4dcc14 = false;
    _0x39fb91 || (ae = []);
    $e ? _0x4dcc14 = true : $e = [];
    cn++;
    ;
    try {
        const _0x4e9e1f = _0x4d395f();
        return q1(_0x4dcc14), _0x4e9e1f;
    } catch (_0x531f5b) {
        _0x4dcc14 || ($e = null);
        ae = null;
        Wi(_0x531f5b);
        ;
    }
}
function q1(_0x3f7d84) {
    ;
    if (ae && (ao(ae), ae = null), _0x3f7d84) {
        return;
    }
    const _0x1f94bf = $e;
    $e = null;
    _0x1f94bf.length && Xe(() => to(_0x1f94bf), false);
    ;
}
function ao(_0x1dbaee) {
    ;
    for (let _0x3e86a1 = 0; _0x3e86a1 < _0x1dbaee.length; _0x3e86a1++) {
        jf(_0x1dbaee[_0x3e86a1]);
    }
}
function $1(_0x37d451) {
    ;
    let _0x252187, _0x35c2ac = 0;
    for (_0x252187 = 0; _0x252187 < _0x37d451.length; _0x252187++) {
        const _0x4ccd30 = _0x37d451[_0x252187];
        _0x4ccd30.user ? _0x37d451[_0x35c2ac++] = _0x4ccd30 : jf(_0x4ccd30);
    }
    for (_0x252187 = 0; _0x252187 < _0x35c2ac; _0x252187++) {
        jf(_0x37d451[_0x252187]);
    }
}
function Hf(_0x38766e, _0x26d2cb) {
    ;
    _0x38766e.state = 0;
    for (let _0x2bba2a = 0; _0x2bba2a < _0x38766e.sources.length; _0x2bba2a += 1) {
        const _0x14df61 = _0x38766e.sources[_0x2bba2a];
        if (_0x14df61.sources) {
            const _0x5542bc = _0x14df61.state;
            _0x5542bc === Ne ? _0x14df61 !== _0x26d2cb && (!_0x14df61.updatedAt || _0x14df61.updatedAt < cn) && jf(_0x14df61) : _0x5542bc === Bf && Hf(_0x14df61, _0x26d2cb);
        }
    }
}
function oo(_0x2b1e35) {
    ;
    for (let _0x3aede5 = 0; _0x3aede5 < _0x2b1e35.observers.length; _0x3aede5 += 1) {
        const _0x5992a9 = _0x2b1e35.observers[_0x3aede5];
        _0x5992a9.state || (_0x5992a9.state = Bf, _0x5992a9.pure ? ae.push(_0x5992a9) : $e.push(_0x5992a9), _0x5992a9.observers && oo(_0x5992a9));
    }
}
function dn(_0x9ed46b) {
    ;
    let _0x540aa5;
    if (_0x9ed46b.sources) {
        for (; _0x9ed46b.sources.length;) {
            const _0x4987aa = _0x9ed46b.sources.pop(), _0x51e704 = _0x9ed46b.sourceSlots.pop(), _0x1534a6 = _0x4987aa.observers;
            if (_0x1534a6 && _0x1534a6.length) {
                const _0x2ba39b = _0x1534a6.pop(), _0x174ef1 = _0x4987aa.observerSlots.pop();
                if (_0x51e704 < _0x1534a6.length) {
                    _0x2ba39b.sourceSlots[_0x174ef1] = _0x51e704;
                    _0x1534a6[_0x51e704] = _0x2ba39b;
                    _0x4987aa.observerSlots[_0x51e704] = _0x174ef1;
                }
            }
        }
    }
    if (_0x9ed46b.owned) {
        for (_0x540aa5 = _0x9ed46b.owned.length - 1; _0x540aa5 >= 0; _0x540aa5--) {
            dn(_0x9ed46b.owned[_0x540aa5]);
        }
        _0x9ed46b.owned = null;
    }
    if (_0x9ed46b.cleanups) {
        for (_0x540aa5 = _0x9ed46b.cleanups.length - 1; _0x540aa5 >= 0; _0x540aa5--) {
            _0x9ed46b.cleanups[_0x540aa5]();
        }
        _0x9ed46b.cleanups = null;
    }
    _0x9ed46b.state = 0;
}
function co(_0x428948) {
    ;
    return _0x428948 instanceof Error ? _0x428948 : new Error(typeof _0x428948 == 'string' ? _0x428948 : 'Unknown error', { 'cause': _0x428948 });
}
function Wi(_0xc3937, _0x255f5a = W) {
    const _0x12c4c8 = co(_0xc3937);
}
function Vn(_0x1daeaa) {
    ;
    if (typeof _0x1daeaa == 'function' && !_0x1daeaa.length) {
        return Vn(_0x1daeaa());
    }
    if (Array.isArray(_0x1daeaa)) {
        const _0x5601c8 = [];
        for (let _0x37fed1 = 0; _0x37fed1 < _0x1daeaa.length; _0x37fed1++) {
            const _0x313f05 = Vn(_0x1daeaa[_0x37fed1]);
            Array.isArray(_0x313f05) ? _0x5601c8.push.apply(_0x5601c8, _0x313f05) : _0x5601c8.push(_0x313f05);
        }
        return _0x5601c8;
    }
    return _0x1daeaa;
}
function Y1(_0x5b37e2, _0x252e3d) {
    return function (_0x339184) {
        ;
        let _0x523492;
        return Tt(() => _0x523492 = he(() => (W.context = {
            ...W.context,
            [_0x5b37e2]: _0x339184.value
        }, V1(() => _0x339184.children))), void 0), _0x523492;
    };
}
const K1 = Symbol('fallback');
function Hr(_0x2c4d55) {
    ;
    for (let _0x191772 = 0; _0x191772 < _0x2c4d55.length; _0x191772++) {
        _0x2c4d55[_0x191772]();
    }
}
function J1(_0x417755, _0x53be83, _0x2735d1 = {}) {
    ;
    let _0x53cd03 = [], _0x40a6d5 = [], _0x5906b9 = [], _0x9009ef = 0, _0x35192e = _0x53be83.length > 1 ? [] : null;
    return is(() => Hr(_0x5906b9)), () => {
        let _0x432500 = _0x417755() || [], _0xb997f3, _0x4e32c0;
        return _0x432500[Gs], he(() => {
            ;
            let _0x621ee = _0x432500.length, _0x42c330, _0x4edaea, _0x29bc35, _0x16a058, _0x3c73a7, _0x145eb5, _0x1f5db2, _0x1a1555, _0x3e8878;
            if (_0x621ee === 0) {
                if (_0x9009ef !== 0) {
                    Hr(_0x5906b9);
                    _0x5906b9 = [];
                    _0x53cd03 = [];
                    _0x40a6d5 = [];
                    _0x9009ef = 0;
                    _0x35192e && (_0x35192e = []);
                }
                _0x2735d1.fallback && (_0x53cd03 = [K1], _0x40a6d5[0] = vt(_0x36160b => (_0x5906b9[0] = _0x36160b, _0x2735d1.fallback())), _0x9009ef = 1);
                ;
            } else {
                if (_0x9009ef === 0) {
                    for (_0x40a6d5 = new Array(_0x621ee), _0x4e32c0 = 0; _0x4e32c0 < _0x621ee; _0x4e32c0++) {
                        _0x53cd03[_0x4e32c0] = _0x432500[_0x4e32c0];
                        _0x40a6d5[_0x4e32c0] = vt(_0x2b51e3);
                        ;
                    }
                    _0x9009ef = _0x621ee;
                } else {
                    for (_0x29bc35 = new Array(_0x621ee), _0x16a058 = new Array(_0x621ee), _0x35192e && (_0x3c73a7 = new Array(_0x621ee)), _0x145eb5 = 0, _0x1f5db2 = Math.min(_0x9009ef, _0x621ee); _0x145eb5 < _0x1f5db2 && _0x53cd03[_0x145eb5] === _0x432500[_0x145eb5]; _0x145eb5++) {
                        ;
                    }
                    for (_0x1f5db2 = _0x9009ef - 1, _0x1a1555 = _0x621ee - 1; _0x1f5db2 >= _0x145eb5 && _0x1a1555 >= _0x145eb5 && _0x53cd03[_0x1f5db2] === _0x432500[_0x1a1555]; _0x1f5db2--, _0x1a1555--) {
                        _0x29bc35[_0x1a1555] = _0x40a6d5[_0x1f5db2];
                        _0x16a058[_0x1a1555] = _0x5906b9[_0x1f5db2];
                        _0x35192e && (_0x3c73a7[_0x1a1555] = _0x35192e[_0x1f5db2]);
                        ;
                    }
                    for (_0x42c330 = new Map(), _0x4edaea = new Array(_0x1a1555 + 1), _0x4e32c0 = _0x1a1555; _0x4e32c0 >= _0x145eb5; _0x4e32c0--) {
                        _0x3e8878 = _0x432500[_0x4e32c0];
                        _0xb997f3 = _0x42c330.get(_0x3e8878);
                        _0x4edaea[_0x4e32c0] = _0xb997f3 === void 0 ? -1 : _0xb997f3;
                        _0x42c330.set(_0x3e8878, _0x4e32c0);
                        ;
                    }
                    for (_0xb997f3 = _0x145eb5; _0xb997f3 <= _0x1f5db2; _0xb997f3++) {
                        _0x3e8878 = _0x53cd03[_0xb997f3];
                        _0x4e32c0 = _0x42c330.get(_0x3e8878);
                        _0x4e32c0 !== void 0 && _0x4e32c0 !== -1 ? (_0x29bc35[_0x4e32c0] = _0x40a6d5[_0xb997f3], _0x16a058[_0x4e32c0] = _0x5906b9[_0xb997f3], _0x35192e && (_0x3c73a7[_0x4e32c0] = _0x35192e[_0xb997f3]), _0x4e32c0 = _0x4edaea[_0x4e32c0], _0x42c330.set(_0x3e8878, _0x4e32c0)) : _0x5906b9[_0xb997f3]();
                        ;
                    }
                    for (_0x4e32c0 = _0x145eb5; _0x4e32c0 < _0x621ee; _0x4e32c0++) {
                        _0x4e32c0 in _0x29bc35 ? (_0x40a6d5[_0x4e32c0] = _0x29bc35[_0x4e32c0], _0x5906b9[_0x4e32c0] = _0x16a058[_0x4e32c0], _0x35192e && (_0x35192e[_0x4e32c0] = _0x3c73a7[_0x4e32c0], _0x35192e[_0x4e32c0](_0x4e32c0))) : _0x40a6d5[_0x4e32c0] = vt(_0x2b51e3);
                    }
                    _0x40a6d5 = _0x40a6d5.slice(0, _0x9009ef = _0x621ee);
                    _0x53cd03 = _0x432500.slice(0);
                    ;
                }
            }
            return _0x40a6d5;
        });
        function _0x2b51e3(_0x2b1ecf) {
            if (_0x5906b9[_0x4e32c0] = _0x2b1ecf, _0x35192e) {
                const [_0x1923d1, _0x447c18] = ke(_0x4e32c0);
                return _0x35192e[_0x4e32c0] = _0x447c18, _0x53be83(_0x432500[_0x4e32c0], _0x1923d1);
            }
            return _0x53be83(_0x432500[_0x4e32c0]);
        }
    };
}
function zn(_0x4031cb, _0xf9c40e) {
    return he(() => _0x4031cb(_0xf9c40e || {}));
}
function uf() {
    return true;
}
const Gn = {
    'get'(_0x39e5ef, _0x28ea93, _0x31d765) {
        ;
        return _0x28ea93 === ie ? _0x31d765 : _0x39e5ef.get(_0x28ea93);
    },
    'has'(_0x1283fe, _0x4b3331) {
        ;
        return _0x4b3331 === ie ? true : _0x1283fe.has(_0x4b3331);
    },
    'set': uf,
    'deleteProperty': uf,
    'getOwnPropertyDescriptor'(_0x2571dd, _0x2a1702) {
        return {
            'configurable': true,
            'enumerable': true,
            'get'() {
                ;
                return _0x2571dd.get(_0x2a1702);
            },
            'set': uf,
            'deleteProperty': uf
        };
    },
    'ownKeys'(_0xd609d5) {
        ;
        return _0xd609d5.keys();
    }
};
function Pn(_0x1b8929) {
    ;
    return (_0x1b8929 = typeof _0x1b8929 == 'function' ? _0x1b8929() : _0x1b8929) ? _0x1b8929 : {};
}
function X1() {
    for (let _0x41f4f5 = 0, _0x5f510d = this.length; _0x41f4f5 < _0x5f510d; ++_0x41f4f5) {
        const _0x11cb9f = this[_0x41f4f5]();
        if (_0x11cb9f !== void 0) {
            return _0x11cb9f;
        }
    }
}
function Q1(..._0x39e8a8) {
    ;
    let _0x5e4bba = false;
    for (let _0x215d2d = 0; _0x215d2d < _0x39e8a8.length; _0x215d2d++) {
        const _0x1baf0b = _0x39e8a8[_0x215d2d];
        _0x5e4bba = _0x5e4bba || !!_0x1baf0b && ie in _0x1baf0b;
        _0x39e8a8[_0x215d2d] = typeof _0x1baf0b == 'function' ? (_0x5e4bba = true, Be(_0x1baf0b)) : _0x1baf0b;
        ;
    }
    if (_0x5e4bba) {
        return new Proxy({
            'get'(_0x32cc48) {
                ;
                for (let _0x303807 = _0x39e8a8.length - 1; _0x303807 >= 0; _0x303807--) {
                    const _0x4c2b88 = Pn(_0x39e8a8[_0x303807])[_0x32cc48];
                    if (_0x4c2b88 !== void 0) {
                        return _0x4c2b88;
                    }
                }
            },
            'has'(_0x294e63) {
                ;
                for (let _0x2aa92d = _0x39e8a8.length - 1; _0x2aa92d >= 0; _0x2aa92d--) {
                    if (_0x294e63 in Pn(_0x39e8a8[_0x2aa92d])) {
                        return true;
                    }
                }
                return false;
            },
            'keys'() {
                const _0x26e132 = [];
                for (let _0x14ed44 = 0; _0x14ed44 < _0x39e8a8.length; _0x14ed44++) {
                    _0x26e132.push(...Object.keys(Pn(_0x39e8a8[_0x14ed44])));
                }
                return [...new Set(_0x26e132)];
            }
        }, Gn);
    }
    const _0x5985d2 = {}, _0x52c299 = Object.create(null);
    for (let _0x501fe7 = _0x39e8a8.length - 1; _0x501fe7 >= 0; _0x501fe7--) {
        const _0x3715a8 = _0x39e8a8[_0x501fe7];
        if (!_0x3715a8) {
            continue;
        }
        const _0x31c755 = Object.getOwnPropertyNames(_0x3715a8);
        for (let _0x586efb = _0x31c755.length - 1; _0x586efb >= 0; _0x586efb--) {
            const _0x46dd73 = _0x31c755[_0x586efb];
            if (_0x46dd73 === '__proto__' || _0x46dd73 === 'constructor') {
                continue;
            }
            const _0x39ac19 = Object.getOwnPropertyDescriptor(_0x3715a8, _0x46dd73);
            if (!_0x52c299[_0x46dd73]) {
                _0x52c299[_0x46dd73] = _0x39ac19.get ? {
                    'enumerable': true,
                    'configurable': true,
                    'get': X1.bind(_0x5985d2[_0x46dd73] = [_0x39ac19.get.bind(_0x3715a8)])
                } : _0x39ac19.value !== void 0 ? _0x39ac19 : void 0;
            } else {
                const _0xf34151 = _0x5985d2[_0x46dd73];
                _0xf34151 && (_0x39ac19.get ? _0xf34151.push(_0x39ac19.get.bind(_0x3715a8)) : _0x39ac19.value !== void 0 && _0xf34151.push(() => _0x39ac19.value));
            }
        }
    }
    const _0x2cf29c = {}, _0x51566f = Object.keys(_0x52c299);
    for (let _0x5b2fde = _0x51566f.length - 1; _0x5b2fde >= 0; _0x5b2fde--) {
        const _0x38ca53 = _0x51566f[_0x5b2fde], _0x24ced3 = _0x52c299[_0x38ca53];
        _0x24ced3 && _0x24ced3.get ? Object.defineProperty(_0x2cf29c, _0x38ca53, _0x24ced3) : _0x2cf29c[_0x38ca53] = _0x24ced3 ? _0x24ced3.value : void 0;
    }
    return _0x2cf29c;
}
function lo(_0x3b275e, ..._0x23bf7c) {
    ;
    if (ie in _0x3b275e) {
        const _0x112c23 = new Set(_0x23bf7c.length > 1 ? _0x23bf7c.flat() : _0x23bf7c[0]), _0x5493ba = _0x23bf7c.map(_0x2381a2 => new Proxy({
                'get'(_0x53932f) {
                    ;
                    return _0x2381a2.includes(_0x53932f) ? _0x3b275e[_0x53932f] : void 0;
                },
                'has'(_0xdc0e59) {
                    ;
                    return _0x2381a2.includes(_0xdc0e59) && _0xdc0e59 in _0x3b275e;
                },
                'keys'() {
                    ;
                    return _0x2381a2.filter(_0xad7e6b => _0xad7e6b in _0x3b275e);
                }
            }, Gn));
        return _0x5493ba.push(new Proxy({
            'get'(_0x591a9b) {
                return _0x112c23.has(_0x591a9b) ? void 0 : _0x3b275e[_0x591a9b];
            },
            'has'(_0x18e6dd) {
                ;
                return _0x112c23.has(_0x18e6dd) ? false : _0x18e6dd in _0x3b275e;
            },
            'keys'() {
                ;
                return Object.keys(_0x3b275e).filter(_0x23ced2 => !_0x112c23.has(_0x23ced2));
            }
        }, Gn)), _0x5493ba;
    }
    const _0x2398d4 = {}, _0x59fa8e = _0x23bf7c.map(() => ({}));
    for (const _0x18a90b of Object.getOwnPropertyNames(_0x3b275e)) {
        const _0x1f1304 = Object.getOwnPropertyDescriptor(_0x3b275e, _0x18a90b), _0x3adf2d = !_0x1f1304.get && !_0x1f1304.set && _0x1f1304.enumerable && _0x1f1304.writable && _0x1f1304.configurable;
        let _0x209ba6 = false, _0x433320 = 0;
        for (const _0xc38978 of _0x23bf7c)
            _0xc38978.includes(_0x18a90b) && (_0x209ba6 = true, _0x3adf2d ? _0x59fa8e[_0x433320][_0x18a90b] = _0x1f1304.value : Object.defineProperty(_0x59fa8e[_0x433320], _0x18a90b, _0x1f1304)), ++_0x433320;
        _0x209ba6 || (_0x3adf2d ? _0x2398d4[_0x18a90b] = _0x1f1304.value : Object.defineProperty(_0x2398d4, _0x18a90b, _0x1f1304));
    }
    return [
        ..._0x59fa8e,
        _0x2398d4
    ];
}
const Z1 = _0x14419b => 'Stale read from <' + _0x14419b + '>.';
function Bm(_0x59eb32) {
    const _0x1788c7 = 'fallback' in _0x59eb32 && { 'fallback': () => _0x59eb32.fallback };
    return Be(J1(() => _0x59eb32.each, _0x59eb32.children, _0x1788c7 || void 0));
}
function Um(_0x7cbc40) {
    const _0x3796ae = _0x7cbc40.keyed, _0x21169f = Be(() => _0x7cbc40.when, void 0, { 'equals': (_0x12eaf0, _0x3d8bba) => _0x3796ae ? _0x12eaf0 === _0x3d8bba : !_0x12eaf0 == !_0x3d8bba });
    return Be(() => {
        const _0x5806e0 = _0x21169f();
        if (_0x5806e0) {
            const _0x375ee1 = _0x7cbc40.children;
            return typeof _0x375ee1 == 'function' && _0x375ee1.length > 0 ? he(() => _0x375ee1(_0x3796ae ? _0x5806e0 : () => {
                ;
                if (!he(_0x21169f)) {
                    throw Z1('Show');
                }
                return _0x7cbc40.when;
            })) : _0x375ee1;
        }
        return _0x7cbc40.fallback;
    }, void 0, void 0);
}
const a0_0xc636a4 = {};
a0_0xc636a4.name = 'session';
const a0_0x266394 = {};
a0_0x266394.name = 'stickerSets';
const a0_0x405914 = {};
a0_0x405914.name = 'users';
const a0_0x1d910a = {};
a0_0x1d910a.name = 'chats';
const a0_0xdb845b = {};
a0_0xdb845b.name = 'dialogs';
const a0_0x512031 = {};
a0_0x512031.name = 'messages';
const a0_0x4a6086 = {};
a0_0x4a6086.name = 'session';
const a0_0x2f4295 = {};
a0_0x2f4295.name = 'localStorage';
a0_0x2f4295.encryptedName = 'localStorage__encrypted';
;
const a0_0x267a02 = {};
a0_0x267a02.name = 'session';
a0_0x267a02.encryptedName = 'session__encrypted';
;
const a0_0x3cd819 = {};
a0_0x3cd819.name = 'stickerSets';
a0_0x3cd819.encryptedName = 'stickerSets__encrypted';
;
const a0_0x46f750 = {};
a0_0x46f750.name = 'users';
a0_0x46f750.encryptedName = 'users__encrypted';
;
const a0_0x140382 = {};
a0_0x140382.name = 'chats';
a0_0x140382.encryptedName = 'chats__encrypted';
;
const a0_0x1011c6 = {};
a0_0x1011c6.name = 'dialogs';
a0_0x1011c6.encryptedName = 'dialogs__encrypted';
;
const a0_0x33b4be = {};
a0_0x33b4be.name = 'messages';
a0_0x33b4be.encryptedName = 'messages__encrypted';
;
const a0_0x5ee5ec = {};
a0_0x5ee5ec.name = 'webapp';
a0_0x5ee5ec.encryptedName = 'webapp__encrypted';
;
const Vi = () => ({
        'name': 'tweb',
        'version': 7,
        'stores': [
            a0_0xc636a4,
            a0_0x266394,
            a0_0x405914,
            a0_0x1d910a,
            a0_0xdb845b,
            a0_0x512031
        ]
    }), uo = () => ({
        'name': 'tweb-common',
        'version': 8,
        'stores': [
            a0_0x4a6086,
            a0_0x2f4295
        ]
    }), zi = _0x53ca59 => ({
        'name': 'tweb-account-' + _0x53ca59,
        'version': 9,
        'stores': [
            a0_0x267a02,
            a0_0x3cd819,
            a0_0x46f750,
            a0_0x140382,
            a0_0x1011c6,
            a0_0x33b4be,
            a0_0x5ee5ec
        ]
    });
N.getDatabaseState = zi;
const ed = {
    'isFulfilled': false,
    'isRejected': false,
    'notify': () => {
    },
    'notifyAll': function (..._0x3d5f35) {
        ;
        this.lastNotify = _0x3d5f35;
        this.listeners?.forEach(_0x101c3a => _0x101c3a(..._0x3d5f35));
        ;
    },
    'addNotifyListener': function (_0x47f5d3) {
        ;
        this.lastNotify && _0x47f5d3(...this.lastNotify);
        (this.listeners ?? (this.listeners = [])).push(_0x47f5d3);
        ;
    },
    'resolve': function (_0x1cf33f) {
        ;
        this.isFulfilled || this.isRejected || (this.isFulfilled = true, this['_resolve'](_0x1cf33f), this.onFinish());
    },
    'reject': function (..._0x18fe69) {
        ;
        this.isRejected || this.isFulfilled || (this.isRejected = true, this['_reject'](..._0x18fe69), this.onFinish());
    },
    'onFinish': function () {
        ;
        this.notify = this.notifyAll = this.lastNotify = null;
        this.listeners && (this.listeners.length = 0);
        this.cancel && (this.cancel = ve);
        ;
    }
};
function q() {
    ;
    let _0x533db5, _0x5f9558;
    const _0x1138a8 = new Promise((_0x13382b, _0x25c629) => {
        _0x533db5 = _0x13382b;
        _0x5f9558 = _0x25c629;
        ;
    });
    return Object.assign(_0x1138a8, ed), _0x1138a8['_resolve'] = _0x533db5, _0x1138a8['_reject'] = _0x5f9558, _0x1138a8;
}
function jm(_0x50dcf6, _0x57b940) {
    ;
    _0x50dcf6.then(_0x57b940.resolve.bind(_0x57b940), _0x57b940.reject.bind(_0x57b940));
}
self.deferredPromise = q;
function Af(_0x35d31c, _0x40d2c9, _0x254d0e = false) {
    ;
    let _0x4e01b4, _0x190795, _0x3bad73;
    const _0xc3e8e0 = (..._0x265512) => {
        ;
        if (_0x4e01b4 = true, _0x3bad73 = _0x265512, _0x190795) {
            return;
        }
        _0x254d0e && (_0x4e01b4 = false, _0x40d2c9(..._0x3bad73));
        const _0x48cb68 = _0x190795 = Math.random();
        _0x35d31c(() => {
            ;
            if (_0x190795 === _0x48cb68) {
                _0xc3e8e0.clear();
                _0x4e01b4 && (_0x4e01b4 = false, _0x40d2c9(..._0x3bad73));
            }
        });
    };
    return _0xc3e8e0.clear = () => {
        _0x190795 = void 0;
    }, _0xc3e8e0;
}
const Mt = {
    'test': false,
    'debug': false,
    'http': false,
    'ssl': true,
    'asServiceWorker': false,
    'transport': 'websocket',
    'noSharedWorker': location.search.indexOf('noSharedWorker=1') > 0,
    'multipleTransports': true
};
(Mt.http = location.search.indexOf('http=1') > 0) && (Mt.multipleTransports = false);
Mt.multipleTransports && (Mt.http = true);
Mt.http && (Mt.transport = 'https');
;
const Ws = class Ws {
    constructor(_0x4e9091) {
        ;
        Hn(this, _0x4e9091);
        this.storageIsAvailable = true;
        this.log = Q([
            'IDB',
            _0x4e9091.name
        ].join('-'));
        this.log('constructor');
        this.openDatabase(true);
        Ws.INSTANCES.push(this);
        ;
    }
    ['isAvailable']() {
        ;
        return this.storageIsAvailable;
    }
    ['openDatabase'](_0x468c46 = false) {
        ;
        if (this.openDbPromise && !_0x468c46) {
            return this.openDbPromise;
        }
        const _0x1dc1ea = (_0x55c07f, _0x4961c2) => {
                const _0x1f4d57 = Array.from(_0x55c07f.indexNames);
                for (const _0xdfbce5 of _0x1f4d57)
                    _0x55c07f.deleteIndex(_0xdfbce5);
                if (_0x4961c2.indexes?.length) {
                    for (const _0x3484c9 of _0x4961c2.indexes)
                        _0x55c07f.indexNames.contains(_0x3484c9.indexName) || _0x55c07f.createIndex(_0x3484c9.indexName, _0x3484c9.keyPath, _0x3484c9.objectParameters);
                }
            }, _0x17c3d3 = (_0x642f80, _0x4188ce) => {
                ;
                const _0x32ecb4 = _0x642f80.createObjectStore(_0x4188ce.name);
                _0x1dc1ea(_0x32ecb4, _0x4188ce);
            };
        try {
            var _0x5e2d52 = indexedDB.open(this.name, this.version);
            if (!_0x5e2d52) {
                return Promise.reject();
            }
        } catch (_0x267c38) {
            return this.log.error('error opening db', _0x267c38.message), this.storageIsAvailable = false, Promise.reject(_0x267c38);
        }
        let _0x343e25 = false;
        return setTimeout(() => {
            ;
            _0x343e25 || _0x5e2d52.onerror(Ee('IDB_CREATE_TIMEOUT'));
        }, 3000), this.openDbPromise = new Promise((_0x566381, _0x1471cf) => {
            ;
            _0x5e2d52.onsuccess = _0x5dbe08 => {
                ;
                _0x343e25 = true;
                const _0x4723bc = _0x5e2d52.result;
                let _0x551679 = false;
                this.log('Opened');
                _0x4723bc.onerror = _0x3dd8f9 => {
                    ;
                    this.storageIsAvailable = false;
                    this.log.error('Error creating/accessing IndexedDB database', _0x3dd8f9);
                    _0x1471cf(_0x3dd8f9);
                    ;
                };
                _0x4723bc.onclose = _0x16d6b9 => {
                    ;
                    this.log.error('closed:', _0x16d6b9);
                    !_0x551679 && this.openDatabase();
                    ;
                };
                _0x4723bc.onabort = _0x3848fa => {
                    ;
                    this.log.error('abort:', _0x3848fa);
                    const _0x549834 = _0x3848fa.target;
                    this.openDatabase(_0x551679 = true);
                    _0x549834.onerror && _0x549834.onerror(_0x3848fa);
                    _0x4723bc.close();
                    ;
                };
                _0x4723bc.onversionchange = _0x155c57 => {
                    ;
                    this.log.error('onversionchange, lol?');
                };
                _0x566381(this.db = _0x4723bc);
                ;
            };
            _0x5e2d52.onerror = _0x385f2d => {
                ;
                _0x343e25 = true;
                this.storageIsAvailable = false;
                this.log.error('Error creating/accessing IndexedDB database', _0x385f2d);
                _0x1471cf(_0x385f2d);
                ;
            };
            _0x5e2d52.onupgradeneeded = _0x5d3749 => {
                ;
                _0x343e25 = true;
                this.log.warn('performing idb upgrade from', _0x5d3749.oldVersion, 'to', _0x5d3749.newVersion);
                ;
                const _0x380646 = _0x5d3749.target, _0x490e80 = _0x380646.result;
                this.stores.forEach(_0x151ea9 => {
                    ;
                    if (!_0x490e80.objectStoreNames.contains(_0x151ea9.name)) {
                        _0x17c3d3(_0x490e80, _0x151ea9);
                    } else {
                        const _0x3791d8 = _0x380646.transaction.objectStore(_0x151ea9.name);
                        _0x1dc1ea(_0x3791d8, _0x151ea9);
                    }
                    _0x151ea9.encryptedName && !_0x490e80.objectStoreNames.contains(_0x151ea9.encryptedName) && _0x490e80.createObjectStore(_0x151ea9.encryptedName);
                });
            };
            ;
        }).then(_0x4db3d1 => this.openDbPromise = _0x4db3d1);
    }
    async ['closeDatabase']() {
        ;
        this.db && (this.db.onclose = () => {
        }, this.db.close());
    }
    static ['create'](_0x1ef29c) {
        ;
        return this.INSTANCES.find(_0x3f70d9 => _0x3f70d9.name === _0x1ef29c.name) ?? new Ws(_0x1ef29c);
    }
    static ['closeDatabases'](_0x4635dc) {
        ;
        this.INSTANCES.forEach(_0x2dde00 => {
            ;
            _0x4635dc && _0x4635dc === _0x2dde00 || _0x2dde00.closeDatabase();
        });
    }
    static ['deleteDatabaseByName'](_0x3da361) {
        ;
        return new Promise((_0x4c687d, _0x4e5a87) => {
            ;
            this.INSTANCES.forEach(_0x345515 => {
                ;
                if (_0x345515.name === _0x3da361) {
                    return _0x345515.closeDatabase();
                }
            });
            const _0x5698e4 = indexedDB.deleteDatabase(_0x3da361);
            _0x5698e4.onerror = () => _0x4e5a87();
            _0x5698e4.onsuccess = () => _0x4c687d();
            ;
        });
    }
};
Ws.INSTANCES = [];
let Wf = Ws;
class Cf {
    constructor(_0x152a4f, _0x4151a0) {
        ;
        this.storeName = _0x4151a0;
        this.log = Q([
            'IDB',
            _0x152a4f.name,
            _0x4151a0
        ].join('-'));
        this.idb = Wf.create(_0x152a4f);
        ;
    }
    ['close']() {
        ;
        return this.idb.closeDatabase();
    }
    ['delete'](_0x429426, _0x4ba03e) {
        const _0xb29d6 = Array.isArray(_0x429426);
        return _0xb29d6 || (_0x429426 = [].concat(_0x429426)), this.getObjectStore('readwrite', _0x2c67a1 => {
            const _0x365698 = _0x429426.map(_0x430086 => _0x2c67a1.delete(_0x430086));
            return _0xb29d6 ? _0x365698 : _0x365698[0];
        }, '', _0x4ba03e);
    }
    ['clear'](_0x20f44b) {
        ;
        return this.getObjectStore('readwrite', _0xb7f189 => _0xb7f189.clear(), '', _0x20f44b);
    }
    ['save'](_0x19a010, _0x49295b, _0xb44dd1) {
        const _0x63f7f1 = Array.isArray(_0x19a010);
        return _0x63f7f1 || (_0x19a010 = [].concat(_0x19a010), _0x49295b = [].concat(_0x49295b)), this.getObjectStore('readwrite', _0x27c62b => {
            const _0xd7768f = _0x19a010.map((_0x4642e4, _0x3e38f6) => _0x27c62b.put(_0x49295b[_0x3e38f6], _0x4642e4));
            return _0x63f7f1 ? _0xd7768f : _0xd7768f[0];
        }, '', _0xb44dd1);
    }
    ['get'](_0x559445, _0x1aab27) {
        const _0x540fb4 = Array.isArray(_0x559445);
        if (_0x540fb4) {
            if (!_0x559445.length) {
                return Promise.resolve([]);
            }
        } else {
            if (!_0x559445) {
                return;
            }
            _0x559445 = [].concat(_0x559445);
        }
        return this.getObjectStore('readonly', _0x3126f4 => {
            ;
            const _0x383e38 = _0x559445.map(_0x34e227 => _0x3126f4.get(_0x34e227));
            return _0x540fb4 ? _0x383e38 : _0x383e38[0];
        }, '', _0x1aab27);
    }
    async ['getObjectStore'](_0x205cc2, _0x45ee1a, _0x114c38, _0x14e4ac = this.storeName) {
        ;
        let _0x4eab21;
        _0x114c38 && (_0x4eab21 = performance.now(), this.log(_0x114c38 + ': start'));
        const _0x284d2f = setTimeout(() => {
                ;
                this.log.error('transaction not finished', _0x104c69, _0x114c38);
            }, 10000), _0x2b9337 = this.idb.openDatabase(), _0x43e9b9 = _0x2b9337 instanceof Promise ? await _0x2b9337 : _0x2b9337;
        let _0x25e846, _0xba16a2;
        const _0x4049f6 = { durability: 'relaxed' };
        ;
        const _0x2d05d6 = new Promise((_0x2bdc15, _0x105268) => [_0x25e846, _0xba16a2] = [
                _0x2bdc15,
                _0x105268
            ]), _0x104c69 = _0x43e9b9.transaction([_0x14e4ac], _0x205cc2, _0x4049f6), _0x224d17 = () => {
                ;
                clearTimeout(_0x284d2f);
                _0xba16a2(_0x104c69.error);
                ;
            }, _0x18a79c = () => {
                ;
                clearTimeout(_0x284d2f);
                _0x114c38 && this.log(_0x114c38 + ': end', performance.now() - _0x4eab21);
                ;
                const _0xfda59c = _0x30e667.map(_0x50190c => _0x50190c.result);
                _0x25e846(_0x4ae493 ? _0xfda59c : _0xfda59c[0]);
                _0x114c38 && this.log(_0x114c38 + ': resolved', _0x4ae493 ? _0xfda59c : _0xfda59c[0]);
                ;
            };
        _0x104c69.onerror = _0x224d17;
        const _0x490c78 = _0x205cc2 === 'readwrite';
        _0x490c78 && (_0x104c69.oncomplete = () => _0x18a79c());
        const _0x40feee = _0x45ee1a(_0x104c69.objectStore(_0x14e4ac), _0x18a79c, _0x224d17), _0x4ae493 = Array.isArray(_0x40feee), _0x30e667 = _0x4ae493 ? _0x40feee : [].concat(_0x40feee);
        if (_0x490c78) {
            return _0x2d05d6;
        }
        const _0x544264 = _0x30e667.length;
        let _0x532008 = _0x544264;
        const _0x1cb907 = () => {
            ;
            _0x104c69.error || --_0x532008 || _0x18a79c();
        };
        for (let _0x187f40 = 0; _0x187f40 < _0x544264; ++_0x187f40) {
            const _0x72f2ce = _0x30e667[_0x187f40];
            _0x72f2ce.onerror = _0x224d17;
            _0x72f2ce.onsuccess = _0x1cb907;
            ;
        }
        return _0x2d05d6;
    }
    ['getAll'](_0x45ad4b) {
        ;
        return this.getObjectStore('readonly', _0x27ba4d => _0x27ba4d.getAll(), '', _0x45ad4b);
    }
    ['getAllKeys'](_0x60a73f) {
        ;
        return this.getObjectStore('readonly', _0x306a23 => _0x306a23.getAllKeys(), '', _0x60a73f);
    }
    ['getAllEntries'](_0x2d045c) {
        const _0x289907 = [];
        return new Promise((_0x31527e, _0x3eb731) => {
            ;
            this.getObjectStore('readonly', (_0x205009, _0xdf87da, _0x19ffd0) => {
                const _0x1bcf72 = _0x205009.openCursor();
                return _0x1bcf72.onsuccess = _0x2b9a1 => {
                    const _0x19db56 = _0x2b9a1.target.result;
                    _0x19db56 ? (_0x289907.push([
                        _0x19db56.key,
                        _0x19db56.value
                    ]), _0x19db56.continue()) : (_0xdf87da(), _0x31527e(_0x289907));
                }, _0x1bcf72.onerror = _0x19ffd0, [];
            }, '', _0x2d045c).catch(_0x3eb731);
        });
    }
}
class ln {
    constructor() {
        ;
        throw new Error('Cannot instantiate a static utility class');
    }
}
const Pr = class Pr extends ln {
    static ['resolveDeferred'](_0x1bfc3d) {
        ;
        this.value = _0x1bfc3d;
        this.deferred?.resolve();
        this.deferred = void 0;
        ;
    }
    static async ['isUsingPasscode']() {
        ;
        if (this.deferred && await this.deferred, typeof this.value != 'boolean') {
            throw new Error('Is using passcode is not boolean WTF?');
        }
        return this.value;
    }
    static ['resetDeferred']() {
        ;
        this.value = void 0;
        this.deferred = q();
        ;
    }
};
Pr.deferred = q();
let Me = Pr;
function Lt(_0x43b539) {
    ;
    return Array.isArray(_0x43b539) ? _0x43b539 : [_0x43b539];
}
function ho(_0x487509) {
    ;
    return _0x487509 instanceof Uint8Array ? _0x487509 : typeof _0x487509 == 'string' ? new TextEncoder().encode(_0x487509) : new Uint8Array(_0x487509);
}
function td(_0xcb6afe, _0x3c1a3a) {
    ;
    let _0x528c52, _0x39a9ca, _0x13d174 = false;
    function _0x49b2c8() {
        ;
        _0x39a9ca = self.setTimeout(() => {
            ;
            _0x13d174 = false;
            _0xcb6afe(..._0x528c52)?.then(() => {
                _0x39a9ca = void 0;
                _0x13d174 && _0x49b2c8();
                ;
            });
            ;
        }, _0x3c1a3a);
    }
    const _0x2fa128 = (..._0x5a5f8f) => {
        _0x528c52 = _0x5a5f8f;
        _0x13d174 = true;
        !_0x39a9ca && _0x49b2c8();
        ;
    };
    return _0x2fa128.clear = () => {
        ;
        self.clearTimeout(_0x39a9ca);
        _0x528c52 = void 0;
        _0x39a9ca = void 0;
        _0x13d174 = false;
        ;
    }, _0x2fa128;
}
class sd extends Ui {
    constructor() {
        ;
        super('CRYPTO');
        this.lastIndex = -1;
        ;
    }
    ['invokeCryptoNew']({
        method: _0x4a7174,
        args: _0x29feb5,
        transfer: _0x155189
    }) {
        const _0x1fea5a = {
            method: _0x4a7174,
            args: _0x29feb5
        };
        ;
        ;
        ;
        const _0xf9486a = _0x1fea5a, _0x21851d = this.listeners.invoke;
        if (_0x21851d?.size) {
            let _0x3de96c = _0x21851d.values().next().value.callback(_0xf9486a);
            return !bt && !(_0x3de96c instanceof Promise) && (_0x3de96c = Promise.resolve(_0x3de96c)), _0x3de96c;
        }
        const _0x119ad3 = _0x4a7174 === 'aes-encrypt' || _0x4a7174 === 'aes-decrypt' ? this.lastIndex = (this.lastIndex + 1) % this.sendPorts.length : 0;
        return this.invoke('invoke', _0xf9486a, void 0, this.sendPorts[_0x119ad3], _0x155189);
    }
    ['invokeCrypto'](_0x2de5c7, ..._0x58e80f) {
        const _0x28933c = {};
        return _0x28933c.method = _0x2de5c7, _0x28933c.args = _0x58e80f, this.invokeCryptoNew(_0x28933c);
    }
    ['sendToOnePort'](_0x59c960) {
        ;
        this.invokeVoid('port', void 0, this.sendPorts[0], [_0x59c960]);
    }
}
const it = new sd();
N && (N.cryptoMessagePort = it);
const fn = class fn extends ln {
    static async ['get']() {
        ;
        return this.deferred && await this.deferred, this.key;
    }
    static async ['getAsBase64']() {
        const _0x13f0dc = await this.get();
        if (!_0x13f0dc) {
            return null;
        }
        const _0x7ab06f = await crypto.subtle.exportKey('raw', _0x13f0dc);
        return btoa(String.fromCharCode(...new Uint8Array(_0x7ab06f)));
    }
    static ['save'](_0x267967) {
        ;
        this.key = _0x267967;
        this.deferred?.resolve();
        this.deferred = void 0;
        ;
    }
    static ['resetDeferred']() {
        ;
        this.key = null;
        this.deferred = q();
        ;
    }
};
fn.key = null;
fn.deferred = q();
;
let ct = fn;
const Te = class Te {
    constructor(_0xe9493c, _0x2827ae) {
        ;
        this.db = _0xe9493c;
        this.encryptedStoreName = _0x2827ae;
        this.saveToIDB = async () => {
            ;
            await this.waitToLoad();
            performance.now();
            ;
            const _0x9bfbed = await Te.encrypt(this.data);
            _0x9bfbed.length;
            performance.now();
            await this.storage.save(Te.STORAGE_KEY, _0x9bfbed);
            performance.now();
            ;
        };
        this.saveToIDBThrottled = td(() => this.saveToIDB(), Te.STORAGE_THROTTLE_TIME_MS);
        this.storage = new Cf(_0xe9493c, _0x2827ae);
        this.log = Q('encrypted-storage-' + _0x2827ae);
        ;
    }
    static ['getInstance'](_0x363b7e, _0x474ab6) {
        const _0x35164a = this.getStorageKey(_0x363b7e.name, _0x474ab6);
        if (this.instances.has(_0x35164a)) {
            return this.instances.get(_0x35164a);
        }
        const _0x18dd56 = new Te(_0x363b7e, _0x474ab6);
        return this.instances.set(_0x35164a, _0x18dd56), _0x18dd56;
    }
    static ['getStorageKey'](_0x10376d, _0xec8258) {
        return _0x10376d + '**' + _0xec8258;
    }
    static async ['encrypt'](_0x4338f3) {
        ;
        if (!Object.keys(_0x4338f3).length) {
            return null;
        }
        const _0x521933 = await ct.get(), _0x1e819a = ho(JSON.stringify(_0x4338f3)), _0x427db4 = {
                key: _0x521933,
                data: _0x1e819a
            };
        ;
        ;
        ;
        const _0x5ccde4 = {};
        return _0x5ccde4.method = 'aes-local-encrypt', _0x5ccde4.args = [_0x427db4], _0x5ccde4.transfer = [_0x1e819a.buffer], await it.invokeCryptoNew(_0x5ccde4);
    }
    static async ['decrypt'](_0x3fb1fd) {
        const _0x4a8338 = await ct.get(), _0x4b43c7 = await it.invokeCryptoNew({
                'method': 'aes-local-decrypt',
                'args': [{
                        'key': _0x4a8338,
                        'encryptedData': _0x3fb1fd
                    }],
                'transfer': [_0x3fb1fd.buffer]
            }), _0x2242c0 = new TextDecoder().decode(_0x4b43c7);
        return JSON.parse(_0x2242c0);
    }
    ['loadEncrypted']() {
        ;
        ((async () => (this.loadingDataPromise = this.loadFromIDB(), await this.loadingDataPromise, this.loadingDataPromise = void 0))());
    }
    async ['loadDecrypted'](_0x2007e0) {
        ;
        this.log('loading decrypted', _0x2007e0);
        this.data = _0x2007e0;
        await this.saveToIDB();
        ;
    }
    ['waitToLoad']() {
        ;
        if (this.loadingDataPromise) {
            return this.loadingDataPromise;
        }
    }
    async ['loadFromIDB']() {
        ;
        try {
            const _0x165e62 = await this.storage.get(Te.STORAGE_KEY);
            if (_0x165e62 === null) {
                throw null;
            }
            if (!(_0x165e62 instanceof Uint8Array)) {
                throw new Error('Stored data in encrypted store is not a Uint8Array');
            }
            const _0x336ae1 = await Te.decrypt(_0x165e62);
            this.data = _0x336ae1;
        } catch (_0x49aaad) {
            _0x49aaad && this.log(_0x49aaad);
            this.data = {};
            ;
        }
        return this.data;
    }
    async ['reEncrypt']() {
        ;
        await this.saveToIDB();
    }
    async ['save'](_0x336067, _0x1234f6) {
        ;
        await this.waitToLoad();
        const _0x46eff0 = Lt(_0x336067), _0x178e76 = Lt(_0x1234f6);
        _0x46eff0.forEach((_0x416f73, _0x1aeef2) => {
            ;
            this.data[_0x416f73] = _0x178e76[_0x1aeef2];
        });
        this.saveToIDBThrottled();
        ;
    }
    async ['get'](_0x281e2f) {
        ;
        return await this.waitToLoad(), _0x281e2f.map(_0x298ee7 => this.data[_0x298ee7]);
    }
    async ['getAllEntries']() {
        ;
        return await this.waitToLoad(), Object.entries(this.data);
    }
    async ['getAll']() {
        ;
        return await this.waitToLoad(), Object.values(this.data);
    }
    async ['getAllKeys']() {
        ;
        return await this.waitToLoad(), Object.keys(this.data);
    }
    async ['delete'](_0x465cb7) {
        ;
        await this.waitToLoad();
        Lt(_0x465cb7).forEach(_0x202cb7 => {
            ;
            delete this.data[_0x202cb7];
        });
        this.saveToIDBThrottled();
        ;
    }
    async ['clear']() {
        ;
        this.data = {};
        await this.storage.clear();
        ;
    }
};
Te.STORAGE_KEY = 'data';
Te.STORAGE_THROTTLE_TIME_MS = 0;
Te.instances = new Map();
;
let Le = Te;
function fd() {
}
const Qt = class Qt {
    constructor(_0x87b0a3, _0x33aa21) {
        ;
        this.db = _0x87b0a3;
        this.storeName = _0x33aa21;
        this['_save'] = async () => {
            const _0x572204 = this.saveDeferred;
            this.saveDeferred = q();
            const _0x57290e = this.keysToSet;
            if (_0x57290e.size) {
                const _0x27c410 = Array.from(_0x57290e.values());
                _0x57290e.clear();
                const _0x1893ec = _0x27c410.map(_0x25cb7f => this.cache[_0x25cb7f]);
                try {
                    (await this.getStorage()).save(_0x27c410, _0x1893ec);
                } catch (_0x380708) {
                    this.log.error('set error', _0x380708, _0x27c410, _0x1893ec);
                }
            }
            _0x572204.resolve();
            _0x57290e.size && this.saveThrottled();
            ;
        };
        this['_delete'] = async () => {
            const _0x386cfe = this.deleteDeferred;
            this.deleteDeferred = q();
            const _0x15537a = this.keysToDelete;
            if (_0x15537a.size) {
                const _0x172015 = Array.from(_0x15537a.values());
                _0x15537a.clear();
                try {
                    (await this.getStorage()).delete(_0x172015);
                } catch (_0x4f55dc) {
                    this.log.error('delete error', _0x4f55dc, _0x172015);
                }
            }
            _0x386cfe.resolve();
            _0x15537a.size && this.deleteThrottled();
            ;
        };
        this['_get'] = async () => {
            ;
            const _0x49ce10 = Array.from(this.getPromises.keys());
            (await this.getStorage()).get(_0x49ce10).then(_0x20676f => {
                ;
                for (let _0x2f91cd = 0, _0x51bb8f = _0x49ce10.length; _0x2f91cd < _0x51bb8f; ++_0x2f91cd) {
                    const _0x2b49bc = _0x49ce10[_0x2f91cd], _0x25d6c0 = this.getPromises.get(_0x2b49bc);
                    _0x25d6c0 && (_0x25d6c0.resolve(this.cache[_0x2b49bc] = _0x20676f[_0x2f91cd]), this.getPromises.delete(_0x2b49bc));
                }
            }, _0x4fd2d6 => {
                ;
                new Set([
                    'NO_ENTRY_FOUND',
                    'STORAGE_OFFLINE'
                ]).has(_0x4fd2d6.type) || (this.useStorage = false, this.log.error('get error', _0x4fd2d6, _0x49ce10, this.storeName));
                for (let _0x35ff7c = 0, _0x15691f = _0x49ce10.length; _0x35ff7c < _0x15691f; ++_0x35ff7c) {
                    const _0x1e03ef = _0x49ce10[_0x35ff7c], _0x715623 = this.getPromises.get(_0x1e03ef);
                    _0x715623 && (_0x715623.resolve(void 0), this.getPromises.delete(_0x1e03ef));
                }
            }).finally(() => {
                ;
                this.getPromises.size && this.getThrottled();
            });
        };
        this.log = Q('AS-' + _0x87b0a3.name + '-' + _0x33aa21);
        this.cache = {};
        this.getPromises = new Map();
        this.keysToSet = new Set();
        this.saveDeferred = q();
        this.keysToDelete = new Set();
        this.deleteDeferred = q();
        ;
        const _0x407a4b = _0x87b0a3.stores.find(_0xbfed12 => _0xbfed12.name === _0x33aa21);
        this.isEncryptable = !!_0x407a4b?.encryptedName;
        this.encryptedStoreName = _0x407a4b?.encryptedName;
        Qt.STORAGES.length ? this.useStorage = Qt.STORAGES[0].useStorage : this.useStorage = true;
        this.savingFreezed = false;
        Qt.STORAGES.push(this);
        this.saveThrottled = Af(queueMicrotask, this['_save'], false);
        this.deleteThrottled = Af(queueMicrotask, this['_delete'], false);
        this.getThrottled = Af(queueMicrotask, this['_get'], false);
        ;
    }
    async ['getStorage']() {
        ;
        if (this.storage) {
            return this.storage;
        }
        const _0x338e42 = this.isEncryptable ? await Me.isUsingPasscode() : false, _0x20ffe0 = this.storage = _0x338e42 ? Le.getInstance(this.db, this.encryptedStoreName) : new Cf(this.db, this.storeName);
        return _0x20ffe0 instanceof Le && _0x20ffe0.loadEncrypted(), _0x20ffe0;
    }
    ['isAvailable']() {
        ;
        return this.useStorage;
    }
    ['getCache']() {
        ;
        return this.cache;
    }
    ['getFromCache'](_0x1efc87) {
        ;
        return this.cache[_0x1efc87];
    }
    ['setToCache'](_0x43c8e6, _0x45788b) {
        ;
        return this.cache[_0x43c8e6] = _0x45788b;
    }
    async ['get'](_0x3ae66c, _0x18c447 = true) {
        ;
        if (this.cache.hasOwnProperty(_0x3ae66c) && _0x18c447) {
            return this.getFromCache(_0x3ae66c);
        }
        if (this.useStorage) {
            const _0x2560d4 = this.getPromises.get(_0x3ae66c);
            if (_0x2560d4) {
                return _0x2560d4;
            }
            const _0x39592b = q();
            return this.getPromises.set(_0x3ae66c, _0x39592b), this.getThrottled(), _0x39592b;
        }
    }
    async ['getAll']() {
        ;
        return (await this.getStorage()).getAll().catch(() => []);
    }
    async ['getAllKeys']() {
        ;
        return (await this.getStorage()).getAllKeys().catch(() => []);
    }
    async ['getAllEntries']() {
        ;
        return (await this.getStorage()).getAllEntries().catch(() => []);
    }
    ['warnAboutSaving']() {
    }
    ['set'](_0x389f1f, _0x6c28b6 = false) {
        const _0x5282d4 = this.useStorage && !_0x6c28b6 && !this.savingFreezed;
        this.warnAboutSaving();
        let _0x3bb80e = false;
        for (const _0x584310 in _0x389f1f)
            if (_0x389f1f.hasOwnProperty(_0x584310)) {
                const _0x4e86cd = _0x389f1f[_0x584310];
                this.setToCache(_0x584310, _0x4e86cd);
                _0x5282d4 && (this.keysToSet.add(_0x584310), this.keysToDelete.delete(_0x584310), this.saveThrottled());
                _0x3bb80e = true;
                ;
            }
        return _0x5282d4 && _0x3bb80e ? this.saveDeferred : Promise.resolve();
    }
    ['delete'](_0x44676d, _0x5554dd = false) {
        ;
        return this.warnAboutSaving(), _0x44676d = '' + _0x44676d, _0x5554dd || delete this.cache[_0x44676d], this.useStorage && (this.keysToSet.delete(_0x44676d), this.keysToDelete.add(_0x44676d), this.deleteThrottled()), this.useStorage ? this.deleteDeferred : Promise.resolve();
    }
    async ['clear'](_0x394db0 = false) {
        ;
        if (!_0x394db0) {
            for (const _0x2fdbac in this.cache)
                delete this.cache[_0x2fdbac];
        }
        try {
            const _0x10caac = await this.getStorage();
            await _0x10caac.clear();
            _0x10caac instanceof Le ? await new Cf(this.db, this.storeName).clear() : this.isEncryptable && await Le.getInstance(this.db, this.encryptedStoreName).clear();
            ;
        } catch {
        }
    }
    async ['unfreezeAsync'](_0x10b1c6) {
        const _0x3e84bc = this.savingFreezed;
        this.savingFreezed = false;
        try {
            await _0x10b1c6();
        } catch {
        }
        this.savingFreezed = _0x3e84bc;
    }
    static ['toggleStorage'](_0x2fe99d, _0x23c997) {
        ;
        return Promise.all(this.STORAGES.map(_0x13c394 => {
            ;
            if (_0x13c394.useStorage = _0x2fe99d, !(!bt || !_0x23c997)) {
                if (!_0x2fe99d) {
                    _0x13c394.keysToSet.clear();
                    _0x13c394.keysToDelete.clear();
                    _0x13c394.getPromises.forEach(_0x59d282 => _0x59d282.resolve(void 0));
                    _0x13c394.getPromises.clear();
                    ;
                } else {
                    return _0x13c394.set(_0x13c394.cache);
                }
            }
        })).catch(fd);
    }
    static ['freezeSaving'](_0x10b850, _0xb26fe1) {
        ;
        this.STORAGES.forEach(_0x4a204c => _0x4a204c.savingFreezed = true);
        try {
            _0x10b850();
        } catch {
        }
        this.STORAGES.forEach(_0x2f16c0 => _0x2f16c0.savingFreezed = false);
    }
    static async ['freezeSavingAsync'](_0x53678e) {
        ;
        this.STORAGES.forEach(_0x49de9b => _0x49de9b.savingFreezed = true);
        try {
            await _0x53678e();
        } catch {
        }
        this.STORAGES.forEach(_0x578e0b => _0x578e0b.savingFreezed = false);
    }
    async ['toggleEncrypted'](_0xacd505) {
        ;
        if (!this.isEncryptable) {
            return;
        }
        const _0x1050c5 = this.storage instanceof Le;
        if (_0xacd505 === _0x1050c5) {
            return;
        }
        const _0x2ee9c3 = await this.getAllEntries();
        if (await this.storage.clear(), _0xacd505) {
            const _0x37c8d3 = this.storage = Le.getInstance(this.db, this.encryptedStoreName), _0x4859eb = Object.fromEntries(_0x2ee9c3);
            await _0x37c8d3.loadDecrypted(_0x4859eb);
        } else {
            const _0x11983e = this.storage = new Cf(this.db, this.storeName), _0x948be2 = _0x2ee9c3.map(_0x5dab54 => _0x5dab54[0]), _0x48a1f1 = _0x2ee9c3.map(_0x7a250b => _0x7a250b[1]);
            await _0x11983e.save(_0x948be2, _0x48a1f1);
        }
    }
    async ['reEncrypt']() {
        ;
        this.storage instanceof Le && await this.storage.reEncrypt();
    }
    static async ['toggleEncryptedForAll'](_0x408133) {
        ;
        this.freezeSavingAsync(async () => {
            ;
            await Promise.all(this.STORAGES.map(_0x50a447 => _0x50a447.toggleEncrypted(_0x408133)));
        });
    }
    static async ['reEncryptEncrypted']() {
        ;
        this.freezeSavingAsync(async () => {
            ;
            await Promise.all(this.STORAGES.map(_0x4c543c => _0x4c543c.reEncrypt()));
        });
    }
};
Qt.STORAGES = [];
let It = Qt;
N && (N.AppStorage = It);
class nd extends It {
    constructor() {
        super(uo(), 'session');
    }
}
const rs = new nd();
rs.get('settings', false).then(_0x3a3deb => {
    ;
    Me.resolveDeferred(_0x3a3deb?.passcode?.enabled || false);
});
N.commonStateStorage = rs;
;
const a0_0x2fb6f0 = {};
a0_0x2fb6f0.messageActionChatCreate = 'ActionCreateGroup';
a0_0x2fb6f0.messageActionChatCreateYou = 'ActionYouCreateGroup';
a0_0x2fb6f0.messageActionChatEditTitle = 'ActionChangedTitle';
a0_0x2fb6f0.messageActionChatEditPhoto = 'ActionChangedPhoto';
a0_0x2fb6f0.messageActionChatEditVideo = 'ActionChangedVideo';
a0_0x2fb6f0.messageActionChatDeletePhoto = 'ActionRemovedPhoto';
a0_0x2fb6f0.messageActionChatReturn = 'ActionAddUserSelf';
a0_0x2fb6f0.messageActionChatReturnYou = 'ActionAddUserSelfYou';
a0_0x2fb6f0.messageActionChatJoined = 'ActionAddUserSelfMega';
a0_0x2fb6f0.messageActionChatJoinedYou = 'ChannelMegaJoined';
a0_0x2fb6f0.messageActionChatAddUser = 'ActionAddUser';
a0_0x2fb6f0.messageActionChatAddUsers = 'ActionAddUser';
a0_0x2fb6f0.messageActionChatLeave = 'ActionLeftUser';
a0_0x2fb6f0.messageActionChatLeaveYou = 'YouLeft';
a0_0x2fb6f0.messageActionChatDeleteUser = 'ActionKickUser';
a0_0x2fb6f0.messageActionChatJoinedByLink = 'ActionInviteUser';
a0_0x2fb6f0.messageActionPinMessage = 'Chat.Service.Group.UpdatedPinnedMessage';
a0_0x2fb6f0.messageActionContactSignUp = 'Chat.Service.PeerJoinedTelegram';
a0_0x2fb6f0.messageActionChannelCreate = 'ActionCreateChannel';
a0_0x2fb6f0.messageActionChannelEditTitle = 'Chat.Service.Channel.UpdatedTitle';
a0_0x2fb6f0.messageActionChannelEditPhoto = 'Chat.Service.Channel.UpdatedPhoto';
a0_0x2fb6f0.messageActionChannelEditVideo = 'Chat.Service.Channel.UpdatedVideo';
a0_0x2fb6f0.messageActionChannelDeletePhoto = 'Chat.Service.Channel.RemovedPhoto';
a0_0x2fb6f0.messageActionHistoryClear = 'HistoryCleared';
a0_0x2fb6f0.messageActionDiscussionStarted = 'DiscussionStarted';
a0_0x2fb6f0.messageActionChannelJoined = 'ChannelJoined';
a0_0x2fb6f0.messageActionChannelMigrateFrom = 'ActionMigrateFromGroup';
a0_0x2fb6f0['messageActionPhoneCall.video_in_ok'] = 'ChatList.Service.VideoCall.incoming';
a0_0x2fb6f0['messageActionPhoneCall.video_out_ok'] = 'ChatList.Service.VideoCall.outgoing';
a0_0x2fb6f0['messageActionPhoneCall.video_missed'] = 'ChatList.Service.VideoCall.Missed';
a0_0x2fb6f0['messageActionPhoneCall.video_cancelled'] = 'ChatList.Service.VideoCall.Cancelled';
a0_0x2fb6f0['messageActionPhoneCall.in_ok'] = 'ChatList.Service.Call.incoming';
a0_0x2fb6f0['messageActionPhoneCall.out_ok'] = 'ChatList.Service.Call.outgoing';
a0_0x2fb6f0['messageActionPhoneCall.missed'] = 'ChatList.Service.Call.Missed';
a0_0x2fb6f0['messageActionPhoneCall.cancelled'] = 'ChatList.Service.Call.Cancelled';
a0_0x2fb6f0['messageActionGroupCall.started'] = 'Chat.Service.VoiceChatStarted.Channel';
a0_0x2fb6f0['messageActionGroupCall.started_by'] = 'Chat.Service.VoiceChatStarted';
a0_0x2fb6f0['messageActionGroupCall.started_byYou'] = 'Chat.Service.VoiceChatStartedYou';
a0_0x2fb6f0['messageActionGroupCall.ended'] = 'Chat.Service.VoiceChatFinished.Channel';
a0_0x2fb6f0['messageActionGroupCall.ended_by'] = 'Chat.Service.VoiceChatFinished';
a0_0x2fb6f0['messageActionGroupCall.ended_byYou'] = 'Chat.Service.VoiceChatFinishedYou';
a0_0x2fb6f0.messageActionBotAllowed = 'Chat.Service.BotPermissionAllowed';
;
const Hm = a0_0x2fb6f0, Wm = Re ? 'Message.Unsupported.Mobile' : 'Message.Unsupported.Desktop';
var le;
(_0x6f43f8 => {
    ;
    _0x6f43f8.strings = new Map();
    _0x6f43f8.countriesList = [];
    ;
    let _0x548314, _0x178fb2;
    _0x6f43f8.isRTL = false;
    [_0x6f43f8.langCodeNormalized, _0x6f43f8.setLangCodeNormalized] = ke();
    ;
    function _0x36b5e8(_0x37a6b6) {
        ;
        _0x6f43f8.isRTL = _0x37a6b6;
    }
    _0x6f43f8.setRTL = _0x36b5e8;
    function _0xcad4c9(_0x4be9c0) {
        ;
        _0x6f43f8.lastRequestedLangCode = _0x4be9c0;
        _0x6f43f8.lastRequestedNormalizedLangCode = _0x4be9c0.split('-')[0];
        (0, _0x6f43f8.setLangCodeNormalized)(_0x6f43f8.lastRequestedNormalizedLangCode.split('-')[0]);
        ;
    }
    _0x6f43f8.setLangCode = _0xcad4c9;
    function _0x4e5ea7(_0x20fd14) {
        ;
        return Promise.all([
            rs.get('langPack').then(_0x4f9aec => _0x4f9aec || (_0x20fd14 ? void 0 : _0x45a231())),
            _0x6f43f8.polyfillPromise
        ]).then(([_0x2ce559]) => _0x2ce559);
    }
    _0x6f43f8.getCacheLangPack = _0x4e5ea7;
    function _0x35b3a9() {
        ;
        return _0x178fb2 || (_0x178fb2 = _0x4e5ea7(true).then(async _0x3e467e => (_0x3e467e || (_0x3e467e = await _0x45a231(), _0x3e467e = await _0xba2af2(_0x3e467e, false)), _0x6f43f8.lastRequestedLangCode || _0xcad4c9(_0x3e467e.lang_code), _0x295ceb(_0x3e467e), _0x3e467e)).finally(() => {
            _0x178fb2 = void 0;
        }));
    }
    _0x6f43f8.getCacheLangPackAndApply = _0x35b3a9;
    function _0x4f6709() {
        ;
        if (_0x6f43f8.timeFormat === 'h12') {
            try {
                const _0x168160 = {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                };
                ;
                ;
                ;
                ;
                const _0x530244 = _0x2f15fc(_0x168160), _0x17885a = new Date();
                _0x17885a.setHours(0);
                const _0x7ee78 = _0x530244.format(_0x17885a);
                _0x6f43f8.amPmCache.am = _0x7ee78.split(/\s/)[1];
                _0x17885a.setHours(12);
                ;
                const _0x3a21be = _0x530244.format(_0x17885a);
                _0x6f43f8.amPmCache.pm = _0x3a21be.split(/\s/)[1];
            } catch {
                const _0x2e6b49 = {
                    am: 'AM',
                    pm: 'PM'
                };
                ;
                ;
                _0x6f43f8.amPmCache = _0x2e6b49;
                ;
            }
        }
    }
    function _0x125e5c(_0x4f8eda, _0x2da96b = !!_0x6f43f8.timeFormat && _0x6f43f8.timeFormat !== _0x4f8eda) {
        ;
        _0x6f43f8.timeFormat = _0x4f8eda;
        _0x4f6709();
        _0x2da96b && (_0x94435a.clear(), Array.from(document.querySelectorAll('.i18n')).forEach(_0xc9440b => {
            const _0x318553 = _0x6f43f8.weakMap.get(_0xc9440b);
            _0x318553 instanceof _0x19c743 && _0x318553.update();
        }));
        ;
    }
    _0x6f43f8.setTimeFormat = _0x125e5c;
    function _0x45a231() {
        const _0x470ab6 = ne.langPackCode;
        return Promise.all([
            ze(() => import('./uyds2x9hgwdc.js'), [], import.meta.url),
            ze(() => import('./m0mbryf27fmi.js'), [], import.meta.url),
            ze(() => import('./4ha5e95dj5b7.js'), [], import.meta.url)
        ]).then(([_0x54d64d, _0x3e071c, _0x444f40]) => {
            const _0x43a866 = [];
            return _0x419ffb(_0x54d64d.default, _0x43a866), _0x419ffb(_0x3e071c.default, _0x43a866), {
                '_': 'langPackDifference',
                'from_version': 0,
                'lang_code': _0x470ab6,
                'strings': _0x43a866,
                'version': ne.langPackVersion,
                'countries': _0x444f40.default,
                'localVersion': ne.langPackLocalVersion
            };
        });
    }
    _0x6f43f8.loadLocalLangPack = _0x45a231;
    function _0x3a369e(_0x4626e6, _0x2a62e7, _0x1f3c3c) {
        ;
        _0x2a62e7 = true;
        const _0x4b6b9c = I.managers;
        return Promise.all([
            _0x4b6b9c.appLangPackManager.getLangPack(_0x4626e6, _0x2a62e7 ? 'web' : ne.langPack, _0x1f3c3c),
            !_0x2a62e7 && _0x4b6b9c.appLangPackManager.getLangPack(_0x4626e6, 'android', _0x1f3c3c),
            ze(() => import('./uyds2x9hgwdc.js'), [], import.meta.url),
            ze(() => import('./m0mbryf27fmi.js'), [], import.meta.url),
            _0x4b6b9c.appLangPackManager.getCountriesList(_0x4626e6, _0x1f3c3c),
            _0x6f43f8.polyfillPromise
        ]);
    }
    _0x6f43f8.loadLangPack = _0x3a369e;
    function _0x54b96f(_0x44fa37, _0x184d05) {
        ;
        return I.managers.appLangPackManager.getStrings(_0x44fa37, _0x184d05);
    }
    _0x6f43f8.getStrings = _0x54b96f;
    function _0x419ffb(_0x424e33, _0x488fc5 = []) {
        ;
        for (const _0x42bf8b in _0x424e33) {
            const _0x1fc266 = _0x424e33[_0x42bf8b];
            typeof _0x1fc266 == 'string' ? _0x488fc5.push({
                '_': 'langPackString',
                'key': _0x42bf8b,
                'value': _0x1fc266
            }) : _0x488fc5.push({
                '_': 'langPackStringPluralized',
                'key': _0x42bf8b,
                ..._0x1fc266
            });
        }
        return _0x488fc5;
    }
    _0x6f43f8.formatLocalStrings = _0x419ffb;
    function _0x34a54f(_0x4e9218, _0x303edd, _0x18262b) {
        ;
        return _0xcad4c9(_0x4e9218), _0x3a369e(_0x4e9218, _0x303edd, _0x18262b).then(([_0x265328, _0x3f2373, _0x23fc35, _0x326779, _0x2d4a6a, _0x30bcd1]) => {
            ;
            let _0x4a829a = [];
            return [
                _0x23fc35,
                _0x326779
            ].forEach(_0x4b8377 => {
                ;
                _0x419ffb(_0x4b8377.default, _0x4a829a);
            }), _0x4a829a = _0x4a829a.concat(...[
                _0x265328.strings,
                _0x3f2373.strings
            ].filter(Boolean)), _0x265328.strings = _0x4a829a, _0x265328.countries = _0x2d4a6a, _0x265328.localVersion = ne.langPackLocalVersion, _0xba2af2(_0x265328, true);
        });
    }
    _0x6f43f8.getLangPackAndApply = _0x34a54f;
    function _0xba2af2(_0x55edc2, _0x1c6ad9) {
        ;
        return _0x55edc2.version || (_0x55edc2.version = ne.langPackVersion), _0x1c6ad9 ? rs.set({ 'langPack': _0x55edc2 }).then(() => (_0x295ceb(_0x55edc2), _0x55edc2)) : _0x55edc2;
    }
    _0x6f43f8.saveLangPack = _0xba2af2;
    _0x6f43f8.polyfillPromise = (function () {
        ;
        return typeof Intl < 'u' && typeof Intl.PluralRules < 'u' ? Promise.resolve() : ze(() => import('./qidpturs2fw8.js'), [], import.meta.url).then(_0x598c9b => {
            ;
            window.Intl = Object.assign(typeof Intl < 'u' ? Intl : {}, _0x598c9b.default);
        });
    }());
    ;
    function _0x295ceb(_0x45e0fd) {
        ;
        const _0x24b848 = _0x6f43f8.lastRequestedLangCode;
        if (_0x45e0fd.lang_code !== _0x24b848) {
            return;
        }
        try {
            _0x548314 = new Intl.PluralRules(_0x6f43f8.lastRequestedNormalizedLangCode);
        } catch {
            _0x548314 = new Intl.PluralRules(_0x6f43f8.lastRequestedNormalizedLangCode.split('-', 1)[0]);
        }
        try {
            _0x548314 = new Intl.PluralRules(_0x45e0fd.lang_code);
        } catch {
            _0x548314 = new Intl.PluralRules(_0x45e0fd.lang_code.split('-', 1)[0]);
        }
        _0x6f43f8.strings.clear();
        for (const _0x4d7ca7 of _0x45e0fd.strings)
            _0x6f43f8.strings.set(_0x4d7ca7.key, _0x4d7ca7);
        _0x45e0fd.countries && (_0x6f43f8.countriesList.length = 0, _0x6f43f8.countriesList.push(..._0x45e0fd.countries.countries), _0x45e0fd.countries.countries.forEach(_0x5f1e95 => {
            ;
            if (_0x5f1e95.name) {
                const _0x14d2cc = _0x5f1e95.default_name;
                _0x6f43f8.strings.set(_0x14d2cc, {
                    '_': 'langPackString',
                    'key': _0x14d2cc,
                    'value': _0x5f1e95.name
                });
            }
        }));
        if (_0x6f43f8.lastAppliedLangCode !== _0x24b848) {
            _0x6f43f8.lastAppliedLangCode && I.myId && (I.managers.appReactionsManager.resetAvailableReactions(), I.managers.appUsersManager.indexMyself(), I.managers.dialogsStorage.indexMyDialog());
            _0x6f43f8.lastAppliedLangCode = _0x24b848;
            _0x94435a.clear();
            _0x4f6709();
            I.dispatchEvent('language_change', _0x24b848);
        }
        Array.from(document.querySelectorAll('.i18n')).forEach(_0x447283 => {
            const _0x331fa7 = _0x6f43f8.weakMap.get(_0x447283);
            _0x331fa7 && _0x331fa7.update();
        });
        I.dispatchEventSingle('language_apply');
        ;
    }
    _0x6f43f8.applyLangPack = _0x295ceb;
    function _0x13dafe(_0x34543c, _0x4d5066, _0x132fb2, _0x413c9c) {
        const _0x30155a = _0x4d5066[_0x413c9c === void 0 ? _0x132fb2.i++ : _0x413c9c];
        Array.isArray(_0x30155a) ? _0x34543c.push(..._0x30155a) : _0x34543c.push(_0x30155a);
    }
    function _0x6568f6(_0x20e058, _0x57d632, _0x4276cf) {
        ;
        if (!_0x4276cf) {
            const _0xa053dc = { i: 0 };
            ;
            _0x4276cf = _0xa053dc;
            ;
            const _0x126ce3 = _0x20e058.match(/(%|un)\d+/g);
            _0x126ce3?.length && (_0x4276cf.i = Math.max(..._0x126ce3.map(_0x1f51fc => +_0x1f51fc.replace(/\D/g, ''))));
        }
        const _0xf0b71d = [];
        let _0x78135 = 0;
        return _0x20e058.replace(/(\*\*|__)(.+?)\1|(\n)|(\[.+?\]\(.*?\))|un\d|%\d\$.|%\S/g, (_0x1de200, _0xc27a4, _0x2d4af3, _0x11ae2f, _0x29b962, _0x3c62ca, _0x4eed77) => {
            ;
            if (_0x3c62ca > _0x78135 && _0xf0b71d.push(_0x4eed77.slice(_0x78135, _0x3c62ca)), _0xc27a4) {
                let _0x4f647c;
                switch (_0xc27a4) {
                case '**': {
                        _0x4f647c = document.createElement('b');
                        break;
                    }
                case '__': {
                        _0x4f647c = document.createElement('i');
                        break;
                    }
                }
                _0x4f647c.append(..._0x6568f6(_0x2d4af3, _0x57d632, _0x4276cf));
                _0xf0b71d.push(_0x4f647c);
                ;
            } else {
                if (_0x11ae2f) {
                    _0xf0b71d.push(document.createElement('br'));
                } else {
                    if (_0x29b962) {
                        const _0x3d919a = _0x29b962.lastIndexOf(']'), _0x4160cc = _0x29b962.slice(1, _0x3d919a), _0x5457e0 = _0x29b962.slice(_0x3d919a + 2, _0x29b962.length - 1);
                        let _0x14d65c;
                        if (_0x5457e0 && ji(_0x5457e0)) {
                            _0x14d65c = document.createElement('a');
                            const _0x1e20c2 = on(_0x5457e0);
                            _0x14d65c.href = _0x1e20c2.url;
                            _0x1e20c2.onclick && _0x14d65c.setAttribute('onclick', _0x1e20c2.onclick + '(this)');
                            Sf(_0x14d65c);
                            ;
                        } else {
                            _0x14d65c = _0x57d632[_0x4276cf.i++];
                            _0x14d65c instanceof DocumentFragment && (_0x14d65c = _0x14d65c.firstChild);
                            typeof _0x14d65c != 'string' && (_0x14d65c.textContent = '');
                            ;
                        }
                        const _0x460c94 = _0x6568f6(_0x4160cc, _0x57d632, _0x4276cf);
                        typeof _0x14d65c == 'string' ? _0xf0b71d.push(..._0x460c94) : (_0x14d65c.append(..._0x460c94), _0xf0b71d.push(_0x14d65c));
                    } else {
                        if (_0x57d632) {
                            const _0x150024 = _0x1de200.replace(/\D/g, '');
                            _0x13dafe(_0xf0b71d, _0x57d632, _0x4276cf, !_0x150024 || Number.isNaN(+_0x150024) ? void 0 : Math.min(_0x57d632.length - 1, +_0x150024 - 1));
                        }
                    }
                }
            }
            return _0x78135 = _0x3c62ca + _0x1de200.length, '';
        }), _0x78135 !== _0x20e058.length && _0xf0b71d.push(_0x20e058.slice(_0x78135)), _0xf0b71d;
    }
    _0x6f43f8.superFormatter = _0x6568f6;
    function _0x4c0dab(_0x5e74e0, _0x1059c8 = false, _0x43d09c) {
        const _0x425752 = _0x6f43f8.strings.get(_0x5e74e0);
        let _0x164897;
        if (_0x425752) {
            if (_0x425752['_'] === 'langPackStringPluralized' && _0x43d09c?.length) {
                let _0x3cd2b1 = _0x43d09c[0];
                typeof _0x3cd2b1 == 'string' && (_0x3cd2b1 = +_0x3cd2b1.replace(/\D/g, ''));
                const _0x4b47d8 = _0x548314.select(_0x3cd2b1);
                _0x164897 = _0x425752[_0x4b47d8 + '_value'] || _0x425752.other_value;
            } else {
                _0x425752['_'] === 'langPackString' ? _0x164897 = _0x425752.value : _0x164897 = _0x5e74e0;
            }
        } else {
            _0x164897 = _0x5e74e0;
        }
        const _0x5548f7 = _0x6568f6(_0x164897, _0x43d09c);
        return _0x1059c8 ? _0x5548f7.map(_0x871baa => _0x871baa instanceof Node ? _0x871baa.textContent : _0x871baa).join('') : _0x5548f7;
    }
    _0x6f43f8.format = _0x4c0dab;
    _0x6f43f8.weakMap = new WeakMap();
    ;
    class _0x1b08b5 {
        constructor(_0x52ab89) {
            ;
            this.element = _0x52ab89?.element || document.createElement('span');
            this.element.classList.add('i18n');
            this.property = _0x52ab89?.property;
            _0x6f43f8.weakMap.set(this.element, this);
            ;
        }
    }
    class _0x3ac8b2 extends _0x1b08b5 {
        constructor(_0x74039f = {}) {
            ;
            super({
                ..._0x74039f,
                'property': _0x74039f.property ?? 'innerHTML'
            });
            _0x74039f?.key && this.update(_0x74039f);
            ;
        }
        ['update'](_0x26f54a) {
            ;
            if (Hn(this, _0x26f54a), !this.key) {
                this.element.replaceChildren();
                return;
            }
            if (this.property === 'innerHTML') {
                this.element.replaceChildren(..._0x4c0dab(this.key, false, this.args));
                this.args?.length && this.element.normalize();
                ;
            } else {
                const _0x293437 = this.element[this.property], _0x319872 = _0x4c0dab(this.key, true, this.args);
                _0x293437 === void 0 ? this.element.dataset[this.property] = _0x319872 : this.element[this.property] = _0x319872;
            }
        }
        ['compareAndUpdateBool'](_0x515aee) {
            ;
            return this.key === _0x515aee.key && Rf(this.args, _0x515aee.args) ? false : (this.update(_0x515aee), true);
        }
        ['compareAndUpdate'](_0x2bd085) {
            ;
            if (!(this.key === _0x2bd085.key && Rf(this.args, _0x2bd085.args))) {
                return this.update(_0x2bd085);
            }
        }
    }
    _0x6f43f8.IntlElement = _0x3ac8b2;
    const _0x94435a = new Map();
    function _0x2f15fc(_0x368c6d = {}) {
        const _0x25fd68 = JSON.stringify(_0x368c6d);
        let _0xf61545 = _0x94435a.get(_0x25fd68);
        return _0xf61545 || (_0xf61545 = new Intl.DateTimeFormat(_0x6f43f8.lastRequestedNormalizedLangCode + '-u-hc-' + _0x6f43f8.timeFormat, _0x368c6d), _0x94435a.set(_0x25fd68, _0xf61545)), _0xf61545;
    }
    const _0x1fc95a = {
        am: 'AM',
        pm: 'PM'
    };
    ;
    ;
    _0x6f43f8.getDateTimeFormat = _0x2f15fc;
    _0x6f43f8.amPmCache = _0x1fc95a;
    ;
    ;
    class _0x19c743 extends _0x1b08b5 {
        constructor(_0x17b02d) {
            ;
            super({
                ..._0x17b02d,
                'property': _0x17b02d.property ?? 'textContent'
            });
            tf(this.element);
            _0x17b02d?.date && this.update(_0x17b02d);
            ;
        }
        ['update'](_0x1e2311) {
            ;
            Hn(this, _0x1e2311);
            let _0x4c6ef1;
            if (this.options.hour && this.options.minute && Object.keys(this.options).length === 2) {
                const _0x22b1da = this.date.getHours();
                _0x4c6ef1 = ('0' + (_0x6f43f8.timeFormat === 'h12' ? _0x22b1da % 12 || 12 : _0x22b1da)).slice(-2) + ':' + ('0' + this.date.getMinutes()).slice(-2);
                _0x6f43f8.timeFormat === 'h12' && (_0x4c6ef1 += ' ' + (_0x22b1da < 12 ? _0x6f43f8.amPmCache.am : _0x6f43f8.amPmCache.pm));
                ;
            } else {
                const _0x5a5c43 = _0x2f15fc(this.options);
                _0x4c6ef1 = an(_0x5a5c43.format(this.date));
            }
            this.element[this.property] = _0x4c6ef1;
        }
    }
    _0x6f43f8.IntlDateElement = _0x19c743;
    function _0xac327e(_0x2cb61d, _0x154913) {
        const _0x10dd8a = {};
        return _0x10dd8a.key = _0x2cb61d, _0x10dd8a.args = _0x154913, new _0x3ac8b2(_0x10dd8a).element;
    }
    _0x6f43f8.i18n = _0xac327e;
    function _0x1a9327(_0x162a77) {
        ;
        return new _0x3ac8b2(_0x162a77).element;
    }
    _0x6f43f8.i18n_ = _0x1a9327;
    function _0x4de18c(_0x3767a8, _0x1c701d, _0x1412cb, _0x14e289) {
        const _0x3b24e2 = {};
        return _0x3b24e2.element = _0x3767a8, _0x3b24e2.key = _0x1c701d, _0x3b24e2.args = _0x1412cb, _0x3b24e2.property = _0x14e289, new _0x3ac8b2(_0x3b24e2).element;
    }
    _0x6f43f8['_i18n'] = _0x4de18c;
})(le || (le = {}));
const ue = le, X = le.i18n, Vm = le.i18n_, Gi = le['_i18n'];
function id(_0x4fbb13, _0x3b967d) {
    const _0x313907 = _0x4fbb13.slice(0, 1);
    for (let _0x55374b = 1; _0x55374b < _0x4fbb13.length; ++_0x55374b) {
        const _0x945d0c = _0x4fbb13.length - 1 === _0x55374b;
        _0x313907.push(typeof _0x3b967d == 'function' ? _0x3b967d(_0x945d0c) : _0x3b967d);
        _0x313907.push(_0x4fbb13[_0x55374b]);
        ;
    }
    return _0x313907;
}
function zm(_0xcd1f4b, _0x13cdb1 = true, _0xc129a9) {
    const _0x3d78b9 = id(_0xcd1f4b, _0x4736e8 => {
        const _0x83dca9 = _0x4736e8 && _0x13cdb1 ? 'AutoDownloadSettings.LastDelimeter' : 'AutoDownloadSettings.Delimeter';
        return _0xc129a9 ? le.format(_0x83dca9, true) : X(_0x83dca9);
    });
    return _0xc129a9 ? _0x3d78b9.join('') : _0x3d78b9;
}
async function mo(_0x1a6b6d) {
    const {difference: _0x1f22b6} = _0x1a6b6d;
    if (_0x1f22b6.lang_code !== le.lastRequestedLangCode) {
        return;
    }
    const _0x99cae = await le.getCacheLangPack();
    if (!(_0x99cae?.lang_code !== _0x1f22b6.lang_code || _0x99cae.lang_code !== le.lastRequestedLangCode)) {
        if (_0x99cae.version !== _0x1f22b6.from_version) {
            qi(_0x1f22b6);
            return;
        }
        if (_0x1f22b6.strings) {
            const _0xa929f5 = _0x99cae.strings || (_0x99cae.strings = []);
            for (const _0x1dc953 of _0x1f22b6.strings) {
                const _0x1396a6 = _0xa929f5.findIndex(_0x4c3657 => _0x4c3657.key === _0x1dc953.key);
                _0x1396a6 !== -1 ? _0xa929f5[_0x1396a6] = _0x1dc953 : _0xa929f5.push(_0x1dc953);
            }
        }
        _0x99cae.version = _0x1f22b6.version;
        _0x99cae.from_version = _0x1f22b6.from_version;
        await le.saveLangPack(_0x99cae, true);
        ;
    }
}
function qi(_0x46aef8) {
    const {lang_code: _0x43ddab} = _0x46aef8;
    _0x43ddab === le.lastRequestedLangCode && ad();
}
function rd() {
    const _0x171456 = { lang_code: le.lastRequestedLangCode };
    ;
    qi(_0x171456);
    ;
}
async function ad() {
    const _0x153a2e = await le.getCacheLangPack(), _0x5cbc46 = await I.managers.appLangPackManager.getDifference(_0x153a2e.lang_code, _0x153a2e.version);
    if (_0x5cbc46.version > _0x153a2e.version) {
        return mo({ 'difference': _0x5cbc46 });
    }
}
I.addEventListener('langpack_update', mo);
I.addEventListener('langpack_update_too_long', qi);
I.addEventListener('state_cleared', rd);
N && (N.I18n = le);
;
function od(_0x328194) {
    return +_0x328194 < 0;
}
function cd(_0x3aeeed) {
    return +_0x3aeeed >= 0;
}
String.prototype.toUserId = function () {
    ;
    return (+this).toUserId();
};
String.prototype.toChatId = function () {
    ;
    return (+this).toChatId();
};
String.prototype.toPeerId = function (_0x4c0243) {
    ;
    return (+this).toPeerId(_0x4c0243);
};
String.prototype.isPeerId = function () {
    ;
    return /^[\d-]/.test(this.toString());
};
Number.prototype.toUserId = function () {
    return +this;
};
Number.prototype.toChatId = function () {
    ;
    return Math.abs(this);
};
Number.prototype.toPeerId = function (_0xc4c563) {
    ;
    return _0xc4c563 === void 0 ? +this : _0xc4c563 ? -Math.abs(this) : +this;
};
Number.prototype.isPeerId = function () {
    return true;
};
[
    [
        'isUser',
        cd
    ],
    [
        'isAnyChat',
        od
    ]
].forEach(_0xfabe81 => {
    const _0x28e495 = Array.isArray(_0xfabe81) ? _0xfabe81[0] : _0xfabe81, _0x16243b = Array.isArray(_0xfabe81) ? _0xfabe81[1] : _0xfabe81;
    String.prototype[_0x28e495] = function () {
        ;
        return _0x16243b.call(null, this.toString());
    };
    Number.prototype[_0x28e495] = function () {
        ;
        return _0x16243b.call(null, +this);
    };
    ;
});
;
function dd(..._0x14db26) {
    const _0x488a9d = _0x14db26.reduce((_0x1229f2, _0x41d354) => _0x1229f2 + (_0x41d354.byteLength || _0x41d354.length), 0), _0x3720b9 = new Uint8Array(_0x488a9d);
    let _0x17bdc7 = 0;
    return _0x14db26.forEach(_0x39003a => {
        ;
        _0x3720b9.set(_0x39003a instanceof ArrayBuffer ? new Uint8Array(_0x39003a) : _0x39003a, _0x17bdc7);
        _0x17bdc7 += _0x39003a.byteLength || _0x39003a.length;
        ;
    }), _0x3720b9;
}
Uint8Array.prototype.concat = function (..._0x294ad6) {
    return dd(this, ..._0x294ad6);
};
Uint8Array.prototype.toJSON = function () {
    return [...this];
};
Promise.prototype.finally = Promise.prototype.finally || function (_0xaaa699) {
    const _0x14f995 = _0x1b4555 => Promise.resolve(_0xaaa699()).then(_0x1b4555);
    return this.then(_0x1f184d => _0x14f995(() => _0x1f184d), _0x48a54e => _0x14f995(() => Promise.reject(_0x48a54e)));
};
;
class ld {
    constructor() {
        ;
        this.convertPromises = {};
    }
    ['init']() {
        const _0x13fc5b = { type: 'module' };
        ;
        this.worker = new Worker(new URL('' + new URL('5uqzrfv6gpns.js', import.meta.url).href, import.meta.url), _0x13fc5b);
        this.worker.addEventListener('message', _0x5093bc => {
            const _0x5da4cc = _0x5093bc.data.payload, _0x516168 = this.convertPromises[_0x5da4cc.fileName];
            _0x516168 && (_0x5da4cc.bytes ? _0x516168.resolve(_0x5da4cc.bytes) : _0x516168.reject(), delete this.convertPromises[_0x5da4cc.fileName]);
        });
        ;
        ;
    }
    ['postMessage'](_0x2dc6c0) {
        ;
        this.init && (this.init(), this.init = null);
        this.worker.postMessage(_0x2dc6c0);
        ;
    }
    ['convert'](_0x57cfa3, _0x63453c) {
        ;
        if (this.convertPromises.hasOwnProperty(_0x57cfa3)) {
            return this.convertPromises[_0x57cfa3];
        }
        const _0x524794 = q(), _0x3bad96 = {
                fileName: _0x57cfa3,
                bytes: _0x63453c
            };
        ;
        ;
        ;
        const _0x1afd09 = {};
        return _0x1afd09.type = 'convertWebp', _0x1afd09.payload = _0x3bad96, (this.postMessage(_0x1afd09), this.convertPromises[_0x57cfa3] = _0x524794);
    }
}
const $i = new ld();
N.webpWorkerController = $i;
class ud {
    constructor() {
        ;
        this.prefix = '';
        this.cache = {};
        this.useStorage = true;
        ;
    }
    ['get'](_0x40f85a, _0x1d3192 = true) {
        ;
        if (this.cache.hasOwnProperty(_0x40f85a) && _0x1d3192) {
            return this.cache[_0x40f85a];
        }
        if (this.useStorage) {
            let _0x3adce2;
            try {
                _0x3adce2 = localStorage.getItem(this.prefix + _0x40f85a);
            } catch {
                throw this.useStorage = false, Ee('STORAGE_OFFLINE');
            }
            if (_0x3adce2 !== null) {
                try {
                    _0x3adce2 = JSON.parse(_0x3adce2);
                } catch {
                }
            } else {
                _0x3adce2 = void 0;
            }
            return _0x3adce2;
        } else {
            throw Ee('STORAGE_OFFLINE');
        }
    }
    ['set'](_0x53aa91, _0x1ae977 = false) {
        ;
        let _0x242ddd;
        for (const _0x49c0c1 in _0x53aa91)
            if (_0x53aa91.hasOwnProperty(_0x49c0c1)) {
                const _0x1191c8 = _0x53aa91[_0x49c0c1];
                if (this.cache[_0x49c0c1] = _0x1191c8, !_0x1ae977) {
                    try {
                        if (!this.useStorage) {
                            throw Ee('STORAGE_OFFLINE');
                        }
                        const _0x3452dc = JSON.stringify(_0x1191c8);
                        localStorage.setItem(this.prefix + _0x49c0c1, _0x3452dc);
                    } catch (_0x310009) {
                        this.useStorage = false;
                        _0x242ddd = _0x310009;
                        ;
                    }
                }
            }
        if (_0x242ddd) {
            throw _0x242ddd;
        }
    }
    ['delete'](_0x2237d6, _0x544a15 = false) {
        ;
        _0x2237d6 = '' + _0x2237d6;
        _0x544a15 || delete this.cache[_0x2237d6];
        ;
        try {
            localStorage.removeItem(this.prefix + _0x2237d6);
        } catch {
        }
    }
    ['clear'](_0x2525c3 = []) {
        ;
        try {
            const _0x1fde28 = {};
            _0x2525c3?.length && _0x2525c3.forEach(_0x3b70d7 => {
                const _0xb7d446 = this.get(_0x3b70d7);
                _0xb7d446 !== void 0 && (_0x1fde28[_0x3b70d7] = _0xb7d446);
            });
            localStorage.clear();
            _0x2525c3?.length && this.set(_0x1fde28);
            ;
        } catch {
        }
    }
    ['toggleStorage'](_0x228b11, _0xeabd5c) {
        ;
        if (this.useStorage = _0x228b11, !!_0xeabd5c && _0x228b11) {
            return this.set(this.cache);
        }
    }
}
const We = class We {
    constructor(_0x382c7f = []) {
        ;
        this.log = Q('[local-storage-controller]');
        We.STORAGES.push(this);
        this.encryptableKeys = new Set(_0x382c7f);
        bt || (this.storage = new ud());
        ;
    }
    async ['getEncryptedStorage']() {
        ;
        return this.encryptedStorage ? this.encryptedStorage : (this.encryptedStorage = Le.getInstance(We.ENCRYPTION_DB, We.ENCRYPTION_DB_STORE_NAME), this.encryptedStorage.loadEncrypted(), this.encryptedStorage);
    }
    async ['shouldUseEncryptableStorage'](_0x1caa05) {
        ;
        return this.encryptableKeys.has(_0x1caa05) === false ? false : Me.isUsingPasscode();
    }
    async ['localStorageProxy'](_0x3f721f, ..._0x4a5883) {
        const _0x238a74 = {};
        return _0x238a74.type = _0x3f721f, _0x238a74.args = _0x4a5883, bt ? ns.getInstance().invoke('localStorageProxy', _0x238a74) : (_0x4a5883 = Array.prototype.slice.call(_0x4a5883), this.storage[_0x3f721f].apply(this.storage, _0x4a5883));
    }
    async ['encryptedStorageProxy'](_0x4976b5, ..._0x957e4e) {
        ;
        return bt ? (await this.getEncryptedStorage())[_0x4976b5](..._0x957e4e) : ns.getInstance().invoke('localStorageEncryptedProxy', {
            'type': _0x4976b5,
            'args': _0x957e4e
        });
    }
    async ['waitEncryptionToFinish']() {
        ;
        this.encryptionDeferred && await this.encryptionDeferred;
    }
    async ['get'](_0x374001, _0x17d854) {
        ;
        return await this.waitEncryptionToFinish(), await this.shouldUseEncryptableStorage(_0x374001) ? (await this.encryptedStorageProxy('get', [_0x374001]))[0] : this.localStorageProxy('get', _0x374001, _0x17d854);
    }
    async ['set'](_0x97abbc) {
        ;
        await this.waitEncryptionToFinish();
        _0x97abbc = { ..._0x97abbc };
        ;
        const _0x437596 = Object.keys(_0x97abbc).filter(_0x24b4ef => this.encryptableKeys.has(_0x24b4ef));
        if (_0x437596.length && await this.shouldUseEncryptableStorage(_0x437596[0])) {
            const _0x2f8313 = _0x437596.map(_0x555670 => _0x97abbc[_0x555670]);
            await this.encryptedStorageProxy('save', _0x437596, _0x2f8313);
            _0x437596.forEach(_0x2edb54 => {
                delete _0x97abbc[_0x2edb54];
            });
            ;
        }
        if (Object.keys(_0x97abbc).length) {
            return this.localStorageProxy('set', _0x97abbc);
        }
    }
    async ['delete'](_0x282dd4) {
        ;
        return await this.waitEncryptionToFinish(), await this.shouldUseEncryptableStorage(_0x282dd4) ? this.encryptedStorageProxy('delete', _0x282dd4) : this.localStorageProxy('delete', _0x282dd4);
    }
    ['toggleStorage'](_0x6c5dcd, _0xadf9a3) {
        ;
        return this.localStorageProxy('toggleStorage', _0x6c5dcd, _0xadf9a3);
    }
    ['warnAboutEncrypting'](_0x5763c5) {
        ;
        return bt ? false : (this.log.warn(_0x5763c5 + ' should not be called in a window client, call it only in the MTProto worker'), true);
    }
    async ['encryptEncryptable']() {
        ;
        if (this.warnAboutEncrypting('encryptEncryptable')) {
            return;
        }
        this.encryptionDeferred = q();
        const _0x84906d = Array.from(this.encryptableKeys.values()), _0x2806be = await Promise.all(_0x84906d.map(_0x3b3565 => this.localStorageProxy('get', _0x3b3565))), _0x470e21 = _0x84906d.map((_0xa65af2, _0x36baa5) => [
                _0xa65af2,
                _0x2806be[_0x36baa5]
            ]).filter(_0x177196 => _0x177196[1]), _0x2cdb33 = Object.fromEntries(_0x470e21);
        this.encryptedStorage = Le.getInstance(We.ENCRYPTION_DB, We.ENCRYPTION_DB_STORE_NAME);
        await this.encryptedStorage.loadDecrypted(_0x2cdb33);
        await Promise.all(_0x470e21.map(([_0x209203]) => this.localStorageProxy('set', _0x209203, true)));
        await Promise.all(_0x470e21.map(([_0x2e4df3]) => this.localStorageProxy('delete', _0x2e4df3)));
        this.encryptionDeferred?.resolve();
        this.encryptionDeferred = void 0;
        ;
    }
    async ['reEncryptEncryptable']() {
        ;
        if (this.warnAboutEncrypting('reEncryptEncryptable')) {
            return;
        }
        this.encryptionDeferred = q();
        await (await this.getEncryptedStorage()).reEncrypt();
        this.encryptionDeferred?.resolve();
        this.encryptionDeferred = void 0;
        ;
    }
    async ['decryptEncryptable']() {
        ;
        if (this.warnAboutEncrypting('decryptEncryptable')) {
            return;
        }
        this.encryptionDeferred = q();
        const _0x42a5c3 = await this.getEncryptedStorage(), _0x4e6a53 = (await _0x42a5c3.getAllEntries()).filter(_0x3fb4a2 => this.encryptableKeys.has(_0x3fb4a2[0])), _0x59f1ce = Object.fromEntries(_0x4e6a53);
        await this.localStorageProxy('set', _0x59f1ce);
        await _0x42a5c3.clear();
        this.encryptionDeferred?.resolve();
        this.encryptionDeferred = void 0;
        ;
    }
};
We.STORAGES = [];
We.ENCRYPTION_DB = uo();
We.ENCRYPTION_DB_STORE_NAME = 'localStorage__encrypted';
;
let qn = We;
const j = new qn([
    'account1',
    'account2',
    'account3',
    'account4',
    'auth_key_fingerprint',
    'user_auth',
    'dc'
]);
N.appStorage = j;
function se(_0x1e7b42) {
    ;
    if (_0x1e7b42 || (_0x1e7b42 = window.event), _0x1e7b42) {
        _0x1e7b42 = _0x1e7b42.originalEvent || _0x1e7b42;
        try {
            _0x1e7b42.stopPropagation && _0x1e7b42.stopPropagation();
            _0x1e7b42.preventDefault && _0x1e7b42.preventDefault();
            _0x1e7b42.returnValue = false;
            _0x1e7b42.cancelBubble = true;
            ;
        } catch {
        }
    }
    return false;
}
function hd(_0x3d0841) {
    ;
    return bs && _0x3d0841 instanceof TouchEvent && _0x3d0841.touches[0].clientX < 30;
}
const kt = 'navigation' in window;
class md {
    constructor() {
        ;
        if (this.escapeHandlers = [], this.onPopState = _0x3782ec => {
                ;
                this['_onPopState'](window.location.hash, _0x3782ec.state);
            }, this.onKeyDown = _0x31a33d => {
                const _0x276aff = this.navigations[this.navigations.length - 1];
                _0x276aff && _0x31a33d.key === 'Escape' && this.canCloseOnEscape() && (!_0x276aff.onEscape || _0x276aff.onEscape()) && (se(_0x31a33d), this.back(_0x276aff.type));
            }, this.onTouchStart = _0x3620f7 => {
                const _0x24378a = {
                    passive: true,
                    once: true
                };
                ;
                ;
                if (_0x3620f7.touches.length > 1) {
                    this.debug && this.log('touchstart');
                    hd(_0x3620f7) && (this.isPossibleSwipe = true, window.addEventListener('touchend', () => {
                        setTimeout(() => {
                            ;
                            this.isPossibleSwipe = false;
                        }, 100);
                    }, _0x24378a));
                }
                ;
            }, this.navigations = [], this.id = Date.now(), this.manual = false, this.log = Q('NC'), this.debug = true, this.currentHash = window.location.hash, this.overriddenHash = '', this.isPossibleSwipe = false, kt) {
            this.debug && this.log('push');
            const _0x536f2f = location.origin + location.pathname + location.search + location.hash;
            history.pushState(this.id, '', _0x536f2f);
        }
        const _0x452357 = {
            capture: true,
            passive: false
        };
        ;
        ;
        ;
        if (kt && navigation.addEventListener('navigate', _0x21385e => {
                ;
                if (_0x21385e.navigationType === 'reload' || _0x21385e.navigationType === 'replace' || !_0x21385e.destination.sameDocument) {
                    return;
                }
                this.debug && this.log('navigate', _0x21385e);
                se(_0x21385e);
                ;
                const _0x5909cc = new URL(_0x21385e.destination.url);
                this['_onPopState'](_0x5909cc.hash, 0);
            }), kt || window.addEventListener('popstate', this.onPopState), window.addEventListener('keydown', this.onKeyDown, _0x452357), bs) {
            const _0x568cec = { passive: true };
            ;
            const _0x123750 = _0x568cec;
            window.addEventListener('touchstart', this.onTouchStart, _0x123750);
        }
        history.scrollRestoration = 'manual';
        kt || this.pushState();
        ;
    }
    ['_onPopState'](_0x1ccd56, _0x409105) {
        ;
        if (this.debug && this.log('popstate', this.isPossibleSwipe, _0x1ccd56, _0x409105), _0x1ccd56 !== this.currentHash) {
            if (this.debug && this.log.warn('hash changed, new=' + _0x1ccd56 + ', current=' + this.currentHash + ', overridden=' + this.overriddenHash), (kt || _0x409105 === this.id) && this.overriddenHash && this.overriddenHash !== _0x1ccd56) {
                this.overrideHash(this.overriddenHash);
            } else {
                if (_0x409105 && !this.overriddenHash && _0x1ccd56) {
                    this.overrideHash();
                } else {
                    this.currentHash = _0x1ccd56;
                    this.onHashChange && this.onHashChange();
                    ;
                    return;
                }
            }
        }
        if (!kt && _0x409105 !== this.id && (this.pushState(), !this.navigations.length)) {
            return;
        }
        const _0xde8b7e = this.navigations.pop();
        if (!_0xde8b7e) {
            this.pushState();
            return;
        }
        this.manual = !this.isPossibleSwipe;
        this.handleItem(_0xde8b7e, this.navigations.length);
        ;
    }
    ['overrideHash'](_0x8a908c = '') {
        ;
        _0x8a908c && _0x8a908c[0] !== '#' ? _0x8a908c = '#' + _0x8a908c : _0x8a908c === '#' && (_0x8a908c = '');
        if (this.currentHash !== _0x8a908c) {
            this.overriddenHash = this.currentHash = _0x8a908c;
            this.replaceState();
            this.pushState();
        }
        ;
    }
    ['handleItem'](_0x15fa8d, _0x554478 = this.navigations.indexOf(_0x15fa8d)) {
        const _0xcdfca = _0x15fa8d.onPop(this.manual ? void 0 : false);
        this.debug && this.log('popstate, navigation:', _0x15fa8d, this.navigations);
        _0xcdfca === false ? this.spliceItems(Math.min(this.navigations.length, _0x554478), 0, _0x15fa8d) : _0x15fa8d.noBlurOnPop || ja();
        this.manual = false;
        ;
    }
    ['findItemByType'](_0x25a386) {
        ;
        for (let _0x447cb7 = this.navigations.length - 1; _0x447cb7 >= 0; --_0x447cb7) {
            const _0xb6cbe5 = this.navigations[_0x447cb7];
            if (_0xb6cbe5.type === _0x25a386) {
                return {
                    'item': _0xb6cbe5,
                    'index': _0x447cb7
                };
            }
        }
    }
    ['back'](_0x128f39) {
        ;
        if (_0x128f39) {
            const _0x436556 = this.findItemByType(_0x128f39);
            if (_0x436556) {
                this.backByItem(_0x436556.item, _0x436556.index);
                return;
            }
        }
        history.back();
    }
    ['backByItem'](_0x383861, _0x22294b = this.navigations.indexOf(_0x383861)) {
        ;
        if (_0x22294b !== -1) {
            this.manual = true;
            this.navigations.splice(_0x22294b, 1);
            this.handleItem(_0x383861, _0x22294b);
        }
    }
    ['onItemAdded'](_0x3a85d5) {
        ;
        this.debug && this.log('onItemAdded', _0x3a85d5, this.navigations);
        _0x3a85d5.noHistory || this.pushState();
        ;
    }
    ['pushItem'](_0xf2c1b0) {
        ;
        this.navigations.push(_0xf2c1b0);
        this.onItemAdded(_0xf2c1b0);
        ;
    }
    ['unshiftItem'](_0x3aec55) {
        ;
        this.navigations.unshift(_0x3aec55);
        this.onItemAdded(_0x3aec55);
        ;
    }
    ['spliceItems'](_0x50bb77, _0xa52ee7, ..._0x184814) {
        ;
        this.navigations.splice(_0x50bb77, _0xa52ee7, ..._0x184814);
        _0x184814.forEach(_0x1b13e0 => {
            ;
            this.onItemAdded(_0x1b13e0);
        });
        ;
    }
    ['pushState']() {
        ;
        this.debug && this.log('push');
        this.manual = false;
        kt ? history.replaceState(this.id, '') : history.pushState(this.id, '');
        ;
    }
    ['replaceState']() {
        ;
        this.debug && this.log.warn('replace');
        const _0xfadb7f = location.origin + location.pathname + location.search + this.overriddenHash;
        history.replaceState(this.id, '', _0xfadb7f);
    }
    ['removeItem'](_0xdc8bd7) {
        ;
        _0xdc8bd7 && xe(this.navigations, _0xdc8bd7);
    }
    ['removeByType'](_0x1f444f, _0x1a7c62 = false) {
        ;
        for (let _0x336c5f = this.navigations.length - 1; _0x336c5f >= 0 && !(this.navigations[_0x336c5f].type === _0x1f444f && (this.navigations.splice(_0x336c5f, 1), _0x1a7c62)); --_0x336c5f) {
            ;
        }
    }
    ['canCloseOnEscape']() {
        ;
        return this.escapeHandlers.every(_0x2fe940 => _0x2fe940());
    }
    ['registerEscapeHandler'](_0x2e8e31) {
        ;
        return this.escapeHandlers.push(_0x2e8e31), () => {
            ;
            this.escapeHandlers = this.escapeHandlers.filter(_0x538cc5 => _0x538cc5 !== _0x2e8e31);
        };
    }
}
const Ie = new md();
N.appNavigationController = Ie;
class gd {
    ['reload'](_0x3d66d8 = true) {
        ;
        try {
            Ie.spliceItems(0, 1e+400);
            _0x3d66d8 && Ie.overrideHash();
            location.reload();
            ;
        } catch {
        }
    }
    ['close']() {
        ;
        try {
            window.close();
        } catch {
        }
    }
    ['focus']() {
        window.focus();
    }
}
const go = new gd();
function Ye(_0x22c973) {
    ;
    if (_0x22c973 === null || typeof _0x22c973 != 'object') {
        return _0x22c973;
    }
    if (_0x22c973 instanceof Date) {
        return new Date(_0x22c973.getTime());
    }
    if (Array.isArray(_0x22c973)) {
        return _0x22c973.map(_0x18f2ec => Ye(_0x18f2ec));
    }
    if (ArrayBuffer.isView(_0x22c973)) {
        return _0x22c973.slice();
    }
    const _0x27355e = new _0x22c973.constructor();
    for (var _0x26aecf in _0x22c973)
        _0x22c973.hasOwnProperty(_0x26aecf) && (_0x27355e[_0x26aecf] = Ye(_0x22c973[_0x26aecf]));
    return _0x27355e;
}
const Vf = typeof SharedWorker < 'u' && !Mt.noSharedWorker, pd = Fe ? 'touchstart' : 'mousemove';
class bd extends je {
    constructor() {
        ;
        super();
        this['_isIdle'] = true;
        this.focusPromise = Promise.resolve();
        this.focusResolve = () => {
        };
        window.addEventListener('blur', () => {
            const _0x231aef = { once: true };
            ;
            this.isIdle = true;
            window.addEventListener('focus', () => {
                this.isIdle = false;
            }, _0x231aef);
            ;
            ;
        });
        window.addEventListener(pd, () => {
            ;
            this.isIdle = false;
        }, {
            'once': true,
            'passive': true
        });
        this.addEventListener('change', _0x21d45c => {
            ;
            _0x21d45c ? this.focusPromise = new Promise(_0x497f5a => {
                this.focusResolve = _0x497f5a;
            }) : this.focusResolve();
        });
        ;
    }
    ['getFocusPromise']() {
        return this.focusPromise;
    }
    get ['isIdle']() {
        return this['_isIdle'];
    }
    set ['isIdle'](_0x5cd3) {
        ;
        if (this['_isIdle'] !== _0x5cd3) {
            this['_isIdle'] = _0x5cd3;
            this.dispatchEvent('change', _0x5cd3);
        }
    }
}
const as = new bd(), yd = 5000, vd = 30000, Ed = 20000, wd = Vf;
class Dd extends je {
    constructor() {
        ;
        super(false);
        this.log = Q('INSTANCE');
        this.clearInstance = () => {
            ;
            this.masterInstance && !this.deactivated && (this.log.warn('clear master instance'), j.delete('xt_instance'));
        };
        this.checkInstance = async (_0x37f5c5 = as.isIdle) => {
            ;
            if (this.deactivated) {
                return;
            }
            const _0x3badc0 = Date.now(), _0x17c4fb = {
                    'id': this.instanceId,
                    'idle': _0x37f5c5,
                    'time': _0x3badc0
                }, [_0x52c234, _0x444545 = ne.build] = await Promise.all([
                    j.get('xt_instance', false),
                    j.get('k_build', false)
                ]);
            if (wd) {
                const _0x12f52b = { xt_instance: _0x17c4fb };
                ;
                j.set(_0x12f52b);
                ;
                return;
            }
            const _0x4921ad = { xt_instance: _0x17c4fb };
            ;
            !_0x37f5c5 || !_0x52c234 || _0x52c234.id === this.instanceId || _0x52c234.time < _0x3badc0 - Ed ? (j.set(_0x4921ad), this.masterInstance || (this.masterInstance = true, I.managers.networkerFactory.startAll(), this.log.warn('now master instance', _0x17c4fb)), this.clearDeactivateTimeout()) : this.masterInstance && (this.masterInstance = false, I.managers.networkerFactory.stopAll(), this.log.warn('now idle instance', _0x17c4fb), this.deactivateTimeout || (this.deactivateTimeout = window.setTimeout(() => this.deactivateInstance('tabs'), vd)));
            ;
        };
        this.log = Q('INSTANCE');
        this.instanceId = If;
        ;
    }
    get ['deactivatedReason']() {
        ;
        return this.deactivated;
    }
    ['start']() {
        ;
        if (this.reset(), !this.started) {
            this.started = true;
            as.addEventListener('change', this.checkInstance);
            re.setInterval(this.checkInstance, yd);
            ;
            try {
                document.documentElement.addEventListener('beforeunload', this.clearInstance);
            } catch {
            }
            return this.checkInstance();
        }
    }
    ['reset']() {
        ;
        this.masterInstance = false;
        this.clearDeactivateTimeout();
        this.deactivated = void 0;
        ;
    }
    ['activateInstance']() {
        ;
        this.deactivated && (this.reset(), this.checkInstance(false), this.dispatchEvent('activated'));
    }
    ['deactivateInstance'](_0x3d9ab3) {
        ;
        this.masterInstance || this.deactivated || (this.log.warn('deactivate', _0x3d9ab3), this.clearDeactivateTimeout(), this.deactivated = _0x3d9ab3, this.dispatchEvent('deactivated', _0x3d9ab3));
    }
    ['clearDeactivateTimeout']() {
        ;
        this.deactivateTimeout && (clearTimeout(this.deactivateTimeout), this.deactivateTimeout = 0);
    }
}
const $n = new Dd();
N && (N.singleInstance = $n);
function Sd(_0x3f951b, _0x2a605c) {
    ;
    if (_0x3f951b !== void 0) {
        return _0x3f951b = +_0x3f951b.toFixed(0), _0x2a605c ? _0x3f951b < Mf ? _0x3f951b : _0x3f951b % Mf : _0x3f951b;
    }
}
function Ad(_0x132b16) {
    return Sd(_0x132b16, true);
}
const Cd = 10000;
class po extends je {
    constructor() {
        ;
        super(false);
        this.isAvailable = true;
        this.isPushEnabled = false;
        this.localNotificationsAvailable = true;
        this.started = false;
        this.settings = {};
        this.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        this.userVisibleOnly = !this.isFirefox;
        this.log = Q('PUSH-API');
        this.subscribe = () => {
            ;
            this.isAvailable && navigator.serviceWorker.ready.then(_0x5726f9 => {
                const _0x27db76 = { userVisibleOnly: this.userVisibleOnly };
                ;
                _0x5726f9.pushManager.subscribe(_0x27db76).then(_0x1f834d => {
                    ;
                    this.isPushEnabled = true;
                    this.pushSubscriptionNotify('subscribe', _0x1f834d);
                    ;
                }).catch(_0x245219 => {
                    ;
                    Notification.permission === 'denied' ? this.log('Permission for Notifications was denied') : (this.log('Unable to subscribe to push.', _0x245219), this.userVisibleOnly || (this.userVisibleOnly = true, setTimeout(this.subscribe, 0)));
                });
                ;
            });
        };
        this.isAliveNotify = () => {
            ;
            if (!this.isAvailable || $n.deactivatedReason) {
                return;
            }
            this.settings.baseUrl = (location.href || '').replace(/#.*$/, '');
            const _0x24d808 = {
                push_action_mute1d: Re ? 'PushNotification.Action.Mute1d.Mobile' : 'PushNotification.Action.Mute1d',
                push_action_settings: Re ? 'PushNotification.Action.Settings.Mobile' : 'PushNotification.Action.Settings',
                push_message_nopreview: 'PushNotification.Message.NoPreview'
            };
            ;
            ;
            ;
            ;
            const _0x2420e7 = { _0x1ddc89: ue.format(_0x4d0d71[_0x1ddc89], true) }, _0x4d0d71 = _0x24d808;
            for (const _0x1ddc89 in _0x4d0d71);
            this.serviceMessagePort.invokeVoid('pushPing', {
                'localNotifications': this.localNotificationsAvailable,
                'lang': _0x2420e7,
                'settings': this.settings
            });
            this.isAliveTO = setTimeout(this.isAliveNotify, Cd);
            ;
        };
        (!('PushManager' in window) || !('Notification' in window) || !('serviceWorker' in navigator)) && (this.log.warn('Push messaging is not supported.'), this.isAvailable = false, this.localNotificationsAvailable = false);
        this.isAvailable && Notification.permission === 'denied' && this.log.warn('The user has blocked notifications.');
        ;
    }
    ['start']() {
        ;
        this.started || (this.started = true, this.getSubscription(), this.setUpServiceWorkerChannel());
    }
    ['setLocalNotificationsDisabled']() {
        ;
        this.localNotificationsAvailable = false;
    }
    ['getSubscription']() {
        ;
        this.isAvailable && navigator.serviceWorker.ready.then(_0x580ca9 => {
            ;
            _0x580ca9.pushManager.getSubscription().then(_0x4dcdd3 => {
                ;
                this.isPushEnabled = !!_0x4dcdd3;
                this.pushSubscriptionNotify('init', _0x4dcdd3);
                ;
            }).catch(_0x5b6050 => {
                ;
                this.log.error('Error during getSubscription()', _0x5b6050);
            });
        });
    }
    ['unsubscribe']() {
        ;
        this.isAvailable && navigator.serviceWorker.ready.then(_0x4b6d32 => {
            ;
            _0x4b6d32.pushManager.getSubscription().then(_0x2075ac => {
                ;
                this.isPushEnabled = false;
                _0x2075ac && (this.pushSubscriptionNotify('unsubscribe', _0x2075ac), setTimeout(() => {
                    ;
                    _0x2075ac.unsubscribe().then(_0x307b80 => {
                        ;
                        this.isPushEnabled = false;
                    }).catch(_0x5da033 => {
                        ;
                        this.log.error('Unsubscription error: ', _0x5da033);
                    });
                }, 3000));
                ;
            }).catch(_0x156b2b => {
                ;
                this.log.error('Error thrown while unsubscribing from push messaging.', _0x156b2b);
            });
        });
    }
    ['forceUnsubscribe']() {
        ;
        this.isAvailable && navigator.serviceWorker.ready.then(_0x4d9f2a => {
            ;
            _0x4d9f2a.pushManager.getSubscription().then(_0x50d17a => {
                ;
                this.log.warn('force unsubscribe', _0x50d17a);
                _0x50d17a && _0x50d17a.unsubscribe().then(_0x32140a => {
                    ;
                    this.log.warn('force unsubscribe successful', _0x32140a);
                    this.isPushEnabled = false;
                    ;
                }).catch(_0x162fa5 => {
                    ;
                    this.log.error('Unsubscription error: ', _0x162fa5);
                });
                ;
            }).catch(_0x5881dd => {
                ;
                this.log.error('Error thrown while unsubscribing from push messaging.', _0x5881dd);
            });
        });
    }
    ['setSettings'](_0x129704) {
        ;
        this.settings = Ye(_0x129704);
        clearTimeout(this.isAliveTO);
        this.isAliveNotify();
        ;
    }
    ['hidePushNotifications']() {
        ;
        this.isAvailable && this.serviceMessagePort.invokeVoid('notificationsClear', void 0);
    }
    ['setUpServiceWorkerChannel']() {
        ;
        this.isAvailable && (this.serviceMessagePort.addEventListener('pushClick', _0x1b5db2 => {
            ;
            if ($n.deactivatedReason) {
                go.reload();
                return;
            }
            this.dispatchEvent('push_notification_click', _0x1b5db2);
        }), navigator.serviceWorker.ready.then(this.isAliveNotify));
    }
    ['pushSubscriptionNotify'](_0x78afc4, _0x5f5268) {
        ;
        if (_0x5f5268) {
            const _0x10a5a4 = _0x5f5268.toJSON();
            if (!_0x10a5a4 || !_0x10a5a4.endpoint || !_0x10a5a4.keys || !_0x10a5a4.keys.p256dh || !_0x10a5a4.keys.auth) {
                this.log.warn('Invalid push subscription', _0x10a5a4);
                this.unsubscribe();
                this.isAvailable = false;
                this.pushSubscriptionNotify(_0x78afc4);
                ;
                return;
            }
            this.log.warn('Push', _0x78afc4, _0x10a5a4);
            this.dispatchEvent('push_' + _0x78afc4, {
                'tokenType': 10,
                'tokenValue': JSON.stringify(_0x10a5a4)
            });
            ;
        } else {
            this.log.warn('Push', _0x78afc4, false);
            this.dispatchEvent('push_' + _0x78afc4, false);
            ;
        }
    }
    ['ignorePushByMid'](_0x30a93d, _0x5b81d6) {
        ;
        this.isAvailable && this.serviceMessagePort.invokeVoid('shownNotification', _0x30a93d + '_' + Ad(_0x5b81d6));
    }
}
const zf = new po();
N && (N.webPushApiManager = zf);
const a0_0xaa4326 = {};
a0_0xaa4326['__proto__'] = null;
a0_0xaa4326.WebPushApiManager = po;
a0_0xaa4326.default = zf;
;
const a0_0x2a08f8 = {};
a0_0x2a08f8.value = 'Module';
const Gm = Object.freeze(Object.defineProperty(a0_0xaa4326, Symbol.toStringTag, a0_0x2a08f8));
function kd(_0x4feb27) {
    const _0x3dac81 = document.createElement('script'), _0x136ed0 = new Promise(_0x4fac32 => {
            ;
            _0x3dac81.onload = _0x3dac81.onerror = () => {
                _0x4fac32(_0x3dac81);
            };
        });
    return _0x3dac81.src = _0x4feb27, document.body.appendChild(_0x3dac81), _0x136ed0;
}
function bo(_0x2e2dd4) {
    const _0x57755c = Date.now();
    return _0x2e2dd4 ? _0x57755c / 1000 | 0 : _0x57755c;
}
class yo {
    constructor() {
        ;
        this.disabled = !ne.domains.includes(location.hostname);
    }
    ['setAuthorized'](_0x36503b) {
        ;
        if (!this.disabled) {
            return j.get('tgme_sync').then(_0x1aa8d1 => {
                const _0x174779 = bo(true);
                if (_0x36503b && _0x1aa8d1?.canRedirect === _0x36503b && _0x1aa8d1.ts + 86400 > _0x174779) {
                    return;
                }
                const _0x10c51b = {
                    canRedirect: _0x36503b,
                    ts: _0x174779
                };
                ;
                ;
                ;
                const _0x36f392 = { tgme_sync: _0x10c51b };
                ;
                j.set(_0x36f392);
                ;
                const _0x5236cf = '_websync_?authed=' + (_0x36503b ? '1' : '0') + '&version=' + encodeURIComponent(ne.version + ' ' + ne.suffix), _0x5c2f10 = [
                        '//telegram.me/' + _0x5236cf,
                        '//t.me/' + _0x5236cf
                    ].map(_0x555fc5 => kd(_0x555fc5).then(_0xe933cd => {
                        ;
                        _0xe933cd.remove();
                    }));
                return Promise.all(_0x5c2f10);
            });
        }
    }
}
const Yi = new yo();
N && (N.telegramMeWebManager = Yi);
const a0_0x362dcd = {};
a0_0x362dcd['__proto__'] = null;
a0_0x362dcd.TelegramMeWebManager = yo;
a0_0x362dcd.default = Yi;
;
const a0_0x35df2d = {};
a0_0x35df2d.value = 'Module';
const qm = Object.freeze(Object.defineProperty(a0_0x362dcd, Symbol.toStringTag, a0_0x35df2d)), Ki = typeof RTCPeerConnection < 'u' && !wt, Fd = Ki;
let kf;
if (!be) {
    kf = true;
} else {
    try {
        kf = +navigator.userAgent.match(/Version\/(.+?) /)[1] >= 14;
    } catch {
        kf = false;
    }
}
const Ji = kf, Xi = 'filter' in (document.createElement('canvas').getContext('2d') || {}), Pd = !!navigator?.geolocation?.getCurrentPosition && false, _d = Ki, Qi = document.createElement('canvas').toDataURL('image/webp').startsWith('data:image/webp'), Zi = new Set([
        'image/jpeg',
        'image/png',
        'image/bmp'
    ]);
Qi && Zi.add('image/webp');
const a0_0x5d1981 = {};
a0_0x5d1981.value = 'Module';
const Td = [
        [
            'image/jxl',
            'data:image/jxl;base64,/woIAAAMABKIAgC4AF3lEgAAFSqjjBu8nOv58kOHxbSN6wxttW1hSaLIODZJJ3BIEkkaoCUzGM6qJAE='
        ],
        [
            'image/avif',
            'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A='
        ]
    ], Ld = Td.map(([_0x1dc703, _0x5f57aa]) => {
        const _0x56b945 = new Image(), _0x1351f2 = new Promise(_0x5a923f => {
                ;
                _0x56b945.onload = _0x56b945.onerror = () => {
                    const _0x2543ba = _0x56b945.height === 2;
                    _0x5a923f(_0x2543ba ? _0x1dc703 : void 0);
                };
            });
        return _0x56b945.src = _0x5f57aa, _0x1351f2;
    }), $m = Promise.all(Ld).then(_0x177b83 => _0x177b83.filter(Boolean)), er = document.createElement('video'), tr = !!er.canPlayType('video/webm') && !be && !ps, vo = !!er.canPlayType('video/quicktime') || be || ps, xd = !!er.canPlayType('video/mp4; codecs="hev1"'), Md = !be, Id = Object.freeze(Object.defineProperty({
        '__proto__': null,
        'IS_AV1_SUPPORTED': Md,
        'IS_H265_SUPPORTED': xd,
        'IS_MOV_SUPPORTED': vo,
        'IS_WEBM_SUPPORTED': tr
    }, Symbol.toStringTag, a0_0x5d1981)), sr = new Set([
        'image/gif',
        'video/mp4',
        'video/webm'
    ]);
vo && sr.add('video/quicktime');
const Rd = [...Zi].concat([...sr]), Od = new Set(Rd), Nd = !wt && false, Bd = 'getDisplayMedia' in (navigator?.mediaDevices || {}), Eo = !!navigator?.vibrate, Wr = document.createElement('audio'), wo = !!(Wr.canPlayType && Wr.canPlayType('audio/ogg;').replace(/no/, ''));
let Do = false;
try {
    const s = document.createElement('canvas').getContext('webgl'), e = s.getExtension('WEBGL_debug_renderer_info'), t = e && s.getParameter(e.UNMASKED_RENDERER_WEBGL) || '';
    (t.match(/Apple/) && !t.match(/Apple GPU/) || s.getSupportedExtensions().indexOf('WEBGL_compressed_texture_s3tc_srgb') === -1) && (Do = true);
} catch {
}
const a0_0x110f44 = {};
a0_0x110f44.value = 'Module';
const So = Do, Ud = 'serviceWorker' in navigator, jd = localStorage.getItem('app_version'), Hd = localStorage.getItem('device_model'), Wd = localStorage.getItem('system_version'), Vd = localStorage.getItem('lang_pack'), zd = +localStorage.getItem('app_id'), Gd = localStorage.getItem('crjs'), qd = localStorage.getItem('mtproxy'), $d = localStorage.getItem('hostname'), Yd = Object.freeze(Object.defineProperty({
        '__proto__': null,
        'APP_ID': zd,
        'APP_VERSION': jd,
        'CRJS': Gd,
        'DEVICE_MODEL': Hd,
        'HOSTNAME': $d,
        'LANG_PACK': Vd,
        'MTPROXY': qd,
        'SYSTEM_VERSION': Wd
    }, Symbol.toStringTag, a0_0x110f44)), hf = {
        'CAN_USE_TRANSFERABLES': Ji,
        'IS_APPLE_MX': So,
        'IS_CALL_SUPPORTED': Fd,
        'IS_CANVAS_FILTER_SUPPORTED': Xi,
        'IS_EMOJI_SUPPORTED': Ni,
        'IS_GEOLOCATION_SUPPORTED': Pd,
        'IS_GROUP_CALL_SUPPORTED': _d,
        'IS_PARALLAX_SUPPORTED': Nd,
        'IS_SCREEN_SHARING_SUPPORTED': Bd,
        'IS_TOUCH_SUPPORTED': Fe,
        ...Id,
        'IS_VIBRATE_SUPPORTED': Eo,
        'IS_OPUS_SUPPORTED': wo,
        'IS_SHARED_WORKER_SUPPORTED': Vf,
        'IS_WEBP_SUPPORTED': Qi,
        'IS_WEBRTC_SUPPORTED': Ki,
        'IS_LIVE_STREAM_SUPPORTED': Ud,
        'IMAGE_MIME_TYPES_SUPPORTED': Zi,
        'MEDIA_MIME_TYPES_SUPPORTED': Od,
        'VIDEO_MIME_TYPES_SUPPORTED': sr,
        ...c1,
        ...Yd
    };
function Kd() {
    const _0x36f842 = document.createElement('input');
    _0x36f842.type = 'time';
    _0x36f842.value = '15:00';
    _0x36f842.style.visibility = 'hidden';
    document.body.append(_0x36f842);
    ;
    const _0x11467d = _0x36f842.offsetWidth;
    return _0x36f842.remove(), _0x11467d > 110 ? 'h12' : 'h23';
}
const a0_0x3b2353 = {};
a0_0x3b2353['_'] = 'baseThemeClassic';
const a0_0x4f2aaa = {};
a0_0x4f2aaa.default = true;
a0_0x4f2aaa.pattern = true;
;
const a0_0x3512d0 = {};
a0_0x3512d0['_'] = 'wallPaperSettings';
a0_0x3512d0.pFlags = {};
a0_0x3512d0.intensity = 50;
a0_0x3512d0.background_color = 14409147;
a0_0x3512d0.second_background_color = 7054727;
a0_0x3512d0.third_background_color = 14014605;
a0_0x3512d0.fourth_background_color = 8960132;
;
const a0_0x35b7e5 = {};
a0_0x35b7e5['_'] = 'wallPaper';
a0_0x35b7e5.pFlags = a0_0x4f2aaa;
a0_0x35b7e5.access_hash = '';
a0_0x35b7e5.document = void 0;
a0_0x35b7e5.id = '';
a0_0x35b7e5.slug = '8f0e2ce3';
a0_0x35b7e5.settings = a0_0x3512d0;
;
const a0_0xf4ec1e = {};
a0_0xf4ec1e['_'] = 'themeSettings';
a0_0xf4ec1e.pFlags = {};
a0_0xf4ec1e.base_theme = a0_0x3b2353;
a0_0xf4ec1e.accent_color = 3379436;
a0_0xf4ec1e.message_colors = [6072403];
a0_0xf4ec1e.wallpaper = a0_0x35b7e5;
;
const a0_0x2ff715 = {};
a0_0x2ff715['_'] = 'baseThemeNight';
const a0_0x5e1e91 = {};
a0_0x5e1e91.default = true;
a0_0x5e1e91.pattern = true;
a0_0x5e1e91.dark = true;
;
const a0_0x2e2b70 = {};
a0_0x2e2b70['_'] = 'wallPaperSettings';
a0_0x2e2b70.pFlags = {};
a0_0x2e2b70.intensity = -50;
a0_0x2e2b70.background_color = 16696470;
a0_0x2e2b70.second_background_color = 14511289;
a0_0x2e2b70.third_background_color = 9842623;
a0_0x2e2b70.fourth_background_color = 5200853;
;
const a0_0x219c4f = {};
a0_0x219c4f['_'] = 'wallPaper';
a0_0x219c4f.pFlags = a0_0x5e1e91;
a0_0x219c4f.access_hash = '';
a0_0x219c4f.document = void 0;
a0_0x219c4f.id = '';
a0_0x219c4f.slug = '8f0e2ce3';
a0_0x219c4f.settings = a0_0x2e2b70;
;
const a0_0xeee527 = {};
a0_0xeee527['_'] = 'themeSettings';
a0_0xeee527.pFlags = {};
a0_0xeee527.base_theme = a0_0x2ff715;
a0_0xeee527.accent_color = 8877281;
a0_0xeee527.message_colors = [8877281];
a0_0xeee527.wallpaper = a0_0x219c4f;
;
const a0_0x151065 = {};
a0_0x151065.default = true;
const a0_0x4f09c2 = {};
a0_0x4f09c2['_'] = 'theme';
a0_0x4f09c2.access_hash = '';
a0_0x4f09c2.id = '';
a0_0x4f09c2.settings = [
    a0_0xf4ec1e,
    a0_0xeee527
];
a0_0x4f09c2.slug = '';
a0_0x4f09c2.title = '';
a0_0x4f09c2.emoticon = '\uD83C\uDFE0';
a0_0x4f09c2.pFlags = a0_0x151065;
;
const a0_0x10310f = {};
a0_0x10310f.contacts = true;
a0_0x10310f.private = true;
a0_0x10310f.groups = true;
a0_0x10310f.channels = true;
;
const a0_0x4d7aee = {};
a0_0x4d7aee.contacts = true;
a0_0x4d7aee.private = true;
a0_0x4d7aee.groups = true;
a0_0x4d7aee.channels = true;
;
const a0_0x240ff3 = {};
a0_0x240ff3.contacts = true;
a0_0x240ff3.private = true;
a0_0x240ff3.groups = true;
a0_0x240ff3.channels = true;
;
const a0_0x13182e = {};
a0_0x13182e.photo = a0_0x10310f;
a0_0x13182e.video = a0_0x4d7aee;
a0_0x13182e.file = a0_0x240ff3;
;
const a0_0xb176d9 = {};
a0_0xb176d9.video_preload_large = true;
a0_0xb176d9.audio_preload_next = true;
;
const a0_0x3c37b7 = {};
a0_0x3c37b7['_'] = 'autoDownloadSettings';
a0_0x3c37b7.file_size_max = 3145728;
a0_0x3c37b7.pFlags = a0_0xb176d9;
a0_0x3c37b7.photo_size_max = 1048576;
a0_0x3c37b7.video_size_max = 15728640;
a0_0x3c37b7.video_upload_maxbitrate = 100;
a0_0x3c37b7.small_queue_active_operations_max = 0;
a0_0x3c37b7.large_queue_active_operations_max = 0;
;
const a0_0x25af27 = {};
a0_0x25af27.suggest = 'all';
a0_0x25af27.dynamicPackOrder = true;
a0_0x25af27.loop = true;
;
const a0_0x3af228 = {};
a0_0x3af228.suggest = true;
a0_0x3af228.big = true;
;
const a0_0xe4e7d = {};
a0_0xe4e7d.sound = false;
const a0_0x1201bd = {};
a0_0x1201bd.all = false;
a0_0x1201bd.animations = false;
a0_0x1201bd.chat = false;
a0_0x1201bd.chat_background = false;
a0_0x1201bd.chat_spoilers = false;
a0_0x1201bd.effects = false;
a0_0x1201bd.effects_premiumstickers = false;
a0_0x1201bd.effects_reactions = false;
a0_0x1201bd.effects_emoji = false;
a0_0x1201bd.emoji = false;
a0_0x1201bd.emoji_messages = false;
a0_0x1201bd.emoji_panel = false;
a0_0x1201bd.gif = false;
a0_0x1201bd.stickers = false;
a0_0x1201bd.stickers_chat = false;
a0_0x1201bd.stickers_panel = false;
a0_0x1201bd.video = false;
;
const a0_0x5698a1 = {};
a0_0x5698a1.voice = 1;
a0_0x5698a1.video = 1;
a0_0x5698a1.audio = 1;
;
const a0_0x4f8eb1 = {};
a0_0x4f8eb1.volume = 1;
a0_0x4f8eb1.muted = false;
a0_0x4f8eb1.playbackRate = 1;
a0_0x4f8eb1.playbackRates = a0_0x5698a1;
a0_0x4f8eb1.loop = false;
a0_0x4f8eb1.round = false;
;
const a0_0x258754 = {};
a0_0x258754.storySound = false;
const a0_0x1a3de4 = {};
a0_0x1a3de4.peers = {};
a0_0x1a3de4.enabledPeers = {};
a0_0x1a3de4.enabled = true;
a0_0x1a3de4.showInMenu = true;
a0_0x1a3de4.doNotTranslate = [];
;
const a0_0x225d84 = {};
a0_0x225d84.enabled = false;
a0_0x225d84.autoLockTimeoutMins = 0;
a0_0x225d84.lockShortcutEnabled = false;
a0_0x225d84.lockShortcut = ['Alt'];
a0_0x225d84.canAttemptAgainOn = null;
;
const a0_0x227c77 = {};
a0_0x227c77['_'] = Re ? 'authStateSignIn' : 'authStateSignQr';
const Jd = ne.version, Xd = ne.build, Vr = a0_0x4f09c2, zr = (_0x35a991, _0x1a5659, _0x493ff8) => ({
        ...Vr,
        'name': _0x35a991,
        'settings': {
            ...Vr.settings.find(_0x53441e => _0x53441e.base_theme['_'] === _0x1a5659),
            'highlightingColor': _0x493ff8
        }
    }), Qd = {
        'messagesTextSize': 16,
        'distanceUnit': 'kilometers',
        'sendShortcut': 'enter',
        'autoDownload': a0_0x13182e,
        'autoDownloadNew': a0_0x3c37b7,
        'stickers': a0_0x25af27,
        'emoji': a0_0x3af228,
        'themes': [
            zr('day', 'baseThemeClassic', 'hsla(86.4, 43.846153%, 45.117647%, .4)'),
            zr('night', 'baseThemeNight', 'hsla(299.142857, 44.166666%, 37.470588%, .4)')
        ],
        'theme': 'system',
        'notifications': a0_0xe4e7d,
        'timeFormat': Kd(),
        'liteMode': a0_0x1201bd,
        'savedAsForum': false,
        'notifyAllAccounts': true,
        'tabsInSidebar': false,
        'playbackParams': a0_0x4f8eb1,
        'chatContextMenuHintWasShown': false,
        'seenTooltips': a0_0x258754,
        'translations': a0_0x1a3de4,
        'passcode': a0_0x225d84
    }, Ke = {
        'allDialogsLoaded': {},
        'pinnedOrders': {},
        'contactsListCachedTime': 0,
        'updates': {},
        'filtersArr': [],
        'maxSeenMsgId': 0,
        'stateCreatedTime': Date.now(),
        'recentEmoji': [],
        'recentCustomEmoji': [],
        'topPeersCache': {},
        'recentSearch': [],
        'version': Jd,
        'build': Xd,
        'authState': a0_0x227c77,
        'hiddenPinnedMessages': {},
        'hideChatJoinRequests': {},
        'notifySettings': {},
        'confirmedWebViews': [],
        'hiddenSimilarChannels': [],
        'appConfig': {},
        'accountThemes': {},
        'dontShowPaidMessageWarningFor': []
    }, un = { 'settings': Qd };
function Zd(_0x4ac36c, _0x150c53) {
    ;
    _0x4ac36c = _0x4ac36c.split(' ', 1)[0];
    _0x150c53 = _0x150c53.split(' ', 1)[0];
    ;
    const _0x5666a1 = _0x4ac36c.split('.'), _0x49340b = _0x150c53.split('.');
    for (let _0x444db2 = 0; _0x444db2 < _0x5666a1.length; ++_0x444db2) {
        const _0x482c0e = +_0x5666a1[_0x444db2], _0x227f2f = +_0x49340b[_0x444db2];
        if (_0x482c0e > _0x227f2f) {
            return 1;
        }
        if (_0x482c0e < _0x227f2f) {
            return -1;
        }
    }
    return 0;
}
function Ao(_0x1eebf8) {
    ;
    return typeof _0x1eebf8 == 'object' && _0x1eebf8 !== null;
}
function Co(_0x152bd2, _0x24a8ad, _0x543f3b, _0x7dbf93, _0x5c8a0b, _0x40e61d) {
    ;
    for (const _0x54f288 in _0x152bd2) {
        const _0x189236 = _0x40e61d ? _0x40e61d + '.' + _0x54f288 : _0x54f288;
        _0x5c8a0b?.has(_0x189236) || (typeof _0x24a8ad[_0x54f288] != typeof _0x152bd2[_0x54f288] ? (_0x24a8ad[_0x54f288] = Ye(_0x152bd2[_0x54f288]), _0x543f3b?.(_0x7dbf93 || _0x54f288)) : Ao(_0x152bd2[_0x54f288]) && Co(_0x152bd2[_0x54f288], _0x24a8ad[_0x54f288], _0x543f3b, _0x7dbf93 || _0x54f288, _0x5c8a0b, _0x189236));
    }
}
function el(_0x19bf1c, _0x15adc, _0x4bfa66) {
    const _0xe4462c = performance.now();
    return (_0x4bfa66 || console).warn(Or(), 'start', _0x15adc), _0x19bf1c.then(() => {
        ;
        (_0x4bfa66 || console).warn(Or(), 'end', _0x15adc, performance.now() - _0xe4462c);
    }), _0x19bf1c;
}
function tl(_0x1362e9) {
    return (..._0x597530) => el(..._0x597530, _0x1362e9);
}
class ko extends It {
    constructor(_0x281a2a) {
        const _0x147a67 = _0x281a2a === 'old' ? Vi() : zi(_0x281a2a);
        super(_0x147a67, 'session');
    }
}
class os extends ln {
    static async ['getTotalAccounts']() {
        const _0x46d8ee = [
            1,
            2,
            3,
            4
        ].map(_0x49bdbb => j.get('account' + _0x49bdbb));
        return (await Promise.all(_0x46d8ee)).filter(_0xab0d06 => !!_0xab0d06?.userId).length;
    }
    static async ['getUnencryptedTotalAccounts']() {
        ;
        return j.get('number_of_accounts');
    }
    static async ['getUserIds']() {
        const _0x3cccce = [
            1,
            2,
            3,
            4
        ].map(_0x42e562 => j.get('account' + _0x42e562));
        return (await Promise.all(_0x3cccce)).map(_0x16da92 => _0x16da92?.userId).filter(Boolean);
    }
    static async ['get'](_0x277cad) {
        const _0x22c9a7 = await j.get('account' + _0x277cad);
        return this.fillFingerprint(_0x22c9a7), _0x22c9a7;
    }
    static ['fillFingerprint'](_0x237466) {
        ;
        if (_0x237466 && !_0x237466.auth_key_fingerprint) {
            const _0x559176 = 'dc' + ne.baseDcId + '_auth_key', _0x28513f = _0x237466[_0x559176];
            _0x237466.auth_key_fingerprint = _0x28513f ? _0x237466[_0x559176].slice(0, 8) : void 0;
        }
    }
    static async ['update'](_0x41dfa1, _0x20d51c, _0x58496e = false) {
        const _0x4df1b1 = await this.get(_0x41dfa1);
        this.fillFingerprint(_0x20d51c);
        const _0x5b379e = {
                ..._0x58496e ? {} : _0x4df1b1,
                ..._0x20d51c
            }, _0x2af071 = _0x5b379e, _0x4dd5de = { ['account' + _0x41dfa1]: _0x2af071 };
        return await j.set(_0x4dd5de), _0x41dfa1 === 1 && await this.updateStorageForLegacy(_0x2af071), ((async () => j.set({ 'number_of_accounts': await this.getTotalAccounts() }))()), _0x2af071;
    }
    static async ['shiftAccounts'](_0x31d3b9) {
        ;
        for (let _0x44207e = _0x31d3b9; _0x44207e <= Rr; _0x44207e++) {
            if (await j.delete('account' + _0x44207e), _0x44207e < Rr) {
                const _0xa7a09 = await this.get(_0x44207e + 1);
                _0xa7a09?.userId && await this.update(_0x44207e, _0xa7a09, true);
            }
        }
    }
    static async ['updateStorageForLegacy'](_0x4c2f09) {
        ;
        if (_0x4c2f09 !== null && await Me.isUsingPasscode()) {
            return;
        }
        _0x4c2f09 === null && (_0x4c2f09 = {});
        const _0x13dbdd = {}, _0x55ddcc = [], _0x120c5d = (_0x36d391, _0x4651a5) => {
                ;
                _0x4651a5 ? _0x13dbdd[_0x36d391] = _0x4651a5 : _0x55ddcc.push(_0x36d391);
            };
        for (let _0x1754e7 = 1; _0x1754e7 <= 5; _0x1754e7++) {
            const _0x2ddd0a = 'dc' + _0x1754e7 + '_auth_key', _0x53895e = 'dc' + _0x1754e7 + '_server_salt';
            _0x120c5d(_0x2ddd0a, _0x4c2f09[_0x2ddd0a]);
            _0x120c5d(_0x53895e, _0x4c2f09[_0x53895e]);
            ;
        }
        _0x4c2f09.auth_key_fingerprint && _0x120c5d('auth_key_fingerprint', _0x4c2f09.auth_key_fingerprint);
        _0x120c5d('user_auth', _0x4c2f09.userId && {
            'date': bo(true),
            'id': _0x4c2f09.userId,
            'dcID': _0x4c2f09.dcId || 0
        });
        _0x120c5d('dc', _0x4c2f09.dcId);
        await Promise.all([
            j.set(_0x13dbdd),
            Promise.all(_0x55ddcc.map(_0x4df43c => j.delete(_0x4df43c)))
        ]);
        ;
    }
}
N.AccountController = os;
function Gr(_0x63745d) {
    const _0x54283d = [
            'users',
            'chats',
            'dialogs'
        ], _0x40ed11 = { _0x572d4b: new It(_0x63745d === void 0 ? Vi() : zi(_0x63745d), _0x572d4b) };
    for (const _0x572d4b of _0x54283d);
    return _0x40ed11;
}
const sl = false, fl = 86400000, mf = Ke.version, Rs = Ke.build, Gf = Object.keys(Ke), es = Object.keys(un), nl = [
        'contactsListCachedTime',
        'stateCreatedTime',
        'maxSeenMsgId',
        'filtersArr'
    ];
function Fo(_0x31f7d8, _0x5353e3, _0x332e58) {
    const _0x560eef = new Set(), _0x134627 = (_0x42407d, _0x172099) => {
            ;
            ;
            _0x560eef.add(_0x42407d);
            ;
        }, _0xb57d55 = _0x5d2827 => {
            ;
            _0x560eef.clear();
            _0x4bd65b = _0x5d2827;
            Object.keys(_0x4bd65b).forEach(_0x46fb8f => _0x560eef.add(_0x46fb8f));
            ;
        };
    let _0x4bd65b = { _0x42407d: _0x172099 };
    return {
        'push': _0x134627,
        'replace': _0xb57d55,
        'readFromArray': _0x59056b => {
            ;
            for (let _0x442bd3 = 0, _0xe2aa50 = _0x5353e3.length; _0x442bd3 < _0xe2aa50; ++_0x442bd3) {
                const _0x5b6edc = _0x5353e3[_0x442bd3], _0x5cdaaa = _0x59056b[_0x442bd3];
                _0x5cdaaa !== void 0 ? _0x4bd65b[_0x5b6edc] = _0x5cdaaa : _0x134627(_0x5b6edc, Ye(_0x332e58[_0x5b6edc]));
            }
        },
        get 'state'() {
            return _0x4bd65b;
        },
        set 'state'(_0x20c379) {
            _0x4bd65b = _0x20c379;
        },
        'pushedKeys': _0x560eef,
        'log': _0x31f7d8
    };
}
function Po(_0x2c314a) {
    const _0x173b65 = Fo(_0x2c314a, Gf, Ke), _0x1e513b = new Map();
    return {
        ..._0x173b65,
        get 'state'() {
            ;
            return _0x173b65.state;
        },
        set 'state'(_0x163ef1) {
            ;
            _0x173b65.state = _0x163ef1;
        },
        'resetStorages': _0x1e513b,
        'reset': ({
            preserveKeys: _0x46fdbf = []
        } = {}) => {
            ;
            _0x46fdbf.push('authState');
            const _0x19ef40 = new Map(_0x46fdbf.map(_0x30a6ae => [
                _0x30a6ae,
                _0x173b65.state[_0x30a6ae]
            ]));
            _0x173b65.state = Ye(Ke);
            _0x19ef40.forEach((_0x21839a, _0xd8e3b2) => {
                ;
                _0x173b65.state[_0xd8e3b2] = _0x21839a;
            });
            ;
            const _0x299496 = [
                'chats',
                'dialogs',
                'users'
            ];
            for (const _0x3fc3b4 of _0x299496)
                _0x1e513b.set(_0x3fc3b4, []);
            _0x173b65.replace(_0x173b65.state);
        }
    };
}
function _o(_0x532f15) {
    return Fo(_0x532f15, es, un);
}
const Ge = {
    'REFRESH': _0x40560e => {
        const _0xe4d272 = Date.now();
        _0x40560e.state.stateCreatedTime + fl < _0xe4d272 && nl.forEach(_0x4740e6 => {
            _0x40560e.push(_0x4740e6, Ye(Ke[_0x4740e6]));
        });
    },
    'VALIDATE': (_0x27a960, _0x130f40) => {
        const _0x153c6d = new Set(['settings.themes']);
        Co(_0x130f40, _0x27a960.state, _0x3c6bb3 => {
            ;
            _0x27a960.push(_0x3c6bb3, _0x27a960.state[_0x3c6bb3]);
        }, void 0, _0x153c6d);
    },
    'VERSION': _0x3560f1 => {
        ;
        let _0x10619b, _0x4d810b;
        return (_0x3560f1.state.version !== mf || _0x3560f1.state.build !== Rs) && (_0x3560f1.state.build < 526 ? _0x3560f1.reset() : _0x3560f1.state.build < 562 && _0x3560f1.push('filtersArr', Ye(Ke.filtersArr)), Zd(_0x3560f1.state.version, mf) !== 0 && (_0x10619b = mf, _0x4d810b = _0x3560f1.state.version), _0x3560f1.push('appConfig', Ye(Ke.appConfig)), _0x3560f1.push('version', mf), _0x3560f1.push('build', Rs)), {
            'newVersion': _0x10619b,
            'oldVersion': _0x4d810b
        };
    },
    'CHANGED_AUTH': async _0x4c3185 => {
        const [_0x19f164, _0x5614fb] = await Promise.all([
            j.get('auth_key_fingerprint'),
            j.get('dc' + ne.baseDcId + '_auth_key')
        ]);
        if (!_0x5614fb) {
            return;
        }
        const _0x5a77ee = _0x5614fb.slice(0, 8);
        _0x19f164 ? _0x19f164 !== _0x5a77ee && _0x4c3185.reset() : _0x4c3185.reset();
        _0x19f164 !== _0x5a77ee && await j.set({ 'auth_key_fingerprint': _0x5a77ee });
        ;
    }
};
async function gf(_0x3a78e4) {
    const _0x50d2aa = Q('STATE-LOADER-ACCOUNT-' + _0x3a78e4), _0x316a54 = new ko(_0x3a78e4), [_0xd6d407, ..._0x14e421] = await Promise.all([
            os.get(_0x3a78e4),
            ...es.map(_0x487f32 => rs.get(_0x487f32)),
            ...Gf.map(_0x5d7412 => _0x316a54.get(_0x5d7412))
        ]), _0x3579b2 = _o(_0x50d2aa);
    _0x3579b2.readFromArray(_0x14e421.splice(0, es.length));
    const _0x471949 = Po(_0x50d2aa), _0x167a36 = {};
    _0x167a36['_'] = 'authStateSignedIn';
    _0x471949.readFromArray(_0x14e421);
    _0xd6d407?.userId && (_0x471949.state.authState = _0x167a36);
    _0x3a78e4 === 1 && await Ge.CHANGED_AUTH(_0x471949);
    Ge.REFRESH(_0x471949);
    Ge.VALIDATE(_0x471949, Ke);
    Ge.VALIDATE(_0x3579b2, un);
    ;
    ;
    const {
            newVersion: _0x3b1222,
            oldVersion: _0x2bc570
        } = Ge.VERSION(_0x471949), _0x318599 = {};
    return _0x318599.state = _0x471949.state, _0x318599.pushedKeys = _0x471949.pushedKeys, _0x318599.newVersion = _0x3b1222, _0x318599.oldVersion = _0x2bc570, _0x318599.resetStorages = _0x471949.resetStorages, _0x318599.common = _0x3579b2.state, _0x318599.userId = _0xd6d407?.userId, _0x318599;
}
async function il() {
    const _0x143fbd = Q('STATE-LOADER'), _0x46de11 = new ko('old'), _0x4a51b4 = performance.now(), _0x4d2369 = tl(_0x143fbd), _0x34e240 = [
            'playbackParams',
            'chatContextMenuHintWasShown',
            'seenTooltips',
            'translations'
        ], _0x15ce8d = _0x34e240.concat(es), _0x30809c = await Promise.all([
            ..._0x15ce8d.map(_0x1c2a89 => _0x46de11.get(_0x1c2a89)),
            ...Gf.map(_0x57ff53 => _0x4d2369(_0x46de11.get(_0x57ff53), 'state ' + _0x57ff53)),
            _0x46de11.get('langPack'),
            _0x4d2369(j.get('user_auth'), 'auth')
        ]);
    _0x143fbd.warn('promises', performance.now() - _0x4a51b4);
    const _0x40f3d0 = _o(_0x143fbd), _0x76f021 = _0x30809c.splice(0, _0x34e240.length), _0x272e85 = es.indexOf('settings');
    Ao(_0x30809c[_0x272e85]) && _0x76f021.forEach((_0x3f3b7a, _0x1e2f62) => {
        _0x30809c[_0x272e85][_0x34e240[_0x1e2f62]] = _0x3f3b7a;
    });
    _0x40f3d0.readFromArray(_0x30809c.splice(0, es.length));
    ;
    const _0x2bf88f = Po(_0x143fbd);
    _0x2bf88f.readFromArray(_0x30809c.splice(0, Gf.length));
    const _0x5e2b46 = _0x30809c.shift(), _0x451fab = _0x30809c.shift(), _0x31ba75 = {};
    _0x31ba75['_'] = 'authStateSignedIn';
    _0x451fab && (_0x2bf88f.state.authState = _0x31ba75);
    await Ge.CHANGED_AUTH(_0x2bf88f);
    Ge.REFRESH(_0x2bf88f);
    Ge.VALIDATE(_0x2bf88f, Ke);
    Ge.VALIDATE(_0x40f3d0, un);
    ;
    ;
    const {
        newVersion: _0x40bb6b,
        oldVersion: _0x3b4b00
    } = Ge.VERSION(_0x2bf88f);
    _0x143fbd.warn('total', performance.now() - _0x4a51b4);
    for (const _0xb5b29e in _0x2bf88f.state)
        _0x2bf88f.push(_0xb5b29e, _0x2bf88f.state[_0xb5b29e]);
    const _0x126614 = {};
    return _0x126614.state = _0x2bf88f.state, _0x126614.pushedKeys = _0x2bf88f.pushedKeys, _0x126614.newVersion = _0x40bb6b, _0x126614.oldVersion = _0x3b4b00, _0x126614.resetStorages = _0x2bf88f.resetStorages, _0x126614.common = _0x40f3d0.state, _0x126614.userId = typeof _0x451fab == 'number' ? _0x451fab : _0x451fab?.id ? +_0x451fab.id : void 0, (_0x5e2b46 && await rs.set({ 'langPack': _0x5e2b46 }), _0x126614);
}
async function rl() {
    const _0x58277d = {
            auth_key_fingerprint: _0x54ade8,
            userId: typeof _0x26bdae == 'string' || typeof _0x26bdae == 'number' ? +_0x26bdae : _0x26bdae?.id ? +_0x26bdae.id : void 0
        }, _0x40433e = ((async () => {
            const _0x342526 = [];
            for (let _0x5852ee = 1; _0x5852ee <= 5; _0x5852ee++) {
                const _0x1da863 = 'dc' + _0x5852ee + '_auth_key', _0xb131b5 = 'dc' + _0x5852ee + '_server_salt';
                [_0x58277d[_0x1da863], _0x58277d[_0xb131b5]] = await Promise.all([
                    j.get(_0x1da863),
                    j.get(_0xb131b5)
                ]);
                _0x342526.push(() => Promise.all([
                    j.delete(_0x1da863),
                    j.delete(_0xb131b5)
                ]));
                ;
            }
            return () => Promise.all(_0x342526.map(_0x3c763b => _0x3c763b()));
        })()), [_0x26bdae, _0x54ade8, _0x11435d] = await Promise.all([
            j.get('user_auth'),
            j.get('auth_key_fingerprint'),
            _0x40433e
        ]);
    ;
    ;
    await os.update(1, _0x58277d, true);
    ;
}
async function al() {
    const _0xf0e965 = Gr(void 0), _0x25dd6c = Gr(1), [_0x1f84c3, _0x59da9b, _0x2b001d] = await Promise.all([
            _0xf0e965.users.getAll(),
            _0xf0e965.chats.getAll(),
            _0xf0e965.dialogs.getAll()
        ]), _0x1d9c4a = (_0x3dea4e, _0x120d3e) => _0x3dea4e.reduce((_0x242815, _0x172fa0) => (_0x242815[_0x172fa0[_0x120d3e]] = _0x172fa0, _0x242815), {});
    await Promise.all([
        _0x25dd6c.users.set(_0x1d9c4a(_0x1f84c3, 'id')),
        _0x25dd6c.chats.set(_0x1d9c4a(_0x59da9b, 'id')),
        _0x25dd6c.dialogs.set(_0x1d9c4a(_0x2b001d, 'peerId'))
    ]);
}
async function ol() {
    ;
    return !!await os.get(1);
}
function cl() {
    ;
    return Wf.deleteDatabaseByName(Vi().name);
}
async function dl() {
    const _0x3d5034 = await j.get('k_build');
    _0x3d5034 !== Rs && (!_0x3d5034 || _0x3d5034 < Rs) && await j.set({ 'k_build': Rs });
}
async function ll() {
    ;
    performance.now();
    const _0x57deef = await ol() && !sl;
    let _0x1d73fc;
    const _0x3b2dbb = Promise.all([
        gf(2),
        gf(3),
        gf(4)
    ]);
    _0x57deef ? _0x1d73fc = await gf(1) : (_0x1d73fc = await il(), await Promise.all([
        rl(),
        al()
    ]), _0x1d73fc.refetchStorages = true, cl());
    dl();
    ;
    const [..._0x5d308a] = await _0x3b2dbb, _0xc6a324 = {};
    return _0xc6a324['1'] = _0x1d73fc, _0xc6a324['2'] = _0x5d308a[0], _0xc6a324['3'] = _0x5d308a[1], _0xc6a324['4'] = _0x5d308a[2], _0xc6a324;
}
let ul;
function hl() {
    return ul ?? (ul = ll());
}
class ml {
    constructor() {
        ;
        this.sampleRate = 48000;
        this.tasks = [];
        this.keepAlive = false;
        this.log = Q('OPUS', ef.Error);
        ;
    }
    ['isPlaySupported']() {
        return wo;
    }
    ['loadWavWorker']() {
        ;
        this.wavWorker || (this.wavWorker = new Worker('waveWorker.min.js'), this.wavWorker.addEventListener('message', _0x1e92fb => {
            const _0x4225de = _0x1e92fb.data;
            if (this.log('[WAV] got message:', _0x4225de), _0x4225de && _0x4225de.page) {
                const _0x4af6ec = _0x4225de.page;
                this.onTaskEnd(this.tasks.shift(), _0x4af6ec);
            }
        }));
    }
    ['loadWorker']() {
        ;
        this.worker || (this.worker = new Worker('decoderWorker.min.js'), this.worker.addEventListener('message', _0x3efb72 => {
            const _0x5cc791 = _0x3efb72.data, _0xb26f94 = { command: 'done' };
            ;
            const _0x33a7f8 = {
                command: 'encode',
                buffers: _0x3efb72.data
            };
            ;
            ;
            this.log('[DECODER] got message', _0x5cc791);
            _0x5cc791.type === 'done' ? (this.wavWorker.postMessage(_0xb26f94), _0x5cc791.waveform && (this.tasks[0].waveform = _0x5cc791.waveform)) : this.wavWorker.postMessage(_0x33a7f8, be ? void 0 : _0x5cc791.map(_0x42ef8c => _0x42ef8c.buffer));
            ;
            ;
        }));
    }
    ['setKeepAlive'](_0x341c8e) {
        ;
        this.keepAlive = _0x341c8e;
        this.keepAlive ? (this.loadWorker(), this.loadWavWorker()) : this.tasks.length || this.terminateWorkers();
        ;
    }
    ['onTaskEnd'](_0x2cf149, _0x31d667) {
        ;
        _0x31d667 ? (clearTimeout(_0x2cf149.timeout), _0x2cf149.callback.resolve({
            'bytes': _0x31d667,
            'waveform': _0x2cf149.waveform
        })) : _0x2cf149.callback.reject('timeout');
        this.tasks.length && this.executeNewTask(this.tasks[0]);
        this.terminateWorkers();
        ;
    }
    ['terminateWorkers'](_0x2a5f68 = false) {
        ;
        (this.keepAlive || this.tasks.length) && !_0x2a5f68 || (this.worker && (this.worker.terminate(), this.worker = null), this.wavWorker && (this.wavWorker.terminate(), this.wavWorker = null));
    }
    ['executeNewTask'](_0x19068d) {
        const _0x40342b = {
            command: 'decode',
            pages: _0x19068d.pages,
            waveform: _0x19068d.withWaveform
        };
        ;
        ;
        ;
        this.worker.postMessage({
            'command': 'init',
            'decoderSampleRate': this.sampleRate,
            'outputBufferSampleRate': this.sampleRate
        });
        this.wavWorker.postMessage({
            'command': 'init',
            'wavBitDepth': 16,
            'wavSampleRate': this.sampleRate
        });
        this.log('[DECODER] send decode');
        this.worker.postMessage(_0x40342b, be ? void 0 : [_0x19068d.pages.buffer]);
        _0x19068d.timeout = window.setTimeout(() => {
            ;
            this.log.error('decode timeout');
            this.terminateWorkers(true);
            this.tasks.length && (this.loadWorker(), this.loadWavWorker());
            this.onTaskEnd(this.tasks.shift());
            ;
        }, 10000);
        ;
        ;
    }
    ['pushDecodeTask'](_0x535fc7, _0x39e752) {
        ;
        return new Promise((_0x1cfcc6, _0x3bdb18) => {
            const _0x5004e7 = {
                resolve: _0x1cfcc6,
                reject: _0x3bdb18
            };
            ;
            ;
            ;
            const _0x5d10e6 = {
                pages: _0x535fc7,
                withWaveform: _0x39e752,
                callback: _0x5004e7,
                timeout: 0
            };
            ;
            ;
            ;
            ;
            ;
            const _0xd26632 = _0x5d10e6;
            this.loadWorker();
            this.loadWavWorker();
            this.tasks.push(_0xd26632) === 1 && this.executeNewTask(_0xd26632);
            ;
        });
    }
    async ['decode'](_0x5cd92e, _0xebd28 = false) {
        ;
        return this.pushDecodeTask(_0x5cd92e, _0xebd28).then(async _0x2e00b7 => {
            const _0x3c0362 = { type: 'audio/wav' };
            ;
            const _0x39f5e3 = new Blob([_0x2e00b7.bytes], _0x3c0362);
            return {
                'url': await re.invoke('createObjectURL', _0x39f5e3),
                'waveform': _0x2e00b7.waveform
            };
        });
    }
}
const To = new ml();
N.opusDecodeController = To;
function gl(_0x5c6b3b) {
    ;
    return [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/svg+xml',
        'image/webp',
        'image/bmp',
        'image/avif',
        'image/jxl',
        'video/mp4',
        'video/webm',
        'video/quicktime',
        'audio/ogg',
        'audio/mpeg',
        'audio/mp4',
        'audio/wav',
        'application/json',
        'application/pdf'
    ].indexOf(_0x5c6b3b) === -1 ? 'application/octet-stream' : _0x5c6b3b;
}
function fr(_0x11bbee, _0x148dcd = '') {
    _0x11bbee = Lt(_0x11bbee);
    const _0x3ac7f9 = gl(_0x148dcd), _0x3650f5 = {};
    return _0x3650f5.type = _0x3ac7f9, new Blob(_0x11bbee, _0x3650f5);
}
function pl(_0x1359c5, _0x3654f0) {
    ;
    return new Promise(_0x44bd87 => {
        ;
        const _0x4a5c91 = new FileReader();
        _0x4a5c91.addEventListener('loadend', _0x234cba => {
            ;
            _0x44bd87(_0x234cba.target.result);
        });
        _0x4a5c91[_0x3654f0](_0x1359c5);
        ;
    });
}
function bl(_0x110f9d) {
    ;
    return pl(_0x110f9d, 'readAsArrayBuffer');
}
function qr(_0xa65106) {
    ;
    return bl(_0xa65106).then(_0x5e0bb4 => new Uint8Array(_0x5e0bb4));
}
class yl {
    constructor(_0x152532, _0x314a90, _0x1d88a5) {
        ;
        this.mimeType = _0x152532;
        this.size = _0x314a90;
        this.saveFileCallback = _0x1d88a5;
        this.bytes = new Uint8Array(_0x314a90);
        ;
    }
    async ['write'](_0x20a9a6, _0x3908c8) {
        const _0x19103a = _0x3908c8 + _0x20a9a6.byteLength;
        if (_0x19103a > this.bytes.byteLength) {
            const _0x136803 = new Uint8Array(_0x19103a);
            _0x136803.set(this.bytes, 0);
            this.bytes = _0x136803;
            ;
        }
        this.bytes.set(_0x20a9a6, _0x3908c8);
    }
    ['truncate']() {
        ;
        this.bytes = new Uint8Array();
    }
    ['trim'](_0x30285e) {
        ;
        this.bytes = this.bytes.slice(0, _0x30285e);
    }
    ['finalize'](_0x5d6827 = true) {
        const _0x4d5899 = fr(this.bytes, this.mimeType);
        return _0x5d6827 && this.saveFileCallback && this.saveFileCallback(_0x4d5899), _0x4d5899;
    }
    ['getParts']() {
        ;
        return this.bytes;
    }
    ['replaceParts'](_0x3a8aa1) {
        ;
        this.bytes = _0x3a8aa1;
    }
}
const a0_0x3b6188 = {};
a0_0x3b6188.encryptable = false;
const a0_0xe51db3 = {};
a0_0xe51db3.encryptable = false;
const a0_0x23fc60 = {};
a0_0x23fc60.encryptable = true;
const a0_0x2e76e6 = {};
a0_0x2e76e6.encryptable = true;
const a0_0x1e1945 = {};
a0_0x1e1945.encryptable = true;
const a0_0x323399 = {};
a0_0x323399.encryptable = true;
const a0_0x4be644 = {};
a0_0x4be644.cachedAssets = a0_0x3b6188;
a0_0x4be644.cachedBackgrounds = a0_0xe51db3;
a0_0x4be644.cachedFiles = a0_0x23fc60;
a0_0x4be644.cachedStreamChunks = a0_0x2e76e6;
a0_0x4be644.cachedHlsQualityFiles = a0_0x1e1945;
a0_0x4be644.cachedHlsStreamChunks = a0_0x323399;
;
const _n = a0_0x4be644, Ae = class Ae {
        constructor(_0x111071) {
            ;
            this.dbName = _0x111071;
            this.useStorage = true;
            Ae.STORAGES.length && (this.useStorage = Ae.STORAGES[0].useStorage);
            this.config = Object.entries(_n).find(([_0x535541]) => _0x535541 === _0x111071)?.[1];
            this.openDatabase();
            Ae.STORAGES.push(this);
            ;
        }
        static async ['encrypt'](_0xcc11c1) {
            const _0x3b8ee4 = await ct.get(), _0x294a99 = await qr(_0xcc11c1), _0x3f5593 = _0xcc11c1.type, _0x4e610c = await it.invokeCryptoNew({
                    'method': 'aes-local-encrypt',
                    'args': [{
                            'key': _0x3b8ee4,
                            'data': _0x294a99
                        }],
                    'transfer': [_0x294a99.buffer]
                }), _0x5c459f = {};
            return _0x5c459f.type = _0x3f5593, new Blob([_0x4e610c], _0x5c459f);
        }
        static async ['decrypt'](_0x28fc80) {
            const _0x4319c5 = await ct.get(), _0x1d11ba = await qr(_0x28fc80), _0x4bbff8 = _0x28fc80.type, _0x43b921 = await it.invokeCryptoNew({
                    'method': 'aes-local-decrypt',
                    'args': [{
                            'key': _0x4319c5,
                            'encryptedData': _0x1d11ba
                        }],
                    'transfer': [_0x1d11ba.buffer]
                }), _0x5c8df3 = {};
            return _0x5c8df3.type = _0x4bbff8, new Blob([_0x43b921], _0x5c8df3);
        }
        async ['waitToEnable']() {
            ;
            Ae.disabledPromise && await Ae.disabledPromise;
        }
        ['openDatabase']() {
            ;
            return this.openDbPromise ?? (this.openDbPromise = caches.open(this.dbName));
        }
        ['delete'](_0xef8d11) {
            ;
            return this.timeoutOperation(_0x2464c5 => _0x2464c5.delete('/' + _0xef8d11));
        }
        ['deleteAll']() {
            ;
            return caches.delete(this.dbName);
        }
        async ['has'](_0x2a9fab) {
            ;
            return !!await this.timeoutOperation(_0x502643 => _0x502643.match('/' + _0x2a9fab));
        }
        async ['get'](_0x5d412c) {
            ;
            await this.waitToEnable();
            const _0x36c627 = await this.timeoutOperation(_0xa768b5 => _0xa768b5.match('/' + _0x5d412c));
            if (_0x36c627) {
                return this.config?.encryptable && await Me.isUsingPasscode() ? new Response(await Ae.decrypt(await _0x36c627.blob()), {
                    'headers': _0x36c627.headers,
                    'status': _0x36c627.status,
                    'statusText': _0x36c627.statusText
                }) : _0x36c627;
            }
        }
        async ['save'](_0x44d812, _0x21af73) {
            ;
            await this.waitToEnable();
            let _0x5c4209 = _0x21af73;
            return this.config?.encryptable && await Me.isUsingPasscode() && (_0x5c4209 = new Response(await Ae.encrypt(await _0x21af73.blob()), {
                'headers': _0x21af73.headers,
                'status': _0x21af73.status,
                'statusText': _0x21af73.statusText
            })), this.timeoutOperation(_0x2a613d => _0x2a613d.put('/' + _0x44d812, _0x5c4209));
        }
        ['getFile'](_0x45958d, _0x158da1 = 'blob') {
            ;
            return this.get(_0x45958d).then(_0x17ccf7 => {
                ;
                if (!_0x17ccf7) {
                    throw Ee('NO_ENTRY_FOUND');
                }
                return _0x17ccf7[_0x158da1]();
            });
        }
        ['saveFile'](_0x4f531b, _0xe9a2) {
            ;
            _0xe9a2 instanceof Blob || (_0xe9a2 = fr(_0xe9a2));
            const _0x4081ee = new Response(_0xe9a2, { 'headers': { 'Content-Length': '' + _0xe9a2.size } });
            return this.save(_0x4f531b, _0x4081ee).then(() => _0xe9a2);
        }
        ['timeoutOperation'](_0x393957) {
            ;
            return this.useStorage ? new Promise(async (_0x130241, _0x2d1a97) => {
                ;
                let _0x5009ef = false;
                const _0x230217 = setTimeout(() => {
                    _0x2d1a97();
                    _0x5009ef = true;
                    ;
                }, 15000);
                try {
                    const _0x5e2dfc = await this.openDatabase();
                    if (!_0x5e2dfc) {
                        throw this.useStorage = false, this.openDbPromise = void 0, 'no cache?';
                    }
                    const _0x5328e5 = await _0x393957(_0x5e2dfc);
                    if (_0x5009ef) {
                        return;
                    }
                    _0x130241(_0x5328e5);
                } catch (_0x1cbe99) {
                    _0x2d1a97(_0x1cbe99);
                }
                clearTimeout(_0x230217);
            }) : Promise.reject(Ee('STORAGE_OFFLINE'));
        }
        ['prepareWriting'](_0x2439c8, _0x159459, _0x15cf4a) {
            ;
            return {
                'deferred': q(),
                'getWriter': () => new yl(_0x15cf4a, _0x159459, _0x1f4d9d => this.saveFile(_0x2439c8, _0x1f4d9d).catch(() => _0x1f4d9d))
            };
        }
        static ['toggleStorage'](_0x4d6b63, _0x26a94b) {
            ;
            return this.STORAGES.forEach(_0x35b1dc => {
                ;
                _0x35b1dc.useStorage = _0x4d6b63;
            }), Promise.resolve();
        }
        static async ['deleteAllStorages']() {
            const _0x2d96e2 = Object.keys(_n);
            await Promise.all(_0x2d96e2.map(async _0x413809 => {
                ;
                await new Ae(_0x413809).deleteAll();
            }));
        }
        static ['temporarilyToggle'](_0x36ebdb) {
            ;
            _0x36ebdb ? (this.disabledPromise?.resolve(), this.disabledPromise = void 0) : this.disabledPromise = q();
        }
        static async ['clearEncryptableStorages']() {
            const _0x136e9b = Object.entries(_n).filter(([, {encryptable: _0x881b62}]) => _0x881b62).map(([_0x14aa15]) => _0x14aa15);
            await Promise.all(_0x136e9b.map(async _0x3a0f2f => {
                ;
                await new Ae(_0x3a0f2f).timeoutOperation(async _0x565291 => {
                    ;
                    const _0xfa83f2 = await _0x565291.keys();
                    await Promise.all(_0xfa83f2.map(_0x28df49 => _0x565291.delete(_0x28df49)));
                });
            }));
        }
    };
Ae.STORAGES = [];
let qf = Ae;
function $r(_0x5a6bac, _0xcf853c) {
    ;
    return Promise.all([
        It.toggleStorage(_0x5a6bac, _0xcf853c),
        qf.toggleStorage(_0x5a6bac, _0xcf853c),
        j.toggleStorage(_0x5a6bac, _0xcf853c)
    ]).then(ve, ve);
}
class vl extends Ui {
    constructor() {
        ;
        super('SERVICE');
        N && (N.serviceMessagePort = this);
        ;
    }
}
const El = '' + new URL('a5o3h7wp28n1.js', import.meta.url).href, nr = '\x01';
function $f(..._0x2e7f3c) {
    ;
    return _0x2e7f3c.join(nr);
}
function wl(_0x3ba241) {
    ;
    return _0x3ba241.split(nr);
}
function Dl(_0x1fa69b, _0x559612, _0x5469ba, _0x4bf046) {
    const _0x49c2e3 = _0x559612.split(nr), _0xa7a046 = _0x49c2e3.length;
    let _0x58b0bf = _0x1fa69b;
    for (let _0x529235 = 0; _0x529235 < _0xa7a046 - 1; ++_0x529235) {
        const _0x25d1c9 = _0x49c2e3[_0x529235];
        _0x58b0bf = _0x58b0bf[_0x25d1c9] ?? (_0x58b0bf[_0x25d1c9] = {});
    }
    const _0x2aaf6a = _0x49c2e3[_0xa7a046 - 1];
    _0x5469ba === void 0 && _0x4bf046 ? delete _0x58b0bf[_0x2aaf6a] : _0x58b0bf[_0x2aaf6a] = _0x5469ba;
}
const Ft = '_';
function ir(_0x14d16d, _0x37bcca) {
    const _0x2651f5 = ''[''.length - 1] || '';
    let _0x3b18de;
    switch (_0x14d16d['_']) {
    case 'inputPhotoFileLocation': {
            _0x3b18de = [
                'photo',
                ''[0],
                _0x14d16d.id,
                _0x14d16d.thumb_size
            ].filter(Boolean).join(Ft);
            break;
        }
    case 'inputDocumentFileLocation': {
            _0x3b18de = [
                'document',
                ''[0],
                _0x14d16d.id,
                _0x14d16d.thumb_size
            ].filter(Boolean).join(Ft);
            break;
        }
    case 'inputPeerPhotoFileLocation':
        _0x3b18de = [
            'peerPhoto',
            _0x14d16d.photo_id,
            _0x14d16d.pFlags.big ? 'big' : 'small'
        ].join(Ft);
        break;
    case 'inputStickerSetThumb': {
            _0x3b18de = [
                'stickerSetThumb',
                _0x14d16d.stickerset.id || _0x14d16d.stickerset.short_name || _0x14d16d.stickerset.emoticon || _0x14d16d.stickerset['_'],
                _0x14d16d.thumb_version
            ].join(Ft);
            break;
        }
    case 'inputFileLocation': {
            _0x3b18de = [
                _0x14d16d.volume_id,
                _0x14d16d.local_id
            ].join(Ft);
            break;
        }
    case 'inputWebFileLocation': {
            _0x3b18de = [
                'webFile',
                _0x14d16d.url
            ].join(Ft);
            break;
        }
    case 'inputWebFileGeoPointLocation': {
            const _0x1f8a49 = _0x14d16d.geo_point;
            _0x3b18de = [
                'geoPoint',
                _0x1f8a49.lat,
                _0x1f8a49.long,
                _0x14d16d.w,
                _0x14d16d.h,
                _0x14d16d.zoom,
                _0x14d16d.scale
            ].join(Ft);
            break;
        }
    default: {
            _0x3b18de = '';
            break;
        }
    }
    return _0x3b18de + (_0x37bcca?.downloadId ? '_download' : '') + (_0x2651f5 && '.' + _0x2651f5);
}
function Ym(_0x2bb2d3, _0x2c5a1a) {
    const _0x2d89c9 = encodeURIComponent(JSON.stringify(_0x2c5a1a));
    return _0x2bb2d3 + '/' + _0x2d89c9;
}
function rr(_0x16091b) {
    ;
    return _0x16091b?.['_'].includes('inputWebFile');
}
function Sl(_0x253e88) {
    ;
    return rr(_0x253e88) ? ir(_0x253e88) : _0x253e88['_'] + (_0x253e88.id ?? _0x253e88.url);
}
function Al(_0x2b81e9) {
    const _0xde9478 = {};
    return _0xde9478.downloaded = 0, _0xde9478.url = '', _0xde9478.type = _0x2b81e9, _0xde9478;
}
function ar(_0x5e4d75, _0x31b717) {
    return _0x5e4d75 + (_0x31b717 !== void 0 ? '-' + _0x31b717 : '');
}
function at(_0x533183, _0x411982) {
    ;
    return _0x533183 instanceof Promise ? _0x533183.then(_0x411982) : _0x411982(_0x533183);
}
function Yr(_0x17eb59) {
    ;
    return typeof _0x17eb59 == 'number' && _0x17eb59 < Mf;
}
const cs = Symbol('store-raw'), Je = Symbol('store-node'), Ce = Symbol('store-has'), Lo = Symbol('store-self');
function xo(_0x58e30d) {
    ;
    let _0x25ce70 = _0x58e30d[ie];
    if (!_0x25ce70 && (Object.defineProperty(_0x58e30d, ie, { 'value': _0x25ce70 = new Proxy(_0x58e30d, kl) }), !Array.isArray(_0x58e30d))) {
        const _0x2bba31 = Object.keys(_0x58e30d), _0x11f7ef = Object.getOwnPropertyDescriptors(_0x58e30d);
        for (let _0x4dab44 = 0, _0x53fba8 = _0x2bba31.length; _0x4dab44 < _0x53fba8; _0x4dab44++) {
            const _0x416b9d = _0x2bba31[_0x4dab44];
            _0x11f7ef[_0x416b9d].get && Object.defineProperty(_0x58e30d, _0x416b9d, {
                'enumerable': _0x11f7ef[_0x416b9d].enumerable,
                'get': _0x11f7ef[_0x416b9d].get.bind(_0x25ce70)
            });
        }
    }
    return _0x25ce70;
}
function Ue(_0x3553f7) {
    ;
    let _0xd5822d;
    return _0x3553f7 != null && typeof _0x3553f7 == 'object' && (_0x3553f7[ie] || !(_0xd5822d = Object.getPrototypeOf(_0x3553f7)) || _0xd5822d === Object.prototype || Array.isArray(_0x3553f7));
}
function we(_0x5146c4, _0x5b6926 = new Set()) {
    ;
    let _0x549cc2, _0x292b65, _0x449004, _0x4b2569;
    if (_0x549cc2 = _0x5146c4 != null && _0x5146c4[cs]) {
        return _0x549cc2;
    }
    if (!Ue(_0x5146c4) || _0x5b6926.has(_0x5146c4)) {
        return _0x5146c4;
    }
    if (Array.isArray(_0x5146c4)) {
        Object.isFrozen(_0x5146c4) ? _0x5146c4 = _0x5146c4.slice(0) : _0x5b6926.add(_0x5146c4);
        for (let _0x8b3536 = 0, _0x375daf = _0x5146c4.length; _0x8b3536 < _0x375daf; _0x8b3536++) {
            _0x449004 = _0x5146c4[_0x8b3536];
            (_0x292b65 = we(_0x449004, _0x5b6926)) !== _0x449004 && (_0x5146c4[_0x8b3536] = _0x292b65);
            ;
        }
    } else {
        Object.isFrozen(_0x5146c4) ? _0x5146c4 = Object.assign({}, _0x5146c4) : _0x5b6926.add(_0x5146c4);
        const _0x30f420 = Object.keys(_0x5146c4), _0x33d66e = Object.getOwnPropertyDescriptors(_0x5146c4);
        for (let _0x455cd2 = 0, _0x515d09 = _0x30f420.length; _0x455cd2 < _0x515d09; _0x455cd2++) {
            _0x4b2569 = _0x30f420[_0x455cd2];
            !_0x33d66e[_0x4b2569].get && (_0x449004 = _0x5146c4[_0x4b2569], (_0x292b65 = we(_0x449004, _0x5b6926)) !== _0x449004 && (_0x5146c4[_0x4b2569] = _0x292b65));
            ;
        }
    }
    return _0x5146c4;
}
function ds(_0x2bc6be, _0x3093f1) {
    ;
    let _0x63ec9f = _0x2bc6be[_0x3093f1];
    return _0x63ec9f || Object.defineProperty(_0x2bc6be, _0x3093f1, { 'value': _0x63ec9f = Object.create(null) }), _0x63ec9f;
}
function Rt(_0x4661fa, _0x24cc51, _0x15affb) {
    ;
    if (_0x4661fa[_0x24cc51]) {
        return _0x4661fa[_0x24cc51];
    }
    const _0xf265c2 = {
        equals: false,
        internal: true
    };
    ;
    ;
    ;
    const [_0x5ca3ae, _0x5a382a] = ke(_0x15affb, _0xf265c2);
    return _0x5ca3ae['$'] = _0x5a382a, _0x4661fa[_0x24cc51] = _0x5ca3ae;
}
function Cl(_0x443130, _0x10597b) {
    const _0x5ced53 = Reflect.getOwnPropertyDescriptor(_0x443130, _0x10597b);
    return !_0x5ced53 || _0x5ced53.get || !_0x5ced53.configurable || _0x10597b === ie || _0x10597b === Je || (delete _0x5ced53.value, delete _0x5ced53.writable, _0x5ced53.get = () => _0x443130[ie][_0x10597b]), _0x5ced53;
}
function or(_0x438dd0) {
    qs() && Rt(ds(_0x438dd0, Je), Lo)();
}
function Mo(_0x28ad69) {
    ;
    return or(_0x28ad69), Reflect.ownKeys(_0x28ad69);
}
const kl = {
    'get'(_0x22ac27, _0x78bd30, _0x326282) {
        ;
        if (_0x78bd30 === cs) {
            return _0x22ac27;
        }
        if (_0x78bd30 === ie) {
            return _0x326282;
        }
        if (_0x78bd30 === Gs) {
            return or(_0x22ac27), _0x326282;
        }
        const _0x26c4d6 = ds(_0x22ac27, Je), _0x390503 = _0x26c4d6[_0x78bd30];
        let _0x1b0ba5 = _0x390503 ? _0x390503() : _0x22ac27[_0x78bd30];
        if (_0x78bd30 === Je || _0x78bd30 === Ce || _0x78bd30 === '__proto__') {
            return _0x1b0ba5;
        }
        if (!_0x390503) {
            const _0x142818 = Object.getOwnPropertyDescriptor(_0x22ac27, _0x78bd30);
            qs() && (typeof _0x1b0ba5 != 'function' || _0x22ac27.hasOwnProperty(_0x78bd30)) && !(_0x142818 && _0x142818.get) && (_0x1b0ba5 = Rt(_0x26c4d6, _0x78bd30, _0x1b0ba5)());
        }
        return Ue(_0x1b0ba5) ? xo(_0x1b0ba5) : _0x1b0ba5;
    },
    'has'(_0x528d05, _0x1d5f44) {
        ;
        return _0x1d5f44 === cs || _0x1d5f44 === ie || _0x1d5f44 === Gs || _0x1d5f44 === Je || _0x1d5f44 === Ce || _0x1d5f44 === '__proto__' ? true : (qs() && Rt(ds(_0x528d05, Ce), _0x1d5f44)(), _0x1d5f44 in _0x528d05);
    },
    'set'() {
        return true;
    },
    'deleteProperty'() {
        return true;
    },
    'ownKeys': Mo,
    'getOwnPropertyDescriptor': Cl
};
function ce(_0x47b8a8, _0x3a4282, _0x2411fc, _0x29c08d = false) {
    ;
    if (!_0x29c08d && _0x47b8a8[_0x3a4282] === _0x2411fc) {
        return;
    }
    const _0x309383 = _0x47b8a8[_0x3a4282], _0x1426ae = _0x47b8a8.length;
    _0x2411fc === void 0 ? (delete _0x47b8a8[_0x3a4282], _0x47b8a8[Ce] && _0x47b8a8[Ce][_0x3a4282] && _0x309383 !== void 0 && _0x47b8a8[Ce][_0x3a4282]['$']()) : (_0x47b8a8[_0x3a4282] = _0x2411fc, _0x47b8a8[Ce] && _0x47b8a8[Ce][_0x3a4282] && _0x309383 === void 0 && _0x47b8a8[Ce][_0x3a4282]['$']());
    let _0x59a6d8 = ds(_0x47b8a8, Je), _0xd46c1d;
    if ((_0xd46c1d = Rt(_0x59a6d8, _0x3a4282, _0x309383)) && _0xd46c1d['$'](() => _0x2411fc), Array.isArray(_0x47b8a8) && _0x47b8a8.length !== _0x1426ae) {
        for (let _0x11ecc4 = _0x47b8a8.length; _0x11ecc4 < _0x1426ae; _0x11ecc4++) {
            (_0xd46c1d = _0x59a6d8[_0x11ecc4]) && _0xd46c1d['$']();
        }
        (_0xd46c1d = Rt(_0x59a6d8, 'length', _0x1426ae)) && _0xd46c1d['$'](_0x47b8a8.length);
    }
    (_0xd46c1d = _0x59a6d8[Lo]) && _0xd46c1d['$']();
}
function Io(_0x45c9c1, _0x34c11c) {
    const _0x19e793 = Object.keys(_0x34c11c);
    for (let _0x3fb5de = 0; _0x3fb5de < _0x19e793.length; _0x3fb5de += 1) {
        const _0x59acc2 = _0x19e793[_0x3fb5de];
        ce(_0x45c9c1, _0x59acc2, _0x34c11c[_0x59acc2]);
    }
}
function Fl(_0x2627a0, _0xafa204) {
    ;
    if (typeof _0xafa204 == 'function' && (_0xafa204 = _0xafa204(_0x2627a0)), _0xafa204 = we(_0xafa204), Array.isArray(_0xafa204)) {
        if (_0x2627a0 === _0xafa204) {
            return;
        }
        let _0x20fcce = 0, _0x585b55 = _0xafa204.length;
        for (; _0x20fcce < _0x585b55; _0x20fcce++) {
            const _0x19522d = _0xafa204[_0x20fcce];
            _0x2627a0[_0x20fcce] !== _0x19522d && ce(_0x2627a0, _0x20fcce, _0x19522d);
        }
        ce(_0x2627a0, 'length', _0x585b55);
    } else {
        Io(_0x2627a0, _0xafa204);
    }
}
function Fs(_0x1254c0, _0x5a99ac, _0x807091 = []) {
    ;
    let _0x41c0aa, _0x8382fc = _0x1254c0;
    if (_0x5a99ac.length > 1) {
        _0x41c0aa = _0x5a99ac.shift();
        const _0x1f55a6 = typeof _0x41c0aa, _0x74f8ab = Array.isArray(_0x1254c0);
        if (Array.isArray(_0x41c0aa)) {
            for (let _0x519abb = 0; _0x519abb < _0x41c0aa.length; _0x519abb++) {
                Fs(_0x1254c0, [_0x41c0aa[_0x519abb]].concat(_0x5a99ac), _0x807091);
            }
            return;
        } else {
            if (_0x74f8ab && _0x1f55a6 === 'function') {
                for (let _0x4dd67b = 0; _0x4dd67b < _0x1254c0.length; _0x4dd67b++) {
                    _0x41c0aa(_0x1254c0[_0x4dd67b], _0x4dd67b) && Fs(_0x1254c0, [_0x4dd67b].concat(_0x5a99ac), _0x807091);
                }
                return;
            } else {
                if (_0x74f8ab && _0x1f55a6 === 'object') {
                    const {
                        from: _0xc07cf3 = 0,
                        to: _0x357f86 = _0x1254c0.length - 1,
                        by: _0x200a97 = 1
                    } = _0x41c0aa;
                    for (let _0x28a189 = _0xc07cf3; _0x28a189 <= _0x357f86; _0x28a189 += _0x200a97) {
                        Fs(_0x1254c0, [_0x28a189].concat(_0x5a99ac), _0x807091);
                    }
                    return;
                } else {
                    if (_0x5a99ac.length > 1) {
                        Fs(_0x1254c0[_0x41c0aa], _0x5a99ac, [_0x41c0aa].concat(_0x807091));
                        return;
                    }
                }
            }
        }
        _0x8382fc = _0x1254c0[_0x41c0aa];
        _0x807091 = [_0x41c0aa].concat(_0x807091);
        ;
    }
    let _0x548945 = _0x5a99ac[0];
    typeof _0x548945 == 'function' && (_0x548945 = _0x548945(_0x8382fc, _0x807091), _0x548945 === _0x8382fc) || _0x41c0aa === void 0 && _0x548945 == null || (_0x548945 = we(_0x548945), _0x41c0aa === void 0 || Ue(_0x8382fc) && Ue(_0x548945) && !Array.isArray(_0x548945) ? Io(_0x8382fc, _0x548945) : ce(_0x1254c0, _0x41c0aa, _0x548945));
}
function cr(...[_0x1e72e5, _0x56f97a]) {
    const _0x163bf2 = we(_0x1e72e5 || {}), _0x2bff00 = Array.isArray(_0x163bf2), _0x5db82c = xo(_0x163bf2);
    function _0x104919(..._0x5b4897) {
        ;
        Zt(() => {
            ;
            _0x2bff00 && _0x5b4897.length === 1 ? Fl(_0x163bf2, _0x5b4897[0]) : Fs(_0x163bf2, _0x5b4897);
        });
    }
    return [
        _0x5db82c,
        _0x104919
    ];
}
function Pl(_0xd8f591, _0x17a6e7) {
    const _0x5518e0 = Reflect.getOwnPropertyDescriptor(_0xd8f591, _0x17a6e7);
    return !_0x5518e0 || _0x5518e0.get || _0x5518e0.set || !_0x5518e0.configurable || _0x17a6e7 === ie || _0x17a6e7 === Je || (delete _0x5518e0.value, delete _0x5518e0.writable, _0x5518e0.get = () => _0xd8f591[ie][_0x17a6e7], _0x5518e0.set = _0x4f9f69 => _0xd8f591[ie][_0x17a6e7] = _0x4f9f69), _0x5518e0;
}
const _l = {
    'get'(_0x54ae93, _0xa8925d, _0xfc84be) {
        ;
        if (_0xa8925d === cs) {
            return _0x54ae93;
        }
        if (_0xa8925d === ie) {
            return _0xfc84be;
        }
        if (_0xa8925d === Gs) {
            return or(_0x54ae93), _0xfc84be;
        }
        const _0x54b9aa = ds(_0x54ae93, Je), _0x13f1cc = _0x54b9aa[_0xa8925d];
        let _0x3e4b12 = _0x13f1cc ? _0x13f1cc() : _0x54ae93[_0xa8925d];
        if (_0xa8925d === Je || _0xa8925d === Ce || _0xa8925d === '__proto__') {
            return _0x3e4b12;
        }
        if (!_0x13f1cc) {
            const _0x96aeb4 = Object.getOwnPropertyDescriptor(_0x54ae93, _0xa8925d), _0x318af8 = typeof _0x3e4b12 == 'function';
            if (qs() && (!_0x318af8 || _0x54ae93.hasOwnProperty(_0xa8925d)) && !(_0x96aeb4 && _0x96aeb4.get)) {
                _0x3e4b12 = Rt(_0x54b9aa, _0xa8925d, _0x3e4b12)();
            } else {
                if (_0x3e4b12 != null && _0x318af8 && _0x3e4b12 === Array.prototype[_0xa8925d]) {
                    return (..._0x3298e8) => Zt(() => Array.prototype[_0xa8925d].apply(_0xfc84be, _0x3298e8));
                }
            }
        }
        return Ue(_0x3e4b12) ? Ro(_0x3e4b12) : _0x3e4b12;
    },
    'has'(_0x33f197, _0x2daa56) {
        ;
        return _0x2daa56 === cs || _0x2daa56 === ie || _0x2daa56 === Gs || _0x2daa56 === Je || _0x2daa56 === Ce || _0x2daa56 === '__proto__' ? true : (qs() && Rt(ds(_0x33f197, Ce), _0x2daa56)(), _0x2daa56 in _0x33f197);
    },
    'set'(_0x1798f1, _0x386f06, _0x3fcb23) {
        return Zt(() => ce(_0x1798f1, _0x386f06, we(_0x3fcb23))), true;
    },
    'deleteProperty'(_0x2a0d16, _0x2abae7) {
        return Zt(() => ce(_0x2a0d16, _0x2abae7, void 0, true)), true;
    },
    'ownKeys': Mo,
    'getOwnPropertyDescriptor': Pl
};
function Ro(_0x357ddf) {
    ;
    let _0x13eb42 = _0x357ddf[ie];
    if (!_0x13eb42) {
        Object.defineProperty(_0x357ddf, ie, { 'value': _0x13eb42 = new Proxy(_0x357ddf, _l) });
        const _0xaf0eae = Object.keys(_0x357ddf), _0x233206 = Object.getOwnPropertyDescriptors(_0x357ddf), _0x307d2a = Object.getPrototypeOf(_0x357ddf), _0x3f36ae = _0x357ddf !== null && typeof _0x357ddf == 'object' && !Array.isArray(_0x357ddf) && _0x307d2a !== Object.prototype;
        if (_0x3f36ae) {
            const _0x39105f = Object.getOwnPropertyDescriptors(_0x307d2a);
            _0xaf0eae.push(...Object.keys(_0x39105f));
            Object.assign(_0x233206, _0x39105f);
            ;
        }
        for (let _0x3909f7 = 0, _0x35e1ea = _0xaf0eae.length; _0x3909f7 < _0x35e1ea; _0x3909f7++) {
            const _0x7ebbe1 = _0xaf0eae[_0x3909f7];
            if (!(_0x3f36ae && _0x7ebbe1 === 'constructor')) {
                if (_0x233206[_0x7ebbe1].get) {
                    const _0x31bedc = _0x233206[_0x7ebbe1].get.bind(_0x13eb42), _0x25dc11 = {
                            get: _0x31bedc,
                            configurable: true
                        };
                    ;
                    ;
                    Object.defineProperty(_0x357ddf, _0x7ebbe1, _0x25dc11);
                    ;
                }
                if (_0x233206[_0x7ebbe1].set) {
                    const _0x13eb49 = _0x233206[_0x7ebbe1].set;
                    Object.defineProperty(_0x357ddf, _0x7ebbe1, {
                        'set': _0x35eec9 => Zt(() => _0x13eb49.call(_0x13eb42, _0x35eec9)),
                        'configurable': true
                    });
                }
            }
        }
    }
    return _0x13eb42;
}
function Kr(_0x1b8531, _0x4834a7) {
    const _0x4c8dbf = we(_0x1b8531 || {});
    return Ro(_0x4c8dbf);
}
function Tl(_0x12f847, _0x14a7e9) {
    Zt(() => _0x14a7e9(we(_0x12f847)));
}
const Yn = Symbol('store-root');
function $t(_0x443308, _0x57d430, _0x2d582b, _0x56c610, _0xd7afe1) {
    const _0x347d50 = _0x57d430[_0x2d582b];
    if (_0x443308 === _0x347d50) {
        return;
    }
    const _0x5b7c56 = Array.isArray(_0x443308);
    if (_0x2d582b !== Yn && (!Ue(_0x443308) || !Ue(_0x347d50) || _0x5b7c56 !== Array.isArray(_0x347d50) || _0xd7afe1 && _0x443308[_0xd7afe1] !== _0x347d50[_0xd7afe1])) {
        ce(_0x57d430, _0x2d582b, _0x443308);
        return;
    }
    if (_0x5b7c56) {
        if (_0x443308.length && _0x347d50.length && (!_0x56c610 || _0xd7afe1 && _0x443308[0] && _0x443308[0][_0xd7afe1] != null)) {
            let _0x238ff8, _0x14d6a3, _0x113011, _0x57b0de, _0x9ee2a1, _0x546030, _0x118e59, _0x90de30;
            for (_0x113011 = 0, _0x57b0de = Math.min(_0x347d50.length, _0x443308.length); _0x113011 < _0x57b0de && (_0x347d50[_0x113011] === _0x443308[_0x113011] || _0xd7afe1 && _0x347d50[_0x113011] && _0x443308[_0x113011] && _0x347d50[_0x113011][_0xd7afe1] === _0x443308[_0x113011][_0xd7afe1]); _0x113011++) {
                $t(_0x443308[_0x113011], _0x347d50, _0x113011, _0x56c610, _0xd7afe1);
            }
            const _0x34ec3a = new Array(_0x443308.length), _0x59b61b = new Map();
            for (_0x57b0de = _0x347d50.length - 1, _0x9ee2a1 = _0x443308.length - 1; _0x57b0de >= _0x113011 && _0x9ee2a1 >= _0x113011 && (_0x347d50[_0x57b0de] === _0x443308[_0x9ee2a1] || _0xd7afe1 && _0x347d50[_0x113011] && _0x443308[_0x113011] && _0x347d50[_0x57b0de][_0xd7afe1] === _0x443308[_0x9ee2a1][_0xd7afe1]); _0x57b0de--, _0x9ee2a1--) {
                _0x34ec3a[_0x9ee2a1] = _0x347d50[_0x57b0de];
            }
            if (_0x113011 > _0x9ee2a1 || _0x113011 > _0x57b0de) {
                for (_0x14d6a3 = _0x113011; _0x14d6a3 <= _0x9ee2a1; _0x14d6a3++) {
                    ce(_0x347d50, _0x14d6a3, _0x443308[_0x14d6a3]);
                }
                for (; _0x14d6a3 < _0x443308.length; _0x14d6a3++) {
                    ce(_0x347d50, _0x14d6a3, _0x34ec3a[_0x14d6a3]);
                    $t(_0x443308[_0x14d6a3], _0x347d50, _0x14d6a3, _0x56c610, _0xd7afe1);
                    ;
                }
                _0x347d50.length > _0x443308.length && ce(_0x347d50, 'length', _0x443308.length);
                return;
            }
            for (_0x118e59 = new Array(_0x9ee2a1 + 1), _0x14d6a3 = _0x9ee2a1; _0x14d6a3 >= _0x113011; _0x14d6a3--) {
                _0x546030 = _0x443308[_0x14d6a3];
                _0x90de30 = _0xd7afe1 && _0x546030 ? _0x546030[_0xd7afe1] : _0x546030;
                _0x238ff8 = _0x59b61b.get(_0x90de30);
                _0x118e59[_0x14d6a3] = _0x238ff8 === void 0 ? -1 : _0x238ff8;
                _0x59b61b.set(_0x90de30, _0x14d6a3);
                ;
            }
            for (_0x238ff8 = _0x113011; _0x238ff8 <= _0x57b0de; _0x238ff8++) {
                _0x546030 = _0x347d50[_0x238ff8];
                _0x90de30 = _0xd7afe1 && _0x546030 ? _0x546030[_0xd7afe1] : _0x546030;
                _0x14d6a3 = _0x59b61b.get(_0x90de30);
                _0x14d6a3 !== void 0 && _0x14d6a3 !== -1 && (_0x34ec3a[_0x14d6a3] = _0x347d50[_0x238ff8], _0x14d6a3 = _0x118e59[_0x14d6a3], _0x59b61b.set(_0x90de30, _0x14d6a3));
                ;
            }
            for (_0x14d6a3 = _0x113011; _0x14d6a3 < _0x443308.length; _0x14d6a3++) {
                _0x14d6a3 in _0x34ec3a ? (ce(_0x347d50, _0x14d6a3, _0x34ec3a[_0x14d6a3]), $t(_0x443308[_0x14d6a3], _0x347d50, _0x14d6a3, _0x56c610, _0xd7afe1)) : ce(_0x347d50, _0x14d6a3, _0x443308[_0x14d6a3]);
            }
        } else {
            for (let _0x46eccb = 0, _0x541798 = _0x443308.length; _0x46eccb < _0x541798; _0x46eccb++) {
                $t(_0x443308[_0x46eccb], _0x347d50, _0x46eccb, _0x56c610, _0xd7afe1);
            }
        }
        _0x347d50.length > _0x443308.length && ce(_0x347d50, 'length', _0x443308.length);
        return;
    }
    const _0x4f1dd1 = Object.keys(_0x443308);
    for (let _0x43daa9 = 0, _0x2c6599 = _0x4f1dd1.length; _0x43daa9 < _0x2c6599; _0x43daa9++) {
        $t(_0x443308[_0x4f1dd1[_0x43daa9]], _0x347d50, _0x4f1dd1[_0x43daa9], _0x56c610, _0xd7afe1);
    }
    const _0x4fcf00 = Object.keys(_0x347d50);
    for (let _0x32c62d = 0, _0x56e6b3 = _0x4fcf00.length; _0x32c62d < _0x56e6b3; _0x32c62d++) {
        _0x443308[_0x4fcf00[_0x32c62d]] === void 0 && ce(_0x347d50, _0x4fcf00[_0x32c62d], void 0);
    }
}
function dr(_0x5e322e, _0x2a1846 = {}) {
    const {
            merge: _0x51d033,
            key: _0x3ba900 = 'id'
        } = _0x2a1846, _0x387397 = we(_0x5e322e);
    return _0x5c7d50 => {
        if (!Ue(_0x5c7d50) || !Ue(_0x387397)) {
            return _0x387397;
        }
        const _0x5284bf = { Yn: _0x5c7d50 };
        ;
        const _0x269637 = $t(_0x387397, _0x5284bf, Yn, _0x51d033, _0x3ba900);
        return _0x269637 === void 0 ? _0x5c7d50 : _0x269637;
    };
}
const Yf = new WeakMap(), Oo = {
        'get'(_0x1909f6, _0x4b6979) {
            ;
            if (_0x4b6979 === cs) {
                return _0x1909f6;
            }
            const _0x2e0970 = _0x1909f6[_0x4b6979];
            let _0x58c7f3;
            return Ue(_0x2e0970) ? Yf.get(_0x2e0970) || (Yf.set(_0x2e0970, _0x58c7f3 = new Proxy(_0x2e0970, Oo)), _0x58c7f3) : _0x2e0970;
        },
        'set'(_0x210e06, _0x1980de, _0x58a1b8) {
            return ce(_0x210e06, _0x1980de, we(_0x58a1b8)), true;
        },
        'deleteProperty'(_0x1ea865, _0x56fd1e) {
            return ce(_0x1ea865, _0x56fd1e, void 0, true), true;
        }
    };
function Ll(_0x5b41c1) {
    ;
    return _0x5097ac => {
        ;
        if (Ue(_0x5097ac)) {
            let _0x441f4c;
            (_0x441f4c = Yf.get(_0x5097ac)) || Yf.set(_0x5097ac, _0x441f4c = new Proxy(_0x5097ac, Oo));
            _0x5b41c1(_0x441f4c);
            ;
        }
        return _0x5097ac;
    };
}
const [No, Kn] = vt(() => cr({})), xl = (..._0x30bed7) => {
        const _0x48e4a2 = _0x30bed7[0];
        Kn(..._0x30bed7);
        I.managers.appStateManager.setByKey(_0x48e4a2, we(No[_0x48e4a2]));
        ;
    }, Jr = (_0x406188, _0x38e993) => {
        if (typeof _0x406188 == 'object') {
            Kn(_0x406188);
            return;
        }
        Kn(_0x406188, dr(_0x38e993));
    }, Km = () => [
        No,
        xl
    ];
function Ml(_0x393097, _0x58fa44 = 'asc') {
    ;
    if (!_0x393097) {
        return [];
    }
    const _0x42bea4 = _0x393097 instanceof Map ? [..._0x393097.keys()] : Object.keys(_0x393097).map(_0xcea20f => +_0xcea20f);
    return _0x58fa44 === 'asc' ? _0x42bea4.sort((_0x346751, _0x27bb82) => _0x346751 - _0x27bb82) : _0x42bea4.sort((_0x4e621d, _0xc9bed8) => _0xc9bed8 - _0x4e621d);
}
const [lr, Bo] = cr({});
function ur(_0x7ea0d7, _0x5bce82) {
    ;
    return typeof _0x7ea0d7 == 'function' ? Be(() => _0x5bce82(_0x7ea0d7())) : _0x5bce82(_0x7ea0d7);
}
function Jm(_0x24ca7d) {
    return ur(_0x24ca7d, _0x3aace9 => lr[_0x3aace9]);
}
function Xm(_0x9a8642) {
    ;
    return ur(_0x9a8642, _0x463eb4 => lr[_0x463eb4?.toPeerId(true)]);
}
function Qm(_0x5c24a5) {
    ;
    return ur(_0x5c24a5, _0x93dbf0 => lr[_0x93dbf0?.toPeerId(false)]);
}
function Il(_0x12a51c, _0x1068e5) {
    Bo(_0x12a51c, dr(_0x1068e5));
}
function Rl(_0x58dbc5) {
    Bo(_0x58dbc5);
}
function Ol(_0x266fb6) {
    return _0x266fb6 = parseInt((_0x266fb6 || '1') + ''), _0x266fb6 <= 4 && _0x266fb6 >= 1 ? _0x266fb6 : 1;
}
function Nl(_0x2fc157) {
    const _0x167e30 = new URL(_0x2fc157).searchParams;
    return Ol(_0x167e30.get(fs) || '');
}
const Ve = ((() => {
    ;
    let _0x26914f;
    return () => _0x26914f ?? (_0x26914f = Nl(window.location.href));
})());
function Bl(_0x1733c5, _0x536ba8, _0x223661) {
    ;
    return new Proxy({}, {
        'get': (_0x32f021, _0x39d05d, _0x3660aa) => (..._0xb8c6c6) => re.invoke('manager', {
            'name': _0x1733c5,
            'method': _0x39d05d,
            'args': _0xb8c6c6,
            'accountNumber': _0x536ba8
        }, _0x223661)
    });
}
function Jn(_0xb7af9d, _0x269ad8, _0x31fd15) {
    return new Proxy(_0xb7af9d, { 'get': (_0x5d67a3, _0x455d6e, _0x125976) => _0x5d67a3[_0x455d6e] ?? (_0x5d67a3[_0x455d6e] = Bl(_0x455d6e, _0x269ad8, _0x31fd15)) });
}
function Ps(_0x1600d9) {
    return Jn({}, _0x1600d9);
}
N.createProxiedManagersForAccount = Ps;
let Ss;
function Zm() {
    ;
    return Ss || (Ss = Jn({}, Ve(), false), Ss.acknowledged = Jn({}, Ve(), true), Ss);
}
function Ul(_0x29990d, _0x1f82e8, _0x28e456 = _0x1f82e8 + 10) {
    ;
    return _0x29990d = _0x29990d.trim(), _0x29990d.length > _0x28e456 && (_0x29990d = _0x29990d.slice(0, _0x1f82e8) + '...'), _0x29990d;
}
function jl(_0x278adf) {
    ;
    if (!_0x278adf) {
        return [];
    }
    const _0x3abe1f = _0x278adf.usernames;
    return _0x3abe1f ? _0x3abe1f.filter(_0x419d94 => _0x419d94.pFlags.active).map(_0x7f971f => _0x7f971f.username) : _0x278adf.username ? [_0x278adf.username] : [];
}
const Hl = [
    'abogado',
    'ac',
    'academy',
    'accountants',
    'active',
    'actor',
    'ad',
    'adult',
    'ae',
    'aero',
    'af',
    'ag',
    'agency',
    'ai',
    'airforce',
    'al',
    'allfinanz',
    'alsace',
    'am',
    'amsterdam',
    'an',
    'android',
    'ao',
    'apartments',
    'aq',
    'aquarelle',
    'ar',
    'archi',
    'army',
    'arpa',
    'as',
    'asia',
    'associates',
    'at',
    'attorney',
    'au',
    'auction',
    'audio',
    'autos',
    'aw',
    'ax',
    'axa',
    'az',
    'ba',
    'band',
    'bank',
    'bar',
    'barclaycard',
    'barclays',
    'bargains',
    'bayern',
    'bb',
    'bd',
    'be',
    'beer',
    'berlin',
    'best',
    'bf',
    '6c2a2c8f',
    'bh',
    'bi',
    'bid',
    'bike',
    'bingo',
    'bio',
    'biz',
    'bj',
    'black',
    'blackfriday',
    'bloomberg',
    'blue',
    'bm',
    'bmw',
    'bn',
    'bnpparibas',
    'bo',
    'boo',
    'boutique',
    'br',
    'brussels',
    'bs',
    'bt',
    'budapest',
    'build',
    'builders',
    'business',
    'buzz',
    'bv',
    'bw',
    'by',
    'bz',
    'bzh',
    'ca',
    'cab',
    'cal',
    'camera',
    'camp',
    'cancerresearch',
    'canon',
    'capetown',
    'capital',
    'caravan',
    'cards',
    'care',
    'career',
    'careers',
    'cartier',
    'casa',
    'cash',
    'cat',
    'catering',
    'cc',
    'cd',
    'center',
    'ceo',
    'cern',
    'cf',
    'cg',
    'ch',
    'channel',
    'chat',
    'cheap',
    'christmas',
    'chrome',
    'church',
    'ci',
    'citic',
    'city',
    'ck',
    'cl',
    'claims',
    'cleaning',
    'click',
    'clinic',
    'clothing',
    'club',
    'cm',
    'cn',
    'co',
    'coach',
    'codes',
    'coffee',
    'college',
    'cologne',
    'com',
    'community',
    'company',
    'computer',
    'condos',
    'construction',
    'consulting',
    'contractors',
    'cooking',
    'cool',
    'coop',
    'country',
    'cr',
    'credit',
    'creditcard',
    'cricket',
    'crs',
    'cruises',
    'cu',
    'cuisinella',
    'cv',
    'cw',
    'cx',
    'cy',
    'cymru',
    'cz',
    'dabur',
    'dad',
    'dance',
    'dating',
    'day',
    'dclk',
    'de',
    'deals',
    'degree',
    'delivery',
    'democrat',
    'dental',
    'dentist',
    'desi',
    'design',
    'dev',
    'diamonds',
    'diet',
    'digital',
    'direct',
    'directory',
    'discount',
    'dj',
    'dk',
    'dm',
    'dnp',
    'do',
    'docs',
    'domains',
    'doosan',
    'durban',
    'dvag',
    'dz',
    'eat',
    'ec',
    'edu',
    'education',
    'ee',
    'eg',
    'email',
    'emerck',
    'energy',
    'engineer',
    'engineering',
    'enterprises',
    'equipment',
    'er',
    'es',
    'esq',
    'estate',
    'et',
    'eu',
    'eurovision',
    'eus',
    'events',
    'everbank',
    'exchange',
    'expert',
    'exposed',
    'fail',
    'farm',
    'fashion',
    'feedback',
    'fi',
    'finance',
    'financial',
    'firmdale',
    'fish',
    'fishing',
    'fit',
    'fitness',
    'fj',
    'fk',
    'flights',
    'florist',
    'flowers',
    'flsmidth',
    'fly',
    'fm',
    'fo',
    'foo',
    'forsale',
    'foundation',
    'fr',
    'frl',
    'frogans',
    'fund',
    'furniture',
    'futbol',
    'ga',
    'gal',
    'gallery',
    'garden',
    'gb',
    'gbiz',
    'gd',
    'ge',
    'gent',
    'gf',
    'gg',
    'ggee',
    'gh',
    'gi',
    'gift',
    'gifts',
    'gives',
    'gl',
    'glass',
    'gle',
    'global',
    'globo',
    'gm',
    'gmail',
    'gmo',
    'gmx',
    'gn',
    'goog',
    'google',
    'gop',
    'gov',
    'gp',
    'gq',
    'gr',
    'graphics',
    'gratis',
    'green',
    'gripe',
    'gs',
    'gt',
    'gu',
    'guide',
    'guitars',
    'guru',
    'gw',
    'gy',
    'hamburg',
    'hangout',
    'haus',
    'healthcare',
    'help',
    'here',
    'hermes',
    'hiphop',
    'hiv',
    'hk',
    'hm',
    'hn',
    'holdings',
    'holiday',
    'homes',
    'horse',
    'host',
    'hosting',
    'house',
    'how',
    'hr',
    'ht',
    'hu',
    'ibm',
    'id',
    'ie',
    'ifm',
    'il',
    'im',
    'immo',
    'immobilien',
    'in',
    'industries',
    'info',
    'ing',
    'ink',
    'institute',
    'insure',
    'int',
    'international',
    'investments',
    'io',
    'iq',
    'ir',
    'irish',
    'is',
    'it',
    'iwc',
    '10c7fc16',
    'je',
    'jetzt',
    'jm',
    'jo',
    'jobs',
    'joburg',
    'jp',
    'juegos',
    'kaufen',
    'kddi',
    'ke',
    'kg',
    'kh',
    'ki',
    'kim',
    'kitchen',
    'kiwi',
    'km',
    'kn',
    'koeln',
    'kp',
    'kr',
    'krd',
    'kred',
    'kw',
    'ky',
    'kyoto',
    'kz',
    'la',
    'lacaixa',
    'land',
    'lat',
    'latrobe',
    'lawyer',
    'lb',
    'lc',
    'lds',
    'lease',
    'legal',
    'lgbt',
    'li',
    'lidl',
    'life',
    'lighting',
    'limited',
    'limo',
    'link',
    'lk',
    'loans',
    'london',
    'lotte',
    'lotto',
    'lr',
    'ls',
    'lt',
    'ltda',
    'lu',
    'luxe',
    'luxury',
    'lv',
    'ly',
    'ma',
    'madrid',
    'maison',
    'management',
    'mango',
    'market',
    'marketing',
    'marriott',
    'mc',
    'md',
    'me',
    'media',
    'meet',
    'melbourne',
    'meme',
    'memorial',
    'menu',
    'mg',
    'mh',
    'miami',
    'mil',
    'mini',
    'mk',
    'ml',
    'mm',
    'mn',
    'mo',
    'mobi',
    'moda',
    'moe',
    'monash',
    'money',
    'mormon',
    'mortgage',
    'moscow',
    'motorcycles',
    'mov',
    'mp',
    'mq',
    'mr',
    'ms',
    'mt',
    'mu',
    'museum',
    'mv',
    'mw',
    'mx',
    'my',
    'mz',
    'na',
    'nagoya',
    'name',
    'navy',
    'nc',
    'ne',
    'net',
    'network',
    'neustar',
    'new',
    'nexus',
    'nf',
    'ng',
    'ngo',
    'nhk',
    'ni',
    'nico',
    'ninja',
    'nl',
    'no',
    'np',
    'nr',
    'nra',
    'nrw',
    'ntt',
    'nu',
    'nyc',
    'nz',
    'okinawa',
    'om',
    'one',
    'ong',
    'onl',
    'ooo',
    'org',
    'organic',
    'osaka',
    'otsuka',
    'ovh',
    'pa',
    'paris',
    'partners',
    'parts',
    'party',
    'pe',
    'pf',
    'pg',
    'ph',
    'pharmacy',
    'photo',
    'photography',
    'photos',
    'physio',
    'pics',
    'pictures',
    'pink',
    'pizza',
    'pk',
    'pl',
    'place',
    'plumbing',
    'pm',
    'pn',
    'pohl',
    'poker',
    'porn',
    'post',
    'pr',
    'praxi',
    'press',
    'pro',
    'prod',
    'productions',
    'prof',
    'properties',
    'property',
    'ps',
    'pt',
    'pub',
    'pw',
    'py',
    'qa',
    'qpon',
    'quebec',
    're',
    'realtor',
    'recipes',
    'red',
    'rehab',
    'reise',
    'reisen',
    'reit',
    'ren',
    'rentals',
    'repair',
    'report',
    'republican',
    'rest',
    'restaurant',
    'reviews',
    'rich',
    'rio',
    'rip',
    'ro',
    'rocks',
    'rodeo',
    'rs',
    'rsvp',
    'ru',
    'ruhr',
    'rw',
    'ryukyu',
    'sa',
    'saarland',
    'sale',
    'samsung',
    'sarl',
    'saxo',
    'sb',
    'sc',
    'sca',
    'scb',
    'schmidt',
    'schule',
    'schwarz',
    'science',
    'scot',
    'sd',
    'se',
    'services',
    'sew',
    'sexy',
    'sg',
    'sh',
    'shiksha',
    'shoes',
    'shriram',
    'si',
    'singles',
    'sj',
    'sk',
    'sky',
    'sl',
    'sm',
    'sn',
    'so',
    'social',
    'software',
    'sohu',
    'solar',
    'solutions',
    'soy',
    'space',
    'spiegel',
    'sr',
    'st',
    'style',
    'su',
    'supplies',
    'supply',
    'support',
    'surf',
    'surgery',
    'suzuki',
    'sv',
    'sx',
    'sy',
    'sydney',
    'systems',
    'sz',
    'taipei',
    'tatar',
    'tattoo',
    'tax',
    'tc',
    'td',
    'technology',
    'tel',
    'temasek',
    'tennis',
    'tf',
    'tg',
    'th',
    'tienda',
    'tips',
    'tires',
    'tirol',
    'tj',
    'tk',
    'tl',
    'tm',
    'tn',
    'to',
    'today',
    'tokyo',
    'tools',
    'top',
    'toshiba',
    'town',
    'toys',
    'tp',
    'tr',
    'trade',
    'training',
    'travel',
    'trust',
    'tt',
    'tui',
    'tv',
    'tw',
    'tz',
    'ua',
    'ug',
    'uk',
    'university',
    'uno',
    'uol',
    'us',
    'uy',
    'uz',
    'va',
    'vacations',
    'vc',
    've',
    'vegas',
    'ventures',
    'versicherung',
    'vet',
    'vg',
    'vi',
    'viajes',
    'video',
    'villas',
    'vision',
    'vlaanderen',
    'vn',
    'vodka',
    'vote',
    'voting',
    'voto',
    'voyage',
    'vu',
    'wales',
    'wang',
    'watch',
    'webcam',
    'website',
    'wed',
    'wedding',
    'wf',
    'whoswho',
    'wien',
    'wiki',
    'williamhill',
    'wme',
    'work',
    'works',
    'world',
    'ws',
    'wtc',
    'wtf',
    '佛山',
    '集团',
    '在线',
    '한국',
    'ভারত',
    '八卦',
    'موقع',
    '公益',
    '公司',
    '移动',
    '我爱你',
    'москва',
    'қаз',
    'онлайн',
    'сайт',
    'срб',
    '淡马锡',
    'орг',
    '삼성',
    'சிங்கப்பூர்',
    '商标',
    '商店',
    '商城',
    'дети',
    'мкд',
    '中文网',
    '中信',
    '中国',
    '中國',
    '谷歌',
    'భారత్',
    'ලංකා',
    'ભારત',
    'भारत',
    '网店',
    'संगठन',
    '网络',
    'укр',
    '香港',
    '台湾',
    '台灣',
    '手机',
    'мон',
    'الجزائر',
    'عمان',
    'ایران',
    'امارات',
    'بازار',
    'الاردن',
    'بھارت',
    'المغرب',
    'السعودية',
    'مليسيا',
    'شبكة',
    'გე',
    '机构',
    '组织机构',
    'ไทย',
    'سورية',
    'рус',
    'рф',
    'تونس',
    'みんな',
    'グーグル',
    '世界',
    'ਭਾਰਤ',
    '网址',
    '游戏',
    'vermögensberater',
    'vermögensberatung',
    '企业',
    'مصر',
    'قطر',
    '广东',
    'இலங்கை',
    'இந்தியா',
    '新加坡',
    'فلسطين',
    '政务',
    'xxx',
    'xyz',
    'yachts',
    'yandex',
    'ye',
    'yoga',
    'yokohama',
    'youtube',
    'yt',
    'za',
    'zip',
    'zm',
    'zone',
    'zuerich',
    'zw'
];
function Wl(_0xc0745f) {
    ;
    for (var _0x6365b2 = _0xc0745f.length, _0x51d692 = _0xc0745f.split('(').length - 1, _0x3cf642 = _0xc0745f.split(')').length - 1; _0x3cf642 > _0x51d692 && _0xc0745f.charAt(_0x6365b2 - 1) === ')';) {
        _0xc0745f = _0xc0745f.substr(0, _0x6365b2 - 1);
        _0x3cf642--;
        _0x6365b2--;
        ;
    }
    return _0x51d692 > _0x3cf642 && (_0xc0745f = _0xc0745f.replace(/\)+$/, '')), _0xc0745f;
}
const a0_0x5aef1c = {};
a0_0x5aef1c['06dbba1f'] = 4867;
a0_0x5aef1c['15564f93'] = 4916;
a0_0x5aef1c.d32fbab1 = 4923;
a0_0x5aef1c.c945495a = 62832;
a0_0x5aef1c['4c233c78'] = 183;
a0_0x5aef1c['2f8bbbc1'] = 1557;
a0_0x5aef1c['16d88c6c'] = 61332;
a0_0x5aef1c.b26f830f = 61330;
a0_0x5aef1c['3d1602d2'] = 51093;
a0_0x5aef1c.d3155604 = 61364;
a0_0x5aef1c['346c794c'] = 61189;
a0_0x5aef1c['26f8bd7d'] = 51085;
a0_0x5aef1c.c2d5be8a = 2651;
a0_0x5aef1c['6d8bf329'] = 2631;
a0_0x5aef1c.e5b5e9ae = 2672;
a0_0x5aef1c['3abb6097'] = 2673;
a0_0x5aef1c['4ec38b56'] = 1520;
a0_0x5aef1c['0ee10ab5'] = 1521;
a0_0x5aef1c.c8db9c27 = 1505;
a0_0x5aef1c['6409051f'] = 3793;
a0_0x5aef1c['791f337f'] = 3707;
a0_0x5aef1c.a66eda20 = 3804;
a0_0x5aef1c['83b8c560'] = 111;
a0_0x5aef1c['387ed59d'] = 136;
a0_0x5aef1c['0490242c'] = 132;
a0_0x5aef1c['961aea51'] = 133;
a0_0x5aef1c.cc05c588 = 174;
a0_0x5aef1c['36a8dbe0'] = 142;
a0_0x5aef1c.c6dcdc8e = 1385;
a0_0x5aef1c['37c4a997'] = 61353;
a0_0x5aef1c['61c9cbad'] = 1341;
a0_0x5aef1c['374b4f96'] = 1332;
a0_0x5aef1c['87d50bc5'] = 1333;
a0_0x5aef1c.ad15532b = 1334;
a0_0x5aef1c['01e07c5a'] = 1335;
a0_0x5aef1c.a88e2fe0 = 1351;
a0_0x5aef1c.fa6e1cd4 = 1360;
a0_0x5aef1c['6fcf2b59'] = 0;
a0_0x5aef1c.d74c82ae = 0;
a0_0x5aef1c['315c5e5c'] = 0;
a0_0x5aef1c['2d35e468'] = 0;
a0_0x5aef1c['657f11e5'] = 0;
a0_0x5aef1c['7e62e21e'] = 0;
a0_0x5aef1c['972e6ee6'] = 0;
a0_0x5aef1c['1ed95a66'] = 0;
a0_0x5aef1c.bbcf1550 = 0;
a0_0x5aef1c.cd48138d = 0;
a0_0x5aef1c['2385f108'] = 0;
a0_0x5aef1c.e3969d9a = 0;
a0_0x5aef1c['1f30b1b8'] = 0;
a0_0x5aef1c.dff2f77b = 0;
a0_0x5aef1c.cfeb7e25 = 0;
a0_0x5aef1c.cfece037 = 0;
a0_0x5aef1c['20f1220b'] = 0;
a0_0x5aef1c.e5b0dc43 = 0;
a0_0x5aef1c.a097107b = 0;
a0_0x5aef1c['3a6f5fc1'] = 0;
a0_0x5aef1c['691c2418'] = 0;
a0_0x5aef1c.bfa3f5d3 = 0;
a0_0x5aef1c['5ff350ee'] = 0;
a0_0x5aef1c['76a5acb9'] = 0;
a0_0x5aef1c.e9c75fa5 = 0;
a0_0x5aef1c['9a406452'] = 0;
a0_0x5aef1c['3257ba7f'] = 0;
a0_0x5aef1c.b02f501e = 0;
a0_0x5aef1c['76714404'] = 0;
a0_0x5aef1c['1d4a8029'] = 0;
a0_0x5aef1c['0afdb39e'] = 0;
a0_0x5aef1c.f45a4320 = 0;
a0_0x5aef1c['68076b9a'] = 0;
a0_0x5aef1c.a22c4ae2 = 0;
a0_0x5aef1c['19cdecb1'] = 0;
a0_0x5aef1c.af07194a = 0;
a0_0x5aef1c.a6192b5f = 0;
a0_0x5aef1c['4ba0b0cf'] = 0;
a0_0x5aef1c['4cef30e2'] = 0;
a0_0x5aef1c['00dd5431'] = 0;
a0_0x5aef1c.aeb21c31 = 0;
a0_0x5aef1c['0b3a3967'] = 0;
a0_0x5aef1c['78056f7c'] = 0;
a0_0x5aef1c['224b6606'] = 0;
a0_0x5aef1c.a1502c63 = 0;
a0_0x5aef1c['90e8c00b'] = 0;
a0_0x5aef1c['98464364'] = 0;
a0_0x5aef1c.bbb5e183 = 0;
a0_0x5aef1c['8d274aa2'] = 0;
a0_0x5aef1c.cf992312 = 0;
a0_0x5aef1c.ddc09233 = 0;
a0_0x5aef1c.e950e91b = 0;
a0_0x5aef1c['837517c9'] = 0;
a0_0x5aef1c['282fa501'] = 0;
a0_0x5aef1c['7a782b9b'] = 0;
a0_0x5aef1c.bd015330 = 0;
a0_0x5aef1c['1b9618ba'] = 0;
a0_0x5aef1c['2e022d6d'] = 0;
a0_0x5aef1c['040322bf'] = 0;
a0_0x5aef1c['2b399ea6'] = 0;
a0_0x5aef1c['39213a4d'] = 0;
a0_0x5aef1c['0c28fcaa'] = 0;
a0_0x5aef1c['3d180c5c'] = 0;
a0_0x5aef1c.dfaf3b94 = 0;
a0_0x5aef1c['24ddb3fe'] = 0;
a0_0x5aef1c['0853fd4f'] = 0;
a0_0x5aef1c['23dd2bc7'] = 0;
a0_0x5aef1c.e34bdaaf = 0;
a0_0x5aef1c['14d2e896'] = 0;
a0_0x5aef1c['9d38391e'] = 0;
;
const a0_0x2e7bfb = {};
a0_0x2e7bfb['2049'] = 62835;
a0_0x2e7bfb['2122'] = 62863;
a0_0x2e7bfb['2139'] = 62888;
a0_0x2e7bfb['2194'] = 62764;
a0_0x2e7bfb['2195'] = 62763;
a0_0x2e7bfb['2196'] = 62762;
a0_0x2e7bfb['2197'] = 62756;
a0_0x2e7bfb['2198'] = 62758;
a0_0x2e7bfb['2199'] = 62760;
a0_0x2e7bfb['2328'] = 61194;
a0_0x2e7bfb['2600'] = 4990;
a0_0x2e7bfb['2601'] = 4998;
a0_0x2e7bfb['2602'] = 41013;
a0_0x2e7bfb['2603'] = 41018;
a0_0x2e7bfb['2604'] = 41020;
a0_0x2e7bfb['2611'] = 62851;
a0_0x2e7bfb['2614'] = 41014;
a0_0x2e7bfb['2615'] = 3781;
a0_0x2e7bfb['2618'] = 2667;
a0_0x2e7bfb['2620'] = 1106;
a0_0x2e7bfb['2622'] = 62753;
a0_0x2e7bfb['2623'] = 62754;
a0_0x2e7bfb['2626'] = 62783;
a0_0x2e7bfb['2638'] = 62780;
a0_0x2e7bfb['2639'] = 177;
a0_0x2e7bfb['2648'] = 62788;
a0_0x2e7bfb['2649'] = 62789;
a0_0x2e7bfb['2650'] = 62796;
a0_0x2e7bfb['2651'] = 62797;
a0_0x2e7bfb['2652'] = 62798;
a0_0x2e7bfb['2653'] = 62799;
a0_0x2e7bfb['2660'] = 51095;
a0_0x2e7bfb['2663'] = 51098;
a0_0x2e7bfb['2665'] = 51096;
a0_0x2e7bfb['2666'] = 51097;
a0_0x2e7bfb['2668'] = 4865;
a0_0x2e7bfb['2692'] = 61297;
a0_0x2e7bfb['2693'] = 4922;
a0_0x2e7bfb['2694'] = 61300;
a0_0x2e7bfb['2696'] = 61311;
a0_0x2e7bfb['2697'] = 61319;
a0_0x2e7bfb['2699'] = 61309;
a0_0x2e7bfb['2702'] = 61284;
a0_0x2e7bfb['2705'] = 62850;
a0_0x2e7bfb['2708'] = 4931;
a0_0x2e7bfb['2709'] = 61245;
a0_0x2e7bfb['2712'] = 61259;
a0_0x2e7bfb['2714'] = 62852;
a0_0x2e7bfb['2716'] = 62828;
a0_0x2e7bfb['2721'] = 62779;
a0_0x2e7bfb['2728'] = 51029;
a0_0x2e7bfb['2733'] = 62858;
a0_0x2e7bfb['2734'] = 62859;
a0_0x2e7bfb['2744'] = 41017;
a0_0x2e7bfb['2747'] = 62860;
a0_0x2e7bfb['2753'] = 62836;
a0_0x2e7bfb['2754'] = 62837;
a0_0x2e7bfb['2755'] = 62838;
a0_0x2e7bfb['2757'] = 62839;
a0_0x2e7bfb['2763'] = 1137;
a0_0x2e7bfb['2764'] = 1141;
a0_0x2e7bfb['2795'] = 62829;
a0_0x2e7bfb['2796'] = 62830;
a0_0x2e7bfb['2797'] = 62831;
a0_0x2e7bfb['2934'] = 62767;
a0_0x2e7bfb['2935'] = 62768;
a0_0x2e7bfb['3030'] = 62840;
a0_0x2e7bfb['3297'] = 62912;
a0_0x2e7bfb['3299'] = 62913;
a0_0x2e7bfb.f6066c94 = 62864;
a0_0x2e7bfb['6a046b14'] = 62865;
a0_0x2e7bfb.f28d0d5d = 62866;
a0_0x2e7bfb['4a26424a'] = 62867;
a0_0x2e7bfb['20acabc9'] = 62868;
a0_0x2e7bfb['9fff0317'] = 62869;
a0_0x2e7bfb['548a6bed'] = 62870;
a0_0x2e7bfb.a70bbf21 = 62871;
a0_0x2e7bfb.d61821c2 = 62872;
a0_0x2e7bfb['06a39227'] = 62873;
a0_0x2e7bfb['400f5a26'] = 62874;
a0_0x2e7bfb.f826caa3 = 62875;
a0_0x2e7bfb['2ae26189'] = 62861;
a0_0x2e7bfb.ce27b0f4 = 62862;
a0_0x2e7bfb.e7d2b743 = 51101;
a0_0x2e7bfb['611f9b98'] = 51100;
a0_0x2e7bfb['021bdc38'] = 62882;
a0_0x2e7bfb['2e48d0d2'] = 62884;
a0_0x2e7bfb['447d024b'] = 62893;
a0_0x2e7bfb.a804287d = 62895;
a0_0x2e7bfb['72e1d7c7'] = 62883;
a0_0x2e7bfb['6394d361'] = 62885;
a0_0x2e7bfb['3a8df8fd'] = 62886;
a0_0x2e7bfb['2e904431'] = 62887;
a0_0x2e7bfb.b06a95b4 = 62889;
a0_0x2e7bfb['786b7f56'] = 62891;
a0_0x2e7bfb.aed9dc77 = 62892;
a0_0x2e7bfb['48a2f6e2'] = 62894;
a0_0x2e7bfb['276adc12'] = 62896;
a0_0x2e7bfb.e7106d57 = 62897;
a0_0x2e7bfb.d7bd7e31 = 62898;
a0_0x2e7bfb.e156cda5 = 71594;
a0_0x2e7bfb['3da1b0dc'] = 71595;
a0_0x2e7bfb['750e0b41'] = 71596;
a0_0x2e7bfb['79db8f08'] = 71597;
a0_0x2e7bfb['7d4354d9'] = 71598;
a0_0x2e7bfb.f45ac0bb = 71599;
a0_0x2e7bfb['5238506d'] = 71600;
a0_0x2e7bfb.c4df6f96 = 71601;
a0_0x2e7bfb.ca781482 = 71602;
a0_0x2e7bfb.c588d8d5 = 71603;
a0_0x2e7bfb['2aad0ec3'] = 71604;
a0_0x2e7bfb['8077c90c'] = 71605;
a0_0x2e7bfb.a816c871 = 71606;
a0_0x2e7bfb['8eacb0f3'] = 71607;
a0_0x2e7bfb['3b568f75'] = 71608;
a0_0x2e7bfb.c671d149 = 71609;
a0_0x2e7bfb['02d08d39'] = 71610;
a0_0x2e7bfb['976a9c92'] = 71611;
a0_0x2e7bfb['9cd3e1db'] = 71612;
a0_0x2e7bfb['57363a62'] = 71613;
a0_0x2e7bfb['7f1b3a96'] = 71614;
a0_0x2e7bfb['2978b311'] = 71615;
a0_0x2e7bfb['214617a6'] = 71616;
a0_0x2e7bfb.ee2e3397 = 71617;
a0_0x2e7bfb['6382a883'] = 71618;
a0_0x2e7bfb.c6292d17 = 71619;
a0_0x2e7bfb['7772247b'] = 71620;
a0_0x2e7bfb['01419ab3'] = 71621;
a0_0x2e7bfb['42fc2725'] = 71622;
a0_0x2e7bfb['1ec82012'] = 71623;
a0_0x2e7bfb['7c360cf4'] = 71624;
a0_0x2e7bfb.db6a2490 = 71625;
a0_0x2e7bfb.a41607e2 = 71626;
a0_0x2e7bfb.e85a1ebf = 71627;
a0_0x2e7bfb['67b2b252'] = 71628;
a0_0x2e7bfb['9266f184'] = 71629;
a0_0x2e7bfb.afc6bd2b = 71630;
a0_0x2e7bfb.a8b23830 = 71631;
a0_0x2e7bfb.d9e9f3a9 = 71632;
a0_0x2e7bfb['02e1af36'] = 71633;
a0_0x2e7bfb['83696e63'] = 71634;
a0_0x2e7bfb.df8e53e6 = 71635;
a0_0x2e7bfb['375dc694'] = 71636;
a0_0x2e7bfb['5a725600'] = 71637;
a0_0x2e7bfb['39ec962f'] = 71638;
a0_0x2e7bfb['3e519e43'] = 71639;
a0_0x2e7bfb.ed4cb989 = 71640;
a0_0x2e7bfb['49fd544b'] = 71641;
a0_0x2e7bfb.dcd7e006 = 71642;
a0_0x2e7bfb.dfd9a090 = 71643;
a0_0x2e7bfb.e8b7ae29 = 71644;
a0_0x2e7bfb['69963c3c'] = 71645;
a0_0x2e7bfb['21f63229'] = 71646;
a0_0x2e7bfb['3aaa05fb'] = 71647;
a0_0x2e7bfb.c981952b = 71648;
a0_0x2e7bfb['5c2f061e'] = 71649;
a0_0x2e7bfb['813d0292'] = 71650;
a0_0x2e7bfb['3f786f7a'] = 71651;
a0_0x2e7bfb['6d3102cc'] = 71652;
a0_0x2e7bfb['00fd1140'] = 71653;
a0_0x2e7bfb.d593f08d = 71654;
a0_0x2e7bfb['4ebff63d'] = 71655;
a0_0x2e7bfb.e4557675 = 71656;
a0_0x2e7bfb.ec3da499 = 71657;
a0_0x2e7bfb['32fcdd41'] = 71658;
a0_0x2e7bfb['871762a5'] = 71659;
a0_0x2e7bfb['5199a28e'] = 71660;
a0_0x2e7bfb['74d6597c'] = 71661;
a0_0x2e7bfb['923e86a9'] = 71662;
a0_0x2e7bfb['88f22bb4'] = 71663;
a0_0x2e7bfb.f9d75a9e = 71664;
a0_0x2e7bfb.f3f26317 = 71665;
a0_0x2e7bfb['80fb340f'] = 71666;
a0_0x2e7bfb.deed69d4 = 71667;
a0_0x2e7bfb['3eea5b02'] = 71668;
a0_0x2e7bfb['864ab5ad'] = 71669;
a0_0x2e7bfb['79474f97'] = 71670;
a0_0x2e7bfb.d2f46572 = 71671;
a0_0x2e7bfb.a5d08b76 = 71672;
a0_0x2e7bfb['5137f84a'] = 71673;
a0_0x2e7bfb['209f5df2'] = 71674;
a0_0x2e7bfb.d54f19e0 = 71675;
a0_0x2e7bfb['9e2a5afc'] = 71676;
a0_0x2e7bfb['9ea307be'] = 71677;
a0_0x2e7bfb['6d332ee2'] = 71678;
a0_0x2e7bfb['41eb6780'] = 71679;
a0_0x2e7bfb['6a49b0c8'] = 71680;
a0_0x2e7bfb['3c63e201'] = 71681;
a0_0x2e7bfb.cc1da660 = 71682;
a0_0x2e7bfb.ef0c5650 = 71683;
a0_0x2e7bfb['6395f815'] = 71684;
a0_0x2e7bfb['3bb4033f'] = 71685;
a0_0x2e7bfb['2ef2f17a'] = 71686;
a0_0x2e7bfb['69445a27'] = 71687;
a0_0x2e7bfb.c7252779 = 71688;
a0_0x2e7bfb['597cfb5d'] = 71689;
a0_0x2e7bfb['712b8e38'] = 71690;
a0_0x2e7bfb['90d528b6'] = 71691;
a0_0x2e7bfb.f4572834 = 71692;
a0_0x2e7bfb['2333724d'] = 71693;
a0_0x2e7bfb.e6c555ac = 71694;
a0_0x2e7bfb['1f93d6c5'] = 71695;
a0_0x2e7bfb.d899e2ee = 71696;
a0_0x2e7bfb.cdedfdff = 71697;
a0_0x2e7bfb['22f810cf'] = 71698;
a0_0x2e7bfb.b5f958fa = 71699;
a0_0x2e7bfb.f7c0e671 = 71700;
a0_0x2e7bfb.de68d33e = 71701;
a0_0x2e7bfb['549d1c65'] = 71702;
a0_0x2e7bfb.cca9b25b = 71703;
a0_0x2e7bfb.ca38d7cc = 71704;
a0_0x2e7bfb['5ee51db8'] = 71705;
a0_0x2e7bfb['8afc9d4e'] = 71706;
a0_0x2e7bfb.d8ac696d = 71707;
a0_0x2e7bfb['55995d34'] = 71708;
a0_0x2e7bfb['10feaeb7'] = 71709;
a0_0x2e7bfb['8392e37f'] = 71710;
a0_0x2e7bfb['256e60da'] = 71711;
a0_0x2e7bfb.fcb97d68 = 71712;
a0_0x2e7bfb['52ba41ba'] = 71713;
a0_0x2e7bfb.e2e322ae = 71714;
a0_0x2e7bfb.e4cd5a21 = 71715;
a0_0x2e7bfb.d7a68447 = 71716;
a0_0x2e7bfb['74bef081'] = 71717;
a0_0x2e7bfb.c341e200 = 71718;
a0_0x2e7bfb['29030331'] = 71719;
a0_0x2e7bfb.ad47f2d1 = 71720;
a0_0x2e7bfb['083f00fb'] = 71721;
a0_0x2e7bfb.fde869b0 = 71722;
a0_0x2e7bfb['22181969'] = 71723;
a0_0x2e7bfb.d588b4c2 = 71724;
a0_0x2e7bfb.bf68ee47 = 71725;
a0_0x2e7bfb['105ff039'] = 71726;
a0_0x2e7bfb.ce04ce6d = 71727;
a0_0x2e7bfb.e18ccb28 = 71728;
a0_0x2e7bfb['3d937323'] = 71729;
a0_0x2e7bfb['4a77e905'] = 71730;
a0_0x2e7bfb['4d2f0b32'] = 71731;
a0_0x2e7bfb.d1825b74 = 71732;
a0_0x2e7bfb['7ff8bb6f'] = 71733;
a0_0x2e7bfb['9f26fdfe'] = 71734;
a0_0x2e7bfb['5f56288e'] = 71735;
a0_0x2e7bfb.b341d0b5 = 71736;
a0_0x2e7bfb['8a3b9e61'] = 71737;
a0_0x2e7bfb.b9a00775 = 71738;
a0_0x2e7bfb['6f73fd40'] = 71739;
a0_0x2e7bfb['4e1290e0'] = 71740;
a0_0x2e7bfb['541c24f9'] = 71741;
a0_0x2e7bfb['1d224264'] = 71742;
a0_0x2e7bfb['7f5a257c'] = 71743;
a0_0x2e7bfb.df0e0950 = 71744;
a0_0x2e7bfb.a43fc9ef = 71745;
a0_0x2e7bfb.d43b9dca = 71746;
a0_0x2e7bfb['73c72eab'] = 71747;
a0_0x2e7bfb['67904c5f'] = 71748;
a0_0x2e7bfb.fede6ad5 = 71749;
a0_0x2e7bfb.c6805f85 = 71750;
a0_0x2e7bfb.ef26654e = 71751;
a0_0x2e7bfb.e84e7c7f = 71752;
a0_0x2e7bfb['6ec9af3f'] = 71753;
a0_0x2e7bfb['9ea2fc0b'] = 71754;
a0_0x2e7bfb.e707e3a9 = 71755;
a0_0x2e7bfb['949375f6'] = 71756;
a0_0x2e7bfb['386f9c46'] = 71757;
a0_0x2e7bfb['2d45d286'] = 71758;
a0_0x2e7bfb['62693719'] = 71759;
a0_0x2e7bfb['74ad848f'] = 71760;
a0_0x2e7bfb.cd66f383 = 71761;
a0_0x2e7bfb['2434dd3e'] = 71762;
a0_0x2e7bfb['42ec0dd4'] = 71763;
a0_0x2e7bfb['5478fa43'] = 71764;
a0_0x2e7bfb.fa9cdd10 = 71765;
a0_0x2e7bfb.c8e01a9a = 71766;
a0_0x2e7bfb.be5c1672 = 71767;
a0_0x2e7bfb['8bb5fbf7'] = 71768;
a0_0x2e7bfb.b1f2ccac = 71769;
a0_0x2e7bfb['54d010e8'] = 71770;
a0_0x2e7bfb['3c67da48'] = 71771;
a0_0x2e7bfb['803d6df1'] = 71772;
a0_0x2e7bfb.d6c9596b = 71773;
a0_0x2e7bfb['3a2808bb'] = 71774;
a0_0x2e7bfb.a1101568 = 71775;
a0_0x2e7bfb['6c86be0d'] = 71776;
a0_0x2e7bfb['24bb8849'] = 71777;
a0_0x2e7bfb['922221cd'] = 71778;
a0_0x2e7bfb['41f1fc92'] = 71779;
a0_0x2e7bfb['41c89d93'] = 71780;
a0_0x2e7bfb['8169a04a'] = 71781;
a0_0x2e7bfb.d31b0154 = 71782;
a0_0x2e7bfb['6d3be776'] = 71783;
a0_0x2e7bfb['24bb8ee8'] = 71784;
a0_0x2e7bfb['7260601e'] = 71785;
a0_0x2e7bfb['187b165a'] = 71786;
a0_0x2e7bfb['06eadd40'] = 71787;
a0_0x2e7bfb['1e3cea7d'] = 71788;
a0_0x2e7bfb['14256490'] = 71789;
a0_0x2e7bfb['7a71ebc7'] = 71790;
a0_0x2e7bfb.f9027cfe = 71791;
a0_0x2e7bfb.aae94986 = 71792;
a0_0x2e7bfb.a5ddf0e0 = 71793;
a0_0x2e7bfb.bccd137a = 71794;
a0_0x2e7bfb.d1be1190 = 71795;
a0_0x2e7bfb['81fc199e'] = 71796;
a0_0x2e7bfb['765f91dd'] = 71797;
a0_0x2e7bfb['56e0e7ff'] = 71798;
a0_0x2e7bfb['7cc7f0c6'] = 71799;
a0_0x2e7bfb.aba0c3ac = 71800;
a0_0x2e7bfb['4b1091ef'] = 71801;
a0_0x2e7bfb['4ab4f9f3'] = 71802;
a0_0x2e7bfb['492734fa'] = 71803;
a0_0x2e7bfb['9b119d23'] = 71804;
a0_0x2e7bfb['48ca6da3'] = 71805;
a0_0x2e7bfb['48639524'] = 71806;
a0_0x2e7bfb['9975d886'] = 71807;
a0_0x2e7bfb['5c2d0a48'] = 71808;
a0_0x2e7bfb['57fa8973'] = 71809;
a0_0x2e7bfb.c8e628c9 = 71810;
a0_0x2e7bfb['239f1628'] = 71811;
a0_0x2e7bfb['989956c9'] = 71812;
a0_0x2e7bfb.f47dd652 = 71813;
a0_0x2e7bfb['06971e8d'] = 71814;
a0_0x2e7bfb['296c66d4'] = 71815;
a0_0x2e7bfb['2f150959'] = 71816;
a0_0x2e7bfb['799becb3'] = 71817;
a0_0x2e7bfb['649180db'] = 71818;
a0_0x2e7bfb['00e04e2f'] = 71819;
a0_0x2e7bfb.a88e80ad = 71820;
a0_0x2e7bfb.b1ddfea6 = 71821;
a0_0x2e7bfb.f6aa6128 = 71822;
a0_0x2e7bfb['2e0bb281'] = 71823;
a0_0x2e7bfb['6fcb0a5d'] = 71824;
a0_0x2e7bfb.a654b106 = 71825;
a0_0x2e7bfb.b25702e9 = 71826;
a0_0x2e7bfb['060dbd6d'] = 71827;
a0_0x2e7bfb.b8051ed1 = 71828;
a0_0x2e7bfb['65ab208f'] = 71829;
a0_0x2e7bfb.a9af468c = 71830;
a0_0x2e7bfb.cdb10389 = 71831;
a0_0x2e7bfb.af988006 = 71832;
a0_0x2e7bfb['991207c9'] = 71833;
a0_0x2e7bfb['53cb109a'] = 71834;
a0_0x2e7bfb.f2bcb6f3 = 71835;
a0_0x2e7bfb['621d17fc'] = 71836;
a0_0x2e7bfb['39905f3b'] = 71837;
a0_0x2e7bfb['64d49543'] = 71838;
a0_0x2e7bfb.ef449830 = 71839;
a0_0x2e7bfb['56fe9bd3'] = 71840;
a0_0x2e7bfb.d8a0c57e = 71841;
a0_0x2e7bfb.a70572d3 = 71842;
a0_0x2e7bfb.b0d25178 = 71843;
a0_0x2e7bfb.d62ff6f4 = 71844;
a0_0x2e7bfb.aad659be = 71845;
a0_0x2e7bfb['24d3fdfe'] = 71846;
a0_0x2e7bfb['368070f3'] = 71847;
a0_0x2e7bfb['2b7bd93f'] = 71848;
a0_0x2e7bfb.dc487744 = 71849;
a0_0x2e7bfb.aa4f8e0c = 71850;
a0_0x2e7bfb.a5bd93c6 = 71851;
a0_0x2e7bfb.cc211eef = 62899;
a0_0x2e7bfb['2433cabf'] = 62900;
a0_0x2e7bfb['5840cd46'] = 62906;
a0_0x2e7bfb['54bf3d34'] = 62903;
a0_0x2e7bfb.aa9062d4 = 62907;
a0_0x2e7bfb['1c7213f9'] = 62911;
a0_0x2e7bfb.e9bb3d58 = 62910;
a0_0x2e7bfb['7695b71d'] = 62915;
a0_0x2e7bfb['23435eb1'] = 62902;
a0_0x2e7bfb.b196bcc2 = 62901;
a0_0x2e7bfb['1e744904'] = 62909;
a0_0x2e7bfb['3bf48d04'] = 62905;
a0_0x2e7bfb['8fce6dc5'] = 62914;
a0_0x2e7bfb.a461cf6c = 62904;
a0_0x2e7bfb.f54cbe1a = 62908;
a0_0x2e7bfb['49e0bc89'] = 41010;
a0_0x2e7bfb.dc428871 = 4857;
a0_0x2e7bfb['85223d43'] = 41012;
a0_0x2e7bfb.a75810fd = 4858;
a0_0x2e7bfb.e7dbb1e3 = 4860;
a0_0x2e7bfb['3e48cf35'] = 4861;
a0_0x2e7bfb.eea141a1 = 4862;
a0_0x2e7bfb['3c8620ce'] = 4863;
a0_0x2e7bfb.b8476b5b = 41011;
a0_0x2e7bfb.cf8d805b = 4864;
a0_0x2e7bfb['73674157'] = 41023;
a0_0x2e7bfb.f0ecf8ec = 4815;
a0_0x2e7bfb['62be039d'] = 4997;
a0_0x2e7bfb['5391415f'] = 4806;
a0_0x2e7bfb.de46d753 = 4807;
a0_0x2e7bfb['60651216'] = 4808;
a0_0x2e7bfb.ac416a32 = 4809;
a0_0x2e7bfb.c95786e1 = 4977;
a0_0x2e7bfb.f096305f = 4978;
a0_0x2e7bfb.dc6b3eba = 4979;
a0_0x2e7bfb['47670063'] = 4980;
a0_0x2e7bfb['92f88216'] = 4981;
a0_0x2e7bfb['1ffc656f'] = 4982;
a0_0x2e7bfb.ab53eec7 = 4983;
a0_0x2e7bfb['4d25f171'] = 4984;
a0_0x2e7bfb.e077d4a4 = 4985;
a0_0x2e7bfb['65ac7fa4'] = 4986;
a0_0x2e7bfb.d05c06dd = 4987;
a0_0x2e7bfb['366cec1e'] = 4988;
a0_0x2e7bfb['8f9773ca'] = 4991;
a0_0x2e7bfb['3c20f6f4'] = 4992;
a0_0x2e7bfb['626c62b3'] = 4995;
a0_0x2e7bfb.ba413577 = 4996;
a0_0x2e7bfb.c5782b8c = 4989;
a0_0x2e7bfb['3a195254'] = 41001;
a0_0x2e7bfb.b0446012 = 41002;
a0_0x2e7bfb['8f975a10'] = 41003;
a0_0x2e7bfb.e3ca8c74 = 41004;
a0_0x2e7bfb.ef8cc845 = 41005;
a0_0x2e7bfb['9e4e64a1'] = 41006;
a0_0x2e7bfb['938b0e3f'] = 41007;
a0_0x2e7bfb['971f34ac'] = 41008;
a0_0x2e7bfb['08ad833c'] = 41009;
a0_0x2e7bfb['96949c31'] = 3725;
a0_0x2e7bfb['9ea4fa9b'] = 3727;
a0_0x2e7bfb.f6be3ea2 = 3728;
a0_0x2e7bfb.c85311f2 = 3708;
a0_0x2e7bfb.d11d870f = 2659;
a0_0x2e7bfb.ab40ae4b = 2661;
a0_0x2e7bfb.fcc70c58 = 2662;
a0_0x2e7bfb['1acae414'] = 2663;
a0_0x2e7bfb.f159991e = 2664;
a0_0x2e7bfb.db057a28 = 3698;
a0_0x2e7bfb.c1ba6924 = 2658;
a0_0x2e7bfb.ca5b91d5 = 2649;
a0_0x2e7bfb['85352be8'] = 2653;
a0_0x2e7bfb['3b35861e'] = 2655;
a0_0x2e7bfb['511e7048'] = 2656;
a0_0x2e7bfb['1126204a'] = 2657;
a0_0x2e7bfb.dc89fad5 = 3697;
a0_0x2e7bfb['52fac7bd'] = 2665;
a0_0x2e7bfb['77ff9ffb'] = 2666;
a0_0x2e7bfb.c492ee77 = 2668;
a0_0x2e7bfb['271717d7'] = 2669;
a0_0x2e7bfb.dce8c9d3 = 2670;
a0_0x2e7bfb['7933dc86'] = 2671;
a0_0x2e7bfb['7a04e7d5'] = 3705;
a0_0x2e7bfb['2550ad53'] = 3690;
a0_0x2e7bfb['985fe787'] = 3694;
a0_0x2e7bfb['603c2bbc'] = 3674;
a0_0x2e7bfb['9b5b310a'] = 3675;
a0_0x2e7bfb.a4eec6ba = 3676;
a0_0x2e7bfb['2c2c302e'] = 3677;
a0_0x2e7bfb.e7b774e1 = 3678;
a0_0x2e7bfb['54aa054d'] = 3679;
a0_0x2e7bfb.f718e7e9 = 3680;
a0_0x2e7bfb.dc91e932 = 3682;
a0_0x2e7bfb['87fc7559'] = 3683;
a0_0x2e7bfb.fea593bc = 3684;
a0_0x2e7bfb['508e6ac5'] = 3685;
a0_0x2e7bfb.d696cf48 = 3686;
a0_0x2e7bfb['7e021f6c'] = 3687;
a0_0x2e7bfb['34a90c88'] = 3722;
a0_0x2e7bfb['434e2652'] = 3724;
a0_0x2e7bfb['7163c4e7'] = 3718;
a0_0x2e7bfb['6e51a0f7'] = 3719;
a0_0x2e7bfb['2efaa9f9'] = 3744;
a0_0x2e7bfb['54f5c7cd'] = 3745;
a0_0x2e7bfb.fd82c51d = 3746;
a0_0x2e7bfb['8e4b7417'] = 3747;
a0_0x2e7bfb['6da1a3f4'] = 3748;
a0_0x2e7bfb.f6589f20 = 3749;
a0_0x2e7bfb['6eaf5089'] = 3709;
a0_0x2e7bfb.f546f64a = 3723;
a0_0x2e7bfb.b8f31a38 = 3750;
a0_0x2e7bfb['999d2343'] = 3756;
a0_0x2e7bfb['238d17b4'] = 3751;
a0_0x2e7bfb['3c317376'] = 3752;
a0_0x2e7bfb['4e44c042'] = 3753;
a0_0x2e7bfb['5eed2b8e'] = 3754;
a0_0x2e7bfb['3915507b'] = 3765;
a0_0x2e7bfb['52a47af2'] = 3766;
a0_0x2e7bfb.a016e640 = 3767;
a0_0x2e7bfb.dce9ee29 = 3768;
a0_0x2e7bfb['6695cb26'] = 3769;
a0_0x2e7bfb.e9d47303 = 3774;
a0_0x2e7bfb['506f8de3'] = 3775;
a0_0x2e7bfb['755a3504'] = 3776;
a0_0x2e7bfb.d7d639e6 = 3777;
a0_0x2e7bfb.e4679d7e = 3778;
a0_0x2e7bfb.a1e662d2 = 3771;
a0_0x2e7bfb.c6910a5b = 3743;
a0_0x2e7bfb['4abf4c4d'] = 3735;
a0_0x2e7bfb.e8b6c57c = 3733;
a0_0x2e7bfb.d535c363 = 3801;
a0_0x2e7bfb.b9c271ea = 3783;
a0_0x2e7bfb.aa3b8291 = 3784;
a0_0x2e7bfb['00ab9a49'] = 3786;
a0_0x2e7bfb['0904617f'] = 3787;
a0_0x2e7bfb['9c6de8ba'] = 3788;
a0_0x2e7bfb['0f0fe6fd'] = 3789;
a0_0x2e7bfb.e970ab2f = 3790;
a0_0x2e7bfb['6b4d85d4'] = 3779;
a0_0x2e7bfb.b23c581d = 3800;
a0_0x2e7bfb.a129ed1e = 3785;
a0_0x2e7bfb['289a4173'] = 3739;
a0_0x2e7bfb['2b1a939e'] = 51040;
a0_0x2e7bfb['5a84dab2'] = 51041;
a0_0x2e7bfb['48ed3675'] = 3770;
a0_0x2e7bfb.bd56c915 = 51024;
a0_0x2e7bfb['22830225'] = 51025;
a0_0x2e7bfb['5e0aca45'] = 1527;
a0_0x2e7bfb['319596f5'] = 51026;
a0_0x2e7bfb['786e1ac9'] = 51027;
a0_0x2e7bfb['62036152'] = 51030;
a0_0x2e7bfb['7ee660e6'] = 51031;
a0_0x2e7bfb.c8add62c = 51032;
a0_0x2e7bfb.fb85c4f1 = 51033;
a0_0x2e7bfb['643cd76e'] = 71588;
a0_0x2e7bfb['6ded7efb'] = 51034;
a0_0x2e7bfb['899f4633'] = 51035;
a0_0x2e7bfb.b9be1bd7 = 51036;
a0_0x2e7bfb['22025bff'] = 51037;
a0_0x2e7bfb['03a79e63'] = 51038;
a0_0x2e7bfb.be81b108 = 61134;
a0_0x2e7bfb['4a6177bd'] = 61147;
a0_0x2e7bfb.cc18406d = 51045;
a0_0x2e7bfb['6adf9053'] = 51042;
a0_0x2e7bfb['6ae7b7d0'] = 61167;
a0_0x2e7bfb['35e73b4d'] = 61168;
a0_0x2e7bfb['1fff7e41'] = 61169;
a0_0x2e7bfb['56212719'] = 61203;
a0_0x2e7bfb.a5f499a1 = 51043;
a0_0x2e7bfb['6dab0a49'] = 4866;
a0_0x2e7bfb['4c38f1dc'] = 4868;
a0_0x2e7bfb['35611137'] = 4869;
a0_0x2e7bfb['32b8b967'] = 51072;
a0_0x2e7bfb.e62026f1 = 61170;
a0_0x2e7bfb['77034670'] = 61202;
a0_0x2e7bfb.c9d24107 = 62819;
a0_0x2e7bfb['628f1ba6'] = 61171;
a0_0x2e7bfb['52a7e094'] = 51105;
a0_0x2e7bfb['6226281d'] = 61146;
a0_0x2e7bfb.f41d99ce = 4871;
a0_0x2e7bfb['3374d233'] = 51044;
a0_0x2e7bfb.deccb1d1 = 61205;
a0_0x2e7bfb['5bd859fa'] = 51103;
a0_0x2e7bfb['5ef8f632'] = 51086;
a0_0x2e7bfb.ddd0704e = 51078;
a0_0x2e7bfb['2266b5f0'] = 51088;
a0_0x2e7bfb['4349ffb1'] = 51081;
a0_0x2e7bfb['70c89664'] = 51089;
a0_0x2e7bfb['81c0a4dc'] = 51060;
a0_0x2e7bfb['85e883ca'] = 51102;
a0_0x2e7bfb['7137d398'] = 61165;
a0_0x2e7bfb['74d32dba'] = 61166;
a0_0x2e7bfb.ae247a44 = 61173;
a0_0x2e7bfb['208e2ac1'] = 61175;
a0_0x2e7bfb['67d8695e'] = 61176;
a0_0x2e7bfb['912a5e24'] = 61177;
a0_0x2e7bfb['8c9e829c'] = 61178;
a0_0x2e7bfb['38d6ee90'] = 61164;
a0_0x2e7bfb['670c0190'] = 51074;
a0_0x2e7bfb['4cf85a1c'] = 51058;
a0_0x2e7bfb.bb82c2f9 = 51075;
a0_0x2e7bfb.f69f01ed = 51054;
a0_0x2e7bfb.f2386ac3 = 71586;
a0_0x2e7bfb.dd67c5b7 = 1600;
a0_0x2e7bfb.f58c7a5f = 1584;
a0_0x2e7bfb['8072658a'] = 1583;
a0_0x2e7bfb['67155c18'] = 1582;
a0_0x2e7bfb['6966f7d6'] = 1606;
a0_0x2e7bfb.e66a871a = 1605;
a0_0x2e7bfb.ef390229 = 1604;
a0_0x2e7bfb['67f94825'] = 51047;
a0_0x2e7bfb['157adf6b'] = 51046;
a0_0x2e7bfb.f1c01675 = 1598;
a0_0x2e7bfb.f47e7995 = 51056;
a0_0x2e7bfb.d9069912 = 51057;
a0_0x2e7bfb['205587c8'] = 1612;
a0_0x2e7bfb.b1f18063 = 1611;
a0_0x2e7bfb['33bcfaac'] = 1610;
a0_0x2e7bfb['4520c0f1'] = 1618;
a0_0x2e7bfb['9d1619bd'] = 1617;
a0_0x2e7bfb.e461c1a7 = 1616;
a0_0x2e7bfb['7eaf58a9'] = 1603;
a0_0x2e7bfb['5b1c46db'] = 1602;
a0_0x2e7bfb.ada5335b = 1601;
a0_0x2e7bfb['29317a40'] = 4902;
a0_0x2e7bfb.d3ca5bc5 = 4901;
a0_0x2e7bfb['493d0ce7'] = 51061;
a0_0x2e7bfb.ba39c49b = 51055;
a0_0x2e7bfb['59b496bb'] = 51062;
a0_0x2e7bfb.b13a227d = 51063;
a0_0x2e7bfb['6d20df90'] = 51065;
a0_0x2e7bfb['2239d23d'] = 4813;
a0_0x2e7bfb['8c052769'] = 4817;
a0_0x2e7bfb['7a4ae899'] = 4818;
a0_0x2e7bfb['64e57134'] = 4824;
a0_0x2e7bfb['6c1b4766'] = 4829;
a0_0x2e7bfb['47d109b2'] = 4859;
a0_0x2e7bfb['205a0a2d'] = 4830;
a0_0x2e7bfb['2da3a720'] = 4823;
a0_0x2e7bfb.ffdef09c = 4819;
a0_0x2e7bfb.a5560893 = 4820;
a0_0x2e7bfb['9d97ef64'] = 4821;
a0_0x2e7bfb.beddee82 = 4822;
a0_0x2e7bfb['56461bb6'] = 4831;
a0_0x2e7bfb.f572ad76 = 4832;
a0_0x2e7bfb['38bc01c8'] = 4833;
a0_0x2e7bfb['877b079d'] = 4834;
a0_0x2e7bfb.cfa26e5d = 4835;
a0_0x2e7bfb['042409c0'] = 4836;
a0_0x2e7bfb.a0a5ee6e = 4837;
a0_0x2e7bfb['6a71dd2b'] = 62729;
a0_0x2e7bfb['221ebf6b'] = 4838;
a0_0x2e7bfb['021b3c2d'] = 4839;
a0_0x2e7bfb.d361c949 = 4840;
a0_0x2e7bfb.b6afdad8 = 4841;
a0_0x2e7bfb['9e9e497c'] = 4842;
a0_0x2e7bfb['7d30ab68'] = 4843;
a0_0x2e7bfb['54b4df59'] = 61216;
a0_0x2e7bfb['110cc291'] = 4844;
a0_0x2e7bfb['43b39eda'] = 4845;
a0_0x2e7bfb['5b38b400'] = 71591;
a0_0x2e7bfb['0792735c'] = 71592;
a0_0x2e7bfb['99e5f79c'] = 71590;
a0_0x2e7bfb['22173c37'] = 71593;
a0_0x2e7bfb['72f28efd'] = 71852;
a0_0x2e7bfb['76c43b21'] = 71853;
a0_0x2e7bfb['1bc0e831'] = 71854;
a0_0x2e7bfb['3fa94bfa'] = 71589;
a0_0x2e7bfb.c93ccb4c = 2652;
a0_0x2e7bfb.a346704e = 61234;
a0_0x2e7bfb['0c7f5775'] = 51066;
a0_0x2e7bfb.f80049dd = 61303;
a0_0x2e7bfb['702bf0f0'] = 3805;
a0_0x2e7bfb.d9ebeb04 = 9525;
a0_0x2e7bfb.bda387b6 = 9526;
a0_0x2e7bfb.bc57a41e = 9527;
a0_0x2e7bfb['10ad37d0'] = 9528;
a0_0x2e7bfb.ce96d291 = 9529;
a0_0x2e7bfb['9790dd41'] = 2576;
a0_0x2e7bfb.f2bb4254 = 2575;
a0_0x2e7bfb['067f1d5c'] = 2556;
a0_0x2e7bfb['91230cfb'] = 2557;
a0_0x2e7bfb['9d80a631'] = 2558;
a0_0x2e7bfb['9e6e3214'] = 2547;
a0_0x2e7bfb.dff74067 = 2548;
a0_0x2e7bfb['2860ce43'] = 2579;
a0_0x2e7bfb['15f60def'] = 2544;
a0_0x2e7bfb.eea77480 = 2543;
a0_0x2e7bfb['514468a0'] = 2618;
a0_0x2e7bfb.dc13882c = 2613;
a0_0x2e7bfb.ff26a8dd = 2622;
a0_0x2e7bfb['463c873a'] = 2632;
a0_0x2e7bfb['0fe36ece'] = 2616;
a0_0x2e7bfb['62eebcb6'] = 2550;
a0_0x2e7bfb.c7df13e5 = 2563;
a0_0x2e7bfb.be3c0a8e = 2565;
a0_0x2e7bfb['09bae70c'] = 2564;
a0_0x2e7bfb.c047f4d2 = 2531;
a0_0x2e7bfb.be6f0a43 = 2596;
a0_0x2e7bfb.c0171c8e = 2595;
a0_0x2e7bfb.f0e0cd63 = 2537;
a0_0x2e7bfb.f1a298e1 = 2535;
a0_0x2e7bfb['4d7534f1'] = 2560;
a0_0x2e7bfb['05939119'] = 2561;
a0_0x2e7bfb.a2440b7a = 2570;
a0_0x2e7bfb['57daa33f'] = 2629;
a0_0x2e7bfb['1eefa947'] = 2630;
a0_0x2e7bfb.c4bbd9ae = 2634;
a0_0x2e7bfb.aa232805 = 2635;
a0_0x2e7bfb.f45eaf6a = 2636;
a0_0x2e7bfb.b1851e66 = 2638;
a0_0x2e7bfb['47a9a1c4'] = 2625;
a0_0x2e7bfb['52add6cd'] = 2626;
a0_0x2e7bfb.dbe52f60 = 2627;
a0_0x2e7bfb['43cee2d8'] = 2614;
a0_0x2e7bfb['516da3e4'] = 2597;
a0_0x2e7bfb['4ecd062a'] = 2598;
a0_0x2e7bfb.fb7ecc96 = 2599;
a0_0x2e7bfb.f413a3b5 = 2600;
a0_0x2e7bfb['82a6e2da'] = 2601;
a0_0x2e7bfb.c4a36d4a = 2586;
a0_0x2e7bfb['15374b83'] = 2538;
a0_0x2e7bfb['489a99c6'] = 2566;
a0_0x2e7bfb['7a78dcd6'] = 2567;
a0_0x2e7bfb.d9ba5e60 = 2623;
a0_0x2e7bfb['472b35b1'] = 2574;
a0_0x2e7bfb.ededf926 = 2555;
a0_0x2e7bfb['384d61d8'] = 2546;
a0_0x2e7bfb['048db097'] = 2578;
a0_0x2e7bfb['7af7e80a'] = 2542;
a0_0x2e7bfb['322906c8'] = 2617;
a0_0x2e7bfb['47af21a1'] = 2621;
a0_0x2e7bfb['538a82ab'] = 2549;
a0_0x2e7bfb.ecf71d46 = 2530;
a0_0x2e7bfb.ca82d2f4 = 2534;
a0_0x2e7bfb['4675473a'] = 2559;
a0_0x2e7bfb.d2252690 = 2612;
a0_0x2e7bfb['4d24907f'] = 2577;
a0_0x2e7bfb['4561c1c2'] = 2539;
a0_0x2e7bfb.bcaa3b1a = 2585;
a0_0x2e7bfb.e86c0750 = 2584;
a0_0x2e7bfb.f36e0a53 = 2587;
a0_0x2e7bfb['0c00e353'] = 2562;
a0_0x2e7bfb['3c0b11b1'] = 2593;
a0_0x2e7bfb['62ae6fbf'] = 2580;
a0_0x2e7bfb['7698f097'] = 1381;
a0_0x2e7bfb['8fe04c35'] = 1159;
a0_0x2e7bfb['4934af61'] = 1382;
a0_0x2e7bfb['1acadc48'] = 1373;
a0_0x2e7bfb.c80b17f0 = 1375;
a0_0x2e7bfb['60178a03'] = 1384;
a0_0x2e7bfb.f24efdd7 = 1383;
a0_0x2e7bfb.ef1bd01c = 1347;
a0_0x2e7bfb.c191a21d = 1349;
a0_0x2e7bfb['96732fd1'] = 1345;
a0_0x2e7bfb['8c8c9ec1'] = 1346;
a0_0x2e7bfb['348a3519'] = 1355;
a0_0x2e7bfb.d3ae452c = 1327;
a0_0x2e7bfb['342d09b6'] = 1336;
a0_0x2e7bfb['7b0cdae7'] = 1352;
a0_0x2e7bfb['5891f373'] = 1353;
a0_0x2e7bfb.f0e2357c = 1358;
a0_0x2e7bfb.d5ba538d = 1361;
a0_0x2e7bfb.f78111af = 61144;
a0_0x2e7bfb['6455ca4c'] = 61145;
a0_0x2e7bfb['393a1894'] = 61110;
a0_0x2e7bfb.f3e6b6fb = 61115;
a0_0x2e7bfb.b60a1e61 = 61116;
a0_0x2e7bfb['519a1cb5'] = 61117;
a0_0x2e7bfb['03257084'] = 61122;
a0_0x2e7bfb['9a39ff1b'] = 61123;
a0_0x2e7bfb['8dcff2a4'] = 61128;
a0_0x2e7bfb.a31581b3 = 61129;
a0_0x2e7bfb['57ab116a'] = 61130;
a0_0x2e7bfb['064a1f5d'] = 61131;
a0_0x2e7bfb.c77fb1ad = 61132;
a0_0x2e7bfb.ba5e960b = 61136;
a0_0x2e7bfb['0e403ddf'] = 61137;
a0_0x2e7bfb['98e1cd30'] = 61140;
a0_0x2e7bfb['3ab79a2f'] = 61141;
a0_0x2e7bfb['1dec35ac'] = 61143;
a0_0x2e7bfb.a6cb0ba5 = 1687;
a0_0x2e7bfb['50bef43c'] = 1684;
a0_0x2e7bfb.b2edd359 = 1685;
a0_0x2e7bfb.dfb5e79e = 1388;
a0_0x2e7bfb.da3048d5 = 1389;
a0_0x2e7bfb.cd11d39a = 1457;
a0_0x2e7bfb['5178f1df'] = 1460;
a0_0x2e7bfb['088d5aa1'] = 1524;
a0_0x2e7bfb['21b66731'] = 1448;
a0_0x2e7bfb['20d177a7'] = 1478;
a0_0x2e7bfb['21efbda8'] = 1481;
a0_0x2e7bfb['4de84df5'] = 1451;
a0_0x2e7bfb['879e3c9a'] = 1466;
a0_0x2e7bfb.a784aea4 = 1674;
a0_0x2e7bfb.bf2cd262 = 1673;
a0_0x2e7bfb.bb854bce = 1676;
a0_0x2e7bfb['8f36a0e2'] = 1677;
a0_0x2e7bfb.c9525589 = 1675;
a0_0x2e7bfb.d1bbc41d = 1663;
a0_0x2e7bfb.cd9a30ab = 1666;
a0_0x2e7bfb['38a94899'] = 1664;
a0_0x2e7bfb.d4b139bd = 1665;
a0_0x2e7bfb['0ac0a6a2'] = 1667;
a0_0x2e7bfb['2cad76b5'] = 1658;
a0_0x2e7bfb['46846f8c'] = 1661;
a0_0x2e7bfb.f6a79c55 = 1659;
a0_0x2e7bfb['1e2b2612'] = 1660;
a0_0x2e7bfb['19a4c844'] = 1662;
a0_0x2e7bfb.d24dabd9 = 1475;
a0_0x2e7bfb['06412518'] = 1469;
a0_0x2e7bfb['94f6cd25'] = 1463;
a0_0x2e7bfb.e9f78f10 = 1472;
a0_0x2e7bfb['893df95e'] = 1487;
a0_0x2e7bfb.cd122993 = 1490;
a0_0x2e7bfb['2c2ad3d3'] = 1574;
a0_0x2e7bfb.b5ecf9ff = 1396;
a0_0x2e7bfb['7716a71b'] = 1397;
a0_0x2e7bfb['25964749'] = 1399;
a0_0x2e7bfb['45fb28f4'] = 1398;
a0_0x2e7bfb['2397e0a7'] = 1577;
a0_0x2e7bfb.c0d8106c = 1580;
a0_0x2e7bfb['32726f4b'] = 1445;
a0_0x2e7bfb['91a35dcb'] = 1454;
a0_0x2e7bfb.e0e8f841 = 1484;
a0_0x2e7bfb.b6aff4f7 = 1655;
a0_0x2e7bfb['53b7e04a'] = 1651;
a0_0x2e7bfb['3dbf988d'] = 1392;
a0_0x2e7bfb['9d8501e5'] = 1458;
a0_0x2e7bfb['3156dae4'] = 1461;
a0_0x2e7bfb.b04649f3 = 1523;
a0_0x2e7bfb.d71c530e = 1449;
a0_0x2e7bfb['177a4120'] = 1479;
a0_0x2e7bfb['953f9da0'] = 1482;
a0_0x2e7bfb['2eb5bf3b'] = 1452;
a0_0x2e7bfb['2c75fecc'] = 1467;
a0_0x2e7bfb['31c85aaa'] = 1679;
a0_0x2e7bfb['666a8f8f'] = 1678;
a0_0x2e7bfb['65a7da87'] = 1681;
a0_0x2e7bfb['69abec41'] = 1682;
a0_0x2e7bfb['5643c5a0'] = 1680;
a0_0x2e7bfb.c7c8feb5 = 1668;
a0_0x2e7bfb['116e8090'] = 1671;
a0_0x2e7bfb['545f10ac'] = 1669;
a0_0x2e7bfb['2d7089fd'] = 1670;
a0_0x2e7bfb.da7fde02 = 1672;
a0_0x2e7bfb.bb0f905d = 1476;
a0_0x2e7bfb['9fb8a84b'] = 1470;
a0_0x2e7bfb['779966ed'] = 1464;
a0_0x2e7bfb['573a3df6'] = 1473;
a0_0x2e7bfb['0980270a'] = 1488;
a0_0x2e7bfb.bc987bcb = 1491;
a0_0x2e7bfb.e8600890 = 1575;
a0_0x2e7bfb.f23be638 = 1401;
a0_0x2e7bfb['1ba739ef'] = 1403;
a0_0x2e7bfb['2257f732'] = 1407;
a0_0x2e7bfb['5852bd98'] = 1405;
a0_0x2e7bfb.ccbe88f1 = 1578;
a0_0x2e7bfb.cb9b0839 = 1581;
a0_0x2e7bfb['0d227623'] = 1446;
a0_0x2e7bfb['848b63ac'] = 1455;
a0_0x2e7bfb['2c4315cb'] = 1485;
a0_0x2e7bfb.a339a7a8 = 1654;
a0_0x2e7bfb['649af396'] = 1656;
a0_0x2e7bfb['8f09876d'] = 1650;
a0_0x2e7bfb['1c87c168'] = 1652;
a0_0x2e7bfb.e7436e95 = 1400;
a0_0x2e7bfb.b0ffb2b5 = 1657;
a0_0x2e7bfb.fdba24cb = 1647;
a0_0x2e7bfb.c78c6e24 = 1648;
a0_0x2e7bfb['78dad4c6'] = 1646;
a0_0x2e7bfb['580a2d98'] = 1494;
a0_0x2e7bfb.b617cb56 = 1493;
a0_0x2e7bfb['77bc5afe'] = 1492;
a0_0x2e7bfb['8a2e89db'] = 1590;
a0_0x2e7bfb['952feba2'] = 1589;
a0_0x2e7bfb['0caa9a4e'] = 1588;
a0_0x2e7bfb['39ed24f7'] = 1518;
a0_0x2e7bfb['099b6e68'] = 1517;
a0_0x2e7bfb['653799bf'] = 1516;
a0_0x2e7bfb['4bb345ce'] = 1409;
a0_0x2e7bfb['0f4461b1'] = 1410;
a0_0x2e7bfb['5248c02d'] = 1391;
a0_0x2e7bfb.c84938fe = 1511;
a0_0x2e7bfb['301005ee'] = 1510;
a0_0x2e7bfb['9e7c40af'] = 1509;
a0_0x2e7bfb.c150e1a6 = 1508;
a0_0x2e7bfb.daccfd0f = 1412;
a0_0x2e7bfb['09fa58c9'] = 1413;
a0_0x2e7bfb['26f7ee87'] = 1386;
a0_0x2e7bfb['5d86d48a'] = 1504;
a0_0x2e7bfb.edde1a80 = 1503;
a0_0x2e7bfb['54946d2c'] = 1502;
a0_0x2e7bfb['71a91cde'] = 1507;
a0_0x2e7bfb['9046fa14'] = 1109;
a0_0x2e7bfb.cc874dd1 = 1110;
a0_0x2e7bfb['66ff86c4'] = 1111;
a0_0x2e7bfb['6188bef7'] = 1526;
a0_0x2e7bfb['54de5844'] = 1112;
a0_0x2e7bfb.a4e7a059 = 1113;
a0_0x2e7bfb.e8dcfc06 = 1104;
a0_0x2e7bfb['91a141bf'] = 1105;
a0_0x2e7bfb.f793f7a3 = 1428;
a0_0x2e7bfb['18ae2234'] = 1427;
a0_0x2e7bfb.c76617a6 = 1426;
a0_0x2e7bfb.a337bc57 = 1500;
a0_0x2e7bfb.a6b143e9 = 1499;
a0_0x2e7bfb.e61c6ec2 = 1498;
a0_0x2e7bfb['603c7e00'] = 1585;
a0_0x2e7bfb['7f5e9ab8'] = 61152;
a0_0x2e7bfb['5b35e211'] = 1366;
a0_0x2e7bfb['60f39913'] = 1560;
a0_0x2e7bfb['10cc6a55'] = 1559;
a0_0x2e7bfb['041de30b'] = 1558;
a0_0x2e7bfb.d6e4637c = 1563;
a0_0x2e7bfb.a03e2736 = 1562;
a0_0x2e7bfb['98060c94'] = 1561;
a0_0x2e7bfb.a39d99a3 = 4870;
a0_0x2e7bfb['5548125f'] = 61326;
a0_0x2e7bfb['24961b56'] = 61328;
a0_0x2e7bfb['5519a1e9'] = 1127;
a0_0x2e7bfb['7a695e37'] = 1128;
a0_0x2e7bfb['8e93e9ef'] = 61153;
a0_0x2e7bfb['62d24e20'] = 61154;
a0_0x2e7bfb['5ed0a5d5'] = 1649;
a0_0x2e7bfb['35274ecd'] = 2648;
a0_0x2e7bfb['2a0cbd43'] = 1653;
a0_0x2e7bfb['7dbff90c'] = 4846;
a0_0x2e7bfb['76508aa7'] = 1133;
a0_0x2e7bfb['3f28953e'] = 1138;
a0_0x2e7bfb['0fb68669'] = 1135;
a0_0x2e7bfb['928fe47b'] = 1131;
a0_0x2e7bfb.ad9247ea = 1132;
a0_0x2e7bfb.eb51db76 = 1129;
a0_0x2e7bfb['2753a154'] = 1145;
a0_0x2e7bfb.c79e8bb4 = 1144;
a0_0x2e7bfb['98ca1a08'] = 1143;
a0_0x2e7bfb['95ec3ff5'] = 1146;
a0_0x2e7bfb['7dd14066'] = 1130;
a0_0x2e7bfb['3f5d41a7'] = 1134;
a0_0x2e7bfb['5bdccf08'] = 1136;
a0_0x2e7bfb['9d76b10a'] = 62946;
a0_0x2e7bfb.e0d86348 = 61214;
a0_0x2e7bfb['6fd95d42'] = 1151;
a0_0x2e7bfb['49cec999'] = 1157;
a0_0x2e7bfb['0877702d'] = 1163;
a0_0x2e7bfb['5b77748d'] = 1152;
a0_0x2e7bfb['657563ce'] = 1154;
a0_0x2e7bfb.c7286e2d = 41022;
a0_0x2e7bfb['3dc5a7d5'] = 1155;
a0_0x2e7bfb['15b2e82a'] = 1107;
a0_0x2e7bfb['08506ef5'] = 1368;
a0_0x2e7bfb['8e3fcc56'] = 1153;
a0_0x2e7bfb.a9a1e07a = 1158;
a0_0x2e7bfb['156aaa9c'] = 1162;
a0_0x2e7bfb['3d266c56'] = 2650;
a0_0x2e7bfb.b3cf8394 = 1150;
a0_0x2e7bfb['7f079eea'] = 61235;
a0_0x2e7bfb.a9d7fa7e = 62841;
a0_0x2e7bfb.d08627ff = 62842;
a0_0x2e7bfb['6aa3b99f'] = 61242;
a0_0x2e7bfb.da779043 = 61237;
a0_0x2e7bfb['90883306'] = 61238;
a0_0x2e7bfb.de88aff8 = 61239;
a0_0x2e7bfb['60bb5c2b'] = 61240;
a0_0x2e7bfb['45210188'] = 61241;
a0_0x2e7bfb.d5f2dffb = 61244;
a0_0x2e7bfb['602bd945'] = 4936;
a0_0x2e7bfb['72438d46'] = 61191;
a0_0x2e7bfb.cfd02ddd = 61265;
a0_0x2e7bfb.c2981e94 = 61197;
a0_0x2e7bfb['48bf0b2f'] = 61198;
a0_0x2e7bfb['7d9c98aa'] = 61199;
a0_0x2e7bfb['866aa993'] = 61200;
a0_0x2e7bfb['18208a15'] = 61266;
a0_0x2e7bfb['38137e4b'] = 61267;
a0_0x2e7bfb['68ebb67f'] = 61227;
a0_0x2e7bfb.b98c7260 = 61229;
a0_0x2e7bfb['2e935ae4'] = 61269;
a0_0x2e7bfb.ccf36074 = 61270;
a0_0x2e7bfb['4ca506ff'] = 61273;
a0_0x2e7bfb['84b8f228'] = 61274;
a0_0x2e7bfb['46254506'] = 61275;
a0_0x2e7bfb['8d448a89'] = 61276;
a0_0x2e7bfb.b89b4d84 = 61277;
a0_0x2e7bfb.f9e5d278 = 61278;
a0_0x2e7bfb['20028f76'] = 61279;
a0_0x2e7bfb['71cbccff'] = 61280;
a0_0x2e7bfb.b8a3c4bd = 61282;
a0_0x2e7bfb.b874f498 = 61283;
a0_0x2e7bfb['40dd2524'] = 61232;
a0_0x2e7bfb.f08fbae0 = 61226;
a0_0x2e7bfb['0ed148b3'] = 61225;
a0_0x2e7bfb['97fb0fe2'] = 61218;
a0_0x2e7bfb['3ea6d626'] = 61219;
a0_0x2e7bfb.d00465ff = 61220;
a0_0x2e7bfb['85788c40'] = 61221;
a0_0x2e7bfb.b367ecc3 = 61222;
a0_0x2e7bfb['8b4136bf'] = 61223;
a0_0x2e7bfb['2b864b24'] = 61224;
a0_0x2e7bfb.f3c2b4d2 = 62847;
a0_0x2e7bfb['1ea611ba'] = 61228;
a0_0x2e7bfb['826bf1aa'] = 61264;
a0_0x2e7bfb['55399c32'] = 61185;
a0_0x2e7bfb.bffe67b8 = 61186;
a0_0x2e7bfb.e850c17f = 61187;
a0_0x2e7bfb.b2ce83d7 = 61325;
a0_0x2e7bfb.b57ade25 = 61159;
a0_0x2e7bfb['1557466e'] = 61160;
a0_0x2e7bfb['2000b1a8'] = 61249;
a0_0x2e7bfb.fbd59064 = 61250;
a0_0x2e7bfb['7096646d'] = 61251;
a0_0x2e7bfb.c7033197 = 61246;
a0_0x2e7bfb['19695fb0'] = 61247;
a0_0x2e7bfb['6d09dffc'] = 61248;
a0_0x2e7bfb['3d9502fc'] = 61253;
a0_0x2e7bfb['82d01282'] = 61252;
a0_0x2e7bfb['1250b7b1'] = 61254;
a0_0x2e7bfb['45cfd1d2'] = 61255;
a0_0x2e7bfb['1c209146'] = 61256;
a0_0x2e7bfb['6d479f0d'] = 61161;
a0_0x2e7bfb['429b62f7'] = 61230;
a0_0x2e7bfb['756e17c5'] = 61182;
a0_0x2e7bfb['9fba01b8'] = 61183;
a0_0x2e7bfb['90ead99d'] = 62823;
a0_0x2e7bfb['1fc3d5a7'] = 62824;
a0_0x2e7bfb.e8e10f17 = 62751;
a0_0x2e7bfb['1a0471e5'] = 62822;
a0_0x2e7bfb['9f6045b2'] = 61207;
a0_0x2e7bfb['5c1e4237'] = 61208;
a0_0x2e7bfb.d6100863 = 61209;
a0_0x2e7bfb['5adb7a69'] = 61206;
a0_0x2e7bfb.fa5575ab = 61172;
a0_0x2e7bfb.e8a1443a = 61210;
a0_0x2e7bfb['1ee8132b'] = 61204;
a0_0x2e7bfb['02795324'] = 61151;
a0_0x2e7bfb.c9c23c31 = 62801;
a0_0x2e7bfb['30531d19'] = 62802;
a0_0x2e7bfb['04ef7595'] = 62803;
a0_0x2e7bfb.ba911ea5 = 62769;
a0_0x2e7bfb['48c2bbac'] = 62770;
a0_0x2e7bfb.e5bce818 = 62820;
a0_0x2e7bfb['0626e922'] = 62821;
a0_0x2e7bfb['5f045835'] = 61155;
a0_0x2e7bfb['55a7aff9'] = 61156;
a0_0x2e7bfb.e70e323a = 61157;
a0_0x2e7bfb.e2fa8576 = 61158;
a0_0x2e7bfb['9806e627'] = 61188;
a0_0x2e7bfb.e61273b1 = 61190;
a0_0x2e7bfb.d948f166 = 61211;
a0_0x2e7bfb.cc58c04a = 61212;
a0_0x2e7bfb['0e307898'] = 61290;
a0_0x2e7bfb['715bc7d9'] = 61291;
a0_0x2e7bfb['8572d9a4'] = 61292;
a0_0x2e7bfb.e04fbf9c = 61288;
a0_0x2e7bfb['3747a6c2'] = 61289;
a0_0x2e7bfb['316a9dab'] = 61162;
a0_0x2e7bfb['8a515a11'] = 61163;
a0_0x2e7bfb['213d72f2'] = 61233;
a0_0x2e7bfb['54a01507'] = 61313;
a0_0x2e7bfb['1dccdd3d'] = 62947;
a0_0x2e7bfb.a0157535 = 62771;
a0_0x2e7bfb.d1f9128f = 62772;
a0_0x2e7bfb.ed8215f9 = 62773;
a0_0x2e7bfb.a37622b4 = 62774;
a0_0x2e7bfb['650fbc40'] = 62775;
a0_0x2e7bfb.c81ce9ab = 62752;
a0_0x2e7bfb['7e719954'] = 62876;
a0_0x2e7bfb['3a59d709'] = 62877;
a0_0x2e7bfb['3592a7c9'] = 62878;
a0_0x2e7bfb.a643ce92 = 62879;
a0_0x2e7bfb.ac905239 = 62880;
a0_0x2e7bfb.cd68e614 = 62881;
a0_0x2e7bfb['510486b2'] = 41021;
a0_0x2e7bfb['5c743d10'] = 61215;
a0_0x2e7bfb['71e7416f'] = 61306;
a0_0x2e7bfb.bbdb3c5c = 61294;
a0_0x2e7bfb.b0cd2fa8 = 61308;
a0_0x2e7bfb.e9bc9889 = 3803;
a0_0x2e7bfb['8164ac83'] = 61301;
a0_0x2e7bfb['0cd1d51d'] = 61323;
a0_0x2e7bfb['4326e3ce'] = 61324;
a0_0x2e7bfb['555f559c'] = 51082;
a0_0x2e7bfb.de13f8ae = 62787;
a0_0x2e7bfb.afecb3e7 = 62848;
a0_0x2e7bfb.dbbad8bf = 62846;
a0_0x2e7bfb['7dcae835'] = 62949;
a0_0x2e7bfb.c1c5b127 = 62948;
a0_0x2e7bfb['8939b1a3'] = 62916;
a0_0x2e7bfb['4f8e66a2'] = 62920;
a0_0x2e7bfb['5dd01b64'] = 62940;
a0_0x2e7bfb['138db2aa'] = 62941;
a0_0x2e7bfb.b1394603 = 62942;
a0_0x2e7bfb['765e055e'] = 62943;
a0_0x2e7bfb['3392bddd'] = 62944;
a0_0x2e7bfb.fefdc43c = 62945;
a0_0x2e7bfb['131c47e3'] = 62811;
a0_0x2e7bfb['551a91b5'] = 62813;
a0_0x2e7bfb['6651a50d'] = 62778;
a0_0x2e7bfb.d118cabf = 2602;
a0_0x2e7bfb['4ab82f1b'] = 4854;
a0_0x2e7bfb['9d53f478'] = 4850;
a0_0x2e7bfb['75970286'] = 4852;
a0_0x2e7bfb.f0683077 = 62786;
a0_0x2e7bfb.bf82d870 = 4955;
a0_0x2e7bfb['7f0c3e19'] = 4957;
a0_0x2e7bfb['0c1a3cd0'] = 4959;
a0_0x2e7bfb.ee40cb87 = 4961;
a0_0x2e7bfb.d2f8f843 = 4963;
a0_0x2e7bfb.fbd81513 = 4965;
a0_0x2e7bfb['0c8ba649'] = 4967;
a0_0x2e7bfb['0bc7e936'] = 4969;
a0_0x2e7bfb['3faa66b5'] = 4971;
a0_0x2e7bfb.c9639e3e = 4973;
a0_0x2e7bfb.f3cc1fe0 = 4975;
a0_0x2e7bfb.d7673e31 = 4953;
a0_0x2e7bfb['9c0b81b9'] = 4956;
a0_0x2e7bfb.bf1a5ba0 = 4958;
a0_0x2e7bfb.ca6f1d20 = 4960;
a0_0x2e7bfb.e3be167d = 4962;
a0_0x2e7bfb.c855287d = 4964;
a0_0x2e7bfb['2943b4ac'] = 4966;
a0_0x2e7bfb['5747cabf'] = 4968;
a0_0x2e7bfb['0fe240ee'] = 4970;
a0_0x2e7bfb.fcc1f101 = 4972;
a0_0x2e7bfb['82d352ff'] = 4974;
a0_0x2e7bfb.c6049469 = 4976;
a0_0x2e7bfb['8b6ab1f2'] = 4954;
a0_0x2e7bfb['094570b9'] = 61213;
a0_0x2e7bfb['79b5757d'] = 4952;
a0_0x2e7bfb['7c1ebc92'] = 1156;
a0_0x2e7bfb['1737bb99'] = 1587;
a0_0x2e7bfb['04f9eb4b'] = 1497;
a0_0x2e7bfb['40b13df7'] = 1496;
a0_0x2e7bfb['5db17ea2'] = 1495;
a0_0x2e7bfb['840c82f3'] = 61111;
a0_0x2e7bfb.a26197a1 = 2641;
a0_0x2e7bfb.b748783a = 2642;
a0_0x2e7bfb.ee3fed22 = 51087;
a0_0x2e7bfb['94c47958'] = 1586;
a0_0x2e7bfb.d2fc10f3 = 61281;
a0_0x2e7bfb.a55b8dcc = 61261;
a0_0x2e7bfb['1e36b1bf'] = 61260;
a0_0x2e7bfb['37400524'] = 61262;
a0_0x2e7bfb['24d5f023'] = 61263;
a0_0x2e7bfb['1d718fda'] = 1329;
a0_0x2e7bfb['95ab2316'] = 1348;
a0_0x2e7bfb['54f201ef'] = 1331;
a0_0x2e7bfb.e4a76ff1 = 1148;
a0_0x2e7bfb['5f823454'] = 61192;
a0_0x2e7bfb.ea9dfc54 = 61193;
a0_0x2e7bfb['4794c518'] = 61195;
a0_0x2e7bfb.de5dc62f = 61196;
a0_0x2e7bfb['50363820'] = 51104;
a0_0x2e7bfb.e32f9816 = 61268;
a0_0x2e7bfb['062969c9'] = 61285;
a0_0x2e7bfb.d70c3958 = 61286;
a0_0x2e7bfb['3367636a'] = 61287;
a0_0x2e7bfb.a8186c3a = 61271;
a0_0x2e7bfb['44beb87c'] = 61272;
a0_0x2e7bfb['0619e32e'] = 61310;
a0_0x2e7bfb.e7ba20b7 = 61293;
a0_0x2e7bfb['980b4fb5'] = 61231;
a0_0x2e7bfb['2ca6f561'] = 61299;
a0_0x2e7bfb.a3511291 = 1683;
a0_0x2e7bfb.ed4d69db = 1160;
a0_0x2e7bfb['1c24519e'] = 1161;
a0_0x2e7bfb['0bd742cf'] = 61257;
a0_0x2e7bfb.cc8b062c = 4810;
a0_0x2e7bfb.d0b66d48 = 4816;
a0_0x2e7bfb['725967fd'] = 4847;
a0_0x2e7bfb['7ed46e10'] = 4848;
a0_0x2e7bfb.b42a8200 = 4811;
a0_0x2e7bfb['6d5c9490'] = 61362;
a0_0x2e7bfb['7d58344d'] = 11;
a0_0x2e7bfb['54b7caea'] = 14;
a0_0x2e7bfb['44edf999'] = 18;
a0_0x2e7bfb['8b505476'] = 12;
a0_0x2e7bfb['9ec528fa'] = 13;
a0_0x2e7bfb.d6a819ca = 16;
a0_0x2e7bfb['79fadf64'] = 15;
a0_0x2e7bfb.c068e4c8 = 114;
a0_0x2e7bfb['9160a4fa'] = 1103;
a0_0x2e7bfb['381e9b26'] = 112;
a0_0x2e7bfb.ff9791a3 = 113;
a0_0x2e7bfb.e8fef41f = 124;
a0_0x2e7bfb['031783e2'] = 150;
a0_0x2e7bfb['4057a3bf'] = 116;
a0_0x2e7bfb.a68197a5 = 170;
a0_0x2e7bfb.ce5f3fc1 = 144;
a0_0x2e7bfb['401b6c0d'] = 139;
a0_0x2e7bfb['06337c53'] = 140;
a0_0x2e7bfb.ef42fb48 = 145;
a0_0x2e7bfb['5a887b24'] = 195;
a0_0x2e7bfb['9d035a09'] = 151;
a0_0x2e7bfb['60b6b889'] = 173;
a0_0x2e7bfb['44fd97df'] = 192;
a0_0x2e7bfb['2bb9f90f'] = 119;
a0_0x2e7bfb['6f68b3e1'] = 118;
a0_0x2e7bfb['6c1853f2'] = 122;
a0_0x2e7bfb['5df54642'] = 121;
a0_0x2e7bfb.c0d0f7c3 = 125;
a0_0x2e7bfb.b0047fdb = 126;
a0_0x2e7bfb['24f63d53'] = 128;
a0_0x2e7bfb['13166672'] = 194;
a0_0x2e7bfb.c6d58834 = 175;
a0_0x2e7bfb['50fa3970'] = 1101;
a0_0x2e7bfb['9a501c8f'] = 1100;
a0_0x2e7bfb['0550e8e2'] = 189;
a0_0x2e7bfb.c6949390 = 193;
a0_0x2e7bfb['9bf144aa'] = 199;
a0_0x2e7bfb.a1efb4ac = 188;
a0_0x2e7bfb['6b5d4ff2'] = 184;
a0_0x2e7bfb['9f4170f2'] = 185;
a0_0x2e7bfb['190448c7'] = 186;
a0_0x2e7bfb.f85f2a5a = 196;
a0_0x2e7bfb.c8c290bf = 152;
a0_0x2e7bfb['8cfb1402'] = 197;
a0_0x2e7bfb['8d4dfc3f'] = 147;
a0_0x2e7bfb.abfa7a72 = 190;
a0_0x2e7bfb.ff089d2f = 148;
a0_0x2e7bfb['3cc92fdd'] = 178;
a0_0x2e7bfb['097be7b2'] = 179;
a0_0x2e7bfb['29e30108'] = 187;
a0_0x2e7bfb['1d72e247'] = 191;
a0_0x2e7bfb['6f3fbe9a'] = 180;
a0_0x2e7bfb['32ef91a5'] = 181;
a0_0x2e7bfb['4e2058ca'] = 154;
a0_0x2e7bfb.a839e014 = 165;
a0_0x2e7bfb['6d632196'] = 164;
a0_0x2e7bfb.cb4f8070 = 143;
a0_0x2e7bfb.f8befe4d = 141;
a0_0x2e7bfb['18cbc031'] = 155;
a0_0x2e7bfb['342defcf'] = 1116;
a0_0x2e7bfb['280d6ba7'] = 1117;
a0_0x2e7bfb.bcdb377c = 1115;
a0_0x2e7bfb['8dfc666c'] = 1118;
a0_0x2e7bfb['5ae99972'] = 1119;
a0_0x2e7bfb['7bd90ad6'] = 1120;
a0_0x2e7bfb.ab523cb0 = 1123;
a0_0x2e7bfb.c0ba853d = 1122;
a0_0x2e7bfb.a021c9e4 = 1121;
a0_0x2e7bfb['2add2cda'] = 176;
a0_0x2e7bfb.e64546e2 = 19;
a0_0x2e7bfb.a60f9356 = 110;
a0_0x2e7bfb['3e219b68'] = 146;
a0_0x2e7bfb.dcf9f1df = 1422;
a0_0x2e7bfb['7111d41f'] = 1421;
a0_0x2e7bfb.faf8220b = 1420;
a0_0x2e7bfb.f9e308cb = 1425;
a0_0x2e7bfb.defd0bfc = 1424;
a0_0x2e7bfb['92bc2abc'] = 1423;
a0_0x2e7bfb['9f5219ee'] = 1437;
a0_0x2e7bfb['39dddd24'] = 1436;
a0_0x2e7bfb['7cdefdb0'] = 1435;
a0_0x2e7bfb['511d216c'] = 1124;
a0_0x2e7bfb['4cea3ea3'] = 1125;
a0_0x2e7bfb['7ba9445f'] = 1126;
a0_0x2e7bfb.aa0f537f = 1431;
a0_0x2e7bfb['7610b12b'] = 1430;
a0_0x2e7bfb['4ae757a6'] = 1429;
a0_0x2e7bfb['2d562364'] = 1359;
a0_0x2e7bfb.ccf17e7f = 1416;
a0_0x2e7bfb['76dc12d1'] = 1415;
a0_0x2e7bfb['507320cb'] = 1414;
a0_0x2e7bfb.f2e66eba = 1419;
a0_0x2e7bfb['0f740295'] = 1418;
a0_0x2e7bfb.d0c45cf6 = 1417;
a0_0x2e7bfb.ff736986 = 1364;
a0_0x2e7bfb['28a3c34b'] = 4942;
a0_0x2e7bfb.c53ef194 = 4937;
a0_0x2e7bfb['2dbf6b09'] = 4872;
a0_0x2e7bfb.ff7addd2 = 4873;
a0_0x2e7bfb['0d45bb2f'] = 4874;
a0_0x2e7bfb['619041c9'] = 4875;
a0_0x2e7bfb.ec35bffd = 4876;
a0_0x2e7bfb.c168b269 = 4877;
a0_0x2e7bfb.c436657f = 4878;
a0_0x2e7bfb.b91872b1 = 4879;
a0_0x2e7bfb.d573bde8 = 4880;
a0_0x2e7bfb['4cfb4630'] = 4883;
a0_0x2e7bfb['7a03054c'] = 4884;
a0_0x2e7bfb['67710ddf'] = 4885;
a0_0x2e7bfb.ec458645 = 4886;
a0_0x2e7bfb['2d8548c2'] = 4911;
a0_0x2e7bfb.b842599e = 4887;
a0_0x2e7bfb.da18cfcd = 4888;
a0_0x2e7bfb['42fcd5b5'] = 4889;
a0_0x2e7bfb['40f9bb15'] = 4890;
a0_0x2e7bfb['558ed5ff'] = 4891;
a0_0x2e7bfb['01ce810e'] = 4892;
a0_0x2e7bfb.ccc3a5a6 = 4893;
a0_0x2e7bfb['0cab50bc'] = 4894;
a0_0x2e7bfb['64c0a74b'] = 4895;
a0_0x2e7bfb['5d79d46d'] = 4896;
a0_0x2e7bfb['47040b03'] = 4898;
a0_0x2e7bfb['9fae735e'] = 4899;
a0_0x2e7bfb['254df136'] = 4900;
a0_0x2e7bfb.cad46638 = 4881;
a0_0x2e7bfb['99cf552d'] = 4882;
a0_0x2e7bfb['4b72922c'] = 4938;
a0_0x2e7bfb['81afbfac'] = 4939;
a0_0x2e7bfb['37da7763'] = 4940;
a0_0x2e7bfb['65369ef8'] = 4930;
a0_0x2e7bfb['9d01613f'] = 1609;
a0_0x2e7bfb['70583fbb'] = 1608;
a0_0x2e7bfb['1a09cbed'] = 1607;
a0_0x2e7bfb.ac6e2c83 = 4926;
a0_0x2e7bfb['773cb264'] = 4918;
a0_0x2e7bfb.afd7aa26 = 4919;
a0_0x2e7bfb['0e9ced84'] = 4921;
a0_0x2e7bfb['0dfac8ac'] = 4917;
a0_0x2e7bfb['59e23d63'] = 71587;
a0_0x2e7bfb.fe10de14 = 61333;
a0_0x2e7bfb['6e8181c1'] = 62745;
a0_0x2e7bfb['78f53ddc'] = 61358;
a0_0x2e7bfb.c9fcbccd = 62747;
a0_0x2e7bfb['29678cda'] = 62730;
a0_0x2e7bfb['566fdd5a'] = 62748;
a0_0x2e7bfb.da7a5b94 = 62731;
a0_0x2e7bfb['344280ab'] = 62749;
a0_0x2e7bfb['3dbe7265'] = 4907;
a0_0x2e7bfb['6fc3a6e7'] = 62746;
a0_0x2e7bfb.feb28ef5 = 1621;
a0_0x2e7bfb.a8c7a75c = 1620;
a0_0x2e7bfb['8e823c47'] = 1619;
a0_0x2e7bfb.a115706a = 1624;
a0_0x2e7bfb['6f50389d'] = 1623;
a0_0x2e7bfb.fb8090a7 = 1622;
a0_0x2e7bfb['38f7dd74'] = 1566;
a0_0x2e7bfb['123746fb'] = 1565;
a0_0x2e7bfb['4b283647'] = 1564;
a0_0x2e7bfb['942a038e'] = 62750;
a0_0x2e7bfb['4f4d084e'] = 62743;
a0_0x2e7bfb['55f86b8e'] = 62733;
a0_0x2e7bfb['73a89489'] = 62734;
a0_0x2e7bfb.e289937c = 62735;
a0_0x2e7bfb.c9ded210 = 62736;
a0_0x2e7bfb['9f98609a'] = 61340;
a0_0x2e7bfb['9a4d43fa'] = 62737;
a0_0x2e7bfb['0567dd85'] = 61342;
a0_0x2e7bfb['7eb17a2b'] = 1643;
a0_0x2e7bfb.bc6ba548 = 61343;
a0_0x2e7bfb['5b95dd22'] = 62738;
a0_0x2e7bfb['60ca4e0f'] = 62739;
a0_0x2e7bfb['75c1ba60'] = 62740;
a0_0x2e7bfb.fb936661 = 62741;
a0_0x2e7bfb.a6f40c45 = 61338;
a0_0x2e7bfb['86c801ed'] = 1644;
a0_0x2e7bfb['3fa6aada'] = 61133;
a0_0x2e7bfb.d0311fe9 = 4944;
a0_0x2e7bfb['0afa3e0e'] = 61337;
a0_0x2e7bfb.dc3b92a7 = 62776;
a0_0x2e7bfb.c7577e62 = 4920;
a0_0x2e7bfb['0ed0eac0'] = 61357;
a0_0x2e7bfb['2fa0bb47'] = 4851;
a0_0x2e7bfb['8c195761'] = 4828;
a0_0x2e7bfb['3620ad5b'] = 61334;
a0_0x2e7bfb['4cd61307'] = 61298;
a0_0x2e7bfb['7a2a97ec'] = 61304;
a0_0x2e7bfb['78b7b3e9'] = 4914;
a0_0x2e7bfb['2fd5807e'] = 4912;
a0_0x2e7bfb.cd1e5145 = 4913;
a0_0x2e7bfb['63ba1c79'] = 4929;
a0_0x2e7bfb.e9f2c6f9 = 4932;
a0_0x2e7bfb.d9fd855c = 4933;
a0_0x2e7bfb.eb0f8649 = 4934;
a0_0x2e7bfb['07ad9202'] = 4941;
a0_0x2e7bfb['2999a420'] = 4927;
a0_0x2e7bfb['5863990c'] = 4908;
a0_0x2e7bfb.b477d7bb = 4903;
a0_0x2e7bfb['5cf7fedb'] = 4925;
a0_0x2e7bfb['3cc45d74'] = 51076;
a0_0x2e7bfb['66b19582'] = 4943;
a0_0x2e7bfb['7e549754'] = 4909;
a0_0x2e7bfb['4a14b012'] = 4906;
a0_0x2e7bfb.e3ea6325 = 4897;
a0_0x2e7bfb['857a55d8'] = 4910;
a0_0x2e7bfb['2bd0b8ea'] = 62917;
a0_0x2e7bfb['6992a56c'] = 62918;
a0_0x2e7bfb.e9abfc9b = 62919;
a0_0x2e7bfb['53e443ae'] = 62921;
a0_0x2e7bfb['507467f4'] = 62922;
a0_0x2e7bfb['55e8b172'] = 62925;
a0_0x2e7bfb.a5486584 = 62929;
a0_0x2e7bfb['63f1eb5f'] = 62926;
a0_0x2e7bfb.c77ab109 = 62927;
a0_0x2e7bfb['0e3e1afc'] = 62928;
a0_0x2e7bfb.dd62e799 = 62930;
a0_0x2e7bfb['13252839'] = 62931;
a0_0x2e7bfb.c5a160fc = 1337;
a0_0x2e7bfb.b2942274 = 1149;
a0_0x2e7bfb['41089a31'] = 1147;
a0_0x2e7bfb['5a7a1136'] = 1338;
a0_0x2e7bfb.b664fddd = 137;
a0_0x2e7bfb.a6c7cab3 = 129;
a0_0x2e7bfb['28dcf04b'] = 156;
a0_0x2e7bfb['8eb45bcf'] = 171;
a0_0x2e7bfb['71e2712e'] = 135;
a0_0x2e7bfb.b83406e4 = 157;
a0_0x2e7bfb.caad3352 = 1114;
a0_0x2e7bfb.d3e30470 = 130;
a0_0x2e7bfb['9306c1c4'] = 1343;
a0_0x2e7bfb['6608e179'] = 1344;
a0_0x2e7bfb.c4fcb420 = 1328;
a0_0x2e7bfb.dbc53ef5 = 1356;
a0_0x2e7bfb.ce7adcb0 = 1357;
a0_0x2e7bfb.a9d528bc = 1363;
a0_0x2e7bfb.dd0ce429 = 1340;
a0_0x2e7bfb.b05fe0ce = 1342;
a0_0x2e7bfb.df0e74fb = 167;
a0_0x2e7bfb['0f6ef293'] = 1108;
a0_0x2e7bfb['4f0924b0'] = 158;
a0_0x2e7bfb.e87b070d = 17;
a0_0x2e7bfb.c4428fdb = 153;
a0_0x2e7bfb.ef9fb64b = 149;
a0_0x2e7bfb['534e86fe'] = 1440;
a0_0x2e7bfb.d4b4bb1a = 1439;
a0_0x2e7bfb.c4ae204d = 1438;
a0_0x2e7bfb.a680d17c = 160;
a0_0x2e7bfb.fe4de49e = 138;
a0_0x2e7bfb['85181cc8'] = 117;
a0_0x2e7bfb.bec2b578 = 127;
a0_0x2e7bfb['23e16eb4'] = 134;
a0_0x2e7bfb['48431500'] = 1102;
a0_0x2e7bfb.f9c631e7 = 131;
a0_0x2e7bfb['4075fdcf'] = 159;
a0_0x2e7bfb['5ee2299e'] = 166;
a0_0x2e7bfb.c83caefd = 1519;
a0_0x2e7bfb.ede3d6a4 = 1522;
a0_0x2e7bfb.b29c4c94 = 1362;
a0_0x2e7bfb.c13a73ef = 1367;
a0_0x2e7bfb['350367c4'] = 1506;
a0_0x2e7bfb.c099c3bc = 1515;
a0_0x2e7bfb['1f333eef'] = 1514;
a0_0x2e7bfb.cc064151 = 1513;
a0_0x2e7bfb.d08331d9 = 1528;
a0_0x2e7bfb['2568d2fb'] = 1443;
a0_0x2e7bfb['6435c0e3'] = 1442;
a0_0x2e7bfb.a0073cc3 = 1441;
a0_0x2e7bfb['12e819a9'] = 1627;
a0_0x2e7bfb.a949afc3 = 1626;
a0_0x2e7bfb['1c845b02'] = 1625;
a0_0x2e7bfb.e3d65178 = 1639;
a0_0x2e7bfb['94e52ecf'] = 1638;
a0_0x2e7bfb['119f3e95'] = 1637;
a0_0x2e7bfb['57ebc1d8'] = 1597;
a0_0x2e7bfb['7022f820'] = 1630;
a0_0x2e7bfb['4ad8ee73'] = 1629;
a0_0x2e7bfb['9cbe771e'] = 1628;
a0_0x2e7bfb.cd871142 = 1633;
a0_0x2e7bfb['8285ce27'] = 1632;
a0_0x2e7bfb.c7fcdbe9 = 1631;
a0_0x2e7bfb['8db0c453'] = 1636;
a0_0x2e7bfb.fe2c8554 = 1635;
a0_0x2e7bfb.c805d25b = 1634;
a0_0x2e7bfb['90d2b432'] = 51073;
a0_0x2e7bfb['9e55d5ac'] = 2654;
a0_0x2e7bfb['4bc65042'] = 61180;
a0_0x2e7bfb['041e2977'] = 3791;
a0_0x2e7bfb['05416acb'] = 3792;
a0_0x2e7bfb.b4004876 = 3802;
a0_0x2e7bfb['11e8cd65'] = 51069;
a0_0x2e7bfb['7cafa64c'] = 51048;
a0_0x2e7bfb.ebe280eb = 51049;
a0_0x2e7bfb.b58d2d70 = 51050;
a0_0x2e7bfb.ca584398 = 51067;
a0_0x2e7bfb['95fc704f'] = 51068;
a0_0x2e7bfb.c6502dec = 51077;
a0_0x2e7bfb['289ded77'] = 51064;
a0_0x2e7bfb['150579cf'] = 51053;
a0_0x2e7bfb.c77da3c2 = 51059;
a0_0x2e7bfb.ab55de61 = 3710;
a0_0x2e7bfb.f6315826 = 3693;
a0_0x2e7bfb['7aa943da'] = 3700;
a0_0x2e7bfb['18d5e580'] = 3721;
a0_0x2e7bfb['79240f65'] = 3695;
a0_0x2e7bfb['9576acf3'] = 3696;
a0_0x2e7bfb['729a326d'] = 3711;
a0_0x2e7bfb['2030e72f'] = 3738;
a0_0x2e7bfb['23e3f45b'] = 3734;
a0_0x2e7bfb.ee6368ef = 3730;
a0_0x2e7bfb['57f2c1cf'] = 3732;
a0_0x2e7bfb.d07148ad = 3780;
a0_0x2e7bfb.fd5b18d6 = 3706;
a0_0x2e7bfb.ecdff862 = 3689;
a0_0x2e7bfb['19553070'] = 3715;
a0_0x2e7bfb['3d5943f8'] = 3757;
a0_0x2e7bfb.ba7d62a9 = 3758;
a0_0x2e7bfb.fad5dfc3 = 3759;
a0_0x2e7bfb['0f1fab16'] = 3799;
a0_0x2e7bfb.a38c3b2c = 3737;
a0_0x2e7bfb.b8e4c7d0 = 3794;
a0_0x2e7bfb['0ef9b9b0'] = 3692;
a0_0x2e7bfb['50fdb457'] = 3702;
a0_0x2e7bfb['02037ee2'] = 3773;
a0_0x2e7bfb.c694ffea = 3713;
a0_0x2e7bfb['3161cb8e'] = 3720;
a0_0x2e7bfb['5be503a9'] = 3726;
a0_0x2e7bfb['355ef10b'] = 3742;
a0_0x2e7bfb['05939127'] = 3701;
a0_0x2e7bfb['2a8cce68'] = 3681;
a0_0x2e7bfb['0a29f9da'] = 3755;
a0_0x2e7bfb['3a8d3a68'] = 3714;
a0_0x2e7bfb['98dc2bd1'] = 115;
a0_0x2e7bfb.b213d555 = 198;
a0_0x2e7bfb['45c886bd'] = 123;
a0_0x2e7bfb['076ebb10'] = 168;
a0_0x2e7bfb['44eb000f'] = 163;
a0_0x2e7bfb.a54a144f = 161;
a0_0x2e7bfb['599d6c8e'] = 162;
a0_0x2e7bfb['8cbcc9a3'] = 1501;
a0_0x2e7bfb['44d9e0c8'] = 169;
a0_0x2e7bfb['45156e60'] = 182;
a0_0x2e7bfb['429b9ecb'] = 61124;
a0_0x2e7bfb['02f9f450'] = 61113;
a0_0x2e7bfb.be5287bf = 61112;
a0_0x2e7bfb['4ea48c8c'] = 61138;
a0_0x2e7bfb.b7dabbea = 61139;
a0_0x2e7bfb.a6df6bfb = 3760;
a0_0x2e7bfb['40ea9f0f'] = 2545;
a0_0x2e7bfb['5d8f131f'] = 2643;
a0_0x2e7bfb['31cbce89'] = 2594;
a0_0x2e7bfb['6c48b7ac'] = 2551;
a0_0x2e7bfb.ea6c4c53 = 2603;
a0_0x2e7bfb['8ed2891f'] = 2604;
a0_0x2e7bfb['39a2ac87'] = 2583;
a0_0x2e7bfb['6ab8d59e'] = 2628;
a0_0x2e7bfb.ec2eec18 = 2606;
a0_0x2e7bfb['8eb78c03'] = 2540;
a0_0x2e7bfb['0037f061'] = 2633;
a0_0x2e7bfb.fa66ce1f = 2553;
a0_0x2e7bfb['3295b450'] = 2532;
a0_0x2e7bfb['4eefe5ac'] = 2615;
a0_0x2e7bfb['6f29de49'] = 2572;
a0_0x2e7bfb['4b91a674'] = 3762;
a0_0x2e7bfb['0f2ba854'] = 3763;
a0_0x2e7bfb['0234274f'] = 2569;
a0_0x2e7bfb.fb816207 = 2552;
a0_0x2e7bfb['6dc7ff55'] = 2582;
a0_0x2e7bfb['6e342ef4'] = 2619;
a0_0x2e7bfb['6866e2c1'] = 2620;
a0_0x2e7bfb['69f21467'] = 2639;
a0_0x2e7bfb['3c492447'] = 2591;
a0_0x2e7bfb.f2673836 = 2568;
a0_0x2e7bfb['7ceedbbf'] = 2610;
a0_0x2e7bfb['83600353'] = 2573;
a0_0x2e7bfb.e68752ae = 2611;
a0_0x2e7bfb.e62ca3b1 = 2541;
a0_0x2e7bfb['191bdf35'] = 3761;
a0_0x2e7bfb.e2721832 = 2644;
a0_0x2e7bfb['9bf9ab79'] = 2647;
a0_0x2e7bfb['6bbb4367'] = 2592;
a0_0x2e7bfb['5b96c465'] = 2605;
a0_0x2e7bfb.fe651594 = 2571;
a0_0x2e7bfb.d61b49d1 = 2607;
a0_0x2e7bfb['014f705a'] = 2588;
a0_0x2e7bfb.c53ebf76 = 2589;
a0_0x2e7bfb['46ad1c5a'] = 2533;
a0_0x2e7bfb['65b4b7f0'] = 2590;
a0_0x2e7bfb['4de45e02'] = 2609;
a0_0x2e7bfb['6d349d7e'] = 3764;
a0_0x2e7bfb['17e9d19c'] = 2581;
a0_0x2e7bfb['26c6bad7'] = 2554;
a0_0x2e7bfb.b090824f = 2624;
a0_0x2e7bfb['233c7296'] = 2536;
a0_0x2e7bfb['366deab6'] = 61312;
a0_0x2e7bfb['68723756'] = 1380;
a0_0x2e7bfb['3b7cd906'] = 1371;
a0_0x2e7bfb.b3dbfb21 = 1372;
a0_0x2e7bfb['818de96e'] = 1379;
a0_0x2e7bfb['0cab5e97'] = 1532;
a0_0x2e7bfb.dae3d008 = 1531;
a0_0x2e7bfb.f1b2cdfc = 1530;
a0_0x2e7bfb.a7378617 = 1535;
a0_0x2e7bfb['4b51cd0c'] = 1534;
a0_0x2e7bfb['049aed3e'] = 1533;
a0_0x2e7bfb.d51caf5f = 61114;
a0_0x2e7bfb.f8aee103 = 1374;
a0_0x2e7bfb.d178bf25 = 4905;
a0_0x2e7bfb.ea4864c5 = 4904;
a0_0x2e7bfb['109d72fb'] = 1369;
a0_0x2e7bfb['0c003ba8'] = 1370;
a0_0x2e7bfb['5d299321'] = 3717;
a0_0x2e7bfb.a780f87e = 3772;
a0_0x2e7bfb['0cc50e04'] = 3741;
a0_0x2e7bfb.a6c0834f = 3796;
a0_0x2e7bfb.f3b47bfb = 3703;
a0_0x2e7bfb.abc8f386 = 3704;
a0_0x2e7bfb['023f35bc'] = 3731;
a0_0x2e7bfb.f2cdf4b0 = 3716;
a0_0x2e7bfb.d3126512 = 3740;
a0_0x2e7bfb['86083764'] = 3797;
a0_0x2e7bfb['705e0985'] = 3798;
a0_0x2e7bfb.a5706da4 = 3795;
a0_0x2e7bfb.ea5a50c5 = 1569;
a0_0x2e7bfb.d3ce1eeb = 1568;
a0_0x2e7bfb['8dd4dadb'] = 1567;
a0_0x2e7bfb['746ee3ef'] = 1572;
a0_0x2e7bfb['6106a9be'] = 1571;
a0_0x2e7bfb['14a22528'] = 1570;
a0_0x2e7bfb['97ac3f79'] = 1434;
a0_0x2e7bfb.bf4c49a7 = 1433;
a0_0x2e7bfb['3d805add'] = 1432;
a0_0x2e7bfb.ea228694 = 172;
a0_0x2e7bfb['4f8599c2'] = 1456;
a0_0x2e7bfb['71d48aa6'] = 1459;
a0_0x2e7bfb.fc9e3b2d = 1525;
a0_0x2e7bfb['6d528033'] = 1529;
a0_0x2e7bfb['4d2c83b2'] = 1447;
a0_0x2e7bfb.c0de4d20 = 1477;
a0_0x2e7bfb.f46cac4a = 1480;
a0_0x2e7bfb['1212a774'] = 1450;
a0_0x2e7bfb['2eced12a'] = 1465;
a0_0x2e7bfb['82e0c6a3'] = 1474;
a0_0x2e7bfb['7276f925'] = 1468;
a0_0x2e7bfb['35147fb1'] = 1462;
a0_0x2e7bfb.eda341ee = 1471;
a0_0x2e7bfb.e98d1a94 = 1486;
a0_0x2e7bfb.e99e0341 = 1489;
a0_0x2e7bfb['834f5e98'] = 1645;
a0_0x2e7bfb['83b7c9f9'] = 1573;
a0_0x2e7bfb['68f8fa64'] = 1402;
a0_0x2e7bfb['43974611'] = 1404;
a0_0x2e7bfb.f962fec3 = 1408;
a0_0x2e7bfb['1bcc16eb'] = 1406;
a0_0x2e7bfb['5032e46d'] = 1576;
a0_0x2e7bfb['05426d2f'] = 1579;
a0_0x2e7bfb['6c51737a'] = 1444;
a0_0x2e7bfb.a8f2f7ad = 1453;
a0_0x2e7bfb['672aa8b3'] = 1483;
a0_0x2e7bfb.a37761d7 = 1390;
a0_0x2e7bfb.c4f890c1 = 1387;
a0_0x2e7bfb.d9b7d260 = 1411;
a0_0x2e7bfb['69867283'] = 1395;
a0_0x2e7bfb['87ded516'] = 1394;
a0_0x2e7bfb.aac190d3 = 1393;
a0_0x2e7bfb.be1720de = 1512;
a0_0x2e7bfb.ebc03b37 = 1593;
a0_0x2e7bfb.f716b19e = 1592;
a0_0x2e7bfb.d02a461b = 1591;
a0_0x2e7bfb['106bd4e2'] = 1596;
a0_0x2e7bfb['1e07e7c8'] = 1595;
a0_0x2e7bfb['3346ed6b'] = 1594;
a0_0x2e7bfb.afe8b58b = 1642;
a0_0x2e7bfb['39aeb8d2'] = 1641;
a0_0x2e7bfb['7da5f5da'] = 1640;
a0_0x2e7bfb.ee430649 = 1538;
a0_0x2e7bfb['494176b0'] = 1537;
a0_0x2e7bfb.dc43bec8 = 1536;
a0_0x2e7bfb['324ba6af'] = 1541;
a0_0x2e7bfb['8ecf61cb'] = 1540;
a0_0x2e7bfb.be25cf07 = 1539;
a0_0x2e7bfb['8ead197e'] = 1544;
a0_0x2e7bfb['8955d65f'] = 1543;
a0_0x2e7bfb.d2a16049 = 1542;
a0_0x2e7bfb['95d7b9f0'] = 1547;
a0_0x2e7bfb['84cade85'] = 1546;
a0_0x2e7bfb['35653eb3'] = 1545;
a0_0x2e7bfb['46321e9e'] = 1550;
a0_0x2e7bfb.c11d5edc = 1549;
a0_0x2e7bfb.f27f0be9 = 1548;
a0_0x2e7bfb['6d71db17'] = 1553;
a0_0x2e7bfb['7930aaae'] = 1552;
a0_0x2e7bfb['62b9dc97'] = 1551;
a0_0x2e7bfb['6d5df4fa'] = 1556;
a0_0x2e7bfb['1571ca84'] = 1555;
a0_0x2e7bfb.eb50c4c0 = 1554;
a0_0x2e7bfb.a5e1615b = 1376;
a0_0x2e7bfb.fd0e2989 = 1142;
a0_0x2e7bfb['7f219aa0'] = 61148;
a0_0x2e7bfb['1efbc962'] = 61118;
a0_0x2e7bfb['6097415f'] = 61119;
a0_0x2e7bfb.b1c012f1 = 61120;
a0_0x2e7bfb['32071712'] = 61121;
a0_0x2e7bfb.e4a574f4 = 51039;
a0_0x2e7bfb['2449343f'] = 51028;
a0_0x2e7bfb['23cc879e'] = 51090;
a0_0x2e7bfb['34c7cf02'] = 61320;
a0_0x2e7bfb.c3d3e86b = 61321;
a0_0x2e7bfb.f1b61a7b = 61322;
a0_0x2e7bfb['5af3ff18'] = 4812;
a0_0x2e7bfb['56a846c3'] = 61201;
a0_0x2e7bfb['64aa3ec1'] = 61356;
a0_0x2e7bfb['7a14ba5b'] = 61316;
a0_0x2e7bfb.c51016ab = 4825;
a0_0x2e7bfb['46113b8a'] = 61317;
a0_0x2e7bfb['810cea28'] = 4945;
a0_0x2e7bfb.fc279ecd = 61346;
a0_0x2e7bfb.f7ed0b91 = 51106;
a0_0x2e7bfb.a6ca0411 = 51108;
a0_0x2e7bfb['6a8f6973'] = 61347;
a0_0x2e7bfb.ed098d8f = 51091;
a0_0x2e7bfb['8350bbac'] = 61348;
a0_0x2e7bfb['3c105eb6'] = 61349;
a0_0x2e7bfb['4683cd8b'] = 61350;
a0_0x2e7bfb.e9f3e362 = 61352;
a0_0x2e7bfb['4db0c8a3'] = 61355;
a0_0x2e7bfb['53c707d4'] = 61243;
a0_0x2e7bfb.d5499542 = 51084;
a0_0x2e7bfb.b3ef61f3 = 61142;
a0_0x2e7bfb.f68ca8ef = 61125;
a0_0x2e7bfb['9fc559ff'] = 61126;
a0_0x2e7bfb.a5ddb8fa = 61127;
a0_0x2e7bfb.c96eb62b = 61135;
a0_0x2e7bfb['4fdff8ff'] = 61327;
a0_0x2e7bfb.b06de48d = 61329;
a0_0x2e7bfb.ccc9fa05 = 61331;
a0_0x2e7bfb['23205f75'] = 51079;
a0_0x2e7bfb.b25c577e = 51080;
a0_0x2e7bfb['1b58ce99'] = 4935;
a0_0x2e7bfb['44377794'] = 61302;
a0_0x2e7bfb['11955215'] = 51083;
a0_0x2e7bfb['5236b61c'] = 51092;
a0_0x2e7bfb['5a23737c'] = 51094;
a0_0x2e7bfb['166f31c6'] = 4993;
a0_0x2e7bfb.b9b4828e = 61339;
a0_0x2e7bfb['8a4037e6'] = 61345;
a0_0x2e7bfb['710b28ac'] = 61295;
a0_0x2e7bfb.c0fc470d = 61217;
a0_0x2e7bfb.a098f583 = 61179;
a0_0x2e7bfb['315a1276'] = 61149;
a0_0x2e7bfb.cfe64adf = 61174;
a0_0x2e7bfb.ecac13ac = 61181;
a0_0x2e7bfb['377fd801'] = 61236;
a0_0x2e7bfb.b633728f = 61305;
a0_0x2e7bfb['9964f945'] = 61307;
a0_0x2e7bfb['7e2b1b2e'] = 61318;
a0_0x2e7bfb['4d050492'] = 61315;
a0_0x2e7bfb.a5a346b6 = 61335;
a0_0x2e7bfb['7560d1fa'] = 61336;
a0_0x2e7bfb['62425826'] = 61341;
a0_0x2e7bfb.bbb2ffad = 51107;
a0_0x2e7bfb.a17b972a = 51109;
a0_0x2e7bfb['4e642b31'] = 61351;
a0_0x2e7bfb['0237fb3a'] = 61344;
a0_0x2e7bfb['1b24625b'] = 61354;
a0_0x2e7bfb['89e394f1'] = 61360;
a0_0x2e7bfb['57484304'] = 61363;
a0_0x2e7bfb.e0932433 = 4826;
a0_0x2e7bfb['16d48137'] = 2645;
a0_0x2e7bfb['96b574e3'] = 2646;
a0_0x2e7bfb['24ed434e'] = 2637;
a0_0x2e7bfb['249725af'] = 2640;
a0_0x2e7bfb['34532846'] = 2660;
a0_0x2e7bfb['3d21d396'] = 4827;
a0_0x2e7bfb['5f3b1c5a'] = 2608;
a0_0x2e7bfb['68b26471'] = 1377;
a0_0x2e7bfb['161e22be'] = 1378;
a0_0x2e7bfb['14f038d7'] = 1686;
a0_0x2e7bfb['6414f753'] = 3688;
a0_0x2e7bfb['9e57a06b'] = 3699;
a0_0x2e7bfb.f6519239 = 3691;
a0_0x2e7bfb.f2cfe83b = 3712;
a0_0x2e7bfb['64408dd0'] = 3729;
a0_0x2e7bfb.f24f2d9d = 3736;
a0_0x2e7bfb['4eac1454'] = 3782;
a0_0x2e7bfb.ec03f423 = 62834;
a0_0x2e7bfb['0b999731'] = 62765;
a0_0x2e7bfb.b0c27ef9 = 62766;
a0_0x2e7bfb['5669fa53'] = 4948;
a0_0x2e7bfb.be402902 = 4946;
a0_0x2e7bfb['714d35a7'] = 62818;
a0_0x2e7bfb['6cb1404e'] = 62805;
a0_0x2e7bfb.d52dfdb8 = 62809;
a0_0x2e7bfb.ac88d2a9 = 62812;
a0_0x2e7bfb.f2e0205d = 62814;
a0_0x2e7bfb['5c00342e'] = 62806;
a0_0x2e7bfb['325f715d'] = 62810;
a0_0x2e7bfb['0cab319e'] = 62807;
a0_0x2e7bfb.dd2158bf = 4949;
a0_0x2e7bfb.d029189e = 4950;
a0_0x2e7bfb['39166969'] = 4951;
a0_0x2e7bfb['28667a2a'] = 4947;
a0_0x2e7bfb['7c5829f3'] = 62815;
a0_0x2e7bfb['7a778178'] = 62816;
a0_0x2e7bfb['365fc615'] = 62817;
a0_0x2e7bfb['21f33953'] = 62890;
a0_0x2e7bfb.f6e53ff3 = 62938;
a0_0x2e7bfb.da5b474a = 62939;
a0_0x2e7bfb.f91386c9 = 62804;
a0_0x2e7bfb.a25b5b82 = 62808;
a0_0x2e7bfb['27b46bad'] = 62935;
a0_0x2e7bfb['20549dbc'] = 62934;
a0_0x2e7bfb['53c99f40'] = 62937;
a0_0x2e7bfb['7f1cd264'] = 62936;
a0_0x2e7bfb.d01f2f14 = 61184;
a0_0x2e7bfb.a6b430f6 = 1350;
a0_0x2e7bfb.a17cef62 = 62784;
a0_0x2e7bfb.cb733045 = 62785;
a0_0x2e7bfb['9c68d48b'] = 62781;
a0_0x2e7bfb.c5c82a10 = 120;
a0_0x2e7bfb['2b32dfd8'] = 62790;
a0_0x2e7bfb['8cdd4be7'] = 62791;
a0_0x2e7bfb['97636589'] = 62792;
a0_0x2e7bfb.f86480af = 62793;
a0_0x2e7bfb['8efb2c3b'] = 62794;
a0_0x2e7bfb['0d3df94d'] = 62795;
a0_0x2e7bfb['91e1858d'] = 51099;
a0_0x2e7bfb.c63d5023 = 62844;
a0_0x2e7bfb.df049a8b = 62833;
a0_0x2e7bfb['5df89ff8'] = 62732;
a0_0x2e7bfb.faa6fa58 = 62777;
a0_0x2e7bfb['8cd3c591'] = 62845;
a0_0x2e7bfb['543a7ca1'] = 62742;
a0_0x2e7bfb.d6c2f014 = 41016;
a0_0x2e7bfb.af565ad0 = 62827;
a0_0x2e7bfb['7d1e579e'] = 62924;
a0_0x2e7bfb['9dadb91b'] = 62923;
a0_0x2e7bfb['4487eb41'] = 61359;
a0_0x2e7bfb['0e558bf3'] = 61361;
a0_0x2e7bfb['857f5fe0'] = 51051;
a0_0x2e7bfb['64af4aa1'] = 51052;
a0_0x2e7bfb['159fcb68'] = 41019;
a0_0x2e7bfb['37565dc9'] = 4999;
a0_0x2e7bfb['1376df01'] = 41000;
a0_0x2e7bfb['12f2bab3'] = 62800;
a0_0x2e7bfb['07d19daf'] = 61296;
a0_0x2e7bfb['4f516822'] = 61150;
a0_0x2e7bfb['148b3941'] = 61314;
a0_0x2e7bfb['3d916cd4'] = 62744;
a0_0x2e7bfb.a28c7404 = 4853;
a0_0x2e7bfb['00edd379'] = 4849;
a0_0x2e7bfb['23483416'] = 4814;
a0_0x2e7bfb.b6902997 = 41015;
a0_0x2e7bfb.cd8b2e10 = 4855;
a0_0x2e7bfb['77d7131b'] = 51070;
a0_0x2e7bfb['6aacd4e9'] = 4928;
a0_0x2e7bfb.f2ce0852 = 4924;
a0_0x2e7bfb.b4b09055 = 1599;
a0_0x2e7bfb.dd4e5630 = 51071;
a0_0x2e7bfb.d232025e = 1615;
a0_0x2e7bfb.c0045eef = 1614;
a0_0x2e7bfb['3ac10f62'] = 1613;
a0_0x2e7bfb.e32c017a = 4856;
a0_0x2e7bfb['3c0eda13'] = 4915;
a0_0x2e7bfb['145cddd0'] = 1354;
a0_0x2e7bfb.fbb5ac55 = 1330;
a0_0x2e7bfb['180a6b4b'] = 1339;
a0_0x2e7bfb['16fa0adc'] = 1365;
a0_0x2e7bfb.f0c0ac45 = 61258;
a0_0x2e7bfb['1b1de6c2'] = 62782;
a0_0x2e7bfb.af6fbbcf = 62853;
a0_0x2e7bfb['1562ab61'] = 62854;
a0_0x2e7bfb['70a1aa32'] = 1139;
a0_0x2e7bfb['3db09187'] = 1140;
a0_0x2e7bfb['6086fd27'] = 62757;
a0_0x2e7bfb['9682a8cd'] = 62855;
a0_0x2e7bfb.a1aa04f8 = 62856;
a0_0x2e7bfb.d0f97453 = 62761;
a0_0x2e7bfb['7bec46e4'] = 62755;
a0_0x2e7bfb['9d4366aa'] = 62759;
a0_0x2e7bfb.a66854f4 = 62932;
a0_0x2e7bfb.daaf2b00 = 62933;
a0_0x2e7bfb['5ce5d586'] = 4994;
a0_0x2e7bfb.bcf72320 = 62849;
a0_0x2e7bfb.ab44af33 = 62857;
a0_0x2e7bfb['0095ee22'] = 0;
a0_0x2e7bfb.efa574b5 = 0;
a0_0x2e7bfb.e859b774 = 0;
a0_0x2e7bfb['7adff68b'] = 0;
a0_0x2e7bfb.bfe43602 = 0;
a0_0x2e7bfb['1f158d65'] = 0;
a0_0x2e7bfb.de161245 = 0;
a0_0x2e7bfb['4dd3e953'] = 0;
a0_0x2e7bfb['2048d0ae'] = 0;
a0_0x2e7bfb['5f548dcf'] = 0;
a0_0x2e7bfb.f18717e2 = 0;
a0_0x2e7bfb['27400dfb'] = 0;
a0_0x2e7bfb.a5453582 = 0;
a0_0x2e7bfb['839d4754'] = 0;
a0_0x2e7bfb['3af6051b'] = 0;
a0_0x2e7bfb.db0b619c = 0;
a0_0x2e7bfb['3e9d2c56'] = 0;
a0_0x2e7bfb['2dbcc346'] = 0;
a0_0x2e7bfb['298b5df5'] = 0;
a0_0x2e7bfb.eff24eb4 = 0;
a0_0x2e7bfb.c2770140 = 0;
a0_0x2e7bfb.aad273f5 = 0;
a0_0x2e7bfb['00f61d87'] = 0;
a0_0x2e7bfb.c98d1d1e = 0;
a0_0x2e7bfb.cc56ec78 = 0;
a0_0x2e7bfb['5c8675f7'] = 0;
a0_0x2e7bfb['25c3adb6'] = 0;
a0_0x2e7bfb['541af80d'] = 0;
a0_0x2e7bfb['57165879'] = 0;
a0_0x2e7bfb['9d74e327'] = 0;
a0_0x2e7bfb['9c86e35a'] = 0;
a0_0x2e7bfb.dce827ee = 0;
a0_0x2e7bfb.b29f18df = 0;
a0_0x2e7bfb.a64d1a92 = 0;
a0_0x2e7bfb['024e27d1'] = 0;
a0_0x2e7bfb['037d4c7d'] = 0;
a0_0x2e7bfb['44557459'] = 0;
a0_0x2e7bfb.c4155f2a = 0;
a0_0x2e7bfb['1b39147b'] = 0;
a0_0x2e7bfb.d5f4aab4 = 0;
a0_0x2e7bfb['68ec3f7e'] = 0;
a0_0x2e7bfb.da41afdd = 0;
a0_0x2e7bfb['61d95238'] = 0;
a0_0x2e7bfb.d5cb1970 = 0;
a0_0x2e7bfb['4e055e30'] = 0;
a0_0x2e7bfb['2f33d32b'] = 0;
a0_0x2e7bfb['4e7e34f6'] = 0;
a0_0x2e7bfb.a4cd1b4f = 0;
a0_0x2e7bfb['0d217671'] = 0;
a0_0x2e7bfb['961dd481'] = 0;
a0_0x2e7bfb['81cf370a'] = 0;
a0_0x2e7bfb['6f702a2b'] = 0;
a0_0x2e7bfb.c6414d4a = 0;
a0_0x2e7bfb['13e96486'] = 0;
a0_0x2e7bfb.c462856b = 0;
a0_0x2e7bfb.edfe7d40 = 0;
a0_0x2e7bfb.efc04d4a = 0;
a0_0x2e7bfb['3af53d70'] = 0;
a0_0x2e7bfb['2626e284'] = 0;
a0_0x2e7bfb.b42d6239 = 0;
a0_0x2e7bfb.c438e9b4 = 0;
a0_0x2e7bfb['81be3664'] = 0;
a0_0x2e7bfb.e6320a7e = 0;
a0_0x2e7bfb['70e6bab2'] = 0;
a0_0x2e7bfb['98f28e50'] = 0;
a0_0x2e7bfb['4146338f'] = 0;
a0_0x2e7bfb['447176be'] = 0;
a0_0x2e7bfb.cd57c5b4 = 0;
a0_0x2e7bfb.e7bb4572 = 0;
a0_0x2e7bfb.ec9b5de8 = 0;
a0_0x2e7bfb.a0950d8a = 0;
a0_0x2e7bfb.e0653fcb = 0;
a0_0x2e7bfb['1f39ad60'] = 0;
a0_0x2e7bfb['5f6df5c9'] = 0;
a0_0x2e7bfb.fd36279b = 0;
a0_0x2e7bfb['7d9d9d62'] = 0;
a0_0x2e7bfb['694a8158'] = 0;
a0_0x2e7bfb['613786d4'] = 0;
a0_0x2e7bfb['85e5ed55'] = 0;
a0_0x2e7bfb['78a23f45'] = 0;
a0_0x2e7bfb['63bcaf6b'] = 0;
a0_0x2e7bfb.df2cc8ec = 0;
a0_0x2e7bfb.da73c8f1 = 0;
a0_0x2e7bfb.ffb77e01 = 0;
a0_0x2e7bfb['6c4f1d8b'] = 0;
a0_0x2e7bfb['4d651ea4'] = 0;
a0_0x2e7bfb['0b8859c8'] = 0;
a0_0x2e7bfb['7140a528'] = 0;
a0_0x2e7bfb['519dfde8'] = 0;
a0_0x2e7bfb['47b3c60e'] = 0;
a0_0x2e7bfb['0644e1a4'] = 0;
a0_0x2e7bfb['7af8db60'] = 0;
a0_0x2e7bfb['0dc3a7a9'] = 0;
a0_0x2e7bfb['37685e79'] = 0;
a0_0x2e7bfb['0a34f97f'] = 0;
a0_0x2e7bfb['6eff1554'] = 0;
a0_0x2e7bfb['66b937f0'] = 0;
a0_0x2e7bfb['3c1b00e2'] = 0;
a0_0x2e7bfb.b93894c6 = 0;
a0_0x2e7bfb.fbf39453 = 0;
a0_0x2e7bfb.dabdfab6 = 0;
a0_0x2e7bfb.b5458a68 = 0;
a0_0x2e7bfb['6b529430'] = 0;
a0_0x2e7bfb['1299f014'] = 0;
a0_0x2e7bfb['954c0ba1'] = 0;
a0_0x2e7bfb['738699d7'] = 0;
a0_0x2e7bfb['2d7a1d7e'] = 0;
a0_0x2e7bfb['45c81871'] = 0;
a0_0x2e7bfb['51901b8c'] = 0;
a0_0x2e7bfb['73c5df58'] = 0;
a0_0x2e7bfb['4fda123a'] = 0;
a0_0x2e7bfb.bb2eb4bd = 0;
a0_0x2e7bfb.ad6dec8e = 0;
a0_0x2e7bfb.cb7c2865 = 0;
a0_0x2e7bfb['1a70654a'] = 0;
a0_0x2e7bfb['8d772517'] = 0;
a0_0x2e7bfb['39d59f3b'] = 0;
a0_0x2e7bfb['0119cdaf'] = 0;
a0_0x2e7bfb['2b9fcd0d'] = 0;
a0_0x2e7bfb['1711bd32'] = 0;
a0_0x2e7bfb['60ae96b4'] = 0;
a0_0x2e7bfb.a757f697 = 0;
a0_0x2e7bfb['4ba7a4b9'] = 0;
a0_0x2e7bfb['3af32f89'] = 0;
a0_0x2e7bfb['81638687'] = 0;
a0_0x2e7bfb.da143766 = 0;
a0_0x2e7bfb.dad7c129 = 0;
a0_0x2e7bfb.adc22789 = 0;
a0_0x2e7bfb.b11909c9 = 0;
a0_0x2e7bfb['306a0932'] = 0;
a0_0x2e7bfb.cba64515 = 0;
a0_0x2e7bfb['05871904'] = 0;
a0_0x2e7bfb['4cc0b19a'] = 0;
a0_0x2e7bfb['3a4f046e'] = 0;
a0_0x2e7bfb['9e2dba9c'] = 0;
a0_0x2e7bfb.b5bd6d56 = 0;
a0_0x2e7bfb['2a318192'] = 0;
a0_0x2e7bfb.a996902f = 0;
a0_0x2e7bfb['87cfe3f3'] = 0;
a0_0x2e7bfb['0424fba0'] = 0;
a0_0x2e7bfb.b7956a4d = 0;
a0_0x2e7bfb.f75563a9 = 0;
a0_0x2e7bfb['4327a83e'] = 0;
a0_0x2e7bfb['7a65494e'] = 0;
a0_0x2e7bfb['3bbcb28a'] = 0;
a0_0x2e7bfb.b9fd52f6 = 0;
a0_0x2e7bfb.d4b233fb = 0;
a0_0x2e7bfb['2a786d10'] = 0;
a0_0x2e7bfb['5d14839f'] = 0;
a0_0x2e7bfb.b9d79633 = 0;
a0_0x2e7bfb['9f561d2a'] = 0;
a0_0x2e7bfb.b35ab0d7 = 0;
a0_0x2e7bfb.bc7a1007 = 0;
a0_0x2e7bfb['52ab9a9a'] = 0;
a0_0x2e7bfb['62ca4b4c'] = 0;
a0_0x2e7bfb['14bd0b9f'] = 0;
a0_0x2e7bfb['3c52f466'] = 0;
a0_0x2e7bfb['0c180919'] = 0;
a0_0x2e7bfb['96a5e662'] = 0;
a0_0x2e7bfb['91bfac73'] = 0;
a0_0x2e7bfb['7cb8ec8f'] = 0;
a0_0x2e7bfb['4a2f78e8'] = 0;
a0_0x2e7bfb.b63b2e7e = 0;
a0_0x2e7bfb['4c08ac93'] = 0;
a0_0x2e7bfb['307bf2c5'] = 0;
a0_0x2e7bfb.b8a6a856 = 0;
a0_0x2e7bfb.b7493f25 = 0;
a0_0x2e7bfb.e705a68e = 0;
a0_0x2e7bfb['7dd55aa7'] = 0;
a0_0x2e7bfb['94f15c33'] = 0;
a0_0x2e7bfb['33aaf40d'] = 0;
a0_0x2e7bfb.aff86ad7 = 0;
a0_0x2e7bfb.ce598d8a = 0;
a0_0x2e7bfb['45b8dffe'] = 0;
a0_0x2e7bfb['7af81183'] = 0;
a0_0x2e7bfb['485eee0c'] = 0;
a0_0x2e7bfb['1e081e74'] = 0;
a0_0x2e7bfb['36d37596'] = 0;
a0_0x2e7bfb['52b1e80e'] = 0;
a0_0x2e7bfb['727a02d6'] = 0;
a0_0x2e7bfb['8acb09a9'] = 0;
a0_0x2e7bfb.f4126005 = 0;
a0_0x2e7bfb['2529b12b'] = 0;
a0_0x2e7bfb['65a4b807'] = 0;
a0_0x2e7bfb.fd28e38d = 0;
a0_0x2e7bfb.c4e00fe2 = 0;
a0_0x2e7bfb['02dc6cdd'] = 0;
a0_0x2e7bfb['7e9ea170'] = 0;
a0_0x2e7bfb['63621b77'] = 0;
a0_0x2e7bfb.dd4b10d2 = 0;
a0_0x2e7bfb['7618b849'] = 0;
a0_0x2e7bfb.bde99037 = 0;
a0_0x2e7bfb['0ecfe378'] = 0;
a0_0x2e7bfb['38569b24'] = 0;
a0_0x2e7bfb.c40737c9 = 0;
a0_0x2e7bfb['2a48d7a6'] = 0;
a0_0x2e7bfb['32c874d2'] = 0;
a0_0x2e7bfb['947d4971'] = 0;
a0_0x2e7bfb['6908ced6'] = 0;
a0_0x2e7bfb['32aec449'] = 0;
a0_0x2e7bfb.c9ddad4e = 0;
a0_0x2e7bfb['6998df60'] = 0;
a0_0x2e7bfb['13c82c81'] = 0;
a0_0x2e7bfb['909b7d07'] = 0;
a0_0x2e7bfb['479aa0a7'] = 0;
a0_0x2e7bfb.e8be34ef = 0;
a0_0x2e7bfb['6d46f604'] = 0;
a0_0x2e7bfb['9e1f512a'] = 0;
a0_0x2e7bfb['7e69d6b6'] = 0;
a0_0x2e7bfb['3ada1e62'] = 0;
a0_0x2e7bfb['8d91489a'] = 0;
a0_0x2e7bfb['3f81e692'] = 0;
a0_0x2e7bfb.f4c9cef3 = 0;
a0_0x2e7bfb['366b5583'] = 0;
a0_0x2e7bfb['4646b6be'] = 0;
a0_0x2e7bfb['661db7c0'] = 0;
a0_0x2e7bfb.e9bdde58 = 0;
a0_0x2e7bfb['1ca45ab3'] = 0;
a0_0x2e7bfb['236b72a2'] = 0;
a0_0x2e7bfb.e704a085 = 0;
a0_0x2e7bfb.bb6182f2 = 0;
a0_0x2e7bfb['1113d558'] = 0;
a0_0x2e7bfb.fb17d920 = 0;
a0_0x2e7bfb['4bf4df81'] = 0;
a0_0x2e7bfb['60f27c08'] = 0;
a0_0x2e7bfb.ac06410f = 0;
a0_0x2e7bfb.c6dee248 = 0;
a0_0x2e7bfb['262edeef'] = 0;
a0_0x2e7bfb['144a3abf'] = 0;
a0_0x2e7bfb['8b68ac75'] = 0;
a0_0x2e7bfb.fd34eaf3 = 0;
a0_0x2e7bfb.bb97623c = 0;
a0_0x2e7bfb.a09b3de7 = 0;
a0_0x2e7bfb['85522929'] = 0;
a0_0x2e7bfb['0ca62e16'] = 0;
a0_0x2e7bfb['5def0ff9'] = 0;
a0_0x2e7bfb['6294b18f'] = 0;
a0_0x2e7bfb['73448e66'] = 0;
a0_0x2e7bfb['01ce0354'] = 0;
a0_0x2e7bfb.c8489467 = 0;
a0_0x2e7bfb['8ce4f907'] = 0;
a0_0x2e7bfb['7132630d'] = 0;
a0_0x2e7bfb['374bc1a1'] = 0;
a0_0x2e7bfb['9705345f'] = 0;
a0_0x2e7bfb.d0436842 = 0;
a0_0x2e7bfb['7f953ff4'] = 0;
a0_0x2e7bfb.ff7c4285 = 0;
a0_0x2e7bfb['5125c7bb'] = 0;
a0_0x2e7bfb.c98f1913 = 0;
a0_0x2e7bfb['24930dea'] = 0;
a0_0x2e7bfb['7dd181d6'] = 0;
a0_0x2e7bfb.f701e85a = 0;
a0_0x2e7bfb.ef56c163 = 0;
a0_0x2e7bfb.ea0c257b = 0;
a0_0x2e7bfb['4c819835'] = 0;
a0_0x2e7bfb.c7b5586d = 0;
a0_0x2e7bfb['09be84d5'] = 0;
a0_0x2e7bfb.a1e5bfce = 0;
a0_0x2e7bfb['6c3bf190'] = 0;
a0_0x2e7bfb['60c6a240'] = 0;
a0_0x2e7bfb['1cb590ae'] = 0;
a0_0x2e7bfb['15ead642'] = 0;
a0_0x2e7bfb.c2b8ca95 = 0;
a0_0x2e7bfb['655ce044'] = 0;
a0_0x2e7bfb['444704d5'] = 0;
a0_0x2e7bfb['0d589eca'] = 0;
a0_0x2e7bfb.b5409f4a = 0;
a0_0x2e7bfb.d595b3ab = 0;
a0_0x2e7bfb['3fb92e80'] = 0;
a0_0x2e7bfb.e06e61e1 = 0;
a0_0x2e7bfb['918ff6cb'] = 0;
a0_0x2e7bfb['30dc64a3'] = 0;
a0_0x2e7bfb['29d8589c'] = 0;
a0_0x2e7bfb['10868ca6'] = 0;
a0_0x2e7bfb['25931fef'] = 0;
a0_0x2e7bfb.e2839352 = 0;
a0_0x2e7bfb['7eaab018'] = 0;
a0_0x2e7bfb['9aa60def'] = 0;
a0_0x2e7bfb['5570f8e9'] = 0;
a0_0x2e7bfb.c9b93742 = 0;
a0_0x2e7bfb['7b62e2f2'] = 0;
a0_0x2e7bfb['4a7c6a15'] = 0;
a0_0x2e7bfb.db468379 = 0;
a0_0x2e7bfb['7445042b'] = 0;
a0_0x2e7bfb['9fceebc8'] = 0;
a0_0x2e7bfb.a8b0aa43 = 0;
a0_0x2e7bfb['5a7006fc'] = 0;
a0_0x2e7bfb['279f4930'] = 0;
a0_0x2e7bfb['87858a9e'] = 0;
a0_0x2e7bfb.c564850b = 0;
a0_0x2e7bfb.a2033ea3 = 0;
a0_0x2e7bfb['6f025f41'] = 0;
a0_0x2e7bfb.a3545607 = 0;
a0_0x2e7bfb.c96a9a68 = 0;
a0_0x2e7bfb.f65b6f2e = 0;
a0_0x2e7bfb['0a8ae728'] = 0;
a0_0x2e7bfb.a78fa345 = 0;
a0_0x2e7bfb['637c69b2'] = 0;
a0_0x2e7bfb.e202f9cc = 0;
a0_0x2e7bfb['14cb2abe'] = 0;
a0_0x2e7bfb.fe196bec = 0;
a0_0x2e7bfb.e068471e = 0;
a0_0x2e7bfb['48e5762a'] = 0;
a0_0x2e7bfb.e1b234c6 = 0;
a0_0x2e7bfb['4a2c39e9'] = 0;
a0_0x2e7bfb['9186a91c'] = 0;
a0_0x2e7bfb.aaac8854 = 0;
a0_0x2e7bfb.f55e8b0d = 0;
a0_0x2e7bfb.c22a1e46 = 0;
a0_0x2e7bfb['4c3f100b'] = 0;
a0_0x2e7bfb['23a9e2f6'] = 0;
a0_0x2e7bfb.e0e0380d = 0;
a0_0x2e7bfb.cd98a362 = 0;
a0_0x2e7bfb['4f5bd743'] = 0;
a0_0x2e7bfb['9411866f'] = 0;
a0_0x2e7bfb['78631596'] = 0;
a0_0x2e7bfb['29656b77'] = 0;
a0_0x2e7bfb['08592f2f'] = 0;
a0_0x2e7bfb['2b92e78f'] = 0;
a0_0x2e7bfb['4905c256'] = 0;
a0_0x2e7bfb.d460de0b = 0;
a0_0x2e7bfb.dae7aa93 = 0;
a0_0x2e7bfb['88e96e1b'] = 0;
a0_0x2e7bfb['152a23d2'] = 0;
a0_0x2e7bfb['9e12c3be'] = 0;
a0_0x2e7bfb.e65c76a5 = 0;
a0_0x2e7bfb.b8eb0ee0 = 0;
a0_0x2e7bfb['73511a2d'] = 0;
a0_0x2e7bfb['3e91f0c0'] = 0;
a0_0x2e7bfb['5cd4c6a9'] = 0;
a0_0x2e7bfb['23c61c04'] = 0;
a0_0x2e7bfb['65810aba'] = 0;
a0_0x2e7bfb.df32eae9 = 0;
a0_0x2e7bfb['0a2489b7'] = 0;
a0_0x2e7bfb.f1004257 = 0;
a0_0x2e7bfb['62459048'] = 0;
a0_0x2e7bfb['0e063a16'] = 0;
a0_0x2e7bfb['0a20bbf1'] = 0;
a0_0x2e7bfb.af78a2e4 = 0;
a0_0x2e7bfb['59de8a41'] = 0;
a0_0x2e7bfb['5c7fa2e4'] = 0;
a0_0x2e7bfb['00ad988f'] = 0;
a0_0x2e7bfb['39de6f42'] = 0;
a0_0x2e7bfb['53f1b77f'] = 0;
a0_0x2e7bfb['389af0ba'] = 0;
a0_0x2e7bfb.bc33ca49 = 0;
a0_0x2e7bfb['1b3192e7'] = 0;
a0_0x2e7bfb['243e4ca4'] = 0;
a0_0x2e7bfb.e0603903 = 0;
a0_0x2e7bfb['50fc7878'] = 0;
a0_0x2e7bfb['4dbeb79c'] = 0;
a0_0x2e7bfb['8ac1975f'] = 0;
a0_0x2e7bfb['2ca07e1e'] = 0;
a0_0x2e7bfb.bda60d8d = 0;
a0_0x2e7bfb.d87e5d22 = 0;
a0_0x2e7bfb['6105a665'] = 0;
a0_0x2e7bfb['6a890819'] = 0;
a0_0x2e7bfb['251e3c31'] = 0;
a0_0x2e7bfb.ac59542b = 0;
a0_0x2e7bfb.fd2ac22f = 0;
a0_0x2e7bfb.c5d7730d = 0;
a0_0x2e7bfb['0ea2f6e9'] = 0;
a0_0x2e7bfb['5f5af10c'] = 0;
a0_0x2e7bfb['0c01689e'] = 0;
a0_0x2e7bfb['2fd64e68'] = 0;
a0_0x2e7bfb.c8ee1985 = 0;
a0_0x2e7bfb['77861b3f'] = 0;
a0_0x2e7bfb.b4ecddd0 = 0;
a0_0x2e7bfb.ed6e6046 = 0;
a0_0x2e7bfb['58ecbcba'] = 0;
a0_0x2e7bfb.a952e754 = 0;
a0_0x2e7bfb['2203b53e'] = 0;
a0_0x2e7bfb['34f7422f'] = 0;
a0_0x2e7bfb['571a9eda'] = 0;
a0_0x2e7bfb['1a19bea2'] = 0;
a0_0x2e7bfb['44ebd187'] = 0;
a0_0x2e7bfb.e71e33fc = 0;
a0_0x2e7bfb['1b7e653d'] = 0;
a0_0x2e7bfb['9d23fe1d'] = 0;
a0_0x2e7bfb['73922895'] = 0;
a0_0x2e7bfb['31a0b3f1'] = 0;
a0_0x2e7bfb['817c3ae0'] = 0;
a0_0x2e7bfb['3d76a21a'] = 0;
a0_0x2e7bfb['165c4684'] = 0;
a0_0x2e7bfb['08e564d0'] = 0;
a0_0x2e7bfb['6d2486ba'] = 0;
a0_0x2e7bfb['37ed13d1'] = 0;
a0_0x2e7bfb.b4cd0944 = 0;
a0_0x2e7bfb['04129a78'] = 0;
a0_0x2e7bfb['576da809'] = 0;
a0_0x2e7bfb['7f9a612f'] = 0;
a0_0x2e7bfb.cdc1b213 = 0;
a0_0x2e7bfb['37e9e43a'] = 0;
a0_0x2e7bfb['96c1f158'] = 0;
a0_0x2e7bfb['106f715d'] = 0;
a0_0x2e7bfb.e3a377d0 = 0;
a0_0x2e7bfb.efc4b316 = 0;
a0_0x2e7bfb['590c6f1c'] = 0;
a0_0x2e7bfb['7d2e1594'] = 0;
a0_0x2e7bfb.ae2d0982 = 0;
a0_0x2e7bfb['38cc4bfe'] = 0;
a0_0x2e7bfb.fdc80381 = 0;
a0_0x2e7bfb['30a17f08'] = 0;
a0_0x2e7bfb.fbccc98e = 0;
a0_0x2e7bfb['49aaa01a'] = 0;
a0_0x2e7bfb.d787e625 = 0;
a0_0x2e7bfb.c42e0a37 = 0;
a0_0x2e7bfb['593bd080'] = 0;
a0_0x2e7bfb.e74544aa = 0;
a0_0x2e7bfb['1d8a74b8'] = 0;
a0_0x2e7bfb['7820dbcb'] = 0;
a0_0x2e7bfb.d772007d = 0;
a0_0x2e7bfb.c33db4a6 = 0;
a0_0x2e7bfb['25c6e0fe'] = 0;
a0_0x2e7bfb.d5a2024f = 0;
a0_0x2e7bfb.cf076a73 = 0;
a0_0x2e7bfb['55b41ae7'] = 0;
a0_0x2e7bfb['89efe526'] = 0;
a0_0x2e7bfb.e5286797 = 0;
a0_0x2e7bfb.b819f62c = 0;
a0_0x2e7bfb['1b920bff'] = 0;
a0_0x2e7bfb.d28cb697 = 0;
a0_0x2e7bfb.d1cb52b2 = 0;
a0_0x2e7bfb['58bc39e9'] = 0;
a0_0x2e7bfb.cc9dfc02 = 0;
a0_0x2e7bfb['170f9ed6'] = 0;
a0_0x2e7bfb.d9de4a0c = 0;
a0_0x2e7bfb['5688cce7'] = 0;
a0_0x2e7bfb.dd4f3b43 = 0;
a0_0x2e7bfb.f0b71a94 = 0;
a0_0x2e7bfb['95bdde80'] = 0;
a0_0x2e7bfb['70541f9e'] = 0;
a0_0x2e7bfb['5fb8679e'] = 0;
a0_0x2e7bfb.a44fa240 = 0;
a0_0x2e7bfb['2d4114ee'] = 0;
a0_0x2e7bfb.d0c7166b = 0;
a0_0x2e7bfb.b072edfc = 0;
a0_0x2e7bfb.a45cbb2b = 0;
a0_0x2e7bfb.dc2981fe = 0;
a0_0x2e7bfb['5929844d'] = 0;
a0_0x2e7bfb['3055bab5'] = 0;
a0_0x2e7bfb.e949dd1a = 0;
a0_0x2e7bfb['26e5273f'] = 0;
a0_0x2e7bfb.c04d7a74 = 0;
a0_0x2e7bfb.bd9a5155 = 0;
a0_0x2e7bfb['724e5ffb'] = 0;
a0_0x2e7bfb['338eb800'] = 0;
a0_0x2e7bfb['7c14f0e7'] = 0;
a0_0x2e7bfb.e9841c16 = 0;
a0_0x2e7bfb['9bc239a3'] = 0;
a0_0x2e7bfb.e0fe5c23 = 0;
a0_0x2e7bfb['8b83f107'] = 0;
a0_0x2e7bfb.cf7dc348 = 0;
a0_0x2e7bfb['2ba1dcc5'] = 0;
a0_0x2e7bfb['0b1c1e29'] = 0;
a0_0x2e7bfb['235021b8'] = 0;
a0_0x2e7bfb['73d1f456'] = 0;
a0_0x2e7bfb.a227723f = 0;
a0_0x2e7bfb['52766c7e'] = 0;
a0_0x2e7bfb.f6c75c26 = 0;
a0_0x2e7bfb.bc723031 = 0;
a0_0x2e7bfb.f4a6c876 = 0;
a0_0x2e7bfb.bd0b25e0 = 0;
a0_0x2e7bfb['106d93b9'] = 0;
a0_0x2e7bfb['28cdd7de'] = 0;
a0_0x2e7bfb['482c9b72'] = 0;
a0_0x2e7bfb['790ad515'] = 0;
a0_0x2e7bfb['53b18dca'] = 0;
a0_0x2e7bfb['91537b98'] = 0;
a0_0x2e7bfb['47c73498'] = 0;
a0_0x2e7bfb['594f5ff4'] = 0;
a0_0x2e7bfb.f5681f65 = 0;
a0_0x2e7bfb['907ef06d'] = 0;
a0_0x2e7bfb['7e74ae95'] = 0;
a0_0x2e7bfb.e0738133 = 0;
a0_0x2e7bfb['17af0c10'] = 0;
a0_0x2e7bfb['4f363b4e'] = 0;
a0_0x2e7bfb['01ad6c19'] = 0;
a0_0x2e7bfb['064987e7'] = 0;
a0_0x2e7bfb.ccccb57c = 0;
a0_0x2e7bfb['4b453467'] = 0;
a0_0x2e7bfb['22a02431'] = 0;
a0_0x2e7bfb.ff53a32a = 0;
a0_0x2e7bfb['8bd8265c'] = 0;
a0_0x2e7bfb.b51f451c = 0;
a0_0x2e7bfb['9889611a'] = 0;
a0_0x2e7bfb['1bfa2549'] = 0;
a0_0x2e7bfb['6a70ff47'] = 0;
a0_0x2e7bfb.cbba12cb = 0;
a0_0x2e7bfb.ea44e9af = 0;
a0_0x2e7bfb['99bb688e'] = 0;
a0_0x2e7bfb['5ae22627'] = 0;
a0_0x2e7bfb.d4e63a1a = 0;
a0_0x2e7bfb['64a98f9f'] = 0;
a0_0x2e7bfb.b3562337 = 0;
a0_0x2e7bfb.c8619a0f = 0;
a0_0x2e7bfb.a4736124 = 0;
a0_0x2e7bfb['950c9e2b'] = 0;
a0_0x2e7bfb['8b611007'] = 0;
a0_0x2e7bfb['603d4b76'] = 0;
a0_0x2e7bfb.c270f732 = 0;
a0_0x2e7bfb.fe7350d6 = 0;
a0_0x2e7bfb['0328e509'] = 0;
a0_0x2e7bfb['2e66cf2b'] = 0;
a0_0x2e7bfb['7477c9d7'] = 0;
a0_0x2e7bfb.a69315e6 = 0;
a0_0x2e7bfb.aab512aa = 0;
a0_0x2e7bfb.a35f39e8 = 0;
a0_0x2e7bfb.bcc63d2f = 0;
a0_0x2e7bfb['26aac525'] = 0;
a0_0x2e7bfb.f6c742e5 = 0;
a0_0x2e7bfb['57c8aba8'] = 0;
a0_0x2e7bfb['4a8dd9e0'] = 0;
a0_0x2e7bfb['246dda34'] = 0;
a0_0x2e7bfb['0341bb5c'] = 0;
a0_0x2e7bfb.f6ae3eba = 0;
a0_0x2e7bfb['52f33f01'] = 0;
a0_0x2e7bfb['30a31fcf'] = 0;
a0_0x2e7bfb['44cc8133'] = 0;
a0_0x2e7bfb['094e3652'] = 0;
a0_0x2e7bfb.bbba2fbf = 0;
a0_0x2e7bfb['87713f6c'] = 0;
a0_0x2e7bfb['64c32d8e'] = 0;
a0_0x2e7bfb.e1f85699 = 0;
a0_0x2e7bfb['3928076c'] = 0;
a0_0x2e7bfb.a4a11ccd = 0;
a0_0x2e7bfb['72e61308'] = 0;
a0_0x2e7bfb.a030deed = 0;
a0_0x2e7bfb['105c03df'] = 0;
a0_0x2e7bfb['8ab9c4a1'] = 0;
a0_0x2e7bfb.f6c66743 = 0;
a0_0x2e7bfb.d1f0595d = 0;
a0_0x2e7bfb['84331cb4'] = 0;
a0_0x2e7bfb['882a17b7'] = 0;
a0_0x2e7bfb.b5f3b881 = 0;
a0_0x2e7bfb['6f725242'] = 0;
a0_0x2e7bfb['245c9934'] = 0;
a0_0x2e7bfb['2d5e73c6'] = 0;
a0_0x2e7bfb['5460483d'] = 0;
a0_0x2e7bfb.a30516d4 = 0;
a0_0x2e7bfb['765f2fa1'] = 0;
a0_0x2e7bfb['7809a418'] = 0;
a0_0x2e7bfb['3de0196b'] = 0;
a0_0x2e7bfb['93547cdf'] = 0;
a0_0x2e7bfb.ec4b36af = 0;
a0_0x2e7bfb.f776f880 = 0;
a0_0x2e7bfb['204282b4'] = 0;
a0_0x2e7bfb['26dd6011'] = 0;
a0_0x2e7bfb['3c9e2989'] = 0;
a0_0x2e7bfb['49e7c4c2'] = 0;
a0_0x2e7bfb['0f42422e'] = 0;
a0_0x2e7bfb['87ae451c'] = 0;
a0_0x2e7bfb['399bae5d'] = 0;
a0_0x2e7bfb['84abe5b3'] = 0;
a0_0x2e7bfb['02ec7e56'] = 0;
a0_0x2e7bfb.bd2e2830 = 0;
a0_0x2e7bfb['4c6369bd'] = 0;
a0_0x2e7bfb['58937179'] = 0;
a0_0x2e7bfb.b66c8106 = 0;
a0_0x2e7bfb['4ead7358'] = 0;
a0_0x2e7bfb.ccdd6a81 = 0;
a0_0x2e7bfb.f7528cd7 = 0;
a0_0x2e7bfb['761ea400'] = 0;
a0_0x2e7bfb['2eb70bf1'] = 0;
a0_0x2e7bfb['239feae3'] = 0;
a0_0x2e7bfb['53b5ac76'] = 0;
a0_0x2e7bfb.bd9e6622 = 0;
a0_0x2e7bfb['8cc14ea0'] = 0;
a0_0x2e7bfb.a00bede4 = 0;
a0_0x2e7bfb['621cdc3f'] = 0;
a0_0x2e7bfb['85eb6548'] = 0;
a0_0x2e7bfb['5313e05b'] = 0;
a0_0x2e7bfb['0f352ca0'] = 0;
a0_0x2e7bfb.bb2ae715 = 0;
a0_0x2e7bfb['7a5f7629'] = 0;
a0_0x2e7bfb['681dda26'] = 0;
a0_0x2e7bfb['2a6bee0e'] = 0;
a0_0x2e7bfb['473a71e9'] = 0;
a0_0x2e7bfb.d26e3704 = 0;
a0_0x2e7bfb.de192b82 = 0;
a0_0x2e7bfb.ee79362e = 0;
a0_0x2e7bfb['574bac7e'] = 0;
a0_0x2e7bfb['40ae156e'] = 0;
a0_0x2e7bfb.baee36ab = 0;
a0_0x2e7bfb['2da90d30'] = 0;
a0_0x2e7bfb['2a578bea'] = 0;
a0_0x2e7bfb.b07e1e38 = 0;
a0_0x2e7bfb.bebe8822 = 0;
a0_0x2e7bfb['4a22eb45'] = 0;
a0_0x2e7bfb.ad8c43a3 = 0;
a0_0x2e7bfb['2bf754c9'] = 0;
a0_0x2e7bfb['16bcc033'] = 0;
a0_0x2e7bfb['78aecfe3'] = 0;
a0_0x2e7bfb['53887db8'] = 0;
a0_0x2e7bfb.a9d42e53 = 0;
a0_0x2e7bfb['10fdabeb'] = 0;
a0_0x2e7bfb['9279750c'] = 0;
a0_0x2e7bfb.e3469ee4 = 0;
a0_0x2e7bfb.e6ecff0c = 0;
a0_0x2e7bfb.aaa94494 = 0;
a0_0x2e7bfb.c1c886f2 = 0;
a0_0x2e7bfb['568bbf31'] = 0;
a0_0x2e7bfb.fd270a28 = 0;
a0_0x2e7bfb['1472a48c'] = 0;
a0_0x2e7bfb.aa677756 = 0;
a0_0x2e7bfb['453945ec'] = 0;
a0_0x2e7bfb.e6ce1b12 = 0;
a0_0x2e7bfb.dbc75889 = 0;
a0_0x2e7bfb.e154c5ab = 0;
a0_0x2e7bfb.bb4ce4c5 = 0;
a0_0x2e7bfb.f44c1e04 = 0;
a0_0x2e7bfb['1ae8a9b6'] = 0;
a0_0x2e7bfb['19ad206a'] = 0;
a0_0x2e7bfb.e907ee94 = 0;
a0_0x2e7bfb.f1d1a6f8 = 0;
a0_0x2e7bfb.f4df9a87 = 0;
a0_0x2e7bfb['748adf48'] = 0;
a0_0x2e7bfb['0ff94cef'] = 0;
a0_0x2e7bfb['49f27e33'] = 0;
a0_0x2e7bfb.b3db392a = 0;
a0_0x2e7bfb.e55e375a = 0;
a0_0x2e7bfb['423ce5da'] = 0;
a0_0x2e7bfb['43251e77'] = 0;
a0_0x2e7bfb['9c465fcf'] = 0;
a0_0x2e7bfb['2e9e8ed8'] = 0;
a0_0x2e7bfb['0193f309'] = 0;
a0_0x2e7bfb.ba10d673 = 0;
a0_0x2e7bfb.ad5c2b47 = 0;
a0_0x2e7bfb['20336575'] = 0;
a0_0x2e7bfb.e352bbbc = 0;
a0_0x2e7bfb.a062112a = 0;
a0_0x2e7bfb.f05cfb61 = 0;
a0_0x2e7bfb.d7a7fb64 = 0;
a0_0x2e7bfb.b00f031a = 0;
a0_0x2e7bfb['243ec8ad'] = 0;
a0_0x2e7bfb['523f56c9'] = 0;
a0_0x2e7bfb['8c4c4f33'] = 0;
a0_0x2e7bfb.f74ae4b2 = 0;
a0_0x2e7bfb['50237f6c'] = 0;
a0_0x2e7bfb.d412a799 = 0;
a0_0x2e7bfb.c4a6df40 = 0;
a0_0x2e7bfb['57fcd3d3'] = 0;
a0_0x2e7bfb['46c4d09b'] = 0;
a0_0x2e7bfb['3f286e43'] = 0;
a0_0x2e7bfb['41275b79'] = 0;
a0_0x2e7bfb['386f1d4c'] = 0;
a0_0x2e7bfb.a18d2850 = 0;
a0_0x2e7bfb.e729ca9c = 0;
a0_0x2e7bfb['3089e00e'] = 0;
a0_0x2e7bfb.d74d24d2 = 0;
a0_0x2e7bfb['49b63554'] = 0;
a0_0x2e7bfb['2cf0eaab'] = 0;
a0_0x2e7bfb['6c5832ac'] = 0;
a0_0x2e7bfb['609146a7'] = 0;
a0_0x2e7bfb.c944eae2 = 0;
a0_0x2e7bfb.a0cbf321 = 0;
a0_0x2e7bfb['3d17ab44'] = 0;
a0_0x2e7bfb['8b472470'] = 0;
a0_0x2e7bfb['24dfec5b'] = 0;
a0_0x2e7bfb.aa0089f8 = 0;
a0_0x2e7bfb.d3e46872 = 0;
a0_0x2e7bfb['573ff644'] = 0;
a0_0x2e7bfb.a0811cc1 = 0;
a0_0x2e7bfb['65d0e382'] = 0;
a0_0x2e7bfb['69b5ebd0'] = 0;
a0_0x2e7bfb.cd06682f = 0;
a0_0x2e7bfb['04c71882'] = 0;
a0_0x2e7bfb['1176b23a'] = 0;
a0_0x2e7bfb.e14046e8 = 0;
a0_0x2e7bfb['30d7f718'] = 0;
a0_0x2e7bfb.a2b75d81 = 0;
a0_0x2e7bfb['3aba2cdc'] = 0;
a0_0x2e7bfb['06ceb1da'] = 0;
a0_0x2e7bfb['404d5dad'] = 0;
a0_0x2e7bfb['29324a30'] = 0;
a0_0x2e7bfb['2f4ad5a1'] = 0;
a0_0x2e7bfb['4356969a'] = 0;
a0_0x2e7bfb.ada3e00d = 0;
a0_0x2e7bfb['590db5e1'] = 0;
a0_0x2e7bfb['51074be3'] = 0;
a0_0x2e7bfb.db2c06e3 = 0;
a0_0x2e7bfb['8b92f5d4'] = 0;
a0_0x2e7bfb['19839b2b'] = 0;
a0_0x2e7bfb['93ea6088'] = 0;
a0_0x2e7bfb.e4eb086b = 0;
a0_0x2e7bfb.d7e335b7 = 0;
a0_0x2e7bfb.d8ffc069 = 0;
a0_0x2e7bfb.dac67ea5 = 0;
a0_0x2e7bfb['30171376'] = 0;
a0_0x2e7bfb.b29c8c34 = 0;
a0_0x2e7bfb.a24b4db9 = 0;
a0_0x2e7bfb['64a0ef66'] = 0;
a0_0x2e7bfb.ee52fef6 = 0;
a0_0x2e7bfb['7d345b65'] = 0;
a0_0x2e7bfb['9bb5d92a'] = 0;
a0_0x2e7bfb.b07bc040 = 0;
a0_0x2e7bfb['5788e0ba'] = 0;
a0_0x2e7bfb['0777e939'] = 0;
a0_0x2e7bfb.beaaac37 = 0;
a0_0x2e7bfb.e6bd78d9 = 0;
a0_0x2e7bfb.b116f01b = 0;
a0_0x2e7bfb['38d6bcf1'] = 0;
a0_0x2e7bfb.b0a343a2 = 0;
a0_0x2e7bfb['2c25787a'] = 0;
a0_0x2e7bfb['659422ed'] = 0;
a0_0x2e7bfb['91d68562'] = 0;
a0_0x2e7bfb['5793f6a8'] = 0;
a0_0x2e7bfb.cc8200bc = 0;
a0_0x2e7bfb.f609d263 = 0;
a0_0x2e7bfb.f0993e99 = 0;
a0_0x2e7bfb['7d945339'] = 0;
a0_0x2e7bfb.acbff876 = 0;
a0_0x2e7bfb.b0813f51 = 0;
a0_0x2e7bfb.b40fb6ad = 0;
a0_0x2e7bfb['46843d69'] = 0;
a0_0x2e7bfb['3a9c9592'] = 0;
a0_0x2e7bfb.bfda912f = 0;
a0_0x2e7bfb['93aee90c'] = 0;
a0_0x2e7bfb.b0a63350 = 0;
a0_0x2e7bfb['032734a9'] = 0;
a0_0x2e7bfb.cfa7da98 = 0;
a0_0x2e7bfb.e13f4546 = 0;
a0_0x2e7bfb['81838dbe'] = 0;
a0_0x2e7bfb['2218579d'] = 0;
a0_0x2e7bfb.ed6bd629 = 0;
a0_0x2e7bfb['48c5f711'] = 0;
a0_0x2e7bfb.b27f05ea = 0;
a0_0x2e7bfb.d4a28c10 = 0;
a0_0x2e7bfb['61f1ecde'] = 0;
a0_0x2e7bfb['04d7d66c'] = 0;
a0_0x2e7bfb.d1842aed = 0;
a0_0x2e7bfb['0612b0dd'] = 0;
a0_0x2e7bfb.b230cc3e = 0;
a0_0x2e7bfb['37f39377'] = 0;
a0_0x2e7bfb['3b751a5c'] = 0;
a0_0x2e7bfb['4d7d30a5'] = 0;
a0_0x2e7bfb['58ecf9f0'] = 0;
a0_0x2e7bfb['1e9348a1'] = 0;
a0_0x2e7bfb['26acdda0'] = 0;
a0_0x2e7bfb['68b21e10'] = 0;
a0_0x2e7bfb.f2bf6ec9 = 0;
a0_0x2e7bfb.b4295832 = 0;
a0_0x2e7bfb['590fd25d'] = 0;
a0_0x2e7bfb.ac07c52b = 0;
a0_0x2e7bfb['6db6dea4'] = 0;
a0_0x2e7bfb['58d01c92'] = 0;
a0_0x2e7bfb['1d937bcb'] = 0;
a0_0x2e7bfb.bee5f623 = 0;
a0_0x2e7bfb.a2b7746f = 0;
a0_0x2e7bfb['4eb915bd'] = 0;
a0_0x2e7bfb['3171ad68'] = 0;
a0_0x2e7bfb['378fe419'] = 0;
a0_0x2e7bfb['7fdfe40e'] = 0;
a0_0x2e7bfb['3b545de0'] = 0;
a0_0x2e7bfb['348c0e49'] = 0;
a0_0x2e7bfb['4a0b0e8b'] = 0;
a0_0x2e7bfb['8c6862f0'] = 0;
a0_0x2e7bfb.c1ce6fb8 = 0;
a0_0x2e7bfb['7fbab999'] = 0;
a0_0x2e7bfb.a01cabd3 = 0;
a0_0x2e7bfb['451bbb57'] = 0;
a0_0x2e7bfb['2415fdbe'] = 0;
a0_0x2e7bfb.ee2f7d24 = 0;
a0_0x2e7bfb.c1950e3b = 0;
a0_0x2e7bfb.ea168227 = 0;
a0_0x2e7bfb['4b434861'] = 0;
a0_0x2e7bfb['26c36d28'] = 0;
a0_0x2e7bfb['4feb1726'] = 0;
a0_0x2e7bfb['3ebb9bd4'] = 0;
a0_0x2e7bfb['2c20944a'] = 0;
a0_0x2e7bfb.d33cda60 = 0;
a0_0x2e7bfb['872eef03'] = 0;
a0_0x2e7bfb['12b9f639'] = 0;
a0_0x2e7bfb['5be30726'] = 0;
a0_0x2e7bfb['7f2331a3'] = 0;
a0_0x2e7bfb['403199f7'] = 0;
a0_0x2e7bfb['263f8af4'] = 0;
a0_0x2e7bfb['66c1eb6d'] = 0;
a0_0x2e7bfb.aaf3a696 = 0;
a0_0x2e7bfb['1f21bdbe'] = 0;
a0_0x2e7bfb['511a6576'] = 0;
a0_0x2e7bfb.d6b200e7 = 0;
a0_0x2e7bfb['9240cfde'] = 0;
a0_0x2e7bfb.aa5237d7 = 0;
a0_0x2e7bfb.c4576409 = 0;
a0_0x2e7bfb.f84d8f93 = 0;
a0_0x2e7bfb.f859123f = 0;
a0_0x2e7bfb['605df596'] = 0;
a0_0x2e7bfb.fa397d63 = 0;
a0_0x2e7bfb['28d74afe'] = 0;
a0_0x2e7bfb['17f9ce11'] = 0;
a0_0x2e7bfb['120503ab'] = 0;
a0_0x2e7bfb.e475b9ed = 0;
a0_0x2e7bfb.cef1fc91 = 0;
a0_0x2e7bfb['81a2de4f'] = 0;
a0_0x2e7bfb['2a437ae3'] = 0;
a0_0x2e7bfb.ee4256f9 = 0;
a0_0x2e7bfb['2bf6c193'] = 0;
a0_0x2e7bfb['5ee5481b'] = 0;
a0_0x2e7bfb.c718b77e = 0;
a0_0x2e7bfb['67efd339'] = 0;
a0_0x2e7bfb['4e944621'] = 0;
a0_0x2e7bfb['8a63655d'] = 0;
a0_0x2e7bfb.b1d084d7 = 0;
a0_0x2e7bfb['278256ea'] = 0;
a0_0x2e7bfb.c0129a01 = 0;
a0_0x2e7bfb.e11b61a6 = 0;
a0_0x2e7bfb['20811a33'] = 0;
a0_0x2e7bfb.e9f78d8b = 0;
a0_0x2e7bfb['41df04c9'] = 0;
a0_0x2e7bfb.d3f673c1 = 0;
a0_0x2e7bfb['8201800a'] = 0;
a0_0x2e7bfb['35e32e6d'] = 0;
a0_0x2e7bfb.d42b5f01 = 0;
a0_0x2e7bfb.a3ff50a5 = 0;
a0_0x2e7bfb['6ad0b676'] = 0;
a0_0x2e7bfb['80b1e709'] = 0;
a0_0x2e7bfb['8bede483'] = 0;
a0_0x2e7bfb['09e74e06'] = 0;
a0_0x2e7bfb.ff49fdb8 = 0;
a0_0x2e7bfb['3d2d1782'] = 0;
a0_0x2e7bfb['15c89907'] = 0;
a0_0x2e7bfb['8bf1c9c2'] = 0;
a0_0x2e7bfb['1eac9f5f'] = 0;
a0_0x2e7bfb['029b284b'] = 0;
a0_0x2e7bfb['27e3462d'] = 0;
a0_0x2e7bfb['0baeed69'] = 0;
a0_0x2e7bfb.da77673a = 0;
a0_0x2e7bfb['276e6a4b'] = 0;
a0_0x2e7bfb['5a0529ff'] = 0;
a0_0x2e7bfb['2a53eec9'] = 0;
a0_0x2e7bfb.d8f42fc6 = 0;
a0_0x2e7bfb.b9854d66 = 0;
a0_0x2e7bfb['227f2116'] = 0;
a0_0x2e7bfb['02caa9fb'] = 0;
a0_0x2e7bfb['2b8c6783'] = 0;
a0_0x2e7bfb['955976ce'] = 0;
a0_0x2e7bfb['7ba9ac70'] = 0;
a0_0x2e7bfb['414dbb32'] = 0;
a0_0x2e7bfb.d6e2bc45 = 0;
a0_0x2e7bfb['10ae8f37'] = 0;
a0_0x2e7bfb.d875839c = 0;
a0_0x2e7bfb['53941877'] = 0;
a0_0x2e7bfb['9f169886'] = 0;
a0_0x2e7bfb['99ad4f86'] = 0;
a0_0x2e7bfb['8a086b15'] = 0;
a0_0x2e7bfb.a3d36474 = 0;
a0_0x2e7bfb['3821021e'] = 0;
a0_0x2e7bfb['2c00cc88'] = 0;
a0_0x2e7bfb['598a9f05'] = 0;
a0_0x2e7bfb['1901d808'] = 0;
a0_0x2e7bfb['0cb11880'] = 0;
a0_0x2e7bfb['6b8acb66'] = 0;
a0_0x2e7bfb['0c1ce078'] = 0;
a0_0x2e7bfb['835318fe'] = 0;
a0_0x2e7bfb['0b993b69'] = 0;
a0_0x2e7bfb['48750a9c'] = 0;
a0_0x2e7bfb['7b74e0fa'] = 0;
a0_0x2e7bfb.ef2e2c2f = 0;
a0_0x2e7bfb['5f58c10f'] = 0;
a0_0x2e7bfb['10037ffe'] = 0;
a0_0x2e7bfb['359349fc'] = 0;
a0_0x2e7bfb.e9e3918e = 0;
a0_0x2e7bfb['8565e750'] = 0;
a0_0x2e7bfb['36eed98b'] = 0;
a0_0x2e7bfb.f0487747 = 0;
a0_0x2e7bfb['2e251e0c'] = 0;
a0_0x2e7bfb['52fa0c18'] = 0;
a0_0x2e7bfb['9bc604f3'] = 0;
a0_0x2e7bfb['901acee9'] = 0;
a0_0x2e7bfb['78ecb4c5'] = 0;
a0_0x2e7bfb['884247f4'] = 0;
a0_0x2e7bfb['1f10f509'] = 0;
a0_0x2e7bfb.df505bf2 = 0;
a0_0x2e7bfb.ddc93bac = 0;
a0_0x2e7bfb.e59f8bab = 0;
a0_0x2e7bfb['9640194e'] = 0;
a0_0x2e7bfb.c3363507 = 0;
a0_0x2e7bfb['368a83b3'] = 0;
a0_0x2e7bfb['7fbf5923'] = 0;
a0_0x2e7bfb.ec4d193a = 0;
a0_0x2e7bfb['5c61a01a'] = 0;
a0_0x2e7bfb.eb0cf53b = 0;
a0_0x2e7bfb.ad4997a4 = 0;
a0_0x2e7bfb['7280cc7d'] = 0;
a0_0x2e7bfb['5ff41353'] = 0;
a0_0x2e7bfb['5cfe6ae6'] = 0;
a0_0x2e7bfb['2fb851b8'] = 0;
a0_0x2e7bfb.a04a49fe = 0;
a0_0x2e7bfb['68a5bdd0'] = 0;
a0_0x2e7bfb['99f919a3'] = 0;
a0_0x2e7bfb.c95d798c = 0;
a0_0x2e7bfb['55460687'] = 0;
a0_0x2e7bfb['7d1c360a'] = 0;
a0_0x2e7bfb.cd05ce11 = 0;
a0_0x2e7bfb.fa2b3da2 = 0;
a0_0x2e7bfb.f530c233 = 0;
a0_0x2e7bfb.e22a16d8 = 0;
a0_0x2e7bfb.cbc1a79c = 0;
a0_0x2e7bfb.af8544aa = 0;
a0_0x2e7bfb['8d9fdc0d'] = 0;
a0_0x2e7bfb['5c737c81'] = 0;
a0_0x2e7bfb['3490edbc'] = 0;
a0_0x2e7bfb['62a4625b'] = 0;
a0_0x2e7bfb.a9dbd26b = 0;
a0_0x2e7bfb['9717a7f4'] = 0;
a0_0x2e7bfb['0c29d3f5'] = 0;
a0_0x2e7bfb['196176a3'] = 0;
a0_0x2e7bfb['64c85ac7'] = 0;
a0_0x2e7bfb.a784d153 = 0;
a0_0x2e7bfb['09f3f8ae'] = 0;
a0_0x2e7bfb['79bdc577'] = 0;
a0_0x2e7bfb.d6d7974a = 0;
a0_0x2e7bfb['9b14dad1'] = 0;
a0_0x2e7bfb['78606127'] = 0;
a0_0x2e7bfb['7a89b908'] = 0;
a0_0x2e7bfb['35838657'] = 0;
a0_0x2e7bfb['6ce5c8ca'] = 0;
a0_0x2e7bfb['94133296'] = 0;
a0_0x2e7bfb['98023552'] = 0;
a0_0x2e7bfb['4b68d1f9'] = 0;
a0_0x2e7bfb.f4203f7f = 0;
a0_0x2e7bfb['22743ad3'] = 0;
a0_0x2e7bfb['80d82b2f'] = 0;
a0_0x2e7bfb.e02921fb = 0;
a0_0x2e7bfb['6255dd6f'] = 0;
a0_0x2e7bfb['9ef969fb'] = 0;
a0_0x2e7bfb['7b5dd885'] = 0;
a0_0x2e7bfb.e6c4a2ee = 0;
a0_0x2e7bfb['4dac5cff'] = 0;
a0_0x2e7bfb['8664d048'] = 0;
a0_0x2e7bfb.f2ea9b31 = 0;
a0_0x2e7bfb.e94ff4cd = 0;
a0_0x2e7bfb['16f80699'] = 0;
a0_0x2e7bfb['4d757ddb'] = 0;
a0_0x2e7bfb.d0f1759a = 0;
a0_0x2e7bfb['1a76f929'] = 0;
a0_0x2e7bfb['44cf5040'] = 0;
a0_0x2e7bfb['9a98fd33'] = 0;
a0_0x2e7bfb.f0fbed04 = 0;
a0_0x2e7bfb.e3a97775 = 0;
a0_0x2e7bfb['95525a12'] = 0;
a0_0x2e7bfb.ac0057d7 = 0;
a0_0x2e7bfb['65f03357'] = 0;
a0_0x2e7bfb.a9b474b1 = 0;
a0_0x2e7bfb['8b216421'] = 0;
a0_0x2e7bfb['2b46b558'] = 0;
a0_0x2e7bfb.a42067f7 = 0;
a0_0x2e7bfb['46153dc1'] = 0;
a0_0x2e7bfb['78a63683'] = 0;
a0_0x2e7bfb['5b4f9193'] = 0;
a0_0x2e7bfb['41265235'] = 0;
a0_0x2e7bfb['848efc56'] = 0;
a0_0x2e7bfb.aa1afc83 = 0;
a0_0x2e7bfb['0810529f'] = 0;
a0_0x2e7bfb['87a4fce0'] = 0;
a0_0x2e7bfb['5b48d01d'] = 0;
a0_0x2e7bfb.f3ba4d0b = 0;
a0_0x2e7bfb['62b49871'] = 0;
a0_0x2e7bfb['40ff409f'] = 0;
a0_0x2e7bfb['39acc3b8'] = 0;
a0_0x2e7bfb.dc5806de = 0;
a0_0x2e7bfb['9b7f73cc'] = 0;
a0_0x2e7bfb['84abd35b'] = 0;
a0_0x2e7bfb.dcd1c65a = 0;
a0_0x2e7bfb['448ba098'] = 0;
a0_0x2e7bfb['4ee7dfb2'] = 0;
a0_0x2e7bfb['02b9db6c'] = 0;
a0_0x2e7bfb.bcd73fe0 = 0;
a0_0x2e7bfb['0535c579'] = 0;
a0_0x2e7bfb['4c61db8c'] = 0;
a0_0x2e7bfb.aa1dd431 = 0;
a0_0x2e7bfb['1f7cc977'] = 0;
a0_0x2e7bfb.e5427327 = 0;
a0_0x2e7bfb.bddfd113 = 0;
a0_0x2e7bfb['45837944'] = 0;
a0_0x2e7bfb['426736d2'] = 0;
a0_0x2e7bfb.ed34aaa1 = 0;
a0_0x2e7bfb['0740ef40'] = 0;
a0_0x2e7bfb['40daf21b'] = 0;
a0_0x2e7bfb.d743cacd = 0;
a0_0x2e7bfb['77344610'] = 0;
a0_0x2e7bfb['33d3fa8b'] = 0;
a0_0x2e7bfb.acd85a4c = 0;
a0_0x2e7bfb['85323c85'] = 0;
a0_0x2e7bfb.b8f9a0c2 = 0;
a0_0x2e7bfb['7172e340'] = 0;
a0_0x2e7bfb['8cb07152'] = 0;
a0_0x2e7bfb['0034fcad'] = 0;
a0_0x2e7bfb['44f02242'] = 0;
a0_0x2e7bfb.d56ecd04 = 0;
a0_0x2e7bfb.c94eaa83 = 0;
a0_0x2e7bfb['29e3a3fc'] = 0;
a0_0x2e7bfb['6aedb483'] = 0;
a0_0x2e7bfb.e50bafed = 0;
a0_0x2e7bfb['3543a13a'] = 0;
a0_0x2e7bfb['793e7691'] = 0;
a0_0x2e7bfb.e5c45841 = 0;
a0_0x2e7bfb['6b04103c'] = 0;
a0_0x2e7bfb['45149abb'] = 0;
a0_0x2e7bfb['1ec1eb11'] = 0;
a0_0x2e7bfb['295a1f92'] = 0;
a0_0x2e7bfb.bda0b00f = 0;
a0_0x2e7bfb.bc81c07c = 0;
a0_0x2e7bfb['0333e491'] = 0;
a0_0x2e7bfb['292b1ae1'] = 0;
a0_0x2e7bfb['433ac186'] = 0;
a0_0x2e7bfb['134c9a0b'] = 0;
a0_0x2e7bfb['29e851f2'] = 0;
a0_0x2e7bfb.adfec730 = 0;
a0_0x2e7bfb['75bb8dc4'] = 0;
a0_0x2e7bfb.a2397089 = 0;
a0_0x2e7bfb['874774ff'] = 0;
a0_0x2e7bfb['6b3faf68'] = 0;
a0_0x2e7bfb['7fda6e65'] = 0;
a0_0x2e7bfb['72ea9832'] = 0;
a0_0x2e7bfb['1ea6a2fe'] = 0;
a0_0x2e7bfb['51374c53'] = 0;
a0_0x2e7bfb['6d796130'] = 0;
a0_0x2e7bfb['5e08c6bb'] = 0;
a0_0x2e7bfb['0111aa95'] = 0;
a0_0x2e7bfb['91994848'] = 0;
a0_0x2e7bfb['6f980f0c'] = 0;
a0_0x2e7bfb.e05b6ce5 = 0;
a0_0x2e7bfb.d376371f = 0;
a0_0x2e7bfb['9146c7cf'] = 0;
a0_0x2e7bfb['20c36760'] = 0;
a0_0x2e7bfb['19c4c5c8'] = 0;
a0_0x2e7bfb.b2ec9768 = 0;
a0_0x2e7bfb['967e8aff'] = 0;
a0_0x2e7bfb['5958b189'] = 0;
a0_0x2e7bfb['520f9d10'] = 0;
a0_0x2e7bfb['8e46006b'] = 0;
a0_0x2e7bfb['7f6200b6'] = 0;
a0_0x2e7bfb.ea1f2960 = 0;
a0_0x2e7bfb['3b947927'] = 0;
a0_0x2e7bfb.e3570d93 = 0;
a0_0x2e7bfb['95d11171'] = 0;
a0_0x2e7bfb.e9922451 = 0;
a0_0x2e7bfb.e2d4ccb9 = 0;
a0_0x2e7bfb.ee222b39 = 0;
a0_0x2e7bfb['1ce7c094'] = 0;
a0_0x2e7bfb['0ab79505'] = 0;
a0_0x2e7bfb.f778b7bc = 0;
a0_0x2e7bfb['6de31788'] = 0;
a0_0x2e7bfb['0a2d03b9'] = 0;
a0_0x2e7bfb['7b726a65'] = 0;
a0_0x2e7bfb['2ab9931c'] = 0;
a0_0x2e7bfb['7a86960c'] = 0;
a0_0x2e7bfb.b554fa8a = 0;
a0_0x2e7bfb['68045d11'] = 0;
a0_0x2e7bfb['909af421'] = 0;
a0_0x2e7bfb['25442c25'] = 0;
a0_0x2e7bfb['0266250f'] = 0;
a0_0x2e7bfb['0f25662f'] = 0;
a0_0x2e7bfb.ab777829 = 0;
a0_0x2e7bfb.ace4abe3 = 0;
a0_0x2e7bfb['437f9e2b'] = 0;
a0_0x2e7bfb['2acb2f40'] = 0;
a0_0x2e7bfb['62991b07'] = 0;
a0_0x2e7bfb.e25eab0a = 0;
a0_0x2e7bfb['6115992b'] = 0;
a0_0x2e7bfb['8a55442c'] = 0;
a0_0x2e7bfb['08536162'] = 0;
a0_0x2e7bfb.cfc97b7b = 0;
a0_0x2e7bfb['9fc482b7'] = 0;
a0_0x2e7bfb['72e9f070'] = 0;
a0_0x2e7bfb['8a69a923'] = 0;
a0_0x2e7bfb.f98c78e8 = 0;
a0_0x2e7bfb.b7798663 = 0;
a0_0x2e7bfb['72556866'] = 0;
a0_0x2e7bfb['276daaed'] = 0;
a0_0x2e7bfb['978a843c'] = 0;
a0_0x2e7bfb['70f423e5'] = 0;
a0_0x2e7bfb['5a021f5c'] = 0;
a0_0x2e7bfb['47119d8e'] = 0;
a0_0x2e7bfb.a53f374c = 0;
a0_0x2e7bfb['7c0bb177'] = 0;
a0_0x2e7bfb.e63d2585 = 0;
a0_0x2e7bfb['5baa761c'] = 0;
a0_0x2e7bfb['3c009751'] = 0;
a0_0x2e7bfb['7a48f466'] = 0;
a0_0x2e7bfb.c13a949b = 0;
a0_0x2e7bfb.f01c405e = 0;
a0_0x2e7bfb.f23b0fec = 0;
a0_0x2e7bfb['7bd736cf'] = 0;
a0_0x2e7bfb['5031c1b0'] = 0;
a0_0x2e7bfb.dfc7d06c = 0;
a0_0x2e7bfb['17ad1d64'] = 0;
a0_0x2e7bfb.bc731da4 = 0;
a0_0x2e7bfb.f025b6af = 0;
a0_0x2e7bfb['0346de4b'] = 0;
a0_0x2e7bfb['51a8b294'] = 0;
a0_0x2e7bfb['30dc6da2'] = 0;
a0_0x2e7bfb['8ded5663'] = 0;
a0_0x2e7bfb.f7b41328 = 0;
a0_0x2e7bfb.c97a2f75 = 0;
a0_0x2e7bfb.d9e7010f = 0;
a0_0x2e7bfb['5bff29e1'] = 0;
a0_0x2e7bfb.bf8ea847 = 0;
a0_0x2e7bfb.e668a059 = 0;
a0_0x2e7bfb.af0e821a = 0;
a0_0x2e7bfb['6632ef40'] = 0;
a0_0x2e7bfb['0c009373'] = 0;
a0_0x2e7bfb.c7e8cc9c = 0;
a0_0x2e7bfb.cd1e6bd3 = 0;
a0_0x2e7bfb['584c723a'] = 0;
a0_0x2e7bfb['1eb36f61'] = 0;
a0_0x2e7bfb.e60128b4 = 0;
a0_0x2e7bfb.a111b02b = 0;
a0_0x2e7bfb['06949abd'] = 0;
a0_0x2e7bfb['17ace357'] = 0;
a0_0x2e7bfb['10dc77db'] = 0;
a0_0x2e7bfb['73d199f3'] = 0;
a0_0x2e7bfb['4a91d08f'] = 0;
a0_0x2e7bfb['69335450'] = 0;
a0_0x2e7bfb.ef247a9c = 0;
a0_0x2e7bfb['0fb1987a'] = 0;
a0_0x2e7bfb.e14abe31 = 0;
a0_0x2e7bfb['0b570501'] = 0;
a0_0x2e7bfb.c8a51312 = 0;
a0_0x2e7bfb['5293551e'] = 0;
a0_0x2e7bfb['94d35023'] = 0;
a0_0x2e7bfb['27ebfb49'] = 0;
a0_0x2e7bfb['6afb6711'] = 0;
a0_0x2e7bfb['053dcfbc'] = 0;
a0_0x2e7bfb['3817bd2e'] = 0;
a0_0x2e7bfb['22d3b2a2'] = 0;
a0_0x2e7bfb['95e0c903'] = 0;
a0_0x2e7bfb['1c238363'] = 0;
a0_0x2e7bfb['3606cf36'] = 0;
a0_0x2e7bfb['56a07bcc'] = 0;
a0_0x2e7bfb['9fcd4d67'] = 0;
a0_0x2e7bfb['5751ed86'] = 0;
a0_0x2e7bfb.e0301717 = 0;
a0_0x2e7bfb['6227893a'] = 0;
a0_0x2e7bfb.d4fbed52 = 0;
a0_0x2e7bfb['039cbff0'] = 0;
a0_0x2e7bfb.d4785076 = 0;
a0_0x2e7bfb.e241f0e3 = 0;
a0_0x2e7bfb.fa2c19bc = 0;
a0_0x2e7bfb['9a04d3ed'] = 0;
a0_0x2e7bfb['2f184b96'] = 0;
a0_0x2e7bfb['1016b26c'] = 0;
a0_0x2e7bfb['159e939d'] = 0;
a0_0x2e7bfb['26d9480b'] = 0;
a0_0x2e7bfb.e5f9cd61 = 0;
a0_0x2e7bfb['2d3b8785'] = 0;
a0_0x2e7bfb['1901f0d3'] = 0;
a0_0x2e7bfb['1890c04c'] = 0;
a0_0x2e7bfb['1e4a88ee'] = 0;
a0_0x2e7bfb['33929cc9'] = 0;
a0_0x2e7bfb['83d7f30b'] = 0;
a0_0x2e7bfb['094ca679'] = 0;
a0_0x2e7bfb.acc1473b = 0;
a0_0x2e7bfb.fc9dd3af = 0;
a0_0x2e7bfb['46f8c567'] = 0;
a0_0x2e7bfb['19e7abf4'] = 0;
a0_0x2e7bfb.a7cbd591 = 0;
a0_0x2e7bfb['242164ae'] = 0;
a0_0x2e7bfb['5784a402'] = 0;
a0_0x2e7bfb['556e290f'] = 0;
a0_0x2e7bfb['4b52d7ba'] = 0;
a0_0x2e7bfb['3c97cddb'] = 0;
a0_0x2e7bfb['60101adf'] = 0;
a0_0x2e7bfb['1daa4090'] = 0;
a0_0x2e7bfb.c7fcca5a = 0;
a0_0x2e7bfb.df463712 = 0;
a0_0x2e7bfb['4de4d64b'] = 0;
a0_0x2e7bfb['9ce0b5c5'] = 0;
a0_0x2e7bfb['5e853c1b'] = 0;
a0_0x2e7bfb['44d1800d'] = 0;
a0_0x2e7bfb.e93be934 = 0;
a0_0x2e7bfb['35df9177'] = 0;
a0_0x2e7bfb['9f975078'] = 0;
a0_0x2e7bfb['029fae9e'] = 0;
a0_0x2e7bfb.bbc42c74 = 0;
a0_0x2e7bfb.b129aa87 = 0;
a0_0x2e7bfb.bd8005b4 = 0;
a0_0x2e7bfb.b75457bf = 0;
a0_0x2e7bfb['8a1d9574'] = 0;
a0_0x2e7bfb['7e335d70'] = 0;
a0_0x2e7bfb.da15cf6f = 0;
a0_0x2e7bfb['432aab1f'] = 0;
a0_0x2e7bfb['088cc712'] = 0;
a0_0x2e7bfb['9e28c2ed'] = 0;
a0_0x2e7bfb.baa150b6 = 0;
a0_0x2e7bfb['0e4c02c8'] = 0;
a0_0x2e7bfb.bcbbd479 = 0;
a0_0x2e7bfb['79f2c9a2'] = 0;
a0_0x2e7bfb['33100351'] = 0;
a0_0x2e7bfb.add9a084 = 0;
a0_0x2e7bfb.e8f2e3e4 = 0;
a0_0x2e7bfb.eac85bd3 = 0;
a0_0x2e7bfb['48654b21'] = 0;
a0_0x2e7bfb.dc5cfc29 = 0;
a0_0x2e7bfb['7a0cc053'] = 0;
a0_0x2e7bfb['5cc94693'] = 0;
a0_0x2e7bfb['01a89813'] = 0;
a0_0x2e7bfb['20843c5a'] = 0;
a0_0x2e7bfb['231b55cb'] = 0;
a0_0x2e7bfb.af44f3c7 = 0;
a0_0x2e7bfb['2eb457a2'] = 0;
a0_0x2e7bfb.b3e2a2c6 = 0;
a0_0x2e7bfb.cf95053e = 0;
a0_0x2e7bfb.f316c17e = 0;
a0_0x2e7bfb['0c68bec5'] = 0;
a0_0x2e7bfb['3e152140'] = 0;
a0_0x2e7bfb.fc20c343 = 0;
a0_0x2e7bfb['71d6d762'] = 0;
a0_0x2e7bfb['16b66b32'] = 0;
a0_0x2e7bfb['393e15f4'] = 0;
a0_0x2e7bfb['0daf2170'] = 0;
a0_0x2e7bfb.a25b5e33 = 0;
a0_0x2e7bfb['14fc7028'] = 0;
a0_0x2e7bfb.f8b55b04 = 0;
a0_0x2e7bfb['26fea8e2'] = 0;
a0_0x2e7bfb.e2058f67 = 0;
a0_0x2e7bfb.ccb83e21 = 0;
a0_0x2e7bfb.dd505c8b = 0;
a0_0x2e7bfb.f597c0aa = 0;
a0_0x2e7bfb['66247a3e'] = 0;
a0_0x2e7bfb['6923fc82'] = 0;
a0_0x2e7bfb.eaf6da47 = 0;
a0_0x2e7bfb.d0411e47 = 0;
a0_0x2e7bfb['19f76417'] = 0;
a0_0x2e7bfb['4472d888'] = 0;
a0_0x2e7bfb['11d49af6'] = 0;
a0_0x2e7bfb['68ffb990'] = 0;
a0_0x2e7bfb['1ac42104'] = 0;
a0_0x2e7bfb.cf0f3ce0 = 0;
a0_0x2e7bfb['21d98e26'] = 0;
a0_0x2e7bfb['0c009c5a'] = 0;
a0_0x2e7bfb.fe3be400 = 0;
a0_0x2e7bfb['8eb1eea2'] = 0;
a0_0x2e7bfb['2c3affbb'] = 0;
a0_0x2e7bfb['3a6cb379'] = 0;
a0_0x2e7bfb['62d1c509'] = 0;
a0_0x2e7bfb['59aaf5a0'] = 0;
a0_0x2e7bfb['501d5b87'] = 0;
a0_0x2e7bfb['6aaeda27'] = 0;
a0_0x2e7bfb['5eac0660'] = 0;
a0_0x2e7bfb['94fabb51'] = 0;
a0_0x2e7bfb.bc798409 = 0;
a0_0x2e7bfb.bee19bd5 = 0;
a0_0x2e7bfb['5b0b63ac'] = 0;
a0_0x2e7bfb.f7056405 = 0;
a0_0x2e7bfb['8ee41b6d'] = 0;
a0_0x2e7bfb.a4fda71d = 0;
a0_0x2e7bfb['5f474021'] = 0;
a0_0x2e7bfb['931db783'] = 0;
a0_0x2e7bfb['876970a0'] = 0;
a0_0x2e7bfb['7e3ed2d8'] = 0;
a0_0x2e7bfb['060b0966'] = 0;
a0_0x2e7bfb['7bc3772e'] = 0;
a0_0x2e7bfb['5eac0f72'] = 0;
a0_0x2e7bfb['98db8fe5'] = 0;
a0_0x2e7bfb.d16f72db = 0;
a0_0x2e7bfb['6f1da1aa'] = 0;
a0_0x2e7bfb['1736e891'] = 0;
a0_0x2e7bfb['5e838806'] = 0;
a0_0x2e7bfb.a187618b = 0;
a0_0x2e7bfb['35dbc37d'] = 0;
a0_0x2e7bfb['3b15eb06'] = 0;
a0_0x2e7bfb['817cd096'] = 0;
a0_0x2e7bfb.aa3b1144 = 0;
a0_0x2e7bfb.d944f735 = 0;
a0_0x2e7bfb.b8d4753b = 0;
a0_0x2e7bfb.b08feaa6 = 0;
a0_0x2e7bfb['4fdec0c9'] = 0;
a0_0x2e7bfb.c223979b = 0;
a0_0x2e7bfb['12fe00bd'] = 0;
a0_0x2e7bfb.d7c250d5 = 0;
a0_0x2e7bfb['411b8eb8'] = 0;
a0_0x2e7bfb['9ab25f45'] = 0;
a0_0x2e7bfb['17e61379'] = 0;
a0_0x2e7bfb['6549968f'] = 0;
a0_0x2e7bfb.ba6d12f3 = 0;
a0_0x2e7bfb['44c2962d'] = 0;
a0_0x2e7bfb['16766d52'] = 0;
a0_0x2e7bfb['398ac56d'] = 0;
a0_0x2e7bfb['0f42965c'] = 0;
a0_0x2e7bfb['0420d58f'] = 0;
a0_0x2e7bfb.e14abbc3 = 0;
a0_0x2e7bfb['06a51404'] = 0;
a0_0x2e7bfb['202ab87d'] = 0;
a0_0x2e7bfb.c0b47f00 = 0;
a0_0x2e7bfb.a1f359dd = 0;
a0_0x2e7bfb['28f6a3d7'] = 0;
a0_0x2e7bfb.d9a39269 = 0;
a0_0x2e7bfb['5038dc69'] = 0;
a0_0x2e7bfb.b9e3525c = 0;
a0_0x2e7bfb.d7902d67 = 0;
a0_0x2e7bfb['7d013250'] = 0;
a0_0x2e7bfb.dc7001d2 = 0;
a0_0x2e7bfb.e6b3a01c = 0;
a0_0x2e7bfb['6be76eee'] = 0;
a0_0x2e7bfb.aef60585 = 0;
a0_0x2e7bfb.f5e6f54d = 0;
a0_0x2e7bfb['640ccbfd'] = 0;
a0_0x2e7bfb['67191aef'] = 0;
a0_0x2e7bfb.ecb5b29d = 0;
a0_0x2e7bfb.da0e3ac3 = 0;
a0_0x2e7bfb['4c72320f'] = 0;
a0_0x2e7bfb['89687443'] = 0;
a0_0x2e7bfb['3e319027'] = 0;
a0_0x2e7bfb['75baae98'] = 0;
a0_0x2e7bfb['76392eb4'] = 0;
a0_0x2e7bfb.fdabcbb0 = 0;
a0_0x2e7bfb['785f1755'] = 0;
a0_0x2e7bfb.ab7e0df5 = 0;
a0_0x2e7bfb['885fbb00'] = 0;
a0_0x2e7bfb['60013bf2'] = 0;
a0_0x2e7bfb.c43942be = 0;
a0_0x2e7bfb['61f0b49d'] = 0;
a0_0x2e7bfb['310f3432'] = 0;
a0_0x2e7bfb['1a26550e'] = 0;
a0_0x2e7bfb['1ea4f53c'] = 0;
a0_0x2e7bfb['2205d48b'] = 0;
a0_0x2e7bfb.dfef8f2c = 0;
a0_0x2e7bfb.ff836d43 = 0;
a0_0x2e7bfb['5de557b2'] = 0;
a0_0x2e7bfb.b60aaf5c = 0;
a0_0x2e7bfb['97308594'] = 0;
a0_0x2e7bfb['59c9026d'] = 0;
a0_0x2e7bfb['4b5b6985'] = 0;
a0_0x2e7bfb['7df262b8'] = 0;
a0_0x2e7bfb['7e30b44b'] = 0;
a0_0x2e7bfb['5813d44d'] = 0;
a0_0x2e7bfb.ba84b54a = 0;
a0_0x2e7bfb['6b3b5454'] = 0;
a0_0x2e7bfb['44c0b3d6'] = 0;
a0_0x2e7bfb['406d87ff'] = 0;
a0_0x2e7bfb.a1df6105 = 0;
a0_0x2e7bfb.ba8ad5bd = 0;
a0_0x2e7bfb.e8b89b7d = 0;
a0_0x2e7bfb.ea55c10a = 0;
a0_0x2e7bfb['6d43a6ec'] = 0;
a0_0x2e7bfb.dc5f9859 = 0;
a0_0x2e7bfb['68c53332'] = 0;
a0_0x2e7bfb['71d7ebb2'] = 0;
a0_0x2e7bfb['53408035'] = 0;
a0_0x2e7bfb['01e3defb'] = 0;
a0_0x2e7bfb['6dc8efbe'] = 0;
a0_0x2e7bfb.a9897cd0 = 0;
a0_0x2e7bfb['13c919ce'] = 0;
a0_0x2e7bfb.dfcfeb38 = 0;
a0_0x2e7bfb['4e1dc3f6'] = 0;
a0_0x2e7bfb['288044aa'] = 0;
a0_0x2e7bfb['628be034'] = 0;
a0_0x2e7bfb['61545a78'] = 0;
a0_0x2e7bfb.b4c878d4 = 0;
a0_0x2e7bfb.aacdf358 = 0;
a0_0x2e7bfb['8df1c49b'] = 0;
a0_0x2e7bfb['1d4019df'] = 0;
a0_0x2e7bfb['7c31c0e1'] = 0;
a0_0x2e7bfb['3a47c1f4'] = 0;
a0_0x2e7bfb.d9b793ec = 0;
a0_0x2e7bfb.d24074a5 = 0;
a0_0x2e7bfb['4d1a9f5b'] = 0;
a0_0x2e7bfb.dc44b0b1 = 0;
a0_0x2e7bfb['17a02950'] = 0;
a0_0x2e7bfb['9e0c2d65'] = 0;
a0_0x2e7bfb['7025dcb5'] = 0;
a0_0x2e7bfb['3c411027'] = 0;
a0_0x2e7bfb['1e8cec78'] = 0;
a0_0x2e7bfb['76947621'] = 0;
a0_0x2e7bfb['390ea71d'] = 0;
a0_0x2e7bfb['09274847'] = 0;
a0_0x2e7bfb.d1df5485 = 0;
a0_0x2e7bfb['0e126b4c'] = 0;
a0_0x2e7bfb.cd8732a3 = 0;
a0_0x2e7bfb['8dab56ca'] = 0;
a0_0x2e7bfb['556fd636'] = 0;
a0_0x2e7bfb['1d56cbf9'] = 0;
a0_0x2e7bfb['0d76fed2'] = 0;
a0_0x2e7bfb.d9e35251 = 0;
a0_0x2e7bfb['9157ac46'] = 0;
a0_0x2e7bfb['8eb3a45d'] = 0;
a0_0x2e7bfb['44cb3eef'] = 0;
a0_0x2e7bfb['5eebb105'] = 0;
a0_0x2e7bfb['4aaf6034'] = 0;
a0_0x2e7bfb['03d54dd8'] = 0;
a0_0x2e7bfb['8c9c7f55'] = 0;
a0_0x2e7bfb.ec66d552 = 0;
a0_0x2e7bfb.e5173af2 = 0;
a0_0x2e7bfb['764c90b4'] = 0;
a0_0x2e7bfb['0a682a10'] = 0;
a0_0x2e7bfb.acff57d1 = 0;
a0_0x2e7bfb['9f87f5f1'] = 0;
a0_0x2e7bfb['733bb5a2'] = 0;
a0_0x2e7bfb.a1e04f8a = 0;
a0_0x2e7bfb['71e5e9c3'] = 0;
a0_0x2e7bfb['564a4185'] = 0;
a0_0x2e7bfb['2b265427'] = 0;
a0_0x2e7bfb['1978e67e'] = 0;
a0_0x2e7bfb['751b4b0d'] = 0;
a0_0x2e7bfb.e8f7f2d5 = 0;
a0_0x2e7bfb['73c65e40'] = 0;
a0_0x2e7bfb['320eee65'] = 0;
a0_0x2e7bfb['8162f5e9'] = 0;
a0_0x2e7bfb['10913eb7'] = 0;
a0_0x2e7bfb.a6a71e63 = 0;
a0_0x2e7bfb.b7af07ca = 0;
a0_0x2e7bfb['2489711f'] = 0;
a0_0x2e7bfb['03edba1e'] = 0;
a0_0x2e7bfb['8e0b1638'] = 0;
a0_0x2e7bfb['3061e84d'] = 0;
a0_0x2e7bfb['42292136'] = 0;
a0_0x2e7bfb['3ac370ae'] = 0;
a0_0x2e7bfb.a862257a = 0;
a0_0x2e7bfb['142c4f15'] = 0;
a0_0x2e7bfb['524b04fe'] = 0;
a0_0x2e7bfb['7431735f'] = 0;
a0_0x2e7bfb['9f447f3c'] = 0;
a0_0x2e7bfb['37002585'] = 0;
a0_0x2e7bfb.c52f868d = 0;
a0_0x2e7bfb['52478096'] = 0;
a0_0x2e7bfb.f0ef1a25 = 0;
a0_0x2e7bfb.f0e9abd1 = 0;
a0_0x2e7bfb['0c984424'] = 0;
a0_0x2e7bfb['5a11fa86'] = 0;
a0_0x2e7bfb.fe35c5ec = 0;
a0_0x2e7bfb['8b7eafd8'] = 0;
a0_0x2e7bfb['95f8b746'] = 0;
a0_0x2e7bfb.f87dd393 = 0;
a0_0x2e7bfb.a1111662 = 0;
a0_0x2e7bfb['8f8f5574'] = 0;
a0_0x2e7bfb['29242a2e'] = 0;
a0_0x2e7bfb['7799bcd7'] = 0;
a0_0x2e7bfb['5cc03f19'] = 0;
a0_0x2e7bfb['46060b79'] = 0;
a0_0x2e7bfb.aca43a68 = 0;
a0_0x2e7bfb.dcb42f1b = 0;
a0_0x2e7bfb['58143c6a'] = 0;
a0_0x2e7bfb['99897675'] = 0;
a0_0x2e7bfb['11d877d7'] = 0;
a0_0x2e7bfb.d420da8f = 0;
a0_0x2e7bfb['76397cfd'] = 0;
a0_0x2e7bfb['0530abb4'] = 0;
a0_0x2e7bfb.f4b51cf0 = 0;
a0_0x2e7bfb.adf1e3a9 = 0;
a0_0x2e7bfb['8c0f50a6'] = 0;
a0_0x2e7bfb.ff9a863b = 0;
a0_0x2e7bfb['7f128628'] = 0;
a0_0x2e7bfb['066e87bd'] = 0;
a0_0x2e7bfb.e531effd = 0;
a0_0x2e7bfb['17c14cf9'] = 0;
a0_0x2e7bfb['8292d8bc'] = 0;
a0_0x2e7bfb['7bafda20'] = 0;
a0_0x2e7bfb['49058cb4'] = 0;
a0_0x2e7bfb['7e2038fe'] = 0;
a0_0x2e7bfb.f4c21acd = 0;
a0_0x2e7bfb['627e92c6'] = 0;
a0_0x2e7bfb['155b1a82'] = 0;
a0_0x2e7bfb.df89aa26 = 0;
a0_0x2e7bfb['98e07d77'] = 0;
a0_0x2e7bfb.cac40871 = 0;
a0_0x2e7bfb.dd169c9a = 0;
a0_0x2e7bfb['9ba1f573'] = 0;
a0_0x2e7bfb.f08b838c = 0;
a0_0x2e7bfb['44313518'] = 0;
a0_0x2e7bfb.a4d12bed = 0;
a0_0x2e7bfb.ed309ba8 = 0;
a0_0x2e7bfb['3148a5e7'] = 0;
a0_0x2e7bfb['9e182510'] = 0;
a0_0x2e7bfb['7b3238dc'] = 0;
a0_0x2e7bfb['67784a33'] = 0;
a0_0x2e7bfb['942ce7bf'] = 0;
a0_0x2e7bfb['273cc245'] = 0;
a0_0x2e7bfb.a258e5c8 = 0;
a0_0x2e7bfb.be9e196d = 0;
a0_0x2e7bfb['210af2ae'] = 0;
a0_0x2e7bfb['3aae0691'] = 0;
a0_0x2e7bfb.c0289cda = 0;
a0_0x2e7bfb['1b44a431'] = 0;
a0_0x2e7bfb['73fda6cc'] = 0;
a0_0x2e7bfb['4e208f37'] = 0;
a0_0x2e7bfb.c21c39bb = 0;
a0_0x2e7bfb['7542b9e1'] = 0;
a0_0x2e7bfb['27d5beee'] = 0;
a0_0x2e7bfb['41fca645'] = 0;
a0_0x2e7bfb['6786c526'] = 0;
a0_0x2e7bfb['948a29f3'] = 0;
a0_0x2e7bfb['3149f39b'] = 0;
a0_0x2e7bfb.b615a3ef = 0;
a0_0x2e7bfb['7bf7798d'] = 0;
a0_0x2e7bfb['43a4a9c1'] = 0;
a0_0x2e7bfb['3ba6d549'] = 0;
a0_0x2e7bfb['985f7334'] = 0;
a0_0x2e7bfb['901a8311'] = 0;
a0_0x2e7bfb['4adeefbd'] = 0;
a0_0x2e7bfb['416b6334'] = 0;
a0_0x2e7bfb.c60f4d29 = 0;
a0_0x2e7bfb['6ff0ebc3'] = 0;
a0_0x2e7bfb['9bbd67b7'] = 0;
a0_0x2e7bfb['98def496'] = 0;
a0_0x2e7bfb['1e007492'] = 0;
a0_0x2e7bfb['4b54b902'] = 0;
a0_0x2e7bfb['20d4e772'] = 0;
a0_0x2e7bfb['8ae739f4'] = 0;
a0_0x2e7bfb['979c6e42'] = 0;
a0_0x2e7bfb['8a62a147'] = 0;
a0_0x2e7bfb.d5f4d3fb = 0;
a0_0x2e7bfb.db6726a1 = 0;
a0_0x2e7bfb['504ad6bc'] = 0;
a0_0x2e7bfb['4ff779b8'] = 0;
a0_0x2e7bfb.acdf46a5 = 0;
a0_0x2e7bfb['35cdd237'] = 0;
a0_0x2e7bfb['533b0dd4'] = 0;
a0_0x2e7bfb['83d03936'] = 0;
a0_0x2e7bfb['9a5d9dfb'] = 0;
a0_0x2e7bfb.b007c9aa = 0;
a0_0x2e7bfb['461ffb80'] = 0;
a0_0x2e7bfb['3ae51789'] = 0;
a0_0x2e7bfb['76e9719e'] = 0;
a0_0x2e7bfb['943bcd06'] = 0;
a0_0x2e7bfb['421b4bbc'] = 0;
a0_0x2e7bfb['38cd522f'] = 0;
a0_0x2e7bfb['47f387ed'] = 0;
a0_0x2e7bfb['22532533'] = 0;
a0_0x2e7bfb.b02b4f0c = 0;
a0_0x2e7bfb['57b5ca5d'] = 0;
a0_0x2e7bfb['532c1300'] = 0;
a0_0x2e7bfb.fb799e86 = 0;
a0_0x2e7bfb.cd381916 = 0;
a0_0x2e7bfb['7c0a33e5'] = 0;
a0_0x2e7bfb.dc0e7f10 = 0;
a0_0x2e7bfb['5c50c220'] = 0;
a0_0x2e7bfb['0d8b90ae'] = 0;
a0_0x2e7bfb['1ca296de'] = 0;
a0_0x2e7bfb.c737783a = 0;
a0_0x2e7bfb['9548c163'] = 0;
a0_0x2e7bfb.c82ca4f5 = 0;
a0_0x2e7bfb.e2a39eb6 = 0;
a0_0x2e7bfb['4d63acc2'] = 0;
a0_0x2e7bfb.f89e585a = 0;
a0_0x2e7bfb['0bc7f499'] = 0;
a0_0x2e7bfb.c994973d = 0;
a0_0x2e7bfb['34f294d3'] = 0;
a0_0x2e7bfb['5db956bb'] = 0;
a0_0x2e7bfb.e9f8e564 = 0;
a0_0x2e7bfb.c82a405c = 0;
a0_0x2e7bfb['0d2585e6'] = 0;
a0_0x2e7bfb['8609c73c'] = 0;
a0_0x2e7bfb['735231f3'] = 0;
a0_0x2e7bfb['0826c62f'] = 0;
a0_0x2e7bfb.cf52610a = 0;
a0_0x2e7bfb.d41923ec = 0;
a0_0x2e7bfb['1795450e'] = 0;
a0_0x2e7bfb.bc84612d = 0;
a0_0x2e7bfb.b04e1c8c = 0;
a0_0x2e7bfb['65c3e10f'] = 0;
a0_0x2e7bfb.cf026109 = 0;
a0_0x2e7bfb['7d1c16ed'] = 0;
a0_0x2e7bfb['853e9af1'] = 0;
a0_0x2e7bfb['1a509e77'] = 0;
a0_0x2e7bfb.af54ed63 = 0;
a0_0x2e7bfb.a643ad06 = 0;
a0_0x2e7bfb.e0bc2953 = 0;
a0_0x2e7bfb['9a71614a'] = 0;
a0_0x2e7bfb.b220c117 = 0;
a0_0x2e7bfb['5e0e0bd1'] = 0;
a0_0x2e7bfb.e462a330 = 0;
a0_0x2e7bfb.c4c406dc = 0;
a0_0x2e7bfb.c577beea = 0;
a0_0x2e7bfb['7758047c'] = 0;
a0_0x2e7bfb.a519b7d8 = 0;
a0_0x2e7bfb['37efc2e2'] = 0;
a0_0x2e7bfb['93639f82'] = 0;
a0_0x2e7bfb.b4b24817 = 0;
a0_0x2e7bfb['8f14273d'] = 0;
a0_0x2e7bfb.d0d14d68 = 0;
a0_0x2e7bfb['32de5ae5'] = 0;
a0_0x2e7bfb.e1c6572d = 0;
a0_0x2e7bfb['0902783c'] = 0;
a0_0x2e7bfb.dffa91bb = 0;
a0_0x2e7bfb['1c8762cc'] = 0;
a0_0x2e7bfb['60a60551'] = 0;
a0_0x2e7bfb['6fe81769'] = 0;
a0_0x2e7bfb.e9e9c037 = 0;
a0_0x2e7bfb.a8c4ba94 = 0;
a0_0x2e7bfb['1bc1123c'] = 0;
a0_0x2e7bfb.ff780a08 = 0;
a0_0x2e7bfb['170bd157'] = 0;
a0_0x2e7bfb['99181891'] = 0;
a0_0x2e7bfb['7101d92d'] = 0;
a0_0x2e7bfb['68b8c8fc'] = 0;
a0_0x2e7bfb['24e4e77a'] = 0;
a0_0x2e7bfb.bd118255 = 0;
a0_0x2e7bfb['947f5469'] = 0;
a0_0x2e7bfb['81cd8e45'] = 0;
a0_0x2e7bfb.dd0204ec = 0;
a0_0x2e7bfb['28490ff6'] = 0;
a0_0x2e7bfb['8fdf3503'] = 0;
a0_0x2e7bfb['14d2a04f'] = 0;
a0_0x2e7bfb['9961a88e'] = 0;
a0_0x2e7bfb['744106c4'] = 0;
a0_0x2e7bfb['0dbd7356'] = 0;
a0_0x2e7bfb.a1e77fc6 = 0;
a0_0x2e7bfb['536fb774'] = 0;
a0_0x2e7bfb['0966c56b'] = 0;
a0_0x2e7bfb.e790a95a = 0;
a0_0x2e7bfb['231f353f'] = 0;
a0_0x2e7bfb.a6bae32d = 0;
a0_0x2e7bfb['34077420'] = 0;
a0_0x2e7bfb['1c7dfb0e'] = 0;
a0_0x2e7bfb.d0106faf = 0;
a0_0x2e7bfb['80bc2577'] = 0;
a0_0x2e7bfb['9ad7066c'] = 0;
a0_0x2e7bfb['3a692655'] = 0;
a0_0x2e7bfb['14683d06'] = 0;
a0_0x2e7bfb['1b6237c6'] = 0;
a0_0x2e7bfb['94ddf1b1'] = 0;
a0_0x2e7bfb.b1e23d68 = 0;
a0_0x2e7bfb['7fd1ed61'] = 0;
a0_0x2e7bfb['2f6014ce'] = 0;
a0_0x2e7bfb['82861cc5'] = 0;
a0_0x2e7bfb['0a7bcc42'] = 0;
a0_0x2e7bfb['65da0d8f'] = 0;
a0_0x2e7bfb.c1a098ed = 0;
a0_0x2e7bfb['1da62639'] = 0;
a0_0x2e7bfb.ab64b687 = 0;
a0_0x2e7bfb.f04e532d = 0;
a0_0x2e7bfb['1b765ed7'] = 0;
a0_0x2e7bfb.fd115455 = 0;
a0_0x2e7bfb['82d71b0a'] = 0;
a0_0x2e7bfb['601b7d16'] = 0;
a0_0x2e7bfb['98bad846'] = 0;
a0_0x2e7bfb.aeef2297 = 0;
a0_0x2e7bfb['7f87c6f4'] = 0;
a0_0x2e7bfb.ac80ee1d = 0;
a0_0x2e7bfb['0280a64b'] = 0;
a0_0x2e7bfb.e2bf532e = 0;
a0_0x2e7bfb.f85c59b5 = 0;
a0_0x2e7bfb['34415044'] = 0;
a0_0x2e7bfb.b472c348 = 0;
a0_0x2e7bfb.cd1031c2 = 0;
a0_0x2e7bfb['6f089f33'] = 0;
a0_0x2e7bfb['3ffa46a3'] = 0;
a0_0x2e7bfb.ae8951fa = 0;
a0_0x2e7bfb.e5bc10c1 = 0;
a0_0x2e7bfb.ccedc1d7 = 0;
a0_0x2e7bfb['12196322'] = 0;
a0_0x2e7bfb['00bd9673'] = 0;
a0_0x2e7bfb.b5de6091 = 0;
a0_0x2e7bfb.fc442d96 = 0;
a0_0x2e7bfb['7ff90795'] = 0;
a0_0x2e7bfb['4aedc710'] = 0;
a0_0x2e7bfb['534ae494'] = 0;
a0_0x2e7bfb.e1636a1b = 0;
a0_0x2e7bfb['0e94f220'] = 0;
a0_0x2e7bfb['235a2de5'] = 0;
a0_0x2e7bfb.b30d81fe = 0;
a0_0x2e7bfb['8faa737d'] = 0;
a0_0x2e7bfb['863dc742'] = 0;
a0_0x2e7bfb.ed932609 = 0;
a0_0x2e7bfb.c544fde7 = 0;
a0_0x2e7bfb.d695605b = 0;
a0_0x2e7bfb.ecdf67a2 = 0;
a0_0x2e7bfb['64f738ed'] = 0;
a0_0x2e7bfb['4c6f3410'] = 0;
a0_0x2e7bfb['9f3c65c6'] = 0;
a0_0x2e7bfb['1aca0540'] = 0;
a0_0x2e7bfb.efa53032 = 0;
a0_0x2e7bfb['6538f0e5'] = 0;
a0_0x2e7bfb['3e58ea97'] = 0;
a0_0x2e7bfb.ead4ff0c = 0;
a0_0x2e7bfb.bcf4345a = 0;
a0_0x2e7bfb['0a9c7a2e'] = 0;
a0_0x2e7bfb.faf09f2e = 0;
a0_0x2e7bfb['76f572b0'] = 0;
a0_0x2e7bfb['8f9b7367'] = 0;
a0_0x2e7bfb['99d037ec'] = 0;
a0_0x2e7bfb.ef0078b8 = 0;
a0_0x2e7bfb['0729c614'] = 0;
a0_0x2e7bfb.ce16c151 = 0;
a0_0x2e7bfb.d5a57c9d = 0;
a0_0x2e7bfb['0e0d2afe'] = 0;
a0_0x2e7bfb['3422d96d'] = 0;
a0_0x2e7bfb['3a36a65c'] = 0;
a0_0x2e7bfb['13a34b6d'] = 0;
a0_0x2e7bfb['379517f3'] = 0;
a0_0x2e7bfb['780efa76'] = 0;
a0_0x2e7bfb['181881bd'] = 0;
a0_0x2e7bfb['22ff6fca'] = 0;
a0_0x2e7bfb['22f88700'] = 0;
a0_0x2e7bfb['676b7844'] = 0;
a0_0x2e7bfb['04ef0286'] = 0;
a0_0x2e7bfb['4f834334'] = 0;
a0_0x2e7bfb.bcb8857a = 0;
a0_0x2e7bfb['6b9086bc'] = 0;
a0_0x2e7bfb.ca6cc6e9 = 0;
a0_0x2e7bfb['00d29109'] = 0;
a0_0x2e7bfb.e838acc3 = 0;
a0_0x2e7bfb['3817c1b9'] = 0;
a0_0x2e7bfb.d642d6af = 0;
a0_0x2e7bfb['645fd415'] = 0;
a0_0x2e7bfb['88e28b7f'] = 0;
a0_0x2e7bfb['7bb43a85'] = 0;
a0_0x2e7bfb.bbec8cba = 0;
a0_0x2e7bfb['730ba22f'] = 0;
a0_0x2e7bfb.eabe3727 = 0;
a0_0x2e7bfb['6fd6a240'] = 0;
a0_0x2e7bfb['9a7a6eb8'] = 0;
;
const a0_0xe65586 = { '': a0_0x2e7bfb };
a0_0xe65586['14'] = a0_0x5aef1c;
const $s = a0_0xe65586, Uo = $s[''];
for (const s in $s)
    s && Object.assign(Uo, $s[s]);
function Vl(_0xf3b192) {
    return jo(ql(_0xf3b192)).join('-');
}
const zl = /\uFE0F/g, Gl = '‍', ql = _0x31121c => _0x31121c.indexOf(Gl) < 0 ? _0x31121c.replace(zl, '') : _0x31121c;
function jo(_0x5905ab) {
    const _0x56409e = [];
    let _0x77f1ff = 0, _0x44e324 = 0, _0x353971 = 0;
    for (; _0x353971 < _0x5905ab.length;) {
        _0x77f1ff = _0x5905ab.charCodeAt(_0x353971++);
        _0x44e324 ? (_0x56409e.push((65536 + (_0x44e324 - 55296 << 10) + (_0x77f1ff - 56320)).toString(16)), _0x44e324 = 0) : _0x77f1ff > 55296 && _0x77f1ff <= 56319 ? _0x44e324 = _0x77f1ff : _0x56409e.push(_0x77f1ff.toString(16));
        ;
    }
    return _0x56409e.length && _0x56409e[0].length === 2 && (_0x56409e[0] = '00' + _0x56409e[0]), _0x56409e;
}
function $l(_0xe4331e) {
    const _0x1d6cef = _0xe4331e.match(/[\uDFFB-\uDFFF]/);
    return _0x1d6cef ? 5 - (57343 - _0x1d6cef[0].charCodeAt(0)) : 0;
}
const Yl = new Map([[
        'FT',
        '\uD83C\uDFF4‍\u2620'
    ]]);
function e3(_0x470498) {
    ;
    return Yl.get(_0x470498) ?? String.fromCharCode(55356, 56741 + _0x470498.charCodeAt(0), 55356, 56741 + _0x470498.charCodeAt(1));
}
function t3(_0x56bfa3) {
    ;
    return _0x56bfa3.split('-').reduce((_0x557024, _0x42a87d) => _0x557024 + String.fromCodePoint(parseInt(_0x42a87d, 16)), '');
}
function Kl(_0x2f0b22) {
    const _0x1b9f11 = Vl(_0x2f0b22).replace(/-?fe0f/g, '');
    if (Uo.hasOwnProperty(_0x1b9f11)) {
        return _0x1b9f11;
    }
}
function Kf(_0x3a0132) {
    ;
    let _0xc882e0, _0x1d72c5 = _0x3a0132;
    const _0x9af158 = [];
    let _0x2bb666, _0x16962e = 0;
    for (Ur.lastIndex = 0; _0xc882e0 = _0x1d72c5.match(Ur);) {
        if (_0x2bb666 = _0x16962e + _0xc882e0.index, _0xc882e0[3]) {
            _0x9af158.push({
                '_': 'messageEntityMention',
                'offset': _0x2bb666 + _0xc882e0[1].length,
                'length': _0xc882e0[2].length + _0xc882e0[3].length
            });
        } else {
            if (_0xc882e0[4]) {
                if (M1.test(_0xc882e0[4])) {
                    _0x9af158.push({
                        '_': 'messageEntityEmail',
                        'offset': _0x2bb666,
                        'length': _0xc882e0[4].length
                    });
                } else {
                    let _0x6c6f48, _0x2ead43 = _0xc882e0[5];
                    const _0x2c7d16 = _0xc882e0[6];
                    if (_0x2c7d16) {
                        if (!_0x2ead43 && (_0x2c7d16.substr(0, 4) === 'xn--' || Hl.indexOf(_0x2c7d16.toLowerCase()) !== -1) && (_0x2ead43 = 'http://'), _0x2ead43) {
                            const _0x48a47e = Wl(_0xc882e0[4]);
                            _0x48a47e.length !== _0xc882e0[4].length && (_0xc882e0[4] = _0x48a47e);
                            _0x6c6f48 = (_0xc882e0[5] ? '' : _0x2ead43) + _0xc882e0[4];
                            ;
                        }
                    } else {
                        _0x6c6f48 = (_0xc882e0[5] ? '' : 'http://') + _0xc882e0[4];
                    }
                    const _0x2125ab = {
                        offset: _0x2bb666,
                        length: _0xc882e0[4].length
                    };
                    _0x2125ab['_'] = 'messageEntityUrl';
                    ;
                    ;
                    _0x6c6f48 && _0x9af158.push(_0x2125ab);
                    ;
                }
            } else {
                if (_0xc882e0[7]) {
                    _0x9af158.push({
                        '_': 'messageEntityLinebreak',
                        'offset': _0x2bb666,
                        'length': 1
                    });
                } else {
                    if (_0xc882e0[8]) {
                        const _0x50e192 = Kl(_0xc882e0[8]);
                        _0x50e192 && _0x9af158.push({
                            '_': 'messageEntityEmoji',
                            'offset': _0x2bb666,
                            'length': _0xc882e0[8].length,
                            'unicode': _0x50e192
                        });
                    } else {
                        if (_0xc882e0[11]) {
                            _0x9af158.push({
                                '_': 'messageEntityHashtag',
                                'offset': _0x2bb666 + (_0xc882e0[10] ? _0xc882e0[10].length : 0),
                                'length': _0xc882e0[11].length
                            });
                        } else {
                            if (_0xc882e0[13]) {
                                _0x9af158.push({
                                    '_': 'messageEntityBotCommand',
                                    'offset': _0x2bb666 + (_0xc882e0[11] ? _0xc882e0[11].length : 0) + (_0xc882e0[12] ? _0xc882e0[12].length : 0),
                                    'length': 1 + _0xc882e0[13].length + (_0xc882e0[14] ? 1 + _0xc882e0[14].length : 0),
                                    'unsafe': true
                                });
                            } else {
                                if (_0xc882e0[16]) {
                                    const _0x5a112d = _0xc882e0[16], _0x408e61 = _0x5a112d.split(':'), _0x31d9a8 = _0x408e61.length, _0x51be32 = _0x31d9a8 === 3 ? +_0x408e61[0] : 0, _0xa7cee6 = +_0x408e61[_0x31d9a8 === 3 ? 1 : 0], _0x4d8ba7 = +_0x408e61[_0x31d9a8 - 1];
                                    _0x9af158.push({
                                        '_': 'messageEntityTimestamp',
                                        'offset': _0x2bb666 + (/\D/.test(_0xc882e0[0][0]) ? 1 : 0),
                                        'length': _0x5a112d.length,
                                        'raw': _0x5a112d,
                                        'time': _0x51be32 * 3600 + _0xa7cee6 * 60 + _0x4d8ba7
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
        _0x1d72c5 = _0x1d72c5.substr(_0xc882e0.index + _0xc882e0[0].length);
        _0x16962e += _0xc882e0.index + _0xc882e0[0].length;
        ;
    }
    return _0x9af158;
}
function Jl(_0x1e0ea0) {
    return '#' + encodeURIComponent(_0x1e0ea0);
}
function Xn(_0x54c223) {
    ;
    return _0x54c223.replace(/&/g, '&amp;').replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, _0x1929ad => {
        ;
        const _0x196dc7 = _0x1929ad.charCodeAt(0), _0x38e2b9 = _0x1929ad.charCodeAt(1);
        return '&#' + ((_0x196dc7 - 55296) * 1024 + (_0x38e2b9 - 56320) + 65536) + ';';
    }).replace(/([^\#-~| |!])/g, _0x19a2da => '&#' + _0x19a2da.charCodeAt(0) + ';').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function Xl(_0x1d6024) {
    const _0x314023 = '\u2801\u2802\u2804\u2808\u2810\u2820\u2840\u2880\u2803\u2805\u2806\u2809\u280A\u280C\u2811\u2812\u2814\u2818\u2821\u2822\u2824\u2828\u2830\u2841\u2842\u2844\u2848\u2850\u2860\u2881\u2882\u2884\u2888\u2890\u28A0\u28C0\u2807\u280B\u280D\u280E\u2813\u2815\u2816\u2819\u281A\u281C\u2823\u2825\u2826\u2829\u282A\u282C\u2831\u2832\u2834\u2838\u2843\u2845\u2846\u2849\u284A\u284C\u2851\u2852\u2854\u2858\u2861\u2862\u2864\u2868\u2870\u2883\u2885\u2886\u2889\u288A\u288C\u2891\u2892\u2894\u2898\u28A1\u28A2\u28A4\u28A8\u28B0\u28C1\u28C2\u28C4\u28C8\u28D0\u28E0\u280F\u2817\u281B\u281D\u281E\u2827\u282B\u282D\u282E\u2833\u2835\u2836\u2839\u283A\u283C\u2847\u284B\u284D\u284E\u2853\u2855\u2856\u2859\u285A\u285C\u2863\u2865\u2866\u2869\u286A\u286C\u2871\u2872\u2874\u2878\u2887\u288B\u288D\u288E\u2893\u2895\u2896\u2899\u289A\u289C\u28A3\u28A5\u28A6\u28A9\u28AA\u28AC\u28B1\u28B2\u28B4\u28B8\u28C3\u28C5\u28C6\u28C9\u28CA\u28CC\u28D1\u28D2\u28D4\u28D8\u28E1\u28E2\u28E4\u28E8\u28F0\u281F\u282F\u2837\u283B\u283D\u283E\u284F\u2857\u285B\u285D\u285E\u2867\u286B\u286D\u286E\u2873\u2875\u2876\u2879\u287A\u287C\u288F\u2897\u289B\u289D\u289E\u28A7\u28AB\u28AD\u28AE\u28B3\u28B5\u28B6\u28B9\u28BA\u28BC\u28C7\u28CB\u28CD\u28CE\u28D3\u28D5\u28D6\u28D9\u28DA\u28DC\u28E3\u28E5\u28E6\u28E9\u28EA\u28EC\u28F1\u28F2\u28F4\u28F8\u283F\u285F\u286F\u2877\u287B\u287D\u287E\u289F\u28AF\u28B7\u28BB\u28BD\u28BE\u28CF\u28D7\u28DB\u28DD\u28DE\u28E7\u28EB\u28ED\u28EE\u28F3\u28F5\u28F6\u28F9\u28FA\u28FC\u287F\u28BF\u28DF\u28EF\u28F7\u28FB\u28FD\u28FE\u28FF', _0x4da6cd = _0x314023.length, _0x1ce421 = [];
    for (let _0xbbffeb = 0; _0xbbffeb < _0x1d6024.length; ++_0xbbffeb) {
        _0x1ce421.push(_0x314023[(Math.random() * 1000 | 0) % _0x4da6cd]);
    }
    return _0x1ce421.join('');
}
function Ql(_0x2e0cc8, _0x20b238) {
    const _0x3d21cb = _0x2e0cc8.slice(0, _0x20b238.offset), _0x48d557 = _0x2e0cc8.slice(_0x20b238.offset, _0x20b238.offset + _0x20b238.length), _0x455983 = Xl(_0x48d557), _0x3c9342 = _0x2e0cc8.slice(_0x20b238.offset + _0x20b238.length);
    return _0x2e0cc8 = _0x3d21cb + _0x455983 + _0x3c9342, {
        'text': _0x2e0cc8,
        'entityText': _0x455983
    };
}
const Qn = {};
function Zl(_0x47f37a) {
    const _0x17d9b2 = document.createElement('span');
    _0x17d9b2.classList.add('emoji');
    document.body.appendChild(_0x17d9b2);
    _0x17d9b2.innerText = _0x47f37a;
    ;
    const _0x5d0db8 = _0x17d9b2.offsetWidth;
    _0x17d9b2.innerText = '\u2764️';
    const _0x55c01e = _0x17d9b2.offsetWidth;
    return document.body.removeChild(_0x17d9b2), Math.abs(_0x5d0db8 - _0x55c01e) < 5;
}
Ni && (Qn[''] = true, [[
        '14',
        '\uD83E\uDEF1\uD83C\uDFFB'
    ]].forEach(([_0x138979, _0x548af6]) => {
    Qn[_0x138979] = Zl(_0x548af6);
}));
function hn(_0x13217d, _0x43f3ba) {
    const _0x27d15e = {
        bubbles: true,
        cancelable: true
    };
    ;
    ;
    ;
    const _0x5b32e9 = new Event(_0x43f3ba, _0x27d15e);
    _0x13217d.dispatchEvent(_0x5b32e9);
}
let Zn;
document.addEventListener('mousedown', _0x162582 => {
    ;
    Zn = _0x162582.target;
    Zn?.closest('[cancel-mouse-down]') && _0x162582.preventDefault();
    ;
});
function e0(_0x53b10e) {
    ;
    if (_0x53b10e.isTrusted && _0x53b10e.type === 'click' && _0x53b10e.target !== Zn) {
        return true;
    }
}
const Os = Fe ? 'mousedown' : 'click';
function Ns(_0x4b259c, _0x764767, _0x496dff = {}) {
    const _0x23a603 = _0x496dff.listenerSetter ? _0x496dff.listenerSetter.add(_0x4b259c) : _0x4b259c.addEventListener.bind(_0x4b259c), _0x8af61c = _0x496dff.listenerSetter ? _0x496dff.listenerSetter.removeManual.bind(_0x496dff.listenerSetter, _0x4b259c) : _0x4b259c.removeEventListener.bind(_0x4b259c);
    if (_0x496dff.touchMouseDown = true, _0x496dff.cancelMouseDown && _0x4b259c.setAttribute('cancel-mouse-down', ''), Os === 'click' && !_0x496dff.ignoreMove) {
        const _0x3ef048 = _0x764767;
        _0x764767 = _0x545a28 => {
            e0(_0x545a28) || _0x3ef048(_0x545a28);
        };
    }
    return _0x23a603(Os, _0x764767, _0x496dff), () => _0x8af61c(Os, _0x764767, _0x496dff);
}
function t0(_0x516b3c) {
    hn(_0x516b3c, Os);
}
const V = '\uFEFF';
function s0(_0x477249) {
    const {
            url: _0x37456f,
            onclick: _0x5b9224
        } = on(_0x477249), _0x19884b = document.createElement('a');
    return _0x19884b.href = _0x37456f, _0x5b9224 && _0x19884b.setAttribute('onclick', _0x5b9224 + '(this)'), _0x19884b;
}
function Ys(_0x468206) {
    ;
    return !!_0x468206?.isConnected;
}
function f0(_0x2daf98, _0x51a54e) {
    for (let _0x10a29f = _0x2daf98.length, _0x359e18 = _0x10a29f - 1; _0x359e18 >= 0; --_0x359e18) {
        _0x51a54e(_0x2daf98[_0x359e18], _0x359e18, _0x2daf98);
    }
}
function hr(_0x52dd8d) {
    ;
    try {
        const _0x3804a0 = _0x52dd8d.play();
        _0x3804a0 instanceof Promise && _0x3804a0.catch(ve);
    } catch {
    }
}
class n0 {
    constructor() {
        ;
        this.observer = new IntersectionObserver(_0x30ae1c => {
            ;
            for (const _0x78ec6 of _0x30ae1c) {
                const _0x2d794c = _0x78ec6.target;
                for (const _0x2ce84f in this.byGroups) {
                    if (this.intersectionLockedGroups[_0x2ce84f]) {
                        continue;
                    }
                    const _0x592fe2 = this.byGroups[_0x2ce84f].find(_0x1f05e6 => _0x1f05e6.el === _0x2d794c);
                    if (_0x592fe2) {
                        if (_0x78ec6.isIntersecting) {
                            this.visible.add(_0x592fe2);
                            this.checkAnimation(_0x592fe2, false);
                            ;
                        } else {
                            this.visible.delete(_0x592fe2);
                            this.checkAnimation(_0x592fe2, true);
                            ;
                            const _0x3d3ce6 = _0x592fe2.animation;
                            _0x592fe2.type === 'lottie' && _0x3d3ce6.clearCache();
                        }
                        break;
                    }
                }
            }
        });
        this.visible = new Set();
        this.overrideIdleGroups = new Set();
        this.byGroups = {};
        this.byPlayer = new Map();
        this.lockedGroups = {};
        this.onlyOnePlayableGroup = '';
        this.intersectionLockedGroups = {};
        this.videosLocked = false;
        as.addEventListener('change', _0x2b2754 => {
            ;
            this.checkAnimations2(_0x2b2754);
        });
        ;
    }
    ['toggleMediaPause'](_0x143e68) {
        ;
        _0x143e68 ? this.videosLocked && (this.videosLocked = false, this.checkAnimations2()) : (this.videosLocked = true, this.checkAnimations2());
    }
    ['setOverrideIdleGroup'](_0x2f13be, _0x2fc3df) {
        ;
        _0x2fc3df ? this.overrideIdleGroups.add(_0x2f13be) : this.overrideIdleGroups.delete(_0x2f13be);
    }
    ['getAnimations'](_0x43f42d) {
        const _0x209b52 = [];
        for (const _0x37aa94 in this.byGroups)
            for (const _0x1ad8f6 of this.byGroups[_0x37aa94])
                _0x1ad8f6.el === _0x43f42d && _0x209b52.push(_0x1ad8f6);
        return _0x209b52;
    }
    ['removeAnimation'](_0x57bda2) {
        const {
            el: _0x4ddd5b,
            animation: _0x326ed3
        } = _0x57bda2;
        _0x57bda2.controlled !== true && _0x57bda2.type !== 'video' && _0x326ed3.remove();
        const _0x361e23 = this.byGroups[_0x57bda2.group];
        _0x361e23 && (xe(_0x361e23, _0x57bda2), _0x361e23.length || delete this.byGroups[_0x57bda2.group]);
        this.observer.unobserve(_0x4ddd5b);
        this.visible.delete(_0x57bda2);
        this.byPlayer.delete(_0x326ed3);
        ;
    }
    ['removeAnimationByPlayer'](_0x29bbe5) {
        const _0x401461 = this.byPlayer.get(_0x29bbe5);
        _0x401461 && this.removeAnimation(_0x401461);
    }
    ['addAnimation'](_0x2659bd) {
        ;
        var _0x55a68a;
        const {
            animation: _0x51d078,
            group: _0x452766 = '',
            observeElement: _0x14b832,
            controlled: _0x22a4b0,
            liteModeKey: _0x461e6c,
            type: _0x38adaf,
            locked: _0x1e0d36
        } = _0x2659bd;
        if (_0x452766 === 'none' || this.byPlayer.has(_0x51d078)) {
            return;
        }
        const _0x2548fd = {
            el: _0x14b832,
            animation: _0x51d078,
            group: _0x452766,
            controlled: _0x22a4b0,
            liteModeKey: _0x461e6c,
            type: _0x38adaf,
            locked: _0x1e0d36
        };
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        const _0x2b9d2b = _0x2548fd;
        _0x22a4b0 && typeof _0x22a4b0 != 'boolean' && _0x22a4b0.onClean(() => {
            ;
            this.removeAnimationByPlayer(_0x51d078);
        });
        _0x2b9d2b.type === 'lottie' && !I.settings.stickers.loop && _0x51d078.loop && (_0x51d078.loop = I.settings.stickers.loop);
        ((_0x55a68a = this.byGroups)[_0x452766] ?? (_0x55a68a[_0x452766] = [])).push(_0x2b9d2b);
        this.observer.observe(_0x2b9d2b.el);
        this.byPlayer.set(_0x51d078, _0x2b9d2b);
        ;
    }
    ['checkAnimations'](_0x9b3e51, _0xdbc6a1, _0x361b48, _0x4020aa) {
        ;
        if (_0xdbc6a1 !== void 0 && !this.byGroups[_0xdbc6a1]) {
            return;
        }
        const _0x2c7fee = _0xdbc6a1 !== void 0 ? [_0xdbc6a1] : Object.keys(this.byGroups);
        for (const _0x37374f of _0x2c7fee) {
            if (_0x4020aa && this.intersectionLockedGroups[_0x37374f]) {
                continue;
            }
            const _0x4dcfe8 = this.byGroups[_0x37374f];
            f0(_0x4dcfe8, _0x29a8ec => {
                ;
                this.checkAnimation(_0x29a8ec, _0x9b3e51, _0x361b48);
            });
        }
    }
    ['checkAnimations2'](_0x7037ef) {
        ;
        this.checkAnimations(_0x7037ef, void 0, void 0, true);
    }
    ['checkAnimation'](_0x1d6914, _0x53da3a, _0x5756ed) {
        const {
            el: _0x3f1f7d,
            animation: _0x2b1aa3,
            group: _0x457d55,
            locked: _0x3b3ce2
        } = _0x1d6914;
        if (!_0x3b3ce2) {
            if (_0x5756ed || !this.lockedGroups[_0x457d55] && !Ys(_0x3f1f7d)) {
                (!_0x1d6914.controlled || _0x5756ed) && this.removeAnimation(_0x1d6914);
                return;
            }
            _0x53da3a || this.onlyOnePlayableGroup && this.onlyOnePlayableGroup !== _0x457d55 || _0x1d6914.type === 'video' && this.videosLocked ? _0x2b1aa3.paused || _0x2b1aa3.pause() : _0x2b1aa3.paused && this.visible.has(_0x1d6914) && _0x2b1aa3.autoplay && (!this.onlyOnePlayableGroup || this.onlyOnePlayableGroup === _0x457d55) && (!as.isIdle || this.overrideIdleGroups.has(_0x1d6914.group)) && hr(_0x2b1aa3);
        }
    }
    ['getOnlyOnePlayableGroup']() {
        ;
        return this.onlyOnePlayableGroup;
    }
    ['setOnlyOnePlayableGroup'](_0x40f7d5 = '') {
        ;
        this.onlyOnePlayableGroup = _0x40f7d5;
    }
    ['lockGroup'](_0xe61969) {
        ;
        this.lockedGroups[_0xe61969] = true;
    }
    ['unlockGroup'](_0x493033) {
        ;
        delete this.lockedGroups[_0x493033];
        this.checkAnimations(void 0, _0x493033);
        ;
    }
    ['refreshGroup'](_0x2f0921) {
        const _0x4a7853 = this.byGroups[_0x2f0921];
        _0x4a7853?.length && (_0x4a7853.forEach(_0x53f4bf => {
            ;
            this.observer.unobserve(_0x53f4bf.el);
        }), Oe(() => {
            ;
            _0x4a7853.forEach(_0x44e4c2 => {
                ;
                this.observer.observe(_0x44e4c2.el);
            });
        }));
    }
    ['lockIntersectionGroup'](_0xdbf65) {
        ;
        this.intersectionLockedGroups[_0xdbf65] = true;
    }
    ['unlockIntersectionGroup'](_0x114e3b) {
        ;
        delete this.intersectionLockedGroups[_0x114e3b];
        this.refreshGroup(_0x114e3b);
        ;
    }
    ['toggleIntersectionGroup'](_0x4681b8, _0x4634e7) {
        ;
        _0x4634e7 ? this.lockIntersectionGroup(_0x4681b8) : this.unlockIntersectionGroup(_0x4681b8);
    }
    ['setAutoplay'](_0x131cfa, _0x256a31) {
        ;
        let _0x1bcb67 = false;
        return this.byPlayer.forEach((_0x3757d9, _0x368908) => {
            ;
            if (_0x3757d9.liteModeKey === _0x256a31) {
                _0x1bcb67 = true;
                _0x368908.autoplay = _0x131cfa ? _0x368908['_autoplay'] : false;
                _0x368908.loop = _0x131cfa ? I.settings.stickers.loop && _0x368908['_loop'] : false;
            }
        }), _0x1bcb67;
    }
    ['setLoop'](_0xc39675) {
        ;
        let _0x124daa = false;
        return this.byPlayer.forEach((_0x55e4bf, _0x874c74) => {
            ;
            _0x874c74['_loop'] && _0x874c74.loop !== _0xc39675 && (_0x55e4bf.type === 'lottie' || _0x55e4bf.type === 'video') && (_0x124daa = true, _0x874c74.loop = _0xc39675, _0x874c74.autoplay = _0x874c74['_autoplay']);
        }), _0x124daa;
    }
    ['toggleItemLock'](_0x40e5dc, _0x101899) {
        _0x40e5dc.locked = _0x101899;
    }
}
const pe = new n0();
N && (N.animationIntersector = pe);
class i0 {
    constructor(_0x30d22a, _0x3e1998) {
        ;
        this.items = new Map();
        this.locked = false;
        this.observer = new IntersectionObserver(_0x488b59 => {
            ;
            if (this.locked) {
                return;
            }
            const _0x2669d2 = [];
            _0x488b59.forEach((_0xde789b, _0x1cfa82) => {
                const _0x283c71 = _0xde789b.target;
                if (this.items.get(_0x283c71) === _0xde789b.isIntersecting) {
                    return;
                }
                this.items.set(_0x283c71, _0xde789b.isIntersecting);
                const _0x177d1c = {
                    target: _0x283c71,
                    visible: _0xde789b.isIntersecting,
                    entry: _0xde789b,
                    index: _0x1cfa82
                };
                ;
                ;
                ;
                ;
                ;
                const _0x522217 = _0x177d1c;
                _0x2669d2.push(_0x522217);
            });
            _0x2669d2.forEach(_0x2365d0 => {
                _0x30d22a(_0x2365d0);
            });
            ;
        }, _0x3e1998);
        ;
    }
    ['getVisible']() {
        const _0x54dc57 = [];
        return this.items.forEach((_0x5531ac, _0x322e37) => {
            ;
            _0x5531ac && _0x54dc57.push(_0x322e37);
        }), _0x54dc57;
    }
    ['clearVisible']() {
        const _0x283c26 = this.getVisible();
        for (const _0x58d6aa of _0x283c26)
            this.items.set(_0x58d6aa, false);
    }
    ['isVisible'](_0x3d67b6) {
        ;
        return !!this.items.get(_0x3d67b6);
    }
    ['disconnect']() {
        ;
        this.observer.disconnect();
        this.items.clear();
        ;
    }
    ['refresh']() {
        ;
        this.observer.disconnect();
        const _0x3c20e5 = [...this.items.keys()];
        for (const _0x41efef of _0x3c20e5)
            this.observer.observe(_0x41efef);
    }
    ['refreshVisible']() {
        const _0x5cc1d3 = this.getVisible();
        for (const _0x15209d of _0x5cc1d3)
            this.observer.unobserve(_0x15209d);
        for (const _0x536218 of _0x5cc1d3)
            this.observer.observe(_0x536218);
    }
    ['observe'](_0x54179a) {
        ;
        this.items.set(_0x54179a, false);
        this.observer.observe(_0x54179a);
        ;
    }
    ['unobserve'](_0x360a77) {
        ;
        this.observer.unobserve(_0x360a77);
        this.items.delete(_0x360a77);
        ;
    }
    ['unlock']() {
        this.locked = false;
    }
    ['unlockAndRefresh']() {
        ;
        this.unlock();
        this.refresh();
        ;
    }
    ['lock']() {
        ;
        this.locked = true;
    }
}
function Ho(_0xe7c083, _0x2618e7) {
    const _0x23e224 = [];
    let _0x4f990a = -1;
    for (; (_0x4f990a = _0xe7c083.findIndex(_0x2618e7)) !== -1;) {
        _0x23e224.push(_0xe7c083.splice(_0x4f990a, 1)[0]);
    }
    return _0x23e224;
}
function r0(_0x3d5a93, _0x1012ab) {
    const _0x4907b0 = _0x3d5a93.findIndex(_0x1012ab);
    return _0x4907b0 !== -1 ? _0x3d5a93.splice(_0x4907b0, 1)[0] : void 0;
}
function Wo(_0x1ef9e3, _0x1b1724, _0x352252 = true) {
    ;
    let _0x5ad0fb = null, _0x480358, _0x1e5958;
    const _0x387cf8 = () => {
            clearInterval(_0x5ad0fb);
            _0x5ad0fb = null;
            ;
        }, _0x32b831 = (..._0x4d0d2b) => {
            _0x480358 = true;
            _0x1e5958 = _0x4d0d2b;
            _0x5ad0fb || (_0x352252 && (_0x480358 = false, _0x1ef9e3(..._0x1e5958)), _0x5ad0fb = setInterval(() => {
                if (!_0x480358) {
                    _0x387cf8();
                    return;
                }
                _0x480358 = false;
                _0x1ef9e3(..._0x1e5958);
                ;
            }, _0x1b1724));
            ;
        };
    return _0x32b831.clear = _0x387cf8, _0x32b831;
}
const a0 = 8, o0 = new Set([
        'NO_ENTRY_FOUND',
        'STORAGE_OFFLINE',
        'MIDDLEWARE',
        'NO_AUTO_DOWNLOAD'
    ]);
class c0 {
    constructor(_0x5df223 = a0) {
        ;
        this.parallelLimit = _0x5df223;
        this.queueId = 0;
        this.queue = [];
        this.inProcess = new Set();
        this.lockPromise = null;
        this.unlockResolve = null;
        this.log = Q('LL', ef.Error);
        this.processQueue = Wo(() => this['_processQueue'](), 8, false);
        ;
    }
    ['clear']() {
        ;
        this.inProcess.clear();
        this.queue.length = 0;
        ;
    }
    ['lock']() {
        ;
        this.lockPromise || (this.lockPromise = new Promise((_0x53da6a, _0x2eb2a9) => {
            ;
            this.unlockResolve = _0x53da6a;
        }));
    }
    ['unlock']() {
        ;
        this.unlockResolve && (this.unlockResolve(), this.unlockResolve = this.lockPromise = null, this.processQueue());
    }
    async ['processItem'](_0x3458d6) {
        ;
        if (!this.lockPromise) {
            this.inProcess.add(_0x3458d6);
            try {
                await this.loadItem(_0x3458d6);
            } catch (_0x5948a4) {
                o0.has(_0x5948a4?.type) || this.log.error('loadMediaQueue error:', _0x5948a4);
            }
            this.inProcess.delete(_0x3458d6);
            this.processQueue();
            ;
        }
    }
    ['loadItem'](_0x3659f5) {
        ;
        return _0x3659f5.load();
    }
    ['getItem']() {
        ;
        return this.queue.shift();
    }
    ['addElement'](_0x410505, _0x46f35d) {
        ;
        this.queue[_0x410505](_0x46f35d);
        this.processQueue();
        ;
    }
    ['_processQueue'](_0x5e757d) {
        ;
        if (!(!this.queue.length || this.lockPromise || this.parallelLimit > 0 && this.inProcess.size >= this.parallelLimit)) {
            do {
                if (_0x5e757d ? xe(this.queue, _0x5e757d) : _0x5e757d = this.getItem(), _0x5e757d) {
                    this.processItem(_0x5e757d);
                } else {
                    break;
                }
                _0x5e757d = null;
            } while (this.inProcess.size < this.parallelLimit && this.queue.length);
        }
    }
    ['push'](_0x1308eb) {
        ;
        this.addElement('push', _0x1308eb);
    }
    ['unshift'](_0x30a54f) {
        ;
        this.addElement('unshift', _0x30a54f);
    }
}
class d0 extends c0 {
    constructor(_0x46faf7) {
        ;
        super(_0x46faf7);
        this.queue = [];
        this.inProcess = new Set();
        ;
    }
    ['lock']() {
        ;
        super.lock();
        this.intersector.lock();
        ;
    }
    ['unlock']() {
        ;
        super.unlock();
        this.intersector.unlock();
        ;
    }
    ['unlockAndRefresh']() {
        ;
        super.unlock();
        this.intersector.unlockAndRefresh();
        ;
    }
    ['clear']() {
        ;
        super.clear();
        this.intersector.disconnect();
        ;
    }
    ['refresh']() {
        ;
        this.intersector.refresh();
    }
    ['loadItem'](_0x35a101) {
        ;
        return _0x35a101.load(_0x35a101.div);
    }
    ['addElement'](_0x42083a, _0x465b2c) {
        ;
        if (this.queue.find(_0x4b99f2 => _0x4b99f2.div === _0x465b2c.div && _0x4b99f2.load === _0x465b2c.load)) {
            return false;
        }
        for (const _0x38aea8 of this.inProcess)
            if (_0x38aea8.div === _0x465b2c.div && _0x38aea8.load === _0x465b2c.load) {
                return false;
            }
        return this.queue[_0x42083a](_0x465b2c), true;
    }
    ['setProcessQueueTimeout']() {
        ;
        this.intersectorTimeout ?? (this.intersectorTimeout = window.setTimeout(() => {
            ;
            this.intersectorTimeout = void 0;
            this.processQueue();
            ;
        }, 0));
    }
    ['push'](_0x502d57) {
        ;
        super.push(_0x502d57);
    }
    ['unshift'](_0xa7d235) {
        ;
        super.unshift(_0xa7d235);
    }
    ['delete'](_0x2ed216) {
        ;
        Ho(this.queue, _0x38fa0f => _0x38fa0f.div === _0x2ed216.div);
        this.unobserve(_0x2ed216);
        ;
    }
    ['observe'](_0x3d24be) {
        ;
        this.intersector.observe(_0x3d24be.div);
    }
    ['unobserve'](_0x5bf485) {
        ;
        this.intersector.unobserve(_0x5bf485.div);
    }
}
const lt = new je(), ei = 'start', ti = 'end';
let Jf = false, nt = q(), Ff = 0;
nt.resolve();
function Vo(_0x2c756d, _0x2cbac5) {
    ;
    Jf || (nt = q(), lt.dispatchEvent(ei), Jf = true);
    ++Ff;
    ;
    const _0x55e81c = [
        _0x2cbac5 !== void 0 ? ft(_0x2cbac5) : void 0,
        _0x2c756d.finally(() => {
        })
    ].filter(Boolean);
    performance.now();
    const _0x3640b3 = nt;
    return Promise.race(_0x55e81c).then(() => {
        ;
        nt !== _0x3640b3 || nt.isFulfilled || (--Ff, Ff <= 0 && zo());
    }), nt;
}
window.dispatchHeavyAnimationEvent = Vo;
function zo() {
    ;
    nt.isFulfilled || (Jf = false, Ff = 0, lt.dispatchEvent(ti), nt.resolve());
}
function s3() {
    zo();
}
function Go() {
    return nt;
}
function qo(_0x198c56, _0x23ac59, _0x44c2c9) {
    ;
    Jf && _0x198c56();
    const _0xb546af = _0x44c2c9 ? _0x44c2c9.add(lt) : lt.addEventListener.bind(lt), _0x5062e4 = _0x44c2c9 ? _0x44c2c9.removeManual.bind(_0x44c2c9, lt) : lt.removeEventListener.bind(lt);
    return _0xb546af(ei, _0x198c56), _0xb546af(ti, _0x23ac59), () => {
        ;
        _0x5062e4(ti, _0x23ac59);
        _0x5062e4(ei, _0x198c56);
        ;
    };
}
class l0 extends d0 {
    constructor(_0x28da61, _0x54e96b) {
        ;
        super(_0x28da61);
        this.onVisibilityChange = ({
            target: _0x34a349,
            visible: _0x5769b6
        }) => {
            ;
            Ho(this.queue, _0x247e39 => _0x247e39.div === _0x34a349).forEach(_0x276210 => {
                ;
                _0x5769b6 && (_0x276210.wasSeen = true);
                _0x276210.visible = _0x5769b6;
                ;
                const _0x34394a = this.queue.findIndex(_0x51dca8 => !_0x51dca8.visible);
                this.queue.splice(Math.max(0, _0x34394a), 0, _0x276210);
            });
            this.setProcessQueueTimeout();
            ;
        };
        this.intersector = new i0(this.onVisibilityChange);
        !_0x54e96b && qo(() => {
            ;
            this.lock();
        }, () => {
            ;
            this.unlockAndRefresh();
        });
        ;
    }
    ['getItem']() {
        ;
        return r0(this.queue, _0x41e3b3 => _0x41e3b3.wasSeen);
    }
    async ['processItem'](_0x2c63b6) {
        ;
        await super.processItem(_0x2c63b6);
        this.intersector.unobserve(_0x2c63b6.div);
        ;
    }
    ['addElement'](_0x485dc2, _0x167f53) {
        ;
        return super.addElement(_0x485dc2, _0x167f53) ? (this.observe(_0x167f53), _0x167f53.wasSeen ?? (_0x167f53.wasSeen = false), true) : false;
    }
    ['setAllSeen']() {
        ;
        this.queue.forEach(_0x1c5dfd => {
            ;
            _0x1c5dfd.wasSeen = true;
        });
        this.setProcessQueueTimeout();
        ;
    }
}
function u0(_0x33dbb0) {
    const _0x449af = 'AACAAAAHAAALMAAAQASTAVAAAZaacaaaahaaalmaaaqastava.az0123456789-,';
    let _0x243929 = 'M';
    for (let _0x5d82bd = 0, _0x1d6d87 = _0x33dbb0.length; _0x5d82bd < _0x1d6d87; ++_0x5d82bd) {
        const _0x2680a9 = _0x33dbb0[_0x5d82bd];
        _0x2680a9 >= 192 ? _0x243929 += _0x449af[_0x2680a9 - 128 - 64] : (_0x2680a9 >= 128 ? _0x243929 += ',' : _0x2680a9 >= 64 && (_0x243929 += '-'), _0x243929 += '' + (_0x2680a9 & 63));
    }
    return _0x243929 += 'z', _0x243929;
}
function h0(_0x213857, _0x75d826 = 512, _0x9a5277 = 512) {
    const _0x1d3c48 = u0(_0x213857), _0x2a733b = 'http://www.w3.org/2000/svg', _0x4802d0 = document.createElementNS(_0x2a733b, 'svg');
    _0x4802d0.setAttributeNS(null, 'viewBox', '0 0 ' + _0x75d826 + ' ' + _0x9a5277);
    const _0x19a9f7 = document.createElementNS(_0x2a733b, 'path');
    return _0x19a9f7.setAttributeNS(null, 'd', _0x1d3c48), _0x4802d0.append(_0x19a9f7), {
        'svg': _0x4802d0,
        'path': _0x19a9f7
    };
}
let Vt, As;
function m0(_0x441fa0) {
    ;
    Vt || (Vt = document.createElement('canvas'), As = Vt.getContext('2d'));
    const _0x42b0e1 = _0x441fa0.getContext('2d'), _0x3cc501 = 20 * (_0x441fa0.dpr ?? 1), _0x4486b0 = _0x3cc501, _0x58ca2e = _0x3cc501, _0x5a25ec = (_0x441fa0.width - _0x4486b0) / 2, _0x40ac25 = _0x441fa0.height - _0x58ca2e - 0, _0x951c1b = _0x42b0e1.getImageData(_0x5a25ec, _0x40ac25, _0x4486b0, _0x58ca2e).data;
    let _0x2fd0f0 = 0, _0x4ff336 = 0, _0x21267d = 0, _0x556aa0 = 0;
    for (let _0x3d71c9 = 0; _0x3d71c9 < _0x951c1b.length; _0x3d71c9 += 4) {
        _0x2fd0f0 += _0x951c1b[_0x3d71c9];
        _0x4ff336 += _0x951c1b[_0x3d71c9 + 1];
        _0x21267d += _0x951c1b[_0x3d71c9 + 2];
        _0x556aa0 += _0x951c1b[_0x3d71c9 + 3];
        ;
    }
    Vt.width = Vt.height = _0x3cc501;
    const _0x2f0432 = new Uint8ClampedArray([
            _0x2fd0f0 * 255 / _0x556aa0,
            _0x4ff336 * 255 / _0x556aa0,
            _0x21267d * 255 / _0x556aa0,
            255
        ]), _0x351468 = 'rgba(' + _0x2f0432[0] + ', ' + _0x2f0432[1] + ', ' + _0x2f0432[2] + ', ' + _0x2f0432[3] + ')';
    return As.fillStyle = _0x351468, As.fillRect(0, 0, _0x3cc501, _0x3cc501), As.fillStyle = 'rgba(112, 117, 121, 0.3)', As.fillRect(0, 0, _0x3cc501, _0x3cc501), Vt.toDataURL('image/jpeg');
}
const g0 = 'application/x-mpegurl';
Q('HLS');
Q('SW-HLS');
;
function f3(_0x5819b7) {
    ;
    return _0x5819b7?.mime_type === g0;
}
const p0 = new WeakMap();
async function b0({
    video: _0x341add,
    src: _0xc6ced5,
    middleware: _0x26fd6c
}) {
    const _0x5abf7d = {
        debug: qa,
        startLevel: 0,
        testBandwidth: false,
        backBufferLength: 30,
        maxBufferLength: 60,
        maxMaxBufferLength: 60,
        maxFragLookUpTolerance: 0.001,
        maxBufferHole: 1,
        nudgeMaxRetry: 10000
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    const {default: _0x4f6d11} = await ze(() => import('./cnbasrdnz9bu.js'), [], import.meta.url), _0x3cde31 = new _0x4f6d11(_0x5abf7d);
    p0.set(_0x341add, _0x3cde31);
    _0x3cde31.loadSource(_0xc6ced5);
    _0x3cde31.attachMedia(_0x341add);
    _0x26fd6c?.onDestroy(() => {
        _0x3cde31.destroy();
    });
    ;
}
function Xr(_0x2e4ac4, _0x5b7893) {
    ;
    _0x2e4ac4.includes('stream/') && re.serviceMessagePort.invokeVoid('toggleStreamInUse', {
        'url': _0x2e4ac4,
        'inUse': _0x5b7893,
        'accountNumber': Ve()
    });
}
function y0({
    pip: _0x3ad36d,
    middleware: _0xaddcae
}) {
    const _0x563303 = document.createElement('video');
    _0x3ad36d || (_0x563303.disablePictureInPicture = true);
    _0x563303.setAttribute('playsinline', 'true');
    _0xaddcae?.onDestroy(async () => {
        ;
        await Go();
        _0x563303.src = '';
        _0x563303.load();
        ;
    });
    ;
    let _0x32c0fc = _0x563303.src;
    return Object.defineProperty(_0x563303, 'src', {
        'get': () => _0x32c0fc,
        'set': _0x590fb8 => {
            ;
            Xr(_0x32c0fc, false);
            Xr(_0x590fb8, true);
            _0x32c0fc = _0x590fb8;
            _0x590fb8.startsWith('hls/') ? b0({
                'video': _0x563303,
                'src': _0x590fb8,
                'middleware': _0xaddcae
            }) : _0x563303.setAttribute('src', _0x590fb8);
            ;
        }
    }), _0x563303;
}
const v0 = 'DECODER_ERROR_NOT_SUPPORTED: Audio configuration specified 2 channels, but FFmpeg thinks the file contains 1 channels';
function E0(_0x1f4e9e) {
    ;
    return _0x1f4e9e.code === 4 && _0x1f4e9e.message === v0;
}
function w0(_0x192cfe) {
    ;
    try {
        const _0x19e9c7 = _0x192cfe.target, _0x26d748 = _0x19e9c7.error;
        if (!_0x26d748 || _0x26d748.message.includes('URL safety check')) {
            return true;
        }
        const _0x318ace = E0(_0x26d748);
        if (_0x318ace && !_0x19e9c7.triedFixingChromeBug) {
            let _0x39989f;
            const _0x23c22c = _0x19e9c7.src;
            return _0x23c22c.includes('stream/') ? _0x39989f = _0x23c22c + '?_crbug1250841' : _0x39989f = I.managers.appDocsManager.fixChromiumMp4(_0x23c22c), at(_0x39989f, _0x21e575 => {
                ;
                _0x19e9c7.triedFixingChromeBug = true;
                if (_0x19e9c7.src !== _0x21e575) {
                    _0x19e9c7.src = _0x21e575;
                    _0x19e9c7.load();
                }
                ;
            }), true;
        }
    } catch {
    }
    return false;
}
function $o(_0x4651d8, _0x2ba367 = _0x4651d8.HAVE_METADATA, _0x51a8be) {
    ;
    return new Promise((_0x394560, _0x2717e5) => {
        ;
        if (_0x4651d8.readyState >= _0x2ba367) {
            _0x394560();
            return;
        }
        const _0x464447 = ps && !_0x51a8be ? 'loadeddata' : 'canplay', _0x38689f = 'error', _0x2eef1f = () => {
                ;
                _0x4651d8.removeEventListener(_0x38689f, _0x280f44);
                _0x394560();
                ;
            }, _0x280f44 = _0x4350a0 => {
                ;
                w0(_0x4350a0) || (_0x4651d8.removeEventListener(_0x464447, _0x2eef1f), _0x4651d8.removeEventListener(_0x38689f, _0x280f44), _0x2717e5(_0x4651d8.error));
            }, _0x523634 = { once: true };
        ;
        _0x4651d8.addEventListener(_0x464447, _0x2eef1f, _0x523634);
        _0x4651d8.addEventListener(_0x38689f, _0x280f44);
        ;
        ;
    });
}
const Qr = {}, Zr = (_0x24cf29, _0x27f575) => {
        ;
        _0x24cf29 instanceof HTMLImageElement || _0x24cf29 instanceof HTMLVideoElement ? _0x24cf29.src = _0x27f575 : _0x24cf29 instanceof SVGImageElement ? _0x24cf29.setAttributeNS(null, 'href', _0x27f575) : _0x24cf29.style.backgroundImage = 'url(' + _0x27f575 + ')';
    };
function Pf(_0xca69a0, _0x333464, _0x2edce3, _0x20af1c, _0x45100e) {
    ;
    if (_0x45100e && (_0x20af1c = false), _0x20af1c ?? (_0x20af1c = _0x45100e === void 0), !_0x333464) {
        _0x2edce3?.();
        return;
    }
    const _0x4568d3 = _0xca69a0 instanceof HTMLVideoElement;
    if (Qr[_0x333464] && _0x20af1c || _0x4568d3) {
        if (_0xca69a0 && Zr(_0xca69a0, _0x333464), _0x2edce3) {
            if (_0x4568d3) {
                return $o(_0xca69a0).then(_0x2edce3);
            }
            _0x2edce3?.();
        }
    } else {
        const _0x18de61 = _0xca69a0 instanceof HTMLImageElement, _0x6da7c0 = _0x18de61 ? _0xca69a0 : new Image(), _0x50509b = () => {
                ;
                !_0x18de61 && _0xca69a0 && Zr(_0xca69a0, _0x333464);
                Qr[_0x333464] = true;
                _0x45100e?.(_0x6da7c0);
                _0x2edce3?.();
                ;
            }, _0xb1bb54 = _0x5a7318 => {
                ;
                _0x5a7318.message.includes('cannot be decoded');
                _0x2edce3?.();
                ;
            };
        return _0x6da7c0.decoding = 'async', _0x6da7c0.src = _0x333464, _0x6da7c0.decode().then(_0x50509b, _0xb1bb54);
    }
}
function Yo(_0xcd5134, _0x18bdf3, _0x12181a, _0x4bc2cd) {
    return new Promise(_0x4d6fcf => {
        Pf(_0xcd5134, _0x18bdf3, _0x4d6fcf, _0x12181a, _0x4bc2cd);
    });
}
function Ko(_0x24682b) {
    const _0x2a90df = _0x24682b.length, _0x1f3ac5 = new Uint8Array(Math.ceil(_0x2a90df / 2));
    let _0x826d4e = 0;
    _0x2a90df % 2 && (_0x1f3ac5[_0x826d4e++] = parseInt(_0x24682b.charAt(0), 16));
    for (let _0x11b850 = _0x826d4e; _0x11b850 < _0x2a90df; _0x11b850 += 2) {
        _0x1f3ac5[_0x826d4e++] = parseInt(_0x24682b.substr(_0x11b850, 2), 16);
    }
    return _0x1f3ac5;
}
function D0(_0x34b569, _0x4f5d98 = 'image/jpeg') {
    ;
    return 'data:' + _0x4f5d98 + ';base64,' + btoa(String.fromCharCode(..._0x34b569));
}
const S0 = 'ffd8ffe000104a46494600010100000100010000ffdb004300281c1e231e19282321232d2b28303c64413c37373c7b585d4964918099968f808c8aa0b4e6c3a0aadaad8a8cc8ffcbdaeef5ffffff9bc1fffffffaffe6fdfff8ffdb0043012b2d2d3c353c76414176f8a58ca5f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8ffc00011080000000003012200021101031101ffc4001f0000010501010101010100000000000000000102030405060708090a0bffc400b5100002010303020403050504040000017d01020300041105122131410613516107227114328191a1082342b1c11552d1f02433627282090a161718191a25262728292a3435363738393a434445464748494a535455565758595a636465666768696a737475767778797a838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae1e2e3e4e5e6e7e8e9eaf1f2f3f4f5f6f7f8f9faffc4001f0100030101010101010101010000000000000102030405060708090a0bffc400b51100020102040403040705040400010277000102031104052131061241510761711322328108144291a1b1c109233352f0156272d10a162434e125f11718191a262728292a35363738393a434445464748494a535455565758595a636465666768696a737475767778797a82838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae2e3e4e5e6e7e8e9eaf2f3f4f5f6f7f8f9faffda000c03010002110311003f00', A0 = Ko(S0), C0 = Ko('ffd9');
function n3(_0x61d66e) {
    const _0x132126 = 'base64,', _0x3741d6 = _0x61d66e.slice(_0x61d66e.indexOf(_0x132126) + _0x132126.length), _0x5cb688 = [...atob(_0x3741d6)].map(_0x1a6726 => _0x1a6726.charCodeAt(0));
    return new Uint8Array(_0x5cb688);
}
function k0(_0x378b36, _0x2aca2a = false) {
    ;
    let _0x2324ce;
    !_0x2aca2a && _0x378b36[0] === 1 ? (_0x2324ce = new Uint8Array(A0.concat(Array.from(_0x378b36.slice(3)), C0)), _0x2324ce[164] = _0x378b36[1], _0x2324ce[166] = _0x378b36[2]) : _0x2324ce = ho(_0x378b36);
    let _0x3350f8;
    return _0x2aca2a ? _0x3350f8 = be ? 'image/png' : 'image/webp' : _0x3350f8 = 'image/jpeg', D0(_0x2324ce, _0x3350f8);
}
function Jo(_0x1fb1ed, _0x1c4443, _0x2dab06 = false) {
    ;
    return k0(_0x1c4443.bytes, _0x2dab06);
}
const si = [];
let ea = false;
function F0(_0x27344c, _0x5a2c04 = 'push') {
    ;
    if (!_0x27344c.items.length) {
        return Promise.resolve([]);
    }
    const _0x200610 = _0x27344c.promise = q();
    return si[_0x5a2c04](_0x27344c), Xo(), _0x200610;
}
function Xo() {
    ;
    if (!ea) {
        const _0x18517e = si.shift();
        P0(_0x18517e).finally(() => {
            ;
            ea = false;
            si.length && Xo();
            ;
        });
    }
}
function P0(_0x46824f) {
    ;
    if (!_0x46824f.items.length) {
        return _0x46824f.promise.resolve([]), Promise.resolve([]);
    }
    const _0x450bce = _0x46824f.items.slice(), _0x20d505 = [];
    return new Promise((_0x564dea, _0xdb8829) => {
        ;
        const _0x236807 = async () => {
            const _0x414ff8 = performance.now();
            do {
                await Go();
                const _0x215864 = _0x46824f.process.apply(_0x46824f.context, _0x450bce.shift());
                let _0x2856c1;
                if (_0x215864 instanceof Promise) {
                    try {
                        _0x2856c1 = await _0x215864;
                    } catch (_0x3c3afc) {
                        _0xdb8829(_0x3c3afc);
                        return;
                    }
                } else {
                    _0x2856c1 = _0x215864;
                }
                _0x20d505.push(_0x2856c1);
            } while (_0x450bce.length > 0 && performance.now() - _0x414ff8 < 6);
            _0x450bce.length > 0 ? Oe(_0x236807) : _0x564dea(_0x20d505);
        };
        Oe(_0x236807);
    }).then(_0x46824f.promise.resolve.bind(_0x46824f.promise), _0x46824f.promise.reject.bind(_0x46824f.promise));
}
const _0 = 2, T0 = 2;
let fi, Qo;
Xi ? fi = Promise.resolve() : fi = ze(() => import('./w99p0wjleucv.js'), [], import.meta.url).then(_0x278e7f => {
    ;
    Qo = _0x278e7f.default;
});
function L0(_0x19a6f7, _0x25daff, _0x862499, _0xf6fff0 = document.createElement('canvas')) {
    ;
    _0xf6fff0.width = _0x19a6f7.width;
    _0xf6fff0.height = _0x19a6f7.height;
    ;
    ;
    ;
    const _0x47c549 = _0xf6fff0.getContext('2d', _0x10b0cd);
    return Xi ? (_0x47c549.filter = 'blur(' + _0x25daff + 'px)', _0x47c549.drawImage(_0x19a6f7, -_0x25daff * 2, -_0x25daff * 2, _0xf6fff0.width + _0x25daff * 4, _0xf6fff0.height + _0x25daff * 4)) : (_0x47c549.drawImage(_0x19a6f7, 0, 0), Qo(_0x47c549, 0, 0, _0xf6fff0.width, _0xf6fff0.height, _0x25daff, _0x862499)), _0xf6fff0;
}
const pf = new Map(), x0 = 150;
function M0(_0x131f94, _0x5e9d1b = _0, _0xcba1a7 = T0) {
    ;
    if (!_0x131f94) {
        throw 'no dataUri for blur: ' + _0x131f94;
    }
    pf.size > x0 && pf.clear();
    const _0x246f27 = document.createElement('canvas');
    _0x246f27.className = 'canvas-thumbnail';
    let _0x17ba86 = pf.get(_0x131f94);
    if (_0x17ba86) {
        _0x246f27.width = _0x17ba86.canvas.width;
        _0x246f27.height = _0x17ba86.canvas.height;
        _0x17ba86.promise.then(() => {
            ;
            _0x246f27.getContext('2d').drawImage(_0x17ba86.canvas, 0, 0, _0x246f27.width, _0x246f27.height);
        });
        ;
    } else {
        const _0x85cb9c = new Promise(_0x30dd0e => {
                ;
                fi.then(() => {
                    const _0x176850 = new Image();
                    _0x176850.onload = () => {
                        const _0x21dd73 = {
                            items: [[
                                    _0x176850,
                                    _0x5e9d1b,
                                    _0xcba1a7,
                                    _0x246f27
                                ]],
                            context: null,
                            process: L0
                        };
                        ;
                        ;
                        ;
                        F0(_0x21dd73, 'unshift').then(() => {
                            _0x30dd0e();
                        });
                        ;
                    };
                    _0x176850.src = _0x131f94;
                    ;
                });
            }), _0x309ea5 = {
                canvas: _0x246f27,
                promise: _0x85cb9c
            };
        ;
        ;
        pf.set(_0x131f94, _0x17ba86 = _0x309ea5);
        ;
    }
    const _0x36ac81 = { ..._0x17ba86 };
    return _0x36ac81.canvas = _0x246f27, _0x36ac81;
}
function I0(_0x3e7e4b, _0x39f20f, _0x31fb28, _0x23176c = Jo(_0x3e7e4b, _0x39f20f, false)) {
    ;
    let _0x538c4e, _0x36e614;
    if (!_0x31fb28) {
        _0x538c4e = new Image();
        _0x36e614 = Yo(_0x538c4e, _0x23176c);
        ;
    } else {
        const _0xe61770 = M0(_0x23176c, typeof _0x31fb28 == 'number' ? _0x31fb28 : void 0);
        _0x538c4e = _0xe61770.canvas;
        _0x36e614 = _0xe61770.promise;
        ;
    }
    return _0x538c4e.classList.add('thumbnail'), {
        'image': _0x538c4e,
        'loadPromise': _0x36e614
    };
}
function mr(_0x263625, _0x18bff6, _0x32b603, _0x4a1902, _0x321d51 = true) {
    if (_0x263625 < _0x32b603 && _0x18bff6 < _0x4a1902 && _0x321d51) {
        return H(_0x263625, _0x18bff6);
    }
    let _0x57085e = _0x32b603, _0x1490e2 = _0x4a1902;
    return _0x263625 / _0x18bff6 > _0x32b603 / _0x4a1902 ? _0x1490e2 = _0x18bff6 * _0x32b603 / _0x263625 | 0 : (_0x57085e = _0x263625 * _0x4a1902 / _0x18bff6 | 0, _0x57085e > _0x32b603 && (_0x1490e2 = _0x1490e2 * _0x32b603 / _0x57085e | 0, _0x57085e = _0x32b603)), _0x321d51 && _0x57085e >= _0x263625 && _0x1490e2 >= _0x18bff6 && (_0x57085e = _0x263625, _0x1490e2 = _0x18bff6), H(_0x57085e, _0x1490e2);
}
N.calcImageInBox = mr;
class R0 {
    constructor(_0x23413e = 0, _0x5ca7b4 = _0x23413e) {
        ;
        this.width = _0x23413e;
        this.height = _0x5ca7b4;
        ;
    }
    ['aspect'](_0xa9bbc3, _0x6f79b6) {
        ;
        return mr(this.width, this.height, _0xa9bbc3.width, _0xa9bbc3.height, _0x6f79b6);
    }
    ['aspectFitted'](_0x4d36b9) {
        return this.aspect(_0x4d36b9, true);
    }
    ['aspectCovered'](_0x3c16d4) {
        ;
        return this.aspect(_0x3c16d4, false);
    }
}
function H(_0x3052c1, _0x4454bd) {
    return new R0(_0x3052c1, _0x4454bd);
}
var O0 = (_0x6fb913 => (_0x6fb913[_0x6fb913.mobile = 0] = 'mobile', _0x6fb913[_0x6fb913.medium = 1] = 'medium', _0x6fb913[_0x6fb913.large = 2] = 'large', _0x6fb913))(O0 || {});
const N0 = 600, B0 = 925, U0 = 1275, j0 = 1680, ta = H(20, 20), sa = H(36, 36), fa = H(18, 18);
class H0 extends je {
    constructor() {
        ;
        super();
        this.screenSizes = [
            {
                'key': 0,
                'value': N0
            },
            {
                'key': 1,
                'value': U0
            },
            {
                'key': 2,
                'value': j0
            }
        ];
        this.sizes = {
            'handhelds': {
                'regular': H(340, 340),
                'webpage': H(340, 200),
                'album': H(340, 0),
                'esgSticker': H(68, 68),
                'animatedSticker': H(180, 180),
                'staticSticker': H(180, 180),
                'emojiSticker': H(112, 112),
                'poll': H(240, 0),
                'round': H(240, 240),
                'documentName': H(200, 0),
                'invoice': H(340, 340),
                'extendedInvoice': H(340, 340),
                'customEmoji': ta,
                'esgCustomEmoji': sa,
                'emojiStatus': fa,
                'popupSticker': H(68, 68)
            },
            'desktop': {
                'regular': H(420, 400),
                'webpage': H(420, 380),
                'album': H(420, 0),
                'esgSticker': H(72, 72),
                'animatedSticker': H(200, 200),
                'staticSticker': H(200, 200),
                'emojiSticker': H(112, 112),
                'poll': H(330, 0),
                'round': H(280, 280),
                'documentName': H(240, 0),
                'invoice': H(320, 320),
                'extendedInvoice': H(420, 400),
                'customEmoji': ta,
                'esgCustomEmoji': sa,
                'emojiStatus': fa,
                'popupSticker': H(80, 80)
            }
        };
        this.isMobile = false;
        this.isFloatingLeftSidebar = false;
        this.isLessThanFloatingLeftSidebar = false;
        this.handleResize = () => {
            ;
            const _0x3a109c = window.innerWidth;
            let _0x14e452 = this.screenSizes[0].key;
            for (let _0x5761ff = this.screenSizes.length - 1; _0x5761ff >= 0; --_0x5761ff) {
                if (this.screenSizes[_0x5761ff].value < _0x3a109c) {
                    _0x14e452 = (this.screenSizes[_0x5761ff + 1] || this.screenSizes[_0x5761ff]).key;
                    break;
                }
            }
            const _0x43582d = this.activeScreen;
            this.activeScreen = _0x14e452;
            this.isMobile = this.activeScreen === 0;
            this.isLessThanFloatingLeftSidebar = _0x3a109c <= B0;
            this.isFloatingLeftSidebar = this.activeScreen === 1 && this.isLessThanFloatingLeftSidebar;
            this.active = this.isMobile ? this.sizes.handhelds : this.sizes.desktop;
            _0x43582d !== _0x14e452 && _0x43582d !== void 0 && this.dispatchEvent('changeScreen', _0x43582d, _0x14e452);
            _0x43582d !== void 0 && this.dispatchEvent('resize');
            ;
        };
        window.addEventListener('resize', () => {
            ;
            this.rAF && window.cancelAnimationFrame(this.rAF);
            this.rAF = window.requestAnimationFrame(() => {
                ;
                this.handleResize();
                this.rAF = 0;
                ;
            });
            ;
        });
        this.handleResize();
        ;
    }
}
const sf = new H0();
N.mediaSizes = sf;
function Dt(_0x155fb2, _0x29e30a, _0x426f25) {
    ;
    return Math.min(_0x426f25, Math.max(_0x29e30a, _0x155fb2));
}
const na = typeof ImageBitmap < 'u';
class mn {
    constructor() {
        ;
        this.cache = new Map();
    }
    static ['createCache']() {
        const _0x161616 = {
            'frames': new Map(),
            'framesNew': new Map(),
            'framesURLs': new Map(),
            'clearCache': () => {
                ;
                _0x161616.framesNew.forEach(_0x4e1b0b => {
                    _0x4e1b0b.close?.();
                });
                _0x161616.frames.clear();
                _0x161616.framesNew.clear();
                _0x161616.framesURLs.clear();
                ;
            },
            'counter': 0
        };
        return _0x161616;
    }
    ['getCache'](_0x513d2c) {
        ;
        let _0x212a94 = this.cache.get(_0x513d2c);
        return _0x212a94 || this.cache.set(_0x513d2c, _0x212a94 = mn.createCache()), ++_0x212a94.counter, _0x212a94;
    }
    ['releaseCache'](_0x16eced) {
        const _0x98f9b9 = this.cache.get(_0x16eced);
        _0x98f9b9 && !--_0x98f9b9.counter && this.cache.delete(_0x16eced);
    }
    ['getCacheCounter'](_0x298c18) {
        ;
        return this.cache.get(_0x298c18)?.counter;
    }
    ['generateName'](_0x57b0e3, _0x1bd612, _0x2e9523, _0x59040d, _0x431766) {
        ;
        return [
            _0x57b0e3,
            _0x1bd612,
            _0x2e9523,
            _0x431766 || ''
        ].filter(Boolean).join('-');
    }
}
const gr = new mn();
class W0 {
    constructor() {
        ;
        this.resetCache = () => {
            ;
            this.computedStyle = void 0;
            const _0xcf2238 = this.cache;
            this.cache = {};
            for (const _0x39a045 in _0xcf2238)
                this.getProperty(_0x39a045);
        };
        this.cache = {};
        this.nightElement = document.createElement('div');
        this.nightElement.className = 'night';
        this.nightElement.style.display = 'none';
        document.body.append(this.nightElement);
        I.addEventListener('theme_changed', this.resetCache);
        sf.addEventListener('resize', this.resetCache);
        ;
    }
    ['getProperty'](_0x2acf35, _0x2da8c9) {
        const _0x496a25 = this.cache[_0x2acf35], _0x1bdfd6 = _0x2da8c9 ? 1 : 0;
        if (_0x496a25?.[_0x1bdfd6]) {
            return _0x496a25[_0x1bdfd6];
        }
        this.computedStyle ?? (this.computedStyle = window.getComputedStyle(document.documentElement));
        this.nightComputedStyle ?? (this.nightComputedStyle = window.getComputedStyle(this.nightElement));
        ;
        const _0x41510e = (_0x2da8c9 ? this.nightComputedStyle : this.computedStyle).getPropertyValue('--' + _0x2acf35).trim();
        return this.setPropertyCache(_0x2acf35, _0x41510e, _0x2da8c9);
    }
    ['getPropertyAsColor'](_0x1dce24) {
        const _0x3a44c4 = this.getProperty(_0x1dce24);
        return _0x3a44c4[0] === '#' ? _0x3a44c4 : 'rgb(' + _0x3a44c4 + ')';
    }
    ['getPropertyAsSize'](_0x112ac8) {
        const _0x442191 = this.getProperty(_0x112ac8);
        let _0x19ac97;
        return _0x442191[_0x442191.length - 1] === '%' || (_0x442191.indexOf('rem') ? _0x19ac97 = +_0x442191.replace('rem', '') * 16 : _0x19ac97 = +_0x442191.replace('px', '')), _0x19ac97;
    }
    ['setPropertyCache'](_0x5c44fa, _0x51dbcb, _0x428bee) {
        ;
        var _0x1d49b3;
        return ((_0x1d49b3 = this.cache)[_0x5c44fa] ?? (_0x1d49b3[_0x5c44fa] = []))[_0x428bee ? 1 : 0] = _0x51dbcb;
    }
}
const St = new W0();
N && (N.customProperties = St);
function Zo(_0x228a02, _0x585265, _0x56cfb1) {
    ;
    let _0x1e9f1a = Dt(window.devicePixelRatio, 1, 2);
    return _0x1e9f1a > 1 && !_0x56cfb1 && (_0x228a02 > 90 && _0x585265 > 90 ? !Et && sf.isMobile && (_0x1e9f1a = 1) : (_0x228a02 > 60 && _0x585265 > 60 || Ii) && (_0x1e9f1a = Math.max(1.5, _0x1e9f1a - 1.5))), _0x1e9f1a;
}
function gn(_0x1372f0, _0x49cd24, _0x71b3ad, _0x41b232, _0x120d17, _0x2d6768) {
    ;
    _0x1372f0.globalCompositeOperation = 'source-atop';
    _0x1372f0.fillStyle = typeof _0x49cd24 == 'string' ? _0x49cd24 : 'rgb(' + _0x49cd24[0] + ', ' + _0x49cd24[1] + ', ' + _0x49cd24[2] + ')';
    _0x1372f0.fillRect(_0x71b3ad, _0x41b232, _0x120d17, _0x2d6768);
    _0x1372f0.globalCompositeOperation = 'source-over';
    ;
}
const ht = class ht extends je {
    constructor({
        el: _0x263118,
        worker: _0x3bbb20,
        options: _0x33bafd
    }) {
        ;
        super(true);
        this.reqId = 0;
        this.width = 0;
        this.height = 0;
        this.paused = true;
        this.direction = 1;
        this.speed = 1;
        this.autoplay = true;
        this.loop = true;
        this.group = '';
        this.cachingDelta = 0;
        this.playedTimes = 0;
        this.reqId = ++ht.reqId;
        this.el = _0x263118;
        this.worker = _0x3bbb20;
        ;
        for (const _0x22435f in _0x33bafd)
            this.hasOwnProperty(_0x22435f) && (this[_0x22435f] = _0x33bafd[_0x22435f]);
        this['_loop'] = this.loop;
        this['_autoplay'] = this.autoplay;
        this.initFrame = _0x33bafd.initFrame;
        this.color = _0x33bafd.color;
        this.textColor = _0x33bafd.textColor;
        this.name = _0x33bafd.name;
        this.skipFirstFrameRendering = _0x33bafd.skipFirstFrameRendering;
        this.toneIndex = _0x33bafd.toneIndex;
        this.raw = false;
        this.liteModeKey = _0x33bafd.liteModeKey;
        this.name && (this.cacheName = ht.CACHE.generateName(this.name, this.width, this.height, this.color, this.toneIndex));
        ;
        let _0x4a6d4b;
        _0x33bafd.skipRatio !== void 0 ? _0x4a6d4b = _0x33bafd.skipRatio : (Ii || ps || Et && !be && !So) && this.width < 100 && this.height < 100 && !_0x33bafd.needUpscale && (_0x4a6d4b = 0.5);
        this.skipDelta = _0x4a6d4b !== void 0 ? 1 / _0x4a6d4b | 0 : 1;
        ;
        const _0x1603d6 = Zo(this.width, this.height, _0x33bafd.needUpscale);
        this.width = Math.round(this.width * _0x1603d6);
        this.height = Math.round(this.height * _0x1603d6);
        _0x33bafd.noCache || (Et && this.width > 100 && this.height > 100 ? this.cachingDelta = 2 : this.width < 100 && this.height < 100 ? this.cachingDelta = 1e+400 : this.cachingDelta = 4);
        this.canvas || (this.canvas = this.el.map(() => {
            const _0x2e75a2 = document.createElement('canvas');
            return _0x2e75a2.classList.add('rlottie'), _0x2e75a2.width = this.width, _0x2e75a2.height = this.height, _0x2e75a2.dpr = _0x1603d6, _0x2e75a2;
        }));
        this.contexts = this.canvas.map(_0x393cb4 => _0x393cb4.getContext('2d'));
        (!na || this.raw) && (this.imageData = new ImageData(this.width, this.height), Ji && (this.clamped = new Uint8ClampedArray(this.width * this.height * 4)));
        this.name ? this.cache = ht.CACHE.getCache(this.cacheName) : this.cache = mn.createCache();
        ;
    }
    ['setSize'](_0x2e269c, _0x38f069) {
        ;
        this.width = _0x2e269c;
        this.height = _0x38f069;
        this.canvas.forEach(_0x1468d2 => {
            ;
            _0x1468d2.width = _0x2e269c;
            _0x1468d2.height = _0x38f069;
            ;
        });
        ;
    }
    ['clearCache']() {
        ;
        this.cachingDelta !== 1e+400 && (this.cacheName && this.cache.counter > 1 || this.cache.clearCache());
    }
    ['sendQuery'](_0x17f38b, _0x537d9c) {
        ;
        this.worker.sendQuery([
            _0x17f38b.shift(),
            this.reqId,
            ..._0x17f38b
        ], _0x537d9c);
    }
    ['loadFromData'](_0x493a89) {
        ;
        this.sendQuery([
            'loadFromData',
            _0x493a89,
            this.width,
            this.height,
            this.toneIndex,
            this.raw
        ]);
    }
    ['play']() {
        ;
        this.paused && (this.paused = false, this.setMainLoop());
    }
    ['pause'](_0x2cdbcf = true) {
        ;
        this.paused || (this.paused = true, _0x2cdbcf && (clearTimeout(this.rafId), this.rafId = void 0));
    }
    ['resetCurrentFrame']() {
        ;
        return this.curFrame = this.initFrame ?? (this.direction === 1 ? this.minFrame : this.maxFrame);
    }
    ['stop'](_0x75e083 = true) {
        ;
        this.pause();
        const _0x370318 = this.resetCurrentFrame();
        _0x75e083 && this.requestFrame(_0x370318);
    }
    ['restart']() {
        ;
        this.stop(false);
        this.play();
        ;
    }
    ['playOrRestart']() {
        ;
        this.paused && (this.curFrame === this.maxFrame ? this.restart() : this.play());
    }
    ['setSpeed'](_0x49ddbb) {
        ;
        if (this.speed !== _0x49ddbb) {
            this.speed = _0x49ddbb;
            this.paused || this.setMainLoop();
        }
    }
    ['setDirection'](_0x3d4972) {
        ;
        if (this.direction !== _0x3d4972) {
            this.direction = _0x3d4972;
            this.paused || this.setMainLoop();
        }
    }
    ['remove']() {
        ;
        this.pause();
        this.sendQuery(['destroy']);
        this.cacheName && ht.CACHE.releaseCache(this.cacheName);
        this.dispatchEvent('destroy');
        this.cleanup();
        ;
    }
    ['applyColor'](_0x43214e) {
        ;
        gn(_0x43214e, this.color || St.getPropertyAsColor(this.textColor), 0, 0, this.width, this.height);
    }
    ['applyColorForAllContexts']() {
        ;
        !this.color && !this.textColor || this.contexts.forEach(_0x3a606f => {
            ;
            this.applyColor(_0x3a606f);
        });
    }
    ['renderFrame2'](_0x34741c, _0x2a3d46) {
        ;
        try {
            _0x34741c instanceof Uint8ClampedArray && this.imageData.data.set(_0x34741c);
            this.contexts.forEach((_0x589156, _0xeb7233) => {
                ;
                let _0x86496d = this.cache.framesNew.get(_0x2a3d46);
                if (_0x34741c instanceof Uint8ClampedArray ? _0xeb7233 > 0 && (_0x86496d = this.canvas[0]) : _0x86496d = _0x34741c, !_0x86496d) {
                    const _0x21211b = document.createElement('canvas');
                    _0x21211b.width = _0x589156.canvas.width;
                    _0x21211b.height = _0x589156.canvas.height;
                    _0x21211b.getContext('2d').putImageData(this.imageData, 0, 0);
                    this.cache.framesNew.set(_0x2a3d46, _0x21211b);
                    _0x86496d = _0x21211b;
                    ;
                }
                this.overrideRender && this.renderedFirstFrame ? this.overrideRender(_0x86496d || this.imageData) : _0x86496d ? (_0x589156.clearRect(0, 0, _0x86496d.width, _0x86496d.height), _0x589156.drawImage(_0x86496d, 0, 0)) : _0x589156.putImageData(this.imageData, 0, 0);
                (this.color || this.textColor) && this.applyColor(_0x589156);
                this.renderedFirstFrame || (this.renderedFirstFrame = true);
                ;
            });
            this.dispatchEvent('enterFrame', _0x2a3d46);
            ;
        } catch {
            this.autoplay = false;
            this.pause();
            ;
        }
    }
    ['renderFrame'](_0x19d32e, _0x58b02b) {
        ;
        if (this.cachingDelta && (_0x58b02b % this.cachingDelta || !_0x58b02b) && (_0x19d32e instanceof Uint8ClampedArray && !this.cache.frames.has(_0x58b02b) ? this.cache.frames.set(_0x58b02b, new Uint8ClampedArray(_0x19d32e)) : na && _0x19d32e instanceof ImageBitmap && !this.cache.framesNew.has(_0x58b02b) && this.cache.framesNew.set(_0x58b02b, _0x19d32e)), this.frInterval) {
            const _0x565209 = Date.now(), _0x1e373c = _0x565209 - this.frThen;
            if (_0x1e373c < 0) {
                const _0x5169 = this.frInterval > -_0x1e373c ? -_0x1e373c % this.frInterval : this.frInterval;
                this.rafId && clearTimeout(this.rafId);
                this.rafId = window.setTimeout(() => {
                    ;
                    this.renderFrame2(_0x19d32e, _0x58b02b);
                }, _0x5169);
                ;
                return;
            }
        }
        this.renderFrame2(_0x19d32e, _0x58b02b);
    }
    ['requestFrame'](_0x57abb8) {
        const _0x5d6c68 = this.cache.frames.get(_0x57abb8), _0x14085c = this.cache.framesNew.get(_0x57abb8);
        _0x14085c ? this.renderFrame(_0x14085c, _0x57abb8) : _0x5d6c68 ? this.renderFrame(_0x5d6c68, _0x57abb8) : (this.clamped && !this.clamped.length && (this.clamped = new Uint8ClampedArray(this.width * this.height * 4)), this.sendQuery([
            'renderFrame',
            _0x57abb8
        ], this.clamped ? [this.clamped.buffer] : void 0));
    }
    ['onLap']() {
        ;
        return ++this.playedTimes, typeof this.loop == 'number' && this.playedTimes >= this.loop && (this.loop = this.autoplay = this['_loop'] = this['_autoplay'] = false), this.loop ? true : (this.clearCache(), this.pause(false), false);
    }
    ['mainLoopForwards']() {
        const {
                skipDelta: _0xc2565a,
                maxFrame: _0x527ba1
            } = this, _0x52056d = this.curFrame + _0xc2565a > _0x527ba1 ? this.curFrame = this.loop ? this.minFrame : this.maxFrame : this.curFrame += _0xc2565a;
        return this.requestFrame(_0x52056d), _0x52056d + _0xc2565a > _0x527ba1 ? this.onLap() : true;
    }
    ['mainLoopBackwards']() {
        const {
                skipDelta: _0x5f293,
                minFrame: _0x410e0a
            } = this, _0x1e6c0a = this.curFrame - _0x5f293 < _0x410e0a ? this.curFrame = this.loop ? this.maxFrame : this.minFrame : this.curFrame -= _0x5f293;
        return this.requestFrame(_0x1e6c0a), _0x1e6c0a - _0x5f293 < _0x410e0a ? this.onLap() : true;
    }
    ['setMainLoop']() {
        ;
        clearTimeout(this.rafId);
        this.rafId = void 0;
        this.frInterval = 1000 / this.fps / this.speed * this.skipDelta;
        this.frThen = Date.now() - this.frInterval;
        ;
        const _0x9a0dcd = (this.direction === 1 ? this.mainLoopForwards : this.mainLoopBackwards).bind(this);
        this.currentMethod = _0x9a0dcd;
        this.frameListener && this.listenerResults.enterFrame !== void 0 && this.frameListener(this.curFrame);
        ;
    }
    ['playPart'](_0x275bdc) {
        ;
        this.pause();
        const {
            from: _0x1206cc,
            to: _0x5646d2,
            callback: _0x3a9cb9
        } = _0x275bdc;
        return this.curFrame = _0x1206cc - 1, this.playToFrame({
            'frame': _0x5646d2,
            'direction': _0x5646d2 > _0x1206cc ? 1 : -1,
            'callback': _0x3a9cb9
        });
    }
    ['playToFrame'](_0x2bf712) {
        ;
        this.pause();
        const {
            frame: _0x16b2b7,
            speed: _0x42dabe,
            callback: _0x1d2f8d,
            direction: _0x513e93
        } = _0x2bf712;
        this.setDirection(_0x513e93 === void 0 ? this.curFrame > _0x16b2b7 ? -1 : 1 : _0x513e93);
        _0x42dabe !== void 0 && this.setSpeed(_0x42dabe);
        ;
        const _0x505e7f = [
            this.curFrame,
            _0x16b2b7
        ];
        this.direction === -1 && _0x505e7f.reverse();
        this.loop = false;
        this.setMinMax(_0x505e7f[0], _0x505e7f[1]);
        this.playToFrameOnFrameCallback && this.removeEventListener('enterFrame', this.playToFrameOnFrameCallback);
        _0x1d2f8d && (this.playToFrameOnFrameCallback = _0x5163c6 => {
            ;
            if (_0x5163c6 === _0x16b2b7) {
                this.removeEventListener('enterFrame', this.playToFrameOnFrameCallback);
                _0x1d2f8d();
            }
        }, this.addEventListener('enterFrame', this.playToFrameOnFrameCallback));
        this.play();
        ;
    }
    ['setColor'](_0x342227, _0x2a0517) {
        ;
        typeof _0x342227 == 'string' ? this.textColor = _0x342227 : this.color = _0x342227;
        _0x2a0517 && this.paused && this.applyColorForAllContexts();
        ;
    }
    ['setMinMax'](_0x5b0571 = 0, _0x5d7fbe = this.frameCount - 1) {
        ;
        this.minFrame = _0x5b0571;
        this.maxFrame = _0x5d7fbe;
        ;
    }
    async ['onLoad'](_0x581080, _0x43eefd) {
        ;
        this.frameCount = _0x581080;
        this.fps = _0x43eefd;
        this.setMinMax();
        this.initFrame !== void 0 && (this.initFrame = Dt(this.initFrame, this.minFrame, this.maxFrame));
        ;
        const _0x21d3b6 = this.resetCurrentFrame();
        if (this.fps < 60 && this.skipDelta !== 1) {
            const _0x2d2ccf = 60 / _0x43eefd;
            this.skipDelta = this.skipDelta / _0x2d2ccf | 0;
        }
        const _0x4a78d9 = { once: true };
        ;
        this.frInterval = 1000 / this.fps / this.speed * this.skipDelta;
        this.frThen = Date.now() - this.frInterval;
        !this.skipFirstFrameRendering && this.requestFrame(_0x21d3b6);
        this.dispatchEvent('ready');
        this.addEventListener('enterFrame', () => {
            ;
            this.dispatchEvent('firstFrame');
            !this.canvas[0].parentNode && this.el?.[0] && !this.overrideRender && this.el.forEach((_0x19caa0, _0x88b97c) => _0x19caa0.append(this.canvas[_0x88b97c]));
            this.frameListener = () => {
                ;
                if (this.paused || !this.currentMethod) {
                    return;
                }
                const _0x35b3d3 = Date.now();
                this.frThen = _0x35b3d3 + this.frInterval;
                !this.currentMethod() && !this.loop && this.autoplay && (this.autoplay = false);
                ;
            };
            this.addEventListener('enterFrame', this.frameListener);
            this.group === 'none' && this.autoplay && this.play();
            ;
        }, _0x4a78d9);
        ;
        ;
    }
};
ht.CACHE = gr;
ht.reqId = 0;
;
let xt = ht;
const ts = {};
function ec(_0x73d30d, _0xe38e13, _0x53a698, _0x27841b) {
    const _0x1f38f1 = ar(_0x73d30d.id, _0xe38e13), _0x12e52e = ts[_0x1f38f1];
    return _0x12e52e && _0x12e52e.width >= _0x53a698 && _0x12e52e.height >= _0x27841b;
}
let Kt, ni;
const V0 = () => {
    ;
    I.addEventListener('theme_changed', () => {
        ;
        I.managers.thumbsStorage.clearColoredStickerThumbs();
        for (const _0x334396 in ts) {
            const [, _0x17ff4e] = _0x334396.split('-');
            _0x17ff4e && isNaN(+_0x17ff4e) && delete ts[_0x334396];
        }
    });
    Kt = document.createElement('canvas');
    ni = Kt.getContext('2d');
    ;
};
async function ia(_0x4ebaec, _0x1fee81, _0x4a8b68) {
    const _0x185556 = ar(_0x4ebaec.id, _0x4a8b68), {
            width: _0x3114ac,
            height: _0x1fc310
        } = _0x1fee81;
    if (ec(_0x4ebaec, _0x4a8b68, _0x3114ac, _0x1fc310)) {
        return;
    }
    const _0x39d0cd = {
        width: _0x3114ac,
        height: _0x1fc310
    };
    ;
    ;
    ;
    const _0x3f821c = ts[_0x185556] = _0x39d0cd, _0x3f64ff = await I.managers.thumbsStorage.getStickerCachedThumb(_0x4ebaec.id, _0x4a8b68);
    if (ts[_0x185556] !== _0x3f821c || _0x3f64ff && _0x3f64ff.w >= _0x3114ac && _0x3f64ff.h >= _0x1fc310) {
        return;
    }
    if (typeof _0x4a8b68 == 'string') {
        Kt || V0();
        Kt.width = _0x3114ac;
        Kt.height = _0x1fc310;
        ni.drawImage(_0x1fee81, 0, 0, _0x3114ac, _0x1fc310);
        gn(ni, St.getProperty(_0x4a8b68), 0, 0, _0x3114ac, _0x1fc310);
        _0x1fee81 = Kt;
    }
    const _0x1a10e8 = await new Promise(_0x203f99 => {
        ;
        _0x1fee81.toBlob(_0x18bf56 => _0x203f99(_0x18bf56));
    });
    ts[_0x185556] === _0x3f821c && _0x1a10e8 && I.managers.thumbsStorage.saveStickerPreview(_0x4ebaec.id, _0x1a10e8, _0x3114ac, _0x1fc310, _0x4a8b68);
}
class z0 {
    constructor() {
        ;
        this.promises = {};
        this.raf = Oe.bind(null);
        this.scheduled = false;
        ;
    }
    ['do'](_0x5bc410, _0x3c01e1) {
        ;
        let _0x39d02a = this.promises[_0x5bc410];
        return _0x39d02a || (this.scheduleFlush(), _0x39d02a = this.promises[_0x5bc410] = q()), _0x3c01e1 !== void 0 && _0x39d02a.then(() => _0x3c01e1()), _0x39d02a;
    }
    ['measure'](_0x3e77a4) {
        ;
        return this.do('read', _0x3e77a4);
    }
    ['mutate'](_0x4491a5) {
        ;
        return this.do('write', _0x4491a5);
    }
    ['mutateElement'](_0x3630b4, _0x12474a) {
        const _0x159e1d = Ys(_0x3630b4), _0x5f56d2 = _0x159e1d ? this.mutate() : Promise.resolve();
        return _0x12474a !== void 0 && (_0x159e1d ? _0x5f56d2.then(() => _0x12474a()) : _0x12474a()), _0x5f56d2;
    }
    ['scheduleFlush']() {
        ;
        this.scheduled || (this.scheduled = true, this.raf(() => {
            ;
            this.promises.read && this.promises.read.resolve();
            this.promises.write && this.promises.write.resolve();
            this.scheduled = false;
            this.promises = {};
            ;
        }));
    }
}
const ut = new z0();
N && (N.sequentialDom = ut);
let ra = 0;
function G0(_0x1a771e) {
    ;
    let _0x372800;
    const _0x3ce372 = _0x1a771e?.type;
    if (_0x3ce372) {
        const _0x2edf11 = If + '_' + ra++ + '.' + _0x3ce372.split('/')[1];
        [
            'image/jpeg',
            'image/png',
            'image/bmp'
        ].indexOf(_0x3ce372) >= 0 ? _0x372800 = 'photo' + _0x2edf11 : _0x3ce372.indexOf('audio/') === 0 || ['video/ogg'].indexOf(_0x3ce372) >= 0 ? _0x372800 = 'audio' + _0x2edf11 : _0x3ce372.indexOf('video/') === 0 ? _0x372800 = 'video' + _0x2edf11 : _0x372800 = 'document' + _0x2edf11;
    } else {
        _0x372800 = 'upload-' + If + '_' + ra++;
    }
    return _0x372800;
}
function q0(_0x5a93a5, _0x5dc217) {
    const _0x6c8f5c = {};
    return _0x6c8f5c['_'] = 'inputDocumentFileLocation', _0x6c8f5c.id = _0x5a93a5.id, _0x6c8f5c.access_hash = _0x5a93a5.access_hash, _0x6c8f5c.file_reference = _0x5a93a5.file_reference, _0x6c8f5c.thumb_size = _0x5dc217, _0x6c8f5c;
}
function tc(_0x44654c, {
    thumb: _0x50523a,
    queueId: _0x424fdc,
    onlyCache: _0x543925
} = {}) {
    const _0x5e1871 = q0(_0x44654c, _0x50523a?.type);
    let _0x191b76;
    return _0x50523a?.['_'] === 'photoSize' ? _0x191b76 = _0x44654c.sticker ? 'image/webp' : _0x44654c.mime_type.startsWith('image/') ? _0x44654c.mime_type : 'image/jpeg' : _0x191b76 = _0x44654c.mime_type || 'application/octet-stream', {
        'dcId': _0x44654c.dc_id,
        'location': _0x5e1871,
        'size': _0x50523a ? _0x50523a.size : _0x44654c.size,
        'mimeType': _0x191b76,
        'fileName': _0x44654c.file_name,
        'queueId': _0x424fdc,
        'onlyCache': _0x543925
    };
}
function sc(_0x17c3b6, _0x33dfb2, _0x331437, _0x669ed2) {
    const _0x3088fd = _0x17c3b6['_'] === 'document';
    if (!_0x33dfb2 || _0x33dfb2['_'] === 'photoSizeEmpty') {
        throw new Error('photoSizeEmpty!');
    }
    const _0x14c84a = !!((_0x33dfb2['_'] === 'photoSize' || _0x33dfb2['_'] === 'photoSizeProgressive') && _0x17c3b6.access_hash && _0x17c3b6.file_reference), _0x2cf833 = {
            '_': _0x3088fd ? 'inputDocumentFileLocation' : 'inputPhotoFileLocation',
            'id': _0x17c3b6.id,
            'access_hash': _0x17c3b6.access_hash,
            'file_reference': _0x17c3b6.file_reference,
            'thumb_size': _0x33dfb2.type
        }, _0x1c1770 = {};
    return _0x1c1770.dcId = _0x17c3b6.dc_id, _0x1c1770.location = _0x2cf833, _0x1c1770.size = _0x14c84a ? _0x33dfb2.size : void 0, _0x1c1770.mimeType = 'image/jpeg', _0x1c1770.queueId = _0x331437, _0x1c1770.onlyCache = _0x669ed2, _0x1c1770;
}
function fc(_0xd921e4) {
    const _0x474cef = {};
    return _0x474cef.dcId = 0, _0x474cef.location = _0xd921e4, _0x474cef.size = 0, _0x474cef.mimeType = 'image/jpeg', _0x474cef;
}
function $0(_0x55b7b0) {
    const _0x136cb3 = {
        access_hash: _0x55b7b0.access_hash,
        url: _0x55b7b0.url
    };
    _0x136cb3['_'] = 'inputWebFileLocation';
    ;
    ;
    ;
    const _0x5b752f = fc(_0x136cb3);
    return _0x5b752f.size = _0x55b7b0.size, _0x5b752f.mimeType = _0x55b7b0.mime_type, _0x5b752f;
}
function Y0(_0x83f8de) {
    ;
    return !!(_0x83f8de && (_0x83f8de['_'] === 'webDocument' || _0x83f8de['_'] === 'webDocumentNoProxy'));
}
function nc(_0x4e8f9a) {
    ;
    return ir(_0x4e8f9a.location, _0x4e8f9a);
}
function K0(_0x35afa2) {
    const {
        media: _0x10cec1,
        thumb: _0x2c1420,
        queueId: _0x95ceb2,
        onlyCache: _0xa6daec
    } = _0x35afa2;
    let _0x27df18;
    const _0x5e1ee9 = {};
    return _0x5e1ee9.thumb = _0x2c1420, _0x5e1ee9.queueId = _0x95ceb2, _0x5e1ee9.onlyCache = _0xa6daec, (_0x10cec1['_'] === 'document' ? _0x27df18 = tc(_0x10cec1, _0x5e1ee9) : _0x10cec1['_'] === 'photo' ? _0x27df18 = sc(_0x10cec1, _0x2c1420, _0x95ceb2, _0xa6daec) : Y0(_0x10cec1) ? _0x27df18 = $0(_0x10cec1) : rr(_0x10cec1) && (_0x27df18 = fc(_0x10cec1), _0x35afa2.fileName && (_0x27df18.fileName = _0x35afa2.fileName)), _0x27df18.downloadId = _0x35afa2.downloadId, {
        'fileName': nc(_0x27df18),
        'downloadOptions': _0x27df18
    });
}
function J0(_0x2145a6, _0x146cd8, _0x230e92) {
    const _0x34f446 = document.createElement('a');
    _0x34f446.href = _0x2145a6;
    _0x34f446.download = _0x146cd8;
    _0x34f446.target = '_blank';
    _0x34f446.style.position = 'absolute';
    _0x34f446.style.top = '1px';
    _0x34f446.style.left = '1px';
    document.body.append(_0x34f446);
    ;
    try {
        const _0x1d7cb3 = document.createEvent('MouseEvents');
        _0x1d7cb3.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        _0x34f446.dispatchEvent(_0x1d7cb3);
        ;
    } catch {
        try {
            _0x34f446.click();
        } catch {
            window.open(_0x2145a6, '_blank');
        }
    }
    setTimeout(() => {
        ;
        _0x34f446.remove();
        _0x230e92 && _0x230e92();
        ;
    }, 100);
}
class X0 {
    constructor() {
        ;
        this.downloads = {};
        this.progress = {};
        ;
    }
    ['construct'](_0x2678d5) {
        ;
        this.managers = _0x2678d5;
        I.addEventListener('download_progress', _0x23169f => {
            const _0x1cd56a = this.downloads[_0x23169f.fileName];
            _0x1cd56a?.main?.notifyAll && (this.progress[_0x23169f.fileName] = _0x23169f, _0x1cd56a.main.notifyAll(_0x23169f));
        });
        ;
    }
    ['getNewDeferred'](_0x38ede7, _0x43b31e) {
        const _0x42ce5b = q();
        let _0x11ed13 = this.downloads[_0x38ede7];
        const _0xa95bee = { main: _0x42ce5b };
        ;
        if (!_0x11ed13) {
            _0x11ed13 = this.downloads[_0x38ede7] = _0xa95bee;
            _0x42ce5b.cancel = () => {
                const _0x52c861 = Ee('DOWNLOAD_CANCELED');
                this.managers.apiFileManager.cancelDownload(_0x38ede7);
                _0x42ce5b.reject(_0x52c861);
                _0x42ce5b.cancel = ve;
                ;
            };
            _0x42ce5b.catch(() => {
                ;
                this.clearDownload(_0x38ede7, _0x43b31e);
            }).finally(() => {
                ;
                delete this.progress[_0x38ede7];
            });
            ;
        } else {
            const _0x2c28f7 = _0x11ed13.main;
            [
                'cancel',
                'addNotifyListener',
                'notify',
                'notifyAll'
            ].forEach(_0x16e457 => {
                ;
                _0x2c28f7[_0x16e457] && (_0x42ce5b[_0x16e457] = _0x2c28f7[_0x16e457].bind(_0x2c28f7));
            });
        }
        return _0x43b31e === 'disc' && _0x42ce5b.catch(ve).finally(() => {
            ;
            this.clearDownload(_0x38ede7, _0x43b31e);
        }), _0x11ed13[_0x43b31e] = _0x42ce5b;
    }
    ['getNewDeferredForUpload'](_0x3efc50, _0xb0f79) {
        const _0x16e96c = this.getNewDeferred(_0x3efc50);
        return _0xb0f79.then(_0x16e96c.resolve.bind(_0x16e96c), _0x16e96c.reject.bind(_0x16e96c)), _0x16e96c.finally(() => {
            ;
            this.clearDownload(_0x3efc50);
        }), _0x16e96c;
    }
    ['clearDownload'](_0x130135, _0x3491c3) {
        const _0x20d083 = this.downloads[_0x130135];
        if (!_0x20d083) {
            return;
        }
        delete _0x20d083[_0x3491c3];
        const _0x31ca95 = Object.keys(_0x20d083).length;
        (!_0x31ca95 || _0x20d083.main && _0x31ca95 === 1) && delete this.downloads[_0x130135];
    }
    ['getUpload'](_0x3afcc1) {
        ;
        let _0x17c3ba = this.getDownload(_0x3afcc1);
        return _0x17c3ba || (_0x17c3ba = this.getNewDeferred(_0x3afcc1), this.managers.appMessagesManager.getUploadPromise(_0x3afcc1).then(_0x17c3ba.resolve.bind(_0x17c3ba), _0x17c3ba.reject.bind(_0x17c3ba)), _0x17c3ba);
    }
    ['d'](_0x212602, _0x1cb4dd, _0x1fdb1a) {
        ;
        let _0x303a84 = this.getDownload(_0x212602, _0x1fdb1a);
        return _0x303a84 || (_0x303a84 = this.getNewDeferred(_0x212602, _0x1fdb1a), _0x1cb4dd().then(_0x303a84.resolve.bind(_0x303a84), _0x303a84.reject.bind(_0x303a84)), _0x303a84);
    }
    ['download'](_0xcf21d7) {
        const _0x5b914a = nc(_0xcf21d7);
        return this.d(_0x5b914a, () => this.managers.apiFileManager.download(_0xcf21d7), 'blob');
    }
    ['downloadMedia'](_0x43ea7a, _0xdd132e = 'blob', _0x1fd544) {
        const {
            downloadOptions: _0x46dfb8,
            fileName: _0x37838a
        } = K0(_0x43ea7a);
        return this.d(_0x37838a, () => {
            ;
            let _0x65c6cb;
            return _0xdd132e === 'url' ? _0x65c6cb = this.managers.apiFileManager.downloadMediaURL : _0xdd132e === 'void' ? _0x65c6cb = this.managers.apiFileManager.downloadMediaVoid : _0x65c6cb = this.managers.apiFileManager.downloadMedia, _0x1fd544 ? _0x1fd544.then(() => _0x65c6cb(_0x43ea7a), () => (delete _0x43ea7a.downloadId, _0x65c6cb(_0x43ea7a))) : _0x65c6cb(_0x43ea7a);
        }, _0xdd132e);
    }
    ['downloadMediaURL'](_0x25a942) {
        ;
        return this.downloadMedia(_0x25a942, 'url');
    }
    ['downloadMediaVoid'](_0x39fc16) {
        ;
        return this.downloadMedia(_0x39fc16, 'void');
    }
    ['upload'](_0x53134e, _0xd3edff, _0x30f588) {
        ;
        return _0xd3edff || (_0xd3edff = G0(_0x53134e)), _0x30f588 || (_0x30f588 = this.managers.apiFileManager.upload({
            'file': _0x53134e,
            'fileName': _0xd3edff
        })), this.getNewDeferredForUpload(_0xd3edff, _0x30f588);
    }
    ['getDownload'](_0x53b2f3, _0x23e3d9) {
        const _0x1a2214 = this.downloads[_0x53b2f3];
        return _0x1a2214 && _0x1a2214[_0x23e3d9];
    }
    ['downloadToDisc'](_0x5cece6, _0x30039d) {
        const _0x27336a = _0x5cece6.media, _0xc40df8 = _0x27336a['_'] === 'document', _0x3bcb46 = rr(_0x27336a);
        !_0xc40df8 && !_0x3bcb46 && !_0x5cece6.thumb && (_0x5cece6.thumb = _0x27336a.sizes.slice().pop());
        const _0x2c6e6d = !bs && !!re.serviceMessagePort, _0x3f1c1b = () => {
                ;
                if (_0x5cece6.fileName) {
                    return _0x5cece6.fileName;
                }
                const _0x155d69 = _0xc40df8 ? tc(_0x27336a) : sc(_0x27336a, _0x5cece6.thumb);
                return _0x5cece6.media.file_name || ir(_0x155d69.location);
            };
        let _0x5226cf, _0x535fd5, _0x214fca;
        if (_0x2c6e6d) {
            const _0x367214 = '' + (Math.random() * 2147483647 | 0);
            if (_0x5226cf = 'd/' + _0x367214, _0x5cece6.downloadId = _0x367214, _0x535fd5 = re.pingServiceWorkerWithIframe(), !_0x30039d) {
                const {
                    iframe: _0x1227e9,
                    onSuccess: _0x2a906a,
                    onError: _0x44eef
                } = this.createDownloadIframe(_0x5226cf);
                _0x214fca = _0x1227e9;
                _0x535fd5 = _0x535fd5.then(() => {
                    ;
                    const _0x36cff4 = q(), _0x4b5594 = _0x5081dc => {
                            ;
                            clearTimeout(_0x279ec3);
                            re.serviceMessagePort.removeEventListener('downloadRequestReceived', _0x4c3274);
                            _0x5081dc ? _0x36cff4.resolve() : _0x36cff4.reject();
                            ;
                        }, _0x4c3274 = _0x3a203f => {
                            _0x3a203f === _0x367214 && _0x4b5594(true);
                        };
                    re.serviceMessagePort.addEventListener('downloadRequestReceived', _0x4c3274);
                    const _0x279ec3 = window.setTimeout(() => {
                        _0x4b5594(false);
                    }, 1500);
                    return _0x2a906a(), _0x36cff4;
                }, _0x39b5cb => {
                    ;
                    throw _0x44eef(), _0x39b5cb;
                });
                ;
            }
        }
        const _0x2b3b6e = this.downloadMedia(_0x5cece6, 'disc', _0x535fd5);
        if (_0x30039d) {
            return _0x2b3b6e;
        }
        let _0x201e9d, _0xb9768e = false;
        const _0x17da64 = () => {
            ;
            _0xb9768e || (_0xb9768e = true, _0x201e9d = _0x214fca, xe(_0x2b3b6e.listeners, _0x17da64));
        };
        return _0x2b3b6e.addNotifyListener(_0x17da64), _0x2b3b6e.then(_0x1c012e => {
            ;
            if (!_0x1c012e) {
                return;
            }
            const _0xebf1e6 = URL.createObjectURL(_0x1c012e);
            J0(_0xebf1e6, _0x3f1c1b(), () => {
                ;
                URL.revokeObjectURL(_0xebf1e6);
            });
        }).catch(ve).finally(() => {
            _0xb9768e || _0x17da64();
            setTimeout(() => {
                _0x201e9d?.remove();
            }, 1000);
            ;
        }), _0x2b3b6e;
    }
    ['createDownloadIframe'](_0x527eec) {
        const _0x1d04b0 = document.createElement('iframe');
        return _0x1d04b0.hidden = true, {
            'iframe': _0x1d04b0,
            'onSuccess': () => {
                ;
                _0x1d04b0.src = _0x527eec;
                document.body.append(_0x1d04b0);
                ;
            },
            'onError': () => {
            }
        };
    }
}
const _s = new X0();
N && (N.appDownloadManager = _s);
function aa(_0xa62bf6, _0x5cc587 = 0, _0x43e81b = 0, _0x521212 = false, _0x19d232 = false) {
    ;
    if (window.devicePixelRatio > 1) {
        _0x5cc587 *= 2;
        _0x43e81b *= 2;
    }
    const _0x53dc11 = { type: jn };
    _0x53dc11['_'] = 'photoSizeEmpty';
    ;
    ;
    let _0x5d365e = _0xa62bf6.sizes || _0xa62bf6.thumbs, _0x2df4b4 = _0x53dc11;
    if (_0x19d232 && _0x5d365e && _0xa62bf6['_'] !== 'photo' && (_0x5d365e = _0x5d365e.concat({
            '_': 'photoSize',
            'w': _0xa62bf6.w,
            'h': _0xa62bf6.h,
            'size': _0xa62bf6.size,
            'type': jn
        })), _0x5d365e?.length) {
        for (let _0x2f1c07 = 0, _0x393aa9 = _0x5d365e.length; _0x2f1c07 < _0x393aa9; ++_0x2f1c07) {
            const _0x9bb0e1 = _0x5d365e[_0x2f1c07];
            if (!('w' in _0x9bb0e1) && !('h' in _0x9bb0e1)) {
                continue;
            }
            _0x2df4b4 = _0x9bb0e1;
            const _0x3c090c = mr(_0x9bb0e1.w, _0x9bb0e1.h, _0x5cc587, _0x43e81b);
            if (_0x3c090c.width >= _0x5cc587 || _0x3c090c.height >= _0x43e81b) {
                break;
            }
        }
        _0x521212 && _0x2df4b4['_'] === 'photoSizeEmpty' && _0x5d365e[0]['_'] === 'photoStrippedSize' && (_0x2df4b4 = _0x5d365e[0]);
    }
    return _0x2df4b4;
}
function ic(_0x24ee8b) {
    ;
    return _0x24ee8b.video_thumbs?.[0];
}
class Q0 extends je {
    constructor(_0x939e05) {
        ;
        super();
        this.worker = _0x939e05;
        this.worker.onerror = _0x5a2182 => {
            ;
            try {
                this.dispatchEvent('workerError', _0x5a2182);
                this.cleanup();
                this.terminate();
                ;
            } catch {
            }
        };
        this.worker.onmessage = _0x16c974 => {
            ;
            this.dispatchEvent(_0x16c974.data.queryMethodListener, ..._0x16c974.data.queryMethodArguments);
        };
        ;
    }
    ['postMessage'](_0x51f595) {
        ;
        this.worker.postMessage(_0x51f595);
    }
    ['terminate']() {
        ;
        this.worker.terminate();
    }
    ['sendQuery'](_0x442033, _0x18116c) {
        ;
        this.worker.postMessage({
            'queryMethod': _0x442033.shift(),
            'queryMethodArguments': _0x442033
        }, Ji ? _0x18116c : void 0);
    }
}
const bf = typeof WebAssembly < 'u';
class Z0 {
    constructor() {
        ;
        this.loadPromise = bf ? void 0 : Promise.reject(Ee('NO_WASM'));
        this.loaded = false;
        this.workersLimit = ne.threads;
        this.players = {};
        this.playersByCacheName = {};
        this.workers = [];
        this.curWorkerNum = 0;
        this.log = Q('LOTTIE', ef.Error);
        this.onPlayerLoaded = (_0x557171, _0x15a79d, _0x365545) => {
            ;
            const _0x1b4db5 = this.players[_0x557171];
            if (!_0x1b4db5) {
                this.log.warn('onPlayerLoaded on destroyed player:', _0x557171, _0x15a79d);
                return;
            }
            this.log.debug('onPlayerLoaded');
            _0x1b4db5.onLoad(_0x15a79d, _0x365545);
            ;
        };
        this.onFrame = (_0x213005, _0x2123c3, _0x52b5a5) => {
            const _0x3fc61f = this.players[_0x213005];
            if (!_0x3fc61f) {
                this.log.warn('onFrame on destroyed player:', _0x213005, _0x2123c3);
                return;
            }
            _0x3fc61f.clamped !== void 0 && _0x52b5a5 instanceof Uint8ClampedArray && (_0x3fc61f.clamped = _0x52b5a5);
            _0x3fc61f.renderFrame(_0x52b5a5, _0x2123c3);
            ;
        };
        this.onPlayerError = (_0x2a0fb1, _0x287e53) => {
            const _0x4a8149 = this.players[_0x2a0fb1];
            if (!_0x4a8149) {
                return;
            }
            pe.getAnimations(_0x4a8149.el[0]).forEach(_0xe2326 => {
                ;
                pe.removeAnimation(_0xe2326);
            });
        };
        I.addEventListener('theme_changed', () => {
            ;
            for (const _0x20b3bb in this.players)
                this.players[_0x20b3bb].applyColorForAllContexts();
        });
        ;
    }
    ['getAnimation'](_0x17e2f7) {
        ;
        for (const _0x4e41c6 in this.players)
            if (this.players[_0x4e41c6].el.includes(_0x17e2f7)) {
                return this.players[_0x4e41c6];
            }
        return null;
    }
    ['loadLottieWorkers']() {
        ;
        return this.loadPromise ? this.loadPromise : this.loadPromise = new Promise((_0x461bb5, _0x2650ce) => {
            ;
            let _0x10a1df = this.workersLimit;
            for (let _0x44ed60 = 0; _0x44ed60 < this.workersLimit; ++_0x44ed60) {
                const _0x253c33 = { type: 'module' };
                ;
                const _0xc9506 = new Worker(new URL('' + new URL('ki7cichuz0rj.js', import.meta.url).href, import.meta.url), _0x253c33), _0x4588a0 = this.workers[_0x44ed60] = new Q0(_0xc9506), _0x591f57 = { once: true };
                ;
                const _0x17721b = { once: true };
                ;
                _0x4588a0.addEventListener('ready', () => {
                    ;
                    this.log('worker #' + _0x44ed60 + ' ready');
                    _0x4588a0.addEventListener('frame', this.onFrame);
                    _0x4588a0.addEventListener('loaded', this.onPlayerLoaded);
                    _0x4588a0.addEventListener('error', this.onPlayerError);
                    --_0x10a1df;
                    _0x10a1df || (this.log('workers ready'), _0x461bb5(), this.loaded = true);
                    ;
                }, _0x591f57);
                _0x4588a0.addEventListener('workerError', _0x4dd1ab => {
                    ;
                    _0x2650ce('rlottie load error: ' + _0x4dd1ab.message);
                    this.loaded = false;
                    ;
                }, _0x17721b);
                ;
                ;
            }
        });
    }
    ['makeAssetUrl'](_0x909509) {
        ;
        return 'assets/tgs/' + _0x909509 + '.json';
    }
    ['loadAnimationAsAsset'](_0x1aef4b, _0x3021bc) {
        ;
        return this.loadAnimationFromURL(_0x1aef4b, this.makeAssetUrl(_0x3021bc));
    }
    ['loadAnimationDataFromURL'](_0x21b588, _0x24b7d5 = 'blob') {
        ;
        return bf ? (this.loadLottieWorkers(), fetch(_0x21b588).then(_0x511a88 => !_0x511a88.headers || _0x511a88.headers.get('content-type') === 'application/octet-stream' ? _0x511a88.arrayBuffer().then(_0x1e372f => re.invokeCrypto('gzipUncompress', _0x1e372f)).then(_0x42f6c5 => fr(_0x42f6c5, '')) : _0x511a88[_0x24b7d5]())) : this.loadPromise;
    }
    ['loadAnimationFromURLManually'](_0x108862) {
        const _0x894c18 = this.makeAssetUrl(_0x108862);
        return this.loadAnimationDataFromURL(_0x894c18).then(_0x424941 => _0x165815 => this.loadAnimationFromURLNext(_0x424941, _0x165815, _0x894c18));
    }
    ['loadAnimationFromURL'](_0x697379, _0x259be6) {
        ;
        return this.loadAnimationDataFromURL(_0x259be6).then(_0x235436 => this.loadAnimationFromURLNext(_0x235436, _0x697379, _0x259be6));
    }
    ['loadAnimationFromURLNext'](_0x188df6, _0x17f700, _0x6ea505) {
        const _0x7602ec = {
            animationData: _0x188df6,
            needUpscale: true
        };
        ;
        ;
        ;
        const _0x7bd7cd = Object.assign(_0x17f700, _0x7602ec);
        return _0x7bd7cd.name || (_0x7bd7cd.name = _0x6ea505), this.loadAnimationWorker(_0x7bd7cd);
    }
    ['waitForFirstFrame'](_0x48d56d) {
        ;
        return Promise.race([
            new Promise(_0x1783c7 => {
                const _0x2c92dd = { once: true };
                ;
                _0x48d56d.addEventListener('firstFrame', _0x1783c7, _0x2c92dd);
                ;
            }),
            ft(2500)
        ]).then(() => _0x48d56d);
    }
    async ['loadAnimationWorker'](_0xd49540) {
        ;
        if (!bf) {
            return this.loadPromise;
        }
        this.loaded || await this.loadLottieWorkers();
        const {
            middleware: _0x3c232e,
            group: _0x44c0f5 = ''
        } = _0xd49540;
        if (_0x3c232e && !_0x3c232e()) {
            throw Ee('MIDDLEWARE');
        }
        if (_0xd49540.sync) {
            const _0x40e179 = xt.CACHE.generateName(_0xd49540.name, _0xd49540.width, _0xd49540.height, _0xd49540.color, _0xd49540.toneIndex), _0x41ee04 = this.playersByCacheName[_0x40e179];
            if (_0x41ee04?.size) {
                return Promise.resolve(_0x41ee04.entries().next().value[0]);
            }
        }
        const _0x5ce9cd = Lt(_0xd49540.container);
        if ((!_0xd49540.width || !_0xd49540.height) && (_0xd49540.width = parseInt(_0x5ce9cd[0].style.width), _0xd49540.height = parseInt(_0x5ce9cd[0].style.height)), !_0xd49540.width || !_0xd49540.height) {
            throw new Error('No size for sticker!');
        }
        _0xd49540.group = _0x44c0f5;
        const _0x7d3960 = this.initPlayer(_0x5ce9cd, _0xd49540), _0x57a83f = {};
        return _0x57a83f.animation = _0x7d3960, _0x57a83f.group = _0x44c0f5, _0x57a83f.observeElement = _0x7d3960.el[0], _0x57a83f.controlled = _0x3c232e, _0x57a83f.liteModeKey = _0xd49540.liteModeKey, _0x57a83f.type = 'lottie', (pe.addAnimation(_0x57a83f), _0xd49540.sync || _0x3c232e?.onClean(() => {
            ;
            _0x7d3960.remove();
        }), _0x7d3960);
    }
    ['onDestroy'](_0xbcc5e7) {
        ;
        delete this.players[_0xbcc5e7];
    }
    ['destroyWorkers']() {
        ;
        bf && (this.workers.forEach((_0x269a9c, _0x29e961) => {
            ;
            _0x269a9c.terminate();
            this.log('worker #' + _0x29e961 + ' terminated');
            ;
        }), this.log('workers destroyed'), this.workers.length = 0, this.curWorkerNum = 0, this.loaded = false, this.loadPromise = void 0);
    }
    ['initPlayer'](_0x39ba6e, _0x169206) {
        ;
        var _0x50954e;
        const _0x55a48d = {
            el: _0x39ba6e,
            worker: this.workers[this.curWorkerNum++],
            options: _0x169206
        };
        ;
        ;
        ;
        ;
        const _0x1b2fa2 = new xt(_0x55a48d), {
                reqId: _0x4cedb7,
                cacheName: _0x1b71f8
            } = _0x1b2fa2;
        this.players[_0x4cedb7] = _0x1b2fa2;
        const _0x33d7dc = _0x1b71f8 ? (_0x50954e = this.playersByCacheName)[_0x1b71f8] ?? (_0x50954e[_0x1b71f8] = new Set()) : void 0;
        return _0x1b71f8 && _0x33d7dc.add(_0x1b2fa2), this.curWorkerNum >= this.workers.length && (this.curWorkerNum = 0), _0x1b2fa2.addEventListener('destroy', () => {
            ;
            this.onDestroy(_0x4cedb7);
            _0x33d7dc.delete(_0x1b2fa2) && !_0x33d7dc.size && delete this.playersByCacheName[_0x1b71f8];
            ;
        }), _0x1b2fa2.loadFromData(_0x169206.animationData), _0x1b2fa2;
    }
}
const ls = new Z0();
N.lottieLoader = ls;
const oa = () => ({
        'cleaned': false,
        'inner': [],
        'onCleanCallbacks': []
    }), eu = Ee('MIDDLEWARE');
class tu {
    constructor() {
        ;
        this.details = oa();
        this.onDestroyCallbacks = [];
        this.onDestroy = _0x4aab2c => {
            ;
            if (this.destroyed) {
                return _0x4aab2c();
            }
            this.onDestroyCallbacks.push(_0x4aab2c);
        };
        ;
    }
    ['clean']() {
        const _0x167986 = this.details;
        _0x167986.cleaned = true;
        _0x167986.inner.splice(0, _0x167986.inner.length).forEach(_0x5cc852 => _0x5cc852.destroy());
        _0x167986.onCleanCallbacks.splice(0, _0x167986.onCleanCallbacks.length).forEach(_0x4bc9cb => _0x4bc9cb());
        _0x167986.middleware = void 0;
        this.details = oa();
        ;
    }
    ['destroy']() {
        ;
        this.destroyed = true;
        this.clean();
        this.onDestroyCallbacks.splice(0, this.onDestroyCallbacks.length).forEach(_0x4f21f7 => _0x4f21f7());
        this.parent && (xe(this.parent.details.inner, this), this.parent = void 0);
        ;
    }
    ['createMiddlewareForDetails'](_0x507d1e, _0x55a7b0) {
        const _0x18275e = () => !_0x507d1e.cleaned && (!_0x55a7b0 || _0x55a7b0());
        return _0x18275e.create = () => {
            ;
            if (!_0x18275e()) {
                throw eu;
            }
            const _0x1d1b41 = us();
            return _0x1d1b41.parent = this, _0x507d1e.inner.push(_0x1d1b41), _0x1d1b41;
        }, _0x18275e.onClean = _0x371ee3 => {
            ;
            if (!_0x18275e()) {
                return _0x371ee3();
            }
            _0x507d1e.onCleanCallbacks.push(_0x371ee3);
        }, _0x18275e.onDestroy = this.onDestroy, _0x18275e;
    }
    ['get'](_0x1947b8) {
        const _0x2d82a2 = this.details;
        return _0x2d82a2.cleaned ? this.createMiddlewareForDetails(_0x2d82a2) : _0x1947b8 ? this.createMiddlewareForDetails(_0x2d82a2, _0x1947b8) : _0x2d82a2.middleware ?? (_0x2d82a2.middleware = this.createMiddlewareForDetails(_0x2d82a2));
    }
}
function us() {
    return new tu();
}
function su(_0x5164e9) {
    return Af(Oe, _0x5164e9);
}
function ca(..._0xdc0389) {
    const [_0x12e129, _0x2cce57] = ke(..._0xdc0389);
    return (..._0xba7a11) => _0xba7a11.length === 0 ? _0x12e129() : _0x2cce57(..._0xba7a11);
}
class fu {
    constructor() {
        ;
        if (bt) {
            return;
        }
        this['_width'] = ca();
        this['_height'] = ca();
        this.viewport = window;
        ;
        const _0x403146 = () => {
            ;
            this.setDimensions();
        };
        this.viewport.addEventListener('resize', _0x403146);
        _0x403146();
        ;
    }
    ['setDimensions']() {
        const _0x24f012 = this.viewport;
        this['_width'](_0x24f012.width || _0x24f012.innerWidth);
        this['_height'](_0x24f012.height || _0x24f012.innerHeight);
        ;
    }
    get ['width']() {
        ;
        return this['_width']();
    }
    get ['height']() {
        ;
        return this['_height']();
    }
}
const hs = new fu();
N && (N.windowSize = hs);
const rc = document.createElement('div');
rc.classList.add('emoji-animation-container');
function nu({
    size: _0xe6aeba,
    stickerSize: _0x1a58df,
    doc: _0x13599e,
    middleware: _0x654f18,
    target: _0x8466e2,
    side: _0x50d938,
    skipRatio: _0x221d3d,
    play: _0x25eab4,
    managers: _0x3b8651,
    fullThumb: _0xe4ada3,
    withRandomOffset: _0x3445f6,
    relativeEffect: _0x1afac3,
    loopEffect: _0xf244f7,
    onUnmount: _0x3eb18e,
    scrollable: _0x52b865,
    textColor: _0x2ac29c,
    addOffsetX: _0x1c12df = 0,
    addOffsetY: _0xbd867d = 0
}) {
    const _0x2f1700 = document.createElement('div');
    _0x2f1700.classList.add('emoji-animation');
    _0x2f1700.style.width = _0xe6aeba + 'px';
    _0x2f1700.style.height = _0xe6aeba + 'px';
    ;
    let _0x5d9818;
    const _0x5f111b = () => {
            ;
            _0x417551.destroy();
            const _0x585f3a = _0x5d9818;
            _0x5d9818 = void 0;
            _0x585f3a?.remove();
            _0x2f1700.remove();
            _0x158328 && _0x52b865.container.removeEventListener('scroll', _0x158328);
            _0x585f3a && _0x3eb18e?.();
            ;
        }, _0x417551 = _0x654f18?.create() ?? us();
    _0x654f18 = _0x417551.get();
    const _0x2afcb6 = {
        div: _0x2f1700,
        doc: _0x13599e,
        middleware: _0x654f18,
        withThumb: false,
        needFadeIn: false,
        loop: !!_0xf244f7,
        width: _0x1a58df || _0xe6aeba,
        height: _0x1a58df || _0xe6aeba,
        play: _0x25eab4,
        group: 'none',
        skipRatio: _0x221d3d,
        managers: _0x3b8651,
        fullThumb: _0xe4ada3,
        isEffect: true,
        textColor: _0x2ac29c
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    const _0x3162ab = pn(_0x2afcb6).then(({render: _0x378985}) => _0x378985).then(_0x58841a => {
            ;
            if (!_0x654f18()) {
                throw _0x58841a.remove(), Ee('MIDDLEWARE');
            }
            const _0x2943a5 = { once: true };
            ;
            const _0x6a4d80 = {};
            return _0x6a4d80.once = true, (_0x5d9818 = _0x58841a, _0x5d9818.addEventListener('enterFrame', _0x2e6570 => {
                (!_0xf244f7 && _0x2e6570 === _0x5d9818.maxFrame || !Ys(_0x8466e2)) && _0x5f111b();
            }), _0x5d9818.addEventListener('destroy', _0x5f111b), Eo && _0x5d9818.addEventListener('firstFrame', () => {
                ;
                navigator.vibrate(100);
            }, _0x2943a5), _0x5d9818.addEventListener('firstFrame', () => {
                _0x28a644();
            }, _0x6a4d80), _0x5d9818);
        }), _0x550d9b = _0x16bfc2 => {
            const _0x4c387c = Math.random() * _0x16bfc2 * 2;
            return _0x4c387c > _0x16bfc2 ? -_0x4c387c % _0x16bfc2 : _0x4c387c;
        }, _0x3d0775 = _0x3445f6 ? _0x550d9b(16) : 0, _0x243115 = _0x3445f6 ? _0x550d9b(4) : 0, _0x28a644 = () => {
            ;
            if (!Ys(_0x8466e2)) {
                _0x5f111b();
                return;
            }
            const _0x28a891 = _0x8466e2.getBoundingClientRect(), _0x1b740c = _0x28a891.width / 200, _0x1f77e8 = _0x50d938 === 'center' ? 0 : 16 * (_0x50d938 === 'right' ? 1 : -1) * _0x1b740c, _0xa3be59 = _0x50d938 === 'center' ? 0 : 0 * _0x1b740c, _0x4e432c = _0x50d938 === 'right' ? _0x28a891.right : _0x28a891.left, _0x22abe9 = _0x28a891.top, _0x20cc35 = (_0x50d938 === 'center' ? (_0x28a891.width - _0xe6aeba) / 2 : _0x50d938 === 'right' ? -_0xe6aeba : 0) + _0x1f77e8 + _0x3d0775 + _0x1c12df * (_0x50d938 === 'right' ? 1 : -1), _0x2f3f62 = (_0x28a891.height - _0xe6aeba) / 2 + _0xa3be59 + _0x243115 + _0xbd867d, _0x14eea6 = _0x4e432c + _0x20cc35, _0x2b4429 = _0x22abe9 + _0x2f3f62;
            if (_0x2b4429 <= -_0xe6aeba || _0x2b4429 >= hs.height) {
                _0x5f111b();
                return;
            }
            _0x1afac3 ? (_0x50d938 !== 'center' ? _0x2f1700.style[_0x50d938] = Math.abs(_0x1f77e8) * -1 + 'px' : _0x2f1700.style.left = _0x20cc35 + 'px', _0x2f1700.style.top = _0x2f3f62 + 'px') : (_0x2f1700.style.top = _0x2b4429 + 'px', _0x2f1700.style.left = _0x14eea6 + 'px');
        };
    let _0x158328;
    return _0x52b865 && (_0x158328 = su(_0x28a644), _0x52b865.container.addEventListener('scroll', _0x158328)), _0x1afac3 ? (_0x2f1700.classList.add('is-relative'), _0x8466e2.parentElement.append(_0x2f1700)) : rc.append(_0x2f1700), {
        'animationDiv': _0x2f1700,
        'stickerPromise': _0x3162ab
    };
}
class iu {
    ['isEnabled']() {
        ;
        return !!(I.settings && I.settings.liteMode.all);
    }
    ['isAvailable'](_0x1bbea9) {
        ;
        return !!(I.settings && !I.settings.liteMode.all && !I.settings.liteMode[_0x1bbea9]);
    }
}
const ot = new iu();
N && (N.liteMode = ot);
const a0_0x278445 = {};
a0_0x278445.check = 'e900';
a0_0x278445.checks = 'e901';
a0_0x278445.activesessions = 'e902';
a0_0x278445.add = 'e903';
a0_0x278445.add_reaction = 'e904';
a0_0x278445.addboost = 'e905';
a0_0x278445.addmember_filled = 'e906';
a0_0x278445.adduser = 'e907';
a0_0x278445.admin = 'e908';
a0_0x278445.ads = 'e909';
a0_0x278445.align_center = 'e90a';
a0_0x278445.align_left = 'e90b';
a0_0x278445.align_right = 'e90c';
a0_0x278445.animals = 'e90d';
a0_0x278445.animations = 'e90e';
a0_0x278445.app_expand = 'e90f';
a0_0x278445.app_shrink = 'e910';
a0_0x278445.archive = 'e911';
a0_0x278445.arrow_down = 'e912';
a0_0x278445.arrow_next = 'e913';
a0_0x278445.arrow_prev = 'e914';
a0_0x278445.arrowcircle = 'e915';
a0_0x278445.arrowhead = 'e916';
a0_0x278445.attach = 'e917';
a0_0x278445.audio_repeat = 'e918';
a0_0x278445.audio_repeat_single = 'e919';
a0_0x278445.author_hidden = 'e91a';
a0_0x278445.avatarnext = 'e91b';
a0_0x278445.avatarprevious = 'e91c';
a0_0x278445.aversion = 'e91d';
a0_0x278445.back = 'e91e';
a0_0x278445.binfilled = 'e91f';
a0_0x278445.bold = 'e920';
a0_0x278445.bomb = 'e921';
a0_0x278445.boost = 'e922';
a0_0x278445.boostcircle = 'e923';
a0_0x278445.bot_filled = 'e924';
a0_0x278445.botcom = 'e925';
a0_0x278445.bots = 'e926';
a0_0x278445.brightness = 'e927';
a0_0x278445.brush = 'e928';
a0_0x278445.bubblereply = 'e929';
a0_0x278445.bug = 'e92a';
a0_0x278445.calendar = 'e92b';
a0_0x278445.calendarfilter = 'e92c';
a0_0x278445.camera = 'e92d';
a0_0x278445.cameraadd = 'e92e';
a0_0x278445.captiondown = 'e92f';
a0_0x278445.captionup = 'e930';
a0_0x278445.car = 'e931';
a0_0x278445.card = 'e932';
a0_0x278445.card_outline = 'e933';
a0_0x278445.cash_circle = 'e934';
a0_0x278445.channel = 'e935';
a0_0x278445.channel_filled = 'e936';
a0_0x278445.channelviews = 'e937';
a0_0x278445.chatspinned = 'e938';
a0_0x278445.chatsplaceholder = 'e939';
a0_0x278445.check1 = 'e93a';
a0_0x278445.checkbox = 'e93b';
a0_0x278445.checkboxblock = 'e93c';
a0_0x278445.checkboxempty = 'e93d';
a0_0x278445.checkboxon = 'e93e';
a0_0x278445.checklist_add = 'e93f';
a0_0x278445.checklist_done = 'e940';
a0_0x278445.checklist_undone = 'e941';
a0_0x278445.checkretract = 'e942';
a0_0x278445.checkround = 'e943';
a0_0x278445.checkround_filled = 'e944';
a0_0x278445.clock = 'e945';
a0_0x278445.close = 'e946';
a0_0x278445.clouddownload = 'e947';
a0_0x278445.collapse = 'e948';
a0_0x278445.colorize = 'e949';
a0_0x278445.comments = 'e94a';
a0_0x278445.commentssticker = 'e94b';
a0_0x278445.contrast = 'e94c';
a0_0x278445.copy = 'e94d';
a0_0x278445.crop = 'e94e';
a0_0x278445.cross = 'e94f';
a0_0x278445.crossgif = 'e950';
a0_0x278445.crossround = 'e951';
a0_0x278445.crossstar = 'e952';
a0_0x278445.crown = 'e953';
a0_0x278445.darkmode = 'e954';
a0_0x278445.data = 'e955';
a0_0x278445.delete = 'e956';
a0_0x278445.delete_filled = 'e957';
a0_0x278445.deletedaccount = 'e958';
a0_0x278445.deleteleft = 'e959';
a0_0x278445.deleteuser = 'e95a';
a0_0x278445.devices = 'e95b';
a0_0x278445.document = 'e95c';
a0_0x278445.down = 'e95d';
a0_0x278445.download = 'e95e';
a0_0x278445.dragfiles = 'e95f';
a0_0x278445.dragmedia = 'e960';
a0_0x278445.eats = 'e961';
a0_0x278445.edit = 'e962';
a0_0x278445.email = 'e963';
a0_0x278445.endcall_filled = 'e964';
a0_0x278445.enhance = 'e965';
a0_0x278445.enter = 'e966';
a0_0x278445.equalizer = 'e967';
a0_0x278445.expand = 'e968';
a0_0x278445.eye = 'e969';
a0_0x278445.eye1 = 'e96a';
a0_0x278445.eye2 = 'e96b';
a0_0x278445.eyecross_outline = 'e96c';
a0_0x278445.factcheck = 'e96d';
a0_0x278445.fade = 'e96e';
a0_0x278445.fast_forward = 'e96f';
a0_0x278445.fast_rewind = 'e970';
a0_0x278445.favourites = 'e971';
a0_0x278445.flag = 'e972';
a0_0x278445.flip = 'e973';
a0_0x278445.flip_image_horizontal = 'e974';
a0_0x278445.folder = 'e975';
a0_0x278445.fontframe = 'e976';
a0_0x278445.fontframe_bg = 'e977';
a0_0x278445.fontframe_outline = 'e978';
a0_0x278445.fontsize = 'e979';
a0_0x278445.forward = 'e97a';
a0_0x278445.forward_filled = 'e97b';
a0_0x278445.free_transform = 'e97c';
a0_0x278445.fullscreen = 'e97d';
a0_0x278445.gc_microphone = 'e97e';
a0_0x278445.gc_microphoneoff = 'e97f';
a0_0x278445.gem = 'e980';
a0_0x278445.gem_exchange = 'e981';
a0_0x278445.gem_transfer = 'e982';
a0_0x278445.geometric_digit_0 = 'e983';
a0_0x278445.geometric_digit_1 = 'e984';
a0_0x278445.geometric_digit_2 = 'e985';
a0_0x278445.geometric_digit_3 = 'e986';
a0_0x278445.geometric_digit_4 = 'e987';
a0_0x278445.geometric_digit_5 = 'e988';
a0_0x278445.geometric_digit_6 = 'e989';
a0_0x278445.geometric_digit_7 = 'e98a';
a0_0x278445.geometric_digit_8 = 'e98b';
a0_0x278445.geometric_digit_9 = 'e98c';
a0_0x278445.geometric_dot = 'e98d';
a0_0x278445.geometric_letter_x = 'e98e';
a0_0x278445.gifs = 'e98f';
a0_0x278445.gift = 'e990';
a0_0x278445.gift_premium = 'e991';
a0_0x278445.grain = 'e992';
a0_0x278445.group = 'e993';
a0_0x278445.group_filled = 'e994';
a0_0x278445.groupmedia = 'e995';
a0_0x278445.groupmediaoff = 'e996';
a0_0x278445.hand = 'e997';
a0_0x278445.help = 'e998';
a0_0x278445.hide = 'e999';
a0_0x278445.highlights = 'e99a';
a0_0x278445.image = 'e99b';
a0_0x278445.image_original = 'e99c';
a0_0x278445.info = 'e99d';
a0_0x278445.info2 = 'e99e';
a0_0x278445.italic = 'e99f';
a0_0x278445.key = 'e9a0';
a0_0x278445.keyboard = 'e9a1';
a0_0x278445.lamp = 'e9a2';
a0_0x278445.language = 'e9a3';
a0_0x278445.largepause = 'e9a4';
a0_0x278445.largeplay = 'e9a5';
a0_0x278445.left = 'e9a6';
a0_0x278445.limit_chat = 'e9a7';
a0_0x278445.limit_chats = 'e9a8';
a0_0x278445.limit_file = 'e9a9';
a0_0x278445.limit_folders = 'e9aa';
a0_0x278445.limit_link = 'e9ab';
a0_0x278445.limit_pin = 'e9ac';
a0_0x278445.link = 'e9ad';
a0_0x278445.link_paid = 'e9ae';
a0_0x278445.list = 'e9af';
a0_0x278445.listscreenshare = 'e9b0';
a0_0x278445.livelocation = 'e9b1';
a0_0x278445.location = 'e9b2';
a0_0x278445.lock = 'e9b3';
a0_0x278445.lockoff = 'e9b4';
a0_0x278445.loginlogodesktop = 'e9b5';
a0_0x278445.loginlogomobile = 'e9b6';
a0_0x278445.logout = 'e9b7';
a0_0x278445.mac_command_key = 'e9b8';
a0_0x278445.mediaspeed_empty = 'e9b9';
a0_0x278445.mediaspoiler = 'e9ba';
a0_0x278445.mediaspoileroff = 'e9bb';
a0_0x278445.mention = 'e9bc';
a0_0x278445.menu = 'e9bd';
a0_0x278445.message = 'e9be';
a0_0x278445.message_jump = 'e9bf';
a0_0x278445.message_quote = 'e9c0';
a0_0x278445.messageunread = 'e9c1';
a0_0x278445.microphone = 'e9c2';
a0_0x278445.microphone_crossed = 'e9c3';
a0_0x278445.microphone_crossed_filled = 'e9c4';
a0_0x278445.microphone_filled = 'e9c5';
a0_0x278445.minus = 'e9c6';
a0_0x278445.monospace = 'e9c7';
a0_0x278445.more = 'e9c8';
a0_0x278445.multistories = 'e9c9';
a0_0x278445.mute = 'e9ca';
a0_0x278445.muted = 'e9cb';
a0_0x278445.mynotes = 'e9cc';
a0_0x278445.newchannel = 'e9cd';
a0_0x278445.newchannel_filled = 'e9ce';
a0_0x278445.newchat_filled = 'e9cf';
a0_0x278445.newgroup = 'e9d0';
a0_0x278445.newgroup_filled = 'e9d1';
a0_0x278445.newprivate = 'e9d2';
a0_0x278445.newprivate_filled = 'e9d3';
a0_0x278445.newtab = 'e9d4';
a0_0x278445.next = 'e9d5';
a0_0x278445.nochannel = 'e9d6';
a0_0x278445.noncontacts = 'e9d7';
a0_0x278445.nosound = 'e9d8';
a0_0x278445.online = 'e9d9';
a0_0x278445.passwordoff = 'e9da';
a0_0x278445.pause = 'e9db';
a0_0x278445.permissions = 'e9dc';
a0_0x278445.person = 'e9dd';
a0_0x278445.phone = 'e9de';
a0_0x278445.phone_filled = 'e9df';
a0_0x278445.pin = 'e9e0';
a0_0x278445.pin2 = 'e9e1';
a0_0x278445.pinlist = 'e9e2';
a0_0x278445.pinned_filled = 'e9e3';
a0_0x278445.pinnedchat = 'e9e4';
a0_0x278445.pip = 'e9e5';
a0_0x278445.play = 'e9e6';
a0_0x278445.playback_05 = 'e9e7';
a0_0x278445.playback_15 = 'e9e8';
a0_0x278445.playback_1x = 'e9e9';
a0_0x278445.playback_2x = 'e9ea';
a0_0x278445.plus = 'e9eb';
a0_0x278445.plusround = 'e9ec';
a0_0x278445.poll = 'e9ed';
a0_0x278445.premium_addone = 'e9ee';
a0_0x278445.premium_avatars = 'e9ef';
a0_0x278445.premium_badge = 'e9f0';
a0_0x278445.premium_colors = 'e9f1';
a0_0x278445.premium_double = 'e9f2';
a0_0x278445.premium_emoji = 'e9f3';
a0_0x278445.premium_filesize = 'e9f4';
a0_0x278445.premium_lastseen = 'e9f5';
a0_0x278445.premium_limits = 'e9f6';
a0_0x278445.premium_lock = 'e9f7';
a0_0x278445.premium_management = 'e9f8';
a0_0x278445.premium_noads = 'e9f9';
a0_0x278445.premium_privacy = 'e9fa';
a0_0x278445.premium_reactions = 'e9fb';
a0_0x278445.premium_restrict = 'e9fc';
a0_0x278445.premium_speed = 'e9fd';
a0_0x278445.premium_status = 'e9fe';
a0_0x278445.premium_stickers = 'e9ff';
a0_0x278445.premium_tags = 'ea00';
a0_0x278445.premium_transcription = 'ea01';
a0_0x278445.premium_translate = 'ea02';
a0_0x278445.premium_unlock = 'ea03';
a0_0x278445.premium_wallpaper = 'ea04';
a0_0x278445.previous = 'ea05';
a0_0x278445.promote = 'ea06';
a0_0x278445.quote = 'ea07';
a0_0x278445.quote_outline = 'ea08';
a0_0x278445.radiooff = 'ea09';
a0_0x278445.radioon = 'ea0a';
a0_0x278445.reactions = 'ea0b';
a0_0x278445.reactions_filled = 'ea0c';
a0_0x278445.readchats = 'ea0d';
a0_0x278445.recent = 'ea0e';
a0_0x278445.redo = 'ea0f';
a0_0x278445.replace = 'ea10';
a0_0x278445.reply = 'ea11';
a0_0x278445.reply_filled = 'ea12';
a0_0x278445.restrict = 'ea13';
a0_0x278445.revenue = 'ea14';
a0_0x278445.rightpanel = 'ea15';
a0_0x278445.rotate = 'ea16';
a0_0x278445.rotate_left = 'ea17';
a0_0x278445.rotate_right = 'ea18';
a0_0x278445.round_chats_filled = 'ea19';
a0_0x278445.saturation = 'ea1a';
a0_0x278445.saved = 'ea1b';
a0_0x278445.savedmessages = 'ea1c';
a0_0x278445.schedule = 'ea1d';
a0_0x278445.scheduled = 'ea1e';
a0_0x278445.search = 'ea1f';
a0_0x278445.select = 'ea20';
a0_0x278445.send = 'ea21';
a0_0x278445.send2 = 'ea22';
a0_0x278445.sending = 'ea23';
a0_0x278445.sendingerror = 'ea24';
a0_0x278445.settings = 'ea25';
a0_0x278445.settings_clipped_corner = 'ea26';
a0_0x278445.settings_filled = 'ea27';
a0_0x278445.shadows = 'ea28';
a0_0x278445.sharescreen_filled = 'ea29';
a0_0x278445.sharpen = 'ea2a';
a0_0x278445.shipping = 'ea2b';
a0_0x278445.shuffle = 'ea2c';
a0_0x278445.smallscreen = 'ea2d';
a0_0x278445.smile = 'ea2e';
a0_0x278445.speaker = 'ea2f';
a0_0x278445.speakerfilled = 'ea30';
a0_0x278445.speakeroff = 'ea31';
a0_0x278445.speakerofffilled = 'ea32';
a0_0x278445.spoiler = 'ea33';
a0_0x278445.sport = 'ea34';
a0_0x278445.star = 'ea35';
a0_0x278445.star_filled = 'ea36';
a0_0x278445.statistics = 'ea37';
a0_0x278445.stickers = 'ea38';
a0_0x278445.stickers_face = 'ea39';
a0_0x278445.stop = 'ea3a';
a0_0x278445.stories = 'ea3b';
a0_0x278445.storyreply = 'ea3c';
a0_0x278445.storyrepost = 'ea3d';
a0_0x278445.strikethrough = 'ea3e';
a0_0x278445.tag = 'ea3f';
a0_0x278445.tag_add = 'ea40';
a0_0x278445.tag_alt = 'ea41';
a0_0x278445.tag_crossed = 'ea42';
a0_0x278445.tag_filter = 'ea43';
a0_0x278445.tag_name = 'ea44';
a0_0x278445.text = 'ea45';
a0_0x278445.textedit = 'ea46';
a0_0x278445.timer = 'ea47';
a0_0x278445.tip = 'ea48';
a0_0x278445.tools = 'ea49';
a0_0x278445.topics = 'ea4a';
a0_0x278445.trade = 'ea4b';
a0_0x278445.transcribe = 'ea4c';
a0_0x278445.unarchive = 'ea4d';
a0_0x278445.unclaimed = 'ea4e';
a0_0x278445.underline = 'ea4f';
a0_0x278445.undo = 'ea50';
a0_0x278445.unmute = 'ea51';
a0_0x278445.unpack = 'ea52';
a0_0x278445.unpin = 'ea53';
a0_0x278445.unread = 'ea54';
a0_0x278445.up = 'ea55';
a0_0x278445.user = 'ea56';
a0_0x278445.username = 'ea57';
a0_0x278445.videocamera = 'ea58';
a0_0x278445.videocamera_crossed_filled = 'ea59';
a0_0x278445.videocamera_filled = 'ea5a';
a0_0x278445.videochat = 'ea5b';
a0_0x278445.vignette = 'ea5c';
a0_0x278445.volume_down = 'ea5d';
a0_0x278445.volume_mute = 'ea5e';
a0_0x278445.volume_off = 'ea5f';
a0_0x278445.volume_up = 'ea60';
a0_0x278445.warmth = 'ea61';
a0_0x278445.webview = 'ea62';
a0_0x278445.win_key = 'ea63';
a0_0x278445.zoomin = 'ea64';
a0_0x278445.zoomout = 'ea65';
;
const ru = a0_0x278445, au = new Set([
        'avatarnext',
        'avatarprevious',
        'arrow_next',
        'channel',
        'chatspinned',
        'fast_forward',
        'fast_rewind',
        'forward',
        'forward_filled',
        'group',
        'group_filled',
        'left',
        'listscreenshare',
        'logout',
        'muted',
        'newchannel_filled',
        'newchannel',
        'newgroup',
        'newgroup_filled',
        'next',
        'nosound',
        'previous',
        'send',
        'send2',
        'reply',
        'reply_filled',
        'sharescreen_filled',
        'transcribe',
        'storyreply',
        'premium_noads',
        'topics',
        'pinlist',
        'deleteleft'
    ]);
function ou(_0xa8c92c) {
    ;
    return String.fromCharCode(parseInt(ru[_0xa8c92c], 16));
}
function At(_0xe67a29, ..._0x447c8d) {
    const _0x168e40 = document.createElement('span');
    return ue.isRTL && au.has(_0xe67a29) && _0x447c8d.push('icon-reflect'), _0x168e40.classList.add(Oi, ..._0x447c8d), _0x168e40.textContent = ou(_0xe67a29), _0x168e40;
}
function cu(_0x34de67, _0x55559d) {
    ;
    _0x34de67.isSeeking = true;
    _0x34de67.currentTime = _0x55559d;
    ;
}
const pr = Ri, du = pr;
async function br(_0x5d24b5) {
    const _0x19df7a = _0x5d24b5.firstElementChild;
    if (!_0x19df7a) {
        throw _0x5d24b5.src = '', _0x5d24b5.load(), new Error('leak');
    }
    const _0x4f5fc2 = _0x5d24b5.paused;
    if (_0x19df7a.remove(), _0x5d24b5.load(), !_0x5d24b5.childElementCount && !_0x5d24b5.src) {
        throw new Error('leak');
    }
    return _0x4f5fc2 ? cu(_0x5d24b5, 0.0001) : hr(_0x5d24b5), uu(_0x5d24b5, $o(_0x5d24b5));
}
async function lu(_0x58c4a8, _0x389d1b = !_0x58c4a8.getVideoPlaybackQuality().totalVideoFrames) {
    if (_0x389d1b) {
        return br(_0x58c4a8);
    }
}
async function uu(_0x5cf138, _0xb8af48) {
    ;
    if (!pr) {
        return _0xb8af48;
    }
    const _0x4e6876 = _0x25b929 => {
            ;
            _0x25b929.then(_0x425c08.resolve.bind(_0x425c08), _0x425c08.reject.bind(_0x425c08));
        }, _0x4ba3fd = () => _0x4e6876(lu(_0x5cf138)), _0x425c08 = q();
    try {
        await _0xb8af48;
    } catch {
        _0x4ba3fd();
        return;
    }
    if (_0x5cf138.getVideoPlaybackQuality().totalVideoFrames || _0x5cf138.readyState > _0x5cf138.HAVE_METADATA) {
        _0x425c08.resolve();
        return;
    }
    const _0x10b0ed = {};
    return _0x10b0ed.once = true, (_0x5cf138.addEventListener('timeupdate', _0x4ba3fd, _0x10b0ed), _0x425c08);
}
const Bs = [
        'seeked',
        'canplay',
        'canplaythrough',
        'seeking'
    ], hu = Bs.length, da = new WeakMap(), ii = new WeakMap();
function la(_0x33d274) {
    const {
        type: _0x289b47,
        target: _0x8b5b5f
    } = _0x33d274;
    if (!(_0x8b5b5f instanceof HTMLVideoElement) || _0x8b5b5f.readyState > _0x8b5b5f.HAVE_METADATA || _0x8b5b5f.isSeeking || _0x8b5b5f.ignoreLeak) {
        return;
    }
    let _0x2ef7cc = da.get(_0x8b5b5f);
    if (_0x2ef7cc || da.set(_0x8b5b5f, _0x2ef7cc = { 'events': new Set() }), !_0x2ef7cc.events.has(_0x289b47) && (_0x2ef7cc.events.add(_0x289b47), _0x2ef7cc.events.size === hu)) {
        const _0x3065fa = Array.from(_0x2ef7cc.events), _0x411483 = Bs.indexOf(_0x3065fa[0]), _0x44d650 = Bs.slice(_0x411483).concat(Bs.slice(0, _0x411483));
        if (!Rf(_0x3065fa, _0x44d650)) {
            return;
        }
        const _0x5b8a98 = ii.get(_0x8b5b5f);
        _0x5b8a98 ? (_0x5b8a98(), ii.delete(_0x8b5b5f)) : br(_0x8b5b5f).catch(ve);
    }
}
function mu(_0x1f1f79, _0x2d13c0) {
    ;
    return _0x1f1f79.addEventListener(_0x2d13c0, la, true), () => _0x1f1f79.removeEventListener(_0x2d13c0, la, true);
}
function ac(_0x192470) {
    ;
    if (!pr) {
        return;
    }
    const _0x1fa096 = Bs.map(_0x3551a7 => mu(_0x192470, _0x3551a7));
    return () => {
        ;
        _0x1fa096.forEach(_0x25462b => _0x25462b());
    };
}
ac(document);
function gu() {
    const _0x5cca5d = us();
    return is(() => _0x5cca5d.destroy()), _0x5cca5d;
}
const pu = 1.49, yf = {}, _f = {}, ua = (_0x5746cd, _0x5a80dd, _0x1487a3) => {
        const _0x56b084 = () => {
            ;
            _0x5746cd.removeEventListener('animationend', _0x56b084);
            _0x5a80dd();
            clearTimeout(_0x1d5cf9);
            ;
        };
        _0x5746cd.addEventListener('animationend', _0x56b084);
        const _0x1d5cf9 = setTimeout(_0x56b084, _0x1487a3);
    }, zt = _0x531281 => {
        const _0xfedf81 = _0x531281.childElementCount;
        return _0xfedf81 ? _0x531281.firstElementChild.classList.contains('premium-sticker-lock') && _0xfedf81 === 1 : true;
    }, ha = _0x3caa5b => {
        ;
        let _0x2952af = _0x3caa5b.firstElementChild;
        return _0x2952af && _0x2952af.classList.contains('premium-sticker-lock') && (_0x2952af = _0x2952af.nextElementSibling), _0x2952af;
    };
async function pn({
    doc: _0x38b37f,
    div: _0x59f631,
    middleware: _0x22db39,
    loadStickerMiddleware: _0x41dfae,
    lazyLoadQueue: _0x173214,
    exportLoad: _0x277a7c,
    group: _0xeef3bf,
    play: _0x4f691f,
    onlyThumb: _0x55cfc7,
    emoji: _0x3642e2,
    width: _0x4ad14f,
    height: _0x24b0e5,
    withThumb: _0x4cf0b5,
    loop: _0x5b829d,
    loadPromises: _0x353159,
    needFadeIn: _0x2d7a67,
    needUpscale: _0x1bea37,
    skipRatio: _0x53f689,
    static: _0xcd4dfc,
    managers: _0x2fe4bf = I.managers,
    fullThumb: _0x4c8f45,
    isOut: _0x176fa9,
    noPremium: _0x468af6,
    withLock: _0x381dc3,
    relativeEffect: _0x3d2cab,
    loopEffect: _0xd5606,
    isCustomEmoji: _0x2ae078,
    syncedVideo: _0x12f907,
    liteModeKey: _0x3f49a9,
    isEffect: _0x520a76,
    textColor: _0x355975,
    scrollable: _0x2e3cef,
    showPremiumInfo: _0xe9f926,
    useCache: _0x3690f6
}) {
    const _0x9e34a = arguments[0];
    _0x59f631 = Lt(_0x59f631);
    _0x3f49a9 ?? (_0x3f49a9 = 'stickers_panel');
    _0x2ae078 && (_0x3642e2 = _0x38b37f.stickerEmojiRaw);
    ;
    const _0x318d4c = _0x38b37f.sticker;
    if ((_0x318d4c === 1 || _0x318d4c === 3 && !tr) && (_0xcd4dfc = true), !_0x4ad14f && !_0x24b0e5) {
        const _0x5598a9 = sf.active, _0x46b213 = _0x3642e2 ? _0x5598a9.emojiSticker : _0x38b37f.animated ? _0x5598a9.animatedSticker : _0x5598a9.staticSticker, _0x3744fe = H(_0x38b37f.w, _0x38b37f.h).aspectFitted(_0x46b213);
        _0x4ad14f = _0x3744fe.width;
        _0x24b0e5 = _0x3744fe.height;
        ;
    }
    _0x318d4c === 2 && ls.loadLottieWorkers();
    _0x5b829d = !!(!_0x3642e2 || _0x2ae078) && _0x5b829d;
    _0x59f631.forEach(_0x31e4c4 => {
        ;
        _0x31e4c4.dataset.docId = '' + _0x38b37f.id;
        _0x3642e2 && (_0x31e4c4.dataset.stickerEmoji = _0x3642e2);
        _0x31e4c4.classList.add('media-sticker-wrapper');
        ;
    });
    _0x4f691f && _0x3f49a9 && !ot.isAvailable(_0x3f49a9) && !_0x2ae078 && !_0x520a76 && (_0x4f691f = false, _0x5b829d = false);
    ;
    let _0x4d99f0;
    const _0x454ce0 = (_0x3afca4 = _0x4d99f0?.type) => _0x4d99f0 = re.getCacheContext(_0x38b37f, _0x3afca4), _0x18237d = !_0xcd4dfc && (_0x318d4c === 2 || _0x318d4c === 3), _0x26eccf = ic(_0x38b37f);
    _0x176fa9 !== void 0 && _0x26eccf && !_0x176fa9 && _0x59f631.forEach(_0x50ecf0 => _0x50ecf0.classList.add('reflect-x'));
    const _0x319a1d = _0x26eccf && _0x381dc3;
    if (_0x319a1d) {
        const _0x2892c8 = yf[_0x38b37f.id];
        _0x59f631.forEach(_0xf64448 => {
            ;
            _0xf64448.classList.add('is-premium-sticker');
            _0xf64448.append(At('premium_lock', 'premium-sticker-lock'));
            _0x2892c8 && _0xf64448.style.setProperty('--lock-url', 'url(' + _0x2892c8 + ')');
            ;
        });
    }
    if (_0xcd4dfc && _0x318d4c !== 1) {
        const _0x2182f8 = aa(_0x38b37f, _0x4ad14f, _0x24b0e5, false);
        _0x454ce0(_0x2182f8.type);
    } else {
        _0x454ce0(_0x4c8f45?.type);
    }
    const _0x4d9d7b = _0x38b37f.attributes.find(_0x132e90 => _0x132e90['_'] === 'documentAttributeCustomEmoji');
    !_0x4d9d7b || !_0x4d9d7b.pFlags.text_color ? _0x355975 = void 0 : _0x355975 || (_0x355975 = 'primary-text-color');
    const _0x2e307e = _0x3642e2 && !_0x2ae078 ? $l(_0x3642e2) : -1, _0x5ab568 = _0x2e307e === -1 ? _0x355975 ?? _0x2e307e : _0x2e307e, _0x2aea44 = _0x4d99f0.downloaded && !_0x2d7a67, _0x3fc31c = _0x18237d, _0x1cac32 = _0x318d4c === 2 || _0x318d4c === 3 ? re.getStickerCachedThumb(_0x38b37f.id, _0x5ab568) : void 0, _0x3be44b = {
            'render': void 0,
            'load': void 0,
            'width': _0x4ad14f,
            'height': _0x24b0e5,
            'downloaded': _0x2aea44
        };
    let _0xc99b85 = q(), _0x363ae2 = false;
    if ((_0x38b37f.thumbs?.length || _0x1cac32) && zt(_0x59f631[0]) && (!_0x2aea44 || _0x3fc31c || _0x55cfc7) && _0x4cf0b5 !== false) {
        let _0x404f80 = _0x1cac32 || _0x38b37f.thumbs[0];
        const _0x2ad0d7 = (_0x506d50, _0x495dbc) => {
            ;
            zt(_0x506d50) ? ut.mutateElement(_0x506d50, () => {
                ;
                zt(_0x506d50) && (_0x495dbc.classList.add('media-sticker', 'thumbnail'), _0x506d50.append(_0x495dbc));
                _0xc99b85.resolve();
                ;
            }) : _0xc99b85.resolve();
        };
        if ('url' in _0x404f80) {
            _0x363ae2 = true;
            _0x59f631.forEach(_0x4e9eee => {
                const _0x543237 = new Image();
                Pf(_0x543237, _0x404f80.url, () => _0x2ad0d7(_0x4e9eee, _0x543237));
            });
            ;
        } else {
            if ('bytes' in _0x404f80) {
                if (_0x404f80['_'] === 'photoPathSize') {
                    _0x404f80.bytes.length || (_0x404f80 = _0x38b37f.thumbs.find(_0x1e9498 => _0x1e9498.bytes?.length) || _0x404f80);
                    const {svg: _0x5269db} = h0(_0x404f80.bytes, _0x38b37f.w, _0x38b37f.h);
                    _0x5269db.classList.add('rlottie-vector', 'media-sticker', 'thumbnail');
                    _0x59f631.forEach((_0x5bd09a, _0x257758) => _0x5bd09a.append(_0x257758 > 0 ? _0x5269db.cloneNode(true) : _0x5269db));
                    _0x363ae2 = true;
                    _0xc99b85.resolve();
                    ;
                } else {
                    if (_0x2e307e <= 0) {
                        const _0x4afd86 = () => {
                            ;
                            _0x59f631.forEach(_0x8380f8 => {
                                const _0x5cecd0 = new Image(), _0x1625f7 = Jo(_0x38b37f, _0x404f80, true);
                                Pf(_0x5cecd0, _0x1625f7, () => _0x2ad0d7(_0x8380f8, _0x5cecd0), _0x3690f6);
                            });
                        };
                        Qi || _0x38b37f.pFlags.stickerThumbConverted || _0x4d99f0.url ? (_0x363ae2 = true, _0x4afd86()) : (_0x363ae2 = true, $i.convert('main-' + _0x38b37f.id, _0x404f80.bytes).then(_0x3e980b => {
                            ;
                            if (_0x2fe4bf.appDocsManager.saveWebPConvertedStrippedThumb(_0x38b37f.id, _0x3e980b), _0x404f80.bytes = _0x3e980b, _0x38b37f.pFlags.stickerThumbConverted = true, _0x22db39 && !_0x22db39() || !zt(_0x59f631[0])) {
                                _0xc99b85.resolve();
                                return;
                            }
                            _0x4afd86();
                        }).catch(() => _0xc99b85.resolve()));
                    }
                }
            } else {
                if ((_0x318d4c === 2 && _0x2e307e <= 0 || _0x318d4c === 3) && (_0x4cf0b5 || _0x55cfc7)) {
                    const _0xc44662 = async () => {
                            ;
                            if (!zt(_0x59f631[0]) || _0x22db39 && !_0x22db39()) {
                                _0xc99b85.resolve();
                                return;
                            }
                            const _0x1870d3 = (_0xc7a155, _0x245ee5, _0x40422e) => {
                                ;
                                if (!zt(_0xc7a155) || _0x22db39 && !_0x22db39()) {
                                    _0xc99b85.resolve();
                                    return;
                                }
                                _0x40422e ? Pf(_0x245ee5, _0x40422e, () => _0x2ad0d7(_0xc7a155, _0x245ee5), _0x3690f6) : _0x2ad0d7(_0xc7a155, _0x245ee5);
                            };
                            _0x454ce0();
                            _0x59f631.forEach(_0x392ceb => {
                                ;
                                if (_0x4d99f0.url) {
                                    _0x1870d3(_0x392ceb, new Image(), _0x4d99f0.url);
                                } else {
                                    if ('bytes' in _0x404f80) {
                                        const _0x599cad = I0(_0x38b37f, _0x404f80, true);
                                        _0x599cad.loadPromise.then(() => _0x1870d3(_0x392ceb, _0x599cad.image, ''));
                                    } else {
                                        _s.downloadMediaURL({
                                            'media': _0x38b37f,
                                            'thumb': _0x404f80
                                        }).then(async _0x1fe37e => _0x1870d3(_0x392ceb, new Image(), _0x1fe37e));
                                    }
                                }
                            });
                            ;
                        }, _0x2a1158 = {
                            div: _0x59f631[0],
                            load: _0xc44662
                        };
                    ;
                    ;
                    ;
                    if (_0x173214 && _0x55cfc7) {
                        return _0x173214.push(_0x2a1158), _0xc99b85.resolve(), _0x3be44b;
                    }
                    _0xc44662();
                    _0x404f80.url && (_0x363ae2 = true);
                    ;
                }
            }
        }
    }
    if (_0x353159 && _0x363ae2 && _0x353159.push(_0xc99b85), _0x55cfc7) {
        return _0x3be44b;
    }
    const _0x1b7895 = Ee('MIDDLEWARE'), _0x98bc1 = async () => {
            ;
            if (_0x22db39 && !_0x22db39()) {
                throw _0x1b7895;
            }
            if (_0x318d4c === 2 && !_0xcd4dfc) {
                const _0x1e4bf3 = {
                    media: _0x38b37f,
                    queueId: _0x173214?.queueId,
                    thumb: _0x4c8f45
                };
                ;
                ;
                ;
                ;
                const _0x2080d4 = await _s.downloadMedia(_0x1e4bf3);
                if (_0x22db39 && !_0x22db39()) {
                    throw _0x1b7895;
                }
                const _0x4c5180 = {
                    container: _0x59f631[0],
                    loop: _0x5b829d,
                    autoplay: _0x4f691f,
                    animationData: _0x2080d4,
                    width: _0x4ad14f,
                    height: _0x24b0e5,
                    name: 'doc' + _0x38b37f.id,
                    needUpscale: _0x1bea37,
                    skipRatio: _0x53f689,
                    toneIndex: _0x2e307e,
                    sync: _0x2ae078,
                    middleware: _0x41dfae ?? _0x22db39,
                    group: _0xeef3bf,
                    liteModeKey: _0x3f49a9 || void 0,
                    textColor: _0x2ae078 ? void 0 : _0x355975
                };
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                ;
                const _0x1c2315 = await ls.loadAnimationWorker(_0x4c5180), _0x477917 = _0x319a1d ? () => {
                        ;
                        var _0x3c6294;
                        const _0xe19656 = yf[_0x3c6294 = _0x38b37f.id] ?? (yf[_0x3c6294] = m0(_0x1c2315.canvas[0]));
                        _0x59f631.forEach(_0x19145f => _0x19145f.style.setProperty('--lock-url', 'url(' + _0xe19656 + ')'));
                    } : void 0, _0x3d8dba = (_0x5b6300, _0x4486aa) => {
                        ;
                        let _0x588631 = ha(_0x5b6300);
                        _0x588631 = _0x588631 !== _0x4486aa && _0x588631;
                        _0x2d7a67 !== false && (_0x2d7a67 = (_0x2d7a67 || !_0x588631 || _0x588631.tagName === 'svg') && ot.isAvailable('animations'));
                        ;
                        const _0x10d3dd = () => {
                            ;
                            _0x588631 && _0x588631 !== _0x4486aa && _0x588631.tagName !== 'DIV' && _0x588631.remove();
                        };
                        _0x2d7a67 ? ut.mutate(() => {
                            ;
                            _0x4486aa && _0x4486aa.classList.add('fade-in');
                            _0x588631 && _0x588631.classList.add('fade-out');
                            ua(_0x4486aa || _0x588631, () => {
                                ;
                                ut.mutate(() => {
                                    ;
                                    _0x4486aa && _0x4486aa.classList.remove('fade-in');
                                    _0x10d3dd();
                                    ;
                                });
                            }, 400);
                            ;
                        }) : _0x588631 && ut.mutate(_0x10d3dd);
                    }, _0x857c66 = {};
                return _0x857c66.once = true, (_0x1c2315.addEventListener('firstFrame', () => {
                    const _0x162789 = _0x1c2315.canvas[0];
                    (_0x4cf0b5 !== false || _0x2ae078) && ia(_0x38b37f, _0x162789, _0x5ab568);
                    _0x319a1d && _0x477917();
                    _0x2ae078 || _0x59f631.forEach((_0x504be0, _0x2a87a7) => {
                        _0x3d8dba(_0x504be0, _0x1c2315.canvas[_0x2a87a7]);
                    });
                    ;
                }, _0x857c66), _0x3642e2 && _0x2fe4bf.appStickersManager.preloadAnimatedEmojiStickerAnimation(_0x3642e2), _0x1c2315);
            } else {
                if (_0xcd4dfc || _0x318d4c === 3) {
                    const _0x5cb435 = _0x18237d && _0x12f907, _0x30311d = _0x5cb435 ? gr.generateName('' + _0x38b37f.id, 0, 0, void 0, void 0) : void 0, _0xcb286d = _f[_0x30311d];
                    if (_0xcb286d) {
                        return _0xcb286d;
                    }
                    const _0x1df80a = (_0x5cb435 ? _0x59f631.slice(0, 1) : _0x59f631).map(() => {
                            ;
                            let _0x56ccb6;
                            if (_0xcd4dfc) {
                                _0x56ccb6 = new Image();
                            } else {
                                const _0x2a6156 = { middleware: _0x22db39 };
                                ;
                                const _0x2714f1 = _0x56ccb6 = y0(_0x2a6156);
                                if (_0x2714f1.muted = true, _0x4f691f && (_0x2714f1.autoplay = true), _0x5b829d && (_0x2714f1.loop = true), _0x2714f1['_autoplay'] = _0x4f691f || false, _0x2714f1['_loop'] = _0x5b829d || false, _0x5b829d && typeof _0x5b829d == 'number') {
                                    let _0x1768f2 = function () {
                                            ;
                                            _0x13cf1a > this.currentTime && ++_0x49cbe3 === _0x5b829d && (this.autoplay = false, this.loop = false, this.pause(), _0x2714f1.removeEventListener('timeupdate', _0x1768f2));
                                            this.timeUpdatedTimes = (this.timeUpdatedTimes || 0) + 1;
                                            _0x13cf1a = this.currentTime;
                                            ;
                                        }, _0x13cf1a = 0, _0x49cbe3 = 0;
                                    _0x2714f1.addEventListener('timeupdate', _0x1768f2);
                                    _0x22db39.onClean(() => {
                                        ;
                                        _0x2714f1.removeEventListener('timeupdate', _0x1768f2);
                                    });
                                    ;
                                }
                            }
                            return _0x56ccb6.classList.add('media-sticker'), _0x56ccb6;
                        }), _0x1b89ae = _0x59f631.map((_0xcf99d9, _0x370a7d) => {
                            const _0x3ac431 = ha(_0xcf99d9);
                            return _0x3ac431 !== _0x1df80a[_0x370a7d] && _0x3ac431;
                        });
                    _0x2d7a67 !== false && (_0x2d7a67 = (_0x2d7a67 || !_0x2aea44 || (_0xcd4dfc ? _0x1b89ae[0] : !_0x1b89ae[0] || _0x1b89ae[0].tagName === 'svg')) && ot.isAvailable('animations'));
                    _0x2d7a67 && _0x1df80a.forEach(_0x55ad96 => _0x55ad96.classList.add('fade-in'));
                    ;
                    const _0x341b22 = new Promise(async (_0x181104, _0x44a0e8) => {
                        const _0x3723c1 = async () => {
                            ;
                            if (_0x22db39 && !_0x22db39()) {
                                _0x44a0e8(_0x1b7895);
                                return;
                            }
                            const _0x46275a = _0x1df80a.length, _0x1ff7df = [], _0x42dd6e = (_0x50050e, _0x5d10b, _0x451ed3) => {
                                    ;
                                    ut.mutateElement(_0x50050e, () => {
                                        ;
                                        if (_0x22db39 && !_0x22db39()) {
                                            _0x44a0e8(_0x1b7895);
                                            return;
                                        }
                                        if (!_0x5d10b) {
                                            (!_0x5cb435 || !_0x18237d) && _0x451ed3?.remove();
                                            return;
                                        }
                                        const _0x150aec = _0x5d10b instanceof HTMLVideoElement;
                                        if (_0x150aec) {
                                            const {
                                                    videoWidth: _0x539bc6,
                                                    videoHeight: _0x50b541
                                                } = _0x5d10b, _0x520b56 = _0x539bc6 / _0x50b541;
                                            let _0x543ac6 = _0x4ad14f * window.devicePixelRatio, _0x4e8b96 = _0x24b0e5 * window.devicePixelRatio;
                                            if (_0x520b56 < 1 ? _0x543ac6 = _0x4e8b96 * _0x520b56 : _0x4e8b96 = _0x543ac6 / _0x520b56, !ec(_0x38b37f, _0x2e307e, _0x543ac6, _0x4e8b96)) {
                                                const _0x2f6e7d = document.createElement('canvas');
                                                _0x2f6e7d.width = _0x543ac6;
                                                _0x2f6e7d.height = _0x4e8b96;
                                                _0x2f6e7d.getContext('2d').drawImage(_0x5d10b, 0, 0, _0x2f6e7d.width, _0x2f6e7d.height);
                                                ia(_0x38b37f, _0x2f6e7d, _0x2e307e);
                                                ;
                                            }
                                        }
                                        if (_0x5cb435) {
                                            _0x181104(_0x5d10b);
                                            return;
                                        }
                                        if (_0x150aec && du && (ii.set(_0x5d10b, () => {
                                                ;
                                                const _0xed7d02 = () => {
                                                    ;
                                                    br(_0x5d10b).catch(ve);
                                                };
                                                if (!_0x451ed3 || !(_0x451ed3 instanceof HTMLImageElement)) {
                                                    const _0x988b1c = document.createElement('div'), _0xab851b = { ..._0x9e34a };
                                                    _0xab851b.div = _0x988b1c;
                                                    _0xab851b.static = true;
                                                    _0xab851b.exportLoad = void 0;
                                                    _0xab851b.needFadeIn = false;
                                                    _0xab851b.lazyLoadQueue = void 0;
                                                    pn(_0xab851b).then(({render: _0x1bbc49}) => _0x1bbc49).finally(() => {
                                                        ut.mutateElement(_0x5d10b, () => {
                                                            ;
                                                            _0x22db39() && _0x50050e.append(...Array.from(_0x988b1c.children));
                                                            _0x5d10b.remove();
                                                            _0xed7d02();
                                                            ;
                                                        });
                                                    });
                                                    ;
                                                } else {
                                                    _0x5d10b.replaceWith(_0x451ed3);
                                                    _0xed7d02();
                                                    ;
                                                }
                                            }), _0x5d10b.duration < 1 || _0x5d10b.getVideoPlaybackQuality().totalVideoFrames < 10)) {
                                            const _0xb86ec = ac(_0x5d10b);
                                            _0x22db39?.onClean(_0xb86ec);
                                        }
                                        _0x50050e.append(_0x5d10b);
                                        _0x2d7a67 ? (_0x451ed3 && _0x451ed3.classList.add('fade-out'), ua(_0x5d10b, () => {
                                            ;
                                            _0x5d10b.classList.remove('fade-in');
                                            _0x451ed3?.remove();
                                            ;
                                        }, 400)) : _0x451ed3?.remove();
                                        _0x18237d && pe.addAnimation({
                                            'animation': _0x5d10b,
                                            'observeElement': _0x50050e,
                                            'group': _0xeef3bf,
                                            'controlled': _0x22db39,
                                            'liteModeKey': _0x3f49a9 || void 0,
                                            'type': 'video'
                                        });
                                        _0x1ff7df.push(_0x5d10b) === _0x46275a && _0x181104(_0x1ff7df);
                                        ;
                                    });
                                };
                            _0x454ce0();
                            let _0x41e058;
                            _0x59f631.forEach((_0x210ab3, _0x3b567a) => {
                                const _0x4af23d = _0x1df80a[_0x3b567a], _0x3a5ab5 = () => _0x42dd6e(_0x210ab3, _0x4af23d, _0x1b89ae[_0x3b567a]);
                                _0x4af23d && (_0x41e058 = Yo(_0x4af23d, _0x4d99f0.url, _0x3690f6));
                                _0x41e058.then(_0x3a5ab5);
                                ;
                            });
                        };
                        if (_0x454ce0(), _0x4d99f0.url) {
                            _0x3723c1();
                        } else {
                            let _0x1ee9ea;
                            if (_0x318d4c !== 1 && _0xcd4dfc) {
                                const _0xe28c9b = aa(_0x38b37f, _0x4ad14f, _0x24b0e5, false), _0x5bbc88 = {
                                        media: _0x38b37f,
                                        thumb: _0xe28c9b,
                                        queueId: _0x173214?.queueId
                                    };
                                ;
                                ;
                                ;
                                _0x1ee9ea = _s.downloadMediaURL(_0x5bbc88);
                                ;
                            } else {
                                _0x1ee9ea = _s.downloadMediaURL({
                                    'media': _0x38b37f,
                                    'queueId': _0x173214?.queueId
                                });
                            }
                            _0x1ee9ea.then(_0x3723c1, _0x44a0e8);
                        }
                    });
                    return _0x30311d && (_f[_0x30311d] = _0x341b22, _0x41dfae && _0x341b22.finally(() => {
                        _0x41dfae() || delete _f[_0x30311d];
                    })), _0x341b22;
                }
            }
        };
    if (_0x277a7c && (_0x277a7c === 1 && (!_0x2aea44 || _0x18237d) || _0x277a7c === 2)) {
        return _0x3be44b.load = _0x98bc1, _0x3be44b;
    }
    const _0x5169ed = {
        div: _0x59f631[0],
        load: _0x98bc1
    };
    ;
    ;
    ;
    const _0x264234 = _0x173214 && (!_0x2aea44 || _0x18237d) ? (_0x173214.push(_0x5169ed), Promise.resolve()) : _0x98bc1();
    return _0x2aea44 && _0xcd4dfc && (_0xc99b85 = _0x264234, _0x353159?.push(_0xc99b85)), _0x318d4c === 2 && _0x26eccf && _0x176fa9 !== void 0 && !_0x468af6 && yu({
        'container': _0x59f631[0],
        'doc': _0x38b37f,
        'managers': _0x2fe4bf,
        'middleware': _0x22db39,
        'isOut': _0x176fa9,
        'width': _0x4ad14f,
        'loadPromise': _0x264234,
        'relativeEffect': _0x3d2cab,
        'loopEffect': _0xd5606,
        'scrollable': _0x2e3cef,
        'showPremiumInfo': _0xe9f926
    }), _0x3be44b.render = _0x264234, _0x3be44b;
}
async function bu({
    e: _0x6c5266,
    container: _0x1e8cd2,
    doc: _0x2b9457,
    managers: _0x1df2ec,
    middleware: _0x5ef60b,
    isOut: _0x76fd6,
    width: _0x437dab,
    loadPromise: _0x5b3158,
    relativeEffect: _0x3e182c,
    loopEffect: _0x3c43ba,
    scrollable: _0x4d6a12,
    showPremiumInfo: _0x3eb099
}) {
    const _0x409acc = ot.isAvailable('effects_premiumstickers') || _0x3e182c;
    if (se(_0x6c5266), !_0x6c5266.isTrusted && !_0x409acc) {
        return;
    }
    if (_0x1e8cd2.dataset.playing || !_0x409acc) {
        _0x3eb099?.();
        return;
    }
    _0x1e8cd2.dataset.playing = '1';
    await _0x5b3158;
    ;
    const {
        animationDiv: _0x19c4e1,
        stickerPromise: _0x478391
    } = nu({
        'doc': _0x2b9457,
        'middleware': _0x5ef60b,
        'side': _0x76fd6 ? 'right' : 'left',
        'size': _0x437dab * pu,
        'target': _0x1e8cd2,
        'play': true,
        'fullThumb': ic(_0x2b9457),
        'relativeEffect': _0x3e182c,
        'loopEffect': _0x3c43ba,
        'scrollable': _0x4d6a12
    });
    _0x76fd6 !== void 0 && !_0x76fd6 && _0x19c4e1.classList.add('reflect-x');
    _0x478391.then(_0x3e1771 => {
        ;
        _0x3e1771.addEventListener('destroy', () => {
            ;
            delete _0x1e8cd2.dataset.playing;
        });
    });
    ;
}
function yu(_0x5e9bf7) {
    ;
    _0x5e9bf7.managers.appStickersManager.preloadSticker(_0x5e9bf7.doc.id, true);
    const _0xc0fe83 = Ns(_0x5e9bf7.container, _0x4f2368 => {
        const _0x2423a6 = { ..._0x5e9bf7 };
        _0x2423a6.e = _0x4f2368;
        bu(_0x2423a6);
        ;
    });
    _0x5e9bf7.middleware.onDestroy(_0xc0fe83);
}
function i3(_0x41c977) {
    const _0x29c69c = document.createElement('div');
    _0x41c977.class && _0x29c69c.classList.add(_0x41c977.class);
    const _0x2086ff = gu();
    _0x41c977.autoStyle && (_0x29c69c.style.width = _0x41c977.width + 'px', _0x29c69c.style.height = _0x41c977.height + 'px', _0x29c69c.style.position = 'relative');
    let _0x534d11 = Promise.resolve();
    return rt(Is(() => _0x41c977.sticker, async _0x43e09a => {
        ;
        await _0x534d11;
        _0x43e09a === _0x41c977.sticker && (_0x534d11 = pn({
            'middleware': _0x2086ff.get(),
            ..._0x41c977.extraOptions,
            'width': _0x41c977.width,
            'height': _0x41c977.height,
            'div': _0x29c69c,
            'doc': _0x43e09a
        }).then(_0x14ba52 => _0x14ba52.render).then(_0x5a6384 => {
            ;
            _0x5a6384 && _0x41c977.onRender?.(_0x5a6384);
        }));
        ;
    })), is(() => _0x2086ff.destroy()), typeof _0x41c977.ref == 'function' && _0x41c977.ref(_0x29c69c), _0x29c69c;
}
function yr(_0x1e56c3, _0x4095bf, _0x38b4ab, _0x167255 = _0x1e56c3.getBoundingClientRect(), _0x123d61 = _0x4095bf.getBoundingClientRect()) {
    ;
    let {
        top: _0x998dd3,
        right: _0x44da58,
        bottom: _0x38e64b,
        left: _0x585d7c
    } = _0x123d61;
    if (_0x38b4ab) {
        const _0xbada78 = _0x4095bf.querySelector('.sticky');
        _0xbada78 && (_0x998dd3 = _0xbada78.getBoundingClientRect().bottom);
    }
    if (_0x167255.top >= _0x38e64b || _0x167255.bottom <= _0x998dd3 || _0x167255.right <= _0x585d7c || _0x167255.left >= _0x44da58) {
        return null;
    }
    const _0x48399d = {
        top: false,
        right: false,
        bottom: false,
        left: false,
        vertical: 0,
        horizontal: 0
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    const _0x4f24b7 = _0x48399d, _0x30de18 = hs.width, _0x23fdb7 = hs.height, _0x5cc1dd = {
            top: _0x167255.top < _0x998dd3 && _0x998dd3 !== 0 ? (_0x4f24b7.top = true, ++_0x4f24b7.vertical, _0x998dd3) : _0x167255.top,
            right: _0x167255.right > _0x44da58 && _0x44da58 !== _0x30de18 ? (_0x4f24b7.right = true, ++_0x4f24b7.horizontal, _0x44da58) : _0x167255.right,
            bottom: _0x167255.bottom > _0x38e64b && _0x38e64b !== _0x23fdb7 ? (_0x4f24b7.bottom = true, ++_0x4f24b7.vertical, _0x38e64b) : _0x167255.bottom,
            left: _0x167255.left < _0x585d7c && _0x585d7c !== 0 ? (_0x4f24b7.left = true, ++_0x4f24b7.horizontal, _0x585d7c) : _0x167255.left
        };
    ;
    ;
    ;
    ;
    ;
    const _0x1b1753 = {};
    return _0x1b1753.rect = _0x5cc1dd, _0x1b1753.overflow = _0x4f24b7, _0x1b1753;
}
window.getVisibleRect = yr;
function vu({
    overflowElement: _0x25f27f,
    overflowRect: _0x3873cd,
    selector: _0x2310a9,
    extraSize: _0x26fe19,
    extraMinLength: _0xe6a50a,
    elements: _0x125f93
}) {
    ;
    _0x3873cd ?? (_0x3873cd = _0x25f27f.getBoundingClientRect());
    _0x125f93 ?? (_0x125f93 = Array.from(_0x25f27f.querySelectorAll(_0x2310a9)));
    _0x26fe19 && (_0x3873cd = {
        'top': _0x3873cd.top - _0x26fe19,
        'right': _0x3873cd.right + _0x26fe19,
        'bottom': _0x3873cd.bottom + _0x26fe19,
        'left': _0x3873cd.left - _0x26fe19
    });
    ;
    const _0x41ab32 = [], _0x12742a = [], _0x42b317 = [];
    let _0x46b904 = false;
    for (const _0x113c03 of _0x125f93) {
        const _0x2d1cf3 = _0x113c03.getBoundingClientRect(), _0x3ccce0 = yr(_0x113c03, _0x25f27f, false, _0x2d1cf3, _0x3873cd), _0x342cfd = !!_0x3ccce0;
        let _0x294c7d;
        const _0x86ac1d = {
            element: _0x113c03,
            rect: _0x2d1cf3,
            visibleRect: _0x3ccce0
        };
        ;
        ;
        ;
        _0x342cfd ? (_0x46b904 = true, _0x294c7d = _0x12742a) : _0x46b904 ? _0x294c7d = _0x42b317 : _0x294c7d = _0x41ab32;
        _0x294c7d.push(_0x86ac1d);
        ;
        ;
    }
    return _0xe6a50a && (_0x12742a.unshift(..._0x41ab32.splice(Math.max(0, _0x41ab32.length - _0xe6a50a), _0xe6a50a)), _0x12742a.push(..._0x42b317.splice(0, _0xe6a50a))), {
        'invisibleTop': _0x41ab32,
        'visible': _0x12742a,
        'invisibleBottom': _0x42b317
    };
}
function oc(_0x34f422, _0x5691b8) {
    ;
    if (typeof _0x5691b8 == 'string') {
        _0x34f422.textContent = _0x5691b8;
        return;
    }
    const _0x470cde = _0x34f422.firstChild;
    _0x470cde ? _0x34f422.lastChild === _0x470cde ? _0x470cde.replaceWith(_0x5691b8) : (_0x34f422.textContent = '', _0x34f422.append(_0x5691b8)) : _0x34f422.append(_0x5691b8);
}
const vr = new WeakMap(), cc = new ResizeObserver(_0x3d5300 => {
        ;
        for (const _0x118946 of _0x3d5300)
            vr.get(_0x118946.target)(_0x118946);
    });
function dc(_0x4aabbe, _0xadaf7b) {
    ;
    return vr.set(_0x4aabbe, _0xadaf7b), cc.observe(_0x4aabbe), () => {
        ;
        lc(_0x4aabbe);
    };
}
function lc(_0x5ba152) {
    ;
    vr.delete(_0x5ba152);
    cc.unobserve(_0x5ba152);
    ;
}
const Eu = '__PAID_REACTION_EMOJI__', vf = new l0(), nn = class nn extends HTMLElement {
        constructor() {
            ;
            super();
            this.onResizeEntry = _0x462e3f => {
                ;
                this.setDimensionsFromRect(_0x462e3f.contentRect);
            };
            this.onElementCleanup = (_0x3f5ffd, _0x5a456e, _0x4d684a) => {
                ;
                if (_0x3f5ffd.clear(), _0x5a456e.middlewares.delete(_0x4d684a), !_0x5a456e.middlewares.size) {
                    if (_0x5a456e.player) {
                        const _0x417738 = Gt.get(_0x5a456e.player);
                        if (_0x417738 && (_0x417738.close?.(), Gt.delete(_0x5a456e.player)), Gt.delete(_0x5a456e.player), _0x5a456e.player instanceof xt) {
                            _0x5a456e.player.overrideRender = ve;
                            _0x5a456e.player.remove();
                            ;
                        } else {
                            if (_0x5a456e.player instanceof HTMLVideoElement) {
                                const _0x372bb5 = gr.generateName('' + _0x3f5ffd.docId, 0, 0, void 0, void 0);
                                delete _f[_0x372bb5];
                            }
                        }
                        _0x5a456e.player = void 0;
                    }
                    Yt.get(_0x5a456e.key) === _0x5a456e && Yt.delete(_0x5a456e.key) && !Yt.size && Au();
                }
            };
            this.classList.add('custom-emoji-renderer');
            this.canvas = document.createElement('canvas');
            this.canvas.classList.add('custom-emoji-canvas');
            this.context = this.canvas.getContext('2d');
            this.append(this.canvas);
            this.playersSynced = new Map();
            this.textColored = new Set();
            this.clearedElements = new WeakSet();
            this.customEmojis = new Map();
            this.animationGroup = 'EMOJI';
            this.isCanvasClean = false;
            ;
        }
        ['connectedCallback']() {
            ;
            if (js.has(this)) {
                return;
            }
            const _0x2d3b4d = this.observeResizeElement ?? this.canvas;
            _0x2d3b4d && dc(_0x2d3b4d, this.onResizeEntry);
            js.add(this);
            this.connectedCallback = void 0;
            ;
        }
        ['disconnectedCallback']() {
            ;
            this.isConnected || !this.auto || (this.destroy?.(), this.disconnectedCallback = void 0);
        }
        ['destroy']() {
            const _0x31f477 = this.observeResizeElement ?? this.canvas;
            _0x31f477 && lc(_0x31f477);
            this.customEmojis.forEach(_0x195e5f => {
                _0x195e5f.forEach(_0x4aad03 => {
                    _0x4aad03.clear();
                });
            });
            js.delete(this);
            this.playersSynced.clear();
            this.middlewareHelper?.clean();
            this.customEmojis.clear();
            this.textColored.clear();
            this.destroy = this.lastPausedVideo = void 0;
            ;
        }
        ['getOffsets'](_0x274ca9 = new Map()) {
            ;
            if (!this.playersSynced.size) {
                return _0x274ca9;
            }
            const _0x197e8e = yt(this, 'scrollable') || this.offsetParent;
            if (!_0x197e8e) {
                return _0x274ca9;
            }
            const _0x26952f = _0x197e8e.getBoundingClientRect(), _0x32e8ce = this.getBoundingClientRect();
            for (const _0x241623 of this.playersSynced.keys()) {
                const _0x5b569e = Array.from(_0x241623), _0x58b8f6 = this.isSelectable ? _0x5b569e.map(_0x5e14e5 => _0x5e14e5.placeholder) : _0x5b569e, {visible: _0x30d038} = vu({
                        'overflowElement': _0x197e8e,
                        'overflowRect': _0x26952f,
                        'elements': _0x58b8f6,
                        'extraSize': this.size.height * 2.5
                    }), _0x1a33d4 = _0x30d038.map(({rect: _0x13ba1d}) => {
                        const _0x1151fc = _0x13ba1d.top - _0x32e8ce.top, _0x29fd3b = _0x13ba1d.left - _0x32e8ce.left, _0x3591fd = {};
                        return _0x3591fd.top = _0x1151fc, _0x3591fd.left = _0x29fd3b, _0x3591fd.width = _0x13ba1d.width, _0x3591fd;
                    });
                _0x1a33d4.length && _0x274ca9.set(_0x241623, _0x1a33d4);
            }
            return _0x274ca9;
        }
        ['clearCanvas']() {
            ;
            if (this.isCanvasClean) {
                return;
            }
            const {
                context: _0x28af11,
                canvas: _0x103924
            } = this;
            _0x28af11.clearRect(0, 0, _0x103924.width, _0x103924.height);
            this.isCanvasClean = true;
            ;
        }
        ['render'](_0x36500e) {
            const {
                context: _0x530146,
                canvas: _0x86d0ad,
                isDimensionsSet: _0x41597e
            } = this;
            _0x41597e || this.setDimensionsFromRect(void 0, false);
            this.isCanvasClean = false;
            ;
            const {
                width: _0x59757d,
                height: _0x49aa00,
                dpr: _0x231dd0
            } = _0x86d0ad;
            for (const [_0x5f3fd1, _0x437fee] of _0x36500e) {
                const _0xab2de8 = this.playersSynced.get(_0x5f3fd1), _0x1cc887 = Gt.get(_0xab2de8) || (_0xab2de8 instanceof HTMLVideoElement ? _0xab2de8 : void 0);
                if (!_0x1cc887) {
                    continue;
                }
                const _0x16fed5 = _0x1cc887 instanceof ImageData;
                let _0x3be294, _0x2d6696;
                _0xab2de8 instanceof HTMLVideoElement ? (_0x3be294 = this.size.width * _0x231dd0, _0x2d6696 = this.size.height * _0x231dd0) : (_0x3be294 = _0x1cc887.width, _0x2d6696 = _0x1cc887.height);
                const _0x32ee3e = Math.round(_0x437fee[0].width * _0x231dd0);
                if (_0x32ee3e !== _0x3be294) {
                    _0x3be294 = _0x32ee3e;
                    _0x2d6696 = _0x32ee3e;
                }
                const _0x517cff = _0x59757d - _0x3be294, _0x5a16ad = this.textColored.has(_0x5f3fd1) ? St.getProperty(this.textColor) : void 0;
                !this.clearedElements.has(_0x5f3fd1) && !this.isSelectable && (this.isSelectable ? _0x5f3fd1.forEach(_0x160f7b => {
                    ;
                    _0x160f7b.lastChildWas ?? (_0x160f7b.lastChildWas = _0x160f7b.lastChild);
                    oc(_0x160f7b, _0x160f7b.firstChild);
                    ;
                }) : _0x5f3fd1.forEach(_0x2e60a3 => {
                    ;
                    _0x2e60a3.replaceChildren();
                }), this.clearedElements.add(_0x5f3fd1));
                _0x437fee.forEach(({
                    top: _0x189414,
                    left: _0x4c9229
                }) => {
                    ;
                    _0x189414 = Math.round(_0x189414 * _0x231dd0);
                    _0x4c9229 = Math.round(_0x4c9229 * _0x231dd0);
                    !(_0x4c9229 < 0 || _0x4c9229 > _0x517cff) && (_0x16fed5 ? _0x530146.putImageData(_0x1cc887, _0x4c9229, _0x189414) : _0x530146.drawImage(_0x1cc887, _0x4c9229, _0x189414, _0x3be294, _0x2d6696), _0x5a16ad && gn(_0x530146, _0x5a16ad, _0x4c9229, _0x189414, _0x3be294, _0x2d6696));
                    ;
                });
                ;
            }
        }
        ['checkForAnyFrame']() {
            ;
            for (const _0x4acbcf of this.playersSynced.values())
                if (Gt.has(_0x4acbcf) || _0x4acbcf instanceof HTMLVideoElement) {
                    return true;
                }
            return false;
        }
        ['remove']() {
            ;
            super.remove();
        }
        ['setDimensionsFromRect'](_0x3f542c = this.lastRect, _0x142258 = true) {
            const {canvas: _0x4147ff} = this, {dpr: _0x256c32} = _0x4147ff;
            if (this.lastRect !== _0x3f542c && (this.lastRect = _0x3f542c), !_0x3f542c || !_0x256c32 || this.ignoreSettingDimensions) {
                return;
            }
            const {
                    width: _0x5c858e,
                    height: _0x41a17b
                } = _0x3f542c, _0x4587ac = Math.floor(Math.round(_0x5c858e * _0x256c32)), _0xdcc9b6 = Math.floor(Math.round(_0x41a17b * _0x256c32));
            _0x4147ff.width === _0x4587ac && _0x4147ff.height === _0xdcc9b6 || (_0x4147ff.width = _0x4587ac, _0x4147ff.height = _0xdcc9b6, this.isDimensionsSet = true, this.isCanvasClean = true, (this.observeResizeElement || this.observeResizeElement === false) && (this.canvas.style.setProperty('width', _0x5c858e + 'px', 'important'), this.canvas.style.setProperty('height', _0x41a17b + 'px', 'important')), (this.forceRenderAfterSize || this.isSelectable && _0x142258) && (this.forceRenderAfterSize = void 0, this.forceRender()));
        }
        ['forceRender']() {
            ;
            this.isDimensionsSet && (ri(new Set([this])) || this.clearCanvas());
        }
        async ['wrapPaidReactionEmoji'](_0x3ce145) {
            const _0x4ba6ed = this.size, _0x4d5205 = await ls.loadAnimationAsAsset({
                    'container': _0x3ce145,
                    'width': _0x4ba6ed.width,
                    'height': _0x4ba6ed.height,
                    'loop': true,
                    'autoplay': ma,
                    'sync': true
                }, 'c101503e');
            return {
                'width': _0x4ba6ed.width,
                'height': _0x4ba6ed.height,
                'downloaded': true,
                'load': () => Promise.resolve(_0x4d5205),
                'render': void 0
            };
        }
        ['wrap']({
            doc: _0x230ed5,
            isPaidReactionEmoji: _0x112257,
            addCustomEmojis: _0x5d3595,
            usingOwnQueue: _0x50d893,
            lazyLoadQueue: _0x56c108,
            onlyThumb: _0x544c95,
            withThumb: _0x4cce59,
            loadPromises: _0x2a22c1
        }) {
            const _0x4f5349 = this, _0x299c4e = this.size, _0x563c3b = I.managers, _0x482a09 = this.middlewareHelper.get(), _0xcc6340 = _0x230ed5.id, _0x216162 = _0x5d3595.get(_0xcc6340), _0x2f8e0e = _0x4f5349.customEmojis.get(_0xcc6340), _0x5686ea = Array.from(_0x216162), _0x13754e = _0x230ed5.sticker === 2, _0x519725 = _0x5686ea[0].static || _0x230ed5.mime_type === 'video/webm' && !tr, _0x48a2ac = (_0x13754e || _0x230ed5.sticker === 3 && this.isSelectable) && !_0x544c95 && !_0x519725, _0x37245b = _0x230ed5.attributes.find(_0x13d8cd => _0x13d8cd['_'] === 'documentAttributeCustomEmoji');
            _0x37245b && _0x37245b.pFlags.text_color && _0x4f5349.textColored.add(_0x2f8e0e);
            const _0x7823c0 = _0x48a2ac ? _0x482a09.create().get(() => !!_0x4ac778.middlewares.size) : void 0, _0x18f683 = [], _0x17c6da = _0x112257 ? this.wrapPaidReactionEmoji(_0x5686ea[0]) : pn({
                    'div': _0x5686ea,
                    'doc': _0x230ed5,
                    'width': _0x299c4e.width,
                    'height': _0x299c4e.height,
                    'loop': true,
                    'play': ma,
                    'managers': _0x563c3b,
                    'isCustomEmoji': true,
                    'group': 'none',
                    'loadPromises': _0x18f683,
                    'middleware': _0x482a09,
                    'exportLoad': _0x50d893 || _0x56c108 === false ? 2 : 1,
                    'needFadeIn': false,
                    'loadStickerMiddleware': _0x7823c0,
                    'static': _0x519725,
                    'onlyThumb': _0x544c95,
                    'withThumb': _0x4cce59 ?? (_0x4f5349.clearedElements.has(_0x2f8e0e) ? false : void 0),
                    'syncedVideo': this.isSelectable,
                    'textColor': _0x4f5349.textColor
                });
            _0x2a22c1 && _0x17c6da.then(() => _0x2a22c1.push(..._0x18f683));
            const _0x369675 = { elements: _0x216162 };
            ;
            const _0x260425 = _0x369675, _0xe846b6 = _0x5686ea[0].readyPromise;
            if (_0xe846b6 && _0x17c6da.then(({render: _0x493d15}) => {
                    ;
                    if (!_0x493d15) {
                        _0xe846b6.resolve();
                        return;
                    }
                    _0x493d15.then(() => _0xe846b6.resolve(), _0xe846b6.reject.bind(_0xe846b6));
                }), _0x230ed5.sticker === 1 || _0x544c95 || _0x519725) {
                return this.isSelectable && (_0x260425.onRender = () => Promise.all(_0x18f683).then(() => {
                    ;
                    _0x482a09() && _0x5686ea.forEach(_0x57d6db => {
                        const {placeholder: _0x99f93d} = _0x57d6db;
                        _0x99f93d.src = _0x57d6db.firstElementChild.src;
                    });
                })), _0x17c6da.then(_0x2f2c2c => ({
                    ..._0x2f2c2c,
                    ..._0x260425
                }));
            }
            _0x260425.onRender = _0x494a04 => Promise.all(_0x18f683).then(() => {
                ;
                if (!_0x482a09() || !_0x230ed5.animated) {
                    return;
                }
                const _0x144777 = Array.isArray(_0x494a04) ? _0x494a04 : [_0x494a04], _0x3a6da2 = Array.isArray(_0x144777) ? _0x144777[0] : _0x144777;
                if (_0x5686ea.forEach((_0x3a5235, _0x382dd8) => {
                        const _0x34cc00 = _0x144777[_0x382dd8] || _0x144777[0];
                        _0x3a5235.player = _0x34cc00;
                        _0x4ac778 && (_0x3a5235.syncedPlayer = _0x4ac778, _0x3a5235.paused ? _0x3a5235.syncedPlayer.pausedElements.add(_0x3a5235) : _0x34cc00.paused && _0x34cc00.play());
                        (_0x3a5235.isConnected || _0x482a09()) && pe.addAnimation({
                            'animation': _0x3a5235,
                            'group': _0x3a5235.renderer.animationGroup,
                            'observeElement': _0x3a5235.placeholder ?? _0x3a5235,
                            'controlled': true,
                            'type': 'emoji'
                        });
                        ;
                    }), (_0x3a6da2 instanceof xt || _0x3a6da2 instanceof HTMLVideoElement && this.isSelectable) && (_0x4ac778.player = _0x3a6da2, _0x4f5349.playersSynced.set(_0x2f8e0e, _0x3a6da2)), _0x3a6da2 instanceof xt && (_0x3a6da2.group = _0x4f5349.animationGroup, _0x3a6da2.overrideRender ?? (_0x3a6da2.overrideRender = _0x363210 => {
                        ;
                        Gt.set(_0x3a6da2, _0x363210);
                    })), _0x48a2ac) {
                    const _0x16867b = Zo(this.size.width, this.size.height);
                    _0x4f5349.canvas.dpr = _0x16867b;
                    Su();
                    ;
                }
            });
            let _0x4ac778;
            const _0x3500f3 = [
                _0xcc6340,
                _0x299c4e.width,
                _0x299c4e.height
            ].join('-');
            if (_0x48a2ac) {
                _0x4ac778 = Yt.get(_0x3500f3);
                _0x4ac778 || (_0x4ac778 = {
                    'player': void 0,
                    'middlewares': new Set(),
                    'pausedElements': new Set(),
                    'key': _0x3500f3
                }, Yt.set(_0x3500f3, _0x4ac778));
                ;
                for (const _0x3c5af5 of _0x216162) {
                    const _0x32904d = _0x3c5af5.middlewareHelper.get();
                    _0x4ac778.middlewares.add(_0x32904d);
                    _0x32904d.onClean(this.onElementCleanup.bind(this, _0x3c5af5, _0x4ac778, _0x32904d));
                    ;
                }
            }
            return _0x17c6da.then(_0x21cc04 => ({
                ..._0x21cc04,
                ..._0x260425
            }));
        }
        ['add']({
            addCustomEmojis: _0x3e908a,
            lazyLoadQueue: _0x88cd3a,
            onlyThumb: _0x3bef00,
            withThumb: _0x42ce0
        }) {
            const _0x168cad = this, _0x43a3b6 = this.middlewareHelper.get();
            if (_0x3e908a.forEach((_0x4e7005, _0x1a7578) => {
                    ;
                    let _0x568c2b = this.customEmojis.get(_0x1a7578);
                    _0x568c2b ? this.clearedElements.delete(_0x568c2b) : this.customEmojis.set(_0x1a7578, _0x568c2b = new Set());
                    for (const _0x5cebbe of _0x4e7005)
                        _0x568c2b.has(_0x5cebbe) ? _0x4e7005.delete(_0x5cebbe) : (_0x5cebbe.clean = false, _0x5cebbe.renderer = _0x168cad, _0x5cebbe.elements = _0x568c2b, _0x5cebbe.middlewareHelper = _0x43a3b6.create(), _0x568c2b.add(_0x5cebbe), _0x5cebbe.lastChildWas && !_0x5cebbe.lastChildWas.parentNode && _0x5cebbe.append(_0x5cebbe.lastChildWas));
                    _0x4e7005.size || _0x3e908a.delete(_0x1a7578);
                }), !_0x3e908a.size) {
                return;
            }
            const _0x375d10 = !!(!_0x88cd3a && _0x88cd3a !== false && vf), _0x8b035b = Array.from(_0x3e908a.keys()), _0x20b96c = I.managers;
            return _0x20b96c.appEmojiManager.getCachedCustomEmojiDocuments(_0x8b035b).then(_0x566fa7 => {
                ;
                if (!_0x43a3b6()) {
                    return;
                }
                const _0x3f644 = {
                    addCustomEmojis: _0x3e908a,
                    usingOwnQueue: _0x375d10,
                    lazyLoadQueue: _0x88cd3a,
                    onlyThumb: _0x3bef00,
                    withThumb: _0x42ce0
                };
                ;
                ;
                ;
                ;
                ;
                ;
                const _0x3bd2d7 = _0x3f644, _0x186c45 = [], _0x38d75e = [], _0xa86716 = _0x566fa7.map((_0x479a95, _0x5c53cb) => {
                        ;
                        if (!_0x479a95) {
                            const _0x2b7265 = _0x8b035b[_0x5c53cb];
                            if (_0x2b7265 === Eu) {
                                return this.wrap({
                                    ..._0x3bd2d7,
                                    'doc': {
                                        '_': 'document',
                                        'id': _0x2b7265,
                                        'attributes': []
                                    },
                                    'isPaidReactionEmoji': true,
                                    'loadPromises': _0x186c45
                                });
                            }
                            _0x38d75e.push(_0x2b7265);
                            return;
                        }
                        const _0xe4bca7 = { ..._0x3bd2d7 };
                        return _0xe4bca7.doc = _0x479a95, _0xe4bca7.loadPromises = _0x186c45, this.wrap(_0xe4bca7);
                    }).filter(Boolean), _0x363778 = _0x38d75e.length ? _0x20b96c.appEmojiManager.getCustomEmojiDocuments(_0x38d75e).then(_0x59d546 => _0x43a3b6() ? _0x59d546.filter(Boolean).map(_0x10979b => this.wrap({
                        ..._0x3bd2d7,
                        'doc': _0x10979b
                    })) : []) : Promise.resolve([]), _0x1e1805 = async _0x1d261e => {
                        const _0x5986a5 = (await Promise.all(_0x1d261e)).map(({
                            load: _0x44eaf7,
                            onRender: _0x5b6b7a,
                            elements: _0x571f40
                        }) => {
                            ;
                            if (!_0x44eaf7) {
                                return;
                            }
                            const _0x2cdc0a = () => _0x44eaf7().then(_0x5b6b7a);
                            if (!_0x375d10) {
                                return _0x2cdc0a();
                            }
                            _0x571f40.forEach(_0x2845aa => {
                                ;
                                vf.push({
                                    'div': _0x2845aa,
                                    'load': () => (_0x571f40.forEach(_0x183d79 => {
                                        ;
                                        const _0x1bf2ac = { div: _0x183d79 };
                                        ;
                                        vf.delete(_0x1bf2ac);
                                        ;
                                    }), _0x2cdc0a())
                                });
                            });
                        });
                        return Promise.all(_0x5986a5.filter(Boolean));
                    }, _0x17eddb = () => {
                        ;
                        if (!_0x43a3b6()) {
                            return;
                        }
                        const _0x51baa9 = _0x1e1805(_0xa86716), _0x53fbf9 = _0x363778.then(_0x241b94 => _0x1e1805(_0x241b94));
                        return Promise.all([
                            _0x51baa9,
                            _0x53fbf9
                        ]);
                    }, _0xe7b7fc = {};
                return _0xe7b7fc.div = _0x168cad.canvas, _0xe7b7fc.load = _0x17eddb, (_0x88cd3a ? _0x88cd3a.push(_0xe7b7fc) : _0x17eddb(), Promise.all(_0xa86716).then(() => Promise.all(_0x186c45)).then(() => {
                }));
            });
        }
        ['setTextColor'](_0x183d5b) {
            ;
            this.textColor = _0x183d5b;
        }
        static ['create'](_0x331e47) {
            const _0x574fca = new nn();
            _0x574fca.animationGroup = _0x331e47.animationGroup;
            _0x574fca.size = _0x331e47.customEmojiSize || sf.active.customEmoji;
            _0x574fca.isSelectable = _0x331e47.isSelectable;
            _0x574fca.textColor = _0x331e47.textColor;
            _0x574fca.observeResizeElement = _0x331e47.observeResizeElement;
            _0x331e47.wrappingDraft && (_0x574fca.contentEditable = 'false', _0x574fca.style.height = 'inherit');
            ;
            const _0x32a9bf = _0x331e47.middleware;
            return _0x32a9bf ? (_0x574fca.middlewareHelper = _0x32a9bf.create(), _0x574fca.middlewareHelper.get().onDestroy(() => {
                ;
                _0x574fca.destroy?.();
            })) : (_0x574fca.auto = true, _0x574fca.middlewareHelper = us()), _0x574fca;
        }
    };
nn.globalLazyLoadQueue = vf;
let ms = nn;
const ma = true;
let Us;
const js = new Set(), Yt = new Map(), Gt = new Map(), ri = (_0xd283d0 = js) => {
        const _0x218f9d = Array.from(_0xd283d0).filter(_0x464a54 => _0x464a54.isConnected && _0x464a54.checkForAnyFrame() && !_0x464a54.ignoreSettingDimensions);
        if (!_0x218f9d.length) {
            return false;
        }
        const _0x354e94 = _0x218f9d.map(_0x293c17 => {
            const _0x5364e2 = [..._0x293c17.playersSynced.values()].reduce((_0x3f7e81, _0x30244d) => _0x3f7e81 + +!!_0x30244d.paused, 0);
            if (_0x293c17.playersSynced.size === _0x5364e2) {
                return;
            }
            const _0x50ee36 = _0x293c17.getOffsets();
            if (_0x50ee36.size) {
                return [
                    _0x293c17,
                    _0x50ee36
                ];
            }
        }).filter(Boolean);
        for (const [_0x3d2146] of _0x354e94)
            _0x3d2146.clearCanvas();
        for (const [_0x4bf121, _0x5cc6a3] of _0x354e94)
            _0x4bf121.render(_0x5cc6a3);
        return true;
    }, wu = 60, Du = 1000 / wu, Su = () => {
        Us || (Us = window.setInterval(ri, Du), ri());
    }, Au = () => {
        Us && (clearInterval(Us), Us = void 0);
    };
window.syncedPlayers = Yt;
window.emojiRenderers = js;
customElements.define('custom-emoji-renderer-element', ms);
;
class bn extends HTMLElement {
    constructor() {
        ;
        super();
        this.paused = true;
        this.classList.add('custom-emoji');
        ;
    }
    get ['docId']() {
        ;
        return this.dataset.docId;
    }
    set ['docId'](_0x473c9c) {
        ;
        this.dataset.docId = '' + _0x473c9c;
    }
    static ['create'](_0xe62caf) {
        const _0x2d25f7 = new bn();
        return _0xe62caf && (_0x2d25f7.docId = _0xe62caf), _0x2d25f7;
    }
    get ['isConnected']() {
        ;
        return this.placeholder?.isConnected ?? super.isConnected;
    }
    ['connectedCallback']() {
        ;
        this.player && pe.addAnimation({
            'animation': this,
            'group': this.renderer.animationGroup,
            'observeElement': this.placeholder ?? this,
            'controlled': true,
            'type': 'emoji'
        });
    }
    ['disconnectedCallback']() {
        ;
        this.isConnected || !this.renderer?.isSelectable || this.clear();
    }
    ['destroy']() {
        this.clear();
    }
    ['clear'](_0x2fde31 = true) {
        ;
        if (this.clean) {
            return;
        }
        this.clean = true;
        this.pause();
        ;
        const {syncedPlayer: _0x12334c} = this;
        if (_0x12334c && _0x12334c.pausedElements.delete(this), this.middlewareHelper?.clean(), this.readyPromise?.reject(), this.renderer) {
            const _0x3c2a84 = this.renderer.customEmojis.get(this.docId);
            _0x3c2a84?.delete(this) && !_0x3c2a84.size && (this.renderer.customEmojis.delete(this.docId), this.renderer.textColored.delete(_0x3c2a84), this.renderer.playersSynced.delete(_0x3c2a84));
            _0x2fde31 && (this.renderer.isSelectable ? this.replaceChildren(yn(true)) : this.replaceChildren());
            ;
        }
        this.player && pe.removeAnimationByPlayer(this);
        ms.globalLazyLoadQueue?.delete({ 'div': this });
        this.elements = this.renderer = this.player = this.syncedPlayer = void 0;
        ;
    }
    ['pause']() {
        ;
        this.paused || (this.paused = true, this.player instanceof HTMLVideoElement && !this.syncedPlayer && (this.renderer.lastPausedVideo = this.player, this.player.pause()), this.syncedPlayer && !this.syncedPlayer.pausedElements.has(this) && (this.syncedPlayer.pausedElements.add(this), this.syncedPlayer.player && this.syncedPlayer.pausedElements.size === this.syncedPlayer.middlewares.size && this.syncedPlayer.player.pause()));
    }
    ['play']() {
        ;
        this.paused && (this.paused = false, this.player instanceof HTMLVideoElement && (this.player.currentTime = this.renderer.lastPausedVideo?.currentTime ?? this.player.currentTime, hr(this.player)), this.syncedPlayer && this.syncedPlayer.pausedElements.has(this) && (this.syncedPlayer.pausedElements.delete(this), this.syncedPlayer.pausedElements.size !== this.syncedPlayer.middlewares.size && this.player.play()));
    }
    ['remove']() {
        ;
        super.remove();
        this.clear();
        ;
    }
    get ['autoplay']() {
        return true;
    }
    get ['loop']() {
        return true;
    }
}
customElements.define('custom-emoji-element', bn);
const a0_0xfbd98b = {};
a0_0xfbd98b.Markup = [
    'markup',
    'html',
    'xml',
    'svg',
    'mathml',
    'ssml',
    'atom',
    'rss'
];
a0_0xfbd98b.CSS = ['css'];
a0_0xfbd98b['C-like'] = ['clike'];
a0_0xfbd98b.Regex = ['regex'];
a0_0xfbd98b.JavaScript = [
    'javascript',
    'js'
];
a0_0xfbd98b.ABAP = ['abap'];
a0_0xfbd98b.ABNF = ['abnf'];
a0_0xfbd98b.ActionScript = ['actionscript'];
a0_0xfbd98b.Ada = ['ada'];
a0_0xfbd98b.Agda = ['agda'];
a0_0xfbd98b.AL = ['al'];
a0_0xfbd98b.ANTLR4 = [
    'antlr4',
    'g4'
];
a0_0xfbd98b['Apache Configuration'] = ['apacheconf'];
a0_0xfbd98b.SQL = ['sql'];
a0_0xfbd98b.Apex = ['apex'];
a0_0xfbd98b.APL = ['apl'];
a0_0xfbd98b.AppleScript = ['applescript'];
a0_0xfbd98b.AQL = ['aql'];
a0_0xfbd98b.C = ['c'];
a0_0xfbd98b['C++'] = ['cpp'];
a0_0xfbd98b.Arduino = [
    'arduino',
    'ino'
];
a0_0xfbd98b.ARFF = ['arff'];
a0_0xfbd98b['ARM Assembly'] = [
    'armasm',
    'arm-asm'
];
a0_0xfbd98b.Bash = [
    'bash',
    'sh',
    'shell'
];
a0_0xfbd98b.YAML = [
    'yaml',
    'yml'
];
a0_0xfbd98b.Markdown = [
    'markdown',
    'md'
];
a0_0xfbd98b.Arturo = [
    'arturo',
    'art'
];
a0_0xfbd98b.AsciiDoc = [
    'asciidoc',
    'adoc'
];
a0_0xfbd98b['C#'] = [
    'csharp',
    'cs',
    'dotnet'
];
a0_0xfbd98b['ASP.NET (C#)'] = ['aspnet'];
a0_0xfbd98b['6502 Assembly'] = ['asm6502'];
a0_0xfbd98b['Atmel AVR Assembly'] = ['asmatmel'];
a0_0xfbd98b.AutoHotkey = ['autohotkey'];
a0_0xfbd98b.AutoIt = ['autoit'];
a0_0xfbd98b.AviSynth = [
    'avisynth',
    'avs'
];
a0_0xfbd98b['Avro IDL'] = [
    'avro-idl',
    'avdl'
];
a0_0xfbd98b.AWK = [
    'awk',
    'gawk'
];
a0_0xfbd98b.BASIC = ['basic'];
a0_0xfbd98b.Batch = ['batch'];
a0_0xfbd98b.BBcode = [
    'bbcode',
    'shortcode'
];
a0_0xfbd98b.BBj = ['bbj'];
a0_0xfbd98b.Bicep = ['bicep'];
a0_0xfbd98b.Birb = ['birb'];
a0_0xfbd98b.Bison = ['bison'];
a0_0xfbd98b.BNF = [
    'bnf',
    'rbnf'
];
a0_0xfbd98b.BQN = ['bqn'];
a0_0xfbd98b.Brainfuck = ['brainfuck'];
a0_0xfbd98b.BrightScript = ['brightscript'];
a0_0xfbd98b.Bro = ['bro'];
a0_0xfbd98b.CFScript = [
    'cfscript',
    'cfc'
];
a0_0xfbd98b.ChaiScript = ['chaiscript'];
a0_0xfbd98b.CIL = ['cil'];
a0_0xfbd98b['Cilk/C'] = [
    'cilkc',
    'cilk-c'
];
a0_0xfbd98b['Cilk/C++'] = [
    'cilkcpp',
    'cilk-cpp',
    'cilk'
];
a0_0xfbd98b.Clojure = ['clojure'];
a0_0xfbd98b.CMake = ['cmake'];
a0_0xfbd98b.COBOL = ['cobol'];
a0_0xfbd98b.CoffeeScript = [
    'coffeescript',
    'coffee'
];
a0_0xfbd98b.Concurnas = [
    'concurnas',
    'conc'
];
a0_0xfbd98b['Content-Security-Policy'] = ['csp'];
a0_0xfbd98b.Cooklang = ['cooklang'];
a0_0xfbd98b.Ruby = [
    'ruby',
    'rb'
];
a0_0xfbd98b.Crystal = ['crystal'];
a0_0xfbd98b.CSV = ['csv'];
a0_0xfbd98b.CUE = ['cue'];
a0_0xfbd98b.Cypher = ['cypher'];
a0_0xfbd98b.D = ['d'];
a0_0xfbd98b.Dart = ['dart'];
a0_0xfbd98b.DataWeave = ['dataweave'];
a0_0xfbd98b.DAX = ['dax'];
a0_0xfbd98b.Dhall = ['dhall'];
a0_0xfbd98b.Diff = ['diff'];
a0_0xfbd98b['Markup templating'] = ['markup-templating'];
a0_0xfbd98b['Django/Jinja2'] = [
    'django',
    'jinja2'
];
a0_0xfbd98b['DNS zone file'] = [
    'dns-zone-file',
    'dns-zone'
];
a0_0xfbd98b.Docker = [
    'docker',
    'dockerfile'
];
a0_0xfbd98b['DOT (Graphviz)'] = [
    'dot',
    'gv'
];
a0_0xfbd98b.EBNF = ['ebnf'];
a0_0xfbd98b.EditorConfig = ['editorconfig'];
a0_0xfbd98b.Eiffel = ['eiffel'];
a0_0xfbd98b.EJS = [
    'ejs',
    'eta'
];
a0_0xfbd98b.Elixir = ['elixir'];
a0_0xfbd98b.Elm = ['elm'];
a0_0xfbd98b.Lua = ['lua'];
a0_0xfbd98b['Embedded Lua templating'] = ['etlua'];
a0_0xfbd98b.ERB = ['erb'];
a0_0xfbd98b.Erlang = ['erlang'];
a0_0xfbd98b['Excel Formula'] = [
    'excel-formula',
    'xlsx',
    'xls'
];
a0_0xfbd98b['F#'] = ['fsharp'];
a0_0xfbd98b.Factor = ['factor'];
a0_0xfbd98b.False = ['false'];
a0_0xfbd98b['Firestore security rules'] = ['firestore-security-rules'];
a0_0xfbd98b.Flow = ['flow'];
a0_0xfbd98b.Fortran = ['fortran'];
a0_0xfbd98b['FreeMarker Template Language'] = ['ftl'];
a0_0xfbd98b['GameMaker Language'] = [
    'gml',
    'gamemakerlanguage'
];
a0_0xfbd98b['GAP (CAS)'] = ['gap'];
a0_0xfbd98b['G-code'] = ['gcode'];
a0_0xfbd98b.GDScript = ['gdscript'];
a0_0xfbd98b.GEDCOM = ['gedcom'];
a0_0xfbd98b.gettext = [
    'gettext',
    'po'
];
a0_0xfbd98b.Git = ['git'];
a0_0xfbd98b.GLSL = ['glsl'];
a0_0xfbd98b.GN = [
    'gn',
    'gni'
];
a0_0xfbd98b['GNU Linker Script'] = [
    'linker-script',
    'ld'
];
a0_0xfbd98b.Go = ['go'];
a0_0xfbd98b['Go module'] = [
    'go-module',
    'go-mod'
];
a0_0xfbd98b.Gradle = ['gradle'];
a0_0xfbd98b.GraphQL = ['graphql'];
a0_0xfbd98b.Groovy = ['groovy'];
a0_0xfbd98b.Less = ['less'];
a0_0xfbd98b['Sass (SCSS)'] = ['scss'];
a0_0xfbd98b.Textile = ['textile'];
a0_0xfbd98b.Haml = ['haml'];
a0_0xfbd98b.Handlebars = [
    'handlebars',
    'hbs',
    'mustache'
];
a0_0xfbd98b.Haskell = [
    'haskell',
    'hs'
];
a0_0xfbd98b.Haxe = ['haxe'];
a0_0xfbd98b.HCL = ['hcl'];
a0_0xfbd98b.HLSL = ['hlsl'];
a0_0xfbd98b.Hoon = ['hoon'];
a0_0xfbd98b['HTTP Public-Key-Pins'] = ['hpkp'];
a0_0xfbd98b['HTTP Strict-Transport-Security'] = ['hsts'];
a0_0xfbd98b.JSON = [
    'json',
    'webmanifest'
];
a0_0xfbd98b.URI = [
    'uri',
    'url'
];
a0_0xfbd98b.HTTP = ['http'];
a0_0xfbd98b.IchigoJam = ['ichigojam'];
a0_0xfbd98b.Icon = ['icon'];
a0_0xfbd98b['ICU Message Format'] = ['icu-message-format'];
a0_0xfbd98b.Idris = [
    'idris',
    'idr'
];
a0_0xfbd98b['.ignore'] = [
    'ignore',
    'gitignore',
    'hgignore',
    'npmignore'
];
a0_0xfbd98b['Inform 7'] = ['inform7'];
a0_0xfbd98b.Ini = ['ini'];
a0_0xfbd98b.Io = ['io'];
a0_0xfbd98b.J = ['j'];
a0_0xfbd98b.Java = ['java'];
a0_0xfbd98b.Scala = ['scala'];
a0_0xfbd98b.PHP = ['php'];
a0_0xfbd98b['JavaDoc-like'] = ['javadoclike'];
a0_0xfbd98b.JavaDoc = ['javadoc'];
a0_0xfbd98b['Java stack trace'] = ['javastacktrace'];
a0_0xfbd98b.Jolie = ['jolie'];
a0_0xfbd98b.JQ = ['jq'];
a0_0xfbd98b.TypeScript = [
    'typescript',
    'ts'
];
a0_0xfbd98b.JSDoc = ['jsdoc'];
a0_0xfbd98b.N4JS = [
    'n4js',
    'n4jsd'
];
a0_0xfbd98b.JSON5 = ['json5'];
a0_0xfbd98b.JSONP = ['jsonp'];
a0_0xfbd98b['JS stack trace'] = ['jsstacktrace'];
a0_0xfbd98b.Julia = ['julia'];
a0_0xfbd98b['Keepalived Configure'] = ['keepalived'];
a0_0xfbd98b.Keyman = ['keyman'];
a0_0xfbd98b.Kotlin = [
    'kotlin',
    'kt',
    'kts'
];
a0_0xfbd98b.Kusto = ['kusto'];
a0_0xfbd98b.LaTeX = [
    'latex',
    'tex',
    'context'
];
a0_0xfbd98b.Latte = ['latte'];
a0_0xfbd98b.Scheme = ['scheme'];
a0_0xfbd98b.LilyPond = [
    'lilypond',
    'ly'
];
a0_0xfbd98b.Liquid = ['liquid'];
a0_0xfbd98b.Lisp = [
    'lisp',
    'emacs',
    'elisp',
    'emacs-lisp'
];
a0_0xfbd98b.LiveScript = ['livescript'];
a0_0xfbd98b['LLVM IR'] = ['llvm'];
a0_0xfbd98b['Log file'] = ['log'];
a0_0xfbd98b.LOLCODE = ['lolcode'];
a0_0xfbd98b['Magma (CAS)'] = ['magma'];
a0_0xfbd98b.Makefile = ['makefile'];
a0_0xfbd98b.Mata = ['mata'];
a0_0xfbd98b.MATLAB = ['matlab'];
a0_0xfbd98b.MAXScript = ['maxscript'];
a0_0xfbd98b.MEL = ['mel'];
a0_0xfbd98b.Mermaid = ['mermaid'];
a0_0xfbd98b.METAFONT = ['metafont'];
a0_0xfbd98b.Mizar = ['mizar'];
a0_0xfbd98b.MongoDB = ['mongodb'];
a0_0xfbd98b.Monkey = ['monkey'];
a0_0xfbd98b.MoonScript = [
    'moonscript',
    'moon'
];
a0_0xfbd98b.N1QL = ['n1ql'];
a0_0xfbd98b['Nand To Tetris HDL'] = ['nand2tetris-hdl'];
a0_0xfbd98b['Naninovel Script'] = [
    'naniscript',
    'nani'
];
a0_0xfbd98b.NASM = ['nasm'];
a0_0xfbd98b.NEON = ['neon'];
a0_0xfbd98b.Nevod = ['nevod'];
a0_0xfbd98b.nginx = ['nginx'];
a0_0xfbd98b.Nim = ['nim'];
a0_0xfbd98b.Nix = ['nix'];
a0_0xfbd98b.NSIS = ['nsis'];
a0_0xfbd98b['Objective-C'] = [
    'objectivec',
    'objc'
];
a0_0xfbd98b.OCaml = ['ocaml'];
a0_0xfbd98b.Odin = ['odin'];
a0_0xfbd98b.OpenCL = ['opencl'];
a0_0xfbd98b.OpenQasm = [
    'openqasm',
    'qasm'
];
a0_0xfbd98b.Oz = ['oz'];
a0_0xfbd98b['PARI/GP'] = ['parigp'];
a0_0xfbd98b.Parser = ['parser'];
a0_0xfbd98b.Pascal = [
    'pascal',
    'objectpascal'
];
a0_0xfbd98b.Pascaligo = ['pascaligo'];
a0_0xfbd98b['PATROL Scripting Language'] = ['psl'];
a0_0xfbd98b['PC-Axis'] = [
    'pcaxis',
    'px'
];
a0_0xfbd98b.PeopleCode = [
    'peoplecode',
    'pcode'
];
a0_0xfbd98b.Perl = ['perl'];
a0_0xfbd98b.PHPDoc = ['phpdoc'];
a0_0xfbd98b.PlantUML = [
    'plant-uml',
    'plantuml'
];
a0_0xfbd98b['PL/SQL'] = ['plsql'];
a0_0xfbd98b.PowerQuery = [
    'powerquery',
    'pq',
    'mscript'
];
a0_0xfbd98b.PowerShell = ['powershell'];
a0_0xfbd98b.Processing = ['processing'];
a0_0xfbd98b.Prolog = ['prolog'];
a0_0xfbd98b.PromQL = ['promql'];
a0_0xfbd98b['.properties'] = ['properties'];
a0_0xfbd98b['Protocol Buffers'] = ['protobuf'];
a0_0xfbd98b.Stylus = ['stylus'];
a0_0xfbd98b.Twig = ['twig'];
a0_0xfbd98b.Pug = ['pug'];
a0_0xfbd98b.Puppet = ['puppet'];
a0_0xfbd98b.PureBasic = [
    'purebasic',
    'pbfasm'
];
a0_0xfbd98b.Python = [
    'python',
    'py'
];
a0_0xfbd98b['Q#'] = [
    'qsharp',
    'qs'
];
a0_0xfbd98b['Q (kdb+ database)'] = ['q'];
a0_0xfbd98b.QML = ['qml'];
a0_0xfbd98b.Qore = ['qore'];
a0_0xfbd98b.R = ['r'];
a0_0xfbd98b.Racket = [
    'racket',
    'rkt'
];
a0_0xfbd98b['Razor C#'] = [
    'cshtml',
    'razor'
];
a0_0xfbd98b['React JSX'] = ['jsx'];
a0_0xfbd98b['React TSX'] = ['tsx'];
a0_0xfbd98b.Reason = ['reason'];
a0_0xfbd98b.Rego = ['rego'];
a0_0xfbd98b['Ren\'py'] = [
    'renpy',
    'rpy'
];
a0_0xfbd98b.ReScript = [
    'rescript',
    'res'
];
a0_0xfbd98b['reST (reStructuredText)'] = ['rest'];
a0_0xfbd98b.Rip = ['rip'];
a0_0xfbd98b.Roboconf = ['roboconf'];
a0_0xfbd98b['Robot Framework'] = [
    'robotframework',
    'robot'
];
a0_0xfbd98b.Rust = ['rust'];
a0_0xfbd98b.SAS = ['sas'];
a0_0xfbd98b['Sass (Sass)'] = ['sass'];
a0_0xfbd98b['Shell session'] = [
    'shell-session',
    'sh-session',
    'shellsession'
];
a0_0xfbd98b.Smali = ['smali'];
a0_0xfbd98b.Smalltalk = ['smalltalk'];
a0_0xfbd98b.Smarty = ['smarty'];
a0_0xfbd98b.SML = [
    'sml',
    'smlnj'
];
a0_0xfbd98b['Solidity (Ethereum)'] = [
    'solidity',
    'sol'
];
a0_0xfbd98b['Solution file'] = [
    'solution-file',
    'sln'
];
a0_0xfbd98b['Soy (Closure Template)'] = ['soy'];
a0_0xfbd98b['Splunk SPL'] = ['splunk-spl'];
a0_0xfbd98b['SQF: Status Quo Function (Arma 3)'] = ['sqf'];
a0_0xfbd98b.Squirrel = ['squirrel'];
a0_0xfbd98b.Stan = ['stan'];
a0_0xfbd98b['Stata Ado'] = ['stata'];
a0_0xfbd98b['Structured Text (IEC 61131-3)'] = ['iecst'];
a0_0xfbd98b.SuperCollider = [
    'supercollider',
    'sclang'
];
a0_0xfbd98b.Swift = ['swift'];
a0_0xfbd98b['Systemd configuration file'] = ['systemd'];
a0_0xfbd98b['T4 templating'] = ['t4-templating'];
a0_0xfbd98b['T4 Text Templates (C#)'] = [
    't4-cs',
    't4'
];
a0_0xfbd98b['VB.Net'] = ['vbnet'];
a0_0xfbd98b['T4 Text Templates (VB)'] = ['t4-vb'];
a0_0xfbd98b.TAP = ['tap'];
a0_0xfbd98b.Tcl = ['tcl'];
a0_0xfbd98b['Template Toolkit 2'] = ['tt2'];
a0_0xfbd98b.TOML = ['toml'];
a0_0xfbd98b.Tremor = [
    'tremor',
    'trickle',
    'troy'
];
a0_0xfbd98b.TypoScript = [
    'typoscript',
    'tsconfig'
];
a0_0xfbd98b.UnrealScript = [
    'unrealscript',
    'uscript',
    'uc'
];
a0_0xfbd98b['UO Razor Script'] = ['uorazor'];
a0_0xfbd98b.V = ['v'];
a0_0xfbd98b.Vala = ['vala'];
a0_0xfbd98b.Velocity = ['velocity'];
a0_0xfbd98b.Verilog = ['verilog'];
a0_0xfbd98b.VHDL = ['vhdl'];
a0_0xfbd98b.vim = ['vim'];
a0_0xfbd98b['Visual Basic'] = [
    'visual-basic',
    'vb',
    'vba'
];
a0_0xfbd98b.WarpScript = ['warpscript'];
a0_0xfbd98b.WebAssembly = ['wasm'];
a0_0xfbd98b['Web IDL'] = [
    'web-idl',
    'webidl'
];
a0_0xfbd98b.WGSL = ['wgsl'];
a0_0xfbd98b['Wiki markup'] = ['wiki'];
a0_0xfbd98b['Wolfram language'] = [
    'wolfram',
    'mathematica',
    'nb',
    'wl'
];
a0_0xfbd98b.Wren = ['wren'];
a0_0xfbd98b.Xeora = [
    'xeora',
    'xeoracube'
];
a0_0xfbd98b['Xojo (REALbasic)'] = ['xojo'];
a0_0xfbd98b.XQuery = ['xquery'];
a0_0xfbd98b.YANG = ['yang'];
a0_0xfbd98b.Zig = ['zig'];
;
const ai = a0_0xfbd98b, Er = {};
for (const s in ai) {
    const e = ai[s];
    e.unshift(s.toLowerCase());
    for (let t = 0, f = e.length; t < f; ++t) {
        Er[e[t]] = s;
    }
}
function ga(_0x34d487) {
    const _0x390ad1 = _0x34d487.toLowerCase(), _0x324f34 = ai[Er[_0x390ad1]] || [];
    for (const _0x3c8cfa of _0x324f34)
        if (Jt.languages[_0x3c8cfa]) {
            return {
                'language': _0x3c8cfa,
                'prism': Jt
            };
        }
}
let Jt;
function Cu(_0x50bb18) {
    ;
    if (Jt) {
        return at(Jt, () => ga(_0x50bb18));
    }
    const _0x53f3af = !!window.Prism;
    return _0x53f3af || (window.Prism = window.Prism || {}, window.Prism.manual = true), Jt = ze(() => import('./j1wzpjqdbowa.js'), [], import.meta.url).then(_0xea52db => {
        ;
        const _0x5b23df = _0xea52db.default;
        return _0x53f3af || _0x5b23df.hooks.add('wrap', _0x45bd39 => {
            ;
            _0x45bd39.classes.forEach((_0x729f1, _0x16324d, _0x1532b1) => {
                ;
                _0x1532b1[_0x16324d] = 'prism-' + _0x729f1;
            });
        }), Jt = _0x5b23df, ga(_0x50bb18);
    });
}
function ku(_0x557690, _0x1c6d17) {
    ;
    return at(Cu(_0x1c6d17), _0x16e2ed => {
        ;
        if (!_0x16e2ed) {
            return;
        }
        const {
            prism: _0x1a639e,
            language: _0x143a97
        } = _0x16e2ed;
        return _0x1a639e.highlight(_0x557690, _0x1a639e.languages[_0x143a97], _0x143a97);
    });
}
function Fu(_0x55705e, _0xe2be3d, _0x4fde93 = 0) {
    ;
    for (let _0x433be9 = _0x55705e.length; _0x4fde93 < _0x433be9; ++_0x4fde93) {
        if (_0xe2be3d(_0x55705e[_0x4fde93], _0x4fde93, _0x55705e)) {
            return _0x4fde93;
        }
    }
    return -1;
}
;
function uc(_0x40713e) {
    const _0x524df0 = document.createElement('div');
    return _0x524df0.innerHTML = _0x40713e.trim(), _0x524df0.firstElementChild;
}
N.createElementFromMarkup = uc;
const oi = new Map();
function Pu(_0x29bb1c) {
    ;
    Tf(_0x29bb1c);
    const _0x68c0de = {
        'isCancelled': false,
        'deferred': q()
    };
    return oi.set(_0x29bb1c, _0x68c0de), _0x68c0de.deferred.then(() => {
        ;
        hc(_0x29bb1c) === _0x68c0de && oi.delete(_0x29bb1c);
    }), _0x68c0de;
}
function hc(_0x3d745c) {
    ;
    return oi.get(_0x3d745c);
}
function Tf(_0x42fdbc) {
    const _0xd1af51 = hc(_0x42fdbc);
    _0xd1af51 && (_0xd1af51.isCancelled = true, _0xd1af51.deferred.resolve());
}
function mc(_0xbb2de, _0x3c0d93, _0x280767) {
    ;
    return _0x280767 || (_0x280767 = Pu(_0x3c0d93)), Oe(() => {
        ;
        _0x280767.isCancelled || (_0xbb2de() ? mc(_0xbb2de, _0x3c0d93, _0x280767) : _0x280767.deferred.resolve());
    }), _0x280767.deferred;
}
function gc(_0x35cd4b) {
    Oe(() => {
        _0x35cd4b() && gc(_0x35cd4b);
    });
}
function _u(_0x2aeb9c, _0x3e3fbc) {
    ;
    return _0x2aeb9c.some(_0xed29e9 => _0xed29e9 instanceof Promise) ? Promise.all(_0x2aeb9c).then(_0x3e3fbc) : _0x3e3fbc(_0x2aeb9c);
}
function pa(_0x5700f8, _0x26e837) {
    ;
    return _0x5700f8 = Math.ceil(_0x5700f8), _0x26e837 = Math.floor(_0x26e837), Math.floor(Math.random() * (_0x26e837 - _0x5700f8 + 1)) + _0x5700f8;
}
const tt = class tt {
    static ['getStyleSheet']() {
        ;
        return this.style ? this.style : (this.log('Creating style element'), this.style = document.createElement('style'), document.head.appendChild(this.style), this.style);
    }
    static ['draw'](_0x853e61) {
        ;
        if (this.lastDrawTime + this.DRAW_INTERVAL > performance.now()) {
            return;
        }
        this.lastDrawTime = performance.now();
        const _0x52e612 = this.getStyleSheet(), _0x572d46 = _0x853e61.toDataURL();
        _0x52e612.textContent = '\n      .bluff-spoiler {\n        mask-image: url(' + _0x572d46 + ');\n        opacity: 1;\n      }\n    ';
    }
    static ['observeReconnection'](_0xf48942, _0x40f417) {
        const _0x4eded2 = new WeakRef(_0xf48942);
        this.allWeakRefs.find(_0x339898 => _0x339898.deref() === _0xf48942) || this.allWeakRefs.push(_0x4eded2);
        this.reconnectCallbacks.set(_0xf48942, _0x40f417);
        this.initReconnectionInterval();
        ;
    }
    static ['initReconnectionInterval']() {
        ;
        this.reconnectIntervalId || (this.log('Initializing reconnection interval'), this.reconnectIntervalId = window.setInterval(() => {
            ;
            this.allWeakRefs = this.allWeakRefs.filter(_0x99e91d => {
                const _0x549abf = _0x99e91d.deref();
                if (!_0x549abf) {
                    return false;
                }
                const _0x42f2d7 = pe.getAnimations(_0x549abf), _0x342e88 = this.reconnectCallbacks.get(_0x549abf);
                return !_0x42f2d7?.length && _0x549abf.isConnected && (_0x342e88(_0x549abf), this.log('Reconnected element')), true;
            });
            this.allWeakRefs.length || (window.clearInterval(this.reconnectIntervalId), this.reconnectIntervalId = void 0, this.log('Removing reconnection interval'));
            ;
        }, this.RECONNECT_INTERVAL));
    }
    static ['destroy']() {
        ;
        this.style?.remove();
        this.style = void 0;
        this.log('Destroying style element');
        ;
    }
};
tt.log = Q('bluff-spoiler');
tt.lastDrawTime = 0;
tt.DRAW_INTERVAL = 66.66666666666667;
tt.allWeakRefs = [];
tt.reconnectCallbacks = new WeakMap();
tt.RECONNECT_INTERVAL = 250;
tt.instancesCount = 0;
;
let gt = tt;
N.BluffSpoilerController = gt;
var Tu = 4, Lu = 0.001, xu = 1e-7, Mu = 10, Ts = 11, Ef = 1 / (Ts - 1), Iu = typeof Float32Array == 'function';
function pc(_0x3e9454, _0x41287f) {
    return 1 - 3 * _0x41287f + 3 * _0x3e9454;
}
function bc(_0x2a99f3, _0xb828c4) {
    return 3 * _0xb828c4 - 6 * _0x2a99f3;
}
function yc(_0x489a17) {
    return 3 * _0x489a17;
}
function Xf(_0x2d5ae1, _0x293a88, _0x3c1cdc) {
    return ((pc(_0x293a88, _0x3c1cdc) * _0x2d5ae1 + bc(_0x293a88, _0x3c1cdc)) * _0x2d5ae1 + yc(_0x293a88)) * _0x2d5ae1;
}
function vc(_0x106679, _0x47a351, _0xbcd886) {
    return 3 * pc(_0x47a351, _0xbcd886) * _0x106679 * _0x106679 + 2 * bc(_0x47a351, _0xbcd886) * _0x106679 + yc(_0x47a351);
}
function Ru(_0x390fc5, _0xca46e8, _0x591a67, _0x354046, _0x387971) {
    var _0x143f00, _0x19a9e6, _0x1934cc = 0;
    do
        _0x19a9e6 = _0xca46e8 + (_0x591a67 - _0xca46e8) / 2, _0x143f00 = Xf(_0x19a9e6, _0x354046, _0x387971) - _0x390fc5, _0x143f00 > 0 ? _0x591a67 = _0x19a9e6 : _0xca46e8 = _0x19a9e6;
    while (Math.abs(_0x143f00) > xu && ++_0x1934cc < Mu);
    return _0x19a9e6;
}
function Ou(_0x314089, _0x380b30, _0x5c4835, _0x1adcb9) {
    ;
    for (var _0x22d50c = 0; _0x22d50c < Tu; ++_0x22d50c) {
        var _0xea6447 = vc(_0x380b30, _0x5c4835, _0x1adcb9);
        if (_0xea6447 === 0) {
            return _0x380b30;
        }
        var _0x105dcc = Xf(_0x380b30, _0x5c4835, _0x1adcb9) - _0x314089;
        _0x380b30 -= _0x105dcc / _0xea6447;
    }
    return _0x380b30;
}
function Nu(_0x2d381e) {
    return _0x2d381e;
}
function Ec(_0x517f41, _0x452ab3, _0x533b91, _0x44688c) {
    ;
    if (!(0 <= _0x517f41 && _0x517f41 <= 1 && 0 <= _0x533b91 && _0x533b91 <= 1)) {
        throw new Error('bezier x values must be in [0, 1] range');
    }
    if (_0x517f41 === _0x452ab3 && _0x533b91 === _0x44688c) {
        return Nu;
    }
    for (var _0x1e9641 = Iu ? new Float32Array(Ts) : new Array(Ts), _0x1c9b68 = 0; _0x1c9b68 < Ts; ++_0x1c9b68) {
        _0x1e9641[_0x1c9b68] = Xf(_0x1c9b68 * Ef, _0x517f41, _0x533b91);
    }
    function _0x360749(_0x18ff50) {
        for (var _0x20a87c = 0, _0x5c5b66 = 1, _0x45b154 = Ts - 1; _0x5c5b66 !== _0x45b154 && _0x1e9641[_0x5c5b66] <= _0x18ff50; ++_0x5c5b66) {
            _0x20a87c += Ef;
        }
        --_0x5c5b66;
        var _0x4e6ec6 = (_0x18ff50 - _0x1e9641[_0x5c5b66]) / (_0x1e9641[_0x5c5b66 + 1] - _0x1e9641[_0x5c5b66]), _0xd8c2a8 = _0x20a87c + _0x4e6ec6 * Ef, _0x79640d = vc(_0xd8c2a8, _0x517f41, _0x533b91);
        return _0x79640d >= Lu ? Ou(_0x18ff50, _0xd8c2a8, _0x517f41, _0x533b91) : _0x79640d === 0 ? _0xd8c2a8 : Ru(_0x18ff50, _0x20a87c, _0x20a87c + Ef, _0x517f41, _0x533b91);
    }
    return function (_0x37c43b) {
        return _0x37c43b === 0 || _0x37c43b === 1 ? _0x37c43b : Xf(_0x360749(_0x37c43b), _0x452ab3, _0x44688c);
    };
}
function pt(_0x2da3ab, _0x5d0fd6, _0x426aef) {
    ;
    _0x2da3ab /= 255;
    _0x5d0fd6 /= 255;
    _0x426aef /= 255;
    ;
    const _0x8cdde5 = Math.max(_0x2da3ab, _0x5d0fd6, _0x426aef), _0x2fdc22 = _0x8cdde5 - Math.min(_0x2da3ab, _0x5d0fd6, _0x426aef), _0xf03e35 = _0x2fdc22 && (_0x8cdde5 === _0x2da3ab ? (_0x5d0fd6 - _0x426aef) / _0x2fdc22 : _0x8cdde5 == _0x5d0fd6 ? 2 + (_0x426aef - _0x2da3ab) / _0x2fdc22 : 4 + (_0x2da3ab - _0x5d0fd6) / _0x2fdc22);
    return [
        60 * (_0xf03e35 < 0 ? _0xf03e35 + 6 : _0xf03e35),
        _0x8cdde5 && _0x2fdc22 / _0x8cdde5,
        _0x8cdde5
    ];
}
function wr(_0x3d9e1c, _0x436537, _0x4cea7f) {
    const _0x96f8fd = (_0x5ef857, _0x3ce6fd = (_0x5ef857 + _0x3d9e1c / 60) % 6) => Math.round((_0x4cea7f - _0x4cea7f * _0x436537 * Math.max(Math.min(_0x3ce6fd, 4 - _0x3ce6fd, 1), 0)) * 255);
    return [
        _0x96f8fd(5),
        _0x96f8fd(3),
        _0x96f8fd(1)
    ];
}
function ci(_0x52e89e, _0x425c73, _0x95321d, _0x1d4bd8 = 1) {
    ;
    _0x52e89e /= 255;
    _0x425c73 /= 255;
    _0x95321d /= 255;
    ;
    const _0x449e19 = Math.max(_0x52e89e, _0x425c73, _0x95321d), _0xde47d6 = Math.min(_0x52e89e, _0x425c73, _0x95321d);
    let _0x5601cc, _0x3e9714;
    const _0x37ce69 = (_0x449e19 + _0xde47d6) / 2;
    if (_0x449e19 === _0xde47d6) {
        _0x5601cc = _0x3e9714 = 0;
    } else {
        const _0x30d832 = _0x449e19 - _0xde47d6;
        switch (_0x3e9714 = _0x37ce69 > 0.5 ? _0x30d832 / (2 - _0x449e19 - _0xde47d6) : _0x30d832 / (_0x449e19 + _0xde47d6), _0x449e19) {
        case _0x52e89e:
            _0x5601cc = (_0x425c73 - _0x95321d) / _0x30d832 + (_0x425c73 < _0x95321d ? 6 : 0);
            break;
        case _0x425c73:
            _0x5601cc = (_0x95321d - _0x52e89e) / _0x30d832 + 2;
            break;
        case _0x95321d:
            _0x5601cc = (_0x52e89e - _0x425c73) / _0x30d832 + 4;
            break;
        }
        _0x5601cc /= 6;
    }
    const _0x2dc8b1 = {};
    return _0x2dc8b1.h = _0x5601cc * 360, _0x2dc8b1.s = _0x3e9714 * 100, _0x2dc8b1.l = _0x37ce69 * 100, _0x2dc8b1.a = _0x1d4bd8, _0x2dc8b1;
}
function r3(_0x37f9e9) {
    ;
    return 'hsla(' + _0x37f9e9.h + ', ' + _0x37f9e9.s + '%, ' + _0x37f9e9.l + '%, ' + _0x37f9e9.a + ')';
}
function wc(_0x3ef69c, _0x109142, _0x123b7f, _0x1f080f) {
    ;
    _0x3ef69c /= 360;
    _0x109142 /= 100;
    _0x123b7f /= 100;
    ;
    let _0x471f6a, _0x109f9d, _0x3c39bf;
    if (_0x109142 === 0) {
        _0x471f6a = _0x109f9d = _0x3c39bf = _0x123b7f;
    } else {
        const _0x199a0e = function (_0x691218, _0x4c3523, _0x2c3761) {
                return _0x2c3761 < 0 && (_0x2c3761 += 1), _0x2c3761 > 1 && (_0x2c3761 -= 1), _0x2c3761 < 0.16666666666666666 ? _0x691218 + (_0x4c3523 - _0x691218) * 6 * _0x2c3761 : _0x2c3761 < 0.5 ? _0x4c3523 : _0x2c3761 < 0.6666666666666666 ? _0x691218 + (_0x4c3523 - _0x691218) * (0.6666666666666666 - _0x2c3761) * 6 : _0x691218;
            }, _0x17f6b4 = _0x123b7f < 0.5 ? _0x123b7f * (1 + _0x109142) : _0x123b7f + _0x109142 - _0x123b7f * _0x109142, _0x1f5c59 = 2 * _0x123b7f - _0x17f6b4;
        _0x471f6a = _0x199a0e(_0x1f5c59, _0x17f6b4, _0x3ef69c + 0.3333333333333333);
        _0x109f9d = _0x199a0e(_0x1f5c59, _0x17f6b4, _0x3ef69c);
        _0x3c39bf = _0x199a0e(_0x1f5c59, _0x17f6b4, _0x3ef69c - 0.3333333333333333);
        ;
    }
    return [
        _0x471f6a,
        _0x109f9d,
        _0x3c39bf,
        _0x1f080f
    ].map(_0x338d86 => Math.round(_0x338d86 * 255));
}
function Dc(_0x4820d1) {
    const _0x58e87e = _0x4820d1.slice(5, -1).split(', '), _0x4b1333 = +_0x58e87e.pop(), _0x58a03d = _0x58e87e.map(_0x469d8e => _0x469d8e.endsWith('%') ? +_0x469d8e.slice(0, -1) : +_0x469d8e);
    return wc(_0x58a03d[0], _0x58a03d[1], _0x58a03d[2], _0x4b1333);
}
function Sc(_0x9b402) {
    const _0x19c9e4 = [], _0x2bea1a = _0x9b402[0] === '#' ? 1 : 0;
    if (_0x9b402.length === 5 + _0x2bea1a && (_0x9b402 = (_0x2bea1a ? '#' : '') + '0' + _0x9b402.slice(_0x2bea1a)), _0x9b402.length === 3 + _0x2bea1a) {
        for (let _0x2c8f8a = _0x2bea1a; _0x2c8f8a < _0x9b402.length; ++_0x2c8f8a) {
            _0x19c9e4.push(parseInt(_0x9b402[_0x2c8f8a] + _0x9b402[_0x2c8f8a], 16));
        }
    } else {
        if (_0x9b402.length === 4 + _0x2bea1a) {
            for (let _0x3107d0 = _0x2bea1a; _0x3107d0 < _0x9b402.length - 1; ++_0x3107d0) {
                _0x19c9e4.push(parseInt(_0x9b402[_0x3107d0] + _0x9b402[_0x3107d0], 16));
            }
            _0x19c9e4.push(parseInt(_0x9b402[_0x9b402.length - 1], 16));
        } else {
            for (let _0x452d58 = _0x2bea1a; _0x452d58 < _0x9b402.length; _0x452d58 += 2) {
                _0x19c9e4.push(parseInt(_0x9b402.slice(_0x452d58, _0x452d58 + 2), 16));
            }
        }
    }
    return _0x19c9e4;
}
function et(_0x12da7e) {
    ;
    return Sc(_0x12da7e.slice(0, 7));
}
function a3(_0x12db2b, _0x532e26) {
    ;
    let _0x3ebc35 = '#' + _0x12db2b.toString(16).padStart(6, '0');
    return _0x532e26 !== void 0 && (_0x3ebc35 += '' + Math.floor(_0x532e26 * 255).toString(16).padStart(2, '0')), _0x3ebc35;
}
function Ac(_0x23d6b8) {
    const _0x459799 = Sc(_0x23d6b8);
    return ci(_0x459799[0], _0x459799[1], _0x459799[2], _0x459799[3]);
}
function Ls(_0x333baf) {
    ;
    return '#' + _0x333baf.map(_0x39c467 => ('0' + _0x39c467.toString(16)).slice(-2)).join('');
}
function Bu(_0x5f56a9) {
    return Ls(Dc(_0x5f56a9));
}
function Uu(_0x36b8d0) {
    ;
    return Bu(_0x36b8d0).slice(0, -2);
}
function Tn(_0x55d6a3, _0x3089de, _0x74c593) {
    const _0x4952b7 = new Array(3);
    for (let _0x54c781 = 0; _0x54c781 < 3; ++_0x54c781) {
        const _0x365cef = _0x55d6a3[_0x54c781], _0x506c15 = _0x3089de[_0x54c781];
        _0x4952b7[_0x54c781] = Math.floor(_0x506c15 + (_0x365cef - _0x506c15) * _0x74c593);
    }
    return _0x4952b7;
}
function ba(_0x23d750) {
    return (_0x23d750[0] * 0.2126 + _0x23d750[1] * 0.7152 + _0x23d750[2] * 0.0722) / 255;
}
function ju(_0x33fce0, _0x1efbbd) {
    ;
    return _0x33fce0.map((_0x423533, _0x4bc96f) => Math.round((_0x423533 + _0x1efbbd[_0x4bc96f]) / 2));
}
function Hu(_0x596150, _0x559710, _0x416860) {
    const _0x1c9c49 = pt(..._0x559710), _0x1ff53c = pt(..._0x416860), _0x52ad0f = Math.min(1.5 * _0x1c9c49[1] / _0x596150[1], 1);
    return _0x1c9c49[0] = Math.min(360, _0x1ff53c[0] - _0x1c9c49[0] + _0x596150[0]), _0x1c9c49[1] = Math.min(1, _0x1ff53c[1] * _0x596150[1] / _0x1c9c49[1]), _0x1c9c49[2] = Math.min(1, (_0x1ff53c[2] / _0x1c9c49[2] + _0x52ad0f - 1) * _0x596150[2] / _0x52ad0f), _0x1c9c49[2] < 0.3 ? _0x416860 : wr(..._0x1c9c49);
}
function Wu(_0x553a91, _0x430038, _0x2146b3, _0x37c8b4) {
    const _0xb67721 = pt(..._0x2146b3);
    if (Math.min(Math.abs(_0xb67721[0] - _0x553a91[0]), Math.abs(_0xb67721[0] - _0x553a91[0] - 360)) > 30) {
        return _0x2146b3;
    }
    const _0x132dbf = _0x553a91[1] ? Math.min(1.5 * _0xb67721[1] / _0x553a91[1], 1) : 0;
    _0xb67721[0] = Math.min(360, _0xb67721[0] + _0x430038[0] - _0x553a91[0]);
    _0xb67721[1] = _0x553a91[1] ? Math.min(1, _0xb67721[1] * _0x430038[1] / _0x553a91[1]) : 0;
    _0xb67721[2] = _0x553a91[2] ? Math.min(1, _0xb67721[2] * (1 - _0x132dbf + _0x132dbf * _0x430038[2] / _0x553a91[2])) : 0;
    ;
    let _0x29147e = wr(..._0xb67721);
    const _0x4ef4a7 = ba(_0x2146b3), _0x82e62c = ba(_0x29147e);
    if (_0x37c8b4 ? _0x4ef4a7 > _0x82e62c : _0x4ef4a7 < _0x82e62c) {
        const _0x5b8f26 = 0.4 * _0x4ef4a7 / _0x82e62c + 0.6;
        _0x29147e = Vu(_0x29147e, _0x5b8f26);
    }
    return _0x29147e;
}
function Vu(_0x49c6d2, _0x5ee4be) {
    ;
    return _0x49c6d2.map(_0x34c0a3 => Dt(Math.round(_0x34c0a3 * _0x5ee4be), 0, 255));
}
function Dr(_0x3e2437) {
    const _0x5b6902 = (_0x3e2437 < 0 ? 16777215 + _0x3e2437 : _0x3e2437).toString(16);
    return '#' + (_0x5b6902.length >= 6 ? _0x5b6902 : '0'.repeat(6 - _0x5b6902.length) + _0x5b6902);
}
function wf(_0x44b3c4) {
    return et(Dr(_0x44b3c4));
}
function o3(_0x2b97d5) {
    ;
    return _0x2b97d5.settings ? [
        _0x2b97d5.settings.background_color,
        _0x2b97d5.settings.second_background_color,
        _0x2b97d5.settings.third_background_color,
        _0x2b97d5.settings.fourth_background_color
    ].filter(Boolean).map(Dr).join(',') : '';
}
function c3(_0x108774, _0x4a226e) {
    const _0x111b20 = _0x108774[3];
    return _0x108774.slice(0, 3).map((_0x35d493, _0x509a47) => Dt(Math.round((_0x111b20 * (_0x35d493 / 255) + _0x111b20 * (_0x4a226e[_0x509a47] / 255)) * 255), 0, 255));
}
function d3(_0x4de8f0) {
    const [_0x296e56, _0x5e6de7, _0x36df80] = _0x4de8f0;
    return 0.2126 * _0x296e56 / 255 + 0.7152 * _0x5e6de7 / 255 + 0.0722 * _0x36df80 / 255;
}
function l3(_0x26925d) {
    return _0x26925d > 0.5 ? [
        0,
        0,
        0
    ] : [
        255,
        255,
        255
    ];
}
function u3(_0x4414bf, _0x4087fd) {
    const _0x59df98 = _0x4414bf > 0.5 ? 0 : 1, _0x8e46ad = (_0x4414bf - _0x59df98 + _0x4087fd) / _0x4087fd;
    return +Math.max(0.5, Math.min(0.64, _0x8e46ad)).toFixed(2);
}
function Ln(_0xeccbd6, _0xfa8a8f) {
    const _0x503aeb = new Set(_0xfa8a8f), _0xfad871 = {};
    return Object.keys(_0xeccbd6).forEach(_0x45b9dd => {
        ;
        _0x503aeb.has(_0x45b9dd) || (_0xfad871[_0x45b9dd] = _0xeccbd6[_0x45b9dd]);
    }), _0xfad871;
}
const zu = [
    {
        'key': 'enhance',
        'uniform': 'uEnhance',
        'label': () => X('MediaEditor.Adjustments.Enhance'),
        'to100': true
    },
    {
        'key': 'brightness',
        'uniform': 'uBrightness',
        'label': () => X('MediaEditor.Adjustments.Brightness'),
        'to100': false
    },
    {
        'key': 'contrast',
        'uniform': 'uContrast',
        'label': () => X('MediaEditor.Adjustments.Contrast'),
        'to100': false
    },
    {
        'key': 'saturation',
        'uniform': 'uSaturation',
        'label': () => X('MediaEditor.Adjustments.Saturation'),
        'to100': false
    },
    {
        'key': 'warmth',
        'uniform': 'uWarmth',
        'label': () => X('MediaEditor.Adjustments.Warmth'),
        'to100': false
    },
    {
        'key': 'fade',
        'uniform': 'uFade',
        'label': () => X('MediaEditor.Adjustments.Fade'),
        'to100': true
    },
    {
        'key': 'highlights',
        'uniform': 'uHighlights',
        'label': () => X('MediaEditor.Adjustments.Highlights'),
        'to100': false
    },
    {
        'key': 'shadows',
        'uniform': 'uShadows',
        'label': () => X('MediaEditor.Adjustments.Shadows'),
        'to100': false
    },
    {
        'key': 'vignette',
        'uniform': 'uVignette',
        'label': () => X('MediaEditor.Adjustments.Vignette'),
        'to100': true
    },
    {
        'key': 'grain',
        'uniform': 'uGrain',
        'label': () => X('MediaEditor.Adjustments.Grain'),
        'to100': true
    },
    {
        'key': 'sharpen',
        'uniform': 'uSharpen',
        'label': () => X('MediaEditor.Adjustments.Sharpen'),
        'to100': true
    }
];
var Qf;
(_0x4080dc => {
    ;
    _0x4080dc.RemoveArrayItem = 'SSBiZWxpZXZlIEkgY2FuIGZseSwgSSBiZWxpZXZlIEkgY2FuIHRvdWNoIHRoZSBza3kh';
})(Qf || (Qf = {}));
var Gu = (_0xd0aa72 => (_0xd0aa72[_0xd0aa72.Redraw = 1] = 'Redraw', _0xd0aa72[_0xd0aa72.UpdateCursor = 2] = 'UpdateCursor', _0xd0aa72[_0xd0aa72.UpdateVideo = 4] = 'UpdateVideo', _0xd0aa72))(Gu || {});
const a0_0xba0256 = {};
a0_0xba0256.flip = [
    1,
    1
];
a0_0xba0256.rotation = 0;
a0_0xba0256.scale = 1;
a0_0xba0256.translation = [
    0,
    0
];
;
const a0_0x499332 = {};
a0_0x499332.alignment = 'left';
a0_0x499332.style = 'outline';
a0_0x499332.color = '#ffffff';
a0_0x499332.font = 'roboto';
a0_0x499332.size = 40;
;
const a0_0x3463e6 = {};
a0_0x3463e6.brush = 'pen';
a0_0x3463e6.color = '#fe4438';
a0_0x3463e6.size = 18;
;
const qu = _0x487e05 => ({
        'scale': 1,
        'rotation': 0,
        'translation': [
            0,
            0
        ],
        'flip': [
            1,
            1
        ],
        'currentImageRatio': 0,
        'currentVideoTime': 0,
        'videoCropStart': 0,
        'videoCropLength': 1,
        'videoThumbnailPosition': 0,
        'videoMuted': false,
        'videoQuality': Zu(_0x487e05.mediaSize[1]),
        'adjustments': Object.fromEntries(zu.map(_0x398eb3 => [
            _0x398eb3.key,
            0
        ])),
        'resizableLayers': [],
        'brushDrawnLines': [],
        'history': [],
        'redoHistory': []
    }), $u = () => ({
        'isReady': false,
        'pixelRatio': window.devicePixelRatio,
        'renderingPayload': void 0,
        'currentTab': 'adjustments',
        'imageSize': void 0,
        'canvasSize': void 0,
        'fixedImageRatioKey': void 0,
        'finalTransform': a0_0xba0256,
        'currentTextLayerInfo': a0_0x499332,
        'selectedResizableLayer': void 0,
        'stickersLayersInfo': {},
        'currentBrush': a0_0x3463e6,
        'previewBrushSize': void 0,
        'resizeHandlesContainer': void 0,
        'isAdjusting': false,
        'isMoving': false,
        'isPlaying': false
    }), Yu = Hi();
function h3(_0x48c8a3) {
    const _0x2f6cea = _0x48c8a3.editingMediaState ? structuredClone(_0x48c8a3.editingMediaState) : qu(_0x48c8a3), _0x2eeb5f = structuredClone(_0x2f6cea), _0xf3634a = Kr(_0x2f6cea), _0x125dbf = Kr($u()), _0x5029c2 = {
            'pushToHistory': _0x3b5f18 => {
                ;
                Tl(_0xf3634a, Ll(({
                    history: _0x59315a,
                    redoHistory: _0x375b67
                }) => {
                    ;
                    _0x59315a.push(_0x3b5f18);
                    _0x375b67.length && _0x375b67.splice(0, 1e+400);
                    ;
                }));
            },
            'setInitialImageRatio': _0x335a09 => {
                ;
                _0x2eeb5f.currentImageRatio = _0x335a09;
            },
            'redrawBrushes': () => {
            },
            'abortDrawerSlide': () => {
            },
            'resetRotationWheel': () => {
            },
            'setVideoTime': () => {
            }
        }, [_0x2c5792, _0x41e040] = ke(false), _0x4e74c3 = [
            'history',
            'redoHistory',
            'currentVideoTime'
        ], _0x2bd1c4 = Wo(() => {
            _0x41e040(!di(Ln(_0x2eeb5f, _0x4e74c3), Ln(_0xf3634a, _0x4e74c3)));
        }, 200, false);
    return rt(Is(() => li(Ln(_0xf3634a, _0x4e74c3)), () => {
        _0x2bd1c4();
    })), {
        'managers': _0x48c8a3.managers,
        'mediaSrc': _0x48c8a3.mediaSrc,
        'mediaType': _0x48c8a3.mediaType,
        'mediaBlob': _0x48c8a3.mediaBlob,
        'mediaSize': _0x48c8a3.mediaSize,
        'mediaState': _0xf3634a,
        'editorState': _0x125dbf,
        'actions': _0x5029c2,
        'hasModifications': _0x2c5792,
        'imageRatio': _0x48c8a3.mediaSize[0] / _0x48c8a3.mediaSize[1],
        'resizableLayersSeed': Math.random()
    };
}
const m3 = () => Uf(Yu), g3 = Q('Media editor'), p3 = _0xc456b6 => new Promise(_0x93b0d7 => setTimeout(_0x93b0d7, _0xc456b6));
function b3(_0x3e416e) {
    const _0x19fd70 = fo();
    return (..._0x89d09f) => no(_0x19fd70, () => _0x3e416e(..._0x89d09f));
}
function y3(_0x5f22a5, _0x4dfcd6) {
    return Math.hypot(_0x5f22a5[0] - _0x4dfcd6[0], _0x5f22a5[1] - _0x4dfcd6[1]);
}
function ya(_0x3d8a9f, _0x4c68df, _0x16a13e) {
    return _0x4c68df / _0x3d8a9f > _0x16a13e ? _0x4c68df = _0x16a13e * _0x3d8a9f : _0x16a13e = _0x4c68df / _0x3d8a9f, [
        _0x4c68df,
        _0x16a13e
    ];
}
function v3(_0x5326fc, _0x1ca6bf, _0x1932c6, _0x3ba4a6, _0x15f252) {
    return [_0x1ca6bf, _0x1932c6] = ya(_0x5326fc, _0x1ca6bf, _0x1932c6), [_0x3ba4a6, _0x15f252] = ya(_0x5326fc, _0x3ba4a6, _0x15f252), Math.max(_0x1ca6bf / _0x3ba4a6, _0x1932c6 / _0x15f252);
}
function E3(_0x320933) {
    ;
    return Ac(_0x320933).l < 80 ? '#ffffff' : '#000000';
}
function va(_0x21284d, _0x304ba9, _0x5026f1) {
    return _0x21284d + (_0x304ba9 - _0x21284d) * _0x5026f1;
}
function w3(_0x53a779, _0x33c1f7, _0x145aff) {
    ;
    return _0x53a779.map((_0x2725a3, _0x355ce3) => _0x2725a3 + (_0x33c1f7[_0x355ce3] - _0x2725a3) * _0x145aff);
}
const Ea = _0x5812e5 => _0x5812e5 instanceof Object, Ku = 0.001;
function di(_0x368e3f, _0x7946e8) {
    ;
    return typeof _0x368e3f == 'number' && typeof _0x7946e8 == 'number' ? Math.abs(_0x368e3f - _0x7946e8) < Ku : _0x368e3f === _0x7946e8 ? true : _0x368e3f instanceof Array && _0x7946e8 instanceof Array ? _0x368e3f.length === _0x7946e8.length && _0x368e3f.every((_0x578dfa, _0x7f3753) => di(_0x578dfa, _0x7946e8[_0x7f3753])) : Ea(_0x368e3f) && Ea(_0x7946e8) ? Array.from(new Set([
        ...Object.keys(_0x368e3f),
        ...Object.keys(_0x7946e8)
    ])).every(_0x78155f => di(_0x368e3f[_0x78155f], _0x7946e8[_0x78155f])) : false;
}
const Ju = Ec(0.42, 0, 0.58, 1), Xu = Ec(0.25, 0.1, 0.25, 1);
function Qu(_0x399927, _0x7454ff, _0x1f2386, _0x584e30, {
    easing: _0x3157b5 = Ju,
    onEnd: _0x8d1d19 = () => {
    }
} = {}) {
    ;
    let _0x35b47b, _0x17a269 = false;
    function _0x268a49(_0x5b204f) {
        ;
        if (_0x17a269) {
            return;
        }
        _0x35b47b || (_0x35b47b = _0x5b204f);
        const _0x277696 = _0x5b204f - _0x35b47b, _0x402c48 = Math.min(_0x277696 / _0x1f2386, 1), _0x464021 = _0x3157b5(_0x402c48);
        if (_0x399927 instanceof Array && _0x7454ff instanceof Array) {
            const _0x1e9444 = _0x399927.map((_0x1d7745, _0x71f27b) => va(_0x1d7745, _0x7454ff[_0x71f27b], _0x464021));
            _0x584e30(_0x1e9444);
        } else {
            _0x584e30(va(_0x399927, _0x7454ff, _0x464021));
        }
        _0x402c48 < 1 ? requestAnimationFrame(_0x268a49) : _0x8d1d19();
    }
    return requestAnimationFrame(_0x268a49), () => {
        ;
        _0x17a269 = true;
    };
}
function D3(_0x4318c6, _0x2c92bc) {
    const _0x6b8ead = [..._0x4318c6.path].reverse();
    if (!_0x6b8ead?.length) {
        return;
    }
    let _0x2c72a0 = _0x2c92bc;
    for (; _0x6b8ead.length > 1;) {
        _0x2c72a0 = _0x2c72a0[_0x6b8ead.pop()];
    }
    let _0x5e5316 = _0x6b8ead.pop();
    _0x2c72a0 instanceof Array ? (_0x5e5316 = _0x5e5316, _0x4318c6.findBy && (_0x5e5316 = _0x2c72a0.findIndex(_0x5894fc => _0x5894fc?.id === _0x4318c6.findBy.id)), _0x5e5316 === -1 && (_0x5e5316 = _0x2c72a0.length), _0x4318c6.newValue === Qf.RemoveArrayItem ? _0x2c72a0.splice(_0x5e5316, 0, _0x4318c6.oldValue) : _0x4318c6.oldValue === Qf.RemoveArrayItem ? _0x2c72a0.splice(_0x5e5316, 1) : _0x2c72a0[_0x5e5316] = _0x4318c6.oldValue) : _0x2c72a0[_0x5e5316] = _0x4318c6.oldValue;
}
function li(_0x67d34f) {
    ;
    _0x67d34f instanceof Array ? _0x67d34f.forEach(_0x18d27a => li(_0x18d27a)) : _0x67d34f instanceof Object && Object.values(_0x67d34f).forEach(_0xb82f85 => li(_0xb82f85));
}
function S3(_0x2c0f1c) {
    ;
    _0x2c0f1c.getExtension('WEBGL_lose_context')?.loseContext();
}
const Df = [
    240,
    360,
    480,
    600,
    720,
    1080
];
function Zu(_0x4e20c8) {
    ;
    for (let _0xad55b9 = Df.length - 1; _0xad55b9 > 0; _0xad55b9--) {
        const _0x39feb5 = Df[_0xad55b9], _0x1887e1 = Df[_0xad55b9 - 1], _0x3bbc13 = _0x39feb5 - _0x1887e1;
        if (_0x4e20c8 > _0x1887e1 + _0x3bbc13 * 0.8) {
            return _0x39feb5;
        }
    }
    return Df[0];
}
function A3(_0x33354b) {
    ;
    return !!_0x33354b.find(_0x3953b3 => {
        const _0xa8902b = _0x3953b3.sticker?.sticker;
        return _0xa8902b === 2 || !wt && _0xa8902b === 3;
    });
}
const a0_0x5f17d9 = {};
a0_0x5f17d9.fontFamily = '\'Roboto\'';
a0_0x5f17d9.fontWeight = 500;
a0_0x5f17d9.baseline = 0.75;
;
const a0_0x540bfb = {};
a0_0x540bfb.fontFamily = '\'Suez One\'';
a0_0x540bfb.fontWeight = 400;
a0_0x540bfb.baseline = 0.75;
;
const a0_0x305444 = {};
a0_0x305444.fontFamily = '\'Rubik Bubbles\'';
a0_0x305444.fontWeight = 400;
a0_0x305444.baseline = 0.75;
;
const a0_0x2ffccc = {};
a0_0x2ffccc.fontFamily = '\'Playwrite BE VLG\'';
a0_0x2ffccc.fontWeight = 400;
a0_0x2ffccc.baseline = 0.85;
;
const a0_0x5123cb = {};
a0_0x5123cb.fontFamily = '\'Chewy\'';
a0_0x5123cb.fontWeight = 400;
a0_0x5123cb.baseline = 0.75;
;
const a0_0x36ec6f = {};
a0_0x36ec6f.fontFamily = '\'Courier Prime\'';
a0_0x36ec6f.fontWeight = 700;
a0_0x36ec6f.baseline = 0.65;
;
const a0_0x4e5108 = {};
a0_0x4e5108.fontFamily = '\'Fugaz One\'';
a0_0x4e5108.fontWeight = 400;
a0_0x4e5108.baseline = 0.75;
;
const a0_0x160cbc = {};
a0_0x160cbc.fontFamily = '\'Sedan\'';
a0_0x160cbc.fontWeight = 400;
a0_0x160cbc.baseline = 0.75;
;
const a0_0x1f577f = {};
a0_0x1f577f.roboto = a0_0x5f17d9;
a0_0x1f577f.suez = a0_0x540bfb;
a0_0x1f577f.bubbles = a0_0x305444;
a0_0x1f577f.playwrite = a0_0x2ffccc;
a0_0x1f577f.chewy = a0_0x5123cb;
a0_0x1f577f.courier = a0_0x36ec6f;
a0_0x1f577f.fugaz = a0_0x4e5108;
a0_0x1f577f.sedan = a0_0x160cbc;
;
;
const C3 = a0_0x1f577f;
class xn {
    constructor(_0x3abf4b) {
        ;
        this.options = _0x3abf4b;
        this.autoplay = true;
        this.loop = true;
        this.paused = true;
        ;
    }
    ['remove']() {
        ;
        this.pause();
        this.options.onDestroy?.();
        ;
    }
    ['play']() {
        ;
        this.paused && (this.paused = false, this.options.onPlay());
    }
    ['pause']() {
        ;
        this.paused || (this.paused = true, this.options.onPause());
    }
}
function wa(_0x27cec7, _0x451ba3) {
    return Dt(_0x27cec7 * _0x451ba3 / 250000 * 1000 * (Re ? 5 : 10), 500, 10000);
}
const st = class st {
    constructor() {
        ;
        this.drawCallbacks = new Map();
        this.targetCanvasesCount = 0;
        this.reset = true;
        this.loop = true;
        ;
        const _0x2763d9 = this.canvas = document.createElement('canvas');
        this.dpr = window.devicePixelRatio;
        _0x2763d9.classList.add('canvas-thumbnail', 'canvas-dots');
        this.paused = true;
        this.autoplay = true;
        this.tempId = 0;
        this.time = 0;
        this.bufferIndex = 0;
        this.context = _0x2763d9.getContext('webgl2');
        ;
    }
    ['resize'](_0xc28ab7, _0x1a97e3, _0x31c74b, _0x145b83 = {}) {
        ;
        this.width = _0xc28ab7;
        this.height = _0x1a97e3;
        this.multiply = _0x31c74b;
        this.canvas.width = _0xc28ab7 * this.dpr;
        this.canvas.height = _0x1a97e3 * this.dpr;
        this.config = {
            'particlesCount': wa(_0xc28ab7, _0x1a97e3),
            'radius': this.dpr * 1.6,
            'seed': Math.random() * 10,
            'noiseScale': 6,
            'noiseSpeed': 0.6,
            'forceMult': 0.6,
            'velocityMult': 1,
            'dampingMult': 0.9999,
            'maxVelocity': 6,
            'longevity': 1.4,
            'noiseMovement': 4,
            'timeScale': 0.65,
            'color': 16777215,
            ..._0x145b83
        };
        this.inited && this.draw();
        ;
    }
    ['genBuffer']() {
        ;
        this.buffer && (this.context.deleteBuffer(this.buffer[0]), this.context.deleteBuffer(this.buffer[1]));
        this.buffer = [];
        ;
        for (let _0x13dae8 = 0; _0x13dae8 < 2; ++_0x13dae8) {
            this.buffer[_0x13dae8] = this.context.createBuffer();
            this.context.bindBuffer(this.context.ARRAY_BUFFER, this.buffer[_0x13dae8]);
            this.context.bufferData(this.context.ARRAY_BUFFER, (this.bufferParticlesCount = Math.ceil(this.config.particlesCount)) * 6 * 4, this.context.DYNAMIC_DRAW);
            ;
        }
    }
    ['compileShader'](_0x578487, _0x414fce) {
        ;
        var _0x433c66;
        const _0x2e8200 = this.context.createShader(_0x578487), _0x3cb75e = (_0x433c66 = st.shaderTexts)[_0x414fce] ?? (_0x433c66[_0x414fce] = fetch(_0x414fce).then(_0x5cc2dd => _0x5cc2dd.text()).then(_0x57c9d2 => st.shaderTexts[_0x414fce] = _0x57c9d2 + '\n//' + Math.random()));
        return at(_0x3cb75e, _0x523578 => {
            ;
            if (this.context.shaderSource(_0x2e8200, _0x523578), this.context.compileShader(_0x2e8200), !this.context.getShaderParameter(_0x2e8200, this.context.COMPILE_STATUS)) {
                throw 'compile shader error:\n' + this.context.getShaderInfoLog(_0x2e8200);
            }
            return _0x2e8200;
        });
    }
    ['compileShaders']() {
        ;
        return _u([
            this.compileShader(this.context.VERTEX_SHADER, 'assets/img/bfc40042.glsl'),
            this.compileShader(this.context.FRAGMENT_SHADER, 'assets/img/04d70337.glsl')
        ], _0x372615 => _0x372615);
    }
    ['draw']() {
        ;
        if (!this.inited) {
            return;
        }
        const _0x12a8a4 = this.context, _0x5ca0cf = this.config, _0x18594d = Date.now(), _0x5b6d22 = Math.min((_0x18594d - this.lastDrawTime) / 1000, 1) * _0x5ca0cf.timeScale;
        this.lastDrawTime = _0x18594d;
        this.time += _0x5b6d22;
        if (this.bufferParticlesCount < _0x5ca0cf.particlesCount) {
            this.genBuffer();
            this.reset = true;
        }
        _0x12a8a4.viewport(0, 0, this.canvas.width, this.canvas.height);
        _0x12a8a4.clear(_0x12a8a4.COLOR_BUFFER_BIT);
        _0x12a8a4.useProgram(this.program);
        _0x12a8a4.uniform1f(this.resetHandle, this.reset ? 1 : 0);
        this.reset && (this.time = 0, this.reset = false);
        _0x12a8a4.uniform1f(this.timeHandle, this.time);
        _0x12a8a4.uniform1f(this.deltaTimeHandle, _0x5b6d22);
        _0x12a8a4.uniform2f(this.sizeHandle, this.canvas.width, this.canvas.height);
        _0x12a8a4.uniform1f(this.seedHandle, _0x5ca0cf.seed);
        _0x12a8a4.uniform1f(this.radiusHandle, _0x5ca0cf.radius);
        _0x12a8a4.uniform1f(this.noiseScaleHandle, _0x5ca0cf.noiseScale);
        _0x12a8a4.uniform1f(this.noiseSpeedHandle, _0x5ca0cf.noiseSpeed);
        _0x12a8a4.uniform1f(this.dampingMultHandle, _0x5ca0cf.dampingMult);
        _0x12a8a4.uniform1f(this.velocityMultHandle, _0x5ca0cf.velocityMult);
        _0x12a8a4.uniform1f(this.forceMultHandle, _0x5ca0cf.forceMult);
        _0x12a8a4.uniform1f(this.longevityHandle, _0x5ca0cf.longevity);
        _0x12a8a4.uniform1f(this.maxVelocityHandle, _0x5ca0cf.maxVelocity);
        _0x12a8a4.uniform1f(this.noiseMovementHandle, _0x5ca0cf.noiseMovement);
        _0x12a8a4.uniform3f(this.colorHandle, (_0x5ca0cf.color >> 16 & 255) / 255, (_0x5ca0cf.color >> 8 & 255) / 255, (_0x5ca0cf.color & 255) / 255);
        _0x12a8a4.bindBuffer(_0x12a8a4.ARRAY_BUFFER, this.buffer[this.bufferIndex]);
        _0x12a8a4.vertexAttribPointer(0, 2, _0x12a8a4.FLOAT, false, 24, 0);
        _0x12a8a4.enableVertexAttribArray(0);
        _0x12a8a4.vertexAttribPointer(1, 2, _0x12a8a4.FLOAT, false, 24, 8);
        _0x12a8a4.enableVertexAttribArray(1);
        _0x12a8a4.vertexAttribPointer(2, 1, _0x12a8a4.FLOAT, false, 24, 16);
        _0x12a8a4.enableVertexAttribArray(2);
        _0x12a8a4.vertexAttribPointer(3, 1, _0x12a8a4.FLOAT, false, 24, 20);
        _0x12a8a4.enableVertexAttribArray(3);
        _0x12a8a4.bindBufferBase(_0x12a8a4.TRANSFORM_FEEDBACK_BUFFER, 0, this.buffer[1 - this.bufferIndex]);
        _0x12a8a4.vertexAttribPointer(0, 2, _0x12a8a4.FLOAT, false, 24, 0);
        _0x12a8a4.enableVertexAttribArray(0);
        _0x12a8a4.vertexAttribPointer(1, 2, _0x12a8a4.FLOAT, false, 24, 8);
        _0x12a8a4.enableVertexAttribArray(1);
        _0x12a8a4.vertexAttribPointer(2, 1, _0x12a8a4.FLOAT, false, 24, 16);
        _0x12a8a4.enableVertexAttribArray(2);
        _0x12a8a4.vertexAttribPointer(3, 1, _0x12a8a4.FLOAT, false, 24, 20);
        _0x12a8a4.enableVertexAttribArray(3);
        _0x12a8a4.beginTransformFeedback(_0x12a8a4.POINTS);
        _0x12a8a4.drawArrays(_0x12a8a4.POINTS, 0, _0x5ca0cf.particlesCount);
        _0x12a8a4.endTransformFeedback();
        _0x12a8a4.bindBuffer(_0x12a8a4.ARRAY_BUFFER, null);
        _0x12a8a4.bindBufferBase(_0x12a8a4.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        this.bufferIndex = 1 - this.bufferIndex;
        this.drawCallbacks.forEach(_0x133ec5 => _0x133ec5());
        ;
    }
    ['remove']() {
        ;
        this.pause();
        this.destroy();
        ;
    }
    ['pause']() {
        ;
        this.paused || (this.paused = true, ++this.tempId);
    }
    ['play']() {
        ;
        if (!this.paused) {
            return;
        }
        this.paused = false;
        const _0x5b97fc = ++this.tempId;
        this.lastDrawTime = Date.now();
        gc(() => this.tempId !== _0x5b97fc || this.paused ? false : (this.draw(), true));
        ;
    }
    ['_init'](_0x5cab94, _0x5bcff0) {
        ;
        this.genBuffer();
        const _0x1cbdcf = this.context, _0x485d92 = this.program = _0x1cbdcf.createProgram();
        if (_0x1cbdcf.attachShader(_0x485d92, _0x5cab94), _0x1cbdcf.attachShader(_0x485d92, _0x5bcff0), _0x1cbdcf.transformFeedbackVaryings(_0x485d92, [
                'outPosition',
                'outVelocity',
                'outTime',
                'outDuration'
            ], _0x1cbdcf.INTERLEAVED_ATTRIBS), _0x1cbdcf.linkProgram(_0x485d92), !_0x1cbdcf.getProgramParameter(_0x485d92, _0x1cbdcf.LINK_STATUS)) {
            throw 'program link error:\n' + _0x1cbdcf.getProgramInfoLog(_0x485d92);
        }
        _0x1cbdcf.deleteShader(_0x5cab94);
        _0x1cbdcf.deleteShader(_0x5bcff0);
        this.timeHandle = _0x1cbdcf.getUniformLocation(_0x485d92, 'time');
        this.deltaTimeHandle = _0x1cbdcf.getUniformLocation(_0x485d92, 'deltaTime');
        this.sizeHandle = _0x1cbdcf.getUniformLocation(_0x485d92, 'size');
        this.resetHandle = _0x1cbdcf.getUniformLocation(_0x485d92, 'reset');
        this.radiusHandle = _0x1cbdcf.getUniformLocation(_0x485d92, 'r');
        this.seedHandle = _0x1cbdcf.getUniformLocation(_0x485d92, 'seed');
        this.noiseScaleHandle = _0x1cbdcf.getUniformLocation(_0x485d92, 'noiseScale');
        this.noiseSpeedHandle = _0x1cbdcf.getUniformLocation(_0x485d92, 'noiseSpeed');
        this.dampingMultHandle = _0x1cbdcf.getUniformLocation(_0x485d92, 'dampingMult');
        this.velocityMultHandle = _0x1cbdcf.getUniformLocation(_0x485d92, 'velocityMult');
        this.forceMultHandle = _0x1cbdcf.getUniformLocation(_0x485d92, 'forceMult');
        this.longevityHandle = _0x1cbdcf.getUniformLocation(_0x485d92, 'longevity');
        this.maxVelocityHandle = _0x1cbdcf.getUniformLocation(_0x485d92, 'maxVelocity');
        this.noiseMovementHandle = _0x1cbdcf.getUniformLocation(_0x485d92, 'noiseMovement');
        this.colorHandle = _0x1cbdcf.getUniformLocation(_0x485d92, 'color');
        _0x1cbdcf.clearColor(0, 0, 0, 0);
        _0x1cbdcf.viewport(0, 0, this.canvas.width, this.canvas.height);
        _0x1cbdcf.enable(_0x1cbdcf.BLEND);
        _0x1cbdcf.blendFunc(_0x1cbdcf.SRC_ALPHA, _0x1cbdcf.ONE_MINUS_SRC_ALPHA);
        this.inited = true;
        this.lastDrawTime = Date.now();
        ;
    }
    ['init']() {
        ;
        return this.initPromise ?? (this.initPromise = at(this.compileShaders(), _0x12e6e8 => (this['_init'](..._0x12e6e8), this.draw(), true)));
    }
    ['destroy']() {
        ;
        this.buffer && (this.context.deleteBuffer(this.buffer[0]), this.context.deleteBuffer(this.buffer[1]));
        this.buffer = null;
        this.context.deleteProgram(this.program);
        this.program = null;
        ;
    }
    static ['create']({
        width: _0x5cc0a8,
        height: _0x572245,
        middleware: _0x5244b0,
        animationGroup: _0x5a05c7,
        multiply: _0x2c9130,
        config: _0x4f9234
    }) {
        const _0x26db56 = ++this.createdIndex;
        let {imageSpoilerInstance: _0xe986ed} = this;
        _0xe986ed || (_0xe986ed = this.imageSpoilerInstance = new st(), _0xe986ed.resize(480, 480), window.dotRenderer = _0xe986ed);
        const _0x51ef5f = document.createElement('canvas');
        _0x51ef5f.classList.add('canvas-thumbnail', 'canvas-dots');
        const _0x2ff6c4 = window.devicePixelRatio;
        _0x5cc0a8 && (_0x51ef5f.width = _0x5cc0a8 * _0x2ff6c4, _0x51ef5f.height = _0x572245 * _0x2ff6c4);
        const _0x79e93a = _0x51ef5f.getContext('2d'), _0x1bca5b = _0x26db56 % 4 === 1, _0x1c20eb = _0x26db56 % 4 === 2, _0x15085b = _0x26db56 % 4 === 3, _0x5a08a1 = [
                _0x1bca5b && 'rotate(180deg)',
                _0x1c20eb && 'scaleX(-1)',
                _0x15085b && 'scaleY(-1)'
            ].filter(Boolean);
        _0x5a08a1.length && (_0x51ef5f.style.transform = _0x5a08a1.join(' '));
        let _0x9ff097;
        const _0x334a17 = pa(0, _0xe986ed.canvas.width - _0x51ef5f.width), _0x2af6ea = pa(0, _0xe986ed.canvas.height - _0x51ef5f.height);
        function _0x17b880(_0x237d4a, _0xa7b39a, _0x528127, _0x212191) {
            ;
            _0x237d4a.save();
            _0x237d4a.globalCompositeOperation = 'destination-out';
            _0x237d4a.fillStyle = 'white';
            _0x237d4a.shadowBlur = _0x212191 / 3.5 * _0xe986ed.dpr * _0xa7b39a;
            _0x237d4a.shadowColor = 'white';
            _0x237d4a.beginPath();
            _0x237d4a.arc(_0x528127.x, _0x528127.y, _0x212191 * _0xa7b39a, 0, 2 * Math.PI);
            _0x237d4a.fill();
            _0x237d4a.globalCompositeOperation = 'source-over';
            _0x237d4a.restore();
            ;
        }
        const _0x3ccdd1 = () => {
            ;
            const {
                width: _0x34181f,
                height: _0x57ae65
            } = _0x51ef5f;
            if (!(_0x9ff097?.progress >= 1)) {
                if (_0x79e93a.clearRect(0, 0, _0x34181f, _0x57ae65), !_0x9ff097) {
                    _0x79e93a.drawImage(_0xe986ed.canvas, _0x334a17, _0x2af6ea, _0x34181f, _0x57ae65, 0, 0, _0x34181f, _0x57ae65);
                } else {
                    const {
                            progress: _0xf7c2a1,
                            transformedCoords: _0x5a7e68,
                            underLyingCtx: _0x43a3b5,
                            maxDist: _0xfe6efb,
                            maxDistUnderlyingCanvas: _0x20e201,
                            underlyingCanvasClickCoords: _0x391138
                        } = _0x9ff097, _0x12fef1 = _0xf7c2a1 ** 2 * 0.5;
                    _0x79e93a.drawImage(_0xe986ed.canvas, _0x334a17 + _0x5a7e68.x * _0x12fef1, _0x2af6ea + _0x5a7e68.y * _0x12fef1, _0x34181f * (1 - _0x12fef1), _0x57ae65 * (1 - _0x12fef1), 0, 0, _0x34181f, _0x57ae65);
                    _0x17b880(_0x79e93a, _0xf7c2a1, _0x5a7e68, _0xfe6efb);
                    _0x17b880(_0x43a3b5, _0xf7c2a1, _0x391138, _0x20e201);
                    ;
                }
                _0x4f9234?.color && gn(_0x79e93a, '#' + _0x4f9234.color.toString(16), 0, 0, _0x34181f, _0x57ae65);
            }
        };
        ++_0xe986ed.targetCanvasesCount;
        const _0x26cfe4 = new xn({
                'onPlay': () => {
                    ;
                    _0xe986ed.drawCallbacks.set(_0x51ef5f, _0x3ccdd1);
                    _0xe986ed.play();
                    ;
                },
                'onPause': () => {
                    ;
                    _0xe986ed.drawCallbacks.delete(_0x51ef5f);
                    _0xe986ed.drawCallbacks.size || _0xe986ed.pause();
                    ;
                },
                'onDestroy': () => {
                    ;
                    --_0xe986ed.targetCanvasesCount || (_0xe986ed.remove(), this.imageSpoilerInstance = void 0);
                }
            }), _0x4c2ed4 = {
                animation: _0x26cfe4,
                group: _0x5a05c7,
                observeElement: _0x51ef5f,
                controlled: _0x5244b0,
                type: 'dots'
            };
        ;
        ;
        ;
        ;
        ;
        pe.addAnimation(_0x4c2ed4);
        ;
        function _0x576da3(_0x3a8565, _0x5c5a16) {
            ;
            if (!('clientX' in _0x3a8565 && 'clientY' in _0x3a8565)) {
                return false;
            }
            const _0x187bcb = _0x51ef5f.getBoundingClientRect(), _0x12cebb = _0x3a8565.clientX - _0x187bcb.left, _0x9d8b2 = _0x3a8565.clientY - _0x187bcb.top;
            let _0x2782dd = _0x12cebb, _0x27e758 = _0x9d8b2;
            Number(_0x1bca5b) + Number(_0x1c20eb) === 1 && (_0x2782dd = _0x187bcb.width - _0x12cebb);
            Number(_0x1bca5b) + Number(_0x15085b) === 1 && (_0x27e758 = _0x187bcb.height - _0x9d8b2);
            ;
            const _0x372f23 = Math.max(Math.hypot(_0x12cebb, _0x9d8b2), Math.hypot(_0x187bcb.width - _0x12cebb, _0x9d8b2), Math.hypot(_0x12cebb, _0x187bcb.height - _0x9d8b2), Math.hypot(_0x187bcb.width - _0x12cebb, _0x187bcb.height - _0x9d8b2)), _0x530354 = _0x372f23 * _0xe986ed.dpr + 50, _0x2f48b1 = {
                    x: _0x12cebb * _0x5c5a16.width / _0x187bcb.width,
                    y: _0x9d8b2 * _0x5c5a16.height / _0x187bcb.height
                };
            ;
            ;
            ;
            const _0x47bd7c = {
                x: _0x2782dd * _0xe986ed.dpr,
                y: _0x27e758 * _0xe986ed.dpr
            };
            ;
            ;
            _0x9ff097 = {
                'underlyingCanvasClickCoords': _0x2f48b1,
                'transformedCoords': _0x47bd7c,
                'maxDist': _0x530354,
                'maxDistUnderlyingCanvas': _0x530354 / _0x51ef5f.width * _0x5c5a16.width,
                'underLyingCtx': _0x5c5a16.getContext('2d'),
                'progress': 0
            };
            ;
            const _0x5acbbf = q();
            return Qu(0, 1, 800 + (400 - _0x372f23), _0x148ab5 => {
                ;
                _0x9ff097.progress = _0x148ab5;
                _0x3ccdd1();
                ;
            }, {
                'onEnd': () => void _0x5acbbf.resolve(),
                'easing': Xu
            }), _0x5acbbf;
        }
        const _0x4a9fb3 = {
            'canvas': _0x51ef5f,
            'readyResult': _0x5cc0a8 && _0xe986ed.init(),
            'revealWithAnimation': _0x576da3
        };
        return this.createdImageSpoilers.set(_0x51ef5f, _0x4a9fb3), _0x4a9fb3;
    }
    static ['getImageSpoilerByElement'](_0x2ab43e) {
        ;
        return this.createdImageSpoilers.get(_0x2ab43e);
    }
    static ['getTextSpoilerInstance']() {
        ;
        if (this.textSpoilerInstance) {
            return this.textSpoilerInstance;
        }
        const _0x2cb4c9 = this.textSpoilerInstance = new st();
        return _0x2cb4c9.dpr = Math.min(2, window.devicePixelRatio), _0x2cb4c9.resize(240, 120, void 0, {
            'particlesCount': 4 * wa(240, 120),
            'noiseSpeed': 5,
            'maxVelocity': 10,
            'timeScale': 1.2,
            'radius': 1.8 * _0x2cb4c9.dpr,
            'forceMult': 0.2,
            'velocityMult': 0.4,
            'dampingMult': 2.2,
            'longevity': 5
        }), N.textSpoilerRenderer = _0x2cb4c9, _0x2cb4c9;
    }
    static ['attachTextSpoilerTarget']({
        middleware: _0x4d23f6,
        animationGroup: _0x4bc2ac,
        canvas: _0x304f4d,
        draw: _0x1e140a
    }) {
        const _0x53c338 = this.getTextSpoilerInstance();
        ++_0x53c338.targetCanvasesCount;
        const _0x1de82e = new xn({
                'onPlay': () => {
                    ;
                    _0x53c338.drawCallbacks.set(_0x304f4d, _0x1e140a);
                    _0x53c338.play();
                    ;
                },
                'onPause': () => {
                    ;
                    _0x53c338.drawCallbacks.delete(_0x304f4d);
                    _0x53c338.drawCallbacks.size || _0x53c338.pause();
                    ;
                },
                'onDestroy': () => {
                    ;
                    --_0x53c338.targetCanvasesCount || (_0x53c338.remove(), this.textSpoilerInstance = void 0);
                }
            }), _0x4a60ce = {};
        return _0x4a60ce.animation = _0x1de82e, _0x4a60ce.group = _0x4bc2ac, _0x4a60ce.observeElement = _0x304f4d, _0x4a60ce.controlled = _0x4d23f6, _0x4a60ce.type = 'dots', (pe.addAnimation(_0x4a60ce), {
            'animation': _0x1de82e,
            'sourceCanvas': _0x53c338.canvas,
            'dpr': _0x53c338.dpr,
            'readyResult': _0x53c338.init()
        });
    }
    static ['attachBluffTextSpoilerTarget'](_0x40fbcf) {
        const _0x4a7a94 = this.getTextSpoilerInstance();
        gt.observeReconnection(_0x40fbcf, _0x5d7847 => this.attachBluffTextSpoilerTarget(_0x5d7847));
        ++_0x4a7a94.targetCanvasesCount;
        ++gt.instancesCount;
        ;
        const _0x380d8a = new xn({
                'onPlay': () => {
                    ;
                    _0x4a7a94.drawCallbacks.set(_0x40fbcf, () => gt.draw(_0x4a7a94.canvas));
                    _0x4a7a94.play();
                    ;
                },
                'onPause': () => {
                    ;
                    _0x4a7a94.drawCallbacks.delete(_0x40fbcf);
                    _0x4a7a94.drawCallbacks.size || _0x4a7a94.pause();
                    ;
                },
                'onDestroy': () => {
                    ;
                    --_0x4a7a94.targetCanvasesCount || (_0x4a7a94.remove(), this.textSpoilerInstance = void 0);
                    --gt.instancesCount || gt.destroy();
                    ;
                }
            }), _0x444443 = {
                animation: _0x380d8a,
                group: 'BLUFF-SPOILER',
                observeElement: _0x40fbcf,
                type: 'dots'
            };
        ;
        ;
        ;
        ;
        pe.addAnimation(_0x444443);
        _0x4a7a94.init();
        ;
        ;
    }
};
st.shaderTexts = {};
st.createdIndex = -1;
st.createdImageSpoilers = new WeakMap();
;
let ui = st;
const eh = {
        'decode': _0x414504 => {
            const _0x311eaa = [];
            let _0x3b262e = 0;
            const _0x3169ca = _0x414504.length;
            let _0x1f7549, _0x353c82;
            for (; _0x3b262e < _0x3169ca;) {
                if (_0x1f7549 = _0x414504.charCodeAt(_0x3b262e++), (_0x1f7549 & 63488) === 55296) {
                    if (_0x353c82 = _0x414504.charCodeAt(_0x3b262e++), (_0x1f7549 & 64512) !== 55296 || (_0x353c82 & 64512) !== 56320) {
                        throw new RangeError('UTF-16(decode): Illegal UTF-16 sequence');
                    }
                    _0x1f7549 = ((_0x1f7549 & 1023) << 10) + (_0x353c82 & 1023) + 65536;
                }
                _0x311eaa.push(_0x1f7549);
            }
            return _0x311eaa;
        },
        'encode': _0x17322b => {
            const _0x48585b = [];
            let _0x4beb52 = 0;
            const _0x2e8436 = _0x17322b.length;
            let _0x20fa9a;
            for (; _0x4beb52 < _0x2e8436;) {
                if (_0x20fa9a = _0x17322b[_0x4beb52++], (_0x20fa9a & 63488) === 55296) {
                    throw new RangeError('UTF-16(encode): Illegal UTF-16 value');
                }
                if (_0x20fa9a > 65535) {
                    _0x20fa9a -= 65536;
                    _0x48585b.push(String.fromCharCode(_0x20fa9a >>> 10 & 1023 | 55296));
                    _0x20fa9a = 56320 | _0x20fa9a & 1023;
                }
                _0x48585b.push(String.fromCharCode(_0x20fa9a));
                ;
            }
            return _0x48585b.join('');
        }
    }, th = 128, sh = 72, fh = '-', qe = 36, nh = 700, Lf = 1, hi = 26, ih = 38, Mn = 2147483647;
function rh(_0x50a4c5) {
    return _0x50a4c5 - 48 < 10 ? _0x50a4c5 - 22 : _0x50a4c5 - 65 < 26 ? _0x50a4c5 - 65 : _0x50a4c5 - 97 < 26 ? _0x50a4c5 - 97 : qe;
}
function ah(_0x177128, _0x5ad157, _0xdf62e4) {
    ;
    let _0x4a07fc;
    for (_0x177128 = _0xdf62e4 ? Math.floor(_0x177128 / nh) : _0x177128 >> 1, _0x177128 += Math.floor(_0x177128 / _0x5ad157), _0x4a07fc = 0; _0x177128 > (qe - Lf) * hi >> 1; _0x4a07fc += qe) {
        _0x177128 = Math.floor(_0x177128 / (qe - Lf));
    }
    return Math.floor(_0x4a07fc + (qe - Lf + 1) * _0x177128 / (_0x177128 + ih));
}
function oh(_0x554138, _0x58872a) {
    const _0x413f91 = [], _0x2bc2e2 = _0x554138.length;
    let _0x3019f0, _0x361f2e, _0x126088, _0x46a841, _0x331a8d, _0x5aea2a, _0x4449b3, _0x404d8c, _0x1fd9e4, _0x13344f, _0x55f794, _0x47af4b;
    for (_0x3019f0 = th, _0x126088 = 0, _0x46a841 = sh, _0x331a8d = _0x554138.lastIndexOf(fh), _0x331a8d < 0 && (_0x331a8d = 0), _0x5aea2a = 0; _0x5aea2a < _0x331a8d; ++_0x5aea2a) {
        if (_0x554138.charCodeAt(_0x5aea2a) >= 128) {
            throw new RangeError('Illegal input >= 0x80');
        }
        _0x413f91.push(_0x554138.charCodeAt(_0x5aea2a));
    }
    for (_0x4449b3 = _0x331a8d > 0 ? _0x331a8d + 1 : 0; _0x4449b3 < _0x2bc2e2;) {
        for (_0x404d8c = _0x126088, _0x1fd9e4 = 1, _0x13344f = qe;; _0x13344f += qe) {
            if (_0x4449b3 >= _0x2bc2e2) {
                throw RangeError('punycode_bad_input(1)');
            }
            if (_0x55f794 = rh(_0x554138.charCodeAt(_0x4449b3++)), _0x55f794 >= qe) {
                throw RangeError('punycode_bad_input(2)');
            }
            if (_0x55f794 > Math.floor((Mn - _0x126088) / _0x1fd9e4)) {
                throw RangeError('punycode_overflow(1)');
            }
            if (_0x126088 += _0x55f794 * _0x1fd9e4, _0x47af4b = _0x13344f <= _0x46a841 ? Lf : _0x13344f >= _0x46a841 + hi ? hi : _0x13344f - _0x46a841, _0x55f794 < _0x47af4b) {
                break;
            }
            if (_0x1fd9e4 > Math.floor(Mn / (qe - _0x47af4b))) {
                throw RangeError('punycode_overflow(2)');
            }
            _0x1fd9e4 *= qe - _0x47af4b;
        }
        if (_0x361f2e = _0x413f91.length + 1, _0x46a841 = ah(_0x126088 - _0x404d8c, _0x361f2e, _0x404d8c === 0), Math.floor(_0x126088 / _0x361f2e) > Mn - _0x3019f0) {
            throw RangeError('punycode_overflow(3)');
        }
        _0x3019f0 += Math.floor(_0x126088 / _0x361f2e);
        _0x126088 %= _0x361f2e;
        _0x413f91.splice(_0x126088, 0, _0x3019f0);
        _0x126088++;
        ;
    }
    return eh.encode(_0x413f91);
}
function ch(_0x351851) {
    const _0x11db89 = _0x351851.split('.'), _0xacab94 = [];
    for (let _0x442a95 = 0; _0x442a95 < _0x11db89.length; ++_0x442a95) {
        const _0x4cf7ae = _0x11db89[_0x442a95];
        _0xacab94.push(_0x4cf7ae.match(/^xn--/) ? oh(_0x4cf7ae.slice(4)) : _0x4cf7ae);
    }
    return _0xacab94.join('.');
}
function dh(_0x1033e5) {
    ;
    let _0x11f597;
    try {
        _0x11f597 = ch(new URL(_0x1033e5).hostname);
    } catch {
        return true;
    }
    let _0x216e81 = false, _0x2e58ee = false;
    for (const _0x5903e2 of Array.from(_0x11f597))
        if (/\p{L}/u.test(_0x5903e2) && (/\p{Script=Latin}/u.test(_0x5903e2) ? _0x216e81 = true : _0x2e58ee = true, _0x216e81 && _0x2e58ee)) {
            return true;
        }
    return false;
}
var lh = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {};
function k3(_0x4c4917) {
    ;
    return _0x4c4917 && _0x4c4917['__esModule'] && Object.prototype.hasOwnProperty.call(_0x4c4917, 'default') ? _0x4c4917.default : _0x4c4917;
}
function uh(_0x2c0b84) {
    ;
    if (_0x2c0b84['__esModule']) {
        return _0x2c0b84;
    }
    var _0x3fab3f = _0x2c0b84.default;
    if (typeof _0x3fab3f == 'function') {
        var _0x31982a = function _0x43104b() {
            ;
            return this instanceof _0x43104b ? Reflect.construct(_0x3fab3f, arguments, this.constructor) : _0x3fab3f.apply(this, arguments);
        };
        _0x31982a.prototype = _0x3fab3f.prototype;
    } else {
        _0x31982a = {};
    }
    const _0x5ee24e = {};
    return _0x5ee24e.value = true, (Object.defineProperty(_0x31982a, '__esModule', _0x5ee24e), Object.keys(_0x2c0b84).forEach(function (_0x386b80) {
        ;
        var _0x103fe2 = Object.getOwnPropertyDescriptor(_0x2c0b84, _0x386b80);
        Object.defineProperty(_0x31982a, _0x386b80, _0x103fe2.get ? _0x103fe2 : {
            'enumerable': true,
            'get': function () {
                return _0x2c0b84[_0x386b80];
            }
        });
    }), _0x31982a);
}
const a0_0x263cd8 = {};
a0_0x263cd8.exports = {};
var Cc = a0_0x263cd8;
const a0_0x41909d = {};
a0_0x41909d.value = 'Module';
const hh = {}, mh = Object.freeze(Object.defineProperty({
        '__proto__': null,
        'default': hh
    }, Symbol.toStringTag, a0_0x41909d)), Da = uh(mh);
(function (_0x5dfd75) {
    ;
    (function () {
        ;
        var _0x5ee321 = 'input is invalid type', _0x3600b7 = 'finalize already called', _0xb0f19f = typeof window == 'object', _0x2ddf79 = _0xb0f19f ? window : {};
        _0x2ddf79.JS_MD5_NO_WINDOW && (_0xb0f19f = false);
        var _0x462f71 = !_0xb0f19f && typeof self == 'object', _0xfefe7 = !_0x2ddf79.JS_MD5_NO_NODE_JS && typeof process == 'object' && process.versions && process.versions.node;
        _0xfefe7 ? _0x2ddf79 = lh : _0x462f71 && (_0x2ddf79 = self);
        var _0x2b83dd = !_0x2ddf79.JS_MD5_NO_COMMON_JS && true && _0x5dfd75.exports, _0x2fe965 = !_0x2ddf79.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < 'u', _0x3adef7 = '0123456789abcdef'.split(''), _0x809afc = [
                128,
                32768,
                8388608,
                -2147483648
            ], _0x14b4d2 = [
                0,
                8,
                16,
                24
            ], _0x3c934b = [
                'hex',
                'array',
                'digest',
                'buffer',
                'arrayBuffer',
                'base64'
            ], _0x4a8f17 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split(''), _0x20e81e = [], _0xfc502e;
        if (_0x2fe965) {
            var _0x2bcd7f = new ArrayBuffer(68);
            _0xfc502e = new Uint8Array(_0x2bcd7f);
            _0x20e81e = new Uint32Array(_0x2bcd7f);
            ;
        }
        var _0x379f28 = Array.isArray;
        (_0x2ddf79.JS_MD5_NO_NODE_JS || !_0x379f28) && (_0x379f28 = function (_0x1e4bd2) {
            ;
            return Object.prototype.toString.call(_0x1e4bd2) === '[object Array]';
        });
        var _0x5ca5f0 = ArrayBuffer.isView;
        _0x2fe965 && (_0x2ddf79.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !_0x5ca5f0) && (_0x5ca5f0 = function (_0x3e34de) {
            ;
            return typeof _0x3e34de == 'object' && _0x3e34de.buffer && _0x3e34de.buffer.constructor === ArrayBuffer;
        });
        var _0x6897f5 = function (_0x17eed7) {
                ;
                var _0x237c12 = typeof _0x17eed7;
                if (_0x237c12 === 'string') {
                    return [
                        _0x17eed7,
                        true
                    ];
                }
                if (_0x237c12 !== 'object' || _0x17eed7 === null) {
                    throw new Error(_0x5ee321);
                }
                if (_0x2fe965 && _0x17eed7.constructor === ArrayBuffer) {
                    return [
                        new Uint8Array(_0x17eed7),
                        false
                    ];
                }
                if (!_0x379f28(_0x17eed7) && !_0x5ca5f0(_0x17eed7)) {
                    throw new Error(_0x5ee321);
                }
                return [
                    _0x17eed7,
                    false
                ];
            }, _0xb7f85c = function (_0x3a5ae5) {
                return function (_0x4c3f5f) {
                    return new _0x1189f6(true).update(_0x4c3f5f)[_0x3a5ae5]();
                };
            }, _0x34141f = function () {
                ;
                var _0x26418d = _0xb7f85c('hex');
                _0xfefe7 && (_0x26418d = _0x36116f(_0x26418d));
                _0x26418d.create = function () {
                    return new _0x1189f6();
                };
                _0x26418d.update = function (_0x4d0e3e) {
                    ;
                    return _0x26418d.create().update(_0x4d0e3e);
                };
                ;
                for (var _0x18d296 = 0; _0x18d296 < _0x3c934b.length; ++_0x18d296) {
                    var _0x1a0771 = _0x3c934b[_0x18d296];
                    _0x26418d[_0x1a0771] = _0xb7f85c(_0x1a0771);
                }
                return _0x26418d;
            }, _0x36116f = function (_0x4ee1ac) {
                ;
                var _0x5a4ac8 = Da, _0x3b2a94 = Da.Buffer, _0x33e93b;
                _0x3b2a94.from && !_0x2ddf79.JS_MD5_NO_BUFFER_FROM ? _0x33e93b = _0x3b2a94.from : _0x33e93b = function (_0x452ac2) {
                    return new _0x3b2a94(_0x452ac2);
                };
                var _0x346272 = function (_0x40b514) {
                    ;
                    if (typeof _0x40b514 == 'string') {
                        return _0x5a4ac8.createHash('md5').update(_0x40b514, 'utf8').digest('hex');
                    }
                    if (_0x40b514 == null) {
                        throw new Error(_0x5ee321);
                    }
                    return _0x40b514.constructor === ArrayBuffer && (_0x40b514 = new Uint8Array(_0x40b514)), _0x379f28(_0x40b514) || _0x5ca5f0(_0x40b514) || _0x40b514.constructor === _0x3b2a94 ? _0x5a4ac8.createHash('md5').update(_0x33e93b(_0x40b514)).digest('hex') : _0x4ee1ac(_0x40b514);
                };
                return _0x346272;
            }, _0x553a55 = function (_0x5f15b5) {
                ;
                return function (_0x140a26, _0xab867) {
                    return new _0x1e07e6(_0x140a26, true).update(_0xab867)[_0x5f15b5]();
                };
            }, _0x45da8d = function () {
                ;
                var _0x14e142 = _0x553a55('hex');
                _0x14e142.create = function (_0x4c2d46) {
                    return new _0x1e07e6(_0x4c2d46);
                };
                _0x14e142.update = function (_0x58c4e7, _0x1eca02) {
                    ;
                    return _0x14e142.create(_0x58c4e7).update(_0x1eca02);
                };
                ;
                for (var _0x3112fd = 0; _0x3112fd < _0x3c934b.length; ++_0x3112fd) {
                    var _0x35fce3 = _0x3c934b[_0x3112fd];
                    _0x14e142[_0x35fce3] = _0x553a55(_0x35fce3);
                }
                return _0x14e142;
            };
        function _0x1189f6(_0x2cff82) {
            ;
            if (_0x2cff82) {
                _0x20e81e[0] = _0x20e81e[16] = _0x20e81e[1] = _0x20e81e[2] = _0x20e81e[3] = _0x20e81e[4] = _0x20e81e[5] = _0x20e81e[6] = _0x20e81e[7] = _0x20e81e[8] = _0x20e81e[9] = _0x20e81e[10] = _0x20e81e[11] = _0x20e81e[12] = _0x20e81e[13] = _0x20e81e[14] = _0x20e81e[15] = 0;
                this.blocks = _0x20e81e;
                this.buffer8 = _0xfc502e;
                ;
            } else {
                if (_0x2fe965) {
                    var _0x1a86b9 = new ArrayBuffer(68);
                    this.buffer8 = new Uint8Array(_0x1a86b9);
                    this.blocks = new Uint32Array(_0x1a86b9);
                    ;
                } else {
                    this.blocks = [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ];
                }
            }
            this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
            this.finalized = this.hashed = false;
            this.first = true;
            ;
        }
        _0x1189f6.prototype.update = function (_0x2c9fbc) {
            ;
            if (this.finalized) {
                throw new Error(_0x3600b7);
            }
            var _0xe73c5c = _0x6897f5(_0x2c9fbc);
            _0x2c9fbc = _0xe73c5c[0];
            for (var _0x34d8e7 = _0xe73c5c[1], _0x17510f, _0x2498d2 = 0, _0x5e917e, _0x1113da = _0x2c9fbc.length, _0x47fbeb = this.blocks, _0x296f8d = this.buffer8; _0x2498d2 < _0x1113da;) {
                if (this.hashed && (this.hashed = false, _0x47fbeb[0] = _0x47fbeb[16], _0x47fbeb[16] = _0x47fbeb[1] = _0x47fbeb[2] = _0x47fbeb[3] = _0x47fbeb[4] = _0x47fbeb[5] = _0x47fbeb[6] = _0x47fbeb[7] = _0x47fbeb[8] = _0x47fbeb[9] = _0x47fbeb[10] = _0x47fbeb[11] = _0x47fbeb[12] = _0x47fbeb[13] = _0x47fbeb[14] = _0x47fbeb[15] = 0), _0x34d8e7) {
                    if (_0x2fe965) {
                        for (_0x5e917e = this.start; _0x2498d2 < _0x1113da && _0x5e917e < 64; ++_0x2498d2) {
                            _0x17510f = _0x2c9fbc.charCodeAt(_0x2498d2);
                            _0x17510f < 128 ? _0x296f8d[_0x5e917e++] = _0x17510f : _0x17510f < 2048 ? (_0x296f8d[_0x5e917e++] = 192 | _0x17510f >>> 6, _0x296f8d[_0x5e917e++] = 128 | _0x17510f & 63) : _0x17510f < 55296 || _0x17510f >= 57344 ? (_0x296f8d[_0x5e917e++] = 224 | _0x17510f >>> 12, _0x296f8d[_0x5e917e++] = 128 | _0x17510f >>> 6 & 63, _0x296f8d[_0x5e917e++] = 128 | _0x17510f & 63) : (_0x17510f = 65536 + ((_0x17510f & 1023) << 10 | _0x2c9fbc.charCodeAt(++_0x2498d2) & 1023), _0x296f8d[_0x5e917e++] = 240 | _0x17510f >>> 18, _0x296f8d[_0x5e917e++] = 128 | _0x17510f >>> 12 & 63, _0x296f8d[_0x5e917e++] = 128 | _0x17510f >>> 6 & 63, _0x296f8d[_0x5e917e++] = 128 | _0x17510f & 63);
                            ;
                        }
                    } else {
                        for (_0x5e917e = this.start; _0x2498d2 < _0x1113da && _0x5e917e < 64; ++_0x2498d2) {
                            _0x17510f = _0x2c9fbc.charCodeAt(_0x2498d2);
                            _0x17510f < 128 ? _0x47fbeb[_0x5e917e >>> 2] |= _0x17510f << _0x14b4d2[_0x5e917e++ & 3] : _0x17510f < 2048 ? (_0x47fbeb[_0x5e917e >>> 2] |= (192 | _0x17510f >>> 6) << _0x14b4d2[_0x5e917e++ & 3], _0x47fbeb[_0x5e917e >>> 2] |= (128 | _0x17510f & 63) << _0x14b4d2[_0x5e917e++ & 3]) : _0x17510f < 55296 || _0x17510f >= 57344 ? (_0x47fbeb[_0x5e917e >>> 2] |= (224 | _0x17510f >>> 12) << _0x14b4d2[_0x5e917e++ & 3], _0x47fbeb[_0x5e917e >>> 2] |= (128 | _0x17510f >>> 6 & 63) << _0x14b4d2[_0x5e917e++ & 3], _0x47fbeb[_0x5e917e >>> 2] |= (128 | _0x17510f & 63) << _0x14b4d2[_0x5e917e++ & 3]) : (_0x17510f = 65536 + ((_0x17510f & 1023) << 10 | _0x2c9fbc.charCodeAt(++_0x2498d2) & 1023), _0x47fbeb[_0x5e917e >>> 2] |= (240 | _0x17510f >>> 18) << _0x14b4d2[_0x5e917e++ & 3], _0x47fbeb[_0x5e917e >>> 2] |= (128 | _0x17510f >>> 12 & 63) << _0x14b4d2[_0x5e917e++ & 3], _0x47fbeb[_0x5e917e >>> 2] |= (128 | _0x17510f >>> 6 & 63) << _0x14b4d2[_0x5e917e++ & 3], _0x47fbeb[_0x5e917e >>> 2] |= (128 | _0x17510f & 63) << _0x14b4d2[_0x5e917e++ & 3]);
                            ;
                        }
                    }
                } else {
                    if (_0x2fe965) {
                        for (_0x5e917e = this.start; _0x2498d2 < _0x1113da && _0x5e917e < 64; ++_0x2498d2) {
                            _0x296f8d[_0x5e917e++] = _0x2c9fbc[_0x2498d2];
                        }
                    } else {
                        for (_0x5e917e = this.start; _0x2498d2 < _0x1113da && _0x5e917e < 64; ++_0x2498d2) {
                            _0x47fbeb[_0x5e917e >>> 2] |= _0x2c9fbc[_0x2498d2] << _0x14b4d2[_0x5e917e++ & 3];
                        }
                    }
                }
                this.lastByteIndex = _0x5e917e;
                this.bytes += _0x5e917e - this.start;
                _0x5e917e >= 64 ? (this.start = _0x5e917e - 64, this.hash(), this.hashed = true) : this.start = _0x5e917e;
                ;
            }
            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
        };
        _0x1189f6.prototype.finalize = function () {
            ;
            if (!this.finalized) {
                this.finalized = true;
                var _0x5094e6 = this.blocks, _0x4ac4ad = this.lastByteIndex;
                _0x5094e6[_0x4ac4ad >>> 2] |= _0x809afc[_0x4ac4ad & 3];
                if (_0x4ac4ad >= 56) {
                    this.hashed || this.hash();
                    _0x5094e6[0] = _0x5094e6[16];
                    _0x5094e6[16] = _0x5094e6[1] = _0x5094e6[2] = _0x5094e6[3] = _0x5094e6[4] = _0x5094e6[5] = _0x5094e6[6] = _0x5094e6[7] = _0x5094e6[8] = _0x5094e6[9] = _0x5094e6[10] = _0x5094e6[11] = _0x5094e6[12] = _0x5094e6[13] = _0x5094e6[14] = _0x5094e6[15] = 0;
                }
                _0x5094e6[14] = this.bytes << 3;
                _0x5094e6[15] = this.hBytes << 3 | this.bytes >>> 29;
                this.hash();
                ;
            }
        };
        _0x1189f6.prototype.hash = function () {
            ;
            var _0x5f59ba, _0x28610c, _0x1d5922, _0x438a7d, _0x1bff2d, _0x3ebb3e, _0xf51bc4 = this.blocks;
            this.first ? (_0x5f59ba = _0xf51bc4[0] - 680876937, _0x5f59ba = (_0x5f59ba << 7 | _0x5f59ba >>> 25) - 271733879 << 0, _0x438a7d = (-1732584194 ^ _0x5f59ba & 2004318071) + _0xf51bc4[1] - 117830708, _0x438a7d = (_0x438a7d << 12 | _0x438a7d >>> 20) + _0x5f59ba << 0, _0x1d5922 = (-271733879 ^ _0x438a7d & (_0x5f59ba ^ -271733879)) + _0xf51bc4[2] - 1126478375, _0x1d5922 = (_0x1d5922 << 17 | _0x1d5922 >>> 15) + _0x438a7d << 0, _0x28610c = (_0x5f59ba ^ _0x1d5922 & (_0x438a7d ^ _0x5f59ba)) + _0xf51bc4[3] - 1316259209, _0x28610c = (_0x28610c << 22 | _0x28610c >>> 10) + _0x1d5922 << 0) : (_0x5f59ba = this.h0, _0x28610c = this.h1, _0x1d5922 = this.h2, _0x438a7d = this.h3, _0x5f59ba += (_0x438a7d ^ _0x28610c & (_0x1d5922 ^ _0x438a7d)) + _0xf51bc4[0] - 680876936, _0x5f59ba = (_0x5f59ba << 7 | _0x5f59ba >>> 25) + _0x28610c << 0, _0x438a7d += (_0x1d5922 ^ _0x5f59ba & (_0x28610c ^ _0x1d5922)) + _0xf51bc4[1] - 389564586, _0x438a7d = (_0x438a7d << 12 | _0x438a7d >>> 20) + _0x5f59ba << 0, _0x1d5922 += (_0x28610c ^ _0x438a7d & (_0x5f59ba ^ _0x28610c)) + _0xf51bc4[2] + 606105819, _0x1d5922 = (_0x1d5922 << 17 | _0x1d5922 >>> 15) + _0x438a7d << 0, _0x28610c += (_0x5f59ba ^ _0x1d5922 & (_0x438a7d ^ _0x5f59ba)) + _0xf51bc4[3] - 1044525330, _0x28610c = (_0x28610c << 22 | _0x28610c >>> 10) + _0x1d5922 << 0);
            _0x5f59ba += (_0x438a7d ^ _0x28610c & (_0x1d5922 ^ _0x438a7d)) + _0xf51bc4[4] - 176418897;
            _0x5f59ba = (_0x5f59ba << 7 | _0x5f59ba >>> 25) + _0x28610c << 0;
            _0x438a7d += (_0x1d5922 ^ _0x5f59ba & (_0x28610c ^ _0x1d5922)) + _0xf51bc4[5] + 1200080426;
            _0x438a7d = (_0x438a7d << 12 | _0x438a7d >>> 20) + _0x5f59ba << 0;
            _0x1d5922 += (_0x28610c ^ _0x438a7d & (_0x5f59ba ^ _0x28610c)) + _0xf51bc4[6] - 1473231341;
            _0x1d5922 = (_0x1d5922 << 17 | _0x1d5922 >>> 15) + _0x438a7d << 0;
            _0x28610c += (_0x5f59ba ^ _0x1d5922 & (_0x438a7d ^ _0x5f59ba)) + _0xf51bc4[7] - 45705983;
            _0x28610c = (_0x28610c << 22 | _0x28610c >>> 10) + _0x1d5922 << 0;
            _0x5f59ba += (_0x438a7d ^ _0x28610c & (_0x1d5922 ^ _0x438a7d)) + _0xf51bc4[8] + 1770035416;
            _0x5f59ba = (_0x5f59ba << 7 | _0x5f59ba >>> 25) + _0x28610c << 0;
            _0x438a7d += (_0x1d5922 ^ _0x5f59ba & (_0x28610c ^ _0x1d5922)) + _0xf51bc4[9] - 1958414417;
            _0x438a7d = (_0x438a7d << 12 | _0x438a7d >>> 20) + _0x5f59ba << 0;
            _0x1d5922 += (_0x28610c ^ _0x438a7d & (_0x5f59ba ^ _0x28610c)) + _0xf51bc4[10] - 42063;
            _0x1d5922 = (_0x1d5922 << 17 | _0x1d5922 >>> 15) + _0x438a7d << 0;
            _0x28610c += (_0x5f59ba ^ _0x1d5922 & (_0x438a7d ^ _0x5f59ba)) + _0xf51bc4[11] - 1990404162;
            _0x28610c = (_0x28610c << 22 | _0x28610c >>> 10) + _0x1d5922 << 0;
            _0x5f59ba += (_0x438a7d ^ _0x28610c & (_0x1d5922 ^ _0x438a7d)) + _0xf51bc4[12] + 1804603682;
            _0x5f59ba = (_0x5f59ba << 7 | _0x5f59ba >>> 25) + _0x28610c << 0;
            _0x438a7d += (_0x1d5922 ^ _0x5f59ba & (_0x28610c ^ _0x1d5922)) + _0xf51bc4[13] - 40341101;
            _0x438a7d = (_0x438a7d << 12 | _0x438a7d >>> 20) + _0x5f59ba << 0;
            _0x1d5922 += (_0x28610c ^ _0x438a7d & (_0x5f59ba ^ _0x28610c)) + _0xf51bc4[14] - 1502002290;
            _0x1d5922 = (_0x1d5922 << 17 | _0x1d5922 >>> 15) + _0x438a7d << 0;
            _0x28610c += (_0x5f59ba ^ _0x1d5922 & (_0x438a7d ^ _0x5f59ba)) + _0xf51bc4[15] + 1236535329;
            _0x28610c = (_0x28610c << 22 | _0x28610c >>> 10) + _0x1d5922 << 0;
            _0x5f59ba += (_0x1d5922 ^ _0x438a7d & (_0x28610c ^ _0x1d5922)) + _0xf51bc4[1] - 165796510;
            _0x5f59ba = (_0x5f59ba << 5 | _0x5f59ba >>> 27) + _0x28610c << 0;
            _0x438a7d += (_0x28610c ^ _0x1d5922 & (_0x5f59ba ^ _0x28610c)) + _0xf51bc4[6] - 1069501632;
            _0x438a7d = (_0x438a7d << 9 | _0x438a7d >>> 23) + _0x5f59ba << 0;
            _0x1d5922 += (_0x5f59ba ^ _0x28610c & (_0x438a7d ^ _0x5f59ba)) + _0xf51bc4[11] + 643717713;
            _0x1d5922 = (_0x1d5922 << 14 | _0x1d5922 >>> 18) + _0x438a7d << 0;
            _0x28610c += (_0x438a7d ^ _0x5f59ba & (_0x1d5922 ^ _0x438a7d)) + _0xf51bc4[0] - 373897302;
            _0x28610c = (_0x28610c << 20 | _0x28610c >>> 12) + _0x1d5922 << 0;
            _0x5f59ba += (_0x1d5922 ^ _0x438a7d & (_0x28610c ^ _0x1d5922)) + _0xf51bc4[5] - 701558691;
            _0x5f59ba = (_0x5f59ba << 5 | _0x5f59ba >>> 27) + _0x28610c << 0;
            _0x438a7d += (_0x28610c ^ _0x1d5922 & (_0x5f59ba ^ _0x28610c)) + _0xf51bc4[10] + 38016083;
            _0x438a7d = (_0x438a7d << 9 | _0x438a7d >>> 23) + _0x5f59ba << 0;
            _0x1d5922 += (_0x5f59ba ^ _0x28610c & (_0x438a7d ^ _0x5f59ba)) + _0xf51bc4[15] - 660478335;
            _0x1d5922 = (_0x1d5922 << 14 | _0x1d5922 >>> 18) + _0x438a7d << 0;
            _0x28610c += (_0x438a7d ^ _0x5f59ba & (_0x1d5922 ^ _0x438a7d)) + _0xf51bc4[4] - 405537848;
            _0x28610c = (_0x28610c << 20 | _0x28610c >>> 12) + _0x1d5922 << 0;
            _0x5f59ba += (_0x1d5922 ^ _0x438a7d & (_0x28610c ^ _0x1d5922)) + _0xf51bc4[9] + 568446438;
            _0x5f59ba = (_0x5f59ba << 5 | _0x5f59ba >>> 27) + _0x28610c << 0;
            _0x438a7d += (_0x28610c ^ _0x1d5922 & (_0x5f59ba ^ _0x28610c)) + _0xf51bc4[14] - 1019803690;
            _0x438a7d = (_0x438a7d << 9 | _0x438a7d >>> 23) + _0x5f59ba << 0;
            _0x1d5922 += (_0x5f59ba ^ _0x28610c & (_0x438a7d ^ _0x5f59ba)) + _0xf51bc4[3] - 187363961;
            _0x1d5922 = (_0x1d5922 << 14 | _0x1d5922 >>> 18) + _0x438a7d << 0;
            _0x28610c += (_0x438a7d ^ _0x5f59ba & (_0x1d5922 ^ _0x438a7d)) + _0xf51bc4[8] + 1163531501;
            _0x28610c = (_0x28610c << 20 | _0x28610c >>> 12) + _0x1d5922 << 0;
            _0x5f59ba += (_0x1d5922 ^ _0x438a7d & (_0x28610c ^ _0x1d5922)) + _0xf51bc4[13] - 1444681467;
            _0x5f59ba = (_0x5f59ba << 5 | _0x5f59ba >>> 27) + _0x28610c << 0;
            _0x438a7d += (_0x28610c ^ _0x1d5922 & (_0x5f59ba ^ _0x28610c)) + _0xf51bc4[2] - 51403784;
            _0x438a7d = (_0x438a7d << 9 | _0x438a7d >>> 23) + _0x5f59ba << 0;
            _0x1d5922 += (_0x5f59ba ^ _0x28610c & (_0x438a7d ^ _0x5f59ba)) + _0xf51bc4[7] + 1735328473;
            _0x1d5922 = (_0x1d5922 << 14 | _0x1d5922 >>> 18) + _0x438a7d << 0;
            _0x28610c += (_0x438a7d ^ _0x5f59ba & (_0x1d5922 ^ _0x438a7d)) + _0xf51bc4[12] - 1926607734;
            _0x28610c = (_0x28610c << 20 | _0x28610c >>> 12) + _0x1d5922 << 0;
            _0x1bff2d = _0x28610c ^ _0x1d5922;
            _0x5f59ba += (_0x1bff2d ^ _0x438a7d) + _0xf51bc4[5] - 378558;
            _0x5f59ba = (_0x5f59ba << 4 | _0x5f59ba >>> 28) + _0x28610c << 0;
            _0x438a7d += (_0x1bff2d ^ _0x5f59ba) + _0xf51bc4[8] - 2022574463;
            _0x438a7d = (_0x438a7d << 11 | _0x438a7d >>> 21) + _0x5f59ba << 0;
            _0x3ebb3e = _0x438a7d ^ _0x5f59ba;
            _0x1d5922 += (_0x3ebb3e ^ _0x28610c) + _0xf51bc4[11] + 1839030562;
            _0x1d5922 = (_0x1d5922 << 16 | _0x1d5922 >>> 16) + _0x438a7d << 0;
            _0x28610c += (_0x3ebb3e ^ _0x1d5922) + _0xf51bc4[14] - 35309556;
            _0x28610c = (_0x28610c << 23 | _0x28610c >>> 9) + _0x1d5922 << 0;
            _0x1bff2d = _0x28610c ^ _0x1d5922;
            _0x5f59ba += (_0x1bff2d ^ _0x438a7d) + _0xf51bc4[1] - 1530992060;
            _0x5f59ba = (_0x5f59ba << 4 | _0x5f59ba >>> 28) + _0x28610c << 0;
            _0x438a7d += (_0x1bff2d ^ _0x5f59ba) + _0xf51bc4[4] + 1272893353;
            _0x438a7d = (_0x438a7d << 11 | _0x438a7d >>> 21) + _0x5f59ba << 0;
            _0x3ebb3e = _0x438a7d ^ _0x5f59ba;
            _0x1d5922 += (_0x3ebb3e ^ _0x28610c) + _0xf51bc4[7] - 155497632;
            _0x1d5922 = (_0x1d5922 << 16 | _0x1d5922 >>> 16) + _0x438a7d << 0;
            _0x28610c += (_0x3ebb3e ^ _0x1d5922) + _0xf51bc4[10] - 1094730640;
            _0x28610c = (_0x28610c << 23 | _0x28610c >>> 9) + _0x1d5922 << 0;
            _0x1bff2d = _0x28610c ^ _0x1d5922;
            _0x5f59ba += (_0x1bff2d ^ _0x438a7d) + _0xf51bc4[13] + 681279174;
            _0x5f59ba = (_0x5f59ba << 4 | _0x5f59ba >>> 28) + _0x28610c << 0;
            _0x438a7d += (_0x1bff2d ^ _0x5f59ba) + _0xf51bc4[0] - 358537222;
            _0x438a7d = (_0x438a7d << 11 | _0x438a7d >>> 21) + _0x5f59ba << 0;
            _0x3ebb3e = _0x438a7d ^ _0x5f59ba;
            _0x1d5922 += (_0x3ebb3e ^ _0x28610c) + _0xf51bc4[3] - 722521979;
            _0x1d5922 = (_0x1d5922 << 16 | _0x1d5922 >>> 16) + _0x438a7d << 0;
            _0x28610c += (_0x3ebb3e ^ _0x1d5922) + _0xf51bc4[6] + 76029189;
            _0x28610c = (_0x28610c << 23 | _0x28610c >>> 9) + _0x1d5922 << 0;
            _0x1bff2d = _0x28610c ^ _0x1d5922;
            _0x5f59ba += (_0x1bff2d ^ _0x438a7d) + _0xf51bc4[9] - 640364487;
            _0x5f59ba = (_0x5f59ba << 4 | _0x5f59ba >>> 28) + _0x28610c << 0;
            _0x438a7d += (_0x1bff2d ^ _0x5f59ba) + _0xf51bc4[12] - 421815835;
            _0x438a7d = (_0x438a7d << 11 | _0x438a7d >>> 21) + _0x5f59ba << 0;
            _0x3ebb3e = _0x438a7d ^ _0x5f59ba;
            _0x1d5922 += (_0x3ebb3e ^ _0x28610c) + _0xf51bc4[15] + 530742520;
            _0x1d5922 = (_0x1d5922 << 16 | _0x1d5922 >>> 16) + _0x438a7d << 0;
            _0x28610c += (_0x3ebb3e ^ _0x1d5922) + _0xf51bc4[2] - 995338651;
            _0x28610c = (_0x28610c << 23 | _0x28610c >>> 9) + _0x1d5922 << 0;
            _0x5f59ba += (_0x1d5922 ^ (_0x28610c | ~_0x438a7d)) + _0xf51bc4[0] - 198630844;
            _0x5f59ba = (_0x5f59ba << 6 | _0x5f59ba >>> 26) + _0x28610c << 0;
            _0x438a7d += (_0x28610c ^ (_0x5f59ba | ~_0x1d5922)) + _0xf51bc4[7] + 1126891415;
            _0x438a7d = (_0x438a7d << 10 | _0x438a7d >>> 22) + _0x5f59ba << 0;
            _0x1d5922 += (_0x5f59ba ^ (_0x438a7d | ~_0x28610c)) + _0xf51bc4[14] - 1416354905;
            _0x1d5922 = (_0x1d5922 << 15 | _0x1d5922 >>> 17) + _0x438a7d << 0;
            _0x28610c += (_0x438a7d ^ (_0x1d5922 | ~_0x5f59ba)) + _0xf51bc4[5] - 57434055;
            _0x28610c = (_0x28610c << 21 | _0x28610c >>> 11) + _0x1d5922 << 0;
            _0x5f59ba += (_0x1d5922 ^ (_0x28610c | ~_0x438a7d)) + _0xf51bc4[12] + 1700485571;
            _0x5f59ba = (_0x5f59ba << 6 | _0x5f59ba >>> 26) + _0x28610c << 0;
            _0x438a7d += (_0x28610c ^ (_0x5f59ba | ~_0x1d5922)) + _0xf51bc4[3] - 1894986606;
            _0x438a7d = (_0x438a7d << 10 | _0x438a7d >>> 22) + _0x5f59ba << 0;
            _0x1d5922 += (_0x5f59ba ^ (_0x438a7d | ~_0x28610c)) + _0xf51bc4[10] - 1051523;
            _0x1d5922 = (_0x1d5922 << 15 | _0x1d5922 >>> 17) + _0x438a7d << 0;
            _0x28610c += (_0x438a7d ^ (_0x1d5922 | ~_0x5f59ba)) + _0xf51bc4[1] - 2054922799;
            _0x28610c = (_0x28610c << 21 | _0x28610c >>> 11) + _0x1d5922 << 0;
            _0x5f59ba += (_0x1d5922 ^ (_0x28610c | ~_0x438a7d)) + _0xf51bc4[8] + 1873313359;
            _0x5f59ba = (_0x5f59ba << 6 | _0x5f59ba >>> 26) + _0x28610c << 0;
            _0x438a7d += (_0x28610c ^ (_0x5f59ba | ~_0x1d5922)) + _0xf51bc4[15] - 30611744;
            _0x438a7d = (_0x438a7d << 10 | _0x438a7d >>> 22) + _0x5f59ba << 0;
            _0x1d5922 += (_0x5f59ba ^ (_0x438a7d | ~_0x28610c)) + _0xf51bc4[6] - 1560198380;
            _0x1d5922 = (_0x1d5922 << 15 | _0x1d5922 >>> 17) + _0x438a7d << 0;
            _0x28610c += (_0x438a7d ^ (_0x1d5922 | ~_0x5f59ba)) + _0xf51bc4[13] + 1309151649;
            _0x28610c = (_0x28610c << 21 | _0x28610c >>> 11) + _0x1d5922 << 0;
            _0x5f59ba += (_0x1d5922 ^ (_0x28610c | ~_0x438a7d)) + _0xf51bc4[4] - 145523070;
            _0x5f59ba = (_0x5f59ba << 6 | _0x5f59ba >>> 26) + _0x28610c << 0;
            _0x438a7d += (_0x28610c ^ (_0x5f59ba | ~_0x1d5922)) + _0xf51bc4[11] - 1120210379;
            _0x438a7d = (_0x438a7d << 10 | _0x438a7d >>> 22) + _0x5f59ba << 0;
            _0x1d5922 += (_0x5f59ba ^ (_0x438a7d | ~_0x28610c)) + _0xf51bc4[2] + 718787259;
            _0x1d5922 = (_0x1d5922 << 15 | _0x1d5922 >>> 17) + _0x438a7d << 0;
            _0x28610c += (_0x438a7d ^ (_0x1d5922 | ~_0x5f59ba)) + _0xf51bc4[9] - 343485551;
            _0x28610c = (_0x28610c << 21 | _0x28610c >>> 11) + _0x1d5922 << 0;
            this.first ? (this.h0 = _0x5f59ba + 1732584193 << 0, this.h1 = _0x28610c - 271733879 << 0, this.h2 = _0x1d5922 - 1732584194 << 0, this.h3 = _0x438a7d + 271733878 << 0, this.first = false) : (this.h0 = this.h0 + _0x5f59ba << 0, this.h1 = this.h1 + _0x28610c << 0, this.h2 = this.h2 + _0x1d5922 << 0, this.h3 = this.h3 + _0x438a7d << 0);
            ;
        };
        _0x1189f6.prototype.hex = function () {
            ;
            this.finalize();
            var _0x4b9414 = this.h0, _0x1acea1 = this.h1, _0x358969 = this.h2, _0x129688 = this.h3;
            return _0x3adef7[_0x4b9414 >>> 4 & 15] + _0x3adef7[_0x4b9414 & 15] + _0x3adef7[_0x4b9414 >>> 12 & 15] + _0x3adef7[_0x4b9414 >>> 8 & 15] + _0x3adef7[_0x4b9414 >>> 20 & 15] + _0x3adef7[_0x4b9414 >>> 16 & 15] + _0x3adef7[_0x4b9414 >>> 28 & 15] + _0x3adef7[_0x4b9414 >>> 24 & 15] + _0x3adef7[_0x1acea1 >>> 4 & 15] + _0x3adef7[_0x1acea1 & 15] + _0x3adef7[_0x1acea1 >>> 12 & 15] + _0x3adef7[_0x1acea1 >>> 8 & 15] + _0x3adef7[_0x1acea1 >>> 20 & 15] + _0x3adef7[_0x1acea1 >>> 16 & 15] + _0x3adef7[_0x1acea1 >>> 28 & 15] + _0x3adef7[_0x1acea1 >>> 24 & 15] + _0x3adef7[_0x358969 >>> 4 & 15] + _0x3adef7[_0x358969 & 15] + _0x3adef7[_0x358969 >>> 12 & 15] + _0x3adef7[_0x358969 >>> 8 & 15] + _0x3adef7[_0x358969 >>> 20 & 15] + _0x3adef7[_0x358969 >>> 16 & 15] + _0x3adef7[_0x358969 >>> 28 & 15] + _0x3adef7[_0x358969 >>> 24 & 15] + _0x3adef7[_0x129688 >>> 4 & 15] + _0x3adef7[_0x129688 & 15] + _0x3adef7[_0x129688 >>> 12 & 15] + _0x3adef7[_0x129688 >>> 8 & 15] + _0x3adef7[_0x129688 >>> 20 & 15] + _0x3adef7[_0x129688 >>> 16 & 15] + _0x3adef7[_0x129688 >>> 28 & 15] + _0x3adef7[_0x129688 >>> 24 & 15];
        };
        _0x1189f6.prototype.toString = _0x1189f6.prototype.hex;
        _0x1189f6.prototype.digest = function () {
            ;
            this.finalize();
            var _0x107a1e = this.h0, _0x3fcc7f = this.h1, _0x202620 = this.h2, _0x5521b3 = this.h3;
            return [
                _0x107a1e & 255,
                _0x107a1e >>> 8 & 255,
                _0x107a1e >>> 16 & 255,
                _0x107a1e >>> 24 & 255,
                _0x3fcc7f & 255,
                _0x3fcc7f >>> 8 & 255,
                _0x3fcc7f >>> 16 & 255,
                _0x3fcc7f >>> 24 & 255,
                _0x202620 & 255,
                _0x202620 >>> 8 & 255,
                _0x202620 >>> 16 & 255,
                _0x202620 >>> 24 & 255,
                _0x5521b3 & 255,
                _0x5521b3 >>> 8 & 255,
                _0x5521b3 >>> 16 & 255,
                _0x5521b3 >>> 24 & 255
            ];
        };
        _0x1189f6.prototype.array = _0x1189f6.prototype.digest;
        _0x1189f6.prototype.arrayBuffer = function () {
            ;
            this.finalize();
            var _0x522be1 = new ArrayBuffer(16), _0x389adb = new Uint32Array(_0x522be1);
            return _0x389adb[0] = this.h0, _0x389adb[1] = this.h1, _0x389adb[2] = this.h2, _0x389adb[3] = this.h3, _0x522be1;
        };
        _0x1189f6.prototype.buffer = _0x1189f6.prototype.arrayBuffer;
        _0x1189f6.prototype.base64 = function () {
            ;
            for (var _0x508d6a, _0x49ff6c, _0x47f3d7, _0x425501 = '', _0x1859a9 = this.array(), _0x4d11e4 = 0; _0x4d11e4 < 15;) {
                _0x508d6a = _0x1859a9[_0x4d11e4++];
                _0x49ff6c = _0x1859a9[_0x4d11e4++];
                _0x47f3d7 = _0x1859a9[_0x4d11e4++];
                _0x425501 += _0x4a8f17[_0x508d6a >>> 2] + _0x4a8f17[(_0x508d6a << 4 | _0x49ff6c >>> 4) & 63] + _0x4a8f17[(_0x49ff6c << 2 | _0x47f3d7 >>> 6) & 63] + _0x4a8f17[_0x47f3d7 & 63];
                ;
            }
            return _0x508d6a = _0x1859a9[_0x4d11e4], _0x425501 += _0x4a8f17[_0x508d6a >>> 2] + _0x4a8f17[_0x508d6a << 4 & 63] + '==', _0x425501;
        };
        ;
        function _0x1e07e6(_0x56bc7c, _0x4dec18) {
            ;
            var _0x7a4cb8, _0x119af2 = _0x6897f5(_0x56bc7c);
            if (_0x56bc7c = _0x119af2[0], _0x119af2[1]) {
                var _0xa0f384 = [], _0x22bc81 = _0x56bc7c.length, _0x3b6720 = 0, _0x2fac98;
                for (_0x7a4cb8 = 0; _0x7a4cb8 < _0x22bc81; ++_0x7a4cb8) {
                    _0x2fac98 = _0x56bc7c.charCodeAt(_0x7a4cb8);
                    _0x2fac98 < 128 ? _0xa0f384[_0x3b6720++] = _0x2fac98 : _0x2fac98 < 2048 ? (_0xa0f384[_0x3b6720++] = 192 | _0x2fac98 >>> 6, _0xa0f384[_0x3b6720++] = 128 | _0x2fac98 & 63) : _0x2fac98 < 55296 || _0x2fac98 >= 57344 ? (_0xa0f384[_0x3b6720++] = 224 | _0x2fac98 >>> 12, _0xa0f384[_0x3b6720++] = 128 | _0x2fac98 >>> 6 & 63, _0xa0f384[_0x3b6720++] = 128 | _0x2fac98 & 63) : (_0x2fac98 = 65536 + ((_0x2fac98 & 1023) << 10 | _0x56bc7c.charCodeAt(++_0x7a4cb8) & 1023), _0xa0f384[_0x3b6720++] = 240 | _0x2fac98 >>> 18, _0xa0f384[_0x3b6720++] = 128 | _0x2fac98 >>> 12 & 63, _0xa0f384[_0x3b6720++] = 128 | _0x2fac98 >>> 6 & 63, _0xa0f384[_0x3b6720++] = 128 | _0x2fac98 & 63);
                    ;
                }
                _0x56bc7c = _0xa0f384;
            }
            _0x56bc7c.length > 64 && (_0x56bc7c = new _0x1189f6(true).update(_0x56bc7c).array());
            var _0x1c39f6 = [], _0x3bdc8d = [];
            for (_0x7a4cb8 = 0; _0x7a4cb8 < 64; ++_0x7a4cb8) {
                var _0x3af556 = _0x56bc7c[_0x7a4cb8] || 0;
                _0x1c39f6[_0x7a4cb8] = 92 ^ _0x3af556;
                _0x3bdc8d[_0x7a4cb8] = 54 ^ _0x3af556;
                ;
            }
            _0x1189f6.call(this, _0x4dec18);
            this.update(_0x3bdc8d);
            this.oKeyPad = _0x1c39f6;
            this.inner = true;
            this.sharedMemory = _0x4dec18;
            ;
        }
        _0x1e07e6.prototype = new _0x1189f6();
        _0x1e07e6.prototype.finalize = function () {
            ;
            if (_0x1189f6.prototype.finalize.call(this), this.inner) {
                this.inner = false;
                var _0x33a3e9 = this.array();
                _0x1189f6.call(this, this.sharedMemory);
                this.update(this.oKeyPad);
                this.update(_0x33a3e9);
                _0x1189f6.prototype.finalize.call(this);
                ;
            }
        };
        ;
        var _0xb6a15e = _0x34141f();
        _0xb6a15e.md5 = _0xb6a15e;
        _0xb6a15e.md5.hmac = _0x45da8d();
        _0x2b83dd ? _0x5dfd75.exports = _0xb6a15e : _0x2ddf79.md5 = _0xb6a15e;
        ;
    }());
}(Cc));
var gh = Cc.exports;
function Pt(_0x59b514) {
    const _0x2982e4 = document.createElement('span');
    return _0x2982e4.style.fontFamily = 'markup-' + _0x59b514, _0x2982e4.classList.add('is-markup'), _0x2982e4.dataset.markup = _0x59b514, _0x2982e4;
}
function ph(_0x489fcf) {
    const _0x322715 = _0x489fcf.target;
    if (_0x322715.ignoreQuoteResize) {
        if (Date.now() < _0x322715.ignoreQuoteResize) {
            return;
        }
        delete _0x322715.ignoreQuoteResize;
    }
    const _0x5e123f = _0x322715.scrollHeight;
    if (!_0x5e123f) {
        return;
    }
    const _0x543fdb = _0x489fcf.contentRect.bottom - _0x489fcf.contentRect.height + _0x489fcf.contentRect.top, _0x5110d2 = _0x5e123f - _0x543fdb - 0 - Math.floor(_0x489fcf.contentRect.height) <= 1;
    _0x322715.style.setProperty('--quote-max-height', _0x5e123f + 'px');
    _0x322715.classList.toggle('is-truncated', !_0x5110d2);
    ;
}
function bh(_0x19715f) {
    ;
    _0x19715f.classList.add('quote-like-collapsable');
    const _0x11db5a = document.createElement('span');
    return _0x11db5a.classList.add('quote-like-icon', 'quote-like-collapse'), _0x19715f.append(_0x11db5a), dc(_0x19715f, ph);
}
function gs(_0x3e49ed, _0x2a989e = {}) {
    const _0x3989cc = document.createDocumentFragment();
    if (!_0x3e49ed) {
        return _0x3989cc;
    }
    const _0x2d1815 = {
        i: 0,
        usedLength: 0,
        text: _0x3e49ed
    };
    ;
    ;
    ;
    ;
    const _0x4a10ac = _0x2a989e.nasty ?? (_0x2a989e.nasty = _0x2d1815), _0x4f9acb = (_0x4be866, _0xcd691a) => {
            const _0x4c0b78 = document.createElement('span');
            return _0x2a989e.wrappingDraft && (_0x4c0b78.contentEditable = 'false'), _0x4c0b78.classList.add('input-something'), _0x4c0b78.append(_0x4be866), (_0x439c5b || _0x3989cc).append(_0x4c0b78), _0x4be866.classList.add('input-selectable'), !_0xcd691a && _0x4be866.append(yn(true)), _0x368c93.add(_0x4c0b78), _0x4c0b78;
        };
    _0x2a989e.isSelectable || (_0x2a989e.isSelectable = _0x2a989e.wrappingDraft);
    const _0x52c1fc = _0x2a989e.customEmojis ?? (_0x2a989e.customEmojis = new Map()), _0x368c93 = _0x2a989e.customWraps ?? (_0x2a989e.customWraps = new Set()), _0xda1d5b = _0x2a989e.entities ?? (_0x2a989e.entities = Kf(_0x4a10ac.text)), _0x14ffdc = _0x2a989e.passEntities ?? (_0x2a989e.passEntities = {}), _0x5dc9e8 = _0x2a989e.contextSite ?? (_0x2a989e.contextSite = 'Telegram'), _0x3c0cc2 = _0x5dc9e8 !== 'Telegram', _0x556b1e = _0x4a10ac.text.length, _0x44aa52 = _0xda1d5b.length;
    let _0x439c5b;
    for (; _0x4a10ac.i < _0x44aa52; ++_0x4a10ac.i) {
        let _0x48acbb = _0xda1d5b[_0x4a10ac.i];
        if (_0x48acbb.offset >= _0x556b1e) {
            if (_0x48acbb['_'] !== 'messageEntityCaret') {
                continue;
            }
        } else {
            if (_0x48acbb.offset + _0x48acbb.length > _0x556b1e) {
                _0x48acbb = Ye(_0x48acbb);
                _0x48acbb.length = _0x556b1e - _0x48acbb.offset;
            }
        }
        _0x48acbb.length && (_0x4a10ac.lastEntity = _0x48acbb);
        let _0x43d589 = _0xda1d5b[_0x4a10ac.i + 1];
        const _0x4a4b84 = _0x48acbb.offset, _0x52fe01 = _0x4a4b84 + _0x48acbb.length, _0x588302 = Math.min(_0x52fe01, _0x43d589?.offset ?? 65535), _0x865643 = _0x4a10ac.text.slice(_0x4a4b84, _0x52fe01);
        let _0x232772 = _0x4a10ac.text.slice(_0x4a4b84, _0x588302);
        _0x4a10ac.usedLength < _0x4a4b84 && (_0x439c5b || _0x3989cc).append(_0x4a10ac.text.slice(_0x4a10ac.usedLength, _0x4a4b84));
        _0x439c5b && (_0x439c5b = _0x3989cc);
        _0x4a10ac.usedLength = _0x588302;
        ;
        let _0x277d0d, _0x46940e, _0x469dc3 = false, _0x29228d = false;
        switch (_0x48acbb['_']) {
        case 'messageEntityBold': {
                _0x2a989e.noTextFormat || (_0x2a989e.wrappingDraft ? _0x277d0d = Pt('bold') : _0x277d0d = document.createElement('strong'));
                break;
            }
        case 'messageEntityItalic': {
                _0x2a989e.noTextFormat || (_0x2a989e.wrappingDraft ? _0x277d0d = Pt('italic') : _0x277d0d = document.createElement('em'));
                break;
            }
        case 'messageEntityStrike': {
                _0x2a989e.wrappingDraft ? _0x277d0d = Pt('strikethrough') : _0x277d0d = document.createElement('del');
                break;
            }
        case 'messageEntityUnderline': {
                _0x2a989e.wrappingDraft ? _0x277d0d = Pt('underline') : _0x2a989e.noTextFormat || (_0x277d0d = document.createElement('u'));
                break;
            }
        case 'messageEntityPre':
        case 'messageEntityCode': {
                const _0x182e5c = _0x48acbb.language;
                if (_0x2a989e.wrappingDraft) {
                    _0x277d0d = Pt('monospace');
                    _0x182e5c && (_0x277d0d.dataset.language = _0x182e5c);
                    ;
                } else {
                    if (_0x48acbb['_'] === 'messageEntityPre' && !_0x2a989e.noTextFormat) {
                        const _0x106ad5 = document.createElement('pre'), _0x30bdeb = document.createElement('div');
                        _0x30bdeb.classList.add('code-content');
                        _0x277d0d = document.createElement('code');
                        _0x277d0d.classList.add('code-code');
                        _0x3989cc.append(_0x106ad5);
                        _0x30bdeb.append(_0x277d0d);
                        _0x106ad5.classList.add('quote-like', 'quote-like-border', 'code');
                        ;
                        const _0x59d108 = Er[_0x182e5c.toLowerCase()], _0x40fc42 = document.createElement('div');
                        _0x40fc42.classList.add('code-header');
                        const _0x5111d1 = document.createElement('span');
                        _0x5111d1.classList.add('code-header-name');
                        _0x5111d1.append(_0x59d108 || X('CopyCode'));
                        ;
                        const _0x1d3c1d = At('menu', 'code-header-button', 'code-header-toggle-wrap');
                        _0x40fc42.append(_0x5111d1, _0x1d3c1d, At('copy', 'code-header-button', 'code-header-copy'));
                        _0x106ad5.append(_0x40fc42, _0x30bdeb);
                        ;
                        const _0x37f7d5 = _0x59d108 && ku(_0x865643, _0x59d108);
                        _0x37f7d5 && at(_0x37f7d5, _0x4fe5ad => {
                            ;
                            _0x4fe5ad && (_0x277d0d.innerHTML = _0x4fe5ad);
                        });
                        _0x469dc3 = true;
                        (!_0x37f7d5 || _0x37f7d5 instanceof Promise) && (_0x277d0d.textContent = _0x865643);
                        ;
                        let _0x35f979 = Fu(_0xda1d5b, _0x1b0422 => _0x1b0422.offset >= _0x52fe01, _0x4a10ac.i + 1);
                        _0x35f979 === -1 ? _0x35f979 = _0xda1d5b.length - 1 : _0x35f979 -= 1;
                        _0x4a10ac.i = _0x35f979;
                        _0x4a10ac.usedLength = _0x52fe01;
                        _0x4a10ac.lastEntity = _0xda1d5b[_0x35f979];
                        _0x43d589 = void 0;
                        _0x29228d = true;
                        ;
                    } else {
                        _0x2a989e.noTextFormat || (_0x277d0d = document.createElement('code'), _0x277d0d.classList.add('monospace-text'));
                    }
                }
                break;
            }
        case 'messageEntityHighlight': {
                _0x277d0d = document.createElement('i');
                _0x277d0d.className = 'text-highlight';
                ;
                break;
            }
        case 'messageEntityBotCommand': {
                if (!_0x2a989e.noLinks && _0x14ffdc[_0x48acbb['_']]) {
                    let _0x34a2c8 = _0x865643.slice(1), _0x4ad351, _0x592c94;
                    (_0x592c94 = _0x34a2c8.indexOf('@')) !== -1 ? (_0x4ad351 = _0x34a2c8.slice(_0x592c94 + 1), _0x34a2c8 = _0x34a2c8.slice(0, _0x592c94)) : _0x4ad351 = _0x2a989e.fromBot;
                    _0x277d0d = document.createElement('a');
                    _0x277d0d.href = Xn('tg://bot_command?command=' + encodeURIComponent(_0x34a2c8) + (_0x4ad351 ? '&bot=' + encodeURIComponent(_0x4ad351) : ''));
                    _0x3c0cc2 || _0x277d0d.setAttribute('onclick', 'execBotCommand(this)');
                    ;
                }
                break;
            }
        case 'messageEntityCustomEmoji': {
                for (; _0x43d589?.['_'] === 'messageEntityEmoji' && _0x43d589.offset < _0x52fe01;) {
                    ++_0x4a10ac.i;
                    _0x4a10ac.lastEntity = _0x43d589;
                    _0x4a10ac.usedLength += _0x43d589.length;
                    _0x43d589 = _0xda1d5b[_0x4a10ac.i + 1];
                    ;
                }
                const _0x114bf0 = _0x277d0d = bn.create(_0x48acbb.document_id), {docId: _0x307237} = _0x114bf0;
                let _0x2e3c88 = _0x52c1fc.get(_0x307237);
                if (_0x2e3c88 || _0x52c1fc.set(_0x307237, _0x2e3c88 = new Set()), _0x2e3c88.add(_0x114bf0), _0x114bf0.dataset.stickerEmoji = _0x865643, _0x2a989e.wrappingDraft) {
                    _0x277d0d = document.createElement('img');
                    _0x277d0d.alt = _0x865643;
                    ;
                    for (const _0x3c1500 in _0x114bf0.dataset)
                        _0x277d0d.dataset[_0x3c1500] = _0x114bf0.dataset[_0x3c1500];
                    _0x277d0d.customEmojiElement = _0x114bf0;
                    _0x114bf0.placeholder = _0x277d0d;
                    _0x277d0d.classList.add('custom-emoji-placeholder');
                    _0x277d0d.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC';
                    _0x46940e = 'alt';
                    ;
                    break;
                }
                _0x2a989e.isSelectable && (_0x277d0d = _0x4f9acb(_0x277d0d, !!_0x2a989e.customEmojiRenderer));
                _0x46940e = 'alt';
                ;
                break;
            }
        case 'messageEntityEmoji': {
                let _0x216a5c = Ni;
                if (_0x216a5c) {
                    for (const _0x518b00 in $s)
                        if (_0x518b00 && $s[_0x518b00].hasOwnProperty(_0x48acbb.unicode) && !Qn[_0x518b00]) {
                            _0x216a5c = false;
                            break;
                        }
                }
                if (_0x216a5c) {
                    _0x2a989e.wrappingDraft || (_0x277d0d = document.createElement('span'), _0x277d0d.className = 'emoji emoji-native');
                } else {
                    const _0x309e43 = gh.md5(_0x48acbb.unicode + 'bgyy4f8eps2o').substring(0, 8);
                    _0x277d0d = document.createElement('img');
                    _0x277d0d.src = 'assets/img/emoji/' + _0x309e43 + '.png';
                    _0x46940e = 'alt';
                    _0x277d0d.className = 'emoji emoji-image';
                    ;
                }
                break;
            }
        case 'messageEntityCaret': {
                _0x277d0d = document.createElement('span');
                _0x277d0d.className = 'composer-sel';
                ;
                break;
            }
        case 'messageEntityLinebreak': {
                _0x2a989e.ignoreNextIndex === _0x4a10ac.i || _0x2a989e.wrappingDraft && _0x43d589?.['_'] === 'messageEntityBlockquote' && _0x43d589.offset === _0x52fe01 ? _0x469dc3 = true : _0x2a989e.wrappingDraft && wt && (_0x277d0d = document.createElement('br'), _0x469dc3 = true);
                if (_0x2a989e.doubleLinebreak === _0x4a10ac.i) {
                    _0x2a989e.doubleLinebreak = void 0;
                    (_0x277d0d || _0x3989cc).append('\n\n');
                    _0x469dc3 = true;
                }
                ;
                break;
            }
        case 'messageEntityUrl':
        case 'messageEntityTextUrl': {
                if (!(_0x2a989e.noLinks && !_0x14ffdc[_0x48acbb['_']])) {
                    let _0x519371 = _0x48acbb.url || _0x865643, _0x90c2f0 = false, _0xda649f;
                    const _0x3b6e3c = on(_0x519371);
                    if (_0x519371 = _0x3b6e3c.url, _0xda649f = _0x3b6e3c.onclick, _0x2a989e.whitelistedDomains) {
                        try {
                            const _0x433276 = new URL(_0x519371).hostname;
                            if (!_0x2a989e.whitelistedDomains.includes(_0x433276)) {
                                break;
                            }
                        } catch {
                            break;
                        }
                    }
                    _0x48acbb['_'] === 'messageEntityTextUrl' ? (_0x43d589?.['_'] === 'messageEntityUrl' && _0x43d589.length === _0x48acbb.length && _0x43d589.offset === _0x48acbb.offset && (_0x4a10ac.lastEntity = _0x43d589, ++_0x4a10ac.i), _0x519371 !== _0x865643 && (_0x90c2f0 = true)) : _0x90c2f0 = dh(_0x519371);
                    const _0x580929 = !!_0xda649f;
                    !_0xda649f && _0x90c2f0 && !_0x580929 && !_0x2a989e.passMaskedLinks && (_0xda649f = 'showMaskedAlert');
                    _0x2a989e.wrappingDraft && (_0xda649f = void 0);
                    ;
                    const _0x13d006 = _0x580929 || typeof electronHelpers > 'u' ? _0x519371 : 'javascript:electronHelpers.openExternal(\'' + _0x519371 + '\');';
                    _0x277d0d = document.createElement('a');
                    _0x277d0d.className = 'anchor-url';
                    _0x277d0d.href = _0x13d006;
                    _0x580929 || typeof electronHelpers < 'u' || Sf(_0x277d0d);
                    _0xda649f && _0x277d0d.setAttribute('onclick', _0xda649f + '(this)');
                    ;
                }
                break;
            }
        case 'messageEntityEmail': {
                _0x2a989e.noLinks || (_0x277d0d = document.createElement('a'), _0x277d0d.href = Xn('mailto:' + _0x865643), Sf(_0x277d0d));
                break;
            }
        case 'messageEntityHashtag': {
                const _0xaef0ca = !_0x2a989e.noLinks && I1[_0x5dc9e8];
                if (_0xaef0ca) {
                    const _0x1d8762 = _0x865643.slice(1);
                    _0x277d0d = document.createElement('a');
                    _0x277d0d.className = 'anchor-hashtag';
                    _0x277d0d.href = _0xaef0ca.replace('{1}', encodeURIComponent(_0x1d8762));
                    _0x3c0cc2 ? Sf(_0x277d0d) : _0x277d0d.setAttribute('onclick', 'searchByHashtag(this)');
                    ;
                }
                break;
            }
        case 'messageEntityMentionName': {
                _0x2a989e.noLinks && !_0x14ffdc[_0x48acbb['_']] || (_0x277d0d = document.createElement('a'), _0x277d0d.href = Jl('' + _0x48acbb.user_id), _0x277d0d.className = 'follow', _0x277d0d.dataset.follow = '' + _0x48acbb.user_id);
                break;
            }
        case 'messageEntityMention': {
                if (!_0x2a989e.noLinks) {
                    const _0x15d309 = _0x865643.slice(1);
                    _0x277d0d = s0('t.me/' + _0x15d309);
                    _0x277d0d.className = 'mention';
                    ;
                }
                break;
            }
        case 'messageEntitySpoiler': {
                if (_0x2a989e.noTextFormat) {
                    const _0x12198f = Ql(_0x4a10ac.text, _0x48acbb);
                    _0x4a10ac.text = _0x12198f.text;
                    _0x232772 = _0x12198f.entityText;
                    _0x588302 !== _0x52fe01 && (_0x4a10ac.usedLength += _0x52fe01 - _0x588302);
                    ;
                    let _0x409010;
                    for (; _0x409010 = _0xda1d5b[_0x4a10ac.i + 1], _0x409010 && _0x409010.offset < _0x52fe01;) {
                        ++_0x4a10ac.i;
                        _0x4a10ac.lastEntity = _0x409010;
                        _0x43d589 = _0xda1d5b[_0x4a10ac.i + 1];
                        ;
                    }
                    wt || (_0x277d0d = document.createElement('span'), _0x277d0d.append(..._0x232772.split('').map((_0x256720, _0x540ee8) => uc('<span class="bluff-spoiler" style="--index:' + _0x540ee8 + '">' + _0x256720 + '</span>'))), _0x3989cc.append(_0x277d0d), ui.attachBluffTextSpoilerTarget(_0x277d0d), _0x469dc3 = true);
                } else {
                    if (_0x2a989e.wrappingDraft) {
                        _0x277d0d = Pt('spoiler');
                    } else {
                        const _0x3a6862 = document.createElement('span');
                        _0x3a6862.className = 'spoiler';
                        _0x277d0d = document.createElement('span');
                        _0x277d0d.className = 'spoiler-text';
                        _0x277d0d.textContent = _0x232772;
                        _0x469dc3 = true;
                        _0x3a6862.append(_0x277d0d);
                        _0x3989cc.append(_0x3a6862);
                        _0x3a6862['on' + Os] = window.onSpoilerClick;
                        ;
                    }
                }
                break;
            }
        case 'messageEntityTimestamp': {
                if (!_0x2a989e.maxMediaTimestamp || _0x48acbb.time > _0x2a989e.maxMediaTimestamp) {
                    break;
                }
                _0x277d0d = document.createElement('a');
                _0x277d0d.classList.add('timestamp');
                _0x277d0d.dataset.timestamp = '' + _0x48acbb.time;
                _0x277d0d.href = '#';
                _0x277d0d.setAttribute('onclick', 'setMediaTimestamp(this)');
                _0x2a989e.maxMediaTimestamp === 1e+400 && _0x277d0d.classList.add('is-disabled');
                ;
                break;
            }
        case 'messageEntityBlockquote': {
                if (_0x2a989e.noTextFormat) {
                    break;
                }
                if (_0x2a989e.wrappingDraft) {
                    _0x277d0d = Pt('quote');
                    _0x48acbb.pFlags?.collapsed && (_0x277d0d.dataset.collapsed = '1');
                    ;
                } else {
                    if (_0x277d0d = document.createElement('blockquote'), _0x277d0d.classList.add('quote'), _0x48acbb.pFlags?.collapsed) {
                        const _0x3ff35b = bh(_0x277d0d);
                        _0x2a989e.middleware.onClean(_0x3ff35b);
                    }
                }
                _0x277d0d.classList.add('quote-like', 'quote-like-border', 'quote-like-icon');
                tf(_0x277d0d);
                _0x29228d = true;
                ;
                break;
            }
        }
        if (_0x29228d) {
            let _0xcff8be = -1;
            for (let _0x5ef15f = _0x4a10ac.i; _0x5ef15f < _0x44aa52; ++_0x5ef15f) {
                const _0x36c683 = _0xda1d5b[_0x5ef15f];
                if (_0x36c683['_'] === 'messageEntityLinebreak' && _0x36c683.offset >= _0x52fe01) {
                    _0xcff8be = _0x5ef15f;
                    break;
                }
            }
            if (_0xcff8be !== -1 && _0x4a10ac.text.slice(_0x52fe01, _0xda1d5b[_0xcff8be].offset).trim() && (_0xcff8be = -1), !_0x2a989e.wrappingDraft && _0x52fe01 < _0x4a10ac.text.length) {
                if (!_0x277d0d.parentElement) {
                    const _0x3153e4 = document.createElement('div');
                    _0x3153e4.append(_0x277d0d);
                    _0x3989cc.append(_0x3153e4);
                    ;
                }
                if (_0x4a10ac.text[_0x52fe01 - 1] === '\n') {
                    let _0x32636f = -1;
                    for (let _0x159927 = _0x4a10ac.i; _0x159927 < _0x44aa52; ++_0x159927) {
                        const _0x29fef4 = _0xda1d5b[_0x159927];
                        if (_0x29fef4.offset >= _0x52fe01) {
                            break;
                        }
                        _0x29fef4['_'] === 'messageEntityLinebreak' && (_0x32636f = _0x159927);
                    }
                    _0x32636f !== -1 && (_0x2a989e.ignoreNextIndex = _0x32636f);
                } else {
                    _0xcff8be !== -1 && (_0x2a989e.ignoreNextIndex = _0xcff8be);
                }
            }
            _0x2a989e.wrappingDraft && _0xcff8be !== -1 && (_0x2a989e.ignoreNextIndex = _0xcff8be);
        }
        const _0x23344b = { ..._0x2a989e };
        _0x23344b.voodoo = true;
        for (!_0x469dc3 && _0x232772 && (_0x277d0d ? _0x46940e ? _0x277d0d[_0x46940e] = _0x232772 : _0x277d0d.append(_0x232772) : (_0x277d0d || _0x3989cc).append(_0x232772)), _0x277d0d && !_0x277d0d.parentNode && (_0x439c5b || _0x3989cc).append(_0x277d0d); _0x43d589 && _0x43d589.offset < _0x52fe01;) {
            ++_0x4a10ac.i;
            (_0x277d0d || _0x3989cc).append(gs(_0x4a10ac.text, _0x23344b));
            _0x43d589 = _0xda1d5b[_0x4a10ac.i + 1];
            ;
        }
        if (_0x4a10ac.usedLength <= _0x52fe01 ? (_0x4a10ac.usedLength < _0x52fe01 && ((_0x277d0d || _0x3989cc).append(_0x4a10ac.text.slice(_0x4a10ac.usedLength, _0x52fe01)), _0x4a10ac.usedLength = _0x52fe01), _0x439c5b = _0x3989cc, _0x4a10ac.lastEntity = void 0) : _0x48acbb.length > _0x232772.length && _0x277d0d ? _0x439c5b = _0x277d0d : _0x439c5b = _0x3989cc, _0x2a989e.voodoo) {
            return _0x3989cc;
        }
    }
    if (_0x4a10ac.lastEntity && (_0x4a10ac.usedLength = _0x4a10ac.lastEntity.offset + _0x4a10ac.lastEntity.length), _0x4a10ac.usedLength < _0x556b1e && (_0x439c5b || _0x3989cc).append(_0x4a10ac.text.slice(_0x4a10ac.usedLength)), (!_0x2a989e.wrappingDraft || _0x2a989e.customEmojiRenderer) && _0x52c1fc.size) {
        let _0x3b1304 = _0x2a989e.customEmojiRenderer;
        _0x3b1304 || (_0x3b1304 = ms.create(_0x2a989e), _0x3989cc.prepend(_0x3b1304));
        const _0x5e761e = {
            addCustomEmojis: _0x52c1fc,
            lazyLoadQueue: _0x2a989e.lazyLoadQueue,
            onlyThumb: _0x2a989e.wrappingDraft
        };
        ;
        ;
        ;
        ;
        const _0x1ba0d9 = _0x3b1304.add(_0x5e761e);
        _0x2a989e.loadPromises?.push(_0x1ba0d9);
    }
    return _0x368c93.size && Fc(_0x368c93), _0x3989cc.normalize(), _0x3989cc;
}
const yn = _0x22a27a => {
    const _0x66b959 = document.createElement('span');
    return _0x66b959.classList.add(_0x22a27a ? 'input-filler2' : 'input-filler'), _0x66b959.textContent = V, _0x66b959;
};
function kc(_0x3e56cd) {
    ;
    if (_0x3e56cd?.textContent !== V || _0x3e56cd?.getAttribute?.('contenteditable') === 'false') {
        if (!_0x3e56cd || _0x3e56cd.textContent !== V || _0x3e56cd.firstElementChild) {
            return 2;
        }
        if (_0x3e56cd.nodeType === _0x3e56cd.ELEMENT_NODE) {
            return 1;
        }
    }
    return 0;
}
function Fc(_0x3caf14) {
    const _0x3830c2 = (_0x217415, _0x3bbed5, _0x368be7) => {
        const _0x53b2eb = kc(_0x3bbed5);
        _0x53b2eb === 2 ? _0x217415[_0x368be7](yn()) : _0x53b2eb === 1 && _0x3bbed5.appendChild(document.createTextNode(V));
    };
    for (const _0x403d1c of _0x3caf14) {
        const {
            previousSibling: _0x51333b,
            nextSibling: _0xafb386
        } = _0x403d1c;
        _0x3830c2(_0x403d1c, _0x51333b, 'before');
        _0x3830c2(_0x403d1c, _0xafb386, 'after');
        ;
    }
}
window.wrapRichText = gs;
function Sr(_0x5f4ae3, _0xeed394 = false, _0x13898f) {
    ;
    return _0x5f4ae3 ? (_0x13898f ?? (_0x13898f = Kf(_0x5f4ae3).filter(_0x56adfb => _0x56adfb['_'] === 'messageEntityEmoji')), gs(_0x5f4ae3, {
        'entities': _0x13898f,
        'wrappingDraft': _0xeed394
    })) : gs('');
}
function F3(_0x4c1a62, _0x2e4fbf = false) {
    ;
    return Sr(_0x4c1a62.text, _0x2e4fbf, _0x4c1a62.entities);
}
function P3(_0x4729ae) {
    const _0x231192 = document.createElement('span');
    return rt(() => {
        ;
        _0x231192.replaceChildren(Sr(_0x4729ae.text, _0x4729ae.isDraft, _0x4729ae.entities));
    }), _0x231192;
}
async function yh(_0x2fe99b) {
    const {
        peerId: _0x44386d = I.myId,
        plainText: _0xd2928a,
        onlyFirstName: _0x1e87a8,
        limitSymbols: _0x141e4a,
        managers: _0x167e46 = I.managers,
        useManagers: _0x39b1ce,
        threadId: _0xdc744d
    } = _0x2fe99b;
    let _0x45f9ea = '';
    if (_0x44386d.isUser()) {
        const _0x20eb1a = _0x39b1ce ? await _0x167e46.appUsersManager.getUser(_0x44386d.toUserId()) : re.getUser(_0x44386d.toUserId());
        _0x20eb1a && (_0x20eb1a.first_name && (_0x45f9ea += _0x20eb1a.first_name), _0x20eb1a.last_name && (!_0x1e87a8 || !_0x45f9ea) && (_0x45f9ea += ' ' + _0x20eb1a.last_name));
        _0x45f9ea ? _0x45f9ea = _0x45f9ea.trim() : _0x45f9ea = !_0x20eb1a || _0x20eb1a.pFlags.deleted ? ue.format(_0x1e87a8 ? 'Deleted' : 'HiddenName', true) : jl(_0x20eb1a)[0] || '';
        ;
    } else {
        _0xdc744d && (_0x45f9ea = (await _0x167e46.dialogsStorage.getForumTopic(_0x44386d, _0xdc744d))?.title || '');
        _0x45f9ea || (_0x45f9ea = (_0x39b1ce ? await _0x167e46.appChatsManager.getChat(_0x44386d.toChatId()) : re.getChat(_0x44386d.toChatId()))?.title || '');
        _0x1e87a8 && (_0x45f9ea = _0x45f9ea.split(' ')[0]);
        ;
    }
    return _0x141e4a !== void 0 && (_0x45f9ea = Ul(_0x45f9ea, _0x141e4a, _0x141e4a)), _0xd2928a ? _0x45f9ea : Sr(_0x45f9ea);
}
const _3 = 'assets/img/ffcfdd8b.png', vh = 'assets/img/4ceec203.svg';
function In(_0x20ed6c, _0xcd9449, _0x26048a = false) {
    const _0x3efba0 = new URL(location.href), _0x8284fb = Object.entries(_0xcd9449 || {}).filter(_0x2afe96 => _0x2afe96[1]), _0xd71fc6 = Object.fromEntries(_0x8284fb);
    if (_0x8284fb.length) {
        const _0x5d4818 = new URLSearchParams();
        for (const _0x466d89 in _0xd71fc6)
            _0x5d4818.set(_0x466d89, _0xd71fc6[_0x466d89]);
        _0x3efba0.hash = '#/im?' + _0x5d4818.toString();
    } else {
        _0x26048a || (_0x3efba0.hash = '');
    }
    return _0x20ed6c === 1 ? _0x3efba0.searchParams.delete(fs) : _0x3efba0.searchParams.set(fs, _0x20ed6c + ''), _0x3efba0;
}
const a0_0x361b34 = {};
a0_0x361b34.rgb = true;
a0_0x361b34.light = true;
a0_0x361b34.lightFilled = true;
a0_0x361b34.dark = true;
a0_0x361b34.darkRgb = true;
;
const a0_0x276975 = {};
a0_0x276975.lightFilled = true;
a0_0x276975.rgb = true;
;
const a0_0x533cbd = {};
a0_0x533cbd.rgb = true;
const a0_0x28a174 = {};
a0_0x28a174.rgb = true;
a0_0x28a174.light = true;
a0_0x28a174.dark = true;
;
const a0_0x3e2314 = {};
a0_0x3e2314.rgb = true;
const a0_0x42d8e8 = {};
a0_0x42d8e8.light = true;
a0_0x42d8e8.lightFilled = true;
a0_0x42d8e8.rgb = true;
;
const a0_0x2349bf = {};
a0_0x2349bf.light = true;
a0_0x2349bf.lightFilled = true;
a0_0x2349bf.dark = true;
a0_0x2349bf.darkFilled = true;
;
const a0_0x49ee9d = {};
a0_0x49ee9d.light = true;
a0_0x49ee9d.lightFilled = true;
a0_0x49ee9d.dark = true;
a0_0x49ee9d.darkFilled = true;
a0_0x49ee9d.rgb = true;
;
const a0_0x986916 = {};
a0_0x986916.lightFilled = true;
const a0_0xc56147 = {};
a0_0xc56147['primary-color'] = a0_0x361b34;
a0_0xc56147['message-out-primary-color'] = a0_0x276975;
a0_0xc56147['surface-color'] = a0_0x533cbd;
a0_0xc56147['danger-color'] = a0_0x28a174;
a0_0xc56147['primary-text-color'] = a0_0x3e2314;
a0_0xc56147['secondary-text-color'] = a0_0x42d8e8;
a0_0xc56147['message-background-color'] = a0_0x2349bf;
a0_0xc56147['message-out-background-color'] = a0_0x49ee9d;
a0_0xc56147['saved-color'] = a0_0x986916;
a0_0xc56147['green-color'] = {};
;
const a0_0x1ca516 = {};
a0_0x1ca516['primary-color'] = '#3390ec';
a0_0x1ca516['message-out-primary-color'] = '#5CA853';
a0_0x1ca516['message-background-color'] = '#ffffff';
a0_0x1ca516['surface-color'] = '#ffffff';
a0_0x1ca516['danger-color'] = '#df3f40';
a0_0x1ca516['primary-text-color'] = '#000000';
a0_0x1ca516['secondary-text-color'] = '#707579';
a0_0x1ca516['saved-color'] = '#359AD4';
a0_0x1ca516['green-color'] = '#70b768';
;
const a0_0x4c0e12 = {};
a0_0x4c0e12['primary-color'] = '#8774E1';
a0_0x4c0e12['message-out-primary-color'] = '#8774E1';
a0_0x4c0e12['message-background-color'] = '#212121';
a0_0x4c0e12['surface-color'] = '#212121';
a0_0x4c0e12['danger-color'] = '#ff595a';
a0_0x4c0e12['primary-text-color'] = '#ffffff';
a0_0x4c0e12['secondary-text-color'] = '#aaaaaa';
a0_0x4c0e12['saved-color'] = '#8774E1';
a0_0x4c0e12['green-color'] = '#5CC85E';
;
const a0_0x38677e = {};
a0_0x38677e.day = a0_0x1ca516;
a0_0x38677e.night = a0_0x4c0e12;
;
const [Ar, mi] = vt(() => cr({})), Eh = (..._0x1d85ef) => {
        const _0x21a06c = _0x1d85ef[0];
        mi(..._0x1d85ef);
        I.managers.appStateManager.setByKey($f('settings', _0x21a06c), we(Ar[_0x21a06c]));
        ;
    }, Sa = (_0x567d1c, _0x51467c) => {
        ;
        if (typeof _0x567d1c == 'object') {
            mi(_0x567d1c);
            return;
        }
        mi(_0x567d1c, dr(_0x51467c));
    }, T3 = () => [
        Ar,
        Eh
    ], Aa = a0_0xc56147, Rn = a0_0x38677e;
class wh {
    constructor() {
        ;
        I.addEventListener('theme_change', _0x417b54 => {
            ;
            this.setTheme(typeof _0x417b54 == 'object' ? _0x417b54 : void 0);
        });
        I.addEventListener('theme_changed', () => {
            ;
            this.setWorkerThemeParams();
        });
        ;
    }
    ['setWorkerThemeParams']() {
        ;
        I.managers.apiManager.setThemeParams({
            '_': 'dataJSON',
            'data': JSON.stringify(this.getThemeParamsForWebView())
        });
    }
    get ['themeColorElem']() {
        ;
        return this['_themeColorElem'] !== void 0 ? this['_themeColorElem'] : this['_themeColorElem'] = document.head.querySelector('[name="theme-color"]') || null;
    }
    ['setThemeColor'](_0x4d1fba = this.themeColor) {
        ;
        _0x4d1fba || (_0x4d1fba = this.isNight() ? '#212121' : '#ffffff');
        const _0x57c56c = this.themeColorElem;
        _0x57c56c && _0x57c56c.setAttribute('content', _0x4d1fba);
    }
    ['setThemeListener']() {
        ;
        try {
            const _0x349186 = window.matchMedia('(prefers-color-scheme: dark)'), _0x5de933 = () => {
                    ;
                    this.systemTheme = _0x349186.matches ? 'night' : 'day';
                    I.myId ? I.dispatchEvent('theme_change') : this.setTheme();
                    ;
                };
            'addEventListener' in _0x349186 ? _0x349186.addEventListener('change', _0x5de933) : 'addListener' in _0x349186 && _0x349186.addListener(_0x5de933);
            _0x5de933();
            ;
        } catch {
        }
    }
    ['applyHighlightingColor']({
        hsla: _0x45d4c4,
        element: _0x3f05b6 = document.documentElement
    } = {}) {
        ;
        if (!_0x45d4c4) {
            _0x45d4c4 = 'hsla(85.5319, 36.9171%, 40.402%, .4)';
            const _0x562164 = this.getTheme();
            _0x562164.settings?.highlightingColor && (_0x45d4c4 = _0x562164.settings.highlightingColor);
        }
        const _0xf55ff4 = Dc(_0x45d4c4);
        _0x3f05b6.style.setProperty('--message-highlighting-color', _0x45d4c4);
        _0x3f05b6.style.setProperty('--message-highlighting-color-rgb', _0xf55ff4.slice(0, 3).join(','));
        _0x3f05b6.style.setProperty('--message-highlighting-alpha', '' + _0xf55ff4[3] / 255);
        !Fe && _0x45d4c4 && (this.themeColor = Uu(_0x45d4c4));
        ;
    }
    ['_setTheme'](_0x3d97a1) {
        const _0x493f0c = this.isNight();
        document.head.querySelector('[name="color-scheme"]')?.setAttribute('content', _0x493f0c ? 'dark' : 'light');
        document.documentElement.classList.toggle('night', _0x493f0c);
        this.setThemeColor();
        ;
        const _0x4bbad7 = this.getTheme();
        this.applyTheme(_0x4bbad7);
        let _0x45b5ed = this.styleElement;
        _0x45b5ed || (_0x45b5ed = this.styleElement = document.createElement('style'), document.head.append(_0x45b5ed));
        const _0x261af6 = document.createElement('div');
        this.applyTheme(I.settings.themes.find(_0x3bb3e4 => _0x3bb3e4.name === 'night'), _0x261af6, true);
        _0x45b5ed.textContent = '.night {' + _0x261af6.style.cssText + '}';
        this.applyHighlightingColor();
        !_0x3d97a1 && I.dispatchEventSingle('theme_changed');
        ;
    }
    ['setTheme'](_0xae3226) {
        ;
        if (!('startViewTransition' in document) || !this.applied) {
            const _0x505106 = !this.applied, _0x367f7a = this.applied;
            this.applied = true;
            this['_setTheme'](_0x505106);
            _0x367f7a || this.setWorkerThemeParams();
            ;
            return;
        }
        ot.isAvailable('animations') || (_0xae3226 = void 0);
        const _0xbcad15 = !this.isNight();
        _0xae3226 && (document.documentElement.classList.add('no-view-transition'), document.documentElement.classList.toggle('reverse', _0xbcad15), document.documentElement.offsetLeft);
        const _0x42338a = document.startViewTransition(() => {
            ;
            this['_setTheme']();
        });
        if (!_0xae3226) {
            return;
        }
        const {
                x: _0x2d2b87,
                y: _0x7dc98c
            } = _0xae3226, _0x402a8c = Math.hypot(Math.max(_0x2d2b87, hs.width - _0x2d2b87), Math.max(_0x7dc98c, hs.height - _0x7dc98c));
        _0x42338a.ready.then(() => {
            const _0xfdf964 = {
                clipPath: [
                    'circle(0 at ' + _0x2d2b87 + 'px ' + _0x7dc98c + 'px)',
                    'circle(' + _0x402a8c + 'px at ' + _0x2d2b87 + 'px ' + _0x7dc98c + 'px)'
                ]
            };
            ;
            const _0x1e6649 = {
                duration: 500,
                easing: 'ease-in-out',
                pseudoElement: '::view-transition-' + (_0xbcad15 ? 'old' : 'new') + '(root)',
                direction: _0xbcad15 ? 'reverse' : 'normal'
            };
            ;
            ;
            ;
            ;
            document.documentElement.animate(_0xfdf964, _0x1e6649);
            ;
        });
        _0x42338a.finished.finally(() => {
            ;
            document.documentElement.classList.remove('no-view-transition', 'reverse');
        });
        ;
    }
    async ['switchTheme'](_0x317e41, _0x307565) {
        ;
        await I.managers.appStateManager.setByKey($f('settings', 'theme'), _0x317e41);
        I.dispatchEvent('theme_change', _0x307565);
        ;
    }
    ['isNight']() {
        ;
        return this.getTheme().name === 'night';
    }
    ['getTheme'](_0x397dc7 = I.settings.theme === 'system' ? this.systemTheme : I.settings.theme) {
        ;
        return I.settings.themes.find(_0x1b191a => _0x1b191a.name === _0x397dc7);
    }
    ['bindColorApplier'](_0x523a41) {
        const _0x286f33 = new Set();
        return {
            'applyAppColor': _0x4200c1 => (_0x286f33.add(_0x4200c1.name), this.applyAppColor({
                ..._0x4200c1,
                ..._0x523a41
            })),
            'finalize': () => {
                const _0x2bbecd = _0x523a41.isNight;
                for (const _0x35f9af in Aa)
                    _0x286f33.has(_0x35f9af) || this.applyAppColor({
                        'name': _0x35f9af,
                        'hex': Rn[_0x2bbecd ? 'night' : 'day'][_0x35f9af],
                        ..._0x523a41
                    });
            }
        };
    }
    ['applyAppColor']({
        name: _0x58d3ef,
        hex: _0x17f7a6,
        element: _0x97ae1a,
        lightenAlpha: _0x4d99eb = 0.08,
        darkenAlpha: _0x6f5f9c = _0x4d99eb,
        mixColor: _0x3c0a73,
        isNight: _0x344c81 = this.isNight(),
        saveToCache: _0x460812
    }) {
        const _0x4a4b55 = Aa[_0x58d3ef], _0x2be5e1 = et(_0x17f7a6), _0x5f956d = ci(..._0x2be5e1);
        _0x3c0a73 ?? (_0x3c0a73 = et(Rn[_0x344c81 ? 'night' : 'day']['surface-color']));
        const _0x38c23a = { ..._0x5f956d };
        _0x38c23a.l = _0x5f956d.l - _0x6f5f9c * 100;
        const _0x14c3bd = Tn(_0x2be5e1, _0x3c0a73, _0x4d99eb), _0xf03efa = _0x38c23a, _0x37cc8c = [
                [
                    _0x58d3ef,
                    _0x17f7a6
                ],
                _0x4a4b55.rgb && [
                    _0x58d3ef + '-rgb',
                    _0x2be5e1.join(',')
                ],
                _0x4a4b55.light && [
                    'light-' + _0x58d3ef,
                    'rgba(' + _0x2be5e1[0] + ', ' + _0x2be5e1[1] + ', ' + _0x2be5e1[2] + ', ' + _0x4d99eb + ')'
                ],
                _0x4a4b55.lightFilled && [
                    'light-filled-' + _0x58d3ef,
                    Ls(_0x14c3bd)
                ],
                _0x4a4b55.dark && [
                    'dark-' + _0x58d3ef,
                    'hsl(' + _0xf03efa.h + ', ' + _0xf03efa.s + '%, ' + _0xf03efa.l + '%)'
                ]
            ];
        _0x460812 ?? (_0x460812 = _0x97ae1a === document.documentElement);
        _0x37cc8c.filter(Boolean).forEach(([_0x29d204, _0x11b846]) => {
            ;
            _0x97ae1a.style.setProperty('--' + _0x29d204, _0x11b846);
            _0x460812 && St.setPropertyCache(_0x29d204, _0x11b846, _0x344c81);
            ;
        });
        ;
    }
    async ['applyNewTheme'](_0x559f6b) {
        const _0x40917d = this.isNightTheme(_0x559f6b), _0x5570e2 = this.getTheme(), _0x4f9e5e = I.settings.themes, _0x29f5d7 = _0x559f6b.settings.find(_0x573d8d => _0x573d8d.base_theme['_'] === (_0x40917d ? 'baseThemeNight' : 'baseThemeClassic')), _0x3c0c38 = {
                ..._0x559f6b,
                'name': _0x5570e2.name,
                'settings': {
                    ..._0x29f5d7,
                    'highlightingColor': ''
                }
            };
        await this.AppBackgroundTab.setBackgroundDocument(_0x29f5d7.wallpaper, _0x3c0c38.settings);
        _0x4f9e5e[_0x4f9e5e.indexOf(_0x5570e2)] = _0x3c0c38;
        await I.managers.appStateManager.setByKey($f('settings', 'themes'), I.settings.themes);
        I.dispatchEvent('theme_change');
        ;
    }
    ['isNightTheme'](_0x5414f1) {
        ;
        return _0x5414f1.name === 'night' || this.isNight();
    }
    ['getThemeSettings'](_0x2a1d7f, _0x22ef2b) {
        ;
        return _0x22ef2b ?? (_0x22ef2b = this.isNightTheme(_0x2a1d7f)), Array.isArray(_0x2a1d7f.settings) ? _0x2a1d7f.settings.find(_0x56691f => _0x56691f.base_theme['_'] === (_0x22ef2b ? 'baseThemeNight' : 'baseThemeClassic')) : _0x2a1d7f.settings;
    }
    ['applyTheme'](_0x3bff4c, _0x842c16 = document.documentElement, _0x35a939) {
        const _0x39f1ed = this.isNightTheme(_0x3bff4c), _0x207d42 = this.getThemeSettings(_0x3bff4c, _0x39f1ed), _0x5ed316 = Rn[_0x39f1ed ? 'night' : 'day'];
        let _0x5ad7c6 = pt(...et(_0x5ed316['primary-color'])), _0x13bd10 = pt(...wf(_0x207d42.accent_color));
        const _0x27bfef = Wu(_0x5ad7c6, _0x13bd10, et(_0x5ed316['primary-color']), !_0x39f1ed), _0x2fe5ce = Ls(_0x27bfef), {
                applyAppColor: _0x198dbb,
                finalize: _0x29c1f7
            } = this.bindColorApplier({
                'element': _0x842c16,
                'isNight': _0x39f1ed,
                'saveToCache': _0x35a939
            }), _0x46a66b = {
                name: 'primary-color',
                hex: _0x2fe5ce,
                darkenAlpha: 0.04
            };
        ;
        ;
        ;
        ;
        const _0x9d287c = {
            name: 'saved-color',
            hex: _0x2fe5ce,
            lightenAlpha: 0.64,
            mixColor: [
                255,
                255,
                255
            ]
        };
        ;
        ;
        ;
        ;
        ;
        if (_0x198dbb(_0x46a66b), _0x198dbb(_0x9d287c), !_0x207d42.message_colors?.length) {
            return;
        }
        const _0x534bed = _0x39f1ed ? 1 : 0.12, _0x4608e4 = et(_0x5ed316['message-out-primary-color']);
        _0x5ad7c6 = pt(..._0x4608e4);
        const _0x2f3d91 = Tn(_0x4608e4, et(_0x5ed316['surface-color']), _0x534bed);
        let _0x242f56 = wf(_0x207d42.message_colors[0]);
        if (_0x207d42.message_colors.length > 1) {
            _0x207d42.message_colors.slice(1).forEach(_0x76b73c => {
                _0x242f56 = ju(_0x242f56, wf(_0x76b73c));
            });
            _0x242f56 = Hu(_0x5ad7c6, _0x2f3d91, _0x242f56);
        }
        _0x13bd10 = pt(..._0x242f56);
        ;
        const _0x3535d8 = _0x207d42.outbox_accent_color !== void 0 && pt(...wf(_0x207d42.outbox_accent_color));
        let _0x22adbe = Tn(_0x242f56, et(_0x5ed316['surface-color']), _0x534bed);
        if (!_0x39f1ed) {
            const _0x208d35 = ci(..._0x22adbe);
            _0x208d35.s = Math.min(_0x208d35.s + (_0x39f1ed ? 8 : 63), 100);
            _0x22adbe = wc(_0x208d35.h, _0x208d35.s, _0x208d35.l, _0x208d35.a).slice(0, 3);
            ;
        }
        _0x198dbb({
            'name': 'message-out-background-color',
            'hex': Ls(_0x22adbe),
            'lightenAlpha': _0x534bed
        });
        _0x198dbb({
            'name': 'message-out-primary-color',
            'hex': _0x39f1ed ? '#ffffff' : Ls(_0x3535d8 ? wr(..._0x3535d8) : _0x242f56),
            'mixColor': _0x22adbe
        });
        _0x29c1f7();
        ;
    }
    ['getThemeParamsForWebView']() {
        const _0x48dce8 = {
            bg_color: 'surface-color',
            button_color: 'primary-color',
            button_text_color: '#ffffff',
            hint_color: 'secondary-text-color',
            link_color: 'link-color',
            secondary_bg_color: 'background-color-true',
            text_color: 'primary-text-color',
            header_bg_color: 'surface-color',
            accent_text_color: 'primary-color',
            section_bg_color: 'surface-color',
            section_header_text_color: 'primary-color',
            subtitle_text_color: 'secondary-text-color',
            destructive_text_color: 'danger-color'
        };
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        const _0x1639c2 = _0x48dce8, _0x235808 = { _0x5f46db: _0x5743f3[0] === '#' ? _0x5743f3 : St.getProperty(_0x5743f3) };
        for (const _0x5f46db in _0x1639c2) {
            const _0x5743f3 = _0x1639c2[_0x5f46db];
            ;
        }
        return _0x235808;
    }
}
const Cr = new wh();
N && (N.themeController = Cr);
const Ks = [
        ['#CC5049'],
        ['#D67722'],
        ['#955CDB'],
        ['#40A920'],
        ['#309EBA'],
        ['#368AD1'],
        ['#C7508B']
    ], On = [
        'red',
        'orange',
        'violet',
        'green',
        'cyan',
        'blue',
        'pink'
    ], Dh = Ks;
function Pc(_0x15b68d) {
    ;
    return Math.abs(+_0x15b68d) % 7;
}
function Sh(_0x5b7b37) {
    let _0x160d6a = _c(_0x5b7b37);
    if (_0x160d6a === -1) {
        return;
    }
    let _0x13266d = On[_0x160d6a];
    if (!_0x13266d) {
        const _0x4bef2a = Ks[_0x160d6a];
        if (!_0x4bef2a) {
            return On[Pc(_0x5b7b37.id)];
        }
        const _0x38099c = Ac(_0x4bef2a[0]).h;
        _0x38099c >= 345 || _0x38099c < 29 ? _0x160d6a = 0 : _0x38099c < 67 ? _0x160d6a = 1 : _0x38099c < 140 ? _0x160d6a = 3 : _0x38099c < 199 ? _0x160d6a = 4 : _0x38099c < 234 ? _0x160d6a = 5 : _0x38099c < 301 ? _0x160d6a = 2 : _0x160d6a = 6;
        _0x13266d = On[_0x160d6a];
        ;
    }
    return _0x13266d;
}
function _c(_0x2ecdf5) {
    ;
    return _0x2ecdf5 ? _0x2ecdf5.color?.color ?? Pc(_0x2ecdf5.id) : -1;
}
function Ah(_0x318307) {
    const _0x45dc35 = _c(_0x318307);
    return Ks[_0x45dc35] ?? [];
}
function Ca(_0x46be27, _0x3577ba, _0x20193e) {
    ;
    for (const _0x3f84e3 of _0x3577ba) {
        const _0x39ccef = (_0x20193e ? _0x3f84e3.dark_colors : _0x3f84e3.colors)?.colors;
        if (!_0x39ccef?.length) {
            continue;
        }
        const _0x5c7b75 = _0x39ccef.map(_0x1db70a => Dr(_0x1db70a));
        _0x46be27[_0x3f84e3.color_id] = _0x5c7b75;
    }
    return _0x46be27;
}
function ka(_0x1ae5ff, _0x4c0fd3) {
    const _0x4f927d = _0x1ae5ff.length;
    return _0x4c0fd3 || (_0x4c0fd3 = 5), _0x4f927d !== 3 && (_0x1ae5ff = _0x1ae5ff.slice().reverse()), 'repeating-linear-gradient(-45deg, ' + _0x1ae5ff.map((_0x1773a9, _0x336889, _0x6e0fab) => {
        const _0x30d538 = _0x336889 * _0x4c0fd3 + 'px', _0xc3e551 = (_0x336889 + 1) * _0x4c0fd3 + 'px';
        return [
            _0x1773a9 + ' ' + _0x30d538,
            _0x1773a9 + ' ' + _0xc3e551
        ].join(', ');
    }).join(', ') + ')';
}
function L3(_0x2b5d82, _0x36b71f) {
    ;
    let _0x133643 = Ca(Dh.slice(), _0x2b5d82);
    Cr.isNight() && (_0x133643 = Ca(_0x133643, _0x2b5d82, true));
    Ks.splice(0, Ks.length, ..._0x133643);
    _0x133643.forEach((_0xa3d1c2, _0x45c84f) => {
        const _0x279a3a = '--peer-' + _0x45c84f, _0x38eba3 = _0x279a3a + '-border-background', _0x2ee83b = _0x279a3a + '-color-rgb';
        if (document.documentElement.style.setProperty(_0x2ee83b, et(_0xa3d1c2[0]).join(',')), _0xa3d1c2.length > 1) {
            const _0x4f9648 = ka(_0xa3d1c2);
            document.documentElement.style.setProperty(_0x38eba3, _0x4f9648);
        } else {
            document.documentElement.style.removeProperty(_0x38eba3);
        }
    });
    ;
    const _0x1034e9 = Ah(_0x36b71f);
    [
        [
            '--peer-border-background',
            '--primary-color',
            _0x1034e9.length
        ],
        [
            '--message-out-peer-border-background',
            '--message-out-primary-color',
            _0x1034e9.length
        ],
        [
            '--message-out-peer-1-border-background',
            '--message-out-primary-color',
            1
        ],
        [
            '--message-out-peer-2-border-background',
            '--message-out-primary-color',
            2
        ],
        [
            '--message-out-peer-3-border-background',
            '--message-out-primary-color',
            3
        ],
        [
            '--message-empty-peer-1-border-background',
            '--message-empty-primary-color',
            1
        ],
        [
            '--message-empty-peer-2-border-background',
            '--message-empty-primary-color',
            2
        ],
        [
            '--message-empty-peer-3-border-background',
            '--message-empty-primary-color',
            3
        ]
    ].forEach(([_0x575816, _0x1f2f1c, _0x3aceea]) => {
        ;
        let _0xc61ea8;
        if (_0x3aceea > 1) {
            const _0x240674 = [
                'rgba(var(' + _0x1f2f1c + '-rgb), .4)',
                'rgba(var(' + _0x1f2f1c + '-rgb), .2)',
                'var(' + _0x1f2f1c + ')'
            ];
            _0x3aceea === 2 && _0x240674.shift();
            _0xc61ea8 = ka(_0x240674);
            ;
        } else {
            _0xc61ea8 = 'var(' + _0x1f2f1c + ')';
        }
        document.documentElement.style.setProperty(_0x575816, _0xc61ea8);
    });
}
function Fa(_0xb1fb83) {
    ;
    return {
        '_': 'messageEntityEmoji',
        'offset': 0,
        'length': _0xb1fb83.length,
        'unicode': jo(_0xb1fb83).join('-').replace(/-?fe0f/g, '')
    };
}
const Pa = new RegExp('(^' + Xa + ')');
function Ch(_0x5d10d0, _0x5e4bb3 = false) {
    const _0xed1f5a = (_0x5d10d0 || '').trim().split(' '), _0x3b9480 = {
            text: '',
            entities: []
        };
    ;
    ;
    ;
    if (!_0xed1f5a[0]) {
        return _0x3b9480;
    }
    const _0x30a2a0 = [], _0x31e8f9 = _0xed1f5a[0].match(Pa), _0x2c7801 = _0x31e8f9?.[0] || _0xed1f5a[0][0];
    _0x31e8f9 && _0x30a2a0.push(Fa(_0x2c7801));
    const _0x32fd97 = _0xed1f5a.length, _0x3f4be5 = {
            text: _0x2c7801,
            entities: _0x30a2a0
        };
    ;
    ;
    ;
    if (_0x5e4bb3 || _0x32fd97 === 1) {
        return _0x3f4be5;
    }
    const _0x1951aa = _0xed1f5a[_0x32fd97 - 1].match(Pa), _0x5176aa = _0x1951aa?.[0] || _0xed1f5a[_0x32fd97 - 1][0];
    return _0x1951aa && _0x30a2a0.push({
        ...Fa(_0x5176aa),
        'offset': _0x2c7801.length
    }), {
        'text': _0x2c7801 + _0x5176aa,
        'entities': _0x30a2a0
    };
}
function Tc(_0x1cfad0, _0x6672b, _0x3abe2c, _0x9af3aa, _0x54fd7e, _0x5bf263) {
    const _0xae2b35 = _0x1cfad0.canvas.dpr;
    _0xae2b35 && (_0x6672b *= _0xae2b35, _0x3abe2c *= _0xae2b35, _0x9af3aa *= _0xae2b35);
    _0x1cfad0.beginPath();
    _0x1cfad0.arc(_0x6672b, _0x3abe2c, _0x9af3aa, 0, 2 * Math.PI, false);
    _0x1cfad0.closePath();
    _0x54fd7e && _0x1cfad0.fill();
    ;
}
function x3(_0x12dcab, _0x1645c6, _0x55a61b, _0x1ffa7c, _0x1b6322, _0x41eb98) {
    return Tc(_0x12dcab, _0x1645c6 + _0x1ffa7c, _0x55a61b + _0x1ffa7c, _0x1ffa7c, _0x1b6322);
}
let fe, _e, Nn;
async function kh(_0x3871d0, _0x16ef78, _0x3e6ae5) {
    const _0x4d3252 = await _0x3871d0.appPeersManager.getPeerPhoto(_0x16ef78);
    if (_0x4d3252) {
        return await _0x3871d0.appAvatarsManager.loadAvatar(_0x16ef78, _0x4d3252, 'photo_small');
    }
    if (fe) {
        _e.clearRect(0, 0, fe.width, fe.height);
    } else {
        fe = document.createElement('canvas');
        _e = fe.getContext('2d');
        ;
        ;
        fe.dpr = 1;
        fe.width = fe.height = 54;
        Nn = {};
        ;
    }
    const _0x2c5b5e = await _0x3871d0.appPeersManager.getPeer(_0x16ef78), _0x2a793e = Sh(_0x2c5b5e);
    let _0x14748a = Nn[_0x2a793e];
    if (!_0x14748a) {
        _0x14748a = Nn[_0x2a793e] = _e.createLinearGradient(fe.width / 2, 0, fe.width / 2, fe.height);
        const _0x1a18b7 = St.getProperty('peer-avatar-' + _0x2a793e + '-top'), _0x57771d = St.getProperty('peer-avatar-' + _0x2a793e + '-bottom');
        _0x14748a.addColorStop(0, _0x1a18b7);
        _0x14748a.addColorStop(1, _0x57771d);
        ;
    }
    _e.fillStyle = _0x14748a;
    Tc(_e, fe.width / 2, fe.height / 2, fe.width / 2);
    _e.fill();
    ;
    const _0x2af7bc = 20 * fe.dpr, _0x41fab9 = Ch(_0x3e6ae5);
    return _e.font = '700 ' + _0x2af7bc + 'px ' + za, _e.textBaseline = 'middle', _e.textAlign = 'center', _e.fillStyle = 'white', _e.fillText(_0x41fab9.text, fe.width / 2, fe.height * (window.devicePixelRatio > 1, 0.5625)), fe.toDataURL();
}
const a0_0x1f8397 = {};
a0_0x1f8397.className = 'class';
a0_0x1f8397.htmlFor = 'for';
;
const a0_0x199aac = {};
a0_0x199aac['$'] = 'formNoValidate';
a0_0x199aac.BUTTON = 1;
a0_0x199aac.INPUT = 1;
;
const a0_0x3d7d30 = {};
a0_0x3d7d30['$'] = 'isMap';
a0_0x3d7d30.IMG = 1;
;
const a0_0x2762a3 = {};
a0_0x2762a3['$'] = 'noModule';
a0_0x2762a3.SCRIPT = 1;
;
const a0_0x45fd96 = {};
a0_0x45fd96['$'] = 'playsInline';
a0_0x45fd96.VIDEO = 1;
;
const a0_0x411a94 = {};
a0_0x411a94['$'] = 'readOnly';
a0_0x411a94.INPUT = 1;
a0_0x411a94.TEXTAREA = 1;
;
const a0_0x455a35 = {};
a0_0x455a35.class = 'className';
a0_0x455a35.formnovalidate = a0_0x199aac;
a0_0x455a35.ismap = a0_0x3d7d30;
a0_0x455a35.nomodule = a0_0x2762a3;
a0_0x455a35.playsinline = a0_0x45fd96;
a0_0x455a35.readonly = a0_0x411a94;
;
const Fh = [
        'allowfullscreen',
        'async',
        'autofocus',
        'autoplay',
        'checked',
        'controls',
        'default',
        'disabled',
        'formnovalidate',
        'hidden',
        'indeterminate',
        'ismap',
        'loop',
        'multiple',
        'muted',
        'nomodule',
        'novalidate',
        'open',
        'playsinline',
        'readonly',
        'required',
        'reversed',
        'seamless',
        'selected'
    ], Ph = new Set([
        'className',
        'value',
        'readOnly',
        'formNoValidate',
        'isMap',
        'noModule',
        'playsInline',
        ...Fh
    ]), _h = new Set([
        'innerHTML',
        'textContent',
        'innerText',
        'children'
    ]), Th = Object.assign(Object.create(null), a0_0x1f8397), Lh = Object.assign(Object.create(null), a0_0x455a35);
function xh(_0x13b315, _0x5b93b8) {
    const _0xf48a88 = Lh[_0x13b315];
    return typeof _0xf48a88 == 'object' ? _0xf48a88[_0x5b93b8] ? _0xf48a88['$'] : void 0 : _0xf48a88;
}
const a0_0x1eae3c = {};
a0_0x1eae3c.xlink = 'http://www.w3.org/1999/xlink';
a0_0x1eae3c.xml = 'http://www.w3.org/XML/1998/namespace';
;
const Mh = new Set([
        'beforeinput',
        'click',
        'dblclick',
        'contextmenu',
        'focusin',
        'focusout',
        'input',
        'keydown',
        'keyup',
        'mousedown',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'pointerdown',
        'pointermove',
        'pointerout',
        'pointerover',
        'pointerup',
        'touchend',
        'touchmove',
        'touchstart'
    ]), Ih = new Set([
        'altGlyph',
        'altGlyphDef',
        'altGlyphItem',
        'animate',
        'animateColor',
        'animateMotion',
        'animateTransform',
        'circle',
        'clipPath',
        'color-profile',
        'cursor',
        'defs',
        'desc',
        'ellipse',
        'feBlend',
        'feColorMatrix',
        'feComponentTransfer',
        'feComposite',
        'feConvolveMatrix',
        'feDiffuseLighting',
        'feDisplacementMap',
        'feDistantLight',
        'feFlood',
        'feFuncA',
        'feFuncB',
        'feFuncG',
        'feFuncR',
        'feGaussianBlur',
        'feImage',
        'feMerge',
        'feMergeNode',
        'feMorphology',
        'feOffset',
        'fePointLight',
        'feSpecularLighting',
        'feSpotLight',
        'feTile',
        'feTurbulence',
        'filter',
        'font',
        'font-face',
        'font-face-format',
        'font-face-name',
        'font-face-src',
        'font-face-uri',
        'foreignObject',
        'g',
        'glyph',
        'glyphRef',
        'hkern',
        'image',
        'line',
        'linearGradient',
        'marker',
        'mask',
        'metadata',
        'missing-glyph',
        'mpath',
        'path',
        '8f0e2ce3',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'set',
        'stop',
        'svg',
        'switch',
        'symbol',
        'text',
        'textPath',
        'tref',
        'tspan',
        'use',
        'view',
        'vkern'
    ]), Rh = a0_0x1eae3c;
function Oh(_0x2852a5, _0xde9af7, _0x48f273) {
    ;
    let _0x1617ef = _0x48f273.length, _0xd35f02 = _0xde9af7.length, _0x3822fa = _0x1617ef, _0x462391 = 0, _0x2f3c93 = 0, _0x4e047b = _0xde9af7[_0xd35f02 - 1].nextSibling, _0x4e0e42 = null;
    for (; _0x462391 < _0xd35f02 || _0x2f3c93 < _0x3822fa;) {
        if (_0xde9af7[_0x462391] === _0x48f273[_0x2f3c93]) {
            _0x462391++;
            _0x2f3c93++;
            ;
            continue;
        }
        for (; _0xde9af7[_0xd35f02 - 1] === _0x48f273[_0x3822fa - 1];) {
            _0xd35f02--;
            _0x3822fa--;
            ;
        }
        if (_0xd35f02 === _0x462391) {
            const _0x5e8e96 = _0x3822fa < _0x1617ef ? _0x2f3c93 ? _0x48f273[_0x2f3c93 - 1].nextSibling : _0x48f273[_0x3822fa - _0x2f3c93] : _0x4e047b;
            for (; _0x2f3c93 < _0x3822fa;) {
                _0x2852a5.insertBefore(_0x48f273[_0x2f3c93++], _0x5e8e96);
            }
        } else {
            if (_0x3822fa === _0x2f3c93) {
                for (; _0x462391 < _0xd35f02;) {
                    (!_0x4e0e42 || !_0x4e0e42.has(_0xde9af7[_0x462391])) && _0xde9af7[_0x462391].remove();
                    _0x462391++;
                    ;
                }
            } else {
                if (_0xde9af7[_0x462391] === _0x48f273[_0x3822fa - 1] && _0x48f273[_0x2f3c93] === _0xde9af7[_0xd35f02 - 1]) {
                    const _0x14aa12 = _0xde9af7[--_0xd35f02].nextSibling;
                    _0x2852a5.insertBefore(_0x48f273[_0x2f3c93++], _0xde9af7[_0x462391++].nextSibling);
                    _0x2852a5.insertBefore(_0x48f273[--_0x3822fa], _0x14aa12);
                    _0xde9af7[_0xd35f02] = _0x48f273[_0x3822fa];
                    ;
                } else {
                    if (!_0x4e0e42) {
                        _0x4e0e42 = new Map();
                        let _0x3d4c05 = _0x2f3c93;
                        for (; _0x3d4c05 < _0x3822fa;) {
                            _0x4e0e42.set(_0x48f273[_0x3d4c05], _0x3d4c05++);
                        }
                    }
                    const _0x2b0825 = _0x4e0e42.get(_0xde9af7[_0x462391]);
                    if (_0x2b0825 != null) {
                        if (_0x2f3c93 < _0x2b0825 && _0x2b0825 < _0x3822fa) {
                            let _0xd43ac1 = _0x462391, _0x7b0818 = 1, _0x33d73e;
                            for (; ++_0xd43ac1 < _0xd35f02 && _0xd43ac1 < _0x3822fa && !((_0x33d73e = _0x4e0e42.get(_0xde9af7[_0xd43ac1])) == null || _0x33d73e !== _0x2b0825 + _0x7b0818);) {
                                _0x7b0818++;
                            }
                            if (_0x7b0818 > _0x2b0825 - _0x2f3c93) {
                                const _0x374b73 = _0xde9af7[_0x462391];
                                for (; _0x2f3c93 < _0x2b0825;) {
                                    _0x2852a5.insertBefore(_0x48f273[_0x2f3c93++], _0x374b73);
                                }
                            } else {
                                _0x2852a5.replaceChild(_0x48f273[_0x2f3c93++], _0xde9af7[_0x462391++]);
                            }
                        } else {
                            _0x462391++;
                        }
                    } else {
                        _0xde9af7[_0x462391++].remove();
                    }
                }
            }
        }
    }
}
const _a = '_$DX_DELEGATE';
function gi(_0x3ceb0c, _0x16b067, _0x1c6625, _0x39a1f6 = {}) {
    ;
    let _0x16168b;
    return vt(_0x468a08 => {
        ;
        _0x16168b = _0x468a08;
        _0x16b067 === document ? _0x3ceb0c() : bi(_0x16b067, _0x3ceb0c(), _0x16b067.firstChild ? null : void 0, _0x1c6625);
        ;
    }, _0x39a1f6.owner), () => {
        ;
        _0x16168b();
        _0x16b067.textContent = '';
        ;
    };
}
function M3(_0x495d54, _0x3d69d2, _0x2f8891) {
    ;
    let _0x155054;
    const _0x5ea913 = () => {
            const _0x1f79ef = document.createElement('template');
            return _0x1f79ef.innerHTML = _0x495d54, _0x2f8891 ? _0x1f79ef.content.firstChild.firstChild : _0x1f79ef.content.firstChild;
        }, _0xdbd627 = _0x3d69d2 ? () => he(() => document.importNode(_0x155054 || (_0x155054 = _0x5ea913()), true)) : () => (_0x155054 || (_0x155054 = _0x5ea913())).cloneNode(true);
    return _0xdbd627.cloneNode = _0xdbd627, _0xdbd627;
}
function Nh(_0x1432f1, _0x4c908a = window.document) {
    const _0x3066c0 = _0x4c908a[_a] || (_0x4c908a[_a] = new Set());
    for (let _0x38fe00 = 0, _0x103381 = _0x1432f1.length; _0x38fe00 < _0x103381; _0x38fe00++) {
        const _0x59b902 = _0x1432f1[_0x38fe00];
        _0x3066c0.has(_0x59b902) || (_0x3066c0.add(_0x59b902), _0x4c908a.addEventListener(_0x59b902, qh));
    }
}
function pi(_0x11deed, _0x4910b7, _0x213779) {
    ;
    _0x213779 == null ? _0x11deed.removeAttribute(_0x4910b7) : _0x11deed.setAttribute(_0x4910b7, _0x213779);
}
function Bh(_0x3256cc, _0x5ead9b, _0x216ceb, _0x1eb50f) {
    ;
    _0x1eb50f == null ? _0x3256cc.removeAttributeNS(_0x5ead9b, _0x216ceb) : _0x3256cc.setAttributeNS(_0x5ead9b, _0x216ceb, _0x1eb50f);
}
function Uh(_0x280a01, _0x4ad72d) {
    ;
    _0x4ad72d == null ? _0x280a01.removeAttribute('class') : _0x280a01.className = _0x4ad72d;
}
function jh(_0x46634a, _0x202d51, _0x3ece8f, _0x5f4cd4) {
    ;
    if (_0x5f4cd4) {
        Array.isArray(_0x3ece8f) ? (_0x46634a['$$' + _0x202d51] = _0x3ece8f[0], _0x46634a['$$' + _0x202d51 + 'Data'] = _0x3ece8f[1]) : _0x46634a['$$' + _0x202d51] = _0x3ece8f;
    } else {
        if (Array.isArray(_0x3ece8f)) {
            const _0x2289f4 = _0x3ece8f[0];
            _0x46634a.addEventListener(_0x202d51, _0x3ece8f[0] = _0x317e8a => _0x2289f4.call(_0x46634a, _0x3ece8f[1], _0x317e8a));
        } else {
            _0x46634a.addEventListener(_0x202d51, _0x3ece8f);
        }
    }
}
function Hh(_0x182c18, _0x2197b7, _0x51e5f3 = {}) {
    const _0x2d060d = Object.keys(_0x2197b7 || {}), _0x16c17d = Object.keys(_0x51e5f3);
    let _0x176d5a, _0x366753;
    for (_0x176d5a = 0, _0x366753 = _0x16c17d.length; _0x176d5a < _0x366753; _0x176d5a++) {
        const _0x4db511 = _0x16c17d[_0x176d5a];
        !_0x4db511 || _0x4db511 === 'undefined' || _0x2197b7[_0x4db511] || (Ta(_0x182c18, _0x4db511, false), delete _0x51e5f3[_0x4db511]);
    }
    for (_0x176d5a = 0, _0x366753 = _0x2d060d.length; _0x176d5a < _0x366753; _0x176d5a++) {
        const _0x3641eb = _0x2d060d[_0x176d5a], _0x7eeb1a = !!_0x2197b7[_0x3641eb];
        !_0x3641eb || _0x3641eb === 'undefined' || _0x51e5f3[_0x3641eb] === _0x7eeb1a || !_0x7eeb1a || (Ta(_0x182c18, _0x3641eb, true), _0x51e5f3[_0x3641eb] = _0x7eeb1a);
    }
    return _0x51e5f3;
}
function Wh(_0x29cf73, _0x3e32d7, _0x36b9a4) {
    ;
    if (!_0x3e32d7) {
        return _0x36b9a4 ? pi(_0x29cf73, 'style') : _0x3e32d7;
    }
    const _0x636c9f = _0x29cf73.style;
    if (typeof _0x3e32d7 == 'string') {
        return _0x636c9f.cssText = _0x3e32d7;
    }
    typeof _0x36b9a4 == 'string' && (_0x636c9f.cssText = _0x36b9a4 = void 0);
    _0x36b9a4 || (_0x36b9a4 = {});
    _0x3e32d7 || (_0x3e32d7 = {});
    ;
    let _0x2ea841, _0x4e13d6;
    for (_0x4e13d6 in _0x36b9a4)
        _0x3e32d7[_0x4e13d6] == null && _0x636c9f.removeProperty(_0x4e13d6), delete _0x36b9a4[_0x4e13d6];
    for (_0x4e13d6 in _0x3e32d7)
        _0x2ea841 = _0x3e32d7[_0x4e13d6], _0x2ea841 !== _0x36b9a4[_0x4e13d6] && (_0x636c9f.setProperty(_0x4e13d6, _0x2ea841), _0x36b9a4[_0x4e13d6] = _0x2ea841);
    return _0x36b9a4;
}
function Vh(_0x36a681, _0x55fbe5 = {}, _0x9e8f12, _0x7800e2) {
    const _0x39eb8d = {};
    return _0x7800e2 || Tt(() => _0x39eb8d.children = Js(_0x36a681, _0x55fbe5.children, _0x39eb8d.children)), Tt(() => _0x55fbe5.ref && _0x55fbe5.ref(_0x36a681)), Tt(() => zh(_0x36a681, _0x55fbe5, _0x9e8f12, true, _0x39eb8d, true)), _0x39eb8d;
}
function I3(_0x335364, _0x2098a9, _0x3cb624) {
    return he(() => _0x335364(_0x2098a9, _0x3cb624));
}
function bi(_0x5512dd, _0x3146d2, _0x25daa4, _0x1a871f) {
    ;
    if (_0x25daa4 !== void 0 && !_0x1a871f && (_0x1a871f = []), typeof _0x3146d2 != 'function') {
        return Js(_0x5512dd, _0x3146d2, _0x1a871f, _0x25daa4);
    }
    Tt(_0x3fc59b => Js(_0x5512dd, _0x3146d2(), _0x3fc59b, _0x25daa4), _0x1a871f);
}
function zh(_0x3b9011, _0x2e4e10, _0x5239d1, _0xa4f539, _0x3c0696 = {}, _0x2615a2 = false) {
    ;
    _0x2e4e10 || (_0x2e4e10 = {});
    for (const _0xe5d5a0 in _0x3c0696)
        if (!(_0xe5d5a0 in _0x2e4e10)) {
            if (_0xe5d5a0 === 'children') {
                continue;
            }
            _0x3c0696[_0xe5d5a0] = La(_0x3b9011, _0xe5d5a0, null, _0x3c0696[_0xe5d5a0], _0x5239d1, _0x2615a2);
        }
    for (const _0x42132d in _0x2e4e10) {
        if (_0x42132d === 'children') {
            continue;
        }
        const _0x36b9be = _0x2e4e10[_0x42132d];
        _0x3c0696[_0x42132d] = La(_0x3b9011, _0x42132d, _0x36b9be, _0x3c0696[_0x42132d], _0x5239d1, _0x2615a2);
    }
}
function Gh(_0xcd2f4) {
    ;
    return _0xcd2f4.toLowerCase().replace(/-([a-z])/g, (_0x5ebacc, _0x2465ed) => _0x2465ed.toUpperCase());
}
function Ta(_0x739bb6, _0xc6de6d, _0xbe4262) {
    const _0x5172eb = _0xc6de6d.trim().split(/\s+/);
    for (let _0x4007c2 = 0, _0x23a74e = _0x5172eb.length; _0x4007c2 < _0x23a74e; _0x4007c2++) {
        _0x739bb6.classList.toggle(_0x5172eb[_0x4007c2], _0xbe4262);
    }
}
function La(_0x58c8cb, _0x1a292f, _0x22555d, _0x986233, _0x19e60b, _0x267d23) {
    ;
    let _0x5958e5, _0x5bcee5, _0x24ceae, _0x3f6b49, _0x1870db;
    if (_0x1a292f === 'style') {
        return Wh(_0x58c8cb, _0x22555d, _0x986233);
    }
    if (_0x1a292f === 'classList') {
        return Hh(_0x58c8cb, _0x22555d, _0x986233);
    }
    if (_0x22555d === _0x986233) {
        return _0x986233;
    }
    if (_0x1a292f === 'ref') {
        _0x267d23 || _0x22555d(_0x58c8cb);
    } else {
        if (_0x1a292f.slice(0, 3) === 'on:') {
            const _0x43adf4 = _0x1a292f.slice(3);
            _0x986233 && _0x58c8cb.removeEventListener(_0x43adf4, _0x986233);
            _0x22555d && _0x58c8cb.addEventListener(_0x43adf4, _0x22555d);
            ;
        } else {
            if (_0x1a292f.slice(0, 10) === 'oncapture:') {
                const _0x1c3df1 = _0x1a292f.slice(10);
                _0x986233 && _0x58c8cb.removeEventListener(_0x1c3df1, _0x986233, true);
                _0x22555d && _0x58c8cb.addEventListener(_0x1c3df1, _0x22555d, true);
                ;
            } else {
                if (_0x1a292f.slice(0, 2) === 'on') {
                    const _0x2eef2c = _0x1a292f.slice(2).toLowerCase(), _0x18680b = Mh.has(_0x2eef2c);
                    if (!_0x18680b && _0x986233) {
                        const _0x228a63 = Array.isArray(_0x986233) ? _0x986233[0] : _0x986233;
                        _0x58c8cb.removeEventListener(_0x2eef2c, _0x228a63);
                    }
                    (_0x18680b || _0x22555d) && (jh(_0x58c8cb, _0x2eef2c, _0x22555d, _0x18680b), _0x18680b && Nh([_0x2eef2c]));
                } else {
                    if (_0x1a292f.slice(0, 5) === 'attr:') {
                        pi(_0x58c8cb, _0x1a292f.slice(5), _0x22555d);
                    } else {
                        if ((_0x1870db = _0x1a292f.slice(0, 5) === 'prop:') || (_0x24ceae = _h.has(_0x1a292f)) || !_0x19e60b && ((_0x3f6b49 = xh(_0x1a292f, _0x58c8cb.tagName)) || (_0x5bcee5 = Ph.has(_0x1a292f))) || (_0x5958e5 = _0x58c8cb.nodeName.includes('-'))) {
                            _0x1870db && (_0x1a292f = _0x1a292f.slice(5), _0x5bcee5 = true);
                            _0x1a292f === 'class' || _0x1a292f === 'className' ? Uh(_0x58c8cb, _0x22555d) : _0x5958e5 && !_0x5bcee5 && !_0x24ceae ? _0x58c8cb[Gh(_0x1a292f)] = _0x22555d : _0x58c8cb[_0x3f6b49 || _0x1a292f] = _0x22555d;
                            ;
                        } else {
                            const _0x881562 = _0x19e60b && _0x1a292f.indexOf(':') > -1 && Rh[_0x1a292f.split(':')[0]];
                            _0x881562 ? Bh(_0x58c8cb, _0x881562, _0x1a292f, _0x22555d) : pi(_0x58c8cb, Th[_0x1a292f] || _0x1a292f, _0x22555d);
                        }
                    }
                }
            }
        }
    }
    return _0x22555d;
}
function qh(_0x102403) {
    const _0x5a3aeb = '$$' + _0x102403.type;
    let _0xcf91e4 = _0x102403.composedPath && _0x102403.composedPath()[0] || _0x102403.target;
    for (_0x102403.target !== _0xcf91e4 && Object.defineProperty(_0x102403, 'target', {
            'configurable': true,
            'value': _0xcf91e4
        }), Object.defineProperty(_0x102403, 'currentTarget', {
            'configurable': true,
            'get'() {
                return _0xcf91e4 || document;
            }
        }); _0xcf91e4;) {
        const _0x3ce90f = _0xcf91e4[_0x5a3aeb];
        if (_0x3ce90f && !_0xcf91e4.disabled) {
            const _0x511129 = _0xcf91e4[_0x5a3aeb + 'Data'];
            if (_0x511129 !== void 0 ? _0x3ce90f.call(_0xcf91e4, _0x511129, _0x102403) : _0x3ce90f.call(_0xcf91e4, _0x102403), _0x102403.cancelBubble) {
                return;
            }
        }
        _0xcf91e4 = _0xcf91e4['_$host'] || _0xcf91e4.parentNode || _0xcf91e4.host;
    }
}
function Js(_0x422ac1, _0x1c5ff8, _0x1ee851, _0x55385d, _0x17fd59) {
    ;
    for (; typeof _0x1ee851 == 'function';) {
        _0x1ee851 = _0x1ee851();
    }
    if (_0x1c5ff8 === _0x1ee851) {
        return _0x1ee851;
    }
    const _0x143397 = typeof _0x1c5ff8, _0x20137e = _0x55385d !== void 0;
    if (_0x422ac1 = _0x20137e && _0x1ee851[0] && _0x1ee851[0].parentNode || _0x422ac1, _0x143397 === 'string' || _0x143397 === 'number') {
        if (_0x143397 === 'number' && (_0x1c5ff8 = _0x1c5ff8.toString()), _0x20137e) {
            let _0x565e5a = _0x1ee851[0];
            _0x565e5a && _0x565e5a.nodeType === 3 ? _0x565e5a.data = _0x1c5ff8 : _0x565e5a = document.createTextNode(_0x1c5ff8);
            _0x1ee851 = qt(_0x422ac1, _0x1ee851, _0x55385d, _0x565e5a);
            ;
        } else {
            _0x1ee851 !== '' && typeof _0x1ee851 == 'string' ? _0x1ee851 = _0x422ac1.firstChild.data = _0x1c5ff8 : _0x1ee851 = _0x422ac1.textContent = _0x1c5ff8;
        }
    } else {
        if (_0x1c5ff8 == null || _0x143397 === 'boolean') {
            _0x1ee851 = qt(_0x422ac1, _0x1ee851, _0x55385d);
        } else {
            if (_0x143397 === 'function') {
                return Tt(() => {
                    ;
                    let _0x2037a8 = _0x1c5ff8();
                    for (; typeof _0x2037a8 == 'function';) {
                        _0x2037a8 = _0x2037a8();
                    }
                    _0x1ee851 = Js(_0x422ac1, _0x2037a8, _0x1ee851, _0x55385d);
                }), () => _0x1ee851;
            }
            if (Array.isArray(_0x1c5ff8)) {
                const _0x4f209d = [], _0x1ebf6a = _0x1ee851 && Array.isArray(_0x1ee851);
                if (yi(_0x4f209d, _0x1c5ff8, _0x1ee851, _0x17fd59)) {
                    return Tt(() => _0x1ee851 = Js(_0x422ac1, _0x4f209d, _0x1ee851, _0x55385d, true)), () => _0x1ee851;
                }
                if (_0x4f209d.length === 0) {
                    if (_0x1ee851 = qt(_0x422ac1, _0x1ee851, _0x55385d), _0x20137e) {
                        return _0x1ee851;
                    }
                } else {
                    _0x1ebf6a ? _0x1ee851.length === 0 ? xa(_0x422ac1, _0x4f209d, _0x55385d) : Oh(_0x422ac1, _0x1ee851, _0x4f209d) : (_0x1ee851 && qt(_0x422ac1), xa(_0x422ac1, _0x4f209d));
                }
                _0x1ee851 = _0x4f209d;
            } else {
                if (_0x1c5ff8.nodeType) {
                    if (Array.isArray(_0x1ee851)) {
                        if (_0x20137e) {
                            return _0x1ee851 = qt(_0x422ac1, _0x1ee851, _0x55385d, _0x1c5ff8);
                        }
                        qt(_0x422ac1, _0x1ee851, null, _0x1c5ff8);
                    } else {
                        _0x1ee851 == null || _0x1ee851 === '' || !_0x422ac1.firstChild ? _0x422ac1.appendChild(_0x1c5ff8) : _0x422ac1.replaceChild(_0x1c5ff8, _0x422ac1.firstChild);
                    }
                    _0x1ee851 = _0x1c5ff8;
                }
            }
        }
    }
    return _0x1ee851;
}
function yi(_0x32be0b, _0x39b85c, _0x7677c9, _0x2068b1) {
    ;
    let _0x5ea8f4 = false;
    for (let _0x21b85c = 0, _0x327b4b = _0x39b85c.length; _0x21b85c < _0x327b4b; _0x21b85c++) {
        let _0x294291 = _0x39b85c[_0x21b85c], _0x5a72c5 = _0x7677c9 && _0x7677c9[_0x21b85c], _0x47856c;
        if (!(_0x294291 == null || _0x294291 === true || _0x294291 === false)) {
            if ((_0x47856c = typeof _0x294291) == 'object' && _0x294291.nodeType) {
                _0x32be0b.push(_0x294291);
            } else {
                if (Array.isArray(_0x294291)) {
                    _0x5ea8f4 = yi(_0x32be0b, _0x294291, _0x5a72c5) || _0x5ea8f4;
                } else {
                    if (_0x47856c === 'function') {
                        if (_0x2068b1) {
                            for (; typeof _0x294291 == 'function';) {
                                _0x294291 = _0x294291();
                            }
                            _0x5ea8f4 = yi(_0x32be0b, Array.isArray(_0x294291) ? _0x294291 : [_0x294291], Array.isArray(_0x5a72c5) ? _0x5a72c5 : [_0x5a72c5]) || _0x5ea8f4;
                        } else {
                            _0x32be0b.push(_0x294291);
                            _0x5ea8f4 = true;
                            ;
                        }
                    } else {
                        const _0x1c915c = String(_0x294291);
                        _0x5a72c5 && _0x5a72c5.nodeType === 3 && _0x5a72c5.data === _0x1c915c ? _0x32be0b.push(_0x5a72c5) : _0x32be0b.push(document.createTextNode(_0x1c915c));
                    }
                }
            }
        }
    }
    return _0x5ea8f4;
}
function xa(_0x561ce6, _0x205afd, _0x5369ff = null) {
    ;
    for (let _0x36fb1d = 0, _0x41dd60 = _0x205afd.length; _0x36fb1d < _0x41dd60; _0x36fb1d++) {
        _0x561ce6.insertBefore(_0x205afd[_0x36fb1d], _0x5369ff);
    }
}
function qt(_0x4aebdf, _0x1d30f6, _0x164912, _0x493acd) {
    ;
    if (_0x164912 === void 0) {
        return _0x4aebdf.textContent = '';
    }
    const _0xcb2fb3 = _0x493acd || document.createTextNode('');
    if (_0x1d30f6.length) {
        let _0x441ce9 = false;
        for (let _0x2c7c1f = _0x1d30f6.length - 1; _0x2c7c1f >= 0; _0x2c7c1f--) {
            const _0x465f8c = _0x1d30f6[_0x2c7c1f];
            if (_0xcb2fb3 !== _0x465f8c) {
                const _0x450c53 = _0x465f8c.parentNode === _0x4aebdf;
                !_0x441ce9 && !_0x2c7c1f ? _0x450c53 ? _0x4aebdf.replaceChild(_0xcb2fb3, _0x465f8c) : _0x4aebdf.insertBefore(_0xcb2fb3, _0x164912) : _0x450c53 && _0x465f8c.remove();
            } else {
                _0x441ce9 = true;
            }
        }
    } else {
        _0x4aebdf.insertBefore(_0xcb2fb3, _0x164912);
    }
    return [_0xcb2fb3];
}
const $h = 'http://www.w3.org/2000/svg';
function Lc(_0x3e41e6, _0x5aefdc = false) {
    ;
    return _0x5aefdc ? document.createElementNS($h, _0x3e41e6) : document.createElement(_0x3e41e6);
}
function R3(_0x362b9b) {
    const {useShadow: _0x2a1aa7} = _0x362b9b, _0x3a5f67 = document.createTextNode(''), _0x41cad8 = () => _0x362b9b.mount || document.body, _0x1d0c7c = fo();
    let _0x4a1dbc, _0x354735 = !!B1.context;
    const _0x3d841b = {};
    return _0x3d841b.render = !_0x354735, (rt(() => {
        ;
        _0x4a1dbc || (_0x4a1dbc = no(_0x1d0c7c, () => Be(() => _0x362b9b.children)));
        const _0xe5615e = _0x41cad8();
        if (_0xe5615e instanceof HTMLHeadElement) {
            const [_0x5441c1, _0xe4c52f] = ke(false), _0x4280db = () => _0xe4c52f(true);
            vt(_0x1c370d => bi(_0xe5615e, () => _0x5441c1() ? _0x1c370d() : _0x4a1dbc(), null));
            is(_0x4280db);
            ;
        } else {
            const _0xa60441 = { mode: 'open' };
            ;
            const _0x26b899 = Lc(_0x362b9b.isSVG ? 'g' : 'div', _0x362b9b.isSVG), _0x4c1181 = _0x2a1aa7 && _0x26b899.attachShadow ? _0x26b899.attachShadow(_0xa60441) : _0x26b899, _0x32c647 = {
                    get: function () {
                        ;
                        return _0x3a5f67.parentNode;
                    },
                    configurable: true
                };
            ;
            ;
            Object.defineProperty(_0x26b899, '_$host', _0x32c647);
            bi(_0x4c1181, _0x4a1dbc);
            _0xe5615e.appendChild(_0x26b899);
            _0x362b9b.ref && _0x362b9b.ref(_0x26b899);
            is(() => _0xe5615e.removeChild(_0x26b899));
            ;
            ;
        }
    }, void 0, _0x3d841b), _0x3a5f67);
}
function O3(_0x5318a8) {
    const [_0x39ef9b, _0x57cf55] = lo(_0x5318a8, ['component']), _0x5ed55d = Be(() => _0x39ef9b.component);
    return Be(() => {
        const _0x4be62c = _0x5ed55d();
        switch (typeof _0x4be62c) {
        case 'function':
            return he(() => _0x4be62c(_0x57cf55));
        case 'string':
            const _0x17d81d = Ih.has(_0x4be62c), _0x5b7af8 = Lc(_0x4be62c, _0x17d81d);
            return Vh(_0x5b7af8, _0x57cf55, _0x17d81d), _0x5b7af8;
        }
    });
}
function Yh(_0x3f86c8) {
    ;
    return Array.from(_0x3f86c8.childNodes).map(_0x33d03d => _0x33d03d.nodeType === _0x33d03d.TEXT_NODE ? Xn(_0x33d03d.textContent) : _0x33d03d.outerHTML).join('');
}
function Kh(_0x1c242b, _0x255237) {
    ;
    return _0x1c242b.closest('[' + _0x255237 + ']');
}
function Jh(_0x3e4240, _0x25f0e1) {
    return _0x3e4240.closest(_0x25f0e1);
}
function Zf(_0x1a879d, _0x575be3) {
    ;
    if (!_0x1a879d) {
        return null;
    }
    if (_0x1a879d.parentElement === _0x575be3) {
        return _0x1a879d;
    }
    for (; _0x1a879d.parentElement;) {
        if (_0x1a879d = _0x1a879d.parentElement, _0x1a879d.parentElement === _0x575be3) {
            return _0x1a879d;
        }
    }
    return null;
}
function xc(_0x1e91c1, _0x47ae88) {
    const _0x998189 = document.getSelection(), _0x37c01f = _0x998189.focusNode, _0x1e2d10 = _0x998189.focusOffset, _0x555545 = {};
    return _0x555545.selection = _0x998189, !Zf(_0x37c01f, _0x1e91c1) && _0x37c01f !== _0x1e91c1 ? _0x555545 : {
        ...Xh(_0x1e91c1, _0x37c01f, _0x1e2d10),
        'selection': _0x998189
    };
}
function Xh(_0x32068c, _0x1a7504, _0x3b3531) {
    ;
    if (_0x1a7504 === _0x32068c) {
        const _0x37674f = _0x32068c.childNodes, _0x4cd28e = _0x37674f.length;
        _0x4cd28e && _0x3b3531 >= _0x4cd28e ? (_0x1a7504 = _0x37674f[_0x4cd28e - 1], _0x3b3531 = (_0x1a7504.textContent || _0x1a7504.alt || '').length) : (_0x1a7504 = _0x37674f[_0x3b3531], _0x3b3531 = 0);
    }
    const _0x1b5193 = {};
    return _0x1b5193.node = _0x1a7504, _0x1b5193.offset = _0x3b3531, _0x1b5193;
}
const Qh = new Set([
    'messageEntityBold',
    'messageEntityItalic',
    'messageEntityCode',
    'messageEntityPre',
    'messageEntityUnderline',
    'messageEntityStrike',
    'messageEntityBlockquote',
    'messageEntitySpoiler'
]);
function Zh(_0x5b944e) {
    ;
    for (let _0x4308e8 = 0; _0x4308e8 < _0x5b944e.length; ++_0x4308e8) {
        const _0x350513 = _0x5b944e[_0x4308e8];
        let _0x51fde2 = -1;
        do
            if (_0x51fde2 = _0x5b944e.findIndex((_0x4799e5, _0x367b67) => Qh.has(_0x4799e5['_']) && _0x367b67 !== _0x4308e8 && _0x4799e5['_'] === _0x350513['_'] && _0x4799e5.offset - _0x350513.length === _0x350513.offset), _0x51fde2 !== -1) {
                const _0x411192 = _0x5b944e[_0x51fde2];
                _0x350513.length += _0x411192.length;
                _0x5b944e.splice(_0x51fde2, 1);
                ;
            }
        while (_0x51fde2 !== -1);
    }
}
function Mc(_0x4fff62) {
    ;
    _0x4fff62.sort((_0x6dfd1d, _0x6aa48e) => _0x6dfd1d.offset - _0x6aa48e.offset || _0x6aa48e.length - _0x6dfd1d.length);
}
const a0_0x118bd3 = {};
a0_0x118bd3.match = '[style*="bold"], [style*="font-weight: 700"], [style*="font-weight: 600"], [style*="font-weight:700"], [style*="font-weight:600"], b, strong';
a0_0x118bd3.entityName = 'messageEntityBold';
;
const a0_0x22ed93 = {};
a0_0x22ed93.match = '[style*="underline"], u, ins';
a0_0x22ed93.entityName = 'messageEntityUnderline';
;
const a0_0x499260 = {};
a0_0x499260.match = '[style*="italic"], i, em';
a0_0x499260.entityName = 'messageEntityItalic';
;
const a0_0xa94186 = {};
a0_0xa94186.match = '[style*="monospace"], [face*="monospace"], pre';
a0_0xa94186.entityName = 'messageEntityCode';
;
const a0_0xea4150 = {};
a0_0xea4150.match = '[style*="line-through"], [style*="strikethrough"], strike, del, s';
a0_0xea4150.entityName = 'messageEntityStrike';
;
const a0_0x2512a5 = {};
a0_0x2512a5.match = 'A:not(.follow)';
a0_0x2512a5.entityName = 'messageEntityTextUrl';
;
const a0_0x4f33fb = {};
a0_0x4f33fb.match = 'A.follow';
a0_0x4f33fb.entityName = 'messageEntityMentionName';
;
const a0_0x521ae6 = {};
a0_0x521ae6.match = '[style*="spoiler"]';
a0_0x521ae6.entityName = 'messageEntitySpoiler';
;
const a0_0x56ac8e = {};
a0_0x56ac8e.match = '[style*="quote"], .quote';
a0_0x56ac8e.entityName = 'messageEntityBlockquote';
;
const a0_0x3acdf7 = {};
a0_0x3acdf7.bold = a0_0x118bd3;
a0_0x3acdf7.underline = a0_0x22ed93;
a0_0x3acdf7.italic = a0_0x499260;
a0_0x3acdf7.monospace = a0_0xa94186;
a0_0x3acdf7.strikethrough = a0_0xea4150;
a0_0x3acdf7.link = a0_0x2512a5;
a0_0x3acdf7.mentionName = a0_0x4f33fb;
a0_0x3acdf7.spoiler = a0_0x521ae6;
a0_0x3acdf7.quote = a0_0x56ac8e;
;
const en = a0_0x3acdf7, e2 = '[style*="table-cell"], th, td', t2 = new Set([
        'DIV',
        'P',
        'BR',
        'LI',
        'SECTION',
        'H6',
        'H5',
        'H4',
        'H3',
        'H2',
        'H1',
        'TR',
        'OL',
        'UL',
        'BLOCKQUOTE'
    ]), s2 = new RegExp(V, 'g'), _t = '\x01';
function Ma(_0x5d8455, _0x1418e1, _0x2390db, _0x48001f) {
    const _0x596d6a = _0x5d8455.parentElement;
    for (const _0xcf9aac in en) {
        const _0x2ca36d = en[_0xcf9aac], _0x465be0 = _0x596d6a.closest(_0x2ca36d.match + ', [contenteditable="true"]');
        if (_0x465be0?.getAttribute('contenteditable') !== null) {
            continue;
        }
        let _0x3b5e4a;
        _0x2ca36d.entityName === 'messageEntityCode' && (_0x3b5e4a = _0x596d6a.closest('[data-language]')) ? _0x2390db.push({
            '_': 'messageEntityPre',
            'language': _0x3b5e4a.dataset.language || '',
            'offset': _0x48001f.offset,
            'length': _0x1418e1.length
        }) : _0x2ca36d.entityName === 'messageEntityTextUrl' ? _0x2390db.push({
            '_': _0x2ca36d.entityName,
            'url': _0x465be0.href,
            'offset': _0x48001f.offset,
            'length': _0x1418e1.length
        }) : _0x2ca36d.entityName === 'messageEntityMentionName' ? _0x2390db.push({
            '_': _0x2ca36d.entityName,
            'offset': _0x48001f.offset,
            'length': _0x1418e1.length,
            'user_id': _0x465be0.dataset.follow.toUserId()
        }) : _0x2ca36d.entityName === 'messageEntityBlockquote' ? _0x2390db.push({
            '_': _0x2ca36d.entityName,
            'pFlags': { 'collapsed': !!_0x465be0.dataset.collapsed || void 0 },
            'offset': _0x48001f.offset,
            'length': _0x1418e1.length
        }) : _0x2390db.push({
            '_': _0x2ca36d.entityName,
            'offset': _0x48001f.offset,
            'length': _0x1418e1.length
        });
    }
}
function Ia(_0x20b636) {
    const {length: _0x584f58} = _0x20b636;
    return !_0x584f58 || _0x20b636[_0x584f58 - 1] === _t && _0x584f58 === _t.length;
}
const a0_0x4de111 = {};
a0_0x4de111.offset = 0;
function vi(_0xb52c41, _0x4e3545, _0x1b1906, _0x2d3d13, _0x3d6b13, _0x4e0002, _0x303142 = a0_0x4de111) {
    ;
    if (_0xb52c41.nodeType === _0xb52c41.TEXT_NODE) {
        let _0x2fc9ea = _0xb52c41.nodeValue;
        _0x2fc9ea = _0x2fc9ea.replace(s2, '');
        _0x2fc9ea ? _0x2d3d13 === _0xb52c41 ? _0x1b1906.push(_0x2fc9ea.substr(0, _0x3d6b13) + _t + _0x2fc9ea.substr(_0x3d6b13)) : _0x1b1906.push(_0x2fc9ea) : _0x2d3d13 === _0xb52c41 && _0x1b1906.push(_t);
        _0x4e0002 && _0x2fc9ea.length && _0xb52c41.parentNode && Ma(_0xb52c41, _0x2fc9ea, _0x4e0002, _0x303142);
        _0x303142.offset += _0x2fc9ea.length;
        ;
        return;
    }
    if (_0xb52c41.nodeType !== _0xb52c41.ELEMENT_NODE) {
        return;
    }
    const _0x553e57 = () => {
            ;
            _0x4e3545.push(_0x1b1906.join(''));
            _0x1b1906.length = 0;
            ++_0x303142.offset;
            ;
        }, _0x5096b2 = _0x2d3d13 === _0xb52c41, _0x228229 = _0xb52c41.matches(en.quote.match), _0x2ed641 = t2.has(_0xb52c41.tagName) || _0x228229;
    if (_0x2ed641 && (_0x1b1906.length && _0x1b1906[_0x1b1906.length - 1].slice(-1) !== '\n' || _0xb52c41.tagName === 'BR')) {
        _0x553e57();
    } else {
        const _0x5aa29f = _0xb52c41.dataset.stickerEmoji || _0xb52c41.alt, _0x239d31 = _0xb52c41.dataset.stickerEmoji;
        _0x5aa29f && _0x4e0002 && Ma(_0xb52c41, _0x5aa29f, _0x4e0002, _0x303142);
        _0x239d31 && _0x4e0002 && _0x4e0002.push({
            '_': 'messageEntityCustomEmoji',
            'document_id': _0xb52c41.dataset.docId,
            'offset': _0x303142.offset,
            'length': _0x5aa29f.length
        });
        _0x5aa29f && (_0x1b1906.push(_0x5aa29f), _0x303142.offset += _0x5aa29f.length);
        ;
    }
    _0x5096b2 && !_0x3d6b13 && _0x1b1906.push(_t);
    const _0x140cea = _0xb52c41.matches(e2), _0x2c7263 = _0x4e0002?.length;
    let _0xc95f59 = true;
    _0x228229 && (_0x303142.isInQuote = true);
    let _0x14f018 = _0xb52c41.firstChild;
    for (; _0x14f018;) {
        vi(_0x14f018, _0x4e3545, _0x1b1906, _0x2d3d13, _0x3d6b13, _0x4e0002, _0x303142);
        _0x14f018 = _0x14f018.nextSibling;
        Ia(_0x1b1906) || (_0xc95f59 = false);
        ;
    }
    if (_0x228229) {
        const _0x3dd72e = _0x1b1906[_0x1b1906.length - 1];
        _0x3dd72e?.endsWith('\n') && (_0x1b1906[_0x1b1906.length - 1] = _0x3dd72e.slice(0, -1), _0x303142.offset -= 1);
        _0x303142.isInQuote = false;
        ;
    }
    if (_0xc95f59 && _0xb52c41.textContent?.replace(/[\r\n]/g, '') && (_0xc95f59 = false), _0x5096b2 && _0x3d6b13 && _0x1b1906.push(_t), _0x140cea && _0xb52c41.nextSibling && !Ia(_0x1b1906) && (_0x1b1906.push(' '), ++_0x303142.offset, _0x2c7263 !== void 0)) {
        for (let _0x438d5f = _0x2c7263, _0x563556 = _0x4e0002.length; _0x438d5f < _0x563556; ++_0x438d5f) {
            ++_0x4e0002[_0x438d5f].length;
        }
    }
    _0x2ed641 && !_0xc95f59 && _0x553e57();
    !_0xc95f59 && _0xb52c41.tagName === 'P' && _0xb52c41.nextSibling && (_0x4e3545.push(''), ++_0x303142.offset);
    ;
}
function Ic(_0x250c9d) {
    const _0x264af1 = window.getSelection();
    let _0xc77c2, _0x4b2917;
    if (_0x264af1?.rangeCount) {
        const _0x256151 = _0x264af1.getRangeAt(0), _0x4e6711 = _0x256151.startOffset;
        if (_0x256151.startContainer && _0x256151.startContainer == _0x256151.endContainer && _0x4e6711 == _0x256151.endOffset) {
            const _0x392cf5 = _0x4e6711 - 1, _0xbf0e58 = _0x250c9d.childNodes;
            if (_0x256151.startContainer === _0x250c9d && _0xbf0e58[_0x392cf5]) {
                _0xc77c2 = _0xbf0e58[_0x392cf5];
                _0x4b2917 = 0;
                ;
                for (let _0x3b4068 = 0; _0x3b4068 < _0x256151.endOffset; ++_0x3b4068) {
                    const _0x4a1f84 = _0xbf0e58[_0x3b4068], _0x5aee3a = _0x4a1f84.nodeValue || _0x4a1f84.alt;
                    _0x5aee3a && (_0x4b2917 += _0x5aee3a.length);
                }
            } else {
                _0xc77c2 = _0x256151.startContainer;
                _0x4b2917 = _0x4e6711;
                ;
            }
        }
    }
    const _0xbf8bbf = {};
    return _0xbf8bbf.node = _0xc77c2, _0xbf8bbf.offset = _0x4b2917, _0xbf8bbf;
}
function tn(_0x15333e, _0x5a04f3 = true, _0x86b616 = true) {
    const _0x2ff6f6 = { offset: 0 };
    ;
    const _0x44dcc8 = [], _0x4cdb35 = [], {
            node: _0x235903,
            offset: _0x369d73
        } = !(_0x15333e instanceof DocumentFragment) && _0x86b616 && Ic(_0x15333e), _0x165edf = _0x5a04f3 ? [] : void 0, _0x4a3fa0 = _0x2ff6f6;
    if (_0x15333e instanceof DocumentFragment) {
        let _0x29a2d8 = _0x15333e.firstChild;
        for (; _0x29a2d8;) {
            vi(_0x29a2d8, _0x44dcc8, _0x4cdb35, _0x235903, _0x369d73, _0x165edf, _0x4a3fa0);
            _0x29a2d8 = _0x29a2d8.nextSibling;
            ;
        }
    } else {
        vi(_0x15333e, _0x44dcc8, _0x4cdb35, _0x235903, _0x369d73, _0x165edf, _0x4a3fa0);
    }
    _0x4cdb35.length && _0x44dcc8.push(_0x4cdb35.join(''));
    let _0x5df1be = _0x44dcc8.join('\n');
    const _0x2b4e4b = _0x5df1be.indexOf(_t);
    return _0x2b4e4b !== -1 && (_0x5df1be = _0x5df1be.substr(0, _0x2b4e4b) + _0x5df1be.substr(_0x2b4e4b + 1)), _0x5df1be = _0x5df1be.replace(/\u00A0/g, ' '), _0x165edf?.length && (Zh(_0x165edf), Mc(_0x165edf)), {
        'value': _0x5df1be,
        'entities': _0x165edf,
        'caretPos': _0x2b4e4b
    };
}
N.getCaretPos = Ic;
N.getRichValueWithCaret = tn;
;
function f2(_0x45db6b, _0x247e58) {
    ;
    let _0x2111b1;
    if (_0x45db6b.isContentEditable || _0x45db6b.tagName !== 'INPUT') {
        if (_0x45db6b.querySelector('.emoji, .custom-emoji, .custom-emoji-placeholder')) {
            return false;
        }
        _0x2111b1 = _0x45db6b.textContent;
    } else {
        _0x2111b1 = _0x45db6b.value;
    }
    return _0x247e58 ? !_0x2111b1 : !_0x2111b1.trim();
}
class Rc {
    constructor() {
        this.listeners = new Set();
    }
    ['add'](_0x536e45) {
        ;
        return (_0x3f350f, _0x193237, _0x2e3e54) => {
            const _0x538d1c = {
                element: _0x536e45,
                event: _0x3f350f,
                callback: _0x193237,
                options: _0x2e3e54
            };
            ;
            ;
            ;
            ;
            ;
            const _0x2d585f = _0x538d1c;
            return this.addManual(_0x2d585f), _0x2d585f;
        };
    }
    ['addManual'](_0x93e84a) {
        ;
        _0x93e84a.element.addEventListener(_0x93e84a.event, _0x93e84a.callback, _0x93e84a.options);
        _0x93e84a.options?.once && (_0x93e84a.onceCallback = () => {
            ;
            this.remove(_0x93e84a);
            _0x93e84a.onceFired = true;
            ;
        }, _0x93e84a.element.addEventListener(_0x93e84a.event, _0x93e84a.onceCallback, _0x93e84a.options));
        this.listeners.add(_0x93e84a);
        ;
    }
    ['remove'](_0x59501d) {
        ;
        _0x59501d.onceFired || (_0x59501d.element.removeEventListener(_0x59501d.event, _0x59501d.callback, _0x59501d.options), _0x59501d.onceCallback && _0x59501d.element.removeEventListener(_0x59501d.event, _0x59501d.onceCallback, _0x59501d.options));
        this.listeners.delete(_0x59501d);
        ;
    }
    ['removeManual'](_0x49b948, _0x50208a, _0x2b5671, _0x4e09cb) {
        ;
        let _0x280eec;
        for (const _0x39c2ad of this.listeners)
            if (_0x39c2ad.element === _0x49b948 && _0x39c2ad.event === _0x50208a && _0x39c2ad.callback === _0x2b5671 && _0x39c2ad.options === _0x4e09cb) {
                _0x280eec = _0x39c2ad;
                break;
            }
        _0x280eec && this.remove(_0x280eec);
    }
    ['removeAll']() {
        ;
        this.listeners.forEach(_0x2f67a3 => {
            this.remove(_0x2f67a3);
        });
    }
}
function Xt(_0x1db927, _0x1d14b0) {
    ;
    if (!_0x1db927?.parentNode) {
        return -1;
    }
    if (_0x1d14b0) {
        return Array.from(_0x1db927.parentNode.childNodes).indexOf(_0x1db927);
    }
    let _0x52b088 = 0;
    for (; (_0x1db927 = _0x1db927.previousElementSibling) !== null;) {
        ++_0x52b088;
    }
    return _0x52b088;
}
function Ei(_0x221b77, _0x530f19, _0x16786b, _0x4d31c8) {
    ;
    let _0x14adaa;
    if (_0x221b77 === _0x16786b) {
        _0x14adaa = _0x530f19 - _0x4d31c8;
    } else {
        if (_0x221b77.parentElement === _0x16786b.parentElement) {
            _0x14adaa = Xt(_0x221b77, true) - Xt(_0x16786b, true);
        } else {
            const _0x3129e6 = [];
            let _0x4af689 = _0x221b77.parentElement;
            do
                _0x3129e6.push(_0x4af689);
            while (_0x4af689 = _0x4af689.parentElement);
            _0x4af689 = _0x16786b.parentElement;
            do
                if (_0x3129e6.includes(_0x4af689)) {
                    break;
                }
            while (_0x4af689 = _0x4af689.parentElement);
            const _0x42e42c = _0x4af689;
            _0x221b77 = Zf(_0x221b77, _0x42e42c);
            _0x16786b = Zf(_0x16786b, _0x42e42c);
            _0x14adaa = Xt(_0x221b77, true) - Xt(_0x16786b, true);
            ;
        }
    }
    return Dt(_0x14adaa, -1, 1);
}
window.compareNodes = Ei;
function Oc(_0x598d6f, _0x5f254b = false, _0x530e6f = true) {
    ;
    if (!(Fe && (!_0x5f254b || document.activeElement.tagName !== 'INPUT' && !document.activeElement.isContentEditable))) {
        if (_0x530e6f && _0x598d6f.focus(), _0x598d6f instanceof HTMLInputElement) {
            const _0x264588 = _0x598d6f.value.length;
            _0x598d6f.selectionStart = _0x264588;
            _0x598d6f.selectionEnd = _0x264588;
            ;
        } else {
            const _0x1ed234 = document.createRange();
            _0x1ed234.selectNodeContents(_0x598d6f);
            _0x1ed234.collapse(false);
            ;
            const _0x19004b = window.getSelection();
            _0x19004b.removeAllRanges();
            _0x19004b.addRange(_0x1ed234);
            ;
        }
    }
}
window.placeCaretAtEnd = Oc;
const Ra = new RegExp('[^' + V + ']');
class vn {
    constructor() {
        ;
        this.saveSelectionOnChange = _0x4c7025 => {
            const _0x365451 = document.activeElement;
            this.saveRangeForElement(_0x365451);
        };
        this.onFocusOut = _0x4a129a => {
            ;
            this.lastNode = this.lastOffset = void 0;
        };
        this.onSelectionChange = _0x20133c => {
            const {input: _0x374ba3} = this;
            if (!_0x374ba3) {
                this.setSelectionClassName(document.getSelection());
                return;
            }
            let _0xf00c23 = this.getCaretPosN();
            do {
                const {
                    node: _0x4a846d,
                    offset: _0x6d2377,
                    selection: _0x29724a,
                    move: _0x34e39e
                } = _0xf00c23;
                if (_0x4a846d?.nodeValue !== V || !this.lastNode) {
                    break;
                }
                const _0x2213f4 = Ei(_0x4a846d, _0x6d2377, this.lastNode, this.lastOffset) < 0;
                _0x2213f4 !== void 0 && (_0x29724a.isCollapsed ? this.superMove(_0x374ba3, _0xf00c23, _0x2213f4, true) : _0x29724a.modify(_0x29724a.isCollapsed ? 'move' : 'extend', _0x2213f4 ? 'backward' : 'forward', 'character'));
                this.log('selectionchange', _0x4a846d, _0x6d2377, this.lastNode, this.lastOffset, _0x4a846d === this.lastNode, Xt(this.getFiller(_0x4a846d)), Xt(this.getFiller(this.lastNode)), _0x2213f4, _0x29724a, document.getSelection(), document.getSelection().getRangeAt(0), _0x4a846d?.parentNode, this.lastNode?.parentNode);
                _0xf00c23 = this.getCaretPosN();
                this.lastNode = _0x4a846d;
                this.lastOffset = _0x6d2377;
                ;
                break;
            } while (true);
            this.lastNode = this.lastOffset = void 0;
            this.setSelectionClassName(_0xf00c23.selection, _0x374ba3);
            ;
        };
        this.onBeforeInput = _0x24272d => {
            const {
                input: _0x233131,
                log: _0x5c97f0
            } = this;
            if (!_0x233131) {
                return;
            }
            const _0x4cfa8f = this.addInputCallback.bind(this, _0x233131), _0x402bb3 = this.getCaretPosN();
            let {
                node: _0x33ac5b,
                offset: _0x8a037b,
                selection: _0x525a09,
                move: _0x17c5ca
            } = _0x402bb3;
            if (_0x5c97f0('beforeinput', _0x24272d, _0x33ac5b, _0x8a037b, _0x525a09, _0x402bb3), this.lastNode = this.lastOffset = void 0, _0x24272d.inputType.startsWith('delete')) {
                if (_0x4cfa8f(() => {
                        ;
                        this.processEmptiedFillers(_0x233131);
                        this.removeExtraBOMs(_0x233131);
                        this.fixInsertedLineBreaks(_0x233131);
                        ;
                    }), _0x33ac5b?.nodeValue === V && _0x525a09.isCollapsed && _0x24272d.inputType.includes('deleteContent')) {
                    const _0x33e963 = _0x24272d.inputType.includes('Backward'), _0x47525a = _0x8a037b === V.length && _0x33e963 || !_0x8a037b && !_0x33e963;
                    this.superMove(_0x233131, _0x402bb3, _0x33e963, _0x47525a);
                }
            } else {
                if (_0x24272d.inputType.startsWith('insert')) {
                    if (_0x33ac5b?.classList?.contains('input-something')) {
                        _0x33ac5b = _0x33ac5b.previousSibling.firstChild;
                        const _0x426b66 = _0x525a09.getRangeAt(0);
                        _0x426b66.setStart(_0x33ac5b, 0);
                        _0x426b66.setEnd(_0x33ac5b, 0);
                        _0x426b66.collapse(true);
                        ;
                        const _0x23be2b = this.getCaretPosN();
                        _0x33ac5b = _0x23be2b.node;
                        _0x525a09 = _0x23be2b.selection;
                        _0x8a037b = _0x23be2b.offset;
                        ;
                    }
                    if (_0x33ac5b && _0x33ac5b.textContent === V && _0x8a037b === V.length) {
                        _0x525a09.modify('move', 'backward', 'character');
                        const _0x43f032 = this.getCaretPosN();
                        _0x33ac5b = _0x43f032.node;
                        _0x525a09 = _0x43f032.selection;
                        _0x8a037b = _0x43f032.offset;
                        ;
                    }
                    _0x24272d.inputType;
                    {
                        _0x33ac5b && _0x33ac5b.nodeType === _0x33ac5b.ELEMENT_NODE && (_0x33ac5b = _0x33ac5b.firstChild, _0x5c97f0.warn('fixing focus on span'));
                        const _0x4aa267 = _0x33ac5b?.nodeValue === V;
                        if (_0x5c97f0('inserting line break', _0x4aa267, _0x33ac5b, '"' + _0x33ac5b?.nodeValue + '"', _0x33ac5b?.parentElement ? Array.from(_0x33ac5b.parentElement.childNodes).slice() : []), _0x4aa267) {
                            const _0x4e4743 = _0x33ac5b.parentElement;
                            _0x4e4743.classList.replace('input-filler', 'input-filler-text');
                            _0x4e4743.childNodes.length;
                            _0x4cfa8f(() => {
                                ;
                                _0x4e4743.childNodes.length > 1 ? (_0x5c97f0('inserting line break, remove'), _0x33ac5b = Array.from(_0x4e4743.childNodes).find(_0x1255da => _0x1255da.nodeValue === V), _0x4e4743.t = _0x33ac5b) : _0x33ac5b.nodeValue !== V && (_0x5c97f0('inserting line break, deleteData'), _0x33ac5b.deleteData(_0x33ac5b.nodeValue.indexOf(V), V.length));
                                this.fixInsertedLineBreaks(_0x233131);
                                ;
                            });
                            ;
                        } else {
                            _0x24272d.inputType === 'insertLineBreak' && _0x4cfa8f(() => {
                                ;
                                this.fixInsertedLineBreaks(_0x233131);
                            });
                        }
                    }
                    return;
                } else {
                    _0x24272d.inputType === 'historyUndo' ? _0x4cfa8f(() => {
                        ;
                        this.processFilledFillers(_0x233131);
                        this.processEmptiedFillers(_0x233131);
                        this.removeExtraBOMs(_0x233131);
                        this.removeEmptyTextNodes(_0x233131);
                        this.fixBuggedCaret();
                        ;
                    }) : _0x24272d.inputType === 'historyRedo' && _0x4cfa8f(() => {
                        ;
                        this.processFilledFillers(_0x233131);
                        this.processEmptiedFillers(_0x233131);
                        _0x233131.querySelectorAll('.input-something:not([contenteditable])').forEach(_0x1c699b => {
                            ;
                            _0x1c699b.contentEditable = 'false';
                        });
                        this.removeExtraBOMs(_0x233131);
                        this.fixBuggedCaret();
                        ;
                    });
                }
            }
        };
        this.onKeyDown = _0x376cfb => {
            const _0xc81bfb = _0x376cfb.key;
            if (_0xc81bfb === 'ArrowDown' || _0xc81bfb === 'ArrowUp') {
                this.lastNode = this.lastOffset = void 0;
            } else {
                const {
                    node: _0x20bd89,
                    offset: _0x48595a
                } = this.getCaretPosN();
                this.lastNode = _0x20bd89;
                this.lastOffset = _0x48595a;
                this.lastNode === this.input && (this.lastNode = this.lastOffset = void 0);
                ;
            }
            this.log('keydown', this.lastNode, this.lastNode?.parentNode, this.lastOffset, this.getCaretPosN(), _0x376cfb);
        };
        this.log = Q('RICH-INPUT');
        this.listenerSetter = new Rc();
        this.savedRanges = new WeakMap();
        this.listenerSetter.add(document)('selectionchange', this.saveSelectionOnChange);
        ;
    }
    get ['input']() {
        const _0x314ed0 = document.getSelection(), {anchorNode: _0x31f866} = _0x314ed0;
        if (_0x31f866) {
            return (_0x31f866.closest ? _0x31f866 : _0x31f866.parentElement).closest('[contenteditable="true"]');
        }
    }
    ['saveRangeForElement'](_0x35f46d) {
        ;
        _0x35f46d && (_0x35f46d.isContentEditable || _0x35f46d.tagName === 'INPUT') && document.getSelection().rangeCount && this.savedRanges.set(_0x35f46d, document.getSelection().getRangeAt(0));
    }
    ['findPreviousSmthIndex'](_0x4a9281, _0x1e765f, _0x5c0d3c) {
        const _0x505f22 = Array.from(_0x5c0d3c ?? _0x4a9281.querySelectorAll('.input-something')), _0x3106ad = _0x505f22.findIndex(_0x301929 => Ei(_0x301929, 0, _0x1e765f, 0) >= 0);
        return _0x3106ad === -1 ? _0x505f22.length - 1 : Math.max(0, _0x3106ad - 1);
    }
    ['superMove'](_0x90cb84, _0x5e84cf, _0x256f07, _0x363ea) {
        const {
                node: _0x36da87,
                offset: _0x5a0ac8,
                move: _0x484679
            } = _0x5e84cf, _0x335999 = _0x90cb84.querySelectorAll('.input-something'), _0x16bb7f = this.findPreviousSmthIndex(_0x90cb84, _0x36da87, _0x335999), _0x1202cc = document.createRange();
        _0x1202cc[_0x256f07 ? 'setEnd' : 'setStart'](_0x36da87, _0x5a0ac8);
        _0x363ea && _0x484679(_0x256f07);
        ;
        const _0x3d3c65 = this.getCaretPosN();
        if (_0x3d3c65.node?.nodeValue === V && (!_0x363ea || _0x36da87 === this.lastNode)) {
            const _0x496fdf = this.findPreviousSmthIndex(_0x90cb84, _0x3d3c65.node, _0x335999);
            let _0x8901d9 = !_0x363ea;
            do {
                const _0x30cf38 = this.getCaretPosN(), _0x45de9c = this.findPreviousSmthIndex(_0x90cb84, _0x30cf38.node, _0x335999);
                _0x1202cc[_0x256f07 ? 'setStart' : 'setEnd'](_0x30cf38.node, _0x30cf38.offset);
                const _0x4ce6a1 = _0x1202cc.toString(), _0xa39570 = !Ra.test(_0x4ce6a1);
                if (this.log('test cursor', _0x4ce6a1, _0xa39570, _0x496fdf, _0x45de9c), _0xa39570 && _0x30cf38.node?.nodeValue === V && _0x45de9c === _0x496fdf && (_0x45de9c || _0x30cf38.offset) && (_0x45de9c < _0x335999.length - 1 || _0x30cf38.offset < V.length)) {
                    _0x484679(_0x256f07);
                    _0x8901d9 = true;
                    ;
                } else {
                    if (_0x8901d9) {
                        (!this.getFiller(_0x36da87).classList.contains('input-filler-text') && _0x496fdf !== _0x16bb7f || _0x30cf38.offset === V.length) && _0x484679(!_0x256f07);
                        break;
                    } else {
                        break;
                    }
                }
            } while (true);
        }
    }
    ['restoreSavedRange'](_0x386ab9) {
        const _0x3a84e4 = this.getSavedRange(_0x386ab9);
        if (!_0x3a84e4) {
            return false;
        }
        const _0x48ec7e = window.getSelection();
        return _0x48ec7e.removeAllRanges(), _0x48ec7e.addRange(_0x3a84e4), true;
    }
    ['getSavedRange'](_0x1cc72c) {
        ;
        return this.savedRanges.get(_0x1cc72c);
    }
    ['makeFocused'](_0x5d7c4c) {
        ;
        document.activeElement !== _0x5d7c4c && !this.restoreSavedRange(_0x5d7c4c) && Oc(_0x5d7c4c, false, false);
    }
    ['fixInsertedLineBreaks'](_0x4a3307) {
        ;
        _0x4a3307.querySelectorAll('br').forEach(_0x4a23e6 => {
            ;
            _0x4a23e6.classList.add('br-not-br');
        });
    }
    ['fixBuggedCaret']() {
        const _0x27de63 = document.getSelection(), _0x122a30 = _0x27de63.getRangeAt(0);
        _0x27de63.removeAllRanges();
        _0x27de63.addRange(_0x122a30);
        ;
    }
    ['addInputCallback'](_0x1038d5, _0x1c6a9b, _0x4f3fdc = true) {
        const _0x258df0 = () => {
            ;
            this.log('input modify callback');
            _0x1c6a9b();
            ;
        };
        _0x4f3fdc && wt ? this.inputCaptureCallbacks.push(_0x258df0) : this.listenerSetter.add(_0x1038d5)('input', _0x258df0, {
            'once': true,
            'capture': _0x4f3fdc
        });
    }
    ['removeExtraBOMs'](_0x5dc49f) {
        const _0x39eb11 = _0x103fbf => _0x103fbf?.classList?.contains('input-something');
        _0x5dc49f.querySelectorAll('.input-filler').forEach(_0x1d511e => {
            const {
                previousSibling: _0x35757e,
                nextSibling: _0x1f923c
            } = _0x1d511e;
            let _0x2173c4 = false;
            !_0x1f923c?.classList?.contains('input-filler') && kc(_0x1f923c) && (_0x2173c4 = _0x39eb11(_0x35757e) || _0x39eb11(_0x1f923c));
            _0x2173c4 || (this.log.warn('removing empty bom node', _0x1d511e), _0x1d511e.remove());
            ;
        });
    }
    ['getFiller'](_0x445c39) {
        ;
        return _0x445c39 && _0x445c39.nodeType === _0x445c39.TEXT_NODE && _0x445c39.parentElement !== this.input ? _0x445c39.parentElement : _0x445c39;
    }
    ['getCaretPosN']() {
        const _0x519d82 = xc(this.input);
        return {
            ..._0x519d82,
            'move': this.move.bind(this, _0x519d82.selection)
        };
    }
    ['removeEmptyTextNodes'](_0x4d4c68) {
        const {log: _0x2efbcf} = this, _0x2b2b21 = document.createTreeWalker(_0x4d4c68, NodeFilter.SHOW_TEXT, { 'acceptNode': _0x36fe3d => _0x36fe3d.parentElement === _0x4d4c68 && !_0x36fe3d.nodeValue ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT });
        let _0xd4807f;
        for (; _0xd4807f = _0x2b2b21.nextNode();) {
            _0x2efbcf.warn('removing empty text node', _0xd4807f);
            _0xd4807f.remove();
            ;
        }
    }
    ['removePossibleBOMSiblings'](_0x187e88, _0x3f128a) {
        ;
        [
            _0x187e88,
            _0x3f128a
        ].forEach(_0x5bcb3b => {
            ;
            _0x5bcb3b?.classList?.contains('input-filler') && _0x5bcb3b.remove();
        });
    }
    ['removePossibleBOMSiblingsByNode'](_0x213789) {
        const {
            previousSibling: _0x3e9f28,
            nextSibling: _0x23aabd
        } = _0x213789;
        this.removePossibleBOMSiblings(_0x3e9f28, _0x23aabd);
    }
    ['processEmptiedFillers'](_0x5a7f0f) {
        ;
        _0x5a7f0f.querySelectorAll('.input-filler-text').forEach(_0x11b462 => {
            ;
            this.removeExtraBOMs(_0x11b462);
            let _0x16921c = true;
            if (_0x11b462.textContent) {
                !Ra.test(_0x11b462.textContent) && !_0x11b462.querySelector('.input-something') ? _0x11b462.classList.replace('input-filler-text', 'input-filler') : _0x16921c = false;
            } else {
                _0x11b462.classList.replace('input-filler-text', 'input-filler');
                const _0x4a5fa1 = Array.from(_0x11b462.childNodes).find(_0x69c06 => _0x69c06.nodeType === _0x69c06.TEXT_NODE);
                _0x4a5fa1 ? _0x4a5fa1.insertData(0, V) : _0x11b462.t?.nodeValue ? _0x11b462.append(_0x11b462.t) : _0x11b462.append(document.createTextNode(V));
            }
            _0x16921c && this.removePossibleBOMSiblingsByNode(_0x11b462);
        });
    }
    ['processFilledFillers'](_0x1d54e6) {
        ;
        _0x1d54e6.querySelectorAll('.input-filler').forEach(_0x209ea8 => {
            ;
            if (_0x209ea8.textContent !== V) {
                _0x209ea8.classList.replace('input-filler', 'input-filler-text');
                const _0xd0bd24 = _0x209ea8.t, _0x53fe30 = Array.from(_0x209ea8.childNodes).find(_0x2f2adc => _0x2f2adc.nodeType === _0x2f2adc.TEXT_NODE && _0x2f2adc.nodeValue.includes(V));
                if (_0x53fe30 && !_0xd0bd24?.nodeValue) {
                    const _0x46704e = _0x53fe30.nodeValue.indexOf(V);
                    _0x46704e !== -1 && _0x53fe30.deleteData(_0x46704e, V.length);
                }
            }
        });
    }
    ['setSelectionClassName'](_0x43c51c, _0x2f77e2) {
        ;
        if (_0x43c51c.rangeCount) {
            const _0x349dba = _0x43c51c.getRangeAt(0);
            _0x2f77e2 ? Array.from(_0x2f77e2.querySelectorAll('.input-selectable')).forEach(_0xc2026 => {
                ;
                _0xc2026.classList.toggle('selection', !_0x349dba.collapsed && _0x349dba.intersectsNode(_0xc2026));
            }) : Array.from(document.querySelectorAll('.input-selectable.selection')).forEach(_0x2e89e8 => _0x2e89e8.classList.remove('selection'));
        }
    }
    ['move'](_0xec76d, _0x3453bd) {
        const {
            focusNode: _0xf0c291,
            focusOffset: _0x2234e2
        } = _0xec76d;
        _0xec76d.modify('extend', _0x3453bd ? 'backward' : 'forward', 'character');
        _0x3453bd ? _0xec76d.collapseToStart() : _0xec76d.collapseToEnd();
        ;
        const {
            focusNode: _0x366e00,
            focusOffset: _0xbc61ac
        } = _0xec76d;
        this.log('moving cursor', _0x3453bd, _0xf0c291, _0xf0c291.nodeType === _0xf0c291.ELEMENT_NODE ? _0xf0c291 : _0xf0c291.parentElement, _0x2234e2, _0x366e00, _0x366e00.nodeType === _0x366e00.ELEMENT_NODE ? _0x366e00 : _0x366e00.parentElement, _0xbc61ac);
    }
    ['prepareApplyingMarkdown']() {
        const {input: _0xe591d5} = this, _0x4dfe15 = _0xe591d5.querySelectorAll('.input-filler'), _0x2ecd3f = _0xe591d5.querySelectorAll('.input-something');
        return _0x2ecd3f.forEach(_0x993e35 => {
            ;
            _0x993e35.contentEditable = 'inherit';
        }), () => {
            ;
            _0x4dfe15.forEach(_0x1322d1 => {
                ;
                _0x1322d1.contentEditable = 'inherit';
            });
            _0x2ecd3f.forEach(_0x2ee3e3 => {
                ;
                _0x2ee3e3.contentEditable = 'false';
            });
            this.removeExtraBOMs(_0xe591d5);
            ;
        };
    }
    static ['getInstance']() {
        ;
        return this.INSTANCE ?? (this.INSTANCE = new vn());
    }
}
function n2(_0x45bfed) {
    const _0xefb149 = document.createRange();
    _0xefb149.selectNodeContents(_0x45bfed);
    const _0x1a9ec5 = window.getSelection();
    _0x1a9ec5.removeAllRanges();
    _0x1a9ec5.addRange(_0xefb149);
    ;
}
const i2 = new Set([
    'messageEntityPre',
    'messageEntityCode'
]);
function r2(_0x30741d, _0x47f161) {
    ;
    let _0x35fd6c = -1, _0x67a9b1 = -1;
    return _0x30741d.find(_0x2ec9ee => {
        const {
            offset: _0x39dc06,
            length: _0x125a2a
        } = _0x2ec9ee;
        return i2.has(_0x2ec9ee['_']) && (_0x35fd6c = _0x39dc06, _0x67a9b1 = _0x35fd6c + _0x125a2a), _0x35fd6c !== -1 && _0x47f161.offset >= _0x35fd6c && _0x47f161.offset < _0x67a9b1 && !R1.has(_0x47f161['_']) ? true : _0x47f161['_'] === _0x2ec9ee['_'] || !Of.has(_0x47f161['_']) && !Of.has(_0x2ec9ee['_']) ? _0x47f161.offset >= _0x39dc06 && _0x47f161.length + _0x47f161.offset <= _0x125a2a + _0x39dc06 : false;
    });
}
function a2(_0x572ff3, _0x13e5b6) {
    ;
    _0x572ff3 = _0x572ff3.slice();
    const _0x4556ff = _0x13e5b6.filter(_0x49a384 => !r2(_0x572ff3, _0x49a384));
    _0x572ff3.push(..._0x4556ff);
    Mc(_0x572ff3);
    ;
    for (let _0x442932 = 0; _0x442932 < _0x572ff3.length; ++_0x442932) {
        let _0x39a8ca = _0x572ff3[_0x442932];
        if (_0x39a8ca['_'] === 'messageEntityEmoji') {
            const _0x5d62e9 = _0x572ff3[_0x442932 + 1];
            _0x5d62e9 && _0x5d62e9.offset < _0x39a8ca.offset + _0x39a8ca.length && (_0x39a8ca = _0x572ff3[_0x442932] = { ..._0x39a8ca }, _0x39a8ca.length = _0x5d62e9.offset - _0x39a8ca.offset);
        }
    }
    return _0x572ff3;
}
function Nc(_0x149d1c, _0x212425 = {}) {
    ;
    if (!_0x149d1c) {
        return gs('');
    }
    let _0x738c16 = _0x212425.entities;
    const _0x1105d9 = {};
    return _0x1105d9.messageEntityTextUrl = true, _0x1105d9.messageEntityMentionName = true, (_0x738c16 && !I.premium && _0x212425.wrappingForPeerId !== I.myId && (_0x738c16 = _0x738c16.filter(_0x3b6bf9 => _0x3b6bf9['_'] !== 'messageEntityCustomEmoji')), gs(_0x149d1c, {
        ..._0x212425,
        'entities': _0x738c16,
        'noLinks': true,
        'wrappingDraft': true,
        'passEntities': _0x1105d9
    }));
}
async function o2(_0x4abd7a, _0x3654fc, _0x1134f3, _0x57b196) {
    const _0x37fcaf = [], _0x419b8f = _0x1134f3?.some(_0x588de3 => _0x588de3['_'] === 'messageEntityCustomEmoji') ? Uc() : void 0, _0x2b4abf = Nc(_0x3654fc, {
            'entities': _0x1134f3,
            'wrappingForPeerId': _0x57b196,
            'loadPromises': _0x37fcaf,
            'customEmojiRenderer': _0x419b8f
        });
    _0x2b4abf.querySelectorAll('[contenteditable="false"]').forEach(_0x486461 => {
        ;
        _0x486461.contentEditable = 'inherit';
        _0x486461.classList.add('pc');
        ;
    });
    _0x37fcaf.length && await Promise.all(_0x37fcaf);
    _0x2b4abf.querySelectorAll('.input-selectable').forEach(_0x24e20d => {
        ;
        _0x24e20d.prepend(yn(true));
    });
    ;
    const _0x1295ab = Array.from(_0x2b4abf.querySelectorAll('.custom-emoji-placeholder')).map(_0x2c22f7 => (_0x2c22f7.dataset.ces = '1', _0x2c22f7.customEmojiElement)), _0xfba38b = Yh(_0x2b4abf);
    _0x419b8f?.destroy();
    const _0x569882 = xc(_0x4abd7a);
    if (!_0x569882.node) {
        const _0x4643d1 = document.createRange();
        let _0x4ac6c0 = _0x4abd7a.lastChild;
        _0x4ac6c0 || _0x4abd7a.append(_0x4ac6c0 = document.createTextNode(''));
        _0x4643d1.setStartAfter(_0x4ac6c0);
        _0x4643d1.collapse(true);
        _0x569882.selection.removeAllRanges();
        _0x569882.selection.addRange(_0x4643d1);
        ;
    }
    const _0x5bcefd = {
        capture: true,
        once: true,
        passive: false
    };
    ;
    ;
    ;
    _0x4abd7a.addEventListener('input', se, _0x5bcefd);
    window.document.execCommand('insertHTML', false, _0xfba38b);
    Array.from(_0x4abd7a.querySelectorAll('[data-ces]')).forEach((_0x3a16e4, _0x4ad705) => {
        ;
        delete _0x3a16e4.dataset.ces;
        const _0xbfe43f = _0x1295ab[_0x4ad705];
        _0x3a16e4.customEmojiElement = _0xbfe43f;
        _0xbfe43f.placeholder = _0x3a16e4;
        ;
    });
    _0x4abd7a.querySelectorAll('.pc').forEach(_0x23b7e4 => {
        ;
        _0x23b7e4.contentEditable = 'false';
    });
    hn(_0x4abd7a, 'input');
    ;
    ;
}
let wi = () => {
    ;
    document.addEventListener('paste', _0x29b66b => {
        const _0x464c33 = Kh(_0x29b66b.target, 'contenteditable="true"');
        if (!_0x464c33) {
            return;
        }
        const _0x13dfc1 = !!_0x464c33.dataset.noLinebreaks;
        _0x29b66b.preventDefault();
        let _0x5906de, _0x4c57d5, _0xf68408 = (_0x29b66b.originalEvent || _0x29b66b).clipboardData.getData('text/plain').replace(/\r/g, ''), _0xcf6735 = true, _0x290f70 = (_0x29b66b.originalEvent || _0x29b66b).clipboardData.getData('text/html') || _0xf68408;
        const _0xb1fa01 = _0x1f5040 => _0x1f5040['_'] === 'messageEntityEmoji' || _0x1f5040['_'] === 'messageEntityLinebreak' && !_0x13dfc1;
        if (_0x13dfc1) {
            ;
            _0xf68408 = _0xf68408.replace(/[\r\n]/g, '');
            _0x290f70 = _0x290f70.replace(/[\r\n]/g, '');
            ;
        }
        const _0x57395d = (_0x464c33.dataset.peerId || Bi).toPeerId();
        if (_0x290f70.trim()) {
            _0x290f70 = _0x290f70.replace(/<style([\s\S]*)<\/style>/, '');
            _0x290f70 = _0x290f70.replace(/<!--([\s\S]*?)-->/g, '');
            _0x290f70 = _0x290f70.replace('<br class="Apple-interchange-newline">', '');
            _0x290f70 = _0x290f70.replace(/\r/g, '');
            ;
            const _0x4d9998 = _0x290f70.match(/<body>([\s\S]*)<\/body>/);
            _0x4d9998 && (_0x290f70 = _0x4d9998[1].trim());
            const _0x3a5002 = new DOMParser().parseFromString(_0x290f70, 'text/html').body || document.createElement('body');
            let _0x1eaf94 = _0x3a5002.firstChild;
            for (; _0x1eaf94;) {
                const _0x2b0639 = _0x1eaf94.nextSibling;
                _0x1eaf94.nodeType === _0x1eaf94.TEXT_NODE && (_0x1eaf94.nodeValue.trim() || _0x1eaf94.remove());
                _0x1eaf94 = _0x2b0639;
                ;
            }
            const _0x35dfea = tn(_0x3a5002, true, false);
            !!_0x464c33.dataset.canWrapCustomEmojis || !!_0x57395d || (_0x35dfea.entities = _0x35dfea.entities.filter(_0x599e9b => _0x599e9b['_'] !== 'messageEntityCustomEmoji'));
            {
                const _0x46001b = _0x35dfea.value.split('\n');
                let _0x2652ba = 0;
                for (let _0x4e2ceb = 0; _0x4e2ceb < _0x46001b.length; ++_0x4e2ceb) {
                    const _0x2118f2 = _0x46001b[_0x4e2ceb];
                    _0x2652ba += _0x2118f2.length;
                    const _0x5aabe9 = _0x2652ba;
                    if (_0xf68408[_0x5aabe9] !== '\n' && _0x4e2ceb !== _0x46001b.length - 1) {
                        const _0xf985dd = _0x46001b.splice(_0x4e2ceb + 1, 1)[0];
                        _0x46001b[_0x4e2ceb] = _0x2118f2 + _0xf985dd;
                        _0x35dfea.entities.forEach(_0x1055c1 => {
                            ;
                            _0x1055c1.offset >= _0x5aabe9 && (_0x1055c1.offset -= 1);
                        });
                        _0x2652ba += _0xf985dd.length;
                        ;
                    }
                    _0x2652ba += 1;
                }
                const _0x4a40e7 = _0x46001b.join('\n');
                _0x35dfea.value = _0x4a40e7;
            }
            const _0x27e0f4 = _0x35dfea.value.replace(/\s/g, '').length, _0x261441 = _0xf68408.replace(/\s/g, '').length;
            if (_0x27e0f4 === _0x261441 || _0x35dfea.entities.find(_0x4a2e7b => _0x4a2e7b['_'] === 'messageEntityCustomEmoji')) {
                _0x5906de = _0x35dfea.value;
                _0x4c57d5 = _0x35dfea.entities;
                _0xcf6735 = false;
                ;
                let _0x4ba688 = Kf(_0x5906de);
                _0x4ba688 = _0x4ba688.filter(_0xb1fa01);
                _0x4c57d5 = a2(_0x4c57d5, _0x4ba688);
                ;
            }
        }
        _0xcf6735 && (_0x5906de = _0xf68408, _0x4c57d5 = Kf(_0x5906de), _0x4c57d5 = _0x4c57d5.filter(_0xb1fa01));
        o2(_0x464c33, _0x5906de, _0x4c57d5, _0x57395d);
        ;
    });
    wi = null;
    ;
};
var Bc = (_0x4f2739 => (_0x4f2739[_0x4f2739.Neutral = 0] = 'Neutral', _0x4f2739[_0x4f2739.Valid = 1] = 'Valid', _0x4f2739[_0x4f2739.Error = 2] = 'Error', _0x4f2739))(Bc || {});
function Uc(_0x461e20, _0x68819c) {
    const _0x60bab2 = {};
    return _0x60bab2.wrappingDraft = true, _0x60bab2.isSelectable = true, _0x60bab2.textColor = _0x461e20 || 'primary-text-color', _0x60bab2.animationGroup = _0x68819c, ms.create(_0x60bab2);
}
function Oa(_0xacb14c) {
    const _0x2e2282 = Array.from(_0xacb14c.querySelectorAll('.custom-emoji, .custom-emoji-placeholder'));
    let _0x80a8b0 = _0xacb14c.querySelector('.custom-emoji-renderer');
    if (!_0x80a8b0 && _0x2e2282.length) {
        _0x80a8b0 = Uc(_0xacb14c.dataset.textColor, _0xacb14c.dataset.animationGroup);
        _0xacb14c.prepend(_0x80a8b0);
        ;
    } else {
        if (_0x80a8b0 && !_0x2e2282.length) {
            _0x80a8b0.remove();
            return;
        }
    }
    if (!_0x80a8b0) {
        return;
    }
    const _0x5e14ae = new Map();
    _0x2e2282.forEach(_0x261b24 => {
        const _0x218f52 = _0x261b24.loop !== void 0 ? _0x261b24 : _0x261b24.customEmojiElement, {docId: _0x1c9753} = _0x218f52;
        let _0x25cd10 = _0x5e14ae.get(_0x1c9753);
        _0x25cd10 || _0x5e14ae.set(_0x1c9753, _0x25cd10 = new Set());
        _0x25cd10.add(_0x218f52);
        ;
    });
    for (const [_0x58aaad, _0x1da292] of _0x5e14ae) {
        let _0x50537c = _0x80a8b0.customEmojis.get(_0x58aaad);
        if (_0x50537c) {
            for (const _0x5e6a1b of _0x50537c)
                _0x1da292.has(_0x5e6a1b) || _0x5e6a1b.destroy();
        } else {
            _0x50537c = new Set();
        }
        for (const _0x4c31de of _0x1da292)
            _0x50537c.has(_0x4c31de) || _0x4c31de.connectedCallback();
    }
    const _0x2bcb19 = {
        addCustomEmojis: _0x5e14ae,
        lazyLoadQueue: false
    };
    ;
    ;
    _0x80a8b0.add(_0x2bcb19);
    _0x80a8b0.forceRender();
    ;
    ;
}
class jc {
    constructor(_0x1825da = {}) {
        ;
        this.options = _0x1825da;
        this.setEmpty = (_0x37df17 = this.isEmpty()) => {
            ;
            [
                this.input,
                this.placeholder
            ].filter(Boolean).forEach(_0x32697c => {
                ;
                _0x32697c.classList.toggle('is-empty', _0x37df17);
            });
        };
        this.container = document.createElement('div');
        this.container.classList.add('input-field');
        this.required = _0x1825da.required;
        this.validate = _0x1825da.validate;
        _0x1825da.maxLength !== void 0 && _0x1825da.showLengthOn === void 0 && (_0x1825da.showLengthOn = Math.min(40, Math.round(_0x1825da.maxLength / 3)));
        ;
        const {
                placeholder: _0x4fc5fc,
                maxLength: _0x27da28,
                showLengthOn: _0x2f25d5,
                name: _0x185c44,
                plainText: _0x2333cb,
                canBeEdited: _0x48b50f = true,
                autocomplete: _0x5080c5,
                withBorder: _0x45d5e2,
                allowStartingSpace: _0x561b37,
                canHaveFormatting: _0x27a54f,
                canWrapCustomEmojis: _0x39f8a4
            } = _0x1825da, _0x52d0e8 = _0x1825da.label || _0x1825da.labelText;
        this.allowStartingSpace = _0x561b37;
        const _0x3d081a = [];
        let _0x234ee0;
        if (_0x2333cb ? (this.container.innerHTML = '\n      <input type="text" ' + (_0x185c44 ? 'name="' + _0x185c44 + '"' : '') + ' autocomplete="' + (_0x5080c5 ?? 'off') + '" ' + (_0x52d0e8 ? 'required=""' : '') + ' class="input-field-input">\n      ', _0x234ee0 = this.container.firstElementChild, _0x3d081a.push(() => {
                const _0x5e2165 = this.isEmpty();
                _0x5e2165 && (_0x234ee0.value = '');
                this.setEmpty(_0x5e2165);
                ;
            })) : (wi && wi(), this.container.innerHTML = '<div class="input-field-input"></div>', _0x234ee0 = this.container.firstElementChild, _0x234ee0.contentEditable = '' + !!_0x48b50f, vn.getInstance(), _0x234ee0.addEventListener('mousedown', _0x5c804b => {
                const _0x5b85c0 = document.getSelection();
                if (!_0x5b85c0.isCollapsed) {
                    return;
                }
                const _0x251727 = Jh(_0x5c804b.target, 'IMG');
                if (!_0x251727) {
                    return;
                }
                const _0x4492a8 = _0x251727.getBoundingClientRect(), _0x4cd9c2 = _0x4492a8.left + _0x4492a8.width / 2, _0x4e7139 = _0x5c804b.clientX >= _0x4cd9c2, _0x2acd4e = document.createRange();
                _0x2acd4e.setStartAfter(_0x4e7139 ? _0x251727 : _0x251727.previousSibling ?? _0x251727);
                _0x5b85c0.removeAllRanges();
                _0x5b85c0.addRange(_0x2acd4e);
                ;
            }), _0x27a54f && _0x234ee0.setAttribute('can-format', _0x27a54f.join(',')), _0x3d081a.push(() => {
                const _0x2f510f = this.isEmpty();
                _0x2f510f && _0x234ee0.replaceChildren();
                this.setEmpty(_0x2f510f);
                Fc(Array.from(_0x234ee0.querySelectorAll('.input-something')));
                Oa(_0x234ee0);
                ;
            })), tf(_0x234ee0), _0x1825da.inputMode && (_0x234ee0.inputMode = _0x1825da.inputMode), _0x4fc5fc && (this.placeholder = document.createElement('span'), this.placeholder.classList.add('input-field-placeholder'), this.container.append(this.placeholder), Gi(this.placeholder, _0x4fc5fc, void 0)), _0x45d5e2 !== false && _0x45d5e2 || _0x52d0e8 || _0x4fc5fc) {
            const _0x38d476 = document.createElement('div');
            _0x38d476.classList.add('input-field-border');
            this.container.append(_0x38d476);
            ;
        }
        if (_0x52d0e8 != null && (this.label = document.createElement('label'), this.setLabel(), this.container.append(this.label)), _0x27da28) {
            const _0x247005 = this.container.lastElementChild;
            let _0x1a14d8 = false;
            const _0x900791 = () => {
                const _0x1b7ec6 = _0x234ee0.classList.contains('error'), _0x1f3bdc = _0x2333cb ? _0x234ee0.value.length : [...tn(_0x234ee0, false, false).value].length, _0x4da688 = _0x27da28 - _0x1f3bdc, _0x3e8b42 = _0x4da688 < 0;
                _0x234ee0.classList.toggle('error', _0x3e8b42);
                _0x3e8b42 || _0x4da688 <= _0x2f25d5 ? (this.setLabel(), _0x247005.append(' (' + (_0x27da28 - _0x1f3bdc) + ')'), _0x1a14d8 || (_0x1a14d8 = true)) : (_0x1b7ec6 && !_0x3e8b42 || _0x1a14d8) && (this.setLabel(), _0x1a14d8 = false);
                ;
            };
            _0x3d081a.push(_0x900791);
        }
        !_0x1825da.withLinebreaks && !_0x2333cb && (_0x234ee0.dataset.noLinebreaks = '1', _0x234ee0.addEventListener('keypress', _0x55a81a => {
            ;
            if (_0x55a81a.key === 'Enter') {
                return _0x55a81a.preventDefault(), false;
            }
        }));
        _0x1825da.onRawInput && _0x3d081a.push(() => {
            ;
            _0x1825da.onRawInput(this.value);
        });
        _0x3d081a.length && _0x234ee0.addEventListener('input', () => {
            ;
            _0x3d081a.forEach(_0x169e63 => _0x169e63());
        });
        _0x39f8a4 && (_0x234ee0.dataset.canWrapCustomEmojis = '1');
        this.input = _0x234ee0;
        this.setEmpty(true);
        ;
    }
    ['select']() {
        ;
        this.value && (this.options.plainText ? this.input.select() : n2(this.input));
    }
    ['setLabel']() {
        ;
        this.label.textContent = '';
        this.options.labelText ? N1(this.label, this.options.labelText) : this.label.append(X(this.options.label, this.options.labelOptions));
        this.label.style.visibility = this.label.textContent ? 'visible' : 'hidden';
        ;
    }
    get ['value']() {
        ;
        return this.options.plainText ? this.input.value : tn(this.input, false, false).value;
    }
    set ['value'](_0x18718f) {
        ;
        this.setValueSilently(_0x18718f, true);
        this.simulateInputEvent();
        ;
    }
    ['simulateInputEvent']() {
        ;
        hn(this.input, 'input');
    }
    ['setValueSilently'](_0x4b3e83, _0x5c5784) {
        ;
        this.options.plainText ? this.input.value = _0x4b3e83 : (oc(this.input, _0x4b3e83), Oa(this.input));
        this.setEmpty();
        ;
    }
    ['isEmpty']() {
        ;
        return f2(this.input, this.allowStartingSpace);
    }
    ['isChanged']() {
        ;
        return this.value !== this.originalValue;
    }
    ['isValid']() {
        ;
        return !this.input.classList.contains('error') && (!this.validate || this.validate()) && (!this.required || !this.isEmpty());
    }
    ['isValidToChange']() {
        ;
        return this.isValid() && this.isChanged();
    }
    ['setDraftValue'](_0x377d83 = '', _0x168b45) {
        ;
        let _0x410b88 = _0x377d83;
        this.options.plainText || (_0x410b88 = Nc(_0x377d83));
        _0x168b45 ? this.setValueSilently(_0x410b88, false) : this.value = _0x410b88;
        ;
    }
    ['setOriginalValue'](_0x4818b3 = '', _0xccefff) {
        ;
        this.originalValue = _0x4818b3;
        this.setDraftValue(_0x4818b3, _0xccefff);
        ;
    }
    ['setState'](_0x13e66c, _0x3bb8e4) {
        ;
        _0x3bb8e4 ? (this.label.textContent = '', this.label.append(X(_0x3bb8e4, this.options.labelOptions)), this.label.style.visibility = 'visible') : this.setLabel();
        this.input.classList.toggle('error', !!(_0x13e66c & 2));
        this.input.classList.toggle('valid', !!(_0x13e66c & 1));
        ;
    }
    ['setError'](_0x390242) {
        ;
        this.setState(2, _0x390242);
    }
    ['toggleForceFocus'](_0x5e84dc) {
        ;
        this.input.classList.toggle('force-focus', _0x5e84dc);
    }
}
class c2 {
    constructor(_0x4e6720, _0x121578) {
        ;
        this.container = _0x4e6720;
        this.input = _0x121578;
        this.passwordVisible = false;
        this.onVisibilityClick = _0x35d47b => {
            ;
            se(_0x35d47b);
            this.passwordVisible = !this.passwordVisible;
            this.toggleVisible.replaceChildren(At(this.passwordVisible ? 'eye2' : 'eye1'));
            this.input.type = this.passwordVisible ? 'text' : 'password';
            this.onVisibilityClickAdditional?.();
            ;
        };
        _0x121578.type = 'password';
        _0x121578.setAttribute('required', '');
        _0x121578.name = 'notsearch_password';
        _0x121578.autocomplete = 'off';
        ;
        const _0x347d8c = document.createElement('input');
        _0x347d8c.classList.add('stealthy');
        _0x347d8c.tabIndex = -1;
        _0x347d8c.type = 'password';
        _0x121578.parentElement.prepend(_0x347d8c);
        _0x121578.parentElement.insertBefore(_0x347d8c.cloneNode(), _0x121578.nextSibling);
        ;
        const _0xe69af0 = this.toggleVisible = document.createElement('span');
        _0xe69af0.classList.add('toggle-visible');
        _0xe69af0.append(At('eye1'));
        _0x4e6720.classList.add('input-field-password');
        _0x4e6720.append(_0xe69af0);
        _0xe69af0.addEventListener('click', this.onVisibilityClick);
        _0xe69af0.addEventListener('touchend', this.onVisibilityClick);
        ;
    }
}
class d2 extends jc {
    constructor(_0x102ac4 = {}) {
        ;
        super({
            'plainText': true,
            'allowStartingSpace': true,
            ..._0x102ac4
        });
        this.helpers = new c2(this.container, this.input);
        ;
    }
}
class l2 {
    constructor(_0x55e605, _0x2bbd6e) {
        ;
        this.passwordInputField = _0x55e605;
        this.size = _0x2bbd6e;
        this.needFrame = 0;
        this.container = document.createElement('div');
        this.container.classList.add('media-sticker-wrapper');
        ;
    }
    ['load']() {
        ;
        return this.loadPromise ? this.loadPromise : this.loadPromise = ls.loadAnimationAsAsset({
            'container': this.container,
            'loop': false,
            'autoplay': false,
            'width': this.size,
            'height': this.size,
            'noCache': true
        }, '1ea9dfd2').then(_0x3fa750 => (this.animation = _0x3fa750, this.animation.addEventListener('enterFrame', _0xd13afd => {
            ;
            (this.animation.direction === 1 && _0xd13afd >= this.needFrame || this.animation.direction === -1 && _0xd13afd <= this.needFrame) && (this.animation.setSpeed(1), this.animation.pause());
        }), this.passwordInputField.helpers.onVisibilityClickAdditional = () => {
            ;
            this.passwordInputField.helpers.passwordVisible ? (this.animation.setDirection(1), this.animation.curFrame = 0, this.needFrame = 16, this.animation.play()) : (this.animation.setDirection(-1), this.animation.curFrame = 16, this.needFrame = 0, this.animation.play());
        }, ls.waitForFirstFrame(_0x3fa750)));
    }
    ['remove']() {
        ;
        this.animation && this.animation.remove();
    }
}
const u2 = _0x52d05b => {
        const _0x36e8b4 = { InputFieldClass: jc };
        ;
        const _0x12aad4 = Q1(_0x36e8b4, _0x52d05b), [, _0xda0ba7] = lo(_0x12aad4, [
                'class',
                'value',
                'InputFieldClass',
                'errorLabel'
            ]), _0x38d295 = new _0x12aad4.InputFieldClass(_0xda0ba7);
        return _0x12aad4.instanceRef?.(_0x38d295), rt(Is(() => _0x12aad4.class, (_0x212fcd, _0x1e6d63) => {
            ;
            _0x1e6d63 && _0x38d295.container.classList.remove(_0x1e6d63);
            _0x212fcd && _0x38d295.container.classList.add(_0x212fcd);
            ;
        })), rt(Is(() => _0x12aad4.errorLabel, (_0x540ea2, _0x2a4da2) => {
            ;
            !_0x540ea2 && !_0x2a4da2 || (_0x540ea2 ? _0x38d295.setError(_0x540ea2) : _0x38d295.setState(Bc.Neutral));
        })), rt(Is(() => _0x12aad4.value, _0x2798d8 => {
            ;
            _0x2798d8 !== _0x38d295.value && _0x2798d8 !== void 0 && (_0x38d295.value = _0x2798d8);
        })), _0x38d295.container;
    }, Hc = Hi(null), Wc = Hi(null);
function N3() {
    const _0x4d8f7f = Uf(Hc);
    if (!_0x4d8f7f) {
        throw new Error('useHotReloadGuard should not be used outside a <SolidJSHotReloadGuardProvider />');
    }
    return _0x4d8f7f;
}
function B3() {
    const _0x1e35d4 = Uf(Wc) || Uf(Hc);
    if (!_0x1e35d4) {
        throw new Error('useLockScreenHotReloadGuard should not be used outside a <LockScreenHotReloadGuardProvider />');
    }
    return _0x1e35d4;
}
function h2(_0x3f4088) {
    const _0x5566b = {
        rootScope: I,
        themeController: Cr,
        apiManagerProxy: re,
        InputFieldTsx: u2,
        PasswordInputField: d2,
        PasswordMonkey: l2
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    const _0x488121 = {
        get 'children'() {
            ;
            return _0x3f4088.children;
        }
    };
    return _0x488121.value = _0x5566b, zn(Wc.Provider, _0x488121);
}
class Xs extends ln {
    static ['getIsLocked']() {
        ;
        return this.isLocked;
    }
    static async ['tryGetStoredEncryptionHash']() {
        const _0x474080 = await j.get('encryption_key');
        if (_0x474080) {
            if (j.delete('encryption_key'), !(typeof _0x474080 == 'string')) {
                return false;
            }
            const _0x190504 = { name: 'AES-GCM' };
            ;
            const _0x3bf3a2 = new Uint8Array(atob(_0x474080).split('').map(_0x27c7c1 => _0x27c7c1.charCodeAt(0))), _0x174888 = await crypto.subtle.importKey('raw', _0x3bf3a2, _0x190504, true, [
                    'encrypt',
                    'decrypt'
                ]);
            return await re.invoke('saveEncryptionKey', _0x174888), ct.save(_0x174888), true;
        }
        return false;
    }
    static async ['checkLockState'](_0x34ae5b) {
        const _0x105c79 = await this.tryGetStoredEncryptionHash() ? false : await re.invoke('isLocked', void 0);
        this.isLocked = _0x105c79;
        _0x105c79 ? (await _0x34ae5b(), await this.lock()) : (this.appStartupDeferred.resolve(), this.appStartupDeferred = void 0);
        ;
    }
    static async ['waitForUnlock'](_0x3a4ce7) {
        ;
        this.checkLockState(_0x3a4ce7);
        await this.appStartupDeferred;
        this.isLocked = false;
        ;
    }
    static async ['lockOtherTabs']() {
        ;
        await re.invoke('toggleLockOthers', true);
    }
    static async ['lock'](_0x482fdd, _0x3edbd8) {
        ;
        if (this.mountedElement) {
            return;
        }
        this.isLocked = true;
        this.appStartupDeferred && (this.savedHash = window.location.hash, window.location.hash = '');
        ;
        const _0x416e78 = !!_0x482fdd, _0x177b07 = () => ze(() => import('./sezq6sbep5aw.js'), __vite__mapDeps([
                0,
                1,
                2,
                3,
                4,
                5,
                6
            ]), import.meta.url);
        await Promise.race([
            ft(100),
            _0x177b07()
        ]);
        this.mountedElement = document.createElement('div');
        this.mountedElement.classList.add('passcode-lock-screen');
        ;
        const _0x21feb7 = _0x482fdd instanceof HTMLElement ? this.cloneLockIcon(_0x482fdd) : void 0;
        _0x21feb7 && this.mountedElement.append(_0x21feb7);
        _0x416e78 && this.mountedElement.classList.add('passcode-lock-screen--hidden');
        document.body.append(this.mountedElement);
        ;
        const {default: _0x465a2d} = await _0x177b07();
        this.dispose = gi(() => {
            const _0x450fd9 = this;
            return zn(h2, {
                get 'children'() {
                    ;
                    return zn(_0x465a2d, {
                        'onUnlock': () => _0x450fd9.unlock(),
                        'fromLockIcon': _0x21feb7,
                        'onAnimationEnd': _0x3edbd8
                    });
                }
            });
        }, this.mountedElement);
        _0x416e78 && Wa().then(async () => {
            ;
            this.mountedElement.classList.remove('passcode-lock-screen--hidden');
            _0x21feb7 || ft(200).then(() => {
                _0x3edbd8();
            });
            ;
        });
        ;
    }
    static ['cloneLockIcon'](_0x82f710) {
        const _0x53f8da = _0x82f710.cloneNode(true);
        _0x53f8da.classList.add('passcode-lock-screen__animated-lock-icon');
        const _0x52f9c8 = _0x82f710.getBoundingClientRect();
        return _0x53f8da.style.setProperty('--x', _0x52f9c8.left + _0x52f9c8.width / 2 + 'px'), _0x53f8da.style.setProperty('--y', _0x52f9c8.top + _0x52f9c8.height / 2 + 'px'), _0x53f8da;
    }
    static ['unlock']() {
        const _0x25d86b = this.mountedElement;
        this.mountedElement = void 0;
        this.isLocked = false;
        this.savedHash && (Ie.overrideHash(this.savedHash), Ie.replaceState());
        _0x25d86b && ((async () => {
            ;
            _0x25d86b.style.setProperty('transition-time', '.12s');
            await ft(120);
            ;
            const _0x141180 = async () => {
                ;
                await ft(250);
                _0x25d86b.classList.add('passcode-lock-screen--hidden');
                await ft(120);
                this.dispose?.();
                _0x25d86b?.remove();
                ;
            };
            document.startViewTransition ? document.startViewTransition(_0x141180) : _0x141180();
        })());
        this.appStartupDeferred?.resolve();
        this.appStartupDeferred = void 0;
        ;
    }
}
Dn(Xs, 'appStartupDeferred', q());
Dn(Xs, 'savedHash', '');
N.PasscodeLockScreenControler = Xs;
;
class m2 extends ns {
    constructor() {
        ;
        super();
        this.closeMTProtoWorker = ve;
        this.onMirrorTask = _0x391da0 => {
            ;
            var _0x9e4c5f;
            const {
                name: _0x308cb6,
                key: _0x460e4b,
                value: _0x2e5016,
                accountNumber: _0x3fac3c
            } = _0x391da0;
            if (!(_0x308cb6 === 'state' && _0x460e4b === 'settings') && _0x3fac3c !== Ve()) {
                return;
            }
            if (this.processMirrorTaskMap[_0x308cb6]?.(_0x391da0), !_0x391da0.hasOwnProperty('key')) {
                this.mirrors[_0x308cb6] = _0x2e5016;
                return;
            }
            const _0x47ee1a = (_0x9e4c5f = this.mirrors)[_0x308cb6] ?? (_0x9e4c5f[_0x308cb6] = {});
            Dl(_0x47ee1a, _0x460e4b, _0x2e5016, true);
        };
        this.mirrors = {
            'state': void 0,
            'thumbs': {},
            'stickerThumbs': {},
            'availableReactions': void 0,
            'messages': {},
            'groupedMessages': {},
            'peers': {},
            'avatars': {}
        };
        this.processMirrorTaskMap = {
            'messages': _0x353f10 => {
                ;
                var _0x531d42;
                if (!_0x353f10.key) {
                    for (const _0x3567e6 in _0x353f10.value)
                        for (const _0x585092 in _0x353f10.value[_0x3567e6])
                            this.processMirrorTaskMap.messages({
                                'name': _0x353f10.name,
                                'accountNumber': _0x353f10.accountNumber,
                                'key': $f(_0x3567e6, _0x585092),
                                'value': _0x353f10.value[_0x3567e6][_0x585092]
                            });
                    return;
                }
                const _0x2dc612 = _0x353f10.value;
                let _0x470540, _0x4106f7;
                if (_0x2dc612) {
                    _0x470540 = _0x2dc612.mid;
                    _0x4106f7 = _0x2dc612.grouped_id;
                    ;
                } else {
                    const [_0x1adcf3, _0x1835d2] = wl(_0x353f10.key);
                    _0x470540 = +_0x1835d2;
                    const _0x3535ad = this.mirrors.messages[_0x1adcf3]?.[_0x470540];
                    if (!_0x3535ad) {
                        return;
                    }
                    _0x4106f7 = _0x3535ad.grouped_id;
                }
                if (!_0x4106f7) {
                    return;
                }
                const _0x24b09c = (_0x531d42 = this.mirrors.groupedMessages)[_0x4106f7] ?? (_0x531d42[_0x4106f7] = new Map());
                _0x2dc612 ? _0x24b09c.set(_0x470540, _0x2dc612) : (_0x24b09c.delete(_0x470540), _0x24b09c.size || delete this.mirrors.groupedMessages[_0x4106f7]);
            },
            'state': _0x1b68a7 => {
                ;
                _0x1b68a7.key && Jr(_0x1b68a7.key, _0x1b68a7.value);
            },
            'peers': _0x1a86a4 => {
                ;
                _0x1a86a4.key ? Il(_0x1a86a4.key.toPeerId(), _0x1a86a4.value) : Rl(_0x1a86a4.value);
            }
        };
        this.tabState = {
            'accountNumber': Ve(),
            'chatPeerIds': [],
            'idleStartTime': 0
        };
        this.intervals = new Map();
        this.log('constructor');
        this.registerWorker();
        this.registerServiceWorker();
        this.registerCryptoWorker();
        ;
        const _0x370075 = new Set([
            'language_change',
            'settings_updated',
            'theme_changed',
            'theme_change',
            'background_change',
            'logging_out',
            'notification_count_update',
            'account_logged_in',
            'notification_cancel',
            'toggle_using_passcode',
            'toggle_locked'
        ]);
        this.addMultipleEventsListeners({
            'convertWebp': ({
                fileName: _0x421fa0,
                bytes: _0xfeb18c
            }) => $i.convert(_0x421fa0, _0xfeb18c),
            'convertOpus': ({
                fileName: _0xa6a8a0,
                bytes: _0x2030a2
            }) => To.pushDecodeTask(_0x2030a2, false).then(_0x476457 => _0x476457.bytes),
            'event': ({
                name: _0x9f4530,
                args: _0x48d1bd,
                accountNumber: _0x47b342
            }) => {
                const _0x2a768b = _0x47b342 && _0x47b342 !== Ve();
                !_0x370075.has(_0x9f4530) && _0x2a768b || I.dispatchEventSingle(_0x9f4530, ..._0x48d1bd);
            },
            'localStorageProxy': _0x13f19d => j.localStorageProxy(_0x13f19d.type, ..._0x13f19d.args),
            'mirror': this.onMirrorTask,
            'receivedServiceMessagePort': () => {
                ;
                this.log.warn('mtproto worker received service message port');
            },
            'tabsUpdated': _0xee4a2c => {
                ;
                this.allTabStates = _0xee4a2c;
                I.dispatchEvent('notification_count_update');
                ;
            },
            'callNotification': async _0x464133 => {
                const {accountNumber: _0x514052} = _0x464133, _0x384c7c = Ps(_0x514052), _0x1200b3 = _0x464133.callerId.toPeerId(), _0x46cdd3 = await _0x384c7c.appPeersManager.getPeer(_0x1200b3), _0x302beb = await yh({
                        'peerId': _0x1200b3,
                        'managers': _0x384c7c,
                        'plainText': true,
                        'limitSymbols': 20,
                        'useManagers': true
                    }), _0x3b4235 = new Notification(_0x302beb, {
                        'body': ue.format('Call.StatusCalling', true),
                        'icon': await kh(_0x384c7c, _0x1200b3, _0x302beb),
                        'badge': vh
                    });
                _0x3b4235.onclick = () => {
                    const _0x13668f = _0x46cdd3.id, _0x4735fd = In(_0x514052, {
                            'p': '' + _0x13668f.toPeerId(),
                            'call': '' + _0x464133.callId
                        });
                    window.open(_0x4735fd, '_blank');
                    _0x3b4235.close();
                    ;
                };
                setTimeout(() => {
                    ;
                    _0x3b4235.close();
                }, 5000);
                ;
            },
            'log': _0x11c53e => {
            },
            'intervalCallback': _0x5e979c => {
                const _0x357e8f = this.intervals.get(_0x5e979c);
                _0x357e8f && _0x357e8f();
            },
            'saveEncryptionKey': _0x5af08b => {
                ;
                ct.save(_0x5af08b);
            },
            'toggleLock': _0x5a8003 => {
                ;
                _0x5a8003 ? Xs.lock() : Xs.unlock();
            },
            'toggleCacheStorage': _0x56705f => {
                ;
                qf.temporarilyToggle(_0x56705f);
            },
            'toggleUsingPasscode': _0x5c1324 => {
                ;
                Me.resolveDeferred(_0x5c1324.isUsingPasscode);
                ct.save(_0x5c1324.isUsingPasscode ? _0x5c1324.encryptionKey : null);
                ;
            }
        });
        I.addEventListener('language_change', _0x44beea => {
            ;
            I.managers.networkerFactory.setLanguage(_0x44beea);
            I.managers.appAttachMenuBotsManager.onLanguageChange();
            ;
        });
        window.addEventListener('online', () => {
            ;
            I.managers.networkerFactory.forceReconnectTimeout();
        });
        I.addEventListener('logging_out', ({
            accountNumber: _0x1abdc6,
            migrateTo: _0x3513fe
        }) => {
            ;
            Promise.all([
                $r(false, true),
                Promise.race([
                    Yi.setAuthorized(false),
                    ft(3000)
                ]),
                zf.forceUnsubscribe(),
                this.invokeVoid('terminate', void 0),
                this.serviceWorkerRegistration?.unregister().catch(ve)
            ]).finally(() => {
                ;
                let _0x1d9861 = new URL(location.href);
                const _0x1e9e0f = Ve();
                if (!_0x1abdc6) {
                    _0x1d9861.hash = '';
                    _0x1d9861.search = '';
                    ;
                } else {
                    if (_0x1e9e0f > _0x1abdc6) {
                        const _0x47af80 = _0x1e9e0f - 1;
                        _0x1d9861 = In(_0x47af80, void 0, true);
                    } else {
                        _0x1e9e0f === _0x1abdc6 && (_0x3513fe ? _0x1d9861 = In(_0x3513fe) : (_0x1d9861.hash = '', _0x1d9861.search = ''));
                    }
                }
                history.replaceState(null, '', _0x1d9861);
                this.closeMTProtoWorker();
                go.reload();
                ;
            });
        });
        I.addEventListener('settings_updated', ({
            key: _0x1193dc,
            settings: _0x5ab118
        }) => {
            Sa(_0x5ab118);
        });
        I.addEventListener('toggle_using_passcode', _0x31b405 => {
            ;
            Me.resolveDeferred(_0x31b405);
        });
        as.addEventListener('change', _0xbd1aa4 => {
            ;
            this.updateTabStateIdle(_0xbd1aa4);
        });
        this.updateTabStateIdle(as.isIdle);
        ;
    }
    ['sendEnvironment']() {
        ;
        this.log('Passing environment:', hf);
        this.invoke('environment', hf);
        ;
    }
    ['pingServiceWorkerWithIframe']() {
        ;
        if (this.pingServiceWorkerPromise) {
            return this.pingServiceWorkerPromise;
        }
        const _0x171a94 = this.pingServiceWorkerPromise = q(), _0x4b3585 = document.createElement('iframe');
        _0x4b3585.hidden = true;
        const _0x1d1662 = () => {
                ;
                clearTimeout(_0x1478a8);
                setTimeout(() => {
                    ;
                    this.pingServiceWorkerPromise = void 0;
                }, 10000);
                _0x4b3585.removeEventListener('load', _0x9b8455);
                _0x4b3585.removeEventListener('error', _0x2a5a91);
                _0x4b3585.remove();
                ;
            }, _0x9b8455 = () => {
                ;
                _0x1d1662();
                _0x171a94.resolve();
                ;
            }, _0x2a5a91 = () => {
                ;
                _0x1d1662();
                _0x171a94.reject();
                ;
            };
        _0x4b3585.addEventListener('load', _0x9b8455);
        _0x4b3585.addEventListener('error', _0x2a5a91);
        _0x4b3585.src = 'ping/' + (Math.random() * 4294967295 | 0) + '.nocache';
        document.body.append(_0x4b3585);
        ;
        const _0x1478a8 = window.setTimeout(_0x2a5a91, 1500);
        return _0x171a94;
    }
    ['attachServiceWorker'](_0x3bd643) {
        ;
        if (this.lastServiceWorker === _0x3bd643) {
            this.log.warn('trying to attach same service worker');
            return;
        }
        this.lastServiceWorker && this.serviceMessagePort.detachPort(this.lastServiceWorker);
        this.serviceMessagePort.attachSendPort(this.lastServiceWorker = _0x3bd643);
        this.serviceMessagePort.invokeVoid('hello', void 0);
        this.serviceMessagePort.invokeVoid('environment', hf);
        Me.isUsingPasscode().then(_0x47790b => {
            const _0x56ef16 = { isUsingPasscode: false };
            ;
            _0x47790b || this.serviceMessagePort.invokeVoid('toggleUsingPasscode', _0x56ef16);
            ;
        });
        ;
    }
    ['_registerServiceWorker']() {
        const _0x5c75f4 = {
            type: 'module',
            scope: './'
        };
        ;
        ;
        navigator.serviceWorker.register(El, _0x5c75f4).then(_0x44cbbf => {
            ;
            this.log('SW registered', _0x44cbbf);
            this.serviceWorkerRegistration = _0x44cbbf;
            ;
            const _0xcaf929 = new URL(window.location.href), _0x4b7cac = 'swfix', _0x5a3cd5 = +_0xcaf929.searchParams.get(_0x4b7cac) || 0;
            if (_0x44cbbf.active && !navigator.serviceWorker.controller) {
                if (_0x5a3cd5 >= 3) {
                    throw new Error('no controller');
                }
                return _0x44cbbf.unregister().then(() => {
                    ;
                    _0xcaf929.searchParams.set(_0x4b7cac, '' + (_0x5a3cd5 + 1));
                    window.location.href = _0xcaf929.toString();
                    ;
                });
            }
            _0x5a3cd5 && (_0xcaf929.searchParams.delete(_0x4b7cac), history.pushState(void 0, '', _0xcaf929));
            (_0x44cbbf.installing || _0x44cbbf.waiting || _0x44cbbf.active).addEventListener('statechange', _0x46a734 => {
                ;
                this.log('SW statechange', _0x46a734);
            });
            ;
            const _0x560ded = navigator.serviceWorker.controller || _0x44cbbf.installing || _0x44cbbf.waiting || _0x44cbbf.active;
            this.attachServiceWorker(_0x560ded);
        }).catch(_0x4d5e58 => {
            ;
            this.log.error('SW registration failed!', _0x4d5e58);
            this.invokeVoid('serviceWorkerOnline', false);
            ;
        });
        ;
    }
    ['registerServiceWorker']() {
        ;
        if (!('serviceWorker' in navigator)) {
            return;
        }
        this.serviceMessagePort = zf.serviceMessagePort = new vl();
        const _0x576bc5 = navigator.serviceWorker;
        this['_registerServiceWorker']();
        _0x576bc5.addEventListener('controllerchange', () => {
            ;
            this.log.warn('controllerchange');
            const _0x43800d = _0x576bc5.controller;
            this.attachServiceWorker(_0x43800d);
            _0x43800d.addEventListener('error', _0x588b8d => {
                ;
                this.log.error('controller error:', _0x588b8d);
            });
            ;
        });
        this.serviceMessagePort.attachListenPort(_0x576bc5);
        this.serviceMessagePort.addMultipleEventsListeners({
            'port': (_0x372a39, _0x32e957, _0x5d0384) => {
                ;
                this.log.warn('got service worker port');
                this.invokeVoid('serviceWorkerPort', void 0, void 0, [_0x5d0384.ports[0]]);
                ;
            },
            'serviceCryptoPort': (_0x4f4e77, _0x4f08d1, _0x542e63) => {
                ;
                it.sendToOnePort(_0x542e63.ports[0]);
            },
            'hello': (_0x22cb47, _0x27952b) => {
                ;
                this.log('got hello from service worker');
                this.serviceMessagePort.resendLockTask(_0x27952b);
                this.serviceMessagePort.invokeVoid('environment', hf);
                ;
            },
            'share': _0x2ee34c => {
                ;
                this.log('will try to share something');
                this.share = _0x2ee34c;
                ;
            }
        });
        _0x576bc5.addEventListener('messageerror', _0x27feb8 => {
            ;
            this.log.error('SW messageerror:', _0x27feb8);
        });
        ;
    }
    async ['registerCryptoWorker']() {
        const _0x4ce0eb = _0x165f12 => fetch(_0x165f12).then(_0x2ab87d => _0x2ab87d.text()).then(_0x9ac44e => {
                const _0x27cc3e = location.pathname.split('/');
                _0x27cc3e[_0x27cc3e.length - 1] = '';
                const _0x3092f6 = location.origin + _0x27cc3e.join('/'), _0x3dd122 = {};
                return _0x3dd122.type = 'application/javascript', (_0x9ac44e = _0x9ac44e.replace(/(import (?:.+? from )?['"])\//g, '$1' + _0x3092f6), new Blob([_0x9ac44e], _0x3dd122));
            }), _0x1b8176 = {
                'construct'(_0x114019, _0x17f148) {
                    ;
                    return { 'url': Ga(_0x17f148[0]).toString() };
                }
            }, _0x4363bf = [
                Worker,
                typeof SharedWorker < 'u' && SharedWorker
            ].filter(Boolean);
        _0x4363bf.forEach(_0x17f5c9 => window[_0x17f5c9.name] = new Proxy(_0x17f5c9, _0x1b8176));
        const _0x2e4d0b = { type: 'module' };
        ;
        const _0x5cdbd9 = new Worker(new URL('' + new URL('ukaea10g8qn9.js', import.meta.url).href, import.meta.url), _0x2e4d0b);
        _0x4363bf.forEach(_0xc34374 => window[_0xc34374.name] = _0xc34374);
        const _0x2c5aab = { type: 'module' };
        ;
        const _0x3fa340 = _0x5cdbd9.url, _0x3f7b2d = _0x3dfb65 => new _0x28ee5d(_0x3dfb65, _0x2c5aab), _0x22d995 = _0x376005 => this.attachWorkerToPort(_0x376005, it, 'crypto'), _0x28ee5d = Vf ? SharedWorker : Worker;
        it.addEventListener('port', (_0x4b2d60, _0x58d21a, _0x4acc29) => {
            ;
            this.invokeVoid('cryptoPort', void 0, void 0, [_0x4acc29.ports[0]]);
        });
        const _0x382fd8 = _0x3f7b2d(_0x3fa340);
        _0x22d995(_0x382fd8);
        const _0x244623 = await _0x4ce0eb(_0x3fa340), _0x5d5c92 = {
                originalUrl: _0x3fa340,
                blob: _0x244623
            };
        ;
        ;
        (await this.invoke('createProxyWorkerURLs', _0x5d5c92)).slice(1).map(_0x3f7b2d).forEach(_0x22d995);
        ;
    }
    ['registerWorker']() {
        ;
        let _0x5c316f;
        const _0x4e211f = { type: 'module' };
        ;
        const _0x141e52 = { type: 'module' };
        ;
        Vf ? (_0x5c316f = new SharedWorker(new URL('' + new URL('vmu7hv3hxb8g.js', import.meta.url).href, import.meta.url), _0x4e211f), this.closeMTProtoWorker = () => _0x5c316f.port.close()) : (_0x5c316f = new Worker(new URL('' + new URL('vmu7hv3hxb8g.js', import.meta.url).href, import.meta.url), _0x141e52), this.closeMTProtoWorker = () => _0x5c316f.terminate());
        this.onWorkerFirstMessage(_0x5c316f);
        ;
        ;
    }
    ['attachWorkerToPort'](_0x30cfd6, _0x373d6c, _0x5e39b1) {
        const _0x53e0b9 = _0x30cfd6.port || _0x30cfd6;
        _0x373d6c.attachPort(_0x53e0b9);
        _0x30cfd6.addEventListener('error', _0x2774be => {
            ;
            this.log.error(_0x5e39b1, 'worker error', _0x2774be);
        });
        ;
    }
    ['onWorkerFirstMessage'](_0x55bf16) {
        ;
        this.log('set webWorker');
        this.attachWorkerToPort(_0x55bf16, this, 'mtproto');
        ;
    }
    async ['loadAllStates']() {
        const _0xebfd94 = await hl();
        this.dispatchUserAuth();
        const _0x24a203 = _0xebfd94[Ve()];
        return I.settings = _0x24a203.common.settings, this.newVersion = _0x24a203.newVersion, this.oldVersion = _0x24a203.oldVersion, this.mirrors.state = _0x24a203.state, Jr(_0x24a203.state), Sa(_0x24a203.common.settings), Object.defineProperty(I, 'settings', { 'get': () => we(Ar) }), _0xebfd94;
    }
    async ['dispatchUserAuth']() {
        const _0x4026a7 = await os.get(Ve());
        _0x4026a7?.userId && I.dispatchEvent('user_auth', {
            'dcID': _0x4026a7.dcId || 0,
            'date': _0x4026a7.date || Date.now() / 1000 | 0,
            'id': _0x4026a7.userId.toPeerId(false)
        });
    }
    ['hasTabOpenFor'](_0x299613) {
        ;
        return !!this.allTabStates.find(_0x361dc5 => _0x361dc5.accountNumber === _0x299613);
    }
    ['getOpenTabsCount']() {
        ;
        return this.allTabStates.length;
    }
    ['sendAllStates'](_0x3475b7) {
        const _0x3c31c2 = [];
        for (let _0x1d5c9f = 1; _0x1d5c9f <= 4; _0x1d5c9f++) {
            const _0x5bbdb1 = _0x3475b7[_0x1d5c9f], _0x1be42c = this.invoke('state', {
                    ..._0x5bbdb1,
                    'accountNumber': _0x1d5c9f
                });
            _0x3c31c2.push(_0x1be42c);
        }
        return Promise.all(_0x3c31c2);
    }
    ['invokeCrypto'](_0x299a24, ..._0x20af84) {
        ;
        return it.invokeCrypto(_0x299a24, ..._0x20af84);
    }
    async ['toggleStorages'](_0x57d8fe, _0xafe2f6) {
        ;
        await $r(_0x57d8fe, _0xafe2f6);
        this.invoke('toggleStorages', {
            'enabled': _0x57d8fe,
            'clearWrite': _0xafe2f6
        });
        this.serviceMessagePort?.invokeVoid('toggleStorages', {
            'enabled': _0x57d8fe,
            'clearWrite': _0xafe2f6
        });
        ;
    }
    async ['getMirror'](_0x184ff4) {
        ;
        return this.mirrors[_0x184ff4];
    }
    ['getState']() {
        ;
        return this.getMirror('state');
    }
    ['getAllTabStates']() {
        ;
        return [...this.allTabStates];
    }
    ['getCacheContext'](_0x2789e3, _0x1d682e = jn, _0xf68b11 = Sl(_0x2789e3)) {
        ;
        return this.mirrors.thumbs[_0xf68b11]?.[_0x1d682e] || Al(_0x1d682e);
    }
    ['getStickerCachedThumb'](_0x407988, _0x56101a) {
        const _0x3f2818 = ar(_0x407988, _0x56101a);
        return this.mirrors.stickerThumbs[_0x3f2818];
    }
    ['getAvailableReactions']() {
        ;
        var _0x249dd9;
        return (_0x249dd9 = this.mirrors).availableReactions || (_0x249dd9.availableReactions = I.managers.appReactionsManager.getAvailableReactions());
    }
    ['getReaction'](_0x11d653) {
        ;
        return at(this.getAvailableReactions(), _0x11627f => _0x11627f.find(_0x1d3662 => _0x1d3662.reaction === _0x11d653));
    }
    ['getMessageFromStorage'](_0x112365, _0xe9c5c3) {
        ;
        return _0x112365.endsWith('history') && Yr(_0xe9c5c3) && (_0x112365 = this.getGlobalHistoryMessagesStorage()), this.mirrors.messages[_0x112365]?.[_0xe9c5c3];
    }
    ['getGroupsFirstMessage'](_0xebfb63) {
        ;
        if (!_0xebfb63?.grouped_id) {
            return _0xebfb63;
        }
        const _0x3fdb7e = this.mirrors.groupedMessages[_0xebfb63.grouped_id];
        let _0x407f5e = Number.MAX_SAFE_INTEGER;
        for (const [_0x402e8f, _0x2e3819] of _0x3fdb7e)
            _0x2e3819.mid < _0x407f5e && (_0x407f5e = _0x2e3819.mid);
        return _0x3fdb7e.get(_0x407f5e);
    }
    ['getMidsByGroupedId'](_0x10bbc2, _0x4885dd = 'asc') {
        ;
        return Ml(this.mirrors.groupedMessages[_0x10bbc2], _0x4885dd);
    }
    ['getMessagesByGroupedId'](_0x32a7b7) {
        const _0x2aab97 = this.getMidsByGroupedId(_0x32a7b7, 'asc'), _0x36836c = this.mirrors.groupedMessages[_0x32a7b7];
        return _0x2aab97.map(_0x115524 => _0x36836c.get(_0x115524));
    }
    ['getHistoryMessagesStorage'](_0x2a296b) {
        ;
        return _0x2a296b + '_history';
    }
    ['getGlobalHistoryMessagesStorage']() {
        ;
        return this.getHistoryMessagesStorage(Bi);
    }
    ['getMessageById'](_0x592e0a) {
        ;
        if (Yr(_0x592e0a)) {
            return this.getMessageFromStorage(this.getGlobalHistoryMessagesStorage(), _0x592e0a);
        }
    }
    ['getMessageByPeer'](_0x74c8e2, _0x5a487f) {
        ;
        return _0x74c8e2 ? this.getMessageFromStorage(this.getHistoryMessagesStorage(_0x74c8e2), _0x5a487f) : this.getMessageById(_0x5a487f);
    }
    ['getPeerForAccount'](_0x57b67d, _0x15a4ac) {
        return Ps(_0x15a4ac).appPeersManager.getPeer(_0x57b67d);
    }
    ['getPeer'](_0x2c4b28) {
        ;
        return this.mirrors.peers[_0x2c4b28];
    }
    ['getUser'](_0x26479f) {
        ;
        return this.mirrors.peers[_0x26479f.toPeerId(false)];
    }
    ['getChat'](_0x3257c3) {
        ;
        return this.mirrors.peers[_0x3257c3.toPeerId(true)];
    }
    ['isForum'](_0x39bf2e) {
        ;
        return !!this.getPeer(_0x39bf2e)?.pFlags?.forum;
    }
    ['isAvatarCached'](_0x1c38b8, _0x449a50) {
        const _0x2030e3 = this.mirrors.avatars[_0x1c38b8];
        return _0x449a50 === void 0 ? !!_0x2030e3 : !!(_0x2030e3 && _0x2030e3[_0x449a50] && !(_0x2030e3[_0x449a50] instanceof Promise));
    }
    ['loadAvatar'](_0x4e428b, _0xcdde98, _0x165d3f, _0x387258) {
        ;
        var _0x3f1942;
        if (_0x387258 && _0x387258 !== Ve()) {
            return Ps(_0x387258).appAvatarsManager.loadAvatar(_0x4e428b, _0xcdde98, _0x165d3f);
        }
        const _0x598c5b = (_0x3f1942 = this.mirrors.avatars)[_0x4e428b] ?? (_0x3f1942[_0x4e428b] = {});
        return _0x598c5b[_0x165d3f] ?? (_0x598c5b[_0x165d3f] = I.managers.appAvatarsManager.loadAvatar(_0x4e428b, _0xcdde98, _0x165d3f));
    }
    ['getAppConfig'](_0x148bd7) {
        ;
        if (_0x148bd7 && (this.appConfig = void 0), !this.appConfig) {
            const _0xa71bb5 = I.managers.apiManager.getAppConfig().then(_0x4a33ab => (this.appConfig === _0xa71bb5 && (this.appConfig = _0x4a33ab), _0x4a33ab));
            return this.appConfig = _0xa71bb5;
        }
        return this.appConfig;
    }
    ['isPremiumFeaturesHidden']() {
        ;
        return at(this.isPremiumPurchaseBlocked(), _0x4c140b => _0x4c140b && !I.premium);
    }
    ['isPremiumPurchaseBlocked']() {
        ;
        return at(this.getAppConfig(), _0x4412a6 => !!_0x4412a6.premium_purchase_blocked);
    }
    async ['hasSomeonePremium']() {
        const _0x449303 = await os.getTotalAccounts();
        let _0x530e88 = false;
        for (let _0x4b9f19 = 1; _0x4b9f19 <= _0x449303; _0x4b9f19++) {
            const _0x3629b2 = Ps(_0x4b9f19);
            if (_0x530e88 || (_0x530e88 = await _0x3629b2.rootScope.getPremium()), _0x530e88) {
                break;
            }
        }
        return _0x530e88;
    }
    ['updateTabState'](_0x2687e8, _0x1cdf20) {
        ;
        this.tabState[_0x2687e8] = _0x1cdf20;
        this.invokeVoid('tabState', this.tabState);
        ;
    }
    ['updateTabStateIdle'](_0x107c9e) {
        ;
        this.updateTabState('idleStartTime', _0x107c9e ? Date.now() : 0);
    }
    async ['setInterval'](_0x3ac53d, _0x4a9b57) {
        const _0x4c9579 = await this.invoke('setInterval', _0x4a9b57);
        return this.intervals.set(_0x4c9579, _0x3ac53d), _0x4c9579;
    }
    async ['clearInterval'](_0x4b4582) {
        ;
        this.intervals.delete(_0x4b4582);
        await this.invoke('clearInterval', _0x4b4582);
        ;
    }
}
const Vc = new m2();
N.apiManagerProxy = Vc;
const re = Vc;
class g2 extends je {
    constructor() {
        ;
        super(...arguments);
        this.overlaysActive = 0;
        this.hasDarkOverlays = 0;
        ;
    }
    get ['isOverlayActive']() {
        ;
        return this.overlaysActive > 0;
    }
    set ['isOverlayActive'](_0x4fbebb) {
        ;
        this.overlaysActive += _0x4fbebb ? 1 : -1;
        this.dispatchEvent('change', this.isOverlayActive);
        ;
    }
    get ['isDarkOverlayActive']() {
        ;
        return this.hasDarkOverlays > 0;
    }
    set ['isDarkOverlayActive'](_0x37646d) {
        ;
        this.hasDarkOverlays += _0x37646d ? 1 : -1;
        this.isOverlayActive = _0x37646d;
        ;
    }
}
const Hs = new g2();
N && (N.overlayCounter = Hs);
function U3(_0x1aa9a9, _0x28deab = _0x1aa9a9.split('?')) {
    ;
    try {
        const _0x443fe6 = new URL(_0x1aa9a9), _0x54013b = { _0x4c069a: _0x2afa20 };
        for (const [_0x4c069a, _0x2afa20] of _0x443fe6.searchParams.entries());
        return _0x54013b;
    } catch {
        return p2(_0x28deab?.[1]);
    }
}
function p2(_0x5d36fd) {
    const _0x135c0f = { _0x47d2c6: decodeURIComponent(_0x598faa) };
    return _0x5d36fd && _0x5d36fd.split('&').forEach(_0x1104b4 => {
        ;
        const [_0x47d2c6, _0x598faa = ''] = _0x1104b4.split('=');
        ;
    }), _0x135c0f;
}
const j3 = 'onbeforeinstallprompt' in window;
let Di;
function H3() {
    ;
    window.addEventListener('beforeinstallprompt', _0x5f4982 => {
        ;
        Di = async () => {
            ;
            _0x5f4982.prompt();
            const {outcome: _0x33e7de} = await _0x5f4982.userChoice;
            _0x33e7de === 'accepted' && (Di = void 0);
        };
    });
}
function W3() {
    return Di;
}
const zc = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ], b2 = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ], Qs = zc.slice(), Si = b2.slice(), ss = 86400, V3 = 1440, z3 = 10080;
function y2() {
    const _0x385eab = { weekday: 'long' };
    ;
    const _0x332ae1 = ue.getDateTimeFormat(_0x385eab), _0x718b8d = new Date(Date.UTC(2017, 0, 2)), _0x174ffb = [];
    for (let _0x45de3b = 0; _0x45de3b < 7; ++_0x45de3b) {
        _0x174ffb.push(an(_0x332ae1.format(_0x718b8d)));
        _0x718b8d.setDate(_0x718b8d.getDate() + 1);
        ;
    }
    return _0x174ffb;
}
function v2() {
    ;
    ;
    const _0x48fe6a = ue.getDateTimeFormat(_0x36e754), _0x4f86fe = new Date(Date.UTC(2017, 0, 1)), _0x3af6dc = [];
    for (let _0x2e4181 = 0; _0x2e4181 < 12; ++_0x2e4181) {
        _0x3af6dc.push(an(_0x48fe6a.format(_0x4f86fe)));
        _0x4f86fe.setMonth(_0x4f86fe.getMonth() + 1);
        ;
    }
    return _0x3af6dc;
}
function G3() {
    ;
    Qs.splice(0, Qs.length, ...v2());
    Si.splice(0, Si.length, ...y2());
    ;
}
const Na = _0x24eb6f => {
    const _0x4cae04 = new Date(Date.UTC(_0x24eb6f.getFullYear(), _0x24eb6f.getMonth(), _0x24eb6f.getDate())), _0x9692c0 = _0x4cae04.getUTCDay() || 7;
    _0x4cae04.setUTCDate(_0x4cae04.getUTCDate() + 4 - _0x9692c0);
    const _0x358649 = new Date(Date.UTC(_0x4cae04.getUTCFullYear(), 0, 1));
    return Math.ceil(((_0x4cae04.getTime() - _0x358649.getTime()) / ss + 1) / 7);
};
function q3(_0x549ef0, _0x570f63) {
    ;
    _0x570f63 || (_0x570f63 = new Date(), _0x570f63.setHours(0, 0, 0, 0));
    const _0x544bfd = {
        day: 'numeric',
        month: 'long'
    };
    ;
    ;
    ;
    const _0x301e9f = _0x544bfd;
    return _0x549ef0.getFullYear() !== _0x570f63.getFullYear() && (_0x301e9f.year = 'numeric'), new ue.IntlDateElement({
        'date': _0x549ef0,
        'options': _0x301e9f
    }).element;
}
function E2(_0x3539ea) {
    const _0x1b1dc3 = new Date(), _0x39d50e = _0x1b1dc3.getTime() / 1000 | 0, _0x2218f1 = _0x3539ea.getTime() / 1000 | 0, _0x510604 = {};
    return _0x39d50e - _0x2218f1 < ss && _0x1b1dc3.getDate() === _0x3539ea.getDate() ? _0x510604.hour = _0x510604.minute = '2-digit' : _0x1b1dc3.getFullYear() !== _0x3539ea.getFullYear() ? (_0x510604.year = _0x510604.day = 'numeric', _0x510604.month = '2-digit') : _0x39d50e - _0x2218f1 < ss * 7 && Na(_0x1b1dc3) === Na(_0x3539ea) ? _0x510604.weekday = 'short' : (_0x510604.month = 'short', _0x510604.day = 'numeric'), new ue.IntlDateElement({
        'date': _0x3539ea,
        'options': _0x510604
    }).element;
}
const a0_0x4d4bde = {};
a0_0x4d4bde.hour = '2-digit';
a0_0x4d4bde.minute = '2-digit';
;
const Ai = a0_0x4d4bde;
function w2(_0xa12f33, _0xc0f23b = {}) {
    ;
    _0xc0f23b.combined && (_0xc0f23b.noToday = true);
    const _0x15cf2e = new Date(), _0x2b9597 = new Date(_0xa12f33 * 1000), _0x2b4ef0 = (_0x15cf2e.getTime() / 1000 | 0) - _0xa12f33, _0x5d3ab5 = _0xc0f23b.combined ? void 0 : D2(_0x2b9597);
    let _0x11722a;
    return !_0xc0f23b.noToday && _0x2b4ef0 < ss && _0x15cf2e.getDate() === _0x2b9597.getDate() ? _0x11722a = X(_0xc0f23b.capitalize ? 'Date.Today' : 'Peer.Status.Today') : !_0xc0f23b.noToday && _0x2b4ef0 > 0 && _0x2b4ef0 < ss * 2 && new Date(_0x15cf2e.getTime() - ss * 1000).getDate() === _0x2b9597.getDate() ? (_0x11722a = X(_0xc0f23b.capitalize ? 'Yesterday' : 'Peer.Status.Yesterday'), _0xc0f23b.capitalize && (_0x11722a.style.textTransform = 'capitalize')) : _0x15cf2e.getFullYear() !== _0x2b9597.getFullYear() ? _0x11722a = new ue.IntlDateElement({
        'date': _0x2b9597,
        'options': {
            'month': 'short',
            'day': 'numeric',
            'year': 'numeric',
            ..._0xc0f23b.combined ? Ai : {}
        }
    }).element : _0x11722a = new ue.IntlDateElement({
        'date': _0x2b9597,
        'options': {
            'month': 'short',
            'day': 'numeric',
            ..._0xc0f23b.combined ? Ai : {}
        }
    }).element, {
        'dateEl': _0x11722a,
        'timeEl': _0x5d3ab5
    };
}
function $3(_0x1f28a1, _0x243e8b = true, _0x45a75e = false) {
    const _0x174984 = {
        capitalize: _0x243e8b,
        noToday: _0x45a75e
    };
    ;
    ;
    ;
    const {
            dateEl: _0xae49d9,
            timeEl: _0x5700ec
        } = w2(_0x1f28a1, _0x174984), _0x404524 = document.createDocumentFragment();
    return _0x404524.append(_0xae49d9, ' ', X('ScheduleController.at'), ' ', _0x5700ec), _0x404524;
}
function D2(_0xcff849) {
    const _0x2fc921 = {};
    return _0x2fc921.date = _0xcff849, _0x2fc921.options = Ai, new ue.IntlDateElement(_0x2fc921).element;
}
N && (N.formatDateAccordingToTodayNew = E2);
function Y3(_0x25787d, _0x3d59cc) {
    const _0x17df46 = _0x25787d >= 12 && !(_0x25787d % 12);
    return X(_0x3d59cc ? _0x17df46 ? 'BoldYears' : 'BoldMonths' : _0x17df46 ? 'Years' : 'Months', [_0x17df46 ? _0x25787d / 12 : _0x25787d]);
}
const He = 2013, S2 = new RegExp('20[0-9]{1,2}'), kr = '\\p{L}', A2 = new RegExp('(' + kr + '{3,})', 'iu'), C2 = new RegExp('(' + kr + '{3,}) ([0-9]{0,4})', 'iu'), k2 = new RegExp('([0-9]{0,4}) (' + kr + '{2,})', 'iu'), F2 = new RegExp('^([0-9]{1,4})(\\.| |/|\\-)([0-9]{1,4})$', 'i'), P2 = new RegExp('^([0-9]{1,2})(\\.| |/|\\-)([0-9]{1,2})(\\.| |/|\\-)([0-9]{1,4})$', 'i'), _2 = [
        31,
        29,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];
function T2(_0x48e72a, _0x1e886a) {
    const _0x4fba44 = _0x48e72a.trim().toLowerCase();
    if (_0x4fba44.length < 3) {
        return;
    }
    if ([
            'today',
            ue.format('Peer.Status.Today', true)
        ].some(_0x42b2c4 => _0x42b2c4.indexOf(_0x4fba44) === 0)) {
        const _0x479eb7 = new Date(), _0x548e5c = _0x479eb7.getFullYear(), _0x5004eb = _0x479eb7.getMonth(), _0x57c062 = _0x479eb7.getDate();
        _0x479eb7.setFullYear(_0x548e5c, _0x5004eb, _0x57c062);
        _0x479eb7.setHours(0, 0, 0);
        ;
        const _0x2a855a = _0x479eb7.getTime();
        _0x479eb7.setFullYear(_0x548e5c, _0x5004eb, _0x57c062 + 1);
        _0x479eb7.setHours(0, 0, 0);
        ;
        const _0x487201 = _0x479eb7.getTime() - 1;
        _0x1e886a.push({
            'title': ue.format('Date.Today', true),
            'minDate': _0x2a855a,
            'maxDate': _0x487201
        });
        return;
    }
    if ([
            'yesterday',
            ue.format('Peer.Status.Yesterday', true)
        ].some(_0xaeabdb => _0xaeabdb.indexOf(_0x4fba44) === 0)) {
        const _0xcad5af = new Date(), _0x43dd37 = _0xcad5af.getFullYear(), _0x305cff = _0xcad5af.getMonth(), _0x31bdf7 = _0xcad5af.getDate();
        _0xcad5af.setFullYear(_0x43dd37, _0x305cff, _0x31bdf7);
        _0xcad5af.setHours(0, 0, 0);
        ;
        const _0x288216 = _0xcad5af.getTime() - 86400000;
        _0xcad5af.setFullYear(_0x43dd37, _0x305cff, _0x31bdf7 + 1);
        _0xcad5af.setHours(0, 0, 0);
        ;
        const _0x24b8d4 = _0xcad5af.getTime() - 86400001;
        _0x1e886a.push({
            'title': an(ue.format('Yesterday', true)),
            'minDate': _0x288216,
            'maxDate': _0x24b8d4
        });
        return;
    }
    const _0x316536 = I2(_0x4fba44);
    if (_0x316536 >= 0) {
        const _0x26b2a3 = new Date(), _0x1324d2 = _0x26b2a3.getTime(), _0x1ef234 = _0x26b2a3.getDay(), _0x22d8d0 = _0x316536 - _0x1ef234;
        _0x26b2a3.setDate(_0x26b2a3.getDate() + _0x22d8d0);
        _0x26b2a3.getTime() > _0x1324d2 && _0x26b2a3.setTime(_0x26b2a3.getTime() - 604800000);
        ;
        const _0x3440ee = _0x26b2a3.getFullYear(), _0x31fe37 = _0x26b2a3.getMonth(), _0xc58067 = _0x26b2a3.getDate();
        _0x26b2a3.setFullYear(_0x3440ee, _0x31fe37, _0xc58067);
        _0x26b2a3.setHours(0, 0, 0);
        ;
        const _0x197495 = _0x26b2a3.getTime();
        _0x26b2a3.setFullYear(_0x3440ee, _0x31fe37, _0xc58067 + 1);
        _0x26b2a3.setHours(0, 0, 0);
        ;
        const _0x23f64f = _0x26b2a3.getTime() - 1;
        _0x1e886a.push({
            'title': qc(_0x197495),
            'minDate': _0x197495,
            'maxDate': _0x23f64f
        });
        return;
    }
    let _0x29fa05;
    if ((_0x29fa05 = F2.exec(_0x4fba44)) !== null) {
        const _0x628261 = _0x29fa05[1], _0x2416dc = _0x29fa05[3], _0x54818c = parseInt(_0x628261), _0xeb93da = parseInt(_0x2416dc);
        if (_0x54818c > 0 && _0x54818c <= 31) {
            if (_0xeb93da >= He && _0x54818c <= 12) {
                const _0x4aa7a9 = _0xeb93da, _0x3f4c2c = _0x54818c - 1;
                Cs(_0x1e886a, _0x3f4c2c, _0x4aa7a9);
                return;
            } else {
                if (_0xeb93da <= 12) {
                    const _0x16ae3c = _0x54818c - 1, _0x3cd19e = _0xeb93da - 1;
                    Bn(_0x1e886a, _0x16ae3c, _0x3cd19e);
                }
            }
        } else {
            if (_0x54818c >= He && _0xeb93da <= 12) {
                const _0x52eef5 = _0x54818c, _0x363919 = _0xeb93da - 1;
                Cs(_0x1e886a, _0x363919, _0x52eef5);
            }
        }
        return;
    }
    if ((_0x29fa05 = P2.exec(_0x4fba44)) !== null) {
        const _0x902f1e = _0x29fa05[1], _0xda0d07 = _0x29fa05[3], _0x468fe1 = _0x29fa05[5];
        if (!_0x29fa05[2] === _0x29fa05[4]) {
            return;
        }
        const _0x1d304a = parseInt(_0x902f1e), _0xa680b3 = parseInt(_0xda0d07) - 1;
        let _0x5ca801 = parseInt(_0x468fe1);
        _0x5ca801 >= 10 && _0x5ca801 <= 99 && (_0x5ca801 += 2000);
        const _0x7005ec = new Date().getFullYear();
        if ($c(_0x1d304a - 1, _0xa680b3) && _0x5ca801 >= He && _0x5ca801 <= _0x7005ec) {
            const _0x3c7f3d = new Date();
            _0x3c7f3d.setFullYear(_0x5ca801, _0xa680b3, _0x1d304a);
            _0x3c7f3d.setHours(0, 0, 0);
            ;
            const _0x52e86d = _0x3c7f3d.getTime();
            _0x3c7f3d.setFullYear(_0x5ca801, _0xa680b3, _0x1d304a + 1);
            _0x3c7f3d.setHours(0, 0, 0);
            ;
            const _0x27df7e = _0x3c7f3d.getTime() - 1;
            _0x1e886a.push({
                'title': Gc(_0x52e86d),
                'minDate': _0x52e86d,
                'maxDate': _0x27df7e
            });
            return;
        }
        return;
    }
    if ((_0x29fa05 = C2.exec(_0x4fba44)) !== null) {
        const _0x23de60 = _0x29fa05[1], _0x112bad = _0x29fa05[2], _0x474970 = Un(_0x23de60);
        if (_0x474970 >= 0) {
            const _0x3a5075 = +_0x112bad || new Date().getUTCFullYear();
            if (_0x3a5075 > 0 && _0x3a5075 <= 31) {
                const _0x1719cc = _0x3a5075 - 1;
                Bn(_0x1e886a, _0x1719cc, _0x474970);
                return;
            } else {
                if (_0x3a5075 >= He) {
                    Cs(_0x1e886a, _0x474970, _0x3a5075);
                    return;
                }
            }
        }
    }
    if ((_0x29fa05 = k2.exec(_0x4fba44)) !== null) {
        const _0x4d60cc = _0x29fa05[1], _0x50a7d9 = _0x29fa05[2], _0x51a1f6 = Un(_0x50a7d9);
        if (_0x51a1f6 >= 0) {
            const _0x3aab68 = +_0x4d60cc;
            if (_0x3aab68 > 0 && _0x3aab68 <= 31) {
                const _0x17f1b5 = _0x3aab68 - 1;
                Bn(_0x1e886a, _0x17f1b5, _0x51a1f6);
                return;
            } else {
                _0x3aab68 >= He && Cs(_0x1e886a, _0x51a1f6, _0x3aab68);
            }
        }
    }
    if ((_0x29fa05 = A2.exec(_0x4fba44)) !== null) {
        const _0x184af5 = _0x29fa05[1], _0x4945b7 = Un(_0x184af5);
        if (_0x4945b7 >= 0) {
            const _0x5e29e3 = new Date().getFullYear();
            for (let _0x4a3ec6 = _0x5e29e3; _0x4a3ec6 >= He; --_0x4a3ec6) {
                Cs(_0x1e886a, _0x4945b7, _0x4a3ec6);
            }
        }
    }
    if ((_0x29fa05 = S2.exec(_0x4fba44)) !== null) {
        let _0x12cd98 = +_0x29fa05[0];
        const _0x2e8626 = new Date().getFullYear();
        if (_0x12cd98 < He) {
            _0x12cd98 = He;
            for (let _0x28f116 = _0x2e8626; _0x28f116 >= _0x12cd98; _0x28f116--) {
                const _0x217644 = new Date();
                _0x217644.setFullYear(_0x28f116, 0, 1);
                _0x217644.setHours(0, 0, 0);
                ;
                const _0xb834c = _0x217644.getTime();
                _0x217644.setFullYear(_0x28f116 + 1, 0, 1);
                _0x217644.setHours(0, 0, 0);
                ;
                const _0x5b15c5 = _0x217644.getTime() - 1, _0x576e8e = {
                        title: '' + _0x28f116,
                        minDate: _0xb834c,
                        maxDate: _0x5b15c5
                    };
                ;
                ;
                ;
                _0x1e886a.push(_0x576e8e);
                ;
            }
        } else {
            if (_0x12cd98 <= _0x2e8626) {
                const _0x5a4bb0 = new Date();
                _0x5a4bb0.setFullYear(_0x12cd98, 0, 1);
                _0x5a4bb0.setHours(0, 0, 0);
                ;
                const _0x2c5f1b = _0x5a4bb0.getTime();
                _0x5a4bb0.setFullYear(_0x12cd98 + 1, 0, 1);
                _0x5a4bb0.setHours(0, 0, 0);
                ;
                const _0x5af3d5 = _0x5a4bb0.getTime() - 1, _0x8f2cd2 = {
                        title: '' + _0x12cd98,
                        minDate: _0x2c5f1b,
                        maxDate: _0x5af3d5
                    };
                ;
                ;
                ;
                _0x1e886a.push(_0x8f2cd2);
                ;
            }
        }
        return;
    }
}
function Cs(_0x3a6cc3, _0xe56617, _0x121563) {
    const _0x3e2592 = new Date().getFullYear(), _0x365cc6 = Date.now();
    if (_0x121563 >= He && _0x121563 <= _0x3e2592) {
        const _0x2fc82b = new Date();
        _0x2fc82b.setFullYear(_0x121563, _0xe56617, 1);
        _0x2fc82b.setHours(0, 0, 0);
        ;
        const _0x592898 = _0x2fc82b.getTime();
        if (_0x592898 > _0x365cc6) {
            return;
        }
        _0x2fc82b.setMonth(_0x2fc82b.getMonth() + 1);
        const _0x38cfbd = _0x2fc82b.getTime() - 1;
        _0x3a6cc3.push({
            'title': L2(_0x592898),
            'minDate': _0x592898,
            'maxDate': _0x38cfbd
        });
    }
}
function Bn(_0x156567, _0x4cdace, _0x235dfd) {
    ;
    if ($c(_0x4cdace, _0x235dfd)) {
        const _0x2a6556 = new Date().getFullYear(), _0x57e714 = Date.now();
        for (let _0x3f7028 = _0x2a6556; _0x3f7028 >= He; _0x3f7028--) {
            if (_0x235dfd === 1 && _0x4cdace === 28 && !M2(_0x3f7028)) {
                continue;
            }
            const _0x164242 = new Date();
            _0x164242.setFullYear(_0x3f7028, _0x235dfd, _0x4cdace + 1);
            _0x164242.setHours(0, 0, 0);
            ;
            const _0x54f00b = _0x164242.getTime();
            if (_0x54f00b > _0x57e714) {
                continue;
            }
            _0x164242.setFullYear(_0x3f7028, _0x235dfd, _0x4cdace + 2);
            _0x164242.setHours(0, 0, 0);
            ;
            const _0x4ade3d = _0x164242.getTime() - 1;
            _0x3f7028 === _0x2a6556 ? _0x156567.push({
                'title': x2(_0x54f00b),
                'minDate': _0x54f00b,
                'maxDate': _0x4ade3d
            }) : _0x156567.push({
                'title': Gc(_0x54f00b),
                'minDate': _0x54f00b,
                'maxDate': _0x4ade3d
            });
        }
    }
}
function L2(_0x2842f7) {
    const _0x473f7a = new Date(_0x2842f7);
    return Qs[_0x473f7a.getMonth()] + ' ' + _0x473f7a.getFullYear();
}
function x2(_0x595c5f) {
    const _0x9e2ebe = new Date(_0x595c5f);
    return Qs[_0x9e2ebe.getMonth()] + ' ' + _0x9e2ebe.getDate();
}
function Gc(_0x3c4f1a) {
    const _0x199d31 = new Date(_0x3c4f1a);
    return ('0' + _0x199d31.getDate()).slice(-2) + '.' + ('0' + (_0x199d31.getMonth() + 1)).slice(-2) + '.' + _0x199d31.getFullYear();
}
function qc(_0x40da96) {
    const _0x2c8836 = new Date(_0x40da96);
    return Si[_0x2c8836.getDay()];
}
function $c(_0xbb0ac5, _0xc82b90) {
    return _0xc82b90 >= 0 && _0xc82b90 < 12 && _0xbb0ac5 >= 0 && _0xbb0ac5 < _2[_0xc82b90];
}
function M2(_0x5839a5) {
    return _0x5839a5 % 4 === 0 && _0x5839a5 % 100 !== 0 || _0x5839a5 % 400 === 0;
}
function Un(_0x1012e3) {
    ;
    _0x1012e3 = _0x1012e3.toLowerCase();
    for (let _0x130f33 = 0; _0x130f33 < 12; _0x130f33++) {
        if ([
                zc[_0x130f33],
                Qs[_0x130f33]
            ].some(_0x51c616 => _0x51c616.toLowerCase().indexOf(_0x1012e3) === 0)) {
            return _0x130f33;
        }
    }
    return -1;
}
function I2(_0x27b095) {
    const _0x305191 = new Date();
    if (_0x27b095.length <= 3) {
        return -1;
    }
    for (let _0x213530 = 0; _0x213530 < 7; _0x213530++) {
        if (_0x305191.setDate(_0x305191.getDate() + 1), qc(_0x305191.getTime()).toLowerCase().indexOf(_0x27b095) === 0) {
            return _0x305191.getDay();
        }
    }
    return -1;
}
N.fillTipDates = T2;
const R2 = Re, Yc = Re || !Ri && (!be || bs) || Ha < 113, K3 = !R2 && !Yc;
function J3(_0x3d6ab4, _0x220fff = false) {
    const _0x5a3992 = new URL(location.href);
    _0x3d6ab4 === 1 ? _0x5a3992.searchParams.delete(fs) : _0x5a3992.searchParams.set(fs, _0x3d6ab4 + '');
    const _0x5268b8 = _0x5a3992.search ? _0x5a3992.pathname + _0x5a3992.search : _0x5a3992.pathname;
    _0x220fff ? window.open(_0x5268b8, '_blank') : (Ie.overrideHash(), history.replaceState(null, '', _0x5268b8), location.reload());
}
function X3() {
    ;
    Node.prototype.replaceChildren === void 0 && (Node.prototype.replaceChildren = function (..._0x211ccf) {
        ;
        this.textContent = '';
        _0x211ccf && this.append(..._0x211ccf);
        ;
    });
}
function O2() {
    const _0x339059 = document.querySelector('.chat.active');
    if (!_0x339059) {
        return;
    }
    const _0xea093e = _0x339059.cloneNode(true);
    _0xea093e.querySelectorAll('.chat-input, .chat-background').forEach(_0x362e17 => _0x362e17.remove());
    const _0x63948a = _0xea093e.querySelector('.bubbles'), _0x305a06 = _0x63948a.querySelector('.bubbles-inner');
    _0x63948a.replaceChildren(_0x305a06);
    _0x63948a.querySelectorAll('video').forEach(_0x40bcaa => _0x40bcaa.muted = true);
    ;
    const _0x774b65 = document.createElement('div');
    _0x774b65.setAttribute('id', 'printable');
    _0x774b65.append(_0xea093e);
    document.body.append(_0x774b65);
    ;
}
function N2() {
    ;
    document.getElementById('printable')?.remove();
}
function Q3() {
    ;
    window.addEventListener('beforeprint', O2);
    window.addEventListener('afterprint', N2);
    ;
}
function Z3() {
    ;
    document.addEventListener('dragstart', _0x164a4d => {
        ;
        if (_0x164a4d.target?.tagName === 'IMG') {
            return _0x164a4d.preventDefault(), false;
        }
    });
    document.addEventListener('contextmenu', _0x3b298c => {
        ;
        _0x3b298c.target.tagName === 'IMG' && !window.appMediaViewer && se(_0x3b298c);
    });
    ;
}
let B2 = 0;
function Kc(_0x173acf, _0x49bfd7 = () => Promise.resolve(), _0x567145 = null, _0x93f4d2 = false, _0x3f490f = _0x173acf) {
    ;
    if (_0x173acf.querySelector('.c-ripple')) {
        return;
    }
    _0x173acf.classList.add('rp');
    const _0x5e7ea9 = document.createElement('div');
    _0x5e7ea9.classList.add('c-ripple');
    _0x173acf.classList.contains('rp-square') && _0x5e7ea9.classList.add('is-square');
    _0x173acf[_0x93f4d2 ? 'prepend' : 'append'](_0x5e7ea9);
    ;
    let _0x3233db;
    const _0x53f4b2 = (_0x212dd2, _0x541eb1) => {
            ;
            const _0x2e86cc = Date.now(), _0x4d3a7f = document.createElement('div'), _0x1bde3d = B2++, _0x28b14d = +window.getComputedStyle(_0x5e7ea9).getPropertyValue('--ripple-duration').replace('s', '') * 1000, _0x122169 = _0x3233db = () => {
                    const _0x36b732 = Date.now() - _0x2e86cc, _0x406f75 = () => {
                            ;
                            ut.mutate(() => {
                                ;
                                _0x4d3a7f.remove();
                            });
                            _0x567145?.(_0x1bde3d);
                            ;
                        };
                    if (_0x36b732 < _0x28b14d) {
                        const _0x557976 = Math.max(_0x28b14d - _0x36b732, _0x28b14d / 2);
                        setTimeout(() => _0x4d3a7f.classList.add('hiding'), Math.max(_0x557976 - _0x28b14d / 2, 0));
                        setTimeout(_0x406f75, _0x557976);
                        ;
                    } else {
                        _0x4d3a7f.classList.add('hiding');
                        setTimeout(_0x406f75, _0x28b14d / 2);
                        ;
                    }
                    Fe || (window.removeEventListener('contextmenu', _0x3233db), window.removeEventListener('mousemove', _0x3233db));
                    _0x3233db = null;
                    _0x498a46 = false;
                    ;
                };
            _0x49bfd7?.(_0x1bde3d);
            Oe(() => {
                ;
                if (_0x122169 !== _0x3233db) {
                    return;
                }
                const _0x48f086 = _0x5e7ea9.getBoundingClientRect();
                _0x4d3a7f.classList.add('c-ripple__circle');
                const _0x36ea60 = _0x212dd2 - _0x48f086.left, _0x1aef06 = _0x541eb1 - _0x48f086.top, _0x589fb6 = Math.sqrt((Math.abs(_0x1aef06 - _0x48f086.height / 2) + _0x48f086.height / 2) ** 2 + (Math.abs(_0x36ea60 - _0x48f086.width / 2) + _0x48f086.width / 2) ** 2), _0x206fcf = _0x36ea60 - _0x589fb6 / 2, _0x3bedce = _0x1aef06 - _0x589fb6 / 2;
                _0x4d3a7f.style.width = _0x4d3a7f.style.height = _0x589fb6 + 'px';
                _0x4d3a7f.style.left = _0x206fcf + 'px';
                _0x4d3a7f.style.top = _0x3bedce + 'px';
                _0x4d3a7f.style.opacity = '0';
                _0x5e7ea9.append(_0x4d3a7f);
                _0x4d3a7f.offsetWidth;
                _0x4d3a7f.style.opacity = '';
                ;
            });
            ;
        }, _0x149df0 = _0x360a36 => _0x360a36.target !== _0x173acf && ([
            'BUTTON',
            'A'
        ].includes(_0x360a36.target.tagName) || yt(_0x360a36.target, 'c-ripple') !== _0x5e7ea9) && (_0x3f490f === _0x173acf || !Zf(_0x360a36.target, _0x3f490f)) && !yt(_0x360a36.target, 'checkbox-field');
    let _0x498a46 = false;
    if (Fe) {
        const _0x58c724 = () => {
                _0x3233db?.();
            }, _0x18130e = _0x28bdac => {
                ;
                if (!ot.isAvailable('animations') || _0x28bdac.touches.length > 1 || _0x498a46 || _0x149df0(_0x28bdac)) {
                    return;
                }
                _0x498a46 = true;
                const {
                        clientX: _0x32a89e,
                        clientY: _0x1fd5c3
                    } = _0x28bdac.touches[0], _0x579abe = { once: true };
                ;
                const _0x5ef5ac = { once: true };
                ;
                _0x53f4b2(_0x32a89e, _0x1fd5c3);
                _0x3f490f.addEventListener('touchend', _0x58c724, _0x579abe);
                window.addEventListener('touchmove', _0x4f98de => {
                    ;
                    _0x4f98de.cancelBubble = true;
                    _0x4f98de.stopPropagation();
                    _0x58c724();
                    _0x3f490f.removeEventListener('touchend', _0x58c724);
                    ;
                }, _0x5ef5ac);
                ;
                ;
            }, _0x5d918a = {};
        return _0x5d918a.passive = true, (_0x3f490f.addEventListener('touchstart', _0x18130e, _0x5d918a), {
            'dispose': () => _0x3f490f.removeEventListener('touchstart', _0x18130e),
            'element': _0x5e7ea9
        });
    } else {
        const _0xa4a083 = _0x50c6ba => {
                ;
                if (![
                        0,
                        2
                    ].includes(_0x50c6ba.button) || !ot.isAvailable('animations') || _0x3f490f.dataset.ripple === '0' || _0x149df0(_0x50c6ba)) {
                    return;
                }
                if (_0x498a46) {
                    _0x498a46 = false;
                    return;
                }
                const {
                        clientX: _0x43cb2a,
                        clientY: _0x32291e
                    } = _0x50c6ba, _0x9e2a0b = {
                        once: true,
                        passive: true
                    };
                ;
                ;
                ;
                const _0x23ca4f = {
                    once: true,
                    passive: true
                };
                ;
                ;
                _0x53f4b2(_0x43cb2a, _0x32291e);
                window.addEventListener('mouseup', _0x3233db, _0x9e2a0b);
                window.addEventListener('contextmenu', _0x3233db, _0x23ca4f);
                ;
                ;
            }, _0x442a26 = {};
        return _0x442a26.passive = true, (_0x3f490f.addEventListener('mousedown', _0xa4a083, _0x442a26), {
            'dispose': () => _0x3f490f.removeEventListener('mousedown', _0xa4a083),
            'element': _0x5e7ea9
        });
    }
}
function U2(_0x151b6a) {
    ;
    if (_0x151b6a.key === 'Enter' && !Re && !_0x151b6a.isComposing) {
        if (I.settings.sendShortcut === 'enter') {
            return _0x151b6a.shiftKey || _0x151b6a.ctrlKey || _0x151b6a.metaKey ? void 0 : true;
        }
        {
            const _0x10c5c4 = Et ? _0x151b6a.metaKey : _0x151b6a.ctrlKey;
            if (_0x151b6a.shiftKey || (Et ? _0x151b6a.ctrlKey : _0x151b6a.metaKey)) {
                return;
            }
            if (_0x10c5c4) {
                return true;
            }
        }
    }
    return false;
}
function e6(_0x1cd727) {
    ;
    _0x1cd727.requestFullscreen ? _0x1cd727.requestFullscreen() : _0x1cd727.mozRequestFullScreen ? _0x1cd727.mozRequestFullScreen() : _0x1cd727.webkitRequestFullscreen ? _0x1cd727.webkitRequestFullscreen() : _0x1cd727.msRequestFullscreen && _0x1cd727.msRequestFullscreen();
}
function t6() {
    ;
    document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen();
}
function j2(_0x16e62e, _0xc3b9e8, _0x366840) {
    const _0x855fc9 = _0x366840 ? _0x366840.add(_0x16e62e) : _0x16e62e.addEventListener.bind(_0x16e62e);
    'webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange'.split(' ').forEach(_0x2284fc => {
        _0x855fc9(_0x2284fc, _0xc3b9e8, false);
    });
}
function Jc() {
    ;
    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
}
function s6() {
    return !!Jc();
}
const Ba = 250, H2 = 600, Xc = 1500, W2 = 500;
var V2 = (_0xc96581 => (_0xc96581[_0xc96581.Up = 0] = 'Up', _0xc96581[_0xc96581.Down = 1] = 'Down', _0xc96581[_0xc96581.Static = 2] = 'Static', _0xc96581))(V2 || {});
function f6(_0x470b01, _0x101e14) {
    const _0x30a8fe = {};
    return _0x30a8fe.container = _0x470b01, _0x30a8fe.element = _0x470b01, _0x30a8fe.getElementPosition = () => -_0x470b01.scrollLeft, _0x30a8fe.position = 'start', _0x30a8fe.axis = 'x', Qc(_0x30a8fe);
}
function Qc(_0x59425d) {
    ;
    if (_0x59425d.margin ?? (_0x59425d.margin = 0), _0x59425d.maxDistance ?? (_0x59425d.maxDistance = Xc), _0x59425d.axis ?? (_0x59425d.axis = 'y'), (!ot.isAvailable('animations') || _0x59425d.forceDuration === 0) && (_0x59425d.forceDirection = 2), _0x59425d.forceDirection === 2) {
        return _0x59425d.forceDuration = 0, Ci(_0x59425d);
    }
    const _0x21d53c = d1().then(() => Ci(_0x59425d));
    return _0x59425d.axis === 'y' ? Vo(_0x21d53c) : _0x21d53c;
}
function Ci(_0x1abb0c) {
    const {
        element: _0x33ace2,
        container: _0x3c7e11,
        getNormalSize: _0x3a678b,
        getElementPosition: _0x22ec61,
        transitionFunction: _0x59676f,
        axis: _0xd36d6f,
        margin: _0x3aa226,
        position: _0x453dd0,
        forceDirection: _0x551111,
        maxDistance: _0x5a457f,
        forceDuration: _0x146804
    } = _0x1abb0c;
    if (!Ys(_0x33ace2)) {
        return Tf(_0x3c7e11), Promise.resolve();
    }
    const _0x585802 = _0xd36d6f === 'y' ? 'top' : 'left', _0x2044bd = _0xd36d6f === 'y' ? 'bottom' : 'right', _0x4679e7 = _0xd36d6f === 'y' ? 'height' : 'width', _0x24f0df = _0xd36d6f === 'y' ? 'scrollHeight' : 'scrollWidth', _0x1c2cfb = _0xd36d6f === 'y' ? 'scrollHeight' : 'offsetWidth', _0x5b0093 = _0xd36d6f === 'y' ? 'scrollTop' : 'scrollLeft', _0x3441fa = _0x33ace2.getBoundingClientRect(), _0x3f703b = _0x3c7e11.getBoundingClientRect ? _0x3c7e11.getBoundingClientRect() : document.body.getBoundingClientRect(), _0x2437fd = _0x3441fa[_0x585802] - _0x3f703b[_0x585802], _0x1fdfff = _0x22ec61 ? _0x22ec61({
            'elementRect': _0x3441fa,
            'containerRect': _0x3f703b,
            'elementPosition': _0x2437fd
        }) : _0x2437fd, _0x607108 = _0x33ace2[_0x1c2cfb], _0x59e46f = _0x3a678b ? _0x3a678b({ 'rect': _0x3f703b }) : _0x3f703b[_0x4679e7];
    let _0x1cbfc9 = _0x3c7e11[_0x5b0093];
    const _0x39ab47 = _0x3c7e11[_0x24f0df];
    let _0x10763a;
    switch (_0x453dd0) {
    case 'start':
        _0x10763a = _0x1fdfff - _0x3aa226;
        break;
    case 'end':
        _0x10763a = _0x3441fa[_0x2044bd] - _0x3f703b[_0x2044bd] + _0x3aa226;
        break;
    case 'nearest':
    case 'center':
        if (_0x607108 < _0x59e46f) {
            _0x10763a = _0x1fdfff + _0x607108 / 2 - _0x59e46f / 2;
        } else {
            if (_0x1abb0c.fallbackToElementStartWhenCentering && _0x1abb0c.fallbackToElementStartWhenCentering !== _0x33ace2) {
                return _0x1abb0c.element = _0x1abb0c.fallbackToElementStartWhenCentering, _0x1abb0c.position = 'start', Ci(_0x1abb0c);
            }
            _0x10763a = _0x1fdfff - _0x3aa226;
        }
        break;
    }
    if (Math.abs(_0x10763a - (_0x3aa226 || 0)) < 1) {
        return Tf(_0x3c7e11), Promise.resolve();
    }
    let _0x3f4954;
    if (_0xd36d6f === 'y' && _0x551111 === void 0 && (_0x10763a > _0x5a457f ? (_0x3f4954 = _0x1cbfc9 += _0x10763a - _0x5a457f, _0x10763a = _0x5a457f) : _0x10763a < -_0x5a457f && (_0x3f4954 = _0x1cbfc9 += _0x10763a + _0x5a457f, _0x10763a = -_0x5a457f)), _0x10763a < 0) {
        const _0x3d7fe5 = -_0x1cbfc9;
        _0x10763a = Math.max(_0x10763a, _0x3d7fe5);
    } else {
        if (_0x10763a > 0) {
            const _0x2e9c0e = _0x39ab47 - (_0x1cbfc9 + _0x59e46f);
            _0x10763a = Math.min(_0x10763a, _0x2e9c0e);
        }
    }
    const _0x23eef9 = _0x1cbfc9 + _0x10763a, _0x5ebc36 = Math.abs(_0x10763a), _0x581db5 = _0x146804 ?? Ba + _0x5ebc36 / Xc * (H2 - Ba), _0x44bfe3 = Date.now(), _0x2aab04 = _0x59676f ?? (_0x5ebc36 < W2 ? G2 : z2), _0xf47f63 = () => _0x581db5 ? Math.min((Date.now() - _0x44bfe3) / _0x581db5, 1) : 1, _0x16adf3 = () => {
            ;
            if (_0x3f4954 !== void 0) {
                _0x3c7e11[_0x5b0093] = _0x3f4954;
                _0x3f4954 = void 0;
            }
            const _0xa97bb4 = _0xf47f63(), _0x102826 = _0x2aab04(_0xa97bb4), _0x2f3268 = _0x10763a * (1 - _0x102826);
            return _0x3c7e11[_0x5b0093] = Math.round(_0x23eef9 - _0x2f3268), _0xa97bb4 < 1;
        };
    if (!_0x581db5 || !_0x10763a) {
        return Tf(_0x3c7e11), _0x16adf3(), Promise.resolve();
    }
    if (_0x1abb0c.startCallback) {
        const _0x590dfd = _0x39ab47 - Math.round(_0x23eef9 + _0x3c7e11[_0xd36d6f === 'y' ? 'offsetHeight' : 'offsetWidth']), _0x568a5a = {
                scrollSize: _0x39ab47,
                scrollPosition: _0x1cbfc9,
                distanceToEnd: _0x590dfd,
                path: _0x10763a,
                duration: _0x581db5,
                containerRect: _0x3f703b,
                elementRect: _0x3441fa,
                getProgress: _0xf47f63
            };
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        _0x1abb0c.startCallback(_0x568a5a);
        ;
    }
    return mc(_0x16adf3, _0x3c7e11);
}
function z2(_0x2c55a2) {
    return 1 - (1 - _0x2c55a2) ** 5;
}
function G2(_0x1cbb0f) {
    return 1 - (1 - _0x1cbb0f) ** 3.5;
}
const q2 = 24, sn = !Yc;
let ki, Fi;
sn ? (ki = _0x2d426c => requestAnimationFrame(_0x2d426c), Fi = _0x43765c => cancelAnimationFrame(_0x43765c)) : (ki = _0x3d069c => window.setTimeout(_0x3d069c, q2), Fi = _0xb2f52a => window.clearTimeout(_0xb2f52a));
class Zc {
    constructor(_0x329e68, _0x205d9c = '', _0x4cf663 = document.createElement('div')) {
        ;
        this.el = _0x329e68;
        this.container = _0x4cf663;
        this.onScrollMeasure = 0;
        this.lastScrollPosition = 0;
        this.lastScrollDirection = 0;
        this.isHeavyAnimationInProgress = false;
        this.needCheckAfterAnimation = false;
        this.onScroll = () => {
            ;
            if (this.isHeavyAnimationInProgress) {
                this.cancelMeasure();
                this.needCheckAfterAnimation = true;
                ;
                return;
            }
            !this.onScrolledTop && !this.onScrolledBottom && !this.splitUp && !this.onAdditionalScroll || this.onScrollMeasure || (this.onScrollMeasure = ki(() => {
                ;
                this.onScrollMeasure = 0;
                const _0x593e09 = this.scrollPosition;
                this.lastScrollDirection = this.lastScrollPosition === _0x593e09 ? 0 : this.lastScrollPosition < _0x593e09 ? 1 : -1;
                this.lastScrollPosition = _0x593e09;
                this.updateThumb(_0x593e09);
                this.onAdditionalScroll && this.onAdditionalScroll();
                this.checkForTriggers && this.checkForTriggers();
                ;
            }));
        };
        this.onMouseMove = _0x33edf6 => {
            ;
            se(_0x33edf6);
            const _0x49ac81 = this.scrollSize, _0x533469 = this.clientSize, _0x59ff66 = this.thumb.offsetHeight, _0x5186de = _0x49ac81 - _0x533469, _0x5c4d47 = _0x533469 - _0x59ff66, _0x31e3b9 = (_0x33edf6[this.clientAxis] - this.startMousePosition) / _0x5c4d47 * _0x5186de, _0x20b907 = this.startScrollPosition + _0x31e3b9;
            this.scrollPosition = _0x20b907;
        };
        this.onMouseDown = _0x324ab3 => {
            const _0x565f6c = { once: true };
            ;
            se(_0x324ab3);
            this.startMousePosition = _0x324ab3[this.clientAxis];
            this.startScrollPosition = this.scrollPosition;
            this.thumb.classList.add('is-focused');
            window.addEventListener('mousemove', this.onMouseMove);
            window.addEventListener('mouseup', this.onMouseUp, _0x565f6c);
            ;
            ;
        };
        this.onMouseUp = _0x4a172e => {
            ;
            window.removeEventListener('mousemove', this.onMouseMove);
            this.thumb.classList.remove('is-focused');
            ;
        };
        this.container.classList.add('scrollable');
        this.log = Q('SCROLL' + (_0x205d9c ? '-' + _0x205d9c : ''), ef.Error);
        _0x329e68 && (Array.from(_0x329e68.children).forEach(_0x5eaba8 => this.container.append(_0x5eaba8)), _0x329e68.append(this.container));
        ;
    }
    ['addScrollListener']() {
        const _0x4ae50e = {
            passive: true,
            capture: true
        };
        ;
        ;
        this.addedScrollListener || (this.addedScrollListener = true, this.container.addEventListener('scroll', this.onScroll, _0x4ae50e));
        ;
    }
    ['removeScrollListener']() {
        const _0x5f2eef = { capture: true };
        ;
        this.addedScrollListener && (this.addedScrollListener = false, this.container.removeEventListener('scroll', this.onScroll, _0x5f2eef));
        ;
    }
    ['setListeners']() {
        const _0x59c2aa = { passive: true };
        ;
        this.removeHeavyAnimationListener || (window.addEventListener('resize', this.onScroll, _0x59c2aa), this.addScrollListener(), this.removeHeavyAnimationListener = qo(() => {
            ;
            this.isHeavyAnimationInProgress = true;
            this.onScrollMeasure && (this.cancelMeasure(), this.needCheckAfterAnimation = true);
            ;
        }, () => {
            ;
            this.isHeavyAnimationInProgress = false;
            this.needCheckAfterAnimation && (this.onScroll(), this.needCheckAfterAnimation = false);
            ;
        }));
        ;
    }
    ['removeListeners']() {
        ;
        this.removeHeavyAnimationListener && (window.removeEventListener('resize', this.onScroll), this.thumb && (this.thumb.removeEventListener('mousedown', this.onMouseMove), window.removeEventListener('mousemove', this.onMouseMove), window.removeEventListener('mouseup', this.onMouseUp)), this.removeScrollListener(), this.removeHeavyAnimationListener(), this.removeHeavyAnimationListener = void 0);
    }
    ['destroy']() {
        ;
        this.removeListeners();
        this.onAdditionalScroll = void 0;
        this.onScrolledTop = void 0;
        this.onScrolledBottom = void 0;
        ;
    }
    ['prepend'](..._0x2990de) {
        const _0x3537ba = this.splitUp || this.padding || this.container;
        this.thumb && _0x2990de.unshift(this.thumbContainer);
        _0x3537ba.prepend(..._0x2990de);
        this.onSizeChange();
        ;
    }
    ['append'](..._0x116360) {
        ;
        (this.splitUp || this.padding || this.container).append(..._0x116360);
        this.onSizeChange();
        ;
    }
    ['scrollIntoViewNew'](_0x3f1d37) {
        const _0x502ae8 = { ..._0x3f1d37 };
        return _0x502ae8.container = this.container, Qc(_0x502ae8);
    }
    ['updateThumb'](_0x58f5ba = this.scrollPosition) {
        ;
        if (!sn || !this.thumb) {
            return;
        }
        const _0x16cf33 = this.container[this.scrollSizeProperty], _0x387764 = this.container[this.clientSizeProperty], _0x550fd9 = _0x16cf33 / _0x387764 / 0.75, _0x521410 = Math.max(20, _0x387764 / _0x550fd9), _0x494b58 = _0x58f5ba / (_0x16cf33 - _0x387764) * _0x387764, _0x4d0c83 = _0x58f5ba / (_0x16cf33 - _0x387764), _0x56f1b1 = _0x387764 - _0x521410;
        _0x387764 < _0x16cf33 ? (this.thumb.style.height = _0x521410 + 'px', this.thumb.style.transform = 'translateY(' + Math.min(_0x56f1b1, _0x494b58 - _0x521410 * _0x4d0c83) + 'px)') : this.thumb.style.height = '0px';
    }
    ['cancelMeasure']() {
        ;
        this.onScrollMeasure && (Fi(this.onScrollMeasure), this.onScrollMeasure = 0);
    }
    ['onSizeChange']() {
        ;
        sn && this.thumb && this.onScroll();
    }
    ['getDistanceToEnd']() {
        ;
        return this.scrollSize - Math.round(this.scrollPosition + this.offsetSize);
    }
    get ['isScrolledToEnd']() {
        ;
        return this.getDistanceToEnd() <= 1;
    }
    get ['scrollPosition']() {
        ;
        return this.container[this.scrollPositionProperty];
    }
    set ['scrollPosition'](_0xdbe799) {
        ;
        this.container[this.scrollPositionProperty] = _0xdbe799;
    }
    get ['scrollSize']() {
        ;
        return this.container[this.scrollSizeProperty];
    }
    get ['clientSize']() {
        ;
        return this.container[this.clientSizeProperty];
    }
    get ['offsetSize']() {
        ;
        return this.container[this.offsetSizeProperty];
    }
    get ['firstElementChild']() {
        ;
        return this.thumb ? this.thumbContainer.nextElementSibling : this.container.firstElementChild;
    }
    ['setScrollPositionSilently'](_0x3c74c0) {
        ;
        this.lastScrollPosition = _0x3c74c0;
        this.ignoreNextScrollEvent();
        this.scrollPosition = _0x3c74c0;
        ;
    }
    ['ignoreNextScrollEvent']() {
        const _0x32968d = {
            capture: true,
            passive: false,
            once: true
        };
        ;
        ;
        ;
        this.removeHeavyAnimationListener && (this.removeScrollListener(), this.container.addEventListener('scroll', _0xaba9e2 => {
            ;
            se(_0xaba9e2);
            this.addScrollListener();
            ;
        }, _0x32968d));
        ;
    }
    ['replaceChildren'](..._0x58452c) {
        ;
        this.thumb && _0x58452c.unshift(this.thumbContainer);
        this.container.replaceChildren(..._0x58452c);
        ;
    }
}
class $2 extends Zc {
    constructor(_0x1f734b, _0x2afd44 = '', _0xe1c547 = 300, _0x3a4d57, _0x1488d8) {
        ;
        super(_0x1f734b, _0x2afd44, _0x1488d8);
        this.onScrollOffset = _0xe1c547;
        this.loadedAll = {
            'top': true,
            'bottom': false
        };
        this.checkForTriggers = () => {
            ;
            if (!this.onScrolledTop && !this.onScrolledBottom) {
                return;
            }
            if (this.isHeavyAnimationInProgress) {
                this.onScroll();
                return;
            }
            const {
                scrollSize: _0x20e29e,
                scrollPosition: _0x48fc82,
                clientSize: _0x508eb2
            } = this;
            if (!_0x20e29e) {
                return;
            }
            const _0x3e538a = _0x20e29e - _0x508eb2;
            this.onScrolledTop && _0x48fc82 <= this.onScrollOffset && this.lastScrollDirection <= 0 && this.onScrolledTop();
            this.onScrolledBottom && _0x3e538a - _0x48fc82 <= this.onScrollOffset && this.lastScrollDirection >= 0 && this.onScrolledBottom();
            ;
        };
        this.scrollPositionProperty = 'scrollTop';
        this.scrollSizeProperty = 'scrollHeight';
        this.clientSizeProperty = 'clientHeight';
        this.offsetSizeProperty = 'offsetHeight';
        this.clientAxis = 'clientY';
        sn && (this.thumbContainer = document.createElement('div'), this.thumbContainer.classList.add('scrollable-thumb-container'), this.thumb = document.createElement('div'), this.thumb.classList.add('scrollable-thumb'), this.thumbContainer.append(this.thumb), this.container.prepend(this.thumbContainer), this.thumb.addEventListener('mousedown', this.onMouseDown));
        this.container.classList.add('scrollable-y');
        be && !bs && this.container.classList.add('no-scrollbar');
        this.setListeners();
        ;
    }
    ['attachBorderListeners'](_0x256bc4 = this.container) {
        const _0x5165b9 = this.onAdditionalScroll;
        this.onAdditionalScroll = () => {
            ;
            _0x5165b9?.();
            _0x256bc4.classList.toggle('scrolled-start', !this.scrollPosition);
            _0x256bc4.classList.toggle('scrolled-end', this.isScrolledToEnd);
            ;
        };
        _0x256bc4.classList.add('scrolled-start', 'scrolled-end', 'scrollable-y-bordered');
        ;
    }
    ['setVirtualContainer'](_0x247b5c) {
        ;
        this.splitUp = _0x247b5c;
        this.log('setVirtualContainer:', _0x247b5c, this);
        ;
    }
}
class n6 extends Zc {
    constructor(_0x2a5fbc, _0x47b628 = '', _0x4fad33 = 300, _0x31ea78 = 15, _0x1a2129 = document.createElement('div')) {
        ;
        if (super(_0x2a5fbc, _0x47b628, _0x1a2129), this.onScrollOffset = _0x4fad33, this.splitCount = _0x31ea78, this.container = _0x1a2129, this.container.classList.add('scrollable-x'), !Fe) {
            const _0x106631 = _0x14ff30 => {
                    ;
                    _0x14ff30.stopPropagation();
                    !_0x14ff30.deltaX && this.container.scrollWidth > this.container.clientWidth && (this.container.scrollLeft += _0x14ff30.deltaY / 4, se(_0x14ff30));
                    ;
                }, _0x5cdda7 = { passive: false };
            ;
            this.container.addEventListener('wheel', _0x106631, _0x5cdda7);
            ;
        }
        this.scrollPositionProperty = 'scrollLeft';
        this.scrollSizeProperty = 'scrollWidth';
        this.clientSizeProperty = 'clientWidth';
        this.offsetSizeProperty = 'offsetWidth';
        ;
    }
}
function Y2(_0x31909a, _0xe29346 = {}) {
    const _0xbe7ee0 = document.createElement(_0xe29346.asLink ? 'a' : _0xe29346.asDiv ? 'div' : 'button');
    return _0xbe7ee0.className = _0x31909a, _0xe29346.noRipple || (_0xe29346.rippleSquare && _0xbe7ee0.classList.add('rp-square'), Kc(_0xbe7ee0)), _0xe29346.icon && K2(_0xbe7ee0, _0xe29346.icon, false), _0xe29346.onlyMobile && _0xbe7ee0.classList.add('only-handhelds'), _0xe29346.disabled && _0xbe7ee0.setAttribute('disabled', 'true'), _0xe29346.text && _0xbe7ee0.append(X(_0xe29346.text, _0xe29346.textArgs)), _0xbe7ee0;
}
function K2(_0x2105de, _0x26c91d, _0x16a8c2 = _0x2105de.querySelector('.button-icon')) {
    const _0x405427 = At(_0x26c91d, 'button-icon');
    return _0x16a8c2 ? _0x16a8c2.replaceWith(_0x405427) : _0x2105de.append(_0x405427), _0x405427;
}
const xf = (_0xa93b6a, _0x37d3e3 = {}) => {
    const _0x47fcc4 = _0xa93b6a?.split(' ');
    return Y2('btn-icon' + (_0x47fcc4?.length > 1 ? ' ' + _0x47fcc4.slice(1).join(' ') : ''), {
        'icon': _0x47fcc4?.[0] || void 0,
        ..._0x37d3e3
    });
};
function e1(_0x23202e, _0xf8a644) {
    ;
    return _0x23202e = Lt(_0x23202e), _0xf8a644 ? _0x23202e.forEach(_0x5a0745 => _0x5a0745.setAttribute('disabled', 'true')) : _0x23202e.forEach(_0x31293d => _0x31293d.removeAttribute('disabled')), () => e1(_0x23202e, !_0xf8a644);
}
function Pi(_0x2b61e3 = window.getSelection()) {
    ;
    if (!_0x2b61e3?.rangeCount) {
        return true;
    }
    const _0x55f826 = _0x2b61e3.getRangeAt(0);
    return !!(_0x55f826.collapsed || !_0x55f826.START_TO_END);
}
function Ua(_0x576722) {
    ;
    return _0x576722 ? _0x576722.match(Qa) : null;
}
function _i(_0x47396c, _0x2151da) {
    const _0x46815e = {}, _0x603dff = {
            elements: [],
            active: false
        };
    ;
    ;
    _0x47396c.forEach(_0x1a5266 => _0x46815e[_0x1a5266] = _0x603dff);
    ;
    const _0x5b8f09 = window.getSelection();
    if (_0x5b8f09.isCollapsed) {
        return _0x46815e;
    }
    const _0x54d253 = _0x5b8f09.getRangeAt(0), _0x503af1 = _0x54d253.commonAncestorContainer, _0x516107 = (_0x503af1.nodeType === _0x503af1.ELEMENT_NODE ? _0x503af1 : _0x503af1.parentElement).closest('[contenteditable="true"]');
    if (!_0x516107) {
        return _0x46815e;
    }
    const _0xa44b9c = document.createTreeWalker(_0x516107, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, { 'acceptNode': _0x23c9ac => _0x54d253.intersectsNode(_0x23c9ac) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT });
    let _0x1383cf;
    for (; _0x1383cf = _0xa44b9c.nextNode();) {
        for (const _0x221ec5 of _0x47396c) {
            const _0x31fd42 = en[_0x221ec5], _0x512ce2 = _0x1383cf.nodeType === _0x1383cf.ELEMENT_NODE ? _0x1383cf : _0x1383cf.parentElement;
            _0x512ce2.closest(_0x31fd42.match) && _0x46815e[_0x221ec5].elements.push(_0x512ce2);
        }
    }
    for (const _0x4a5411 of _0x47396c)
        _0x46815e[_0x4a5411].active = _0x46815e[_0x4a5411].elements.length >= 1;
    return _0x46815e;
}
function J2(_0x57e8fa) {
    const _0x4278c8 = document.createRange();
    if (_0x57e8fa.endContainer.nodeType === Node.TEXT_NODE && _0x57e8fa.endOffset < _0x57e8fa.endContainer.nodeValue.length) {
        return _0x4278c8.setStart(_0x57e8fa.endContainer, _0x57e8fa.endOffset), _0x4278c8.setEnd(_0x57e8fa.endContainer, _0x57e8fa.endOffset + 1), _0x4278c8.toString();
    }
    const _0x142eb6 = X2(_0x57e8fa.endContainer);
    if (_0x142eb6) {
        return _0x4278c8.setStart(_0x142eb6, 0), _0x4278c8.setEnd(_0x142eb6, Math.min(_0x142eb6.nodeValue.length, 1)), _0x4278c8.toString();
    }
}
function X2(_0x3d5601) {
    ;
    for (; _0x3d5601 && !_0x3d5601.nextSibling;) {
        _0x3d5601 = _0x3d5601.parentNode;
    }
    if (_0x3d5601 && _0x3d5601.nextSibling) {
        return t1(_0x3d5601.nextSibling);
    }
}
function t1(_0x10ad5d) {
    ;
    if (_0x10ad5d.nodeType === Node.TEXT_NODE) {
        return _0x10ad5d;
    }
    for (let _0x4411e1 = 0; _0x4411e1 < _0x10ad5d.childNodes.length; _0x4411e1++) {
        const _0x1a24d4 = _0x10ad5d.childNodes[_0x4411e1], _0xa6f4ae = t1(_0x1a24d4);
        if (_0xa6f4ae) {
            return _0xa6f4ae;
        }
    }
}
const s1 = new WeakMap();
function i6(_0x193f4d) {
}
function r6(_0x325a52) {
    const _0x3e714a = s1.get(_0x325a52);
    _0x3e714a && (_0x3e714a.canRedoFromHTML = '', _0x3e714a.undoHistory.length = 0, _0x3e714a.executedHistory.length = 0, _0x3e714a.canUndoFromHTML = '');
}
function a6(_0x234c72) {
    const _0x2a826c = s1.get(_0x234c72);
    _0x2a826c && _0x2a826c.canRedoFromHTML && !_0x2a826c.lockRedo && _0x234c72.innerHTML !== _0x2a826c.canRedoFromHTML && (_0x2a826c.canRedoFromHTML = '', _0x2a826c.undoHistory.length = 0);
}
function Ti(_0x58a972, _0x5bb1f1, _0x320c17) {
    const _0x34e91b = { 'link': _0x320c17 ? () => document.execCommand('createLink', false, _0x320c17) : () => document.execCommand('unlink', false, null) }, _0x1b808f = _0x3adf88 => {
            ;
            _0x34e91b[_0x3adf88] = () => {
                const _0x3fde3b = (_0xdbfcb6.includes(_0x3adf88) ? _0xdbfcb6 : [_0x3adf88]).filter(_0x30af1e => _0x1de381[_0x30af1e]?.active);
                if (xe(_0x3fde3b, _0x3adf88) || _0x3fde3b.push(_0x3adf88), _0x3adf88 === 'quote') {
                    const _0x35791d = document.getSelection();
                    _0x35791d.rangeCount && J2(_0x35791d.getRangeAt(0)) === '\n' && _0x35791d.modify(_0x35791d.isCollapsed ? 'move' : 'extend', 'forward', 'character');
                }
                let _0x186345;
                return _0x3fde3b.length ? _0x186345 = document.execCommand('fontName', false, 'markup-' + _0x3fde3b.join('-')) : _0x186345 = em(), Q2(_0x58a972), _0x186345;
            };
        }, _0xdbfcb6 = [
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'spoiler',
            'quote'
        ];
    if (_0xdbfcb6.forEach(_0x3a10fb => {
            ;
            _0x1b808f(_0x3a10fb);
        }), _0x1b808f('monospace'), !_0x34e91b[_0x5bb1f1]) {
        return false;
    }
    const _0x3eef97 = {
        capture: true,
        passive: false
    };
    ;
    ;
    ;
    const _0x2e73d0 = _0x34e91b[_0x5bb1f1], _0x3cb778 = [], _0x6b5029 = vn.getInstance().prepareApplyingMarkdown(), _0x28900b = _0x3eef97;
    _0x58a972.addEventListener('input', se, _0x28900b);
    _0x3cb778.push(document.execCommand('styleWithCSS', false, 'true'));
    ;
    const _0x1de381 = _i(Object.keys(_0x34e91b));
    return _0x1de381.monospace?.active && _0x5bb1f1 === 'link' && _0x3cb778.push(Z2()), _0x3cb778.push(typeof _0x2e73d0 == 'function' ? _0x2e73d0() : document.execCommand(_0x2e73d0, false, null)), _0x3cb778.push(document.execCommand('styleWithCSS', false, 'false')), _0x6b5029(), ff.getInstance().setActiveMarkupButton(), _0x58a972.removeEventListener('input', se, _0x28900b), hn(_0x58a972, 'input'), true;
}
function Q2(_0x11b63b) {
    ;
    _0x11b63b.querySelectorAll('[style*="font-family"]').forEach(_0x1eb68e => {
        ;
        if (_0x1eb68e.style.caretColor) {
            _0x1eb68e.style.cssText = '';
            return;
        }
        const _0x10df41 = _0x1eb68e.style.fontFamily;
        if (_0x10df41 !== Vs) {
            _0x1eb68e.classList.add('is-markup');
            _0x1eb68e.dataset.markup = _0x10df41;
            tf(_0x1eb68e);
            _0x10df41.includes('quote') && _0x1eb68e.classList.add('quote-like', 'quote-like-icon', 'quote-like-border');
        }
    });
    _0x11b63b.querySelectorAll('.is-markup').forEach(_0x10fdba => {
        const _0x271d20 = _0x10fdba.style.fontFamily;
        _0x271d20 && _0x271d20 !== Vs || (_0x271d20.includes('quote') || _0x10fdba.classList.remove('quote-like', 'quote-like-icon', 'quote-like-border'), _0x10fdba.classList.remove('is-markup'), delete _0x10fdba.dataset.markup);
    });
    ;
}
function Z2() {
    ;
    return document.execCommand('removeFormat', false, null);
}
function em() {
    ;
    return document.execCommand('fontName', false, Vs);
}
function o6(_0x877f4a, _0x50fd91) {
    const _0x40fff9 = {
        KeyB: 'bold',
        KeyI: 'italic',
        KeyU: 'underline',
        KeyS: 'strikethrough',
        KeyM: 'monospace',
        KeyP: 'spoiler'
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    const _0x433ae6 = _0x40fff9;
    _0x433ae6.KeyK = 'link';
    const _0x579a79 = _0x50fd91.code, _0x39b548 = _0x433ae6[_0x579a79], _0x766259 = document.getSelection();
    !Pi(_0x766259) && _0x39b548 && (_0x579a79 === 'KeyK' ? ff.getInstance().showLinkEditor() : Ti(_0x877f4a, _0x39b548), se(_0x50fd91));
}
class ff {
    constructor() {
        ;
        this.buttons = {};
        this.addedListener = false;
        this.waitingForMouseUp = false;
        this.mouseUpCounter = 0;
        this.onMouseUpSingle = _0x1218f2 => {
            ;
            if (this.waitingForMouseUp = false, Fe) {
                if (_0x1218f2 && se(_0x1218f2), this.mouseUpCounter++ === 0) {
                    this.resetSelection(this.savedRange);
                } else {
                    this.hide();
                    return;
                }
            }
            this.show();
        };
        ;
    }
    static ['getInstance']() {
        ;
        return this.INSTANCE || (this.INSTANCE = new ff());
    }
    ['init']() {
        ;
        this.container = document.createElement('div');
        this.container.classList.add('markup-tooltip', 'z-depth-1', 'hide');
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('markup-tooltip-wrapper');
        ;
        const _0x5edfb9 = document.createElement('div'), _0x387293 = document.createElement('div'), _0x4c1119 = { noRipple: true };
        ;
        const _0x4c7bde = { noRipple: true };
        ;
        _0x5edfb9.classList.add('markup-tooltip-tools', 'markup-tooltip-tools-regular');
        _0x387293.classList.add('markup-tooltip-tools', 'markup-tooltip-tools-link');
        [
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'monospace',
            'spoiler',
            [
                'quote',
                'quote_outline'
            ],
            'link'
        ].forEach(_0x4e119b => {
            ;
            const _0x4cfb07 = { noRipple: true };
            ;
            const _0x5c949f = typeof _0x4e119b == 'string' ? _0x4e119b : _0x4e119b[0], _0x21df78 = typeof _0x4e119b == 'string' ? _0x4e119b : _0x4e119b[1], _0x44c977 = xf(_0x21df78, _0x4cfb07);
            _0x5edfb9.append(this.buttons[_0x5c949f] = _0x44c977);
            _0x4e119b !== 'link' ? _0x44c977.addEventListener('mousedown', _0x2ed493 => {
                ;
                se(_0x2ed493);
                Ti(this.input, _0x5c949f);
                this.cancelClosening();
                ;
            }) : Ns(_0x44c977, _0x1cf9ef => {
                ;
                se(_0x1cf9ef);
                this.showLinkEditor();
                this.cancelClosening();
                ;
            });
            ;
        });
        this.linkBackButton = xf('left', _0x4c1119);
        this.linkInput = document.createElement('input');
        Gi(this.linkInput, 'MarkupTooltip.LinkPlaceholder', void 0, 'placeholder');
        this.linkInput.classList.add('input-clear');
        this.linkInput.addEventListener('keydown', _0x4ba9a9 => {
            const _0x11e3c7 = !this.linkInput.value.length || !!Ua(this.linkInput.value);
            _0x4ba9a9.key === 'Enter' && (_0x11e3c7 ? this.applyLink(_0x4ba9a9) : (this.linkInput.classList.contains('error') && (this.linkInput.classList.remove('error'), this.linkInput.offsetLeft), this.linkInput.classList.add('error')));
        });
        this.linkInput.addEventListener('input', _0x43e62b => {
            const _0x37f814 = this.isLinkValid();
            this.linkInput.classList.toggle('is-valid', _0x37f814);
            this.linkInput.classList.remove('error');
            ;
        });
        this.linkBackButton.addEventListener('mousedown', _0xb4a59b => {
            ;
            se(_0xb4a59b);
            this.container.classList.remove('is-link');
            this.resetSelection();
            this.setTooltipPosition();
            this.cancelClosening();
            ;
        });
        this.linkApplyButton = xf('check markup-tooltip-link-apply', _0x4c7bde);
        this.linkApplyButton.addEventListener('mousedown', _0x344bc3 => {
            ;
            this.applyLink(_0x344bc3);
        });
        ;
        ;
        const _0x52fdbe = document.createElement('div');
        _0x52fdbe.classList.add('markup-tooltip-link-apply-container');
        const _0x511a03 = document.createElement('span'), _0x327b9d = document.createElement('span'), _0x47979d = document.createElement('span');
        _0x511a03.classList.add('markup-tooltip-delimiter');
        _0x327b9d.classList.add('markup-tooltip-delimiter');
        _0x47979d.classList.add('markup-tooltip-delimiter');
        _0x5edfb9.insertBefore(_0x511a03, this.buttons.link);
        _0x52fdbe.append(_0x47979d, this.linkApplyButton);
        _0x387293.append(this.linkBackButton, _0x327b9d, this.linkInput, _0x52fdbe);
        this.wrapper.append(_0x5edfb9, _0x387293);
        this.container.append(this.wrapper);
        document.body.append(this.container);
        window.addEventListener('resize', () => {
            ;
            this.hide();
        });
        ;
    }
    ['showLinkEditor']() {
        ;
        (!this.container || !this.container.classList.contains('is-visible')) && this.show();
        const _0x48ce93 = this.buttons.link;
        this.container.classList.add('is-link');
        const _0x4f16fe = document.getSelection();
        this.savedRange = _0x4f16fe.getRangeAt(0);
        const _0x112cfc = _i(['link']).link.elements.find(_0x1ed090 => _0x1ed090.tagName === 'A');
        _0x48ce93.classList.contains('active') ? this.linkInput.value = _0x112cfc.href : this.linkInput.value = '';
        this.setTooltipPosition(true);
        setTimeout(() => {
            ;
            this.linkInput.focus();
        }, 200);
        this.linkInput.classList.toggle('is-valid', this.isLinkValid());
        ;
    }
    ['applyLink'](_0x157271) {
        ;
        se(_0x157271);
        this.resetSelection();
        ;
        let _0x1ad836 = this.linkInput.value;
        _0x1ad836 && !ji(_0x1ad836) && (_0x1ad836 = 'https://' + _0x1ad836);
        Ti(this.input, 'link', _0x1ad836);
        setTimeout(() => {
            ;
            this.hide();
        }, 0);
        ;
    }
    ['isLinkValid']() {
        ;
        return !this.linkInput.value.length || !!Ua(this.linkInput.value);
    }
    ['resetSelection'](_0x498fc6 = this.savedRange) {
        const _0x1a3078 = window.getSelection();
        _0x1a3078.removeAllRanges();
        _0x1a3078.addRange(_0x498fc6);
        this.input.focus();
        ;
    }
    ['hide']() {
        ;
        this.init || (this.input = void 0, this.container.classList.remove('is-visible'), document.removeEventListener('mouseup', this.onMouseUpSingle), this.waitingForMouseUp = false, Ie.removeByType('markup'), this.hideTimeout && clearTimeout(this.hideTimeout), this.hideTimeout = window.setTimeout(() => {
            ;
            this.hideTimeout = void 0;
            this.container.classList.add('hide');
            this.container.classList.remove('is-link');
            ;
        }, 200));
    }
    ['getActiveMarkupButton']() {
        const _0xaf8afd = new Set(), _0x22cb7b = Object.keys(this.buttons), _0x3ec3ba = _i(_0x22cb7b);
        return _0x22cb7b.forEach(_0x8ed03a => {
            ;
            _0x3ec3ba[_0x8ed03a].active && _0xaf8afd.add(this.buttons[_0x8ed03a]);
        }), [..._0xaf8afd];
    }
    ['setActiveMarkupButton']() {
        const _0x4a083b = this.getActiveMarkupButton();
        for (const _0x29e8db in this.buttons) {
            const _0x14b1f8 = this.buttons[_0x29e8db];
            _0x14b1f8.classList.toggle('active', _0x4a083b.includes(_0x14b1f8));
        }
    }
    ['setTooltipPosition'](_0x20edf8 = false) {
        const _0x457233 = document.getSelection().getRangeAt(0), _0x37a22a = yt(this.input, 'rows-wrapper') || yt(this.input, 'input-message-container') || yt(this.input, 'input-field'), _0x28686a = this.container.classList.contains('is-link') ? this.wrapper.lastElementChild : this.wrapper.firstElementChild, _0x2c6402 = document.body.getBoundingClientRect(), _0x290130 = _0x457233.getBoundingClientRect(), _0x59d2ee = _0x37a22a.getBoundingClientRect(), _0x54a2e2 = _0x28686a.getBoundingClientRect();
        this.container.style.maxWidth = _0x59d2ee.width + 'px';
        const _0x51260c = yr(void 0, this.input, false, _0x290130), {
                newHeight: _0x3263ac = 0,
                oldHeight: _0x3d6c2a = _0x3263ac
            } = this.input;
        if (!_0x51260c) {
            return;
        }
        const _0x39351c = (_0x51260c ? _0x51260c.rect.top : _0x59d2ee.top) + _0x2c6402.top * -1 - _0x54a2e2.height - 8 + (_0x3d6c2a - _0x3263ac), _0x3ef110 = _0x59d2ee.left, _0x477608 = _0x59d2ee.left + _0x59d2ee.width - Math.min(_0x59d2ee.width, _0x54a2e2.width);
        let _0x25758e;
        if (_0x20edf8) {
            const _0x1b231b = this.container.getBoundingClientRect();
            _0x25758e = Dt(_0x1b231b.left, _0x3ef110, _0x477608);
        } else {
            const _0x18aba4 = _0x290130.left + (_0x290130.width - _0x54a2e2.width) / 2;
            _0x25758e = Dt(_0x18aba4, _0x3ef110, _0x477608);
        }
        this.container.style.transform = 'translate3d(' + _0x25758e + 'px, ' + _0x39351c + 'px, 0)';
    }
    ['show']() {
        ;
        if (this.init && (this.init(), this.init = null), Pi()) {
            this.hide();
            return;
        }
        if (this.hideTimeout !== void 0 && clearTimeout(this.hideTimeout), this.container.classList.contains('is-visible')) {
            return;
        }
        this.container.classList.toggle('night', Hs.isDarkOverlayActive);
        this.setActiveMarkupButton();
        this.container.classList.remove('is-link');
        ;
        const _0x3a68ee = this.container.classList.contains('hide');
        _0x3a68ee && (this.container.classList.remove('hide'), this.container.classList.add('no-transition'));
        this.setTooltipPosition();
        _0x3a68ee && (this.container.offsetLeft, this.container.classList.remove('no-transition'));
        this.container.classList.add('is-visible');
        Re || Ie.pushItem({
            'type': 'markup',
            'onPop': () => {
                ;
                this.hide();
            }
        });
        ;
    }
    ['setMouseUpEvent']() {
        const _0x4a1144 = { once: true };
        ;
        this.waitingForMouseUp || (this.waitingForMouseUp = true, document.addEventListener('mouseup', this.onMouseUpSingle, _0x4a1144));
        ;
    }
    ['cancelClosening']() {
        const _0x4bd280 = { once: true };
        ;
        Fe && !Et && (document.removeEventListener('mouseup', this.onMouseUpSingle), document.addEventListener('mouseup', _0x2dee8e => {
            ;
            se(_0x2dee8e);
            this.mouseUpCounter = 1;
            this.waitingForMouseUp = false;
            this.setMouseUpEvent();
            ;
        }, _0x4bd280));
        ;
    }
    ['canFormatInput'](_0x331ec9) {
        ;
        return _0x331ec9.classList.contains('input-message-input') || _0x331ec9.getAttribute('can-format');
    }
    ['handleSelection']() {
        ;
        this.addedListener || (this.addedListener = true, document.addEventListener('selectionchange', _0x57fe1f => {
            ;
            if (document.activeElement === this.linkInput) {
                return;
            }
            const _0x38e52e = document.activeElement;
            if (this.input ? _0x38e52e !== this.input : !this.canFormatInput(_0x38e52e)) {
                this.hide();
                return;
            }
            const _0x7a8dec = document.getSelection();
            if (Pi(_0x7a8dec)) {
                this.hide();
                return;
            }
            if (this.input = _0x38e52e, Fe) {
                if (Et) {
                    this.show();
                    this.setTooltipPosition();
                    ;
                } else {
                    if (this.mouseUpCounter === 2) {
                        this.mouseUpCounter = 0;
                        return;
                    }
                    this.savedRange = _0x7a8dec.getRangeAt(0);
                    this.setMouseUpEvent();
                    ;
                }
            } else {
                this.container && this.container.classList.contains('is-visible') ? (this.setActiveMarkupButton(), this.setTooltipPosition()) : this.input.matches(':active') ? this.setMouseUpEvent() : this.show();
            }
        }), document.addEventListener('beforeinput', _0x380cd0 => {
            const _0x4a8cc7 = { once: true };
            ;
            (_0x380cd0.inputType === 'historyRedo' || _0x380cd0.inputType === 'historyUndo') && _0x380cd0.target.addEventListener('input', () => this.setActiveMarkupButton(), _0x4a8cc7);
            ;
        }));
    }
}
const Fr = document.body;
let xs = Fr;
const f1 = () => {
    ;
    xs = Jc() || Fr;
    Li.reAppend();
    ;
};
j2(Fr, f1);
const mt = class mt extends je {
    constructor(_0x55a958, _0x128326 = {}) {
        const _0x3027f1 = { noRipple: true };
        ;
        if (super(false), this.element = document.createElement('div'), this.container = document.createElement('div'), this.header = document.createElement('div'), this.title = document.createElement('div'), this.hideWithCallback = _0x43abc2 => {
                ;
                this.addEventListener('closeAfterTimeout', _0x43abc2);
                this.hide();
                ;
            }, this.element.classList.add('popup'), this.element.className = 'popup' + (_0x55a958 ? ' ' + _0x55a958 : ''), this.container.classList.add('popup-container', 'z-depth-1'), Hs.isDarkOverlayActive && (this.night = true, this.element.classList.add('night')), this.header.classList.add('popup-header'), _0x128326.title && (this.title.classList.add('popup-title'), typeof _0x128326.title == 'string' ? Gi(this.title, _0x128326.title) : typeof _0x128326.title != 'boolean' && this.title.append(_0x128326.title), this.header.append(this.title)), this.isConfirmationNeededOnClose = _0x128326.isConfirmationNeededOnClose, this.middlewareHelper = us(), this.lateMiddlewareHelper = us(), this.listenerSetter = new Rc(), this.managers = mt.MANAGERS, this.confirmShortcutIsSendShortcut = _0x128326.confirmShortcutIsSendShortcut, _0x128326.closable && (this.btnClose = xf('', _0x3027f1), this.btnClose.classList.add('popup-close'), this.header.prepend(this.btnClose), _0x128326.onBackClick ? (this.btnCloseAnimatedIcon = document.createElement('div'), this.btnCloseAnimatedIcon.classList.add('animated-close-icon'), this.btnClose.append(this.btnCloseAnimatedIcon)) : this.btnClose.append(At('close')), Ns(this.btnClose, () => {
                ;
                _0x128326.onBackClick && this.btnCloseAnimatedIcon.classList.contains('state-back') ? _0x128326.onBackClick() !== false && this.btnCloseAnimatedIcon.classList.remove('state-back') : this.hide();
            }, { 'listenerSetter': this.listenerSetter })), this.withoutOverlay = _0x128326.withoutOverlay, this.withoutOverlay && this.element.classList.add('no-overlay'), _0x128326.overlayClosable && Ns(this.element, _0x21a2c6 => {
                ;
                yt(_0x21a2c6.target, 'popup-container') || !_0x21a2c6.target.isConnected || this.hide();
            }, { 'listenerSetter': this.listenerSetter }), _0x128326.withConfirm && (this.btnConfirm = document.createElement('button'), this.btnConfirm.classList.add('btn-primary', 'btn-color-primary'), _0x128326.withConfirm !== true && this.btnConfirm.append(X(_0x128326.withConfirm)), this.header.append(this.btnConfirm)), this.container.append(this.header), _0x128326.body && (this.body = document.createElement('div'), this.body.classList.add('popup-body'), this.container.append(this.body)), _0x128326.scrollable) {
            const _0x14d41e = this.scrollable = new $2(this.body);
            if (this.attachScrollableListeners(), _0x128326.floatingHeader) {
                this.attachScrollableListeners(this.header);
                const _0x4e5e8b = document.createElement('div');
                _0x4e5e8b.classList.add('popup-header-background');
                this.header.prepend(_0x4e5e8b);
                this.header.classList.add('is-floating');
                ;
            }
            this.body || this.header.after(_0x14d41e.container);
        }
        _0x128326.footer && (this.footer = document.createElement('div'), this.footer.classList.add('popup-footer'), (this.body || this.container).append(this.footer), _0x128326.withFooterConfirm && this.footer.append(this.btnConfirm));
        this.btnConfirmOnEnter = this.btnConfirm;
        this.setButtons(_0x128326.buttons);
        this.element.append(this.container);
        mt.POPUPS.push(this);
        ;
    }
    ['setButtons'](_0x2e872c) {
        ;
        if (this.buttons = _0x2e872c, this.buttonsEl && (this.buttonsEl.remove(), this.buttonsEl = void 0), !_0x2e872c?.length) {
            return;
        }
        const _0x27a7de = this.buttonsEl = document.createElement('div');
        _0x27a7de.classList.add('popup-buttons');
        const _0x4fc507 = _0x2e872c.map(_0x1b6a2f => {
            const _0x116c9c = document.createElement('button');
            if (_0x116c9c.className = 'popup-button btn' + (_0x1b6a2f.isDanger ? ' danger' : ' primary'), _0x1b6a2f.noRipple || Kc(_0x116c9c), _0x1b6a2f.text ? _0x116c9c.append(_0x1b6a2f.text) : _0x1b6a2f.langKey && _0x116c9c.append(X(_0x1b6a2f.langKey, _0x1b6a2f.langArgs)), _0x1b6a2f.iconLeft || _0x1b6a2f.iconRight) {
                const _0x16524d = At(_0x1b6a2f.iconLeft || _0x1b6a2f.iconRight, 'popup-button-icon', _0x1b6a2f.iconLeft ? 'left' : 'right');
                _0x116c9c.classList.add('with-icon');
                _0x1b6a2f.iconLeft ? _0x116c9c.prepend(_0x16524d) : _0x116c9c.append(_0x16524d);
                ;
            }
            return Ns(_0x116c9c, async _0x63816c => {
                ;
                let _0x45ae4b = _0x1b6a2f.callback?.(_0x63816c);
                if (_0x45ae4b !== void 0 && _0x45ae4b instanceof Promise) {
                    const _0x9821fe = e1([_0x1b6a2f.element], true);
                    try {
                        _0x45ae4b = await _0x45ae4b;
                    } catch {
                        _0x45ae4b = false;
                    }
                    _0x45ae4b === false && _0x9821fe();
                }
                _0x45ae4b !== false && this.hide();
            }, { 'listenerSetter': this.listenerSetter }), _0x1b6a2f.element = _0x116c9c;
        });
        if (!this.btnConfirmOnEnter && _0x2e872c.length === 2) {
            const _0x3b75cc = _0x2e872c.find(_0x1fe046 => !_0x1fe046.isCancel);
            _0x3b75cc && (this.btnConfirmOnEnter = _0x3b75cc.element);
        }
        _0x2e872c.length >= 3 && _0x27a7de.classList.add('is-vertical-layout');
        _0x27a7de.append(..._0x4fc507);
        this.container.append(_0x27a7de);
        ;
    }
    ['attachScrollableListeners'](_0x2d40ca) {
        ;
        return this.scrollable.attachBorderListeners(_0x2d40ca);
    }
    ['onContentUpdate']() {
        ;
        this.scrollable?.onAdditionalScroll?.();
    }
    ['show']() {
        ;
        this.shown || this.destroyed || (this.shown = true, this.navigationItem = {
            'type': 'popup',
            'onPop': () => {
                ;
                if (this.isConfirmationNeededOnClose) {
                    const _0x93c9c3 = this.isConfirmationNeededOnClose();
                    if (_0x93c9c3) {
                        return Promise.resolve(_0x93c9c3).then(() => {
                            ;
                            this.destroy();
                        }), false;
                    }
                }
                return this.destroy();
            }
        }, Ie.pushItem(this.navigationItem), ja(), xs.append(this.element), this.element.offsetWidth, this.element.classList.add('active'), this.onContentUpdate(), this.withoutOverlay || (Hs.isOverlayActive = true, pe.checkAnimations2(true)), setTimeout(() => {
            ;
            this.element.classList.contains('active') && this.listenerSetter.add(document.body)('keydown', _0x29c8ac => {
                ;
                !this.btnConfirmOnEnter || this.btnConfirmOnEnter.disabled || mt.POPUPS[mt.POPUPS.length - 1] !== this || (this.confirmShortcutIsSendShortcut ? U2(_0x29c8ac) : _0x29c8ac.key === 'Enter') && (t0(this.btnConfirmOnEnter), se(_0x29c8ac));
            });
        }, 0));
    }
    ['hide']() {
        ;
        if (!this.destroyed) {
            if (!this.navigationItem) {
                this.destroy();
                return;
            }
            Ie.backByItem(this.navigationItem);
        }
    }
    ['forceHide']() {
        ;
        return this.destroy();
    }
    ['destroy']() {
        ;
        this.destroyed || (this.destroyed = true, this.dispatchEvent('close'), this.element.classList.add('hiding'), this.element.classList.remove('active'), this.listenerSetter.removeAll(), this.middlewareHelper.destroy(), ff.getInstance().hide(), this.withoutOverlay || (Hs.isOverlayActive = false), Ie.removeItem(this.navigationItem), this.navigationItem = void 0, xe(mt.POPUPS, this), f1(), setTimeout(() => {
            ;
            this.element.remove();
            this.dispatchEvent('closeAfterTimeout');
            this.cleanup();
            this.scrollable?.destroy();
            this.lateMiddlewareHelper.destroy();
            this.withoutOverlay || pe.checkAnimations2(false);
            ;
        }, 250));
    }
    ['appendSolid'](_0x33beda) {
        const _0x351eeb = document.createElement('div');
        (this.scrollable || this.body).prepend(_0x351eeb);
        const _0x305d79 = gi(_0x33beda, _0x351eeb);
        this.addEventListener('closeAfterTimeout', _0x305d79);
    }
    ['appendSolidBody'](_0x579216) {
        const _0x110740 = gi(_0x579216, this.body);
        this.addEventListener('closeAfterTimeout', _0x110740);
    }
    static ['reAppend']() {
        ;
        this.POPUPS.forEach(_0x4065b7 => {
            const {
                    element: _0x255bc1,
                    container: _0x3c3d1e
                } = _0x4065b7, _0x15cb9e = _0x255bc1.parentElement;
            _0x15cb9e && _0x15cb9e !== xs && xs !== _0x3c3d1e && xs.append(_0x255bc1);
        });
    }
    static ['getPopups'](_0x3c4248) {
        ;
        return this.POPUPS.filter(_0x3709f9 => _0x3709f9 instanceof _0x3c4248);
    }
    static ['createPopup'](_0x58816c, ..._0x211b58) {
        return new _0x58816c(..._0x211b58);
    }
};
mt.POPUPS = [];
let Li = mt;
const a0_0x5177f7 = {};
a0_0x5177f7.langKey = 'Cancel';
a0_0x5177f7.isCancel = true;
;
const c6 = _0x5b0a65 => (_0x5b0a65.find(_0x11c118 => _0x11c118.isCancel) || _0x5b0a65.push(a0_0x5177f7), _0x5b0a65), d6 = 308, l6 = 420, u6 = 0.65, tm = vt(() => {
        const [_0x9ad952, _0x446c7e] = ke(false);
        return rt(() => {
            ;
            document.body.classList.toggle('has-folders-sidebar', _0x9ad952());
        }), {
            'hasFoldersSidebar': _0x9ad952,
            'setHasFoldersSidebar': _0x446c7e
        };
    });
function h6() {
    return tm;
}
let xi;
const m6 = _0x318bac => {
        const _0x17d477 = _0x318bac.target;
        _0x17d477.classList.contains('input-field-input') && xi !== _0x17d477 && _0x17d477.focus();
        xi = _0x17d477;
        ;
    }, g6 = _0x260a6b => {
        const _0x36deec = _0x260a6b.target;
        _0x36deec.classList.contains('input-field-input') && xi === _0x36deec && _0x36deec.focus();
    };
export {
    wt as $,
    ne as A,
    ft as B,
    Fe as C,
    bs as D,
    om as E,
    Wa as F,
    Et as G,
    ps as H,
    $m as I,
    Va as J,
    Hs as K,
    Li as L,
    Od as M,
    X as N,
    h6 as O,
    Xs as P,
    m1 as Q,
    cm as R,
    ja as S,
    l6 as T,
    d6 as U,
    u6 as V,
    Ni as W,
    R2 as X,
    Yc as Y,
    K3 as Z,
    ze as _,
    Zi as a,
    zm as a$,
    Re as a0,
    be as a1,
    go as a2,
    ke as a3,
    Uh as a4,
    bi as a5,
    zn as a6,
    M3 as a7,
    ru as a8,
    gi as a9,
    Hh as aA,
    Nh as aB,
    Rm as aC,
    Be as aD,
    jh as aE,
    R3 as aF,
    O0 as aG,
    Kr as aH,
    Mm as aI,
    Wo as aJ,
    rt as aK,
    Qu as aL,
    Is as aM,
    lh as aN,
    xf as aO,
    Ol as aP,
    Xt as aQ,
    ot as aR,
    q as aS,
    Vo as aT,
    V2 as aU,
    Oe as aV,
    Zf as aW,
    Qc as aX,
    pn as aY,
    a3 as aZ,
    tr as a_,
    k3 as aa,
    Sf as ab,
    oc as ac,
    At as ad,
    Ns as ae,
    sf as af,
    ls as ag,
    Y2 as ah,
    le as ai,
    Oc as aj,
    e1 as ak,
    Gi as al,
    Kc as am,
    se as an,
    d2 as ao,
    l2 as ap,
    Sr as aq,
    jc as ar,
    Ke as as,
    N as at,
    Q1 as au,
    B3 as av,
    Tt as aw,
    is as ax,
    I3 as ay,
    Um as az,
    re as b,
    e0 as b$,
    Cm as b0,
    Ao as b1,
    Bi as b2,
    Ql as b3,
    Ch as b4,
    Ac as b5,
    vm as b6,
    gs as b7,
    on as b8,
    Kf as b9,
    Yo as bA,
    ut as bB,
    Ys as bC,
    jn as bD,
    I0 as bE,
    Y0 as bF,
    aa as bG,
    H as bH,
    hm as bI,
    rr as bJ,
    y0 as bK,
    _s as bL,
    ve as bM,
    M0 as bN,
    us as bO,
    pi as bP,
    yt as bQ,
    Vh as bR,
    Ar as bS,
    Sh as bT,
    lm as bU,
    St as bV,
    k0 as bW,
    at as bX,
    Pf as bY,
    c6 as bZ,
    je as b_,
    a2 as ba,
    cr as bb,
    dr as bc,
    he as bd,
    Zt as be,
    vt as bf,
    T3 as bg,
    gu as bh,
    q3 as bi,
    Ul as bj,
    Mc as bk,
    Wm as bl,
    gm as bm,
    um as bn,
    N1 as bo,
    Hm as bp,
    ss as bq,
    D2 as br,
    xe as bs,
    tf as bt,
    wm as bu,
    yh as bv,
    Hn as bw,
    mm as bx,
    wl as by,
    hn as bz,
    Ii as c,
    ui as c$,
    Os as c0,
    Ie as c1,
    Rc as c2,
    pm as c3,
    bo as c4,
    Dt as c5,
    mc as c6,
    f0 as c7,
    $2 as c8,
    Q as c9,
    hr as cA,
    dc as cB,
    uc as cC,
    E2 as cD,
    am as cE,
    $3 as cF,
    su as cG,
    K2 as cH,
    p0 as cI,
    j2 as cJ,
    Jc as cK,
    s6 as cL,
    e6 as cM,
    t6 as cN,
    xd as cO,
    w0 as cP,
    uu as cQ,
    ic as cR,
    yr as cS,
    xt as cT,
    bn as cU,
    pu as cV,
    l0 as cW,
    Gs as cX,
    Nm as cY,
    O3 as cZ,
    zc as c_,
    w2 as ca,
    Vm as cb,
    id as cc,
    Ee as cd,
    ef as ce,
    Go as cf,
    Mi as cg,
    Bc as ch,
    hd as ci,
    hs as cj,
    jl as ck,
    Ye as cl,
    gc as cm,
    x3 as cn,
    t0 as co,
    Kh as cp,
    r0 as cq,
    Rf as cr,
    Fa as cs,
    Lt as ct,
    cu,
    pe as cv,
    $o as cw,
    u1 as cx,
    l1 as cy,
    za as cz,
    g6 as d,
    s3 as d$,
    gn as d0,
    Ah as d1,
    nu as d2,
    Wh as d3,
    lo as d4,
    c2 as d5,
    M1 as d6,
    Bm as d7,
    Xm as d8,
    s0 as d9,
    Km as dA,
    _d as dB,
    O1 as dC,
    Jm as dD,
    m0 as dE,
    Lm as dF,
    Xu as dG,
    va as dH,
    N3 as dI,
    na as dJ,
    Nc as dK,
    n3 as dL,
    Am as dM,
    p3 as dN,
    mr as dO,
    sr as dP,
    ff as dQ,
    Qs as dR,
    F3 as dS,
    Fd as dT,
    Jh as dU,
    d1 as dV,
    qo as dW,
    as as dX,
    Sd as dY,
    Ml as dZ,
    Tf as d_,
    Ad as da,
    rm as db,
    xm as dc,
    we as dd,
    et as de,
    Tn as df,
    Sm as dg,
    V1 as dh,
    Y3 as di,
    e3 as dj,
    km as dk,
    pa as dl,
    _u as dm,
    Ec as dn,
    ms as dp,
    No as dq,
    ym as dr,
    K0 as ds,
    p1 as dt,
    U3 as du,
    d0 as dv,
    i0 as dw,
    i3 as dx,
    u2 as dy,
    tn as dz,
    I as e,
    Sc as e$,
    bm as e0,
    _c as e1,
    vu as e2,
    Hi as e3,
    Uf as e4,
    ci as e5,
    r3 as e6,
    $l as e7,
    ia as e8,
    Ud as e9,
    Ir as eA,
    r6 as eB,
    t3 as eC,
    no as eD,
    fo as eE,
    f6 as eF,
    Uo as eG,
    Xh as eH,
    v1 as eI,
    $f as eJ,
    y1 as eK,
    Hc as eL,
    V3 as eM,
    z3 as eN,
    y2 as eO,
    f3 as eP,
    Ym as eQ,
    tc as eR,
    c0 as eS,
    R0 as eT,
    Nd as eU,
    Dr as eV,
    Ua as eW,
    Im as eX,
    jr as eY,
    wc as eZ,
    Ls as e_,
    b1 as ea,
    o3 as eb,
    ca as ec,
    jm as ed,
    Eu as ee,
    Fm as ef,
    Pi as eg,
    Yh as eh,
    f2 as ei,
    n6 as ej,
    Ho as ek,
    Tm as el,
    Wn as em,
    Zh as en,
    r2 as eo,
    Em as ep,
    To as eq,
    a6 as er,
    Q2 as es,
    td as et,
    i6 as eu,
    im as ev,
    U2 as ew,
    o6 as ex,
    vn as ey,
    o2 as ez,
    Z3 as f,
    Qd as f0,
    Vr as f1,
    Pd as f2,
    Eo as f3,
    zf as f4,
    Ps as f5,
    In as f6,
    kh as f7,
    _3 as f8,
    vh as f9,
    pl as fA,
    ln as fB,
    nm as fC,
    g3 as fD,
    zu as fE,
    y3 as fF,
    m3 as fG,
    S3 as fH,
    Qf as fI,
    ya as fJ,
    Tl as fK,
    b3 as fL,
    w3 as fM,
    Ll as fN,
    Gu as fO,
    C3 as fP,
    E3 as fQ,
    v3 as fR,
    A3 as fS,
    Zu as fT,
    Df as fU,
    D3 as fV,
    h3 as fW,
    Yu as fX,
    Gm as fY,
    qm as fZ,
    ou as fa,
    Me as fb,
    ct as fc,
    T2 as fd,
    W3 as fe,
    Rr as ff,
    Pm as fg,
    Bd as fh,
    ho as fi,
    dd as fj,
    P3 as fk,
    u3 as fl,
    c3 as fm,
    h0 as fn,
    l3 as fo,
    d3 as fp,
    Qm as fq,
    qf as fr,
    Zd as fs,
    rc as ft,
    Ri as fu,
    xl as fv,
    Yi as fw,
    L3 as fx,
    Vf as fy,
    Dm as fz,
    Zm as g,
    j3 as h,
    H3 as i,
    rs as j,
    Cr as k,
    Q3 as l,
    ue as m,
    Ve as n,
    m6 as o,
    _m as p,
    ad as q,
    X3 as r,
    $n as s,
    dm as t,
    G3 as u,
    p2 as v,
    Mt as w,
    os as x,
    J3 as y,
    j as z
};