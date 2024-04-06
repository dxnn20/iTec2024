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
import java.util.List;

@Component
public class Scheduler {

    @Autowired
    AppRepository appRepository;

    @Autowired
    EndpointRepository endpointRepository;

    @Scheduled(fixedDelay = 5000)
    public void check() throws IOException {
//        System.out.println("schedules");
        List<App> apps=appRepository.findAll();
        for (int i=0;i<apps.size();i++)
        {
            List<Endpoint> endpoints=apps.get(i).getEndpoints();
//            if (endpoints!=null)
//            System.out.println(apps.get(i));
            for (int j=0;j<endpoints.size();j++)
            {
//                System.out.println();
                endpointCheck(endpoints.get(j).getMethod(),endpoints.get(j).getPath());
//                String status=endpoints.get(j).getStatus();
//                char[] s=status.toCharArray();
////                String nes= "";
//                for (int t=0;t<143;t++) s[t]=s[t+1];
//                s[status.length()-1]='g';
            }
        }
    }

    public void endpointCheck(String method, String link) throws IOException {
        System.out.println(method+" "+link);
        URL url=new URL(link);
        HttpURLConnection request=(HttpURLConnection) url.openConnection();
        request.setRequestMethod(method.toUpperCase());
        int responseCode = request.getResponseCode();
        System.out.println(responseCode);
    }
}
