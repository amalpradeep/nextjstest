const createPopupIframe = (src) => {
    const backdrop = document.createElement('div');
    Object.assign(backdrop.style, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(5px)',
      zIndex: 9998,
    });
  
    // Create the iframe
    const iframe = document.createElement('iframe');
        iframe.src = src;
        Object.assign(iframe.style, {
      position: 'fixed',
      top: '50%',
      left: '50%',
      width: '90%',
      height: '90%',
      border: 'none',
      zIndex: 9999, 
      transform: 'translate(-50%, -50%)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      borderRadius: '5px',
      overflow: 'hidden',
      scrolling: 'no',
    });
  
    document.body.appendChild(backdrop);
    document.body.appendChild(iframe);
    
    document.body.style.overflow = 'hidden';
  
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    Object.assign(closeButton.style, {
      position: 'absolute',
      top: '10px',
      right: '10px',
      padding: '10px 15px',
      backgroundColor: '#ff5c5c',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      zIndex: 10000,
    });
  
    document.body.appendChild(closeButton);
  
    closeButton.addEventListener('click', () => {
      removePopup();
    });
  
    backdrop.addEventListener('click', () => {
      removePopup();
    });
  
    const removePopup = () => {
      document.body.removeChild(iframe);
      document.body.removeChild(backdrop);
      document.body.removeChild(closeButton);
      document.body.style.overflow = '';
    };
  
    window.addEventListener('message', (event) => {
      if (event.data?.action === 'closePopup') {
        removePopup();
      }
    });
};

window.addEventListener('message', (event) => {
    if (event.data?.action === 'openPopup') {
        createPopupIframe('https://alpha.aftontickets.com/embeded/1/checkout');
    }
});
