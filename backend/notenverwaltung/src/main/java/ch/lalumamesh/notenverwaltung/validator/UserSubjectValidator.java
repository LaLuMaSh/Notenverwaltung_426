package ch.lalumamesh.notenverwaltung.validator;

import ch.lalumamesh.notenverwaltung.api.IValidator;
import ch.lalumamesh.notenverwaltung.config.GeneralConfiguration;
import ch.lalumamesh.notenverwaltung.model.user.UserSubject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

@Component
public class UserSubjectValidator implements IValidator<UserSubject> {
    private final GeneralConfiguration generalConfiguration;

    @Autowired
    public UserSubjectValidator(GeneralConfiguration generalConfiguration) {
        this.generalConfiguration = generalConfiguration;
    }

    @Override
    public void validate(UserSubject object, Errors errors) {
        if (object.getWeight() < generalConfiguration.getMinWeight()) {
            errors.reject("WEIGHT_OUT_OF_BOUND_MIN");
        }
        if (object.getWeight() > generalConfiguration.getMaxWeight()) {
            errors.reject("WEIGHT_OUT_OF_BOUND_MAX");
        }
    }
}
