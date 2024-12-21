package com.example.sarath_to_do.api;


import com.example.sarath_to_do.entity.Task;
import com.example.sarath_to_do.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/task")
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        Optional<Task> task= taskService.getTaskById(id);
        return task.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.saveTask(task);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task TaskDetails) {
        Optional<Task> TaskOptional = taskService.getTaskById(id);
        if (TaskOptional.isPresent()) {
            Task Task = TaskOptional.get();
            Task.setName(TaskDetails.getName());
            Task.setDescription(TaskDetails.getDescription());
            return ResponseEntity.ok(taskService.updateTask(Task));
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        Optional<Task> Task = taskService.getTaskById(id);
        if (Task.isPresent()) {
            taskService.deleteTask(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/{id}/{TaskStatus}")
    public ResponseEntity<Void> updateTaskStatus(@PathVariable Boolean TaskStatus, @PathVariable Long id) {
        Optional<Task> Task = taskService.getTaskById(id);
        if (Task.isPresent()) {
            Task entity = Task.get();
            entity.setCompleted(TaskStatus);
            taskService.updateTask(entity);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
