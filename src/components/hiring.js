import hirepic1 from '../assets/hirepic1.svg'
import hirepic2 from '../assets/hirepic2.svg'
import hirepic3 from '../assets/hirepic3.svg'
import hirepic4 from '../assets/hirepic4.svg'
import hirepic5 from '../assets/hirepic5.svg'
import user1 from '../assets/user1.svg'
import user2 from '../assets/user2.svg'
import user3 from '../assets/user3.svg'
import ui from '../assets/ui.svg'
import python from '../assets/python.svg'
import java from '../assets/java.svg'
import angular from '../assets/angular.svg'
import eye from '../assets/eye.svg'

import profile_boy from '../assets/boy-prof.svg'
import profile_girl from '../assets/girl-prof.svg'

export const hiringdata = [
    {images: hirepic1, name:'John Doe', role: 'Senior Python Developer', person: 'Hired by: Stella' },
    {images: hirepic2, name:'John Doe', role: 'Senior Python Developer', person: 'Hired by: Stella' },
    {images: hirepic3, name:'John Doe', role: 'Senior Python Developer', person: 'Hired by: Stella' },
    {images: hirepic4, name:'John Doe', role: 'Senior Python Developer', person: 'Hired by: Stella' },
    {images: hirepic5, name:'John Doe', role: 'Senior Python Developer', person: 'Hired by: Stella' },
];

export const activitydata = [
    {images: user1, name:'John Doe', role: 'Python Developer',text:'Interview with Stella', time: '15 mins ago' },
    {images: user2, name:'John Doe', role: 'Python Developer',text:'Interview with Stella', time: '15 mins ago' },
    {images: user3, name:'John Doe', role: 'Python Developer',text:'Interview with Stella', time: '15 mins ago' },
];

export const upcomingdata = [
    {date: '7', month:'feb', name:'Stella',person:'Interview with HR', time: '10 A.M to 11 A.M' },
    {date: '7', month:'feb',name:'John',person:'Interview with PM', time: '10 A.M to 11 A.M' },
    {date: '7', month:'feb', name:'Stella',person:'Interview with .Net', time: '10 A.M to 11 A.M' },
];

export const postedjobdata = [
    {id:'#001',images: python, dest:'Python Developers',role:'Senior Developers',total:'Total Applicants', jobid: '258',time: '6 mins ago', totcount: '28%' },
    {id:'#002',images: angular, dest:'Android Developers',role:'Senior Developers',total:'Total Applicants',jobid: '258',time: '6 mins ago',totcount: '28%'},
    {id:'#003',images: java, dest:'Java Developers',role:'Senior Developers',total:'Total Applicants', jobid: '258',time: '6 mins ago',totcount: '28%'},
    {id:'#004',images: ui, dest:'UX|UI Designers',role:'Senior Developers',total:'Total Applicants',jobid: '258',time: '6 mins ago' ,totcount: '28%'},

];

export const candidatedata = [
    {id:'#001', name: 'John Doe', pos:'Designer',level1:'6/10',level2:'7/10',level3:'3/10',level4:'...',total:'...', status: 'Active',action: eye },
    {id:'#002',name: 'John Smith', pos:'Angular Developer',level1:'6/10',level2:'5/10',level3:'5/10',level4:'8/10',total:'24/40',status: 'Hired',action: eye},
    {id:'#003',name: 'Johnson Smith', pos:'Python Developer',level1:'6/10',level2:'7/10',level3:'3/10',level4:'...',total:'...', status: 'Active',action: eye},
    {id:'#004',name: 'Stella', pos:'Android Developer',level1:'6/10',level2:'2/10',level3: 'reject', level4: 'reject',total:'8/40',status: 'Reject',action: eye},
    {id:'#005',name: 'Randy', pos:'IOS Developer',level1:'6/10',level2:'7/10',level3:'3/10',level4:'...',total:'...', status: 'Active',action: eye},
    {id:'#006',name: 'John Doe', pos:'Junior Designer',level1:'6/10',level2:'7/10',level3:'3/10',level4:'...',total:'...',status: 'Active',action: eye},
    {id:'#007',name: 'Drew', pos:'Front End Developer',level1:'6/10',level2:'7/10',level3:'3/10',level4:'...',total:'...',status: 'Active',action: eye},
    {id:'#008',name: 'Joseph', pos:'PHP Developer',level1:'6/10',level2:'7/10',level3:'3/10',level4:'3/10',total:'19/40',status: 'Hired',action: eye},

];

export const meetinginfo = [
    {image:profile_boy, name: 'John Smith', role:'Senior Python Developer',level1:'6/10',level2:'7/10',level3:'waiting',meet:'G-meet', interviewer1: 'stella',interviewer2: 'Smith',interviewer3: 'Stephan',interviewer4: 'Johnson'},
    {image:profile_girl, name: 'Maria', role:'Senior Python Developer',level1:'6/10',level2:'7/10',level3:'waiting',meet:'G-meet', interviewer1: 'stella',interviewer2: 'Smith',interviewer3: 'Stephan',interviewer4: 'Johnson'},
];