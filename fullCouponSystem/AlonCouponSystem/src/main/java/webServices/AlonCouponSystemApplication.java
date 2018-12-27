package webServices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import exceptions.CouponSystemException;
import tests.Test;

/**
 * This class runs the spring application and activates the test method in the
 * test class
 * 
 * @author Alon Samet
 *
 */
@SpringBootApplication
public class AlonCouponSystemApplication {

	/*
	 * The method that runs the spring application and activates the test method in
	 * the test class
	 */
	public static void main(String[] args) throws CouponSystemException {
		SpringApplication.run(AlonCouponSystemApplication.class, args);
		Test.projectTest();
	}

}
