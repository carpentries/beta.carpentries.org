#!/bin/bash

URL="$1"

cat > _config_netlify.yml <<EOF

url: 		'$URL'

EOF

# run the postinstall script to ensure that cached versions of node modules are
# added to the right place
postinstall.sh

bundle exec jekyll build --config _config.yml,_config_netlify.yml --future --limit_posts 5
