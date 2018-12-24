package connectionPool;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import exceptions.CouponSystemException;

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
	 * 
	 * @return
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

	// This method takes one connection from the connections set
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

	public synchronized void returnConnection(Connection con) {
		connections.add(con);
		notify();
	}

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
