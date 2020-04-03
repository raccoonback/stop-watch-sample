import React, {createContext, useContext, useReducer} from 'react';


const UserContext = createContext({
    state: {
        users: [{text: '감자'},
            {text: '오리'},
            {text: '생선'},
            {text: '소'},
            {text: '강아지'}]
    },
    actions: {
        dispatch: () => {
        }
    }
});

const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE":
            return state.concat({text: action.text});
    }
};

const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, [{text: '감자'},
        {text: '오리'},
        {text: '생선'},
        {text: '소'},
        {text: '강아지'}]);
    const value = {
        state: {
            users: state
        },
        actions: {
            dispatch
        }
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

const UserConsumer = UserContext.Consumer;

const useUsers = () => {
    const {state: {users}, actions: {dispatch}} = useContext(UserContext);
    return {users, dispatch};
};

export {UserProvider, UserConsumer, useUsers};
