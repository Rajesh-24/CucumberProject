package StepsDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class AddUserSteps
{
	WebDriver driver;
	
	@Given("^Open browser and Enter URL$")
	public void open_browser_and_Enter_URL() 
	{
		driver = new FirefoxDriver();	
		driver.get("http://localhost/website/");
	}

	@When("^Enter username \"(.*?)\" and password \"(.*?)\"$")
	public void enter_username_and_password(String username, String password) 
	{
		driver.findElement(By.id("email")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);	    
	}

	@When("^Click on login button$")
	public void click_on_login_button() 
	{
	    driver.findElement(By.xpath("//button[text()='Sign In']")).click();
	}

	@Then("^Dashboard page should be display$")
	public void dashboard_page_should_be_display() 
	{
	    String dashboardHeading =driver.findElement(By.xpath("//h1[contains(text(),'Dashboard')]")).getText();
	    Assert.assertEquals("Dashboard Control panel", dashboardHeading);
	}

	@Then("^Click on Users$")
	public void click_on_Users() 
	{
	   driver.findElement(By.xpath("//a[@href='users.html']")).click();
	}

	@Then("^Click on Add Users$")
	public void click_on_Add_Users() 
	{
	    driver.findElement(By.xpath("//button[text()='Add User']")).click();
	}

	/*@Then("^Fill User data rajesh@gmail\\.com and (\\d+) and rajesh@gmail\\.com and Male  and HP and (\\d+)$")
	public void fill_User_data_rajesh_gmail_com_and_and_rajesh_gmail_com_and_Male_and_HP_and(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}*/
	
	@Then("^Fill User data \"(.*?)\" and \"(.*?)\" and \"(.*?)\" and \"(.*?)\"  and \"(.*?)\" and \"(.*?)\"$")
	public void fillUserData(String username, String mobile, String email, String gender, String state, String password)
	{
		driver.findElement(By.id("username")).sendKeys(username);
		driver.findElement(By.id("mobile")).sendKeys(mobile);
		driver.findElement(By.id("email")).sendKeys(email);
		
		if (gender.equalsIgnoreCase("Male"))
		{
			driver.findElement(By.id("Male")).click();			
		}
		else if (gender.equalsIgnoreCase("Female"))
		{
			driver.findElement(By.id("Female")).click();			
		}
		WebElement element = driver.findElement(By.xpath("//select[@class='form-control']"));
		Select select = new Select(element);
		select.selectByVisibleText(state);
		
		driver.findElement(By.id("password")).sendKeys(password);
	}

	@Then("^Click on Submit$")
	public void click_on_Submit() 
	{
	    driver.findElement(By.xpath("//button[text()='Submit']")).click();
	}

	@Then("^User should be added$")
	public void user_should_be_added() 
	{
	    String alertText =driver.switchTo().alert().getText();
	    Assert.assertEquals("User Added Successfully. You can not see added user.", alertText);
	}
	
	@Then("^Close the Browser$")
	public void close_the_Browser() 
	{
	    driver.quit();
	}
		
}
