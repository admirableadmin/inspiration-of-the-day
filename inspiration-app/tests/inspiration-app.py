from selenium import webdriver
from selenium.webdriver.common.by import By
from percy import percy_snapshot

# launch browser
browser = webdriver.Firefox()

# go to the app
browser.get('http://localhost:3000')
browser.implicitly_wait(10)

# snapshot start state
percy_snapshot(browser, 'Start State')

# snapshot next state
toggle = browser.find_element(By.CLASS_NAME, 'button.next')
toggle.click()
percy_snapshot(browser, 'Next State')

# clean up
browser.quit()
