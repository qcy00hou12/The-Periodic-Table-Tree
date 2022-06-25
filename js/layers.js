addLayer("E", {
    startData() { return {
        unlocked:  false,
		points: new Decimal(0),
    }}
})

addNode("Ex",{
    row: "side",
    color: "#FFFFFF",

    layerShown() {
        if (hasAchievement('A', 15)) return true
    else return false},
    
    tooltip() {
        if(player.p.Node < 1) return "ON" 
       else return "OFF"},
        
    canClick() {return true},
    
    onClick() {
if (player.p.Node < 1) player.p.Node = player.p.Node.add(1)
        else player.p.Node = player.p.Node.times(0)},
})

addLayer("Ch", {
    row: "side",
    color: "#000000",
    textStyle: {"color" : "#ffffff"},
    layerShown() {
        if(player.He.IText == "Heisenburg") return true
    else return false}, 

    tooltip() { return "Lab Notes"},

    infoboxes: {
        lore: {
            title: "Note #1",
            body() { return "just the other day, he told me it was his birthday. I mean, who cares? It's not like anyone's going to get him anything anyway. Not like anyone could. The dudes a weirdo, you should stay away from 'em. Anyway gotta go, got a client who's probably already at Lithium!" },
            titleStyle: {"color" : "#ffffff"},
            
        }
    },

    tabFormat:[
        ["infobox", "lore"],
],
})
addLayer("Per", {
row: 1,
color: "#FFFFFF",
tooltip(){return ""},

infoboxes: {
    lore: {
        title: "Welcome To The Periodic Table Tree",
        body() { return "Here you will advance from element to element until I decide to stop. That's about it, not one for lore I guess... Save files if you want to skip a section or your savefile gets corrupted." },
    },
},


tabFormat: [
["infobox", "lore"],
["display-text",
function() { return 'A fun little periodic table:' }],
"blank",
["display-image",
function() { return 'https://i.postimg.cc/59DXKHnn/6ce621c1-37d7-4aa1-8068-18a856d6c523.jpg'}],
"blank",
["display-text",
function() { return 'Save files:'}],
["display-text",
function() { return 'Start of Hydrogen: https://www.udrop.com/file/6Mem/Start_of_Hydrogen.txt'}],
"blank",
["display-text",
function() { return 'Start of Helium: https://www.udrop.com/file/6Meu/Start_of_Helium.txt'}],
"blank",
["display-text",
function() { return 'Start of Lithium: https://www.udrop.com/file/6MGQ/Start_of_Lithium.txt'}],
"blank",
["display-text",
function() { return 'Credits: <div> Escapee, <div> smiley, <div> Jakub, <div> g🆎ples2.'}],
]
})

