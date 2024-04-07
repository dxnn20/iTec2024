package com.example.controllers;

import com.example.email.Email;
import com.example.entities.App;
import com.example.entities.Endpoint;
import com.example.repositories.AppRepository;
import com.example.repositories.EndpointRepository;
import com.example.security.entities.User;
import com.example.security.entities.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.access.method.P;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/endpoint")
public class EndpointController {

    @Autowired
    EndpointRepository endpointRepository;

    @Autowired
    AppRepository appRepository;

    @Autowired
    UserRepository userRepository;

//    @Autowired
    JavaMailSender javaMailSender;

    Email email=new Email();

    // CREATE
    @PostMapping(path = "/createByAppId/{id}")
    public void createByAppId(@PathVariable Long id, @RequestBody Endpoint endpoint)
    {
        Optional<App> optionalApp=appRepository.findById(id);
        App app=optionalApp.get();

        endpoint.setStatus("");
        app.addEndpoint(endpoint);
        appRepository.save(app);
    }

    @PostMapping(path="/reportBugById/{id}")
    public void reportBugById(@PathVariable Long id)
    {
        Optional<Endpoint> optionalEndpoint=endpointRepository.findById(id);
        Endpoint endpoint=optionalEndpoint.get();

        endpoint.setBugged(true);
        endpointRepository.save(endpoint);

        System.out.println("sending mail");
        email.send("berendeaandrei03@gmail.com","proba test wtf","itec cica");
    }

    @PostMapping(path="/reportFixById/{id}")
    public void reportFixById(@PathVariable Long id)
    {
        Optional<Endpoint> optionalEndpoint=endpointRepository.findById(id);
        Endpoint endpoint=optionalEndpoint.get();

        endpoint.setBugged(false);
        endpointRepository.save(endpoint);
    }


    // READ
    @GetMapping(path="/getById/{id}")
    public Optional<Endpoint> getById(@PathVariable Long id)
    {
        return endpointRepository.findById(id);
    }

    @GetMapping(path="/getAllByAppId/{id}")
    public List<Endpoint> getAllByUserId(@PathVariable Long id)
    {
        Optional<App> optionalApp=appRepository.findById(id);
        App app=optionalApp.get();

        return app.getEndpoints();
    }

    @GetMapping(path="/getAllBuggedByUserId/{id}")
    public List<Endpoint> getAllBuggedByUserId(@PathVariable Long id)
    {
        Optional<User> optionalUser=userRepository.findById(id);
        User user=optionalUser.get();
        List<App>apps= user.getApps();
        List<Endpoint> returnedEndpoints=new ArrayList<>();
        for (int i=0;i<apps.size();i++)
        {
            App app=apps.get(i);
            List<Endpoint> endpoints=app.getEndpoints();
            for (int j=0;j<endpoints.size();j++)
            {
                if (endpoints.get(j).getBugged()==true) returnedEndpoints.addLast(endpoints.get(j));
            }
        }
        System.out.println(returnedEndpoints);
        return returnedEndpoints;
    }

    @GetMapping(path="/getUserIdByEndpointId/{id}")
    public HashMap<String,String> getUserIdByEndpointId(@PathVariable Long id)
    {
        HashMap<String,String> hashMap=new HashMap<>();
        hashMap.put("name",endpointRepository.getUserIdByEndpointId(id));
        return hashMap;
    }


    // UPDATE
    @PutMapping(path="/update/{id}")
    public void updateById(@RequestBody Endpoint endpoint, @PathVariable Long id)
    {
        Optional<Endpoint> optionalEndpoint=endpointRepository.findById(endpoint.getId());
        Endpoint savedEndpoint=optionalEndpoint.get();

        savedEndpoint.setMethod(endpoint.getMethod());
        savedEndpoint.setPath(endpoint.getPath());
        savedEndpoint.setDuration(endpoint.getDuration());

        endpointRepository.save(savedEndpoint);
    }


    // DELETE
    @DeleteMapping(path="/deleteById/{id}")
    public void deleteById(@PathVariable Long id)
    {
        endpointRepository.deleteById(id);
    }

    @DeleteMapping("/a")
    public void a()
    {
        System.out.println("fiuacensakdsma");
    }

}
