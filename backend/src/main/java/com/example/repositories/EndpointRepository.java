package com.example.repositories;

import com.example.entities.Endpoint;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EndpointRepository extends JpaRepository<Endpoint,Long> {
}
