package dao.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;

import beans.Company;
import beans.Coupon;
import beans.CouponType;
import connectionPool.ConnectionPool;
import dao.CompanyDAO;
import exceptions.CouponSystemException;

/**
 * This layer contains CRUD methods & additional methods for using in the facade
 * layer, according to user needs (no business logic).
 */
public class CompanyDaoDb implements CompanyDAO {

	public CompanyDaoDb() {
	}

	/**
	 * Login to the system by company user name & password
	 * 
	 * @param name     username of the company
	 * @param password password of the company
	 * @return true (if login succeeded) or false (if login failed)
	 * @throws CouponSystemException
	 */
	public boolean login(String compName, String password) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String select = "SELECT * FROM Company WHERE comp_name='" + compName + "' AND password='" + password + "'";
			ResultSet rs = con.createStatement().executeQuery(select);
			if (rs.next()) { // True - if the resultset has information in it
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
	 * Creates new company in the database (db)
	 * 
	 * @param {@link Company}
	 * @throws CouponSystemException
	 */
	@Override
	public void create(Company company) throws CouponSystemException {
		// get connection from pool
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String insert = "INSERT INTO Company(comp_name, password, email) VALUES(?, ?, ?)";
			PreparedStatement pstmt = con.prepareStatement(insert, PreparedStatement.RETURN_GENERATED_KEYS);
			pstmt.setString(1, company.getName());
			pstmt.setString(2, company.getPassword());
			pstmt.setString(3, company.getEmail());
			pstmt.executeUpdate();
			ResultSet rs = pstmt.getGeneratedKeys();
			rs.next();
			company.setId(rs.getLong(1));

			System.out.println("your company id is:" + company.getId());
			System.out.println("The company \"" + company.getName() + "\" was created in table");

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}

	}

	/**
	 * Removes company from the db
	 * 
	 * @param {@link Company}
	 * @throws CouponSystemException
	 */
	@Override
	public void remove(Company company) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();

		try {
			long companyId = this.getCompanyIdByName(company.getName());
			String delete = "DELETE FROM Company WHERE id=" + companyId;
			con.createStatement().executeUpdate(delete);
			System.out.println("The company \"" + company.getName() + "\" was removed from table");

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * Updates company in the db
	 * 
	 * @param {@link Company}
	 * @throws CouponSystemException
	 */
	@Override
	public void update(Company company) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			long companyId = this.getCompanyIdByName(company.getName());
			String update = "UPDATE Company SET comp_name=?, password=?, email=? WHERE id=" + companyId;
			PreparedStatement psmt = con.prepareStatement(update);
			psmt.setString(1, company.getName());
			psmt.setString(2, company.getPassword());
			psmt.setString(3, company.getEmail());
			psmt.executeUpdate();
			if (psmt.executeUpdate() == 0) { // If no rows were updated
				throw new CouponSystemException("The company " + company.getName() + " is not listed in the table");
			}

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * Gets the company object from db by its id
	 * 
	 * @param companyId id of the requested company
	 * @return {@link Company}
	 * @throws CouponSystemException
	 */
	@Override
	public Company getCompanyById(long companyId) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String select = "SELECT * FROM Company WHERE id=" + companyId;
			ResultSet rs = con.createStatement().executeQuery(select);
			if (rs.next()) {
				Company company = new Company(rs.getLong(1), rs.getString(2), rs.getString(3), rs.getString(4));
				return company;
			} else {
				throw new CouponSystemException("No company with this ID.\n\nPlease try again");
			}

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * Gets the company object from db by its name
	 * 
	 * @param companyName name of the requested company
	 * @return {@link Company}
	 * @throws CouponSystemException
	 */
	@Override
	public Company getCompanyByName(String companyName) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			Company company = null;
			if (this.isCompanyNameExist(companyName)) {
				String select = "SELECT * FROM Company WHERE comp_name='" + companyName + "'";
				ResultSet rs = con.createStatement().executeQuery(select);
				if (rs.next()) {
					company = new Company(rs.getLong(1), rs.getString(2), rs.getString(3), rs.getString(4));
				}
			}
			return company;

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * Gets all company objects from the db
	 * 
	 * @return collection of companies
	 * @throws CouponSystemException
	 */
	@Override
	public Collection<Company> getAllCompanies() throws CouponSystemException {
		Collection<Company> allCompanies = new ArrayList<>();
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String select = "SELECT * FROM Company";
			ResultSet rs = con.createStatement().executeQuery(select);
			while (rs.next()) {
				allCompanies.add(new Company(rs.getLong(1), rs.getString(2), rs.getString(3), rs.getString(4)));
			}
			return allCompanies;

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}

	}

	/**
	 * Gets all coupons of specific company by its id
	 * 
	 * @param compId id of the company
	 * @return collection of coupons
	 * @throws CouponSystemException
	 */
	@Override
	public Collection<Coupon> getMyCouponsByMyCompanyId(long companyId) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			Collection<Coupon> coupons = new ArrayList<>();
			String select = "SELECT * FROM CompanyCoupon INNER JOIN Coupon ON Coupon.id=CompanyCoupon.Coupon_id WHERE Company_id="
					+ companyId;
			ResultSet rs = con.createStatement().executeQuery(select);
			while (rs.next()) {
				coupons.add(new Coupon(rs.getLong(2), rs.getString(4), rs.getDate(5), rs.getDate(6), rs.getInt(7),
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
	 * Adds company id and its coupon id to the CompanyCoupon table in the database,
	 * after company creates new coupon
	 * 
	 * @param companyId id of the company
	 * @param couponId  id of the coupon
	 * @throws CouponSystemException
	 */
	public void addToCompanyCouponTable(long couponId, long companyId) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String insert = "INSERT INTO CompanyCoupon(Company_id,Coupon_id) VALUES (" + companyId + ", " + couponId
					+ ")";
			con.prepareStatement(insert).executeUpdate();

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * Removes the company & coupon from CompanyCoupon table in the database, after
	 * deleting a company or deleting a coupon
	 * 
	 * @param couponId id of the coupon
	 * @throws CouponSystemException
	 */
	public void removeFromCompanyCouponTable(long couponId) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String delete = "DELETE FROM CompanyCoupon WHERE Coupon_id=" + couponId;
		try {
			con.createStatement().executeUpdate(delete);
			System.out.println("Company coupons were deleted from CompanyCoupon table");

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * Gets the company id from the company table in db, by the company name
	 * 
	 * @param compName name of the company
	 * @return the id of the company
	 * @throws CouponSystemException
	 */
	public long getCompanyIdByName(String compName) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			long id = 0;
			if (this.isCompanyNameExist(compName)) {
				String select = "SELECT id FROM Company WHERE comp_name='" + compName + "'";
				ResultSet rs = con.createStatement().executeQuery(select);
				while (rs.next()) {
					id = rs.getLong(1);
				}
			}
			return id;

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}

	}

	/**
	 * Checks whether selected company name is already exists in db or not
	 * 
	 * @param compName name of the company
	 * @return true (if company name already exists) or false (if company name is
	 *         unique)
	 * @throws CouponSystemException
	 */
	public boolean isCompanyNameExist(String compName) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String select = "SELECT * FROM Company WHERE comp_name='" + compName + "'";
			ResultSet rs = con.createStatement().executeQuery(select);
			if (rs.next()) {
				return true;
			} else {
				throw new CouponSystemException("No company with this name.\n\nPlease try again");
			}

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

}
