package com.application.voterid.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.application.voterid.entity.State;
import com.application.voterid.entity.loginDetail;
import com.application.voterid.service.userService;

@RestController
@CrossOrigin
public class myController {

	@Autowired
	userService service;

	
	
	// get all states
	@GetMapping("/form")
	public List<State> form() {

		return service.state();
	}

	
	
	// send input data
	@PostMapping("/process")
	public String Detail(@RequestBody loginDetail detail) {
		System.out.println("detail = " + detail);
		service.user(detail);
		int age = service.getAge();
		service.saveAge(age);

		return "redirect:/list";

	}

	
	
	// get list
	@GetMapping("/list")
	public List<loginDetail> userlist() {

		List<loginDetail> user = service.allusers();

		return user;
	}

	// get list as per state name
	@GetMapping("/list/{state}")
	public List<loginDetail> list(@PathVariable String state) {

		if (state != null) {
			List<loginDetail> userr = service.findState(state);
			return userr;
		}

		return null;
	}

}
