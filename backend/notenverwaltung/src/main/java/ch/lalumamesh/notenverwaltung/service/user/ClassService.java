package ch.lalumamesh.notenverwaltung.service.user;

import ch.lalumamesh.notenverwaltung.model.user.Class;
import ch.lalumamesh.notenverwaltung.repository.user.ClassRepository;
import ch.lalumamesh.notenverwaltung.validator.ClassValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;

import java.util.List;

@Service
public class ClassService {
    private final ClassRepository classRepository;
    private final ClassValidator classValidator;

    @Autowired
    public ClassService(ClassRepository classRepository, ClassValidator classValidator) {
        this.classRepository = classRepository;
        this.classValidator = classValidator;
    }

    public Class save(Errors errors, Class user, boolean validate) {
        if (validate) {
            this.classValidator.validate(user, errors);

            if (errors.hasErrors()) {
                return user;
            }

            if (user.getId() != null) {
                errors.reject("CREATE_CLASS_ID_NOT_NULL");
                return user;
            }
        }

        return this.classRepository.saveAndFlush(user);
    }

    public List<Class> findAll() {
        return this.classRepository.findAll();
    }

    public void delete(Long id) {
        this.classRepository.deleteById(id);
    }

    public Class update(Errors errors, Class aClass) {

        if (!this.classRepository.existsById(aClass.getId())) {
            errors.reject("UPDATE_CLASS_NOT_FOUND");
            return aClass;
        }

        return this.classRepository.saveAndFlush(aClass);
    }
}
