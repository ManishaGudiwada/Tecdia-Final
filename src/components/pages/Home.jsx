import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

const sections = [
  {
    title: "About Us",
    route: "/about",
    image: "about us.jpg",
    description: ["At Tecdia, we believe in more than just products — we believe in people.Our journey began in Japan with a commitment to precision, creativity, and continuous innovation. Today, we are expanding globally, welcoming diverse minds from India, USA, Taiwan, China, Philippines, and beyond to join us in shaping technology for the future.",
    "                                                                                                                                      Whether it’s leadership that inspires, culture that empowers, or opportunities that excite, Tecdia is a place for those who are ready to think boldly, work passionately, and grow continuously."
  ]
  },
  {
    title: "Shingo Vision",
    route: "/shingo-vision",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000",
    description: <p>Leadership at Tecdia is not about giving orders from above.I see my role as supporting each individual, listening to their voices, and growing together as a team.We work seriously, but we also value enjoyment in what we do.We believe in giving our best while keeping a smile on our faces, even during difficult times.<b>"Our motto is simple:Work Hard. Play Hard. Let’s Do This."</b>If you’re someone who embraces challenge, learns from mistakes, and wants to grow with a team that values both professionalism and humanity,
I hope you’ll consider joining us.
</p>
  },
  {
    title: "Culture",
    route: "/culture",
    image: "culture.jpg",
    description: 'Life at Tecdia – Many Cultures. One Spirit.\nWe’re not just engineers.\nWe’re hikers, singers, foodies, idea-pitchers.\nFrom Tokyo to Oregon, Cebu to India — we build boldly and grow joyfully.\nYour ideas matter, your well-being counts, and your uniqueness is celebrated.\n\nDiverse by Design\n6+ nationalities. One united team.\nWe hire for thinking, not background.\n“Don’t be Japanese. Don’t be American. Just be YOU.”'
  },
  {
    title: "Careers",
    route: "/careers",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000",
    description: 'At Tecdia India, you’ll find more than just a job. We’re a global leader in advanced electronic components, driven by precision, innovation, and quality.We believe in empowering our people to grow, collaborate, and make an impact every day.\nWhat You’ll Find Here: \n✅ Challenging, meaningful work \n✅ Opportunities for continuous learning \n✅ Collaborative, respectful culture \n✅ Competitive benefits and support'
  },
 {
  title: "Recruitment Process",
  route: "/recruitment-process",
  image: "recuritment.jpg",
  description: `Join the Precision Revolution at Tecdia India.\nWe're not just offering jobs — we're building careers that matter.\nFrom transparent hiring steps to exponential growth, we make your recruitment journey smooth and respectful.\nExplore openings, understand our hiring process, and be part of something impactful.`
},
 {
  title: "Global Team",
  route: "/global-team",
  image: "world map.jpeg",
  description: `With offices in Japan, the United States, India, and the Philippines, Tecdia thrives on global synergy.\nOur team blends diverse cultural perspectives to solve complex challenges and deliver precision solutions.\nWhether it's engineering, innovation, or customer service — our international collaboration is what sets us apart.`
},
  {
  title: "Apply Now",
  route: "/apply",
  image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000",
  description: `Take the first step in your Tecdia journey.\nWhether you're an innovator, a problem-solver, or a dreamer — there's a place for you here.\nExplore open roles across our global teams and start building the future with us.`
}
,
];

const Home = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const { t } = useTranslation();

  const features = [
    {
      title: t('home.features.impactful.title'),
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      description: t('home.features.impactful.description')
    },
    {
      title: t('home.features.opportunities.title'),
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      description: t('home.features.opportunities.description')
    },
    {
      title: t('home.features.future.title'),
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      description: t('home.features.future.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-tecdia-blue via-blue-800 to-tecdia-gray-900 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="Tecdia Office"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-tecdia-blue/80 via-blue-800/80 to-tecdia-gray-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-inter mb-8 text-tecdia-gray-100 leading-relaxed"
          >
            {t('home.hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mb-8"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-poppins font-bold mb-6 leading-tight"
              animate={{
                textShadow: [
                  "0 0 30px rgba(255,255,255,0.3)",
                  "0 0 50px rgba(255,255,255,0.5)",
                  "0 0 30px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {t('home.hero.title')}
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl font-inter mb-12 text-tecdia-gray-100 max-w-4xl mx-auto leading-relaxed"
          >
            {t('home.hero.description')}
          </motion.div>
        </div>
      </section>

      {/* Continuous Sections */}
      {sections.map((section, index) => (
        <section
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 py-16 px-6 md:px-20 bg-gradient-to-br from-tecdia-white via-blue-800 to-tecdia-gray-900 text-white ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
        >
          <img
            src={section.image}
            alt={section.title}
            className="w-full md:w-1/2 rounded-2xl shadow-xl"
          />
          <div className="md:w-1/2">
            <h2 className="text-4xl text-black font-bold mb-4">{section.title}</h2>
            <p className="text-lg text-black mb-6 whitespace-pre-line">{section.description}</p>
            <Link to={section.route}>
              <button className="px-6 py-3 bg-tecdia-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-200">
                Explore {section.title}
              </button>
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;