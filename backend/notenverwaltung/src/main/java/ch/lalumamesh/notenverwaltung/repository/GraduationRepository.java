package ch.lalumamesh.notenverwaltung.repository;

import ch.lalumamesh.notenverwaltung.model.GraduationGroup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GraduationRepository extends JpaRepository<GraduationGroup, Long> {
}
