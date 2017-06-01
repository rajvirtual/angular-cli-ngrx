export const authorFilter = (state = blogs => blogs, action: any) => {
    switch (action.payload && action.payload.type) {
        case 'All': {
            return blogs => blogs;
        }
        case 'Other': {
            return blogs => blogs.author === action.payload.value;
        }
        default: {
            return state;
        }
    }
};
