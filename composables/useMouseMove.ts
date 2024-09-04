import Parallax from 'parallax-js';

const useMouseMove = () => {
    let animatedItems = document.querySelectorAll('.SQUADX_mousemove');

    if (animatedItems) {
        animatedItems.forEach((item) => {
            new Parallax(item as HTMLElement);
        });
    }
};

export default useMouseMove;
