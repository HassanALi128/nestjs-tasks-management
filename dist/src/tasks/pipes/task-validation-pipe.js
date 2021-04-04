"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const tasks_model_1 = require("../tasks.model");
class TaskStatusValidationPipe {
    constructor() {
        this.allowedStatus = [
            tasks_model_1.TaskStatus.OPEN,
            tasks_model_1.TaskStatus.IN_PROGRESS,
            tasks_model_1.TaskStatus.DONE
        ];
    }
    transform(value) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`"${value}" is an invalid status`);
        }
        return value;
    }
    isStatusValid(status) {
        const idx = this.allowedStatus.indexOf(status);
        return idx !== -1;
    }
}
exports.TaskStatusValidationPipe = TaskStatusValidationPipe;
//# sourceMappingURL=task-validation-pipe.js.map