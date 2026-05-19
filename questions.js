const questions = [

// ================= FACTS =================

{
subject:"facts",
question:"FACTS stands for:",
options:[
"Flexible Automatic Transmission System",
"Flexible AC Transmission Systems",
"Fast AC Transfer System",
"Frequency AC Transmission Scheme"
],
answer:"Flexible AC Transmission Systems",
explanation:"FACTS means Flexible AC Transmission Systems."
},

{
subject:"facts",
question:"FACTS technology mainly uses:",
options:[
"Mechanical switches",
"Power electronic devices",
"Transformers only",
"Batteries only"
],
answer:"Power electronic devices",
explanation:"FACTS devices mainly use power electronic devices."
},

{
subject:"facts",
question:"The main objective of FACTS is to:",
options:[
"Reduce voltage only",
"Increase transmission capacity and control power flow",
"Store energy",
"Generate power"
],
answer:"Increase transmission capacity and control power flow",
explanation:"FACTS improves transmission capability and controls power flow."
},

{
subject:"facts",
question:"FACTS devices can be connected as:",
options:[
"Only series",
"Only shunt",
"Both series and shunt",
"Parallel only"
],
answer:"Both series and shunt",
explanation:"FACTS devices may be connected in series or shunt."
},

{
subject:"facts",
question:"The first FACTS device widely used was:",
options:[
"STATCOM",
"UPFC",
"Static VAR Compensator (SVC)",
"TCSC"
],
answer:"Static VAR Compensator (SVC)",
explanation:"SVC was the first widely used FACTS device."
},

{
subject:"facts",
question:"FACTS controllers mainly control:",
options:[
"Resistance only",
"Voltage only",
"One or more AC system parameters",
"Frequency only"
],
answer:"One or more AC system parameters",
explanation:"FACTS controls voltage, impedance, angle and power flow."
},

{
subject:"facts",
question:"Thyristors in FACTS devices are used for:",
options:[
"Energy storage",
"Switching and phase control",
"Voltage generation",
"Resistance measurement"
],
answer:"Switching and phase control",
explanation:"Thyristors are used for switching and firing control."
},

{
subject:"facts",
question:"The reactive power in FACTS can be controlled by:",
options:[
"Temperature",
"Firing angle of thyristors",
"Load resistance",
"Frequency only"
],
answer:"Firing angle of thyristors",
explanation:"Reactive power depends on thyristor firing angle."
},

{
subject:"facts",
question:"The equivalent susceptance in FACTS is given by:",
options:[
"Resistance equation",
"Power equation",
"Susceptance equation",
"Voltage equation"
],
answer:"Susceptance equation",
explanation:"Equivalent susceptance is represented using susceptance equations."
},

{
subject:"facts",
question:"Flexibility of power systems means:",
options:[
"High cost",
"Ability to adapt to changes while maintaining stability",
"Constant voltage",
"Fixed operation"
],
answer:"Ability to adapt to changes while maintaining stability",
explanation:"Flexible systems can adapt to changing operating conditions."
},

{
subject:"facts",
question:"FACTS devices improve system performance by:",
options:[
"Slowing response",
"Fast automatic control",
"Increasing losses",
"Reducing power"
],
answer:"Fast automatic control",
explanation:"FACTS devices provide rapid automatic control."
},

{
subject:"facts",
question:"Maximum transmitted power is given by:",
options:[
"Incorrect",
"Only for DC",
"Correct expression",
"For resistance only"
],
answer:"Correct expression",
explanation:"The equation represents the maximum transmitted power correctly."
},

{
subject:"facts",
question:"If capacitive susceptance is added, the transfer reactance:",
options:[
"Increases",
"Decreases",
"Remains constant",
"Becomes zero"
],
answer:"Decreases",
explanation:"Capacitive compensation reduces transfer reactance."
},

{
subject:"facts",
question:"Decreasing transfer reactance results in:",
options:[
"Less power transfer",
"No change",
"More power transfer",
"Infinite losses"
],
answer:"More power transfer",
explanation:"Lower reactance increases transmitted power."
},

{
subject:"facts",
question:"SVC is mainly used for:",
options:[
"Voltage and reactive power control",
"Frequency control",
"Power generation",
"Energy storage"
],
answer:"Voltage and reactive power control",
explanation:"SVC controls voltage and reactive power."
},

{
subject:"facts",
question:"STATCOM is a type of:",
options:[
"Mechanical device",
"FACTS device",
"Transformer",
"Generator only"
],
answer:"FACTS device",
explanation:"STATCOM is a FACTS controller."
},

{
subject:"facts",
question:"UPFC stands for:",
options:[
"Unified Power Flow Controller",
"Universal Power Factor Control",
"Unit Power Flow Circuit",
"Ultra Power Flow Converter"
],
answer:"Unified Power Flow Controller",
explanation:"UPFC means Unified Power Flow Controller."
},

{
subject:"facts",
question:"FACTS devices operate:",
options:[
"Slowly",
"Manually",
"Automatically and rapidly",
"Only at fixed time"
],
answer:"Automatically and rapidly",
explanation:"FACTS systems operate automatically with fast response."
},

{
subject:"facts",
question:"FACTS improves:",
options:[
"Only voltage",
"Only current",
"Stability and power transfer capability",
"Only resistance"
],
answer:"Stability and power transfer capability",
explanation:"FACTS enhances system stability and power transfer."
},

{
subject:"facts",
question:"Which of the following is NOT a FACTS device?",
options:[
"SVC",
"STATCOM",
"UPFC",
"Transformer"
],
answer:"Transformer",
explanation:"Transformer is not classified as a FACTS device."
},

// ================= VOLTAGE CONTROL =================

{
subject:"voltage",
question:"What is the statutory limit of voltage variation at consumers terminals?",
options:[
"±2%",
"±4%",
"±6%",
"±10%"
],
answer:"±6%",
explanation:"The statutory limit is ±6%."
},

{
subject:"voltage",
question:"The main cause of voltage variation at consumer premises is:",
options:[
"Frequency change",
"Change in load",
"Transformer losses only",
"Generator speed"
],
answer:"Change in load",
explanation:"Voltage changes mainly because of load variation."
},

{
subject:"voltage",
question:"When system load increases, the voltage at consumer terminals:",
options:[
"Increases",
"Remains constant",
"Decreases",
"Becomes zero"
],
answer:"Decreases",
explanation:"Increasing load causes voltage drop."
},

{
subject:"voltage",
question:"Which of the following is NOT a cause of voltage drop?",
options:[
"Alternator impedance",
"Transmission line",
"Capacitor bank",
"Transformer impedance"
],
answer:"Capacitor bank",
explanation:"Capacitor banks improve voltage instead of reducing it."
},

{
subject:"voltage",
question:"Tirril Regulator is a type of control method:",
options:[
"Induction regulators",
"Excitation",
"Tap changing transformers",
"Synchronous condenser"
],
answer:"Excitation",
explanation:"Tirril regulator is an excitation control method."
},

{
subject:"voltage",
question:"A mid-tapped reactor is used in transformer:",
options:[
"On-load tap-changing",
"Off-load tap-changing",
"Auto tap-changing",
"Step-up"
],
answer:"Auto tap-changing",
explanation:"Mid tapped reactor is used in auto tap changing."
},

{
subject:"voltage",
question:"The control method satisfactory only for relatively short lines is:",
options:[
"Auto transformers",
"Excitation",
"Tap changing transformers",
"Synchronous condenser"
],
answer:"Excitation",
explanation:"Excitation control is suitable for short lines."
},

{
subject:"voltage",
question:"Low voltage in induction motors causes:",
options:[
"High efficiency",
"Reduced starting torque",
"Increased speed",
"No effect"
],
answer:"Reduced starting torque",
explanation:"Low voltage reduces starting torque."
},

{
subject:"voltage",
question:"Voltage control equipment is installed mainly to:",
options:[
"Increase current",
"Maintain constant voltage",
"Reduce frequency",
"Increase resistance"
],
answer:"Maintain constant voltage",
explanation:"Voltage control equipment maintains voltage levels."
},

{
subject:"voltage",
question:"Voltage control equipment is used at:",
options:[
"Generating stations only",
"Distribution only",
"Transmission only",
"Multiple locations in system"
],
answer:"Multiple locations in system",
explanation:"Voltage control equipment is installed throughout the power system."
},

{
subject:"voltage",
question:"Which method is used only at generating stations?",
options:[
"Tap changing transformer",
"Synchronous condenser",
"Excitation control",
"Booster transformer"
],
answer:"Excitation control",
explanation:"Excitation control is used in generating stations."
},

{
subject:"voltage",
question:"Tirril regulator works on:",
options:[
"Continuous control",
"Overshooting principle",
"Step-down method",
"Manual control"
],
answer:"Overshooting principle",
explanation:"Tirril regulator uses overshooting principle."
},

{
subject:"voltage",
question:"Tirril regulator is also known as:",
options:[
"Static regulator",
"Vibrating regulator",
"Induction regulator",
"Digital regulator"
],
answer:"Vibrating regulator",
explanation:"Tirril regulator is called vibrating regulator."
},

{
subject:"voltage",
question:"Brown-Boveri regulator differs from Tirril regulator because it:",
options:[
"Uses DC supply",
"Works continuously",
"Uses no resistance",
"Uses only manual control"
],
answer:"Works continuously",
explanation:"Brown-Boveri regulator provides continuous control."
},

{
subject:"voltage",
question:"Off-load tap changing transformer:",
options:[
"Operates during load",
"Requires load disconnection",
"Has no taps",
"Works automatically"
],
answer:"Requires load disconnection",
explanation:"Off-load tap changing requires disconnecting the load."
},

{
subject:"voltage",
question:"Main disadvantage of off-load tap changer:",
options:[
"High cost",
"Cannot operate under load",
"Low efficiency",
"Large size"
],
answer:"Cannot operate under load",
explanation:"Off-load tap changers cannot operate while energized."
},

{
subject:"voltage",
question:"On-load tap changer allows:",
options:[
"Voltage change without interruption",
"Only manual operation",
"Fixed voltage output",
"Zero losses"
],
answer:"Voltage change without interruption",
explanation:"On-load tap changers operate without interrupting supply."
},

{
subject:"voltage",
question:"Auto-transformer tap changing uses:",
options:[
"Two transformers",
"Reactor with taps",
"Capacitor banks",
"DC supply"
],
answer:"Reactor with taps",
explanation:"Auto transformer tap changing uses a tapped reactor."
},

{
subject:"voltage",
question:"Synchronous condenser supplies:",
options:[
"Active power",
"Reactive lagging power",
"Reactive leading power",
"No power"
],
answer:"Reactive leading power",
explanation:"Synchronous condenser supplies leading reactive power."
},

{
subject:"voltage",
question:"Purpose of synchronous condenser is to:",
options:[
"Increase resistance",
"Reduce voltage drop",
"Increase losses",
"Reduce current"
],
answer:"Reduce voltage drop",
explanation:"Synchronous condenser improves voltage profile."
}

//
// ================= STABILITY MCQ =================
//


//
// ================= STABILITY TRUE / FALSE =================
//


];
