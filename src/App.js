import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';

const App = ( ) => {
    return(
        <ChatEngine
            height= "100vh"
            projectID="8ae6fe99-9144-4563-aae0-8a135d9e9fc4"
            userName="kavyakonisa"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }

        />
    )
 }

 export default App;