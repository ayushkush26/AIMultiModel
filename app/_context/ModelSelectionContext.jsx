"use client";

import React, { createContext, useContext, useState } from "react";

const ModelSelectionContext = createContext();

export function ModelSelectionProvider({ children }) {
    // Default to 'GPT' selected
    const [selectedModels, setSelectedModels] = useState(['GPT']);

    const toggleModel = (modelName) => {
        setSelectedModels((prev) => {
            if (prev.includes(modelName)) {
                // Determine if we should allow deselecting the last model. 
                // For now, let's keep at least one model selected to avoid empty state issues, 
                // or handle empty state in the UI. 
                // Let's allow deselecting, but maybe UI handles it.
                // Actually, user wants "work with that ai at once or two ai".
                // So click -> set as single. Cmd+click -> toggle.
                return prev.filter(m => m !== modelName);
            } else {
                return [...prev, modelName];
            }
        });
    };

    const setSingleModel = (modelName) => {
        setSelectedModels([modelName]);
    }

    return (
        <ModelSelectionContext.Provider value={{ selectedModels, toggleModel, setSingleModel }}>
            {children}
        </ModelSelectionContext.Provider>
    );
}

export function useModelSelection() {
    return useContext(ModelSelectionContext);
}
