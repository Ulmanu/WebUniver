package com.museum.museumcrudapi.repositories;

import com.museum.museumcrudapi.dto.CountSectionType;
import com.museum.museumcrudapi.dto.MuseumSectionJoinResponse;
import com.museum.museumcrudapi.dto.SectionGalleryJoin;
import com.museum.museumcrudapi.models.Museum;
import com.museum.museumcrudapi.models.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Repository
public interface SectionRepository extends JpaRepository<Section, Integer> {
  Optional<Object> findByTitle(String title);

  @Query("SELECT new com.museum.museumcrudapi.dto.SectionGalleryJoin(c.idsect,c.title) FROM Section c JOIN c.galleries p WHERE p.idsect=?1")
  public List<SectionGalleryJoin> getGalleryByIdsect(int idsect);

  @Query("SELECT new com.museum.museumcrudapi.dto.SectionGalleryJoin(c.idsect,c.title) FROM Section c JOIN c.galleries p ")
  public List<SectionGalleryJoin> getGalleryByIdsect2();

  @Query("select  new com.museum.museumcrudapi.dto.CountSectionType(count (c.idsect) ) from Section c group by c.type")
  public List<CountSectionType> getCount();


}
