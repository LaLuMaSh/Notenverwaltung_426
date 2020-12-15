package ch.lalumamesh.notenverwaltung.config;

public class SecurityConstants {
    public static final String SECRET = "56425f596586bddae663fafb3fa805bd371d5a821d272f1dee05c6b00aedcabe";
    public static final long EXPIRATION_TIME = 864_000_000; // 10 days
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final String SIGN_UP_URL = "/users";
}
