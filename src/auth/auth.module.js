"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var auth_service_1 = require("./auth.service");
var authenticated_guard_1 = require("./authenticated.guard");
var local_strategy_1 = require("./local.strategy");
var login_guard_1 = require("./login.guard");
var session_serializer_1 = require("./session.serializer");
var users_module_1 = require("../users/users.module");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        (0, common_1.Module)({
            providers: [
                auth_service_1.AuthService,
                local_strategy_1.LocalStrategy,
                session_serializer_1.SessionSerializer,
                login_guard_1.LoginGuard,
                authenticated_guard_1.Authenticated,
            ],
            imports: [users_module_1.UsersModule]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
