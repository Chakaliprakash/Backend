package com.prakash.reactportfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.prakash.reactportfolio.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {}
