package com.beondcare.web_app.repository;

import com.beondcare.web_app.Entities.Job;
import org.aspectj.weaver.ast.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepository extends JpaRepository<Job, Integer> {
    @Query(value="SELECT  distinct provider.location FROM provider join job on provider.email=job.email ",nativeQuery = true)
    List<String> allLocation();
}
