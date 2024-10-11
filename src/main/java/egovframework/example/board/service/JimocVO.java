package egovframework.example.board.service;

public class JimocVO {
	private String b_num;
	private String b_jimoc;
	private String b_address;
	private String b_x;
	private String b_y;
	
	
	public String getB_num() {
		return b_num;
	}


	public void setB_num(String b_num) {
		this.b_num = b_num;
	}


	public String getB_jimoc() {
		return b_jimoc;
	}


	public void setB_jimoc(String b_jimoc) {
		this.b_jimoc = b_jimoc;
	}


	public String getB_address() {
		return b_address;
	}


	public void setB_address(String b_address) {
		this.b_address = b_address;
	}


	public String getB_x() {
		return b_x;
	}


	public void setB_x(String b_x) {
		this.b_x = b_x;
	}


	public String getB_y() {
		return b_y;
	}


	public void setB_y(String b_y) {
		this.b_y = b_y;
	}


	@Override
	public String toString() {
		return "JimocVO [b_num=" + b_num + ", b_jimoc=" + b_jimoc + ", b_address=" + b_address + ", b_x=" + b_x
				+ ", b_y=" + b_y + "]";
	}
}
