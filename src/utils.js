export function downUpdate(el,dispatch) {
    el.addEventListener('scroll',function () {
        let scrollT = el.scrollTop;
        let winH = document.documentElement.clientHeight-112;
        let Height = el.scrollHeight;
        if (scrollT+winH+10>Height){
            clearTimeout(el.timer);
            el.timer= setTimeout( () => {
                dispatch.getLesson()
            },300)
        }
    });
}