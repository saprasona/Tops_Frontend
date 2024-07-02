// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import MainApp from './MainApp';

function App() {
    return (
        <ThemeProvider>
            <MainApp />
        </ThemeProvider>
    );
}

export default App;
