package ch.lalumamesh.notenverwaltung.model.user;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table
public class User implements Serializable {
    private static final long serialVersionUID = 5L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(name = "password", nullable = false, unique = true)
    private String password;

    @ManyToMany(mappedBy = "users")
    private List<Class> classes = new ArrayList<>();
}
