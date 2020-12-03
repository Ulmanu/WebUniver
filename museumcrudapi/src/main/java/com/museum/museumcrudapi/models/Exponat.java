package com.museum.museumcrudapi.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Exponat {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int idexp;
  private String title;
  private String description;
  private String image;
  private int idgal;
  private double price;

  public void setIdexp(int idexp) {
    this.idexp = idexp;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public void setIdgal(int idgal) {
    this.idgal = idgal;
  }

  public void setPrice(double price) {
    this.price = price;
  }



  public int getIdexp() {
    return idexp;
  }

  public String getTitle() {
    return title;
  }

  public String getDescription() {
    return description;
  }

  public String getImage() {
    return image;
  }

  public int getIdgal() {
    return idgal;
  }

  public double getPrice() {
    return price;
  }


}
