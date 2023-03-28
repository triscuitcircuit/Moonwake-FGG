// ------------------------------------------------------------------
// Written by: Landon Thibodeau
// Description: This page allows the user to create a new creature.
// ------------------------------------------------------------------

import React, {useEffect, useMemo, useState} from "react"
import {
    Text,
    NextUIProvider,
    createTheme,
    Container,
    Grid,
    Button,
    Input,
    Dropdown, Checkbox, Table, Spacer, Tooltip,
} from "@nextui-org/react";
import {
    StartNew,
    Auto,
    SpeedInput,
    AttributeInput, ChallengeRatingInput,
} from "../components/creature-creator-cards";
import {Connection} from "../Database/Connection";
import './creature-creator.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AdminPanel from "../components/AdminPanel";

const theme = createTheme({
    type: "dark",
});

type ProficiencyLevel = "None" | "proficient" | "expertise";

const CreatureCreator: React.FC = () => {

    /* --------------------------- */
    /* Creature creation variables */
    /* --------------------------- */

    const [name, setName] = useState<string>("");
    const [selectedLanguage, setSelectedLanguage] = useState<any>("----");
    const [isClicked, setIsClicked] = useState(false);
    const [selectedSize, setSelectedSize] = useState<any>("----");
    const [selectedType, setSelectedType] = useState<any>("----");
    const [selectedSubtype, setSelectedSubtype] = useState<any>("----");
    const [selectedAlignment, setSelectedAlignment] = useState<any>("----");
    const [selectedArmorClass, setSelectedArmorClass] = useState<any>("----");
    const [selectedArmorType, setSelectedArmorType] = useState<any>("----");
    const [numHitDice, setNumHitDice] = useState<any>();
    const [baseSpeed, setBaseSpeed] = useState(0);
    const [flySpeed, setFlySpeed] = useState(0);
    const [swimSpeed, setSwimSpeed] = useState(0);
    const [climbSpeed, setClimbSpeed] = useState(0);
    const [burrowSpeed, setBurrowSpeed] = useState(0);
    const [challengeRating, setChallengeRating] = useState<number>(0);

    /* ------------------------- */
    /* Data connection variables */
    /* ------------------------- */

    const [sizeData, setSizeData] = useState<any>(null);
    const [typeData, setTypeData] = useState<any>(null);
    const [subtypeData, setSubtypeData] = useState<any>(null);
    const [alignmentData, setAlignmentData] = useState<any>(null);
    const [skillData, setSkillData] = useState<any>(null);
    const [damageTypeData, setDamageTypeData] = useState<any>(null);
    const [conditionData, setConditionData] = useState<any>(null);

    /* -------------------------------- */
    /* Attribute and Modifier Variables */
    /* -------------------------------- */

    const [strength, setStrength] = useState<string>("----")
    const [strengthMod, setStrengthMod] = useState<string>("Str Mod")
    const [dexterity, setDexterity] = useState<string>("----")
    const [dexterityMod, setDexterityMod] = useState<string>("Dex Mod")
    const [constitution, setConstitution] = useState<string>("----")
    const [constitutionMod, setConstitutionMod] = useState<string>("Con Mod")
    const [intelligence, setIntelligence] = useState<string>("----")
    const [intelligenceMod, setIntelligenceMod] = useState<string>("Int Mod")
    const [wisdom, setWisdom] = useState<string>("----")
    const [wisdomMod, setWisdomMod] = useState<string>("Wis Mod")
    const [charisma, setCharisma] = useState<string>("----")
    const [charismaMod, setCharismaMod] = useState<string>("Cha Mod")

    /* ------------------------ */
    /* Saving throw variables   */
    /* ------------------------ */

    const [strengthThrow, setStrengthThrow] = useState<boolean>(false);
    const [dexterityThrow, setDexterityThrow] = useState<boolean>(false);
    const [constitutionThrow, setConstitutionThrow] = useState<boolean>(false);
    const [intelligenceThrow, setIntelligenceThrow] = useState<boolean>(false);
    const [wisdomThrow, setWisdomThrow] = useState<boolean>(false);
    const [charismaThrow, setCharismaThrow] = useState<boolean>(false);

    const [selectedSkills, setSelectedSkills] = useState<Record<string, ProficiencyLevel>>({});
    const [selectedDamageVulnerabilities, setSelectedDamageVulnerabilities] = useState([]);
    const [selectedDamageResistances, setSelectedDamageResistances] = useState([]);
    const [selectedDamageImmunities, setSelectedDamageImmunities] = useState([]);
    const [selectedConditionImmunities, setSelectedConditionImmunities] = useState([]);

    const [blindsight, setBlindsight] = useState<boolean>(false);
    const [darkvision, setDarkvision] = useState<boolean>(false);
    const [tremorsense, setTremorsense] = useState<boolean>(false);
    const [truesight, setTruesight] = useState<boolean>(false);
    const [passivePerception, setPassivePerception] = useState<boolean>(false);

    const [showToast, setShowToast] = useState<boolean>(true);
    const [showDivBorders, setShowDivBorders] = useState<boolean>(false);
    const [displayAll, setDisplayAll] = useState<boolean>(false);

    const disableToasts = () => {
        setShowToast(false);
    }

    const enableToasts = () => {
        setShowToast(true);
    }

    const displayAllToasts = () => {
        setDisplayAll(true);
    }

    const hideAllToasts = () => {
        setDisplayAll(false);
    }

    const disableBorders = () => {
        setShowDivBorders(false);
    }

    const showBorders = () => {
        setShowDivBorders(true);
    }

    const languages = [
        { key: "common", name: "Common" },
        { key: "dwarvish", name: "Dwarvish" },
        { key: "elvish", name: "Elvish" },
        { key: "giant", name: "Giant" },
        { key: "gnomish", name: "Gnomish" },
        { key: "goblin", name: "Goblin" },
        { key: "halfling", name: "Halfling" },
        { key: "orc", name: "Orc" },
        { key: "abyssal", name: "Abyssal" },
        { key: "celestial", name: "Celestial" },
        { key: "draconic", name: "Draconic" },
        { key: "deep speech", name: "Deep Speech" },
        { key: "infernal", name: "Infernal" },
        { key: "primordial", name: "Primordial" },
        { key: "sylvan", name: "Sylvan" },
        { key: "undercommon", name: "Undercommon" },
        { key: "druidic", name: "Druidic" },
        { key: "aquan", name: "Aquan" },
        { key: "auran", name: "Auran" },
        { key: "ignan", name: "Ignan" },
        { key: "terran", name: "Terran" },
    ]

    const handleSenseChange = (sense: { name: string, distance: number }) => {
        switch (sense.name) {
            case "Blindsight":
                setBlindsight(!blindsight);
                break;
            case "Darkvision":
                setDarkvision(!darkvision);
                break;
            case "Tremorsense":
                setTremorsense(!tremorsense);
                break;
            case "Truesight":
                setTruesight(!truesight);
                break;
            case "Passive Perception":
                setPassivePerception(!passivePerception);
                break;
        }
    }

    useEffect(() => {
        console.log("Blindsight: " + blindsight);
        console.log("Darkvision: " + darkvision);
        console.log("Tremorsense: " + tremorsense);
        console.log("Truesight: " + truesight);
        console.log("Passive Perception: " + passivePerception);
    }, [blindsight, darkvision, tremorsense, truesight, passivePerception]);

    const handleButtonClick = () => {
        setIsClicked(!isClicked);
    };

    /* ---------------------------------------------------------------------------------- */
    /* setSetters is called by the attributeInput component to set the value and modifier */
    /* ---------------------------------------------------------------------------------- */

    const setSetters = (attribute: number, setter: (value: (((prevState: string) => string) | string)) => void, modifier: (value: (((prevState: string) => string) | string)) => void) => {
        setter(attribute.toString());
        modifier(Math.floor((attribute - 10) / 2).toString());
    }

    useEffect(() => {

        /* ------------------------ */
        /* Populate data connection */
        /* ------------------------ */

        const sizeConnection = new Connection("http://localhost:8080/api/sz_size");
        sizeConnection.getData().then(sizeData => setSizeData(sizeData));

        const typeConnection = new Connection("http://localhost:8080/api/moty_monster_type");
        typeConnection.getData().then(typeData => setTypeData(typeData));

        const subtypeConnection = new Connection("http://localhost:8080/api/DATY_DAMAGE_TYPE");
        subtypeConnection.getData().then(subtypeData => setSubtypeData(subtypeData));

        const alignmentConnection = new Connection("http://localhost:8080/api/AL_ALIGNMENT");
        alignmentConnection.getData().then(alignmentData => setAlignmentData(alignmentData));

        const skillConnection = new Connection("http://localhost:8080/api/SK_SKILL");
        skillConnection.getData().then(skillData => setSkillData(skillData));

        const damageTypeConnection = new Connection("http://localhost:8080/api/DATY_DAMAGE_TYPE");
        damageTypeConnection.getData().then(damageTypeData => setDamageTypeData(damageTypeData));

        const conditionConnection = new Connection("http://localhost:8080/api/CD_CONDITION");
        conditionConnection.getData().then(conditionData => setConditionData(conditionData));

    }, []);

    //  Construct sizeItems from sizeData
    const sizeItems = sizeData ? sizeData.map((item: { SZ_ID: React.Key; SZ_NAME: string; SZ_DISPLAY_NAME: string; SZ_HIT_DICE_VALUE: number }) => (
        { key: item.SZ_NAME, name: item.SZ_DISPLAY_NAME, hitDiceValue: item.SZ_HIT_DICE_VALUE }
    )) : [];

    //  Construct typeItems from typeData
    const typeItems = typeData ? typeData.map((item: { MOTY_ID: React.Key; MOTY_NAME: string; MOTY_DISPLAY_NAME: string; }) => (
        { key: item.MOTY_NAME, name: item.MOTY_DISPLAY_NAME }
    )) : [];

    typeItems.push(
        { key: "swarm", name: "swarm" },
        { key: "half-orc", name: "half-orc"}
    );

    typeItems.sort((a: { name: string; }, b: { name: string; }) => (a.name > b.name) ? 1 : -1);

    //  Construct subtypeItems from subtypeData
    const subtypeItems = subtypeData ? subtypeData.map((item: { DATY_ID: React.Key; DATY_NAME: string; DATY_DISPLAY_NAME: string; }) => (
        { key: item.DATY_NAME, name: item.DATY_DISPLAY_NAME }
    )) : [];

    //  Construct alignmentItems from alignmentData
    const alignmentItems = alignmentData ? alignmentData.map((item: { AL_ID: React.Key; AL_NAME: string; AL_DISPLAY_NAME: string; }) => (
        { key: item.AL_NAME, name: item.AL_DISPLAY_NAME }
    )) : [];

    //  Construct skillItems from skillData
    const skillItems = skillData ? skillData.map((item: { SK_ID: React.Key; SK_NAME: string; SK_DISPLAY_NAME: string; SK_RELATED_AB_NAME: string }) => (
        { key: item.SK_NAME, name: item.SK_DISPLAY_NAME, relatedAbName: item.SK_RELATED_AB_NAME, proficiencyLevel: "None" }
    )) : [];

    //  Construct damageTypeItems from damageTypeData
    const damageTypeItems = damageTypeData ? damageTypeData.map((item: { DATY_ID: React.Key; DATY_NAME: string; DATY_DISPLAY_NAME: string; }) => (
        { key: item.DATY_NAME, name: item.DATY_DISPLAY_NAME }
    )) : [];

    //  Construct conditionItems from conditionData
    const conditionItems = conditionData ? conditionData.map((item: { CD_ID: React.Key; CD_NAME: string; CD_DISPLAY_NAME: string; }) => (
    { key: item.CD_NAME, name: item.CD_DISPLAY_NAME }
    )) : [];

    const armorItems = [
        { key: "Light", name: "Light"},
        { key: "Medium", name: "Medium"},
        { key: "Heavy", name: "Heavy"},
    ];

    const senses = [
        { key: "Blindsight", name: "Blindsight", distance: 0},
        { key: "Darkvision", name: "Darkvision", distance: 0},
        { key: "Tremorsense", name: "Tremorsense", distance: 0},
        { key: "Truesight", name: "Truesight", distance: 0},
        { key: "Passive_Perception", name: "Passive Perception", distance: 0},
    ];

    const selectedSizeItem = sizeItems.find((item: { key: string; }) => item.key === selectedSize);

    const hitDiceValue = useMemo(
        () => selectedSizeItem ? selectedSizeItem.hitDiceValue : "Size",
        [selectedSizeItem]
    );

    const hitDiceSizeChange  = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumHitDice(Number(event.target.value));
    };

    const proficiencyBonus = useMemo(
        () => Math.ceil((challengeRating) / 4) > 2 ? Math.ceil((challengeRating) / 4) : 2,
        [challengeRating]
    );

    const handleCheckboxChange = (skill: { name: string, proficiencyLevel: ProficiencyLevel }, proficiencyLevel: "proficient" | "expertise") => {
        setSelectedSkills((prevSelectedSkills) => {
            const newSelectedSkills = { ...prevSelectedSkills };
            const alreadySelected = prevSelectedSkills[skill.name] === proficiencyLevel;

            if (alreadySelected) {
                newSelectedSkills[skill.name] = undefined; // unselect the checkbox
            } else {
                newSelectedSkills[skill.name] = proficiencyLevel;
                // if the other checkbox is selected, unselect it
                if (proficiencyLevel === "proficient") {
                    newSelectedSkills[skill.name + "-expertise"] = undefined;
                    skill.proficiencyLevel = "proficient";
                } else {
                    newSelectedSkills[skill.name + "-proficient"] = undefined;
                    skill.proficiencyLevel = "expertise";
                }
            }
            return newSelectedSkills;
        });
    };

    const findMod = (abilityName: string) => {
        switch (abilityName) {
            case "Strength":
                return Number.isNaN(parseInt(strengthMod)) ? 0 : parseInt(strengthMod);
            case "Dexterity":
                return Number.isNaN(parseInt(dexterityMod)) ? 0 : parseInt(dexterityMod);
            case "Constitution":
                return Number.isNaN(parseInt(constitutionMod)) ? 0 : parseInt(constitutionMod);
            case "Intelligence":
                return Number.isNaN(parseInt(intelligenceMod)) ? 0 : parseInt(intelligenceMod);
            case "Wisdom":
                return Number.isNaN(parseInt(wisdomMod)) ? 0 : parseInt(wisdomMod);
            case "Charisma":
                return Number.isNaN(parseInt(charismaMod)) ? 0 : parseInt(charismaMod);
            default:
                return 0;
        }
    }

    // ---------------------  useEffects  ---------------------
    // Displays toast for each of the creation warnings laid out
    // in the word doc provided by the client
    // --------------------------------------------------------

    useEffect(() => {
        if (intelligence != "----" && selectedAlignment != "----" || displayAll == true) {
            if (parseInt(intelligence) < 5 && selectedAlignment != "unaligned") {
                toast.error(
                    <>
                        <p>
                            <b>Your creature has a low Intelligence.</b>
                        </p>
                        <p>
                            Many creatures with an Intelligence less than 5 are unaligned
                        </p>
                    </>, { style: { width: "400px", translate: "-50px" } });
            }
            if (parseInt(intelligence) > 4 && selectedAlignment == "unaligned" || displayAll == true) {
                toast.error(
                    <>
                        <p>
                            <b>Your creature is unaligned.</b>
                        </p>
                        <p>
                            Most creatures with an Intelligence of 5 or more have an alignment
                        </p>
                    </>, { style: { width: "400px", translate: "-50px" } });
            }
        }
    }, [intelligence, selectedAlignment, displayAll]);

    useEffect(() => {
        if (selectedType == "swarm" || displayAll == true) {
            toast.error(
                <>
                    <p>
                        <b>Your creature is a Swarm. Many swarms have the following:</b>
                    </p>
                    <ul>
                        <li>
                            <b>Trait:</b>
                        </li>
                        <ul>
                            <li>
                                Swarm. The swarm can occupy another creature's space and vice versa,
                                and the swarm can move through any opening large enough for a Tiny [single creature].
                                The swarm can't regain hit points or gain temporary hit points.
                            </li>
                        </ul>
                        <li>
                            <b>Attack:</b>
                            <ul>
                                <li>
                                    A swarm’s attack often does half as many dice of damage if it has half of its hit points or fewer.
                                    In addition, a Swarm typically doesn’t add its Strength or Dexterity modifier to its damage. For example:
                                </li>
                                <ul>
                                    <li>
                                        <b>Bites:</b>
                                    </li>
                                    <ul>
                                        <li>
                                            Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage,
                                            or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.
                                        </li>
                                    </ul>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                </>, { style: { width: "800px", translate: "-250px" } });
        }
        if (selectedType == "undead" || displayAll == true) {
            toast.error(
                <>
                    <p>
                        <b>Your creature is Undead. You might consider some of the following:</b>
                    </p>
                    <ul>
                        <li>
                            <b>Alignment:</b> some kind of Evil
                        </li>
                        <li>
                            <b>Damage Vulnerabilities:</b> radiant
                        </li>
                        <li>
                            <b>Damage Immunities:</b> poison
                        </li>
                        <li>
                            <b>Condition Immunities:</b> charmed, exhaustion, poisoned
                        </li>
                        <li>
                            <b>Senses:</b> Darkvision
                        </li>
                        <li>
                            <b>Traits:</b>
                        </li>
                        <ul>
                            <li>
                                <b>Incorporeal Movement.</b> The [creature] can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.
                            </li>
                            <li>
                                <b>Sunlight Sensitivity.</b> While in sunlight, the [creature] has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.
                            </li>
                            <li>
                                <b>Turn Immunity.</b> The [creature] is immune to effects that turn undead.
                            </li>
                            <li>
                                <b>Undead Fortitude.</b> If damage reduces the [creature] to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, it drops to 1 hit point instead.
                            </li>
                            <li>
                                <b>Undead Nature.</b> The [creature] doesn't require air, food, drink, or sleep.
                            </li>
                        </ul>
                    </ul>
                </>, { style: { width: "800px", translate: "-250px" } });
        }
        if (selectedType == "construct" || displayAll == true) {
            toast.error(
                <>
                    <p>
                        <b>Your creature is a Construct. You might consider the following:</b>
                    </p>
                    <ul>
                        <li>
                            <b>Alignment:</b> Unaligned
                        </li>
                        <li>
                            <b>Trait:</b>
                        </li>
                        <ul>
                            <li>
                                <b>Immutable Form:</b> The [creature] is immune to any spell or effect that would alter its form
                            </li>
                            <li>
                                <b>Antimagic Susceptibility:</b> The [creature] is incapacitated while in the area of an antimagic field.
                                    If targeted by dispel magic, the [creature] must succeed on a Constitution saving throw against the caster's
                                    spell save DC or fall unconscious for 1 minute.
                            </li>
                            <li>
                                <b>False Appearance:</b> While the [creature] remains motionless, it is indistinguishable from a
                                [similar looking non-animated object].
                            </li>
                            <li>
                                <b>False Object:</b> If the [creature] is motionless at the start of combat, it has advantage on its initiative roll. Moreover,
                                if a creature hasn't observed the [creature] move or act, that creature must succeed on a DC 15 Wisdom (Perception) check to discern
                                that the [creature] is animate.
                            </li>
                        </ul>
                    </ul>
                </>, { style: { width: "800px", translate: "-250px" } });
        }
        if (selectedType == "elemental" || displayAll == true) {
            toast.error(
                <>
                    <p>
                        <b>Your creature is an Elemental. You might consider the following:</b>
                    </p>
                    <ul>
                        <li>
                            <b>Damage Resistances or Immunities based on its home plane</b>
                        </li>
                        <li>
                            <b>Damage Immunities:</b> poison
                        </li>
                        <li>
                            <b>Condition Immunities:</b> exhaustion, grappled, paralyzed, petrified, poisoned, restrained
                        </li>
                        <li>
                            <b>Trait:</b> [Elemental] Form. Varies based on elemental type
                        </li>
                        <li>
                            <b>Languages:</b> Aquan, Auran, Ignan, or Terran
                        </li>
                    </ul>
                </>, { style: { width: "800px", translate: "-250px" } });
        }
        if (selectedType == "dragon" || displayAll == true) {
            toast.error(
                <>
                    <p><b>Your creature is a Dragon. You might consider the following:</b></p>
                    <ul>
                        <li>
                            <b>Action:</b>
                            <ul>
                                <li><b>Frightful Presence</b> Each creature of the [creature]'s choice that is within 120 feet of the [creature]
                                    and aware of it must succeed on a DC ## Wisdom saving throw or become frightened for 1 minute.
                                    A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
                                    If a creature's saving throw is successful or the effect ends for it, the creature is immune to the [creature]'s Frightful Presence for the next 24 hours.</li>
                                <li><b>Breath Weapon</b> (recharge #–6)</li>
                                <li><b>Tail attack, Wing Attack</b></li>
                                <li>Legendary attacks if adult or older</li>
                            </ul>
                        </li>
                    </ul>
                </>, { style: { width: "800px", translate: "-250px" } });
        }
        if (selectedType == "ooze" || displayAll == true) {
            toast.error(
                <>
                    <p><b>Your creature is an Ooze. You might consider the following:</b></p>
                    <ul>
                        <li>
                            <b>Trait:</b>
                            <ul>
                                <li><b>Amorphous:</b> The [creature] can move through a space as narrow as 1 inch wide without squeezing.</li>
                                <li><b>Spider Climb:</b> The [creature] can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.</li>
                                <li><b>False Appearance:</b> If the [creature] is motionless at the start of combat, it has advantage on its initiative roll.
                                    Moreover, if a creature hasn't observed the [creature] move or act, that creature must succeed on a DC ## Intelligence
                                    (Investigation) check to discern that the [creature] is not a [object].</li>
                            </ul>
                        </li>
                        <li>
                            <b>Action:</b>
                            <ul>
                                <li><b>Pseudopod:</b> Melee Weapon Attack</li>
                            </ul>
                        </li>
                        <li>
                            <b>Reaction:</b>
                            <ul>
                                <li><b>Split:</b> When a [creature] that is Medium or larger is subjected to [choose damage type] damage,
                                    it splits into two new [creature]s if it has at least [#] hit points. Each new [creature] has
                                    hit points equal to half the original [creature]'s, rounded down. New [creature]s are one size
                                    smaller than the original [creature].</li>
                            </ul>
                        </li>
                    </ul>
                </>, { style: { width: "800px", translate: "-250px" } });
        }
        if (selectedType == "plant" || displayAll == true) {
            toast.error(
                <>
                    <p><b>Your creature is a Plant. You might consider the following:</b></p>
                    <ul>
                        <li>
                            <b>False Appearance</b>
                            <ul>
                                <li>While the [creature] remains motionless, it is indistinguishable from a normal plant</li>
                                <li>If the [creature] is motionless at the start of combat, it has advantage on its initiative roll.
                                    Moreover, if a creature hasn't observed the [creature] move or act, that creature must succeed
                                    on a DC ## Intelligence (Investigation) check to discern that the [creature] is animate.</li>
                            </ul>
                        </li>
                    </ul>
                </>, { style: { width: "800px", translate: "-250px" } });
        }
        if (selectedType == "beast" || displayAll == true) {
            toast.error(
                <>
                    <p>
                        <b>Your creature is a Beast.</b> Consider making its alignment <b>Unaligned</b>
                    </p>
                </>
            );
        }
        if (selectedType == "celestial" || displayAll == true) {
            toast.error(
                <>
                    <p>
                        <b>Your creature is a Celestial.</b> Consider making its alignment <b>Good</b>
                    </p>
                </>
            );
        }
        if (selectedType == "fey" || displayAll == true) {
            toast.error(
                <>
                    <p>
                        <b>Your creature is a fey.</b> Consider making its alignment <b>Not Lawful</b>
                    </p>
                </>
            );
        }
        if (selectedType == "fiend" || displayAll == true) {
            toast.error(
                <>
                    <p>
                        <b>Your creature is a Fiend. You might consider the following:</b>
                    </p>
                    <ul>
                        <li>
                            darkvision
                        </li>
                        <li>
                            magic resistance
                        </li>
                        <li>
                            telepathy
                        </li>
                        <li>
                            immunity to poison damage and poisoned condition
                        </li>
                        <li>
                            Language Infernal
                        </li>
                    </ul>
                </>
            );
        }
        if (selectedType == "demon" || displayAll == true) {
            toast.error(
                <>
                    <p>
                        <b>Your creature is a Demon. Consider giving it language Abyssal.</b>
                    </p>
                </>
            );
            if (["chaotic evil", "----"].includes(selectedAlignment) == false || displayAll == true) {
                toast.error(
                    <>
                        <p>
                            <b>Demons are typically chaotic evil</b>
                        </p>
                    </>
                );
            }
        }
        if (selectedType == "devil" || displayAll == true) {
            toast.error(
                <>
                    <p>
                        <b>Your creature is a Devil. Consider giving it language Infernal.</b>
                    </p>
                </>
            );
            if (["lawful evil", "----"].includes(selectedAlignment) == false || displayAll == true) {
                toast.error(
                    <>
                        <p>
                            <b>Devils are typically lawful evil</b>
                        </p>
                    </>
                );
            }
        }
        if (selectedType == "giant" || displayAll == true) {
            toast.error(
                <>
                    <p>
                        <b>Your creature is a Giant. Consider giving it size Large or Huge.</b>
                    </p>
                </>
            );
        }
        if (selectedType == "humanoid" || displayAll == true ) {
            toast.error(
                <>
                    <p>
                        <b>Your creature is a Humanoid. Consider giving it Any Alignment.</b>
                    </p>
                </>
            );
        }
        if(["dwarf", "elf", "gnome", "goblinoid", "half-orc", "kobold", "orc"].includes(selectedType) && darkvision == false || displayAll == true) {
            toast.error(
                <>
                    <p>
                        <b>Humanoid ({selectedType}) typically have darkvision</b>
                    </p>
                </>
            );
        }
    }, [selectedType, selectedAlignment, darkvision, displayAll]);

    useEffect(() => {
        if (challengeRating >= 10 || displayAll == true) {
            if (challengeRating >= 15 || displayAll == true) {
                toast.error(
                    <>
                        <p>
                            <b>Your creature has a Challenge of 15 or higher. Consider giving it Legendary Actions.</b>
                        </p>
                    </>
                );
            }
            toast.error(
                <>
                    <p>
                        <b>Your creature has a high challenge rating.</b>
                    </p>
                    <p>You might consider some of the following:</p>
                    <ul>
                        <li>
                            <b>Traits:</b>
                        </li>
                        <ul>
                            <li>
                                <b>Legendary Resistance (1 to 4/day).</b> If the [creature] fails a saving throw, it can choose to succeed instead.
                            </li>
                            <li>
                                <b>Magic Resistance.</b> The [creature] has advantage on saving throws against spells and other magical effects.
                            </li>
                            <li>
                                <b>Magic Weapons.</b> The [creature]’s weapon attacks are magical.
                            </li>
                        </ul>
                        <li>
                            <b>Actions:</b>
                            <ul>
                                <li>Multiattack</li>
                            </ul>
                        </li>
                        <li>
                            <b>Legendary Actions, Lair Actions</b>
                        </li>
                    </ul>
                </>, { style: { width: "800px", translate: "-250px" } });
        }
    }, [challengeRating, displayAll]);

    useEffect(() => {
        console.log(selectedSize);
        if (selectedSize == "Huge" || displayAll == true) {
            toast.error(
                <>
                    <p>
                        <b>Your creature has size Huge.</b>
                    </p>
                    <p>You might consider giving it the trait:</p>
                    <p>
                        <b>Siege Monster.</b> The [creature] deals double damage to objects and structures.
                    </p>
                </>
            );
        }
    }, [selectedSize, displayAll]);

    // @ts-ignore
    return (
        <NextUIProvider theme={theme}>
            <Container md>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        marginTop: "5%",
                        }}
                >
                    <Text h1>Creature Creation Page</Text>
                </div>
            </Container>

            {/* ------------------------------------------------------------------------ */}
            {/*Conditionally renders the cards depending on whether the button is clicked*/}
            {/* ------------------------------------------------------------------------ */}

            {!isClicked &&
                <Container md>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            marginTop: "5%",
                            }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flex: "1",
                                marginRight: "5%",
                                }}
                        >
                            <StartNew onButtonClick={handleButtonClick} />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flex: "1",
                                marginLeft: "5%",
                                }}
                        >
                            <Auto />
                        </div>
                    </div>
                </Container>
            }

            {/* ------------------------------------------------------------------ */}
            {/* If the button is clicked, then the creature creation form is shown */}
            {/* ------------------------------------------------------------------ */}

            {isClicked &&
                <Container md className={showDivBorders ? "showBorders" : ''}>
                    <AdminPanel
                        disableToasts={disableToasts}
                        enableToasts={enableToasts}
                        displayAllToasts={displayAllToasts}
                        hideAllToasts={hideAllToasts}
                        disableBorders={disableBorders}
                        showBorders={showBorders}
                    />
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "60%",
                                marginTop: "2%",
                                }}
                        >
                            <Text h2>Enter Creature Information</Text>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                width: "100%",
                                marginTop: "2%",
                            }}
                        >
                            <Text h3 css={{ flex: "1" }}>Name:</Text>
                            <Input
                                bordered
                                color="primary"
                                placeholder="Creature Name"
                                size="lg"
                                onChange={e => setName(e.target.value)}
                                css={{ flex: "3" }}
                            />
                            <div
                                style={{
                                    flex: "1"
                                }}
                            >
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    alignItems: "center",
                                }}
                            >
                                    <Text h3 >Tags:</Text>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                width: "100%",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: "1",
                                    margin: "10px",
                                    alignItems: "center",
                                    }}
                            >

                                {/* --------------------------- */}
                                {/* Dropdown for selecting size */}
                                {/* --------------------------- */}

                                <Text h5>Size:</Text>
                                <Dropdown>
                                    <Dropdown.Button flat css={{ tt: "capitalize", width: "100%" }}>
                                        {selectedSize + (sizeItems.find((item: { key: string; }) => item.key === selectedSize)?.hitDiceValue ?
                                            " (d" + sizeItems.find((item: { key: string; }) => item.key === selectedSize)?.hitDiceValue + ")" : "")}
                                    </Dropdown.Button>
                                    <Dropdown.Menu
                                        aria-label="Size dropdown menu"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        items={sizeItems}
                                        selectedKeys={selectedSize}
                                        onAction={setSelectedSize}
                                    >
                                        {/*@ts-ignore*/}
                                        {({key, name}) => (
                                            <Dropdown.Item key={key}>
                                                {name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: "1",
                                    margin: "10px",
                                    alignItems: "center",
                                    }}
                            >

                                {/* ------------------------------- */}
                                {/* Dropdown for selecting the type */}
                                {/* ------------------------------- */}

                                <Text h5>Type:</Text>
                                <Dropdown>
                                    <Dropdown.Button flat css={{ tt: "capitalize", width: "100%" }}>
                                        {selectedType}
                                    </Dropdown.Button>
                                    <Dropdown.Menu
                                        aria-label="Type dropdown menu"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        items={typeItems}
                                        selectedKeys={selectedType}
                                        // @ts-ignore
                                        onSelectionChange={setSelectedType}
                                        css={{ maxHeight: "400px", overflow: "auto" }}
                                    >
                                        {/*@ts-ignore*/}
                                        {({key, name}) => (
                                            <Dropdown.Item key={key} css={{ tt: "capitalize" }}>
                                                {name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: "1",
                                    margin: "10px",
                                    alignItems: "center",
                                    }}
                            >

                                {/* ---------------------------------- */}
                                {/* Dropdown for selecting the subtype */}
                                {/* ---------------------------------- */}

                                <Text h5>Subtype:</Text>
                                <Dropdown>
                                    <Dropdown.Button flat css={{ tt: "capitalize", width: "100%" }}>
                                        {selectedSubtype}
                                    </Dropdown.Button>
                                    <Dropdown.Menu
                                        aria-label="Subtype dropdown menu"
                                        selectionMode="single"
                                        items={subtypeItems}
                                        selectedKeys={selectedSubtype}
                                        onAction={setSelectedSubtype}
                                        css={{ maxHeight: "400px", overflow: "auto" }}
                                    >
                                        {/*@ts-ignore*/}
                                        {({key, name}) => (
                                            <Dropdown.Item key={key}>
                                                {name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: "1",
                                    margin: "10px",
                                    alignItems: "center",
                                    }}
                            >

                                {/* ------------------------------------ */}
                                {/* Dropdown for selecting the alignment */}
                                {/* ------------------------------------ */}

                                <Text h5>Alignment:</Text>
                                <Dropdown>
                                    <Dropdown.Button flat css={{ tt: "capitalize", width: "100%" }}>
                                        {selectedAlignment}
                                    </Dropdown.Button>
                                    <Dropdown.Menu
                                        aria-label="Alignment dropdown menu"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        items={alignmentItems}
                                        selectedKeys={selectedAlignment}
                                        onAction={setSelectedAlignment}
                                        css={{ maxHeight: "400px", overflow: "auto" }}
                                    >
                                        {/*@ts-ignore*/}
                                        {({key, name}) => (
                                            <Dropdown.Item key={key}>
                                                {name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                width: "100%",
                                marginTop: "2%",
                            }}
                        >

                            {/* ---------------------------------------- */}
                            {/* Dropdown to select the armor class value */}
                            {/* ---------------------------------------- */}

                            <Text h4 css={{ flex: "1" }}>Armor Class:</Text>
                            <Dropdown>
                                <Dropdown.Button flat css={{ flex: "2" }}>
                                    {selectedArmorClass + " + (" + dexterityMod + ")"}
                                </Dropdown.Button>
                                <Dropdown.Menu
                                    aria-label="Armor Class dropdown menu"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    onAction={setSelectedArmorClass}
                                    css={{ maxHeight: "400px", overflow: "auto" }}
                                >
                                    {/* loop 30 times creating a new dropdown item with the values 1-30*/}
                                    {[...Array(30)].map((x, i) => (
                                        <Dropdown.Item key={i + 1}>
                                            {i + 1}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>

                            {/* --------------------------------------- */}
                            {/* Dropdown to select the armor type value */}
                            {/* --------------------------------------- */}

                            <Text h4 css={{ flex: "1", textAlign: "center" }}>Armor Type:</Text>
                            <Dropdown>
                                <Dropdown.Button flat css={{ flex: "2" }}>
                                    {selectedArmorType}
                                </Dropdown.Button>
                                <Dropdown.Menu
                                    aria-label="Armor Type dropdown menu"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    items={armorItems}
                                    selectedKeys={selectedArmorType}
                                    onAction={setSelectedArmorType}
                                    css={{ maxHeight: "400px", overflow: "auto" }}
                                >
                                    {/*@ts-ignore*/}
                                    {({key, name}) => (
                                        <Dropdown.Item key={key}>
                                            {name}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>

                            {/* ---------------------------------------- */}
                            {/* Dropdown to select the creature language */}
                            {/* ---------------------------------------- */}

                            <Text h4 css={{ flex: "1", textAlign: "center" }}>Language:</Text>
                            <Dropdown>
                                <Dropdown.Button flat css={{ flex: "2", tt: "capitalize" }}>
                                    {selectedLanguage}
                                </Dropdown.Button>
                                <Dropdown.Menu
                                    aria-label="Armor Type dropdown menu"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    items={languages}
                                    selectedKeys={selectedLanguage}
                                    onAction={setSelectedLanguage}
                                    css={{ maxHeight: "400px", overflow: "auto" }}
                                >
                                    {/*@ts-ignore*/}
                                    {({key, name}) => (
                                        <Dropdown.Item key={key}>
                                            {name}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                width: "100%",
                                marginTop: "2%",
                            }}
                        >
                            <Text h5 css={{ flex: "1" }}>Hit Points</Text>
                            <Input
                                aria-label={"No. of Hit Dice"}
                                bordered
                                type="number"
                                color="primary"
                                labelPlaceholder={"No. of Hit Dice"}
                                value={numHitDice}
                                size="lg"
                                width="100%"
                                css={{ flex: "2" }}
                                onChange={hitDiceSizeChange}
                            />
                            {/* Total HP is No. of Hit Dice x Hit Dice size + Con Mod*/}
                            <Text h5 css={{ flex: "1", marginLeft: "2%" }}>Total HP: {numHitDice ? numHitDice : "#"}d({hitDiceValue}) + {constitutionMod} </Text>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                flexDirection: "column",
                                width: "100%",
                                marginTop: "2%",
                            }}
                        >
                            <Text h3 >Speed:</Text>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    width: "100%",
                                }}
                            >
                                <SpeedInput name={"Base"} setSpeed={setBaseSpeed} />
                                <SpeedInput name={"Swim"} setSpeed={setSwimSpeed} />
                                <SpeedInput name={"Fly"} setSpeed={setFlySpeed} />
                                <SpeedInput name={"Climb"} setSpeed={setClimbSpeed} />
                                <SpeedInput name={"Burrow"} setSpeed={setBurrowSpeed} />
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                flexDirection: "column",
                                width: "100%",
                                marginTop: "2%",
                            }}
                        >
                            <Text h3 >Attributes:</Text>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    width: "100%",
                                }}
                            >
                                <Grid.Container gap={2} justify="space-around">
                                    <Grid sm={4}>
                                        <AttributeInput name={"Strength"} value={strength} setValue={(value) => {
                                            setSetters(parseInt(value), setStrength, setStrengthMod)
                                        }} />
                                    </Grid>
                                    <Grid sm={4}>
                                        <AttributeInput name={"Dexterity"} value={dexterity} setValue={(value) => {
                                            setSetters(parseInt(value), setDexterity, setDexterityMod)
                                        }} />
                                    </Grid>
                                    <Grid sm={4}>
                                        <AttributeInput name={"Constitution"} value={constitution} setValue={(value) => {
                                            setSetters(parseInt(value), setConstitution, setConstitutionMod)
                                        }} />
                                    </Grid>
                                    <Grid sm={4}>
                                        <AttributeInput name={"Intelligence"} value={intelligence} setValue={(value) => {
                                            setSetters(parseInt(value), setIntelligence, setIntelligenceMod)
                                        }} />
                                    </Grid>
                                    <Grid sm={4}>
                                        <AttributeInput name={"Wisdom"} value={wisdom} setValue={(value) => {
                                            setSetters(parseInt(value), setWisdom, setWisdomMod)
                                        }} />
                                    </Grid>
                                    <Grid sm={4}>
                                        <AttributeInput name={"Charisma"} value={charisma} setValue={(value) => {
                                            setSetters(parseInt(value), setCharisma, setCharismaMod)
                                        }} />
                                    </Grid>
                                </Grid.Container>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                flexDirection: "row",
                                width: "100%",
                                marginTop: "2%",
                            }}
                        >
                            <div
                                style={{
                                    flex: "2",
                                }}
                            >
                                <Text h3 >Challenge Rating:</Text>
                                <ChallengeRatingInput value={challengeRating} setChallengeRating={setChallengeRating} />
                            </div>
                            <Spacer x={2} />
                            <div
                                style={{
                                    flex: "2",
                                }}
                            >
                                <Text h3> Proficiency Bonus: </Text>
                                <Text h4> PB = {proficiencyBonus} </Text>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                flexDirection: "column",
                                width: "100%",
                                marginTop: "2%",
                            }}
                        >
                            <Text h3>Saving Throws:</Text>
                            <Text h4>Proficient Saving Throws:</Text>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-around",
                                }}
                            >
                                <Grid.Container gap={2} justify="space-around">
                                    <Grid sm={4} justify={"center"}>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                width: "100%",
                                            }}
                                        >
                                            <Checkbox css={{ flex: "1", marginBottom: "5%" }} onChange={setStrengthThrow} >STR</Checkbox>
                                            <Tooltip isDisabled={strengthThrow} content={"Select saving throw to enable modifier"} color={"primary"} hideArrow>
                                                <Input disabled={!strengthThrow} type={"number"} bordered status={!strengthThrow ? "error" : "primary"} labelPlaceholder={"STR"} css={{ flex: "1" }}/>
                                            </Tooltip>
                                        </div>
                                    </Grid>
                                    <Grid sm={4} justify={"center"}>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                width: "100%",
                                            }}
                                        >
                                            <Checkbox css={{ flex: "1", marginBottom: "5%" }} onChange={setDexterityThrow} >DEX</Checkbox>
                                            <Tooltip isDisabled={dexterityThrow} content={"Select saving throw to enable modifier"} color={"primary"} hideArrow>
                                                <Input disabled={!dexterityThrow} type={"number"} bordered status={!dexterityThrow ? "error" : "primary"} labelPlaceholder={"DEX"} css={{ flex: "1" }}/>
                                            </Tooltip>
                                        </div>
                                    </Grid>
                                    <Grid sm={4} justify={"center"}>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                width: "100%",
                                            }}
                                        >
                                            <Checkbox css={{ flex: "1", marginBottom: "5%" }} onChange={setConstitutionThrow} >CON</Checkbox>
                                            <Tooltip isDisabled={constitutionThrow} content={"Select saving throw to enable modifier"} color={"primary"} hideArrow>
                                                <Input disabled={!constitutionThrow} type={"number"} bordered status={!constitutionThrow ? "error" : "primary"} labelPlaceholder={"CON"} css={{ flex: "1" }}/>
                                            </Tooltip>
                                        </div>
                                    </Grid>
                                    <Grid sm={4} justify={"center"}>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                width: "100%",
                                            }}
                                        >
                                            <Checkbox css={{ flex: "1", marginBottom: "5%" }} onChange={setIntelligenceThrow} >INT</Checkbox>
                                            <Tooltip isDisabled={intelligenceThrow} content={"Select saving throw to enable modifier"} color={"primary"} hideArrow>
                                                <Input disabled={!intelligenceThrow} type={"number"} bordered status={!intelligenceThrow ? "error" : "primary"} labelPlaceholder={"INT"} css={{ flex: "1" }}/>
                                            </Tooltip>
                                        </div>
                                    </Grid>
                                    <Grid sm={4} justify={"center"}>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                width: "100%",
                                            }}
                                        >
                                            <Checkbox css={{ flex: "1", marginBottom: "5%" }} onChange={setWisdomThrow} >WIS</Checkbox>
                                            <Tooltip isDisabled={wisdomThrow} content={"Select saving throw to enable modifier"} color={"primary"} hideArrow>
                                                <Input disabled={!wisdomThrow} type={"number"} bordered status={!wisdomThrow ? "error" : "primary"} labelPlaceholder={"WIS"} css={{ flex: "1" }}/>
                                            </Tooltip>
                                        </div>
                                    </Grid>
                                    <Grid sm={4} justify={"center"}>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                width: "100%",
                                            }}
                                        >
                                            <Checkbox css={{ flex: "1", marginBottom: "5%" }} onChange={setCharismaThrow} >CHA</Checkbox>
                                            <Tooltip isDisabled={charismaThrow} content={"Select saving throw to enable modifier"} color={"primary"} hideArrow>
                                                <Input disabled={!charismaThrow} type={"number"} bordered status={!charismaThrow ? "error" : "primary"} labelPlaceholder={"CHA"} css={{ flex: "1" }}/>
                                            </Tooltip>
                                        </div>
                                    </Grid>
                                </Grid.Container>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                flexDirection: "column",
                                width: "100%",
                                marginTop: "2%",
                            }}
                        >
                            <Text h3 css={{ flex: "1" }}>Skills: </Text>
                            <Table
                                bordered
                                compact
                                shadow={false}
                                aria-label={"Skills selection table"}
                                css={{
                                    flex: "1",
                                    height: "auto",
                                }}
                            >
                                <Table.Header>
                                    <Table.Column width="40%">SKILLS</Table.Column>
                                    <Table.Column width="20%">PROFICIENT</Table.Column>
                                    <Table.Column width="20%">EXPERTISE</Table.Column>
                                    <Table.Column width="20%">MODIFIER</Table.Column>
                                </Table.Header>
                                <Table.Body>
                                    {skillItems.map((skill: { name: string, proficiencyLevel: ProficiencyLevel, relatedAbName: string }, index: React.Key) => (
                                        <Table.Row key={index}>
                                            <Table.Cell>{skill.name}</Table.Cell>
                                            <Table.Cell>
                                                <Checkbox
                                                    isSelected={selectedSkills[skill.name] === "proficient"}
                                                    onChange={() =>
                                                        handleCheckboxChange(skill, "proficient")
                                                    }
                                                />
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Checkbox
                                                    isSelected={selectedSkills[skill.name] === "expertise"}
                                                    onChange={() =>
                                                        handleCheckboxChange(skill, "expertise")
                                                    }
                                                />
                                            </Table.Cell>
                                            <Table.Cell>
                                                {
                                                    selectedSkills[skill.name] === "proficient"
                                                        ? findMod(skill.relatedAbName) + " + " + proficiencyBonus + " = " + (findMod(skill.relatedAbName) + proficiencyBonus)
                                                        : selectedSkills[skill.name] === "expertise"
                                                            ? findMod(skill.relatedAbName) + " x 2 + " + proficiencyBonus + " = " + (findMod(skill.relatedAbName) * 2 + proficiencyBonus)
                                                            : "-----"
                                                }
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </div>
                        <div
                            style={{
                                width: "100%",
                                marginTop: "2%",
                            }}
                        >
                            <Text h3 >Damage Vulnerabilities: </Text>
                            <Checkbox.Group
                                orientation={"horizontal"}
                                label={"Select Damage Vulnerabilities"}
                                value={selectedDamageVulnerabilities}
                                onChange={setSelectedDamageVulnerabilities}
                            >
                                {damageTypeItems.map((damageType: { name: string }, index: React.Key) => (
                                    <Checkbox key={index} value={damageType.name} css={{ width: "250px", marginTop: "5px" }}>{damageType.name}</Checkbox>
                                ))}
                            </Checkbox.Group>
                            <Text h3>Damage Resistances: </Text>
                            <Checkbox.Group
                                orientation={"horizontal"}
                                label={"Select Damage Resistances"}
                                value={selectedDamageResistances}
                                onChange={setSelectedDamageResistances}
                            >
                                {damageTypeItems.map((damageType: { name: string }, index: React.Key) => (
                                    <Checkbox key={index} value={damageType.name} css={{ width: "250px", marginTop: "5px" }}>{damageType.name}</Checkbox>
                                ))}
                            </Checkbox.Group>
                            <Text h3>Damage Immunities: </Text>
                            <Checkbox.Group
                                orientation={"horizontal"}
                                label={"Select Damage Immunities"}
                                value={selectedDamageImmunities}
                                onChange={setSelectedDamageImmunities}
                            >
                                {damageTypeItems.map((damageType: { name: string }, index: React.Key) => (
                                    <Checkbox key={index} value={damageType.name} css={{ width: "250px", marginTop: "5px" }}>{damageType.name}</Checkbox>
                                ))}
                            </Checkbox.Group>
                            <Text h3>Condition Immunities: </Text>
                            <Checkbox.Group
                                orientation={"horizontal"}
                                label={"Select Condition Immunities"}
                                value={selectedConditionImmunities}
                                onChange={setSelectedConditionImmunities}
                            >
                                {conditionItems.map((condition: { name: string }, index: React.Key) => (
                                    <Checkbox key={index} value={condition.name} css={{ width: "250px", marginTop: "5px" }}>{condition.name}</Checkbox>
                                ))}
                            </Checkbox.Group>
                            <Text h3>Senses: </Text>
                            <Table
                                bordered
                                compact
                                shadow={false}
                                aria-label={"Senses selection table"}
                                css={{
                                    flex: "1",
                                    height: "auto",
                                }}
                            >
                                <Table.Header>
                                    <Table.Column>SENSES</Table.Column>
                                    <Table.Column>DISTANCE</Table.Column>
                                    <Table.Column>MODIFIER</Table.Column>
                                </Table.Header>
                                <Table.Body>
                                    {senses.map((sense: { name: string, distance: number }, index: React.Key) => (
                                        <Table.Row key={index}>
                                            <Table.Cell>
                                                <Checkbox
                                                    onChange={() => handleSenseChange(sense)}
                                                >
                                                    {sense.name}
                                                </Checkbox>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Input
                                                    type={"number"}
                                                    labelRight={"ft."}
                                                />
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Checkbox>
                                                    Limited by range if checked
                                                </Checkbox>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            }}
                    >
                        <Button onPress={handleButtonClick}>Go Back</Button>
                        <Spacer x={0.5} />
                        <Button>Preview Creature</Button>
                        {showToast &&
                            <ToastContainer
                                position="bottom-center"
                                autoClose={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                theme="colored"
                            />
                        }
                    </div>
                </Container>
            }
        </NextUIProvider>
    );
};

export default CreatureCreator;