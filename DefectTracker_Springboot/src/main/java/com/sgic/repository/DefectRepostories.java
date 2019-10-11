package com.sgic.repository;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sgic.entity.Defect;

public interface DefectRepostories extends JpaRepository<Defect, Long> {
	
	

	Page<Defect> findByProjectId(Long projectId, Pageable pageable);

	Optional<Defect> findByIdAndProjectId(Long id, Long projectId);
	
//	@Query("UPDATE defect\r\n" + 
//			"SET name = 'defect1', priority = 'high', serverity = 'high', project_id = 1 \r\n" + 
//			"WHERE id = 1;")
//	Collection<Defect> Update();
}
