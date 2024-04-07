package com.example.security.entities;

import com.example.entities.App;
import com.example.entities.Endpoint;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    private String username;
    private String password;

    @JsonIgnore
    @OneToMany(fetch = FetchType.EAGER,mappedBy = "user", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<App> apps;

    public User()
    {

    }

    public User(Long id, String username, String password, List<App> apps) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.apps = apps;
    }

    public void addApp(App app)
    {
        if (apps==null) {apps=new ArrayList<>();}
        apps.add(app);
        app.setUser(this);
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


    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public List<App> getApps() {
        return apps;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setApps(List<App> apps) {
        this.apps = apps;
    }
}
