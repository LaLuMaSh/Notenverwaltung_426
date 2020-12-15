package ch.lalumamesh.notenverwaltung.repository.user;

import ch.lalumamesh.notenverwaltung.model.user.UserGraduationGroup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserGraduationRepository extends JpaRepository<UserGraduationGroup, Long> {
}
