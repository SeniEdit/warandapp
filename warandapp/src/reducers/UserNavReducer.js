import { UserNavigator } from '../navigation/userStackNavConfig';

initialState = {
  navigation: {
        userNav: UserNavigator.router.getStateForAction(UserNavigator.router.getActionForPathAndParams('LoginScreen')),    }
}

export const UserNavReducer = (state = initialState.navigation.root, action) => {
    const nextState = UserNavigator.router.getStateForAction(action, state);

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};
