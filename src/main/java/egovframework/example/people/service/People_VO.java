package egovframework.example.people.service;

public class People_VO {
	private long code;
	private String city_code;
	private String si_code;
	private String dong_code;
	private int tot_tot;
	private int m_tot;
	private int w_tot;
	private int m_children;
	private int m_adult;
	private int m_elder;
	private int w_children;
	private int w_adult;
	private int w_elder;
	private int total_sum;
	
	public long getCode() {
		return code;
	}
	public void setCode(long code) {
		this.code = code;
	}
	public String getCity_code() {
		return city_code;
	}
	public void setCity_code(String city_code) {
		this.city_code = city_code;
	}
	public String getSi_code() {
		return si_code;
	}
	public void setSi_code(String si_code) {
		this.si_code = si_code;
	}
	public String getDong_code() {
		return dong_code;
	}
	public void setDong_code(String dong_code) {
		this.dong_code = dong_code;
	}
	public int getTot_tot() {
		return tot_tot;
	}
	public void setTot_tot(int tot_tot) {
		this.tot_tot = tot_tot;
	}
	public int getM_tot() {
		return m_tot;
	}
	public void setM_tot(int m_tot) {
		this.m_tot = m_tot;
	}
	public int getW_tot() {
		return w_tot;
	}
	public void setW_tot(int w_tot) {
		this.w_tot = w_tot;
	}
	public int getM_children() {
		return m_children;
	}
	public void setM_children(int m_children) {
		this.m_children = m_children;
	}
	public int getM_adult() {
		return m_adult;
	}
	public void setM_adult(int m_adult) {
		this.m_adult = m_adult;
	}
	public int getM_elder() {
		return m_elder;
	}
	public void setM_elder(int m_elder) {
		this.m_elder = m_elder;
	}
	public int getW_children() {
		return w_children;
	}
	public void setW_children(int w_children) {
		this.w_children = w_children;
	}
	public int getW_adult() {
		return w_adult;
	}
	public void setW_adult(int w_adult) {
		this.w_adult = w_adult;
	}
	public int getW_elder() {
		return w_elder;
	}
	public void setW_elder(int w_elder) {
		this.w_elder = w_elder;
	}
	public int getTotal_sum() {
		return total_sum;
	}
	public void setTotal_sum(int total_sum) {
		this.total_sum = total_sum;
	}
	@Override
	public String toString() {
		return "People_VO [code=" + code + ", city_code=" + city_code + ", si_code=" + si_code + ", dong_code="
				+ dong_code + ", tot_tot=" + tot_tot + ", m_tot=" + m_tot + ", w_tot=" + w_tot + ", m_children="
				+ m_children + ", m_adult=" + m_adult + ", m_elder=" + m_elder + ", w_children=" + w_children
				+ ", w_adult=" + w_adult + ", w_elder=" + w_elder + ", total_sum=" + total_sum + "]";
	}
	
	
}
