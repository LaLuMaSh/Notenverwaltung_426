package ch.lalumamesh.notenverwaltung.service;

import ch.lalumamesh.notenverwaltung.model.Subject;
import ch.lalumamesh.notenverwaltung.repository.SubjectRepository;
import ch.lalumamesh.notenverwaltung.validator.SubjectValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;

import java.util.List;


@Service
public class SubjectService {
    private final SubjectRepository subjectRepository;
    private final SubjectValidator subjectValidator;

    @Autowired
    public SubjectService(SubjectRepository subjectRepository, SubjectValidator subjectValidator) {
        this.subjectRepository = subjectRepository;
        this.subjectValidator = subjectValidator;
    }

    public Subject save(Errors errors, Subject subject, boolean validate) {
        if (validate) {
            subjectValidator.validate(subject, errors);

            if (errors.hasErrors()) {
                return subject;
            }

            if (subject.getId() != null) {
                errors.reject("CREATE_SUBJECT_ID_NOT_NULL");
                return subject;
            }
        }

        return this.subjectRepository.saveAndFlush(subject);
    }

    public List<Subject> findAll() {
        return this.subjectRepository.findAll();
    }

    public void delete(Long id) {
        this.subjectRepository.deleteById(id);
    }

    public Subject update(Errors errors, Subject subject) {

        if (!this.subjectRepository.existsById(subject.getId())) {
            errors.reject("UPDATE_SUBJECT_NOT_FOUND");
            return subject;
        }

        return this.subjectRepository.saveAndFlush(subject);
    }
}
