package TestsRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
				features="E:\\Cucumber Project\\AdminLTE\\src\\main\\java\\Features", //path of feature file
				glue={"StepsDefinition"},// Attach step definition class
				format={"pretty", "html:test-output", "json:json-output/cucumber.json","junit:junit-xml/cucumber.xml"}, //To genearte different types of reports
				dryRun=false, // To check wheather all steps definitions are implemented without test execution
				monochrome=true, //To dispaly console output in proper readable format
				strict=true, // To check wheather all steps definitions are implemented with test execution
				tags={"@Smoke , @Regression"}
				)
public class LoginTestRunner 
{

}
 