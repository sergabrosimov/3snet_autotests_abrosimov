import {test, expect} from '@playwright/test'

test ('main feature. preview generation @main @smoke', async ({page}) => {
    
    await page.goto('https://dev.3snet.info/eventswidget/')
    await page.getByRole('button', {name: /Сгенерировать превью|Generate preview/i}).click()
    
    await expect(page.locator('textarea#code.input')).not.toBeEmpty({timeout:10000})
    const locatorIFrame = 'iframe[id="3snet-frame"]'
    await expect (page.frameLocator(locatorIFrame).locator('div.events_wrap_table')).toBeVisible({timeout:30000})

    

})
