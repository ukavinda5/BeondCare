package com.beondcare.web_app.repository;

import com.beondcare.web_app.Entities.Payments;
import com.beondcare.web_app.Entities.Shortlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShortlistRepository extends JpaRepository<Shortlist,Long> {

}