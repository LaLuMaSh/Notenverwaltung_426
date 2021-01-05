package ch.lalumamesh.notenverwaltung.controller;

import ch.lalumamesh.notenverwaltung.model.Semester;
import ch.lalumamesh.notenverwaltung.service.SemesterService;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/semester")
public class SemesterController {

    private final SemesterService SemesterService;

    public SemesterController(SemesterService SemesterService) {
        this.SemesterService = SemesterService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Semester> getAll() {
        return this.SemesterService.findAll();
    }

    @PostMapping
    public Semester create(@RequestBody Semester Semester, Errors errors) {
        Semester save = SemesterService.save(errors, Semester, true);

        if (errors.hasErrors()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, errors.getAllErrors().stream().map(ObjectError::toString).collect(Collectors.joining(";")));
        }
        return save;
    }

    @PutMapping
    public Semester update(@RequestBody Semester user, Errors errors) {
        Semester update = SemesterService.update(errors, user);

        if (errors.hasErrors()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, errors.getAllErrors().stream().map(ObjectError::toString).collect(Collectors.joining(";")));
        }

        return update;

    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) throws ResponseStatusException {
        try {
            this.SemesterService.delete(id);
        } catch (DataIntegrityViolationException ex) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, ex.getLocalizedMessage());
        }
    }
}
