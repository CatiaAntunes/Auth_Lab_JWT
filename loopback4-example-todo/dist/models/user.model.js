"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.NewUserRequest = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return authentication_jwt_1.User; } });
let NewUserRequest = class NewUserRequest extends authentication_jwt_1.User {
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], NewUserRequest.prototype, "password", void 0);
NewUserRequest = tslib_1.__decorate([
    (0, repository_1.model)()
], NewUserRequest);
exports.NewUserRequest = NewUserRequest;
//# sourceMappingURL=user.model.js.map