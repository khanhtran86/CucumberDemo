$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/CucumberTest/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Show Tooltip message for invalid value provided from User",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am staying at Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_am_staying_at_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I give the invalid username and blank value for password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_give_the_invalid_username_and_blank_value_for_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_do_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the error tooltip \"Hãy nhập E-mail ở định dạng: user@email.com\" placed on UserName Field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_see_the_error_tooltip_placed_on_UserName_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Mật khẩu chỉ nhận giá trị chữ và số\" is placed on Password field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.is_placed_on_Password_field(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...ận giá trị chữ và số[ 1]\u003e but was:\u003c...ận giá trị chữ và số[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefinitions.LoginSteps.is_placed_on_Password_field(LoginSteps.java:67)\r\n\tat ✽.\"Mật khẩu chỉ nhận giá trị chữ và số\" is placed on Password field(src/test/resources/CucumberTest/Login.feature:8)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Show error message for wrong password value provided from user",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am staying at Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_am_staying_at_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I give the valid username and wrong password value",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_give_the_valid_username_and_wrong_password_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_do_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the notification message \"Tên đăng nhập hoặc Mật khẩu không đúng.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_see_the_notification_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});