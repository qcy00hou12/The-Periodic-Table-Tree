addLayer("E", {
    startData() {
        return {
            unlocked: false,
            points: new Decimal(0),
        }
    }
})

addNode("Ex", {
    row: "side",
    color: "#FFFFFF",

    layerShown() {
        if (hasAchievement('A', 15)) return true
        else return false
    },

    tooltip() {
        if (player.p.Node < 1) return "ON"
        else return "OFF"
    },

    canClick() { return true },

    onClick() {
        if (player.p.Node < 1) player.p.Node = player.p.Node.add(1)
        else player.p.Node = player.p.Node.times(0)
    },
})

addLayer("Ch", {
    row: "side",
    color: "#000000",
    textStyle: { "color": "#ffffff" },
    layerShown() {
        if (player.He.IText == "Heisenburg") return true
        if (player.He.IText == "I need a new dust filter for my Hoover Max Extract Pressure Pro model 60") return true
        else return false
    },

    tooltip() { return "Lab Notes" },

    infoboxes: {
        lore: {
            title: "Note #1",
            body() { return " -just the other day, he told me it was his birthday. I mean, who cares? It's not like anyone's going to get him anything anyway. Not like anyone could. The dudes a weirdo, you should stay away from 'em. Anyway gotta go, got a client who's probably already at Lithium!" },
            titleStyle: { "color": "#ffffff" },

        },
        lore1: {
            unlocked() { if (player.He.IText == "I need a new dust filter for my Hoover Max Extract Pressure Pro model 60") return true },
            title: "Note #2",
            body() { return "Cocentrate the percipitate. Filter out to purify. Bada bing bada boom, there you go. Although, I can't keep doing this if I don't have a sufficient supply. Good thi-" },
            titleStyle: { "color": "#ffffff" },

        }
    },

    tabFormat: [
        ["infobox", "lore"],
        ["infobox", "lore1"],
    ],
})
addLayer("Per", {
    branches: ['p', 'He', 'Li'],
    row: 1,
    color: "#FFFFFF",
    tooltip() { return "" },

    infoboxes: {
        lore: {
            title: "Welcome To The Periodic Table Tree",
            body() { return "Here you will advance from element to element until I decide to stop. That's about it, not one for lore I guess... Save files if you want to skip a section or your savefile gets corrupted." },
        },
    },

    tabFormat: [
        ["infobox", "lore"],
        ["display-text",
            function () { return 'A fun little periodic table:' }],
        "blank",
        ["display-image",
            function () { return 'https://i.postimg.cc/59DXKHnn/6ce621c1-37d7-4aa1-8068-18a856d6c523.jpg' }],
        "blank",
        ["display-text",
            function () { return 'Save files:' }],
        ["display-text",
            function () { return 'Start of Hydrogen: https://www.udrop.com/file/6Mem/Start_of_Hydrogen.txt' }],
        "blank",
        ["display-text",
            function () { return 'Start of Helium: https://www.udrop.com/file/6Meu/Start_of_Helium.txt' }],
        "blank",
        ["display-text",
            function () { return 'Start of Lithium: https://www.udrop.com/file/6MGQ/Start_of_Lithium.txt' }],
        "blank",
        ["display-text",
            function () { return 'Start of Beryllium: https://www.udrop.com/file/6P0X/Start_of_Beryllium.txt' }],
        "blank",
        ["display-text",
            function () { return 'Credits: <div> Escapee, <div> smiley, <div> Jakub, <div> g🆎ples2, <div> Acamaeda, <div> incremental_gamer.' }],
    ]
})

addLayer("A", {

    startData() {
        return {
            unlocked: true,
            points: new Decimal(0),
            Expulrate: new Decimal(0.4),
            Expulrate2: new Decimal(1),
            Widenessx: new Decimal(0),
            Particlesx: new Decimal(0),
        }
    },

    color: "#ff0000",
    symbol: "A",
    row: "side",
    resource: "Achievements",

    achievements: {
        11: {
            name: "Your First Element!",
            textStyle: { "color": "#000000" },
            tooltip: "NOOOOOOOOOOOOOOOOOOOOO WAAAAAAAAY!?!@@#@#",
            style: { "background-size": "100% 100%" },
            done() { return player.E.points.gte(1) },
            image() { if (hasAchievement('A', 11)) return "https://i.postimg.cc/MpbZpCHf/232539b4-d9dd-4481-8b5c-8e70c11f3e52-prev-ui-1.png" }
        },
        12: {
            name: "Gassed Up",
            textStyle: { "color": "#000000" },
            tooltip: "Produce 10k Total Hydrogen Gas.",
            style: { "background-size": "100% 100%" },
            done() { return player.p.Gas.gte(10000) },
            image() { if (hasAchievement('A', 12)) return "https://i.postimg.cc/WbSTRMH0/183def70-5ee5-483d-acef-87bb808777cf-prev-ui-1.png" }
        },
        13: {
            name: `"Gotta Empty The Tank"`,
            textStyle: { "color": "#000000" },
            tooltip: "Hold over 1k Hydrogen Gas.",
            style: { "background-size": "100% 100%" },
            done() { return player.p.HydrogenGas.gte(1100) },
            image() { if (hasAchievement('A', 13)) return "https://i.postimg.cc/vHVpQ5T4/pixil-frame-0.png" }
        },
        14: {
            name: "Son of a GLITCH",
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            tooltip: "Decode with Base64 for answer: U3BhbSBjbGljayBvbiBob2xkIGJ1dHRvbiB3ZWlyZG8u",
            done() { return player.p.Clic.gte(101) },
            image() { if (hasAchievement('A', 14)) return "https://i.postimg.cc/0yddvF2j/527535f7-7dc4-43a5-b57a-a75afda3029b-1.png" }
        },
        15: {
            name: '"Shut Up Bitch"',
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            goalTooltip: "Spend over 201 ticks with extra text on.",
            doneTooltip: "Unlocks button to shut off some text.",
            done() { return player.p.GasTicks.gte(201) },
            image() { if (hasAchievement('A', 15)) return "https://i.postimg.cc/gkJ2mBys/84ae5647-37db-4c73-a6c3-7e50154d00bf-1.png" }
        },
        21: {
            name: "No Hydrogen?",
            textStyle: { "color": "#000000" },
            tooltip: "Get the second element.",
            style: { "background-size": "100% 100%" },
            done() { return player.E.points.gte(2) },
            image() { if (hasAchievement('A', 21)) return "https://i.postimg.cc/bvnrJyK1/f67ee54d-fa4f-4979-bc60-79070345f628-2.png" }
        },
        22: {
            name: `"Can't Empty The Tank"`,
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            tooltip: "Break the current max capacity.",
            done() { return temp['p'].clickables[11].effect.gte(2801) },
            image() { if (hasAchievement('A', 22)) return "https://i.postimg.cc/768LD06g/b3a51e4b-c5b1-4013-9b4a-81a594eb3e3f.png" }
        },
        23: {
            name: `"The Perfect Concentration"`,
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            tooltip: "Fill the bar 3 times without the multiplier dropping to 0.2.",
            done() { return player.p.HydroResets.gte(3) },
            image() { if (hasAchievement('A', 23)) return "https://i.postimg.cc/QtqT89Xy/da3cf436-9f42-4acb-bb08-3efd8abeaebe-2.png" }
        },
        24: {
            name: "NEET",
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            tooltip: "Fill up the bar around 5 times with a 1.1 Hydrogen Multiplier. Now go to the gym.",
            done() { if (hasUpgrade('p', 23)) return player.p.HydrogenPower.gte(5) },
            image() { if (hasAchievement('A', 24)) return "https://i.postimg.cc/nVQ3fmPh/cffd9b5d51642d58118de1a948cefd53-2934611896-prev-ui-1.png" }
        },
        25: {
            name: "Suffer",
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            tooltip: "It's Always Been One Step Forward And Two Steps Back.",
            done() { if (hasUpgrade('p', 24)) return player.p.points.gte(55) },
            image() { if (hasAchievement('A', 25)) return "https://i.postimg.cc/KjgsnfHj/hqdefault-692744977-prev-ui-1.png" }
        },
        31: {
            name: "Avogadro's Constant",
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            tooltip: "Get 6.022e23. Nothing else is important. Nope.",
            done() { return player.p.HydrogenPower.gte(6.022e23) },
            image() { if (hasAchievement('A', 31)) return "https://i.postimg.cc/fRTxtNRL/1200px-Talpa-europaea-MHNT-on-transparent-background-2549044357-1-prev-ui-1.png" }
        },
        32: {
            name: "High-Pitched Frequency",
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            tooltip: "Click Deflate at 497L of Helium Gas or higher.",
            done() { if (player.He.State < 1) return player.He.Inflate.gte(497) },
            image() { if (hasAchievement('A', 32)) return "https://i.postimg.cc/C5BQT7Ng/slazzer-edit-image.png" }
        },
        33: {
            name: "SCROLL_WHEEL",
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            tooltip: "Tedious work eh?.",
            done() { if (hasUpgrade('He', 16)) return player.He.HeliumExpunged.gte(0.1) },
            image() { if (hasAchievement('A', 33)) return "https://i.postimg.cc/8zQ2NhvB/steel-magspeed-electromagnetic-scroll-wheel-theres-nothing-like-it-2264955822-prev-ui-2.png" }
        },
        34: {
            name: "Hydrogen Automaton",
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            tooltip: "Get full automation of Hydrogen layer.",
            done() { if (hasUpgrade('He', 22)) return player.He.HeliumExpunged.gte(0.1) },
            image() { if (hasAchievement('A', 34)) return "https://i.postimg.cc/0Q5pRHZM/cartoon-robot-free-2185919212-prev-ui.png" }
        },
        35: {
            name: "widepeepoHappy",
            textStyle: { "color": "#000000" },
            style: { "background-size": "110% 100%" },
            tooltip: ":widepeepoHappy:",
            done() { if (hasUpgrade('He', 25)) return player.He.HeliumExpunged.gte(0.1) },
            image() { if (hasAchievement('A', 35)) return "https://i.postimg.cc/MHwFn3gm/3bgrvhjkbkt21-1272574542-1-prev-ui.png" }
        },
        41: {
            name: "Ah shit, here we go again.",
            textStyle: { "color": "#000000" },
            style: { "background-size": "110% 100%" },
            tooltip: "Unlock the third element.",
            done() { return player.E.points.gte(3) },
            image() { if (hasAchievement('A', 41)) return "https://i.postimg.cc/sX1Q8NCD/2yxpv8.png" }
        },
        42: {
            name: "Thacker Pass lithium mine.",
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            tooltip: "Money talks.",
            done() { return player.Li.resets.gte(12) },
            image() { if (hasAchievement('A', 42)) return "https://i.postimg.cc/tgh9tQFc/slazzer-edit-image-3.png" }
        },
        43: {
            name: "Mining waste into the ocean.",
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            tooltip: "Surf surf, surf surf crazy.",
            done() { return player.Li.Runlock.gte(1) },
            image() { if (hasAchievement('A', 43)) return "https://i.postimg.cc/RZ7YgMbw/sewage-in-Bangkok-prev-ui.png" }
        },
        44: {
            name: "Restpritory damage.",
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            tooltip: "Black lung.",
            done() { return player.Li.Runlock.gte(2) },
            image() { if (hasAchievement('A', 44)) return "https://i.postimg.cc/pdnJskd4/black-lung-lawsuit-1024x675-prev-ui.png" }
        },
        45: {
            name: "Doctor Who???",
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            tooltip: "Maybe you'll fix your past mistakes.",
            done() { return player.Li.Runlock.gte(2) },
            image() { if (hasAchievement('A', 45)) return "https://i.postimg.cc/vmcbkxRp/slazzer-edit-image.png" }
        },
        51: {
            unlocked() { if (hasAchievement('A', 45)) return true},
            name: "Goodbye Small Businesses",
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            tooltip: "You increase your yearly income.",
            done() { return hasChallenge('Li', 11)},
            image() { if (hasAchievement('A', 51)) return "https://i.postimg.cc/vBVqKnfr/slazzer-edit-image.png" }
        },
        52: {
            unlocked() { if (hasAchievement('A', 52)) return true},
            name: "Goodbye Safety Goggles",
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            tooltip: "You increase your yearly income.",
            done() { return hasChallenge('Li', 12)},
            image() { if (hasAchievement('A', 45)) return "https://i.postimg.cc/sDkNpwWV/brokenglasses1-prev-ui.png" }
        },
        53: {
            unlocked() { if (hasAchievement('A', 53)) return true},
            name: "Goodbye Safety Nets",
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            tooltip: "You increase your yearly income.",
            done() { return hasChallenge('Li', 13)},
            image() { if (hasAchievement('A', 45)) return "https://i.postimg.cc/mDZXLrcq/main-qimg-02df11ec0c5652239094af55ebaff030-c-prev-ui.png" }
        },
        54: {
            unlocked() { if (hasAchievement('A', 54)) return true},
            name: "Goodbye Fair Prices",
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            tooltip: "You increase your yearly income.",
            done() { return hasChallenge('Li', 14)},
            image() { if (hasAchievement('A', 45)) return "https://i.postimg.cc/DwyP4NfJ/slazzer-edit-image-1.png" }
        },
        55: {
            unlocked() { if (hasAchievement('A', 55)) return true},
            name: "Become A Monster",
            textStyle: { "color": "#000000" },
            style: { "background-size": "100% 100%" },
            tooltip: "You've made life hell for others.",
            done() { return hasChallenge('Li', 15)},
            image() { if (hasAchievement('A', 45)) return "https://i.postimg.cc/SN0ys0rd/th-1543333648.jpg" }
        },
    },

    clickables: {
        11: {
            title: "Get Achievement 4",
            display() {
                return "If you can't get it normally anymore or don't understand how to get it."
            },
            style: { "background-color": "#0000ff" },
            canClick() {
                return true
            },
            style: { "color": "#ededed" },
            onClick() { return player.p.Clic = player.p.Clic.add(101) },
        },
        12: {
            unlocked() { if (hasUpgrade('He', 15)) return true},
            title: "Bab- Mobile Mode.",
            display() {
                return "If you can't press the Inflate and Deflated with the rapid movement, press this button. Click again if you change your mind."
            },
            style: { "background-color": "#0000ff" },
            canClick() {
                return true
            },
            style: { "color": "#ededed" },
            onClick() { if (player.A.Widenessx.gte(1)) return player.A.Widenessx = player.A.Widenessx.times(0)
              else return  player.A.Widenessx = player.A.Widenessx.add(1)
            },
        },
        13: {
            unlocked() { if (hasMilestone('Li', 5)) return true},
            title: "Particles are spooky.",
            display() {
                return "If you hate particles, press this button. Click again if you change your mind."
            },
            style: { "background-color": "#0000ff" },
            canClick() {
                return true
            },
            style: { "color": "#ededed" },
            onClick() { 
                if (player.A.Particlesx.gte(1)) return player.A.Particlesx = player.A.Particlesx.times(0)
                else return  player.A.Particlesx = player.A.Particlesx.add(1)
            },
        },
    },

    tabFormat: [
        ["display-text",
            function () {
                if (player.p.Node < 1) return 'You have ' + formatWhole(player.A.points) + ' achievements'
                else return 'Heisenburg'
            }],
        "blank",
        "achievements",
        "clickables",
    ],

    update() {
       
        if (player.He.HeliumExpunged > 1 && hasUpgrade('He', 21) == false && hasMilestone('Li', 1) == false) player.He.HeliumExpunged = player.He.HeliumExpunged.add(-player.A.Expulrate)
        if (player.He.HeliumExpunged < 0.1 && hasUpgrade('He', 21) == false && hasMilestone('Li', 1) == false) player.He.HeliumExpunged = player.He.HeliumExpunged.add(player.A.Expulrate2)
        player.p.HydroGain = player.p.HydroGain.times(0),
            player.A.points = new Decimal(player.A.achievements.length)
        if (player.p.HydrogenMult < 0.2) player.p.HydroResets = player.p.HydroResets.times(0)
    }
})

