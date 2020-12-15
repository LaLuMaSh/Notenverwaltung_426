package ch.lalumamesh.notenverwaltung.controller;

import ch.lalumamesh.notenverwaltung.model.user.User;
import ch.lalumamesh.notenverwaltung.service.UserService;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserController(UserService userService,
                          BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userService = userService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<User> getAll() {
        return this.userService.findAll();
    }

    @PostMapping
    public User create(@RequestBody User user, Errors errors) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        User save = userService.save(errors, user, true);

        if (errors.hasErrors()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, errors.getAllErrors().stream().map(ObjectError::toString).collect(Collectors.joining(";")));
        }

        return save;

    }

    @PutMapping
    public User update(@RequestBody User user, Errors errors) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        User update = userService.update(errors, user);

        if (errors.hasErrors()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, errors.getAllErrors().stream().map(ObjectError::toString).collect(Collectors.joining(";")));
        }

        return update;

    }

    @GetMapping("/me")
    public User getMyself() {
        return this.userService.getMyself();
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) throws ResponseStatusException {
        try {
            this.userService.delete(id);
        } catch (DataIntegrityViolationException ex) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, ex.getLocalizedMessage());
        }
    }
}
