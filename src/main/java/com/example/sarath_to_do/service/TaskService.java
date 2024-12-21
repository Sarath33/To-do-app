package com.example.sarath_to_do.service;

import com.example.sarath_to_do.entity.Task;

import java.util.List;
import java.util.Optional;

public interface TaskService {
    List<Task> getAllTasks();
    Optional<Task> getTaskById(Long id);
    Task saveTask(Task Task);
    Task updateTask(Task Task);
    void deleteTask(Long id);
}
