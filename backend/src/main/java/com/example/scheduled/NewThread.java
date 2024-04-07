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
//        System.out.println(localTime);
        List<App> apps=appRepository.findAll();
        int seconds=localTime.getSecond()+localTime.getMinute()*60+localTime.getHour()*60*60;
//        System.out.println(seconds);
        for (int i=0;i<apps.size();i++)
        {
            if (apps.get(i).getSeconds()!=0) if (seconds%apps.get(i).getSeconds()==0)
            {
//                System.out.println(apps.get(i));
                List<Endpoint> endpoints=apps.get(i).getEndpoints();
                int a=0,b=0,c=0;
                for (int j=0;j<endpoints.size();j++)
                {
                    Endpoint endpoint=endpoints.get(j);
                    StringBuilder stringBuilder;
                    if (endpoint.getStatus()==null) stringBuilder=new StringBuilder("");
                    else stringBuilder=new StringBuilder(endpoint.getStatus());
                    while (stringBuilder.length()>endpoint.getDuration()*60*60/apps.get(i).getSeconds()) stringBuilder.deleteCharAt(0);
                    try {
                        boolean ok=endpointCheck(endpoints.get(j).getMethod(),endpoints.get(j).getPath());  //stringBuilder.append('g');
                        if (ok==true)
                        {
                            if (endpoint.getCounter()>0)
                            {
                                b++;
                                stringBuilder.append('y');
                                endpoint.setCounter(endpoint.getCounter()-1);
                            }
                            else
                            {
                                if (endpoint.getBugged()==true) {
                                    stringBuilder.append('y');
                                    b++;
                                }
                                else {
                                    stringBuilder.append('g');
                                    a++;
                                }
                            }
                        }
                        if (ok==false)
                        {
                            if (endpoint.getCounter()<10)
                            {
                                b++;
                                stringBuilder.append('y');
                                endpoint.setCounter(endpoint.getCounter()+1);
                            }
                            else {
                                c++;
                                stringBuilder.append('r');
                            }
                        }
                        endpoint.setStatus(stringBuilder.toString());
                        endpointRepository.save(endpoint);

                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                }
                App app=apps.get(i);
                if (endpoints.size()==0) app.setStatus("STABLE");
                else if (c==endpoints.size() && endpoints.size()!=0) app.setStatus("DOWN");
                else if (c>0 || b>0) app.setStatus("UNSTABLE");
                else app.setStatus("STABLE");
                appRepository.save(app);
            }
        }
    }

    public boolean endpointCheck(String method, String link) throws IOException {
//        System.out.println(method+" "+link);
        URL url=new URL(link);
        HttpURLConnection request=(HttpURLConnection) url.openConnection();
        request.setRequestMethod(method.toUpperCase());
        int responseCode = request.getResponseCode();
        if (responseCode==200 || responseCode==302) return true;
        else return false;
//        System.out.println(responseCode);
    }
}
