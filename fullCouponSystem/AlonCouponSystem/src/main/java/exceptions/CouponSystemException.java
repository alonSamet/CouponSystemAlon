package exceptions;

/**
 * The main exception of the coupon system, which inherits from the Exception
 * class
 * 
 * @author Alon Samet
 *
 */
public class CouponSystemException extends Exception {

	private static final long serialVersionUID = 1L;

	public CouponSystemException() {
		super();
	}

	public CouponSystemException(String arg0, Throwable arg1, boolean arg2, boolean arg3) {
		super(arg0, arg1, arg2, arg3);
	}

	public CouponSystemException(String arg0, Throwable arg1) {
		super(arg0, arg1);
	}

	public CouponSystemException(String arg0) {
		super(arg0);
	}

	public CouponSystemException(Throwable arg0) {
		super(arg0);
	}

}
