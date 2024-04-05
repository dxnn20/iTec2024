package com.example.scheduled;

import com.example.entities.App;
import com.example.entities.Endpoint;
import com.example.repositories.AppRepository;
import com.example.repositories.EndpointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Scheduler {

    @Autowired
    AppRepository appRepository;

    @Autowired
    EndpointRepository endpointRepository;

    @Scheduled(fixedDelay = 1000)
    public void check()
    {
//        System.out.println("schedules");
//        List<App> apps=appRepository.findAll();
//        for (int i=0;i<apps.size();i++)
//        {
//            List<Endpoint> endpoints=apps.get(i).getEndpoints();
//            for (int j=0;j<endpoints.size();j++)
//            {
//                String status=endpoints.get(j).getStatus();
//                char[] s=status.toCharArray();
////                String nes= "";
//                for (int t=0;t<143;t++) s[t]=s[t+1];
//                s[status.length()-1]='g';
//            }
//        }
    }
}
