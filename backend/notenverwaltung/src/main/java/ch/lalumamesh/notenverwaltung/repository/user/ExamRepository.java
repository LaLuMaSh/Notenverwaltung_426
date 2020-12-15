package ch.lalumamesh.notenverwaltung.repository.user;

import ch.lalumamesh.notenverwaltung.model.user.Exam;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamRepository extends JpaRepository<Exam, Long> {
}
