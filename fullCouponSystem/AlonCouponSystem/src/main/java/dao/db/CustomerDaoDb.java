package dao.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;

import beans.Coupon;
import beans.Customer;
import beans.CouponType;
import connectionPool.ConnectionPool;
import dao.CustomerDAO;
import exceptions.CouponSystemException;

/**
 * This layer contains CRUD methods & additional methods for using in the facade
 * layer, according to user needs (no business logic).
 */
public class CustomerDaoDb implements CustomerDAO {

	public CustomerDaoDb() {
	}

	/**
	 * Login to the system by customer user name & password
	 * 
	 * @param name     username of the customer
	 * @param password password of the customer
	 * @return true (if login succeeded) or false (if login failed)
	 * @throws CouponSystemException
	 */
	@Override
	public boolean login(String custName, String password) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String select = "SELECT * FROM Customer WHERE cust_name='" + custName + "' AND password='" + password + "'";
			ResultSet rs = con.createStatement().executeQuery(select);
			if (rs.next()) { // true if the resultset has information in it
				return true;
			} else {
				return false;
			}

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}

	}

	/**
	 * Creates new customer in the database (db)
	 * 
	 * @param {@link Customer}
	 * @throws CouponSystemException
	 */
	@Override
	public void create(Customer customer) throws CouponSystemException {
		// get connection from pool
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String insert = "INSERT INTO Customer(cust_name, password) VALUES (?, ?)";
			PreparedStatement pstmt = con.prepareStatement(insert, PreparedStatement.RETURN_GENERATED_KEYS);
			pstmt.setString(1, customer.getName());
			pstmt.setString(2, customer.getPassword());
			pstmt.executeUpdate();

			ResultSet rs = pstmt.getGeneratedKeys();
			if (rs.next()) {
				customer.setId(rs.getLong(1));
				System.out.println("Your customer id is:" + customer.getId());
			}

			System.out.println("The customer \"" + customer.getName() + "\" was inserted into table");

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}

	}

	/**
	 * Removes customer from the db
	 * 
	 * @param {@link Customer}
	 * @throws CouponSystemException
	 */
	@Override
	public void remove(Customer customer) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			long customerId = this.getCustomerIdByName(customer.getName());
			String delete = "DELETE FROM Customer WHERE id=" + customerId;
			con.createStatement().executeUpdate(delete);

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * Updates customer in the db
	 * 
	 * @param {@link Customer}
	 * @throws CouponSystemException
	 */
	@Override
	public void update(Customer customer) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			long customerId = this.getCustomerIdByName(customer.getName());
			String update = "UPDATE Customer SET cust_name=?, password=? WHERE id=" + customerId;
			PreparedStatement psmt = con.prepareStatement(update);
			psmt.setString(1, customer.getName());
			psmt.setString(2, customer.getPassword());
			psmt.executeUpdate();
			if (psmt.executeUpdate() == 0) { // If no rows were updated
				throw new CouponSystemException("The customer " + customer.getName() + " is not listed in the table");
			}

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * Gets the customer object from db by its id
	 * 
	 * @param customerId id of the requested customer
	 * @return {@link Customer}
	 * @throws CouponSystemException
	 */
	@Override
	public Customer getCustomerById(long customerId) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String select = "SELECT * FROM Customer WHERE id=" + customerId;
			ResultSet rs = con.createStatement().executeQuery(select);
			Customer customer = null;
			if (rs.next()) {
				customer = new Customer(rs.getLong(1), rs.getString(2), rs.getString(3));
				return customer;
			} else {
				throw new CouponSystemException("No customer with this ID.\n\nPlease try again");
			}

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * Gets the customer object from db by its name
	 * 
	 * @param customerName name of the requested customer
	 * @return {@link Customer}
	 * @throws CouponSystemException
	 */
	@Override
	public Customer getCustomerByName(String customerName) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			Customer customer = null;
			if (this.isCustomerNameExist(customerName)) {
				String select = "SELECT * FROM Customer WHERE cust_name='" + customerName + "'";
				ResultSet rs = con.createStatement().executeQuery(select);
				if (rs.next()) {
					customer = new Customer(rs.getLong(1), rs.getString(2), rs.getString(3));
				} else {
					throw new CouponSystemException("No customer with this name.\n\nPlease try again");
				}
			}
			return customer;

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * Gets all customer objects from the db
	 * 
	 * @return collection of customers
	 * @throws CouponSystemException
	 */
	@Override
	public Collection<Customer> getAllCustomers() throws CouponSystemException {
		Collection<Customer> allCustomers = new ArrayList<>();
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String select = "SELECT * FROM Customer";
			ResultSet rs = con.createStatement().executeQuery(select);
			while (rs.next()) {
				allCustomers.add(new Customer(rs.getLong(1), rs.getString(2), rs.getString(3)));
			}
			return allCustomers;

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}

	}

	/**
	 * Gets all coupons of specific customer by its id
	 * 
	 * @param customerId id of the customer
	 * @return collection of coupons
	 * @throws CouponSystemException
	 */
	@Override
	public Collection<Coupon> getCustomerCouponsByCustomerId(long customerId) throws CouponSystemException {
		Collection<Coupon> coupons = new ArrayList<>();
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String select = " SELECT * FROM CustomerCoupon INNER JOIN Coupon ON Coupon.id=CustomerCoupon.Coupon_id WHERE Customer_id="
					+ customerId;
			ResultSet rs = con.createStatement().executeQuery(select);
			while (rs.next()) {
				coupons.add(new Coupon(rs.getLong(3), rs.getString(4), rs.getDate(5), rs.getDate(6), rs.getInt(7),
						CouponType.valueOf(rs.getString(8)), rs.getString(9), rs.getDouble(10), rs.getString(11)));
			}
			return coupons;

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}

	}

	/**********************************************************/
	/****** Additional methods to handle the join tabels ******/
	/**********************************************************/

	/**
	 * Adds customer id and its coupon id to the CustomerCoupon table in the
	 * database, after a coupon is being purchased by a customer
	 * 
	 * @param customerId id of the customer
	 * @param couponId   id of the coupon
	 * @throws CouponSystemException
	 */
	public void addToCustomerCouponTable(long customerId, long couponId) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String insert = "INSERT INTO CustomerCoupon (Customer_id,Coupon_id) VALUES (?, ?)";
		try {
			PreparedStatement psmt = con.prepareStatement(insert);
			psmt.setLong(1, customerId);
			psmt.setLong(2, couponId);
			psmt.executeUpdate();
			System.out.println("CustomerCoupon table was updated");

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * Removes the customer & coupon from CustomerCoupon table in the database,
	 * after deleting a customer or deleting a coupon
	 * 
	 * @param couponId id of the coupon
	 * @throws CouponSystemException
	 */
	public void removeFromCustomerCouponTable(long couponId) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String delete = "DELETE FROM CustomerCoupon WHERE Coupon_id=" + couponId;
		try {
			con.createStatement().executeUpdate(delete);
			System.out.println("Customer coupon was removed from CustomerCoupon table");

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * Gets the customer id from the customer table in db, by the customer name
	 * 
	 * @param customerName name of the customer
	 * @return the id of the customer
	 * @throws CouponSystemException
	 */
	public long getCustomerIdByName(String customerName) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			long customerId = 0;
			if (this.isCustomerNameExist(customerName)) {
				String select = "SELECT id FROM Customer WHERE cust_name='" + customerName + "'";
				ResultSet rs = con.createStatement().executeQuery(select);
				while (rs.next()) {
					customerId = rs.getLong(1);
				}
			}
			return customerId;

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}

	}

	/**
	 * Checks if a selected coupon title is already exist in db (so every coupon
	 * will be unique)
	 * 
	 * @param title title of a selected coupon
	 * @return true (if a selected coupon title is already exist) or false (if the
	 *         coupon title is unique)
	 * @throws CouponSystemException
	 */
	public boolean IsCouponWasAlreadyPurchased(String title) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String select = "SELECT * FROM CustomerCoupon INNER JOIN Coupon ON Coupon.id=CustomerCoupon.Coupon_id WHERE "
				+ "title='" + title + "'";
		try {
			ResultSet rs = con.createStatement().executeQuery(select);
			boolean IsCouponWasPurchased = false;
			if (rs.next()) {
				throw new CouponSystemException("You have already purchased this coupon!");
			}
			return IsCouponWasPurchased;

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}

	}

	/**
	 * Checks whether selected customer name is already exists in db or not
	 * 
	 * @param customerName name of the customer
	 * @return true (if customer name already exists) or false (if customer name is
	 *         unique)
	 * @throws CouponSystemException
	 */
	public boolean isCustomerNameExist(String customerName) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String select = "SELECT * FROM Customer WHERE cust_name='" + customerName + "'";
			ResultSet rs = con.createStatement().executeQuery(select);
			if (rs.next()) {
				return true;
			} else {
				throw new CouponSystemException("No customer with this name.\nPlease try again");
			}
		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}
}
