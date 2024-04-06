package com.example.security;

import com.example.security.entities.User;
import com.example.security.entities.UserRepository;
import com.example.security.entities.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/security")
public class SecurityController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/loggedin")
    public String security() throws JsonProcessingException
    {
        Map<String, Object> responseBody=new HashMap<>();
        responseBody.put("loggedin","yes");

        ObjectMapper mapper=new ObjectMapper();
        String json=mapper.writeValueAsString(responseBody);
        return json;
    }

    @GetMapping("/unauthenticated")
    public String unauthenticated() throws JsonProcessingException
    {
        Map<String, Object> responseBody=new HashMap<>();
        responseBody.put("loggedin","not necessary");

        ObjectMapper mapper=new ObjectMapper();
        String json=mapper.writeValueAsString(responseBody);
        return json;
    }

    @PostMapping("/sign-up")
    public void securitySignUp(@RequestBody User user)
    {
        System.out.println(user.toString());
        user.setPassword(UserService.hashPassword(user.getPassword()));
        userRepository.save(user);
//        return "not logged in";
    }
}
