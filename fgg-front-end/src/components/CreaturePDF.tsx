// components/CreaturePdf.tsx
import React from 'react';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver';
import { Button } from '@nextui-org/react';

interface Props {
    filename: string;
    // Add the required props based on the data used in the JSX code
    name: string;
    selectedSize: string;
    selectedType: string;
    selectedSubtype: string;
    selectedAlignment: string;
    selectedArmorClass: string;
    selectedArmorType: string;
    numHitDice: number;
    hitDiceValue: number;
    baseSpeed: number;
    flySpeed: number;
    swimSpeed: number;
    climbSpeed: number;
    burrowSpeed: number;
    strength: string;
    strengthMod: string;
    dexterity: string;
    dexterityMod: string;
    constitution: string;
    constitutionMod: string;
    intelligence: string;
    intelligenceMod: string;
    wisdom: string;
    wisdomMod: string;
    charisma: string;
    charismaMod: string;
    strengthThrow: boolean;
    dexterityThrow: boolean;
    constitutionThrow: boolean;
    intelligenceThrow: boolean;
    wisdomThrow: boolean;
    charismaThrow: boolean;
    selectedSkills: any;
    selectedDamageVulnerabilities: string[];
    selectedDamageResistances: string[];
    selectedDamageImmunities: string[];
    selectedConditionImmunities: string[];
    blindsight: boolean;
    darkvision: boolean;
    tremorsense: boolean;
    truesight: boolean;
    passivePerception: boolean;
    challengeRating: number;
}

const CreaturePDF: React.FC<Props> = (
    {
        filename,
        name,
        selectedSize,
        selectedType,
        selectedSubtype,
        selectedAlignment,
        selectedArmorClass,
        selectedArmorType,
        numHitDice,
        hitDiceValue,
        baseSpeed,
        flySpeed,
        swimSpeed,
        climbSpeed,
        burrowSpeed,
        strength,
        strengthMod,
        dexterity,
        dexterityMod,
        constitution,
        constitutionMod,
        intelligence,
        intelligenceMod,
        wisdom,
        wisdomMod,
        charisma,
        charismaMod,
        strengthThrow,
        dexterityThrow,
        constitutionThrow,
        intelligenceThrow,
        wisdomThrow,
        charismaThrow,
        selectedSkills,
        selectedDamageVulnerabilities,
        selectedDamageResistances,
        selectedDamageImmunities,
        selectedConditionImmunities,
        blindsight,
        darkvision,
        tremorsense,
        truesight,
        passivePerception,
        challengeRating,
    }) => {
    const generatePdf = async () => {
        const pdfDoc = await PDFDocument.create();
        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

        const page = pdfDoc.addPage();
        const content = `
            Creature Name: ${name || 'Unnamed Creature'}
            Size: ${selectedSize || '----'}
            Type: ${selectedType || '----'}
            Subtype: ${selectedSubtype || '----'}
            Alignment: ${selectedAlignment || '----'}
            Armor Class: ${selectedArmorClass || '----'}
            Armor Type: ${selectedArmorType || '----'}
            Hit Dice: ${numHitDice ? `${numHitDice}d${selectedSize ? `${hitDiceValue} + ${constitutionMod ? constitutionMod : '----'}` : '----'}` : '----'}
            Speed: ${baseSpeed ? `${baseSpeed} ft., ` : ''}${flySpeed ? `${flySpeed} ft. fly, ` : ''}${swimSpeed ? `${swimSpeed} ft. swim, ` : ''}${climbSpeed ? `${climbSpeed} ft. climb, ` : ''}${burrowSpeed ? `${burrowSpeed} ft. burrow, ` : '----'}
            STR: ${strength} (${strengthMod})
            DEX: ${dexterity} (${dexterityMod})
            CON: ${constitution} (${constitutionMod})
            INT: ${intelligence} (${intelligenceMod})
            WIS: ${wisdom} (${wisdomMod})
            CHA: ${charisma} (${charismaMod})
            Saving Throws: ${strengthThrow ? `STR, ` : ''}${dexterityThrow ? `DEX, ` : ''}${constitutionThrow ? `CON, ` : ''}${intelligenceThrow ? `INT, ` : ''}${wisdomThrow ? `WIS, ` : ''}${charismaThrow ? `CHA, ` : '----'}
            Skills: ${Object.entries(selectedSkills).map(([skill, level]) => `${skill}: ${level}`)}
            Damage Vulnerabilities: ${selectedDamageVulnerabilities.join(', ') || 'None'}
            Damage Resistances: ${selectedDamageResistances.join(', ') || 'None'}
            Damage Immunities: ${selectedDamageImmunities.join(', ') || 'None'}
            Condition Immunities: ${selectedConditionImmunities.join(', ') || 'None'}
            Senses: ${blindsight ? `blindsight ${blindsight}, ` : ''}${darkvision ? `darkvision ${darkvision} ft., ` : ''}${tremorsense ? `tremorsense ${tremorsense} ft., ` : ''}${truesight ? `truesight ${truesight} ft., ` : ''}${passivePerception ? `passive Perception ${passivePerception}, ` : '----'}
            Challenge Rating: ${challengeRating}
        `;

        const textArray = content.split('\n');
        const fontSize = 12;
        let yPos = page.getSize().height - 50;

        textArray.forEach((text) => {
            page.drawText(text, {
                x: 50,
                y: yPos,
                size: fontSize,
                font: font,
                color: rgb(0, 0, 0),
            });
            yPos -= fontSize * 1.5;
        });

        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        saveAs(blob, filename);
    };

    return (
        <div>
            <Button onClick={generatePdf}>Generate PDF</Button>
        </div>
    );
};

export default CreaturePDF;
