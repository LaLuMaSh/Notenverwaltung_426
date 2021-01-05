package ch.lalumamesh.notenverwaltung.validator;

import ch.lalumamesh.notenverwaltung.api.IValidator;
import ch.lalumamesh.notenverwaltung.model.Semester;
import ch.lalumamesh.notenverwaltung.model.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

@Component
public class SemesterValidator implements IValidator<Semester> {

    @Autowired
    public SemesterValidator() {
    }

    @Override
    public void validate(Semester object, Errors errors) {
    }
}
