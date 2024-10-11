package egovframework.example.file;

import java.util.List;

public class ZipFileDto {
	private String zipFileName;
	private List<String> sourceFiles;
	
	
	public String getZipFileName() {
		return zipFileName;
	}
	public void setZipFileName(String zipFileName) {
		this.zipFileName = zipFileName;
	}
	public List<String> getSourceFiles() {
		return sourceFiles;
	}
	public void setSourceFiles(List<String> sourceFile) {
		this.sourceFiles = sourceFile;
	}
}
