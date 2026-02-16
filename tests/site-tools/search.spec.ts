import {test, expect} from '@playwright/test'

test ('Search feature @header @smoke', async ({page}) => {

await page.goto('https://dev.3snet.info/eventswidget/')

await page.getByRole('button', {name: /Поиск|Search/i}).click()
await page.locator('input#search-input').fill('Обзоры',{timeout:5000})
await page.locator('button.search-submit').click({timeout:5000})

await expect(page.getByRole('heading',{name:'Поиск по : "Обзоры"'})).toBeVisible({timeout:5000})


})