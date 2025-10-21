package com.prakash.reactportfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.prakash.reactportfolio.model.Contact;
import com.prakash.reactportfolio.repository.ContactRepository;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000") // allow React frontend
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    // Get all contact messages
    @GetMapping
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    // Submit a new contact message
    @PostMapping
    public Contact submitContact(@RequestBody Contact contact) {
        return contactRepository.save(contact);
    }
}
