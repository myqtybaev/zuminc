"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsAdapter = exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const WebSocket = require("ws");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let ChatService = class ChatService {
};
ChatService = __decorate([
    (0, common_1.Injectable)()
], ChatService);
exports.ChatService = ChatService;
class WsAdapter {
    constructor(app) {
        this.app = app;
    }
    create(port, options = {}) {
        return new WebSocket.Server(Object.assign({ port }, options));
    }
    bindClientConnect(server, callback) {
        server.on('connection', callback);
    }
    bindMessageHandlers(client, handlers, process) {
        (0, rxjs_1.fromEvent)(client, 'message')
            .pipe((0, operators_1.mergeMap)((data) => this.bindMessageHandler(data, handlers, process)), (0, operators_1.filter)((result) => result))
            .subscribe((response) => client.send(JSON.stringify(response)));
    }
    bindMessageHandler(buffer, handlers, process) {
        const message = JSON.parse(buffer.data);
        const messageHandler = handlers.find((handler) => handler.message === message.event);
        if (!messageHandler) {
            return rxjs_1.EMPTY;
        }
        return process(messageHandler.callback(message.data));
    }
    close(server) {
        server.close();
    }
}
exports.WsAdapter = WsAdapter;
//# sourceMappingURL=chat.service.js.map