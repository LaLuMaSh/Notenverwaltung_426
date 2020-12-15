package ch.lalumamesh.notenverwaltung.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Data
@ConfigurationProperties(prefix = "exam")
public class ExamConfiguration {
    private int minGrade;
    private int maxGrade;
}
