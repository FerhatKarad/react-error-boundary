import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Contacts from "./components/Contacts";
import { Fallback } from "./components/Fallback";

function App() {
  const errorHandler= (error, errorInfo) => {
        
  }
  return (
    <div>
        <ErrorBoundary  FallbackComponent={Fallback} onError={errorHandler}> 
        <Contacts />
       </ErrorBoundary> 
    </div>
  );
}

export default App;

