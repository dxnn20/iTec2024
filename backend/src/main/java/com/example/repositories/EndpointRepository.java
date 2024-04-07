package com.example.repositories;

import com.example.entities.Endpoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EndpointRepository extends JpaRepository<Endpoint,Long> {
    @Query(value="select user.username from Endpoint endpoint join App app on endpoint.app=app join User user on user=app.user where endpoint.id=?1")
    String getUserIdByEndpointId(Long id);
}
