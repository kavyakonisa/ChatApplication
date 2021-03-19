import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = ( ) => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine
            height= "100vh"
            projectID="8ae6fe99-9144-4563-aae0-8a135d9e9fc4"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }

        />
    )
 }

 export default App;