addLayer("A", {
    
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        Expulrate: new Decimal(0.4),
        Expulrate2: new Decimal(1)
       }},

       color: "#ff0000",
       symbol: "A",
       row: "side",
       resource: "Achievements",
       
    achievements: {
        11: {
            name: "Your First Element!",
            textStyle: {"color" : "#000000"},
           tooltip: "NOOOOOOOOOOOOOOOOOOOOO WAAAAAAAAY!?!@@#@#",
           style: { "background-size": "100% 100%" },
           done() {return player.E.points.gte(1)},
           image() {if (hasAchievement('A', 11)) return "https://i.postimg.cc/MpbZpCHf/232539b4-d9dd-4481-8b5c-8e70c11f3e52-prev-ui-1.png"}
        },
        12: {
            name: "Gassed Up",
            textStyle: {"color" : "#000000"},
           tooltip: "Produce 10k Total Hydrogen Gas.",
           style: { "background-size": "100% 100%" },
           done() {return player.p.Gas.gte(10000)},
           image() {if (hasAchievement('A', 12)) return "https://i.postimg.cc/WbSTRMH0/183def70-5ee5-483d-acef-87bb808777cf-prev-ui-1.png"}
        },
        13: {
            name: `"Gotta Empty The Tank"`,
            textStyle: {"color" : "#000000"},
           tooltip: "Hold over 1k Hydrogen Gas.",
           style: { "background-size": "100% 100%" },
           done() {return player.p.HydrogenGas.gte(1100)},
           image() {if (hasAchievement('A', 13)) return "https://i.postimg.cc/vHVpQ5T4/pixil-frame-0.png"}
        },
        14: {
            name: "Son of a GLITCH",
            textStyle: {"color" : "#000000"},
            style: { "background-size": "100% 100%" },
           tooltip: "Decode with Base64 for answer: U3BhbSBjbGljayBvbiBob2xkIGJ1dHRvbiB3ZWlyZG8u",
           done() {if (hasUpgrade('p', 14)) return player.p.Clic > 100},
           image() {if (hasAchievement('A', 14)) return "https://i.postimg.cc/0yddvF2j/527535f7-7dc4-43a5-b57a-a75afda3029b-1.png"}
        },
        15: {
            name: '"Shut Up Bitch"',
            textStyle: {"color" : "#000000"},
            style: { "background-size": "100% 100%" },
            goalTooltip: "Spend over 10k ticks with extra text on.",
           doneTooltip: "Unlocks button to shut off some text.",
           done() { return player.p.GasTicks.gte(10001)},
           image() {if (hasAchievement('A', 15)) return "https://i.postimg.cc/gkJ2mBys/84ae5647-37db-4c73-a6c3-7e50154d00bf-1.png"}
        },
        21: {
            name: "No Hydrogen?",
            textStyle: {"color" : "#000000"},
            tooltip: "Get the second element.",
            style: { "background-size": "100% 100%" },
           done() { return player.E.points.gte(2)},
           image() {if (hasAchievement('A', 21)) return "https://i.postimg.cc/bvnrJyK1/f67ee54d-fa4f-4979-bc60-79070345f628-2.png"}
        },
        22: {
            name: `"Can't Empty The Tank"`,
            textStyle: {"color" : "#000000"},
            style: { "background-size": "100% 100%" },
            tooltip: "Break the current max capacity.",
           done() { return temp['p'].clickables[11].effect.gte(2801)},
           image() {if (hasAchievement('A', 22)) return "https://i.postimg.cc/768LD06g/b3a51e4b-c5b1-4013-9b4a-81a594eb3e3f.png"}
        },
        23: {
            name: `"The Perfect Concentration"`,
            textStyle: {"color" : "#000000"},
            style: { "background-size": "100% 100%" },
            tooltip: "Fill the bar 3 times without the multiplier dropping to 0.2.",
           done() { return player.p.HydroResets.gte(3)},
           image() {if (hasAchievement('A', 23)) return "https://i.postimg.cc/QtqT89Xy/da3cf436-9f42-4acb-bb08-3efd8abeaebe-2.png"}
        },
        24: {
            name: "NEET",
            textStyle: {"color" : "#000000"},
            style: { "background-size": "100% 100%" },
            tooltip: "Fill up the bar around 1 time with a 1.1 Hydrogen Multiplier. Now go to the gym.",
           done() { if(hasUpgrade('p', 23)) return player.p.HydrogenPower.gte(1)},
           image() {if (hasAchievement('A', 24)) return "https://i.postimg.cc/nVQ3fmPh/cffd9b5d51642d58118de1a948cefd53-2934611896-prev-ui-1.png"}
        },
        25: {
            name: "Suffer",
            textStyle: {"color" : "#000000"},
            style: { "background-size": "100% 100%" },
            tooltip: "It's Always Been One Step Forward And Two Steps Back.",
           done() { if(hasUpgrade('p', 24)) return player.p.points.gte(55)},
           image() {if (hasAchievement('A', 25)) return "https://i.postimg.cc/KjgsnfHj/hqdefault-692744977-prev-ui-1.png"}
        },
        31: {
            name: "Avogadro's Constant",
            textStyle: {"color" : "#000000"},
            style: { "background-size": "100% 100%" },
            tooltip: "Get 6.022e23. Nothing else is important. Nope.",
           done() { return player.p.HydrogenPower.gte(6.022e23)},
           image() {if (hasAchievement('A', 31)) return "https://i.postimg.cc/fRTxtNRL/1200px-Talpa-europaea-MHNT-on-transparent-background-2549044357-1-prev-ui-1.png"}
        },
           32: {
            name: "High-Pitched Frequency",
            textStyle: {"color" : "#000000"},
            style: { "background-size": "100% 100%" },
            tooltip: "Click Deflate at 497L of Helium Gas or higher.",
           done() { if (player.He.State < 1) return player.He.Inflate.gte(497)},
           image() {if (hasAchievement('A', 32)) return "https://i.postimg.cc/C5BQT7Ng/slazzer-edit-image.png"}
        },
        33: {
            name: "SCROLL_WHEEL",
            textStyle: {"color" : "#000000"},
            style: { "background-size": "100% 100%" },
            tooltip: "Tedious work eh?.",
           done() { if (hasUpgrade('He', 16)) return player.He.HeliumExpunged.gte(0.1)},
           image() {if (hasAchievement('A', 33)) return "https://i.postimg.cc/8zQ2NhvB/steel-magspeed-electromagnetic-scroll-wheel-theres-nothing-like-it-2264955822-prev-ui-2.png"}
        },
        34: {
            name: "Hydrogen Automaton",
            textStyle: {"color" : "#000000"},
            style: { "background-size": "100% 100%" },
            tooltip: "Get full automation of Hydrogen layer.",
           done() { if (hasUpgrade('He', 22)) return player.He.HeliumExpunged.gte(0.1)},
           image() {if (hasAchievement('A', 34)) return "https://i.postimg.cc/0Q5pRHZM/cartoon-robot-free-2185919212-prev-ui.png"}
        },
        35: {
            name: "widepeepoHappy",
            textStyle: {"color" : "#000000"},
            style: { "background-size": "110% 100%" },
            tooltip: ":widepeepoHappy:",
           done() { if (hasUpgrade('He', 25)) return player.He.HeliumExpunged.gte(0.1)},
           image() {if (hasAchievement('A', 35)) return "https://i.postimg.cc/MHwFn3gm/3bgrvhjkbkt21-1272574542-1-prev-ui.png"}
        },
    },

    tabFormat: [
        ["display-text",
        function() { if(player.p.Node < 1) return 'You have ' + formatWhole(player.A.points) + ' achievements' 
        else return 'Heisenburg'}],
        "blank",
        "achievements"
        ],
        
        update() {
            if (player.He.HeliumExpunged > 1 && hasUpgrade('He', 21) == false) player.He.HeliumExpunged = player.He.HeliumExpunged.add(-player.A.Expulrate)
            if (player.He.HeliumExpunged < 0.1 && hasUpgrade('He', 21) == false) player.He.HeliumExpunged = player.He.HeliumExpunged.add(player.A.Expulrate2)
            player.p.HydroGain = player.p.HydroGain.times(0), 
            player.A.points = new Decimal(player.A.achievements.length)
            if (player.p.HydrogenMult < 0.2) player.p.HydroResets = player.p.HydroResets.times(0)}
})

