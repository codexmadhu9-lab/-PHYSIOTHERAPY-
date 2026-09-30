import womensPhysiotherapy from './assets/programs/womens-physiotherapy.jpeg';
import corporateWellness from './assets/programs/corporate-wellness.jpeg';
import homePhysiotherapy from './assets/programs/home-physiotherapy.jpeg';
import seniorMobility from './assets/programs/senior-mobility.jpeg';
import hero from './assets/hero/natural-movement.webp';
import treatment from './assets/treatment/guided-assessment.webp';
import movement from './assets/movement/restore-balance.webp';
import sportsRehabilitation from './assets/programs/sports-rehabilitation.jpeg';
import postSurgicalRehabilitation from './assets/programs/post-surgical-rehabilitation.jpeg';
import ergonomicAssessment from './assets/programs/ergonomic-assessment.jpeg';
export const images = {hero, treatment, movement};
export const programs = [
 {name:'Sports Rehabilitation',tag:'RETURN TO WHAT YOU LOVE',image:sportsRehabilitation,position:'80% center',description:'A progressive approach to strength, mobility and sport-specific movement. Your assessment helps shape a plan around your activity, recovery stage and goals.',points:['Movement and strength assessment','Individual exercise progression','Planning your return to sport']},
 {name:'Post-Surgical Rehabilitation',tag:'RECOVER WITH CONFIDENCE',image:postSurgicalRehabilitation,position:'65% center',description:'Rehabilitation tailored to your procedure and your surgical team’s guidance, with gradual progression towards the activities that matter to you.',points:['Review of your recovery guidance','Mobility and strength work','Progress reviews at each stage']},
 {name:'Posture Correction',tag:'FIND YOUR NATURAL BALANCE',image:movement,position:'25% center',description:'Explore how you sit, stand and move. Build comfortable movement options and the strength to support your everyday routines.',points:['Posture and movement assessment','Practical movement strategies','An individual exercise plan']},
 {name:'Ergonomic Assessment',tag:'MAKE EVERYDAY WORK BETTER',image:ergonomicAssessment,position:'30% center',description:'A practical look at your workspace and physical demands, with recommendations that fit how you actually work.',points:['Workspace and task review','Equipment setup guidance','Movement breaks and daily habits']},
 {name:'Senior Mobility Program',tag:'MORE CONFIDENCE, EVERY DAY',image:seniorMobility,position:'60% center',description:'An individual approach to balance, strength and everyday mobility, built around your abilities and personal goals.',points:['Balance and walking assessment','Progressive strength exercises','Everyday movement practice']},
 {name:'Home Physiotherapy',tag:'CARE IN YOUR OWN SPACE',image:homePhysiotherapy,position:'center center',description:'Physiotherapy adapted to your home and daily routines. Please contact the clinic to discuss availability and service areas.',points:['Assessment in your home environment','Exercises using your available space','Guidance for everyday activities']},
 {name:'Corporate Wellness',tag:'HEALTHIER WAYS OF WORKING',image:corporateWellness,position:'65% center',description:'Movement education and ergonomic support for teams, adapted to the physical demands of your workplace.',points:['Team movement workshops','Workplace ergonomics','Practical wellbeing education']},
 {name:"Women’s Physiotherapy",tag:'CARE THAT UNDERSTANDS YOU',image:womensPhysiotherapy,position:'55% center',description:'An individual discussion of your movement needs through different life stages. The initial consultation helps identify appropriate care and any specialist referral.',points:['A confidential initial discussion','Individual movement assessment','Care planning around your goals']},
];
