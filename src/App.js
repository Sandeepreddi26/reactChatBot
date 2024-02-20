// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Home from './components/Home';

// import ChatBot from 'react-simple-chatbot';
// import { ThemeProvider } from 'styled-components';

// const steps = [
//   {
//     id: '0',
//     message: 'Hey!',
//     trigger: '1',
//   },
//   {
//     id: '1',
//     message: 'Hi there! Please enter your name:',
//     trigger: '2'
//   },
//   {
//     id: '2',
//     user: true,
//     trigger: '3',
//   },
//   {
//     id: '3',
//     message: "Hi {previousValue}, please provide the invoice ID or type 'exit' to end the conversation.",
//     trigger: '4'
//   },
//   {
//     id: '4',
//     user: true,
//     trigger: '5',
//   },
//   {
//     id: '5',
//     message: ({ previousValue }) => {
//       console.log(previousValue)
//       if (previousValue.toLowerCase() === 'exit') {
//         return 'Goodbye!';
//       } else {
//         // Fetch invoice details based on the provided invoice ID
//         const invoiceDetails = fetchInvoiceDetails(previousValue); // Implement this function
//         // console.log(invoiceDetails)
//         // Construct and return the message with the invoice details
//         return `Here are the details for invoice ID ${previousValue}: ${invoiceDetails}. Please provide another invoice ID or type 'exit' to end the conversation.`;
//       }
//     },
//     trigger: '4' // Loop back to asking for another invoice ID or exit
//   }
// ];


// // Creating our own theme
// const theme = {
//   background: '#C9FF8F',
//   headerBgColor: '#197B22',
//   headerFontSize: '20px',
//   botBubbleColor: '#0F3789',
//   headerFontColor: 'white',
//   botFontColor: 'white',
//   userBubbleColor: '#FF5733',
//   userFontColor: 'white',
// };

// // Set some properties of the bot
// const config = {
//   // botAvatar: "C:/Users/sande/Desktop/React/myreactapp/src/images/images.png",
//   floating: true,
// };

// // Dummy implementation of fetchInvoiceDetails function
// const fetchInvoiceDetails = (invoiceId) => {
//   // Dummy data for demonstration
//   const invoiceData = {
//     id: invoiceId,
//     amount: 100.50,
//     date: '2024-02-20',
//     items: ['Item 1', 'Item 2', 'Item 3'],
//     // Add more properties as needed
//   };

//   // Simulate API call delay (replace with actual API call)
//   // return new Promise((resolve) => {
//   //   setTimeout(() => {
//   //     resolve(JSON.stringify(invoiceData)); // Convert invoice data to JSON string
//   //     console.log(invoiceData)
//   //   }, 1000); // Simulate delay of 1 second
//   // });
//   return JSON.stringify(invoiceData);
// };

// function App() {
//   return (
//     <div className="App">
//       <>
//         <ThemeProvider theme={theme}>
//           <ChatBot

//             // This appears as the header
//             // text for the chat bot
//             headerTitle="ReactBot"
//             steps={steps}
//             {...config}

//           />
//         </ThemeProvider>
//       </><div>
//         <header className="App-header">
//           <Routes>
//             <Route path="/" element={<Home />} />
//           </Routes>

//         </header>
//       </div>
//     </div>
//   );
// }

// export default App;
// App.js

import React from 'react';
import Chatbot from './components/Chatbot';
import "C:/Users/sande/Desktop/React/myreactapp/src/styles/chatbot.css"

const App = () => {
  return (
    <div className="App">
      <h1>Chatbot App</h1>
      <Chatbot />
    </div>
  );
};

export default App;