addLayer("p", {
    name: "Hydrogen", // This is optional, only used in a few places, If absent it just uses the layer id.
    image: "https://i.postimg.cc/sxTpYZ07/a1f4826e-e1d2-40a3-8027-e243e33ca67b-Photo-Room-1.png", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
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
       }},
       branches: ['He'],
    color: "#0000ff",
    requires() {return player.He.points.add(1).pow(2)}, // Can be a function that takes requirement increases into account
    resource: "Hydrogen", // Name of prestige currency
    baseResource: "Hydrogen Power", // Name of resource prestige is based on
    baseAmount() {return player.p.HydrogenPower}, // Get the current amount of baseResource
    requires: new Decimal(1),
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent() {
        exp = new Decimal(0.8)
        upgra = new Decimal(player.p.upgrades.length)
        if (hasUpgrade('p', 16)) return exp.times(upgra.pow(-0.22))
    else return exp}, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "h", description: "H: Reset for Hydrogen", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],

    layerShown() {return true},

    onPrestige(){
        if (hasUpgrade('He', 22)) return ""
        player.p.HydrogenPower = player.p.HydrogenPower.times(0)
    },

    autoPrestige() { if (hasUpgrade('He', 11)) return true},

    canBuyMax() { return (hasMilestone('p', 3))},

    tooltip() { return player.p.points + " Hydrogen and " + formatWhole(player.p.HydrogenPower) + " Hydrogen Power"},

    bars: {
        HydrogenBar: {
            direction: UP,
            width: 200,
            height() { if(hasUpgrade('p', 16)) return 600
        else return 400},
            progress() { 
                prog1 = 499.99
                if (hasMilestone('p', 2)) prog1 = 999.99
                if (hasUpgrade('p', 16)) prog1 = 1999.99
                if (hasMilestone('He', 3)) prog1 = 19999.99
                if (hasUpgrade('p', 22)) prog1 = 19999999999.99
                if (hasUpgrade('p', 23)) prog1 = 7999999.99
                if (hasUpgrade('He', 22)) return 1
                return player.p.HydrogenGas / prog1},
            display() {return "Hydrogen Tank"},     
            fillStyle: {"background-color" : "#0000ff"}
        },

        HydrogenBar1: {
            direction: UP,
            width: 200,
            height() { if(hasUpgrade('p', 16)) return 600
            else return 400},
            progress() { 
                let P2 = new Decimal(0)
                prog2 = 999.99
                if (hasUpgrade('p', 16)) prog2 = 1999.99
                if (hasMilestone('He', 3)) prog2 = 19999.99
                if (hasUpgrade('p', 22)) prog2 = 19999999999.99
                if (hasUpgrade('p', 23)) prog2 = 7999999.99
                if (hasUpgrade('He', 22)) return 1
                if ( player.p.HydrogenGas > prog2) P2 = player.p.HydrogenGas.add(-prog2) / prog2
            return P2 },
            display() {return "Hydrogen Tank"},     
            fillStyle: {"background-color" : "#0000ff"},
            unlocked() { if (hasUpgrade('p', 14)) return true
        else return false}
        },

        HydrogenBar2: {
            direction: UP,
            width: 200,
            height() { if(hasUpgrade('p', 16)) return 600
            else return 400},
            progress() { 
                prog3 = 3
                if (hasUpgrade('p', 23)) prog3 = 1.11
                if (hasUpgrade('p', 24)) prog3 = 10
                return player.p.HydrogenMult / prog3},
            display() {return "Hydrogen Multiplier Tank <div> Currently: " + format(player.p.HydrogenMult) + "x"},     
            fillStyle: {"background-color" : "#ff0000"},
            unlocked() { if (hasMilestone('He', 3)) return true
        else return false}
            }
    },

    milestones: {
        1: {
            requirementDescription: "1 Hydrogen",
            effectDescription: "2x Hydogen Gas.",
            done() { return player.p.points.gte(1) },
            onComplete() {player.E.points = player.E.points.add(1)},
        },
        2: {
            requirementDescription: "2 Hydrogen",
            effectDescription: "2x Hydrogen Tank Capacity. Also unlock upgrades.",
            done() { return player.p.points.gte(2) },
            unlocked() {
                if (hasMilestone('p', 1)) return true},
            },
        3: {
            requirementDescription: "3 Hydrogen",
            effectDescription: "Buy max Hydrogen.",
            done() { return player.p.points.gte(3) },
            unlocked() {
                if (hasMilestone('p', 2)) return true},
            },
        4: {
            requirementDescription: "20 Hydrogen",
            effectDescription: "Hydrogen Gas boosts Hydrogen Gas. (Must have 6 Hydrogen Upgrades.)",
            done() { if(hasUpgrade('p', 16)) return player.p.points.gte(20) },
            unlocked() {
                if (hasMilestone('p', 3)) return true},
            },
    },

    upgrades: {
        11: {
            title: "Hydrogen's Gassed Up",
            description: "Hydrogen Gas gain is multiplied to the power of 2.",
            cost() { if (hasUpgrade('p', 12)) return new Decimal(5)
        else return new Decimal(2)},
            unlocked() { 
                if (hasMilestone('p', 2)) return true
                else return false},
        },
        12: {
            title: "Hydrogen's Based",
            description: "Gain 1 to Hydrogen Gas base",
            cost() { if (hasUpgrade('p', 11)) return new Decimal(5)
        else return new Decimal(2)},
            unlocked() { 
                if (hasMilestone('p', 2)) return true
                else return false},
        },
        13: {
            title: "Hydrogen's Bonding",
            description: "Add 2 more to base of Hydrogen Gas.",
            cost: new Decimal(8),
            unlocked() { 
                if (hasUpgrade('p', 11)) return true
                if (hasUpgrade('p', 12)) return true
                else return false},
        },
        14: {
            title: "Hydrogen's Expanding",
            description: "Get a 2nd Hydrogen tank.",
            cost: new Decimal(16),
            unlocked() { 
                if (hasUpgrade('p', 13)) return true
                else return false},
        },
        15: {
            title: "Hydrogen's Powering Up",
            description: "Hydrogen Power boosts Hydrogen Gas.",
            effectDisplay() { return format(effect2)+"x" },
            cost: new Decimal(15),
            unlocked() { 
                if (hasUpgrade('p', 14)) return true
                else return false},
        },
        16: {
            title: "Hydrogen's Half Lifed",
            description: "Hydrogen upgrades on this row cut Hydrogen cost, but Hydrogen Tank capcity 2x.",
            cost: new Decimal(18),
            effectDisplay() { return "/" + format(upgra.pow(-0.22))},
            unlocked() { 
                if (hasUpgrade('p', 15)) return true
                else return false},      
        },
        21: {
            title: "Hydrogen's Hilarity",
            description: "Unlock Helium",
            cost: new Decimal(100),
            unlocked() { 
                if (hasUpgrade('p', 16)) return true
                else return false}, 
        },
        22: {
            title: "Hydrogen's Lightness",
            description: "Hydrogen Multiplier falls slower but increase tank capacity by 1 million times",
            cost: new Decimal(400),
            onPurchase() { return player.p.points = player.p.points.times(0), player.p.HydrogenPower = player.p.HydrogenPower.times(0), player.p.Hydrogengas = player.p.Hydrogengas.times(0)},
            unlocked() { 
                if (hasUpgrade('He', 13)) return true
                else return false}, 
        },
        23: {
            title: "Hydrogen's Embrittled",
            description: "Hydrogen Tank capacity is much lower but so is the Hydrogen Multiplier cap.",
            cost: new Decimal(20),
            onPurchase() { return player.p.HydrogenMult = player.p.HydrogenMult.times(0.1), player.p.HydrogenPower = player.p.HydrogenPower.times(0)},
            unlocked() { 
                if (hasUpgrade('p', 22)) return true
                else return false}, 
        },
        24: {
            title: "Hydrogen's Enthalpy Of Combustion",
            description: "Increase Hydrogen Multiplier cap but Hydrogen Gas gain is divided on an exponent of how large the multiplier is.",
            currencyDisplayName: "Hydrogen Power",
            currencyInternalName: "HydrogenPower",
            currencyLocation() { return player.p},
            cost: new Decimal(3),
            onPurchase() { return player.p.HydrogenMult = player.p.HydrogenMult.times(0.1), player.p.HydrogenPower = player.p.HydrogenPower.times(0)},
            unlocked() { 
                if (hasUpgrade('p', 23)) return true
                else return false}, 
        },
        25: {
            title: "Hydrogen's Detonation",
            description: "Helium hardcap is removed.",
            cost: new Decimal(20),
            onPurchase() { return player.p.HydrogenMult = player.p.HydrogenMult.times(0.1), player.p.HydrogenPower = player.p.HydrogenPower.times(0)},
            unlocked() { 
                if (hasUpgrade('p', 24)) return true
                else return false}, 
        },
        26: {
            title: "Hydrogen's Tritium",
            description: "Unlock balloons. Remove Hydrogen Multiplier Division. Multiplier also boosts Hydrogen Power. Hydrogen Multiplier falls much slower.",
            cost: new Decimal(1850),
            unlocked() { 
                if (hasUpgrade('p', 25)) return true
                else return false}, 
        }
    },


    clickables: {
        11: {
            title: "Hydrogen Gas",
            display() {
                return "Produce Hydrogen Gas on hold."
            },
            canClick() {
               return true
            },
            effect(){
                let effect = new Decimal(0.9)
                effect2 = new Decimal(1)
                effect3 = new Decimal(2)
                effect4 = new Decimal(1)
                effectMult2 = new Decimal(1)
                prog = 499.99
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
                if (hasMilestone('p', 1)) effect = effect.times(2)
                if (hasUpgrade('p', 11)) effect = effect.pow(2) 
                if (hasUpgrade('p', 15)) effect2 = effect2.add(player.p.HydrogenPower.pow(0.8)) 
                if (effect2 > 2.99) effect2 = 3
                if (hasUpgrade('p', 15)) effect = effect.add(effect2)
                if (hasMilestone('p', 4)) effect = effect.add(player.He.points.add(1).pow(effect3).times(effect4))
                effect = effect.times(player.He.points.add(1).pow(2))
                if (player.p.HydrogenGas > prog) player.p.HydroResets = player.p.HydroResets.add(1), player.p.HydrogenPower = player.p.HydrogenPower.times(effectMult2).add(1).add(player.p.points.add(player.p.points).times(player.He.points.add(1).pow(effect3).times(effect4))), player.p.HydrogenGas = player.p.HydrogenGas.times(0)
                return effect
            },
            unlocked() { if (hasUpgrade('He', 12)) return false
        else return true},
            onClick() {
                if (hasUpgrade('p', 14)) player.p.Clic = player.p.Clic.add(1)},
            onHold(){ 
                player.p.GasTicks = player.p.GasTicks.add(1)
            if (player.p.Node < 1) player.p.HydroGain =  player.p.HydroGain.add(1)
            player.p.HydrogenGas = player.p.HydrogenGas.add((temp['p'].clickables[11].effect).times(player.p.HydrogenMult + 1))
            player.p.Gas = player.p.Gas.add(temp['p'].clickables[11].effect)
            },
        },
        12: {
            title: "Hydrogen Multiplier",
            display() {
                return "Multiply Hydrogen Gas gain on hold."
            },
            unlocked() { 
                if (hasMilestone('He', 3) && hasUpgrade('He', 22) == false) return true
                else return false},
            canClick() {
               return true},
            effect() {
                effectM = new Decimal(0.2)
                effectMult = new Decimal(0)
                effectMult = effectMult.add(player.p.HydrogenMult)
                effectD = new Decimal(5)
                lightfall = new Decimal(-0.1)
                Equa = new Decimal(0)
                cap = new Decimal(3)
                if (hasUpgrade('p', 24)) effectD = effectMult
                if (hasUpgrade('p', 26)) effectD = 5
                if (effectD > 5) effectMult = 0.1 / effectMult
                if (effectD < 4) effectMult = 0.1 / effectMult
                if (hasUpgrade('p', 23)) cap = 1.11
                if (hasUpgrade('p', 24)) cap = 10
                if (hasUpgrade('p', 22)) lightfall = -0.05 
                if (hasUpgrade('p', 26)) lightfall = -0.005
                if (hasUpgrade('p', 24)) Equa = 2
                if (hasMilestone('He', 3)) Equa = 0.1
                if (hasMilestone('He', 4)) Equa = 0
                if (hasUpgrade('p', 24)) Equa = 2
                if (player.p.HydrogenMult > Equa) player.p.HydrogenMult = player.p.HydrogenMult.add(lightfall)
                if (player.p.HydrogenMult < Equa) player.p.HydrogenMult = player.p.HydrogenMult.add(-lightfall)
                return effectM},
            onHold() {
        player.p.HydrogenMult = player.p.HydrogenMult.add(temp['p'].clickables[12].effect)
    if (player.p.HydrogenMult > cap) player.p.HydrogenMult = player.p.HydrogenMult.add(effectM.times(-1))}
        }
    },

    infoboxes: {
        lore: {
            title: "Hydrogen",
            body() { return "This is a periodic table tree and it all starts with hydrogen because of its- well, its atomic properties technically. Anyway, start producing some hydrogen gas so we can convert it into energy or something." },
        },
    },

    tabFormat: [
        ["infobox", "lore"],
        ["display-text",
        function() { if(player.p.Node < 1) return 'Hydrogen increases Hydrogen Power gain by ' + formatWhole(player.p.points.add(player.p.points))}],
        "blank",
        "main-display",
        () => (hasUpgrade('He', 11)) ? "" :  "prestige-button",
        ["display-text",
        function() { if(player.p.Node < 1) return 'You have ' + formatWhole(player.p.HydrogenPower) + ' Hydrogen Power'}],
        "blank",
        "milestones",
        "blank",
        ["display-text",
        function() { if(player.p.Node < 1) return 'You have ' + format(player.p.HydrogenGas) + 'L Hydrogen Gas'}],
        ["display-text",
        function(){ if (player.p.HydroGain > 0) return 'You are making ' + format(temp['p'].clickables[11].effect) + 'L Hydrogen Gas per tick'}], 
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
player.p.HydroGain =  player.p.HydroGain.add(1),
player.p.HydrogenGas = player.p.HydrogenGas.add(temp['p'].clickables[11].effect).times(effectMult + 1),
player.p.Gas = player.p.Gas.add(temp['p'].clickables[11].effect)},
})

