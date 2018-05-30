import React from 'react'
import { Route ,BrowserRouter} from 'react-router-dom'
import App from '../App'
import My from '../view/my/Index'
import friends from '../view/friends/Index'
import video from '../view/video/Index'
import user from '../view/user/Index'
import find from '../view/find/Index'
class ROUTER extends React.Component{
    render() {
        return (
            <div>
                <BrowserRouter>
                  <App>
                  <Route exact path="/" component={find}/>
                  <Route path="/my" component={My}/>
                  <Route path="/friends" component={friends}/>
                  <Route path="/video" component={video}/>
                  <Route path="/user" component={user}/>
                  </App>
                </BrowserRouter>
            </div>
        )
    }
}
export default ROUTER
