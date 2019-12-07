$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("checkBoxDemo.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I should be able to verify the  CheckBox Demo field functionalities in Checkbox Demo Page",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-verify-the--checkbox-demo-field-functionalities-in-checkbox-demo-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5396750200,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "#Author:mohdmhaque@gmail.com"
    },
    {
      "line": 3,
      "value": "#Date:09/16/2019"
    }
  ],
  "line": 5,
  "name": "Verify Single and and Multiple Checkbox Field functionality",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-verify-the--checkbox-demo-field-functionalities-in-checkbox-demo-page;verify-single-and-and-multiple-checkbox-field-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User Navigate to SeleniumEasy Test Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Click on Input Forms hyperlink tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Click on Checkbox Demo linkText tab",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User select Single Checkbox Demo radio button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on the Check All button in Multiple Checkbox Demo section",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User validate the Check All message changed to Uncheck All button",
  "keyword": "Then "
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Navigate_to_SeleniumEasy_Test_Home_Page()"
});
formatter.result({
  "duration": 5595533400,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Click_on_Input_Forms_hyperlink_tab()"
});
formatter.result({
  "duration": 90550800,
  "status": "passed"
});
formatter.match({
  "location": "CheckBoxDemoStepDef.user_Click_on_Checkbox_Demo_linkText_tab()"
});
formatter.result({
  "duration": 1122000,
  "error_message": "java.lang.NullPointerException\r\n\tat com.pftc.seleniumEasy.StepDefinition.CheckBoxDemoStepDef.user_Click_on_Checkbox_Demo_linkText_tab(CheckBoxDemoStepDef.java:14)\r\n\tat ✽.Then User Click on Checkbox Demo linkText tab(checkBoxDemo.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CheckBoxDemoStepDef.user_select_Single_Checkbox_Demo_radio_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckBoxDemoStepDef.user_click_on_the_Check_All_button_in_Multiple_Checkbox_Demo_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckBoxDemoStepDef.user_validate_the_Check_All_message_changed_to_Uncheck_All_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://www.seleniumeasy.com/test/");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 5706912600,
  "status": "passed"
});
formatter.uri("simpleFormDemo.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I should be able to verify the  Single and Two Input field functionalities in Simple Form Demo Page",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-verify-the--single-and-two-input-field-functionalities-in-simple-form-demo-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3388811200,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Author:mohdmhaque@gmail.com"
    },
    {
      "line": 4,
      "value": "#Date:09/16/2019"
    }
  ],
  "line": 6,
  "name": "Verify Single and Double Input Field Functionalities",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-verify-the--single-and-two-input-field-functionalities-in-simple-form-demo-page;verify-single-and-double-input-field-functionalities",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User Navigate to SeleniumEasy Test Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Click on Input Forms hyperlink tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User Click on  Simple form Demo Hyperlink Test",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Enter a message in the Enter message text box",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Click on Show Message Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User Validate the Message is been displayed in the Your Message section",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User Enter a integer value in the Enter a text box",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User Enter 2nd integer value in the Enter b text box",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Click on the Get Total button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User Validate the Total of a and b being displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Navigate_to_SeleniumEasy_Test_Home_Page()"
});
formatter.result({
  "duration": 8461388600,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Click_on_Input_Forms_hyperlink_tab()"
});
formatter.result({
  "duration": 157321700,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Click_on_Simple_form_Demo_Hyperlink_Test()"
});
formatter.result({
  "duration": 800947900,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Enter_a_message_in_the_Enter_message_text_box()"
});
formatter.result({
  "duration": 254355300,
  "status": "passed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Click_on_Show_Message_Button()"
});
formatter.result({
  "duration": 126209800,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element is not clickable at point (342, 637)\n  (Session info: chrome\u003d78.0.3904.108)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GS-0232972-MHAQ\u0027, ip: \u0027192.168.14.160\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: C:\\WINDOWS\\TEMP\\scoped_dir2...}, goog:chromeOptions: {debuggerAddress: localhost:49553}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: dbd9ae4ef5223b25b97473ff0085a276\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat com.pftc.seleniumEasy.PageObject.SimpleFormDemoPage.showMessageButton(SimpleFormDemoPage.java:53)\r\n\tat com.pftc.seleniumEasy.StepDefinition.SimpleFormDemoStepDef.user_Click_on_Show_Message_Button(SimpleFormDemoStepDef.java:80)\r\n\tat ✽.And User Click on Show Message Button(simpleFormDemo.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Validate_the_Message_is_been_displayed_in_the_Your_Message_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Enter_a_integer_value_in_the_Enter_a_text_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    }
  ],
  "location": "SimpleFormDemoStepDef.user_Enter_nd_integer_value_in_the_Enter_b_text_box(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Click_on_the_Get_Total_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SimpleFormDemoStepDef.user_Validate_the_Total_of_a_and_b_being_displayed_correctly()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://www.seleniumeasy.com/test/basic-first-form-demo.html");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 5516567500,
  "status": "passed"
});
});