package com.museum.museumcrudapi.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Purchase {

  public int getIdpur() {
    return idpur;
  }

  public void setIdpur(int idpur) {
    this.idpur = idpur;
  }

  public int getIduser() {
    return iduser;
  }

  public void setIduser(int iduser) {
    this.iduser = iduser;
  }

  public int getIdmus() {
    return idmus;
  }

  public void setIdmus(int idmus) {
    this.idmus = idmus;
  }

  public int getIdsuvam() {
    return idsuvam;
  }

  public void setIdsuvam(int idsuvam) {
    this.idsuvam = idsuvam;
  }

  public Date getDate() {
    return date;
  }

  public void setDate(Date date) {
    this.date = date;
  }

  public int getIdturtype() {
    return idturtype;
  }

  public void setIdturtype(int idturtype) {
    this.idturtype = idturtype;
  }

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int idpur;
  private int iduser;
  private int idmus;
  private int idsuvam;
  private Date date;
  private int idturtype;



}
