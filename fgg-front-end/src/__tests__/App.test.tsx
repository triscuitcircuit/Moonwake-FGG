// Render the App component
import React from "react";
import App from "../Display/App";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("renders the App component", async () => {
    render(<App />);

    await waitFor(() => {
        const appElement = screen.getByText(/Welcome to M3/i);
        expect(appElement).toBeInTheDocument();
    });

    // test nav bar loading
    await waitFor(() => {
        const navElement = screen.getAllByText(/Home/i);
        expect(navElement[0]).toBeInTheDocument();

        const navElement2 = screen.getAllByText(/Creature Creator/i);
        expect(navElement2[0]).toBeInTheDocument();

        const navElement3 = screen.getAllByText(/Creature Database/i);
        expect(navElement3[0]).toBeInTheDocument();

        const navElement4 = screen.getAllByText(/Search & Filter/i);
        expect(navElement4[0]).toBeInTheDocument();
    });

    // test presence of cards
    await waitFor(() => {
        const card1 = screen.getByText(/COS Dragon/i);
        expect(card1).toBeInTheDocument();

        const card2 = screen.getByText(/Elf-Dwarf/i);
        expect(card2).toBeInTheDocument();
    });

    // test footer loading
    await waitFor(() => {

        // link to Frog God Games site
        const footerLink = screen.getByText(/Frog God Games/i);
        expect(footerLink).toBeInTheDocument();

        // test presence of images
        const footerImage = screen.getByAltText(/Moonwake/i);
        expect(footerImage).toBeInTheDocument();

        const footerImage2 = screen.getByTestId(/frog-god-games/i);
        expect(footerImage2).toBeInTheDocument();

        // test presence of social media icons
        const facebookIcon = screen.getByTestId(/facebook/i);
        expect(facebookIcon).toBeInTheDocument();

        const instagramIcon = screen.getByTestId(/instagram/i);
        expect(instagramIcon).toBeInTheDocument();

        const twitterIcon = screen.getByTestId(/twitter/i);
        expect(twitterIcon).toBeInTheDocument();

        const discordIcon = screen.getByTestId(/discord/i);
        expect(discordIcon).toBeInTheDocument();

        const youtubeIcon = screen.getByTestId(/youtube/i);
        expect(youtubeIcon).toBeInTheDocument();
    });

});
