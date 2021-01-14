FILES = res/google6234ba5ae9225c4a.html res/quotes.js res/.htaccess res/robots.txt
SERVER = tech@ganymed.uberspace.de
HTDOCS = ~/www/www.kerngesund.com/

html: clean
	# use the minified version
	sed -i "s/vue.js/vue.min.js/" deploy/index.html
	sed -i "s/vue-router.js/vue-router.min.js/" deploy/index.html
	# remove debug output
	sed -i "/console.log/d" deploy/app.js
	# minify code
	command -v minify && minify --html-keep-document-tags --html-keep-end-tags -rv -o deploy deploy || true

format: clean
	# l10n
	sed -i "s/Inspiration of the day/Inspiration des Tages/g" deploy/index.html
	sed -i "s/ past/ vergangenes/g" deploy/index.html
	sed -i "s/next /n\&auml;chstes /g" deploy/index.html
	# about
	sed -i "s*Shows a predefined inspiration message of the day.</p>*Zeigt t\&auml;glich eine vordefinierte Inspirationsbotschaft an.</p><p>Kerngesund ist ein Projekt von <a title="www.andreas.peichert.com" href="http://www.andreas.peichert.com/" rel="me">Andreas Peichert</a>.</p>*" deploy/app.js
	# google
	sed -i "s*</head>*\
<!-- Global site tag (gtag.js) - Google Analytics -->\n\
<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-472477-6\"></script>\n\
<script>\n\
  window.dataLayer = window.dataLayer || [];\n\
  function gtag(){dataLayer.push(arguments);}\n\
  gtag('js', new Date());\n\
  gtag('config', 'UA-472477-6');\n\
</script>\n\
</head>*g" deploy/index.html
	# branding
	for i in $(FILES); do \
		[ -e $$i ] && cp -v $$i deploy/; \
	done

install:
	# copy deploy directory to server
	scp deploy/* $(SERVER):$(HTDOCS)

clean:
	# create directory for deployment
	rm -rf deploy && cp -a src deploy

all: format html install
