package com.prakash.reactportfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.prakash.reactportfolio.model.Skill;

public interface SkillRepository extends JpaRepository<Skill, Long> {}
