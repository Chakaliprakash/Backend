package com.prakash.reactportfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.prakash.reactportfolio.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {}
