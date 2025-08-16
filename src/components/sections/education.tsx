import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { School } from 'lucide-react';

const education = [
  {
    institution: 'Institute of Technical Education and Research',
    degree: 'Bachelor of Technology in Computer Science & Engineering (CSE)',
    duration: '2023 - 2027',
    description: 'Focused on Data Structures & Algorithms, Computer Science Fundamentals, Software Engineering, Database Systems, System Design.  , CGPA:8.86',
  },
  {
    institution: 'Balasore Higher Secondary School',
    degree: 'Council of Higher Secondary Education, Odisha',
    duration: '2021 - 2023',
    description: 'Studied Science with a focus on Mathematics, Marks: 76%',
  },
  {
    institution: 'Umamani Uchha Bidyapitha',
    degree: 'Board of Secondary Education, Odisha',
    duration: '2010 - 2021',
    description: 'Core academic subjects such as Mathematics, Science, Social Science, Languages (Odia, English, Hindi, Sanskrit)., Marks: 73%', // Add or update your marks here
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl">
            My Education
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            My academic background and commitment to continuous learning.
          </p>
        </div>
        {/* First row for first two education cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {education.slice(0, 2).map((edu, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <School className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-xl sm:text-2xl">{edu.institution}</CardTitle>
                    <p className="font-semibold text-primary">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.duration}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Centered third education card below the first row */}
        <div className="flex justify-center mt-8">
          <div className="w-full max-w-xl">
            <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <School className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-xl sm:text-2xl">{education[2].institution}</CardTitle>
                    <p className="font-semibold text-primary">{education[2].degree}</p>
                    <p className="text-sm text-muted-foreground">{education[2].duration}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{education[2].description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
