package com.cts.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class CompanyStocks {

	@Id
	private int id;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date date;
	private int stockPrice;
	@OneToOne
	private CompanyDetails company;
}
