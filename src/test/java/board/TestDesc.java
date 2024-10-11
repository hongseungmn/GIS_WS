package board;

import org.junit.Ignore;
import java.lang.annotation.*;

@Ignore //test 폴더 전체를 실행할 때 테스트할 대상이 아니므로 @Ignore 붙임
@Target(ElementType.METHOD) //@Target으로 method에 적용하는 annotation으로 설정
@Retention(RetentionPolicy.SOURCE) //@Retention으로 컴파일 단계에서 사용되지 않도록 설정(즉, 실행되지 않는 구문이 되므로 주석처럼 사용 가능)
public @interface TestDesc { //@interface 타입으로 해당 객체가 @annotaion임을 설정
	String value();
}
