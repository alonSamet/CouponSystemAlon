package beans;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * @author Alon Samet
 * 
 *         This class generates the company object, which has id, name, password
 *         & email
 *
 */
@SuppressWarnings("serial")
@XmlRootElement
public class Company implements Serializable {

	private long id;
	private String name;
	private String password;
	private String email;

	/*
	 * Empty company CTOR
	 */
	public Company() {
	}

	/**
	 * This CTOR sets the company class fields - including the id field - to those
	 * sent when an instance of the object is created
	 */
	public Company(long id, String name, String password, String email) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
		this.email = email;
	}

	/**
	 * This CTOR sets the company class fields - not including the id field, that is
	 * been automatically generated in the db - to those sent when an instance of
	 * the object is created
	 */
	public Company(String name, String password, String email) {
		super();
		this.name = name;
		this.password = password;
		this.email = email;
	}

	/**
	 * @return id of the company
	 */
	public long getId() {
		return id;
	}

	/**
	 * Updates new id for the company. After a new company is created, an id is
	 * automatically generatad in the db, and the company id is been updated by this
	 * method
	 * 
	 * @param id id of the company
	 */
	public void setId(long id) {
		this.id = id;
	}

	/**
	 * @return name of the company
	 */
	public String getName() {
		return name;
	}

	/**
	 * Updates new name for the company
	 * 
	 * @param name name of the company
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return password of the company
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * Updates new password for the company
	 * 
	 * @param password password of the company
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * @return email of the company
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * Updates new email for the company
	 * 
	 * @param email email of the company
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * Generates a string representation of the company object with all its fields
	 */
	@Override
	public String toString() {
		return "Company [id=" + id + ", name=" + name + ", password=" + password + ", email=" + email + "]";
	}

}
