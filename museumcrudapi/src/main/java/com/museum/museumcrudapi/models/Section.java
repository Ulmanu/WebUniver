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
public class Section {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int idsect;
  private String title;
  private String description;
  private String image;
  private String type;
  private int idmus;
  @OneToMany(targetEntity = Gallery.class,cascade = CascadeType.ALL)
  @JoinColumn(name = "idsect",referencedColumnName = "idsect")
  private List<Section> galleries;


  public int getIdsect() {
    return this.idsect;
  }

  public void setIdsect(int idsect) {
    this.idsect = idsect;
  }


  public String getTitle() {
    return this.title;
  }

  public void setTitle(String title) {
    this.title = title;
  }


  public String getDescription() {
    return this.description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getImage() {
    return this.image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public String getType() {
    return this.type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public int getIdmus() {
    return this.idmus;
  }

  public void setIdmus(int idmus) {
    this.idmus = idmus;
  }


}
