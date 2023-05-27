import { createContext, useState } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const [notes, setNotes] = useState([]);
    const [archiveNotes, setAcrchiveNotes] = useState([]);
    const [deletedNotes, setDeletedNotes] = useState([]);

    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setAcrchiveNotes,
            deletedNotes,
            setDeletedNotes
        }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;