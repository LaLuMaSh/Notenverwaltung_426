package ch.lalumamesh.notenverwaltung.config;

import ch.lalumamesh.notenverwaltung.model.user.User;
import ch.lalumamesh.notenverwaltung.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class SeedDataEvent {

    private final UserService userService;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public SeedDataEvent(
            UserService userRepo,
            BCryptPasswordEncoder bCryptPasswordEncoder
    ) {
        this.userService = userRepo;
        this.passwordEncoder = bCryptPasswordEncoder;
    }

    @EventListener
    public void seedTestData(ApplicationReadyEvent event) {
        User user = new User();
        user.setPassword(passwordEncoder.encode("password"));
        user.setUsername("admin");
        user.setClasses(new ArrayList<>());

        try {
            userService.save(null, user, false);
        } catch (DataIntegrityViolationException ex) {
            System.out.println("create default user failed: " + ex.getLocalizedMessage());
        }
    }
}