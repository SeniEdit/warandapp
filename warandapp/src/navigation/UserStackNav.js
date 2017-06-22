'use strict'

// React
import React, {Component} from 'react'
import { View } from 'react-native';

import {addNavigationHelpers} from 'react-navigation'
import {UserNavigator} from './userStackNavConfig'

import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        navigationState: state.userNav
    }
};

class UserStackNav extends Component {

    render() {
        const {navigationState, dispatch} = this.props;
        return (
                <UserNavigator
                    navigation={
                        addNavigationHelpers({
                            dispatch: dispatch,
                            state: navigationState
                        })
                    }
                />

        )
    }
}
export default connect(mapStateToProps)(UserStackNav)