addLayer("p", {
    name: "Hydrogen", // This is optional, only used in a few places, If absent it just uses the layer id.
    image: "https://i.postimg.cc/sxTpYZ07/a1f4826e-e1d2-40a3-8027-e243e33ca67b-Photo-Room-1.png", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() {
        return {
            unlocked: true,
            points: new Decimal(0),
            HydrogenGas: new Decimal(0),
            HydrogenPower: new Decimal(0),
            HydrogenMult: new Decimal(0),
            Gas: new Decimal(0),
            GasTicks: new Decimal(0),
            HydroGain: new Decimal(0),
            Node: new Decimal(0),
            Clic: new Decimal(0),
            HydroResets: new Decimal(0),
        }
    },

    color: "#0000ff",
    requires() { return player.He.points.add(1).pow(2) }, // Can be a function that takes requirement increases into account
    resource: "Hydrogen", // Name of prestige currency
    baseResource: "Hydrogen Power", // Name of resource prestige is based on
    baseAmount() { return player.p.HydrogenPower }, // Get the current amount of baseResource
    requires: new Decimal(1),
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent() {
        exp = new Decimal(0.8)
        upgra = new Decimal(player.p.upgrades.length)
        if (hasUpgrade('p', 16)) return exp.times(upgra.pow(-0.22))
        else return exp
    }, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        { key: "h", description: "H: Reset for Hydrogen", onPress() { if (canReset(this.layer)) doReset(this.layer)}, 
        unlocked() { if (hasUpgrade('He', 11)) return false
        else return true}},
    ],

    layerShown() { return true },

    onPrestige() {
        if (hasUpgrade('He', 22)) return ""
        player.p.HydrogenPower = player.p.HydrogenPower.times(0)
    },

    autoPrestige() { if (hasUpgrade('He', 11)) return true },

    canBuyMax() { return (hasMilestone('p', 3)) },

    tooltip() { return player.p.points + " Hydrogen and " + formatWhole(player.p.HydrogenPower) + " Hydrogen Power" },

    bars: {
        HydrogenBar: {
            direction: UP,
            width: 200,
            height() {
                if (hasUpgrade('p', 16)) return 600
                else return 400
            },
            progress() {
                prog1 = 499.99
                if (hasMilestone('p', 2)) prog1 = 999.99
                if (hasUpgrade('p', 16)) prog1 = 1999.99
                if (hasMilestone('He', 3)) prog1 = 19999.99
                if (hasUpgrade('p', 22)) prog1 = 19999999999.99
                if (hasUpgrade('p', 23)) prog1 = 7999999.99
                if (hasUpgrade('p', 25)) prog1 = 19999.99
                if (hasUpgrade('He', 22)) return 1
                return player.p.HydrogenGas / prog1
            },
            display() { return "Hydrogen Tank" },
            fillStyle: { "background-color": "#0000ff" }
        },

        HydrogenBar1: {
            direction: UP,
            width: 200,
            height() {
                if (hasUpgrade('p', 16)) return 600
                else return 400
            },
            progress() {
                let P2 = new Decimal(0)
                prog2 = 999.99
                if (hasUpgrade('p', 16)) prog2 = 1999.99
                if (hasMilestone('He', 3)) prog2 = 19999.99
                if (hasUpgrade('p', 22)) prog2 = 19999999999.99
                if (hasUpgrade('p', 23)) prog2 = 7999999.99
                if (hasUpgrade('p', 25)) prog2 = 19999.99
                if (hasUpgrade('He', 22)) return 1
                if (player.p.HydrogenGas > prog2) P2 = player.p.HydrogenGas.add(-prog2) / prog2
                return P2
            },
            display() { return "Hydrogen Tank" },
            fillStyle: { "background-color": "#0000ff" },
            unlocked() {
                if (hasUpgrade('p', 14)) return true
                else return false
            }
        },

        HydrogenBar2: {
            direction: UP,
            width: 200,
            height() {
                if (hasUpgrade('p', 16)) return 600
                else return 400
            },
            progress() {
                prog3 = 3
                if (hasUpgrade('p', 23)) prog3 = 1.11
                if (hasUpgrade('p', 24)) prog3 = 10
                return player.p.HydrogenMult / prog3
            },
            display() { return "Hydrogen Multiplier Tank <div> Currently: " + format(player.p.HydrogenMult) + "x" },
            fillStyle: { "background-color": "#ff0000" },
            unlocked() {
                if (hasMilestone('He', 3)) return true
                else return false
            }
        }
    },

    milestones: {
        1: {
            style: { "color": "#ededed" },
            requirementDescription: "1 Hydrogen",
            effectDescription: "2x Hydogen Gas.",
            done() { return player.p.points.gte(1) },
            onComplete() { player.E.points = player.E.points.add(1) },
        },
        2: {
            style: { "color": "#ededed" },
            requirementDescription: "2 Hydrogen",
            effectDescription: "2x Hydrogen Tank Capacity. Also unlock upgrades.",
            done() { return player.p.points.gte(2) },
            unlocked() {
                if (hasMilestone('p', 1)) return true
            },
        },
        3: {
            style: { "color": "#ededed" },
            requirementDescription: "3 Hydrogen",
            effectDescription: "Buy max Hydrogen.",
            done() { return player.p.points.gte(3) },
            unlocked() {
                if (hasMilestone('p', 2)) return true
            },
        },
        4: {
            style: { "color": "#ededed" },
            requirementDescription: "20 Hydrogen",
            effectDescription: "Hydrogen Gas boosts Hydrogen Gas. (Must have 6 Hydrogen Upgrades.)",
            done() { if (hasUpgrade('p', 16)) return player.p.points.gte(20) },
            unlocked() {
                if (hasMilestone('p', 3)) return true
            },
        },
    },

    upgrades: {
        11: {
            style: { "color": "#ededed" },
            title: "Hydrogen's Gassed Up",
            description: "Hydrogen Gas gain is raised to the power of 2.",
            cost() {
                if (hasUpgrade('p', 12)) return new Decimal(3)
                else return new Decimal(2)
            },
            unlocked() {
                if (hasMilestone('p', 2)) return true
                else return false
            },
        },
        12: {
            style: { "color": "#ededed" },
            title: "Hydrogen's Based",
            description: "Gain 1 to Hydrogen Gas base",
            cost() {
                if (hasUpgrade('p', 11)) return new Decimal(3)
                else return new Decimal(2)
            },
            unlocked() {
                if (hasMilestone('p', 2)) return true
                else return false
            },
        },
        13: {
            style: { "color": "#ededed" },
            title: "Hydrogen's Bonding",
            description: "Add 2 more to base of Hydrogen Gas.",
            cost: new Decimal(8),
            unlocked() {
                if (hasUpgrade('p', 11)) return true
                if (hasUpgrade('p', 12)) return true
                else return false
            },
        },
        14: {
            style: { "color": "#ededed" },
            title: "Hydrogen's Expanding",
            description: "Get a 2nd Hydrogen tank. Keep cost.",
            cost: new Decimal(16),
            onPurchase() { return player.p.points = player.p.points.add(16) },
            unlocked() {
                if (hasUpgrade('p', 13)) return true
                else return false
            },
        },
        15: {
            style: { "color": "#ededed" },
            title: "Hydrogen's Powering Up",
            description: "Hydrogen Power boosts Hydrogen Gas.",
            effectDisplay() { return "+" + format(effect2) },
            cost: new Decimal(18),
            unlocked() {
                if (hasUpgrade('p', 14)) return true
                else return false
            },
        },
        16: {
            style: { "color": "#ededed" },
            title: "Hydrogen's Half Lifed",
            description: "Hydrogen upgrades on this row cut Hydrogen cost, but Hydrogen Tank capcity 2x.",
            cost: new Decimal(20),
            effectDisplay() { return "/" + format(upgra.pow(-0.22)) },
            unlocked() {
                if (hasUpgrade('p', 15)) return true
                else return false
            },
        },
        21: {
            style: { "color": "#ededed" },
            title: "Hydrogen's Hilarity",
            description: "Unlock Helium. Keep cost.",
            cost: new Decimal(100),
            onPurchase() { return player.p.points = player.p.points.add(100) },
            unlocked() {
                if (hasUpgrade('p', 16)) return true
                else return false
            },
        },
        22: {
            style: { "color": "#ededed" },
            title: "Hydrogen's Lightness",
            description: "Hydrogen Multiplier falls slower but increase tank capacity by 1 million times. Lose all your Helium",
            cost: new Decimal(400),
            onPurchase() { return player.p.points = player.p.points.times(0), player.p.HydrogenPower = player.p.HydrogenPower.times(0), player.p.HydrogenGas = player.p.HydrogenGas.times(0) },
            unlocked() {
                if (hasUpgrade('He', 13)) return true
                else return false
            },
        },
        23: {
            style: { "color": "#ededed" },
            title: "Hydrogen's Embrittled",
            description: "Hydrogen Tank capacity is much lower but so is the Hydrogen Multiplier cap.",
            cost: new Decimal(12),
            onPurchase() { return player.p.HydrogenMult = player.p.HydrogenMult.times(0.1), player.p.HydrogenPower = player.p.HydrogenPower.times(0) },
            unlocked() {
                if (hasUpgrade('p', 22)) return true
                else return false
            },
        },
        24: {
            style: { "color": "#ededed" },
            title: "Hydrogen's Enthalpy Of Combustion",
            description: "Increase Hydrogen Multiplier cap but Hydrogen Gas gain is divided on an exponent of how large the multiplier is. The middle has a sweet spot.",
            cost: new Decimal(10),
            onPurchase() { return player.p.HydrogenMult = player.p.HydrogenMult.times(0.1), player.p.HydrogenPower = player.p.HydrogenPower.times(0) },
            unlocked() {
                if (hasUpgrade('p', 23)) return true
                else return false
            },
        },
        25: {
            style: { "color": "#ededed" },
            title: "Hydrogen's Detonation",
            description: "Helium hardcap is removed. Hydrogen Tank cap is decreased.",
            cost: new Decimal(15),
            onPurchase() { return player.p.HydrogenMult = player.p.HydrogenMult.times(0.1), player.p.HydrogenPower = player.p.HydrogenPower.times(0) },
            unlocked() {
                if (hasUpgrade('p', 24)) return true
                else return false
            },
        },
        26: {
            style: { "color": "#ededed" },
            title: "Hydrogen's Tritium",
            description: "Unlock balloons. Remove Hydrogen Multiplier Division. Multiplier also boosts Hydrogen Power. Hydrogen Multiplier falls much slower.",
            cost: new Decimal(1600),
            unlocked() {
                if (hasUpgrade('p', 25)) return true
                else return false
            },
        }
    },


    clickables: {
        11: {
            title: "Hydrogen Gas",
            display() {
                return "Produce Hydrogen Gas on hold."
            },
            style: { "background-color": "#0000ff" },
            canClick() {
                return true
            },
            style: { "color": "#ededed" },
            effect() {
                let effect = new Decimal(0.9)
                effect2 = new Decimal(1)
                effect3 = new Decimal(2)
                effect4 = new Decimal(1)
                effect5 = new Decimal(2)
                effect6 = new Decimal(1)
                effectMult2 = new Decimal(1)
                prog = 499.99
                if (player.Li.resets > 0) effect5 = 4, effect6 = 2
                if (hasUpgrade('p', 26)) effectMult2 = effectMult2.add(player.p.HydrogenMult)
                if (hasMilestone('He', 5)) effect4 = 0
                if (hasUpgrade('He', 13)) effect3 = 1
                if (hasUpgrade('p', 25)) effect4 = 1
                if (hasUpgrade('p', 25)) effect3 = 2
                if (hasUpgrade('p', 12)) effect = effect.add(1)
                if (hasUpgrade('p', 13)) effect = effect.add(2)
                if (hasMilestone('p', 2)) prog = 999.99
                if (hasUpgrade('p', 14)) prog = 1999.99
                if (hasUpgrade('p', 16)) prog = 3999.99
                if (hasMilestone('He', 3)) prog = 39999.99
                if (hasUpgrade('p', 22)) prog = 39999999999.99
                if (hasUpgrade('p', 23)) prog = 16340999.99
                if (hasUpgrade('p', 25)) prog = 39999.99
                if (hasMilestone('p', 1)) effect = effect.times(2)
                if (hasUpgrade('p', 11)) effect = effect.pow(2)
                if (hasUpgrade('p', 15)) effect2 = effect2.add(player.p.HydrogenPower.pow(0.8))
                if (effect2 > 99.99) effect2 = 100
                if (hasUpgrade('p', 15)) effect = effect.add(effect2)
                if (hasMilestone('p', 4)) effect = effect.add(effect.times(player.p.points.add(1).pow(0.2)))
                effect = effect.times(player.He.points.pow(effect3).times(effect4).add(1))
                if (player.p.HydrogenGas > prog) player.p.HydroResets = player.p.HydroResets.add(1), player.p.HydrogenPower = player.p.HydrogenPower.times(effectMult2).add(1).add(player.p.points.add(player.p.points).times(player.He.points.add(1).pow(effect3).times(effect4).times(player.Li.points.add(1).pow(effect5).times(effect6)))), player.p.HydrogenGas = player.p.HydrogenGas.times(0)
                return effect
            },
            unlocked() {
                if (hasUpgrade('He', 12)) return false
                else return true
            },
            onClick() {
                if (hasUpgrade('p', 14)) player.p.Clic = player.p.Clic.add(1)
            },
            onHold() {
                player.p.GasTicks = player.p.GasTicks.add(1)
                if (player.p.Node < 1) player.p.HydroGain = player.p.HydroGain.add(1)
                player.p.HydrogenGas = player.p.HydrogenGas.add((temp['p'].clickables[11].effect).times(player.p.HydrogenMult.add(1)).times(player.Li.points.add(1).pow(effect5).times(effect6)))
                player.p.Gas = player.p.Gas.add(temp['p'].clickables[11].effect)
            },
        },
        12: {
            title: "Hydrogen Multiplier",
            display() {
                return "Multiply Hydrogen Gas gain on hold."
            },
            style: { "color": "#ededed" },
            unlocked() {
                if (hasMilestone('He', 3) && hasUpgrade('He', 22) == false) return true
                else return false
            },
            canClick() {
                return true
            },
            effect() {
                effectM = new Decimal(0.2)
                effectMult = new Decimal(0)
                effectMult = effectMult.add(player.p.HydrogenMult.add(1))
                effectD = new Decimal(5)
                lightfall = new Decimal(-0.1)
                Equa = new Decimal(0)
                cap = new Decimal(3)
                if (hasUpgrade('p', 24)) effectD = effectMult
                if (hasUpgrade('p', 26)) effectD = 5
                if (effectD > 5) effectMult = new Decimal(0.1).div(effectMult)
                if (effectD < 4) effectMult = new Decimal(0.1).div(effectMult)
                if (hasUpgrade('p', 23)) cap = 1.11
                if (hasUpgrade('p', 24)) cap = 10
                if (hasUpgrade('p', 22)) lightfall = -0.05
                if (hasUpgrade('p', 26)) lightfall = -0.005
                if (hasUpgrade('p', 24)) Equa = 2
                if (hasMilestone('He', 3)) Equa = 0.1
                if (hasMilestone('He', 4)) Equa = 0
                if (hasUpgrade('He', 16)) Equa = 0
                if (player.p.HydrogenMult > Equa) player.p.HydrogenMult = player.p.HydrogenMult.add(lightfall)
                if (player.p.HydrogenMult < Equa) player.p.HydrogenMult = player.p.HydrogenMult.add(-lightfall)
                return effectM
            },
            onHold() {
                player.p.HydrogenMult = player.p.HydrogenMult.add(temp['p'].clickables[12].effect)
                if (player.p.HydrogenMult > cap) player.p.HydrogenMult = player.p.HydrogenMult.add(effectM.times(-1))
            }
        }
    },

    infoboxes: {
        lore: {
            titleStyle: { "color": "#ededed" },
            title: "Hydrogen",
            body() { return "This is a periodic table tree and it all starts with hydrogen because of its- well, its atomic properties technically. Anyway, start producing some hydrogen gas so we can convert it into energy or something." },
        },
    },

    tabFormat: [
        ["infobox", "lore"],
        ["display-text",
            function () { if (player.p.Node < 1) return 'Hydrogen increases Hydrogen Power gain by ' + formatWhole(player.p.points.add(player.p.points)) }],
        "blank",
        "main-display",
        () => (hasUpgrade('He', 11)) ? "" : "prestige-button",
        ["display-text",
            function () { if (player.p.Node < 1) return 'You have ' + formatWhole(player.p.HydrogenPower) + ' Hydrogen Power' }],
        "blank",
        "milestones",
        "blank",
        ["display-text",
            function () { if (player.p.Node < 1) return 'You have ' + format(player.p.HydrogenGas) + 'L Hydrogen Gas' }],
        ["display-text",
            function () { if (player.p.HydroGain > 0) return 'You are making ' + format(temp['p'].clickables[11].effect) + 'L Hydrogen Gas per tick' }],
        ["row", [//Hydro
            ["bar", "HydrogenBar"],
            "blank",
            ["bar", "HydrogenBar1"],
            "blank",
            "blank",
            ["bar", "HydrogenBar2"],
        ]],
        "blank",
        "clickables",
        "blank",
        "upgrades",
    ],

    doReset(resettingLayer) {
        if (layers[this.layer].row >= layers[resettingLayer].row) return
        let keptMilestones = []
        let keptUpgrades = []
        if (player.He.resets > 0) keptMilestones.push(...player.p.milestones.slice(0, player.He.resets))
        if (player.He.resets > 1) keptUpgrades.push(...player.p.upgrades.slice(0, player.He.resets))
        layerDataReset(this.layer)
        player.p.upgrades.push(...keptUpgrades)
        player.p.milestones.push(...keptMilestones)
    },

    automate() {
        if (hasUpgrade('He', 22)) player.p.HydrogenMult = player.p.HydrogenMult.add(temp['p'].clickables[12].effect)
        if (hasUpgrade('He', 22) && player.p.HydrogenMult > cap) player.p.HydrogenMult = player.p.HydrogenMult.add(effectM.times(-1))
        if (hasUpgrade('He', 12)) player.p.GasTicks = player.p.GasTicks.add(1),
            player.p.HydroGain = player.p.HydroGain.add(1),
            player.p.HydrogenGas = player.p.HydrogenGas.add(temp['p'].clickables[11].effect).times(effectMult.add(1)),
            player.p.Gas = player.p.Gas.add(temp['p'].clickables[11].effect)
    },
})

