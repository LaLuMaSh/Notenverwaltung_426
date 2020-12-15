package ch.lalumamesh.notenverwaltung.validator;

import ch.lalumamesh.notenverwaltung.api.IValidator;
import ch.lalumamesh.notenverwaltung.config.ExamConfiguration;
import ch.lalumamesh.notenverwaltung.config.GeneralConfiguration;
import ch.lalumamesh.notenverwaltung.model.user.Exam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

@Component
public class ExamValidator implements IValidator<Exam> {
    private final ExamConfiguration examConfiguration;
    private final GeneralConfiguration generalConfiguration;

    @Autowired
    public ExamValidator(ExamConfiguration examConfiguration, GeneralConfiguration generalConfiguration) {
        this.examConfiguration = examConfiguration;
        this.generalConfiguration = generalConfiguration;
    }

    @Override
    public void validate(Exam object, Errors errors) {
        if (object.getGrade() < examConfiguration.getMinGrade()) {
            errors.reject("GRADE_OUT_OF_BOUND_MIN");
        }
        if (object.getGrade() > examConfiguration.getMaxGrade()) {
            errors.reject("GRADE_OUT_OF_BOUND_MAX");
        }
        if (object.getWeight() < generalConfiguration.getMinWeight()) {
            errors.reject("WEIGHT_OUT_OF_BOUND_MIN");
        }
        if (object.getWeight() > generalConfiguration.getMaxWeight()) {
            errors.reject("WEIGHT_OUT_OF_BOUND_MAX");
        }
    }
}
