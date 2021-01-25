package ch.lalumamesh.notenverwaltung.model.user;

import ch.lalumamesh.notenverwaltung.model.Subject;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table
public class UserSubject implements Serializable {
    private static final long serialVersionUID = 27L;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "fk_subject")
    Subject subject;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, name = "weight")
    private Double weight;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_user")
    private User user;
}
