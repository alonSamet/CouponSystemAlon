package beans;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * @author Alon Samet
 * 
 *         This class generates the customer object, which has id, name &
 *         password
 *
 */
@SuppressWarnings("serial")
@XmlRootElement
public class Customer implements Serializable {

	private long id;
	private String name;
	private String password;

	/*
	 * Empty customer CTOR
	 */
	public Customer() {
	}

	/**
	 * This CTOR sets the customer class fields - including the id field - to those
	 * sent when an instance of the object is created
	 */
	public Customer(long id, String name, String password) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
	}

	/**
	 * This CTOR sets the customer class fields - not including the id field, that is
	 * been automatically generated in the db - to those sent when an instance of
	 * the object is created
	 */
	public Customer(String name, String password) {
		super();
		this.name = name;
		this.password = password;
	}

	/**
	 * @return id of the customer
	 */
	public long getId() {
		return id;
	}

	/**
	 * Updates new id for the customer. After a new customer is created, an id is
	 * automatically generatad in the db, and the customer id is been updated by this
	 * method
	 * 
	 * @param id id of the customer
	 */
	public void setId(long id) {
		this.id = id;
	}

	/**
	 * @return name of the customer
	 */
	public String getName() {
		return name;
	}

	/**
	 * Updates new name for the customer
	 * 
	 * @param name name of the customer
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return password of the customer
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * Updates new password for the customer
	 * 
	 * @param password password of the customer
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * Generates a string representation of the customer object with all its fields
	 */
	@Override
	public String toString() {
		return "Custumer [id=" + id + ", name=" + name + ", password=" + password + "]";
	}

}
