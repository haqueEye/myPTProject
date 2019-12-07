package com.pftc.seleniumEasy.PageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
public class PlaceOrderTeaPag extends Base{
	//Select cardType = new Select(driver.findElement(By.id("card_type")));
	
	
	public PlaceOrderTeaPag () {
		PageFactory.initElements(driver, this);
	}

	@FindBy(linkText = "Menu")
	public WebElement menuButton;
	@FindBy(xpath="//*[@id=\"wsb-button-00000000-0000-0000-0000-000451955160\"]/span")
	public WebElement checkOutButton;
	@FindBy(id="email")
	public WebElement emailAddress;
	@FindBy(id="name")
	public WebElement customerName;
	@FindBy(id="address")
	public WebElement customerAddress;
	@FindBy(id="card_type")
	public WebElement cardTypeDropDown;
	@FindBy(id="card_number")
	public WebElement cardNumber;
	@FindBy(id="cardholder_name")
	public WebElement cardholderName;
	@FindBy(id="verification_code")
	public WebElement verificationCode;
	@FindBy(xpath="//*[@id=\"wsb-element-00000000-0000-0000-0000-000452010925\"]/div/div/form/div/button")
	public WebElement placeOrder;
	
	public void clikMenuButton() {
		menuButton.click();
		
	}
	
	public void checkOutButton() {
		checkOutButton.click();
	}
	
	public void enterEmailAddress() {
		emailAddress.sendKeys("abc@gmail.com");;
	}
	
	public void enterCustomerName() {
		customerName.sendKeys("Dala Khan");;
	}
	
	public void enterCardType() {
		Select cardTypeName=new Select(driver.findElement(By.id("card_type")));
		cardTypeName.selectByVisibleText("Visa");
	}
	public void enterCardNumber() {
		customerAddress.sendKeys("111 Mass Ave");;
	}
	
	public void enterCustomerAddress() {
		cardNumber.sendKeys("411111111111111111111");;
	}
	
	public void enterCardholderName() {
		cardholderName.sendKeys("Mr. Food Smith");;
	}
	
	public void enterVerificationCode() {
		verificationCode.sendKeys("123");;
	}
	
	public void placeOrderButton() {
		placeOrder.click();
	}
}
