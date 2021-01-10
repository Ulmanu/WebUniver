package com.museum.museumcrudapi.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;
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


  private Date date;
  private int idturtype;

  public int getQty() {
    return qty;
  }

  public void setQty(int qty) {
    this.qty = qty;
  }

  private int qty;

  public double getCost() {
    return cost;
  }

  public void setCost(double cost) {
    this.cost = cost;
  }

  private double cost;

}
