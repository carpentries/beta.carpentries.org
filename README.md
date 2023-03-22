# beta.carpentries.org

Beta version of the new The Carpentries website. This repo is under development and does not contain current or accurate information about The Carpentries.

## Setup <a name="setup"></a>

The website uses [Jekyll](http://jekyllrb.com/), a static website generator written in Ruby.
You need to have Version 2.7.1 or higher of Ruby and the package manager Bundler.
(The package manager is used to make sure you use exactly the same versions of the Ruby Gems as we do.)
After checking out the repository, please run:

```
$ bundle install
```

to install Jekyll and the software it depends on.
You may consult [Using Jekyll with Pages](https://help.github.com/articles/using-jekyll-with-pages/) for further instructions.

## Previewing <a name="previewing"></a>

Please do **not** use `jekyll build` or `jekyll serve` directly to build or view the website.
Instead, you should use the following commands:

*   `make` or `make commands`: list available commands.
*   `make serve`: build files locally and run a server at [http://0.0.0.0:4000/](http://0.0.0.0:4000/) for viewing.
    This is the best way to preview the site.
*   `make clean` removes the `_site` directory and any Emacs editor backup files littering the source directories.
