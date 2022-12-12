all : commands

## commands   : show all commands.
commands :
	@grep -E '^##' Makefile | sed -e 's/## //g'


## serve      : run a local server.
serve : 
	bundle exec jekyll serve 

## clean	   : delete all built files. 
clean: 
	bundle exec jekyll clean 