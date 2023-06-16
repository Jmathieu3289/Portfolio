package com.mathieu.portfolio;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/api/greetings")
    public String index() {
        return "Greetings from Spring Boot, I'm testing refreshing with live reload!";
    }
    
}
