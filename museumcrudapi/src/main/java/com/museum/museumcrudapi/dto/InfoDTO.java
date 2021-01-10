package com.museum.museumcrudapi.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class InfoDTO {
  private long sum;

  public InfoDTO(long sum, double sum2, String name) {
    this.sum = sum;
    this.sum2 = sum2;
    this.name = name;
  }

  private double sum2;
  private String name;

 int temp;
}
