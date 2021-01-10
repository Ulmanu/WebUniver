package com.museum.museumcrudapi.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SouvenirsDTO {

  private int idsuv;

  public SouvenirsDTO(int idsuv, String name, float price, String image, String status) {
    this.idsuv = idsuv;
    this.name = name;
    this.price = price;
    this.image = image;
    this.status = status;
  }

  private String name;
  private float price;
  private String image;
  private String status;
  private int qty;
}
