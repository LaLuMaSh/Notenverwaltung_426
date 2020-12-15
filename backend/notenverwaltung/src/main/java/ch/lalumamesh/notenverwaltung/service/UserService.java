package ch.lalumamesh.notenverwaltung.service;

import ch.lalumamesh.notenverwaltung.model.user.User;
import ch.lalumamesh.notenverwaltung.repository.user.UserRepository;
import ch.lalumamesh.notenverwaltung.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;

import java.util.List;

import static java.util.Collections.emptyList;

@Service
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;
    private final UserValidator userValidator;

    @Autowired
    public UserService(UserRepository userRepository, UserValidator userValidator) {
        this.userRepository = userRepository;
        this.userValidator = userValidator;
    }

    public User save(Errors errors, User user, boolean validate) {
        if (validate) {
            userValidator.validate(user, errors);

            if (errors.hasErrors()) {
                return user;
            }

            if (user.getId() != null) {
                errors.reject("CREATE_USER_ID_NOT_NULL");
                return user;
            }
        }

        return this.userRepository.saveAndFlush(user);
    }

    public List<User> findAll() {
        return this.userRepository.findAll();
    }

    public void delete(Long id) {
        this.userRepository.deleteById(id);
    }

    public User loadApplicationUserByUsername(String username) {
        return this.userRepository.findByUsername(username);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User applicationUser = loadApplicationUserByUsername(username);

        if (applicationUser == null) {
            throw new UsernameNotFoundException(username);
        }
        return new org.springframework.security.core.userdetails.User(applicationUser.getUsername(), applicationUser.getPassword(), emptyList());
    }

    public User getMyself() {
        return loadApplicationUserByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
    }

    public User update(Errors errors, User user) {
        userValidator.validate(user, errors);

        if (errors.hasErrors()) {
            return user;
        }

        if (!this.userRepository.existsById(user.getId())) {
            errors.reject("UPDATE_USER_NOT_FOUND");
            return user;
        }

        return this.userRepository.saveAndFlush(user);
    }
}
