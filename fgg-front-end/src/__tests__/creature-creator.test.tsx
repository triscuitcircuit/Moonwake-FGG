import React from "react";
import CreatureCreator from "../pages/creature-creator";
import {render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("Creature Creator", () => {
    it("renders the Creature Creator component", async () => {
        render(<CreatureCreator />);

        // test presence of cards
        await waitFor(() => {
            const card1 = screen.getByText(/Start a new creature/i);
            expect(card1).toBeInTheDocument();

            const card2 = screen.getByText(/Auto generate a creature/i);
            expect(card2).toBeInTheDocument();
        });
    });

    // when selectedSize = "huge", a toast is displayed
    it("renders a toast when selectedSize = 'huge'", async () => {
        render(<CreatureCreator />);

        // Step 1: Click the "Start" button
        await waitFor(() => {
            const startButton = screen.getByTestId(/start-button/i);
            userEvent.click(startButton);
        });

        // Step 2: Click the size dropdown
        await waitFor(() => {
            const sizeDropdown = screen.getByTestId(/size-dropdown/i);
            userEvent.click(sizeDropdown);
        });

        // Step 3: Select the "Huge" size option
        await waitFor(() => {
            const hugeOption = screen.getByText(/Huge/i);
            userEvent.click(hugeOption);
        });

        // Step 4: Test the presence of the toast
        await waitFor(() => {
            const toast = screen.getByTestId(/huge-toast/i);
            expect(toast).toBeInTheDocument();
        });
    });

    // When intelligence is < 5 and selectedAlignment != "unaligned", a toast is displayed
    it("renders a toast when intelligence is < 5 and selectedAlignment != 'unaligned'", async () => {
        render(<CreatureCreator />);

        // Step 1: Click the "Start" button
        await waitFor(() => {
            const startButton = screen.getByTestId(/start-button/i);
            userEvent.click(startButton);
        });

        // Step 2: Click the alignment dropdown
        await waitFor(() => {
            const alignmentDropdown = screen.getByTestId(/alignment-dropdown/i);
            userEvent.click(alignmentDropdown);
        });

        // Step 3: Select the "Any Alignment" option
        await waitFor(() => {
            const unalignedOption = screen.getByText(/Any Alignment/i);
            userEvent.click(unalignedOption);
        });

        // Step 4: Click the intelligence dropdown
        await waitFor(() => {
            const intelligenceDropdown = screen.getByTestId(/intelligence/i);
            userEvent.click(intelligenceDropdown);
        });

        // Step 5: Select the intelligence value of 4
        await waitFor(() => {
            const intelligence4Option = screen.getAllByText(/4/i);
            userEvent.click(intelligence4Option[0]);
        });

        // Step 6: Test the presence of the toast
        await waitFor(() => {
            const toast = screen.getByTestId(/unaligned-toast/i);
            expect(toast).toBeInTheDocument();
        });
    });

});