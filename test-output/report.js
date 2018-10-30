$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Admin LTE login feature",
  "description": "",
  "id": "admin-lte-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validate login with valid Username and Valid Password",
  "description": "",
  "id": "admin-lte-login-feature;validate-login-with-valid-username-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User aready on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of login page is AdminLTE 2 | Log in",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User is on Dashboard page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_aready_on_login_page()"
});
formatter.result({
  "duration": 14864205999,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.title_of_login_page_is_AdminLTE_2_Log_in()"
});
formatter.result({
  "duration": 13756962,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 437022324,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4366741431,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_on_Dashboard_page()"
});
formatter.result({
  "duration": 8258041,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "duration": 2835696497,
  "error_message": "java.lang.NoClassDefFoundError: com/sun/jna/platform/win32/Kernel32\r\n\tat java.lang.ClassLoader.defineClass1(Native Method)\r\n\tat java.lang.ClassLoader.defineClass(Unknown Source)\r\n\tat java.security.SecureClassLoader.defineClass(Unknown Source)\r\n\tat java.net.URLClassLoader.defineClass(Unknown Source)\r\n\tat java.net.URLClassLoader.access$100(Unknown Source)\r\n\tat java.net.URLClassLoader$1.run(Unknown Source)\r\n\tat java.net.URLClassLoader$1.run(Unknown Source)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat java.net.URLClassLoader.findClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat org.openqa.selenium.os.ProcessUtils.getProcessId(ProcessUtils.java:184)\r\n\tat org.openqa.selenium.os.ProcessUtils.killWinProcess(ProcessUtils.java:128)\r\n\tat org.openqa.selenium.os.ProcessUtils.killProcess(ProcessUtils.java:81)\r\n\tat org.openqa.selenium.os.UnixProcess$SeleniumWatchDog.destroyHarder(UnixProcess.java:265)\r\n\tat org.openqa.selenium.os.UnixProcess$SeleniumWatchDog.access$200(UnixProcess.java:219)\r\n\tat org.openqa.selenium.os.UnixProcess.destroy(UnixProcess.java:127)\r\n\tat org.openqa.selenium.os.CommandLine.destroy(CommandLine.java:153)\r\n\tat org.openqa.selenium.remote.service.DriverService.stop(DriverService.java:220)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:94)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:542)\r\n\tat StepsDefinition.LoginSteps.close_the_browser(LoginSteps.java:67)\r\n\tat ✽.Then Close the browser(login.feature:13)\r\nCaused by: java.lang.ClassNotFoundException: com.sun.jna.platform.win32.Kernel32\r\n\tat java.net.URLClassLoader.findClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat java.lang.ClassLoader.defineClass1(Native Method)\r\n\tat java.lang.ClassLoader.defineClass(Unknown Source)\r\n\tat java.security.SecureClassLoader.defineClass(Unknown Source)\r\n\tat java.net.URLClassLoader.defineClass(Unknown Source)\r\n\tat java.net.URLClassLoader.access$100(Unknown Source)\r\n\tat java.net.URLClassLoader$1.run(Unknown Source)\r\n\tat java.net.URLClassLoader$1.run(Unknown Source)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat java.net.URLClassLoader.findClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat org.openqa.selenium.os.ProcessUtils.getProcessId(ProcessUtils.java:184)\r\n\tat org.openqa.selenium.os.ProcessUtils.killWinProcess(ProcessUtils.java:128)\r\n\tat org.openqa.selenium.os.ProcessUtils.killProcess(ProcessUtils.java:81)\r\n\tat org.openqa.selenium.os.UnixProcess$SeleniumWatchDog.destroyHarder(UnixProcess.java:265)\r\n\tat org.openqa.selenium.os.UnixProcess$SeleniumWatchDog.access$200(UnixProcess.java:219)\r\n\tat org.openqa.selenium.os.UnixProcess.destroy(UnixProcess.java:127)\r\n\tat org.openqa.selenium.os.CommandLine.destroy(CommandLine.java:153)\r\n\tat org.openqa.selenium.remote.service.DriverService.stop(DriverService.java:220)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:94)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:542)\r\n\tat StepsDefinition.LoginSteps.close_the_browser(LoginSteps.java:67)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "Validate login with valid Username and Valid Password",
  "description": "",
  "id": "admin-lte-login-feature;validate-login-with-valid-username-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User aready on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Title of login page is AdminLTE 2 | Log in",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enter username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21
    },
    {
      "cells": [
        "rajesh@gmail.com",
        "125478"
      ],
      "line": 22
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User is on Dashboard page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_aready_on_login_page()"
});
formatter.result({
  "duration": 11182307820,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.title_of_login_page_is_AdminLTE_2_Log_in()"
});
formatter.result({
  "duration": 16310205,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 252649088,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 401939233,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_on_Dashboard_page()"
});
formatter.result({
  "duration": 16141156,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c...//localhost/website/[pages/examples/dashboard.html]\u003e but was:\u003c...//localhost/website/[]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat StepsDefinition.LoginSteps.user_is_on_Dashboard_page(LoginSteps.java:61)\r\n\tat ✽.And User is on Dashboard page(login.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});