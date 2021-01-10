package com.museum.museumcrudapi.repositories;

import com.museum.museumcrudapi.dto.*;
import com.museum.museumcrudapi.models.Gallery;
import com.museum.museumcrudapi.models.Museum;
import com.museum.museumcrudapi.models.Turtype;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
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

  @Query("SELECT new com.museum.museumcrudapi.dto.PaymentDTO(c.idpay,c.cardnumber,c.amount,c.iduser) FROM Payment c JOIN User m on c.iduser= m.id WHERE m.id=?1")
  public List<PaymentDTO> getPaymentByIduser(int id);

  @Query("SELECT distinct new com.museum.museumcrudapi.dto.SouvenirsDTO(c.idsuv,c.name,c.price,c.image,c.status) FROM Souvenirs c join Purchase p on c.idsuv=p.idsouvam join User u on p.id=u.id where u.id=?1")
  public List<SouvenirsDTO> getSouvenirsByIduser(int id);

  @Query("SELECT distinct new com.museum.museumcrudapi.dto.TurtypeDTO(c.idturtype,c.nametur,c.description,c.price,c.idmus) FROM Turtype c join Tur p on c.idturtype=p.idturtype join User u on p.id=u.id where u.id=?1")
  public List<TurtypeDTO> getToursByIduser(int id);

  @Query("select new com.museum.museumcrudapi.dto.InfoDTO(sum(p.qty),sum(p.cost),s.name)  from Souvenirs s join Purchase p on s.idsuv = p.idsouvam join User u on p.id = u.id where u.id=?1  group by p.idsouvam")
  public List<InfoDTO> getSouvUser(int id);

  @Query("select new com.museum.museumcrudapi.dto.InfoDTO(sum(t.qty),sum(t.cost),s.nametur)  from Turtype s join Tur t on t.idturtype=s.idturtype join  User u on t.id = u.id where u.id=?1  group by s.idturtype")
  public List<InfoDTO> getTourUser(int id);

  @Query("SELECT new com.museum.museumcrudapi.dto.MuseumDTO(c.id,c.title,c.address,c.description,c.image,c.lat,c.lon) FROM Museum c JOIN Section p on c.id=p.idmus WHERE p.type='Baroque'")
  public List<MuseumDTO> getSectionByIdmus22();

  @Query("SELECT new com.museum.museumcrudapi.dto.MuseumDTO(c.id,c.title,c.address,c.description,c.image,c.lat,c.lon) FROM Museum c JOIN Section p on c.id=p.idmus WHERE p.type='Contemporary'")
  public List<MuseumDTO> getSectionByIdmus33();

  @Query("SELECT new com.museum.museumcrudapi.dto.MuseumDTO(c.id,c.title,c.address,c.description,c.image,c.lat,c.lon) FROM Museum c JOIN Section p on c.id=p.idmus WHERE p.type='History'")
  public List<MuseumDTO> getSectionByIdmus44();
//  @Query("SELECT new com.museum.museumcrudapi.dto.MuseumSectionJoinResponse(c.id,c.title) FROM Museum c JOIN c.sections p WHERE p.idmus=?1")
//  public List<MuseumSectionJoinResponse> getSectionByIdmus(int idmus);
//
//  @Query("SELECT new com.museum.museumcrudapi.dto.MuseumSectionJoinResponse(c.id,c.title) FROM Museum c JOIN c.sections p ")
//  public List<MuseumSectionJoinResponse> getSectionByIdmus2();
}
