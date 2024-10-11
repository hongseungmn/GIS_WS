package egovframework.example.file;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ZipFileController {
	Logger Logger = LoggerFactory.getLogger(this.getClass());
	
	@RequestMapping(value="/getUploadFormZipFile.do", method = RequestMethod.GET)
	public void getUploadFormZipFile(@RequestParam(value = "folderName") String folderName,HttpServletResponse response) {
		try {
			byte[] bytes = ZipFileUtil.zipFile(Paths.get(folderName).toFile());
			response.setContentType("application/x-zip-compressed");
			response.setHeader("Content-Disposition", "attachment; filename=".concat(UUID.randomUUID().toString()).concat(".zip"));
			response.getOutputStream().write(bytes);
			response.getOutputStream().flush();
			response.getOutputStream().close();
		} catch (IOException e) {
			throw new RuntimeException("Failed to download zip file", e);
		}
	}
}
