// AdminPanel.tsx
import React from 'react';
import { Button } from '@nextui-org/react';
import '../pages/creature-creator.css';

interface AdminPanelProps {
    toggleToastVisibility: () => void;
    displayAllToasts: () => void;
    toggleDivBorders: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({
    toggleToastVisibility,
    displayAllToasts,
    toggleDivBorders,
}) => {
    return (
        <div className="floatingDiv">
            <p className="panelTitle">Tools</p>
            <div className="floatingDiv_Content">
                <Button css={{ margin: "5px" }} onPress={toggleToastVisibility}>Toggle Toast visibility</Button>
                <Button css={{ margin: "5px" }} onPress={displayAllToasts}>Display All Toasts</Button>
                <Button css={{ margin: "5px" }} onPress={toggleDivBorders}>Toggle Div Borders</Button>
            </div>
        </div>
    );
};

export default AdminPanel;
