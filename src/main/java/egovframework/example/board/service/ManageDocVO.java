package egovframework.example.board.service;

import java.sql.Date;


public class ManageDocVO {
	private String manage_code;
	private String title;
	private String content;
	private String register_date;
	private String b_input_address;
	
	public String getB_input_address() {
		return b_input_address;
	}
	public void setB_input_address(String b_input_address) {
		this.b_input_address = b_input_address;
	}
	public String getManage_code() {
		return manage_code;
	}
	public void setManage_code(String manage_code) {
		this.manage_code = manage_code;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getRegister_date() {
		return register_date;
	}
	public void setRegister_date(String register_date) {
		this.register_date = register_date;
	}
	@Override
	public String toString() {
		return "ManagaDocVO [manage_code=" + manage_code + ", title=" + title + ", content=" + content
				+ ", register_date=" + register_date + "]";
	}
	
	
	
}
