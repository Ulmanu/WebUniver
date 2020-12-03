package com.museum.museumcrudapi.repositories;

import com.museum.museumcrudapi.dto.MuseumSectionJoinResponse;
import com.museum.museumcrudapi.models.Exponat;

import com.museum.museumcrudapi.models.Turtype;
import com.museum.museumcrudapi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TurtypeRepository extends JpaRepository<Turtype,Integer>{



}
