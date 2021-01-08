package com.museum.museumcrudapi.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SectionDTO {

  private int idsect;
  private String title;

  public SectionDTO(int idsect, String title, String description, String image, String type, int idmus) {
    this.idsect = idsect;
    this.title = title;
    this.description = description;
    this.image = image;
    this.type = type;
    this.idmus = idmus;
  }

  private String description;
  private String image;
  private String type;
  private int idmus;


  int temp;
}
