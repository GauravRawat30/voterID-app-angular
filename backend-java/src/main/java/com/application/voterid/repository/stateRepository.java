package com.application.voterid.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.application.voterid.entity.State;


@Repository
public interface stateRepository extends JpaRepository<State,Integer> {
	
}
