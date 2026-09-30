import {useEffect,useRef,useState} from 'react';

export default function AuthDialog({initialMode,onClose}) {
 const [mode,setMode]=useState(initialMode);
 const [visible,setVisible]=useState(false);
 const [message,setMessage]=useState('');
 const dialog=useRef(null);
 const form=useRef(null);
 const join=mode==='join';
 useEffect(()=>{
  const el=dialog.current;const trigger=document.activeElement;
  const previous=document.body.style.overflow;
  el.showModal();document.body.style.overflow='hidden';
  return ()=>{el.close();document.body.style.overflow=previous;if(trigger?.isConnected)trigger.focus();};
 },[]);
 function switchMode(){form.current.reset();setMode(join?'login':'join');setVisible(false);setMessage('');}
 function submit(event){
  event.preventDefault();
  const values=new FormData(event.currentTarget);
  if(join&&values.get('password')!==values.get('confirmPassword')){
   setMessage('Your passwords do not match. Please enter them again.');
   event.currentTarget.elements.confirmPassword.focus();return;
  }
  // No authentication provider is configured. Never persist or transmit credentials.
  event.currentTarget.elements.password.value='';
  if(join)event.currentTarget.elements.confirmPassword.value='';
  setMessage(join?'Account registration is not available yet. Your account has not been created and your password has been cleared.':'Login is not available yet. Your credentials have not been sent and your password has been cleared.');
 }
 return <dialog className="auth-dialog" ref={dialog} aria-labelledby="auth-title" aria-describedby="auth-description" onCancel={onClose} onClick={e=>{if(e.target===dialog.current)onClose();}}>
  <div className="auth-inner">
   <button className="close" aria-label="Close account popup" onClick={onClose}>×</button>
   <p className="eyebrow">MOVEMENT · BALANCE · RECOVERY</p>
   <h2 id="auth-title">{join?'Join us':'Welcome back'}</h2>
   <p id="auth-description">{join?'Create your account to begin.':'Enter your email and password to log in.'}</p>
   <form ref={form} onSubmit={submit}>
    {join&&<label htmlFor="auth-name">Full name<input id="auth-name" name="name" autoComplete="name" required maxLength={120}/></label>}
    <label htmlFor="auth-email">Email address<input id="auth-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254}/></label>
    <label htmlFor="auth-password">Password</label>
    <div className="password-field"><input id="auth-password" name="password" type={visible?'text':'password'} autoComplete={join?'new-password':'current-password'} minLength={join?8:undefined} required aria-describedby={join?'password-hint':undefined}/><button type="button" aria-label={visible?'Hide password':'Show password'} aria-pressed={visible} onClick={()=>setVisible(v=>!v)}>{visible?'Hide':'Show'}</button></div>
    {join&&<><p id="password-hint" className="auth-hint">Use at least 8 characters.</p><label htmlFor="auth-confirm">Confirm password<input id="auth-confirm" name="confirmPassword" type={visible?'text':'password'} autoComplete="new-password" required minLength={8}/></label></>}
    <p className="auth-availability">{join?'Account registration':'Account login'} is not connected yet. These forms do not save or send credentials.</p>
    <button className="solid-button" type="submit">{join?'Create account':'Login'}<span aria-hidden="true">↗</span></button>
    <p className="auth-status" role="status" aria-live="polite">{message}</p>
   </form>
   <p className="auth-switch">{join?'Already have an account?':'New here?'} <button type="button" onClick={switchMode}>{join?'Login':'Join us'}</button></p>
  </div>
 </dialog>;
}
