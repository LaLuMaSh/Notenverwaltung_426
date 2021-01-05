package ch.lalumamesh.notenverwaltung.service;

import ch.lalumamesh.notenverwaltung.model.Semester;
import ch.lalumamesh.notenverwaltung.repository.SemesterRepository;
import ch.lalumamesh.notenverwaltung.validator.SemesterValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;

import java.util.List;


@Service
public class SemesterService {
    private final SemesterRepository SemesterRepository;
    private final SemesterValidator SemesterValidator;

    @Autowired
    public SemesterService(SemesterRepository SemesterRepository, SemesterValidator SemesterValidator) {
        this.SemesterRepository = SemesterRepository;
        this.SemesterValidator = SemesterValidator;
    }

    public Semester save(Errors errors, Semester Semester, boolean validate) {
        if (validate) {
            SemesterValidator.validate(Semester, errors);

            if (errors.hasErrors()) {
                return Semester;
            }

            if (Semester.getId() != null) {
                errors.reject("CREATE_SEMESTER_ID_NOT_NULL");
                return Semester;
            }
        }

        return this.SemesterRepository.saveAndFlush(Semester);
    }

    public List<Semester> findAll() {
        return this.SemesterRepository.findAll();
    }

    public void delete(Long id) {
        this.SemesterRepository.deleteById(id);
    }

    public Semester update(Errors errors, Semester Semester) {

        if (!this.SemesterRepository.existsById(Semester.getId())) {
            errors.reject("UPDATE_SEMESTER_NOT_FOUND");
            return Semester;
        }

        return this.SemesterRepository.saveAndFlush(Semester);
    }
}
