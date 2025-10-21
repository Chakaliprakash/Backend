package com.prakash.reactportfolio.controller;

import com.prakash.reactportfolio.model.Project;
import com.prakash.reactportfolio.repository.ProjectRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {

    private final ProjectRepository repo;
    public ProjectController(ProjectRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return repo.findAll();
    }

    @PostMapping
    public Project addProject(@RequestBody Project project) {
        return repo.save(project);
    }
}
