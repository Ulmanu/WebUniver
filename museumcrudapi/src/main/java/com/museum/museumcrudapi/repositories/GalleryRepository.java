package com.museum.museumcrudapi.repositories;

import com.museum.museumcrudapi.dto.MuseumSectionJoinResponse;
import com.museum.museumcrudapi.models.Gallery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GalleryRepository extends JpaRepository<Gallery,Integer>{
  Optional<Object> findByTitle(String title);

  @Query("SELECT new com.museum.museumcrudapi.dto.MuseumSectionJoinResponse(c.id,c.title) FROM Museum c JOIN c.sections p WHERE p.idmus=?1")
  public List<MuseumSectionJoinResponse> getSectionByIdmus(int idmus);

  @Query("SELECT new com.museum.museumcrudapi.dto.MuseumSectionJoinResponse(c.id,c.title) FROM Museum c JOIN c.sections p ")
  public List<MuseumSectionJoinResponse> getSectionByIdmus2();
}
