package com.application.voterid.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.application.voterid.entity.State;
import com.application.voterid.entity.loginDetail;



@Repository
public interface userRepository extends JpaRepository<loginDetail,Integer> {
	
	List<loginDetail> findByState( String state);

}
