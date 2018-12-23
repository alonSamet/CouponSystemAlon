package dao.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

import beans.Coupon;
import beans.CouponType;
import connectionPool.ConnectionPool;
import dao.CouponDAO;
import exceptions.CouponSystemException;

/**
 * In this layer there are CRUD methods & additional methods to use in facade
 * layer, according to user needs (no business logic).
 */

public class CouponDaoDb implements CouponDAO {

	public CouponDaoDb() {
	}

	@Override
	public void create(Coupon coupon) throws CouponSystemException {
		// get connection from pool
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String insert = "INSERT INTO Coupon(title, startDate, endDate, amount, couponType, message, price, image) VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
			PreparedStatement pstmt = con.prepareStatement(insert, PreparedStatement.RETURN_GENERATED_KEYS);
			pstmt.setString(1, coupon.getTitle());
			pstmt.setDate(2, new java.sql.Date(coupon.getStartDate().getTime()));
			pstmt.setDate(3, new java.sql.Date(coupon.getEndDate().getTime()));
			pstmt.setInt(4, coupon.getAmount());
			pstmt.setString(5, coupon.getCouponType().name());
			pstmt.setString(6, coupon.getMessage());
			pstmt.setDouble(7, coupon.getPrice());
			pstmt.setString(8, coupon.getImage());
			pstmt.executeUpdate();

			ResultSet rs = pstmt.getGeneratedKeys();
			rs.next();
			coupon.setId(rs.getLong(1));

			System.out.println("The coupon \"" + coupon.getTitle() + "\" was created");

		} catch (SQLException e) {
			throw new CouponSystemException("CouponDaoDb.create failed", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}

	}

	@Override
	public void remove(Coupon coupon) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			long couponId = this.getCouponIdByTitle(coupon.getTitle());
			String delete = "DELETE FROM Coupon WHERE id=" + couponId;
			con.createStatement().executeUpdate(delete);
			System.out.println("The copoun: \"" + coupon.getTitle() + "\" was removed from coupon table");

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	@Override
	public void update(Coupon coupon) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			long couponId = this.getCouponIdByTitle(coupon.getTitle());
			String update = "UPDATE Coupon SET title=?, startDate=?, endDate=?, amount=?, couponType=?, message=?, price=?, image=? WHERE id="
					+ couponId;
			PreparedStatement pstmt = con.prepareStatement(update);
			pstmt.setString(1, coupon.getTitle());
			pstmt.setDate(2, new java.sql.Date(coupon.getStartDate().getTime()));
			pstmt.setDate(3, new java.sql.Date(coupon.getEndDate().getTime()));
			pstmt.setInt(4, coupon.getAmount());
			pstmt.setString(5, coupon.getCouponType().name());
			pstmt.setString(6, coupon.getMessage());
			pstmt.setDouble(7, coupon.getPrice());
			pstmt.setString(8, coupon.getImage());
			pstmt.executeUpdate();
			if (pstmt.executeUpdate() == 0) { // If no rows were updated
				throw new CouponSystemException("The coupon " + coupon.getTitle() + " is not listed in the table");
			}
			System.out.println("Line updeted");

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * User can get coupon by giving the id. No user will give id in the system
	 * - it will happened automatically in the facade layer, after logging in
	 */
	@Override
	public Coupon getCouponById(long couponId) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String select = "SELECT * FROM Coupon WHERE id=" + couponId;
			ResultSet rs = con.createStatement().executeQuery(select);
			if (rs.next()) {
				Coupon coupon = new Coupon(rs.getLong(1), rs.getString(2), rs.getDate(3), rs.getDate(4), rs.getInt(5),
						CouponType.valueOf(rs.getString(6)), rs.getString(7), rs.getDouble(8), rs.getString(9));
				return coupon;
			} else {
				return null;
			}

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	@Override
	public Collection<Coupon> getAllCoupons() throws CouponSystemException {
		Collection<Coupon> allCoupons = new ArrayList<>();
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String select = "SELECT * FROM Coupon";
			ResultSet rs = con.createStatement().executeQuery(select);
			while (rs.next()) {
				allCoupons.add(new Coupon(rs.getLong(1), rs.getString(2), rs.getDate(3), rs.getDate(4), rs.getInt(5),
						CouponType.valueOf(rs.getString(6)), rs.getString(7), rs.getDouble(8), rs.getString(9)));
			}
			return allCoupons;

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}

	}

	@Override
	public Collection<Coupon> getCouponsByType(CouponType coupon_type) throws CouponSystemException {
		Collection<Coupon> coupons = new ArrayList<>();
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String select = "SELECT * FROM Coupon WHERE CouponType='" + coupon_type.name() + "'";
			ResultSet rs = con.createStatement().executeQuery(select);
			while (rs.next()) {
				coupons.add(new Coupon(rs.getLong(1), rs.getString(2), rs.getDate(3), rs.getDate(4), rs.getInt(5),
						CouponType.valueOf(rs.getString(6)), rs.getString(7), rs.getDouble(8), rs.getString(9)));
			}
			return coupons;

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}

	}

	/**
	 * This is an additional method that helps the user to restore the coupon id
	 * by title
	 * 
	 * @param title
	 * @return id
	 * @throws CouponSystemException
	 */
	public long getCouponIdByTitle(String title) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String select = "SELECT Coupon.id FROM Coupon WHERE title='" + title + "'";
		long id = 0;
		try {
			ResultSet rs = con.createStatement().executeQuery(select);
			if (rs.next()) {
				id = rs.getLong(1);
			}
			return id;

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}

	}

	public boolean isCouponBelongsToLoggedInCompany(long companyId, long couponId) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String select = "SELECT * FROM CompanyCoupon WHERE Company_id=" + companyId + " AND Coupon_id =" + couponId;
			ResultSet rs = con.createStatement().executeQuery(select);
			if (rs.next()) {
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
	
	public boolean isCouponBelongsToLoggedInCustomer(long customerId, long couponId) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String select = "SELECT * FROM CustomerCoupon WHERE Customer_id=" + customerId + " AND Coupon_id =" + couponId;
			ResultSet rs = con.createStatement().executeQuery(select);
			if (rs.next()) {
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

	public boolean isCouponTitleExist(Coupon coupon) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		try {
			String select = "SELECT * FROM Coupon WHERE title='" + coupon.getTitle() + "'";
			ResultSet rs = con.createStatement().executeQuery(select);
			if (rs.next()) {
				return true;
			} else {
				throw new CouponSystemException("No coupon with that title,\n\nPlease try again");
			}

		} catch (SQLException e) {
			throw new CouponSystemException("Something went wrong");
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	public boolean isThereCouponsLeft(Coupon coupon) throws CouponSystemException {
		if (coupon.getAmount() > 0) {
			return true;
		} else {
			throw new CouponSystemException("This coupon is out of the company stock");
		}

	}
	
	public boolean isCouponDateValid(Coupon coupon) throws CouponSystemException {
		Date today = new Date(System.currentTimeMillis());
		if (coupon.getEndDate().after(today)) {
			return true;
		} else {
			throw new CouponSystemException("This coupon date was expired");
		}

	}

}