package com.museum.museumcrudapi.repositories;

import com.museum.museumcrudapi.models.Souvenirsamount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SouveniramountRepository extends JpaRepository<Souvenirsamount,Integer>{



}
