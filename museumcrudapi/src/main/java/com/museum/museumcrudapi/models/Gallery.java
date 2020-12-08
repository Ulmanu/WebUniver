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
public class Gallery {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int idgal;
  private String title;
  private String description;
  private String image;
  private int idsect;
//  @OneToMany(targetEntity = Exponat.class,cascade = CascadeType.ALL)
//  @JoinColumn(name = "idgal",referencedColumnName = "idgal")
//  private List<Section> galleries;

  public void setIdgal(int idgal) {
    this.idgal = idgal;
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

  public void setIdsect(int idsect) {
    this.idsect = idsect;
  }


  public int getIdgal() {
    return idgal;
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

  public int getIdsect() {
    return idsect;
  }


}
