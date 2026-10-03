/**
 * Isolated mock data for CampusPulse UI.
 * Replace this module with Firebase/Firestore services later.
 */

export const CATEGORIES = [
  'Infrastructure',
  'Electrical',
  'Water',
  'Cleanliness',
  'Internet / Wi-Fi',
  'Classroom',
  'Laboratory',
  'Equipment',
  'Other',
]

export const STATUSES = ['Reported', 'Under Review', 'In Progress', 'Resolved']

export const LOCATIONS = [
  'Main Library',
  'Academic Block A',
  'Academic Block B',
  'Cafeteria',
  'Hostel 2',
  'Computer Lab',
  'Sports Complex',
  'Admin Building',
  'Parking Lot',
  'Auditorium',
]

export const INITIAL_REPORTS = [
  {
    id: 'rep-1842',
    trackingId: 'CP-2026-1842',
    title: 'Corridor lights out on the second floor',
    description:
      'The entire second-floor corridor in Academic Block B has been dark since Tuesday evening. Students walking to evening labs are using phone flashlights. Two of the emergency signs are also unlit.',
    category: 'Electrical',
    location: 'Academic Block B',
    status: 'In Progress',
    createdAt: '2026-09-26T09:15:00.000Z',
    updatedAt: '2026-09-30T14:40:00.000Z',
    imageName: null,
    timeline: [
      {
        status: 'Reported',
        at: '2026-09-26T09:15:00.000Z',
        note: 'Issue submitted by a student.',
      },
      {
        status: 'Under Review',
        at: '2026-09-27T11:05:00.000Z',
        note: 'Facilities confirmed the outage on floor 2.',
      },
      {
        status: 'In Progress',
        at: '2026-09-30T14:40:00.000Z',
        note: 'Electrician assigned. Replacement fixtures ordered.',
      },
    ],
  },
  {
    id: 'rep-1831',
    trackingId: 'CP-2026-1831',
    title: 'Library Wi-Fi drops during peak hours',
    description:
      'Between 11:00 and 14:00 the Main Library network disconnects every few minutes. Lecture recordings and research databases become unusable. This has been consistent for the past week.',
    category: 'Internet / Wi-Fi',
    location: 'Main Library',
    status: 'Under Review',
    createdAt: '2026-09-24T16:02:00.000Z',
    updatedAt: '2026-09-25T10:12:00.000Z',
    imageName: null,
    timeline: [
      {
        status: 'Reported',
        at: '2026-09-24T16:02:00.000Z',
        note: 'Issue submitted by a student.',
      },
      {
        status: 'Under Review',
        at: '2026-09-25T10:12:00.000Z',
        note: 'IT is reviewing access-point logs for the reading hall.',
      },
    ],
  },
  {
    id: 'rep-1794',
    trackingId: 'CP-2026-1794',
    title: 'Leaking tap in the west washroom',
    description:
      'The tap nearest the window in the west washroom of Block A has been dripping constantly. There is standing water on the floor and the area is slippery after lunch hour.',
    category: 'Water',
    location: 'Academic Block A',
    status: 'Reported',
    createdAt: '2026-10-01T08:44:00.000Z',
    updatedAt: '2026-10-01T08:44:00.000Z',
    imageName: null,
    timeline: [
      {
        status: 'Reported',
        at: '2026-10-01T08:44:00.000Z',
        note: 'Issue submitted by a student.',
      },
    ],
  },
  {
    id: 'rep-1760',
    trackingId: 'CP-2026-1760',
    title: 'Projector in Classroom 302 will not power on',
    description:
      'Classroom 302 projector stays on standby. The HDMI input is detected on laptops but the screen remains black. Faculty had to move the lecture to 305 last Thursday.',
    category: 'Equipment',
    location: 'Academic Block A',
    status: 'Resolved',
    createdAt: '2026-09-18T12:30:00.000Z',
    updatedAt: '2026-09-22T17:10:00.000Z',
    imageName: null,
    timeline: [
      {
        status: 'Reported',
        at: '2026-09-18T12:30:00.000Z',
        note: 'Issue submitted by a student.',
      },
      {
        status: 'Under Review',
        at: '2026-09-19T09:20:00.000Z',
        note: 'AV team inspected the classroom.',
      },
      {
        status: 'In Progress',
        at: '2026-09-20T13:00:00.000Z',
        note: 'Lamp assembly replaced.',
      },
      {
        status: 'Resolved',
        at: '2026-09-22T17:10:00.000Z',
        note: 'Projector tested with three devices. Classroom returned to schedule.',
      },
    ],
  },
  {
    id: 'rep-1722',
    trackingId: 'CP-2026-1722',
    title: 'Overflowing bins outside the cafeteria',
    description:
      'The two large bins at the cafeteria exit have not been cleared since the weekend. Waste is spilling onto the walkway and attracting stray animals near the seating area.',
    category: 'Cleanliness',
    location: 'Cafeteria',
    status: 'In Progress',
    createdAt: '2026-09-28T07:55:00.000Z',
    updatedAt: '2026-10-02T09:05:00.000Z',
    imageName: null,
    timeline: [
      {
        status: 'Reported',
        at: '2026-09-28T07:55:00.000Z',
        note: 'Issue submitted by a student.',
      },
      {
        status: 'In Progress',
        at: '2026-10-02T09:05:00.000Z',
        note: 'Housekeeping scheduled an extra collection this week.',
      },
    ],
  },
  {
    id: 'rep-1688',
    trackingId: 'CP-2026-1688',
    title: 'Cracked paving near Hostel 2 entrance',
    description:
      'Several paving stones at the Hostel 2 gate have cracked and lifted. It is easy to trip after dark, especially with bags. A temporary cone was placed but it keeps getting moved.',
    category: 'Infrastructure',
    location: 'Hostel 2',
    status: 'Under Review',
    createdAt: '2026-09-21T19:10:00.000Z',
    updatedAt: '2026-09-23T08:30:00.000Z',
    imageName: null,
    timeline: [
      {
        status: 'Reported',
        at: '2026-09-21T19:10:00.000Z',
        note: 'Issue submitted by a student.',
      },
      {
        status: 'Under Review',
        at: '2026-09-23T08:30:00.000Z',
        note: 'Estate office is estimating repair materials.',
      },
    ],
  },
]

