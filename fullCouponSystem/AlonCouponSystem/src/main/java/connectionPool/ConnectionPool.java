package connectionPool;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import exceptions.CouponSystemException;

/**
 * 
 * @author Alon Samet
 * 
 *         This class is a singleton with a constant number of connections that
 *         stored in a Set collection
 *
 */
public class ConnectionPool {

	private String url = "jdbc:derby:db";

	private Set<Connection> connections;
	public boolean closing;

	private final static int CON_MIN_SIZE = 0;
	private final static int CON_MAX_SIZE = 10;

	// Singleton (*private* CTOR)
	private ConnectionPool() throws CouponSystemException {
		connections = new HashSet<>();
		try {
			Class.forName("org.apache.derby.jdbc.EmbeddedDriver");
			for (int i = 0; i < CON_MAX_SIZE; i++) {
				Connection con = DriverManager.getConnection(url);
				connections.add(con);
			}
		} catch (SQLException | ClassNotFoundException e) {
			throw new CouponSystemException("Something went wrong");
		}
	}

	private static ConnectionPool instance;

	/**
	 * This method Instantiates the connection pool singleton
	 * 
	 * @return instance of the connection pool
	 * @throws CouponSystemException
	 */
	public static ConnectionPool getInstance() throws CouponSystemException {
		if (instance == null) {
			try {
				instance = new ConnectionPool();
			} catch (CouponSystemException e) {
				throw new CouponSystemException("Something went wrong");
			}
		}
		return instance;
	}

	/**
	 * This method returns connection, and removes one connection from the
	 * connections set
	 * 
	 * @return one connection from the connection pool
	 * @throws CouponSystemException
	 */
	public synchronized Connection getConnection() throws CouponSystemException {
		if (closing == true) {
			throw new CouponSystemException("We are closing the progrem");
		}
		if (connections.size() == CON_MIN_SIZE) {
			try {
				wait();
			} catch (InterruptedException e) {
				throw new CouponSystemException("Something went wrong");
			}
		}
		Iterator<Connection> it = connections.iterator();
		Connection con = (Connection) it.next();
		connections.remove(con);
		return con;

	}

	/**
	 * This method adds one connection to the set collection
	 * 
	 * @param con single connection
	 */
	public synchronized void returnConnection(Connection con) {
		connections.add(con);
		notify();
	}

	/**
	 * This method closes all the open connections by removing them from the set
	 * collections
	 * 
	 * @throws CouponSystemException
	 */
	public synchronized void closeAllConnections() throws CouponSystemException {
		closing = true;
		while (connections.size() < CON_MAX_SIZE) {
			try {
				wait();
			} catch (InterruptedException e) {
				throw new CouponSystemException("Something went wrong");
			}
		}
		while (!(connections.isEmpty())) {
			Iterator<Connection> it = connections.iterator();
			it.next();
			it.remove();
		}

	}

}
