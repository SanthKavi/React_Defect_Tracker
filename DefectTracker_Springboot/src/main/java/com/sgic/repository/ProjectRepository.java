package com.sgic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sgic.entity.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
	Project findProjectById(Long id);
}
