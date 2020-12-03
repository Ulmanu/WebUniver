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
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
public class GalleryExponatJoin {

  private int idexp;
  private String title;

  public GalleryExponatJoin(int id, String title) {
    this.idexp = id;
    this.title = title;
  }
  private int temp;
}







