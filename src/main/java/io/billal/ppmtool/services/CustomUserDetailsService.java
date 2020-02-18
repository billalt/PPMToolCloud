package io.billal.ppmtool.services;

import io.billal.ppmtool.domain.Users;
import io.billal.ppmtool.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException, DataAccessException {
        Users user = userRepository.findByUsername(username);

        if(user == null) new UsernameNotFoundException("User Not Found");
        return user;
    }

    @Transactional
    public Users loadUserById(Long id){
        Users user = userRepository.getById(id);
        if(user == null) new UsernameNotFoundException("User Not Found");
        return user;
    }

}
