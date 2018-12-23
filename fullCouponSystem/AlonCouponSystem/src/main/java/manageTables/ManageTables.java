package manageTables;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import connectionPool.ConnectionPool;
import exceptions.CouponSystemException;

public class ManageTables {

	public void createTables() throws CouponSystemException {

		String url = "jdbc:derby:db";

		// Commands of creating tables
		String sql1 = " CREATE TABLE Company(id BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1),"
				+ " comp_name VARCHAR(40),password VARCHAR(40),email VARCHAR(40),"
				+ " PRIMARY KEY (id))";

		String sql2 = " CREATE TABLE Customer(id BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1),"
				+ " cust_name VARCHAR(40),password VARCHAR(40),"
				+ " PRIMARY KEY (id))";

		String sql3 = " CREATE TABLE Coupon(id BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1),"
				+ " title VARCHAR(40), startDate DATE, endDate DATE, amount INTEGER, couponType VARCHAR(40),"
				+ " message VARCHAR(225), price FLOAT, image VARCHAR(225),"
				+ " PRIMARY KEY (id))";

		String sql4 = "CREATE TABLE CustomerCoupon(Customer_id BIGINT, Coupon_id BIGINT, PRIMARY KEY(Customer_id, Coupon_id))";

		String sql5 = "CREATE TABLE CompanyCoupon(Company_id BIGINT, Coupon_id BIGINT, PRIMARY KEY(Company_id, Coupon_id))";

		// Establish a connection to the db - using DriverManager
		try (Connection con = DriverManager.getConnection(url);) {

			// First we load the driver class
			Class.forName("org.apache.derby.jdbc.EmbeddedDriver");
			System.out.println("driver loaded");
			// creating statement
			Statement stmt = con.createStatement();

			// Sending commands to db
			stmt.executeUpdate(sql1);
			stmt.executeUpdate(sql2);
			stmt.executeUpdate(sql3);
			stmt.executeUpdate(sql4);
			stmt.executeUpdate(sql5);
			//
			System.out.println("All tables were created");

		} catch (ClassNotFoundException | SQLException e) {
			throw new CouponSystemException("SQLException or ClassNotFoundException", e);
		}

	}

	public void dropTables() throws CouponSystemException {

		String url = "jdbc:derby:db";

		String sql1 = "DROP TABLE Company";
		String sql2 = "DROP TABLE Customer";
		String sql3 = "DROP TABLE Coupon";
		String sql4 = "DROP TABLE CustomerCoupon";
		String sql5 = "DROP TABLE CompanyCoupon";

		// get connection;
		try (Connection con = DriverManager.getConnection(url);) {
			Class.forName("org.apache.derby.jdbc.EmbeddedDriver");
			Statement stmt = con.createStatement();
			// creating tables;

			stmt.executeUpdate(sql1);
			stmt.executeUpdate(sql2);
			stmt.executeUpdate(sql3);
			stmt.executeUpdate(sql4);
			stmt.executeUpdate(sql5);

		} catch (SQLException | ClassNotFoundException e) {
			throw new CouponSystemException("Drop tables main failed", e);
		}
		System.out.println("All tables were deleted");
	}

	public void clearCompanyTable() throws CouponSystemException {
		// get connection from pool
		Connection con = ConnectionPool.getInstance().getConnection(); // (Removes 1 connection from pool)
		try {
			String clearTable = "TRUNCATE TABLE Company";
			Statement stmt = con.createStatement();
			stmt.executeUpdate(clearTable);
			System.out.println("Company table was cleared");
		} catch (SQLException e) {
			throw new CouponSystemException("clearCompanyTable failed", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);// (Adds 1 connection to pool)

		}

	}

	public void clearCustomerTable() throws CouponSystemException {
		// get connection from pool
		Connection con = ConnectionPool.getInstance().getConnection(); // (Removes 1 connection from pool)
		try {
			String clearTable = "TRUNCATE TABLE Customer";
			Statement stmt = con.createStatement();
			stmt.executeUpdate(clearTable);
			System.out.println("Customer table was cleared");
		} catch (SQLException e) {
			throw new CouponSystemException("clearCustomerTable failed", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);// (Adds 1 connection to pool)

		}

	}

	public void clearCouponTable() throws CouponSystemException {
		// get connection from pool
		Connection con = ConnectionPool.getInstance().getConnection(); // (Removes 1 connection from pool)
		try {
			String clearTable = "TRUNCATE TABLE Coupon";
			Statement stmt = con.createStatement();
			stmt.executeUpdate(clearTable);
			System.out.println("Coupon table was cleared");
		} catch (SQLException e) {
			throw new CouponSystemException("clearCouponTable failed", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);// (Adds 1 connection to pool)

		}

	}
}