"use strict";
// jono, linkitetty lista
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    Queue.prototype.enqueue = function (item) {
        var node = { value: item };
        this.length++;
        if (!this.tail) {
            this.tail = this.head = { value: item };
        }
        this.tail.next = node;
        this.tail = node;
    };
    Queue.prototype.deque = function () {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        var head = this.head;
        this.head = this.head.next;
        head.next = undefined;
        return head.value;
    };
    Queue.prototype.peek = function () {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    };
    return Queue;
}());
exports.default = Queue;
