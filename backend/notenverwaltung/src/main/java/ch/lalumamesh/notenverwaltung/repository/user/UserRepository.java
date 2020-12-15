package ch.lalumamesh.notenverwaltung.repository.user;

import ch.lalumamesh.notenverwaltung.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
