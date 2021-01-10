package com.museum.museumcrudapi.repositories;

import com.museum.museumcrudapi.models.Museum;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.museum.museumcrudapi.models.Purchase;
import javax.transaction.Transactional;

@Repository
@Transactional
public interface DMLRepository extends CrudRepository<Purchase,Integer> {

  @Modifying      // to mark delete or update query
  @Query("delete from Purchase where id=?1 and idsouvam=?2")
  public void deletePurchase( int id, int idsouvam);

  @Modifying      // to mark delete or update query
  @Query("delete from Tur where id=?1 and idturtype=?2")
  public void deleteTur( int id, int idtur);
}
