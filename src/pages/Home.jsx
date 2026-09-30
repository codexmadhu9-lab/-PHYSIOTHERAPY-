import {useRef,useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DetailDialog from '../components/DetailDialog';
import Hero from '../sections/Hero';
import Intro from '../sections/Intro';
import Assessment from '../sections/Assessment';
import BodyBalance from '../sections/BodyBalance';
import Programs from '../sections/Programs';
import Rehabilitation from '../sections/Rehabilitation';
import {useMotion} from '../motion/useMotion';
export default function Home(){const root=useRef(null);const [dialog,setDialog]=useState(null);useMotion(root);const book=()=>setDialog('booking');return <div ref={root} id="top"><a className="skip-link" href="#main">Skip to content</a><Header showSocial/><main id="main"><Hero/><Intro><BodyBalance/></Intro><Assessment/><Programs onSelect={setDialog}/><Rehabilitation onBook={book}/></main><Footer/>{dialog&&<DetailDialog key={typeof dialog==='string'?dialog:dialog.name} content={dialog} onClose={()=>setDialog(null)} onBook={book}/>}</div>}
