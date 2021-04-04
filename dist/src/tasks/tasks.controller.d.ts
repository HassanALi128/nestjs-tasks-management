import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filters.dto';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(filterDto: GetTasksFilterDto): Task[];
    getTaskById(id: string): Task;
    deleteTaskById(id: string): void;
    createTask(createTaskDto: CreateTaskDto): Task;
    updateTaskStatus(id: string, status: TaskStatus): Task;
}
