package ch.lalumamesh.notenverwaltung.controller.user;

import ch.lalumamesh.notenverwaltung.model.user.Exam;
import ch.lalumamesh.notenverwaltung.service.user.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/exam")
public class ExamController {


    private final ExamService service;

    @Autowired
    public ExamController(ExamService service) {
        this.service = service;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Exam> getAll() {
        return this.service.findAll();
    }

    @PostMapping
    public Exam create(@RequestBody Exam exam, Errors errors) {
        Exam save = service.save(errors, exam, true);

        if (errors.hasErrors()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, errors.getAllErrors().stream().map(ObjectError::toString).collect(Collectors.joining(";")));
        }
        return save;
    }

    @PutMapping
    public Exam update(@RequestBody Exam user, Errors errors) {
        Exam update = service.update(errors, user);

        if (errors.hasErrors()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, errors.getAllErrors().stream().map(ObjectError::toString).collect(Collectors.joining(";")));
        }

        return update;
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) throws ResponseStatusException {
        try {
            this.service.delete(id);
        } catch (DataIntegrityViolationException ex) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, ex.getLocalizedMessage());
        }
    }

    @GetMapping("my")
    public List<Exam> getOwn() throws ResponseStatusException {
        try {
            return this.service.getOwnExams();
        } catch (DataIntegrityViolationException ex) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, ex.getLocalizedMessage());
        }
    }
}
