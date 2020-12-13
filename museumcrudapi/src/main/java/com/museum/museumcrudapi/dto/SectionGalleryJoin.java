package com.museum.museumcrudapi.dto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
//@JsonIgnoreProperties(ignoreUnknown = true)
//@JsonInclude(JsonInclude.Include.NON_DEFAULT)
public class SectionGalleryJoin {

  private int idsect;
  private String title;

  private int temp;

  public SectionGalleryJoin(int idsect, String title) {
    this.idsect = idsect;
    this.title = title;
  }
}
