// AdminPanel.tsx
import React from 'react';
import { Button } from '@nextui-org/react';
import '../pages/creature-creator.css';

interface AdminPanelProps {
    disableToasts: () => void;
    enableToasts: () => void;
    displayAllToasts: () => void;
    hideAllToasts: () => void;
    disableBorders: () => void;
    showBorders: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({
    disableToasts,
    enableToasts,
    displayAllToasts,
    hideAllToasts,
    disableBorders,
    showBorders,
}) => {
    return (
        <div className="floatingDiv">
            <p className="panelTitle">Admin Panel</p>
            <div className="floatingDiv_Content">
                <Button className="panelButton" onClick={disableToasts}>
                    Hide Toasts
                </Button>
                <Button className="panelButton" onClick={enableToasts}>
                    Show Toasts
                </Button>
                <Button className="panelButton" onClick={displayAllToasts}>
                    Display all toasts
                </Button>
                <Button className="panelButton" onClick={hideAllToasts}>
                    Hide all toasts
                </Button>
                <Button className="panelButton" onClick={disableBorders}>
                    Disable Borders
                </Button>
                <Button className="panelButton" onClick={showBorders}>
                    Show Borders
                </Button>
            </div>
        </div>
    );
};

export default AdminPanel;