export const INITIAL_EVENTS = [
  {
    id: 'evt-01',
    name: 'GDG Campus Build Night',
    date: '2026-10-08',
    time: '17:30',
    location: 'Computer Lab',
    description:
      'A focused evening for shipping student products. Mentors from GDG Campus will review architecture, UI, and demo flow. Bring a laptop and a working prototype.',
  },
  {
    id: 'evt-02',
    name: 'Open House: Facilities Walkthrough',
    date: '2026-10-11',
    time: '11:00',
    location: 'Admin Building',
    description:
      'Meet the estate and IT teams that close CampusPulse reports. See how issues move from Reported to Resolved, and share feedback on campus infrastructure.',
  },
  {
    id: 'evt-03',
    name: 'Monsoon Cultural Evening',
    date: '2026-10-16',
    time: '18:00',
    location: 'Auditorium',
    description:
      'Music, theatre, and student collectives. Doors open at 17:30. Seating is first-come in the main hall; overflow in the foyer with a live feed.',
  },
  {
    id: 'evt-04',
    name: 'Inter-hostel Sports Meet',
    date: '2026-10-22',
    time: '08:00',
    location: 'Sports Complex',
    description:
      'Football, badminton, and athletics across the day. Registrations close two days before the meet at the sports office.',
  },
  {
    id: 'evt-05',
    name: 'Library Research Clinic',
    date: '2026-10-14',
    time: '14:00',
    location: 'Main Library',
    description:
      'Short clinic on journals, citation tools, and off-campus access. Aimed at second and third-year students preparing term papers.',
  },
]
