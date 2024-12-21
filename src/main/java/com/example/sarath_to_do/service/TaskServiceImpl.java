package com.example.sarath_to_do.service;

import com.example.sarath_to_do.Repository.TaskRespository;
import com.example.sarath_to_do.entity.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService{

    @Autowired
    private TaskRespository taskRespository;
    @Override
    public List<Task> getAllTasks() {
        return taskRespository.findAll();
    }

    @Override
    public Optional<Task> getTaskById(Long id) {
        return taskRespository.findById(id);
    }

    @Override
    public Task saveTask(Task task) {
        return taskRespository.save(task);
    }

    @Override
    public Task updateTask(Task task) {
        return taskRespository.save(task);
    }

    @Override
    public void deleteTask(Long id) {
        taskRespository.deleteById(id);
    }

}
