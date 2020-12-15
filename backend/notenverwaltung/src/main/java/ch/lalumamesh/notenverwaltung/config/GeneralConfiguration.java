package ch.lalumamesh.notenverwaltung.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Data
@ConfigurationProperties(prefix = "general")
public class GeneralConfiguration {
    private double minWeight;
    private double maxWeight;
}
