package ch.lalumamesh.notenverwaltung.validator;

import ch.lalumamesh.notenverwaltung.api.IValidator;
import ch.lalumamesh.notenverwaltung.config.GeneralConfiguration;
import ch.lalumamesh.notenverwaltung.model.user.UserGraduationGroup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

@Component
public class UserGroupValidator implements IValidator<UserGraduationGroup> {
    private final GeneralConfiguration generalConfiguration;

    @Autowired
    public UserGroupValidator(GeneralConfiguration generalConfiguration) {
        this.generalConfiguration = generalConfiguration;
    }

    @Override
    public void validate(UserGraduationGroup object, Errors errors) {
        if (object.getWeight() < generalConfiguration.getMinWeight()) {
            errors.reject("WEIGHT_OUT_OF_BOUND_MIN");
        }
        if (object.getWeight() > generalConfiguration.getMaxWeight()) {
            errors.reject("WEIGHT_OUT_OF_BOUND_MAX");
        }
    }
}
