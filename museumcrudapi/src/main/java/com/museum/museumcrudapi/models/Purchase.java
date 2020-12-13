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

  public int getId() {
    return id;
  }

  public void setId(int iduser) {
    this.id = iduser;
  }



  public int getIdsouvam() {
    return idsouvam;
  }

  public void setIdsouvam(int idsuvam) {
    this.idsouvam = idsuvam;
  }

  public Date getDate() {
    return date;
  }

  public void setDate(Date date) {
    this.date = date;
  }



  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int idpur;
  private int id;

  private int idsouvam;
  private Date date;




}
