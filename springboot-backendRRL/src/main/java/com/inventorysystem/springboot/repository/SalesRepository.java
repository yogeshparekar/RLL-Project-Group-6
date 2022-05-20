package com.inventorysystem.springboot.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inventorysystem.springboot.model.Sales;

@Repository
public interface SalesRepository extends JpaRepository<Sales, Long> {

}