package com.application.voterid.service;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.application.voterid.entity.State;
import com.application.voterid.entity.loginDetail;
import com.application.voterid.repository.stateRepository;
import com.application.voterid.repository.userRepository;

@Service
public class userService {

	@Autowired
	userRepository repo;

	@Autowired
	stateRepository stateRepo;

	public void user(loginDetail detail) {
		repo.save(detail);

	}

	public List<loginDetail> allusers() {

		return repo.findAll();
	}

	public int getAge() {

		int size = repo.findAll().size();

		LocalDate birthDate = LocalDate.parse(repo.findAll().get(size - 1).getDob());

		LocalDate curDate = LocalDate.of(2022, 01, 01);

		return Period.between(birthDate, curDate).getYears();
	}


	public void saveAge(int age) {
		int size = repo.findAll().size();
		Optional<loginDetail> getobj = repo.findById(size);
		loginDetail user = getobj.get();

		user.setAge(age);
		repo.save(user);
	}

	public List<State> state() {

		return stateRepo.findAll();

	}

	public List<loginDetail> findState(String state){
		return repo.findByState(state);
		
	}

}
