package ch.lalumamesh.notenverwaltung.config;

import lombok.Getter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@Getter
@ConfigurationProperties(prefix = "security")
public class SecurityConfiguration {
    public String secret = "56425f596586bddae663fafb3fa805bd371d5a821d272f1dee05c6b00aedcabe";
    public long expirationDate = 864_000_000; // 10 days
    public String tokenPrefix = "Bearer ";
    public String headerString = "Authorization";
    public String signUpUrl = "/users";
}
