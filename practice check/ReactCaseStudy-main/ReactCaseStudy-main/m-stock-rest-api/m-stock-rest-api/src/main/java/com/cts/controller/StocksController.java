package com.cts.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cts.model.CompanyStocks;
import com.cts.service.StocksService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/stocks")
public class StocksController {

	@Autowired
	private StocksService stocksService;
	@GetMapping
	public List<CompanyStocks> getStocks(){
		
		return stocksService.getStocks();
	}
	@GetMapping("/compare-performance/{companyCode1}/{companyCode2}/{from}/{to}")
	public List<CompanyStocks> getCompanyStocksByDate(@PathVariable("companyCode1") int companyCode1,@PathVariable("companyCode2") int companyCode2, 
			@PathVariable("from") @DateTimeFormat(pattern="yyyy-MM-dd") Date from,@PathVariable("to")  @DateTimeFormat(pattern="yyyy-MM-dd") Date to){
		
		return stocksService.getCompanyStocksByDate(companyCode1, companyCode2, from, to);
	}
}
