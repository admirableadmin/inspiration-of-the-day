FILES = res/google6234ba5ae9225c4a.html res/.htaccess res/robots.txt
SERVER = tech@ganymed.uberspace.de
HTDOCS = ~/www/www.kerngesund.com/

dev: clean jsdev build
	# Start daemon for compile and hot-reload in development -> http://localhost:3000/
	# cd inspiration-app && npm run dev
	command -v pm2 && pm2 delete inspiration-app-dev >/dev/null 2>&1 || : && cd inspiration-app && pm2 --name inspiration-app-dev start "npm run dev" || true

preview: clean jsprod build branding
	# Start daemon for preview with added branding before production -> http://localhost:4173/
	# cd inspiration-app && npm run preview
	command -v pm2 && pm2 delete inspiration-app-preview >/dev/null 2>&1 || : && cd inspiration-app && pm2 --name inspiration-app-preview start "npm run preview" || true

branding: clean build
	# l10n
	sed -i "s/Inspiration of the day/Inspiration des Tages/g" inspiration-app/dist/index.html
	sed -i "s/Inspiration of the day/Inspiration des Tages/g" inspiration-app/dist/assets/index.*.js
	sed -i "s/<< past/\<< vergangenes/g" inspiration-app/dist/assets/index.*.js
	sed -i "s/next >>/nächstes >>/g" inspiration-app/dist/assets/index.*.js
	# search
	sed -i "s/All inspirations from the same author./Alle Inspirationen vom selben Autor./g" inspiration-app/dist/assets/SearchView.*.js
	# about
	sed -i "s/Shows a predefined inspiration message of the day./Zeigt täglich eine vordefinierte Inspirationsbotschaft an. Kerngesund ist ein Projekt von Andreas Peichert./" inspiration-app/dist/assets/AboutView.*.js
	# google
	sed -i "s*</head>*\
<!-- Global site tag (gtag.js) - Google Analytics -->\n\
<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-QMWNCXPSRY\"></script>\n\
<script>\n\
  window.dataLayer = window.dataLayer || [];\n\
  function gtag(){dataLayer.push(arguments);}\n\
  gtag('js', new Date());\n\
  gtag('config', 'G-QMWNCXPSRY');\n\
</script>\n\
</head>*g" inspiration-app/dist/index.html
	# branding
	for i in $(FILES); do \
		[ -e $$i ] && cp -v $$i inspiration-app/dist/; \
	done

install: clean jsprod build branding
	# copy dist directory to server
	cd inspiration-app/dist && scp -r . $(SERVER):$(HTDOCS)

jsdev:
	# use quotes.js.dev
	cd inspiration-app/src/assets/ && rm -f quotes.js && ln -s quotes.js.dev quotes.js

jsprod:
	# use quotes.js.prod
	cd inspiration-app/src/assets/ && rm -f quotes.js && ln -s quotes.js.prod quotes.js

clean:
	# clean
	rm -rf inspiration-app/dist

build:
	# compile and minify for production
	cd inspiration-app && npm run build

test: dev
	# run GUI tests with percy selenium
	cd inspiration-app/ && node_modules/.bin/percy exec -- python3 tests/inspiration-app.py

all: branding preview
