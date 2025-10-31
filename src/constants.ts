export const MOCK_NEWS = [
  {
    id: 1,
    title: 'Annual School Excursion a Huge Success',
    date: 'October 26, 2023',
    summary: 'Our students had a wonderful and educational time on their annual excursion, visiting historical sites and learning about local culture.',
    imageUrl: '/SCHOOL%20ACTIVITIES/EXCURSION.jpg',
  },
  {
    id: 2,
    title: 'Celebrating Our Basic 1 Students',
    date: 'October 22, 2023',
    summary: 'A snapshot of our bright and energetic Basic 1 students, who are settling into the new academic year with enthusiasm.',
    imageUrl: '/PICTURE%20PANORAMS/BASIC%201.jpg',
  },
  {
    id: 3,
    title: 'A Day with Our Secondary Students and Teachers',
    date: 'October 15, 2023',
    summary: 'A group photo of our dedicated secondary school teachers and their students, capturing the spirit of learning and community at King David School.',
    imageUrl: '/PICTURE%20PANORAMS/SECONDARY%20STUDENTS%20WITH%20TEACHERS.jpg',
  },
];

export const MOCK_EVENTS = [
  {
    id: 1,
    title: 'Parent-Teacher Conferences',
    date: 'November 9, 2023',
    time: '9:00 AM - 12:00 PM',
    location: 'School Hall',
    description: 'An opportunity for parents to meet with teachers and discuss student progress for the first quarter.'
  },
  {
    id: 2,
    title: 'Fall Theater Production: "A Midsummer Night\'s Dream"',
    date: 'November 17-19, 2023',
    time: '4:00 PM Nightly',
    location: 'School Auditorium',
    description: 'Come see the King David School Drama Club perform Shakespeare\'s classic comedy. Tickets on sale now!'
  },
  {
    id: 3,
    title: 'Mid-Term Break',
    date: 'November 22-24, 2023',
    time: 'All Day',
    location: 'School Closed',
    description: 'School will be closed for the mid-term break. Classes resume on Monday, November 27th.'
  },
];

export const MOCK_PROGRAMS = [
  {
    name: "Creche & Nursery",
    description: "Our Early Years Foundation Stage (EYFS) provides a stimulating and nurturing environment where children learn through play and exploration. We focus on developing social skills, creativity, and a love for learning.",
    courses: ["Phonics & Early Reading", "Number Skills", "Creative Arts", "Practical Life Activities", "Social Interaction", "Outdoor Play"]
  },
  {
    name: "Primary",
    description: "Following the NERDC curriculum, our primary education builds a strong foundation in core subjects, fostering critical thinking, problem-solving, and collaboration. We encourage a love for learning and prepare students for secondary education.",
    courses: ["English Studies", "Mathematics", "Basic Science & Technology", "National Values Education", "Cultural & Creative Arts", "Yoruba Language", "French Language"]
  },
  {
    name: "Secondary",
    description: "Our secondary school offers a comprehensive curriculum leading to WAEC and NECO examinations. We provide specialized pathways in Science, Humanities, and Business, equipping students for higher education and future careers.",
    courses: ["Physics, Chemistry, Biology (Sciences)", "Literature, Government, History (Humanities)", "Accounting, Commerce, Economics (Business)", "English, Mathematics, and a wide range of electives"]
  }
];

export const MOCK_CLUBS = [
  {
    id: 1,
    name: "Chess Club",
    description: "A club for students who enjoy playing chess and want to improve their skills.",
    image: "https://images.pexels.com/photos/1111368/pexels-photo-1111368.jpeg",
  },
  {
    id: 2,
    name: "Sports Club",
    description: "A club for students who enjoy playing sports and want to stay active.",
    image: "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg",
  },
  {
    id: 3,
    name: "Art Club",
    description: "A club for students who enjoy creating art and want to explore their creativity.",
    image: "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg",
  },
  {
    id: 4,
    name: "Book Club",
    description: "A club for students who enjoy reading and discussing books.",
    image: "https://images.pexels.com/photos/207876/pexels-photo-207876.jpeg",
  },
  {
    id: 5,
    name: "Music Club",
    description: "A club for students who enjoy playing music and want to perform.",
    image: "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg",
  },
];