addLayer("He", {
    name: "Helium", // This is optional, only used in a few places, If absent it just uses the layer id.
    image: "https://i.postimg.cc/RZMcmXvm/1764b201-ab45-4111-9c8a-646628e64d5c.png", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        total: true,
		points: new Decimal(0),
        HeliumExpunged: new Decimal(0),
        resets: new Decimal(0),
        State: new Decimal(1),
        Inflate: new Decimal(1),
        IText: "Hello",
        BalDiv: new Decimal(0),
        BalDiv1: new Decimal(0),
       }},

    layerShown() {
        if (hasUpgrade('p', 17)) return true
        if (player.He.total > 0) return true
else return false},

    color: "#00ffff ",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "Helium", // Name of prestige currency
    baseResource: "Hydrogen", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    requires: new Decimal(100),
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent() { if (hasUpgrade('He', 21)) return 0.5
        else return 0.1}, // Prestige currency exponent
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
        {key: "e", description: "E: Reset for Helium", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],

    onPrestige() {
        player.He.resets = player.He.resets.add(1)
    },

    tooltip() {return formatWhole(player.He.points) + " Helium"},
    tooltipLocked() {return formatWhole(player.He.points) + " Helium"},
        
    clickables: {
        11: {
            title: "Inflate",
            display() {
               if (player.He.State > 0) return "On"
                else return "Off"
            },
            canClick() {
               return true},
               effect() { 
                BalMult = new Decimal(1)
                InRate = new Decimal(1)
                cap2 = new Decimal(49)
                player.He.BalDiv = player.He.Inflate
                player.He.BalDiv1 = player.He.Inflate
                if (hasUpgrade('He', 16)) player.He.BalDiv = player.He.BalDiv.times(0.3)
                if (hasUpgrade('He', 23)) player.He.BalDiv = player.He.BalDiv.times(0.1)
                if (hasUpgrade('He', 16)) player.He.BalDiv1 = player.He.BalDiv1.times(0.3)
                if (hasUpgrade('He', 23)) player.He.BalDiv1 = player.He.BalDiv1.times(0.1)
                if (hasUpgrade('He', 24)) player.He.BalDiv1 = player.He.BalDiv1.add(player.He.Inflate.pow(0.7))
                if (hasUpgrade('He', 25)) player.He.BalDiv1 = player.He.BalDiv1.add(player.He.Inflate)
                if (hasUpgrade('He', 15)) InRate = 10
                if (hasUpgrade('He', 24)) InRate = 20
                if (hasUpgrade('He', 14)) cap2 = 499
                if (hasUpgrade('He', 23)) cap2 = 4999
                if (player.He.Inflate > cap2) player.He.Inflate = player.He.Inflate.times(0)
                if (player.He.State > 0)  player.He.Inflate = player.He.Inflate.add(InRate)
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
                effect() {
                    BalMult = new Decimal(1)
                    if (hasUpgrade('He', 21)) BalMult = BalMult.add((player.He.points).pow(1.1))
                    if (hasMilestone('He', 6)) BalMult = softcap(BalMult, new Decimal(500), 0.1)
                    if (player.He.State > 0) return ""
                    if (player.He.Inflate > 0) player.He.Inflate = player.He.Inflate.add(-InRate), player.He.HeliumExpunged = player.He.HeliumExpunged.add(1).add(player.He.Inflate.pow(0.1)).add(BalMult)
                },
                canClick() {
                   return true},
                onClick() {
                    player.He.State = player.He.State.times(0)
                   }
                }
    },

    milestones: {
        1: {
            requirementDescription: "1 Total Helium",
            effectDescription: "Keep 1 Hydrogen milestone per reset.",
            done() { return player.He.total.gte(1)},
            onComplete() {player.E.points = player.E.points.add(1)},
        },
        2: {
            requirementDescription: "2 Total Helium",
            effectDescription: "Keep 1 Hydrogen upgrade per reset.",
            done() { return player.He.total.gte(2)},
            unlocked() {
                if (hasMilestone('He', 1)) return true},
        },
        3: {
            requirementDescription: "7 Total Helium",
            effectDescription: "Unlock a multiplier tank but 10x tank capacity. Hydrogen Multiplier starts at 0.1.",
            done() { return player.He.total.gte(7)},
            unlocked() {
                if (hasMilestone('He', 2)) return true},
        },
        4: {
            requirementDescription: "20 Helium",
            effectDescription: "Hydrogen Mutiplier now starts at 0.",
            done() { return player.He.points.gte(20)},
            unlocked() {
                if (hasMilestone('He', 3)) return true},
        },
        5: {
            requirementDescription: `Have Upgrade "Hydrogen's Lightness"`,
            effectDescription: "Helium Mutiplier is now 0, same with Helium.",
            done() { return hasUpgrade('p', 22)},
            onComplete() { return  player.He.points = player.He.points.times(0)},
            unlocked() {
                if (hasMilestone('He', 4)) return true},
            },
        6: {
            requirementDescription: "500 Helium",
            effectDescription: "Softcap Helium boost to Hydrogen Exponged gain starting at 500 Helium.",
            done() { if (hasUpgrade('He', 21)) return player.He.points.gte(500)},
            unlocked() {
                if (hasUpgrade('He', 21)) return true},
            },
    },

    upgrades: {
        11: {
            title: "Knock Knock",
            description: "Unlock Hydrogen button automation. Gain 1 Helium from Jules Janssen.",
            cost() {return new Decimal(5)},
            onPurchase() { return player.He.points = player.He.points.add(1)},
            unlocked() { 
                if (hasMilestone('He', 2)) return true
                else return false},
        },
        12: {
            title: "Who's There?",
            description: "Unlock Hydrogen tank automation.",
            cost() {return new Decimal(10)},
            unlocked() { 
                if (hasUpgrade('He', 11)) return true
                else return false},
        },
        13: {
            title: "Helium Hydride Corrosion!",
            description: "Remove exponent of Helium effect but unlock more Hydrogen upgrades.",
            cost() {return new Decimal(100)},
            onPurchase() { return player.p.HydrogenMult = player.p.HydrogenMult.times(0.1), player.p.HydrogenPower = player.p.HydrogenPower.times(0), player.p.points = player.p.points.times(0)},
            unlocked() { 
                if (hasUpgrade('He', 12)) return true
                else return false},
        },
        14: {
            title: "Natural Gas Extraction. (This is a fart joke).",
            description: "Increase Balloon capcity and Helium Gas Expunged rate.",
            currencyDisplayName: "Helium Gas Expunged",
            currencyInternalName: "HeliumExpunged", 
            currencyLocation() { return player.He},
            cost() {return new Decimal(500)},
            unlocked() { 
                if (hasUpgrade('p', 26)) return true
                else return false},
        },
        15: {
            title: "Feel That Superfluidity.",
            description: "Increase Helium Gas Inflate and Deflate gain.",
            currencyDisplayName: "Helium Gas Expunged",
            currencyInternalName: "HeliumExpunged", 
            currencyLocation() { return player.He},
            cost() {return new Decimal(2500)},
            unlocked() { 
                if (hasUpgrade('He', 14)) return true
                else return false},
        },
        16: {
            title: "Haha, That Last Upgrade Only Made Things Harder!",
            description: "Reduce image scaling.",
            currencyDisplayName: "Helium Gas Expunged",
            currencyInternalName: "HeliumExpunged", 
            currencyLocation() { return player.He},
            cost() {return new Decimal(1000)},
            unlocked() { 
                 if (hasUpgrade('He', 15)) return true
                 else return false},
        },
        21: {
            title: `Helium "Leak Detection"`,
            description: "Greatly reduce the Helium requirement exponent. Helium now multiplies Helium expunged gain. Helium Gas no longer has gas constantly decreasing",
            cost() {return new Decimal(1000)},
            unlocked() { 
                    if (hasUpgrade('He', 16)) return true
                    else return false},
        },
        22: {
            title: "Aww man, no narcotic properties?",
            description: "Automate multiplier button and resetting Hydrogen resets nothing.",
            currencyDisplayName: "Helium Gas Expunged",
            currencyInternalName: "HeliumExpunged", 
            currencyLocation() { return player.He},
            cost() {return new Decimal(500000)},
            unlocked() { 
            if (hasUpgrade('He', 21)) return true
            else return false},
        },
        23: {
            title: "Dude, I think I'm getting progressively Higher.",
            description: "Increase Ballon Capacity and reduce image scaling.",
            currencyDisplayName: "Helium Gas Expunged",
            currencyInternalName: "HeliumExpunged", 
            currencyLocation() { return player.He},
            cost() {return new Decimal(1000000)},
            unlocked() { 
            if (hasUpgrade('He', 22)) return true
            else return false},
        },
        24: {
            title: "I'm Floatingggg.",
            description: "Float.",
            currencyDisplayName: "Helium Gas Expunged",
            currencyInternalName: "HeliumExpunged", 
            currencyLocation() { return player.He},
            cost() {return new Decimal(2500000)},
            unlocked() { 
            if (hasUpgrade('He', 23)) return true
            else return false},
        },
        25: {
            title: "Going 1355.633077 miles an hour.",
            description: "Gas Gas Gas.",
            currencyDisplayName: "Helium Gas Expunged",
            currencyInternalName: "HeliumExpunged", 
            currencyLocation() { return player.He},
            cost() {return new Decimal(3000000)},
            unlocked() { 
            if (hasUpgrade('He', 24)) return true
            else return false},
        },
        26: {
            title: "Naw man, come on. Don't leave now!",
            description: "Unlock Lithium.",
            currencyDisplayName: "Helium Gas Expunged",
            currencyInternalName: "HeliumExpunged", 
            currencyLocation() { return player.He},
            cost() {return new Decimal(69420)},
            unlocked() { 
            if (hasUpgrade('He', 25)) return true
            else return false},
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
        function() { if(player.p.Node < 1) return 'Helium boosts Hydrogen Power and Hydrogen Gas gain by ' + formatWhole(player.He.points.add(1).pow(effect3).times(effect4))}],
        ["display-text",
        function() { if(player.p.Node < 1 && hasUpgrade('He', 21)) return 'Helium also boosts Hydrogen Expunged gain by adding ' + format((BalMult))}],
        "blank",
        "main-display",
        "prestige-button",
        "blank",
        ["display-text",
        function() { if(player.p.Node < 1) return 'You have done ' + formatWhole(player.He.resets) + ' resets'}],
        "milestones",
        "upgrades",
        "blank",
        ["display-text",
        function() { if(player.p.Node < 1) return 'You have ' + format(player.He.HeliumExpunged) + 'L Helium Gas Expunged'}],
        ["display-text",
        function() { if(player.p.Node < 1) return 'You have ' + format(player.He.Inflate) + 'L Helium Gas'}],
        ["display-image",
        function() { if (player.He.Inflate > 3) return 'https://i.postimg.cc/tR1vQzt7/d43opezd7zfz-2494814611-1-prev-ui-1.png'
    if (player.He.Inflate < 4) return 'https://i.postimg.cc/fy4chYD0/balloon-pop-hi-794366064-prev-ui-1.png'}],
        "clickables",
        "blank",
        () => (hasUpgrade('p', 26) && player.p.Node < 1) ? "" : ["strict-text-input", "IText"],
    ],

    componentStyles: {
        "display-image"() { return {'height': `${player.He.BalDiv.add(50)}px`, 'width': `${player.He.BalDiv1.add(50)}px`}},
        }
})
