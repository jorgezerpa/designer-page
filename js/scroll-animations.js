                //header on load animation
window.addEventListener('DOMContentLoaded', event => {
    const headerAvatar = document.querySelector('.header-avatar-animation')
    const headerTitle = document.querySelector('.header-title-animation')

    headerAvatar.style.animationPlayState = 'running';
    headerTitle.style.animationPlayState = 'running';
})

                //animation on scroll
const portfolioItems = document.querySelectorAll('.portfolio-item-container');
const aboutTextLeft = document.querySelector('.about-text-left');
const aboutTextRight = document.querySelector('.about-text-right');


const handleIntersection = (entries, observer) => {
	entries.forEach((entrie) => {
		if(entrie.isIntersecting){
			entrie.target.classList.add('animate-me');
            console.log(entrie.target)
		} else {
			// entrie.target.classList.remove('animate-me');
		}
	});
}

const observer = new IntersectionObserver(handleIntersection, {
	root: null,
	rootMargin: '500px 0px 100px 0px',
	threshold: 1.0
});


//setting animations
portfolioItems.forEach(item=>{
    observer.observe(item);
})
observer.observe(aboutTextLeft)
observer.observe(aboutTextRight)