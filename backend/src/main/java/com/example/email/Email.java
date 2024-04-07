package com.example.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

@Service
public class Email {
//    @Autowired
    private JavaMailSender javaMailSender=new JavaMailSenderImpl();

    public void send(String toEmail, String subject, String body)
    {
        SimpleMailMessage message=new SimpleMailMessage();
        message.setFrom("itecdetector@gmail.com");
        message.setTo(toEmail);
        message.setText(body);
        message.setSubject(subject);

        javaMailSender.send(message);
    }
}
