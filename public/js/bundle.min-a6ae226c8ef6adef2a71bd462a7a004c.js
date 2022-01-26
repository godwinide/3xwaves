! function() {
    "use strict";

    function _get(target, property, receiver) {
        return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(target, property, receiver) {
            var base = function(object, property) {
                for (; !Object.prototype.hasOwnProperty.call(object, property) && null !== (object = _getPrototypeOf(object)););
                return object
            }(target, property);
            if (base) {
                var desc = Object.getOwnPropertyDescriptor(base, property);
                return desc.get ? desc.get.call(receiver) : desc.value
            }
        })(target, property, receiver || target)
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        return Object.keys(descriptor).forEach(function(key) {
            desc[key] = descriptor[key]
        }), desc.enumerable = !!desc.enumerable, desc.configurable = !!desc.configurable, ("value" in desc || desc.initializer) && (desc.writable = !0), desc = decorators.slice().reverse().reduce(function(desc, decorator) {
            return decorator(target, property, desc) || desc
        }, desc), context && void 0 !== desc.initializer && (desc.value = desc.initializer ? desc.initializer.call(context) : void 0, desc.initializer = void 0), void 0 === desc.initializer && (Object.defineProperty(target, property, desc), desc = null), desc
    }

    function _typeof(obj) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        })(obj)
    }

    function _possibleConstructorReturn(self, call) {
        return !call || "object" !== _typeof(call) && "function" != typeof call ? _assertThisInitialized(self) : call
    }

    function _assertThisInitialized(self) {
        if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self
    }

    function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
            return o.__proto__ || Object.getPrototypeOf(o)
        })(o)
    }

    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: !0,
                configurable: !0
            }
        }), superClass && _setPrototypeOf(subClass, superClass)
    }

    function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key, i, target = function(source, excluded) {
            if (null == source) return {};
            var key, i, target = {},
                sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) key = sourceKeys[i], 0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target
        }(source, excluded);
        if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++) key = sourceSymbolKeys[i], 0 <= excluded.indexOf(key) || Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key])
        }
        return target
    }

    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
            var info = gen[key](arg),
                value = info.value
        } catch (error) {
            return void reject(error)
        }
        info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw)
    }

    function _asyncToGenerator(fn) {
        return function() {
            var self = this,
                args = arguments;
            return new Promise(function(resolve, reject) {
                var gen = fn.apply(self, args);

                function _next(value) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value)
                }

                function _throw(err) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err)
                }
                _next(void 0)
            })
        }
    }

    function _slicedToArray(arr, i) {
        return function(arr) {
            if (Array.isArray(arr)) return arr
        }(arr) || function(arr, i) {
            if (!(Symbol.iterator in Object(arr) || "[object Arguments]" === Object.prototype.toString.call(arr))) return;
            var _arr = [],
                _n = !0,
                _d = !1,
                _e = void 0;
            try {
                for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i); _n = !0);
            } catch (err) {
                _d = !0, _e = err
            } finally {
                try {
                    _n || null == _i.return || _i.return()
                } finally {
                    if (_d) throw _e
                }
            }
            return _arr
        }(arr, i) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })), keys.push.apply(keys, symbols)
        }
        return keys
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
                _defineProperty(target, key, source[key])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
            })
        }
        return target
    }

    function _defineProperty(obj, key, value) {
        return key in obj ? Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : obj[key] = value, obj
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor
    }

    function _construct(Parent, args, Class) {
        return (_construct = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }() ? Reflect.construct : function(Parent, args, Class) {
            var a = [null];
            a.push.apply(a, args);
            var instance = new(Function.bind.apply(Parent, a));
            return Class && _setPrototypeOf(instance, Class.prototype), instance
        }).apply(null, arguments)
    }

    function _setPrototypeOf(o, p) {
        return (_setPrototypeOf = Object.setPrototypeOf || function(o, p) {
            return o.__proto__ = p, o
        })(o, p)
    }

    function _toConsumableArray(arr) {
        return function(arr) {
            if (Array.isArray(arr)) {
                for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
                return arr2
            }
        }(arr) || function(iter) {
            if (Symbol.iterator in Object(iter) || "[object Arguments]" === Object.prototype.toString.call(iter)) return Array.from(iter)
        }(arr) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function wrapControllerParams(controller) {
        var newController = controller;
        if ("function" == typeof controller) {
            var $inject = ["$element", "$compile", "$scope"].concat(_toConsumableArray(controller.$inject || []));
            if (3 < $inject.length && !controller.length) throw new Error("Wrong code style!");
            (newController = function($element, $compile, $scope) {
                var _this = this,
                    onError = function() {
                        return $element.addClass("_internal-error"), _this
                    };
                try {
                    for (var _len2 = arguments.length, args = new Array(3 < _len2 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) args[_key2 - 3] = arguments[_key2];
                    var instance = _construct(controller, args),
                        originalPostLink = instance.$postLink;
                    return $element.addClass($element.prop("tagName").toLowerCase().replace(/^w-/, "")), originalPostLink && (instance.$postLink = function() {
                        try {
                            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) args[_key3] = arguments[_key3];
                            return originalPostLink.apply(instance, args)
                        } catch (e) {
                            return onError()
                        }
                    }), instance
                } catch (e) {
                    return onError()
                }
            }).$inject = $inject
        }
        return newController
    }
    var origin, factory, controller, directive, rc, Header, ds;
    angular.module("app.ui", []), origin = angular.module, angular.module = function() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            var name = args[0],
                module = origin.call.apply(origin, [angular].concat(args));
            return -1 === WavesApp.modules.indexOf(name) && (WavesApp.modules.push(name), function(module) {
                var origin = module.controller;
                module.controller = function(name, $ctrl) {
                    if ("function" != typeof $ctrl) throw new Error("Wrong code style!");
                    return WavesApp.addController(name, $ctrl), origin.call(this, name, wrapControllerParams($ctrl))
                }
            }(module), function(module) {
                var origin = module.component;
                module.component = function(name, $component) {
                    return $component.controller = wrapControllerParams($component.controller), origin.call(this, name, $component)
                }
            }(module), function(module) {
                var origin = module.directive;
                module.directive = function(name, $directive) {
                    return $directive.controller = wrapControllerParams($directive.controller), origin.call(this, name, $directive)
                }
            }(module)), module
        }, angular.module("app", ["react", "ui.router", "ui.router.state.events", "app.templates", "app.utils", "app.ui", "app.wrapperForReact", "app.dex"]), angular.module("app.dex", []), angular.module("app.utils", []),
        function() {
            var _isValidAddress = require("@waves/signature-adapter").isValidAddress,
                Money = require("@waves/data-entities").Money,
                tsUtils = require("ts-utils"),
                _require3 = require("ramda"),
                map = _require3.map,
                prop = _require3.prop,
                pipe = _require3.pipe,
                filter = _require3.filter,
                isNil = _require3.isNil,
                equals = _require3.equals,
                values = _require3.values,
                any = _require3.any,
                isEmpty = _require3.isEmpty,
                ds = require("data-service"),
                configService = ds.utils.ConfigService,
                analytics = ds.analytics,
                LAST_OPENED_STATES_BLACKLIST = ["signIn", "signUp", "switch", "chooseUser", "import"],
                rc = require("react-components"),
                factory = function($state, defaultSettings, state, UserRouteState, Poll, timeLine, utils) {
                    var multiAccount = ds.utils.multiAccount,
                        storage = ds.utils.storage,
                        User = function() {
                            function User() {
                                var _this2 = this;
                                _classCallCheck(this, User), this.state = $state, this.storage = storage, this.multiAccount = multiAccount, this.loginStateSignal = new tsUtils.Signal, this.loginSignal = new tsUtils.Signal, this.logoutSignal = new tsUtils.Signal, this.loginProgressSignal = new tsUtils.Signal, this.newsViewedSignal = new tsUtils.Signal, this.clickStakeNowSignal = new tsUtils.Signal, this.networkError = void 0, this.currentUser = null, this.extraFee = void 0, this.changeScript = void 0, this.setTokensNameSignal = new tsUtils.Signal, this.tokensName = Object.create(null), this.highlightReferralLink = !1, this.buyWXModalOptions = {
                                    showBuyWXModal: !1,
                                    defaultAmount: ""
                                }, this._settings = void 0, this.debugMode = !1, this.__props = void 0, this._changeTimer = void 0, this._stateList = void 0, this._history = void 0, this._paramsHistory = void 0, this._hasScript = void 0, this._scriptInfoPoll = void 0, this._scriptInfoPollTimeoutId = void 0, this._uiId = void 0, this._sawStakingAdv = !1, this.notification2FAIsShown = !1, this.themes = ds.themes, this.isFirst = !1, this._achievements = {
                                    migration: {}
                                }, this._buyOptions = {}, this._resetFields(), Mousetrap.bind(["ctrl+shift+k"], function() {
                                    return _this2.switchNextTheme()
                                }), this.logoutSignal.on(function() {
                                    _this2.loginStateSignal.dispatch("logout")
                                }), this.loginSignal.on(function() {
                                    storage.load("uiId").then(function(uiId) {
                                        var name = _this2.name;
                                        "cognito" === _this2.userType && name && (name = name.replace(/@.+/, "")), window.intercomSettings.name = name, window.intercomSettings.user_id = uiId ? "".concat(uiId, "_").concat(_this2.address.slice(-4)) : window.intercomSettings.user_id, window.Intercom && window.Intercom.enabled && window.Intercom("update", {
                                            user_id: window.intercomSettings.user_id
                                        })
                                    }), _this2.loginStateSignal.dispatch("login");
                                    var off = rc.utils.checkBalanceAndShowDelistingAssets();
                                    _this2.logoutSignal.once(off)
                                }), this._getUserMigrationAchievement = this._getUserMigrationAchievement.bind(this);
                                var apiTokenService = ds.utils.ApiTokenService.getInstance();
                                apiTokenService.addSignatureProvider(utils.signToken), apiTokenService.addErrorCb(function() {
                                    $state.go("chooseUser")
                                }), apiTokenService.changeToken.on(function(data) {
                                    _this2.address === data.address && (_this2.currentUser.apiTokenWavesExchange = data.tokenData, _this2.saveMultiAccountUser(_this2.currentUser, _this2.currentUser.hash))
                                }), this.wrapperReady = new Promise(function(resolve) {
                                    _this2.setWrapperReady = resolve
                                }), new ds.User(this)
                            }
                            var _updateScriptAccountData;
                            return _createClass(User, [{
                                key: "sawStakingAdv",
                                get: function() {
                                    return this._sawStakingAdv
                                },
                                set: function(value) {
                                    this._sawStakingAdv = value
                                }
                            }]), _createClass(User, [{
                                key: "setIsFirst",
                                value: function(isFirst) {
                                    this.isFirst = isFirst
                                }
                            }, {
                                key: "setTokensNameList",
                                value: function(hash) {
                                    equals(hash, this.tokensName) || (this.tokensName = hash, this.setTokensNameSignal.dispatch())
                                }
                            }, {
                                key: "hasScript",
                                value: function() {
                                    return this._hasScript
                                }
                            }, {
                                key: "getSetting",
                                value: function(name) {
                                    return this._settings.get(name)
                                }
                            }, {
                                key: "toggleArrayUserSetting",
                                value: function(path, value, state) {
                                    var list = this.getSetting(path),
                                        index = list.indexOf(value);
                                    if ((state = tsUtils.isEmpty(state) ? -1 === index : state) && -1 === index) {
                                        var newList = list.slice();
                                        return newList.push(value), this.setSetting(path, newList), null
                                    }
                                    if (!state && -1 !== index) {
                                        var _newList = list.slice();
                                        return _newList.splice(index, 1), this.setSetting(path, _newList), null
                                    }
                                }
                            }, {
                                key: "hasInArrayUserSetting",
                                value: function(path, value) {
                                    return this.getSetting(path).includes(value)
                                }
                            }, {
                                key: "getDefaultUserSettings",
                                value: function(settings) {
                                    var common = this._settings.getSettings().common;
                                    return defaultSettings.create(_objectSpread({}, settings), _objectSpread({}, common))
                                }
                            }, {
                                key: "getSettingsByUser",
                                value: function(user) {
                                    return this.getDefaultUserSettings(user.settings)
                                }
                            }, {
                                key: "setSetting",
                                value: function(name, value) {
                                    this._settings.set(name, value)
                                }
                            }, {
                                key: "getMultiAccountData",
                                value: function() {
                                    return storage.load("multiAccountData")
                                }
                            }, {
                                key: "getMultiAccountHash",
                                value: function() {
                                    return storage.load("multiAccountHash")
                                }
                            }, {
                                key: "getUserSettingsByHash",
                                value: function(hash) {
                                    return this.getAllMultiAccountUsers().then(function(users) {
                                        return users && users[hash]
                                    })
                                }
                            }, {
                                key: "getAllMultiAccountUsers",
                                value: function() {
                                    return storage.load("multiAccountUsers")
                                }
                            }, {
                                key: "getMultiAccountUsers",
                                value: function() {
                                    var _this3 = this;
                                    return this.getAllMultiAccountUsers().then(function(users) {
                                        return multiAccount.toList(users).filter(function(user) {
                                            return _this3.isValidAddress(user.address)
                                        })
                                    })
                                }
                            }, {
                                key: "saveMultiAccount",
                                value: function(data) {
                                    return Promise.all([storage.save("multiAccountData", data.multiAccountData), storage.save("multiAccountHash", data.multiAccountHash)])
                                }
                            }, {
                                key: "saveMultiAccountUser",
                                value: function(user, userHash) {
                                    var _this4 = this;
                                    return user.settings && (user.settings = _objectSpread({}, user.settings, {
                                        encryptionRounds: void 0
                                    })), this.getAllMultiAccountUsers().then(function(users) {
                                        return _this4.saveMultiAccountUsers(_objectSpread({}, users, _defineProperty({}, userHash, {
                                            name: user.name,
                                            settings: user.settings,
                                            apiTokenWavesExchange: user.apiTokenWavesExchange,
                                            lastLogin: user.lastLogin
                                        })))
                                    })
                                }
                            }, {
                                key: "deleteMultiAccountUser",
                                value: function(userHash) {
                                    var _this5 = this;
                                    return Promise.all([multiAccount.deleteUser(userHash), storage.load("multiAccountUsers")]).then(function(_ref) {
                                        var _ref2 = _slicedToArray(_ref, 2),
                                            data = _ref2[0],
                                            users = _ref2[1];
                                        return delete users[userHash], Promise.all([_this5.saveMultiAccountUsers(users), _this5.saveMultiAccount(data)])
                                    })
                                }
                            }, {
                                key: "saveMultiAccountUsers",
                                value: function(users) {
                                    return storage.save("multiAccountUsers", users)
                                }
                            }, {
                                key: "setMultiAccountSettings",
                                value: function(commonSettings) {
                                    this._settings.setCommonSettings(commonSettings)
                                }
                            }, {
                                key: "getMultiAccountSettings",
                                value: function() {
                                    return storage.load("multiAccountSettings")
                                }
                            }, {
                                key: "saveMultiAccountSettings",
                                value: function(settings) {
                                    return storage.save("multiAccountSettings", settings)
                                }
                            }, {
                                key: "onLogin",
                                value: function() {
                                    var _this6 = this;
                                    return this.isAuthorised ? Promise.resolve() : new Promise(function(resolve, reject) {
                                        _this6.loginSignal.once(resolve), _this6.logoutSignal.once(reject)
                                    })
                                }
                            }, {
                                key: "initScriptInfoPolling",
                                value: function() {
                                    var _this7 = this;
                                    clearTimeout(this._scriptInfoPollTimeoutId), this._scriptInfoPollTimeoutId = setTimeout(function() {
                                        _this7._scriptInfoPoll && _this7._scriptInfoPoll.destroy(), _this7._scriptInfoPoll = new Poll(function() {
                                            return _this7.updateScriptAccountData()
                                        }, function() {
                                            return null
                                        }, 1e4)
                                    }, 3e4)
                                }
                            }, {
                                key: "login",
                                value: function(userData) {
                                    var _this8 = this;
                                    return this.networkError = !1, this.isFirst = !userData.settings, this._getUsersMigrationAchievements(), window.transitLog.push({
                                        status: "_addUserData",
                                        name: userData.name,
                                        address: userData.address
                                    }), this._addUserData(userData).then(function() {
                                        window.transitLog.push({
                                            status: "_addUserData_ok"
                                        }), _this8.initScriptInfoPolling(), analytics.send({
                                            name: "Sign_In_Success"
                                        })
                                    }).catch(function(e) {
                                        throw window.transitLog.push({
                                            status: "_addUserData_err",
                                            e: e
                                        }), e
                                    })
                                }
                            }, {
                                key: "setUiId",
                                value: function() {
                                    var _this9 = this;
                                    return storage.load("uiId").then(function(localId) {
                                        return ds.uiId.loginOrGetUiId(localId)
                                    }).then(function(_ref3) {
                                        var uid = _ref3.uid;
                                        return _this9._saveUiId(uid)
                                    }).catch(function() {
                                        return Promise.resolve()
                                    })
                                }
                            }, {
                                key: "goToActiveState",
                                value: function(fallbackStateName) {
                                    var goPromise, _this10 = this;
                                    if (window.transitLog.push({
                                            status: "goToActiveState",
                                            to: fallbackStateName
                                        }), ds.exchangePaymentApi.hasInvoice) $state.go("withdrawAndDeposit", {
                                        assetIdOrTicker: ds.exchangePaymentApi.getInvoice().asset,
                                        type: "withdraw"
                                    });
                                    else {
                                        if (this.initRouteState && this.initRouteState.name) {
                                            var _this$initRouteState = this.initRouteState,
                                                _this$initRouteState$ = _this$initRouteState.name,
                                                _name2 = void 0 === _this$initRouteState$ ? "wallet" : _this$initRouteState$,
                                                _params = _this$initRouteState.params;
                                            window.transitLog.push({
                                                status: "HasInitRoute",
                                                to: _name2,
                                                params: _params
                                            }), this.fromInitState = this.initRouteState, goPromise = _name2 && !LAST_OPENED_STATES_BLACKLIST.includes(_name2) ? $state.go(_name2, _params) : $state.go("wallet", _params), this.initRouteState = null
                                        } else {
                                            var _name = {
                                                    name: "wallet"
                                                },
                                                name = _name.name,
                                                params = _name.params;
                                            window.transitLog.push({
                                                status: "NoInitRoute#1",
                                                to: name
                                            }), goPromise = name && !LAST_OPENED_STATES_BLACKLIST.includes(name) ? (window.transitLog.push({
                                                status: "NoInitRoute#2",
                                                to: name,
                                                params: params
                                            }), $state.go(name, params)) : (window.transitLog.push({
                                                status: "NoInitRoute#2",
                                                to: "wallet"
                                            }), $state.go("wallet", params))
                                        }
                                        goPromise.then(function() {
                                            _this10._showWebAuthModal(), _this10._showAnyTxModal()
                                        })
                                    }
                                }
                            }, {
                                key: "setInitRouteState",
                                value: function(name, params) {
                                    this.initRouteState || (this.initRouteState = {
                                        name: name,
                                        params: params
                                    })
                                }
                            }, {
                                key: "isSeedAccount",
                                value: function(user) {
                                    return !user.userType || "seed" === user.userType
                                }
                            }, {
                                key: "forceInitRouteState",
                                value: function(name, params) {
                                    this.initRouteState = name ? {
                                        name: name,
                                        params: params
                                    } : null
                                }
                            }, {
                                key: "create",
                                value: function(userData, hasBackup, restore) {
                                    var _this11 = this;
                                    return this.logout($state.current.name, !0), this.addUser(userData, hasBackup, restore).then(function(createdUser) {
                                        return _this11.login(createdUser)
                                    }).then(function() {
                                        _this11.initScriptInfoPolling()
                                    })
                                }
                            }, {
                                key: "addUser",
                                value: function(userData, hasBackup, restore) {
                                    var _this12 = this;
                                    return multiAccount.addUser({
                                        userType: userData.userType || "seed",
                                        seed: userData.seed,
                                        networkByte: userData.networkByte,
                                        privateKey: userData.privateKey,
                                        publicKey: userData.publicKey,
                                        id: userData.id
                                    }).then(function(_ref4) {
                                        var multiAccountData = _ref4.multiAccountData,
                                            multiAccountHash = _ref4.multiAccountHash,
                                            userHash = _ref4.userHash;
                                        return _this12.saveMultiAccountUser(_objectSpread({}, userData, {
                                            settings: {
                                                hasBackup: hasBackup
                                            }
                                        }), userHash).then(function() {
                                            return _this12.saveMultiAccount({
                                                multiAccountData: multiAccountData,
                                                multiAccountHash: multiAccountHash
                                            })
                                        }).then(function() {
                                            return _this12.getMultiAccountUsers()
                                        }).then(function(multiAccountUsers) {
                                            var createdUser = multiAccountUsers.find(function(user) {
                                                return user.hash === userHash
                                            });
                                            if (!createdUser) throw new Error("Can't save user");
                                            return restore && analytics.send({
                                                name: "Import_Backup_Success",
                                                params: {
                                                    userType: userData.userType
                                                }
                                            }), _objectSpread({}, createdUser)
                                        })
                                    })
                                }
                            }, {
                                key: "logout",
                                value: function(stateName, isSwitch) {
                                    if (!this.isAuthorised) return null;
                                    this.notification2FAIsShown = !1, analytics.user.logout(), ds.app.logOut(), clearTimeout(this._scriptInfoPollTimeoutId), this._scriptInfoPoll && this._scriptInfoPoll.destroy(), this._resetFields(), stateName ? (analytics.addDefaultParams({
                                        userType: "unknown"
                                    }), isSwitch && $state.current.name !== stateName && $state.go(stateName), this.logoutSignal.dispatch({}), isSwitch || (this.changeTheme(this.themes.getDefaultTheme(), {
                                        dontSave: !0
                                    }), multiAccount.signOut(), $state.go(stateName, void 0, {
                                        custom: {
                                            logout: !0
                                        }
                                    }))) : WavesApp.isDesktop() ? transfer("reload") : window.location.reload(!0), this.currentUser = null, this.debugMode = !1
                                }
                            }, {
                                key: "resetAll",
                                value: function() {
                                    return Promise.all([storage.save("multiAccountData", ""), storage.save("multiAccountHash", ""), storage.save("multiAccountUsers", ""), storage.save("userList", "")])
                                }
                            }, {
                                key: "checkPassword",
                                value: function(password) {
                                    var api = ds.signature.getSignatureApi();
                                    return api.currentUser && "function" == typeof api.currentUser.checkPassword ? new Promise(function(res, rej) {
                                        api.currentUser.checkPassword(password) ? res(!0) : rej("Incorrect password")
                                    }) : Promise.all([this.getMultiAccountData(), this.getMultiAccountHash()]).then(function(_ref5) {
                                        var _ref6 = _slicedToArray(_ref5, 2),
                                            multiAccountData = _ref6[0],
                                            multiAccountHash = _ref6[1];
                                        return multiAccountData ? multiAccount.signIn(multiAccountData, password, void 0, multiAccountHash) : Promise.reject("Empty account")
                                    })
                                }
                            }, {
                                key: "getActiveState",
                                value: function(name) {
                                    if (!name) return {
                                        name: "wallet"
                                    };
                                    var userState = tsUtils.find(this._stateList || [], {
                                        name: name
                                    });
                                    return userState ? {
                                        name: userState.state
                                    } : {
                                        name: WavesApp.stateTree.getPath(name).join(".")
                                    }
                                }
                            }, {
                                key: "applyState",
                                value: function(state, params) {
                                    var _this13 = this;
                                    this._history.push(state.name), this._paramsHistory.push(params), this._history = this._history.slice(-10), this._stateList && this._stateList.some(function(item) {
                                        return item.applyState(state, _this13)
                                    })
                                }
                            }, {
                                key: "getLastState",
                                value: function() {
                                    return 1 < this._history.length ? this._history[this._history.length - 2] : "welcome"
                                }
                            }, {
                                key: "getLastParams",
                                value: function() {
                                    return this._paramsHistory[this._paramsHistory.length - 2] || {}
                                }
                            }, {
                                key: "getUserList",
                                value: function() {
                                    return storage.onReady().then(function() {
                                        return storage.load("userList")
                                    }).then(function(list) {
                                        return Array.isArray(list) ? list.sort(function(a, b) {
                                            return b.lastLogin - a.lastLogin
                                        }) : []
                                    })
                                }
                            }, {
                                key: "isValidAddress",
                                value: function(address) {
                                    var isEmail = !(!address || !address.includes("@"));
                                    try {
                                        return isEmail || _isValidAddress(address, ds.config.get("code").charCodeAt(0))
                                    } catch (e) {
                                        return !1
                                    }
                                }
                            }, {
                                key: "getFilteredUserList",
                                value: function() {
                                    var _this14 = this;
                                    return this.getUserList().then(function(list) {
                                        return list.filter(function(user) {
                                            return _this14.isValidAddress(user.address)
                                        })
                                    })
                                }
                            }, {
                                key: "removeUserByAddress",
                                value: function(removeAddress) {
                                    return storage.load("userList").then(function(list) {
                                        return list.filter(function(_ref7) {
                                            return _ref7.address !== removeAddress
                                        })
                                    }).then(function(list) {
                                        return storage.save("userList", list)
                                    })
                                }
                            }, {
                                key: "getThemeSettings",
                                value: function() {
                                    var currentTheme = this.getSetting("theme");
                                    return this.themes.getSettings(currentTheme)
                                }
                            }, {
                                key: "changeTheme",
                                value: function(theme, options) {
                                    var currentTheme = this.getSetting("theme"),
                                        newTheme = this.themes.changeTheme(theme || this.getSetting("theme"));
                                    currentTheme !== newTheme && options && !options.dontSave && this.setSetting("theme", newTheme)
                                }
                            }, {
                                key: "changeCandle",
                                value: function(name) {
                                    var currentTheme = this.getSetting("theme"),
                                        current = this.getSetting("candle");
                                    this.themes.setCandleColorsByName(currentTheme, name), name !== current && this.setSetting("candle", name)
                                }
                            }, {
                                key: "switchNextTheme",
                                value: function() {
                                    var newTheme = this.themes.switchNext();
                                    this.setSetting("theme", newTheme)
                                }
                            }, {
                                key: "updateScriptAccountData",
                                value: (_updateScriptAccountData = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                                    var item, waves, address, addHasScript, response, _this15 = this,
                                        _args = arguments;
                                    return regeneratorRuntime.wrap(function(_context) {
                                        for (;;) switch (_context.prev = _context.next) {
                                            case 0:
                                                return address = (item = 0 < _args.length && void 0 !== _args[0] ? _args[0] : null) ? item.address : this.address, _context.prev = 2, this.networkError = !1, _context.next = 6, ds.api.assets.get(ds.utils.BaseAssetService.getInstance().WavesAssetId);
                                            case 6:
                                                waves = _context.sent, _context.next = 13;
                                                break;
                                            case 9:
                                                throw _context.prev = 9, _context.t0 = _context.catch(2), this.networkError = !0, new Error("Can't get Waves asset");
                                            case 13:
                                                return addHasScript = function(value) {
                                                    _this15._hasScript !== value && (_this15._hasScript = value, _this15.changeScript.dispatch())
                                                }, _context.prev = 14, _context.next = 17, ds.fetch("".concat(ds.apiUrls.getNodeUrl(), "/addresses/scriptInfo/").concat(address));
                                            case 17:
                                                response = _context.sent, this.extraFee = Money.fromCoins(response.extraFee, waves), addHasScript(0 !== response.extraFee), _context.next = 26;
                                                break;
                                            case 22:
                                                _context.prev = 22, _context.t1 = _context.catch(14), addHasScript(!!this._hasScript), this.extraFee = this.extraFee || Money.fromCoins(0, waves);
                                            case 26:
                                            case "end":
                                                return _context.stop()
                                        }
                                    }, _callee, this, [
                                        [2, 9],
                                        [14, 22]
                                    ])
                                })), function() {
                                    return _updateScriptAccountData.apply(this, arguments)
                                })
                            }, {
                                key: "getApiToken",
                                value: function() {
                                    var _this16 = this;
                                    try {
                                        this.currentlyProcessingSign || (this.currentlyProcessingSign = !0, this.pendingSign = utils.getApiToken(this.apiTokenWavesExchange).then(function(apiTokenWavesExchange) {
                                            _this16.currentUser.apiTokenWavesExchange = apiTokenWavesExchange, delete _this16.currentlyProcessingSign, delete _this16.pendingSign
                                        }), this.pendingSign.then(function() {
                                            _this16.currentlyProcessingSign = !1
                                        }, function() {
                                            _this16.currentlyProcessingSign = !1
                                        }))
                                    } catch (e) {
                                        this.currentlyProcessingSign = !1
                                    }
                                    return this.pendingSign || Promise.resolve()
                                }
                            }, {
                                key: "hasUserMigrationAchievement",
                                value: function() {
                                    return any(equals(!0), values(this._achievements.migration))
                                }
                            }, {
                                key: "hasAddressMigrationAchievement",
                                value: function(address) {
                                    return this._achievements.migration[address] || !1
                                }
                            }, {
                                key: "checkNewTerms",
                                value: function() {
                                    return storage.load("needReadNewTerms").then(function(needReadNewTerms) {
                                        if (needReadNewTerms) return ds.utils.modalManager.openModal("AcceptNewTermsModal").then(function() {
                                            storage.save("needReadNewTerms", !1)
                                        })
                                    })
                                }
                            }, {
                                key: "loginDebug",
                                value: function(address, publicKey) {
                                    var _this17 = this,
                                        currentUser = _objectSpread({}, this.currentUser);
                                    return this.logout("switch", !0), this.debugMode = !0, this._getUserMigrationAchievement(address), this.currentUser = _objectSpread({}, currentUser, {
                                        name: "Debug mode ".concat(address),
                                        address: address,
                                        publicKey: publicKey || currentUser.publicKey
                                    }), this._setObserve(), ds.app.login({
                                        userType: "seed",
                                        networkByte: ds.config.get("code").charCodeAt(0),
                                        seed: "",
                                        address: address,
                                        publicKey: publicKey || currentUser.publicKey
                                    }), ds.app.initDataManager({
                                        userType: "seed",
                                        networkByte: ds.config.get("code").charCodeAt(0),
                                        seed: "",
                                        address: address,
                                        publicKey: publicKey || currentUser.publicKey
                                    }), $state.go("switch"), Promise.resolve().then(function() {
                                        return _this17.updateScriptAccountData()
                                    }).then(function() {
                                        return _this17.loginSignal.dispatch()
                                    }).catch(function(e) {
                                        return ds.app.logOut(), Promise.reject(e)
                                    })
                                }
                            }, {
                                key: "_getUserMigrationAchievement",
                                value: function(address) {
                                    var _this18 = this,
                                        migrationDate = Date.UTC(2019, 11, 2);
                                    return ds.api.transactions.hasTransactionsBeforeTimestamp(address, +new Date(migrationDate)).catch(function() {
                                        return !1
                                    }).then(function(result) {
                                        _this18._achievements.migration[address] = result
                                    })
                                }
                            }, {
                                key: "_getUsersMigrationAchievements",
                                value: function() {
                                    var _this19 = this;
                                    Promise.all([this.getMultiAccountUsers(), this.getFilteredUserList()]).then(function(_ref8) {
                                        for (var _ref9 = _slicedToArray(_ref8, 2), multiAccUsers = _ref9[0], lockedUsers = _ref9[1], addresses = pipe(map(prop("address")), filter(function(address) {
                                                return isNil(_this19._achievements.migration[address])
                                            }))(multiAccUsers.concat(lockedUsers)), getAchievementForAddress = function getAchievementForAddress() {
                                                addresses.length && _this19._getUserMigrationAchievement(addresses.pop()).then(function() {
                                                    return getAchievementForAddress()
                                                })
                                            }, i = 0; i < Math.min(5, addresses.length); i += 1) getAchievementForAddress()
                                    })
                                }
                            }, {
                                key: "_resetFields",
                                value: function() {
                                    var commonSettings, _this20 = this;
                                    this.networkError = !1, this.currentUser = null, this.extraFee = null, this.changeScript = new tsUtils.Signal, this.__props = Object.create(null), this._changeTimer = null, this._stateList = null, this._history = [], this._paramsHistory = [], this._hasScript = !1, this._scriptInfoPoll = null, this._scriptInfoPollTimeoutId = null, this._userReady = !1, this._settings && this._settings.change.off(), this._settings && (commonSettings = this._settings.getSettings().common, this._settings.change.off()), this._settings = defaultSettings.create({}, commonSettings), this._settings.change.on(function() {
                                        return _this20._onChangeSettings()
                                    }), ds.dataManager.dropAddress()
                                }
                            }, {
                                key: "addAnalytics",
                                value: function() {
                                    var auuid = this._uiId,
                                        address = this.address,
                                        userType = this.userType || "seed",
                                        platform = WavesApp.isDesktop() ? "desktop" : "web";
                                    analytics.addDefaultParams({
                                        userType: userType,
                                        platform: platform,
                                        address: address,
                                        auuid: auuid
                                    })
                                }
                            }, {
                                key: "_addUserData",
                                value: function(userData) {
                                    var commonSettings, _this21 = this;
                                    this.currentUser = {
                                        hash: userData.hash,
                                        name: userData.name,
                                        id: userData.id,
                                        address: userData.address,
                                        publicKey: userData.publicKey,
                                        userType: userData.userType,
                                        settings: userData.settings,
                                        apiTokenWavesExchange: userData.apiTokenWavesExchange,
                                        lastLogin: Date.now()
                                    }, this._setObserve(), this._settings && (commonSettings = this._settings.getSettings().common, this._settings.change.off()), this._settings = defaultSettings.create(this.currentUser.settings, commonSettings), this._settings.change.on(function() {
                                        return _this21._onChangeSettings()
                                    });
                                    var states = WavesApp.stateTree.find("wallet").getChildren();
                                    return this._stateList = states.map(function(baseTree) {
                                        var id = baseTree.id;
                                        return new UserRouteState("main", id, _this21._settings.get("".concat(id, ".activeState")))
                                    }), Object.keys(configService.getInstance().getConfig()).forEach(function(key) {
                                        var value = _this21._settings.get("network.".concat(key));
                                        value && ds.config.set(key, value)
                                    }), ds.config.set("locationOrigin", configService.getInstance().getConfig("NETWORK.locationOrigin")), this.saveMultiAccountUser(this.currentUser, this.currentUser.hash).then(function() {
                                        return ds.app.login(userData)
                                    }).then(function() {
                                        return _this21.loginProgressSignal.dispatch("apiToken")
                                    }).then(function() {
                                        return _this21.getApiToken()
                                    }).then(function() {
                                        return _this21.loginProgressSignal.dispatch("dataManger")
                                    }).then(function() {
                                        return ds.app.initDataManager(userData)
                                    }).then(function() {
                                        _this21._userReady = !0, _this21.changeTheme(_this21._settings.get("theme")), _this21.changeCandle()
                                    }).then(function() {
                                        return _this21._logoutTimer()
                                    }).then(function() {
                                        return _this21.updateScriptAccountData()
                                    }).then(function() {
                                        return _this21.setUiId()
                                    }).then(function() {
                                        return _this21.loginProgressSignal.dispatch("setUID")
                                    }).then(function() {
                                        return _this21.addAnalytics()
                                    }).then(function() {
                                        return _this21.checkNewTerms()
                                    }).then(function() {
                                        return _this21.loginSignal.dispatch()
                                    }).then(function() {
                                        return _this21.loginProgressSignal.dispatch("done")
                                    }).catch(function(e) {
                                        throw _this21.logout(), _this21.loginProgressSignal.dispatch("fail"), e
                                    })
                                }
                            }, {
                                key: "_logoutTimer",
                                value: function() {
                                    var _this22 = this;
                                    this.receive(state.signals.sleep, function(min) {
                                        min >= _this22._settings.get("logoutAfterMin") && _this22.logout("signIn")
                                    })
                                }
                            }, {
                                key: "_onChangeSettings",
                                value: function() {
                                    var _this$_settings$getSe2 = this._settings.getSettings(),
                                        common = _this$_settings$getSe2.common,
                                        settings = _this$_settings$getSe2.settings;
                                    this.currentUser && (this.currentUser.settings = _objectSpread({}, settings)), isEmpty(common) || this.saveMultiAccountSettings(common)
                                }
                            }, {
                                key: "_onChangePropsForSave",
                                value: function() {
                                    var _this23 = this;
                                    this._changeTimer || (this._changeTimer = timeLine.timeout(function() {
                                        _this23._changeTimer = null, _this23.saveMultiAccountUser(_this23.currentUser, _this23.currentUser.hash)
                                    }, 500))
                                }
                            }, {
                                key: "_setObserve",
                                value: function() {
                                    var _this24 = this;
                                    Object.keys(this.currentUser).forEach(function(key) {
                                        _this24._observe(key, _this24.currentUser)
                                    })
                                }
                            }, {
                                key: "_observe",
                                value: function(key, target) {
                                    var _this25 = this;
                                    this.__props[key] = target[key], Object.defineProperty(target, key, {
                                        get: function() {
                                            return _this25.__props[key]
                                        },
                                        set: function(value) {
                                            equals(value, _this25.__props[key]) || (_this25.__props[key] = value, _this25._onChangePropsForSave())
                                        }
                                    })
                                }
                            }, {
                                key: "_saveUiId",
                                value: function(uiId) {
                                    return this._uiId = uiId, storage.save("uiId", uiId)
                                }
                            }, {
                                key: "_showWebAuthModal",
                                value: function() {
                                    var _this26 = this;
                                    if (ds.webAuthApi.hasItems) {
                                        var webAuth = ds.webAuthApi.getItem();
                                        ds.utils.modalManager.openModal("webAuth", {
                                            webAuth: webAuth
                                        }).then(function() {
                                            ds.webAuthApi.deleteItem(webAuth.id), _this26._showWebAuthModal()
                                        }).catch(function() {
                                            ds.webAuthApi.deleteItem(webAuth.id), _this26._showWebAuthModal()
                                        })
                                    }
                                }
                            }, {
                                key: "_showAnyTxModal",
                                value: function() {
                                    var _this27 = this;
                                    if (ds.txApi.hasItems) {
                                        var _ds$txApi$getItem = ds.txApi.getItem(),
                                            id = _ds$txApi$getItem.id,
                                            txData = _objectWithoutProperties(_ds$txApi$getItem, ["id"]);
                                        ds.utils.modalManager.openModal("anyTx", {
                                            txData: txData
                                        }).then(function() {
                                            ds.txApi.deleteItem(id), _this27._showAnyTxModal()
                                        }).catch(function() {
                                            ds.txApi.deleteItem(id), _this27._showAnyTxModal()
                                        })
                                    }
                                }
                            }, {
                                key: "achievements",
                                get: function() {
                                    return this._achievements
                                }
                            }, {
                                key: "buyOptions",
                                get: function() {
                                    return this._buyOptions
                                },
                                set: function(options) {
                                    return this._buyOptions = options
                                }
                            }, {
                                key: "changeSetting",
                                get: function() {
                                    return this._settings.change
                                }
                            }, {
                                key: "hash",
                                get: function() {
                                    return this.currentUser ? this.currentUser.hash : null
                                }
                            }, {
                                key: "address",
                                get: function() {
                                    return this.currentUser ? this.currentUser.address : null
                                }
                            }, {
                                key: "id",
                                get: function() {
                                    return this.currentUser ? this.currentUser.id : null
                                }
                            }, {
                                key: "name",
                                get: function() {
                                    return this.currentUser ? this.currentUser.name : null
                                },
                                set: function(name) {
                                    this.currentUser && (this.currentUser.name = name)
                                }
                            }, {
                                key: "userType",
                                get: function() {
                                    return this.currentUser ? this.currentUser.userType : null
                                }
                            }, {
                                key: "publicKey",
                                get: function() {
                                    return this.currentUser ? this.currentUser.publicKey : null
                                }
                            }, {
                                key: "apiTokenWavesExchange",
                                get: function() {
                                    return this.currentUser ? this.currentUser.apiTokenWavesExchange : null
                                }
                            }, {
                                key: "isAuthorised",
                                get: function() {
                                    return this._userReady && !!this.address
                                }
                            }, {
                                key: "isSignedIn",
                                get: function() {
                                    return multiAccount.isSignedIn
                                }
                            }, {
                                key: "walletName",
                                get: function() {
                                    return "cognito" !== this.userType ? this.name : ds.utils.getSecretContact(this.name)
                                }
                            }]), User
                        }();
                    return User.prototype.receive = tsUtils.Receiver.prototype.receive, User.prototype.receiveOnce = tsUtils.Receiver.prototype.receiveOnce, User.prototype.stopReceive = tsUtils.Receiver.prototype.stopReceive, new User
                };
            factory.$inject = ["$state", "defaultSettings", "state", "UserRouteState", "Poll", "timeLine", "utils"], angular.module("app").factory("user", factory)
        }(), (factory = function($q, localeParser) {
            var onLoad = $q(function(resolve) {
                    i18next.on("initialized", resolve)
                }),
                parse = function(text) {
                    return localeParser(function(argument_0) {
                        return (0 < arguments.length && void 0 !== argument_0 ? argument_0 : "").split("").map(function(_char) {
                            switch (_char.charCodeAt(0)) {
                                case 34:
                                    return "&quot;";
                                case 38:
                                    return "&amp;";
                                case 39:
                                    return "&#39;";
                                case 60:
                                    return "&lt;";
                                case 62:
                                    return "&gt;";
                                default:
                                    return _char
                            }
                        }).join("")
                    }(text))
                };
            return {
                translate: function(literal, ns, params, skipErrors) {
                    var translate = ["".concat(ns = ns || "app", ":").concat(literal)];
                    return "app" !== ns && translate.push("app:".concat(literal)), skipErrors ? translate.some(function(key) {
                        return i18next.exists(key, params)
                    }) ? parse(i18next.t(translate, params)) : "" : parse(i18next.t(translate, _objectSpread({}, params, {
                        interpolation: {
                            escapeValue: !1
                        }
                    })))
                },
                translateField: function(controller, literalField, translatedField, ns, params) {
                    var _this28 = this,
                        apply = function() {
                            null != controller[literalField] && (controller[translatedField] = _this28.translate(controller[literalField], ns, params))
                        };
                    controller.observe(literalField, apply), i18next.on("languageChanged", apply), controller.signals.destroy.once(function() {
                        i18next.off("languageChanged", apply)
                    }), controller[translatedField] || apply()
                },
                getNs: function($element) {
                    return $element.closest("[w-i18n-ns]").attr("w-i18n-ns") || ""
                },
                onLoad: onLoad
            }
        }).$inject = ["$q", "localeParser"], angular.module("app").factory("i18n", factory),
        function() {
            var factory = function(utils) {
                return function() {
                    function Queue(options) {
                        _classCallCheck(this, Queue), this.signals = utils.liteObject({
                            change: new tsUtils.Signal
                        }), this._queueLimit = options.queueLimit, this._list = [], this._activeList = [], this._queueHash = Object.create(null)
                    }
                    return _createClass(Queue, [{
                        key: "push",
                        value: function(item) {
                            if (this._queueHash[item.id]) throw new Error("Duplicate queue id!");
                            var handler = this._getEndPromiseHandler(item);
                            item.promise.then(handler, handler), this._queueHash[item.id] = item, this._activeList.length === this._queueLimit ? this._list.push(item) : (this._activeList.push(item), this._dispatch())
                        }
                    }, {
                        key: "remove",
                        value: function(id) {
                            if (this._queueHash[id]) {
                                var item = this._queueHash[id];
                                return this._getEndPromiseHandler(item)(), item
                            }
                        }
                    }, {
                        key: "removeAll",
                        value: function() {
                            var _this29 = this;
                            Object.keys(this._queueHash).forEach(function(key) {
                                return _this29.remove(key)
                            })
                        }
                    }, {
                        key: "destroy",
                        value: function(id) {
                            this._queueHash[id] && (this.remove(id), delete this._queueHash[id])
                        }
                    }, {
                        key: "destroyAll",
                        value: function() {
                            var _this30 = this;
                            Object.keys(this._queueHash).forEach(function(key) {
                                return _this30.destroy(key)
                            })
                        }
                    }, {
                        key: "has",
                        value: function(id) {
                            return !!this._queueHash[id]
                        }
                    }, {
                        key: "getActiveList",
                        value: function() {
                            return this._activeList.slice()
                        }
                    }, {
                        key: "_dispatch",
                        value: function() {
                            this.signals.change.dispatch(this.getActiveList())
                        }
                    }, {
                        key: "_getEndPromiseHandler",
                        value: function(item) {
                            var _this31 = this;
                            return this._queueHash[item.id] && delete this._queueHash[item.id],
                                function() {
                                    [_this31._list, _this31._activeList].forEach(function(list, isActiveList) {
                                        var index = list.indexOf(item); - 1 !== index && (list.splice(index, 1), isActiveList && _this31._updateActiveList())
                                    })
                                }
                        }
                    }, {
                        key: "_updateActiveList",
                        value: function() {
                            if (this._list.length) {
                                var item = this._list.shift();
                                this._activeList.push(item)
                            }
                            this._dispatch()
                        }
                    }]), Queue
                }()
            };
            factory.$inject = ["utils"], angular.module("app").factory("Queue", factory)
        }(),
        function() {
            var factory = function(timeLine, $injector) {
                var tsUtils = require("ts-utils");
                return new(function() {
                    function State() {
                        var _this32 = this;
                        _classCallCheck(this, State), this.user = void 0, this.signals = {
                            window: {
                                blur: new tsUtils.Signal,
                                focus: new tsUtils.Signal
                            },
                            sleep: new tsUtils.Signal,
                            wakeUp: new tsUtils.Signal,
                            changeRouterStateSuccess: new tsUtils.Signal,
                            changeRouterStateStart: new tsUtils.Signal
                        }, this.lastOpenVersion = "", this._timer = null, this._seepStartTime = null, this._maxSleep = null, this.__sleepStep = null, this._block = document.createElement("DIV"), this._handlers = Object.create(null), timeLine.wait(100).then(function() {
                            _this32.user = $injector.get("user"), _this32.user.loginSignal.once(_this32._handleLogin, _this32), _this32.user.logoutSignal.once(_this32._handleLogout, _this32)
                        }), this._initialize()
                    }
                    return _createClass(State, [{
                        key: "_sleepStep",
                        get: function() {
                            return this.__sleepStep
                        },
                        set: function(value) {
                            value ? this._maxSleep && this._addBlock() : this._removeBlock(), this.__sleepStep = value
                        }
                    }]), _createClass(State, [{
                        key: "_initialize",
                        value: function() {
                            this._addBlockStyles(), this._createHandlers(), this._setHandlers()
                        }
                    }, {
                        key: "_handleLogin",
                        value: function() {
                            this._maxSleep = this.user.getSetting("logoutAfterMin"), this.user.changeSetting.on(this._onUserSettingChange, this), this.user.logoutSignal.once(this._handleLogout, this)
                        }
                    }, {
                        key: "_handleLogout",
                        value: function() {
                            this._timer && (timeLine.cancel(this._timer), this._timer = null), this.user.changeSetting.off(this._onUserSettingChange), this.user.loginSignal.once(this._handleLogin, this)
                        }
                    }, {
                        key: "_onUserSettingChange",
                        value: function(path) {
                            "logoutAfterMin" === path && (this._maxSleep = this.user.getSetting("logoutAfterMin"))
                        }
                    }, {
                        key: "_addBlockStyles",
                        value: function() {
                            this._block.classList.add("sleep-block")
                        }
                    }, {
                        key: "_createHandlers",
                        value: function() {
                            var _this33 = this;
                            this._handlers.focus = function() {
                                _this33.signals.window.focus.dispatch(), _this33._wakeUp()
                            }, this._handlers.blur = function() {
                                _this33.signals.window.blur.dispatch(), _this33._sleep()
                            }
                        }
                    }, {
                        key: "_wakeUp",
                        value: function() {
                            this._seepStartTime = null, this._sleepStep = null, this._timer && (timeLine.cancel(this._timer), this._timer = null), this.signals.wakeUp.dispatch()
                        }
                    }, {
                        key: "_removeBlock",
                        value: function() {
                            this._block && this._block.parentNode === document.body && document.body.removeChild(this._block)
                        }
                    }, {
                        key: "_addBlock",
                        value: function() {
                            this._block && !this._block.parentNode && document.body.appendChild(this._block)
                        }
                    }, {
                        key: "_sleep",
                        value: function() {
                            var _this34 = this;
                            this._timer && (timeLine.cancel(this._timer), this._timer = null), this._seepStartTime || (this._seepStartTime = Date.now(), this._setSleepStep(0)), this._timer = timeLine.timeout(function() {
                                _this34._timer = null;
                                var time = Date.now() - _this34._seepStartTime,
                                    sleepMinutes = Math.floor(time / 6e4);
                                _this34._sleep(), _this34._setSleepStep(sleepMinutes)
                            }, 1e3)
                        }
                    }, {
                        key: "_setSleepStep",
                        value: function(step) {
                            if (this._sleepStep === step) return null;
                            this._sleepStep = step, this.signals.sleep.dispatch(this._sleepStep)
                        }
                    }, {
                        key: "_setHandlers",
                        value: function() {
                            var _this35 = this;
                            Object.keys(this._handlers).forEach(function(event) {
                                window.addEventListener(event, _this35._handlers[event], !1)
                            })
                        }
                    }]), State
                }())
            };
            factory.$inject = ["timeLine", "$injector"], angular.module("app").factory("state", factory)
        }(),
        function() {
            var factory = function(PromiseControl, timeLine, utils, $q) {
                var tsUtils = require("ts-utils"),
                    Poll = function() {
                        function Poll(getData, applyData, time, errorRequestTime) {
                            _classCallCheck(this, Poll), this.id = tsUtils.uniqueId("poll"), this.signals = {
                                destroy: new tsUtils.Signal
                            }, this._errorRequestTime = errorRequestTime || 1e3, this._ready = $q.defer(), this._removed = !1, this._time = time, this._getData = getData, this._applyData = applyData, this._paused = !1, this._timer = null, this._promise = null, this._pausePromise = null, this._initialize()
                        }
                        return _createClass(Poll, [{
                            key: "ready",
                            get: function() {
                                return this._ready.promise
                            }
                        }, {
                            key: "_promise",
                            get: function() {
                                return this.__promise
                            },
                            set: function(promise) {
                                this.__promise && this.__promise.drop(), this.__promise = promise
                            }
                        }]), _createClass(Poll, [{
                            key: "pause",
                            value: function(_promise) {
                                var _this36 = this;
                                this._paused = !0, this._stopTimers();
                                var promise = _promise && _promise.openPromise || Promise.resolve();
                                if (this._pausePromise) {
                                    this._pausePromise.drop();
                                    var pausePromise = utils.resolve(this._pausePromise.promise()).then(function() {
                                        return promise
                                    });
                                    this._pausePromise = new PromiseControl(pausePromise)
                                } else this._pausePromise = new PromiseControl(promise);
                                this._pausePromise.always(function() {
                                    _this36._pausePromise = null, _this36.play()
                                })
                            }
                        }, {
                            key: "stop",
                            value: function() {
                                this._paused = !0, this._stopTimers()
                            }
                        }, {
                            key: "play",
                            value: function() {
                                this._paused = !1, this._pausePromise && (this._pausePromise.drop(), this._pausePromise = null), this._run()
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this._removed = !0, this._stopTimers(), this.stopReceive(), this.signals.destroy.dispatch()
                            }
                        }, {
                            key: "restart",
                            value: function() {
                                return this._stopTimers(), this._run()
                            }
                        }, {
                            key: "_initialize",
                            value: function() {
                                this._run()
                            }
                        }, {
                            key: "_stopTimers",
                            value: function() {
                                timeLine.cancel(this._timer), this._promise = null
                            }
                        }, {
                            key: "_run",
                            value: function() {
                                var _this37 = this;
                                return new Promise(function(resolve) {
                                    if (_this37._removed) return null;
                                    if (_this37._paused) return null;
                                    var result = _this37._getData();
                                    Poll._isPromise(result) ? (_this37._promise = new PromiseControl(result), _this37._promise.then(function(data) {
                                        _this37._addTimeout(), _this37._applyData(data), _this37._ready.resolve(), resolve()
                                    }, function() {
                                        _this37._timer = timeLine.timeout(function() {
                                            return _this37._run()
                                        }, _this37._errorRequestTime)
                                    })) : (_this37._applyData(result), _this37._addTimeout(), resolve())
                                })
                            }
                        }, {
                            key: "_addTimeout",
                            value: function() {
                                var _this38 = this;
                                this._timer = timeLine.timeout(function() {
                                    return _this38._run()
                                }, this._time)
                            }
                        }], [{
                            key: "_isPromise",
                            value: function(data) {
                                return data && data.then && "function" == typeof data.then
                            }
                        }]), Poll
                    }();
                return Poll.prototype.receive = tsUtils.Receiver.prototype.receive, Poll.prototype.receiveOnce = tsUtils.Receiver.prototype.receiveOnce, Poll.prototype.stopReceive = tsUtils.Receiver.prototype.stopReceive, Poll
            };
            factory.$inject = ["PromiseControl", "timeLine", "utils", "$q"], angular.module("app.utils").factory("Poll", factory)
        }(), (controller = function($element, $compile, $scope, Base) {
            var ds = require("data-service");
            return new(function() {
                function WMd() {
                    var _getPrototypeOf2, _this39;
                    _classCallCheck(this, WMd);
                    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
                    return (_this39 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WMd)).call.apply(_getPrototypeOf2, [this].concat(args)))).literalId = void 0, _this39.text = {}, _this39.literal = void 0, _this39.$content = void 0, _this39._changeLang = function() {
                        _this39._render()
                    }, _this39
                }
                return _inherits(WMd, Base), _createClass(WMd, [{
                    key: "$postLink",
                    value: function() {
                        this._onChangeText(), i18next.on("languageChanged", this._changeLang), this.observe("text", this._onChangeText)
                    }
                }, {
                    key: "$onDestroy",
                    value: function() {
                        i18next.off("languageChanged", this._changeLang)
                    }
                }, {
                    key: "_render",
                    value: function() {
                        if (this.$content && this.$content.remove(), 0 === Object.keys(this.text || {}).length) return null;
                        var textData = ds.utils.parseMd(i18next.t(["app:".concat(this.literal)]) || "");
                        this.$content = $compile(textData)($scope), $element.append(this.$content)
                    }
                }, {
                    key: "_createLiteral",
                    value: function() {
                        var _this40 = this;
                        this.literal = "md_element_".concat(this.literalId), Object.entries(this.text || {}).forEach(function(_ref10) {
                            var _ref11 = _slicedToArray(_ref10, 2),
                                lang = _ref11[0],
                                message = _ref11[1];
                            i18next.addResource(lang, "app", _this40.literal, message)
                        })
                    }
                }, {
                    key: "_onChangeText",
                    value: function() {
                        this._createLiteral(), this._render()
                    }
                }]), WMd
            }())
        }).$inject = ["$element", "$compile", "$scope", "Base"], angular.module("app").component("wMd", {
            bindings: {
                text: "<",
                literalId: "<"
            },
            controller: controller
        }),
        function() {
            var _require4 = require("ts-utils"),
                getPaths = _require4.getPaths,
                get = _require4.get,
                Signal = _require4.Signal,
                tsApiValidator = require("ts-api-validator"),
                _require5 = require("ramda"),
                splitEvery = _require5.splitEvery,
                pipe = _require5.pipe,
                path = _require5.path,
                ifElse = _require5.ifElse,
                concat = _require5.concat,
                defaultTo = _require5.defaultTo,
                identity = _require5.identity,
                isNil = _require5.isNil,
                _require6 = require("@waves/waves-browser-bus"),
                WindowAdapter = _require6.WindowAdapter,
                Bus = _require6.Bus,
                _require7 = require("@waves/waves-transactions"),
                libs = _require7.libs,
                serializeCustomData = _require7.serializeCustomData,
                _libs$crypto = libs.crypto,
                base58Decode = _libs$crypto.base58Decode,
                base58Encode = _libs$crypto.base58Encode,
                stringToBytes = _libs$crypto.stringToBytes,
                bytesToString = _libs$crypto.bytesToString,
                ds = require("data-service"),
                SIGN_TYPE = require("@waves/signature-adapter").SIGN_TYPE,
                Money = require("@waves/data-entities").Money,
                STATUS_LIST = require("@waves/oracle-data").STATUS_LIST,
                BigNumber = require("@waves/bignumber").BigNumber,
                _dayjs = require("dayjs"),
                GOOD_COLORS_LIST = ["#39a12c", "#6a737b", "#e49616", "#008ca7", "#ff5b38", "#ff6a00", "#c74124", "#00a78e", "#b01e53", "#e0c61b", "#5a81ea", "#72b7d2", "#a5b5c3", "#81c926", "#86a3bd", "#c1d82f", "#5c84a8", "#267e1b", "#fbb034", "#ff846a", "#47c1ff", "#00a0af", "#85d7c6", "#8a7967", "#26c1c9", "#72d28b", "#5B1909", "#264764", "#270774", "#8763DE", "#F04085", "#1E6AFD", "#FF1E43", "#D3002D", "#967400", "#264163"],
                INTERVAL_PRESETS = {
                    "1m": 6e4,
                    "5m": 3e5,
                    "15m": 9e5,
                    "30m": 18e5,
                    "1h": 36e5,
                    "2h": 72e5,
                    "3h": 108e5,
                    "4h": 144e5,
                    "6h": 216e5,
                    "12h": 432e5,
                    "1d": 864e5,
                    "1w": 6048e5,
                    "1M": 26784e5
                },
                INTERVAL_MAP = {
                    1: {
                        interval: INTERVAL_PRESETS["1m"],
                        intervalName: "1m",
                        converter: identity
                    },
                    5: {
                        interval: INTERVAL_PRESETS["5m"],
                        intervalName: "5m",
                        converter: identity
                    },
                    15: {
                        interval: INTERVAL_PRESETS["15m"],
                        intervalName: "15m",
                        converter: identity
                    },
                    30: {
                        interval: INTERVAL_PRESETS["30m"],
                        intervalName: "30m",
                        converter: identity
                    },
                    60: {
                        interval: INTERVAL_PRESETS["1h"],
                        intervalName: "1h",
                        converter: identity
                    },
                    120: {
                        interval: INTERVAL_PRESETS["2h"],
                        intervalName: "2h",
                        converter: identity
                    },
                    180: {
                        interval: INTERVAL_PRESETS["3h"],
                        intervalName: "3h",
                        converter: identity
                    },
                    240: {
                        interval: INTERVAL_PRESETS["4h"],
                        intervalName: "4h",
                        converter: identity
                    },
                    360: {
                        interval: INTERVAL_PRESETS["6h"],
                        intervalName: "6h",
                        converter: identity
                    },
                    720: {
                        interval: INTERVAL_PRESETS["12h"],
                        intervalName: "12h",
                        converter: identity
                    },
                    D: {
                        interval: INTERVAL_PRESETS["1d"],
                        intervalName: "1d",
                        converter: identity
                    },
                    W: {
                        interval: INTERVAL_PRESETS["1w"],
                        intervalName: "1w",
                        converter: identity
                    },
                    M: {
                        interval: INTERVAL_PRESETS["1M"],
                        intervalName: "1M",
                        converter: identity
                    }
                },
                IMPORT_PRIORITY_MAP = {
                    seed: 0,
                    key: 0,
                    wavesKeeper: 1,
                    ledger: 2
                },
                BigNumberPart = function() {
                    function BigNumberPart() {
                        return _classCallCheck(this, BigNumberPart), _possibleConstructorReturn(this, _getPrototypeOf(BigNumberPart).apply(this, arguments))
                    }
                    return _inherits(BigNumberPart, tsApiValidator.BasePart), _createClass(BigNumberPart, [{
                        key: "getValue",
                        value: function(data) {
                            switch (_typeof(data)) {
                                case "string":
                                case "number":
                                    return new BigNumber(data);
                                default:
                                    return null
                            }
                        }
                    }]), BigNumberPart
                }(),
                factory = function($q, $injector) {
                    var base58ToBytes = base58Decode,
                        bytesToBase58 = base58Encode,
                        utils = {
                            apiValidatorParts: {
                                BigNumberPart: BigNumberPart
                            },
                            getAssetLogoBackground: function(assetId) {
                                var sum = assetId.split("").map(function(_char2) {
                                    return _char2.charCodeAt(0)
                                }).reduce(function(acc, code) {
                                    return acc + code
                                }, 0);
                                return GOOD_COLORS_LIST[sum % GOOD_COLORS_LIST.length]
                            },
                            getImportPriorityMap: function() {
                                return IMPORT_PRIORITY_MAP
                            },
                            base58ToBytes: pipe(defaultTo(""), base58ToBytes),
                            base58ToString: pipe(defaultTo(""), base58ToBytes, bytesToString),
                            stringToBytes: pipe(defaultTo(""), stringToBytes),
                            stringToBase58: pipe(defaultTo(""), String, stringToBytes, bytesToBase58),
                            bytesToBase58: pipe(defaultTo(new Uint8Array([])), bytesToBase58),
                            bytesToString: pipe(defaultTo(new Uint8Array([])), bytesToString),
                            bytesToSafeString: ifElse(pipe(identity, bytesToString, isNil), pipe(identity, bytesToBase58, concat("base58:")), pipe(identity, bytesToString)),
                            removeUrlProtocol: function(url) {
                                return url.replace(/.+?(:\/\/)/, "")
                            },
                            getUrlForRoute: function(url) {
                                url = decodeURI(url || location.href);
                                return pipe(utils.removeUrlProtocol, function(url) {
                                    return url.includes("#") ? url.slice(url.indexOf("#")).replace("#", "/") : ""
                                })(url)
                            },
                            getRouterParams: function(url) {
                                var Router = $injector.get("Router"),
                                    router = new Router;
                                return Object.keys(Router.ROUTES).forEach(function(name) {
                                    var handler = function(name) {
                                        return function() {
                                            var params = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Object.create(null),
                                                search = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Object.create(null),
                                                url = Router.ROUTES[name];
                                            return {
                                                name: name,
                                                url: url,
                                                data: _objectSpread({}, params, {}, search)
                                            }
                                        }
                                    }(name);
                                    router.registerRoute(Router.ROUTES[name], handler)
                                }), router.apply(url)
                            },
                            createQS: function(obj) {
                                var createKeyValue = function(key, v) {
                                        return "".concat(key, "=").concat(function(v) {
                                            switch (!0) {
                                                case v instanceof Date:
                                                    return v.getTime();
                                                default:
                                                    return encodeURIComponent(v)
                                            }
                                        }(v))
                                    },
                                    qs = Object.entries(obj).filter(function(_ref12) {
                                        var _ref13 = _slicedToArray(_ref12, 2);
                                        _ref13[0];
                                        return void 0 !== _ref13[1]
                                    }).map(function(_ref14) {
                                        var _ref15 = _slicedToArray(_ref14, 2),
                                            key = _ref15[0],
                                            value = _ref15[1];
                                        return Array.isArray(value) ? function(key, values) {
                                            return values.map(function(v) {
                                                return createKeyValue("".concat(key, "[]"), v)
                                            }).join("&")
                                        }(key, value) : createKeyValue(key, value)
                                    }).join("&");
                                return "" === qs ? qs : "?".concat(qs)
                            },
                            observe: function(target, keys, options) {
                                return function(target, keys, options) {
                                    var observer = function(target) {
                                        if (!target.__) {
                                            var observer = Object.create(null);
                                            Object.defineProperty(target, "__", {
                                                writable: !1,
                                                configurable: !1,
                                                enumerable: !1,
                                                value: observer
                                            })
                                        }
                                        return target.__
                                    }(target);
                                    return options = options || Object.create(null), utils.toArray(keys).forEach(function(key) {
                                            if (observer[key]) return null;
                                            var item = Object.create(null);
                                            item.signal = new Signal, item.timer = null, item.value = target[key];
                                            var originalDescriptor = function(target, key) {
                                                var descriptor = Object.getOwnPropertyDescriptor(target, key);
                                                if (descriptor) return descriptor;
                                                if (target.constructor && target.constructor !== Object.constructor && target.constructor.prototype) return Object.getOwnPropertyDescriptor(target.constructor.prototype, key);
                                                return null
                                            }(target, key);
                                            if (observer[key] = item, originalDescriptor && originalDescriptor.get) {
                                                var descriptor = {
                                                    enumerable: originalDescriptor.enumerable,
                                                    get: originalDescriptor.get
                                                };
                                                originalDescriptor.set ? descriptor.set = function(value) {
                                                    var prev = originalDescriptor.get.call(target);
                                                    isNotEqualValue(prev, value) && (originalDescriptor.set.call(target, value), observer[key].signal.dispatch({
                                                        value: value,
                                                        prev: prev
                                                    }))
                                                } : descriptor.set = function() {
                                                    throw new Error("Original descriptor has't set property!")
                                                }, Object.defineProperty(target, key, descriptor)
                                            } else Object.defineProperty(target, key, {
                                                enumerable: !0,
                                                get: function() {
                                                    return observer[key].value
                                                },
                                                set: function(value) {
                                                    value = options.set ? options.set(value) : value;
                                                    var prev = observer[key].value;
                                                    isNotEqualValue(prev, value) && (observer[key].value = value, observer[key].signal.dispatch({
                                                        value: value,
                                                        prev: prev
                                                    }))
                                                }
                                            })
                                        }),
                                        function(observer, keys) {
                                            {
                                                if (Array.isArray(keys)) {
                                                    var event = keys.sort(utils.comparators.asc).join(",");
                                                    return observer.__events || (observer.__events = Object.create(null)), observer.__events[event] || (observer.__events[event] = new Signal, keys.forEach(function(key) {
                                                        observer[key].signal.on(function() {
                                                            observer.__events[event].dispatch()
                                                        })
                                                    })), observer.__events[event]
                                                }
                                                return observer[keys].signal
                                            }
                                        }(observer, keys)
                                }(target, keys, options)
                            },
                            getPublicKeysFromScript: function(script) {
                                return (script.match(/ByteVector\(\d+\sbytes,\s(.[^)]+)/g) || []).map(function(res) {
                                    return res.replace(/ByteVector\(\d+\sbytes,\s0x/, "")
                                }).map(function(key) {
                                    return splitEvery(2, key).map(function(byte16) {
                                        return parseInt(byte16, 16)
                                    })
                                }).map(base58Encode)
                            },
                            debounce: function(callback, timeout) {
                                var control = {
                                    queued: !1,
                                    args: null
                                };
                                return function() {
                                    for (var _this41 = this, _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) args[_key5] = arguments[_key5];
                                    control.args = args, control.queued || setTimeout(function() {
                                        control.queued = !1, callback.call.apply(callback, [_this41].concat(_toConsumableArray(control.args)))
                                    }, timeout), control.queued = !0
                                }
                            },
                            timeoutPromise: function(promise, timeout) {
                                var timer, timeoutPromise = new Promise(function(_, reject) {
                                    timer = setTimeout(function() {
                                        reject(new Error("Timeout error!"))
                                    }, timeout)
                                });
                                return promise.finally(function() {
                                    clearTimeout(timer)
                                }), Promise.race([promise, timeoutPromise])
                            },
                            parseElectronUrl: function(url) {
                                var _url$split2 = _slicedToArray(url.split("#"), 2),
                                    pathAndSearch = _url$split2[0],
                                    hash = _url$split2[1],
                                    _pathAndSearch$split2 = _slicedToArray(pathAndSearch.split("?"), 2),
                                    path = _pathAndSearch$split2[0],
                                    search = _pathAndSearch$split2[1];
                                return {
                                    path: path,
                                    search: "?".concat(search || ""),
                                    hash: "#".concat(hash || "")
                                }
                            },
                            redirect: function(url) {
                                WavesApp.isDesktop() ? window.openInBrowser(url) : location.href = url
                            },
                            parseSearchParams: function(argument_0) {
                                var search = 0 < arguments.length && void 0 !== argument_0 ? argument_0 : "",
                                    hashes = search.slice(search.indexOf("?") + 1).split("&").filter(Boolean),
                                    params = Object.create(null),
                                    normalizeValue = function(value) {
                                        if ("null" === value) return null;
                                        var num = Number(value);
                                        return String(num) === value ? num : value
                                    };
                                return hashes.forEach(function(hash) {
                                    var _hash$split2 = _slicedToArray(hash.split("="), 2),
                                        key = _hash$split2[0],
                                        val = _hash$split2[1];
                                    key.includes("[]") ? function(name, value) {
                                        var key = name.replace("[]", "");
                                        params[key] || (params[key] = []), params[key].push(normalizeValue(decodeURIComponent(value)))
                                    }(key, val) : function(name, value) {
                                        params[name] = null == value || normalizeValue(decodeURIComponent(value))
                                    }(key, val)
                                }), params
                            },
                            debounceRequestAnimationFrame: function(callback) {
                                var control = {
                                    queued: !1,
                                    args: null
                                };
                                return function() {
                                    for (var _this42 = this, _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) args[_key6] = arguments[_key6];
                                    control.args = args, control.queued || requestAnimationFrame(function() {
                                        control.queued = !1, callback.call.apply(callback, [_this42].concat(_toConsumableArray(control.args)))
                                    }), control.queued = !0
                                }
                            },
                            animate: function($element, properties, options) {
                                return new Promise(function(resolve) {
                                    if ((options = options || Object.create(null)).complete) {
                                        var origin = options.complete;
                                        options.complete = function() {
                                            resolve(), origin()
                                        }
                                    } else options.complete = resolve;
                                    $element.stop(!0, !0).animate(properties, options)
                                })
                            },
                            animateTransform: function($element, to) {
                                var prefixis = ["", "-ms-", "-moz-", "-o-", "-webkit-"];
                                return $q(function(resolve) {
                                    var from_x = 0,
                                        from_y = 0;
                                    $element.stop(!0, !0).animate({}, {
                                        progress: function(tween, _progress) {
                                            var x = (to.x - from_x) * _progress + from_x,
                                                y = (to.y - from_y) * _progress + from_y;
                                            prefixis.forEach(function(prefix) {
                                                $element.css("".concat(prefix, "transform"), "translate(".concat(x, "px, ").concat(y, "px)"))
                                            })
                                        },
                                        complete: resolve,
                                        duration: 300
                                    })
                                })
                            },
                            animateByClass: function($element, className, state, stopProperty) {
                                return $q(function(resolve) {
                                    var element = $element.get(0),
                                        eventList = ["transitionend", "oTransitionEnd", "otransitionend", "webkitTransitionEnd"];
                                    if (element.classList.contains(className) === state) return resolve(), null;

                                    function handler(e) {
                                        e.currentTarget !== element || stopProperty && e.propertyName !== stopProperty || (resolve(), eventList.forEach(function(eventName) {
                                            element.removeEventListener(eventName, handler, !1)
                                        }))
                                    }
                                    eventList.forEach(function(eventName) {
                                        element.addEventListener(eventName, handler, !1)
                                    }), $element.toggleClass(className, state)
                                })
                            },
                            safeApply: function($scope) {
                                try {
                                    var phase = $scope.$root && $scope.$root.$$phase;
                                    "$apply" !== phase && "$digest" !== phase && $scope.$apply()
                                } catch (e) {
                                    return null
                                }
                            },
                            safeDigest: function($scope) {
                                try {
                                    var phase = $scope.$root && $scope.$root.$$phase;
                                    "$apply" !== phase && "$digest" !== phase && $scope.$digest()
                                } catch (e) {
                                    return null
                                }
                            },
                            postDigest: function($scope) {
                                return new Promise(function(resolve) {
                                    $scope.$parent.$$postDigest(resolve)
                                })
                            },
                            when: function(data) {
                                return this.isPromise(data) ? data : Promise.resolve(data)
                            },
                            isPromise: function(data) {
                                return data && data.then && "function" == typeof data.then
                            },
                            whenAll: function(promises) {
                                return utils.when(Promise.all(promises))
                            },
                            getMoneyWithoutFee: function(money, fee) {
                                return fee && money.asset.id === fee.asset.id ? money.sub(fee) : money
                            },
                            isEqual: function(a, b) {
                                var typeA = _typeof(a);
                                if (typeA !== _typeof(b)) return !1;
                                if ("object" !== typeA) return a === b;
                                if (a instanceof Money && b instanceof Money) return a.asset.id === b.asset.id && a.eq(b);
                                if (a instanceof BigNumber && b instanceof BigNumber) return a.eq(b);
                                var pathsA = getPaths(a),
                                    pathsB = getPaths(b);
                                return pathsA.length === pathsB.length && pathsA.every(function(path, index) {
                                    return get(a, path) === get(b, path) && String(path) === String(pathsB[index])
                                })
                            },
                            bind: function(target, keys) {
                                if (null == keys)
                                    if (0 === (keys = Object.keys(target).filter(function(name) {
                                            return "function" == typeof target[name]
                                        })).length) {
                                        var proto = Object.getPrototypeOf(target);
                                        keys = Object.getOwnPropertyNames(proto).filter(function(method) {
                                            return "_" !== method.charAt(0) && "constructor" !== method
                                        })
                                    } else keys = keys.filter(function(key) {
                                        return "function" == typeof target[key]
                                    });
                                else keys = Array.isArray(keys) ? keys : [keys];
                                return keys.forEach(function(key) {
                                    target[key] = target[key].bind(target)
                                }), target
                            },
                            resolve: function(promiseLike) {
                                var getCallback = function(state, resolve) {
                                    return function(data) {
                                        return resolve({
                                            state: state,
                                            data: data
                                        })
                                    }
                                };
                                return new Promise(function(resolve) {
                                    promiseLike.then(getCallback(!0, resolve), getCallback(!1, resolve))
                                })
                            },
                            dayjs: function(date, pattern) {
                                return _dayjs(date, pattern)
                            },
                            loadImage: function(url) {
                                return new Promise(function(resolve, reject) {
                                    var img = new Image;
                                    img.onload = resolve, img.onerror = reject, img.src = url
                                })
                            },
                            getNiceNumber: function(num, precision) {
                                switch (_typeof(num)) {
                                    case "string":
                                    case "number":
                                        return new BigNumber(num, 10).toFormat(precision && Number(precision));
                                    case "object":
                                        if (null != num) return num.toFormat(precision && Number(precision));
                                        throw new Error("Wrong format!");
                                    default:
                                        throw new Error("Wrong format!")
                                }
                            },
                            parseNiceNumber: function(data) {
                                if (data instanceof BigNumber) return data;
                                var num = new BigNumber(String(data).replace(",", "").replace(/\s/g, "") || 0, 10);
                                return num.isNaN() ? new BigNumber(0) : num
                            },
                            loadOrTimeout: function(target, timeout) {
                                return new Promise(function(resolve, reject) {
                                    target.addEventListener("load", resolve, !1), target.addEventListener("error", reject, !1), setTimeout(function() {
                                        reject(new Error("Timeout limit error!"))
                                    }, timeout)
                                })
                            },
                            importUsersByWindow: function(win, origin, timeout) {
                                return new Promise(function(resolve, reject) {
                                    WindowAdapter.createSimpleWindowAdapter(win, {
                                        origins: [origin]
                                    }).then(function(adapter) {
                                        var bus = new Bus(adapter);
                                        bus.once("ready", function() {
                                            bus.request("getLocalStorageData", null, timeout).then(utils.onExportUsers(origin, resolve)).catch(reject)
                                        }), bus.request("getLocalStorageData", null, timeout).then(utils.onExportUsers(origin, resolve)).catch(reject)
                                    })
                                })
                            },
                            importAccountByIframe: function(origin, timeout) {
                                var iframe = document.createElement("iframe"),
                                    remove = function() {
                                        iframe.parentNode && document.body.removeChild(iframe)
                                    };
                                iframe.src = "".concat(origin, "/export.html");
                                var result = utils.loadOrTimeout(iframe, timeout).then(function() {
                                    return utils.importUsersByWindow(iframe, origin, timeout)
                                }).then(function(data) {
                                    return remove(), Promise.resolve(data)
                                }).catch(function(error) {
                                    return remove(), Promise.reject(error)
                                });
                                return iframe.style.opacity = "0", iframe.style.position = "absolute", iframe.style.left = "0", iframe.style.top = "0", document.body.appendChild(iframe), result
                            },
                            importAccountByTab: function(origin, timeout) {
                                var left = "left=".concat(Math.floor(screen.width - 50)),
                                    right = "top=".concat(Math.floor(screen.height - 50)),
                                    closed = !1,
                                    win = window.open("".concat(origin, "/export.html"), "export", "".concat("width=100", ",").concat("height=100", ",").concat(left, ",").concat(top, ",").concat(right, ",no,no,no,no,no,no")),
                                    close = function(d) {
                                        return closed || (win.close(), closed = !0), d
                                    };
                                return utils.importUsersByWindow(win, origin, timeout).then(close).catch(function(e) {
                                    return close(), Promise.reject(e)
                                })
                            },
                            onExportUsers: function(origin, resolve) {
                                return function(response) {
                                    response || resolve([]), resolve(response)
                                }
                            },
                            openDex: function(asset1, asset2) {
                                var $state = $injector.get("$state"),
                                    defaultAssets = ds.utils.BaseAssetService.getInstance().getDefaultAssetsHashId();
                                if (asset1 && asset2) return asset1 === asset2 ? utils.openDex(asset1) : (setTimeout(function() {
                                    $state.go("trade", {
                                        tradingPair: "".concat(asset1, "_").concat(asset2)
                                    })
                                }, 50), null);
                                asset2 = asset1 === defaultAssets.WAVES ? defaultAssets.BTC : defaultAssets.WAVES, setTimeout(function() {
                                    $state.go("trade", {
                                        tradingPair: "".concat(asset1, "_").concat(asset2)
                                    })
                                }, 50)
                            },
                            getValidCandleOptions: function(from, to, argument_2) {
                                var interval = 2 < arguments.length && void 0 !== argument_2 ? argument_2 : 60;
                                from = 6e4 * Math.floor(from / 6e4), to = 6e4 * Math.ceil(to / 6e4);
                                var config = INTERVAL_MAP[interval],
                                    options = {
                                        timeStart: from instanceof Date ? from.getTime() : from,
                                        timeEnd: to instanceof Date ? to.getTime() : to,
                                        interval: interval
                                    };

                                function getTimeEnd(timeStart) {
                                    return Math.min(options.timeEnd, timeStart + 1440 * config.interval)
                                }
                                options.timeEnd - options.timeStart < config.interval && (options.timeStart = options.timeEnd - config.interval);
                                var intervals = [],
                                    newInterval = {
                                        timeStart: options.timeStart,
                                        timeEnd: getTimeEnd(options.timeStart),
                                        interval: config.intervalName
                                    };
                                for (intervals.push(_objectSpread({}, newInterval)); newInterval.timeEnd < options.timeEnd;) newInterval.timeStart = newInterval.timeEnd, newInterval.timeEnd = getTimeEnd(newInterval.timeStart), intervals.push(_objectSpread({}, newInterval));
                                return {
                                    options: intervals,
                                    config: config
                                }
                            },
                            getMaxInterval: function(from, to, argument_2) {
                                var amount = 2 < arguments.length && void 0 !== argument_2 ? argument_2 : 100,
                                    delta = to - from,
                                    findDif = function(interval) {
                                        return Math.abs(delta / interval - amount)
                                    },
                                    intObj = Object.values(INTERVAL_MAP).reduce(function(prev, cur) {
                                        return findDif(cur.interval) < findDif(prev.interval) ? cur : prev
                                    });
                                return Object.keys(INTERVAL_MAP).find(function(key) {
                                    return INTERVAL_MAP[key].interval === intObj.interval
                                })
                            },
                            concatCandles: function(_ref16) {
                                var fromOld, toOld, fromNew, toNew, candleConfig, to = _ref16.to,
                                    from = _ref16.from,
                                    amountId = _ref16.amountId,
                                    priceId = _ref16.priceId,
                                    dayX = _ref16.dayX,
                                    interval = _ref16.interval,
                                    oldMatcher = _ref16.oldMatcher,
                                    currentMatcher = _ref16.currentMatcher,
                                    promisesOld = [],
                                    promises = [];
                                if (dayX < to && from < dayX) {
                                    fromOld = from, fromNew = toOld = dayX, toNew = to;
                                    var _utils$getValidCandle = utils.getValidCandleOptions(fromOld, toOld, interval),
                                        optionsForOld = _utils$getValidCandle.options;
                                    candleConfig = _utils$getValidCandle.config, promisesOld = optionsForOld.map(function(option) {
                                        return ds.api.candles.getCandles(amountId, priceId, _objectSpread({
                                            matcher: oldMatcher
                                        }, option))
                                    })
                                } else if (to <= dayX) {
                                    fromOld = from, toOld = to, toNew = fromNew = null;
                                    var _utils$getValidCandle2 = utils.getValidCandleOptions(fromOld, toOld, interval),
                                        _optionsForOld = _utils$getValidCandle2.options;
                                    candleConfig = _utils$getValidCandle2.config, promisesOld = _optionsForOld.map(function(option) {
                                        return ds.api.candles.getCandles(amountId, priceId, _objectSpread({
                                            matcher: oldMatcher
                                        }, option))
                                    })
                                } else fromNew = from, toNew = to;
                                if (null != fromNew && null != toNew) {
                                    var _utils$getValidCandle3 = utils.getValidCandleOptions(fromNew, toNew, interval),
                                        options = _utils$getValidCandle3.options;
                                    candleConfig = _utils$getValidCandle3.config, promises = options.map(function(option) {
                                        return ds.api.candles.getCandles(amountId, priceId, _objectSpread({
                                            matcher: currentMatcher
                                        }, option))
                                    })
                                }
                                return {
                                    promisesWithCandles: promisesOld.concat(promises),
                                    candleConfig: candleConfig
                                }
                            },
                            getNiceNumberTemplate: function(num, precision, shortMode) {
                                var bigNum = this.parseNiceNumber(num),
                                    formatted = this.getNiceNumber(bigNum, precision),
                                    minValue = "number" == typeof shortMode ? shortMode : 1e4;
                                if (("number" == typeof shortMode || shortMode) && bigNum.gte(minValue)) return this.getNiceBigNumberTemplate(bigNum);
                                var separatorDecimal = WavesApp.getLocaleData().separators.decimal,
                                    _formatted$split2 = _slicedToArray(formatted.split(separatorDecimal), 2),
                                    _int = _formatted$split2[0],
                                    decimal = _formatted$split2[1];
                                if (decimal) {
                                    var decimalTpl = function(decimal, separator) {
                                        var mute = [];
                                        decimal.split("").reverse().some(function(_char3) {
                                            return "0" !== _char3 || (mute.push(0), !1)
                                        });
                                        var end = decimal.length - mute.length;
                                        if (end) return "".concat(separator).concat(decimal.substr(0, end), "<span class='decimal-muted'>").concat(mute.join(""), "</span>");
                                        return "<span class='decimal-muted'>".concat(separator).concat(mute.join(""), "</span>")
                                    }(decimal, separatorDecimal);
                                    return "<span class='int'>".concat(_int, "</span>") + "<span class='decimal'>".concat(decimalTpl, "</span>")
                                }
                                return "<span class='int'>".concat(_int, "</span>")
                            },
                            getNiceBigNumberTemplate: function(bigNum) {
                                var stringNum, postfix, i18n = $injector.get("i18n");
                                return postfix = bigNum.gte(1e6) ? (stringNum = bigNum.div(1e6).toFormat(1), i18n.translate("number.short.million")) : (stringNum = bigNum.div(1e3).toFormat(1), i18n.translate("number.short.thousand")), "".concat(stringNum).concat(postfix)
                            },
                            getDataFromOracles: function(assetId) {
                                $injector.get("user");
                                var asset = ds.utils.BaseAssetService.getInstance().getDefaultAssetsHash()[assetId] || {},
                                    dataOracle = ds.dataManager.getOraclesAssetData(assetId),
                                    isGatewaySoon = 4 === path(["status"], dataOracle) || asset.isGatewaySoon,
                                    isGateway = isGatewaySoon && 3 === Number(path(["status"], dataOracle)) || asset.isGateway,
                                    isTokenomica = path(["status"], dataOracle) === STATUS_LIST.VERIFIED && "Tokenomica" === path(["provider"], dataOracle),
                                    isVerified = path(["status"], dataOracle) === STATUS_LIST.VERIFIED && "Tokenomica" !== path(["provider"], dataOracle) || asset.isVerified,
                                    ticker = path(["ticker"], dataOracle),
                                    link = path(["link"], dataOracle),
                                    email = path(["email"], dataOracle),
                                    logo = path(["logo"], dataOracle),
                                    provider = isVerified || isTokenomica && path(["provider"], dataOracle) || asset.provider || null,
                                    description = path(["description", "en"], dataOracle),
                                    isStable = asset.isStable,
                                    isPrediction = asset.isPrediction;
                                return _objectSpread({
                                    isVerified: isVerified,
                                    isStable: isStable,
                                    isGateway: isGateway,
                                    isTokenomica: isTokenomica,
                                    isGatewaySoon: isGatewaySoon,
                                    isPrediction: isPrediction,
                                    isInvestment: asset.isInvestment,
                                    isDefi: asset.isDefi,
                                    hasLabel: isVerified || isGateway || isTokenomica || isGatewaySoon || isStable || isPrediction,
                                    ticker: ticker,
                                    link: link,
                                    email: email,
                                    provider: provider,
                                    description: description,
                                    logo: logo,
                                    canRate: null == asset.canRate || asset.canRate
                                }, asset)
                            },
                            toArray: function(some) {
                                return Array.isArray(some) ? some : [some]
                            },
                            toHash: function(list, key) {
                                return list.reduce(function(result, item) {
                                    return result[get(item, key)] = item, result
                                }, Object.create(null))
                            },
                            groupMoney: function(moneyList) {
                                return moneyList.filter(Boolean).reduce(function(result, money) {
                                    return result[money.asset.id] ? result[money.asset.id] = result[money.asset.id].add(money) : result[money.asset.id] = money, result
                                }, Object.create(null))
                            },
                            wait: function(time) {
                                return $q(function(resolve) {
                                    time ? setTimeout(resolve, time) : requestAnimationFrame(resolve)
                                })
                            },
                            addUniqueToArray: function(list, array) {
                                list.forEach(function(item) {
                                    -1 === array.indexOf(item) && array.push(item)
                                })
                            },
                            parseAngularParam: function(attribute, $scope, destroy) {
                                var exp = function(value) {
                                        if (!value) return !1;
                                        var openIndex = value.indexOf("{{"),
                                            closeIndex = value.indexOf("}}");
                                        return -1 !== openIndex && -1 !== closeIndex && openIndex < closeIndex
                                    }(attribute) && attribute,
                                    change = new Signal,
                                    result = utils.liteObject({
                                        attribute: attribute,
                                        exp: exp,
                                        change: change,
                                        value: null
                                    });
                                if (exp)
                                    if (-1 !== exp.indexOf("::")) result.value = $scope.$eval(exp.replace("::", "").replace(/{{(.*)?(}})/, "$1"));
                                    else {
                                        var stop = $scope.$watch(exp, function(value) {
                                            result.value = value, change.dispatch(value)
                                        });
                                        destroy.once(function() {
                                            stop()
                                        })
                                    }
                                else result.value = attribute;
                                return result
                            },
                            liteObject: function(props) {
                                var result = Object.create(null);
                                return Object.assign(result, props), result
                            },
                            filterOrderBookByCharCropRate: function(data) {
                                var _data$cropRange = data.cropRange,
                                    min = _data$cropRange.min,
                                    max = _data$cropRange.max;
                                return min && max ? {
                                    asks: data.asks.filter(function(ask) {
                                        return ask.price.lte(max)
                                    }),
                                    bids: data.bids.filter(function(bid) {
                                        return bid.price.gte(min)
                                    })
                                } : {
                                    bids: [],
                                    asks: []
                                }
                            },
                            cache: function(storage, fetch, toId, time, fromList) {
                                return function(data) {
                                    var promise, list = utils.toArray(data),
                                        toRequest = [],
                                        promiseList = [];
                                    return list.forEach(function(item) {
                                        var id = toId(item);
                                        storage[id] ? promiseList.push(storage[id].then(fromList(item))) : toRequest.push(item)
                                    }), toRequest.length ? (promise = fetch(toRequest), toRequest.forEach(function(item) {
                                        var id = toId(item);
                                        storage[id] = promise, setTimeout(function() {
                                            delete storage[id]
                                        }, time)
                                    }), Promise.all([promise].concat(promiseList)).then(function() {
                                        for (var _len7 = arguments.length, list = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) list[_key7] = arguments[_key7];
                                        return list.reduce(function(acc, i) {
                                            return acc.concat.apply(acc, _toConsumableArray(i))
                                        }, [])
                                    })) : Promise.all(promiseList)
                                }
                            },
                            parseError: function(error) {
                                try {
                                    return "string" == typeof error ? JSON.parse(error).message : error
                                } catch (e) {
                                    return error
                                }
                            },
                            getOrderBookRangeByCropRate: function(data) {
                                if (!(data.asks && data.asks.length && data.bids && data.bids.length)) return {
                                    min: null,
                                    max: null
                                };
                                var spreadPrice = new BigNumber(data.asks[0].price).add(data.bids[0].price).div(2),
                                    delta = spreadPrice.mul(data.chartCropRate).div(2),
                                    max = spreadPrice.add(delta);
                                return {
                                    min: BigNumber.max(0, spreadPrice.sub(delta)),
                                    max: max
                                }
                            },
                            chainCall: function(functionList) {
                                return new Promise(function(resolve, reject) {
                                    var callList = functionList.slice().reverse();
                                    ! function apply() {
                                        if (callList.length) {
                                            var result = callList.pop()();
                                            result && result.then && "function" == typeof result.then ? result.then(apply, reject) : apply()
                                        } else resolve()
                                    }()
                                })
                            },
                            getEventInfo: function(event) {
                                return _objectSpread({}, event, "changedTouches" in event ? {
                                    pageX: event.changedTouches[0].pageX,
                                    pageY: event.changedTouches[0].pageY,
                                    screenX: event.changedTouches[0].screenX,
                                    screenY: event.changedTouches[0].screenY,
                                    clientX: event.changedTouches[0].clientX,
                                    clientY: event.changedTouches[0].clientY
                                } : {
                                    pageX: event.pageX,
                                    pageY: event.pageY,
                                    screenX: event.screenX,
                                    screenY: event.screenY,
                                    clientX: event.clientX,
                                    clientY: event.clientY
                                })
                            },
                            comparators: {
                                asc: function(a, b) {
                                    return null == a ? null == b ? 0 : -1 : null == b ? 1 : b < a ? 1 : a === b ? 0 : -1
                                },
                                desc: function(a, b) {
                                    return null == a ? null == b ? 0 : 1 : null == b ? -1 : b < a ? -1 : a === b ? 0 : 1
                                },
                                bigNumber: {
                                    asc: function(a, b) {
                                        return a.gt(b) ? 1 : a.eq(b) ? 0 : -1
                                    },
                                    desc: function(a, b) {
                                        return a.gt(b) ? -1 : a.eq(b) ? 0 : 1
                                    }
                                },
                                money: {
                                    asc: function(a, b) {
                                        return utils.comparators.bigNumber.asc(a.getTokens(), b.getTokens())
                                    },
                                    desc: function(a, b) {
                                        return utils.comparators.bigNumber.desc(a.getTokens(), b.getTokens())
                                    }
                                },
                                smart: {
                                    asc: function(a, b) {
                                        return a instanceof Money && b instanceof Money ? utils.comparators.money.asc(a, b) : a instanceof BigNumber && b instanceof BigNumber ? utils.comparators.bigNumber.asc(a, b) : utils.comparators.asc(a, b)
                                    },
                                    desc: function(a, b) {
                                        return a instanceof Money && b instanceof Money ? utils.comparators.money.desc(a, b) : a instanceof BigNumber && b instanceof BigNumber ? utils.comparators.bigNumber.desc(a, b) : utils.comparators.desc(a, b)
                                    }
                                },
                                process: function(processor) {
                                    return {
                                        asc: function(a, b) {
                                            return utils.comparators.asc(processor(a), processor(b))
                                        },
                                        desc: function(a, b) {
                                            return utils.comparators.desc(processor(a), processor(b))
                                        },
                                        bigNumber: {
                                            asc: function(a, b) {
                                                return utils.comparators.bigNumber.asc(processor(a), processor(b))
                                            },
                                            desc: function(a, b) {
                                                return utils.comparators.bigNumber.desc(processor(a), processor(b))
                                            }
                                        },
                                        money: {
                                            asc: function(a, b) {
                                                return utils.comparators.money.asc(processor(a), processor(b))
                                            },
                                            desc: function(a, b) {
                                                return utils.comparators.money.desc(processor(a), processor(b))
                                            }
                                        },
                                        smart: {
                                            asc: function(a, b) {
                                                return utils.comparators.smart.asc(processor(a), processor(b))
                                            },
                                            desc: function(a, b) {
                                                return utils.comparators.smart.desc(processor(a), processor(b))
                                            }
                                        }
                                    }
                                }
                            },
                            remapOldClientAccounts: function(account) {
                                return {
                                    name: account.name,
                                    address: account.address,
                                    encryptedSeed: account.cipher,
                                    settings: {
                                        encryptionRounds: 1e3
                                    }
                                }
                            },
                            getSecretToken: function(_ref17) {
                                var senderPublicKey = _ref17.senderPublicKey,
                                    service = _ref17.service,
                                    signature = _ref17.signature,
                                    timestamp = _ref17.timestamp;
                                return fetch("".concat(service, "/oauth/token"), {
                                    method: "POST",
                                    headers: {
                                        Authorization: "Basic ".concat(btoa("test-client:secret")),
                                        "Content-Type": "application/x-www-form-urlencoded",
                                        Accept: "application/json"
                                    },
                                    body: "grant_type=password&username=".concat(senderPublicKey, "&password=").concat(timestamp, ":").concat(signature, "&scope=client")
                                }).then(function(response) {
                                    return response.json()
                                })
                            },
                            getExchangeTotalPrice: function(amount, price) {
                                var amountTokens = amount.getTokens(),
                                    priceTokens = price.getTokens(),
                                    precision = price.asset.precision;
                                return amountTokens.mul(priceTokens).toFormat(precision)
                            },
                            getExchangeFee: function(tx) {
                                return tx.exchangeType === WavesApp.TRANSACTION_TYPES.EXTENDED.EXCHANGE_BUY ? tx.buyMatcherFee : tx.sellMatcherFee
                            },
                            getTransactionTypeName: function(tx) {
                                var user = $injector.get("user");
                                return ds.utils.transactions.getTransactionTypeName(tx, user)
                            },
                            typOfExchange: function(_ref18) {
                                var exchangeType = _ref18.exchangeType;
                                return ds.utils.transactions.typeOfExchange({
                                    exchangeType: exchangeType
                                })
                            },
                            isMyPublicKey: function(publicKey) {
                                var user = $injector.get("user");
                                return ds.utils.transactions.isMyPublicKey(publicKey, user.publicKey)
                            },
                            isMyAddressOrAlias: function(addressOrAlias) {
                                var user = $injector.get("user");
                                return ds.utils.transactions.isMyAddressOrAlias(addressOrAlias, user.address)
                            },
                            isNotEqualValue: isNotEqualValue,
                            checkIsScriptError: function(error) {
                                return 7 == (error >> 8 & 4095)
                            },
                            signInvoke: function(data) {
                                var user = $injector.get("user"),
                                    signableData = {
                                        type: SIGN_TYPE.SCRIPT_INVOCATION,
                                        data: ds.utils.normalizeTxTimestamp(data)
                                    };
                                return utils.createSignable(signableData).then(function(signable) {
                                    return "seed" === user.userType || "privateKey" === user.userType ? signable.addMyProof().then(function() {
                                        return signable
                                    }) : signable.getSignature().then(function() {
                                        return signable
                                    })
                                })
                            },
                            createSignable: function(data) {
                                try {
                                    return Promise.resolve(ds.signature.getSignatureApi().makeSignable(data))
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                            },
                            signToken: function(serviceName, expiration) {
                                var api = ds.signature.getSignatureApi(),
                                    seconds = Math.floor(expiration / 1e3),
                                    code = api.getNetworkByte(),
                                    netByte = "string" == typeof code ? code : String.fromCharCode(code),
                                    data = "".concat(netByte, ":").concat(serviceName, ":").concat(String(seconds)),
                                    bytes = stringToBytes(data),
                                    serializeData = {
                                        version: 1,
                                        binary: libs.crypto.base64Encode(bytes)
                                    },
                                    binary = serializeCustomData(serializeData),
                                    hash = libs.crypto.base58Encode(libs.crypto.blake2b(binary));
                                return utils.signApiToken({
                                    binary: binary,
                                    hash: hash,
                                    sign: function() {
                                        return api.signApiTokenData(serviceName, expiration)
                                    },
                                    expiresIn: seconds
                                })
                            },
                            getApiToken: function(authData) {
                                return ds.utils.ApiTokenService.getInstance().getTokenById(authData && authData.refreshToken, utils.signToken)
                            },
                            signApiToken: function(signData) {
                                return this.deviceSign(signData.sign, "apiToken", _objectSpread({
                                    type: "apiToken"
                                }, signData))
                            },
                            deviceSign: function(signCb, signType, anyData) {
                                var user = $injector.get("user");
                                if ("seed" === user.userType || "privateKey" === user.userType) return signCb();
                                return function signByDeviceLoop() {
                                    return ds.utils.modalManager.openModal("signByDevice", {
                                        signable: signCb,
                                        anyData: anyData
                                    }).catch(function(e) {
                                        return ds.utils.modalManager.openModal("signDeviceError", _objectSpread({
                                            signableType: signType
                                        }, function(user, error) {
                                            return "wavesKeeper" === user.userType && error && 5 === error.code && error.msg.includes("another active account") ? {
                                                error: "sign-user-error",
                                                userType: user.userType
                                            } : "wavesKeeper" === user.userType && error && 3 === error.code ? {
                                                error: "sign-network-error",
                                                userType: user.userType
                                            } : {
                                                error: "sign-error",
                                                userType: user.userType
                                            }
                                        }(user, e))).then(function() {
                                            return signByDeviceLoop()
                                        })
                                    }).catch(function() {
                                        return Promise.reject({
                                            message: "Your sign is not confirmed!"
                                        })
                                    })
                                }()
                            },
                            assetNameWarning: function(name) {
                                var user = $injector.get("user");
                                if (!(name = (name || "").toLowerCase().trim())) return Promise.resolve(!1);
                                if (name && Object.keys(user.tokensName).some(function(item) {
                                        return name === item.toLowerCase()
                                    })) return Promise.resolve(!0);
                                var api = ds.apiUrls.getDataServiceUrl();
                                return ds.fetch("".concat(api, "/v0/assets?search=").concat(encodeURIComponent(name))).then(function(_ref19) {
                                    return _ref19.data.some(function(_ref20) {
                                        var data = _ref20.data;
                                        return (data.name || "").toLowerCase() === name || (data.ticker || "").toLowerCase() === name
                                    })
                                }).catch(function() {
                                    return !1
                                })
                            },
                            isLockedInDex: function(assetId1, argument_1) {
                                var assetId2 = 1 < arguments.length && void 0 !== argument_1 ? argument_1 : null,
                                    lockedAssetsIndDex = ds.utils.BaseAssetService.getInstance().getAssetIdsByTickers(ds.utils.ConfigService.getInstance().getConfig("SETTINGS.DEX.LOCKED_PAIRS") || []);
                                return lockedAssetsIndDex.includes(assetId1) || lockedAssetsIndDex.includes(assetId2)
                            },
                            isLockedInDexSmartAssets: function(amountAsset, priceAsset) {
                                return ds.utils.ConfigService.getInstance().getConfig("SETTINGS.DEX.SMART_ASSETS_LOCKED") && (amountAsset.hasScript || priceAsset.hasScript)
                            },
                            getShortId: function(id) {
                                return 12 < id.length ? "".concat(id.slice(0, 6), "****").concat(id.slice(-6)) : id
                            },
                            downloadFile: function(filename, text) {
                                var pom = document.createElement("a");
                                if (pom.setAttribute("href", "data:text/plain;charset=utf-8,".concat(encodeURIComponent(text))), pom.setAttribute("download", filename), document.createEvent) {
                                    var event = document.createEvent("MouseEvents");
                                    event.initEvent("click", !0, !0), pom.dispatchEvent(event)
                                } else pom.click()
                            },
                            startTimer: function(options, cb, timeout) {
                                var timer, isStop = !1,
                                    getLastTime = function(date) {
                                        var year = date.year,
                                            day = date.day,
                                            month = date.month - 1,
                                            hours = date.hours || 0,
                                            minutes = date.minutes || 0,
                                            seconds = date.seconds || 0,
                                            offset = 6e4 * (new Date).getTimezoneOffset(),
                                            msToday = Date.now(),
                                            msDate = new Date(year, month, day, hours, minutes, seconds).getTime() - offset - 108e5,
                                            delta = msDate - msToday < 0 ? 0 : msDate - msToday,
                                            daysLast = Math.floor(delta / 864e5),
                                            hoursLast = Math.floor(delta / 36e5) % 24,
                                            minuteslast = Math.floor(delta / 6e4) % 60,
                                            secondslast = Math.floor(delta / 1e3) % 60;
                                        return {
                                            days: daysLast,
                                            hours: hoursLast,
                                            minutes: minuteslast,
                                            seconds: secondslast
                                        }
                                    }.bind(null, options),
                                    lastTime = {};
                                return function loop() {
                                        if (!isStop) {
                                            timer && clearTimeout(timer);
                                            var currentTime = getLastTime();
                                            lastTime.minutes === currentTime.minutes && lastTime.seconds === currentTime.seconds || (cb(currentTime), lastTime = currentTime), 0 < currentTime.seconds + currentTime.hours + currentTime.minutes + currentTime.days && (timer = setTimeout(loop, timeout))
                                        }
                                    }(),
                                    function() {
                                        isStop = !0
                                    }
                            },
                            filterPinnedAssets: function(assetsList) {
                                return assetsList.filter(function(assetId) {
                                    return "string" == typeof assetId && 0 < assetId.length && !!assetId && !assetId.includes(" ")
                                })
                            }
                        };

                    function isNotEqualValue(oldValue, newValue) {
                        return _typeof(oldValue) !== _typeof(newValue) || (oldValue instanceof Money && newValue instanceof Money ? oldValue.asset.id !== newValue.asset.id || oldValue.toTokens() !== newValue.toTokens() : oldValue instanceof BigNumber && newValue instanceof BigNumber ? !oldValue.eq(newValue) : Array.isArray(oldValue) && Array.isArray(newValue) ? oldValue.length !== newValue.length || oldValue.some(function(item, i) {
                            return isNotEqualValue(item, newValue[i])
                        }) : oldValue !== newValue)
                    }
                    return utils
                };
            factory.$inject = ["$q", "$injector"], angular.module("app.utils").factory("utils", factory)
        }(),
        function() {
            window.transitLog = window.transitLog || [], window.transitLog.toJSONData = function() {
                return JSON.stringify(window.transitLog, 4, null, 4)
            }, window.transitLog.copy = function() {
                return copy(window.transitLog.toJSONData())
            };
            var Money = require("@waves/data-entities").Money,
                locationHref = location.href,
                i18next = require("i18next"),
                ds = require("data-service"),
                _require13 = require("ramda"),
                i18nextReady = (_require13.propEq, _require13.where, _require13.gte, _require13.lte, _require13.equals, _require13.__, new Promise(function(resolve) {
                    if (i18next.isInitialized) resolve(i18next.options);
                    else {
                        var interval = setInterval(function() {
                                i18next.isInitialized && (resolve(i18next.options), i18next.off("initialized", handler))
                            }, 1e3),
                            handler = function handler(data) {
                                resolve(data), i18next.off("initialized", handler), clearInterval(interval)
                            };
                        clearInterval(interval), i18next.on("initialized", handler)
                    }
                })),
                PROGRESS_MAP = {
                    RUN_SCRIPT: 10,
                    APP_RUN: 40,
                    LOCALIZE_READY: 50
                };
            if (100 !== Object.values(PROGRESS_MAP).reduce(function(result, item) {
                    return result + item
                }, 0)) throw new Error("Configure preloader progress!");
            var LOADER = {
                    _current: 0,
                    _root: document.querySelector(".app-loader"),
                    _element: document.querySelector(".app-loader .progress"),
                    addProgress: function(delta) {
                        this._current += delta, this._current = Math.min(this._current, 100), this._element.style.width = "".concat(this._current, "%"), WavesApp.progress = this._current
                    },
                    stop: function() {
                        var _this43 = this;
                        return new Promise(function(resolve) {
                            var loader = _this43._root,
                                progress = _this43._element;

                            function remove() {
                                resolve(), progress.remove();
                                var config = ds.utils.ConfigService.getInstance();
                                config.appIsReady = !0, config.change.dispatch("appIsReady"), loader.style.display = "none", loader.classList.remove("animation-fadeOut"), loader.removeEventListener("transitionend", onTransitionEnd)
                            }
                            var onTransitionEnd = function() {
                                    loader.classList.remove("animation-fadeOut"), remove()
                                },
                                timer = setTimeout(function() {
                                    remove()
                                }, 2e3);
                            try {
                                loader.classList.add("animation-fadeOut"), loader.addEventListener("transitionend", onTransitionEnd)
                            } catch (e) {
                                remove(), clearTimeout(timer)
                            }
                        })
                    }
                },
                STAKING_ADV_EXCEPTIONS = ["news", "signIn"],
                STATES_WITH_STAKING_INFO = ["investments", "staking", "stakingLanding"];
            LOADER.addProgress(PROGRESS_MAP.RUN_SCRIPT), WavesApp.state = "initApp";
            var run = function($rootScope, utils, user, $state, $transitions, state, decorators, referralLinkService, i18n) {
                ds.Matcher.getInstance();
                var _dec, _class, phone = WavesApp.device.phone(),
                    tablet = WavesApp.device.tablet(),
                    analytics = require("data-service").analytics,
                    configsActionsService = new ds.utils.ConfigsActionsService,
                    isPhone = !!phone,
                    isTablet = !!tablet,
                    isDesktop = !(isPhone || isTablet),
                    isWeb = WavesApp.isWeb(),
                    storage = ds.utils.storage;
                $rootScope.isDesktop = isDesktop, $rootScope.isNotDesktop = !isDesktop, $rootScope.isPhone = isPhone, $rootScope.isNotPhone = !isPhone, $rootScope.isTablet = isTablet, isPhone ? document.body.classList.add("phone") : isTablet ? document.body.classList.add("tablet") : isWeb ? document.body.classList.add("web") : document.body.classList.add("desktop");
                var ROUTER_PAIRS_ID = WavesApp.stateTree.getChildren().reduce(function(acc, state) {
                    return state.data.noLogin && state.data.innerStateId && acc.push({
                        inner: state.data.innerStateId,
                        landing: state.id
                    }), acc
                }, []);
                return new(_dec = decorators.scope({
                    closeByModal: !1
                }), _applyDecoratedDescriptor((_class = function() {
                    function AppRun() {
                        _classCallCheck(this, AppRun), this.openDevToolsListener = void 0, this._changeLangHandler = function() {
                            storage.save("lng", i18next.language), WavesApp.isDesktop() && localStorage.setItem("lng", JSON.stringify(i18next.language))
                        };
                        var identityImg = require("identity-img");
                        LOADER.addProgress(PROGRESS_MAP.APP_RUN), this.activeClasses = [], this.walletActiveClasses = [], identityImg.config({
                            rows: 8,
                            cells: 8
                        }), this._setHandlers(), this._stopLoader(), this._initializeLogin(), this._sendOpenAppAnalytics(), this._initializeOutLinks(), this._listenChangeLanguage(), this._listenOpenDevTools(), this._initIntercom(), configsActionsService.run(), WavesApp.isDesktop(), storage.load("lng").then(function(lng) {
                            i18next.changeLanguage(lng || i18next.options.fallbackLng[0])
                        }), $rootScope.WavesApp = WavesApp
                    }
                    var _showStakingInfoModal2;
                    return _createClass(AppRun, [{
                        key: "_initTryDesktop",
                        value: function() {
                            var _this44 = this;
                            if (user.isAuthorised || !isDesktop || WavesApp.isDesktop()) return Promise.resolve(!0);
                            var url = new URL(locationHref),
                                href = "waves-exchange://".concat(url.pathname).concat(url.search).concat(url.hash).replace("///", "//");
                            return storage.load("openClientMode").then(function(clientMode) {
                                switch (clientMode) {
                                    case "desktop":
                                        return window.open(href), _this44._runDesktop();
                                    case "web":
                                    default:
                                        return Promise.resolve(!0)
                                }
                            })
                        }
                    }, {
                        key: "_runDesktop",
                        value: function() {
                            return this._canOpenDesktopPage = !0, $state.go("desktop"), !1
                        }
                    }, {
                        key: "_setHandlers",
                        value: function() {
                            var _this45 = this;
                            $transitions.onSuccess({}, function(transition) {
                                _this45._onChangeStateSuccess(transition)
                            }), $transitions.onError({}, function(t) {
                                var to = t.to(),
                                    from = t.from(),
                                    error = t.error();
                                window.transitLog.push({
                                    from: from,
                                    to: to,
                                    error: error
                                })
                            })
                        }
                    }, {
                        key: "_initializeOutLinks",
                        value: function() {
                            if (WavesApp.isDesktop()) {
                                document.addEventListener("click", function(event) {
                                    for (var node, element = event.target; element.parentNode !== document.body;) {
                                        if ((node = element).href && "_blank" === node.target) return event.preventDefault(), event.stopPropagation(), void openInBrowser(element.href);
                                        element = element.parentNode
                                    }
                                })
                            }
                        }
                    }, {
                        key: "_listenChangeLanguage",
                        value: function() {
                            i18next.on("languageChanged", this._changeLangHandler)
                        }
                    }, {
                        key: "_stopListenChangeLanguage",
                        value: function() {
                            i18next.off("languageChanged", this._changeLangHandler)
                        }
                    }, {
                        key: "_initializeLogin",
                        value: function() {
                            var _this46 = this;
                            storage.load("uiId").then(function(uiId) {
                                uiId = ds.uiId.idInSpam(uiId) ? void 0 : uiId, analytics.init({
                                    platform: WavesApp.type,
                                    userType: "unknown",
                                    referrer: document.referrer,
                                    auuid: uiId || void 0
                                }), analytics.activate()
                            }), this._onInitialTransitions(), user.logoutSignal.on(function() {
                                ds.utils.notificationService.resetItems(), clearInterval(_this46._notifyTimer)
                            }), user.loginSignal.on(function() {
                                if (("seed" === user.userType || "privateKey" === user.userType) && !user.getSetting("hasBackup")) {
                                    var handler = function handler(_ref21) {
                                            _ref21.isReady && (ds.dataManager.matcherService.signals.changeConnectionState.off(handler), _this46._onBalanceChange())
                                        },
                                        isReady = ds.dataManager.matcherService.isConnectionStateReady();
                                    isReady ? handler({
                                        isReady: isReady
                                    }) : ds.dataManager.matcherService.signals.changeConnectionState.on(handler), user.getSetting("hasBackup") || _this46._initializeBackupWarning()
                                }
                            })
                        }
                    }, {
                        key: "_sendToStat",
                        value: function(lng, usersLength) {
                            var params = {
                                label: lng,
                                value: usersLength.toString()
                            };
                            ds.analytics.sendToRest("User_Site_Open_Rest", params)
                        }
                    }, {
                        key: "_sendOpenAppAnalytics",
                        value: function() {
                            var _this47 = this;
                            Promise.all([storage.load("lng"), storage.load("multiAccountUsers")]).then(function(_ref22) {
                                var _ref23 = _slicedToArray(_ref22, 2),
                                    lng = _ref23[0],
                                    usersMap = _ref23[1];
                                lng = lng || "en";
                                var users = usersMap ? Object.keys(usersMap).length : 0;
                                try {
                                    _this47._sendToStat(lng, users)
                                } catch (e) {
                                    console.error(e)
                                }
                                analytics.user.siteOpen(lng, users)
                            })
                        }
                    }, {
                        key: "_initIntercom",
                        value: function() {
                            ds.utils.ConfigService.getConfig("INTERCOM_DISABLED") && this._hideIntercom()
                        }
                    }, {
                        key: "_getIntercomElements",
                        value: function() {
                            return {
                                intercomElement: document.querySelector("#intercom-container")
                            }
                        }
                    }, {
                        key: "_hideIntercom",
                        value: function() {
                            var intercomElement = this._getIntercomElements().intercomElement;
                            if (intercomElement && (intercomElement.style.display = "none"), window.intercomSettings.hide_default_launcher = !0, !window.Intercom) return null;
                            window.Intercom("update", {
                                hide_default_launcher: !0
                            }), window.Intercom("hide")
                        }
                    }, {
                        key: "_showIntercom",
                        value: function() {
                            if (!ds.utils.ConfigService.getConfig("INTERCOM_DISABLED")) {
                                window.intercomSettings.hide_default_launcher = !1;
                                var intercomElement = this._getIntercomElements().intercomElement;
                                window.Intercom("update", {
                                    hide_default_launcher: !1
                                }), intercomElement && (intercomElement.style.display = "block")
                            }
                        }
                    }, {
                        key: "_onInitialTransitions",
                        value: function() {
                            var _this48 = this,
                                waiting = !1,
                                START_STATES = WavesApp.stateTree.where({
                                    noLogin: !0
                                }).map(function(item) {
                                    return WavesApp.stateTree.getPath(item.id).join(".")
                                }).concat(["news", "staking", "stakingRef", "trade", "investments", "stakingFaq", "buyEGG", "buyBTC", "buyBTCFaq", "buyWaves", "buyWAVESFaq", "page404", "marketMaking", "buyUsdn", "buyUSDNFaq", "defoLanding", "defoFaq", "otc", "otcFaq", "defoInvestmentFaq", "swapWavesUsdnFaq", "stakingCurveFaq", "stakingALPFaq", "stakingLamboFaq", "stakingLamboUSDT", "stakingLamboUSDC", "stakingLambo", "stakingCurveLanding", "stakingCurveLandingUSDC", "stakingCurveLandingBTC", "stakingCurveLandingETH", "stakingALP", "stakingALP_BTC", "stakingALP_ETH", "stakingALP_USDC", "depositWithdrawFaq", "gatewayFees", "poolsMain.pools", "poolsMain.dashboard", "poolsMain.boosting", "poolsMain.stats", "poolsMain.governance.active", "poolsMain.governance.completed", "poolsMain.governance.reward", "poolsMain.governance.voting", "poolsMain.IDO", "poolsMain.pair", "poolsMain.earlybirds", "poolsFaq"]),
                                offInitialTransitions = $transitions.onStart({}, function(transition) {
                                    var tryDesktop, toState = transition.to(),
                                        fromState = transition.from(),
                                        params = transition.params();
                                    if ("cognito" === user.userType && ["import", "keeper", "ledger", "restore", "fromBackup", "create", "switch", "migrate", "chooseUser"].includes(toState.name)) return transition.router.stateService.target("wallet");
                                    var ignoredChange = ["ledger", "chooseUser", "keeper", "import", "create"];
                                    if (user.currentUser && !user.apiTokenWavesExchange && ignoredChange.includes(fromState.name) && !ignoredChange.includes(toState.name)) return transition.router.stateService.target(fromState.name);
                                    if (["dex", "dex-demo"].includes(toState.name)) return transition.router.stateService.target("trade", {
                                        tradingPair: "".concat(params.assetId1, "_").concat(params.assetId2)
                                    });
                                    var isFromSwitch = "switch" === fromState.name,
                                        statePair = ROUTER_PAIRS_ID.find(function(_ref24) {
                                            return _ref24.inner === toState.name
                                        });
                                    if (statePair && !isFromSwitch) return transition.router.stateService.target(statePair.landing);
                                    if ("stakingLegacy" === toState.name) return transition.router.stateService.target("stakingLanding");
                                    if ("leasingLegacy" === toState.name) return transition.router.stateService.target("leasing");
                                    if ("buycrypto" === toState.name) return transition.router.stateService.target("buyBTC");
                                    if ("poolsMain" === toState.name) return transition.router.stateService.target("poolsMain.pools");
                                    if ("poolsMain.governance" === toState.name) return transition.router.stateService.target("poolsMain.governance.active");
                                    "trade" === toState.name ? _this48._hideIntercom() : _this48._showIntercom();
                                    var resultDexDemoTransition = _this48._onDexDemoTransition(transition);
                                    return resultDexDemoTransition || ("stakingRef" === toState.name && !fromState.name && params.ref ? (ds.utils.manageReferralAddress(params.ref), ds.analytics.referral.openByReferralLink(params.ref), transition.router.stateService.target("stakingLanding")) : -1 !== START_STATES.indexOf(toState.name) || user.isSignedIn ? "desktop" !== toState.name || _this48._canOpenDesktopPage ? (user.wrapperReady.then(function() {
                                        _this48._showStakingInfoModal(toState)
                                    }), waiting ? null : (tryDesktop = "trade" !== toState.name || user.address ? _this48._initTryDesktop() : Promise.resolve(), waiting = !0, window.transitLog.push({
                                        fromState: fromState,
                                        toState: toState,
                                        status: "transition"
                                    }), void tryDesktop.then(function(canChangeState) {
                                        return _this48._login(toState, fromState, canChangeState)
                                    }).then(function() {
                                        waiting = !1, offInitialTransitions(), -1 === START_STATES.indexOf(toState.name) && $state.go(toState.name, params);
                                        var offInnerTransitions = _this48._onInnerTransitions(START_STATES);
                                        user.logoutSignal.once(function() {
                                            offInnerTransitions(), _this48._onInitialTransitions()
                                        })
                                    }).catch(function() {
                                        waiting = !1
                                    }))) : transition.router.stateService.target(START_STATES[0]) : (user.setInitRouteState(toState.name, params), transition.router.stateService.target(START_STATES[0])))
                                })
                        }
                    }, {
                        key: "_onDexDemoTransition",
                        value: function(transition) {
                            var skipStates = ["signIn", "signUp", "import", "create", "keeper", "ledger", "fromBackup", "chooseUser"],
                                toState = transition.to(),
                                fromState = transition.from(),
                                params = transition.params();
                            if ("trade" !== fromState.name || user.address) !this.hasDexDemo && user.address || (skipStates.includes(toState.name) || skipStates.includes(fromState.name)) && !user.address || (this.hasDexDemo = !1);
                            else {
                                var _user$state, _user$state$params;
                                this.hasDexDemo = !0;
                                var tradingPair = params.tradingPair || (null === (_user$state = user.state) || void 0 === _user$state ? void 0 : null === (_user$state$params = _user$state.params) || void 0 === _user$state$params ? void 0 : _user$state$params.tradingPair);
                                tradingPair && (user.forceInitRouteState("trade", {
                                    tradingPair: tradingPair
                                }), user.buyOptions = null)
                            }
                        }
                    }, {
                        key: "_onInnerTransitions",
                        value: function(START_STATES) {
                            var _this49 = this;
                            return $transitions.onStart({}, function(transition) {
                                var toState = transition.to(),
                                    fromState = transition.from(),
                                    custom = transition.options().custom,
                                    statePair = ROUTER_PAIRS_ID.find(function(_ref25) {
                                        return _ref25.landing === toState.name
                                    });
                                if (window.transitLog.push({
                                        fromState: fromState,
                                        toState: toState,
                                        status: "transitionInner"
                                    }), window.transitLog = window.transitLog.slice(-50), "wallet" === toState.name) {
                                    var _transition$params, className = null === (_transition$params = transition.params()) || void 0 === _transition$params ? void 0 : _transition$params.child;
                                    _this49.walletActiveClasses.forEach(function(className) {
                                        document.body.classList.remove(className)
                                    }), _this49.walletActiveClasses = [className], document.body.classList.add(className)
                                } else _this49.walletActiveClasses.forEach(function(className) {
                                    document.body.classList.remove(className)
                                }), _this49.walletActiveClasses = [];
                                if (statePair) return transition.router.stateService.target(statePair.inner);
                                if ("trade" === toState.name ? _this49._hideIntercom() : _this49._showIntercom(), _this49._onDexDemoTransition(transition)) return !1;
                                if (_this49._showStakingInfoModal(toState), "cognito" === user.userType && ["import", "keeper", "ledger", "restore", "fromBackup", "create", "switch", "migrate", "chooseUser"].includes(toState.name)) return transition.router.stateService.target("wallet");
                                if ("withdrawAndDeposit" === toState.name) {
                                    var _transition$params2, type = (null === (_transition$params2 = transition.params()) || void 0 === _transition$params2 ? void 0 : _transition$params2.type) || "";
                                    if (type && "deposit" !== type && "withdraw" !== type) return transition.router.stateService.target("wallet")
                                }
                                if (-1 !== START_STATES.indexOf(toState.name) && !custom.logout && "news" !== toState.name && "staking" !== toState.name && "stakingCurve" !== toState.name && "stakingCurveUSDC" !== toState.name && "stakingCurveBTC" !== toState.name && "stakingCurveETH" !== toState.name && "stakingFaq" !== toState.name && "nsbtFaq" !== toState.name && "trade" !== toState.name && "investments" !== toState.name && "buyEGG" !== toState.name && "buyBTC" !== toState.name && "buyBTCFaq" !== toState.name && "leasingFaq" !== toState.name && "investments" !== toState.name && "buyWaves" !== toState.name && "buyWAVESFaq" !== toState.name && "buyUsdn" !== toState.name && "buyUSDNFaq" !== toState.name && "defo" !== toState.name && "defoFaq" !== toState.name && "otc" !== toState.name && "otcFaq" !== toState.name && "defoInvestmentFaq" !== toState.name && "swapWavesUsdnFaq" !== toState.name && "stakingCurveFaq" !== toState.name && "stakingALPFaq" !== toState.name && "stakingALP" !== toState.name && "stakingALP_BTC" !== toState.name && "stakingALP_ETH" !== toState.name && "stakingALP_USDC" !== toState.name && "stakingLamboFaq" !== toState.name && "stakingLamboUSDT" !== toState.name && "stakingLamboUSDC" !== toState.name && "stakingLambo" !== toState.name && "settings" !== toState.name && "depositWithdrawFaq" !== toState.name && "gatewayFees" !== toState.name && "poolsMain.pools" !== toState.name && "poolsMain.dashboard" !== toState.name && "poolsMain.boosting" !== toState.name && "poolsMain.stats" !== toState.name && "poolsMain.governance.active" !== toState.name && "poolsMain.governance.completed" !== toState.name && "poolsMain.governance.reward" !== toState.name && "poolsMain.governance.voting" !== toState.name && "poolsMain.IDO" !== toState.name && "poolsMain.pair" !== toState.name && "poolsMain.earlybirds" !== toState.name && "poolsFaq" !== toState.name) return !1;
                                state.signals.changeRouterStateStart.dispatch(transition)
                            })
                        }
                    }, {
                        key: "_onBalanceChange",
                        value: function() {
                            if (!user.getSetting("hasBackup")) {
                                var balance = ds.dataManager.matcherService.getBalances(),
                                    baseAssetId = ds.utils.BaseAssetService.getInstance().getBaseAssetId(),
                                    _balance$reduce2 = _slicedToArray(balance.reduce(function(acc, balance) {
                                        var _balance$regular, _balance$asset$meta, _balance$asset$meta$l;
                                        return (null == balance ? void 0 : null === (_balance$regular = balance.regular) || void 0 === _balance$regular ? void 0 : _balance$regular.getTokens().isPositive()) && (null === (_balance$asset$meta = balance.asset.meta) || void 0 === _balance$asset$meta ? void 0 : null === (_balance$asset$meta$l = _balance$asset$meta.labels) || void 0 === _balance$asset$meta$l ? void 0 : _balance$asset$meta$l.length) && (acc[0].push(balance.asset), acc[1].push(balance.regular)), acc
                                    }, [
                                        [],
                                        []
                                    ]), 2),
                                    assetsList = _balance$reduce2[0],
                                    balanceRegular = _balance$reduce2[1];
                                0 !== assetsList.length && Promise.all([ds.api.assets.get(baseAssetId), ds.api.rate.fetchRatesFromDL(assetsList, baseAssetId)]).then(function(_ref26) {
                                    var _ref27 = _slicedToArray(_ref26, 2),
                                        usdAsset = _ref27[0],
                                        usd = _ref27[1].reduce(function(acc, rate, i) {
                                            var balanceInUsd = balanceRegular[i].getTokens().mul(rate.data.rate);
                                            return acc.cloneWithTokens(acc.getTokens().add(balanceInUsd))
                                        }, new Money(0, usdAsset));
                                    usd.gte(usd.cloneWithTokens(100)) && ds.utils.modalManager.openModal("tutorial")
                                })
                            }
                        }
                    }, {
                        key: "_initializeBackupWarning",
                        value: function(scope) {
                            var _this50 = this,
                                id = "_hasBackupId";
                            if (!ds.utils.notificationService.has(id)) {
                                var changeModalsHandler = function(modal) {
                                    scope.closeByModal = !0, ds.utils.notificationService.remove(id), scope.closeByModal = !1, modal.openPromise && modal.openPromise.then(function() {
                                        user.getSetting("hasBackup") || _this50._initializeBackupWarning()
                                    }).catch(function() {
                                        user.getSetting("hasBackup") || _this50._initializeBackupWarning()
                                    })
                                };
                                ds.utils.modalManager.openModalSignal.once(changeModalsHandler), ds.utils.notificationService.error({
                                    id: id,
                                    headerTransProps: {
                                        ns: "app.utils",
                                        i18key: "notification.backup.title"
                                    },
                                    messageTransProps: {
                                        ns: "app.utils",
                                        i18key: "notification.backup.body"
                                    },
                                    lifetime: -1,
                                    action: {
                                        trans: {
                                            ns: "app.utils",
                                            i18key: "notification.backup.action"
                                        },
                                        cb: function() {
                                            ds.utils.modalManager.openModal("seedBackup")
                                        }
                                    },
                                    onClose: function() {
                                        if (ds.utils.notificationService.remove(id), scope.closeByModal || user.getSetting("hasBackup")) return null;
                                        ds.utils.modalManager.openModalSignal.off(changeModalsHandler)
                                    }
                                })
                            }
                        }
                    }, {
                        key: "_login",
                        value: function(currentState, prevState, canChangeState) {
                            if (user.isAuthorised) return user.onLogin();
                            window.transitLog.push({
                                currentState: currentState,
                                prevState: prevState,
                                canChangeState: canChangeState,
                                status: "noLogin"
                            });
                            var states = WavesApp.stateTree.where({
                                noLogin: !0
                            }).map(function(item) {
                                return WavesApp.stateTree.getPath(item.id).join(".")
                            }).concat(user.isAuthorised ? ["create", "news", "staking", "chooseUser", "investments", "buyEGG", "buyBTC", "buyBTCFaq", "nsbt", "buyWaves", "buyWAVESFaq", "leasing", "buyUsdn", "buyUSDNFaq", "defo", "defoFaq", "swapWavesUsdn", "otc", "otcFaq", "defoInvestment", "defoInvestmentFaq", "swapWavesUsdnFaq", "stakingCurveFaq", "stakingALPFaq", "stakingLamboFaq", "stakingLamboUSDT", "stakingLamboUSDC", "stakingCurve", "stakingCurveUSDC", "stakingCurveBTC", "stakingCurveETH", "settings", "stakingALP", "stakingALP_BTC", "stakingALP_ETH", "stakingALP_USDC", "stakingLambo", "depositWithdrawFaq", "gatewayFees", "poolsMain.pools", "poolsMain.dashboard", "poolsMain.boosting", "poolsMain.stats", "poolsMain.governance.active", "poolsMain.governance.completed", "poolsMain.governance.reward", "poolsMain.governance.voting", "poolsMain.IDO", "poolsMain.pair", "poolsMain.earlybirds", "poolsFaq"] : ["news", "staking", "stakingRef", "investments", "buyEGG", "buyBTC", "buyBTCFaq", "buyWaves", "buyWAVESFaq", "page404", "marketMaking", "buyUsdn", "buyUSDNFaq", "defoLanding", "defoFaq", "otc", "otcFaq", "defoInvestmentFaq", "swapWavesUsdnFaq", "stakingCurveFaq", "stakingALPFaq", "stakingLamboFaq", "stakingLamboUSDT", "stakingLamboUSDC", "stakingCurveLanding", "stakingCurveLandingUSDC", "stakingCurveLandingBTC", "stakingCurveLandingETH", "stakingALP", "stakingALP_BTC", "stakingALP_ETH", "stakingALP_USDC", "stakingLambo", "depositWithdrawFaq", "gatewayFees", "poolsMain.pools", "poolsMain.dashboard", "poolsMain.boosting", "poolsMain.stats", "poolsMain.governance.active", "poolsMain.governance.completed", "poolsMain.governance.reward", "poolsMain.governance.voting", "poolsMain.IDO", "poolsMain.pair", "poolsMain.earlybirds", "poolsFaq"]);
                            return canChangeState && -1 === states.indexOf(currentState.name) && "chooseUser" !== prevState.name && (window.transitLog.push({
                                currentState: currentState,
                                prevState: prevState,
                                canChangeState: canChangeState,
                                to: states[0],
                                status: "noLogin#2"
                            }), $state.go(states[0])), user.onLogin()
                        }
                    }, {
                        key: "_onChangeStateSuccess",
                        value: function(transition) {
                            var _this51 = this,
                                toState = transition.to(),
                                fromState = transition.from();
                            if ("poolsMain.pair" !== toState.name || "poolsMain.pair" !== fromState.name) {
                                var from = fromState.name || document.referrer;
                                if (WavesApp.currentState = toState.name, toState.name !== fromState.name) {
                                    switch (toState.name) {
                                        case "leasing":
                                            analytics.send({
                                                name: "Staking_Waves_Page_Show",
                                                params: {
                                                    from: from
                                                },
                                                target: "ui"
                                            });
                                            break;
                                        case "tokens":
                                            analytics.send({
                                                name: "Token Generation Show",
                                                target: "ui"
                                            });
                                            break;
                                        case "wallet":
                                            analytics.wallet.assetsShow();
                                            break;
                                        case "trade":
                                            analytics.dex.pageShow();
                                            break;
                                        case "otc":
                                            user.isAuthorised ? analytics.otc.pageShow() : analytics.otc.showLandingPage()
                                    }
                                    if (this.activeClasses.forEach(function(className) {
                                            document.body.classList.remove(className)
                                        }), this.activeClasses = [], toState.name.split(".").filter(Boolean).forEach(function(className) {
                                            var name = className.replace(/_/g, "-");
                                            document.body.classList.add(name), _this51.activeClasses.push(name)
                                        }), "trade" === toState.name && !user.address) {
                                        document.body.classList.add("trade_demo"), this.activeClasses.push("trade_demo")
                                    }
                                }
                                var params = transition.params();
                                user.applyState(toState, params), state.signals.changeRouterStateSuccess.dispatch(toState)
                            }
                        }
                    }, {
                        key: "_stopLoader",
                        value: function() {
                            Promise.all([this._getLocalizeReadyPromise()]).then(function() {
                                LOADER.stop(), WavesApp.state = "appRun"
                            }).catch(function(e) {
                                console.error(e), WavesApp.state = "loadingError"
                            })
                        }
                    }, {
                        key: "_getLocalizeReadyPromise",
                        value: function() {
                            return i18nextReady.then(function() {
                                return LOADER.addProgress(PROGRESS_MAP.LOCALIZE_READY)
                            })
                        }
                    }, {
                        key: "_getImagesReadyPromise",
                        value: function() {
                            return $.ajax({
                                url: "/img/images-list.json?v=".concat(WavesApp.version),
                                dataType: "json"
                            }).then(AppRun.loadImages)
                        }
                    }, {
                        key: "_showStakingInfoModal",
                        value: (_showStakingInfoModal2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(state) {
                            var configService, showStakingAdv, stakingAdvIsClosed;
                            return regeneratorRuntime.wrap(function(_context2) {
                                for (;;) switch (_context2.prev = _context2.next) {
                                    case 0:
                                        return configService = ds.utils.ConfigService, showStakingAdv = configService.getInstance().getConfig("SETTINGS.SHOW_STAKING_ADV"), _context2.next = 4, storage.load("stakingAdvIsClosed");
                                    case 4:
                                        if (stakingAdvIsClosed = _context2.sent, !showStakingAdv || stakingAdvIsClosed || STAKING_ADV_EXCEPTIONS.includes(state.name) || user.sawStakingAdv) return _context2.abrupt("return");
                                        _context2.next = 7;
                                        break;
                                    case 7:
                                        if (STATES_WITH_STAKING_INFO.includes(state.name)) return user.sawStakingAdv = !0, _context2.abrupt("return");
                                        _context2.next = 10;
                                        break;
                                    case 10:
                                        user.sawStakingAdv = !0, ds.utils.modalManager.openModal("stakingInfo");
                                    case 12:
                                    case "end":
                                        return _context2.stop()
                                }
                            }, _callee2)
                        })), function(_x) {
                            return _showStakingInfoModal2.apply(this, arguments)
                        })
                    }, {
                        key: "_listenOpenDevTools",
                        value: function() {
                            var _this52 = this,
                                cb = function() {
                                    console.info("%c".concat(i18n.translate("console.holdUp", "app")), "color: #4C9AFF; font-size: 42px; line-height: 1.25; font-weight: 500;"), console.info("%c".concat(i18n.translate("console.youAreScammed", "app")), "font-size: 18px;"), console.info("%c".concat(i18n.translate("console.pasting", "app")), "color: #DE350B; font-size: 18px; font-weight: 500;")
                                };
                            i18nextReady.then(function() {
                                _this52.openDevToolsListener = new ds.utils.OpenDevToolsListener({
                                    onOpenCb: cb
                                })
                            })
                        }
                    }], [{
                        key: "getLoadImagePromise",
                        value: function() {
                            return function(path) {
                                return new Promise(function(resolve) {
                                    var img = new Image,
                                        apply = function() {
                                            resolve()
                                        };
                                    if (path && 0 < path.indexOf(".svg")) return resolve();
                                    img.onload = function() {
                                        return setTimeout(function() {
                                            return apply()
                                        }, 50)
                                    }, img.onerror = function() {
                                        console.warn("Can't load image! \"".concat(path, '"')), apply()
                                    }, img.src = path
                                })
                            }
                        }
                    }, {
                        key: "loadImages",
                        value: function(list) {
                            var queue = list.map(function(item) {
                                return {
                                    fn: function() {
                                        return AppRun.getLoadImagePromise()(item)
                                    }
                                }
                            });
                            new ds.utils.PromiseQueue(queue, 1).startIterate()
                        }
                    }, {
                        key: "_getUrlFromState",
                        value: function(state) {
                            return WavesApp.stateTree.getPath(state.name.split(".").slice(-1)[0]).filter(function(id) {
                                return !WavesApp.stateTree.find(id).get("abstract")
                            }).map(function(id) {
                                return WavesApp.stateTree.find(id).get("url") || id
                            }).reduce(function(url, id) {
                                return "".concat(url, "/").concat(id)
                            }, "")
                        }
                    }]), AppRun
                }()).prototype, "_initializeBackupWarning", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "_initializeBackupWarning"), _class.prototype), _class)
            };
            run.$inject = ["$rootScope", "utils", "user", "$state", "$transitions", "state", "decorators", "referralLinkService", "i18n"], angular.module("app").run(run);
            var utils = require("data-service").utils;
            document.addEventListener("DOMContentLoaded", function() {
                new utils.ConfigService(WavesApp).configReady.then(function() {
                    return (new utils.BaseAssetService).readyPromise
                }).then(function() {
                    angular.bootstrap(document.querySelector("html"), ["app"])
                })
            })
        }(),
        function() {
            var factory = function(utils) {
                var each = require("ts-utils").each,
                    Router = function() {
                        function Router() {
                            _classCallCheck(this, Router), this._routesHash = Object.create(null)
                        }
                        return _createClass(Router, [{
                            key: "apply",
                            value: function(fullUrl) {
                                var _this53 = this,
                                    _fullUrl$split2 = _slicedToArray(fullUrl.split("?"), 2),
                                    url = _fullUrl$split2[0],
                                    searchStr = _fullUrl$split2[1],
                                    search = utils.parseSearchParams(searchStr),
                                    parts = url.split("/"),
                                    urls = Object.keys(this._routesHash).sort(function(a, b) {
                                        var reg = /:/g;
                                        return (a.match(reg) || {
                                            length: 0
                                        }).length - (b.match(reg) || {
                                            length: 0
                                        }).length
                                    }).map(function(url) {
                                        return url.split("/")
                                    }).filter(function(routeParts) {
                                        return routeParts.length === parts.length
                                    }),
                                    listener = null,
                                    params = null;
                                return urls.some(function(routeParts) {
                                    var urlParams = Object.create(null),
                                        valid = routeParts.every(function(part, i) {
                                            return ":" === part.charAt(0) ? (urlParams[part.substr(1)] = parts[i], !0) : part === parts[i]
                                        });
                                    return valid && (params = urlParams, listener = _this53._routesHash[routeParts.join("/")]), valid
                                }), listener ? listener(params, search) : null
                            }
                        }, {
                            key: "registerRoute",
                            value: function(route, listener) {
                                this._routesHash[route] = listener
                            }
                        }, {
                            key: "registerRouteHash",
                            value: function(hash) {
                                var _this54 = this;
                                each(hash, function(listener, url) {
                                    _this54.registerRoute(url, listener)
                                })
                            }
                        }]), Router
                    }();
                return Router.ROUTES = {
                    GATEWAY_AUTH: "/gateway/auth",
                    ANY_TX: "/tx"
                }, Router
            };
            factory.$inject = ["utils"], angular.module("app.utils").factory("Router", factory)
        }(),
        function() {
            var factory = function() {
                return new(function() {
                    function ReadFile() {
                        _classCallCheck(this, ReadFile)
                    }
                    return _createClass(ReadFile, [{
                        key: "read",
                        value: function(fileBlob) {
                            var deferred = $.Deferred(),
                                reader = new FileReader;
                            return reader.addEventListener("error", function(error) {
                                deferred.reject(error)
                            }), reader.addEventListener("progress", function(event) {
                                var percentLoaded = Math.min(Math.round(event.loaded / event.total * 100), 100);
                                deferred.notify(percentLoaded)
                            }), reader.addEventListener("abort", function(event) {
                                deferred.reject(event)
                            }), reader.addEventListener("load", function(event) {
                                deferred.resolve(event.currentTarget.result)
                            }, !1), reader.readAsBinaryString(fileBlob), deferred.promise()
                        }
                    }]), ReadFile
                }())
            };
            factory.$inject = [], angular.module("app.utils").factory("readFile", factory)
        }(),
        function() {
            var factory = function(PromiseControl) {
                var tsUtils = require("ts-utils"),
                    TimerList = function() {
                        function TimerList() {
                            _classCallCheck(this, TimerList), this.list = []
                        }
                        return _createClass(TimerList, [{
                            key: "add",
                            value: function(item) {
                                this.list.push(item), this.list.sort(TimerList.comparator)
                            }
                        }, {
                            key: "remove",
                            value: function(id) {
                                id = "string" == typeof id ? id : id.id;
                                for (var i = this.list.length; i--;)
                                    if (this.list[i].id === id) {
                                        this.list.splice(i, 1);
                                        break
                                    }
                            }
                        }], [{
                            key: "comparator",
                            value: function(a, b) {
                                return b.start + b.timeout - (a.start + a.timeout)
                            }
                        }]), TimerList
                    }();
                return new(function() {
                    function TimeLine() {
                        _classCallCheck(this, TimeLine), this._listeners = new TimerList, this._timer = null
                    }
                    return _createClass(TimeLine, [{
                        key: "timeout",
                        value: function(callback, _timeout) {
                            var start = Date.now(),
                                id = tsUtils.uniqueId("timeLineItem"),
                                defer = function() {
                                    var resolve, reject, promise = new Promise(function(res, rej) {
                                        resolve = res, reject = rej
                                    });
                                    return {
                                        resolve: resolve,
                                        reject: reject,
                                        promise: promise
                                    }
                                }(),
                                promise = new PromiseControl(defer.promise);
                            return promise.id = id, promise.start = start, promise.time = _timeout, this._listeners.add({
                                handler: callback,
                                timeout: _timeout,
                                start: start,
                                id: id,
                                defer: defer
                            }), 1 === this._listeners.list.length && this._addTimeout(), promise
                        }
                    }, {
                        key: "wait",
                        value: function(timeout) {
                            return this.timeout(null, timeout)
                        }
                    }, {
                        key: "cancel",
                        value: function(promise) {
                            if (!promise) return null;
                            promise.drop(), this._listeners.remove(promise.id)
                        }
                    }, {
                        key: "_run",
                        value: function() {
                            if (!this._listeners.list.length) return null;
                            for (var now = Date.now(), i = this._listeners.list.length - 1; 0 <= i; i--) {
                                var item = this._listeners.list[i];
                                if (item) {
                                    if (!(now - item.start >= item.timeout)) break;
                                    try {
                                        item.handler && item.handler(), item.defer.resolve()
                                    } catch (e) {}
                                    this._listeners.remove(item)
                                }
                            }
                            this._listeners.list.length && this._addTimeout()
                        }
                    }, {
                        key: "_addTimeout",
                        value: function() {
                            var _this55 = this;
                            this._timer && clearTimeout(this._timer), this._timer = setTimeout(function() {
                                _this55._timer = null, _this55._run()
                            }, 200)
                        }
                    }]), TimeLine
                }())
            };
            factory.$inject = ["PromiseControl"], angular.module("app.utils").factory("timeLine", factory)
        }(), (directive = function(Base, i18n, utils) {
            return {
                scope: !1,
                restrict: "A",
                link: function($scope, $element, $attrs) {
                    return new(function() {
                        function I18n() {
                            var _this56;
                            if (_classCallCheck(this, I18n), (_this56 = _possibleConstructorReturn(this, _getPrototypeOf(I18n).call(this, $scope)))._forStop = [], _this56._watchers = Object.create(null), _this56._literalTemplate = I18n._getLiteralTemplate(), _this56._parts = I18n._getParts(_this56._literalTemplate), _this56._handler = utils.debounce(_this56._getHandler()), _this56._addWatchers(), _this56.listenEventEmitter(i18next, "languageChanged", _this56._handler), $attrs.params && !$attrs.params.includes("::")) {
                                var stop = $scope.$watch($attrs.params, _this56._handler);
                                _this56._forStop.push(stop)
                            }
                            return _this56._handler(), _this56
                        }
                        return _inherits(I18n, Base), _createClass(I18n, [{
                            key: "$onDestroy",
                            value: function() {
                                _get(_getPrototypeOf(I18n.prototype), "$onDestroy", this).call(this), this._forStop.forEach(function(cb) {
                                    return cb()
                                }), this._forStop = []
                            }
                        }, {
                            key: "_getHandler",
                            value: function() {
                                var _this57 = this,
                                    ns = this._getNs();
                                return function() {
                                    var skipErrors = "skipErrors" in $attrs,
                                        defaultValue = function(text) {
                                            return text.split("").map(function(_char4) {
                                                switch (_char4.charCodeAt(0)) {
                                                    case 34:
                                                        return "&quot;";
                                                    case 38:
                                                        return "&amp;";
                                                    case 39:
                                                        return "&#39;";
                                                    case 60:
                                                        return "&lt;";
                                                    case 62:
                                                        return "&gt;";
                                                    default:
                                                        return _char4
                                                }
                                            }).join("")
                                        }($attrs.defaultValue || ""),
                                        params = $attrs.params && $scope.$eval($attrs.params) || void 0,
                                        result = i18n.translate(_this57._compile(_this57._literalTemplate), ns, params, skipErrors);
                                    $element.html(result || (defaultValue || result))
                                }
                            }
                        }, {
                            key: "_getNs",
                            value: function() {
                                return $attrs.wI18nNs ? $attrs.wI18nNs : i18n.getNs($element)
                            }
                        }, {
                            key: "_compile",
                            value: function(literal) {
                                return this._parts && this._parts.forEach(function(_ref28) {
                                    var part = _ref28.part,
                                        evalTpl = _ref28.evalTpl;
                                    literal = literal.replace(part, $scope.$eval(evalTpl))
                                }), literal
                            }
                        }, {
                            key: "_addWatchers",
                            value: function() {
                                var _this58 = this;
                                if (!this._parts) return null;
                                this._parts.forEach(function(_ref29) {
                                    var part = _ref29.part,
                                        needWatch = _ref29.needWatch,
                                        evalTpl = _ref29.evalTpl;
                                    needWatch && !_this58._watchers[part] && (_this58._forStop.push($scope.$watch(evalTpl, _this58._handler)), _this58._watchers[part] = !0)
                                })
                            }
                        }], [{
                            key: "_getLiteralTemplate",
                            value: function() {
                                return String($element.attr("w-i18n")).trim()
                            }
                        }, {
                            key: "_getParts",
                            value: function(template) {
                                var parts = template.match(/{{.*?(}})/g);
                                return parts ? parts.map(function(part) {
                                    return {
                                        part: part,
                                        evalTpl: part.replace("{{", "").replace("}}", "").replace("::", ""),
                                        needWatch: -1 === part.indexOf("::")
                                    }
                                }) : null
                            }
                        }]), I18n
                    }())
                },
                transclude: !0,
                template: function($element) {
                    if ("W-I18N" === $element.get(0).tagName) return "<span ng-transclude></span>"
                }
            }
        }).$inject = ["Base", "i18n", "utils"], angular.module("app").directive("wI18n", directive),
        function() {
            window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                originalLocation: window.location.href
            });
            var ROUTES = {
                    id: "root",
                    children: [{
                        id: "signIn",
                        data: {
                            url: "/sign-in/{userType}?forgetPass",
                            noLogin: !0,
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }],
                            params: {
                                userType: ""
                            }
                        }
                    }, {
                        id: "signUp",
                        data: {
                            url: "/sign-up/{userType}",
                            noLogin: !0,
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }],
                            params: {
                                userType: ""
                            }
                        }
                    }, {
                        id: "switch",
                        data: {
                            url: "/switch",
                            noLogin: !0,
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "welcome",
                        data: {
                            url: "/",
                            noLogin: !0,
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "create",
                        data: {
                            url: "/create",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "restore",
                        data: {
                            url: "/import/restore",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "fromBackup",
                        data: {
                            url: "/import/fromBackup",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "ledger",
                        data: {
                            url: "/import/ledger",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "keeper",
                        data: {
                            url: "/import/waveskeeper",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "import",
                        data: {
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "stand",
                        data: {
                            noLogin: !0,
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "desktop",
                        data: {
                            noLogin: !0,
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "stakingFaq",
                        data: {
                            url: "/investments/staking/faq",
                            noLogin: !0,
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "nsbtFaq",
                        data: {
                            url: "/investments/nsbt/faq",
                            noLogin: !0,
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "leasingFaq",
                        data: {
                            url: "/investments/staking/WAVES/faq?start",
                            noLogin: !0,
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "news",
                        data: {
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "staking",
                        data: {
                            url: "/investments/staking/USDN/client",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "stakingLanding",
                        data: {
                            url: "/investments/staking/USDN",
                            noLogin: !0,
                            innerStateId: "staking",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "stablecoins",
                        data: {
                            url: "/investments/staking/{ticker}",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }],
                            params: {
                                ticker: {
                                    dynamic: !0,
                                    value: "EURN"
                                }
                            }
                        },
                        children: []
                    }, {
                        id: "stakingALP_BTC",
                        data: {
                            url: "/investments/algorithmictrading/BTC",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }],
                            params: {
                                ticker: "BTC"
                            }
                        },
                        children: []
                    }, {
                        id: "stakingALP_ETH",
                        data: {
                            url: "/investments/algorithmictrading/ETH",
                            controller: "stakingALP",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }],
                            params: {
                                ticker: "ETH"
                            }
                        },
                        children: []
                    }, {
                        id: "stakingALP",
                        data: {
                            url: "/investments/algorithmictrading/USDT",
                            controller: "stakingALP",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }],
                            params: {
                                ticker: "USDT"
                            }
                        },
                        children: []
                    }, {
                        id: "stakingALP_USDC",
                        data: {
                            url: "/investments/algorithmictrading/USDC",
                            controller: "stakingALP",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }],
                            params: {
                                ticker: "USDC"
                            }
                        },
                        children: []
                    }, {
                        id: "stakingLamboUSDT",
                        data: {
                            url: "/investments/lambo/USDT",
                            controller: "stakingLambo",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }],
                            params: {
                                ticker: "USDT"
                            }
                        },
                        children: []
                    }, {
                        id: "stakingLamboUSDC",
                        data: {
                            url: "/investments/lambo/USDC",
                            controller: "stakingLambo",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }],
                            params: {
                                ticker: "USDC"
                            }
                        },
                        children: []
                    }, {
                        id: "stakingCurve",
                        data: {
                            url: "/investments/LPStaking/USDT/client",
                            controller: "StakingCurve",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "stakingCurveUSDC",
                        data: {
                            url: "/investments/LPStaking/USDC/client",
                            controller: "StakingCurve",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "stakingCurveBTC",
                        data: {
                            url: "/investments/LPStaking/BTC/client",
                            controller: "StakingCurve",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "stakingCurveETH",
                        data: {
                            url: "/investments/LPStaking/ETH/client",
                            controller: "StakingCurve",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "stakingCurveLanding",
                        data: {
                            url: "/investments/LPStaking/USDT",
                            noLogin: !0,
                            innerStateId: "stakingCurve",
                            controller: "StakingCurve",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "stakingCurveLandingUSDC",
                        data: {
                            url: "/investments/LPStaking/USDC",
                            noLogin: !0,
                            innerStateId: "stakingCurveUSDC",
                            controller: "StakingCurve",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "stakingCurveLandingBTC",
                        data: {
                            url: "/investments/LPStaking/BTC",
                            noLogin: !0,
                            innerStateId: "stakingCurveBTC",
                            controller: "StakingCurve",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "stakingCurveLandingETH",
                        data: {
                            url: "/investments/LPStaking/ETH",
                            noLogin: !0,
                            innerStateId: "stakingCurveETH",
                            controller: "StakingCurve",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "stakingCurveFaq",
                        data: {
                            url: "/investments/LPStaking/{ticker}/faq",
                            controller: "StakingCurveFaq",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }],
                            params: {
                                ticker: "USDT"
                            }
                        },
                        children: []
                    }, {
                        id: "stakingALPFaq",
                        data: {
                            url: "/investments/algorithmictrading/faq",
                            controller: "stakingALPFaq",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "stakingLamboFaq",
                        data: {
                            url: "/investments/lambo/faq",
                            controller: "stakingLamboFaq",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "depositWithdrawFaq",
                        data: {
                            url: "/deposit_withdraw/faq",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "chooseUser",
                        data: {
                            url: "/choose-user",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "wallet",
                        data: {
                            url: "/wallet/{child}",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }],
                            params: {
                                child: {
                                    dynamic: !0,
                                    value: "assets"
                                }
                            }
                        }
                    }, {
                        id: "dex",
                        data: {
                            url: "/dex?assetId1&assetId2",
                            reloadOnSearch: !1,
                            views: [{
                                name: "mainContent",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "dex-demo",
                        data: {
                            noLogin: !0,
                            url: "/dex-demo?assetId1&assetId2",
                            reloadOnSearch: !1,
                            views: [{
                                name: "mainContent",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "withdrawAndDeposit",
                        data: {
                            url: "/{type}/{assetIdOrTicker}",
                            views: [{
                                name: "main",
                                noController: !0,
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html"
                            }],
                            params: {
                                assetIdOrTicker: {
                                    dynamic: !0,
                                    squash: !0,
                                    value: ""
                                },
                                type: {
                                    dynamic: !0,
                                    value: "deposit"
                                }
                            }
                        },
                        children: []
                    }, {
                        id: "trade",
                        data: {
                            noLogin: !0,
                            url: "/trading/spot/{tradingPair}",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }],
                            params: {
                                tradingPair: {
                                    dynamic: !0,
                                    value: "WAVES"
                                }
                            }
                        }
                    }, {
                        id: "stakingRef",
                        data: {
                            url: "/?ref",
                            controller: "Staking",
                            views: [{
                                name: "main",
                                templateUrl: "modules/staking/templates/staking.html"
                            }]
                        },
                        children: []
                    }, {
                        id: "investments",
                        data: {
                            url: "/investments",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "gatewayFees",
                        data: {
                            url: "/gatewayfees",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "page404",
                        data: {
                            url: "/404",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "buycrypto",
                        data: {
                            url: "/buycrypto",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "buyBTC",
                        data: {
                            url: "/buycrypto/buybtc",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "buyBTCFaq",
                        data: {
                            url: "/buycrypto/buybtc/faq",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "buyWAVESFaq",
                        data: {
                            url: "/buycrypto/buywaves/faq",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "buyWaves",
                        data: {
                            url: "/buycrypto/buywaves",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "buyUsdn",
                        data: {
                            url: "/buycrypto/buyusdn",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "buyUSDNFaq",
                        data: {
                            url: "/buycrypto/buyusdn/faq",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "buyEGG",
                        data: {
                            url: "/buycrypto/buyEGG",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "leasing",
                        data: {
                            url: "/investments/staking/WAVES?start",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }],
                            reloadOnSearch: !1
                        },
                        children: []
                    }, {
                        id: "nsbt",
                        data: {
                            url: "/investments/nsbt",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "marketMaking",
                        data: {
                            url: "/market-making",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "otc",
                        data: {
                            url: "/otc/usdt_usdn",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "settings",
                        data: {
                            url: "/settings",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "swapWavesUsdn",
                        data: {
                            url: "/trading/swap/waves_usdn",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "otcFaq",
                        data: {
                            url: "/otc/usdt_usdn/faq",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        }
                    }, {
                        id: "defo",
                        data: {
                            url: "/trading/defo/client",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "defoLanding",
                        data: {
                            url: "/trading/defo",
                            noLogin: !0,
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "defoFaq",
                        data: {
                            url: "/trading/defo/faq",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "defoInvestment",
                        data: {
                            url: "/investments/neutrinopools?start",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }],
                            reloadOnSearch: !1
                        },
                        children: []
                    }, {
                        id: "defoInvestmentFaq",
                        data: {
                            url: "/investments/neutrinopools/faq",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "swapWavesUsdnFaq",
                        data: {
                            url: "/trading/swap/waves_usdn/faq",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }, {
                        id: "poolsMain",
                        data: {
                            url: "/liquiditypools",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: [{
                            id: "pools",
                            data: {
                                url: "/pools",
                                views: [{
                                    name: "main",
                                    templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                    noController: !0
                                }]
                            }
                        }, {
                            id: "dashboard",
                            data: {
                                url: "/dashboard",
                                views: [{
                                    name: "main",
                                    templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                    noController: !0
                                }]
                            }
                        }, {
                            id: "boosting",
                            data: {
                                url: "/boosting",
                                views: [{
                                    name: "main",
                                    templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                    noController: !0
                                }]
                            }
                        }, {
                            id: "stats",
                            data: {
                                url: "/stats",
                                views: [{
                                    name: "main",
                                    templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                    noController: !0
                                }]
                            }
                        }, {
                            id: "governance",
                            data: {
                                url: "/governance",
                                views: [{
                                    name: "main",
                                    templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                    noController: !0
                                }]
                            },
                            children: [{
                                id: "active",
                                data: {
                                    url: "/active",
                                    views: [{
                                        name: "main",
                                        templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                        noController: !0
                                    }]
                                }
                            }, {
                                id: "completed",
                                data: {
                                    url: "/completed",
                                    views: [{
                                        name: "main",
                                        templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                        noController: !0
                                    }]
                                }
                            }, {
                                id: "reward",
                                data: {
                                    url: "/reward",
                                    views: [{
                                        name: "main",
                                        templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                        noController: !0
                                    }]
                                }
                            }, {
                                id: "voting",
                                data: {
                                    url: "/voting/{voteId}",
                                    views: [{
                                        name: "main",
                                        templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                        noController: !0
                                    }]
                                },
                                params: {
                                    voteId: {
                                        dynamic: !0,
                                        squash: !0,
                                        value: ""
                                    }
                                }
                            }]
                        }, {
                            id: "IDO",
                            data: {
                                url: "/IDO",
                                views: [{
                                    name: "main",
                                    templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                    noController: !0
                                }]
                            }
                        }, {
                            id: "pair",
                            data: {
                                url: "/pools/{pool}/{form}",
                                views: [{
                                    name: "main",
                                    templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                    noController: !0
                                }],
                                params: {
                                    pool: "WAVES_USDN",
                                    form: "deposit"
                                }
                            }
                        }, {
                            id: "earlybirds",
                            data: {
                                url: "/earlybirds",
                                views: [{
                                    name: "main",
                                    templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                    noController: !0
                                }]
                            }
                        }]
                    }, {
                        id: "poolsFaq",
                        data: {
                            url: "/liquiditypools/faq",
                            views: [{
                                name: "main",
                                templateUrl: "modules/wrapperForReact/templates/wrapperForReact.html",
                                noController: !0
                            }]
                        },
                        children: []
                    }]
                },
                config = function($urlRouterProvider, $stateProvider, $locationProvider, $compileProvider) {
                    var tsUtils = require("ts-utils"),
                        BigNumber = require("@waves/bignumber").BigNumber,
                        ds = require("data-service"),
                        i18next = require("i18next"),
                        dayjs = require("dayjs");
                    return WavesApp.stateTree = new tsUtils.Tree(ROUTES), new(function() {
                        function AppConfig() {
                            _classCallCheck(this, AppConfig), this._initUrlResolveMode(), this._initLocalize(), this._initAdapters(), this._initStates(), this._initCompiler()
                        }
                        return _createClass(AppConfig, [{
                            key: "_initAdapters",
                            value: function() {
                                var transport;
                                switch (!0) {
                                    case WavesApp.isWeb() && "hid" in navigator:
                                        transport = window.HwTransportWebHid;
                                        break;
                                    case WavesApp.isWeb():
                                        transport = window.HwTransportU2F;
                                        break;
                                    default:
                                        transport = window.TransportNodeHid
                                }
                                ds.signAdapters.adapterList.forEach(function(Adapter) {
                                    try {
                                        Adapter.initOptions({
                                            networkCode: ds.config.get("code").charCodeAt(0),
                                            openTimeout: WavesApp.sign.openTimeout,
                                            listenTimeout: WavesApp.sign.listenTimeout,
                                            exchangeTimeout: WavesApp.sign.exchangeTimeout,
                                            debug: !WavesApp.isProduction(),
                                            transport: transport && transport.default,
                                            extension: function() {
                                                return "undefined" == typeof Waves ? null : Waves
                                            }
                                        })
                                    } catch (e) {
                                        return null
                                    }
                                })
                            }
                        }, {
                            key: "_initUrlResolveMode",
                            value: function() {
                                $locationProvider.html5Mode(!0), $urlRouterProvider.otherwise("/")
                            }
                        }, {
                            key: "_initLocalize",
                            value: function() {
                                var BIG_NUMBER_FORMAT = {
                                    decimalSeparator: ".",
                                    groupSeparator: ",",
                                    groupSize: 3,
                                    secondaryGroupSize: 0,
                                    fractionGroupSeparator: " ",
                                    fractionGroupSize: 0
                                };
                                i18next.use(ds.BackendI18Next).init({
                                    lng: AppConfig.getUserLang(),
                                    debug: !WavesApp.isProduction() && -1 !== location.href.indexOf("localesDebug=true"),
                                    ns: WavesApp.namespaces,
                                    fallbackLng: "en",
                                    whitelist: Object.keys(WavesApp.localize),
                                    defaultNS: "app",
                                    useCookie: !1,
                                    useLocalStorage: !1,
                                    interpolation: {
                                        format: function(value, _format) {
                                            switch (_format) {
                                                case "money":
                                                    return value && value.getTokens().toFixed() || "";
                                                case "money-currency":
                                                    return value ? "".concat(value.getTokens().toFixed(), " ").concat(value.asset.displayName) : "";
                                                case "money-fee":
                                                    return value && "".concat(value.getTokens().toFixed(), " ").concat(value.asset.displayName) || "";
                                                case "BigNumber":
                                                    return value && value.toFixed() || "";
                                                default:
                                                    throw new Error("Wrong format type!")
                                            }
                                        }
                                    },
                                    backend: {
                                        loadPath: "/locales/{{lng}}_".concat(WavesApp.version, ".json"),
                                        referenceLng: "en",
                                        fetch: ds.fetch,
                                        locales: WavesApp.locales
                                    }
                                }), i18next.on("initialized", function() {
                                    var localeData = WavesApp.getLocaleData().separators;
                                    document.querySelector("html").setAttribute("lng", i18next.language), BigNumber.config.set({
                                        ROUNDING_MODE: BigNumber.ROUND_MODE.ROUND_DOWN,
                                        FORMAT: tsUtils.merge(Object.create(null), BIG_NUMBER_FORMAT, {
                                            groupSeparator: localeData.group,
                                            decimalSeparator: localeData.decimal,
                                            groupSize: 3
                                        })
                                    }), dayjs.locale(ds.utils.formatLocaleForDayjs(i18next.language)), WavesApp.isDesktop() && transfer("setLanguage", i18next.language), i18next.on("languageChanged", function() {
                                        WavesApp.isDesktop() && transfer("setLanguage", i18next.language), dayjs.locale(ds.utils.formatLocaleForDayjs(i18next.language)), document.querySelector("html").setAttribute("lng", i18next.language);
                                        var localeData = WavesApp.getLocaleData().separators;
                                        BigNumber.config.set({
                                            ROUNDING_MODE: BigNumber.ROUND_MODE.ROUND_DOWN,
                                            FORMAT: tsUtils.merge(Object.create(null), BIG_NUMBER_FORMAT, {
                                                groupSeparator: localeData.group,
                                                decimalSeparator: localeData.decimal
                                            })
                                        })
                                    })
                                })
                            }
                        }, {
                            key: "_initStates",
                            value: function() {
                                var defaultUrl = AppConfig.getUrlFromState(WavesApp.stateTree.find("welcome"));
                                $urlRouterProvider.when("", defaultUrl), WavesApp.stateTree.toArray().slice(1).forEach(function(item) {
                                    var _abstract = item.get("abstract"),
                                        url = AppConfig.getUrlFromState(item),
                                        redirectTo = item.get("redirectTo"),
                                        reloadOnSearch = item.get("reloadOnSearch"),
                                        params = item.get("params"),
                                        views = item.get("views").reduce(function(views, viewData) {
                                            var controller = _abstract || viewData.noController ? void 0 : AppConfig.getCtrlName(item.get("controller") || tsUtils.camelCase(item.id)),
                                                template = viewData.template,
                                                templateUrl = template ? void 0 : viewData.templateUrl || AppConfig.getTemplateUrl(WavesApp.stateTree.getPath(item.id));
                                            return views[viewData.name] = {
                                                controller: controller,
                                                template: template,
                                                templateUrl: templateUrl
                                            }, views
                                        }, Object.create(null));
                                    $stateProvider.state(WavesApp.stateTree.getPath(item.id).join("."), {
                                        abstract: _abstract,
                                        url: url,
                                        redirectTo: redirectTo,
                                        views: views,
                                        reloadOnSearch: reloadOnSearch,
                                        params: params
                                    })
                                })
                            }
                        }, {
                            key: "_initCompiler",
                            value: function() {
                                $compileProvider.commentDirectivesEnabled(!1), $compileProvider.cssClassDirectivesEnabled(!1), $compileProvider.debugInfoEnabled(!WavesApp.isProduction())
                            }
                        }], [{
                            key: "getCtrlName",
                            value: function(name) {
                                return "".concat(name.charAt(0).toUpperCase() + name.substr(1), "Ctrl as $ctrl")
                            }
                        }, {
                            key: "getTemplateUrl",
                            value: function(path) {
                                return path.filter(function(id) {
                                    return !WavesApp.stateTree.find(id).get("abstract")
                                }).reduce(function(result, item, index, array) {
                                    return item = tsUtils.camelCase(item), index === array.length - 1 ? result += "/modules/".concat(item, "/templates/").concat(item, ".html") : result += "/modules/".concat(item), result
                                }, "").replace(/\/\//g, "/").substr(1)
                            }
                        }, {
                            key: "getUserLang",
                            value: function() {
                                var langFromStorage, langs = ds.utils.ConfigService.getConfig("SETTINGS.LANGS") || ["ru", "en"],
                                    available = Object.keys(WavesApp.localize).filter(function(lng) {
                                        return langs.includes(lng)
                                    });
                                try {
                                    langFromStorage = JSON.parse(localStorage.getItem("lng"))
                                } catch (e) {
                                    localStorage.removeItem("lng")
                                }
                                if (-1 !== available.indexOf(langFromStorage)) return langFromStorage;
                                var cookieLng = Cookies.get("locale"),
                                    userLang = navigator.language || navigator.userLanguage;
                                if (-1 !== available.indexOf(cookieLng)) return cookieLng;
                                if (userLang) {
                                    if (-1 !== available.indexOf(userLang)) return userLang;
                                    var lng = null;
                                    return userLang.split(/\W/).some(function(part) {
                                        return -1 !== available.indexOf(part) ? lng = part : -1 !== available.indexOf(part.toLowerCase()) && (lng = part.toLowerCase()), !!lng
                                    }), lng || "en"
                                }
                                return "en"
                            }
                        }, {
                            key: "getUrlFromState",
                            value: function(state) {
                                return state.get("abstract") ? void 0 : state.get("url") || "/".concat(state.id)
                            }
                        }]), AppConfig
                    }())
                };
            config.$inject = ["$urlRouterProvider", "$stateProvider", "$locationProvider", "$compileProvider"], angular.module("app").config(config)
        }(),
        function() {
            var factory = function(node, wavesUtils, utils) {
                var matcher = require("data-service").Matcher.getInstance();
                return utils.bind(new function Waves() {
                    _classCallCheck(this, Waves), this.node = node, this.matcher = matcher, this.utils = wavesUtils
                })
            };
            factory.$inject = ["node", "wavesUtils", "utils"], angular.module("app").factory("waves", factory)
        }(),
        function() {
            var factory = function(user, utils) {
                var tsUtils = require("ts-utils"),
                    Base = function() {
                        function Base($scope) {
                            var _this59 = this;
                            if (_classCallCheck(this, Base), this.wasDestroed = !1, this.__emitterListeners = Object.create(null), $scope) var stop = $scope.$on("$destroy", function() {
                                _this59.$onDestroy(), stop()
                            });
                            this.signals = {
                                destroy: new tsUtils.Signal,
                                logout: new tsUtils.Signal
                            }, this.cid = tsUtils.uniqueId("base"), this.receive(user.logoutSignal, this.signals.logout.dispatch, this.signals.logout)
                        }
                        return _createClass(Base, [{
                            key: "listenEventEmitter",
                            value: function(emitter, event, handler, methods) {
                                (methods = methods || Object.create(null)).on = methods.on || "on", methods.off = methods.off || "off", this.__emitterListeners[event] || (this.__emitterListeners[event] = []), this.__emitterListeners[event].push({
                                    emitter: emitter,
                                    handler: handler,
                                    methods: methods
                                }), emitter[methods.on](event, handler, methods.capture)
                            }
                        }, {
                            key: "stopListenEventEmitter",
                            value: function(argument_0, argument_1, argument_2) {
                                var event, handler, emitter, _this60 = this;
                                return (arguments.length <= 0 ? void 0 : argument_0) && "object" === _typeof(arguments.length <= 0 ? void 0 : argument_0) ? (handler = event = null, emitter = arguments.length <= 0 ? void 0 : argument_0) : (arguments.length <= 0 ? void 0 : argument_0) && "function" == typeof(arguments.length <= 0 ? void 0 : argument_0) ? (handler = arguments.length <= 0 ? void 0 : argument_0, emitter = event = null) : event = arguments.length <= 0 ? void 0 : argument_0, (arguments.length <= 1 ? void 0 : argument_1) && "object" === _typeof(arguments.length <= 1 ? void 0 : argument_1) ? emitter = arguments.length <= 1 ? void 0 : argument_1 : handler = arguments.length <= 1 ? void 0 : argument_1, (arguments.length <= 2 ? void 0 : argument_2) && (emitter = arguments.length <= 2 ? void 0 : argument_2), event ? handler ? void(this.__emitterListeners[event] = this.__emitterListeners[event].filter(function(data) {
                                    return emitter ? data.emitter !== emitter || data.handler !== handler || (emitter[data.methods.off](event, handler), !1) : data.handler !== handler || (data.emitter[data.methods.off](event, handler), !1)
                                })) : (this.__emitterListeners[event].slice().forEach(function(data) {
                                    _this60.stopListenEventEmitter(event, data.handler, emitter)
                                }), null) : (Object.keys(this.__emitterListeners).forEach(function(myEvent) {
                                    _this60.stopListenEventEmitter(myEvent, handler, emitter)
                                }), null)
                            }
                        }, {
                            key: "observe",
                            value: function(keys, callback, options) {
                                this.receive(utils.observe(this, keys, options), callback, this)
                            }
                        }, {
                            key: "observeOnce",
                            value: function(keys, callback, options) {
                                this.receiveOnce(utils.observe(this, keys, options), callback, this)
                            }
                        }, {
                            key: "stopObserve",
                            value: function(keys, handler) {
                                this.stopReceive(utils.observe(this, keys), handler)
                            }
                        }, {
                            key: "syncSettings",
                            value: function(syncObject) {
                                var _this61 = this;
                                return Object.keys(syncObject).forEach(function(name) {
                                    var settingsPath = syncObject[name];
                                    if (_this61.observe(name, function() {
                                            user.setSetting(settingsPath, _this61[name])
                                        }), user.changeSetting) {
                                        var handler = function(path) {
                                            path === settingsPath && (_this61[name] = user.getSetting(path))
                                        };
                                        _this61.receive(user.changeSetting, handler), _this61.receiveOnce(user.logoutSignal, function() {
                                            _this61.stopReceive(user.logoutSignal, handler)
                                        })
                                    }
                                    _this61[name] = user.getSetting(settingsPath)
                                })
                            }
                        }, {
                            key: "$onDestroy",
                            value: function() {
                                this.signals.destroy.dispatch(), this.stopReceive(), this.signals.destroy.off(), this.signals.logout.off(), this.stopListenEventEmitter(), this.wasDestroed = !0
                            }
                        }]), Base
                    }();
                return Base.DOM_EVENTS_METHODS = {
                    on: "addEventListener",
                    off: "removeEventListener",
                    capture: !1
                }, Base.prototype.receive = tsUtils.Receiver.prototype.receive, Base.prototype.receiveOnce = tsUtils.Receiver.prototype.receiveOnce, Base.prototype.stopReceive = tsUtils.Receiver.prototype.stopReceive, Base
            };
            factory.$inject = ["user", "utils"], angular.module("app.utils").factory("Base", factory)
        }(),
        function() {
            var Signal = require("ts-utils").Signal,
                factory = function(user, Poll, $injector, TxEvent, utils) {
                    var EventManager = function() {
                        function EventManager() {
                            var _this62 = this;
                            _classCallCheck(this, EventManager), this.ready = null, this.signals = {
                                changeBalanceEvent: new Signal
                            }, this._poll = null, this._events = Object.create(null), this._waves = null, user.onLogin().then(function() {
                                return _this62._handleLogin()
                            }, function() {
                                return _this62._handleLogout()
                            })
                        }
                        return _createClass(EventManager, [{
                            key: "addTx",
                            value: function(tx, moneyList) {
                                this._events[tx.id] = new TxEvent(tx.id, moneyList), this._syncEventList(), this._resetPoll()
                            }
                        }, {
                            key: "getReservedMoneyList",
                            value: function() {
                                var _this63 = this;
                                return Object.keys(this._events).reduce(function(list, eventId) {
                                    return list.concat(_this63._events[eventId].getReservedMoneyList())
                                }, [])
                            }
                        }, {
                            key: "_handleLogin",
                            value: function() {
                                this._initialize(), user.logoutSignal.once(this._handleLogout, this)
                            }
                        }, {
                            key: "_handleLogout",
                            value: function() {
                                this._poll && this._poll.destroy(), user.loginSignal.once(this._handleLogin, this)
                            }
                        }, {
                            key: "_initialize",
                            value: function() {
                                var _this64 = this;
                                this._waves = $injector.get("waves"), this._waves.node.transactions.listUtx().then(function(list) {
                                    var events = user.getSetting("events"),
                                        utxHash = utils.toHash(list, "id");
                                    Object.keys(events).forEach(function(id) {
                                        utxHash[id] || _this64._removeEvent(id, !0)
                                    }), list && list.length && _this64._resetPoll()
                                })
                            }
                        }, {
                            key: "_addEvent",
                            value: function(tx) {
                                if (!this._events[tx.id]) return this._events[tx.id] = new TxEvent(tx.id, EventManager._getMoneyListData(tx)), this._syncEventList(), !0
                            }
                        }, {
                            key: "_removeEvent",
                            value: function(id, force) {
                                (this._events[id] || force) && (delete this._events[id], this._syncEventList(), force || this.signals.changeBalanceEvent.dispatch())
                            }
                        }, {
                            key: "_resetPoll",
                            value: function() {
                                var _this65 = this;
                                this._poll && this._poll.destroy(), setTimeout(function() {
                                    _this65._poll = new Poll(_this65._waves.node.transactions.listUtx, _this65._addUtxList.bind(_this65), 1e3)
                                }, 1e3)
                            }
                        }, {
                            key: "_addUtxList",
                            value: function(list) {
                                var _this66 = this,
                                    dispatch = !1,
                                    utxHash = utils.toHash(list, "id");
                                Object.keys(this._events).forEach(function(id) {
                                    utxHash[id] || (_this66._removeEvent(id), dispatch = !0)
                                }), list.length ? (list.forEach(function(tx) {
                                    _this66._events[tx.id] || (_this66._addEvent(tx), dispatch = !0)
                                }), dispatch && this.signals.changeBalanceEvent.dispatch()) : this._poll && (this._poll.destroy(), this._poll = null)
                            }
                        }, {
                            key: "_syncEventList",
                            value: function() {
                                var result = Object.create(null);
                                Object.keys(this._events).forEach(function(id) {
                                    result[id] = !0
                                }), user.setSetting("events", result)
                            }
                        }], [{
                            key: "_getMoneyListData",
                            value: function(tx) {
                                var moneyList = [tx.fee];
                                return 4 === tx.type && moneyList.push(tx.amount), moneyList
                            }
                        }]), EventManager
                    }();
                    return utils.bind(new EventManager)
                };
            factory.$inject = ["user", "Poll", "$injector", "TxEvent", "utils"], angular.module("app").factory("eventManager", factory)
        }(),
        function() {
            var factory = function() {
                var AVAILABLE_TAGS = ["div", "span"],
                    AVAILABLE_URL_PROTOCOLS = ["http:", "https:", "mailto:", "tg:"],
                    LocaleParser = function() {
                        function LocaleParser(open, close, contentOpen, contentClose, compile) {
                            _classCallCheck(this, LocaleParser), this.openChar = open, this.closeChar = close, this.contentOpenChar = contentOpen, this.contentCloseChar = contentClose, this.compile = compile
                        }
                        return _createClass(LocaleParser, [{
                            key: "parse",
                            value: function(text) {
                                var _this67 = this,
                                    openList = [],
                                    closeList = [],
                                    openContent = [],
                                    closeContent = [];
                                text.split("").forEach(function(_char5, index) {
                                    switch (_char5) {
                                        case _this67.openChar:
                                            openList.push(index);
                                            break;
                                        case _this67.closeChar:
                                            closeList.push(index);
                                            break;
                                        case _this67.contentOpenChar:
                                            openContent.push(index);
                                            break;
                                        case _this67.contentCloseChar:
                                            closeContent.push(index)
                                    }
                                });
                                var mainIntervals = [],
                                    contentIntervals = [];
                                openList.reverse().forEach(function(open) {
                                    closeList.some(function(close, i) {
                                        return open < close && (mainIntervals.push({
                                            open: open,
                                            close: close
                                        }), closeList.splice(i, 1), !0)
                                    })
                                }), openContent.reverse().forEach(function(open) {
                                    closeContent.some(function(close, i) {
                                        return open < close && (contentIntervals.push({
                                            open: open,
                                            close: close
                                        }), closeContent.splice(i, 1), !0)
                                    })
                                });
                                var index = 0,
                                    result = "";
                                return mainIntervals.reverse().forEach(function(mainData) {
                                    contentIntervals.forEach(function(contentData) {
                                        if (contentData.open === mainData.close + 1) {
                                            var content = text.slice(contentData.open + 1, contentData.close),
                                                main = text.slice(mainData.open + 1, mainData.close);
                                            result += text.slice(index, mainData.open) + _this67.compile({
                                                main: main,
                                                content: content
                                            }), index = contentData.close + 1
                                        }
                                    })
                                }), result += text.slice(index)
                            }
                        }]), LocaleParser
                    }(),
                    tagParser = new LocaleParser("{", "}", "[", "]", function(_ref30) {
                        var main = _ref30.main,
                            content = _ref30.content;
                        try {
                            var firstDotIndex = main.indexOf("."),
                                tagName = "";
                            switch (firstDotIndex) {
                                case 0:
                                    tagName = "span";
                                    break;
                                case -1:
                                    tagName = main;
                                    break;
                                default:
                                    tagName = main.slice(0, firstDotIndex)
                            }
                            var classes = main.slice(firstDotIndex + 1).split(".").join(" ");
                            if (-1 === AVAILABLE_TAGS.indexOf(tagName)) throw new Error("Locale parser: Wrong tag name! ".concat(tagName));
                            return "<".concat(tagName, ' class="').concat(classes, '">').concat(content, "</").concat(tagName, ">")
                        } catch (e) {
                            return content
                        }
                    }),
                    linkParser = new LocaleParser("[", "]", "(", ")", function(_ref31) {
                        var main = _ref31.main,
                            content = _ref31.content;
                        try {
                            var url = new URL(content);
                            if (-1 === AVAILABLE_URL_PROTOCOLS.indexOf(url.protocol)) throw new Error("Locale parser: Wrong url protocol! ".concat(url.protocol));
                            return '<a href="'.concat(content, '" target="_blank" rel="noopener noreferrer">').concat(main, "</a>")
                        } catch (e) {
                            return ""
                        }
                    });
                return function(text) {
                    return tagParser.parse(linkParser.parse(text))
                }
            };
            factory.$inject = [], angular.module("app").factory("localeParser", factory)
        }(),
        function() {
            var factory = function(state, user, $state) {
                return new(function() {
                    function StateManager() {
                        _classCallCheck(this, StateManager), this.rootStateList = [], this.subStateList = []
                    }
                    return _createClass(StateManager, [{
                        key: "getSrefByState",
                        value: function(state) {
                            return WavesApp.stateTree.getPath(state.id).join(".")
                        }
                    }, {
                        key: "getStateTree",
                        value: function(argument_0) {
                            var fromId = 0 < arguments.length && void 0 !== argument_0 ? argument_0 : "main";
                            return WavesApp.stateTree.find(fromId).getChildren().filter(function(child) {
                                return !0 !== child.get("noLogin")
                            }).map(StateManager._remapStateItem)
                        }
                    }, {
                        key: "_currentStateLists",
                        value: function() {
                            if (!$state.$current || !$state.$current.name) return !1;
                            var root = WavesApp.stateTree.find("main"),
                                rootPath = WavesApp.stateTree.getPath(root.id).join(".");
                            this.rootStateList = root.getChildren().map(function(item) {
                                var path = user.getActiveState(item.id).name,
                                    base = "".concat(rootPath, ".").concat(item.id);
                                return {
                                    path: path,
                                    name: item.id,
                                    base: base
                                }
                            });
                            var idList = $state.$current.name.split("."),
                                parent = idList[idList.length - 2],
                                stateData = WavesApp.stateTree.find(parent);
                            stateData && !stateData.get("abstract") ? this.subStateList = stateData.getChildren().map(function(item) {
                                var path = WavesApp.stateTree.getPath(item.id).join(".");
                                return {
                                    name: item.id,
                                    path: path
                                }
                            }) : this.subStateList = []
                        }
                    }], [{
                        key: "_remapStateItem",
                        value: function(item) {
                            var list = item.getChildren().map(StateManager._remapStateItem),
                                result = {
                                    list: list,
                                    isLeaf: 0 === list.length,
                                    id: item.id
                                };
                            return list.length ? Object.defineProperty(result, "sref", {
                                get: function() {
                                    return user.getActiveState(item.id).name
                                }
                            }) : result.sref = user.getActiveState(item.id).name, result
                        }
                    }]), StateManager
                }())
            };
            factory.$inject = ["state", "user", "$state"], angular.module("app").factory("stateManager", factory)
        }(),
        function() {
            var tsUtils = require("ts-utils"),
                factory = function(timeLine) {
                    return {
                        readonly: function(target, key, descriptor) {
                            var origin = descriptor.value;
                            descriptor.value = function() {
                                for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) args[_key8] = arguments[_key8];
                                var result = origin.call.apply(origin, [this].concat(args));
                                return tsUtils.getPaths(result).forEach(function(path) {
                                    Object.freeze(tsUtils.get(result, path))
                                }), result
                            }
                        },
                        scope: function(defaults) {
                            return function(target, key, descriptor) {
                                var cache = defaults || Object.create(null),
                                    origin = descriptor.value;
                                descriptor.value = function() {
                                    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) args[_key9] = arguments[_key9];
                                    return args.push(cache), origin.call.apply(origin, [this].concat(args))
                                }
                            }
                        },
                        async: function(timeout) {
                            var addTimeout, dropTimeout;
                            return dropTimeout = timeout ? (addTimeout = function(cb) {
                                    return setTimeout(cb, timeout)
                                }, clearTimeout) : (addTimeout = requestAnimationFrame, cancelAnimationFrame),
                                function(target, key, descriptor) {
                                    var origin = descriptor.value;
                                    descriptor.value = function() {
                                        for (var _this68 = this, _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) args[_key10] = arguments[_key10];
                                        this["__".concat(key, "_timer")] && dropTimeout(this["__".concat(key, "_timer")]), this["__".concat(key, "_timer")] = addTimeout(function() {
                                            _this68["__".concat(key, "_timer")] = null, origin.call.apply(origin, [_this68].concat(args))
                                        })
                                    }
                                }
                        },
                        cachable: function(time, toString) {
                            return function(target, key, descriptor) {
                                var origin = descriptor.value,
                                    cache = Object.create(null),
                                    timeout = 1e3 * time;
                                descriptor.value = 0 < time ? function() {
                                    for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) args[_key11] = arguments[_key11];
                                    var key = toString ? toString(args) : stringify(args);
                                    return cache[key] && cache[key].value || (cache[key] = Object.create(null), cache[key].value = origin.call.apply(origin, [this].concat(args)), cache[key].value && cache[key].value.then && "function" == typeof cache[key].value.then ? cache[key].value.then(function() {
                                        cache[key].timer = timeLine.timeout(function() {
                                            delete cache[key]
                                        }, timeout)
                                    }, function() {
                                        timeLine.cancel(cache[key].timer), delete cache[key]
                                    }) : cache[key].timer = timeLine.timeout(function() {
                                        delete cache[key]
                                    }, timeout)), cache[key].value
                                } : function() {
                                    for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) args[_key12] = arguments[_key12];
                                    var key = toString ? toString(args) : stringify(args);
                                    return cache[key] || (cache[key] = origin.call.apply(origin, [this].concat(args))), cache[key]
                                }
                            }
                        }
                    }
                };

            function stringify(some) {
                try {
                    return JSON.stringify(some)
                } catch (e) {
                    return String(some)
                }
            }
            factory.$inject = ["timeLine"], angular.module("app.utils").factory("decorators", factory)
        }(),
        function() {
            var factory = function(user, utils) {
                var tsUtils = require("ts-utils");
                return new(function() {
                    function SessionBridge() {
                        var _this69 = this;
                        _classCallCheck(this, SessionBridge), this._sessionId = "s_".concat(Date.now()), this._key = "__sb", this._messageHash = Object.create(null), this.signals = utils.liteObject({
                            changeSessions: new tsUtils.Signal
                        }), this._api = utils.liteObject({
                            getLoginData: function(commandData) {
                                return _this69._getLoginData(commandData)
                            },
                            sign: function(commandData) {
                                return _this69._sign(commandData)
                            },
                            response: function(commandData) {
                                return _this69._onResponse(commandData)
                            }
                        }), this._setHandlers(), user.onLogin().then(function() {
                            return _this69._handleLogin()
                        }, function() {
                            return _this69._handleLogout()
                        })
                    }
                    return _createClass(SessionBridge, [{
                        key: "_sessionListKey",
                        get: function() {
                            return "".concat(this._key, "-sessionList")
                        }
                    }]), _createClass(SessionBridge, [{
                        key: "getSessionsData",
                        value: function() {
                            var _this70 = this,
                                userDataHash = this._getOtherSessions().reduce(function(result, sessionId) {
                                    var userData = _this70._getUserDataBySession(sessionId);
                                    return userData ? result[userData.address] = userData : _this70._clearCommand(_this70._getSessionDataKey(sessionId)), result
                                }, Object.create(null));
                            return Object.values(userDataHash)
                        }
                    }, {
                        key: "login",
                        value: function(sessionId) {
                            return this._runCommand("getLoginData", sessionId).then(function(response) {
                                "success" === response.status && user.login(response.data)
                            })
                        }
                    }, {
                        key: "sign",
                        value: function(type, tx) {
                            var master = this._getMasterSessionId(user.address);
                            return this._runCommand("sign", master && master.id, {
                                type: type,
                                tx: tx
                            })
                        }
                    }, {
                        key: "_handleLogin",
                        value: function() {
                            this._addSession(), this._addUserData(), user.logoutSignal.once(this._handleLogout, this)
                        }
                    }, {
                        key: "_handleLogout",
                        value: function() {
                            this._destroy(), user.loginSignal.once(this._handleLogin, this)
                        }
                    }, {
                        key: "_getLoginData",
                        value: function(request) {
                            return this._setResponseSuccess(request, {
                                address: user.address
                            })
                        }
                    }, {
                        key: "_sign",
                        value: function() {}
                    }, {
                        key: "_setResponseSuccess",
                        value: function(request, body) {
                            this._setResponse(request, "success", {
                                data: body
                            })
                        }
                    }, {
                        key: "_setResponseError",
                        value: function(request, message) {
                            this._setResponse(request, "error", {
                                message: message
                            })
                        }
                    }, {
                        key: "_setResponse",
                        value: function(request, status, data) {
                            var _this71 = this,
                                command = this._getCommandKey(request.referer, "response");
                            this._dispatch(command, {
                                id: request.id,
                                referer: this._sessionId,
                                data: _objectSpread({
                                    status: status
                                }, data)
                            }), setTimeout(function() {
                                _this71._clearCommand(command)
                            }, 100)
                        }
                    }, {
                        key: "_runCommand",
                        value: function(apiMethod, targetSessionId, data) {
                            var _this72 = this;
                            return new Promise(function(resolve) {
                                var id = tsUtils.uniqueId("cmd__"),
                                    params = {
                                        id: id,
                                        data: data,
                                        referer: _this72._sessionId
                                    },
                                    command = _this72._getCommandKey(targetSessionId, apiMethod);
                                _this72._messageHash[id] = function(result) {
                                    delete _this72._messageHash[id], _this72._clearCommand(command), resolve(result)
                                }, _this72._dispatch(command, params), setTimeout(function() {
                                    _this72._messageHash[id] && _this72._messageHash[id]({
                                        status: "error",
                                        message: new Error("Timeout limit error!")
                                    })
                                }, 1e3)
                            })
                        }
                    }, {
                        key: "_dispatch",
                        value: function(storageKey, data) {
                            localStorage.setItem(storageKey, JSON.stringify(data))
                        }
                    }, {
                        key: "_clearCommand",
                        value: function(storageKey) {
                            localStorage.removeItem(storageKey)
                        }
                    }, {
                        key: "_onResponse",
                        value: function(commandData) {
                            this._messageHash[commandData.id] && this._messageHash[commandData.id](commandData.data)
                        }
                    }, {
                        key: "_setHandlers",
                        value: function() {
                            var _this73 = this;
                            window.addEventListener("storage", function(event) {
                                return _this73._onStorageEvent(event)
                            }, !1), window.addEventListener("unload", function() {
                                return _this73._destroy()
                            }, !1)
                        }
                    }, {
                        key: "_onStorageEvent",
                        value: function(event) {
                            if (event.newValue) {
                                var cmd = this._parseCommand(event.key);
                                if (cmd && cmd in this._api) {
                                    var commandData = JSON.parse(localStorage.getItem(event.key));
                                    try {
                                        this._api[cmd](commandData)
                                    } catch (e) {
                                        "response" !== cmd && this._setResponseError(commandData, e)
                                    }
                                } else event.key === this._sessionListKey && this.signals.changeSessions.dispatch(this.getSessionsData())
                            }
                        }
                    }, {
                        key: "_destroy",
                        value: function() {
                            this._removeSession(), this._removeUserData()
                        }
                    }, {
                        key: "_addSession",
                        value: function() {
                            var sessions = JSON.parse(localStorage.getItem(this._sessionListKey) || "[]");
                            sessions.push(this._sessionId), localStorage.setItem(this._sessionListKey, JSON.stringify(sessions))
                        }
                    }, {
                        key: "_removeSession",
                        value: function() {
                            var sessions = JSON.parse(localStorage.getItem(this._sessionListKey) || "[]"),
                                index = sessions.indexOf(this._sessionId); - 1 !== index && (sessions.splice(index, 1), localStorage.setItem(this._sessionListKey, JSON.stringify(sessions)))
                        }
                    }, {
                        key: "_addUserData",
                        value: function() {
                            localStorage.setItem(this._getSessionDataKey(), JSON.stringify({
                                name: user.name,
                                address: user.address,
                                id: this._sessionId,
                                isMaster: user.isMaster()
                            }))
                        }
                    }, {
                        key: "_getMasterSessionId",
                        value: function(address) {
                            return tsUtils.find(this.getSessionsData(), {
                                address: address,
                                isMaster: !0
                            })
                        }
                    }, {
                        key: "_getAllSessions",
                        value: function() {
                            return JSON.parse(localStorage.getItem(this._sessionListKey) || "[]")
                        }
                    }, {
                        key: "_getOtherSessions",
                        value: function() {
                            var _this74 = this;
                            return this._getAllSessions().filter(function(sessionId) {
                                return sessionId !== _this74._sessionId
                            })
                        }
                    }, {
                        key: "_removeUserData",
                        value: function(sessionId) {
                            localStorage.removeItem(this._getSessionDataKey(sessionId))
                        }
                    }, {
                        key: "_getUserDataBySession",
                        value: function(sessionId) {
                            return JSON.parse(localStorage.getItem(this._getSessionDataKey(sessionId)))
                        }
                    }, {
                        key: "_getSessionDataKey",
                        value: function(argument_0) {
                            var sessionId = 0 < arguments.length && void 0 !== argument_0 ? argument_0 : this._sessionId;
                            return "".concat(this._key, "-").concat(sessionId)
                        }
                    }, {
                        key: "_getCommandKey",
                        value: function(sessionId, cmd) {
                            return "".concat(this._getSessionDataKey(sessionId), "-").concat(cmd, "-cmd")
                        }
                    }, {
                        key: "_parseCommand",
                        value: function(localStorageKey) {
                            var _localStorageKey$spli2 = _slicedToArray(localStorageKey.split("-").slice(1, -1), 2),
                                sessionId = _localStorageKey$spli2[0],
                                cmd = _localStorageKey$spli2[1];
                            return sessionId && cmd && sessionId === this._sessionId ? cmd : null
                        }
                    }]), SessionBridge
                }())
            };
            factory.$inject = ["user", "utils"], angular.module("app").factory("sessionBridge", factory)
        }(),
        function() {
            var factory = function() {
                return function() {
                    function TxEvent(id, moneyList) {
                        _classCallCheck(this, TxEvent), this.id = id, this.moneyList = moneyList
                    }
                    return _createClass(TxEvent, [{
                        key: "getReservedMoneyList",
                        value: function() {
                            return this.moneyList
                        }
                    }]), TxEvent
                }()
            };
            factory.$inject = [], angular.module("app").factory("TxEvent", factory)
        }(), rc = require("react-components"), (Header = function(reactDirective) {
            return reactDirective(rc.Header, void 0, void 0, {})
        }).$inject = ["reactDirective"], angular.module("app.ui").directive("wHeader", Header),
        function() {
            var factory = function() {
                var StyleManager = function() {
                    function StyleManager(root) {
                        _classCallCheck(this, StyleManager), this.root = root, this.stylesHash = Object.create(null)
                    }
                    return _createClass(StyleManager, [{
                        key: "addStyle",
                        value: function(path, style) {
                            this.removeStyle(path);
                            var content = ".".concat(this.root, " ").concat(path, " { ").concat(this._parseStyle(style), " }"),
                                styleTag = document.createElement("style");
                            styleTag.innerText = content, styleTag.id = path, document.head.appendChild(styleTag), this.stylesHash[path] = styleTag
                        }
                    }, {
                        key: "removeStyle",
                        value: function(path) {
                            this.hasStyle(path) && document.head.removeChild(this.stylesHash[path])
                        }
                    }, {
                        key: "realStyleTransaction",
                        value: function(path, cb) {
                            var element = this.stylesHash[path];
                            element ? (document.head.removeChild(element), cb(), document.head.appendChild(element)) : cb()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            Object.keys(this.stylesHash).forEach(this.removeStyle, this)
                        }
                    }, {
                        key: "hasStyle",
                        value: function(path) {
                            return !!this.stylesHash[path]
                        }
                    }, {
                        key: "_parseStyle",
                        value: function(style) {
                            var template = "";
                            return tsUtils.each(style, function(value, key) {
                                template += "".concat(key, ": ").concat(value, ";").replace(";;", ";")
                            }), template
                        }
                    }]), StyleManager
                }();
                return window.StyleManager = StyleManager
            };
            factory.$inject = [], angular.module("app.utils").factory("StyleManager", factory)
        }(),
        function() {
            var controller = function($element, $attrs, i18n, $scope, Base, utils) {
                return new(function() {
                    function I18nAttr() {
                        var _this75;
                        return _classCallCheck(this, I18nAttr), (_this75 = _possibleConstructorReturn(this, _getPrototypeOf(I18nAttr).call(this, $scope)))._forStop = [], _this75._watchers = Object.create(null), _this75._toTranslate = $attrs.wI18nAttr.split(","), _this75._literalTemplatesHash = _this75._toTranslate.reduce(function(acc, attrName) {
                            return acc[attrName] = $element.attr(attrName).trim(), acc
                        }, Object.create(null)), _this75._partsHash = _this75._toTranslate.reduce(function(acc, attrName) {
                            return acc[attrName] = I18nAttr._getParts($attrs[attrName]), acc
                        }, Object.create(null)), _this75._handler = utils.debounce(_this75._getHandler()), _this75.listenEventEmitter(i18next, "languageChanged", _this75._handler), _this75._addWatchers(), _this75._handler(), _this75
                    }
                    return _inherits(I18nAttr, Base), _createClass(I18nAttr, [{
                        key: "$onDestroy",
                        value: function() {
                            _get(_getPrototypeOf(I18nAttr.prototype), "$onDestroy", this).call(this), this._forStop.forEach(function(cb) {
                                return cb()
                            }), this._forStop = []
                        }
                    }, {
                        key: "_getHandler",
                        value: function() {
                            var _this76 = this,
                                ns = this._getNs();
                            return function() {
                                _this76._toTranslate.forEach(function(attrName) {
                                    var params = $attrs.params && $scope.$eval($attrs.attrParams) || void 0,
                                        value = i18n.translate(_this76._compile(attrName), ns, params, !1);
                                    $element.attr(attrName, value)
                                })
                            }
                        }
                    }, {
                        key: "_compile",
                        value: function(attrName) {
                            var template = this._literalTemplatesHash[attrName],
                                parts = this._partsHash[attrName],
                                literal = template;
                            return parts && parts.forEach(function(_ref32) {
                                var part = _ref32.part,
                                    evalTpl = _ref32.evalTpl;
                                literal = literal.replace(part, $scope.$eval(evalTpl))
                            }), literal
                        }
                    }, {
                        key: "_getNs",
                        value: function() {
                            return $attrs.wI18nNs ? $attrs.wI18nNs : i18n.getNs($element)
                        }
                    }, {
                        key: "_addWatchers",
                        value: function() {
                            var _this77 = this;
                            Object.values(this._partsHash).forEach(function(parts) {
                                (parts || []).forEach(function(_ref33) {
                                    var part = _ref33.part,
                                        needWatch = _ref33.needWatch,
                                        evalTpl = _ref33.evalTpl;
                                    needWatch && !_this77._watchers[part] && (_this77._forStop.push($scope.$watch(evalTpl, _this77._handler)), _this77._watchers[part] = !0)
                                })
                            })
                        }
                    }], [{
                        key: "_getParts",
                        value: function(template) {
                            var parts = template.match(/{{.*?(}})/g);
                            return parts ? parts.map(function(part) {
                                return {
                                    part: part,
                                    evalTpl: part.replace("{{", "").replace("}}", "").replace("::", ""),
                                    needWatch: -1 === part.indexOf("::")
                                }
                            }) : null
                        }
                    }]), I18nAttr
                }())
            };
            controller.$inject = ["$element", "$attrs", "i18n", "$scope", "Base", "utils"], angular.module("app").directive("wI18nAttr", function() {
                return {
                    scope: !1,
                    restrict: "A",
                    controller: controller
                }
            })
        }(),
        function() {
            var factory = function(utils) {
                var _require18 = require("ts-utils"),
                    get = _require18.get,
                    _set = _require18.set,
                    isEmpty = _require18.isEmpty,
                    unset = _require18.unset,
                    Signal = _require18.Signal,
                    ds = require("data-service"),
                    configs = ds.utils.ConfigService,
                    DefaultSettings = function() {
                        function DefaultSettings(settings, commonSettings) {
                            _classCallCheck(this, DefaultSettings), this.commonSettings = commonSettings || Object.create(null), this.settings = settings || Object.create(null), this.change = new Signal
                        }
                        return _createClass(DefaultSettings, [{
                            key: "commonDefaults",
                            get: function() {
                                return {
                                    theme: "default",
                                    advancedMode: !1,
                                    lastOpenVersion: "",
                                    whatsNewList: [],
                                    network: _objectSpread({}, WavesApp.network, {
                                        node: ds.apiUrls.getNodeUrl(),
                                        matcher: ds.apiUrls.getMatcherProxyUrl(),
                                        api: ds.apiUrls.getDataServiceUrl(),
                                        apiVersion: ds.config.get("apiVersion"),
                                        code: ds.config.get("code"),
                                        oracleWaves: ds.config.get("oracleWaves"),
                                        oracleTokenomica: ds.config.get("oracleTokenomica"),
                                        WESTNetworkByte: ds.config.get("WESTNetworkByte")
                                    }),
                                    logoutAfterMin: 60,
                                    termsAccepted: !0,
                                    needReadNewTerms: !1,
                                    closedNotification: [],
                                    closedUserNotification: [],
                                    tokensNameListUrl: configs.getConfig("NETWORK.tokensNameListUrl"),
                                    tradeWithScriptAssets: !1,
                                    events: Object.create(null)
                                }
                            }
                        }, {
                            key: "defaults",
                            get: function() {
                                var baseAssetService = ds.utils.BaseAssetService.getInstance();
                                return {
                                    encryptionRounds: 5e3,
                                    hasBackup: !0,
                                    lastInterval: WavesApp.dex.defaultResolution,
                                    send: {
                                        defaultTab: "singleSend"
                                    },
                                    orderLimit: .05,
                                    unpinnedDefaultAssetIdList: [],
                                    pinnedAssetIdList: [],
                                    lastState: {
                                        name: "wallet"
                                    },
                                    wallet: {
                                        activeState: "assets",
                                        assets: {
                                            chartMode: "month",
                                            activeChartAssetId: baseAssetService.WavesAssetId
                                        },
                                        transactions: {
                                            filter: "all"
                                        },
                                        leasing: {
                                            filter: "all"
                                        },
                                        portfolio: {
                                            spam: [],
                                            filter: "active"
                                        }
                                    },
                                    dex: {
                                        assetIdPair: {
                                            amount: baseAssetService.WavesAssetId,
                                            price: baseAssetService.getAssetIdByTicker("USDN")
                                        },
                                        createOrder: {
                                            expirationName: "30day"
                                        },
                                        watchlist: {
                                            showOnlyFavorite: !1,
                                            favourite: [
                                                []
                                            ],
                                            activeTab: "all"
                                        },
                                        layout: {
                                            watchlist: {
                                                collapsed: !1
                                            },
                                            orderbook: {
                                                collapsed: !1
                                            },
                                            tradevolume: {
                                                collapsed: !0
                                            }
                                        }
                                    }
                                }
                            }
                        }]), _createClass(DefaultSettings, [{
                            key: "getPinnedAssetIdList",
                            value: function() {
                                return this.getUserSettings("pinnedAssetIdList").filter(Boolean)
                            }
                        }, {
                            key: "getUnpinnedDefaultAssetIdList",
                            value: function() {
                                return this.getUserSettings("unpinnedDefaultAssetIdList").filter(Boolean).filter(function(id) {
                                    return "WAVES" !== id
                                })
                            }
                        }, {
                            key: "getDexAssetPair",
                            value: function() {
                                var value = get(this.settings, "dex.assetIdPair");
                                return !isEmpty(value) && value.amount && value.price ? value : get(this.defaults, "dex.assetIdPair")
                            }
                        }, {
                            key: "getDexFavourite",
                            value: function() {
                                var path = "dex.watchlist.favourite",
                                    value = get(this.settings, path),
                                    trueValue = Array.isArray(value) ? value.filter(function(item) {
                                        return Array.isArray(item) && 2 === item.filter(Boolean).length
                                    }) : [];
                                return 0 === trueValue.length ? get(this.defaults, path) : trueValue
                            }
                        }, {
                            key: "getCommon",
                            value: function(path) {
                                this.commonSettings = this.commonSettings || Object.create(null);
                                var valueCommon = get(this.commonSettings, path);
                                return isEmpty(valueCommon) ? get(this.commonDefaults, path) : valueCommon
                            }
                        }, {
                            key: "getUserSettings",
                            value: function(path) {
                                var value = get(this.settings, path);
                                return isEmpty(value) ? get(this.defaults, path) : value
                            }
                        }, {
                            key: "get",
                            value: function(path) {
                                switch (!0) {
                                    case this._isDexAssetPair(path):
                                        return this.getDexAssetPair();
                                    case this._isDexFavourite(path):
                                        return this.getDexFavourite();
                                    case this._isPinnedAssetList(path):
                                        return this.getPinnedAssetIdList();
                                    case this._isUnpinnedDefaultAssetIdList(path):
                                        return this.getUnpinnedDefaultAssetIdList();
                                    case this._isCommon(path):
                                        return this.getCommon(path);
                                    default:
                                        return this.getUserSettings(path)
                                }
                            }
                        }, {
                            key: "set",
                            value: function(path, value) {
                                if (utils.isEqual(this.get(path), value)) return null;
                                this._isCommon(path) ? (this.commonSettings = this.commonSettings || Object.create(null), utils.isEqual(get(this.commonDefaults, path), value) ? unset(this.commonSettings, path) : _set(this.commonSettings, path, value)) : utils.isEqual(get(this.defaults, path), value) ? unset(this.settings, path) : _set(this.settings, path, value), this.change.dispatch(path)
                            }
                        }, {
                            key: "setCommonSettings",
                            value: function(commonSettings) {
                                this.commonSettings = commonSettings || this.commonSettings || Object.create(null)
                            }
                        }, {
                            key: "getSettings",
                            value: function() {
                                return {
                                    common: this.commonSettings || Object.create(null),
                                    settings: this.settings
                                }
                            }
                        }, {
                            key: "_isDexFavourite",
                            value: function(path) {
                                return "dex.watchlist.favourite" === path
                            }
                        }, {
                            key: "_isPinnedAssetList",
                            value: function(path) {
                                return "pinnedAssetIdList" === path
                            }
                        }, {
                            key: "_isUnpinnedDefaultAssetIdList",
                            value: function(path) {
                                return "unpinnedDefaultAssetIdList" === path
                            }
                        }, {
                            key: "_isDexAssetPair",
                            value: function(path) {
                                return "dex.assetIdPair" === path
                            }
                        }, {
                            key: "_isCommon",
                            value: function(path) {
                                var start = _slicedToArray(path.split("."), 1)[0];
                                return Object.prototype.hasOwnProperty.call(this.commonDefaults, start)
                            }
                        }]), DefaultSettings
                    }();
                return {
                    create: function(settings, commonSettings) {
                        return new DefaultSettings(settings, commonSettings)
                    }
                }
            };
            factory.$inject = ["utils"], angular.module("app").factory("defaultSettings", factory)
        }(),
        function() {
            var factory = function(BaseNodeComponent, aliases, transactions, assets, user, utils, decorators) {
                var _dec2, _class3, ds = require("data-service"),
                    Node = (_dec2 = decorators.cachable(2), _applyDecoratedDescriptor((_class3 = function() {
                        function Node() {
                            var _this78;
                            return _classCallCheck(this, Node), (_this78 = _possibleConstructorReturn(this, _getPrototypeOf(Node).call(this))).aliases = aliases, _this78.assets = assets, _this78.transactions = transactions, _this78
                        }
                        return _inherits(Node, BaseNodeComponent), _createClass(Node, [{
                            key: "scriptInfo",
                            value: function(address) {
                                return ds.api.address.getScriptInfo(address)
                            }
                        }, {
                            key: "isValidAddress",
                            value: function(address) {
                                try {
                                    return user.isValidAddress(address)
                                } catch (e) {
                                    return !1
                                }
                            }
                        }, {
                            key: "isValidAddressWithNetworkByte",
                            value: function(address, _byte) {
                                try {
                                    return ds.isValidAddress(address, Node.toByte(_byte))
                                } catch (e) {
                                    return !1
                                }
                            }
                        }, {
                            key: "height",
                            value: function() {
                                return ds.fetch("".concat(this.node, "/blocks/height")).then(function(res) {
                                    return res.height
                                })
                            }
                        }], [{
                            key: "toByte",
                            value: function(data) {
                                return "number" == typeof data ? data : data.charCodeAt(0)
                            }
                        }]), Node
                    }()).prototype, "scriptInfo", [_dec2], Object.getOwnPropertyDescriptor(_class3.prototype, "scriptInfo"), _class3.prototype), _class3);
                return utils.bind(new Node)
            };
            factory.$inject = ["BaseNodeComponent", "aliases", "transactions", "assets", "user", "utils", "decorators"], angular.module("app").factory("node", factory)
        }(),
        function() {
            var factory = function(utils) {
                var tsUtils = require("ts-utils"),
                    ComponentList = function() {
                        function ComponentList(components) {
                            _classCallCheck(this, ComponentList), this._hash = Object.create(null), this.signals = utils.liteObject({
                                add: new tsUtils.Signal,
                                remove: new tsUtils.Signal
                            }), this.components = [], components && components.length && this.add(components)
                        }
                        return _createClass(ComponentList, [{
                            key: "length",
                            get: function() {
                                return this.components.length
                            }
                        }]), _createClass(ComponentList, [{
                            key: "add",
                            value: function(components) {
                                utils.toArray(components).forEach(this._add, this)
                            }
                        }, {
                            key: "remove",
                            value: function(components) {
                                utils.toArray(components).forEach(this._remove, this)
                            }
                        }, {
                            key: "push",
                            value: function() {
                                for (var _len13 = arguments.length, components = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) components[_key13] = arguments[_key13];
                                this.add(components)
                            }
                        }, {
                            key: "forEach",
                            value: function(cb, context) {
                                this.components.forEach(cb, context)
                            }
                        }, {
                            key: "map",
                            value: function(cb, context) {
                                return this.components.map(cb, context)
                            }
                        }, {
                            key: "filter",
                            value: function(cb, context) {
                                return new ComponentList(this.components.filter(cb, context))
                            }
                        }, {
                            key: "where",
                            value: function(props) {
                                var keys = Object.keys(props);
                                return new ComponentList(this.components.filter(function(item) {
                                    return keys.every(function(key) {
                                        return utils.isEqual(props[key], item[key])
                                    })
                                }))
                            }
                        }, {
                            key: "some",
                            value: function(cb, context) {
                                return "function" == typeof cb ? this.components.some(cb, context) : this.components.some(tsUtils.contains(cb))
                            }
                        }, {
                            key: "every",
                            value: function(cb, context) {
                                return "function" == typeof cb ? this.components.every(cb, context) : this.components.every(tsUtils.contains(cb))
                            }
                        }, {
                            key: "get",
                            value: function(index) {
                                return this.components[index]
                            }
                        }, {
                            key: "first",
                            value: function() {
                                return this.components[0]
                            }
                        }, {
                            key: "last",
                            value: function() {
                                return this.components[this.components.length - 1]
                            }
                        }, {
                            key: "index",
                            value: function(id, field) {
                                return this.components.indexOf(tsUtils.find(this.components, _defineProperty({}, field, id)))
                            }
                        }, {
                            key: "_add",
                            value: function(component) {
                                var _this79 = this;
                                this.receiveOnce(component.signals.destroy, function() {
                                    return _this79.remove(component)
                                }), this._hash[component.cid] = component, this.components.push(component), this.signals.add.dispatch(component)
                            }
                        }, {
                            key: "_remove",
                            value: function(component) {
                                delete this._hash[component.cid];
                                var index = this.components.indexOf(component); - 1 !== index && (this.components.splice(index, 1), this.signals.remove.dispatch(component))
                            }
                        }]), ComponentList
                    }();
                return ComponentList.prototype.receive = tsUtils.Receiver.prototype.receive, ComponentList.prototype.receiveOnce = tsUtils.Receiver.prototype.receiveOnce, ComponentList.prototype.stopReceive = tsUtils.Receiver.prototype.stopReceive, ComponentList
            };
            factory.$inject = ["utils"], angular.module("app.utils").factory("ComponentList", factory)
        }(), ds = require("data-service"), angular.module("app.utils").factory("explorerLinks", function() {
            return new(function() {
                function ExplorerLinks() {
                    _classCallCheck(this, ExplorerLinks)
                }
                return _createClass(ExplorerLinks, [{
                    key: "getTxLink",
                    value: function(transactionId) {
                        var baseExplorerUrl = ds.utils.ConfigService.getInstance().getConfig("NETWORK.explorer");
                        return "".concat(baseExplorerUrl, "/").concat("tx", "/").concat(transactionId)
                    }
                }]), ExplorerLinks
            }())
        }),
        function() {
            var factory = function(assets, utils, decorators, transactions) {
                var _dec3, _dec4, _dec5, _dec6, _dec7, _class4, ds = require("data-service"),
                    entities = require("@waves/data-entities"),
                    BigNumber = require("@waves/bignumber").BigNumber,
                    matcher = ds.Matcher.getInstance(),
                    _require20 = require("ramda"),
                    flatten = _require20.flatten,
                    pipe = _require20.pipe,
                    map = _require20.map,
                    path = _require20.path,
                    where = _require20.where,
                    gte = _require20.gte,
                    allPass = _require20.allPass,
                    lte = _require20.lte,
                    filter = _require20.filter,
                    length = _require20.length,
                    equals = _require20.equals,
                    isNil = _require20.isNil,
                    not = _require20.not,
                    find = _require20.find,
                    __ = _require20.__;
                return new(_dec3 = decorators.cachable(5), _dec4 = decorators.cachable(350), _dec5 = decorators.cachable(60), _dec6 = decorators.cachable(60), _dec7 = decorators.cachable(60), _applyDecoratedDescriptor((_class4 = function() {
                    function WavesUtils() {
                        _classCallCheck(this, WavesUtils), this.rateListCache = [], this.rateListCacheMaxAge = 12e4
                    }
                    return _createClass(WavesUtils, [{
                        key: "searchAsset",
                        value: function(userInput) {
                            return ds.fetch("".concat(ds.apiUrls.getDataServiceUrl(), "/assets/search/").concat(userInput))
                        }
                    }, {
                        key: "getRate",
                        value: function(assetFrom, assetTo) {
                            return WavesUtils.toId(assetFrom) === WavesUtils.toId(assetTo) ? Promise.resolve(new BigNumber(1)) : ds.api.rate.fetchRates([assetFrom], assetTo).then(function(rate) {
                                var _rate$;
                                return (null === (_rate$ = rate[0]) || void 0 === _rate$ ? void 0 : _rate$.rate) || new BigNumber(0)
                            })
                        }
                    }, {
                        key: "_selectCachedRateList",
                        value: function(pairs, baseAssetId, date) {
                            var _this80 = this;
                            return this._invalidateRateListCache(), pairs.reduce(function(_ref34, pair) {
                                var _ref35 = _slicedToArray(_ref34, 2),
                                    cachedResults = _ref35[0],
                                    notCachedPairs = _ref35[1],
                                    getRate = path(["rates", pair]),
                                    rateExist = pipe(getRate, isNil, not),
                                    cacheMatches = where({
                                        baseAssetId: equals(baseAssetId),
                                        date: equals(date)
                                    }),
                                    rate = pipe(find(allPass([rateExist, cacheMatches])), getRate)(_this80.rateListCache);
                                return rate ? cachedResults.push(rate) : notCachedPairs.push(pair), [cachedResults, notCachedPairs]
                            }, [
                                [],
                                []
                            ])
                        }
                    }, {
                        key: "_invalidateRateListCache",
                        value: function() {
                            var _this81 = this;
                            this.rateListCache = this.rateListCache.filter(function(entry) {
                                return entry.timestamp > Date.now() - _this81.rateListCacheMaxAge
                            })
                        }
                    }, {
                        key: "_cacheRateListRequest",
                        value: function(_ref36) {
                            var pairs = _ref36.pairs,
                                date = _ref36.date,
                                baseAssetId = _ref36.baseAssetId,
                                rates = _ref36.rates,
                                timestamp = _ref36.timestamp;
                            this.rateListCache.push({
                                date: date,
                                baseAssetId: baseAssetId,
                                timestamp: timestamp,
                                rates: rates.data.reduce(function(acc, rate, index) {
                                    return acc[pairs[index]] = rate, acc
                                }, {})
                            })
                        }
                    }, {
                        key: "getRateList",
                        value: function(assetList, baseAssetId, date) {
                            var _this82 = this,
                                pairs = assetList.map(function(asset) {
                                    return "".concat(WavesUtils.toId(asset), "/").concat(baseAssetId)
                                }),
                                _this$_selectCachedRa2 = _slicedToArray(this._selectCachedRateList(pairs, baseAssetId, date), 2),
                                cachedResults = _this$_selectCachedRa2[0],
                                notCachedPairs = _this$_selectCachedRa2[1];
                            if (0 === notCachedPairs.length) return Promise.resolve({
                                data: cachedResults
                            });
                            var requestBody = {
                                    pairs: notCachedPairs,
                                    timestamp: date
                                },
                                version = ds.config.get("apiVersion"),
                                api = "".concat(ds.apiUrls.getDataServiceUrl(), "/").concat(version);
                            return ds.fetch("".concat(api, "/matchers/").concat(matcher.currentMatcherAddress, "/rates"), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json; charset=utf8"
                                },
                                body: JSON.stringify(requestBody)
                            }).then(function(rates) {
                                return _this82._cacheRateListRequest({
                                    pairs: notCachedPairs,
                                    date: date,
                                    rates: rates,
                                    baseAssetId: baseAssetId,
                                    timestamp: Date.now()
                                }), {
                                    data: cachedResults.concat(rates.data)
                                }
                            }).catch(function() {
                                return Promise.resolve()
                            })
                        }
                    }, {
                        key: "getRateApi",
                        value: function(assetFrom, assetTo) {
                            var _this83 = this;
                            return utils.whenAll([assets.getAsset(WavesUtils.toId(assetFrom)), assets.getAsset(WavesUtils.toId(assetTo)), this.getRate(assetFrom, assetTo)]).then(function(_ref37) {
                                var _ref38 = _slicedToArray(_ref37, 3),
                                    from = _ref38[0],
                                    to = _ref38[1],
                                    rate = _ref38[2];
                                return _this83._generateRateApi(from, to, rate)
                            })
                        }
                    }, {
                        key: "getRateHistory",
                        value: function(assetFrom, assetTo, from, to) {
                            var idFrom = WavesUtils.toId(assetFrom),
                                idTo = WavesUtils.toId(assetTo),
                                wavesId = ds.utils.BaseAssetService.getInstance().WavesAssetId;
                            return to = to || Date.now(), idFrom === idTo ? Promise.resolve([]) : idFrom === wavesId || idTo === wavesId ? this._getRateHistory(idFrom, idTo, utils.dayjs(from), utils.dayjs(to)) : Promise.all([this._getRateHistory(idFrom, wavesId, utils.dayjs(from), utils.dayjs(to)), this._getRateHistory(idTo, wavesId, utils.dayjs(from), utils.dayjs(to))]).then(function(_ref39) {
                                var _ref40 = _slicedToArray(_ref39, 2),
                                    from = _ref40[0],
                                    to = _ref40[1],
                                    hash = to.reduce(function(result, item) {
                                        return result[item.timestamp.valueOf()] = item, result
                                    }, Object.create(null));
                                return from.reduce(function(result, item) {
                                    return hash[item.timestamp.valueOf()] && (item.rate = item.rate.div(hash[item.timestamp.valueOf()].rate), result.push(item)), result
                                }, [])
                            })
                        }
                    }, {
                        key: "getChange",
                        value: function(assetFrom, assetTo) {
                            var idFrom = WavesUtils.toId(assetFrom),
                                idTo = WavesUtils.toId(assetTo);
                            return idFrom === idTo ? Promise.resolve(new BigNumber(0)) : this._getChange(idFrom, idTo)
                        }
                    }, {
                        key: "getVolume",
                        value: function(pair) {
                            return this._getVolume(pair, matcher.currentMatcherAddress)
                        }
                    }, {
                        key: "_getVolume",
                        value: function(pair, currentMatcherAddress) {
                            return ds.api.pairs.info(currentMatcherAddress, [pair]).then(function(data) {
                                var _data$filter2$ = _slicedToArray(data.filter(Boolean), 1)[0],
                                    pair = void 0 === _data$filter2$ ? {} : _data$filter2$;
                                return pair && String(pair.volume) || "0"
                            })
                        }
                    }, {
                        key: "_getChange",
                        value: function(from, to) {
                            return ds.api.pairs.get(from, to).then(function(pair) {
                                return ds.api.pairs.info(matcher.currentMatcherAddress, [pair]).then(function(_ref41) {
                                    var data = _slicedToArray(_ref41, 1)[0];
                                    if (!data || "error" === data.status) return 0;
                                    var open = data.firstPrice || new entities.Money(0, pair.priceAsset),
                                        close = data.lastPrice || new entities.Money(0, pair.priceAsset),
                                        change24 = Number(function(open, close) {
                                            return open.eq(0) ? new BigNumber(0) : close.sub(open).div(open).mul(100).roundTo(2)
                                        }(open.getTokens(), close.getTokens()).toFixed());
                                    return pair.amountAsset.id === from ? change24 : -change24
                                })
                            }).catch(function() {
                                return 0
                            })
                        }
                    }, {
                        key: "_getRate",
                        value: function(fromId, toId) {
                            var currentRate = function(trades) {
                                return trades && trades.length ? function(trades) {
                                    return trades.reduce(function(result, item) {
                                        return result.add(new BigNumber(item.price.getTokens()))
                                    }, new BigNumber(0)).div(trades.length)
                                }(trades) : new BigNumber(0)
                            };
                            return ds.api.pairs.get(fromId, toId).then(function(pair) {
                                return transactions.getExchangeTxList({
                                    limit: 5,
                                    amountAsset: pair.amountAsset,
                                    priceAsset: pair.priceAsset
                                }).then(currentRate).then(function(rate) {
                                    return fromId !== pair.priceAsset.id ? rate : rate.eq(0) ? rate : new BigNumber(1).div(rate)
                                }).catch(function() {
                                    return new BigNumber(0)
                                })
                            })
                        }
                    }, {
                        key: "_getRateHistory",
                        value: function(fromId, toId, from, to) {
                            var formattedFrom = from.valueOf(),
                                formattedTo = to.valueOf();
                            return ds.api.pairs.get(fromId, toId).then(function(pair) {
                                var amountId = pair.amountAsset.id,
                                    priceId = pair.priceAsset.id,
                                    interval = utils.getMaxInterval(formattedFrom, formattedTo),
                                    dayX = new Date(ds.utils.ConfigService.getInstance().getConfig("CONCAT_MATCHER_DATE")).getTime(),
                                    promisesWithCandles = utils.concatCandles({
                                        to: to,
                                        from: from,
                                        amountId: amountId,
                                        priceId: priceId,
                                        dayX: dayX,
                                        interval: interval,
                                        oldMatcher: matcher.oldMatcherAddress,
                                        currentMatcher: matcher.currentMatcherAddress
                                    }).promisesWithCandles;
                                return Promise.all(promisesWithCandles).then(flatten).then(map(function(item) {
                                    return {
                                        close: item.close,
                                        timestamp: new Date(item.time).getTime()
                                    }
                                })).then(filter(where({
                                    close: function(_close) {
                                        return _close.gt(0)
                                    },
                                    timestamp: allPass([gte(__, formattedFrom), lte(__, formattedTo)])
                                }))).then(function(list) {
                                    return equals(length(list), 0) ? Promise.reject(new Error("Nor found by pair ".concat(pair))) : list
                                }).then(map(function(_ref43) {
                                    var timestamp = _ref43.timestamp,
                                        close = _ref43.close;
                                    return {
                                        timestamp: new Date(timestamp),
                                        rate: fromId !== pair.priceAsset.id ? close : new BigNumber(1).div(close)
                                    }
                                }))
                            })
                        }
                    }, {
                        key: "_generateRateApi",
                        value: function(from, to, rate) {
                            return {
                                exchange: function(balance) {
                                    return balance.mul(rate.toFixed(8)).roundTo(to.precision)
                                },
                                exchangeReverse: function(balance) {
                                    return (rate ? balance.div(rate) : new BigNumber(0)).roundTo(from.precision)
                                },
                                rate: rate
                            }
                        }
                    }], [{
                        key: "toId",
                        value: function(asset) {
                            return "string" == typeof asset ? asset : asset.id
                        }
                    }]), WavesUtils
                }()).prototype, "searchAsset", [_dec3], Object.getOwnPropertyDescriptor(_class4.prototype, "searchAsset"), _class4.prototype), _applyDecoratedDescriptor(_class4.prototype, "getRate", [_dec4], Object.getOwnPropertyDescriptor(_class4.prototype, "getRate"), _class4.prototype), _applyDecoratedDescriptor(_class4.prototype, "getRateHistory", [_dec5], Object.getOwnPropertyDescriptor(_class4.prototype, "getRateHistory"), _class4.prototype), _applyDecoratedDescriptor(_class4.prototype, "getChange", [_dec6], Object.getOwnPropertyDescriptor(_class4.prototype, "getChange"), _class4.prototype), _applyDecoratedDescriptor(_class4.prototype, "_getVolume", [_dec7], Object.getOwnPropertyDescriptor(_class4.prototype, "_getVolume"), _class4.prototype), _class4)
            };
            factory.$inject = ["assets", "utils", "decorators", "transactions"], angular.module("app").factory("wavesUtils", factory)
        }(),
        function() {
            var factory = function() {
                return function() {
                    function PromiseControl(promise) {
                        _classCallCheck(this, PromiseControl), this.id = null, this._resolveCallbacks = [], this._rejectCallbacks = [], this._data = null, this._state = null, this._dropped = !1, (this._promise = promise).then(this._getPromiseCallback(!0), this._getPromiseCallback(!1))
                    }
                    return _createClass(PromiseControl, [{
                        key: "promise",
                        value: function() {
                            return this._promise
                        }
                    }, {
                        key: "abort",
                        value: function(error) {
                            this._getPromiseCallback(!1)(error)
                        }
                    }, {
                        key: "then",
                        value: function(resolve, reject) {
                            var _this84 = this;
                            return new PromiseControl(new Promise(function(res, rej) {
                                _this84._resolveCallbacks.push(function(data) {
                                    var result = resolve ? resolve(data) : data;
                                    PromiseControl.isPromise(result) ? result.then(res, rej) : res(result)
                                }), _this84._rejectCallbacks.push(function(data) {
                                    var result = reject ? reject(data) : data;
                                    PromiseControl.isPromise(result) ? result.then(res, rej) : rej(result)
                                })
                            }))
                        }
                    }, {
                        key: "always",
                        value: function(cb) {
                            return this.then(cb, cb), this
                        }
                    }, {
                        key: "catch",
                        value: function(callback) {
                            return this.then(null, callback)
                        }
                    }, {
                        key: "drop",
                        value: function() {
                            this._removeHandlers(), this._dropped = !0
                        }
                    }, {
                        key: "_getPromiseCallback",
                        value: function(state) {
                            var _this85 = this;
                            return function(data) {
                                null === _this85._state && (_this85._data = data, _this85._state = state, _this85._run())
                            }
                        }
                    }, {
                        key: "_run",
                        value: function() {
                            var _this86 = this;
                            if (this._dropped || null === this._state) return null;
                            var list = (this._state ? this._resolveCallbacks : this._rejectCallbacks).slice();
                            this._removeHandlers(), list.forEach(function(cb) {
                                return cb(_this86._data)
                            })
                        }
                    }, {
                        key: "_removeHandlers",
                        value: function() {
                            this._rejectCallbacks = [], this._rejectCallbacks = []
                        }
                    }], [{
                        key: "isPromise",
                        value: function(some) {
                            return some && some.then && "function" == typeof some.then
                        }
                    }]), PromiseControl
                }()
            };
            factory.$inject = [], angular.module("app.utils").factory("PromiseControl", factory)
        }(),
        function() {
            var factory = function() {
                return function() {
                    function UserRouteState(base, name, child) {
                        _classCallCheck(this, UserRouteState), this.base = base, this.name = name, this.child = child
                    }
                    return _createClass(UserRouteState, [{
                        key: "state",
                        get: function() {
                            var base = "".concat(this.base, ".").concat(this.name);
                            return this.child ? "".concat(base, ".").concat(this.child) : base
                        }
                    }]), _createClass(UserRouteState, [{
                        key: "applyState",
                        value: function(state, user) {
                            return !!this._hitTest(state.name) && (this.child = state.name.split(".")[2], user.setSetting("".concat(this.name, ".activeState"), this.child), !0)
                        }
                    }, {
                        key: "_hitTest",
                        value: function(stateName) {
                            var _stateName$split2 = _slicedToArray(stateName.split("."), 2),
                                base = _stateName$split2[0],
                                name = _stateName$split2[1];
                            return base === this.base && name === this.name
                        }
                    }]), UserRouteState
                }()
            };
            factory.$inject = [], angular.module("app.utils").factory("UserRouteState", factory)
        }(),
        function() {
            var factory = function(BaseClassComponent, Poll, eventManager, Base) {
                var pollComponents = Object.create(null),
                    tsUtils = require("ts-utils"),
                    ds = require("data-service");
                return function() {
                    function PollComponent(parent) {
                        var _this87;
                        return _classCallCheck(this, PollComponent), (_this87 = _possibleConstructorReturn(this, _getPrototypeOf(PollComponent).call(this, parent)))._polls = Object.create(null), _this87.receive(ds.utils.modalManager.openModalSignal, _this87._onOpenModal, _assertThisInitialized(_this87)), _this87
                    }
                    return _inherits(PollComponent, BaseClassComponent), _createClass(PollComponent, [{
                        key: "createPoll",
                        value: function(getter, setter, time, options) {
                            var _this88 = this;
                            "string" == typeof setter ? setter = PollComponent._getSetterHandler(setter, this.parent, options) : setter = PollComponent._wrapSetterHandler(setter, this.parent, options);
                            var poll = new Poll(getter.bind(this.parent), setter, time);
                            return this._polls[poll.id] = poll, options && options.isBalance && this.receive(eventManager.signals.changeBalanceEvent, function() {
                                return poll.restart()
                            }), this.receiveOnce(poll.signals.destroy, function() {
                                delete _this88._polls[poll.id]
                            }), poll
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            _get(_getPrototypeOf(PollComponent.prototype), "remove", this).call(this), delete pollComponents[this.parent.cid], tsUtils.each(this._polls, function(poll) {
                                poll && poll.destroy()
                            })
                        }
                    }, {
                        key: "_onOpenModal",
                        value: function(modal) {
                            tsUtils.each(this._polls, function(poll) {
                                poll.pause(modal)
                            })
                        }
                    }], [{
                        key: "create",
                        value: function(base, getter, setter, time, options) {
                            if (!(base instanceof Base)) throw new Error("Component must be an instance of Base");
                            if (base.wasDestroed) return null;
                            var poll = PollComponent._getPoll(base).createPoll(getter, setter, time, options);
                            return base.signals.logout.once(poll.destroy, poll), poll
                        }
                    }, {
                        key: "_getSetterHandler",
                        value: function(path, parent, options) {
                            return options && options.$scope ? function(data) {
                                tsUtils.set(parent, path, data), options.$scope.$apply()
                            } : function(data) {
                                tsUtils.set(parent, path, data)
                            }
                        }
                    }, {
                        key: "_wrapSetterHandler",
                        value: function(handler, parent, options) {
                            return options && options.$scope ? function(data) {
                                handler.call(parent, data), options.$scope.$apply()
                            } : handler.bind(parent)
                        }
                    }, {
                        key: "_getPoll",
                        value: function(base) {
                            if (pollComponents[base.cid]) return pollComponents[base.cid];
                            var poll = new PollComponent(base);
                            return pollComponents[base.cid] = poll
                        }
                    }]), PollComponent
                }().create
            };
            factory.$inject = ["BaseClassComponent", "Poll", "eventManager", "Base"], angular.module("app.utils").factory("createPoll", factory)
        }(),
        function() {
            var ds = require("data-service"),
                factory = function(waves) {
                    var validateRegexp = function(address, regexTemplate) {
                            return function(str) {
                                var params = (str = str.trim()).replace(/\/.+\/(.*)/, "$1"),
                                    regExpString = str.replace(/\/(.+)\/.*/, "$1");
                                return new RegExp(regExpString, params)
                            }(regexTemplate).test(address)
                        },
                        baseAssetService = ds.utils.BaseAssetService.getInstance(),
                        getValidator = function(asset) {
                            return function(address) {
                                if (asset.assetId === baseAssetService.WESTAssetId) return waves.node.isValidAddressWithNetworkByte(address, ds.config.get("WESTNetworkByte"));
                                var validBech32 = asset.bech32 && function(address, prefix) {
                                        try {
                                            return ds.bech32.decode(address).prefix === prefix
                                        } catch (e) {
                                            return !1
                                        }
                                    }(address, asset.bech32),
                                    validRegexp = asset.gwAddressRegExp && validateRegexp(address, asset.gwAddressRegExp);
                                return validBech32 || validRegexp
                            }
                        };
                    return baseAssetService.getDefaultAssetsList().reduce(function(acc, asset) {
                        return (asset.isGateway || asset.isOuterSource) && (acc[asset.assetId] = {
                            isValidAddress: getValidator(asset)
                        }), acc
                    }, {})
                };
            factory.$inject = ["waves"], angular.module("app.utils").factory("outerBlockchains", factory)
        }(), angular.module("app.wrapperForReact", []),
        function() {
            var ds = require("data-service"),
                factory = function(Base, user, waves) {
                    var storage = ds.utils.storage;
                    return new(function() {
                        function ReferralLinkService(props) {
                            var _this89;
                            return _classCallCheck(this, ReferralLinkService), (_this89 = _possibleConstructorReturn(this, _getPrototypeOf(ReferralLinkService).call(this, props))).hasReferral = void 0, _this89.observe("hasReferral", function() {
                                _this89.hasReferral ? _this89.subscribeOnLogin() : _this89.unsubscribeLogin()
                            }), _this89._checkHasReferral(), _this89
                        }
                        return _inherits(ReferralLinkService, Base), _createClass(ReferralLinkService, [{
                            key: "save",
                            value: function(address) {
                                var _this90 = this;
                                return storage.load("multiAccountUsers").then(function(userList) {
                                    if (userList && 0 < Object.keys(userList).length) return Promise.reject()
                                }).then(function() {
                                    return user.isValidAddress(address) ? Promise.resolve() : Promise.reject()
                                }).then(function() {
                                    return storage.save("referralAddress", address)
                                }).then(function() {
                                    return _this90.hasReferral = !0, Promise.resolve()
                                }).catch(function() {
                                    return null
                                })
                            }
                        }, {
                            key: "load",
                            value: function() {
                                return storage.load("referralAddress")
                            }
                        }, {
                            key: "subscribeOnLogin",
                            value: function() {
                                var _this91 = this;
                                Promise.all([this.load(), user.getMultiAccountUsers()]).then(function(_ref44) {
                                    var _ref45 = _slicedToArray(_ref44, 2),
                                        referralAddress = _ref45[0],
                                        userList = _ref45[1];
                                    Array.isArray(userList) || "object" !== _typeof(userList) || (userList = Object.keys(userList));
                                    var notNewUser = Array.isArray(userList) && 0 < userList.length;
                                    return !referralAddress || notNewUser ? Promise.reject() : (_this91.loginHandler = function() {
                                        _this91._sendAddress(referralAddress)
                                    }, user.loginSignal.on(_this91.loginHandler, _this91), Promise.resolve())
                                }).catch(function() {
                                    return null
                                })
                            }
                        }, {
                            key: "unsubscribeLogin",
                            value: function() {
                                this.loginHandler && user.loginSignal.off(this.loginHandler)
                            }
                        }, {
                            key: "_sendAddress",
                            value: function(address) {
                                var _this92 = this;
                                return user.getAllMultiAccountUsers().then(function(userList) {
                                    return Array.isArray(userList) || "object" !== _typeof(userList) || (userList = Object.keys(userList)), Array.isArray(userList) && userList.length <= 1 && (user.isFirst || "cognito" !== user.currentUser.userType) ? Promise.resolve() : Promise.reject()
                                }).then(function() {
                                    return waves.node.transactions.list(1).then(function(list) {
                                        return list && list.length ? Promise.reject() : Promise.resolve()
                                    })
                                }).then(function() {
                                    return ds.api.referral.set(address)
                                }).then(function() {
                                    ds.analytics.sendV3("Referral", {
                                        action: "Create Account"
                                    }, !0)
                                }).finally(function() {
                                    storage.save("referralAddress", ""), _this92.hasReferral = !1
                                })
                            }
                        }, {
                            key: "_checkHasReferral",
                            value: function() {
                                var _this93 = this;
                                storage.load("referralAddress").then(function(referralAddress) {
                                    _this93.hasReferral = !!referralAddress
                                })
                            }
                        }]), ReferralLinkService
                    }())
                };
            factory.$inject = ["Base", "user", "waves"], angular.module("app").factory("referralLinkService", factory)
        }(),
        function() {
            var factory = function(BaseClassComponent, PromiseControl) {
                var componentsHash = Object.create(null);
                return function() {
                    function PromiseComponent(base) {
                        var _this94;
                        return _classCallCheck(this, PromiseComponent), (_this94 = _possibleConstructorReturn(this, _getPrototypeOf(PromiseComponent).call(this, base)))._promiseList = [], _this94
                    }
                    return _inherits(PromiseComponent, BaseClassComponent), _createClass(PromiseComponent, [{
                        key: "remove",
                        value: function() {
                            _get(_getPrototypeOf(PromiseComponent.prototype), "remove", this).call(this), delete componentsHash[this.parent.cid], this._promiseList.forEach(function(promise) {
                                promise.drop()
                            }), this._promiseList = []
                        }
                    }, {
                        key: "wrap",
                        value: function(promise) {
                            var _this95 = this,
                                control = new PromiseControl(promise);
                            return this._promiseList.push(control), control.always(function() {
                                var index = _this95._promiseList.indexOf(control); - 1 !== index && _this95._promiseList.splice(index, 1)
                            }), control
                        }
                    }], [{
                        key: "create",
                        value: function(base, promise) {
                            return PromiseComponent._getComponent(base).wrap(promise)
                        }
                    }, {
                        key: "_getComponent",
                        value: function(base) {
                            return componentsHash[base.cid] || (componentsHash[base.cid] = new PromiseComponent(base)), componentsHash[base.cid]
                        }
                    }]), PromiseComponent
                }().create
            };
            factory.$inject = ["BaseClassComponent", "PromiseControl"], angular.module("app.utils").factory("createPromise", factory)
        }(),
        function() {
            var controller = function(Base, $element) {
                return new(function() {
                    function Delegate() {
                        var _this96;
                        return _classCallCheck(this, Delegate), (_this96 = _possibleConstructorReturn(this, _getPrototypeOf(Delegate).call(this))).event = null, _this96.selector = null, _this96.handler = null, _this96.observe(["event", "selector", "handler"], _this96._onChangeParams), _this96
                    }
                    return _inherits(Delegate, Base), _createClass(Delegate, [{
                        key: "_onChangeParams",
                        value: function() {
                            var _this97 = this;
                            if ($element.off(), !this.selector || !this.handler) return null;
                            $element.on(this.event || "click", this.selector, function(e) {
                                _this97.handler({
                                    $event: e
                                })
                            })
                        }
                    }]), Delegate
                }())
            };
            controller.$inject = ["Base", "$element"], angular.module("app.ui").component("wDelegate", {
                bindings: {
                    event: "<",
                    selector: "<",
                    handler: "&"
                },
                template: "<ng-transclude></ng-transclude>",
                transclude: !0,
                controller: controller
            })
        }(),
        function() {
            var analytics = require("data-service").analytics,
                directive = function(Base) {
                    return {
                        priority: 1e5,
                        scope: {
                            eventTarget: "<",
                            event: "<",
                            eventParams: "<"
                        },
                        restrict: "AE",
                        controller: function($scope, $element) {
                            return new(function() {
                                function Analytics() {
                                    var _getPrototypeOf3, _this98;
                                    _classCallCheck(this, Analytics);
                                    for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) args[_key14] = arguments[_key14];
                                    return (_this98 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(Analytics)).call.apply(_getPrototypeOf3, [this].concat(args)))).handler = void 0, _this98
                                }
                                return _inherits(Analytics, Base), _createClass(Analytics, [{
                                    key: "$postLink",
                                    value: function() {
                                        this.handler = function() {
                                            if (!$scope.event) return null;
                                            analytics.send({
                                                name: $scope.event,
                                                target: $scope.eventTarget,
                                                params: $scope.eventParams
                                            })
                                        }, this.listenEventEmitter($element, "click", this.handler)
                                    }
                                }]), Analytics
                            }())
                        }
                    }
                };
            directive.$inject = ["Base"], angular.module("app.utils").directive("wAnalytics", directive)
        }(),
        function() {
            var BigNumber = require("@waves/bignumber").BigNumber,
                ds = require("data-service"),
                AVAILABLE_VALIDATORS = ["gt", "gte", "lt", "lte", "length", "integer", "precision", "byteLt", "byteLte", "byteGt", "byteGte", "number", "asset", "compare", "alias", "address", "wavesAddress", "outerBlockchains", "anyAddress", "pattern", "custom"],
                PATTERNS = {
                    get NUMBER() {
                        var decimal = WavesApp.getLocaleData().separators.decimal;
                        return "\\d*\\".concat(decimal, "?\\d*")
                    },
                    INTEGER: "\\d*"
                },
                directive = function(utils, validateService, decorators, $rootScope, $compile, Base) {
                    return {
                        require: "ngModel",
                        priority: 1e4,
                        compile: function($input, $attrs) {
                            return "INPUT" !== $input.get(0).tagName && "TEXTAREA" !== $input.get(0).tagName ? null : function($scope, $input, $compiledAttrs, $ngModel) {
                                var _dec8, _class5;
                                return new(_dec8 = decorators.async(), _applyDecoratedDescriptor((_class5 = function() {
                                    function Validate() {
                                        var _this99;
                                        return _classCallCheck(this, Validate), (_this99 = _possibleConstructorReturn(this, _getPrototypeOf(Validate).call(this, $scope)))._validators = Object.create(null), _this99._validatorsReady = new tsUtils.Signal, _this99._ready = !1, _this99._validatorsReady.once(function() {
                                            _this99._ready = !0
                                        }), _this99._createValidatorList(), $scope.$watch($attrs.ngModel, function() {
                                            return _this99._validate()
                                        }), _this99
                                    }
                                    return _inherits(Validate, Base), _createClass(Validate, [{
                                        key: "_addInputPattern",
                                        value: function(pattern) {
                                            var _this100 = this;
                                            return new Promise(function(resolve) {
                                                var create = function() {
                                                    var patternName = Validate._getAttrName("pattern");
                                                    $attrs[patternName] || ($attrs[patternName] = pattern, resolve(_this100._createValidator("pattern")))
                                                };
                                                _this100._ready ? create() : _this100.receiveOnce(_this100._validatorsReady, create)
                                            })
                                        }
                                    }, {
                                        key: "_applyValidators",
                                        value: function(validators) {
                                            validators.forEach(function(_ref46) {
                                                var name = _ref46.name,
                                                    result = (0, _ref46.handler)($ngModel.$modelValue, $ngModel.$viewValue),
                                                    viewValue = $ngModel.$viewValue;
                                                switch (_typeof(result)) {
                                                    case "boolean":
                                                        $ngModel.$setValidity(name, result), "precision" !== name && "asset" !== name || !result || !viewValue || viewValue.match(/[a-z]/) || isNaN(Number(viewValue)) || ($ngModel.$viewValue = function(value, separator, argument_2) {
                                                            var prefix = 2 < arguments.length && void 0 !== argument_2 ? argument_2 : "";
                                                            if (isNaN(Number(value))) return "";
                                                            var valueArr = value.toString().split("."),
                                                                first = valueArr[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1".concat(separator));
                                                            if (1 === valueArr.length) {
                                                                var _value = first;
                                                                return _value ? "".concat(prefix || "").concat(_value) : ""
                                                            }
                                                            var _value2 = "".concat(first, ".").concat(valueArr[1]);
                                                            return _value2 ? "".concat(prefix || "").concat(_value2) : ""
                                                        }(viewValue, ","), $ngModel.$render());
                                                        break;
                                                    case "object":
                                                        if (!result || "function" != typeof result.then) throw new Error("Wrong validation result!");
                                                        $ngModel.$setValidity("pending-".concat(name), !1);
                                                        var onEnd = function() {
                                                            $ngModel.$setValidity("pending-".concat(name), !0), $scope.$apply()
                                                        };
                                                        utils.when(result).then(function() {
                                                            $ngModel.$setValidity(name, !0), onEnd()
                                                        }, function() {
                                                            $ngModel.$setValidity(name, !1), onEnd()
                                                        });
                                                        break;
                                                    default:
                                                        throw new Error("Wrong validation result!")
                                                }
                                            })
                                        }
                                    }, {
                                        key: "_validate",
                                        value: function() {
                                            var _this101 = this;
                                            this._applyValidators(Object.keys(this._validators).map(function(name) {
                                                return _this101._validators[name]
                                            })), $scope.$apply()
                                        }
                                    }, {
                                        key: "_validateByName",
                                        value: function(targetName) {
                                            this._applyValidators([this._validators[targetName]].filter(Boolean))
                                        }
                                    }, {
                                        key: "_createValidatorList",
                                        value: function() {
                                            var _this102 = this;
                                            AVAILABLE_VALIDATORS.filter(Validate._hasValidator).forEach(function(name) {
                                                _this102._createValidator(name)
                                            }), this._validatorsReady.dispatch()
                                        }
                                    }, {
                                        key: "_createValidator",
                                        value: function(name) {
                                            if (this._validators[name]) throw new Error("Duplicate validator! ".concat(name));
                                            switch (name) {
                                                case "asset":
                                                    this._validators[name] = this._createAssetValidator(name);
                                                    break;
                                                case "compare":
                                                    this._validators[name] = this._createCompareValidator(name);
                                                    break;
                                                case "custom":
                                                    this._validators[name] = this._createCustomValidator(name);
                                                    break;
                                                case "number":
                                                    this._validators[name] = this._createBigNumberValidator(name);
                                                    break;
                                                case "alias":
                                                case "address":
                                                case "wavesAddress":
                                                    this._validators[name] = this._createAddressValidator(name);
                                                    break;
                                                case "integer":
                                                    this._validators[name] = this._createIntegerValidator(name);
                                                    break;
                                                case "anyAddress":
                                                    this._validators[name] = this._createAnyAddressValidator(name);
                                                    break;
                                                case "outerBlockchains":
                                                    this._validators[name] = this._createOuterBlockchainsValidator(name);
                                                    break;
                                                case "pattern":
                                                    this._validators[name] = this._createPatternValidator(name);
                                                    break;
                                                case "byteLt":
                                                case "byteLte":
                                                    this._validators[name] = this._createByteValidator(name);
                                                    break;
                                                default:
                                                    this._validators[name] = this._createSimpleValidator(name)
                                            }
                                            return this._validators[name].parser && $ngModel.$parsers.unshift(this._validators[name].parser), this._validators[name].formatter && $ngModel.$formatters.push(this._validators[name].formatter), this._validators[name]
                                        }
                                    }, {
                                        key: "_createCustomValidator",
                                        value: function(name) {
                                            var validator = {
                                                name: name,
                                                value: null,
                                                handler: function() {
                                                    return null == validator.value || ("function" == typeof validator.value ? validator.value() : !!validator.value)
                                                }
                                            };
                                            return this._listenValidatorChanges(name, validator), validator
                                        }
                                    }, {
                                        key: "_createIntegerValidator",
                                        value: function(name) {
                                            return this._addInputPattern(PATTERNS.INTEGER), {
                                                name: name,
                                                value: null,
                                                handler: function(modelValue) {
                                                    try {
                                                        var num = Validate._toBigNumber(modelValue);
                                                        return !modelValue || num.roundTo(0).eq(Validate._toBigNumber(modelValue))
                                                    } catch (e) {
                                                        return !1
                                                    }
                                                }
                                            }
                                        }
                                    }, {
                                        key: "_createOuterBlockchainsValidator",
                                        value: function(name) {
                                            var value = null,
                                                validator = {
                                                    name: name,
                                                    value: null,
                                                    handler: function(address) {
                                                        return validateService.outerBlockchains(address, validator.value)
                                                    }
                                                };
                                            return Object.defineProperty(validator, "value", {
                                                get: function() {
                                                    return value
                                                },
                                                set: function(data) {
                                                    value = Validate._toAssetId(data)
                                                }
                                            }), this._listenValidatorChanges(name, validator), validator
                                        }
                                    }, {
                                        key: "_createAnyAddressValidator",
                                        value: function(name) {
                                            var value = null,
                                                validator = {
                                                    name: name,
                                                    value: null,
                                                    handler: function(address) {
                                                        return validateService.anyAddress(address, validator.value)
                                                    }
                                                };
                                            return Object.defineProperty(validator, "value", {
                                                get: function() {
                                                    return value
                                                },
                                                set: function(data) {
                                                    value = Validate._toAssetId(data)
                                                }
                                            }), this._listenValidatorChanges(name, validator), validator
                                        }
                                    }, {
                                        key: "_createCompareValidator",
                                        value: function(name) {
                                            var _this103 = this,
                                                value = null,
                                                validator = {
                                                    name: name,
                                                    value: null,
                                                    $compare: null,
                                                    $compareHandler: function() {
                                                        _this103._validateByName(name), $scope.$apply()
                                                    },
                                                    handler: function(value) {
                                                        return value === validator.$compare.val()
                                                    },
                                                    destroy: function() {
                                                        this.$compare.off("input", this.$compareHandler)
                                                    }
                                                };
                                            return Object.defineProperty(validator, "value", {
                                                get: function() {
                                                    return value
                                                },
                                                set: function(val) {
                                                    utils.isNotEqualValue(value, val) && (validator.$compare && validator.$compare.off("input", validator.$compareHandler), validator.$compare = $input.closest("form").find('input[name="'.concat(val, '"]')), validator.$compare.on("input", validator.$compareHandler), value = val)
                                                }
                                            }), this._listenValidatorChanges(name, validator), validator
                                        }
                                    }, {
                                        key: "_createPatternValidator",
                                        value: function(name) {
                                            var value, parserWorkedBeforeInputEvent = !1;

                                            function getCorrespondingToPatternPartOf(value) {
                                                var inputWithoutGroup = Validate._replaceGroupSeparator(value);
                                                return (validator.value.exec(inputWithoutGroup) || [])[0] || ""
                                            }
                                            var validator = {
                                                name: name,
                                                value: null,
                                                handler: function() {
                                                    return !0
                                                },
                                                parser: function(value) {
                                                    var correspondingToPatternPartOfInput = getCorrespondingToPatternPartOf(value);
                                                    return correspondingToPatternPartOfInput !== value && Validate._replaceInputValue(correspondingToPatternPartOfInput), parserWorkedBeforeInputEvent = !0, correspondingToPatternPartOfInput
                                                }
                                            };
                                            return Object.defineProperty(validator, "value", {
                                                get: function() {
                                                    return value
                                                },
                                                set: function(val) {
                                                    value = new RegExp(val)
                                                }
                                            }), $input.on("input", function() {
                                                parserWorkedBeforeInputEvent ? parserWorkedBeforeInputEvent = !1 : Validate._replaceInputValue(getCorrespondingToPatternPartOf($input.val()))
                                            }), this._listenValidatorChanges(name, validator), validator
                                        }
                                    }, {
                                        key: "_createAssetValidator",
                                        value: function(name) {
                                            var _this104 = this,
                                                precisionValidator = this._createValidator("precision");

                                            function setPrecisionFromAttr(precisionRestriction) {
                                                precisionValidator.value = void 0 !== precisionRestriction ? Number(precisionRestriction) : validator.money && validator.money.asset.precision || 0
                                            }
                                            this._addInputPattern(PATTERNS.NUMBER).then(function(validator) {
                                                _this104.listenEventEmitter(i18next, "languageChanged", function() {
                                                    validator.value = PATTERNS.NUMBER
                                                })
                                            });
                                            var value = null,
                                                validator = {
                                                    name: name,
                                                    money: null,
                                                    value: null,
                                                    apply: function() {
                                                        _this104._validateByName(name), _this104._validateByName(precisionValidator.name)
                                                    },
                                                    handler: function() {
                                                        return !0
                                                    },
                                                    parser: function(value) {
                                                        if (value) {
                                                            setPrecisionFromAttr($compiledAttrs.validatorAssetPrecision);
                                                            var money = Validate._toMoney(value, validator.money);
                                                            if (precisionValidator.handler($ngModel.$modelValue, value)) return money || (_this104._validateByName("asset"), null);
                                                            if (money) {
                                                                var viewValue = money.getTokens().toFixed(Math.min(precisionValidator.value, money.getTokens().getDecimalsCount()));
                                                                return $ngModel.$setViewValue(viewValue), $ngModel.$render(), money.cloneWithTokens(viewValue)
                                                            }
                                                            return null
                                                        }
                                                        return null
                                                    },
                                                    formatter: function(value) {
                                                        setPrecisionFromAttr($compiledAttrs.validatorAssetPrecision);
                                                        var viewValue = $input.val(),
                                                            money = precisionValidator.handler($ngModel.$modelValue, viewValue) && Validate._toMoney(viewValue, validator.money);
                                                        return Validate._isFocused() && (!value || money && money.eq(value)) ? $input.val() : value ? value.getTokens().toFixed(Math.min(precisionValidator.value, value.getTokens().getDecimalsCount())) : ""
                                                    }
                                                };
                                            return $input.on("input", function() {
                                                _this104._validateByName(precisionValidator.name), $scope.$apply()
                                            }), Object.defineProperty(validator, "value", {
                                                get: function() {
                                                    return value
                                                },
                                                set: function(assetData) {
                                                    if (validator.money = null, !assetData) return null;
                                                    (value = Validate._toAssetId(assetData)) && ds.moneyFromTokens("0", value).then(function(money) {
                                                        utils.isNotEqualValue(validator.money, money) && (validator.money = money, validator.apply(), $ngModel.$modelValue = validator.parser($ngModel.$viewValue))
                                                    })
                                                }
                                            }), this._listenValidatorChanges(name, validator), validator
                                        }
                                    }, {
                                        key: "_createAddressValidator",
                                        value: function(name) {
                                            var validator = {
                                                name: name,
                                                value: null,
                                                handler: function(value) {
                                                    return validateService[name](value, validator.value)
                                                }
                                            };
                                            return this._listenValidatorChanges(name, validator), validator
                                        }
                                    }, {
                                        key: "_createByteValidator",
                                        value: function(name) {
                                            var validator = this._createSimpleValidator(name),
                                                $byteScope = $rootScope.$new(!0),
                                                $element = $compile("<div ".concat(['w-i18n-ns="app.utils"', 'class="byte-validator__help"', 'w-i18n="validators.byte.help"', 'params="{bytes: bytes}"'].join(" "), "></div>"))($byteScope);
                                            $input.after($element), $scope.$on("$destroy", function() {
                                                $byteScope.$destroy()
                                            });
                                            var origin = validator.handler;
                                            return validator.handler = function(modelValue) {
                                                var stringBytes = validateService.getByteFromString(modelValue || "");
                                                return $byteScope.bytes = Number(validator.value) - stringBytes, $byteScope.$apply(), origin(modelValue)
                                            }, validator
                                        }
                                    }, {
                                        key: "_createSimpleValidator",
                                        value: function(name) {
                                            var handler;
                                            switch (name) {
                                                case "precision":
                                                    handler = function(modelValue, viewValue) {
                                                        var value;
                                                        try {
                                                            value = viewValue ? utils.parseNiceNumber(viewValue) : null
                                                        } catch (e) {
                                                            value = null
                                                        }
                                                        return validateService[name](value, validator.value)
                                                    };
                                                    break;
                                                default:
                                                    handler = function(modelValue) {
                                                        return validateService[name](modelValue, validator.value)
                                                    }
                                            }
                                            var validator = {
                                                name: name,
                                                value: null,
                                                handler: handler
                                            };
                                            return this._listenValidatorChanges(name, validator), validator
                                        }
                                    }, {
                                        key: "_createBigNumberValidator",
                                        value: function(name) {
                                            return this._addInputPattern(PATTERNS.NUMBER), {
                                                name: name,
                                                handler: function() {
                                                    return !0
                                                },
                                                parser: function(value) {
                                                    if ("" !== value) return Validate._toBigNumber(value)
                                                },
                                                formatter: Validate._toString
                                            }
                                        }
                                    }, {
                                        key: "_listenValidatorChanges",
                                        value: function(name, validator) {
                                            var _this105 = this,
                                                attrValue = $attrs[Validate._getAttrName(name)];
                                            if (Validate._hasExp(attrValue)) {
                                                var exp = attrValue.replace(/{{(.*)?}}/g, "$1"); - 1 !== exp.indexOf("::") ? validator.value = $scope.$eval(exp.replace("::", "")) : $scope.$watch(exp, function(value) {
                                                    validator.value = value, _this105._validateByName(validator.name)
                                                })
                                            } else validator.value = attrValue
                                        }
                                    }], [{
                                        key: "_isFocused",
                                        value: function() {
                                            return document.activeElement === $input.get(0)
                                        }
                                    }, {
                                        key: "_toAssetId",
                                        value: function(data) {
                                            return "string" == typeof data ? data : data instanceof ds.wavesDataEntities.Money ? data.asset.id : data instanceof ds.wavesDataEntities.Asset ? data.id : null
                                        }
                                    }, {
                                        key: "_toString",
                                        value: function(value) {
                                            return value instanceof BigNumber ? value.toFixed() : value instanceof ds.wavesDataEntities.Money ? value.getTokens().toFormat() : value ? String(value) : ""
                                        }
                                    }, {
                                        key: "_toMoney",
                                        value: function(value, target) {
                                            if (!target) return null;
                                            try {
                                                return target.cloneWithTokens(utils.parseNiceNumber(value))
                                            } catch (e) {
                                                return null
                                            }
                                        }
                                    }, {
                                        key: "_toBigNumber",
                                        value: function(value) {
                                            try {
                                                return new BigNumber(utils.parseNiceNumber(value))
                                            } catch (e) {
                                                return null
                                            }
                                        }
                                    }, {
                                        key: "_hasExp",
                                        value: function(value) {
                                            if (!value) return !1;
                                            var openIndex = value.indexOf("{{"),
                                                closeIndex = value.indexOf("}}");
                                            return -1 !== openIndex && -1 !== closeIndex && openIndex < closeIndex
                                        }
                                    }, {
                                        key: "_getAttrName",
                                        value: function(validatorName) {
                                            return "wValidator".concat(validatorName.charAt(0).toUpperCase()).concat(validatorName.slice(1))
                                        }
                                    }, {
                                        key: "_hasValidator",
                                        value: function(name) {
                                            return Validate._getAttrName(name) in $attrs
                                        }
                                    }, {
                                        key: "_replaceInputValue",
                                        value: function(newValue) {
                                            $ngModel.$viewValue = newValue, $ngModel.$render()
                                        }
                                    }, {
                                        key: "_replaceGroupSeparator",
                                        value: function(value) {
                                            var separator = WavesApp.localize[i18next.language].separators.group,
                                                reg = new RegExp("\\".concat(separator), "g");
                                            return value.replace(reg, "")
                                        }
                                    }]), Validate
                                }()).prototype, "_validate", [_dec8], Object.getOwnPropertyDescriptor(_class5.prototype, "_validate"), _class5.prototype), _class5)
                            }
                        }
                    }
                };
            directive.$inject = ["utils", "validateService", "decorators", "$rootScope", "$compile", "Base"], angular.module("app.utils").directive("wValidate", directive)
        }(),
        function() {
            var Money = require("@waves/data-entities").Money,
                BigNumber = require("@waves/bignumber").BigNumber,
                ds = require("data-service"),
                factory = function(BaseNodeComponent, utils, user, decorators, createPoll) {
                    var _dec9, _class6, Assets = (_dec9 = decorators.cachable(5), _applyDecoratedDescriptor((_class6 = function() {
                        function Assets() {
                            var _this106;
                            return _classCallCheck(this, Assets), _this106 = _possibleConstructorReturn(this, _getPrototypeOf(Assets).call(this)), user.loginSignal.on(_this106._handleLogin, _assertThisInitialized(_this106)), _this106
                        }
                        return _inherits(Assets, BaseNodeComponent), _createClass(Assets, [{
                            key: "info",
                            value: function(assetId) {
                                return assetId === ds.utils.BaseAssetService.getInstance().WavesAssetId || null === assetId ? Promise.all([this.getAsset(assetId), ds.fetch("".concat(this.node, "/blockchain/rewards")).then(function(data) {
                                    return {
                                        quantity: data.totalWavesAmount
                                    }
                                }).catch(function() {
                                    return null
                                })]).then(function(_ref47) {
                                    var _ref48 = _slicedToArray(_ref47, 2),
                                        asset = _ref48[0],
                                        assetData = _ref48[1];
                                    return assetData && Assets._updateAsset(asset, assetData), asset
                                }) : Promise.all([this.getAsset(assetId), ds.fetch("".concat(this.node, "/assets/details/").concat(assetId))]).then(function(_ref49) {
                                    var _ref50 = _slicedToArray(_ref49, 2),
                                        asset = _ref50[0],
                                        assetData = _ref50[1];
                                    return Assets._updateAsset(asset, assetData), asset
                                })
                            }
                        }, {
                            key: "getNft",
                            value: function(limit) {
                                return ds.api.assets.getNftList(user.address, limit)
                            }
                        }, {
                            key: "getAsset",
                            value: function(assetId) {
                                return ds.api.assets.get(assetId)
                            }
                        }, {
                            key: "balance",
                            value: function(assetId) {
                                return this.balanceList([assetId]).then(function(_ref51) {
                                    return _slicedToArray(_ref51, 1)[0]
                                })
                            }
                        }, {
                            key: "getAssetByTicker",
                            value: function(ticker) {
                                return ds.fetch("".concat(ds.apiUrls.getDataServiceUrl(), "/").concat(ds.config.get("apiVersion"), "/assets?ticker=").concat(ticker)).then(function(data) {
                                    return data.data[0].data
                                })
                            }
                        }, {
                            key: "balanceList",
                            value: function(assetIdList) {
                                var _this107 = this;
                                return utils.whenAll([this.userBalances(), this._getEmptyBalanceList(assetIdList)]).then(function(_ref53) {
                                    var _ref54 = _slicedToArray(_ref53, 2),
                                        balanceList = _ref54[0],
                                        emptyBalanceList = _ref54[1],
                                        balances = utils.toHash(balanceList, "available.asset.id");
                                    return Promise.all(emptyBalanceList.map(function(money) {
                                        return balances[money.asset.id] ? Promise.resolve(balances[money.asset.id]) : _this107.info(money.asset.id).then(function() {
                                            return {
                                                asset: money.asset,
                                                regular: money,
                                                available: money,
                                                inOrders: money,
                                                leasedOut: money,
                                                leasedIn: money,
                                                inDefoPools: Object.create(null)
                                            }
                                        })
                                    }))
                                })
                            }
                        }, {
                            key: "userBalances",
                            value: function() {
                                var hash = ds.dataManager.matcherService.balanceCache.get(),
                                    leaseOutData = ds.dataManager.matcherService.leaseOut,
                                    defoInvestments = ds.dataManager.matcherService.defoInvestments;
                                return ds.api.assets.get(Object.keys(hash)).then(function(list) {
                                    return list.map(function(asset) {
                                        var inOrders = new Money(BigNumber.toBigNumber(hash[asset.id].reserved).mul(Math.pow(10, asset.precision)), asset),
                                            leasedOut = leaseOutData[asset.id] || new Money(0, asset),
                                            available = new Money(BigNumber.toBigNumber(hash[asset.id].tradable).mul(Math.pow(10, asset.precision)), asset),
                                            inDefoPools = defoInvestments[asset.id] || Object.create(null);
                                        return {
                                            asset: asset,
                                            regular: inOrders.add(available).add(leasedOut),
                                            inOrders: inOrders,
                                            available: available,
                                            leasedOut: leasedOut,
                                            leasedIn: new Money(0, asset),
                                            inDefoPools: inDefoPools
                                        }
                                    })
                                })
                            }
                        }, {
                            key: "giveMyTokensNameBack",
                            value: function() {
                                user.tokensName = Object.create(null), this._pollTokensNames && (this._pollTokensNames.destroy(), this._pollTokensNames = null)
                            }
                        }, {
                            key: "tokensNameList",
                            value: function() {
                                this._pollTokensNames = createPoll(this, this._getTokensNameList, function(hash) {
                                    return user.setTokensNameList(hash)
                                }, 2e4)
                            }
                        }, {
                            key: "_getTokensNameList",
                            value: function() {
                                return ds.fetch("".concat(user.getSetting("tokensNameListUrl"), "?").concat(WavesApp.version, "-").concat(Date.now())).then(function(text) {
                                    var papa = require("papaparse"),
                                        hash = Object.create(null);
                                    return papa.parse(text).data.forEach(function(_ref55) {
                                        var id = _slicedToArray(_ref55, 1)[0];
                                        id && (hash[id] = !0)
                                    }), hash
                                }).catch(function() {
                                    return Object.create(null)
                                })
                            }
                        }, {
                            key: "_handleLogin",
                            value: function() {
                                user.getSetting("tokensNameListUrl") ? this.tokensNameList() : this.giveMyTokensNameBack()
                            }
                        }, {
                            key: "_getEmptyBalanceList",
                            value: function(idList) {
                                return ds.api.assets.get(idList).then(function(list) {
                                    return list.map(function(asset) {
                                        return new Money(0, asset)
                                    })
                                })
                            }
                        }], [{
                            key: "_updateAsset",
                            value: function(asset, props) {
                                asset.reissuable = props.reissuable, asset.quantity = new BigNumber(props.quantity)
                            }
                        }]), Assets
                    }()).prototype, "info", [_dec9], Object.getOwnPropertyDescriptor(_class6.prototype, "info"), _class6.prototype), _class6);
                    return utils.bind(new Assets)
                };
            factory.$inject = ["BaseNodeComponent", "utils", "user", "decorators", "createPoll"], angular.module("app").factory("assets", factory)
        }(),
        function() {
            var factory = function(Base) {
                var BaseClassComponent = function() {
                    function BaseClassComponent(parent) {
                        if (_classCallCheck(this, BaseClassComponent), !(parent instanceof Base)) throw new Error("Can't add component to controller, controller not instanceof Base!");
                        this.parent = parent, this.receiveOnce(parent.signals.destroy, this.remove, this)
                    }
                    return _createClass(BaseClassComponent, [{
                        key: "remove",
                        value: function() {}
                    }]), BaseClassComponent
                }();
                return BaseClassComponent.prototype.receive = tsUtils.Receiver.prototype.receive, BaseClassComponent.prototype.receiveOnce = tsUtils.Receiver.prototype.receiveOnce, BaseClassComponent.prototype.stopReceive = tsUtils.Receiver.prototype.stopReceive, BaseClassComponent
            };
            factory.$inject = ["Base"], angular.module("app.utils").factory("BaseClassComponent", factory)
        }(),
        function() {
            var factory = function(BaseNodeComponent) {
                var ds = require("data-service");
                return new(function() {
                    function Aliases() {
                        return _classCallCheck(this, Aliases), _possibleConstructorReturn(this, _getPrototypeOf(Aliases).apply(this, arguments))
                    }
                    return _inherits(Aliases, BaseNodeComponent), _createClass(Aliases, [{
                        key: "getAddress",
                        value: function(alias) {
                            return ds.api.aliases.getAddressByAlias(alias).then(function(_ref57) {
                                return _ref57.address
                            })
                        }
                    }, {
                        key: "getAliasList",
                        value: function() {
                            return ds.dataManager.getLastAliases()
                        }
                    }, {
                        key: "getByIdList",
                        value: function(list) {
                            return ds.api.aliases.getAliasesByIdList(list)
                        }
                    }, {
                        key: "validate",
                        value: function(alias) {
                            return 4 <= alias.length && alias.length <= WavesApp.maxAliasLength && alias.split("").every(function(_char6) {
                                return "-.0123456789@_abcdefghijklmnopqrstuvwxyz".includes(_char6)
                            })
                        }
                    }]), Aliases
                }())
            };
            factory.$inject = ["BaseNodeComponent"], angular.module("app").factory("aliases", factory)
        }(),
        function() {
            var rc = require("react-components"),
                controller = function(reactDirective, $transitions, utils, waves, user) {
                    return user.setWrapperReady(), reactDirective(rc.MainWrapper, void 0, void 0, {
                        $transitions: $transitions,
                        utils: utils,
                        waves: waves
                    })
                };
            controller.$inject = ["reactDirective", "$transitions", "utils", "waves", "user"], angular.module("app.wrapperForReact").directive("wWrapperForReact", controller)
        }(),
        function() {
            var BigNumber = require("@waves/bignumber").BigNumber,
                ds = require("data-service"),
                factory = function(waves, $q, _outerBlockchains, utils, user) {
                    var _class7, fetchAliases = utils.cache({}, waves.node.aliases.getByIdList, function(item) {
                            return item
                        }, 3e4, function(item) {
                            return function(result) {
                                return result.find(function(res) {
                                    return res && res.alias === item
                                })
                            }
                        }),
                        ValidateService = (_applyDecoratedDescriptor((_class7 = function() {
                            function ValidateService() {
                                _classCallCheck(this, ValidateService)
                            }
                            return _createClass(ValidateService, [{
                                key: "gt",
                                value: function(inputValue, validateValue) {
                                    return inputValue.gt(validateValue)
                                }
                            }, {
                                key: "gte",
                                value: function(inputValue, validateValue) {
                                    return inputValue.gte(validateValue)
                                }
                            }, {
                                key: "lt",
                                value: function(inputValue, validateValue) {
                                    return inputValue.lt(validateValue)
                                }
                            }, {
                                key: "lte",
                                value: function(inputValue, validateValue) {
                                    return inputValue.lte(validateValue)
                                }
                            }, {
                                key: "length",
                                value: function(inputValue, _length) {
                                    return String(inputValue).length <= _length
                                }
                            }, {
                                key: "precision",
                                value: function(inputValue, _precision) {
                                    var _inputValue$toFixed$s2 = _slicedToArray(inputValue.toFixed().split("."), 2),
                                        dec = (_inputValue$toFixed$s2[0], _inputValue$toFixed$s2[1]);
                                    return !dec || _precision.gte(dec.length)
                                }
                            }, {
                                key: "byteLt",
                                value: function(inputValue, bytes) {
                                    return this.getByteFromString(inputValue) < Number(bytes)
                                }
                            }, {
                                key: "byteLte",
                                value: function(inputValue, bytes) {
                                    return this.getByteFromString(inputValue) <= Number(bytes)
                                }
                            }, {
                                key: "byteGt",
                                value: function(inputValue, bytes) {
                                    return this.getByteFromString(inputValue) > Number(bytes)
                                }
                            }, {
                                key: "byteGte",
                                value: function(inputValue, bytes) {
                                    return this.getByteFromString(inputValue) >= Number(bytes)
                                }
                            }, {
                                key: "integer",
                                value: function(inputValue) {
                                    return inputValue.round().eq(inputValue)
                                }
                            }, {
                                key: "anyAddress",
                                value: function(address, assetId) {
                                    return !!this.outerBlockchains(address, assetId) || this.wavesAddress(address)
                                }
                            }, {
                                key: "wavesAddress",
                                value: function(address, value) {
                                    return utils.whenAll([this.alias(address, value), this.address(address, value)]).then(function(_ref58) {
                                        var _ref59 = _slicedToArray(_ref58, 2),
                                            _ref59$ = _ref59[0],
                                            alias = void 0 === _ref59$ || _ref59$,
                                            _ref59$2 = _ref59[1];
                                        return alias || (void 0 === _ref59$2 || _ref59$2) ? $q.resolve() : $q.reject()
                                    })
                                }
                            }, {
                                key: "wavesAddresses",
                                value: function(addressList, value) {
                                    var _this108 = this,
                                        data = addressList.map(function(item, i) {
                                            return {
                                                alias: item,
                                                address: item,
                                                index: i,
                                                isAddress: _this108.address(item, value),
                                                isValidAlis: _this108.isValidAlias(item)
                                            }
                                        }),
                                        aliases = data.filter(function(item) {
                                            return !item.isAddress || item.isValidAlis
                                        });
                                    return fetchAliases(aliases.map(function(item) {
                                        return item.alias
                                    })).then(function(result) {
                                        return aliases.forEach(function(item, index) {
                                            result[index] && result[index].address ? (item.address = result[index].address, item.isValidAlis = !0) : item.isValidAlis = !1
                                        }), data.map(function(item) {
                                            return _objectSpread({
                                                state: item.isValidAlis || item.isAddress
                                            }, item)
                                        })
                                    })
                                }
                            }, {
                                key: "outerBlockchains",
                                value: function(address, assetId) {
                                    if (!address || !assetId) return !0;
                                    var outerChain = _outerBlockchains[assetId];
                                    return !!outerChain && outerChain.isValidAddress(address)
                                }
                            }, {
                                key: "isValidAlias",
                                value: function(alias) {
                                    return waves.node.aliases.validate(alias || "")
                                }
                            }, {
                                key: "alias",
                                value: function(address, argument_1) {
                                    var value = 1 < arguments.length && void 0 !== argument_1 ? argument_1 : void 0;
                                    return !address || !(address.length < WavesApp.minAliasLength) && (!(address.length > WavesApp.maxAliasLength) && (!!waves.node.aliases.validate(address) && (value && "no-self" === value ? !waves.node.aliases.getAliasList().includes(address) && waves.node.aliases.getAddress(address) : waves.node.aliases.getAddress(address))))
                                }
                            }, {
                                key: "address",
                                value: function(_address, argument_1) {
                                    var value = 1 < arguments.length && void 0 !== argument_1 ? argument_1 : "";
                                    return !_address || !(_address.length <= WavesApp.maxAliasLength) && (!(_address.length > WavesApp.maxAddressLength) && (!!waves.node.isValidAddress(_address) && (!value || "no-self" !== value || _address !== user.address)))
                                }
                            }, {
                                key: "getByteFromString",
                                value: function(str) {
                                    return new Blob([str], {
                                        type: "text/plain"
                                    }).size
                                }
                            }], [{
                                key: "toBigNumber",
                                value: function(item) {
                                    switch (_typeof(item)) {
                                        case "string":
                                        case "number":
                                            try {
                                                return new BigNumber(item)
                                            } catch (e) {
                                                return null
                                            }
                                        case "object":
                                            return item instanceof BigNumber ? item : item instanceof ds.wavesDataEntities.Money ? item.getTokens() : null
                                    }
                                }
                            }]), ValidateService
                        }()).prototype, "gt", [toBigNumberArgs, notNullArgs], Object.getOwnPropertyDescriptor(_class7.prototype, "gt"), _class7.prototype), _applyDecoratedDescriptor(_class7.prototype, "gte", [toBigNumberArgs, notNullArgs], Object.getOwnPropertyDescriptor(_class7.prototype, "gte"), _class7.prototype), _applyDecoratedDescriptor(_class7.prototype, "lt", [toBigNumberArgs, notNullArgs], Object.getOwnPropertyDescriptor(_class7.prototype, "lt"), _class7.prototype), _applyDecoratedDescriptor(_class7.prototype, "lte", [toBigNumberArgs, notNullArgs], Object.getOwnPropertyDescriptor(_class7.prototype, "lte"), _class7.prototype), _applyDecoratedDescriptor(_class7.prototype, "length", [notNullArgs], Object.getOwnPropertyDescriptor(_class7.prototype, "length"), _class7.prototype), _applyDecoratedDescriptor(_class7.prototype, "precision", [toBigNumberArgs, notNullArgs], Object.getOwnPropertyDescriptor(_class7.prototype, "precision"), _class7.prototype), _applyDecoratedDescriptor(_class7.prototype, "byteLt", [notNullArgs], Object.getOwnPropertyDescriptor(_class7.prototype, "byteLt"), _class7.prototype), _applyDecoratedDescriptor(_class7.prototype, "byteLte", [notNullArgs], Object.getOwnPropertyDescriptor(_class7.prototype, "byteLte"), _class7.prototype), _applyDecoratedDescriptor(_class7.prototype, "byteGt", [notNullArgs], Object.getOwnPropertyDescriptor(_class7.prototype, "byteGt"), _class7.prototype), _applyDecoratedDescriptor(_class7.prototype, "byteGte", [notNullArgs], Object.getOwnPropertyDescriptor(_class7.prototype, "byteGte"), _class7.prototype), _applyDecoratedDescriptor(_class7.prototype, "integer", [notNullArgs], Object.getOwnPropertyDescriptor(_class7.prototype, "integer"), _class7.prototype), _class7);

                    function notNullArgs(target, key, descriptor) {
                        var origin = descriptor.value;
                        descriptor.value = function() {
                            for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) args[_key15] = arguments[_key15];
                            return !!args.some(function(value) {
                                return null == value || "" === value
                            }) || origin.call.apply(origin, [this].concat(args))
                        }
                    }

                    function toBigNumberArgs(target, key, descriptor) {
                        var origin = descriptor.value;
                        descriptor.value = function() {
                            for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) args[_key16] = arguments[_key16];
                            return origin.call.apply(origin, [this].concat(_toConsumableArray(args.map(ValidateService.toBigNumber))))
                        }
                    }
                    return utils.bind(new ValidateService)
                };
            factory.$inject = ["waves", "$q", "outerBlockchains", "utils", "user"], angular.module("app.utils").factory("validateService", factory)
        }(), angular.module("app").component("wComponentError", {
            templateUrl: "modules/app/directives/componentError/componentError.html"
        }),
        function() {
            var rc = require("react-components"),
                WalletNavPanelDirective = function(reactDirective, $transitions) {
                    return reactDirective(rc.WalletNavPanel, void 0, void 0, {
                        $transitions: $transitions
                    })
                };
            WalletNavPanelDirective.$inject = ["reactDirective", "$transitions"], angular.module("app").directive("wWalletNavPanel", WalletNavPanelDirective)
        }(),
        function() {
            var factory = function(user, utils, aliases, decorators, BaseNodeComponent) {
                var _dec10, _dec11, _class8, R = require("ramda"),
                    SIGN_TYPE = require("@waves/signature-adapter").SIGN_TYPE,
                    ds = require("data-service"),
                    Money = require("@waves/data-entities").Money,
                    matcher = ds.Matcher.getInstance(),
                    TYPES = WavesApp.TRANSACTION_TYPES.EXTENDED,
                    Transactions = (_dec10 = decorators.cachable(120), _dec11 = decorators.cachable(1), _applyDecoratedDescriptor((_class8 = function() {
                        function Transactions() {
                            var _this109;
                            return _classCallCheck(this, Transactions), (_this109 = _possibleConstructorReturn(this, _getPrototypeOf(Transactions).call(this))).TYPES = TYPES, _this109
                        }
                        return _inherits(Transactions, BaseNodeComponent), _createClass(Transactions, [{
                            key: "get",
                            value: function(id) {
                                return ds.api.transactions.get(id).then(this._pipeTransaction())
                            }
                        }, {
                            key: "getUtx",
                            value: function(id) {
                                return ds.api.transactions.getUTX(id).then(this._pipeTransaction())
                            }
                        }, {
                            key: "getAlways",
                            value: function(id) {
                                var _this110 = this;
                                return this.get(id).catch(function() {
                                    return _this110.getUtx(id)
                                }).catch(function() {
                                    return _this110.get(id)
                                })
                            }
                        }, {
                            key: "list",
                            value: function(argument_0, argument_1) {
                                var limit = 0 < arguments.length && void 0 !== argument_0 ? argument_0 : 1e3,
                                    after = 1 < arguments.length ? argument_1 : void 0;
                                return this._list(limit, after, user.address)
                            }
                        }, {
                            key: "getActiveLeasingTx",
                            value: function() {
                                return this._getActiveLeasingTx(user.address)
                            }
                        }, {
                            key: "listUtx",
                            value: function() {
                                var _this111 = this;
                                return ds.api.transactions.listUTX(user.address).then(function(list) {
                                    return list.map(_this111._pipeTransaction())
                                })
                            }
                        }, {
                            key: "listAlways",
                            value: function() {
                                return utils.whenAll([this.listUtx(), this.list()]).then(function(_ref60) {
                                    var _ref61 = _slicedToArray(_ref60, 2),
                                        utxTxList = _ref61[0],
                                        txList = _ref61[1];
                                    return utxTxList.concat(txList)
                                })
                            }
                        }, {
                            key: "getExchangeTxList",
                            value: function(prams, options) {
                                return ds.api.transactions.getExchangeTxList(_objectSpread({
                                    matcher: matcher.currentMatcherAddress
                                }, prams), options)
                            }
                        }, {
                            key: "createTransaction",
                            value: function(txData) {
                                var tx = ds.utils.normalizeTxTimestamp(_objectSpread({
                                    sender: user.address,
                                    timestamp: Date.now()
                                }, txData));
                                return tx.type === SIGN_TYPE.MASS_TRANSFER && (tx.totalAmount = tx.totalAmount || tx.transfers.map(function(_ref62) {
                                    return _ref62.amount
                                }).reduce(function(result, item) {
                                    return result.add(item)
                                }), tx.assetId = tx.totalAmount && tx.totalAmount.asset.id), tx.fee || (tx.fee = Money.fromCoins(0, ds.api.assets.wavesAsset)), this._pipeTransaction(!1)(tx)
                            }
                        }, {
                            key: "_getActiveLeasingTx",
                            value: function(address) {
                                var _this112 = this;
                                return ds.fetch("".concat(this.node, "/leasing/active/").concat(address)).then(R.uniqBy(R.prop("id"))).then(R.map(function(item) {
                                    return _objectSpread({}, item, {
                                        status: "active"
                                    })
                                })).then(function(list) {
                                    return ds.api.transactions.parseTx(list, !1)
                                }).then(function(list) {
                                    return list.map(_this112._pipeTransaction())
                                })
                            }
                        }, {
                            key: "_list",
                            value: function(limit, after, address) {
                                var _this113 = this;
                                return ds.api.transactions.list(address, limit, after).then(function(list) {
                                    return list.map(_this113._pipeTransaction())
                                })
                            }
                        }, {
                            key: "_pipeTransaction",
                            value: function() {
                                return function(tx) {
                                    return ds.utils.transactions.remapTransaction(user)(tx)
                                }
                            }
                        }], [{
                            key: "_getTypeByName",
                            value: function(txTypeName) {
                                switch (txTypeName) {
                                    case WavesApp.TRANSACTION_TYPES.NODE.TRANSFER:
                                        return 4;
                                    case WavesApp.TRANSACTION_TYPES.NODE.MASS_TRANSFER:
                                        return 11;
                                    case WavesApp.TRANSACTION_TYPES.NODE.LEASE:
                                        return 8;
                                    case WavesApp.TRANSACTION_TYPES.NODE.CANCEL_LEASING:
                                        return 9;
                                    case WavesApp.TRANSACTION_TYPES.NODE.ISSUE:
                                        return 3;
                                    case WavesApp.TRANSACTION_TYPES.NODE.REISSUE:
                                        return 5;
                                    case WavesApp.TRANSACTION_TYPES.NODE.BURN:
                                        return 6;
                                    case WavesApp.TRANSACTION_TYPES.NODE.CREATE_ALIAS:
                                        return 10;
                                    case WavesApp.TRANSACTION_TYPES.NODE.DATA:
                                        return 12;
                                    case WavesApp.TRANSACTION_TYPES.NODE.SET_SCRIPT:
                                        return 13;
                                    case WavesApp.TRANSACTION_TYPES.NODE.SPONSORSHIP:
                                        return 14;
                                    case WavesApp.TRANSACTION_TYPES.NODE.SCRIPT_INVOCATION:
                                        return 16;
                                    default:
                                        throw new Error("Wrong tx name!")
                                }
                            }
                        }, {
                            key: "_getTemplateType",
                            value: function(_ref63) {
                                var typeName = _ref63.typeName;
                                return ds.utils.transactions.getTemplateType({
                                    typeName: typeName
                                })
                            }
                        }, {
                            key: "_getTransactionAddress",
                            value: function(_ref64) {
                                var typeName = _ref64.typeName,
                                    sender = _ref64.sender,
                                    recipient = _ref64.recipient;
                                return ds.utils.transactions.getTransactionAddress({
                                    typeName: typeName,
                                    sender: sender,
                                    recipient: recipient
                                })
                            }
                        }]), Transactions
                    }()).prototype, "_getActiveLeasingTx", [_dec10], Object.getOwnPropertyDescriptor(_class8.prototype, "_getActiveLeasingTx"), _class8.prototype), _applyDecoratedDescriptor(_class8.prototype, "_list", [_dec11], Object.getOwnPropertyDescriptor(_class8.prototype, "_list"), _class8.prototype), _class8);
                return utils.bind(new Transactions)
            };
            factory.$inject = ["user", "utils", "aliases", "decorators", "BaseNodeComponent"], angular.module("app").factory("transactions", factory)
        }(),
        function() {
            var factory = function(Base, utils, eventManager, user) {
                var ds = require("data-service"),
                    Money = require("@waves/data-entities").Money,
                    _require28 = require("@waves/signature-adapter"),
                    currentFeeFactory = _require28.currentFeeFactory,
                    SIGN_TYPE = _require28.SIGN_TYPE,
                    address = require("@waves/waves-transactions").libs.crypto.address,
                    path = require("ramda").path,
                    BigNumber = require("@waves/bignumber").BigNumber,
                    MULTI_FEE_TRANSACTIONS = _defineProperty({}, SIGN_TYPE.TRANSFER, !0);
                return function() {
                    function BaseNodeComponent() {
                        return _classCallCheck(this, BaseNodeComponent), _possibleConstructorReturn(this, _getPrototypeOf(BaseNodeComponent).apply(this, arguments))
                    }
                    return _inherits(BaseNodeComponent, Base), _createClass(BaseNodeComponent, [{
                        key: "_feeList",
                        value: function(_ref65) {
                            var _this114 = this,
                                tx = _ref65.tx,
                                feeConfig = ds.utils.ConfigService.getInstance().getFeeConfig(),
                                currentFee = currentFeeFactory(feeConfig);
                            return this._fillTransaction(tx).then(function(tx) {
                                return Promise.all([_this114._getAssets(tx).then(function(assetList) {
                                    return assetList.filter(function(asset) {
                                        return asset.hasScript
                                    })
                                }).then(function(assetList) {
                                    return assetList.map(function(asset) {
                                        return asset.id
                                    })
                                }), ds.signature.getSignatureApi().makeSignable({
                                    type: tx.type,
                                    data: tx
                                }).getBytes(), ds.api.assets.get("WAVES"), _this114._isSmartAccount(tx)]).then(function(_ref66) {
                                    var _ref67 = _slicedToArray(_ref66, 4),
                                        smartAssetsIdList = _ref67[0],
                                        bytes = _ref67[1],
                                        wavesAsset = _ref67[2],
                                        hasScript = _ref67[3],
                                        bigNumberFee = currentFee(tx, bytes, hasScript, smartAssetsIdList),
                                        count = bigNumberFee.div(feeConfig.calculate_fee_rules.default.fee).roundTo(0, BigNumber.ROUND_MODE.ROUND_UP),
                                        fee = new Money(bigNumberFee, wavesAsset),
                                        feeList = ds.utils.getTransferFeeList().map(function(money) {
                                            return money.cloneWithTokens(money.getTokens().mul(count))
                                        });
                                    return MULTI_FEE_TRANSACTIONS[tx.type] ? [fee].concat(_toConsumableArray(feeList)) : [fee]
                                })
                            })
                        }
                    }, {
                        key: "getFee",
                        value: function(tx, fee, argument_2) {
                            var isList = 2 < arguments.length && void 0 !== argument_2 ? argument_2 : null;
                            return this._feeList({
                                tx: tx
                            }).then(function(list) {
                                if (fee) {
                                    var hash = utils.toHash(list, "asset.id");
                                    if (hash[fee.asset.id] && hash[fee.asset.id].getTokens().lte(fee.getTokens())) return fee;
                                    throw new Error("Wrong fee!")
                                }
                                return isList ? list : list[0]
                            })
                        }
                    }, {
                        key: "getFeeList",
                        value: function(tx) {
                            return this._feeList({
                                tx: tx
                            })
                        }
                    }, {
                        key: "_isSmartAccount",
                        value: function(tx) {
                            var publicKey = tx.senderPublicKey;
                            if (!publicKey || user.publicKey === publicKey) return Promise.resolve(user.hasScript());
                            var wavesAddress = address({
                                publicKey: publicKey
                            }, this.code);
                            return ds.api.address.getScriptInfo(wavesAddress).then(function(data) {
                                return data.extraFee.getTokens().gt(0)
                            })
                        }
                    }, {
                        key: "_pipeTransaction",
                        value: function(moneyList) {
                            return function(transaction) {
                                return eventManager.addTx(transaction, moneyList), transaction
                            }
                        }
                    }, {
                        key: "_fillTransaction",
                        value: function(tx) {
                            switch (tx.type) {
                                case SIGN_TYPE.ISSUE:
                                    return this._fillIssue(tx);
                                case SIGN_TYPE.TRANSFER:
                                    return this._fillTransfer(tx);
                                case SIGN_TYPE.REISSUE:
                                    return this._fillReissue(tx);
                                case SIGN_TYPE.BURN:
                                    return this._fillBurn(tx);
                                case SIGN_TYPE.LEASE:
                                    return this._fillLease(tx);
                                case SIGN_TYPE.CANCEL_LEASING:
                                    return this._fillCancelLease(tx);
                                case SIGN_TYPE.CREATE_ALIAS:
                                    return this._fillCreateAlias(tx);
                                case SIGN_TYPE.MASS_TRANSFER:
                                    return this._fillMassTransfer(tx);
                                case SIGN_TYPE.DATA:
                                    return this._fillData(tx);
                                case SIGN_TYPE.SET_SCRIPT:
                                    return this._fillSetScript(tx);
                                case SIGN_TYPE.SPONSORSHIP:
                                    return this._fillSponsorship(tx);
                                case SIGN_TYPE.SET_ASSET_SCRIPT:
                                    return this._fillSetAssetScript(tx);
                                default:
                                    throw new Error("Unsupported type ".concat(tx.type, "!"))
                            }
                        }
                    }, {
                        key: "_getAssets",
                        value: function(tx) {
                            return Promise.all([
                                ["amount"],
                                ["fee"],
                                ["assetId"],
                                ["transfers", 0, "amount"]
                            ].map(function(localPath) {
                                var value = path(localPath, tx);
                                return value instanceof BigNumber ? null : "string" == typeof value ? ds.api.assets.get(value).catch(function() {
                                    return {
                                        id: value,
                                        hasScript: !1
                                    }
                                }) : value instanceof Money ? {
                                    id: value.asset.id,
                                    hasScript: value.asset.hasScript
                                } : null
                            }).filter(Boolean))
                        }
                    }, {
                        key: "_fillIssue",
                        value: function(tx) {
                            return ds.api.assets.get("WAVES").then(function(asset) {
                                return {
                                    type: tx.type,
                                    name: tx.name || "name",
                                    description: tx.description || "description",
                                    reissuable: null == tx.reissue || tx.reissue,
                                    quantity: tx.quantity || new BigNumber(1),
                                    precision: tx.precision || 0,
                                    decimals: tx.precision || 0,
                                    script: tx.script || "",
                                    fee: tx.fee || new Money(1, asset)
                                }
                            })
                        }
                    }, {
                        key: "_fillTransfer",
                        value: function(tx) {
                            return ds.api.assets.get("WAVES").then(function(asset) {
                                return {
                                    type: tx.type,
                                    recipient: tx.recipient || user.address,
                                    amount: tx.amount || new Money(1, asset),
                                    fee: tx.fee || new Money(1, asset),
                                    attachment: tx.attachment instanceof Uint8Array ? Array.from(tx.attachment) : String(tx.attachment),
                                    senderPublicKey: tx.senderPublicKey || user.publicKey,
                                    assetId: tx.assetId || asset.id
                                }
                            })
                        }
                    }, {
                        key: "_fillReissue",
                        value: function(tx) {
                            var _this115 = this;
                            return ds.api.assets.get("WAVES").then(function(asset) {
                                return {
                                    type: tx.type,
                                    assetId: tx.assetId || _this115.baseAssetService.getAssetIdByTicker("BTC"),
                                    reissuable: tx.reissue || !0,
                                    quantity: tx.quantity || new BigNumber(1),
                                    fee: tx.fee || new Money(1, asset)
                                }
                            })
                        }
                    }, {
                        key: "_fillBurn",
                        value: function(tx) {
                            var _this116 = this;
                            return ds.api.assets.get("WAVES").then(function(asset) {
                                return {
                                    type: tx.type,
                                    assetId: tx.assetId || _this116.baseAssetService.getAssetIdByTicker("BTC"),
                                    amount: tx.amount || new BigNumber(1),
                                    fee: tx.fee || new Money(1, asset)
                                }
                            })
                        }
                    }, {
                        key: "_fillLease",
                        value: function(tx) {
                            return ds.api.assets.get("WAVES").then(function(asset) {
                                return {
                                    type: tx.type,
                                    recipient: tx.recipient || user.address,
                                    fee: tx.fee || new Money(1, asset),
                                    amount: tx.amount || new Money(1, asset)
                                }
                            })
                        }
                    }, {
                        key: "_fillCancelLease",
                        value: function(tx) {
                            var _this117 = this;
                            return ds.api.assets.get("WAVES").then(function(asset) {
                                return {
                                    type: tx.type,
                                    leaseId: tx.leaseId || _this117.baseAssetService.getAssetIdByTicker("BTC"),
                                    fee: tx.fee || new Money(1, asset)
                                }
                            })
                        }
                    }, {
                        key: "_fillCreateAlias",
                        value: function(tx) {
                            return ds.api.assets.get("WAVES").then(function(asset) {
                                return {
                                    type: tx.type,
                                    alias: tx.alias || "qwerty",
                                    fee: tx.fee || new Money(1, asset)
                                }
                            })
                        }
                    }, {
                        key: "_fillMassTransfer",
                        value: function(tx) {
                            var transfers = tx.transfers && tx.transfers.length ? tx.transfers : null,
                                totalAmount = transfers && transfers.reduce(function(acc, item) {
                                    return acc.add(item.amount)
                                }, tx.transfers[0].amount.cloneWithTokens(0)) || null;
                            return ds.api.assets.get("WAVES").then(function(asset) {
                                return {
                                    type: tx.type,
                                    transfers: transfers || [{
                                        amount: new Money(1, asset),
                                        recipient: user.address
                                    }],
                                    totalAmount: totalAmount || new Money(1, asset),
                                    fee: tx.fee || new Money(1, asset),
                                    assetId: tx.assetId || asset.id
                                }
                            })
                        }
                    }, {
                        key: "_fillData",
                        value: function(tx) {
                            return ds.api.assets.get("WAVES").then(function(asset) {
                                return {
                                    type: tx.type,
                                    data: tx.data || [],
                                    fee: tx.fee || new Money(1, asset)
                                }
                            })
                        }
                    }, {
                        key: "_fillSetScript",
                        value: function(tx) {
                            return ds.api.assets.get("WAVES").then(function(asset) {
                                return {
                                    type: tx.type,
                                    script: tx.script || "",
                                    fee: tx.fee || new Money(1, asset)
                                }
                            })
                        }
                    }, {
                        key: "_fillSponsorship",
                        value: function(tx) {
                            var _this118 = this;
                            return ds.api.assets.get("WAVES").then(function(asset) {
                                return {
                                    type: tx.type,
                                    assetId: tx.assetId || _this118.baseAssetService.getAssetIdByTicker("BTC"),
                                    minSponsoredAssetFee: tx.minSponsoredAssetFee || new Money(1, asset),
                                    fee: tx.fee || new Money(1, asset)
                                }
                            })
                        }
                    }, {
                        key: "_fillSetAssetScript",
                        value: function(tx) {
                            var _this119 = this;
                            return ds.api.assets.get("WAVES").then(function(asset) {
                                return {
                                    type: tx.type,
                                    script: tx.script || "base64:AQa3b8tH",
                                    assetId: tx.assetId || _this119.baseAssetService.getAssetIdByTicker("BTC"),
                                    fee: tx.fee || new Money(1, asset)
                                }
                            })
                        }
                    }, {
                        key: "matcher",
                        get: function() {
                            return ds.apiUrls.getMatcherProxyUrl()
                        }
                    }, {
                        key: "node",
                        get: function() {
                            return ds.apiUrls.getNodeUrl()
                        }
                    }, {
                        key: "code",
                        get: function() {
                            return ds.config.get("code")
                        }
                    }, {
                        key: "baseAssetService",
                        get: function() {
                            return ds.utils.BaseAssetService.getInstance()
                        }
                    }]), BaseNodeComponent
                }()
            };
            factory.$inject = ["Base", "utils", "eventManager", "user"], angular.module("app").factory("BaseNodeComponent", factory)
        }()
}();