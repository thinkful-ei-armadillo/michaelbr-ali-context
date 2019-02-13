import React from 'react';

const OurContext = React.createContext({
    notes: [],
    folders: [],
    deleteNote: () => {}
})

export default OurContext;