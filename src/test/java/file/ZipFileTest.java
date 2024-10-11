package file;

import static org.junit.Assert.assertThat;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

//import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.hamcrest.CoreMatchers;

import org.junit.Before;
import org.junit.Test;

import org.mockito.InjectMocks;

import org.mockito.MockitoAnnotations;
import org.springframework.test.web.servlet.MockMvc;

import org.springframework.test.web.servlet.setup.MockMvcBuilders;




import egovframework.example.file.ZipFileController;

import egovframework.example.file.ZipFileUtil;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.CoreMatchers.*;


public class ZipFileTest {
	private final static String ABSOLUTEPATH_ZIPFILE = "C:\\GIS_WS\\eGovFrameDev-3.8.0-64bit\\workspace\\TempProject\\src\\";
	
	private MockMvc controllerMockMvc;
	
	/* [@InjectMocks]
	 * 실제 객체를 생성하고, 이 객체가 의존하는 필드나 생성자 매개변수에 대해 자동으로 @Mock으로 생성된 가짜 객체들을 주입하는 역할.
	 * 즉, 이 객체가 의존하는 다른 객체들을 Mockito가 생성한 모의 객체로 주입해준다.
	 */
	@InjectMocks
	private ZipFileUtil zipFileUtil;
	
	/* [@Mock]
	 * 가짜 객체(Mock Object)를 생성하는데 사용된다. 이 가짜 객체는 실제 객체의 동작을 흉내 내면서도 내부 로직은 실행 X,
	 * 미리 정의된 동작이나 응답을 반환한다
	 */
//	@Mock
//	private ZipFileDto zipFileDto;
	
//	@Mock
//	private HttpServletResponse response;
	
	
	
	@Before
	public void setUp() throws Exception {
		MockitoAnnotations.openMocks(this);
		this.controllerMockMvc = MockMvcBuilders.standaloneSetup(new ZipFileController()).build();
		
	}
	
	@Test
	public void givenUploadFormRequest_whenFetching_thenReturnUploadFormZipFile() throws Exception {
		//given
		
		// when & then 
		this.controllerMockMvc.perform(get("/getUploadFormZipFile.do")
				.param("folderName", ABSOLUTEPATH_ZIPFILE + "main\\resources\\static\\upload_template"))
				.andDo(print())
				.andExpect(status().isOk());
	}
	
	@Test
	public void givenZipFileDto_when_thenReturnZipFileResponse() throws IOException {
		
		//given
		final Path zipFilePath = Paths.get( ABSOLUTEPATH_ZIPFILE + "main\\resources\\static\\upload_template");
		final Path testZipPath = Paths.get( ABSOLUTEPATH_ZIPFILE + "test\\resources\\zipFile.zip");
		
		Files.deleteIfExists(testZipPath);
		
		//when
		byte[] bytes = ZipFileUtil.zipFile(zipFilePath.toFile());
		Files.write(testZipPath, bytes);
		
		//then
		assertThat(Files.exists(testZipPath), is(true));
	}
	
	@Test
	public void givenZipFileNoIMG_when_thenCheck() throws IOException {
		
		//given
		Path dstPath = Paths.get( ABSOLUTEPATH_ZIPFILE + "test\\resources\\unZipTest\\");
		//FileUtils.deleteDirectory(dstPath.toFile());
		final Path testZipPath = Paths.get( ABSOLUTEPATH_ZIPFILE + "test\\resources\\unZipTest.zip");
		
		//when
		ZipFileUtil.unZipFile(dstPath, testZipPath, path -> {
			return path.resolveSibling(path.getFileName().toString());
		});
		
		//then
		assertThat(Files.exists(dstPath), is(true));//디렉토리 존재 여부 확인

		//1. 사진이 없는 경우
		List<String> fileNames = Files //파일명 추출
				.walk(dstPath) //디렉토리 내의 모든 파일 가져옴 != list
				.filter(Files::isRegularFile) //파일만 필터링
				.map(path -> path.getFileName().toString())
				.collect(Collectors.toList());
		List<String> matchFileNames = Arrays.asList("Batch_Upload_List.xlsx", "설명서.txt" );
		System.out.println("fileNames : " + fileNames);
		assertThat("압축이 올바르게 해제되지 않았습니다.", fileNames,  CoreMatchers.hasItems(matchFileNames.toArray(new String[0])));
		
	}
	
	
	@Test
	public void givenZipFileYesIMG_when_thenCheck() throws IOException {
		//given
		Path dstPath = Paths.get( ABSOLUTEPATH_ZIPFILE + "test\\resources\\unZipTest\\");
		//FileUtils.deleteDirectory(dstPath.toFile());
		final Path testPath = Paths.get( ABSOLUTEPATH_ZIPFILE + "test\\resources\\unZipTest.zip");
		
		//when
		ZipFileUtil.unZipFile(dstPath, testPath, path -> {
			return path.resolveSibling(path.getFileName().toString());
		});
		
		//then
		assertThat(Files.exists(dstPath), is(true));
	}

}
