export class Coupon {

    constructor(public id : number,
                public title : string,
                public startDate : Date,
                public endDate : Date,
                public amount : number,
                public couponType : string,
                public message : string,
                public price : number,
                public image : string
                ) { }

    setId(id: number) {
        this.id = id;
    }
    setTitle(title: string) {
        this.title = title;
    }
    setStartDate(startDate) {
		this.startDate = startDate;
	}
	setEndDate(endDate) {
		this.endDate = endDate;
	}
	setAmount(amount) {
		this.amount = amount;
	}
	setCouponType(couponType) {
		this.couponType = couponType;
	}
	setMessage(message) {
		this.message = message;
	}
	setPrice(price) {
		this.price = price;
	}
	setImage(image) {
		this.image = image;
	}

}

