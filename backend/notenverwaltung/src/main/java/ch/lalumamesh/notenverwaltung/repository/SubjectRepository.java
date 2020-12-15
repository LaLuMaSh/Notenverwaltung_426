package ch.lalumamesh.notenverwaltung.repository;

import ch.lalumamesh.notenverwaltung.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
}
