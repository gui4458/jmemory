package com.green.jmemory.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@EnableWebSecurity
@Configuration
public class SecurityConfig {

    @Bean
    public BCryptPasswordEncoder getEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity security) throws Exception {
        security.csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll()
                )
                .formLogin(formLogin -> formLogin
                        .loginPage("/login")  // React에서 로그인 페이지로 이동하도록 설정
                        .usernameParameter("memberId")
                        .passwordParameter("memberPw")
                        .loginProcessingUrl("/login")  // 로그인 처리 URL
                        .defaultSuccessUrl("/loginSuccess", true)  // 로그인 성공 시 이동할 URL
                        .failureUrl("/loginFailure")  // 로그인 실패 시 이동할 URL
                )
                .logout(logout -> logout
                        .logoutUrl("/logout")
                        .logoutSuccessUrl("/logoutSuccess")
                        .invalidateHttpSession(true)
                );

        return security.build();
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return web -> web.ignoring().requestMatchers(
                new AntPathRequestMatcher("/js/**"),
                new AntPathRequestMatcher("/css/**"),
                new AntPathRequestMatcher("/upload/**")
        );
    }
}