package com.example.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

//@Component
@Service
public class Email {

//    @Autowired
    private JavaMailSender javaMailSender;

    public void send(String toEmail, String subject, String body){
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("your_email@example.com"); // Replace with your sending email
            message.setTo(toEmail);
            message.setSubject(subject);
            message.setText(body);

            javaMailSender.send(message);
            System.out.println("Email sent successfully!");
        } catch (MailException ex) {
            System.err.println("Error sending email: " + ex.getMessage());
            throw ex; // Re-throw the exception for proper handling by the client
        }
    }
//        try {
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setFrom("your_email@example.com"); // Replace with your sending email
//        message.setTo(toEmail);
//        message.setSubject(subject);
//        message.setText(body);
//
//        javaMailSender.send(message);
//        System.out.println("Email sent successfully!");
//    } catch (MailException ex) {
//        System.err.println("Error sending email: " + ex.getMessage());
//        throw ex; // Re-throw the exception for proper handling by the client
//    }

//    @Autowired
//    private JavaMailSender javaMailSender;
//
//    public void sendEmail(String toEmail, String subject, String body) throws MailException {
//        try {
//            SimpleMailMessage message = new SimpleMailMessage();
//            message.setFrom("your_email@example.com"); // Replace with your sending email
//            message.setTo(toEmail);
//            message.setSubject(subject);
//            message.setText(body);
//
//            javaMailSender.send(message);
//            System.out.println("Email sent successfully!");
//        } catch (MailException ex) {
//            System.err.println("Error sending email: " + ex.getMessage());
//            throw ex; // Re-throw the exception for proper handling by the client
//        }
//    }
}
