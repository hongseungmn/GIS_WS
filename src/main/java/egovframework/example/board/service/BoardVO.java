package egovframework.example.board.service;
/*
 * [DTO]
 * 만약 DB의 실제 테이블과 연동되는 Entity(DB를 가져오는 객체)를 비즈니스 로직에 따라 이리저리 값을 바꾸면 서비스에 큰 혼란이 온다
 */

public class BoardVO {
	private String b_num;
	private String b_address;
	private String b_jimoc;
	private String b_city_name;
	
	public String getB_num() {
		return b_num;
	}
	public void setB_num(String b_num) {
		this.b_num = b_num;
	}
	public String getB_address() {
		return b_address;
	}
	public void setB_address(String b_address) {
		this.b_address = b_address;
	}
	public String getB_jimoc() {
		return b_jimoc;
	}
	public void setB_jimoc(String b_jimoc) {
		this.b_jimoc = b_jimoc;
	}
	public String getB_city_name() {
		return b_city_name;
	}
	public void setB_city_name(String b_city_name) {
		this.b_city_name = b_city_name;
	}
	@Override
	public String toString() {
		return "BoardVO [b_num=" + b_num + ", b_address=" + b_address + ", b_jimoc=" + b_jimoc + ", b_city_name="
				+ b_city_name + "]";
	}
	
	
}
