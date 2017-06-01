export const blog = (state: any = [], action) => {
    switch (action.type) {
        case 'ADD_BLOG_SUCCESS': {
            return { data: [...state.data, action.payload] }
        }
        case 'LOAD_BLOGS_SUCCESS': {
            return { ...state, data: action.payload }
        }
        case 'DELETE_BLOG_SUCCESS': {
            return {
                data: state.data.filter(blog => {
                    return blog.id !== action.payload.id;
                })
            };
        }
        default: {
            return state;
        }
    }
};
