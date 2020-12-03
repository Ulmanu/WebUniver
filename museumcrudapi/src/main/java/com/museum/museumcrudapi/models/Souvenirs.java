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
public class Souvenirs {

  public int getIdsuv() {
    return idsuv;
  }

  public void setIdsuv(int idsuv) {
    this.idsuv = idsuv;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public float getPrice() {
    return price;
  }

  public void setPrice(float price) {
    this.price = price;
  }

  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public int getIdmuseum() {
    return idmuseum;
  }

  public void setIdmuseum(int idmuseum) {
    this.idmuseum = idmuseum;
  }

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int idsuv;
  private String name;
  private float price;
  private String image;
  private int idmuseum;
}