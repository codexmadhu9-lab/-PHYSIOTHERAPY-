const portraits=import.meta.glob('./assets/therapists/*.webp',{eager:true,query:'?url',import:'default'});
export const doctors=[
 {id:'arjun-rao',name:'Dr. Arjun Rao',qualification:'MPT (Orthopedics)',specialty:'Orthopedic Physiotherapist',description:[
 'Specializes in muscle, bone, joint, and ligament problems.',
 'Treats back pain, neck pain, arthritis, fractures, and sports-related injuries.',
 'Uses exercise therapy, manual therapy, and mobility training.',
 'Focuses on reducing pain and restoring normal movement.']},
 {id:'sneha-reddy',name:'Dr. Sneha Reddy',qualification:'MPT (Neurology)',specialty:'Neurological Physiotherapist',description:[
 'Helps patients affected by stroke, spinal cord injuries, Parkinson’s disease, and neurological disorders.',
 'Works on balance, coordination, strength, and walking ability.',
 'Uses specialized rehabilitation exercises and movement training.',
 'Supports patients in becoming more independent in daily activities.']},
 {id:'rahul-verma',name:'Dr. Rahul Verma',qualification:'MPT (Sports Physiotherapy)',specialty:'Sports Physiotherapist',description:[
 'Specializes in preventing and treating sports and exercise-related injuries.',
 'Treats ligament injuries, muscle strains, sprains, and overuse injuries.',
 'Provides strength, flexibility, and performance rehabilitation programs.',
 'Helps athletes return safely to their sport.']},
 {id:'priya-sharma',name:'Dr. Priya Sharma',qualification:'MPT (Pediatrics)',specialty:'Pediatric Physiotherapist',description:[
 'Works with babies, children, and teenagers who have movement or developmental difficulties.',
 'Helps manage conditions such as cerebral palsy and developmental delay.',
 'Uses play-based exercises to improve strength and coordination.',
 'Supports children in developing better mobility and independence.']},
 {id:'kavitha-nair',name:'Dr. Kavitha Nair',qualification:'MPT (Geriatrics)',specialty:'Geriatric Physiotherapist',description:[
 'Focuses on physiotherapy care for older adults.',
 'Helps manage arthritis, joint stiffness, weakness, balance problems, and age-related mobility issues.',
 'Uses safe exercises to improve strength and flexibility.',
 'Helps seniors stay active and reduce their risk of falls.']},
 {id:'aditya-kumar',name:'Dr. Aditya Kumar',qualification:'MPT (Cardiopulmonary)',specialty:'Cardiopulmonary Physiotherapist',description:[
 'Works with patients recovering from heart and lung conditions.',
 'Provides rehabilitation after heart surgery and respiratory illnesses.',
 'Uses breathing exercises, endurance training, and physical conditioning.',
 'Helps improve stamina, breathing efficiency, and quality of life.']},
 {id:'anjali-menon',name:'Dr. Anjali Menon',qualification:'MPT (Women’s Health)',specialty:'Women’s Health Physiotherapist',description:[
 'Specializes in physiotherapy for women during pregnancy, after childbirth, and throughout different life stages.',
 'Treats pelvic floor weakness, back pain, and postnatal problems.',
 'Provides strengthening and posture correction exercises.',
 'Helps women regain comfort, mobility, and confidence.']},
 {id:'meghana-iyer',name:'Dr. Meghana Iyer',qualification:'MPT (Pelvic Health)',specialty:'Pelvic Floor Physiotherapist',description:[
 'Focuses on pelvic floor muscle rehabilitation.',
 'Helps patients with urinary incontinence, pelvic pain, and pelvic muscle weakness.',
 'Uses targeted exercises and rehabilitation techniques.',
 'Aims to improve pelvic strength, function, and daily comfort.']},
 {id:'vikram-singh',name:'Dr. Vikram Singh',qualification:'MPT (Musculoskeletal)',specialty:'Musculoskeletal Physiotherapist',description:[
 'Treats conditions affecting muscles, joints, tendons, and ligaments.',
 'Common problems include shoulder pain, knee pain, back pain, and posture-related discomfort.',
 'Uses manual therapy, exercises, and movement correction.',
 'Helps patients regain strength and pain-free movement.']},
 {id:'neha-joshi',name:'Dr. Neha Joshi',qualification:'MPT (Rehabilitation)',specialty:'Post-Surgical Rehabilitation Physiotherapist',description:[
 'Helps patients recover after orthopedic and other major surgeries.',
 'Common cases include knee replacement, hip replacement, and ligament reconstruction.',
 'Provides progressive exercises to restore strength and mobility.',
 'Supports a safe return to normal daily activities.']},
 {id:'kiran-patel',name:'Dr. Kiran Patel',qualification:'MPT (Spine Rehabilitation)',specialty:'Spine Physiotherapist',description:[
 'Specializes in neck, back, and spinal conditions.',
 'Treats slipped discs, sciatica, posture problems, and chronic back pain.',
 'Uses strengthening, stretching, posture correction, and manual therapy.',
 'Helps improve spinal stability and reduce recurring pain.']},
 {id:'rohit-mehta',name:'Dr. Rohit Mehta',qualification:'MPT, Manual Therapy Specialist',specialty:'Manual Therapy Specialist',description:[
 'Uses hands-on physiotherapy techniques to improve joint and muscle movement.',
 'Works with people experiencing joint stiffness, muscle tension, and movement restrictions.',
 'Combines manual techniques with individualized exercises and movement guidance.',
 'Focuses on improving comfort, mobility, and confidence in everyday activities.']},
].map(doctor=>({...doctor,image:portraits[`./assets/therapists/${['rahul-verma','rohit-mehta'].includes(doctor.id)?`${doctor.id}-coat`:doctor.id}.webp`]}));
