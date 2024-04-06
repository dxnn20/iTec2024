package com.example.security;

import com.example.security.entities.User;
import com.example.security.entities.UserRepository;
import com.example.security.entities.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class MyAuthenticationProvider implements AuthenticationProvider {

    @Autowired
    private UserRepository userRepository;

    private UserService userService=new UserService();

    @Override
    public Authentication authenticate(Authentication authentication)
    {
        String username=authentication.getName();
        String password=authentication.getCredentials().toString();
        password=UserService.hashPassword(password);
        User user=userService.validateUser(username,password,userRepository);
        if (user!=null)       //return new UsernamePasswordAuthenticationToken(username,password,new ArrayList<>());
        {
            ObjectMapper mapper=new ObjectMapper();
            try {
                String json=mapper.writeValueAsString(user);
                return new UsernamePasswordAuthenticationToken(json,password,new ArrayList<>());  //new ArrayList<>() grantedAuthorities
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
        }
        else throw new BadCredentialsException("Bad credentials");
    }

    @Override
    public boolean supports(Class<?> authentication)
    {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
