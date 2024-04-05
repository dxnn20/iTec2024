package com.example.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Endpoint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    private String link;
    private String status;

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="app_id", referencedColumnName = "id")
    private App app;

    public Endpoint() {}

    public Endpoint(Long id, String link, App app) {
        this.id = id;
        this.link = link;
        this.app = app;
    }

    public Long getId() {
        return id;
    }

    public String getLink() {
        return link;
    }

    public String getStatus() {
        return status;
    }

    public App getApp() {
        return app;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setApp(App app) {
        this.app = app;
    }
}
