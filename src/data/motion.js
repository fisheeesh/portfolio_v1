export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

export const flipInX = {
    hidden: {
        opacity: 0,
        rotateX: -90,
        transformPerspective: 600,
    },
    visible: {
        opacity: 1,
        rotateX: 0,
        transformPerspective: 600,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};
