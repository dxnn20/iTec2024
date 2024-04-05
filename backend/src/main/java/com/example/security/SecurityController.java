package com.example.security;

import com.example.security.entities.User;
import com.example.security.entities.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping
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

    @PostMapping("/security/sign-up")
    public String securitySignUp(@RequestBody User user)
    {
        System.out.println(user.toString());
        userRepository.save(user);
        return "not logged in";
    }
}
