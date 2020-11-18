package com.museum.museumcrudapi.repositories;

import com.museum.museumcrudapi.models.Museum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MuseumRepository extends JpaRepository<Museum,Integer>{
    Optional<Object> findByTitle(String title);
}
