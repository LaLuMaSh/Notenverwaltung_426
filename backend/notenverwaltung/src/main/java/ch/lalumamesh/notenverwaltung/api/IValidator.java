package ch.lalumamesh.notenverwaltung.api;

import org.springframework.validation.Errors;

import java.io.Serializable;

public interface IValidator<T extends Serializable> {
    void validate(T object, Errors errors);
}
