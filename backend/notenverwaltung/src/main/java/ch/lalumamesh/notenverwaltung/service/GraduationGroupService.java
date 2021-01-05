package ch.lalumamesh.notenverwaltung.service;

import ch.lalumamesh.notenverwaltung.model.GraduationGroup;
import ch.lalumamesh.notenverwaltung.repository.GraduationGroupRepository;
import ch.lalumamesh.notenverwaltung.validator.GraduationGroupValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;

import java.util.List;


@Service
public class GraduationGroupService {
    private final GraduationGroupRepository graduationGroupRepository;
    private final GraduationGroupValidator graduationGroupValidator;

    @Autowired
    public GraduationGroupService(GraduationGroupRepository graduationGroupRepository, GraduationGroupValidator graduationGroupValidator) {
        this.graduationGroupRepository = graduationGroupRepository;
        this.graduationGroupValidator = graduationGroupValidator;
    }

    public GraduationGroup save(Errors errors, GraduationGroup user, boolean validate) {
        if (validate) {
            graduationGroupValidator.validate(user, errors);

            if (errors.hasErrors()) {
                return user;
            }

            if (user.getId() != null) {
                errors.reject("CREATE_SUBJECT_ID_NOT_NULL");
                return user;
            }
        }

        return this.graduationGroupRepository.saveAndFlush(user);
    }

    public List<GraduationGroup> findAll() {
        return this.graduationGroupRepository.findAll();
    }

    public void delete(Long id) {
        this.graduationGroupRepository.deleteById(id);
    }

    public GraduationGroup update(Errors errors, GraduationGroup graduationGroup) {

        if (!this.graduationGroupRepository.existsById(graduationGroup.getId())) {
            errors.reject("UPDATE_GRAD_GROUP_NOT_FOUND");
            return graduationGroup;
        }

        return this.graduationGroupRepository.saveAndFlush(graduationGroup);
    }
}
