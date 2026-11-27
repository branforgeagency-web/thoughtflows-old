import React from 'react';
import { Award, Briefcase, Clock, ShieldCheck, Target, TrendingUp } from 'lucide-react';
import { LuxSection, LuxHead, LuxValues } from '../common/LuxSections';

const PuneCore = () => (
  <LuxSection tone="light">
    <LuxHead
      eyebrow="What Sets Us Apart"
      title="What Sets ThoughtFlows"
      accent="Apart?"
      intro="Industry-experienced coders, practical chart training, and dedicated mentorship in Pune."
    />
    <LuxValues
      items={[
        {
          icon: TrendingUp,
          title: 'Grow Your Skills at Every Stage',
          text: 'Thoughtflows offers medical coding classes in Pune led by US certified medical coders. Students learn documentation and case detailing with one-on-one help from instructors.',
        },
        {
          icon: Award,
          title: "Learn from Coders Who've Done the Work",
          text: 'Our trainers are 100% practicing coders who share real audit expectations rarely found in textbooks, providing critical, objective feedback on your coding.',
        },
        {
          icon: Briefcase,
          title: 'A Curriculum Built Around Real Jobs',
          text: 'Trainers who have worked with charts in the US healthcare stream show you practical shortcuts, common audit pitfalls, and prepare you directly for job placements.',
        },
        {
          icon: ShieldCheck,
          title: 'Quality Training at a Fair Fee',
          text: 'Curriculum built from real-world healthcare experience with personalized feedback to clarify doubts and build the skills employers look for.',
        },
        {
          icon: Target,
          title: 'Training That Makes You Job-Ready',
          text: 'Interactive classes with individualized attention, honest feedback on coding samples, and insights into US client audit expectations.',
        },
        {
          icon: Clock,
          title: 'Class Timings That Fit Your Life',
          text: 'Flexible batches with ample practice and peer interaction, guided by experienced mentors who care about every student’s career success.',
        },
      ]}
    />
  </LuxSection>
);

export default PuneCore;
