package ch.lalumamesh.notenverwaltung.repository.user;

import ch.lalumamesh.notenverwaltung.model.user.Exam;
import ch.lalumamesh.notenverwaltung.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExamRepository extends JpaRepository<Exam, Long> {
    List<Exam> findAllByUser(User user);
}
