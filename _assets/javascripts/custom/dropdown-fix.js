document.addEventListener("DOMContentLoaded", function() { // Fix for a bootstrap bug that doesn't return focus to the toggle when exiting a dropdown via escape key
	const targets = document.querySelectorAll('.dropdown-toggle')

	if ( targets ) {
		const callback = function(mutationList) {
			// set focus to target if show class was removed
			mutationList.forEach(function(mutation) {
				if ( mutation.type == 'attributes' && mutation.attributeName == 'class' ) { // if the mutation is what we want to test
					if ( mutation.oldValue.split(' ').includes('show') && !(mutation.target.classList.contains('show')) ) { // show was removed from the class list, and current active target is the body
						if ( mutation.target.parentElement.contains(document.activeElement) ) { // only change focus to button if the current active is a descendent. Otherwise, don't interfere
							mutation.target.focus()
						}
					}
				}
			} )
		}
		const observer = new MutationObserver( callback )
		targets.forEach( ( target ) => {
			observer.observe( target, { attributes: true, attributeFilter: ['class'], attributeOldValue: true } )
		} )
	}
} )
