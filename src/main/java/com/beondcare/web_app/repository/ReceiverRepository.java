package com.beondcare.web_app.repository;

import com.beondcare.web_app.Entities.Receiver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReceiverRepository extends JpaRepository<Receiver, String> {
}
