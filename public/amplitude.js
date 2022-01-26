(function(e, t) {
    var n = e.amplitude || {
        _q: [],
        _iq: {}
    };
    var r = t.createElement("script");
    r.type = "text/javascript";
    r.async = true;
    r.src = "https://cdn.amplitude.com/libs/amplitude-4.5.2-min.gz.js";
    r.onload = function() {
        if (e.amplitude.runQueuedFunctions) {
            e.amplitude.runQueuedFunctions()
        } else {
            console.log("[Amplitude] Error: could not load SDK")
        }
    };
    var i = t.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(r, i);

    function s(e, t) {
        e.prototype[t] = function() {
            this._q.push([t].concat(Array.prototype.slice.call(arguments, 0)));
            return this
        }
    }
    var o = function() {
        this._q = [];
        return this
    };
    var a = ["add", "append", "clearAll", "prepend", "set", "setOnce", "unset"];
    for (var u = 0; u < a.length; u++) {
        s(o, a[u])
    }
    n.Identify = o;
    var c = function() {
        this._q = [];
        return this
    };
    var l = ["setProductId", "setQuantity", "setPrice", "setRevenueType", "setEventProperties"];
    for (var p = 0; p < l.length; p++) {
        s(c, l[p])
    }
    n.Revenue = c;
    var d = ["init", "logEvent", "logRevenue", "setUserId", "setUserProperties", "setOptOut",
        "setVersionName", "setDomain", "setDeviceId", "setGlobalUserProperties", "identify",
        "clearUserProperties", "setGroup", "logRevenueV2", "regenerateDeviceId", "logEventWithTimestamp",
        "logEventWithGroups", "setSessionId", "resetSessionId"
    ];

    function v(e) {
        function t(t) {
            e[t] = function() {
                e._q.push([t].concat(Array.prototype.slice.call(arguments, 0)))
            }
        }
        for (var n = 0; n < d.length; n++) {
            t(d[n])
        }
    }
    v(n);
    n.getInstance = function(e) {
        e = (!e || e.length === 0 ? "$default_instance" : e).toLowerCase();
        if (!n._iq.hasOwnProperty(e)) {
            n._iq[e] = {
                _q: []
            };
            v(n._iq[e])
        }
        return n._iq[e]
    };
    e.amplitude = n
})(window, document);

window.amplitudeInit = function(apiKey, options) {
    options = options || {
        includeUtm: true,
        includeReferrer: true,
        saveEvents: true,
        includeGclid: true,
    };
    amplitude.getInstance().init(apiKey, null, options);
};

window.amplitudePushEvent = (function() {
    var userId = localStorage.getItem('uiId');
    var userType = 'unknown';
    var platform = undefined;

    return function(name, params) {
        if (params.auuid !== userId && params.auuid) {
            userId = params.auuid;
            amplitude.getInstance().setUserId(params.auuid);
        }

        if (params.userType && params.userType !== userType || params.app && params.app !== platform) {
            userType = params.userType;
            platform = params.app;
            // amplitude.getInstance().setUserProperties({ userType: userType, app: platform/*, user_id: userId, userId: userId*/ });
        }

        var copy = Object.assign({}, params);
        delete copy.auuid;
        // delete copy.userType;
        delete copy.platform;

        params.page = location.href;
        amplitude.getInstance().logEvent(name, copy);
    };
})();