from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
import pytest

@pytest.fixture
def browser():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()

def test_email_validation(browser):
    browser.get("http://localhost:3000/profile")
    invalid_emails = ["user@", "user@company", "user company.com"]
    
    for email in invalid_emails:
        email_field = browser.find_element(By.ID, "email")
        save_button = browser.find_element(By.ID, "save-btn")
        
        email_field.clear()
        email_field.send_keys(email)
        save_button.click()
        
        # Assert error message
        error = browser.find_element(By.CSS_SELECTOR, ".error-message")
        assert "valid email" in error.text, f"Validation failed for: {email}"
        
        # Assert no save
        email_field = browser.find_element(By.ID, "email")
        assert email_field.get_attribute("value") != email, f"Invalid email saved: {email}"