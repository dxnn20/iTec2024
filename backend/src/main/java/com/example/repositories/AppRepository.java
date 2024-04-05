package com.example.repositories;

import com.example.entities.App;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppRepository extends JpaRepository<App,Long> {}