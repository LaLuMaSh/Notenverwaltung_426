package ch.lalumamesh.notenverwaltung.validator;

import ch.lalumamesh.notenverwaltung.api.IValidator;
import ch.lalumamesh.notenverwaltung.model.user.Class;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

@Component
public class ClassValidator implements IValidator<Class> {
    @Override
    public void validate(Class object, Errors errors) {

    }
}
