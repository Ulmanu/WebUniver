package com.museum.museumcrudapi.repositories;

import com.museum.museumcrudapi.dto.MuseumDTO;
import com.museum.museumcrudapi.dto.MuseumSectionJoinResponse;
import com.museum.museumcrudapi.models.Museum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MuseumRepository extends JpaRepository<Museum,Integer>{
    Optional<Object> findByTitle(String title);

  @Query("SELECT new com.museum.museumcrudapi.dto.MuseumDTO(c.id,c.title,c.address,c.description,c.image,c.lat,c.lon) FROM Museum c JOIN Section p on c.id=p.idmus WHERE p.type='Rennaisance'")
  public List<MuseumDTO> getSectionByIdmus();
//
//  @Query("SELECT new com.museum.museumcrudapi.dto.MuseumSectionJoinResponse(c.id,c.title) FROM Museum c JOIN c.sections p ")
//  public List<MuseumSectionJoinResponse> getSectionByIdmus2();
}
