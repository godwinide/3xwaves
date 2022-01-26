! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.vs = t() : e.vs = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 33)
    }([function(e, t, r) {
        "use strict";
        r.r(t), r.d(t, "serializeError", (function() {
            return c
        })), r.d(t, "deserializeError", (function() {
            return u
        })), r.d(t, "createCustomErrorClass", (function() {
            return a
        })), r.d(t, "addCustomErrorDeserializer", (function() {
            return s
        })), r.d(t, "AccountNameRequiredError", (function() {
            return l
        })), r.d(t, "AccountNotSupported", (function() {
            return h
        })), r.d(t, "AmountRequired", (function() {
            return f
        })), r.d(t, "BluetoothRequired", (function() {
            return p
        })), r.d(t, "BtcUnmatchedApp", (function() {
            return d
        })), r.d(t, "CantOpenDevice", (function() {
            return g
        })), r.d(t, "CashAddrNotSupported", (function() {
            return v
        })), r.d(t, "CurrencyNotSupported", (function() {
            return E
        })), r.d(t, "DeviceAppVerifyNotSupported", (function() {
            return m
        })), r.d(t, "DeviceGenuineSocketEarlyClose", (function() {
            return y
        })), r.d(t, "DeviceNotGenuineError", (function() {
            return w
        })), r.d(t, "DeviceOnDashboardExpected", (function() {
            return I
        })), r.d(t, "DeviceOnDashboardUnexpected", (function() {
            return T
        })), r.d(t, "DeviceInOSUExpected", (function() {
            return R
        })), r.d(t, "DeviceHalted", (function() {
            return A
        })), r.d(t, "DeviceNameInvalid", (function() {
            return S
        })), r.d(t, "DeviceSocketFail", (function() {
            return N
        })), r.d(t, "DeviceSocketNoBulkStatus", (function() {
            return b
        })), r.d(t, "DisconnectedDevice", (function() {
            return O
        })), r.d(t, "DisconnectedDeviceDuringOperation", (function() {
            return _
        })), r.d(t, "EnpointConfigError", (function() {
            return L
        })), r.d(t, "EthAppPleaseEnableContractData", (function() {
            return P
        })), r.d(t, "FeeEstimationFailed", (function() {
            return C
        })), r.d(t, "FirmwareNotRecognized", (function() {
            return D
        })), r.d(t, "HardResetFail", (function() {
            return U
        })), r.d(t, "InvalidXRPTag", (function() {
            return x
        })), r.d(t, "InvalidAddress", (function() {
            return M
        })), r.d(t, "InvalidAddressBecauseDestinationIsAlsoSource", (function() {
            return $
        })), r.d(t, "LatestMCUInstalledError", (function() {
            return F
        })), r.d(t, "UnknownMCU", (function() {
            return B
        })), r.d(t, "LedgerAPIError", (function() {
            return k
        })), r.d(t, "LedgerAPIErrorWithMessage", (function() {
            return G
        })), r.d(t, "LedgerAPINotAvailable", (function() {
            return j
        })), r.d(t, "ManagerAppAlreadyInstalledError", (function() {
            return Y
        })), r.d(t, "ManagerAppRelyOnBTCError", (function() {
            return X
        })), r.d(t, "ManagerAppDepInstallRequired", (function() {
            return q
        })), r.d(t, "ManagerAppDepUninstallRequired", (function() {
            return H
        })), r.d(t, "ManagerDeviceLockedError", (function() {
            return V
        })), r.d(t, "ManagerFirmwareNotEnoughSpaceError", (function() {
            return z
        })), r.d(t, "ManagerNotEnoughSpaceError", (function() {
            return W
        })), r.d(t, "ManagerUninstallBTCDep", (function() {
            return K
        })), r.d(t, "NetworkDown", (function() {
            return Q
        })), r.d(t, "NoAddressesFound", (function() {
            return Z
        })), r.d(t, "NotEnoughBalance", (function() {
            return J
        })), r.d(t, "NotEnoughBalanceToDelegate", (function() {
            return ee
        })), r.d(t, "NotEnoughBalanceInParentAccount", (function() {
            return te
        })), r.d(t, "NotEnoughSpendableBalance", (function() {
            return re
        })), r.d(t, "NotEnoughBalanceBecauseDestinationNotCreated", (function() {
            return ne
        })), r.d(t, "NoAccessToCamera", (function() {
            return oe
        })), r.d(t, "NotEnoughGas", (function() {
            return ie
        })), r.d(t, "NotSupportedLegacyAddress", (function() {
            return se
        })), r.d(t, "GasLessThanEstimate", (function() {
            return ae
        })), r.d(t, "PasswordsDontMatchError", (function() {
            return ue
        })), r.d(t, "PasswordIncorrectError", (function() {
            return ce
        })), r.d(t, "RecommendSubAccountsToEmpty", (function() {
            return le
        })), r.d(t, "RecommendUndelegation", (function() {
            return he
        })), r.d(t, "TimeoutTagged", (function() {
            return fe
        })), r.d(t, "UnexpectedBootloader", (function() {
            return pe
        })), r.d(t, "MCUNotGenuineToDashboard", (function() {
            return de
        })), r.d(t, "RecipientRequired", (function() {
            return ge
        })), r.d(t, "UnavailableTezosOriginatedAccountReceive", (function() {
            return ve
        })), r.d(t, "UnavailableTezosOriginatedAccountSend", (function() {
            return Ee
        })), r.d(t, "UpdateFetchFileFail", (function() {
            return me
        })), r.d(t, "UpdateIncorrectHash", (function() {
            return ye
        })), r.d(t, "UpdateIncorrectSig", (function() {
            return we
        })), r.d(t, "UpdateYourApp", (function() {
            return Ie
        })), r.d(t, "UserRefusedDeviceNameChange", (function() {
            return Te
        })), r.d(t, "UserRefusedAddress", (function() {
            return Re
        })), r.d(t, "UserRefusedFirmwareUpdate", (function() {
            return Ae
        })), r.d(t, "UserRefusedAllowManager", (function() {
            return Se
        })), r.d(t, "UserRefusedOnDevice", (function() {
            return Ne
        })), r.d(t, "TransportOpenUserCancelled", (function() {
            return be
        })), r.d(t, "TransportInterfaceNotAvailable", (function() {
            return Oe
        })), r.d(t, "TransportRaceCondition", (function() {
            return _e
        })), r.d(t, "TransportWebUSBGestureRequired", (function() {
            return Le
        })), r.d(t, "DeviceShouldStayInApp", (function() {
            return Pe
        })), r.d(t, "WebsocketConnectionError", (function() {
            return Ce
        })), r.d(t, "WebsocketConnectionFailed", (function() {
            return De
        })), r.d(t, "WrongDeviceForAccount", (function() {
            return Ue
        })), r.d(t, "WrongAppForCurrency", (function() {
            return xe
        })), r.d(t, "ETHAddressNonEIP", (function() {
            return Me
        })), r.d(t, "CantScanQRCode", (function() {
            return $e
        })), r.d(t, "FeeNotLoaded", (function() {
            return Fe
        })), r.d(t, "FeeRequired", (function() {
            return Be
        })), r.d(t, "FeeTooHigh", (function() {
            return ke
        })), r.d(t, "SyncError", (function() {
            return Ge
        })), r.d(t, "PairingFailed", (function() {
            return je
        })), r.d(t, "GenuineCheckFailed", (function() {
            return Ye
        })), r.d(t, "LedgerAPI4xx", (function() {
            return Xe
        })), r.d(t, "LedgerAPI5xx", (function() {
            return qe
        })), r.d(t, "FirmwareOrAppUpdateRequired", (function() {
            return He
        })), r.d(t, "NoDBPathGiven", (function() {
            return Ve
        })), r.d(t, "DBWrongPassword", (function() {
            return ze
        })), r.d(t, "DBNotReset", (function() {
            return We
        })), r.d(t, "TransportError", (function() {
            return Ke
        })), r.d(t, "StatusCodes", (function() {
            return Qe
        })), r.d(t, "getAltStatusMessage", (function() {
            return Ze
        })), r.d(t, "TransportStatusError", (function() {
            return Je
        }));
        var n = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            o = {},
            i = {},
            s = function(e, t) {
                i[e] = t
            },
            a = function(e) {
                var t = function(t, r) {
                    Object.assign(this, r), this.name = e, this.message = t || e, this.stack = (new Error).stack
                };
                return t.prototype = new Error, o[e] = t, t
            },
            u = function(e) {
                if ("object" == typeof e && e) {
                    try {
                        var t = JSON.parse(e.message);
                        t.message && t.name && (e = t)
                    } catch (e) {}
                    var r = void 0;
                    if ("string" == typeof e.name) {
                        var n = e.name,
                            s = i[n];
                        if (s) r = s(e);
                        else {
                            var c = "Error" === n ? Error : o[n];
                            c || (console.warn("deserializing an unknown class '" + n + "'"), c = a(n)), r = Object.create(c.prototype);
                            try {
                                for (var l in e) e.hasOwnProperty(l) && (r[l] = e[l])
                            } catch (e) {}
                        }
                    } else r = new Error(e.message);
                    return !r.stack && Error.captureStackTrace && Error.captureStackTrace(r, u), r
                }
                return new Error(String(e))
            },
            c = function(e) {
                return e ? "object" == typeof e ? function e(t, r) {
                    var o, i, s = {};
                    r.push(t);
                    try {
                        for (var a = n(Object.keys(t)), u = a.next(); !u.done; u = a.next()) {
                            var c = u.value,
                                l = t[c];
                            "function" != typeof l && (l && "object" == typeof l ? -1 !== r.indexOf(t[c]) ? s[c] = "[Circular]" : s[c] = e(t[c], r.slice(0)) : s[c] = l)
                        }
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            u && !u.done && (i = a.return) && i.call(a)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    "string" == typeof t.name && (s.name = t.name);
                    "string" == typeof t.message && (s.message = t.message);
                    "string" == typeof t.stack && (s.stack = t.stack);
                    return s
                }(e, []) : "function" == typeof e ? "[Function: " + (e.name || "anonymous") + "]" : e : e
            };
        var l = a("AccountNameRequired"),
            h = a("AccountNotSupported"),
            f = a("AmountRequired"),
            p = a("BluetoothRequired"),
            d = a("BtcUnmatchedApp"),
            g = a("CantOpenDevice"),
            v = a("CashAddrNotSupported"),
            E = a("CurrencyNotSupported"),
            m = a("DeviceAppVerifyNotSupported"),
            y = a("DeviceGenuineSocketEarlyClose"),
            w = a("DeviceNotGenuine"),
            I = a("DeviceOnDashboardExpected"),
            T = a("DeviceOnDashboardUnexpected"),
            R = a("DeviceInOSUExpected"),
            A = a("DeviceHalted"),
            S = a("DeviceNameInvalid"),
            N = a("DeviceSocketFail"),
            b = a("DeviceSocketNoBulkStatus"),
            O = a("DisconnectedDevice"),
            _ = a("DisconnectedDeviceDuringOperation"),
            L = a("EnpointConfig"),
            P = a("EthAppPleaseEnableContractData"),
            C = a("FeeEstimationFailed"),
            D = a("FirmwareNotRecognized"),
            U = a("HardResetFail"),
            x = a("InvalidXRPTag"),
            M = a("InvalidAddress"),
            $ = a("InvalidAddressBecauseDestinationIsAlsoSource"),
            F = a("LatestMCUInstalledError"),
            B = a("UnknownMCU"),
            k = a("LedgerAPIError"),
            G = a("LedgerAPIErrorWithMessage"),
            j = a("LedgerAPINotAvailable"),
            Y = a("ManagerAppAlreadyInstalled"),
            X = a("ManagerAppRelyOnBTC"),
            q = a("ManagerAppDepInstallRequired"),
            H = a("ManagerAppDepUninstallRequired"),
            V = a("ManagerDeviceLocked"),
            z = a("ManagerFirmwareNotEnoughSpace"),
            W = a("ManagerNotEnoughSpace"),
            K = a("ManagerUninstallBTCDep"),
            Q = a("NetworkDown"),
            Z = a("NoAddressesFound"),
            J = a("NotEnoughBalance"),
            ee = a("NotEnoughBalanceToDelegate"),
            te = a("NotEnoughBalanceInParentAccount"),
            re = a("NotEnoughSpendableBalance"),
            ne = a("NotEnoughBalanceBecauseDestinationNotCreated"),
            oe = a("NoAccessToCamera"),
            ie = a("NotEnoughGas"),
            se = a("NotSupportedLegacyAddress"),
            ae = a("GasLessThanEstimate"),
            ue = a("PasswordsDontMatch"),
            ce = a("PasswordIncorrect"),
            le = a("RecommendSubAccountsToEmpty"),
            he = a("RecommendUndelegation"),
            fe = a("TimeoutTagged"),
            pe = a("UnexpectedBootloader"),
            de = a("MCUNotGenuineToDashboard"),
            ge = a("RecipientRequired"),
            ve = a("UnavailableTezosOriginatedAccountReceive"),
            Ee = a("UnavailableTezosOriginatedAccountSend"),
            me = a("UpdateFetchFileFail"),
            ye = a("UpdateIncorrectHash"),
            we = a("UpdateIncorrectSig"),
            Ie = a("UpdateYourApp"),
            Te = a("UserRefusedDeviceNameChange"),
            Re = a("UserRefusedAddress"),
            Ae = a("UserRefusedFirmwareUpdate"),
            Se = a("UserRefusedAllowManager"),
            Ne = a("UserRefusedOnDevice"),
            be = a("TransportOpenUserCancelled"),
            Oe = a("TransportInterfaceNotAvailable"),
            _e = a("TransportRaceCondition"),
            Le = a("TransportWebUSBGestureRequired"),
            Pe = a("DeviceShouldStayInApp"),
            Ce = a("WebsocketConnectionError"),
            De = a("WebsocketConnectionFailed"),
            Ue = a("WrongDeviceForAccount"),
            xe = a("WrongAppForCurrency"),
            Me = a("ETHAddressNonEIP"),
            $e = a("CantScanQRCode"),
            Fe = a("FeeNotLoaded"),
            Be = a("FeeRequired"),
            ke = a("FeeTooHigh"),
            Ge = a("SyncError"),
            je = a("PairingFailed"),
            Ye = a("GenuineCheckFailed"),
            Xe = a("LedgerAPI4xx"),
            qe = a("LedgerAPI5xx"),
            He = a("FirmwareOrAppUpdateRequired"),
            Ve = a("NoDBPathGiven"),
            ze = a("DBWrongPassword"),
            We = a("DBNotReset");

        function Ke(e, t) {
            this.name = "TransportError", this.message = e, this.stack = (new Error).stack, this.id = t
        }
        Ke.prototype = new Error, s("TransportError", (function(e) {
            return new Ke(e.message, e.id)
        }));
        var Qe = {
            PIN_REMAINING_ATTEMPTS: 25536,
            INCORRECT_LENGTH: 26368,
            MISSING_CRITICAL_PARAMETER: 26624,
            COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 27009,
            SECURITY_STATUS_NOT_SATISFIED: 27010,
            CONDITIONS_OF_USE_NOT_SATISFIED: 27013,
            INCORRECT_DATA: 27264,
            NOT_ENOUGH_MEMORY_SPACE: 27268,
            REFERENCED_DATA_NOT_FOUND: 27272,
            FILE_ALREADY_EXISTS: 27273,
            INCORRECT_P1_P2: 27392,
            INS_NOT_SUPPORTED: 27904,
            CLA_NOT_SUPPORTED: 28160,
            TECHNICAL_PROBLEM: 28416,
            OK: 36864,
            MEMORY_PROBLEM: 37440,
            NO_EF_SELECTED: 37888,
            INVALID_OFFSET: 37890,
            FILE_NOT_FOUND: 37892,
            INCONSISTENT_FILE: 37896,
            ALGORITHM_NOT_SUPPORTED: 38020,
            INVALID_KCV: 38021,
            CODE_NOT_INITIALIZED: 38914,
            ACCESS_CONDITION_NOT_FULFILLED: 38916,
            CONTRADICTION_SECRET_CODE_STATUS: 38920,
            CONTRADICTION_INVALIDATION: 38928,
            CODE_BLOCKED: 38976,
            MAX_VALUE_REACHED: 38992,
            GP_AUTH_FAILED: 25344,
            LICENSING: 28482,
            HALTED: 28586
        };

        function Ze(e) {
            switch (e) {
                case 26368:
                    return "Incorrect length";
                case 26624:
                    return "Missing critical parameter";
                case 27010:
                    return "Security not satisfied (dongle locked or have invalid access rights)";
                case 27013:
                    return "Condition of use not satisfied (denied by the user?)";
                case 27264:
                    return "Invalid data received";
                case 27392:
                    return "Invalid parameter received"
            }
            if (28416 <= e && e <= 28671) return "Internal error, please report"
        }

        function Je(e) {
            this.name = "TransportStatusError";
            var t = Object.keys(Qe).find((function(t) {
                    return Qe[t] === e
                })) || "UNKNOWN_ERROR",
                r = Ze(e) || t,
                n = e.toString(16);
            this.message = "Ledger device: " + r + " (0x" + n + ")", this.stack = (new Error).stack, this.statusCode = e, this.statusText = t
        }
        Je.prototype = new Error, s("TransportStatusError", (function(e) {
            return new Je(e.statusCode)
        }))
    }, function(e, t, r) {
        const n = r(11),
            {
                MAX_LENGTH: o,
                MAX_SAFE_INTEGER: i
            } = r(10),
            {
                re: s,
                t: a
            } = r(5),
            u = r(12),
            {
                compareIdentifiers: c
            } = r(17);
        class l {
            constructor(e, t) {
                if (t = u(t), e instanceof l) {
                    if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
                    e = e.version
                } else if ("string" != typeof e) throw new TypeError("Invalid Version: " + e);
                if (e.length > o) throw new TypeError(`version is longer than ${o} characters`);
                n("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
                const r = e.trim().match(t.loose ? s[a.LOOSE] : s[a.FULL]);
                if (!r) throw new TypeError("Invalid Version: " + e);
                if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > i || this.major < 0) throw new TypeError("Invalid major version");
                if (this.minor > i || this.minor < 0) throw new TypeError("Invalid minor version");
                if (this.patch > i || this.patch < 0) throw new TypeError("Invalid patch version");
                r[4] ? this.prerelease = r[4].split(".").map(e => {
                    if (/^[0-9]+$/.test(e)) {
                        const t = +e;
                        if (t >= 0 && t < i) return t
                    }
                    return e
                }) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format()
            }
            format() {
                return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version
            }
            toString() {
                return this.version
            }
            compare(e) {
                if (n("SemVer.compare", this.version, this.options, e), !(e instanceof l)) {
                    if ("string" == typeof e && e === this.version) return 0;
                    e = new l(e, this.options)
                }
                return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
            }
            compareMain(e) {
                return e instanceof l || (e = new l(e, this.options)), c(this.major, e.major) || c(this.minor, e.minor) || c(this.patch, e.patch)
            }
            comparePre(e) {
                if (e instanceof l || (e = new l(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
                if (!this.prerelease.length && e.prerelease.length) return 1;
                if (!this.prerelease.length && !e.prerelease.length) return 0;
                let t = 0;
                do {
                    const r = this.prerelease[t],
                        o = e.prerelease[t];
                    if (n("prerelease compare", t, r, o), void 0 === r && void 0 === o) return 0;
                    if (void 0 === o) return 1;
                    if (void 0 === r) return -1;
                    if (r !== o) return c(r, o)
                } while (++t)
            }
            compareBuild(e) {
                e instanceof l || (e = new l(e, this.options));
                let t = 0;
                do {
                    const r = this.build[t],
                        o = e.build[t];
                    if (n("prerelease compare", t, r, o), void 0 === r && void 0 === o) return 0;
                    if (void 0 === o) return 1;
                    if (void 0 === r) return -1;
                    if (r !== o) return c(r, o)
                } while (++t)
            }
            inc(e, t) {
                switch (e) {
                    case "premajor":
                        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
                        break;
                    case "preminor":
                        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
                        break;
                    case "prepatch":
                        this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
                        break;
                    case "prerelease":
                        0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
                        break;
                    case "major":
                        0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                        break;
                    case "minor":
                        0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
                        break;
                    case "patch":
                        0 === this.prerelease.length && this.patch++, this.prerelease = [];
                        break;
                    case "pre":
                        if (0 === this.prerelease.length) this.prerelease = [0];
                        else {
                            let e = this.prerelease.length;
                            for (; --e >= 0;) "number" == typeof this.prerelease[e] && (this.prerelease[e]++, e = -2); - 1 === e && this.prerelease.push(0)
                        }
                        t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
                        break;
                    default:
                        throw new Error("invalid increment argument: " + e)
                }
                return this.format(), this.raw = this.version, this
            }
        }
        e.exports = l
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return c
        })), r.d(t, "b", (function() {
            return u
        })), r.d(t, "c", (function() {
            return a
        })), r.d(t, "d", (function() {
            return l
        }));
        var n = {},
            o = {},
            i = function(e, t) {
                o[e] = t
            },
            s = function(e) {
                var t = function(t, r) {
                    Object.assign(this, r), this.name = e, this.message = t || e, this.stack = (new Error).stack
                };
                return t.prototype = new Error, n[e] = t, t
            };
        s("AccountNameRequired"), s("AccountNotSupported"), s("AmountRequired"), s("BluetoothRequired"), s("BtcUnmatchedApp"), s("CantOpenDevice"), s("CashAddrNotSupported"), s("CurrencyNotSupported"), s("DeviceAppVerifyNotSupported"), s("DeviceGenuineSocketEarlyClose"), s("DeviceNotGenuine"), s("DeviceOnDashboardExpected"), s("DeviceOnDashboardUnexpected"), s("DeviceInOSUExpected"), s("DeviceHalted"), s("DeviceNameInvalid"), s("DeviceSocketFail"), s("DeviceSocketNoBulkStatus"), s("DisconnectedDevice"), s("DisconnectedDeviceDuringOperation"), s("EnpointConfig"), s("EthAppPleaseEnableContractData"), s("FeeEstimationFailed"), s("FirmwareNotRecognized"), s("HardResetFail"), s("InvalidXRPTag"), s("InvalidAddress"), s("InvalidAddressBecauseDestinationIsAlsoSource"), s("LatestMCUInstalledError"), s("UnknownMCU"), s("LedgerAPIError"), s("LedgerAPIErrorWithMessage"), s("LedgerAPINotAvailable"), s("ManagerAppAlreadyInstalled"), s("ManagerAppRelyOnBTC"), s("ManagerAppDepInstallRequired"), s("ManagerAppDepUninstallRequired"), s("ManagerDeviceLocked"), s("ManagerFirmwareNotEnoughSpace"), s("ManagerNotEnoughSpace"), s("ManagerUninstallBTCDep"), s("NetworkDown"), s("NoAddressesFound"), s("NotEnoughBalance"), s("NotEnoughBalanceToDelegate"), s("NotEnoughBalanceInParentAccount"), s("NotEnoughSpendableBalance"), s("NotEnoughBalanceBecauseDestinationNotCreated"), s("NoAccessToCamera"), s("NotEnoughGas"), s("NotSupportedLegacyAddress"), s("GasLessThanEstimate"), s("PasswordsDontMatch"), s("PasswordIncorrect"), s("RecommendSubAccountsToEmpty"), s("RecommendUndelegation"), s("TimeoutTagged"), s("UnexpectedBootloader"), s("MCUNotGenuineToDashboard"), s("RecipientRequired"), s("UnavailableTezosOriginatedAccountReceive"), s("UnavailableTezosOriginatedAccountSend"), s("UpdateFetchFileFail"), s("UpdateIncorrectHash"), s("UpdateIncorrectSig"), s("UpdateYourApp"), s("UserRefusedDeviceNameChange"), s("UserRefusedAddress"), s("UserRefusedFirmwareUpdate"), s("UserRefusedAllowManager"), s("UserRefusedOnDevice"), s("TransportOpenUserCancelled"), s("TransportInterfaceNotAvailable");
        var a = s("TransportRaceCondition");
        s("TransportWebUSBGestureRequired"), s("DeviceShouldStayInApp"), s("WebsocketConnectionError"), s("WebsocketConnectionFailed"), s("WrongDeviceForAccount"), s("WrongAppForCurrency"), s("ETHAddressNonEIP"), s("CantScanQRCode"), s("FeeNotLoaded"), s("FeeRequired"), s("FeeTooHigh"), s("SyncError"), s("PairingFailed"), s("GenuineCheckFailed"), s("LedgerAPI4xx"), s("LedgerAPI5xx"), s("FirmwareOrAppUpdateRequired"), s("NoDBPathGiven"), s("DBWrongPassword"), s("DBNotReset");

        function u(e, t) {
            this.name = "TransportError", this.message = e, this.stack = (new Error).stack, this.id = t
        }
        u.prototype = new Error, i("TransportError", (function(e) {
            return new u(e.message, e.id)
        }));
        var c = {
            PIN_REMAINING_ATTEMPTS: 25536,
            INCORRECT_LENGTH: 26368,
            MISSING_CRITICAL_PARAMETER: 26624,
            COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 27009,
            SECURITY_STATUS_NOT_SATISFIED: 27010,
            CONDITIONS_OF_USE_NOT_SATISFIED: 27013,
            INCORRECT_DATA: 27264,
            NOT_ENOUGH_MEMORY_SPACE: 27268,
            REFERENCED_DATA_NOT_FOUND: 27272,
            FILE_ALREADY_EXISTS: 27273,
            INCORRECT_P1_P2: 27392,
            INS_NOT_SUPPORTED: 27904,
            CLA_NOT_SUPPORTED: 28160,
            TECHNICAL_PROBLEM: 28416,
            OK: 36864,
            MEMORY_PROBLEM: 37440,
            NO_EF_SELECTED: 37888,
            INVALID_OFFSET: 37890,
            FILE_NOT_FOUND: 37892,
            INCONSISTENT_FILE: 37896,
            ALGORITHM_NOT_SUPPORTED: 38020,
            INVALID_KCV: 38021,
            CODE_NOT_INITIALIZED: 38914,
            ACCESS_CONDITION_NOT_FULFILLED: 38916,
            CONTRADICTION_SECRET_CODE_STATUS: 38920,
            CONTRADICTION_INVALIDATION: 38928,
            CODE_BLOCKED: 38976,
            MAX_VALUE_REACHED: 38992,
            GP_AUTH_FAILED: 25344,
            LICENSING: 28482,
            HALTED: 28586
        };

        function l(e) {
            this.name = "TransportStatusError";
            var t = Object.keys(c).find((function(t) {
                    return c[t] === e
                })) || "UNKNOWN_ERROR",
                r = function(e) {
                    switch (e) {
                        case 26368:
                            return "Incorrect length";
                        case 26624:
                            return "Missing critical parameter";
                        case 27010:
                            return "Security not satisfied (dongle locked or have invalid access rights)";
                        case 27013:
                            return "Condition of use not satisfied (denied by the user?)";
                        case 27264:
                            return "Invalid data received";
                        case 27392:
                            return "Invalid parameter received"
                    }
                    if (28416 <= e && e <= 28671) return "Internal error, please report"
                }(e) || t,
                n = e.toString(16);
            this.message = "Ledger device: " + r + " (0x" + n + ")", this.stack = (new Error).stack, this.statusCode = e, this.statusText = t
        }
        l.prototype = new Error, i("TransportStatusError", (function(e) {
            return new l(e.statusCode)
        }))
    }, function(e, t, r) {
        const n = r(1);
        e.exports = (e, t, r) => new n(e, r).compare(new n(t, r))
    }, function(e, t, r) {
        class n {
            constructor(e, t) {
                if (t = i(t), e instanceof n) return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new n(e.raw, t);
                if (e instanceof s) return this.raw = e.value, this.set = [
                    [e]
                ], this.format(), this;
                if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map(e => this.parseRange(e.trim())).filter(e => e.length), !this.set.length) throw new TypeError("Invalid SemVer Range: " + e);
                if (this.set.length > 1) {
                    const e = this.set[0];
                    if (this.set = this.set.filter(e => !d(e[0])), 0 === this.set.length) this.set = [e];
                    else if (this.set.length > 1)
                        for (const e of this.set)
                            if (1 === e.length && g(e[0])) {
                                this.set = [e];
                                break
                            }
                }
                this.format()
            }
            format() {
                return this.range = this.set.map(e => e.join(" ").trim()).join("||").trim(), this.range
            }
            toString() {
                return this.range
            }
            parseRange(e) {
                e = e.trim();
                const t = `parseRange:${Object.keys(this.options).join(",")}:${e}`,
                    r = o.get(t);
                if (r) return r;
                const n = this.options.loose,
                    i = n ? c[l.HYPHENRANGELOOSE] : c[l.HYPHENRANGE];
                e = e.replace(i, b(this.options.includePrerelease)), a("hyphen replace", e), e = e.replace(c[l.COMPARATORTRIM], h), a("comparator trim", e, c[l.COMPARATORTRIM]), e = (e = (e = e.replace(c[l.TILDETRIM], f)).replace(c[l.CARETTRIM], p)).split(/\s+/).join(" ");
                const u = n ? c[l.COMPARATORLOOSE] : c[l.COMPARATOR],
                    g = e.split(" ").map(e => E(e, this.options)).join(" ").split(/\s+/).map(e => N(e, this.options)).filter(this.options.loose ? e => !!e.match(u) : () => !0).map(e => new s(e, this.options)),
                    v = (g.length, new Map);
                for (const e of g) {
                    if (d(e)) return [e];
                    v.set(e.value, e)
                }
                v.size > 1 && v.has("") && v.delete("");
                const m = [...v.values()];
                return o.set(t, m), m
            }
            intersects(e, t) {
                if (!(e instanceof n)) throw new TypeError("a Range is required");
                return this.set.some(r => v(r, t) && e.set.some(e => v(e, t) && r.every(r => e.every(e => r.intersects(e, t)))))
            }
            test(e) {
                if (!e) return !1;
                if ("string" == typeof e) try {
                    e = new u(e, this.options)
                } catch (e) {
                    return !1
                }
                for (let t = 0; t < this.set.length; t++)
                    if (O(this.set[t], e, this.options)) return !0;
                return !1
            }
        }
        e.exports = n;
        const o = new(r(52))({
                max: 1e3
            }),
            i = r(12),
            s = r(14),
            a = r(11),
            u = r(1),
            {
                re: c,
                t: l,
                comparatorTrimReplace: h,
                tildeTrimReplace: f,
                caretTrimReplace: p
            } = r(5),
            d = e => "<0.0.0-0" === e.value,
            g = e => "" === e.value,
            v = (e, t) => {
                let r = !0;
                const n = e.slice();
                let o = n.pop();
                for (; r && n.length;) r = n.every(e => o.intersects(e, t)), o = n.pop();
                return r
            },
            E = (e, t) => (a("comp", e, t), e = I(e, t), a("caret", e), e = y(e, t), a("tildes", e), e = R(e, t), a("xrange", e), e = S(e, t), a("stars", e), e),
            m = e => !e || "x" === e.toLowerCase() || "*" === e,
            y = (e, t) => e.trim().split(/\s+/).map(e => w(e, t)).join(" "),
            w = (e, t) => {
                const r = t.loose ? c[l.TILDELOOSE] : c[l.TILDE];
                return e.replace(r, (t, r, n, o, i) => {
                    let s;
                    return a("tilde", e, t, r, n, o, i), m(r) ? s = "" : m(n) ? s = `>=${r}.0.0 <${+r+1}.0.0-0` : m(o) ? s = `>=${r}.${n}.0 <${r}.${+n+1}.0-0` : i ? (a("replaceTilde pr", i), s = `>=${r}.${n}.${o}-${i} <${r}.${+n+1}.0-0`) : s = `>=${r}.${n}.${o} <${r}.${+n+1}.0-0`, a("tilde return", s), s
                })
            },
            I = (e, t) => e.trim().split(/\s+/).map(e => T(e, t)).join(" "),
            T = (e, t) => {
                a("caret", e, t);
                const r = t.loose ? c[l.CARETLOOSE] : c[l.CARET],
                    n = t.includePrerelease ? "-0" : "";
                return e.replace(r, (t, r, o, i, s) => {
                    let u;
                    return a("caret", e, t, r, o, i, s), m(r) ? u = "" : m(o) ? u = `>=${r}.0.0${n} <${+r+1}.0.0-0` : m(i) ? u = "0" === r ? `>=${r}.${o}.0${n} <${r}.${+o+1}.0-0` : `>=${r}.${o}.0${n} <${+r+1}.0.0-0` : s ? (a("replaceCaret pr", s), u = "0" === r ? "0" === o ? `>=${r}.${o}.${i}-${s} <${r}.${o}.${+i+1}-0` : `>=${r}.${o}.${i}-${s} <${r}.${+o+1}.0-0` : `>=${r}.${o}.${i}-${s} <${+r+1}.0.0-0`) : (a("no pr"), u = "0" === r ? "0" === o ? `>=${r}.${o}.${i}${n} <${r}.${o}.${+i+1}-0` : `>=${r}.${o}.${i}${n} <${r}.${+o+1}.0-0` : `>=${r}.${o}.${i} <${+r+1}.0.0-0`), a("caret return", u), u
                })
            },
            R = (e, t) => (a("replaceXRanges", e, t), e.split(/\s+/).map(e => A(e, t)).join(" ")),
            A = (e, t) => {
                e = e.trim();
                const r = t.loose ? c[l.XRANGELOOSE] : c[l.XRANGE];
                return e.replace(r, (r, n, o, i, s, u) => {
                    a("xRange", e, r, n, o, i, s, u);
                    const c = m(o),
                        l = c || m(i),
                        h = l || m(s),
                        f = h;
                    return "=" === n && f && (n = ""), u = t.includePrerelease ? "-0" : "", c ? r = ">" === n || "<" === n ? "<0.0.0-0" : "*" : n && f ? (l && (i = 0), s = 0, ">" === n ? (n = ">=", l ? (o = +o + 1, i = 0, s = 0) : (i = +i + 1, s = 0)) : "<=" === n && (n = "<", l ? o = +o + 1 : i = +i + 1), "<" === n && (u = "-0"), r = `${n+o}.${i}.${s}${u}`) : l ? r = `>=${o}.0.0${u} <${+o+1}.0.0-0` : h && (r = `>=${o}.${i}.0${u} <${o}.${+i+1}.0-0`), a("xRange return", r), r
                })
            },
            S = (e, t) => (a("replaceStars", e, t), e.trim().replace(c[l.STAR], "")),
            N = (e, t) => (a("replaceGTE0", e, t), e.trim().replace(c[t.includePrerelease ? l.GTE0PRE : l.GTE0], "")),
            b = e => (t, r, n, o, i, s, a, u, c, l, h, f, p) => `${r=m(n)?"":m(o)?`>=${n}.0.0${e?"-0":""}`:m(i)?`>=${n}.${o}.0${e?"-0":""}`:s?">="+r:`>=${r}${e?"-0":""}`} ${u=m(c)?"":m(l)?`<${+c+1}.0.0-0`:m(h)?`<${c}.${+l+1}.0-0`:f?`<=${c}.${l}.${h}-${f}`:e?`<${c}.${l}.${+h+1}-0`:"<="+u}`.trim(),
            O = (e, t, r) => {
                for (let r = 0; r < e.length; r++)
                    if (!e[r].test(t)) return !1;
                if (t.prerelease.length && !r.includePrerelease) {
                    for (let r = 0; r < e.length; r++)
                        if (a(e[r].semver), e[r].semver !== s.ANY && e[r].semver.prerelease.length > 0) {
                            const n = e[r].semver;
                            if (n.major === t.major && n.minor === t.minor && n.patch === t.patch) return !0
                        }
                    return !1
                }
                return !0
            }
    }, function(e, t, r) {
        const {
            MAX_SAFE_COMPONENT_LENGTH: n
        } = r(10), o = r(11), i = (t = e.exports = {}).re = [], s = t.src = [], a = t.t = {};
        let u = 0;
        const c = (e, t, r) => {
            const n = u++;
            o(n, t), a[e] = n, s[n] = t, i[n] = new RegExp(t, r ? "g" : void 0)
        };
        c("NUMERICIDENTIFIER", "0|[1-9]\\d*"), c("NUMERICIDENTIFIERLOOSE", "[0-9]+"), c("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), c("MAINVERSION", `(${s[a.NUMERICIDENTIFIER]})\\.(${s[a.NUMERICIDENTIFIER]})\\.(${s[a.NUMERICIDENTIFIER]})`), c("MAINVERSIONLOOSE", `(${s[a.NUMERICIDENTIFIERLOOSE]})\\.(${s[a.NUMERICIDENTIFIERLOOSE]})\\.(${s[a.NUMERICIDENTIFIERLOOSE]})`), c("PRERELEASEIDENTIFIER", `(?:${s[a.NUMERICIDENTIFIER]}|${s[a.NONNUMERICIDENTIFIER]})`), c("PRERELEASEIDENTIFIERLOOSE", `(?:${s[a.NUMERICIDENTIFIERLOOSE]}|${s[a.NONNUMERICIDENTIFIER]})`), c("PRERELEASE", `(?:-(${s[a.PRERELEASEIDENTIFIER]}(?:\\.${s[a.PRERELEASEIDENTIFIER]})*))`), c("PRERELEASELOOSE", `(?:-?(${s[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[a.PRERELEASEIDENTIFIERLOOSE]})*))`), c("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), c("BUILD", `(?:\\+(${s[a.BUILDIDENTIFIER]}(?:\\.${s[a.BUILDIDENTIFIER]})*))`), c("FULLPLAIN", `v?${s[a.MAINVERSION]}${s[a.PRERELEASE]}?${s[a.BUILD]}?`), c("FULL", `^${s[a.FULLPLAIN]}$`), c("LOOSEPLAIN", `[v=\\s]*${s[a.MAINVERSIONLOOSE]}${s[a.PRERELEASELOOSE]}?${s[a.BUILD]}?`), c("LOOSE", `^${s[a.LOOSEPLAIN]}$`), c("GTLT", "((?:<|>)?=?)"), c("XRANGEIDENTIFIERLOOSE", s[a.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*"), c("XRANGEIDENTIFIER", s[a.NUMERICIDENTIFIER] + "|x|X|\\*"), c("XRANGEPLAIN", `[v=\\s]*(${s[a.XRANGEIDENTIFIER]})(?:\\.(${s[a.XRANGEIDENTIFIER]})(?:\\.(${s[a.XRANGEIDENTIFIER]})(?:${s[a.PRERELEASE]})?${s[a.BUILD]}?)?)?`), c("XRANGEPLAINLOOSE", `[v=\\s]*(${s[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[a.XRANGEIDENTIFIERLOOSE]})(?:${s[a.PRERELEASELOOSE]})?${s[a.BUILD]}?)?)?`), c("XRANGE", `^${s[a.GTLT]}\\s*${s[a.XRANGEPLAIN]}$`), c("XRANGELOOSE", `^${s[a.GTLT]}\\s*${s[a.XRANGEPLAINLOOSE]}$`), c("COERCE", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`), c("COERCERTL", s[a.COERCE], !0), c("LONETILDE", "(?:~>?)"), c("TILDETRIM", `(\\s*)${s[a.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", c("TILDE", `^${s[a.LONETILDE]}${s[a.XRANGEPLAIN]}$`), c("TILDELOOSE", `^${s[a.LONETILDE]}${s[a.XRANGEPLAINLOOSE]}$`), c("LONECARET", "(?:\\^)"), c("CARETTRIM", `(\\s*)${s[a.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", c("CARET", `^${s[a.LONECARET]}${s[a.XRANGEPLAIN]}$`), c("CARETLOOSE", `^${s[a.LONECARET]}${s[a.XRANGEPLAINLOOSE]}$`), c("COMPARATORLOOSE", `^${s[a.GTLT]}\\s*(${s[a.LOOSEPLAIN]})$|^$`), c("COMPARATOR", `^${s[a.GTLT]}\\s*(${s[a.FULLPLAIN]})$|^$`), c("COMPARATORTRIM", `(\\s*)${s[a.GTLT]}\\s*(${s[a.LOOSEPLAIN]}|${s[a.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", c("HYPHENRANGE", `^\\s*(${s[a.XRANGEPLAIN]})\\s+-\\s+(${s[a.XRANGEPLAIN]})\\s*$`), c("HYPHENRANGELOOSE", `^\\s*(${s[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[a.XRANGEPLAINLOOSE]})\\s*$`), c("STAR", "(<|>)?=?\\s*\\*"), c("GTE0", "^\\s*>=\\s*0.0.0\\s*$"), c("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$")
    }, function(e, t, r) {
        const {
            MAX_LENGTH: n
        } = r(10), {
            re: o,
            t: i
        } = r(5), s = r(1), a = r(12);
        e.exports = (e, t) => {
            if (t = a(t), e instanceof s) return e;
            if ("string" != typeof e) return null;
            if (e.length > n) return null;
            if (!(t.loose ? o[i.LOOSE] : o[i.FULL]).test(e)) return null;
            try {
                return new s(e, t)
            } catch (e) {
                return null
            }
        }
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <http://feross.org>
             * @license  MIT
             */
            var n = r(35),
                o = r(36),
                i = r(37);

            function s() {
                return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function a(e, t) {
                if (s() < t) throw new RangeError("Invalid typed array length");
                return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)), e.length = t), e
            }

            function u(e, t, r) {
                if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(e, t, r);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return h(this, e)
                }
                return c(this, e, t, r)
            }

            function c(e, t, r, n) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, r, n) {
                    if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                    t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
                    u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = f(e, t);
                    return e
                }(e, t, r, n) : "string" == typeof t ? function(e, t, r) {
                    "string" == typeof r && "" !== r || (r = "utf8");
                    if (!u.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                    var n = 0 | d(t, r),
                        o = (e = a(e, n)).write(t, r);
                    o !== n && (e = e.slice(0, o));
                    return e
                }(e, t, r) : function(e, t) {
                    if (u.isBuffer(t)) {
                        var r = 0 | p(t.length);
                        return 0 === (e = a(e, r)).length || t.copy(e, 0, 0, r), e
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? a(e, 0) : f(e, t);
                        if ("Buffer" === t.type && i(t.data)) return f(e, t.data)
                    }
                    var n;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }

            function l(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function h(e, t) {
                if (l(t), e = a(e, t < 0 ? 0 : 0 | p(t)), !u.TYPED_ARRAY_SUPPORT)
                    for (var r = 0; r < t; ++r) e[r] = 0;
                return e
            }

            function f(e, t) {
                var r = t.length < 0 ? 0 : 0 | p(t.length);
                e = a(e, r);
                for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
                return e
            }

            function p(e) {
                if (e >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                return 0 | e
            }

            function d(e, t) {
                if (u.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var r = e.length;
                if (0 === r) return 0;
                for (var n = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return k(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return G(e).length;
                    default:
                        if (n) return k(e).length;
                        t = ("" + t).toLowerCase(), n = !0
                }
            }

            function g(e, t, r) {
                var n = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if ((r >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return _(this, t, r);
                    case "utf8":
                    case "utf-8":
                        return N(this, t, r);
                    case "ascii":
                        return b(this, t, r);
                    case "latin1":
                    case "binary":
                        return O(this, t, r);
                    case "base64":
                        return S(this, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return L(this, t, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), n = !0
                }
            }

            function v(e, t, r) {
                var n = e[t];
                e[t] = e[r], e[r] = n
            }

            function E(e, t, r, n, o) {
                if (0 === e.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = o ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (o) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!o) return -1;
                    r = 0
                }
                if ("string" == typeof t && (t = u.from(t, n)), u.isBuffer(t)) return 0 === t.length ? -1 : m(e, t, r, n, o);
                if ("number" == typeof t) return t &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : m(e, [t], r, n, o);
                throw new TypeError("val must be string, number or Buffer")
            }

            function m(e, t, r, n, o) {
                var i, s = 1,
                    a = e.length,
                    u = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    s = 2, a /= 2, u /= 2, r /= 2
                }

                function c(e, t) {
                    return 1 === s ? e[t] : e.readUInt16BE(t * s)
                }
                if (o) {
                    var l = -1;
                    for (i = r; i < a; i++)
                        if (c(e, i) === c(t, -1 === l ? 0 : i - l)) {
                            if (-1 === l && (l = i), i - l + 1 === u) return l * s
                        } else -1 !== l && (i -= i - l), l = -1
                } else
                    for (r + u > a && (r = a - u), i = r; i >= 0; i--) {
                        for (var h = !0, f = 0; f < u; f++)
                            if (c(e, i + f) !== c(t, f)) {
                                h = !1;
                                break
                            }
                        if (h) return i
                    }
                return -1
            }

            function y(e, t, r, n) {
                r = Number(r) || 0;
                var o = e.length - r;
                n ? (n = Number(n)) > o && (n = o) : n = o;
                var i = t.length;
                if (i % 2 != 0) throw new TypeError("Invalid hex string");
                n > i / 2 && (n = i / 2);
                for (var s = 0; s < n; ++s) {
                    var a = parseInt(t.substr(2 * s, 2), 16);
                    if (isNaN(a)) return s;
                    e[r + s] = a
                }
                return s
            }

            function w(e, t, r, n) {
                return j(k(t, e.length - r), e, r, n)
            }

            function I(e, t, r, n) {
                return j(function(e) {
                    for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                    return t
                }(t), e, r, n)
            }

            function T(e, t, r, n) {
                return I(e, t, r, n)
            }

            function R(e, t, r, n) {
                return j(G(t), e, r, n)
            }

            function A(e, t, r, n) {
                return j(function(e, t) {
                    for (var r, n, o, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) r = e.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);
                    return i
                }(t, e.length - r), e, r, n)
            }

            function S(e, t, r) {
                return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r))
            }

            function N(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], o = t; o < r;) {
                    var i, s, a, u, c = e[o],
                        l = null,
                        h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (o + h <= r) switch (h) {
                        case 1:
                            c < 128 && (l = c);
                            break;
                        case 2:
                            128 == (192 & (i = e[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (l = u);
                            break;
                        case 3:
                            i = e[o + 1], s = e[o + 2], 128 == (192 & i) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
                            break;
                        case 4:
                            i = e[o + 1], s = e[o + 2], a = e[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u)
                    }
                    null === l ? (l = 65533, h = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n.push(l), o += h
                }
                return function(e) {
                    var t = e.length;
                    if (t <= 4096) return String.fromCharCode.apply(String, e);
                    var r = "",
                        n = 0;
                    for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += 4096));
                    return r
                }(n)
            }
            t.Buffer = u, t.SlowBuffer = function(e) {
                +e != e && (e = 0);
                return u.alloc(+e)
            }, t.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(), t.kMaxLength = s(), u.poolSize = 8192, u._augment = function(e) {
                return e.__proto__ = u.prototype, e
            }, u.from = function(e, t, r) {
                return c(null, e, t, r)
            }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
                value: null,
                configurable: !0
            })), u.alloc = function(e, t, r) {
                return function(e, t, r, n) {
                    return l(t), t <= 0 ? a(e, t) : void 0 !== r ? "string" == typeof n ? a(e, t).fill(r, n) : a(e, t).fill(r) : a(e, t)
                }(null, e, t, r)
            }, u.allocUnsafe = function(e) {
                return h(null, e)
            }, u.allocUnsafeSlow = function(e) {
                return h(null, e)
            }, u.isBuffer = function(e) {
                return !(null == e || !e._isBuffer)
            }, u.compare = function(e, t) {
                if (!u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var r = e.length, n = t.length, o = 0, i = Math.min(r, n); o < i; ++o)
                    if (e[o] !== t[o]) {
                        r = e[o], n = t[o];
                        break
                    }
                return r < n ? -1 : n < r ? 1 : 0
            }, u.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, u.concat = function(e, t) {
                if (!i(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return u.alloc(0);
                var r;
                if (void 0 === t)
                    for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                var n = u.allocUnsafe(t),
                    o = 0;
                for (r = 0; r < e.length; ++r) {
                    var s = e[r];
                    if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(n, o), o += s.length
                }
                return n
            }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) v(this, t, t + 1);
                return this
            }, u.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) v(this, t, t + 3), v(this, t + 1, t + 2);
                return this
            }, u.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) v(this, t, t + 7), v(this, t + 1, t + 6), v(this, t + 2, t + 5), v(this, t + 3, t + 4);
                return this
            }, u.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? N(this, 0, e) : g.apply(this, arguments)
            }, u.prototype.equals = function(e) {
                if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === u.compare(this, e)
            }, u.prototype.inspect = function() {
                var e = "",
                    r = t.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (e += " ... ")), "<Buffer " + e + ">"
            }, u.prototype.compare = function(e, t, r, n, o) {
                if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), t < 0 || r > e.length || n < 0 || o > this.length) throw new RangeError("out of range index");
                if (n >= o && t >= r) return 0;
                if (n >= o) return -1;
                if (t >= r) return 1;
                if (this === e) return 0;
                for (var i = (o >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (t >>>= 0), a = Math.min(i, s), c = this.slice(n, o), l = e.slice(t, r), h = 0; h < a; ++h)
                    if (c[h] !== l[h]) {
                        i = c[h], s = l[h];
                        break
                    }
                return i < s ? -1 : s < i ? 1 : 0
            }, u.prototype.includes = function(e, t, r) {
                return -1 !== this.indexOf(e, t, r)
            }, u.prototype.indexOf = function(e, t, r) {
                return E(this, e, t, r, !0)
            }, u.prototype.lastIndexOf = function(e, t, r) {
                return E(this, e, t, r, !1)
            }, u.prototype.write = function(e, t, r, n) {
                if (void 0 === t) n = "utf8", r = this.length, t = 0;
                else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                var o = this.length - t;
                if ((void 0 === r || r > o) && (r = o), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var i = !1;;) switch (n) {
                    case "hex":
                        return y(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                        return w(this, e, t, r);
                    case "ascii":
                        return I(this, e, t, r);
                    case "latin1":
                    case "binary":
                        return T(this, e, t, r);
                    case "base64":
                        return R(this, e, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return A(this, e, t, r);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), i = !0
                }
            }, u.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };

            function b(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var o = t; o < r; ++o) n += String.fromCharCode(127 & e[o]);
                return n
            }

            function O(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var o = t; o < r; ++o) n += String.fromCharCode(e[o]);
                return n
            }

            function _(e, t, r) {
                var n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                for (var o = "", i = t; i < r; ++i) o += B(e[i]);
                return o
            }

            function L(e, t, r) {
                for (var n = e.slice(t, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                return o
            }

            function P(e, t, r) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function C(e, t, r, n, o, i) {
                if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw new RangeError("Index out of range")
            }

            function D(e, t, r, n) {
                t < 0 && (t = 65535 + t + 1);
                for (var o = 0, i = Math.min(e.length - r, 2); o < i; ++o) e[r + o] = (t & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o)
            }

            function U(e, t, r, n) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var o = 0, i = Math.min(e.length - r, 4); o < i; ++o) e[r + o] = t >>> 8 * (n ? o : 3 - o) & 255
            }

            function x(e, t, r, n, o, i) {
                if (r + n > e.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function M(e, t, r, n, i) {
                return i || x(e, 0, r, 4), o.write(e, t, r, n, 23, 4), r + 4
            }

            function $(e, t, r, n, i) {
                return i || x(e, 0, r, 8), o.write(e, t, r, n, 52, 8), r + 8
            }
            u.prototype.slice = function(e, t) {
                var r, n = this.length;
                if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), u.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = u.prototype;
                else {
                    var o = t - e;
                    r = new u(o, void 0);
                    for (var i = 0; i < o; ++i) r[i] = this[i + e]
                }
                return r
            }, u.prototype.readUIntLE = function(e, t, r) {
                e |= 0, t |= 0, r || P(e, t, this.length);
                for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;
                return n
            }, u.prototype.readUIntBE = function(e, t, r) {
                e |= 0, t |= 0, r || P(e, t, this.length);
                for (var n = this[e + --t], o = 1; t > 0 && (o *= 256);) n += this[e + --t] * o;
                return n
            }, u.prototype.readUInt8 = function(e, t) {
                return t || P(e, 1, this.length), this[e]
            }, u.prototype.readUInt16LE = function(e, t) {
                return t || P(e, 2, this.length), this[e] | this[e + 1] << 8
            }, u.prototype.readUInt16BE = function(e, t) {
                return t || P(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, u.prototype.readUInt32LE = function(e, t) {
                return t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, u.prototype.readUInt32BE = function(e, t) {
                return t || P(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, u.prototype.readIntLE = function(e, t, r) {
                e |= 0, t |= 0, r || P(e, t, this.length);
                for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;
                return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n
            }, u.prototype.readIntBE = function(e, t, r) {
                e |= 0, t |= 0, r || P(e, t, this.length);
                for (var n = t, o = 1, i = this[e + --n]; n > 0 && (o *= 256);) i += this[e + --n] * o;
                return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
            }, u.prototype.readInt8 = function(e, t) {
                return t || P(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, u.prototype.readInt16LE = function(e, t) {
                t || P(e, 2, this.length);
                var r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, u.prototype.readInt16BE = function(e, t) {
                t || P(e, 2, this.length);
                var r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, u.prototype.readInt32LE = function(e, t) {
                return t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, u.prototype.readInt32BE = function(e, t) {
                return t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, u.prototype.readFloatLE = function(e, t) {
                return t || P(e, 4, this.length), o.read(this, e, !0, 23, 4)
            }, u.prototype.readFloatBE = function(e, t) {
                return t || P(e, 4, this.length), o.read(this, e, !1, 23, 4)
            }, u.prototype.readDoubleLE = function(e, t) {
                return t || P(e, 8, this.length), o.read(this, e, !0, 52, 8)
            }, u.prototype.readDoubleBE = function(e, t) {
                return t || P(e, 8, this.length), o.read(this, e, !1, 52, 8)
            }, u.prototype.writeUIntLE = function(e, t, r, n) {
                (e = +e, t |= 0, r |= 0, n) || C(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var o = 1,
                    i = 0;
                for (this[t] = 255 & e; ++i < r && (o *= 256);) this[t + i] = e / o & 255;
                return t + r
            }, u.prototype.writeUIntBE = function(e, t, r, n) {
                (e = +e, t |= 0, r |= 0, n) || C(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var o = r - 1,
                    i = 1;
                for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255;
                return t + r
            }, u.prototype.writeUInt8 = function(e, t, r) {
                return e = +e, t |= 0, r || C(this, e, t, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, u.prototype.writeUInt16LE = function(e, t, r) {
                return e = +e, t |= 0, r || C(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : D(this, e, t, !0), t + 2
            }, u.prototype.writeUInt16BE = function(e, t, r) {
                return e = +e, t |= 0, r || C(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : D(this, e, t, !1), t + 2
            }, u.prototype.writeUInt32LE = function(e, t, r) {
                return e = +e, t |= 0, r || C(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : U(this, e, t, !0), t + 4
            }, u.prototype.writeUInt32BE = function(e, t, r) {
                return e = +e, t |= 0, r || C(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : U(this, e, t, !1), t + 4
            }, u.prototype.writeIntLE = function(e, t, r, n) {
                if (e = +e, t |= 0, !n) {
                    var o = Math.pow(2, 8 * r - 1);
                    C(this, e, t, r, o - 1, -o)
                }
                var i = 0,
                    s = 1,
                    a = 0;
                for (this[t] = 255 & e; ++i < r && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1), this[t + i] = (e / s >> 0) - a & 255;
                return t + r
            }, u.prototype.writeIntBE = function(e, t, r, n) {
                if (e = +e, t |= 0, !n) {
                    var o = Math.pow(2, 8 * r - 1);
                    C(this, e, t, r, o - 1, -o)
                }
                var i = r - 1,
                    s = 1,
                    a = 0;
                for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1), this[t + i] = (e / s >> 0) - a & 255;
                return t + r
            }, u.prototype.writeInt8 = function(e, t, r) {
                return e = +e, t |= 0, r || C(this, e, t, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, u.prototype.writeInt16LE = function(e, t, r) {
                return e = +e, t |= 0, r || C(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : D(this, e, t, !0), t + 2
            }, u.prototype.writeInt16BE = function(e, t, r) {
                return e = +e, t |= 0, r || C(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : D(this, e, t, !1), t + 2
            }, u.prototype.writeInt32LE = function(e, t, r) {
                return e = +e, t |= 0, r || C(this, e, t, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : U(this, e, t, !0), t + 4
            }, u.prototype.writeInt32BE = function(e, t, r) {
                return e = +e, t |= 0, r || C(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : U(this, e, t, !1), t + 4
            }, u.prototype.writeFloatLE = function(e, t, r) {
                return M(this, e, t, !0, r)
            }, u.prototype.writeFloatBE = function(e, t, r) {
                return M(this, e, t, !1, r)
            }, u.prototype.writeDoubleLE = function(e, t, r) {
                return $(this, e, t, !0, r)
            }, u.prototype.writeDoubleBE = function(e, t, r) {
                return $(this, e, t, !1, r)
            }, u.prototype.copy = function(e, t, r, n) {
                if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                var o, i = n - r;
                if (this === e && r < t && t < n)
                    for (o = i - 1; o >= 0; --o) e[o + t] = this[o + r];
                else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                    for (o = 0; o < i; ++o) e[o + t] = this[o + r];
                else Uint8Array.prototype.set.call(e, this.subarray(r, r + i), t);
                return i
            }, u.prototype.fill = function(e, t, r, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
                        var o = e.charCodeAt(0);
                        o < 256 && (e = o)
                    }
                    if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                if (r <= t) return this;
                var i;
                if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                    for (i = t; i < r; ++i) this[i] = e;
                else {
                    var s = u.isBuffer(e) ? e : k(new u(e, n).toString()),
                        a = s.length;
                    for (i = 0; i < r - t; ++i) this[i + t] = s[i % a]
                }
                return this
            };
            var F = /[^+\/0-9A-Za-z-_]/g;

            function B(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function k(e, t) {
                var r;
                t = t || 1 / 0;
                for (var n = e.length, o = null, i = [], s = 0; s < n; ++s) {
                    if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                        if (!o) {
                            if (r > 56319) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === n) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = r;
                            continue
                        }
                        if (r < 56320) {
                            (t -= 3) > -1 && i.push(239, 191, 189), o = r;
                            continue
                        }
                        r = 65536 + (o - 55296 << 10 | r - 56320)
                    } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null, r < 128) {
                        if ((t -= 1) < 0) break;
                        i.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        i.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return i
            }

            function G(e) {
                return n.toByteArray(function(e) {
                    if ((e = function(e) {
                            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                        }(e).replace(F, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function j(e, t, r, n) {
                for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) t[o + r] = e[o];
                return o
            }
        }).call(this, r(27))
    }, function(e, t, r) {
        "use strict";
        r.d(t, "b", (function() {
            return l
        })), r.d(t, "a", (function() {
            return h
        }));
        var n, o, i = r(24),
            s = r.n(i),
            a = function() {
                return (a = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };
        ! function(e) {
            e.blue = "blue", e.nanoS = "nanoS", e.nanoSP = "nanoSP", e.nanoX = "nanoX"
        }(o || (o = {}));
        var u = ((n = {})[o.blue] = {
                id: o.blue,
                productName: "Ledger Blue",
                productIdMM: 0,
                legacyUsbProductId: 0,
                usbOnly: !0,
                memorySize: 491520,
                masks: [822083584, 822149120],
                getBlockSize: function(e) {
                    return 4096
                }
            }, n[o.nanoS] = {
                id: o.nanoS,
                productName: "Ledger Nano S",
                productIdMM: 16,
                legacyUsbProductId: 1,
                usbOnly: !0,
                memorySize: 327680,
                masks: [823132160],
                getBlockSize: function(e) {
                    var t;
                    return s.a.lt(null !== (t = s.a.coerce(e)) && void 0 !== t ? t : "", "2.0.0") ? 4096 : 2048
                }
            }, n[o.nanoSP] = {
                id: o.nanoSP,
                productName: "Ledger Nano SP",
                productIdMM: 80,
                legacyUsbProductId: 5,
                usbOnly: !0,
                memorySize: 1569792,
                masks: [856686592],
                getBlockSize: function(e) {
                    return 32
                }
            }, n[o.nanoX] = {
                id: o.nanoX,
                productName: "Ledger Nano X",
                productIdMM: 64,
                legacyUsbProductId: 4,
                usbOnly: !1,
                memorySize: 2097152,
                masks: [855638016],
                getBlockSize: function(e) {
                    return 4096
                },
                bluetoothSpec: [{
                    serviceUuid: "d973f2e0-b19e-11e2-9e96-0800200c9a66",
                    notifyUuid: "d973f2e1-b19e-11e2-9e96-0800200c9a66",
                    writeUuid: "d973f2e2-b19e-11e2-9e96-0800200c9a66",
                    writeCmdUuid: "d973f2e3-b19e-11e2-9e96-0800200c9a66"
                }, {
                    serviceUuid: "13d63400-2c97-0004-0000-4c6564676572",
                    notifyUuid: "13d63400-2c97-0004-0001-4c6564676572",
                    writeUuid: "13d63400-2c97-0004-0002-4c6564676572",
                    writeCmdUuid: "13d63400-2c97-0004-0003-4c6564676572"
                }]
            }, n),
            c = (o.blue, o.nanoS, o.nanoX, Object.values(u)),
            l = 11415,
            h = function(e) {
                var t = c.find((function(t) {
                    return t.legacyUsbProductId === e
                }));
                if (t) return t;
                var r = e >> 8;
                return c.find((function(e) {
                    return e.productIdMM === r
                }))
            },
            f = [],
            p = {};
        for (var d in u) {
            var g = u[d],
                v = g.bluetoothSpec;
            if (v)
                for (var E = 0; E < v.length; E++) {
                    var m = v[E];
                    f.push(m.serviceUuid), p[m.serviceUuid] = p[m.serviceUuid.replace(/-/g, "")] = a({
                        deviceModel: g
                    }, m)
                }
        }
    }, function(e, t, r) {
        "use strict";
        e.exports = r(66)
    }, function(e, t) {
        const r = Number.MAX_SAFE_INTEGER || 9007199254740991;
        e.exports = {
            SEMVER_SPEC_VERSION: "2.0.0",
            MAX_LENGTH: 256,
            MAX_SAFE_INTEGER: r,
            MAX_SAFE_COMPONENT_LENGTH: 16
        }
    }, function(e, t, r) {
        (function(t) {
            const r = "object" == typeof t && t.env && t.env.NODE_DEBUG && /\bsemver\b/i.test(t.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
            e.exports = r
        }).call(this, r(38))
    }, function(e, t) {
        const r = ["includePrerelease", "loose", "rtl"];
        e.exports = e => e ? "object" != typeof e ? {
            loose: !0
        } : r.filter(t => e[t]).reduce((e, t) => (e[t] = !0, e), {}) : {}
    }, function(e, t, r) {
        const n = r(3);
        e.exports = (e, t, r) => n(e, t, r) > 0
    }, function(e, t, r) {
        const n = Symbol("SemVer ANY");
        class o {
            static get ANY() {
                return n
            }
            constructor(e, t) {
                if (t = i(t), e instanceof o) {
                    if (e.loose === !!t.loose) return e;
                    e = e.value
                }
                c("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === n ? this.value = "" : this.value = this.operator + this.semver.version, c("comp", this)
            }
            parse(e) {
                const t = this.options.loose ? s[a.COMPARATORLOOSE] : s[a.COMPARATOR],
                    r = e.match(t);
                if (!r) throw new TypeError("Invalid comparator: " + e);
                this.operator = void 0 !== r[1] ? r[1] : "", "=" === this.operator && (this.operator = ""), r[2] ? this.semver = new l(r[2], this.options.loose) : this.semver = n
            }
            toString() {
                return this.value
            }
            test(e) {
                if (c("Comparator.test", e, this.options.loose), this.semver === n || e === n) return !0;
                if ("string" == typeof e) try {
                    e = new l(e, this.options)
                } catch (e) {
                    return !1
                }
                return u(e, this.operator, this.semver, this.options)
            }
            intersects(e, t) {
                if (!(e instanceof o)) throw new TypeError("a Comparator is required");
                if (t && "object" == typeof t || (t = {
                        loose: !!t,
                        includePrerelease: !1
                    }), "" === this.operator) return "" === this.value || new h(e.value, t).test(this.value);
                if ("" === e.operator) return "" === e.value || new h(this.value, t).test(e.semver);
                const r = !(">=" !== this.operator && ">" !== this.operator || ">=" !== e.operator && ">" !== e.operator),
                    n = !("<=" !== this.operator && "<" !== this.operator || "<=" !== e.operator && "<" !== e.operator),
                    i = this.semver.version === e.semver.version,
                    s = !(">=" !== this.operator && "<=" !== this.operator || ">=" !== e.operator && "<=" !== e.operator),
                    a = u(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this.operator) && ("<=" === e.operator || "<" === e.operator),
                    c = u(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this.operator) && (">=" === e.operator || ">" === e.operator);
                return r || n || i && s || a || c
            }
        }
        e.exports = o;
        const i = r(12),
            {
                re: s,
                t: a
            } = r(5),
            u = r(29),
            c = r(11),
            l = r(1),
            h = r(4)
    }, function(e, t, r) {
        const n = r(4);
        e.exports = (e, t, r) => {
            try {
                t = new n(t, r)
            } catch (e) {
                return !1
            }
            return t.test(e)
        }
    }, function(e, t, r) {
        "use strict";
        var n, o = "object" == typeof Reflect ? Reflect : null,
            i = o && "function" == typeof o.apply ? o.apply : function(e, t, r) {
                return Function.prototype.apply.call(e, t, r)
            };
        n = o && "function" == typeof o.ownKeys ? o.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        } : function(e) {
            return Object.getOwnPropertyNames(e)
        };
        var s = Number.isNaN || function(e) {
            return e != e
        };

        function a() {
            a.init.call(this)
        }
        e.exports = a, e.exports.once = function(e, t) {
            return new Promise((function(r, n) {
                function o() {
                    void 0 !== i && e.removeListener("error", i), r([].slice.call(arguments))
                }
                var i;
                "error" !== t && (i = function(r) {
                    e.removeListener(t, o), n(r)
                }, e.once("error", i)), e.once(t, o)
            }))
        }, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
        var u = 10;

        function c(e) {
            if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }

        function l(e) {
            return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
        }

        function h(e, t, r, n) {
            var o, i, s, a;
            if (c(r), void 0 === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), i = e._events), s = i[t]), void 0 === s) s = i[t] = r, ++e._eventsCount;
            else if ("function" == typeof s ? s = i[t] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r), (o = l(e)) > 0 && s.length > o && !s.warned) {
                s.warned = !0;
                var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = s.length, a = u, console && console.warn && console.warn(a)
            }
            return e
        }

        function f() {
            if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }

        function p(e, t, r) {
            var n = {
                    fired: !1,
                    wrapFn: void 0,
                    target: e,
                    type: t,
                    listener: r
                },
                o = f.bind(n);
            return o.listener = r, n.wrapFn = o, o
        }

        function d(e, t, r) {
            var n = e._events;
            if (void 0 === n) return [];
            var o = n[t];
            return void 0 === o ? [] : "function" == typeof o ? r ? [o.listener || o] : [o] : r ? function(e) {
                for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
                return t
            }(o) : v(o, o.length)
        }

        function g(e) {
            var t = this._events;
            if (void 0 !== t) {
                var r = t[e];
                if ("function" == typeof r) return 1;
                if (void 0 !== r) return r.length
            }
            return 0
        }

        function v(e, t) {
            for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
            return r
        }
        Object.defineProperty(a, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return u
            },
            set: function(e) {
                if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                u = e
            }
        }), a.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
        }, a.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e, this
        }, a.prototype.getMaxListeners = function() {
            return l(this)
        }, a.prototype.emit = function(e) {
            for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
            var n = "error" === e,
                o = this._events;
            if (void 0 !== o) n = n && void 0 === o.error;
            else if (!n) return !1;
            if (n) {
                var s;
                if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
                var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                throw a.context = s, a
            }
            var u = o[e];
            if (void 0 === u) return !1;
            if ("function" == typeof u) i(u, this, t);
            else {
                var c = u.length,
                    l = v(u, c);
                for (r = 0; r < c; ++r) i(l[r], this, t)
            }
            return !0
        }, a.prototype.addListener = function(e, t) {
            return h(this, e, t, !1)
        }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(e, t) {
            return h(this, e, t, !0)
        }, a.prototype.once = function(e, t) {
            return c(t), this.on(e, p(this, e, t)), this
        }, a.prototype.prependOnceListener = function(e, t) {
            return c(t), this.prependListener(e, p(this, e, t)), this
        }, a.prototype.removeListener = function(e, t) {
            var r, n, o, i, s;
            if (c(t), void 0 === (n = this._events)) return this;
            if (void 0 === (r = n[e])) return this;
            if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));
            else if ("function" != typeof r) {
                for (o = -1, i = r.length - 1; i >= 0; i--)
                    if (r[i] === t || r[i].listener === t) {
                        s = r[i].listener, o = i;
                        break
                    }
                if (o < 0) return this;
                0 === o ? r.shift() : function(e, t) {
                    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                    e.pop()
                }(r, o), 1 === r.length && (n[e] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", e, s || t)
            }
            return this
        }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(e) {
            var t, r, n;
            if (void 0 === (r = this._events)) return this;
            if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
            if (0 === arguments.length) {
                var o, i = Object.keys(r);
                for (n = 0; n < i.length; ++n) "removeListener" !== (o = i[n]) && this.removeAllListeners(o);
                return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
            }
            if ("function" == typeof(t = r[e])) this.removeListener(e, t);
            else if (void 0 !== t)
                for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
            return this
        }, a.prototype.listeners = function(e) {
            return d(this, e, !0)
        }, a.prototype.rawListeners = function(e) {
            return d(this, e, !1)
        }, a.listenerCount = function(e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : g.call(e, t)
        }, a.prototype.listenerCount = g, a.prototype.eventNames = function() {
            return this._eventsCount > 0 ? n(this._events) : []
        }
    }, function(e, t) {
        const r = /^[0-9]+$/,
            n = (e, t) => {
                const n = r.test(e),
                    o = r.test(t);
                return n && o && (e = +e, t = +t), e === t ? 0 : n && !o ? -1 : o && !n ? 1 : e < t ? -1 : 1
            };
        e.exports = {
            compareIdentifiers: n,
            rcompareIdentifiers: (e, t) => n(t, e)
        }
    }, function(e, t, r) {
        const n = r(3);
        e.exports = (e, t, r) => 0 === n(e, t, r)
    }, function(e, t, r) {
        const n = r(1);
        e.exports = (e, t, r) => {
            const o = new n(e, r),
                i = new n(t, r);
            return o.compare(i) || o.compareBuild(i)
        }
    }, function(e, t, r) {
        const n = r(3);
        e.exports = (e, t, r) => n(e, t, r) < 0
    }, function(e, t, r) {
        const n = r(3);
        e.exports = (e, t, r) => n(e, t, r) >= 0
    }, function(e, t, r) {
        const n = r(3);
        e.exports = (e, t, r) => n(e, t, r) <= 0
    }, function(e, t, r) {
        const n = r(1),
            o = r(14),
            {
                ANY: i
            } = o,
            s = r(4),
            a = r(15),
            u = r(13),
            c = r(20),
            l = r(22),
            h = r(21);
        e.exports = (e, t, r, f) => {
            let p, d, g, v, E;
            switch (e = new n(e, f), t = new s(t, f), r) {
                case ">":
                    p = u, d = l, g = c, v = ">", E = ">=";
                    break;
                case "<":
                    p = c, d = h, g = u, v = "<", E = "<=";
                    break;
                default:
                    throw new TypeError('Must provide a hilo val of "<" or ">"')
            }
            if (a(e, t, f)) return !1;
            for (let r = 0; r < t.set.length; ++r) {
                const n = t.set[r];
                let s = null,
                    a = null;
                if (n.forEach(e => {
                        e.semver === i && (e = new o(">=0.0.0")), s = s || e, a = a || e, p(e.semver, s.semver, f) ? s = e : g(e.semver, a.semver, f) && (a = e)
                    }), s.operator === v || s.operator === E) return !1;
                if ((!a.operator || a.operator === v) && d(e, a.semver)) return !1;
                if (a.operator === E && g(e, a.semver)) return !1
            }
            return !0
        }
    }, function(e, t, r) {
        const n = r(5);
        e.exports = {
            re: n.re,
            src: n.src,
            tokens: n.t,
            SEMVER_SPEC_VERSION: r(10).SEMVER_SPEC_VERSION,
            SemVer: r(1),
            compareIdentifiers: r(17).compareIdentifiers,
            rcompareIdentifiers: r(17).rcompareIdentifiers,
            parse: r(6),
            valid: r(39),
            clean: r(40),
            inc: r(41),
            diff: r(42),
            major: r(43),
            minor: r(44),
            patch: r(45),
            prerelease: r(46),
            compare: r(3),
            rcompare: r(47),
            compareLoose: r(48),
            compareBuild: r(19),
            sort: r(49),
            rsort: r(50),
            gt: r(13),
            lt: r(20),
            eq: r(18),
            neq: r(28),
            gte: r(21),
            lte: r(22),
            cmp: r(29),
            coerce: r(51),
            Comparator: r(14),
            Range: r(4),
            satisfies: r(15),
            toComparators: r(55),
            maxSatisfying: r(56),
            minSatisfying: r(57),
            minVersion: r(58),
            validRange: r(59),
            outside: r(23),
            gtr: r(60),
            ltr: r(61),
            intersects: r(62),
            simplifyRange: r(63),
            subset: r(64)
        }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return i
        }));
        var n = 0,
            o = [],
            i = function(e, t, r) {
                var i = {
                    type: e,
                    id: String(++n),
                    date: new Date
                };
                t && (i.message = t), r && (i.data = r),
                    function(e) {
                        for (var t = 0; t < o.length; t++) try {
                            o[t](e)
                        } catch (e) {
                            console.error(e)
                        }
                    }(i)
            };
        "undefined" != typeof window && (window.__ledgerLogsListen = function(e) {
            return o.push(e),
                function() {
                    var t = o.indexOf(e); - 1 !== t && (o[t] = o[o.length - 1], o.pop())
                }
        })
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() {
            return i
        }));
        let n = 0;
        const o = [],
            i = (e, t, r) => {
                const i = {
                    type: e,
                    id: String(++n),
                    date: new Date
                };
                t && (i.message = t), r && (i.data = r),
                    function(e) {
                        for (let t = 0; t < o.length; t++) try {
                            o[t](e)
                        } catch (e) {
                            console.error(e)
                        }
                    }(i)
            },
            s = e => (o.push(e), () => {
                const t = o.indexOf(e); - 1 !== t && (o[t] = o[o.length - 1], o.pop())
            });
        "undefined" != typeof window && (window.__ledgerLogsListen = s)
    }, function(e, t) {
        var r;
        r = function() {
            return this
        }();
        try {
            r = r || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (r = window)
        }
        e.exports = r
    }, function(e, t, r) {
        const n = r(3);
        e.exports = (e, t, r) => 0 !== n(e, t, r)
    }, function(e, t, r) {
        const n = r(18),
            o = r(28),
            i = r(13),
            s = r(21),
            a = r(20),
            u = r(22);
        e.exports = (e, t, r, c) => {
            switch (t) {
                case "===":
                    return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), e === r;
                case "!==":
                    return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), e !== r;
                case "":
                case "=":
                case "==":
                    return n(e, r, c);
                case "!=":
                    return o(e, r, c);
                case ">":
                    return i(e, r, c);
                case ">=":
                    return s(e, r, c);
                case "<":
                    return a(e, r, c);
                case "<=":
                    return u(e, r, c);
                default:
                    throw new TypeError("Invalid operator: " + t)
            }
        }
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(16),
                o = r.n(n),
                i = r(0),
                s = function(e, t, r, n) {
                    return new(r || (r = Promise))((function(o, i) {
                        function s(e) {
                            try {
                                u(n.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                u(n.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        u((n = n.apply(e, t || [])).next())
                    }))
                },
                a = function(e, t) {
                    var r, n, o, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, n = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1], o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2], s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e], n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                u = function(e, t) {
                    var r = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!r) return e;
                    var n, o, i = r.call(e),
                        s = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(n = i.next()).done;) s.push(n.value)
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            n && !n.done && (r = i.return) && r.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return s
                },
                c = function(e, t, r) {
                    if (r || 2 === arguments.length)
                        for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
                    return e.concat(n || Array.prototype.slice.call(t))
                },
                l = function(e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                        r = t && e[t],
                        n = 0;
                    if (r) return r.call(e);
                    if (e && "number" == typeof e.length) return {
                        next: function() {
                            return e && n >= e.length && (e = void 0), {
                                value: e && e[n++],
                                done: !e
                            }
                        }
                    };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                },
                h = function() {
                    function t() {
                        var t = this;
                        this.exchangeTimeout = 3e4, this.unresponsiveTimeout = 15e3, this.deviceModel = null, this._events = new o.a, this.send = function(r, n, o, u, c, l) {
                            return void 0 === c && (c = e.alloc(0)), void 0 === l && (l = [i.StatusCodes.OK]), s(t, void 0, void 0, (function() {
                                var t, s;
                                return a(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (c.length >= 256) throw new i.TransportError("data.length exceed 256 bytes limit. Got: " + c.length, "DataLengthTooBig");
                                            return [4, this.exchange(e.concat([e.from([r, n, o, u]), e.from([c.length]), c]))];
                                        case 1:
                                            if (t = a.sent(), s = t.readUInt16BE(t.length - 2), !l.some((function(e) {
                                                    return e === s
                                                }))) throw new i.TransportStatusError(s);
                                            return [2, t]
                                    }
                                }))
                            }))
                        }, this.exchangeAtomicImpl = function(e) {
                            return s(t, void 0, void 0, (function() {
                                var t, r, n, o, s, u = this;
                                return a(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (this.exchangeBusyPromise) throw new i.TransportRaceCondition("An action was already pending on the Ledger device. Please deny or reconnect.");
                                            r = new Promise((function(e) {
                                                t = e
                                            })), this.exchangeBusyPromise = r, n = !1, o = setTimeout((function() {
                                                n = !0, u.emit("unresponsive")
                                            }), this.unresponsiveTimeout), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, , 3, 4]), [4, e()];
                                        case 2:
                                            return s = a.sent(), n && this.emit("responsive"), [2, s];
                                        case 3:
                                            return clearTimeout(o), t && t(), this.exchangeBusyPromise = null, [7];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        }, this._appAPIlock = null
                    }
                    return t.prototype.exchange = function(e) {
                        throw new Error("exchange not implemented")
                    }, t.prototype.setScrambleKey = function(e) {}, t.prototype.close = function() {
                        return Promise.resolve()
                    }, t.prototype.on = function(e, t) {
                        this._events.on(e, t)
                    }, t.prototype.off = function(e, t) {
                        this._events.removeListener(e, t)
                    }, t.prototype.emit = function(e) {
                        for (var t, r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
                        (t = this._events).emit.apply(t, c([e], u(r), !1))
                    }, t.prototype.setDebugMode = function() {
                        console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.")
                    }, t.prototype.setExchangeTimeout = function(e) {
                        this.exchangeTimeout = e
                    }, t.prototype.setExchangeUnresponsiveTimeout = function(e) {
                        this.unresponsiveTimeout = e
                    }, t.create = function(e, t) {
                        var r = this;
                        return void 0 === e && (e = 3e3), new Promise((function(n, o) {
                            var s = !1,
                                a = r.listen({
                                    next: function(t) {
                                        s = !0, a && a.unsubscribe(), u && clearTimeout(u), r.open(t.descriptor, e).then(n, o)
                                    },
                                    error: function(e) {
                                        u && clearTimeout(u), o(e)
                                    },
                                    complete: function() {
                                        u && clearTimeout(u), s || o(new i.TransportError(r.ErrorMessage_NoDeviceFound, "NoDeviceFound"))
                                    }
                                }),
                                u = t ? setTimeout((function() {
                                    a.unsubscribe(), o(new i.TransportError(r.ErrorMessage_ListenTimeout, "ListenTimeout"))
                                }), t) : null
                        }))
                    }, t.prototype.decorateAppAPIMethods = function(e, t, r) {
                        var n, o;
                        try {
                            for (var i = l(t), s = i.next(); !s.done; s = i.next()) {
                                var a = s.value;
                                e[a] = this.decorateAppAPIMethod(a, e[a], e, r)
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                s && !s.done && (o = i.return) && o.call(i)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    }, t.prototype.decorateAppAPIMethod = function(e, t, r, n) {
                        var o = this;
                        return function() {
                            for (var u = [], c = 0; c < arguments.length; c++) u[c] = arguments[c];
                            return s(o, void 0, void 0, (function() {
                                var o;
                                return a(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (o = this._appAPIlock) return [2, Promise.reject(new i.TransportError("Ledger Device is busy (lock " + o + ")", "TransportLocked"))];
                                            s.label = 1;
                                        case 1:
                                            return s.trys.push([1, , 3, 4]), this._appAPIlock = e, this.setScrambleKey(n), [4, t.apply(r, u)];
                                        case 2:
                                            return [2, s.sent()];
                                        case 3:
                                            return this._appAPIlock = null, [7];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        }
                    }, t.ErrorMessage_ListenTimeout = "No Ledger device found (timeout)", t.ErrorMessage_NoDeviceFound = "No Ledger device found", t
                }();
            t.a = h
        }).call(this, r(7).Buffer)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            t.__esModule = !0;
            var n = r(0);
            var o = {
                data: e.alloc(0),
                dataLength: 0,
                sequence: 0
            };
            t.default = function(t, r) {
                return {
                    makeBlocks: function(n) {
                        var o, i, s = e.concat([(o = n.length, i = e.alloc(2), i.writeUInt16BE(o, 0), i), n]),
                            a = r - 5,
                            u = Math.ceil(s.length / a);
                        s = e.concat([s, e.alloc(u * a - s.length + 1).fill(0)]);
                        for (var c = [], l = 0; l < u; l++) {
                            var h = e.alloc(5);
                            h.writeUInt16BE(t, 0), h.writeUInt8(5, 2), h.writeUInt16BE(l, 3);
                            var f = s.slice(l * a, (l + 1) * a);
                            c.push(e.concat([h, f]))
                        }
                        return c
                    },
                    reduceResponse: function(r, i) {
                        var s = r || o,
                            a = s.data,
                            u = s.dataLength,
                            c = s.sequence;
                        if (i.readUInt16BE(0) !== t) throw new n.TransportError("Invalid channel", "InvalidChannel");
                        if (5 !== i.readUInt8(2)) throw new n.TransportError("Invalid tag", "InvalidTag");
                        if (i.readUInt16BE(3) !== c) throw new n.TransportError("Invalid sequence", "InvalidSequence");
                        r || (u = i.readUInt16BE(5)), c++;
                        var l = i.slice(r ? 5 : 7);
                        return (a = e.concat([a, l])).length > u && (a = a.slice(0, u)), {
                            data: a,
                            dataLength: u,
                            sequence: c
                        }
                    },
                    getReducedResult: function(e) {
                        if (e && e.dataLength === e.data.length) return e.data
                    }
                }
            }
        }).call(this, r(7).Buffer)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "a", (function() {
                return s
            }));
            var n = r(16),
                o = r.n(n),
                i = r(2);
            class s {
                constructor() {
                    this.exchangeTimeout = 3e4, this.unresponsiveTimeout = 15e3, this.deviceModel = null, this._events = new o.a, this.send = async (t, r, n, o, s = e.alloc(0), a = [i.a.OK]) => {
                        if (s.length >= 256) throw new i.b("data.length exceed 256 bytes limit. Got: " + s.length, "DataLengthTooBig");
                        const u = await this.exchange(e.concat([e.from([t, r, n, o]), e.from([s.length]), s])),
                            c = u.readUInt16BE(u.length - 2);
                        if (!a.some(e => e === c)) throw new i.d(c);
                        return u
                    }, this.exchangeBusyPromise = void 0, this.exchangeAtomicImpl = async e => {
                        if (this.exchangeBusyPromise) throw new i.c("An action was already pending on the Ledger device. Please deny or reconnect.");
                        let t;
                        const r = new Promise(e => {
                            t = e
                        });
                        this.exchangeBusyPromise = r;
                        let n = !1;
                        const o = setTimeout(() => {
                            n = !0, this.emit("unresponsive")
                        }, this.unresponsiveTimeout);
                        try {
                            const r = await e();
                            return n && this.emit("responsive"), r
                        } finally {
                            clearTimeout(o), t && t(), this.exchangeBusyPromise = null
                        }
                    }, this._appAPIlock = null
                }
                exchange(e) {
                    throw new Error("exchange not implemented")
                }
                setScrambleKey(e) {}
                close() {
                    return Promise.resolve()
                }
                on(e, t) {
                    this._events.on(e, t)
                }
                off(e, t) {
                    this._events.removeListener(e, t)
                }
                emit(e, ...t) {
                    this._events.emit(e, ...t)
                }
                setDebugMode() {
                    console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.")
                }
                setExchangeTimeout(e) {
                    this.exchangeTimeout = e
                }
                setExchangeUnresponsiveTimeout(e) {
                    this.unresponsiveTimeout = e
                }
                static create(e = 3e3, t) {
                    return new Promise((r, n) => {
                        let o = !1;
                        const s = this.listen({
                                next: t => {
                                    o = !0, s && s.unsubscribe(), a && clearTimeout(a), this.open(t.descriptor, e).then(r, n)
                                },
                                error: e => {
                                    a && clearTimeout(a), n(e)
                                },
                                complete: () => {
                                    a && clearTimeout(a), o || n(new i.b(this.ErrorMessage_NoDeviceFound, "NoDeviceFound"))
                                }
                            }),
                            a = t ? setTimeout(() => {
                                s.unsubscribe(), n(new i.b(this.ErrorMessage_ListenTimeout, "ListenTimeout"))
                            }, t) : null
                    })
                }
                decorateAppAPIMethods(e, t, r) {
                    for (let n of t) e[n] = this.decorateAppAPIMethod(n, e[n], e, r)
                }
                decorateAppAPIMethod(e, t, r, n) {
                    return async (...o) => {
                        const {
                            _appAPIlock: s
                        } = this;
                        if (s) return Promise.reject(new i.b("Ledger Device is busy (lock " + s + ")", "TransportLocked"));
                        try {
                            return this._appAPIlock = e, this.setScrambleKey(n), await t.apply(r, o)
                        } finally {
                            this._appAPIlock = null
                        }
                    }
                }
            }
            s.isSupported = void 0, s.list = void 0, s.listen = void 0, s.open = void 0, s.ErrorMessage_ListenTimeout = "No Ledger device found (timeout)", s.ErrorMessage_NoDeviceFound = "No Ledger device found"
        }).call(this, r(7).Buffer)
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(34),
            o = r(65);
        window.HwTransportWebHid = n, window.HwTransportU2F = o
    }, function(e, t, r) {
        "use strict";
        r.r(t),
            function(e) {
                var n, o = r(30),
                    i = r(31),
                    s = r.n(i),
                    a = r(8),
                    u = r(25),
                    c = r(0),
                    l = (n = function(e, t) {
                        return (n = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                            })(e, t)
                    }, function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function r() {
                            this.constructor = e
                        }
                        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                    }),
                    h = function(e, t, r, n) {
                        return new(r || (r = Promise))((function(o, i) {
                            function s(e) {
                                try {
                                    u(n.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function a(e) {
                                try {
                                    u(n.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function u(e) {
                                var t;
                                e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                    e(t)
                                }))).then(s, a)
                            }
                            u((n = n.apply(e, t || [])).next())
                        }))
                    },
                    f = function(e, t) {
                        var r, n, o, i, s = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function a(i) {
                            return function(a) {
                                return function(i) {
                                    if (r) throw new TypeError("Generator is already executing.");
                                    for (; s;) try {
                                        if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return s.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                s.label++, n = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = s.ops.pop(), s.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    s = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    s.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && s.label < o[1]) {
                                                    s.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && s.label < o[2]) {
                                                    s.label = o[2], s.ops.push(i);
                                                    break
                                                }
                                                o[2] && s.ops.pop(), s.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, s)
                                    } catch (e) {
                                        i = [6, e], n = 0
                                    } finally {
                                        r = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, a])
                            }
                        }
                    },
                    p = function(e, t) {
                        var r = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!r) return e;
                        var n, o, i = r.call(e),
                            s = [];
                        try {
                            for (;
                                (void 0 === t || t-- > 0) && !(n = i.next()).done;) s.push(n.value)
                        } catch (e) {
                            o = {
                                error: e
                            }
                        } finally {
                            try {
                                n && !n.done && (r = i.return) && r.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return s
                    },
                    d = [{
                        vendorId: a.b
                    }],
                    g = function() {
                        return Promise.resolve(!(!window.navigator || !window.navigator.hid))
                    },
                    v = function() {
                        var e = navigator.hid;
                        if (!e) throw new c.TransportError("navigator.hid is not supported", "HIDNotSupported");
                        return e
                    };

                function E() {
                    return h(this, void 0, void 0, (function() {
                        var e;
                        return f(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, v().requestDevice({
                                        filters: d
                                    })];
                                case 1:
                                    return e = t.sent(), Array.isArray(e) ? [2, e] : [2, [e]]
                            }
                        }))
                    }))
                }

                function m() {
                    return h(this, void 0, void 0, (function() {
                        return f(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, v().getDevices()];
                                case 1:
                                    return [2, e.sent().filter((function(e) {
                                        return e.vendorId === a.b
                                    }))]
                            }
                        }))
                    }))
                }
                var y = function(t) {
                    function r(r) {
                        var n = t.call(this) || this;
                        return n.channel = Math.floor(65535 * Math.random()), n.packetSize = 64, n.inputs = [], n.read = function() {
                            return n.inputs.length ? Promise.resolve(n.inputs.shift()) : new Promise((function(e) {
                                n.inputCallback = e
                            }))
                        }, n.onInputReport = function(t) {
                            var r = e.from(t.data.buffer);
                            n.inputCallback ? (n.inputCallback(r), n.inputCallback = null) : n.inputs.push(r)
                        }, n._disconnectEmitted = !1, n._emitDisconnect = function(e) {
                            n._disconnectEmitted || (n._disconnectEmitted = !0, n.emit("disconnect", e))
                        }, n.exchange = function(e) {
                            return h(n, void 0, void 0, (function() {
                                var t = this;
                                return f(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, this.exchangeAtomicImpl((function() {
                                                return h(t, void 0, void 0, (function() {
                                                    var t, r, n, o, i, a, c, l, h;
                                                    return f(this, (function(f) {
                                                        switch (f.label) {
                                                            case 0:
                                                                r = (t = this).channel, n = t.packetSize, Object(u.a)("apdu", "=> " + e.toString("hex")), o = s()(r, n), i = o.makeBlocks(e), a = 0, f.label = 1;
                                                            case 1:
                                                                return a < i.length ? [4, this.device.sendReport(0, i[a])] : [3, 4];
                                                            case 2:
                                                                f.sent(), f.label = 3;
                                                            case 3:
                                                                return a++, [3, 1];
                                                            case 4:
                                                                return (c = o.getReducedResult(l)) ? [3, 6] : [4, this.read()];
                                                            case 5:
                                                                return h = f.sent(), l = o.reduceResponse(l, h), [3, 4];
                                                            case 6:
                                                                return Object(u.a)("apdu", "<= " + c.toString("hex")), [2, c]
                                                        }
                                                    }))
                                                }))
                                            })).catch((function(e) {
                                                if (e && e.message && e.message.includes("write")) throw t._emitDisconnect(e), new c.DisconnectedDeviceDuringOperation(e.message);
                                                throw e
                                            }))];
                                        case 1:
                                            return [2, r.sent()]
                                    }
                                }))
                            }))
                        }, n.device = r, n.deviceModel = "number" == typeof r.productId ? Object(a.a)(r.productId) : void 0, r.addEventListener("inputreport", n.onInputReport), n
                    }
                    return l(r, t), r.request = function() {
                        return h(this, void 0, void 0, (function() {
                            var e, t;
                            return f(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, E()];
                                    case 1:
                                        return e = p.apply(void 0, [n.sent(), 1]), t = e[0], [2, r.open(t)]
                                }
                            }))
                        }))
                    }, r.openConnected = function() {
                        return h(this, void 0, void 0, (function() {
                            var e;
                            return f(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, m()];
                                    case 1:
                                        return 0 === (e = t.sent()).length ? [2, null] : [2, r.open(e[0])]
                                }
                            }))
                        }))
                    }, r.open = function(e) {
                        return h(this, void 0, void 0, (function() {
                            var t, n;
                            return f(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, e.open()];
                                    case 1:
                                        return o.sent(), t = new r(e), n = function(r) {
                                            e === r.device && (v().removeEventListener("disconnect", n), t._emitDisconnect(new c.DisconnectedDevice))
                                        }, v().addEventListener("disconnect", n), [2, t]
                                }
                            }))
                        }))
                    }, r.prototype.close = function() {
                        return h(this, void 0, void 0, (function() {
                            return f(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.exchangeBusyPromise];
                                    case 1:
                                        return e.sent(), this.device.removeEventListener("inputreport", this.onInputReport), [4, this.device.close()];
                                    case 2:
                                        return e.sent(), [2]
                                }
                            }))
                        }))
                    }, r.prototype.setScrambleKey = function() {}, r.isSupported = g, r.list = m, r.listen = function(e) {
                        var t = !1;
                        return function() {
                            return h(this, void 0, void 0, (function() {
                                var e;
                                return f(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, m()];
                                        case 1:
                                            return (e = t.sent()).length > 0 ? [2, e[0]] : [4, E()];
                                        case 2:
                                            return [2, t.sent()[0]]
                                    }
                                }))
                            }))
                        }().then((function(r) {
                            if (r) {
                                if (!t) {
                                    var n = "number" == typeof r.productId ? Object(a.a)(r.productId) : void 0;
                                    e.next({
                                        type: "add",
                                        descriptor: r,
                                        deviceModel: n
                                    }), e.complete()
                                }
                            } else e.error(new c.TransportOpenUserCancelled("Access denied to use Ledger device"))
                        }), (function(t) {
                            e.error(new c.TransportOpenUserCancelled(t.message))
                        })), {
                            unsubscribe: function() {
                                t = !0
                            }
                        }
                    }, r
                }(o.a);
                t.default = y
            }.call(this, r(7).Buffer)
    }, function(e, t, r) {
        "use strict";
        t.byteLength = function(e) {
            var t = c(e),
                r = t[0],
                n = t[1];
            return 3 * (r + n) / 4 - n
        }, t.toByteArray = function(e) {
            for (var t, r = c(e), n = r[0], s = r[1], a = new i(function(e, t, r) {
                    return 3 * (t + r) / 4 - r
                }(0, n, s)), u = 0, l = s > 0 ? n - 4 : n, h = 0; h < l; h += 4) t = o[e.charCodeAt(h)] << 18 | o[e.charCodeAt(h + 1)] << 12 | o[e.charCodeAt(h + 2)] << 6 | o[e.charCodeAt(h + 3)], a[u++] = t >> 16 & 255, a[u++] = t >> 8 & 255, a[u++] = 255 & t;
            2 === s && (t = o[e.charCodeAt(h)] << 2 | o[e.charCodeAt(h + 1)] >> 4, a[u++] = 255 & t);
            1 === s && (t = o[e.charCodeAt(h)] << 10 | o[e.charCodeAt(h + 1)] << 4 | o[e.charCodeAt(h + 2)] >> 2, a[u++] = t >> 8 & 255, a[u++] = 255 & t);
            return a
        }, t.fromByteArray = function(e) {
            for (var t, r = e.length, o = r % 3, i = [], s = 0, a = r - o; s < a; s += 16383) i.push(l(e, s, s + 16383 > a ? a : s + 16383));
            1 === o ? (t = e[r - 1], i.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === o && (t = (e[r - 2] << 8) + e[r - 1], i.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
            return i.join("")
        };
        for (var n = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) n[a] = s[a], o[s.charCodeAt(a)] = a;

        function c(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var r = e.indexOf("=");
            return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
        }

        function l(e, t, r) {
            for (var o, i, s = [], a = t; a < r; a += 3) o = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), s.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
            return s.join("")
        }
        o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
    }, function(e, t) {
        t.read = function(e, t, r, n, o) {
            var i, s, a = 8 * o - n - 1,
                u = (1 << a) - 1,
                c = u >> 1,
                l = -7,
                h = r ? o - 1 : 0,
                f = r ? -1 : 1,
                p = e[t + h];
            for (h += f, i = p & (1 << -l) - 1, p >>= -l, l += a; l > 0; i = 256 * i + e[t + h], h += f, l -= 8);
            for (s = i & (1 << -l) - 1, i >>= -l, l += n; l > 0; s = 256 * s + e[t + h], h += f, l -= 8);
            if (0 === i) i = 1 - c;
            else {
                if (i === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                s += Math.pow(2, n), i -= c
            }
            return (p ? -1 : 1) * s * Math.pow(2, i - n)
        }, t.write = function(e, t, r, n, o, i) {
            var s, a, u, c = 8 * i - o - 1,
                l = (1 << c) - 1,
                h = l >> 1,
                f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = n ? 0 : i - 1,
                d = n ? 1 : -1,
                g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + h >= 1 ? f / u : f * Math.pow(2, 1 - h)) * u >= 2 && (s++, u /= 2), s + h >= l ? (a = 0, s = l) : s + h >= 1 ? (a = (t * u - 1) * Math.pow(2, o), s += h) : (a = t * Math.pow(2, h - 1) * Math.pow(2, o), s = 0)); o >= 8; e[r + p] = 255 & a, p += d, a /= 256, o -= 8);
            for (s = s << o | a, c += o; c > 0; e[r + p] = 255 & s, p += d, s /= 256, c -= 8);
            e[r + p - d] |= 128 * g
        }
    }, function(e, t) {
        var r = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == r.call(e)
        }
    }, function(e, t) {
        var r, n, o = e.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(e) {
            if (r === setTimeout) return setTimeout(e, 0);
            if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
            try {
                return r(e, 0)
            } catch (t) {
                try {
                    return r.call(null, e, 0)
                } catch (t) {
                    return r.call(this, e, 0)
                }
            }
        }! function() {
            try {
                r = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                r = i
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                n = s
            }
        }();
        var u, c = [],
            l = !1,
            h = -1;

        function f() {
            l && u && (l = !1, u.length ? c = u.concat(c) : h = -1, c.length && p())
        }

        function p() {
            if (!l) {
                var e = a(f);
                l = !0;
                for (var t = c.length; t;) {
                    for (u = c, c = []; ++h < t;) u && u[h].run();
                    h = -1, t = c.length
                }
                u = null, l = !1,
                    function(e) {
                        if (n === clearTimeout) return clearTimeout(e);
                        if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                        try {
                            n(e)
                        } catch (t) {
                            try {
                                return n.call(null, e)
                            } catch (t) {
                                return n.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function d(e, t) {
            this.fun = e, this.array = t
        }

        function g() {}
        o.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            c.push(new d(e, t)), 1 !== c.length || l || a(p)
        }, d.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = g, o.addListener = g, o.once = g, o.off = g, o.removeListener = g, o.removeAllListeners = g, o.emit = g, o.prependListener = g, o.prependOnceListener = g, o.listeners = function(e) {
            return []
        }, o.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function() {
            return "/"
        }, o.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function() {
            return 0
        }
    }, function(e, t, r) {
        const n = r(6);
        e.exports = (e, t) => {
            const r = n(e, t);
            return r ? r.version : null
        }
    }, function(e, t, r) {
        const n = r(6);
        e.exports = (e, t) => {
            const r = n(e.trim().replace(/^[=v]+/, ""), t);
            return r ? r.version : null
        }
    }, function(e, t, r) {
        const n = r(1);
        e.exports = (e, t, r, o) => {
            "string" == typeof r && (o = r, r = void 0);
            try {
                return new n(e, r).inc(t, o).version
            } catch (e) {
                return null
            }
        }
    }, function(e, t, r) {
        const n = r(6),
            o = r(18);
        e.exports = (e, t) => {
            if (o(e, t)) return null; {
                const r = n(e),
                    o = n(t),
                    i = r.prerelease.length || o.prerelease.length,
                    s = i ? "pre" : "",
                    a = i ? "prerelease" : "";
                for (const e in r)
                    if (("major" === e || "minor" === e || "patch" === e) && r[e] !== o[e]) return s + e;
                return a
            }
        }
    }, function(e, t, r) {
        const n = r(1);
        e.exports = (e, t) => new n(e, t).major
    }, function(e, t, r) {
        const n = r(1);
        e.exports = (e, t) => new n(e, t).minor
    }, function(e, t, r) {
        const n = r(1);
        e.exports = (e, t) => new n(e, t).patch
    }, function(e, t, r) {
        const n = r(6);
        e.exports = (e, t) => {
            const r = n(e, t);
            return r && r.prerelease.length ? r.prerelease : null
        }
    }, function(e, t, r) {
        const n = r(3);
        e.exports = (e, t, r) => n(t, e, r)
    }, function(e, t, r) {
        const n = r(3);
        e.exports = (e, t) => n(e, t, !0)
    }, function(e, t, r) {
        const n = r(19);
        e.exports = (e, t) => e.sort((e, r) => n(e, r, t))
    }, function(e, t, r) {
        const n = r(19);
        e.exports = (e, t) => e.sort((e, r) => n(r, e, t))
    }, function(e, t, r) {
        const n = r(1),
            o = r(6),
            {
                re: i,
                t: s
            } = r(5);
        e.exports = (e, t) => {
            if (e instanceof n) return e;
            if ("number" == typeof e && (e = String(e)), "string" != typeof e) return null;
            let r = null;
            if ((t = t || {}).rtl) {
                let t;
                for (;
                    (t = i[s.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length);) r && t.index + t[0].length === r.index + r[0].length || (r = t), i[s.COERCERTL].lastIndex = t.index + t[1].length + t[2].length;
                i[s.COERCERTL].lastIndex = -1
            } else r = e.match(i[s.COERCE]);
            return null === r ? null : o(`${r[2]}.${r[3]||"0"}.${r[4]||"0"}`, t)
        }
    }, function(e, t, r) {
        "use strict";
        const n = r(53),
            o = Symbol("max"),
            i = Symbol("length"),
            s = Symbol("lengthCalculator"),
            a = Symbol("allowStale"),
            u = Symbol("maxAge"),
            c = Symbol("dispose"),
            l = Symbol("noDisposeOnSet"),
            h = Symbol("lruList"),
            f = Symbol("cache"),
            p = Symbol("updateAgeOnGet"),
            d = () => 1;
        const g = (e, t, r) => {
                const n = e[f].get(t);
                if (n) {
                    const t = n.value;
                    if (v(e, t)) {
                        if (m(e, n), !e[a]) return
                    } else r && (e[p] && (n.value.now = Date.now()), e[h].unshiftNode(n));
                    return t.value
                }
            },
            v = (e, t) => {
                if (!t || !t.maxAge && !e[u]) return !1;
                const r = Date.now() - t.now;
                return t.maxAge ? r > t.maxAge : e[u] && r > e[u]
            },
            E = e => {
                if (e[i] > e[o])
                    for (let t = e[h].tail; e[i] > e[o] && null !== t;) {
                        const r = t.prev;
                        m(e, t), t = r
                    }
            },
            m = (e, t) => {
                if (t) {
                    const r = t.value;
                    e[c] && e[c](r.key, r.value), e[i] -= r.length, e[f].delete(r.key), e[h].removeNode(t)
                }
            };
        class y {
            constructor(e, t, r, n, o) {
                this.key = e, this.value = t, this.length = r, this.now = n, this.maxAge = o || 0
            }
        }
        const w = (e, t, r, n) => {
            let o = r.value;
            v(e, o) && (m(e, r), e[a] || (o = void 0)), o && t.call(n, o.value, o.key, e)
        };
        e.exports = class {
            constructor(e) {
                if ("number" == typeof e && (e = {
                        max: e
                    }), e || (e = {}), e.max && ("number" != typeof e.max || e.max < 0)) throw new TypeError("max must be a non-negative number");
                this[o] = e.max || 1 / 0;
                const t = e.length || d;
                if (this[s] = "function" != typeof t ? d : t, this[a] = e.stale || !1, e.maxAge && "number" != typeof e.maxAge) throw new TypeError("maxAge must be a number");
                this[u] = e.maxAge || 0, this[c] = e.dispose, this[l] = e.noDisposeOnSet || !1, this[p] = e.updateAgeOnGet || !1, this.reset()
            }
            set max(e) {
                if ("number" != typeof e || e < 0) throw new TypeError("max must be a non-negative number");
                this[o] = e || 1 / 0, E(this)
            }
            get max() {
                return this[o]
            }
            set allowStale(e) {
                this[a] = !!e
            }
            get allowStale() {
                return this[a]
            }
            set maxAge(e) {
                if ("number" != typeof e) throw new TypeError("maxAge must be a non-negative number");
                this[u] = e, E(this)
            }
            get maxAge() {
                return this[u]
            }
            set lengthCalculator(e) {
                "function" != typeof e && (e = d), e !== this[s] && (this[s] = e, this[i] = 0, this[h].forEach(e => {
                    e.length = this[s](e.value, e.key), this[i] += e.length
                })), E(this)
            }
            get lengthCalculator() {
                return this[s]
            }
            get length() {
                return this[i]
            }
            get itemCount() {
                return this[h].length
            }
            rforEach(e, t) {
                t = t || this;
                for (let r = this[h].tail; null !== r;) {
                    const n = r.prev;
                    w(this, e, r, t), r = n
                }
            }
            forEach(e, t) {
                t = t || this;
                for (let r = this[h].head; null !== r;) {
                    const n = r.next;
                    w(this, e, r, t), r = n
                }
            }
            keys() {
                return this[h].toArray().map(e => e.key)
            }
            values() {
                return this[h].toArray().map(e => e.value)
            }
            reset() {
                this[c] && this[h] && this[h].length && this[h].forEach(e => this[c](e.key, e.value)), this[f] = new Map, this[h] = new n, this[i] = 0
            }
            dump() {
                return this[h].map(e => !v(this, e) && {
                    k: e.key,
                    v: e.value,
                    e: e.now + (e.maxAge || 0)
                }).toArray().filter(e => e)
            }
            dumpLru() {
                return this[h]
            }
            set(e, t, r) {
                if ((r = r || this[u]) && "number" != typeof r) throw new TypeError("maxAge must be a number");
                const n = r ? Date.now() : 0,
                    a = this[s](t, e);
                if (this[f].has(e)) {
                    if (a > this[o]) return m(this, this[f].get(e)), !1;
                    const s = this[f].get(e).value;
                    return this[c] && (this[l] || this[c](e, s.value)), s.now = n, s.maxAge = r, s.value = t, this[i] += a - s.length, s.length = a, this.get(e), E(this), !0
                }
                const p = new y(e, t, a, n, r);
                return p.length > this[o] ? (this[c] && this[c](e, t), !1) : (this[i] += p.length, this[h].unshift(p), this[f].set(e, this[h].head), E(this), !0)
            }
            has(e) {
                if (!this[f].has(e)) return !1;
                const t = this[f].get(e).value;
                return !v(this, t)
            }
            get(e) {
                return g(this, e, !0)
            }
            peek(e) {
                return g(this, e, !1)
            }
            pop() {
                const e = this[h].tail;
                return e ? (m(this, e), e.value) : null
            }
            del(e) {
                m(this, this[f].get(e))
            }
            load(e) {
                this.reset();
                const t = Date.now();
                for (let r = e.length - 1; r >= 0; r--) {
                    const n = e[r],
                        o = n.e || 0;
                    if (0 === o) this.set(n.k, n.v);
                    else {
                        const e = o - t;
                        e > 0 && this.set(n.k, n.v, e)
                    }
                }
            }
            prune() {
                this[f].forEach((e, t) => g(this, t, !1))
            }
        }
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            var t = this;
            if (t instanceof n || (t = new n), t.tail = null, t.head = null, t.length = 0, e && "function" == typeof e.forEach) e.forEach((function(e) {
                t.push(e)
            }));
            else if (arguments.length > 0)
                for (var r = 0, o = arguments.length; r < o; r++) t.push(arguments[r]);
            return t
        }

        function o(e, t, r) {
            var n = t === e.head ? new a(r, null, t, e) : new a(r, t, t.next, e);
            return null === n.next && (e.tail = n), null === n.prev && (e.head = n), e.length++, n
        }

        function i(e, t) {
            e.tail = new a(t, e.tail, null, e), e.head || (e.head = e.tail), e.length++
        }

        function s(e, t) {
            e.head = new a(t, null, e.head, e), e.tail || (e.tail = e.head), e.length++
        }

        function a(e, t, r, n) {
            if (!(this instanceof a)) return new a(e, t, r, n);
            this.list = n, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, r ? (r.prev = this, this.next = r) : this.next = null
        }
        e.exports = n, n.Node = a, n.create = n, n.prototype.removeNode = function(e) {
            if (e.list !== this) throw new Error("removing node which does not belong to this list");
            var t = e.next,
                r = e.prev;
            return t && (t.prev = r), r && (r.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = r), e.list.length--, e.next = null, e.prev = null, e.list = null, t
        }, n.prototype.unshiftNode = function(e) {
            if (e !== this.head) {
                e.list && e.list.removeNode(e);
                var t = this.head;
                e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), this.length++
            }
        }, n.prototype.pushNode = function(e) {
            if (e !== this.tail) {
                e.list && e.list.removeNode(e);
                var t = this.tail;
                e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), this.length++
            }
        }, n.prototype.push = function() {
            for (var e = 0, t = arguments.length; e < t; e++) i(this, arguments[e]);
            return this.length
        }, n.prototype.unshift = function() {
            for (var e = 0, t = arguments.length; e < t; e++) s(this, arguments[e]);
            return this.length
        }, n.prototype.pop = function() {
            if (this.tail) {
                var e = this.tail.value;
                return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e
            }
        }, n.prototype.shift = function() {
            if (this.head) {
                var e = this.head.value;
                return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e
            }
        }, n.prototype.forEach = function(e, t) {
            t = t || this;
            for (var r = this.head, n = 0; null !== r; n++) e.call(t, r.value, n, this), r = r.next
        }, n.prototype.forEachReverse = function(e, t) {
            t = t || this;
            for (var r = this.tail, n = this.length - 1; null !== r; n--) e.call(t, r.value, n, this), r = r.prev
        }, n.prototype.get = function(e) {
            for (var t = 0, r = this.head; null !== r && t < e; t++) r = r.next;
            if (t === e && null !== r) return r.value
        }, n.prototype.getReverse = function(e) {
            for (var t = 0, r = this.tail; null !== r && t < e; t++) r = r.prev;
            if (t === e && null !== r) return r.value
        }, n.prototype.map = function(e, t) {
            t = t || this;
            for (var r = new n, o = this.head; null !== o;) r.push(e.call(t, o.value, this)), o = o.next;
            return r
        }, n.prototype.mapReverse = function(e, t) {
            t = t || this;
            for (var r = new n, o = this.tail; null !== o;) r.push(e.call(t, o.value, this)), o = o.prev;
            return r
        }, n.prototype.reduce = function(e, t) {
            var r, n = this.head;
            if (arguments.length > 1) r = t;
            else {
                if (!this.head) throw new TypeError("Reduce of empty list with no initial value");
                n = this.head.next, r = this.head.value
            }
            for (var o = 0; null !== n; o++) r = e(r, n.value, o), n = n.next;
            return r
        }, n.prototype.reduceReverse = function(e, t) {
            var r, n = this.tail;
            if (arguments.length > 1) r = t;
            else {
                if (!this.tail) throw new TypeError("Reduce of empty list with no initial value");
                n = this.tail.prev, r = this.tail.value
            }
            for (var o = this.length - 1; null !== n; o--) r = e(r, n.value, o), n = n.prev;
            return r
        }, n.prototype.toArray = function() {
            for (var e = new Array(this.length), t = 0, r = this.head; null !== r; t++) e[t] = r.value, r = r.next;
            return e
        }, n.prototype.toArrayReverse = function() {
            for (var e = new Array(this.length), t = 0, r = this.tail; null !== r; t++) e[t] = r.value, r = r.prev;
            return e
        }, n.prototype.slice = function(e, t) {
            (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
            var r = new n;
            if (t < e || t < 0) return r;
            e < 0 && (e = 0), t > this.length && (t = this.length);
            for (var o = 0, i = this.head; null !== i && o < e; o++) i = i.next;
            for (; null !== i && o < t; o++, i = i.next) r.push(i.value);
            return r
        }, n.prototype.sliceReverse = function(e, t) {
            (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
            var r = new n;
            if (t < e || t < 0) return r;
            e < 0 && (e = 0), t > this.length && (t = this.length);
            for (var o = this.length, i = this.tail; null !== i && o > t; o--) i = i.prev;
            for (; null !== i && o > e; o--, i = i.prev) r.push(i.value);
            return r
        }, n.prototype.splice = function(e, t, ...r) {
            e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
            for (var n = 0, i = this.head; null !== i && n < e; n++) i = i.next;
            var s = [];
            for (n = 0; i && n < t; n++) s.push(i.value), i = this.removeNode(i);
            null === i && (i = this.tail), i !== this.head && i !== this.tail && (i = i.prev);
            for (n = 0; n < r.length; n++) i = o(this, i, r[n]);
            return s
        }, n.prototype.reverse = function() {
            for (var e = this.head, t = this.tail, r = e; null !== r; r = r.prev) {
                var n = r.prev;
                r.prev = r.next, r.next = n
            }
            return this.head = t, this.tail = e, this
        };
        try {
            r(54)(n)
        } catch (e) {}
    }, function(e, t, r) {
        "use strict";
        e.exports = function(e) {
            e.prototype[Symbol.iterator] = function*() {
                for (let e = this.head; e; e = e.next) yield e.value
            }
        }
    }, function(e, t, r) {
        const n = r(4);
        e.exports = (e, t) => new n(e, t).set.map(e => e.map(e => e.value).join(" ").trim().split(" "))
    }, function(e, t, r) {
        const n = r(1),
            o = r(4);
        e.exports = (e, t, r) => {
            let i = null,
                s = null,
                a = null;
            try {
                a = new o(t, r)
            } catch (e) {
                return null
            }
            return e.forEach(e => {
                a.test(e) && (i && -1 !== s.compare(e) || (i = e, s = new n(i, r)))
            }), i
        }
    }, function(e, t, r) {
        const n = r(1),
            o = r(4);
        e.exports = (e, t, r) => {
            let i = null,
                s = null,
                a = null;
            try {
                a = new o(t, r)
            } catch (e) {
                return null
            }
            return e.forEach(e => {
                a.test(e) && (i && 1 !== s.compare(e) || (i = e, s = new n(i, r)))
            }), i
        }
    }, function(e, t, r) {
        const n = r(1),
            o = r(4),
            i = r(13);
        e.exports = (e, t) => {
            e = new o(e, t);
            let r = new n("0.0.0");
            if (e.test(r)) return r;
            if (r = new n("0.0.0-0"), e.test(r)) return r;
            r = null;
            for (let t = 0; t < e.set.length; ++t) {
                const o = e.set[t];
                let s = null;
                o.forEach(e => {
                    const t = new n(e.semver.version);
                    switch (e.operator) {
                        case ">":
                            0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
                        case "":
                        case ">=":
                            s && !i(t, s) || (s = t);
                            break;
                        case "<":
                        case "<=":
                            break;
                        default:
                            throw new Error("Unexpected operation: " + e.operator)
                    }
                }), !s || r && !i(r, s) || (r = s)
            }
            return r && e.test(r) ? r : null
        }
    }, function(e, t, r) {
        const n = r(4);
        e.exports = (e, t) => {
            try {
                return new n(e, t).range || "*"
            } catch (e) {
                return null
            }
        }
    }, function(e, t, r) {
        const n = r(23);
        e.exports = (e, t, r) => n(e, t, ">", r)
    }, function(e, t, r) {
        const n = r(23);
        e.exports = (e, t, r) => n(e, t, "<", r)
    }, function(e, t, r) {
        const n = r(4);
        e.exports = (e, t, r) => (e = new n(e, r), t = new n(t, r), e.intersects(t))
    }, function(e, t, r) {
        const n = r(15),
            o = r(3);
        e.exports = (e, t, r) => {
            const i = [];
            let s = null,
                a = null;
            const u = e.sort((e, t) => o(e, t, r));
            for (const e of u) {
                n(e, t, r) ? (a = e, s || (s = e)) : (a && i.push([s, a]), a = null, s = null)
            }
            s && i.push([s, null]);
            const c = [];
            for (const [e, t] of i) e === t ? c.push(e) : t || e !== u[0] ? t ? e === u[0] ? c.push("<=" + t) : c.push(`${e} - ${t}`) : c.push(">=" + e) : c.push("*");
            const l = c.join(" || "),
                h = "string" == typeof t.raw ? t.raw : String(t);
            return l.length < h.length ? l : t
        }
    }, function(e, t, r) {
        const n = r(4),
            o = r(14),
            {
                ANY: i
            } = o,
            s = r(15),
            a = r(3),
            u = (e, t, r) => {
                if (e === t) return !0;
                if (1 === e.length && e[0].semver === i) {
                    if (1 === t.length && t[0].semver === i) return !0;
                    e = r.includePrerelease ? [new o(">=0.0.0-0")] : [new o(">=0.0.0")]
                }
                if (1 === t.length && t[0].semver === i) {
                    if (r.includePrerelease) return !0;
                    t = [new o(">=0.0.0")]
                }
                const n = new Set;
                let u, h, f, p, d, g, v;
                for (const t of e) ">" === t.operator || ">=" === t.operator ? u = c(u, t, r) : "<" === t.operator || "<=" === t.operator ? h = l(h, t, r) : n.add(t.semver);
                if (n.size > 1) return null;
                if (u && h) {
                    if (f = a(u.semver, h.semver, r), f > 0) return null;
                    if (0 === f && (">=" !== u.operator || "<=" !== h.operator)) return null
                }
                for (const e of n) {
                    if (u && !s(e, String(u), r)) return null;
                    if (h && !s(e, String(h), r)) return null;
                    for (const n of t)
                        if (!s(e, String(n), r)) return !1;
                    return !0
                }
                let E = !(!h || r.includePrerelease || !h.semver.prerelease.length) && h.semver,
                    m = !(!u || r.includePrerelease || !u.semver.prerelease.length) && u.semver;
                E && 1 === E.prerelease.length && "<" === h.operator && 0 === E.prerelease[0] && (E = !1);
                for (const e of t) {
                    if (v = v || ">" === e.operator || ">=" === e.operator, g = g || "<" === e.operator || "<=" === e.operator, u)
                        if (m && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === m.major && e.semver.minor === m.minor && e.semver.patch === m.patch && (m = !1), ">" === e.operator || ">=" === e.operator) {
                            if (p = c(u, e, r), p === e && p !== u) return !1
                        } else if (">=" === u.operator && !s(u.semver, String(e), r)) return !1;
                    if (h)
                        if (E && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === E.major && e.semver.minor === E.minor && e.semver.patch === E.patch && (E = !1), "<" === e.operator || "<=" === e.operator) {
                            if (d = l(h, e, r), d === e && d !== h) return !1
                        } else if ("<=" === h.operator && !s(h.semver, String(e), r)) return !1;
                    if (!e.operator && (h || u) && 0 !== f) return !1
                }
                return !(u && g && !h && 0 !== f) && (!(h && v && !u && 0 !== f) && (!m && !E))
            },
            c = (e, t, r) => {
                if (!e) return t;
                const n = a(e.semver, t.semver, r);
                return n > 0 ? e : n < 0 || ">" === t.operator && ">=" === e.operator ? t : e
            },
            l = (e, t, r) => {
                if (!e) return t;
                const n = a(e.semver, t.semver, r);
                return n < 0 ? e : n > 0 || "<" === t.operator && "<=" === e.operator ? t : e
            };
        e.exports = (e, t, r = {}) => {
            if (e === t) return !0;
            e = new n(e, r), t = new n(t, r);
            let o = !1;
            e: for (const n of e.set) {
                for (const e of t.set) {
                    const t = u(n, e, r);
                    if (o = o || null !== t, t) continue e
                }
                if (o) return !1
            }
            return !0
        }
    }, function(e, t, r) {
        "use strict";
        r.r(t),
            function(e) {
                r.d(t, "default", (function() {
                    return l
                }));
                var n = r(9),
                    o = r(32),
                    i = r(26),
                    s = r(2);
                const a = e => e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

                function u(t, r, o, s) {
                    const u = function(t, r) {
                            const n = e.alloc(t.length);
                            for (let e = 0; e < t.length; e++) n[e] = t[e] ^ r[e % r.length];
                            return n
                        }(t, o),
                        c = e.from("0000000000000000000000000000000000000000000000000000000000000000", "hex"),
                        l = {
                            version: "U2F_V2",
                            keyHandle: a(u.toString("base64")),
                            challenge: a(c.toString("base64")),
                            appId: location.origin
                        };
                    return Object(i.a)("apdu", "=> " + t.toString("hex")), Object(n.sign)(l, r / 1e3).then(t => {
                        const {
                            signatureData: r
                        } = t;
                        if ("string" == typeof r) {
                            const t = e.from((n = r).replace(/-/g, "+").replace(/_/g, "/") + "==".substring(0, 3 * n.length % 4), "base64");
                            let o;
                            return o = s ? t.slice(5) : t, Object(i.a)("apdu", "<= " + o.toString("hex")), o
                        }
                        throw t;
                        var n
                    })
                }
                let c = [];
                class l extends o.a {
                    static async open(e, t = 5e3) {
                        return new l
                    }
                    constructor() {
                        super(), this.scrambleKey = void 0, this.unwrap = !0, c.push(this)
                    }
                    async exchange(e) {
                        try {
                            return await u(e, this.exchangeTimeout, this.scrambleKey, this.unwrap)
                        } catch (e) {
                            throw "object" == typeof e.metaData ? (5 === e.metaData.code && (c.forEach(e => e.emit("disconnect")), c = []), function(e, t, r) {
                                const n = new s.b(t, r);
                                return n.originalError = e, n
                            }(e, "Failed to sign with Ledger device: U2F " + e.metaData.type, "U2F_" + e.metaData.code)) : e
                        }
                    }
                    setScrambleKey(t) {
                        this.scrambleKey = e.from(t, "ascii")
                    }
                    setUnwrap(e) {
                        this.unwrap = e
                    }
                    close() {
                        return Promise.resolve()
                    }
                }
                l.isSupported = n.isSupported, l.list = () => Object(n.isSupported)().then(e => e ? [null] : []), l.listen = e => {
                    let t = !1;
                    return Object(n.isSupported)().then(r => {
                        t || (r ? (e.next({
                            type: "add",
                            descriptor: null
                        }), e.complete()) : e.error(new s.b("U2F browser support is needed for Ledger. Please use Chrome, Opera or Firefox with a U2F extension. Also make sure you're on an HTTPS connection", "U2FNotSupported")))
                    }), {
                        unsubscribe: () => {
                            t = !0
                        }
                    }
                }
            }.call(this, r(7).Buffer)
    }, function(e, t, r) {
        "use strict";
        (function(t) {
            e.exports = c;
            var n = r(67),
                o = "undefined" != typeof navigator && !!navigator.userAgent,
                i = o && navigator.userAgent.match(/Safari\//) && !navigator.userAgent.match(/Chrome\//),
                s = o && navigator.userAgent.match(/Edge\/1[2345]/),
                a = null;

            function u(e) {
                return a || (a = new e((function(e, t) {
                    function r() {
                        e({
                            u2f: null,
                            native: !0
                        })
                    }
                    return o ? i ? r() : (void 0 !== window.u2f && "function" == typeof window.u2f.sign && e({
                        u2f: window.u2f,
                        native: !0
                    }), s || "http:" === location.protocol || "undefined" == typeof MessageChannel ? r() : void n.isSupported((function(t) {
                        t ? e({
                            u2f: n,
                            native: !1
                        }) : r()
                    }))) : r()
                }))), a
            }

            function c(e) {
                return {
                    isSupported: f.bind(e),
                    ensureSupport: d.bind(e),
                    register: g.bind(e),
                    sign: v.bind(e),
                    ErrorCodes: c.ErrorCodes,
                    ErrorNames: c.ErrorNames
                }
            }

            function l(e, t) {
                var r = null != t ? t.errorCode : 1,
                    n = c.ErrorNames["" + r],
                    o = new Error(e);
                return o.metaData = {
                    type: n,
                    code: r
                }, o
            }

            function h(e, t) {
                var r = {};
                return r.promise = new e((function(e, n) {
                    r.resolve = e, r.reject = n, t.then(e, n)
                })), r.promise.cancel = function(t, n) {
                    u(e).then((function(e) {
                        n && !e.native && e.u2f.disconnect(), r.reject(l(t, {
                            errorCode: -1
                        }))
                    }))
                }, r
            }

            function f() {
                return u(this).then((function(e) {
                    return !!e.u2f
                }))
            }

            function p(e) {
                if (!e.u2f) {
                    if ("http:" === location.protocol) throw new Error("U2F isn't supported over http, only https");
                    throw new Error("U2F not supported")
                }
            }

            function d() {
                return u(this).then(p)
            }

            function g(e, t, r) {
                var n = this;
                return Array.isArray(e) || (e = [e]), "number" == typeof t && void 0 === r && (r = t, t = null), t || (t = []), h(n, u(n).then((function(o) {
                    p(o);
                    var i = o.native,
                        s = o.u2f;
                    return new n((function(n, o) {
                        if (i) {
                            var a = e[0].appId;
                            s.register(a, e, t, (function(e) {
                                e.errorCode ? o(l("Registration failed", e)) : (delete e.errorCode, n(e))
                            }), r)
                        } else s.register(e, t, (function(e, t) {
                            e ? o(e) : t.errorCode ? o(l("Registration failed", t)) : n(t)
                        }), r)
                    }))
                }))).promise
            }

            function v(e, t) {
                var r = this;
                return Array.isArray(e) || (e = [e]), h(r, u(r).then((function(n) {
                    p(n);
                    var o = n.native,
                        i = n.u2f;
                    return new r((function(r, n) {
                        if (o) {
                            var s = e[0].appId,
                                a = e[0].challenge;
                            i.sign(s, a, e, (function(e) {
                                e.errorCode ? n(l("Sign failed", e)) : (delete e.errorCode, r(e))
                            }), t)
                        } else i.sign(e, (function(e, t) {
                            e ? n(e) : t.errorCode ? n(l("Sign failed", t)) : r(t)
                        }), t)
                    }))
                }))).promise
            }

            function E(e) {
                c[e] = function() {
                    if (!t.Promise) throw new Error("The platform doesn't natively support promises");
                    var r = [].slice.call(arguments);
                    return c(t.Promise)[e].apply(null, r)
                }
            }
            c.ErrorCodes = {
                CANCELLED: -1,
                OK: 0,
                OTHER_ERROR: 1,
                BAD_REQUEST: 2,
                CONFIGURATION_UNSUPPORTED: 3,
                DEVICE_INELIGIBLE: 4,
                TIMEOUT: 5
            }, c.ErrorNames = {
                "-1": "CANCELLED",
                0: "OK",
                1: "OTHER_ERROR",
                2: "BAD_REQUEST",
                3: "CONFIGURATION_UNSUPPORTED",
                4: "DEVICE_INELIGIBLE",
                5: "TIMEOUT"
            }, E("isSupported"), E("ensureSupport"), E("register"), E("sign")
        }).call(this, r(27))
    }, function(e, t, r) {
        "use strict";
        var n = n || {};
        e.exports = n, n.EXTENSION_ID = "kmendfapggjehodndflmmgagdbamhnfd", n.MessageTypes = {
            U2F_REGISTER_REQUEST: "u2f_register_request",
            U2F_SIGN_REQUEST: "u2f_sign_request",
            U2F_REGISTER_RESPONSE: "u2f_register_response",
            U2F_SIGN_RESPONSE: "u2f_sign_response"
        }, n.ErrorCodes = {
            OK: 0,
            OTHER_ERROR: 1,
            BAD_REQUEST: 2,
            CONFIGURATION_UNSUPPORTED: 3,
            DEVICE_INELIGIBLE: 4,
            TIMEOUT: 5
        }, n.Request, n.Response, n.Error, n.SignRequest, n.SignResponse, n.RegisterRequest, n.RegisterResponse, n.disconnect = function() {
            n.port_ && n.port_.port_ && (n.port_.port_.disconnect(), n.port_ = null)
        }, n.getMessagePort = function(e) {
            if ("undefined" != typeof chrome && chrome.runtime) {
                var t = {
                    type: n.MessageTypes.U2F_SIGN_REQUEST,
                    signRequests: []
                };
                chrome.runtime.sendMessage(n.EXTENSION_ID, t, (function() {
                    chrome.runtime.lastError ? n.getIframePort_(e) : n.getChromeRuntimePort_(e)
                }))
            } else n.getIframePort_(e)
        }, n.getChromeRuntimePort_ = function(e) {
            var t = chrome.runtime.connect(n.EXTENSION_ID, {
                includeTlsChannelId: !0
            });
            setTimeout((function() {
                e(null, new n.WrappedChromeRuntimePort_(t))
            }), 0)
        }, n.WrappedChromeRuntimePort_ = function(e) {
            this.port_ = e
        }, n.WrappedChromeRuntimePort_.prototype.postMessage = function(e) {
            this.port_.postMessage(e)
        }, n.WrappedChromeRuntimePort_.prototype.addEventListener = function(e, t) {
            var r = e.toLowerCase();
            "message" == r || "onmessage" == r ? this.port_.onMessage.addListener((function(e) {
                t({
                    data: e
                })
            })) : console.error("WrappedChromeRuntimePort only supports onMessage")
        }, n.getIframePort_ = function(e) {
            var t = "chrome-extension://" + n.EXTENSION_ID,
                r = document.createElement("iframe");
            r.src = t + "/u2f-comms.html", r.setAttribute("style", "display:none"), document.body.appendChild(r);
            var o = !1,
                i = new MessageChannel,
                s = function(t) {
                    "ready" == t.data ? (i.port1.removeEventListener("message", s), o || (o = !0, e(null, i.port1))) : console.error('First event on iframe port was not "ready"')
                };
            i.port1.addEventListener("message", s), i.port1.start(), r.addEventListener("load", (function() {
                r.contentWindow.postMessage("init", t, [i.port2])
            })), setTimeout((function() {
                o || (o = !0, e(new Error("IFrame extension not supported")))
            }), 200)
        }, n.EXTENSION_TIMEOUT_SEC = 30, n.port_ = null, n.waitingForPort_ = [], n.reqCounter_ = 0, n.callbackMap_ = {}, n.getPortSingleton_ = function(e) {
            n.port_ ? e(null, n.port_) : (0 == n.waitingForPort_.length && n.getMessagePort((function(e, t) {
                for (e || (n.port_ = t, n.port_.addEventListener("message", n.responseHandler_)); n.waitingForPort_.length;) n.waitingForPort_.shift()(e, t)
            })), n.waitingForPort_.push(e))
        }, n.responseHandler_ = function(e) {
            var t = e.data,
                r = t.requestId;
            if (r && n.callbackMap_[r]) {
                var o = n.callbackMap_[r];
                delete n.callbackMap_[r], o(null, t.responseData)
            } else console.error("Unknown or missing requestId in response.")
        }, n.isSupported = function(e) {
            n.getPortSingleton_((function(t, r) {
                e(!t)
            }))
        }, n.sign = function(e, t, r) {
            n.getPortSingleton_((function(o, i) {
                if (o) return t(o);
                var s = ++n.reqCounter_;
                n.callbackMap_[s] = t;
                var a = {
                    type: n.MessageTypes.U2F_SIGN_REQUEST,
                    signRequests: e,
                    timeoutSeconds: void 0 !== r ? r : n.EXTENSION_TIMEOUT_SEC,
                    requestId: s
                };
                i.postMessage(a)
            }))
        }, n.register = function(e, t, r, o) {
            n.getPortSingleton_((function(i, s) {
                if (i) return r(i);
                var a = ++n.reqCounter_;
                n.callbackMap_[a] = r;
                var u = {
                    type: n.MessageTypes.U2F_REGISTER_REQUEST,
                    signRequests: t,
                    registerRequests: e,
                    timeoutSeconds: void 0 !== o ? o : n.EXTENSION_TIMEOUT_SEC,
                    requestId: a
                };
                s.postMessage(u)
            }))
        }
    }])
}));