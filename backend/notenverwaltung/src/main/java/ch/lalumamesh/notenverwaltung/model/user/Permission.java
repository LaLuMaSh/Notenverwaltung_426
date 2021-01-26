package ch.lalumamesh.notenverwaltung.model.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Table
public class Permission {

    private static final long serialVersionUID = 10L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    @JsonIgnore
    public User getUser() {
        return user;
    }
}