addLayer("He", {
    name: "Helium", // This is optional, only used in a few places, If absent it just uses the layer id.
    image: "https://i.postimg.cc/RZMcmXvm/1764b201-ab45-4111-9c8a-646628e64d5c.png", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() {
        return {
            unlocked: true,
            total: new Decimal(0),
            points: new Decimal(0),
            HeliumExpunged: new Decimal(0),
            resets: new Decimal(0),
            State: new Decimal(1),
            Inflate: new Decimal(1),
            IText: "Hello",
            BalDiv: new Decimal(0),
            BalDiv1: new Decimal(0),
        }
    },

    layerShown() {
        if (hasUpgrade('p', 21)) return true
        if (player.He.total > 0) return true
        if (player.Li.total > 0) return true
        else return false
    },

    color: "#00ffff ",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "Helium", // Name of prestige currency
    baseResource: "Hydrogen", // Name of resource prestige is based on
    baseAmount() { return player.p.points }, // Get the current amount of baseResource
    requires: new Decimal(100),
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent() {
        if (hasUpgrade('He', 21)) return 0.5
        else return 0.1
    }, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    displayRow: 0,

    hotkeys: [
        { key: "e", description: "E: Reset for Helium", onPress() { if (canReset(this.layer)) doReset(this.layer)},
        unlocked() { if (hasMilestone('Li', 2)) return false
        else return true}},
    ],

    onPrestige() {
        player.He.resets = player.He.resets.add(1)
    },

    tooltip() { return formatWhole(player.He.points) + " Helium" },
    tooltipLocked() { return formatWhole(player.He.points) + " Helium" },

    clickables: {
        11: {
            title: "Inflate",
            display() {
                if (player.He.State > 0) return "On"
                else return "Off"
            },
            unlocked() {
                if (hasMilestone('Li', 5)) return false
                if (hasUpgrade('p', 26)) return true
                else return false
            },
            canClick() {
                return true
            },
            effect() {
                BalMult = new Decimal(1)
                InRate = new Decimal(1)
                cap2 = new Decimal(49)
                cap3 = new Decimal(49)
                cap3 = cap2
                cap3 = cap3.add(-10)
                if (hasUpgrade('p', 26)) cap2 = 49
                player.He.BalDiv = player.He.Inflate
                player.He.BalDiv1 = player.He.Inflate
                if (hasUpgrade('He', 16)) player.He.BalDiv = player.He.BalDiv.times(0.3)
                if (hasUpgrade('He', 23)) player.He.BalDiv = player.He.BalDiv.times(0.1)
                if (hasUpgrade('He', 16)) player.He.BalDiv1 = player.He.BalDiv1.times(0.3)
                if (hasUpgrade('He', 23)) player.He.BalDiv1 = player.He.BalDiv1.times(0.1)
                if (hasUpgrade('He', 24)) player.He.BalDiv1 = player.He.BalDiv1.add(player.He.Inflate.pow(0.7))
                if (hasUpgrade('He', 25)) player.He.BalDiv1 = player.He.BalDiv1.add(player.He.Inflate)
                if (hasMilestone('Li', 1)) player.He.BalDiv1 = player.He.BalDiv1.times(0)
                if (player.A.Widenessx.gte(1)) player.He.BalDiv1 = player.He.BalDiv1.times(0)
                if (hasUpgrade('He', 15) && player.A.Widenessx.gte(1)) InRate = 10
                if (hasUpgrade('He', 24)) InRate = 20
                if (hasUpgrade('He', 14)) cap2 = 499
                if (hasUpgrade('He', 23)) cap2 = 4999
                if (player.He.Inflate > cap2) player.He.Inflate = player.He.Inflate.times(0)
                if (player.He.State > 0) player.He.Inflate = player.He.Inflate.add(InRate)
                return cap2
            },
            onClick() {
                player.He.State = player.He.State.add(1)
            }

        },
        12: {
            title: "Deflate",
            display() {
                if (player.He.State < 1) return "On"
                else return "Off"
            },
            unlocked() {
                if (hasMilestone('Li', 5)) return false
                if (hasUpgrade('p', 26)) return true
                else return false
            },
            effect() {
                BalMult = new Decimal(1)
                if (hasUpgrade('He', 21)) BalMult = BalMult.add((player.He.points).pow(1.1))
                if (hasMilestone('He', 6)) BalMult = softcap(BalMult, new Decimal(500), 0.1)
                if (player.He.State > 0) return ""
                if (player.He.Inflate > 0) player.He.Inflate = player.He.Inflate.add(-InRate), player.He.HeliumExpunged = player.He.HeliumExpunged.add(1).add(player.He.Inflate.pow(0.1)).add(BalMult.times(player.Li.points.add(1).pow(effect5).times(effect6)))
            },
            canClick() {
                return true
            },
            onClick() {
                player.He.State = player.He.State.times(0)
            }
        }
    },

    automate() {
        if (hasMilestone('Li', 5) && player.He.Inflate <= 0) player.He.State = player.He.State.add(1)
        if (hasMilestone('Li', 5) && player.He.Inflate >= cap3) player.He.State = player.He.State.times(0)
    },

    milestones: {
        1: {
            style: { "color": "#ededed" },
            requirementDescription: "1 Total Helium",
            effectDescription: "Keep 1 Hydrogen milestone per reset.",
            done() { return player.He.total.gte(1) },
            onComplete() { player.E.points = player.E.points.add(1) },
        },
        2: {
            style: { "color": "#ededed" },
            requirementDescription: "2 Total Helium",
            effectDescription: "Keep 1 Hydrogen upgrade per reset.",
            done() { return player.He.total.gte(2) },
            unlocked() {
                if (hasMilestone('He', 1)) return true
            },
        },
        3: {
            style: { "color": "#ededed" },
            requirementDescription: "7 Total Helium",
            effectDescription: "Unlock a multiplier tank but 10x tank capacity. Hydrogen Multiplier starts at 0.1.",
            done() { return player.He.total.gte(7) },
            unlocked() {
                if (hasMilestone('He', 2)) return true
            },
        },
        4: {
            style: { "color": "#ededed" },
            requirementDescription: "10 Helium",
            effectDescription: "Hydrogen Mutiplier now starts at 0.",
            done() { return player.He.points.gte(10) },
            unlocked() {
                if (hasMilestone('He', 3)) return true
            },
        },
        5: {
            style: { "color": "#ededed" },
            requirementDescription: `Have Upgrade "Hydrogen's Lightness"`,
            effectDescription: "Helium Mutiplier is now 0, same with Helium.",
            done() { return hasUpgrade('p', 22) },
            onComplete() { return player.He.points = player.He.points.times(0) },
            unlocked() {
                if (hasMilestone('He', 4)) return true
            },
        },
        6: {
            style: { "color": "#ededed" },
            requirementDescription: "500 Helium",
            effectDescription: "Softcap Helium boost to Hydrogen Exponged gain starting at 500 Helium.",
            done() { if (hasUpgrade('He', 21)) return player.He.points.gte(500) },
            unlocked() {
                if (hasUpgrade('He', 21)) return true
            },
        },
    },

    upgrades: {
        11: {
            title: "Knock Knock",
            description: "Unlock Hydrogen button automation. Gain 1 Helium from Jules Janssen.",
            cost() { return new Decimal(5) },
            onPurchase() { return player.He.points = player.He.points.add(1) },
            unlocked() {
                if (hasMilestone('He', 2)) return true
                else return false
            },
        },
        12: {
            title: "Who's There?",
            description: "Unlock Hydrogen tank automation.",
            cost() { return new Decimal(10) },
            unlocked() {
                if (hasUpgrade('He', 11)) return true
                else return false
            },
        },
        13: {
            title: "Helium Hydride Corrosion!",
            description: "Remove exponent of Helium effect but unlock more Hydrogen upgrades. Keep Cost.",
            cost() { return new Decimal(100) },
            onPurchase() { return player.He.points = player.He.points.add(100), player.p.HydrogenMult = player.p.HydrogenMult.times(0.1), player.p.HydrogenPower = player.p.HydrogenPower.times(0), player.p.points = player.p.points.times(0) },
            unlocked() {
                if (hasUpgrade('He', 12)) return true
                else return false
            },
        },
        14: {
            title: "Natural Gas Extraction. (This is a fart joke).",
            description: "Increase Balloon capcity and Helium Gas Expunged rate.",
            currencyDisplayName: "Helium Gas Expunged",
            currencyInternalName: "HeliumExpunged",
            currencyLocation() { return player.He },
            cost() { return new Decimal(500) },
            unlocked() {
                if (hasUpgrade('p', 26)) return true
                else return false
            },
        },
        15: {
            title: "Feel That Superfluidity.",
            description: "Increase Helium Gas Inflate and Deflate gain.",
            currencyDisplayName: "Helium Gas Expunged",
            currencyInternalName: "HeliumExpunged",
            currencyLocation() { return player.He },
            cost() { return new Decimal(2500) },
            unlocked() {
                if (hasUpgrade('He', 14)) return true
                else return false
            },
        },
        16: {
            title: "Haha, That Last Upgrade Only Made Things Harder!",
            description: "Reduce image scaling.",
            currencyDisplayName: "Helium Gas Expunged",
            currencyInternalName: "HeliumExpunged",
            currencyLocation() { return player.He },
            cost() { return new Decimal(1000) },
            unlocked() {
                if (hasUpgrade('He', 15)) return true
                else return false
            },
        },
        21: {
            title: `Helium "Leak Detection"`,
            description: "Greatly reduce the Helium requirement exponent. Helium now multiplies Helium expunged gain. Helium Gas no longer has gas constantly decreasing. Keep 50% of cost.",
            cost() { return new Decimal(500) },
            onPurchase() { return player.He.points = player.He.points.add(250) },
            unlocked() {
                if (hasUpgrade('He', 16)) return true
                else return false
            },
        },
        22: {
            title: "Aww man, no narcotic properties?",
            description: "Automate multiplier button and resetting Hydrogen resets nothing. Increase Inflation and Deflation rate.",
            currencyDisplayName: "Helium Gas Expunged",
            currencyInternalName: "HeliumExpunged",
            currencyLocation() { return player.He },
            cost() { return new Decimal(250000) },
            unlocked() {
                if (hasUpgrade('He', 21)) return true
                else return false
            },
        },
        23: {
            title: "Dude, I think I'm getting progressively Higher.",
            description: "Increase Ballon Capacity and reduce image scaling.",
            currencyDisplayName: "Helium Gas Expunged",
            currencyInternalName: "HeliumExpunged",
            currencyLocation() { return player.He },
            cost() { return new Decimal(500000) },
            unlocked() {
                if (hasUpgrade('He', 22)) return true
                else return false
            },
        },
        24: {
            title: "I'm Floatingggg.",
            description: "Float.",
            currencyDisplayName: "Helium Gas Expunged",
            currencyInternalName: "HeliumExpunged",
            currencyLocation() { return player.He },
            cost() { return new Decimal(500000) },
            unlocked() {
                if (hasUpgrade('He', 23)) return true
                else return false
            },
        },
        25: {
            title: "Going 1355.633077 miles an hour.",
            description: "Gas Gas Gas.",
            currencyDisplayName: "Helium Gas Expunged",
            currencyInternalName: "HeliumExpunged",
            currencyLocation() { return player.He },
            cost() { return new Decimal(1000000) },
            unlocked() {
                if (hasUpgrade('He', 24)) return true
                else return false
            },
        },
        26: {
            title: "Naw man, come on. Don't leave now!",
            description: "Unlock Lithium. Keep cost.",
            currencyDisplayName: "Helium Gas Expunged",
            currencyInternalName: "HeliumExpunged",
            currencyLocation() { return player.He },
            cost() { return new Decimal(69420) },
            onPurchase() { return player.He.HeliumExpunged = player.He.HeliumExpunged.add(69420) },
            unlocked() {
                if (hasUpgrade('He', 25)) return true
                else return false
            },
        },
    },

    infoboxes: {
        lore: {
            title: "Helium",
            body() { return "Another gas at SATP. I've got uh, um, some balloons for uh, um, for a party. Just go ahead and start inflating them once you can." },
        },
    },

    tabFormat: [
        ['infobox', 'lore'],
        ["display-text",
            function () { if (player.p.Node < 1) return 'Helium boosts Hydrogen Power and Hydrogen Gas gain by ' + formatWhole(player.He.points.add(1).pow(effect3).times(effect4)) }],
        ["display-text",
            function () { if (player.p.Node < 1 && hasUpgrade('He', 21)) return 'Helium also boosts Helium Expunged gain by adding ' + format((BalMult)) }],
        "blank",
        "main-display",
        () => (hasMilestone('Li', 2)) ? "" : "prestige-button",
        "blank",
        ["display-text",
            function () { if (player.p.Node < 1) return 'You have done ' + formatWhole(player.He.resets) + ' resets' }],
        "milestones",
        "upgrades",
        "blank",
        ["display-text",
            function () { if (hasUpgrade('p', 26) && player.p.Node < 1) return 'You have ' + format(player.He.HeliumExpunged) + 'L Helium Gas Expunged' }],
        ["display-text",
            function () { if (hasUpgrade('p', 26) && player.p.Node < 1) return 'You have ' + format(player.He.Inflate) + 'L Helium Gas' }],
        ["display-image",
            function () {
                if (hasUpgrade('p', 26) && player.He.Inflate > 3) return 'https://i.postimg.cc/tR1vQzt7/d43opezd7zfz-2494814611-1-prev-ui-1.png'
                if (hasUpgrade('p', 26) && player.He.Inflate < 4) return 'https://i.postimg.cc/fy4chYD0/balloon-pop-hi-794366064-prev-ui-1.png'
            }],
        "clickables",
        "blank",
        () => (player.p.Node < 1) ? "" : ["strict-text-input", "IText"]
    ],

    componentStyles: {
        "display-image"() { return { 'height': `${player.He.BalDiv.add(50)}px`, 'width': `${player.He.BalDiv1.add(50)}px` } },
    },


    passiveGeneration() {
        if (hasMilestone('Li', 3)) return 8
        if (hasMilestone('Li', 2)) return 4
    },

    doReset(resettingLayer) {
        if (layers[this.layer].row >= layers[resettingLayer].row) return
        let keptMilestones = []
        let keptUpgrades = []
        if (player.Li.resets > 0) keptMilestones.push(...player.He.milestones.slice(0, player.Li.resets))
        if (player.Li.resets > 1) keptUpgrades.push(...player.He.upgrades.slice(0, player.Li.resets))
        layerDataReset(this.layer)
        if (player.Li.resets > 0) player.He.resets = player.He.resets.add(player.Li.resets)
        if (player.Li.resets > 3) player.He.resets = player.He.resets.add(20)
        player.He.upgrades.push(...keptUpgrades)
        player.He.milestones.push(...keptMilestones)
    },
})

