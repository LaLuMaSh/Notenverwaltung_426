package ch.lalumamesh.notenverwaltung.service.user;

import ch.lalumamesh.notenverwaltung.model.user.Exam;
import ch.lalumamesh.notenverwaltung.model.user.User;
import ch.lalumamesh.notenverwaltung.repository.user.ExamRepository;
import ch.lalumamesh.notenverwaltung.service.UserService;
import ch.lalumamesh.notenverwaltung.validator.ExamValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;

import java.util.List;

@Service
public class ExamService {
    private final ExamRepository examRepository;
    private final UserService userService;
    private final ExamValidator examValidator;

    @Autowired
    public ExamService(ExamRepository examRepository, UserService userService, ExamValidator examValidator) {
        this.examRepository = examRepository;
        this.userService = userService;
        this.examValidator = examValidator;
    }

    public Exam save(Errors errors, Exam exam, boolean validate) {
        if (validate) {
            this.examValidator.validate(exam, errors);

            if (errors.hasErrors()) {
                return exam;
            }

            if (exam.getId() != null) {
                errors.reject("CREATE_EXAM_ID_NOT_NULL");
                return exam;
            }
        }

        return this.examRepository.saveAndFlush(exam);
    }

    public List<Exam> findAll() {
        return this.examRepository.findAll();
    }

    public void delete(Long id) {
        this.examRepository.deleteById(id);
    }

    public Exam update(Errors errors, Exam exam) {

        if (!this.examRepository.existsById(exam.getId())) {
            errors.reject("UPDATE_EXAM_NOT_FOUND");
            return exam;
        }

        return this.examRepository.saveAndFlush(exam);
    }

    public List<Exam> getOwnExams() {
        User myself = this.userService.getMyself();
        return this.examRepository.findAllByUser(myself);
    }
}
