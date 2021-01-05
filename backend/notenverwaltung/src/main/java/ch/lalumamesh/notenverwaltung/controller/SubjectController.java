package ch.lalumamesh.notenverwaltung.controller;

import ch.lalumamesh.notenverwaltung.model.Subject;
import ch.lalumamesh.notenverwaltung.model.user.User;
import ch.lalumamesh.notenverwaltung.service.SubjectService;
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
@RequestMapping("/subject")
public class SubjectController {

    private final SubjectService subjectService;

    public SubjectController(SubjectService subjectService) {
        this.subjectService = subjectService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Subject> getAll() {
        return this.subjectService.findAll();
    }

    @PostMapping
    public Subject create(@RequestBody Subject subject, Errors errors) {
        Subject save = subjectService.save(errors, subject, true);

        if (errors.hasErrors()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, errors.getAllErrors().stream().map(ObjectError::toString).collect(Collectors.joining(";")));
        }
        return save;
    }

    @PutMapping
    public Subject update(@RequestBody Subject user, Errors errors) {
        Subject update = subjectService.update(errors, user);

        if (errors.hasErrors()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, errors.getAllErrors().stream().map(ObjectError::toString).collect(Collectors.joining(";")));
        }

        return update;

    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) throws ResponseStatusException {
        try {
            this.subjectService.delete(id);
        } catch (DataIntegrityViolationException ex) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, ex.getLocalizedMessage());
        }
    }
}
