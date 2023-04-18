import {readFile, writeFile} from 'fs/promises'

let template = await readFile(new URL('template.html', import.meta.url), 'utf-8')
console.log(import.meta.url, 'meta')

const data = {
    title: 'Learning NodeJS',
    body: 'This is the HTML'
}

for (const [k,v] of Object.entries(data)) {
    template = template.replace(`{${k}}`, v)
}
    console.log(template, 'buffer')


await writeFile(new URL('index.html', import.meta.url), template)