package com.example.sarath_to_do.Repository;

import com.example.sarath_to_do.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRespository extends JpaRepository<Task, Long> {
}
