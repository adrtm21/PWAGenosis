import React, {useEffect} from 'react';
import Slider from "react-touch-drag-slider";
import Carousel from './Carousel.js';
import AuthService from '../services/auth.service.js';

export const Home = () => {
  const currentUser = AuthService.getCurrentUser();


    const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

useEffect(() => {
  window.addEventListener("beforeinstallprompt", (event) => {
    // Prevent the mini-infobar from appearing on mobile.
    event.preventDefault();
    console.log("👍", "beforeinstallprompt", event);
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install button container.
    setIsReadyForInstall(true);
  });
}, []);



   
async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  
    return(
      <main>
        <div className='home'>
            <h1>PAGINA PRINCPAL</h1>
            {isReadyForInstall && (<button onClick={downloadApp}>
                DESCARGA LA APP GNOSIS AQUI
            </button>)}
        </div>
        <Carousel/>  
        <h3>
          <strong>{currentUser.userName}</strong> Profile
        </h3>
        


      </main>

      
        
  
);

}