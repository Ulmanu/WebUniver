package com.museum.museumcrudapi.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MuseumDTO {

  private int id;

  public MuseumDTO(int id, String title, String address, String description, String image, double lat, double lon) {
    this.id = id;
    this.title = title;
    this.address = address;
    this.description = description;
    this.image = image;
    this.lat = lat;
    this.lon = lon;
  }

  private String title;
  private String address;
  private String description;
  private String image;
  private double lat;
  private double lon;

  private int temp;
}
