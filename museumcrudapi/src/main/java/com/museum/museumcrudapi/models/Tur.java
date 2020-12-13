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
public class Tur {
  public int getIdtur() {
    return idtur;
  }

  public void setIdtur(int idtur) {
    this.idtur = idtur;
  }

  public int getId() {
    return id;
  }

  public void setId(int iduser) {
    this.id = iduser;
  }

  public int getIdmus() {
    return idmus;
  }

  public void setIdmus(int idmus) {
    this.idmus = idmus;
  }

  public int getIdsect() {
    return idsect;
  }

  public void setIdsect(int idsect) {
    this.idsect = idsect;
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
  private int idtur;
  private int id;
  private int idmus;
  private int idsect;
  private Date date;
  private int idturtype;

}
