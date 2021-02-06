import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {initializeApp} from './redux/app-reduser'
import {compose} from 'redux'
import Preloader from './components/common/Preloader/Preloader'
// import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/LoginPage/LoginPage'
import withSuspense from './HOC/withSuspense'

// const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

class App extends React.Component<{}> {
  render() {
    this.props.initializeApp()

    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
        <div className='app-wrapper'>
          <HeaderContainer/>
          <div className='app-wrapper-content'>
            <div className='container'>
              <div className='content'>
                <Navbar/>
                <div className='contentLayout'>
                  <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                  <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                  <Route path='/users' render={withSuspense(UsersContainer)}/>
                  <Route path='/login' render={withSuspense(LoginPage)}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)
