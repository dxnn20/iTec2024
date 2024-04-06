package com.example.scheduled;

import com.example.entities.App;
import com.example.entities.Endpoint;
import com.example.repositories.AppRepository;
import com.example.repositories.EndpointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.http.HttpRequest;
import java.time.LocalTime;
import java.util.List;

@Component
public class Scheduler {

    @Autowired
    AppRepository appRepository;

    @Autowired
    EndpointRepository endpointRepository;

    @Scheduled(fixedDelay = 1000)
    public void check() throws IOException {
        NewThread newThread=new NewThread(appRepository,endpointRepository);
        newThread.start();
    }
}
