package com.museum.museumcrudapi.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class GalleryDTO {
  private int idgal;

  public GalleryDTO(int idgal, String title, String description, String image, int idsect) {
    this.idgal = idgal;
    this.title = title;
    this.description = description;
    this.image = image;
    this.idsect = idsect;
  }

  private String title;
  private String description;
  private String image;
  private int idsect;

  int temp;
}
