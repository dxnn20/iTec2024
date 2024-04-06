package com.example.security.entities;

import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class UserService {
    public User validateUser(String username, String password, UserRepository userRepository)
    {
//        System.out.println(username);
//        System.out.println(password);
//        System.out.println(userRepository.count());
        User user=userRepository.findByUsername(username);
//        System.out.println(user.getRoles().size());
        if (user!=null)
        {
            if (Objects.equals(user.getPassword(), password)) return user;
            else return null;
        }
        else return null;
    }

    public static String hashPassword(String password)
    {
        final long base=29;
        final long mod=385934743;
        long pow=1;
        long hash=0;

        for (int i=0;i<password.length();i++)
        {
            hash=(hash*base+password.charAt(i))%mod;
            pow=(pow*base)%mod;
        }
        return String.valueOf(hash);
    }
}
