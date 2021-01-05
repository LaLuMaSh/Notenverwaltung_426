package ch.lalumamesh.notenverwaltung.validator;

import ch.lalumamesh.notenverwaltung.api.IValidator;
import ch.lalumamesh.notenverwaltung.config.ExamConfiguration;
import ch.lalumamesh.notenverwaltung.config.GeneralConfiguration;
import ch.lalumamesh.notenverwaltung.model.Subject;
import ch.lalumamesh.notenverwaltung.model.user.Exam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

@Component
public class SubjectValidator implements IValidator<Subject> {

    @Autowired
    public SubjectValidator() {
    }

    @Override
    public void validate(Subject object, Errors errors) {
    }
}
