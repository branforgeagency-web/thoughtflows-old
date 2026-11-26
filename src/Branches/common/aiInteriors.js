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

const AI_INTERIORS = {
  ameerpet:     [IMG.ameerpet,   IMG.hydHero,    IMG.office,  IMG.lab,      IMG.students],
  dilsukhnagar: [IMG.dilsukh,    IMG.placement,  IMG.course,  IMG.nurse,    IMG.hydera1],
  kochi:        [IMG.kochi,      IMG.keralaHero, IMG.office,  IMG.students, IMG.crc],
  trivandrum:   [IMG.trivandrum, IMG.keralaHero, IMG.about,   IMG.lab,      IMG.nurse],
  pune:         [IMG.pune,       IMG.kolhapur,   IMG.office,  IMG.course,   IMG.students],
  kolhapur:     [IMG.kolhapur,   IMG.pune,       IMG.about,   IMG.lab,      IMG.crc],
  tirupati:     [IMG.hydHero,    IMG.office,     IMG.students, IMG.course,  IMG.nurse],
  vizag:        [IMG.placement,  IMG.keralaHero, IMG.lab,     IMG.about,    IMG.crc],
  trichy:       [IMG.office,     IMG.theniTeach, IMG.students, IMG.pune,    IMG.nurse],
  salem:        [IMG.keralaHero, IMG.course,     IMG.lab,     IMG.about,    IMG.dilsukh],
  theni:        [IMG.theniTeach, IMG.office,     IMG.students, IMG.kochi,   IMG.crc],
  hyderabad:    [IMG.hydHero,    IMG.lab,        IMG.office],
  kerala:       [IMG.keralaHero, IMG.students,   IMG.course],
  maharashtra:  [IMG.pune,       IMG.nurse,      IMG.office],
};

export default AI_INTERIORS;
