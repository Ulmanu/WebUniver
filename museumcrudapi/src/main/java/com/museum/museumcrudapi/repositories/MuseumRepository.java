package com.museum.museumcrudapi.repositories;

import com.museum.museumcrudapi.dto.*;
import com.museum.museumcrudapi.models.Gallery;
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

  @Query("SELECT new com.museum.museumcrudapi.dto.MuseumDTO(c.id,c.title,c.address,c.description,c.image,c.lat,c.lon) FROM Museum c  WHERE c.id=?1")
  public List<MuseumDTO> getSectionByIdmus1(int idmus);

  @Query("SELECT new com.museum.museumcrudapi.dto.SectionDTO(c.idsect,c.title,c.description,c.image,c.type,c.idmus) FROM Section c JOIN Museum m on c.idmus= m.id WHERE m.id=?1")
  public List<SectionDTO> getSectionByIdmus2(int idmus);

  @Query("SELECT new com.museum.museumcrudapi.dto.TurtypeDTO(c.idturtype,c.nametur,c.description,c.price,c.idmus) FROM Turtype c JOIN Museum m on c.idmus= m.id WHERE m.id=?1")
  public List<TurtypeDTO> getTurtypeByIdmus(int idmus);

  @Query("SELECT new com.museum.museumcrudapi.dto.GalleryDTO(c.idgal,c.title,c.description,c.image,c.idsect) FROM Gallery c JOIN Section m on c.idsect= m.idsect WHERE m.idsect=?1")
  public List<GalleryDTO> getGalleryByIdmus(int idsect);

  @Query("SELECT new com.museum.museumcrudapi.dto.ExponatDTO(c.idexp,c.title,c.description,c.image,c.idgal,c.price) FROM Exponat c JOIN Gallery m on c.idgal= m.idgal WHERE m.idgal=?1")
  public List<ExponatDTO> getExponatByIdmus(int idgal);

//  @Query("SELECT new com.museum.museumcrudapi.dto.MuseumSectionJoinResponse(c.id,c.title) FROM Museum c JOIN c.sections p WHERE p.idmus=?1")
//  public List<MuseumSectionJoinResponse> getSectionByIdmus(int idmus);
//
//  @Query("SELECT new com.museum.museumcrudapi.dto.MuseumSectionJoinResponse(c.id,c.title) FROM Museum c JOIN c.sections p ")
//  public List<MuseumSectionJoinResponse> getSectionByIdmus2();
}
