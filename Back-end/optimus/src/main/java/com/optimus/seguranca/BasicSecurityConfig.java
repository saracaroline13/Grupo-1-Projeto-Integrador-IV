package com.optimus.seguranca;

import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

@EnableWebSecurity
public class BasicSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
            .antMatchers("/produto").permitAll()
            .antMatchers(HttpMethod.GET,"/usuario/**").permitAll()
            .antMatchers(HttpMethod.GET,"/usuario/cadastrar").permitAll()
            .antMatchers(HttpMethod.GET,"/produto").permitAll()
            .antMatchers(HttpMethod.GET,"/produto/**").permitAll()
            .antMatchers(HttpMethod.GET,"/imagem").permitAll()
            .antMatchers(HttpMethod.GET,"/imagem/**").permitAll()
            .antMatchers(HttpMethod.POST,"/imagem").permitAll()
            .antMatchers(HttpMethod.POST,"/itens").permitAll()
            .antMatchers(HttpMethod.POST,"/pedidos").permitAll()
            .antMatchers(HttpMethod.POST,"/usuario/logar").permitAll()
            .antMatchers(HttpMethod.POST,"/usuario/cadastrar").permitAll()
            .antMatchers(HttpMethod.GET,"/endereco/**").permitAll()
            .antMatchers("/**").permitAll()
            .anyRequest().permitAll()
            .and().httpBasic()
            .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and().cors()
            .and().csrf().disable();
    }

}