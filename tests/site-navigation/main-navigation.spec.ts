import {test, expect} from '@playwright/test'

test ('Main logo link on top @header @smoke', async ({page}) => {

    await page.goto('https://dev.3snet.info/eventswidget/')

    await page.locator('a:has(svg[viewBox="0 0 84.5947 35.1562"])').click()
 
    await expect(page).toHaveURL((url)=>{
        return url.toString() === 'https://dev.3snet.info/en/' ||  url.toString() === 'https://dev.3snet.info/' },{timeout : 10000})

})

test ('Promocodes link @header @critical-path', async ({page}) => {

    await page.goto('https://dev.3snet.info/eventswidget/')

    await page.getByRole('link', {name: /ПРОМОКОДЫ/i }).click()
    await expect(page).toHaveURL((url)=>{
        return url.toString() === 'https://dev.3snet.info/en/promocodes/' ||  url.toString() === 'https://dev.3snet.info/promocodes/' },{timeout:10000})

})

test ('News link @header @critical-path', async ({page}) => {

    await page.goto('https://dev.3snet.info/eventswidget/')

    await page.getByRole('link', {name: /НОВОСТИ/i }).click()
    await expect(page).toHaveURL((url)=>{
        return url.toString() === 'https://dev.3snet.info/en/news/' ||  url.toString() === 'https://dev.3snet.info/news/' },{timeout:10000})

})

test ('Market review link @header @critical-path', async ({page}) => {

    await page.goto('https://dev.3snet.info/eventswidget/')

    await page.getByRole('link', {name: /ОБЗОРЫ РЫНКОВ/i }).click()
    await expect(page).toHaveURL((url)=>{
        return url.toString() === 'https://dev.3snet.info/en/reviews/' ||  url.toString() === 'https://dev.3snet.info/reviews/' },{timeout:30000})

})

test ('Sports calendar link @header @critical-path', async ({page}) => {

    await page.goto('https://dev.3snet.info/eventswidget/')

    await page.getByRole('link', {name: /СПОРТ КАЛЕНДАРЬ/i }).click()
    await expect(page).toHaveURL((url)=>{
        return url.toString() === 'https://dev.3snet.info/en/sport-events-schedule/' ||  url.toString() === 'https://dev.3snet.info/sport-events-schedule/' },{timeout:30000})

})

test ('Knowledge base link @header @critical-path', async ({page}) => {

    await page.goto('https://dev.3snet.info/eventswidget/')

    await page.getByRole('link', {name: /БАЗА ЗНАНИЙ/i }).click()
    await expect(page).toHaveURL((url)=>{
        return url.toString() === 'https://dev.3snet.info/en/glossary/' ||  url.toString() === 'https://dev.3snet.info/glossary/' },{timeout:10000})

})