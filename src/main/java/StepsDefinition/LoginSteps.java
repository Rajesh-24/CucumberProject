package StepsDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import java.util.List;
import java.util.Map;

public class LoginSteps 
{
	WebDriver driver= null;
	
	@Given("^User aready on login page$")
	public void user_aready_on_login_page()
	{
		driver = new FirefoxDriver();
		driver.get("http://localhost/website");
	}
	
	@When("^Title of login page is AdminLTE 2 | Log in$")
	public void title_of_login_page_is_AdminLTE_2_Log_in()
	{
		String title =driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("AdminLTE 2 | Log in", title);
	}
	
	/*@Then("^User enter \"(.*?)\" and \"(.*?)\"$")
	public void user_enter_and(String username, String password)
	{
		driver.findElement(By.id("email")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);
	}*/
	
	@Then("^User enter username and password$")
	public void user_enter_username_and_password(DataTable credentials) 
	{
		for(Map<String, String> data :credentials.asMaps(String.class, String.class))
		{
		driver.findElement(By.id("email")).sendKeys(data.get("username"));
		driver.findElement(By.id("password")).sendKeys(data.get("password"));	    
		}
	}
	
	@Then("^User clicks on login button$")
	public void user_clicks_on_login_button()
	{
	    driver.findElement(By.xpath("//button[text()='Sign In']")).click();
	}

	@Then("^User is on Dashboard page$")
	public void user_is_on_Dashboard_page() 
	{
	    String dashboardUrl =driver.getCurrentUrl();
	    Assert.assertEquals("http://localhost/website/pages/examples/dashboard.html", dashboardUrl);
	}
	
	@Then("^Close the browser$")
	public void close_the_browser() 
	{
	    driver.quit();
	}
	
}
