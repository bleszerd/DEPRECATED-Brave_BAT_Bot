import puppeteer from 'puppeteer'
import path from 'path'
import { PopulateInstance } from '../Typescript/types'

class Instances {
    private INSTANCES: [string] = ['']

    public populateInstances({ autoPopulate, workers }: PopulateInstance) {
        if (autoPopulate && workers) {
            let endIndex = workers

            this.INSTANCES.pop()

            for (let i = 0; i < endIndex; i++) {
                this.INSTANCES.push(`bbb${i}`)
            }
        }
    }

    public async initAllInstances() {
        for (let instance of this.INSTANCES) {
            this.startOneInstance(instance)
        }
    }

    private async reloadPage(page: puppeteer.Page) {
        await page.reload({
            waitUntil: ['domcontentloaded']
        })
    }

    private async startOneInstance(instanceId: string) {
        try {

            const browser = await puppeteer.launch({
                executablePath: path.resolve('src', 'Browser', 'brave_browser', 'brave'),
                headless: false,
                args: [
                    `--user-data-dir=${path.resolve('src', 'InstancesData')}/bbb_profile-${instanceId}/ `,
                ],
            })


            const page = await browser.newPage()
            await page.goto("chrome://newtab")

            await page.waitForTimeout(1000)

            setInterval(() => {
                this.reloadPage(page)
            }, 60000)

        } catch (err) {
            console.log(err);
        }
    }
}

export default new Instances()