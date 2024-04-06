package com.example.scheduled;

import com.example.entities.App;
import com.example.entities.Endpoint;
import com.example.repositories.AppRepository;
import com.example.repositories.EndpointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalTime;
import java.util.List;

@Service
//@Component
public class NewThread extends Thread{

//    @Autowired
    AppRepository appRepository;
//
//    @Autowired
    EndpointRepository endpointRepository;

    private LocalTime localTime;


    public NewThread(AppRepository appRepository, EndpointRepository endpointRepository)
    {
        this.localTime=LocalTime.now();
        this.appRepository=appRepository;
        this.endpointRepository=endpointRepository;
    }

    @Override
    public void run()
    {
        System.out.println(localTime);
        List<App> apps=appRepository.findAll();
        int seconds=localTime.getSecond()+localTime.getMinute()*60+localTime.getHour()*60*60;
        for (int i=0;i<apps.size();i++)
        {
            if (seconds/apps.get(i).getSeconds()==0)
            {
                List<Endpoint> endpoints=apps.get(i).getEndpoints();
                for (int j=0;j<endpoints.size();j++)
                {
                    try {
                        endpointCheck(endpoints.get(j).getMethod(),endpoints.get(j).getPath());
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                }
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
