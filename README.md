# Inspiration of the day

![screenshot](res/screen_demo.png)

Shows a predefined inspiration message of the day.

## Requirements

No installation of additional packages is required. It will just work out of
the box.

The JavaScript-Frameworks [Vue.js](https://vuejs.org/) and [Vue Router](https://router.vuejs.org/)
will be included at runtime.

The following packages can be installed optionally:

	$ sudo apt install minify

## Deployment

In this repo, you can simply run `make` to prepare the HTML files for deployment:

	$ make

Now, you just need to put the `deploy` directory on a web server.

## Writing quotes

Just edit `src/quotes.js` and write in your quotes.

With `LibreOffice Calc` it is a little bit easier:

1. create a list of all days

day | author | message
-- | -- | --
1-jan | demo | Hello Vue.js!
2-feb | |
15-aug | |
31-dec | |

2. run a macro to export all quotes to json: [OpenOffice Export to JSON](https://gist.github.com/aaronhoogstraten/49b9c0f5e4ac705ebe51)

For quotes on "happiness", the result might look like:

```
const quotes = {
    happiness: [
        {
            message: 'Hello Vue.js!',
            author: 'demo',
            day: '1-jan'
        }, {
            message: '',
            author: '',
            day: '1-feb'
        }, {
            message: '',
            author: '',
            day: '15-aug'
        }, {
            message: '',
            author: '',
            day: '31-dec'
        }
    ]
}
```
