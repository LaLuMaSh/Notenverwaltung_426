package ch.lalumamesh.notenverwaltung.validator;

import ch.lalumamesh.notenverwaltung.api.IValidator;
import ch.lalumamesh.notenverwaltung.model.GraduationGroup;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

@Component
public class GroupValidator implements IValidator<GraduationGroup> {
    @Override
    public void validate(GraduationGroup object, Errors errors) {
        if (object.getParentGrad() == null && object.getParentGroup() == null) {
            errors.reject("GROUP_AND_GRADUATION_BOTH_NULL");
        }

        if (object.getParentGrad() != null && object.getParentGroup() != null) {
            errors.reject("GROUP_AND_GRADUATION_BOTH_NOT_NULL");
        }
    }
}