export const MOCK_STAFF = [
  { id: 1, name: 'Mr. Joseph O. Owoeye', title: 'Founder', department: 'Administration', email: 'f.adeyemi@kingdavidschool.ng', imageUrl: '/PICTURE%20PANORAMS/ADMIN.jpg' },
  { id: 2, name: 'Mrs. Kehinde E. Owoeye', title: 'Head of School', department: 'Administration', email: 'o.bakare@kingdavidschool.ng', imageUrl: '/PICTURE%20PANORAMS/TEACHING%20STAFF.jpg' },
  { id: 3, name: 'Mr. Alonge', title: 'Principal', department: 'Support Staff', email: 'a.ojo@kingdavidschool.ng', imageUrl: '/PICTURE%20PANORAMS/NON%20TEACHING%20STAFF.jpg' },
  { id: 4, name: 'Mr. Kunle Adebayo', title: 'Athletic Director', department: 'Athletics', email: 'k.adebayo@kingdavidschool.ng', imageUrl: '/PICTURE%20PANORAMS/SECONDARY%20STUDENTS%20WITH%20TEACHERS.jpg' },
  { id: 5, name: 'Ms. Bisi Ogunleye', title: 'English Department Head', department: 'English', email: 'b.ogunleye@kingdavidschool.ng', imageUrl: '/PICTURE%20PANORAMS/BASIC%202.jpg' },
  { id: 6, name: 'Mr. Dayo Alao', title: 'History Teacher', department: 'History', email: 'd.alao@kingdavidschool.ng', imageUrl: '/PICTURE%20PANORAMS/BASIC%203.jpg' },
  { id: 7, name: 'Ms. Funke Adewale', title: 'Mathematics Teacher', department: 'Mathematics', email: 'f.adewale@kingdavidschool.ng', imageUrl: '/PICTURE%20PANORAMS/PREP%201A.jpg' },
  { id: 8, name: 'Mr. Lanre Coker', title: 'Science Department Head', department: 'Science', email: 'l.coker@kingdavidschool.ng', imageUrl: '/PICTURE%20PANORAMS/NUR%201.jpg' },
  { id: 9, name: 'Ms. Yemi Dada', title: 'Art Teacher', department: 'Arts', email: 'y.dada@kingdavidschool.ng', imageUrl: '/PICTURE%20PANORAMS/BASIC%205.jpg' },
  { id: 10, name: 'Mr. Segun Olaniyan', title: 'Music Director', department: 'Arts', email: 's.olaniyan@kingdavidschool.ng', imageUrl: '/PICTURE%20PANORAMS/BASIC%204.jpg' },
  { id: 11, name: 'Ms. Kemi Olatunji', title: 'Librarian', department: 'Support Staff', email: 'k.olatunji@kingdavidschool.ng', imageUrl: '/PICTURE%20PANORAMS/K.G.jpg' },
  { id: 12, name: 'Mr. Femi Adekunle', title: 'Physics Teacher', department: 'Science', email: 'f.adekunle@kingdavidschool.ng', imageUrl: '/PICTURE%20PANORAMS/NUR%202.jpg' },
  { id: 13, name: 'Ms. Ronke Bello', title: 'French Teacher', department: 'Languages', email: 'r.bello@kingdavidschool.ng', imageUrl: '/PICTURE%20PANORAMS/PART%20TIME%20TEACHER%201.jpg' },
  { id: 14, name: 'Mr. Tunde Oladipo', title: 'Computer Science Teacher', department: 'Technology', email: 't.oladipo@kingdavidschool.ng', imageUrl: '/PICTURE%20PANORAMS/SECONDARY%20STUDENTS%20WITH%20TEACHERS.jpg' },
];
