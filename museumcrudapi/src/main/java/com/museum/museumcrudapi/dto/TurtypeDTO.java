package com.museum.museumcrudapi.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TurtypeDTO {

  public TurtypeDTO(int idturtype, String nametur, String description, float price, int idmus) {
    this.idturtype = idturtype;
    this.nametur = nametur;
    this.description = description;
    this.price = price;
    this.idmus = idmus;
  }

  private int idturtype;
  private String nametur;
  private String description;
  private float price;
  private int idmus;

  int temp;
}
