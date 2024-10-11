package egovframework.example.file;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Objects;
import java.util.function.Function;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import java.util.zip.ZipOutputStream;

import javax.servlet.http.HttpServletResponse;

import org.checkerframework.checker.nullness.qual.Nullable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ZipFileUtil {
	
	static Logger Logger = LoggerFactory.getLogger("ZipFileUtil");
	final static int DEFAULT_BUFFER_SIZE = 2048;
	
	public static byte[] zipFile(File sourceFile) {
		try (ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream()) { //파일 내부 byte 작성을 위한 스트림 생성
			try (ZipOutputStream zipOutputStream = new ZipOutputStream(byteArrayOutputStream)) { //zip 파일을 작성을 위한 스트림 생성, 위의 byte 스트림을 꽂는다
				addFileToZip(sourceFile, zipOutputStream, "");
			}
			return byteArrayOutputStream.toByteArray();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public static void addFileToZip(File parentFile, ZipOutputStream zipOutputStream, String parentFolderName) {
		String currentPath = hasText(parentFolderName) ? parentFolderName + "/" + parentFile.getName() : parentFile.getName();
		if(parentFile.isDirectory()) {
			try {				
				zipOutputStream.putNextEntry(new ZipEntry(currentPath + "/"));
				zipOutputStream.closeEntry();
				File[] files = parentFile.listFiles();
	            if (files != null) {
	                for (File f : files) {
	                	System.out.println("currentPath : " + currentPath);
	                    addFileToZip(f, zipOutputStream, currentPath);
	                }
	            }
			} catch(IOException e) {
				Logger.error("Error While Zipping directory: {}, Exception: {}", parentFile, e);
			}
		} else {
			byte[] buffer = new byte[DEFAULT_BUFFER_SIZE];
			try (FileInputStream fileInputStream = new FileInputStream(parentFile)) {
				zipOutputStream.putNextEntry(new ZipEntry(currentPath));
				
				int length;
				while((length = fileInputStream.read(buffer)) > 0) {
					zipOutputStream.write(buffer, 0, length);
				}
				
			} catch (FileNotFoundException e) {
				Logger.error("File Not Found: {}, Exception: {}", parentFile, e.getMessage());
				throw new RuntimeException(e);
			} catch (IOException e) {
				Logger.error("Error While Zipping file: {}, Exception: {}", parentFile, e.getMessage());
				throw new RuntimeException(e);
			}
		}
	}
	
	public static boolean hasText(String text) {
	    return text != null && !text.trim().isEmpty();
	}
	
	public static void unZipFile(Path dstPath, Path testZipPath, @Nullable Function<Path, Path> renameDuplicatedFilename) throws IOException {
		try (InputStream inputStream = Files.newInputStream(testZipPath)) {
			try (ZipInputStream zipInputStream = new ZipInputStream(inputStream, Charset.forName("EUC-KR"))) {
				ZipEntry entry;
				byte[] buffer = new byte[DEFAULT_BUFFER_SIZE];
				
				while((entry = zipInputStream.getNextEntry()) != null) {
					final String entryName = entry.getName();
					if(entryName.startsWith("__MACOSX")) continue;
					if(entry.isDirectory()) {
						Logger.info("entry.isDirectory() : {}", entry);
						continue;
					}
					File entryFile;
					if(renameDuplicatedFilename == null) {
						entryFile = new File(dstPath.toString(), entryName);
					} else {
						Path path = Paths.get(dstPath.toString(), entryName);
						entryFile = renameDuplicatedFilename.apply(path).toFile();
					}
					Files.createDirectories(entryFile.getParentFile().toPath());
					
					try (BufferedOutputStream outputStream = new BufferedOutputStream(new FileOutputStream(entryFile))) {
						int bytesRead;
						while((bytesRead = zipInputStream.read(buffer)) != -1) {
							outputStream.write(buffer, 0, bytesRead);
						}
					}
					zipInputStream.closeEntry();
				}
			}
		}
	}
}
