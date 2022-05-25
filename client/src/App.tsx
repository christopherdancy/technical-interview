import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-medium">
      <Header />
      <main className="flex-grow bg-fixed bg-image-pattern bg-cover">
        <div className="container pt-20 pb-10">
          <div className="max-w-4xl mx-auto">
            <Body />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
