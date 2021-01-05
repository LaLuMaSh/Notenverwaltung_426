package ch.lalumamesh.notenverwaltung.controller;

import ch.lalumamesh.notenverwaltung.model.GraduationGroup;
import ch.lalumamesh.notenverwaltung.service.GraduationGroupService;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/group")
public class GraduationGroupController {

    private final GraduationGroupService graduationGroupService;

    public GraduationGroupController(GraduationGroupService graduationGroupService) {
        this.graduationGroupService = graduationGroupService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<GraduationGroup> getAll() {
        return this.graduationGroupService.findAll();
    }

    @PostMapping
    public GraduationGroup create(@RequestBody GraduationGroup graduationGroup, Errors errors) {
        GraduationGroup save = graduationGroupService.save(errors, graduationGroup, true);

        if (errors.hasErrors()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, errors.getAllErrors().stream().map(ObjectError::toString).collect(Collectors.joining(";")));
        }
        return save;
    }

    @PutMapping
    public GraduationGroup update(@RequestBody GraduationGroup graduationGroup, Errors errors) {
        GraduationGroup update = graduationGroupService.update(errors, graduationGroup);

        if (errors.hasErrors()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, errors.getAllErrors().stream().map(ObjectError::toString).collect(Collectors.joining(";")));
        }

        return update;

    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) throws ResponseStatusException {
        try {
            this.graduationGroupService.delete(id);
        } catch (DataIntegrityViolationException ex) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, ex.getLocalizedMessage());
        }
    }
}
