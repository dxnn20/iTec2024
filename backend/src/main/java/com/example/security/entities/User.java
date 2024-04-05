package com.example.security.entities;

import jakarta.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    private String username;
    private String password;

    private String roles;

    public User()
    {

    }

    public User(Long id, String username, String password, String roles)
    {
        this.id = id;
        this.username = username;
        this.password = password;
        this.roles = roles;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
//                ", roles=" + roles +
                '}';
    }

    public Long getId() {return this.id;}
    public String getPassword() {return this.password;}
    public String getUsername() {return this.username;}
    public String getRoles() {return this.roles;}

    public void setId(Long id) {this.id=id;}
    public void setPassword(String password) {this.password=password;}
    public void setUsername(String username) {this.username=username;}
    public void setRoles(String roles) {this.roles=roles;}
}
