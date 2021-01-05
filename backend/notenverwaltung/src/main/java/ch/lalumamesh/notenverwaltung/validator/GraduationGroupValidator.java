package ch.lalumamesh.notenverwaltung.validator;

import ch.lalumamesh.notenverwaltung.api.IValidator;
import ch.lalumamesh.notenverwaltung.model.GraduationGroup;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

@Component
public class GraduationGroupValidator implements IValidator<GraduationGroup> {
    @Override
    public void validate(GraduationGroup object, Errors errors) {

    }
}