addLayer("Li", {
    name: "Li", // This is optional, only used in a few places, If absent it just uses the layer id.
    image: "https://i.postimg.cc/qR0xHgF1/49f49e18-b45b-4b40-aef3-318b8b46376d.png", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() {
        return {
            unlocked: true,
            points: new Decimal(0),
            resets: new Decimal(0),
            Deg: new Decimal(0),
            Size: new Decimal(0),
            State: new Decimal(0),
            Gain: new Decimal(0),
            Gain2: new Decimal(0),
            Gain3: new Decimal(0),
            Gain4: new Decimal(0),
            Gain5: new Decimal(0),
            Gain6: new Decimal(0),
            Gain7: new Decimal(0),
            Hydrogen: new Decimal(0),
            H1: new Decimal(2),
            H2: new Decimal(100),
            H3: new Decimal(10),
            Li1: new Decimal(1),
            Sped: new Decimal(10),
            HM: new Decimal(1),
            H: new Decimal(1),
            Runlock: new Decimal(0),
            Punlock: new Decimal(0),
            Rubidium: new Decimal(0),
            R: new Decimal(1),
            R1: new Decimal(100),
            RM: new Decimal(1),
            HD: new Decimal(1),
            PM: new Decimal(1),
            AlM: new Decimal(1),
            Hp: new Decimal(1),
            Rp: new Decimal(1),
            Lp: new Decimal(1),
            HDp: new Decimal(1),
            Kp: new Decimal(1),
            Alp: new Decimal(1),
            StoreSped: new Decimal(0),
            StoreHydro: new Decimal(0),
            Hydroxide: new Decimal(0),
            Potassium: new Decimal(0),
            Aluminum: new Decimal(0),
            Fluorine: new Decimal(0),
            Silicon: new Decimal(0),
            Francium: new Decimal(0),
            InText: "Input ore name here",
            State2: new Decimal(0),
            State3: new Decimal(0),
            All: new Decimal(0),
            UltraLithium: new Decimal(0),
        }
    },

    UrO: new Decimal(0),
    Inv: new Decimal(0),

    layerShown() {
        if (hasUpgrade('He', 26)) return true
        if (player.Li.resets > 0) return true
        else return false
    },

    color: "#a9a9a9",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "Lithium", // Name of prestige currency
    baseResource: "Helium Expunged", // Name of resource prestige is based on
    baseAmount() { return player.He.HeliumExpunged }, // Get the current amount of baseResource
    requires: new Decimal(100000),
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    displayRow: 0,

    hotkeys: [
        { key: "l", description: "L: Reset for Lithium", onPress() { if (canReset(this.layer) && player.Li.noKey == 0) doReset(this.layer)}, 
        unlocked() { if (hasMilestone('Li', 5)) return false
        else return true}},
    ],

    onPrestige() {
        player.Li.resets = player.Li.resets.add(1)
    },

    tooltip() { return formatWhole(player.Li.points) + " Lithium" },
    tooltipLocked() { return formatWhole(player.Li.points) + " Lithium" },

    milestones: {
        1: {
            style: { "color": "#ededed" },
            requirementDescription: "1 Lithium Reset",
            effectDescription: "Keep 1 Helium milestone per reset. Get rid of wideness stuff.",
            done() { return player.Li.resets.gte(1) },
            onComplete() { player.E.points = player.E.points.add(1) },
        },
        2: {
            style: { "color": "#ededed" },
            requirementDescription: "2 Lithium Resets",
            effectDescription: "Keep 1 Helium upgrade per reset. Also unlock Helium auto generation. Thin balloon (:<.",
            done() { return player.Li.resets.gte(2) },
            unlocked() {
                if (hasMilestone('Li', 1)) return true
            },
        },
        3: {
            style: { "color": "#ededed" },
            requirementDescription: "3 Lithium Resets",
            effectDescription: "Double Helium generation.",
            done() { return player.Li.resets.gte(3) },
            unlocked() {
                if (hasMilestone('Li', 2)) return true
            },
        },
        4: {
            style: { "color": "#ededed" },
            requirementDescription: "4 Lithium Resets",
            effectDescription: "Keep 20 resets.",
            done() { return player.Li.resets.gte(4) },
            unlocked() {
                if (hasMilestone('Li', 3)) return true
            },
        },
        5: {
            style: { "color": "#ededed" },
            requirementDescription: "12 Lithium Resets",
            effectDescription: "Automate Helium Inflate and Deflate. Also unlock a Lepoidolite. Reset Lithium and remove button.",
            done() { return player.Li.resets.gte(12) },
            onComplete() { return player.Li.points = player.Li.points.times(0), player.Li.noKey = player.Li.noKey.add(1), player.Li.RM = player.Li.RM.times(0)},
            unlocked() {
                if (hasMilestone('Li', 4)) return true
            },
        },
    },

    infoboxes: {
        lore: {
            titleStyle: { "color": "#ededed" },
            title: "Lithium",
            body() { return "We've struck Lithium! I'll- We'll be able to make phones and electric cars with them. All ya gotta do is mine that Lepoidolite over there (once you can)." },
        },
        lore1: {
            titleStyle: { "color": "#ededed" },
            title: "",
            body() { return "I need a new dust filter for my Hoover Max Extract Pressure Pro model 60" }
        },
    },


    buyables: {
        11: {
            unlocked() {
                if (hasMilestone('Li', 5)) return true
            },
            cost(x) {
                if (inChallenge('Li', 15)) return new Decimal(10).mul(x).pow(2.9)
                if (inChallenge('Li', 13)) return new Decimal(10).mul(x).pow(4.9)
                else return  new Decimal(10).mul(x).pow(1.9)},
            display() { return "Find more ore.<div> Increases the chance of getting Lithium by 1% per amount.<div> Cost: " + format(this.cost()) + "g of Lithium<div> Amount: " + format(getBuyableAmount(this.layer, this.id)) + " / " + format((this.purchaseLimit)) + "<div> Completion reward: Unlock new ore." },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            purchaseLimit: 50,
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.Li.Li1 = player.Li.Li1.add(1), player.Li.H1 = player.Li.H1.add(1)
                if (getBuyableAmount(this.layer, this.id) == 50) player.Li.Runlock = player.Li.Runlock.add(1), player.Li.RM = player.Li.RM.add(1), player.Li.H2 = player.Li.H2.sub(1)
            },

        },
        12: {
            unlocked() {
                if (hasMilestone('Li', 5)) return true
            },
            cost(x) { 
                if (inChallenge('Li', 15)) return new Decimal(10).mul(x).pow(2.8)
                if (inChallenge('Li', 13)) return new Decimal(10).mul(x).pow(4.8)
                else return new Decimal(10).mul(x).pow(1.8) },
            display() { return "Hire a worker.<div> Increases mining speed by 1% per amount.<div> Cost: " + format(this.cost()) + "g of Lithium<div> Amount: " + format(getBuyableAmount(this.layer, this.id)) + " / " + format((this.purchaseLimit)) + "<div> Completion reward: Double mining speed." },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.Li.Sped = player.Li.Sped.add(new Decimal(0.01).times(x))
                if (getBuyableAmount(this.layer, this.id) == 25) player.Li.Sped = player.Li.Sped.times(2)
            },
            purchaseLimit: 25,
        },
        13: {
            unlocked() {
                if (hasMilestone('Li', 5)) return true
            },
            cost(x) { 
                if (inChallenge('Li', 15)) return new Decimal(10).mul(x).pow(2.5)
                if (inChallenge('Li', 13)) return new Decimal(10).mul(x).pow(4.5)
                else return new Decimal(1).mul(x).pow(1.5) },
            display() { return "Use better equipment.<div> Increases the amount of Hydrogen from mineral by 10% per amount.<div> Cost: " + format(this.cost()) + "g of Lithium<div> Amount: " + format(getBuyableAmount(this.layer, this.id)) + " / " + format((this.purchaseLimit)) + "<div> Completion reward: Double Hydrogen Gain." },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.Li.H = player.Li.H.add(new Decimal(0.1).times(x))
                if (getBuyableAmount(this.layer, this.id) == 100) player.Li.H = player.Li.H.times(2)
            },
            purchaseLimit: 100,
        },
        14: {
            unlocked() {
                if (hasMilestone('Li', 5) && player.Li.Runlock > 0) return true
            },
            cost(x) { 
                if (inChallenge('Li', 15)) return new Decimal(30000).mul(x).pow(2.52)
                if (inChallenge('Li', 13)) return new Decimal(30000).mul(x).pow(2.52)
                else return new Decimal(30000).mul(x).pow(1.02) },
            display() { return "Buy a factory.<div> Increases the chance of getting Rubidium by 1% per amount.<div> Cost: " + format(this.cost()) + "g of Lithium<div> Amount: " + format(getBuyableAmount(this.layer, this.id)) + " / " + format((this.purchaseLimit)) + "<div> Completion reward: Double Rubidium gain." },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            purchaseLimit: 20,
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.Li.R1 = player.Li.R1.sub(1), player.Li.H2 = player.Li.H2.sub(1)
                if (getBuyableAmount(this.layer, this.id) == 20) player.Li.R = player.Li.R.times(2)
            },
        },
        15: {
            unlocked() {
                if (hasMilestone('Li', 5) && player.Li.Runlock > 0) return true
            },
            cost(x) { 
                if (inChallenge('Li', 15)) return new Decimal(30000).mul(x).pow(2.51)
                if (inChallenge('Li', 13)) return new Decimal(30000).mul(x).pow(2.51)
                else return new Decimal(30000).mul(x).pow(1.01) },
            display() { return "Increase stock market shares.<div> Increases mining speed by 1% per amount.<div> Cost: " + format(this.cost()) + "g of Lithium<div> Amount: " + format(getBuyableAmount(this.layer, this.id)) + " / " + format((this.purchaseLimit)) + "<div> Completion reward: Double mining speed." },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.Li.Sped = player.Li.Sped.add(new Decimal(0.01).times(x))
               
                if (getBuyableAmount(this.layer, this.id) == 25) player.Li.Sped = player.Li.Sped.times(2)
                if (getBuyableAmount(this.layer, this.id) == 25) player.Li.StoreSped = player.Li.Sped
            },
            purchaseLimit: 25,
        },
        16: {
            unlocked() {
                if (hasMilestone('Li', 5) && player.Li.Runlock > 0) return true
            },
            cost(x) { 
                if (inChallenge('Li', 15)) return new Decimal(1e15).mul(x)
                if (inChallenge('Li', 13)) return new Decimal(1e15).mul(x)
                else return new Decimal(10000000).mul(x)},
            display() { return "Find a portal? <div> Unlocks Lithium challenges.<div> Cost: " + format(this.cost()) + "g of Lithium<div> Amount: " + format(getBuyableAmount(this.layer, this.id)) + " / " + format((this.purchaseLimit)) + "<div> Completion reward: Unlock challenges." },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                if (getBuyableAmount(this.layer, this.id) == 2) player.Li.Runlock = player.Li.Runlock.add(1), player.Li.Punlock = player.Li.Punlock.add(1) //End of game for now
            },
            purchaseLimit: 2,
        },
    },

    challenges: {
        11: {
            name: "Buy Out The <div> Competition",
            challengeDescription: "Hydrogen boosts nothing. Keep Rubidium.",
            goalDescription: "Use the best equipment.",
            rewardDescription: "Unlock a new location.",
            canComplete: function() {return getBuyableAmount('Li', 13) == 100},
            style() { if (inChallenge('Li', 11)) return {"background-color" : "#a9a9a9"}},
            onEnter() { return player.Li.Sped = player.Li.StoreSped, player.Li.H = player.Li.StoreHydro, player.Li.StoreSped = player.Li.Sped,  player.Li.StoreHydro = player.Li.H, player.Li.Runlock = player.Li.Runlock.times(0), player.Li.Hydrogen = player.Li.Hydrogen.times(0), player.Li.points = player.Li.points.times(0), setBuyableAmount('Li', 11, new Decimal(0)), setBuyableAmount('Li', 12, new Decimal(0)), setBuyableAmount('Li', 13, new Decimal(0)), setBuyableAmount('Li', 14, new Decimal(0)), setBuyableAmount('Li', 15, new Decimal(0)), setBuyableAmount('Li', 16, new Decimal(0)), player.Li.Sped = player.Li.Sped.times(0).add(10), player.Li.H = player.Li.H.times(0).add(1), player.Li.H1 = player.Li.H1.times(0).add(2), player.Li.H2 = player.Li.H2.times(0).add(100), player.Li.Li1 = player.Li.Li1.times(0).add(1), player.Li.R1 = player.Li.R1.times(0).add(100), player.Li.H3 = player.Li.H3.times(0)},
            onExit() { return player.Li.Runlock = player.Li.Runlock.add(2), setBuyableAmount('Li', 11, new Decimal(50)), setBuyableAmount('Li', 12, new Decimal(25)), setBuyableAmount('Li', 13, new Decimal(100)), setBuyableAmount('Li', 14, new Decimal(20)), setBuyableAmount('Li', 15, new Decimal(25)), setBuyableAmount('Li', 16, new Decimal(2)), player.Li.Sped = player.Li.StoreSped, player.Li.H = player.Li.StoreHydro, player.Li.H1 = player.Li.H1.times(0).add(53), player.Li.H2 = player.Li.H2.times(0).add(80), player.Li.Li1 = player.Li.Li1.times(0).add(51), player.Li.R1 = player.Li.R1.times(0).add(80), player.Li.H3 = player.Li.H3.add(10)}
        },
        12: {
            unlocked() { if (hasChallenge('Li', 11)) return true},
            name: "Lobby For Lower <div> Workplace Safety Measures",
            challengeDescription: "Hydrogen boosts nothing. Keep row 1 of buyables, Potassium and Hydroxide.",
            goalDescription: "Have the richest investors.",
            rewardDescription: "Unlock a new ore and Lepoidolite.",
            canComplete: function() {return getBuyableAmount('Li', 15) == 25},
            style() { if (inChallenge('Li', 12)) return {"background-color" : "#a9a9a9"}},
            onEnter() { return player.Li.Sped = player.Li.StoreSped, player.Li.H = player.Li.StoreHydro, player.Li.RM = player.Li.RM.times(0).add(1), player.Li.StoreSped = player.Li.Sped, player.Li.Runlock = player.Li.Runlock.times(0), player.Li.Hydrogen = player.Li.Hydrogen.times(0), player.Li.Rubidium = player.Li.Rubidium.times(0), player.Li.points = player.Li.points.times(0), setBuyableAmount('Li', 11, new Decimal(50)), setBuyableAmount('Li', 12, new Decimal(25)), setBuyableAmount('Li', 13, new Decimal(100)), setBuyableAmount('Li', 14, new Decimal(0)), setBuyableAmount('Li', 15, new Decimal(0)), setBuyableAmount('Li', 16, new Decimal(0)), player.Li.Sped = player.Li.Sped.times(0).add(35), player.Li.R1 = player.Li.R1.times(0).add(100), player.Li.H2 = player.Li.H2.times(0).add(99), player.Li.Runlock = player.Li.Runlock.times(0).add(1)},
            onExit() { return player.Li.Runlock = player.Li.Runlock.add(2), setBuyableAmount('Li', 11, new Decimal(50)), setBuyableAmount('Li', 12, new Decimal(25)), setBuyableAmount('Li', 13, new Decimal(100)), setBuyableAmount('Li', 14, new Decimal(20)), setBuyableAmount('Li', 15, new Decimal(25)), setBuyableAmount('Li', 16, new Decimal(2)), player.Li.Sped = player.Li.StoreSped, player.Li.H = player.Li.StoreHydro, player.Li.H1 = player.Li.H1.times(0).add(53), player.Li.H2 = player.Li.H2.times(0).add(80), player.Li.Li1 = player.Li.Li1.times(0).add(51), player.Li.R1 = player.Li.R1.times(0).add(80), player.Li.H3 = player.Li.H3.add(10)}
        },
        13: {
            unlocked() { if (hasChallenge('Li', 12)) return true},
            name: "Lower The <div> Minimum Wage",
            challengeDescription: "Keep most things except buyables. Their cost scales much higher",
            goalDescription: "Make it back to the portal.",
            rewardDescription: "Unlock a new location (purely aesthetical) and another Lepoidolite.",
            canComplete: function() {return getBuyableAmount('Li', 16) == 2},
            style() { if (inChallenge('Li', 13)) return {"background-color" : "#a9a9a9"}},
            onEnter() { return player.Li.Sped = player.Li.StoreSped, player.Li.H = player.Li.StoreHydro, player.Li.StoreSped = player.Li.Sped,  player.Li.StoreHydro = player.Li.H, player.Li.Runlock = player.Li.Runlock.times(0), player.Li.points = player.Li.points.times(0), setBuyableAmount('Li', 11, new Decimal(0)), setBuyableAmount('Li', 12, new Decimal(0)), setBuyableAmount('Li', 13, new Decimal(0)), setBuyableAmount('Li', 14, new Decimal(0)), setBuyableAmount('Li', 15, new Decimal(0)), setBuyableAmount('Li', 16, new Decimal(0)), player.Li.Sped = player.Li.Sped.times(0).add(10), player.Li.H = player.Li.H.times(0).add(1), player.Li.H1 = player.Li.H1.times(0).add(2), player.Li.H2 = player.Li.H2.times(0).add(100), player.Li.Li1 = player.Li.Li1.times(0).add(1), player.Li.R1 = player.Li.R1.times(0).add(100), player.Li.H3 = player.Li.H3.times(0)},
            onExit() { return player.Li.Runlock = player.Li.Runlock.add(2), setBuyableAmount('Li', 11, new Decimal(50)), setBuyableAmount('Li', 12, new Decimal(25)), setBuyableAmount('Li', 13, new Decimal(100)), setBuyableAmount('Li', 14, new Decimal(20)), setBuyableAmount('Li', 15, new Decimal(25)), setBuyableAmount('Li', 16, new Decimal(2)), player.Li.Sped = player.Li.StoreSped, player.Li.H = player.Li.StoreHydro, player.Li.H1 = player.Li.H1.times(0).add(53), player.Li.H2 = player.Li.H2.times(0).add(80), player.Li.Li1 = player.Li.Li1.times(0).add(51), player.Li.R1 = player.Li.R1.times(0).add(80), player.Li.H3 = player.Li.H3.add(10)}
        },
        14: {
            unlocked() { if (hasChallenge('Li', 13)) return true},
            name: "Withold <div> Valuable Resources",
            challengeDescription: "Lose most things. Potassium boosts nothing.",
            goalDescription: "Get 1e11 Lithium.",
            rewardDescription: "Double mining speed and unlock another Lepoidolite (purely aesthetical).",
            canComplete: function() {return player.Li.points.gte(1e11)},
            onComplete: function() { if (hasChallenge('Li', 14)) return ""
                else return player.Li.Sped = player.Li.Sped.times(2), player.Li.StoreSped = player.Li.Sped},
            style() { if (inChallenge('Li', 14)) return {"background-color" : "#a9a9a9"}},
            onEnter() { return player.Li.Sped = player.Li.StoreSped, player.Li.H = player.Li.StoreHydro, player.Li.StoreSped = player.Li.Sped,  player.Li.StoreHydro = player.Li.H, player.Li.Runlock = player.Li.Runlock.times(0), player.Li.Hydrogen = player.Li.Hydrogen.times(0), player.Li.points = player.Li.points.times(0), player.Li.Rubidium = player.Li.Rubidium.times(0), setBuyableAmount('Li', 11, new Decimal(0)), setBuyableAmount('Li', 12, new Decimal(0)), setBuyableAmount('Li', 13, new Decimal(0)), setBuyableAmount('Li', 14, new Decimal(0)), setBuyableAmount('Li', 15, new Decimal(0)), setBuyableAmount('Li', 16, new Decimal(0)), player.Li.Sped = player.Li.Sped.times(0).add(10), player.Li.H = player.Li.H.times(0).add(1), player.Li.H1 = player.Li.H1.times(0).add(2), player.Li.H2 = player.Li.H2.times(0).add(100), player.Li.Li1 = player.Li.Li1.times(0).add(1), player.Li.R1 = player.Li.R1.times(0).add(100), player.Li.H3 = player.Li.H3.times(0), player.Li.RM = player.Li.RM.times(0)},
            onExit() { return player.Li.Runlock = player.Li.Runlock.add(2), setBuyableAmount('Li', 11, new Decimal(50)), setBuyableAmount('Li', 12, new Decimal(25)), setBuyableAmount('Li', 13, new Decimal(100)), setBuyableAmount('Li', 14, new Decimal(20)), setBuyableAmount('Li', 15, new Decimal(25)), setBuyableAmount('Li', 16, new Decimal(2)), player.Li.Sped = player.Li.StoreSped, player.Li.H = player.Li.StoreHydro, player.Li.H1 = player.Li.H1.times(0).add(53), player.Li.H2 = player.Li.H2.times(0).add(80), player.Li.Li1 = player.Li.Li1.times(0).add(51), player.Li.R1 = player.Li.R1.times(0).add(80), player.Li.H3 = player.Li.H3.add(10)}
        },
        15: {
            unlocked() { if (hasChallenge('Li', 14)) return true},
            name: "Become <div> A Monopoly",
            challengeDescription: "Keep most things except buyables. Their cost scales much higher",
            goalDescription: "Fully max out all buyables.",
            rewardDescription: "Unlock Beryllium and another Lepoidolite (purely aesthetical).",
            canComplete: function() {return player.Li.All.gte(1)},
            style() { if (inChallenge('Li', 15)) return {"background-color" : "#a9a9a9"}},
            onEnter() { return player.Li.Sped = player.Li.StoreSped, player.Li.H = player.Li.StoreHydro, player.Li.StoreSped = player.Li.Sped,  player.Li.StoreHydro = player.Li.H, player.Li.Runlock = player.Li.Runlock.times(0), player.Li.points = player.Li.points.times(0), player.Li.Rubidium = player.Li.Rubidium.times(0), player.Li.Hydrogen = player.Li.Hydrogen.times(0), setBuyableAmount('Li', 11, new Decimal(0)), setBuyableAmount('Li', 12, new Decimal(0)), setBuyableAmount('Li', 13, new Decimal(0)), setBuyableAmount('Li', 14, new Decimal(0)), setBuyableAmount('Li', 15, new Decimal(0)), setBuyableAmount('Li', 16, new Decimal(0)), player.Li.Sped = player.Li.Sped.times(0).add(10), player.Li.H = player.Li.H.times(0).add(1), player.Li.H1 = player.Li.H1.times(0).add(2), player.Li.H2 = player.Li.H2.times(0).add(100), player.Li.Li1 = player.Li.Li1.times(0).add(1), player.Li.R1 = player.Li.R1.times(0).add(100), player.Li.H3 = player.Li.H3.times(0), player.Li.RM = player.Li.RM.times(0)},
            onExit() { return player.Li.Runlock = player.Li.Runlock.add(2), setBuyableAmount('Li', 11, new Decimal(50)), setBuyableAmount('Li', 12, new Decimal(25)), setBuyableAmount('Li', 13, new Decimal(100)), setBuyableAmount('Li', 14, new Decimal(20)), setBuyableAmount('Li', 15, new Decimal(25)), setBuyableAmount('Li', 16, new Decimal(2)), player.Li.Sped = player.Li.StoreSped, player.Li.H = player.Li.StoreHydro, player.Li.H1 = player.Li.H1.times(0).add(53), player.Li.H2 = player.Li.H2.times(0).add(80), player.Li.Li1 = player.Li.Li1.times(0).add(51), player.Li.R1 = player.Li.R1.times(0).add(80), player.Li.H3 = player.Li.H3.add(10)}
        },
    },


    
    tabFormat: {
        "MainTab": {
            content: [
        () => (player.p.Node < 1) ? ['infobox', 'lore'] : ['infobox', 'lore1'],
        ["display-text",
            function () { if (player.p.Node < 1) return 'Lithium boosts Helium Expunged and Hydrogen Gas + Power gain by ' + formatWhole(player.Li.points.add(1).pow(effect5).times(effect6)) }],
        "blank",
        "main-display",
        () => (hasMilestone('Li', 5)) ? "" : "prestige-button",
        "blank",
        ["display-text",
            function () { if (player.p.Node < 1) return 'You have done ' + formatWhole(player.Li.resets) + ' resets' }],
        ['display-text', 
            function() { return temp.Li.Inv = temp.Li.Inv * 0, ''}],
        "milestones",
        "blank",
        ["display-text",
            function () { if (player.p.Node < 1 && hasMilestone('Li', 5)) return 'You have ' + format(player.Li.points) + 'g of Lithium from Lepoidolite (Currency).<div> Current chance: ' + formatWhole(player.Li.Li1.add(1)) + ' in 100.' }],
        ["display-text",
            function () { if (player.p.Node < 1 && hasMilestone('Li', 5) && player.Li.Punlock < 1) return 'You have ' + format(player.Li.Hydrogen) + 'L of Hydrogen from Lepoidolite (10% more Lithium per L). <div> Current chance: ' + formatWhole(player.Li.H2.sub(player.Li.H1)) + ' in 100.' }],
        ["display-text",
            function () { if (player.p.Node < 1 && hasMilestone('Li', 5) && player.Li.Punlock < 1 && player.Li.Runlock > 0) return 'You have ' + format(player.Li.Rubidium) + 'g of Rubidium from Lepoidolite (20% more Lithium and Hydrogen per g). <div> Current chance: ' + formatWhole(new Decimal(100).sub(player.Li.R1).add(1)) + ' in 100.' }],
        "blank",
        ["row", function () {
            if (hasMilestone('Li', 5) && player.Li.Punlock < 1) return [
                ["display-image", 'https://i.postimg.cc/LXZqjbzG/lepidolite-rough-2978111063-1-prev-ui.png', { 'height': `${player.Li.Size.add(340)}px`, 'width': `${player.Li.Size.add(340)}px` }],
                ["display-image", 'https://i.postimg.cc/zvVxw5d8/pdp-sq-2910733281-prev-ui.png', { height: `230px`, width: `230px`, transform: `rotate(${player.Li.Deg}deg)`, position: 'relative', right: '40px' }]
            ]}],
        "blank",
        "buyables",
        ]},
        "Mines": {
            content: [
                ["display-text",
                function () { if (player.p.Node < 1) return '<u><b>______________________________Thacker Pass______________________________'}],
                'blank',
                ['display-text', 
                function() { return temp.Li.Inv = temp.Li.Inv * 0, ''}],
                ["display-text",
                function () { if (player.p.Node < 1) return 'You have ' + format(player.Li.points) + 'g of Lithium from Lepoidolite (Currency).<div> Current chance: ' + formatWhole(player.Li.Li1.add(1)) + ' in 100.' }],
            ["display-text",
                function () { if (player.p.Node < 1) return 'You have ' + format(player.Li.Hydrogen) + 'L of Hydrogen from Lepoidolite (10% more Lithium per L). <div> Current chance: ' + formatWhole(player.Li.H2.sub(player.Li.H1)) + ' in 100.'}],
            ["display-text",
                function () { if (player.p.Node < 1) return 'You have ' + format(player.Li.Rubidium) + 'g of Rubidium from Lepoidolite (20% more Lithium and Hydrogen per g).'}],
            ["display-text",
                function () { if (player.p.Node < 1 && player.Li.Runlock > 0) return 'Current chance: ' + formatWhole(new Decimal(100).sub(player.Li.R1).add(1)) + ' in 100.' }],
            ["row", function () {
                if (player.Li.Punlock > 0) return [
                    ["display-image", 'https://i.postimg.cc/KzRjzdXH/101848.jpg', { 'height': `400px`, 'width': `1000px`, position: 'absolute', right: '10px', top: '250px', id: 'under'}],
                  ["display-image", 'https://i.postimg.cc/LXZqjbzG/lepidolite-rough-2978111063-1-prev-ui.png', { height: `${player.Li.Size.add(100)}px`, width: `${player.Li.Size.add(100)}px`, position: 'absolute',  right: '650px', top: "400px", id: 'top'}],
                    ["display-image", 'https://i.postimg.cc/zvVxw5d8/pdp-sq-2910733281-prev-ui.png', { height: `83px`, width: `83px`, transform: `rotate(${player.Li.Deg}deg)`,  position: 'absolute', right: '600px', top: '410px', id: 'top'}],
                ]}],
                "blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank",
                ["display-text",
                function () { if (player.p.Node < 1 && hasChallenge('Li', 11)) return '<u><b>______________________________Gaston County______________________________'}],
                'blank',
                ["display-text",
                function () { if (player.p.Node < 1 && hasChallenge('Li', 11)) return 'You have ' + format(player.Li.Hydroxide) + 'L of Hydroxide from Lepoidolite (2x Rubidium per L).<div> Current chance: 1 in 200 per Gaston County Lepoidolite.' }],
                ["display-text",
                function () { if (player.p.Node < 1 && hasChallenge('Li', 11)) return 'You have ' + format(player.Li.Potassium) + 'g of Potassium from Lepoidolite (2x Lithium per g).<div> Current chance: 1 in 200 per Gaston County Lepoidolite.' }],
                ["display-text",
                function () { if (player.p.Node < 1 && hasChallenge('Li', 12)) return 'You have ' + format(player.Li.Aluminum) + 'g of Aluminum from Lepoidolite (10x Potassium and Hydroxide per g).<div> Current chance: 1 in 500.' }],
                "blank",
            ["row", function () {
                if (hasChallenge('Li', 11)) return [
                    ["display-image", 'https://i.postimg.cc/J0zHCPM1/pC6PQx.jpg', { 'height': `400px`, 'width': `1000px`, position: 'absolute', right: '10px', top: '800px', id: 'under'}],
                    ["display-image", 'https://i.postimg.cc/LXZqjbzG/lepidolite-rough-2978111063-1-prev-ui.png', { height: `${player.Li.Size.add(130)}px`, width: `${player.Li.Size.add(130)}px`, position: 'absolute',  right: '450px', top: "1050px", id: 'top'}],
                    ["display-image", 'https://i.postimg.cc/zvVxw5d8/pdp-sq-2910733281-prev-ui.png', { height: `83px`, width: `83px`, transform: `rotate(${player.Li.Deg}deg)`,  position: 'absolute', right: '400px', top: '1060px', id: 'top'}],
                ]
            }],
            ["row", function () {
            if (hasChallenge('Li', 12)) return [
                ["display-image", 'https://i.postimg.cc/LXZqjbzG/lepidolite-rough-2978111063-1-prev-ui.png', { height: `${player.Li.Size.add(60)}px`, width: `${player.Li.Size.add(60)}px`, position: 'absolute',  right: '100px', top: "1050px", id: 'top'}],
                ["display-image", 'https://i.postimg.cc/zvVxw5d8/pdp-sq-2910733281-prev-ui.png', { height: `43px`, width: `43px`, transform: `rotate(${-player.Li.Deg}deg)`,  position: 'absolute', right: '110px', top: '1020px', id: 'top'}],
            ]
        }],
        ["row", function () {
            if (hasChallenge('Li', 13)) return [
                ["display-image", 'https://i.postimg.cc/LXZqjbzG/lepidolite-rough-2978111063-1-prev-ui.png', { height: `${player.Li.Size.add(40)}px`, width: `${player.Li.Size.add(40)}px`, position: 'absolute',  right: '350px', top: "1020px", id: 'top'}],
                ["display-image", 'https://i.postimg.cc/zvVxw5d8/pdp-sq-2910733281-prev-ui.png', { height: `33px`, width: `33px`, transform: `rotate(${-player.Li.Deg.add(100)}deg)`,  position: 'absolute', right: '380px', top: '1020px', id: 'top'}],
            ]
        }],
        "blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank",
        ["display-text",
        function () { if (player.p.Node < 1  && hasChallenge('Li', 13)) return '<u><b>______________________________Luna County______________________________'}],
        'blank',
        ["display-text",
        function () { if (player.p.Node < 1 && hasChallenge('Li', 13)) return 'You have ' + format(player.Li.Fluorine) + 'L of Fluorine from Lepoidolite.<div> Current chance: 1 in 1000.' }],
        ["display-text",
        function () { if (player.p.Node < 1 && hasChallenge('Li', 13)) return 'You have ' + format(player.Li.Silicon) + 'g of Silicon from Lepoidolite. <div> Current chance: 1 in 10000.'}],
        ["display-text",
        function () { if (player.p.Node < 1 && hasChallenge('Li', 14)) return 'You have ' + format(player.Li.Francium) + 'g of Francium from Lepoidolite. <div> Current chance: 1 in 124653.'}],
        ["display-text", 
        function () { if (player.p.Node < 1 && hasChallenge('Li', 15)) return 'You have ' + format(player.Li.UltraLithium) + 'g of Ultra Lithium from Lepoidolite. <div> Current chance: 1 in 1000000.'}],
        "blank",
        ["row", function () {
            if (hasChallenge('Li', 13)) return [
                ["display-image", 'https://i.postimg.cc/zBL39mSg/157380-nature-cave-sunlight-ice-frost-glaciers-icicle-snow.jpg', { 'height': `400px`, 'width': `1000px`, position: 'absolute', right: '10px', top: '1380px', id: 'under'}],
                ["display-image", 'https://i.postimg.cc/LXZqjbzG/lepidolite-rough-2978111063-1-prev-ui.png', { height: `${player.Li.Size.add(130)}px`, width: `${player.Li.Size.add(130)}px`, position: 'absolute',  right: '650px', top: "1630px", id: 'top'}],
                ["display-image", 'https://i.postimg.cc/zvVxw5d8/pdp-sq-2910733281-prev-ui.png', { height: `83px`, width: `83px`, transform: `rotate(${player.Li.Deg}deg)`,  position: 'absolute', right: '600px', top: '1640px', id: 'top'}],
            ]
        }],
        ["row", function () {
            if (hasChallenge('Li', 14)) return [
                ["display-image", 'https://i.postimg.cc/LXZqjbzG/lepidolite-rough-2978111063-1-prev-ui.png', { height: `${player.Li.Size.add(130)}px`, width: `${player.Li.Size.add(130)}px`, position: 'absolute',  right: '250px', top: "1630px", id: 'top'}],
                ["display-image", 'https://i.postimg.cc/zvVxw5d8/pdp-sq-2910733281-prev-ui.png', { height: `83px`, width: `83px`, transform: `rotate(${-player.Li.Deg.add(90)}deg)`,  position: 'absolute', right: '350px', top: '1640px', id: 'top'}],
            ]
        }],
        ["row", function () {
            if (hasChallenge('Li', 15)) return [
                ["display-image", 'https://i.postimg.cc/LXZqjbzG/lepidolite-rough-2978111063-1-prev-ui.png', { height: `${player.Li.Size.add(20)}px`, width: `${player.Li.Size.add(20)}px`, position: 'absolute',  right: '650px', top: "1600px", id: 'top'}],
                ["display-image", 'https://i.postimg.cc/zvVxw5d8/pdp-sq-2910733281-prev-ui.png', { height: `17px`, width: `17px`, transform: `rotate(${-player.Li.Deg.add(90)}deg)`,  position: 'absolute', right: '660px', top: '1600px', id: 'top'}],
            ]
        }],
            ],
            unlocked() { if (player.Li.Punlock > 0) return true
            else return false},
        },
        "Portal": {
            content: [
                ['display-text', 
                function() { return temp.Li.Inv = temp.Li.Inv * 0, ''}],
                "challenges"
            ],
            unlocked() { if (player.Li.Punlock > 0) return true
            else return false},
        },
        "Inventory": {
            content: [
                ["strict-text-input", "InText"],
                "blank",
                ['row', [
                    ["display-text",
                    function () { if (player.Li.Hydrogen.gte(1) && player.Li.InText == "Hydrogen") return 'Hydrogen' }],
                    ["display-text",
                function () { if (player.Li.points.gte(1) && player.Li.InText == "Lithium") return 'Lithium' }],
                ["display-text",
                function () { if (player.Li.Rubidium.gte(1) && player.Li.InText == "Rubidium") return 'Rubidium' }],
                ["display-text",
                function () { if (player.Li.Hydroxide.gte(1) && player.Li.InText == "Hydroxide") return 'Hydroxide' }],
                ["display-text",
                function () { if (player.Li.Potassium.gte(1) && player.Li.InText == "Potassium") return 'Potassium' }],
                ["display-text",
                function () { if (player.Li.Aluminum.gte(1) && player.Li.InText == "Aluminum") return 'Aluminum' }],
                ["display-text",
                function () { if (player.Li.Fluorine.gte(1) && player.Li.InText == "Fluorine") return 'Fluorine' }],
                ["display-text",
                function () { if (player.Li.Silicon.gte(1) && player.Li.InText == "Silicon") return 'Silicon' }],
                ["display-text",
                function () { if (player.Li.Francium.gte(1) && player.Li.InText == "Francium") return 'Francium' }],
                ["display-text",
                function () { if (player.Li.UltraLithium.gte(1) && player.Li.InText == "Ultra Lithium") return makeShinies(ShinyL), makeShinies(ShinyL1), makeShinies(ShinyL2), 'Ultra Lithium' }],
                    ]],
                ['row', [
                ["display-image", 
                function() { if (player.Li.Hydrogen.gte(1) && player.Li.InText == "Hydrogen") return 'https://i.postimg.cc/FKvVnhXX/Blue-Smoke-Transparent-Images.png'}],
                ["display-image", 
                function() { if (player.Li.points.gte(1) && player.Li.InText == "Lithium") return 'https://i.postimg.cc/R0CXZvsQ/jeronimo-martins-lithium-transparent.png'}],
                ["display-image", 
                function() { if (player.Li.Rubidium.gte(1) && player.Li.InText == "Rubiduium") return 'https://i.postimg.cc/DfCFvzx5/Pollucite.png'}],
                ["display-image", 
                function() { if (player.Li.Hydroxide.gte(1) && player.Li.InText == "Hydroxide") return 'https://i.postimg.cc/SK1f6hx2/slazzer-edit-image-prev-ui.png'}], 
                ["display-image", 
                function() { if (player.Li.Potassium.gte(1) && player.Li.InText == "Potassium") return 'https://i.postimg.cc/ryDnttbP/Potassium-metal-pieces.png'}],
                ["display-image", 
                function() { if (player.Li.Aluminum.gte(1) && player.Li.InText == "Aluminum") return 'https://i.postimg.cc/k49vkhPn/46690-30-prev-ui.png'}],
                ["display-image", 
                function() { if (player.Li.Fluorine.gte(1) && player.Li.InText == "Fluorine") return makeShinies(ShinyF), 'https://i.postimg.cc/gcyPGzcH/slazzer-edit-image-prev-ui.png'}],
                ["display-image", 
                function() { if (player.Li.Silicon.gte(1) && player.Li.InText == "Silicon") return temp.Li.Inv = temp.Li.Inv + 1, 'https://i.postimg.cc/VkffxSjt/583f68fde02ba760658b5f40-prev-ui.png'
                else return temp.Li.Inv = temp.Li.Inv * 0, ''}],
                ["row", function () {
                    if (player.Li.UltraLithium.gte(1) && player.Li.InText == "Ultra Lithium") return [
                        ["display-image", 'https://i.postimg.cc/NFxV4sfc/C29-BCJ-1-prev-ui.png', {position: 'absolute', right: '200px', top: '150px', id: 'under'}],
                        ["display-image", 'https://i.postimg.cc/qRCYSf4N/image-3.png', {opacity: temp.Li.UrO, position: 'absolute', right: '200px', top: '150px', id: 'top'}],
                        "blank",
                        ]}],
                ["row", function () {
            if (player.Li.Francium.gte(1) && player.Li.InText == "Francium") return [
                ["display-image", 'https://i.postimg.cc/nzJRR3cx/s13-prev-ui.png', {position: 'absolute', right: '200px', top: '100px', id: 'under'}],
                ["display-image", 'https://i.postimg.cc/kXKbWHJM/image.png', {opacity: temp.Li.UrO, position: 'absolute', right: '200px', top: '100px', id: 'top'}],
                "blank",
                ]}]]],
        ],
        unlocked() { if (hasMilestone('Li', 5)) return true
    else return false}
    }, 
    },

    const: ShinyL2 = {
        image() { 
            if (player.Li.State2 == 0) return 'https://i.postimg.cc/5tkypz2x/image-4.png'
            if (player.Li.State2 == 1) return 'https://i.postimg.cc/DZ9Z3KGH/image-5.png'},
        style: { "background-size": "100% 100%" },
        gravity: 0.1,
        time: 1,
        x: 945,
        y: 1170,
        dir() { return (Math.random() + 1) * 9},
        offset: () => Math.random() + 1.2 * 700,
        speed() { // Randomize speed a bit
            return (Math.random() + 1.2) * 8  
        },
    },

    const: ShinyL1 = {
        image() { 
            if (player.Li.State2 == 0) return 'https://i.postimg.cc/5tkypz2x/image-4.png'
            if (player.Li.State2 == 1) return 'https://i.postimg.cc/DZ9Z3KGH/image-5.png'},
        style: { "background-size": "100% 100%" },
        gravity: 1,
        time: 2,
        x: 1150,
        y: 150,
        dir() { return (Math.random() + 4) * -10},
        speed() { // Randomize speed a bit
            return (Math.random() + 1.2) * 8  
        },
    },

    const: ShinyL = {
        image() { 
            if (player.Li.State2 == 0) return 'https://i.postimg.cc/5tkypz2x/image-4.png'
            if (player.Li.State2 == 1) return 'https://i.postimg.cc/DZ9Z3KGH/image-5.png'},
        style: { "background-size": "100% 100%" },
        gravity: 1,
        time: 2,
        x: 1150,
        y: 150,
        dir() { return (Math.random() + 4) * 10},
        speed() { // Randomize speed a bit
            return (Math.random() + 1.2) * 8  
        },
    },

    const: ShinyS = {
        image: 'https://i.postimg.cc/X7ktVhQG/image-2.png',
        style: { "background-size": "100% 100%" },
        gravity: 0.01,
        time: 1,
        x: 575,
        y: 850,
        dir() { return (Math.random() + 4) * 10},
        offset: () => Math.random() + 1.2 * 700,
        speed() { // Randomize speed a bit
            return (0.1) 
        },
    },

    const: ShinyF = {
        image: 'https://i.postimg.cc/D0rsV1Qs/image-1.png',
        style: { "background-size": "100% 100%" },
        gravity: 0.1,
        time: 0.8,
        spread: 10,
        x: 875,
        y: 1050,
        offset: () => Math.random() + 1.2 * 700,
        dir() {return (Math.random() + 1.2) * 8},
        speed() { // Randomize speed a bit
            return (0.1) 
        },
    },

    const: myParticle = {
        image: 'https://i.postimg.cc/DfCFvzx5/Pollucite.png',
        style: { "background-size": "100% 100%" },
        gravity: 2,
        time: 1,
        speed() { // Randomize speed a bit
            return (Math.random() + 1.2) * 8
        },
    },

    const: myParticle1 = {
        image: 'https://i.postimg.cc/FKvVnhXX/Blue-Smoke-Transparent-Images.png',
        style: { "background-size": "100% 100%" },
        gravity: 2,
        time: 1,
        speed() { // Randomize speed a bit
            return (Math.random() + 1.2) * 8
        },
    },

    const: myParticle2 = {
        image: 'https://i.postimg.cc/R0CXZvsQ/jeronimo-martins-lithium-transparent.png',
        style: { "background-size": "100% 100%" },
        gravity: 2,
        time: 1,
        speed() { // Randomize speed a bit
            return (Math.random() + 1.2) * 8
        },
    },

    const: HydroxideP = {
        image: 'https://i.postimg.cc/SK1f6hx2/slazzer-edit-image-prev-ui.png',
        style: { "background-size": "100% 100%" },
        gravity: 2,
        time: 1,
        speed() { // Randomize speed a bit
            return (Math.random() + 1.2) * 8
        },
    },

    const: PottasiumP = {
        image: 'https://i.postimg.cc/ryDnttbP/Potassium-metal-pieces.png',
        style: { "background-size": "100% 100%" },
        gravity: 2,
        time: 1,
        speed() { // Randomize speed a bit
            return (Math.random() + 1.2) * 8
        },
    },

    
    const: AluminumP = {
        image: 'https://i.postimg.cc/k49vkhPn/46690-30-prev-ui.png',
        style: { "background-size": "100% 100%" },
        gravity: 2,
        time: 1,
        speed() { // Randomize speed a bit
            return (Math.random() + 1.2) * 8
        },
    },

    const: FluorineP = {
        image: 'https://i.postimg.cc/gcyPGzcH/slazzer-edit-image-prev-ui.png',
        style: { "background-size": "100% 100%" },
        gravity: 2,
        time: 1,
        speed() { // Randomize speed a bit
            return (Math.random() + 1.2) * 8
        },
    },

    const: SiliconP = {
        image: 'https://i.postimg.cc/VkffxSjt/583f68fde02ba760658b5f40-prev-ui.png',
        style: { "background-size": "100% 100%" },
        gravity: 2,
        time: 1,
        speed() { // Randomize speed a bit
            return (Math.random() + 1.2) * 8
        },
    },

    const: FranciumP = {
        image: 'https://i.postimg.cc/nzJRR3cx/s13-prev-ui.png',
        style: { "background-size": "100% 100%" },
        gravity: 2,
        time: 1,
        speed() { // Randomize speed a bit
            return (Math.random() + 1.2) * 8
        },
    },

    const: LithiumUP = {
        image: 'https://i.postimg.cc/NFxV4sfc/C29-BCJ-1-prev-ui.png',
        style: { "background-size": "100% 100%" },
        gravity: 2,
        time: 1,
        speed() { // Randomize speed a bit
            return (Math.random() + 1.2) * 8
        },
    },

    automate() {
        if (getBuyableAmount('Li', 15) == 25) player.Li.StoreSped = player.Li.Sped
        if (getBuyableAmount('Li', 16) == 2) player.Li.Punlock = player.Li.Punlock.times(0).add(1)
        if (getBuyableAmount('Li', 11) == 50 && getBuyableAmount('Li', 12) == 25 && getBuyableAmount('Li', 13) == 100 && getBuyableAmount('Li', 14) == 20 && getBuyableAmount('Li', 15) == 25 && getBuyableAmount('Li', 16) == 2) player.Li.All = player.Li.All.add(1)
        else player.Li.All = player.Li.All.times(0)
        if (player.Li.Deg < 280) player.Li.State = 1
        if (player.Li.Deg > 360) player.Li.State = 0
        if (player.Li.State == 1) player.Li.Deg = player.Li.Deg.add(player.Li.Sped), temp.Li.UrO = temp.Li.UrO.sub(0.2)
        if (player.Li.State == 0) player.Li.Deg = player.Li.Deg.add(-player.Li.Sped), temp.Li.UrO = temp.Li.UrO.add(0.2)
        if (player.Li.Deg <= 280) player.Li.Size = player.Li.Size.add(4)
        if (player.Li.Size >= 1) player.Li.Size = player.Li.Size.add(-1)
        player.Li.Hp = player.Li.H.add(player.Li.RM)
        if (player.Li.Hp > 10) player.Li.Hp = player.Li.Hp.times(0).add(10)
        player.Li.Lp = player.Li.HM.add(player.Li.RM)
        if (player.Li.Lp > 10) player.Li.Lp = player.Li.Lp.times(0).add(10)
        player.Li.Rp = player.Li.R
        if (player.Li.Rp > 10) player.Li.Rp = player.Li.Rp.times(0).add(10)
        player.Li.HDp = player.Li.AlM
        if (player.Li.HDp > 10) player.Li.HDp = player.Li.HDp.times(0).add(10)
        player.Li.Kp = player.Li.AlM
        if (player.Li.Kp > 10) player.Li.Kp = player.Li.Kp.times(0).add(10)
        player.Li.Alp = new Decimal(1)
        if (player.Li.Alp > 10) player.Li.Alp = player.Li.Alp.times(0).add(10)
        if (player.A.Particlesx.gte(1)) player.Li.Rp = player.Li.Rp.times(0), player.Li.Alp = player.Li.Alp.times(0), player.Li.Lp = player.Li.Lp.times(0), player.Li.Hp = player.Li.Hp.times(0),  player.Li.HDp = player.Li.HDp.times(0), player.Li.Kp = player.Li.Kp.times(0)
        if (hasMilestone('Li', 5) && player.Li.Size == 2) player.Li.Gain = new Decimal(Math.floor(Math.random() * 100) + 1)
        if (player.Li.Gain.gte(player.Li.H1) && player.Li.Gain.lte(player.Li.H2) && player.Li.Size == 2 && hasMilestone('Li', 5)) player.Li.HM = player.Li.Hydrogen.times(1.1), player.Li.Hydrogen = player.Li.Hydrogen.add(player.Li.H).add(player.Li.RM)
        if (inChallenge('Li', 11)) player.Li.HM = player.Li.HM.times(0)
        if (inChallenge('Li', 12)) player.Li.HM = player.Li.HM.times(0)
        if (player.Li.Gain.gte(1) && player.Li.Gain.lte(player.Li.Li1) && player.Li.Size == 2 && hasMilestone('Li', 5)) player.Li.points = player.Li.points.add(player.Li.HM.add(player.Li.RM).times(player.Li.PM))
        if (player.Li.Gain.gte(player.Li.R1) && player.Li.Gain.lte(100) && player.Li.Size == 2 && hasMilestone('Li', 5) && player.Li.Runlock > 0) player.Li.Rubidium = player.Li.Rubidium.add(player.Li.R.times(player.Li.HD)), player.Li.RM = player.Li.Rubidium.times(1.2)
        if (player.Li.Gain.gte(player.Li.H1) && player.Li.Gain.lte(player.Li.H2) && player.Li.Size == 2 && hasMilestone('Li', 5) && player.tab == this.layer) makeParticles(myParticle1, player.Li.Hp)
        if (player.Li.Gain.gte(1) && player.Li.Gain.lte(player.Li.Li1) && player.Li.Size == 2 && hasMilestone('Li', 5) && player.tab == this.layer) makeParticles(myParticle2, player.Li.Lp)
        if (player.Li.Gain.gte(player.Li.R1) && player.Li.Gain.lte(100) && player.Li.Size == 2 && hasMilestone('Li', 5) && player.Li.Runlock > 0 && player.tab == this.layer) makeParticles(myParticle, player.Li.Rp)
        if (hasChallenge('Li', 11) && player.Li.Size == 2) player.Li.Gain2 = new Decimal(Math.floor(Math.random() * 200) + 1)
        if (player.Li.Gain2 == 200 && hasChallenge('Li', 11) && player.Li.Size == 2) player.Li.Hydroxide = player.Li.Hydroxide.add(1), player.Li.HD = player.Li.Hydroxide.times(2)
        if (player.Li.Gain2 == 100 && hasChallenge('Li', 11) && player.Li.Size == 2) player.Li.Potassium = player.Li.Potassium.add(1), player.Li.PM = player.Li.Potassium.times(2)
        if (player.Li.Gain2 == 200 && player.Li.Size == 2 && hasChallenge('Li', 11) && player.tab == this.layer) makeParticles(HydroxideP, player.Li.HDp)
        if (player.Li.Gain2 == 100 && player.Li.Size == 2 && hasChallenge('Li', 11) && player.tab == this.layer) makeParticles(PottasiumP, player.Li.Kp)
        if (hasChallenge('Li', 12) && player.Li.Size == 2) player.Li.Gain3 = new Decimal(Math.floor(Math.random() * 500) + 1)
        if (player.Li.Gain3.gte(1) && player.Li.Gain3.lte(3) && hasChallenge('Li', 12) && player.Li.Size == 2) player.Li.Hydroxide = player.Li.Hydroxide.add(new Decimal(1).times(player.Li.AlM)), player.Li.HD = player.Li.Hydroxide.times(2)
        if (player.Li.Gain3.gte(4) && player.Li.Gain3.lte(6) && hasChallenge('Li', 12) && player.Li.Size == 2) player.Li.Potassium = player.Li.Potassium.add(new Decimal(1).times(player.Li.AlM)), player.Li.PM = player.Li.Potassium.times(2)
        if (inChallenge('Li', 14)) player.Li.PM = player.Li.PM.times(0).add(1)
        if (player.Li.Gain3.gte(1) && player.Li.Gain3.lte(3) && player.Li.Size == 2 && hasChallenge('Li', 12) && player.tab == this.layer) makeParticles(HydroxideP, player.Li.HDp)
        if (player.Li.Gain3.gte(4) && player.Li.Gain3.lte(6) && player.Li.Size == 2 && hasChallenge('Li', 12) && player.tab == this.layer) makeParticles(PottasiumP, player.Li.Kp)
        if (player.Li.Gain3 == 99 && hasChallenge('Li', 12) && player.Li.Size == 2) player.Li.Aluminum = player.Li.Aluminum.add(1), player.Li.AlM = player.Li.Aluminum.times(10)
        if (player.Li.Gain3 == 99 && player.Li.Size == 2 && hasChallenge('Li', 12) && player.tab == this.layer) makeParticles(AluminumP, player.Li.Alp)
        if (hasChallenge('Li', 13) && player.Li.Size == 2) player.Li.Gain4 = new Decimal(Math.floor(Math.random() * 200) + 1)
        if (player.Li.Gain4 == 200 && hasChallenge('Li', 13) && player.Li.Size == 2) player.Li.Hydroxide = player.Li.Hydroxide.add(1), player.Li.HD = player.Li.Hydroxide.times(2)
        if (player.Li.Gain4 == 100 && hasChallenge('Li', 13) && player.Li.Size == 2) player.Li.Potassium = player.Li.Potassium.add(1), player.Li.PM = player.Li.Potassium.times(2)
        if (player.Li.Gain4 == 200 && player.Li.Size == 2 && hasChallenge('Li', 13) && player.tab == this.layer) makeParticles(HydroxideP, player.Li.HDp)
        if (player.Li.Gain4 == 100 && player.Li.Size == 2 && hasChallenge('Li', 13) && player.tab == this.layer) makeParticles(PottasiumP, player.Li.Kp)
        if (hasChallenge('Li', 13) && player.Li.Size == 2) player.Li.Gain5 = new Decimal(Math.floor(Math.random() * 10000) + 1)
        if (player.Li.Gain5.gte(1) && player.Li.Gain5.lte(10) && hasChallenge('Li', 13) && player.Li.Size == 2) player.Li.Fluorine = player.Li.Fluorine.add(1)
        if (player.Li.Gain5 == 20 && hasChallenge('Li', 13) && player.Li.Size == 2) player.Li.Silicon = player.Li.Silicon.add(1)
        if (player.Li.Gain5.gte(1) && player.Li.Gain5.lte(10) && player.Li.Size == 2 && hasChallenge('Li', 13) && player.tab == this.layer) makeParticles(FluorineP, player.Li.Alp)
        if (player.Li.Gain5 == 20 && player.Li.Size == 2 && hasChallenge('Li', 13) && player.tab == this.layer) makeParticles(SiliconP, player.Li.Alp)
        if (hasChallenge('Li', 14) && player.Li.Size == 2) player.Li.Gain6 = new Decimal(Math.floor(Math.random() * 124653) + 1)
        if (player.Li.Gain6 == 17777 && hasChallenge('Li', 14) && player.Li.Size == 2) player.Li.Francium = player.Li.Francium.add(1)
        if (player.Li.Gain6 == 17777 && player.Li.Size == 2 && hasChallenge('Li', 14) && player.tab == this.layer) makeParticles(FranciumP, player.Li.Alp)
        if (hasChallenge('Li', 14) && player.Li.Size == 2) player.Li.Gain7 = new Decimal(Math.floor(Math.random() * 1000000) + 1)
        if (player.Li.Gain7 == 50 && hasChallenge('Li', 15) && player.Li.Size == 2) player.Li.LithiumUP = player.Li.LithiumUP.add(1)
        if (player.Li.Gain7 == 50 && player.Li.Size == 2 && hasChallenge('Li', 15) && player.tab == this.layer) makeParticles(LithiumUP, player.Li.Alp)
        if (temp.Li.UrO.gte(1)) player.Li.State2 = 1
        if (temp.Li.UrO.lte(0)) player.Li.State2 = 0
        if (player.Li.State2 == 1 && player.tab == this.layer) temp.Li.UrO = temp.Li.UrO.sub(0.1)
        if (player.Li.State2 == 0 && player.tab == this.layer) temp.Li.UrO = temp.Li.UrO.add(0.1)
        if (player.Li.State3.gte(10) && temp.Li.Inv >= 1 && player.tab == this.layer) makeShinies(ShinyS), player.Li.State3 = player.Li.State3.times(0)
        if (player.Li.State3 < 10 && temp.Li.Inv >= 1 && player.tab == this.layer) player.Li.State3 = player.Li.State3.add(1)
    },
})