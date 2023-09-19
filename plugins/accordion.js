
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('accordion', {
      mounted (el) {
        const headers = el.querySelectorAll('.accordion-header');
        headers.forEach(header => {
            const item = header.parentNode;
            const cross = header.querySelector('.accordion-cross');
            const cross_paths = cross.querySelectorAll('path');

            //initialze height at first so that the animations will be smooth on the first time
            item.classList.add('active')
            const content = item.querySelector('.accordion-content');
            content.style.height = content.scrollHeight + 'px';
            content.style.height = 0;
            item.classList.remove('active')

            header.addEventListener('click', () => {
                item.classList.toggle('active');

                if (item.classList.contains('active')) {
                  content.style.height = content.scrollHeight + 'px';
                  setTimeout(() => {
                    content.style.height = 'auto';
                  }, 300);
                  cross_paths[0].classList.add('rotate-90')
                  cross_paths[1].classList.add('-rotate-180')
                } else {
                  content.style.height = content.scrollHeight + 'px';
                  setTimeout(() => {
                    content.style.height = 0;
                  }, 100);
                  cross_paths[0].classList.remove('rotate-90')
                  cross_paths[1].classList.remove('-rotate-180')
                }
            });
        });
      },
      getSSRProps (binding, vnode) {
        // you can provide SSR-specific props here
        return {}
      }
    })


})
