package com.museum.museumcrudapi.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ExponatDTO {

  public ExponatDTO(int idexp, String title, String description, String image, int idgal, double price) {
    this.idexp = idexp;
    this.title = title;
    this.description = description;
    this.image = image;
    this.idgal = idgal;
    this.price = price;
  }

  private int idexp;
  private String title;
  private String description;
  private String image;
  private int idgal;
  private double price;

  int temp;
}
