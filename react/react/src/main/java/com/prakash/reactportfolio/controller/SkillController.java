package com.prakash.reactportfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.prakash.reactportfolio.model.Skill;
import com.prakash.reactportfolio.repository.SkillRepository;

@RestController
@RequestMapping("/api/skills")
@CrossOrigin(origins = "http://localhost:3000") // allow React frontend
public class SkillController {

    @Autowired
    private SkillRepository skillRepository;

    // Get all skills
    @GetMapping
    public List<Skill> getAllSkills() {
        return skillRepository.findAll();
    }

    // Add a new skill
    @PostMapping
    public Skill addSkill(@RequestBody Skill skill) {
        return skillRepository.save(skill);
    }

    // Optional: Get skill by ID
    @GetMapping("/{id}")
    public Skill getSkillById(@PathVariable Long id) {
        return skillRepository.findById(id).orElse(null);
    }
}
