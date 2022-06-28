#!/bin/bash

URL="$1"

cat > _config_netlify.yml <<EOF

url: 		'$URL'

EOF

bundle exec jekyll build --config _config.yml,_config_netlify.yml --future --limit_posts 5
