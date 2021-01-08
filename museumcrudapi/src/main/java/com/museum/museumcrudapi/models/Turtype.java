package com.museum.museumcrudapi.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Turtype {

  public int getIdturtype() {
    return idturtype;
  }

  public void setIdturtype(int idturtype) {
    this.idturtype = idturtype;
  }

  public String getNametur() {
    return nametur;
  }

  public void setNametur(String nametur) {
    this.nametur = nametur;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public float getPrice() {
    return price;
  }

  public void setPrice(float price) {
    this.price = price;
  }
  public int getIdmus() {
    return idmus;
  }

  public void setIdmus(int idmus) {
    this.idmus = idmus;
  }
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int idturtype;
  private String nametur;
  private String description;
  private float price;
  private int idmus;
}
