import { mediaUrl } from "../../config/media";

/**
 * TEMPORARY placeholder images for branch banners (AI / stock images that
 * already exist in media storage and are used on other live pages).
 * Replace a branch's entry with its real interior photos when they are ready,
 * e.g. mediaUrl("images/Interiors/kochi/kochi-reception.jpg").
 * Order: [hero, card1, card2, card3, card4]
 */
const IMG = {
  hydHero:     mediaUrl("images/Hyderabad/hyderabad_hero.jpg"),
  ameerpet:    mediaUrl("images/Hyderabad/ameerpet_campus.jpg"),
  dilsukh:     mediaUrl("images/Hyderabad/dilsukhnagar_campus.jpg"),
  placement:   mediaUrl("images/Hyderabad/placement_success.jpg"),
  keralaHero:  mediaUrl("images/Branches/kerala_hero.jpg"),
  kochi:       mediaUrl("images/Branches/kerala_kochi_campus.jpg"),
  trivandrum:  mediaUrl("images/Branches/kerala_trivandrum_campus.jpg"),
  pune:        mediaUrl("images/Branches/maha_pune_campus.jpg"),
  kolhapur:    mediaUrl("images/Branches/maha_kolhapur_campus.jpg"),
  office:      mediaUrl("images/AboutImg/about-office-interior.jpg"),
  about:       mediaUrl("images/AboutImg/about-image.jpg"),
  course:      mediaUrl("images/AboutImg/course-02.jpg"),
  lab:         mediaUrl("images/Branches/online/lab.jpg"),
  students:    mediaUrl("images/Branches/online/Students.jpg"),
  nurse:       mediaUrl("images/Branches/online/nurse-typing.jpg"),
  hydera1:     mediaUrl("images/Branches/online/hydera1.jpg"),
  crc:         mediaUrl("images/Courses/CRCAbout.jpg"),
  theniTeach:  mediaUrl("images/Branches/theni-teaching.jpg"),
};

// Real branch interior photos (media/images/Interiors/<branch>/...)
const real = (branch, n) =>
  mediaUrl(`images/Interiors/${branch}/${branch}-interior-${String(n).padStart(2, "0")}.jpg`);

const AI_INTERIORS = {
  // [hero, Modern Classrooms, Reception & Lobby, Practical Training Lab, Learning Spaces]
  ameerpet:     [real("ameerpet", 2), real("ameerpet", 5), real("ameerpet", 1), real("ameerpet", 4), real("ameerpet", 6)],
  dilsukhnagar: [real("dilsukhnagar", 8), real("dilsukhnagar", 7), real("dilsukhnagar", 9), real("dilsukhnagar", 2), real("dilsukhnagar", 5)],
  // Kochi labels: [hero, Modern Classrooms, Reception & Lobby, Practice Lab, Workstations]
  kochi:        [real("kochi", 2), real("kochi", 3), real("kochi", 6), real("kochi", 5), real("kochi", 7)],
  trivandrum:   [IMG.trivandrum, IMG.keralaHero, IMG.about,   IMG.lab,      IMG.nurse],
  pune:         [IMG.pune,       IMG.kolhapur,   IMG.office,  IMG.course,   IMG.students],
  kolhapur:     [IMG.kolhapur,   IMG.pune,       IMG.about,   IMG.lab,      IMG.crc],
  tirupati:     [IMG.hydHero,    IMG.office,     IMG.students, IMG.course,  IMG.nurse],
  vizag:        [IMG.placement,  IMG.keralaHero, IMG.lab,     IMG.about,    IMG.crc],
  trichy:       [IMG.office,     IMG.theniTeach, IMG.students, IMG.pune,    IMG.nurse],
  salem:        [IMG.keralaHero, IMG.course,     IMG.lab,     IMG.about,    IMG.dilsukh],
  theni:        [IMG.theniTeach, IMG.office,     IMG.students, IMG.kochi,   IMG.crc],
  // Hyderabad region page: [hero, Practical Training, Modern Classrooms]
  hyderabad:    [real("ameerpet", 6), real("ameerpet", 4), real("dilsukhnagar", 7)],
  kerala:       [IMG.keralaHero, real("kochi", 5), real("kochi", 3)],
  maharashtra:  [IMG.pune,       IMG.nurse,      IMG.office],
};

export default AI_INTERIORS;
