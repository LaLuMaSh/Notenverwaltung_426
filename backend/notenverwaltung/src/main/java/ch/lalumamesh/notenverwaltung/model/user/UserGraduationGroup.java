package ch.lalumamesh.notenverwaltung.model.user;

import ch.lalumamesh.notenverwaltung.model.GraduationGroup;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table
public class UserGraduationGroup implements Serializable {
    private static final long serialVersionUID = 17L;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "fk_graduation")
    GraduationGroup graduationGroup;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_user")
    private User user;

    @Column(nullable = false, name = "weight")
    private Double weight;
}
