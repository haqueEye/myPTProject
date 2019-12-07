package com.pftc.seleniumEasy.StepDefinition;

import com.pftc.seleniumEasy.PageObject.Base;
import com.pftc.seleniumEasy.PageObject.PlaceOrderTeaPag;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PlaceOrderTea extends Base {
	
	
	PlaceOrderTeaPag placeOrderTeaPage;
	
@Given("^User navigate to practiceselenium home page$")
public void user_navigate_to_practiceselenium_home_page() throws Throwable {
	String URL = prop.getProperty("examApp");
	driver.get(URL);
	Thread.sleep(5000);
	placeOrderTeaPage=new PlaceOrderTeaPag();
	
}

@When("^User click on Menu tab and verify the page loaded$")
public void user_click_on_Menu_tab_and_verify_the_page_loaded() throws Throwable {
	placeOrderTeaPage.clikMenuButton();
	
	
}

@Then("^User click on Checkout button and verify the palce order palce loaded$")
public void user_click_on_Checkout_button_and_verify_the_palce_order_palce_loaded() throws Throwable {
	placeOrderTeaPage.checkOutButton();
}

@Then("^User fillup all information in the order place page$")
public void user_fillup_all_information_in_the_order_place_page() throws Throwable {
	placeOrderTeaPage.enterEmailAddress();
	placeOrderTeaPage.enterCustomerName();
	placeOrderTeaPage.enterCustomerAddress();
	placeOrderTeaPage.enterCardType();
	placeOrderTeaPage.enterCardNumber();
	placeOrderTeaPage.enterCardholderName();
	placeOrderTeaPage.enterVerificationCode();
	
	Thread.sleep(5000);
}

@Then("^User click on Place order button$")
public void user_click_on_Place_order_button() throws Throwable {
	placeOrderTeaPage.placeOrderButton();
}
	
	

}
