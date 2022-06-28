#!/bin/bash
# after npm install, copy assets into directories that we can compile from
set -eux pipefail
rm -rf _assets/stylesheets/bootstrap
cp -rf node_modules/bootstrap _assets/stylesheets/

rm -rf _assets/javascripts/vendor
mkdir -p _assets/javascripts/vendor/jquery
mkdir -p _assets/javascripts/vendor/jquery-visible
mkdir -p _assets/javascripts/vendor/bootstrap
mkdir -p _assets/javascripts/vendor/popper

cp -rf node_modules/jquery/dist/* _assets/javascripts/vendor/jquery/
cp -rf node_modules/jquery-visible/* _assets/javascripts/vendor/jquery-visible/
cp -rf node_modules/bootstrap/dist/js/* _assets/javascripts/vendor/bootstrap/
cp -rf node_modules/@popperjs/core/dist/* _assets/javascripts/vendor/popper/
