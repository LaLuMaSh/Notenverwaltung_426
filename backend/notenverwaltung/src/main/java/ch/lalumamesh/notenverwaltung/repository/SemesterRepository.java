package ch.lalumamesh.notenverwaltung.repository;

import ch.lalumamesh.notenverwaltung.model.Semester;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SemesterRepository extends JpaRepository<Semester, Long> {
}
