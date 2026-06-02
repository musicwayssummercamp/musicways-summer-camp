import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* HERO */}
      <section
  className="relative overflow-hidden"
  style={{
    backgroundImage:
      "linear-gradient(rgba(2,6,23,0.55), rgba(2,6,23,0.65)), url('/images/photo-landing-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

        {/* Glow backgrounds */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full" />
        </div>
pointer-events-none
        <div className="relative max-w-7xl mx-auto px-6 py-50 text-center">

          {/* Logo */}
          <div className="absolute top-2 left-0 z-50">
  <Image
    src="/images/logo.png"
    alt="Musicways Summer Camp"
    width={120}
    height={120}
  />
</div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
            MUSICWAYS
            <span className="block text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.7)]">
              SUMMER CAMP
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-8 text-2xl md:text-3xl text-cyan-300 font-semibold">
            Create Audio & Music Videos. Perform Vocal & Acting Dubbing.
          </p>

          <p className="mt-4 text-xl md:text-2xl text-white font-medium tracking-wide drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
  JULY 6–17 • JULY 20–31 • AUG 3–14     (2026)
</p>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Learn inside a Professional Recording Studio using Pro Tools,
            Vocal training, Video Production and Dubbing techniques.
          </p>

          {/* Info */}
          <div className="mt-10 grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
  🎧 Hands-On Studio Experience
</div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              📍 Doral, Florida
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              👥 Only 6 Students
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
  <div>💰 $300 / Week</div>
  <div className="text-sm text-cyan-300 mt-1">
    $560 / 2 Weeks
  </div>
</div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">

            <a
  href="https://wa.me/13055880713?text=Hello%20Musicways%20Summer%20Camp!%20I%20would%20like%20to%20reserve%20a%20spot."
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-50 inline-block bg-cyan-400 text-black font-bold text-xl px-12 py-6 rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:scale-105 transition"
>
  RESERVE YOUR SPOT
</a>

            <a
              href="#"
              className="inline-block border border-cyan-400 text-cyan-300 px-10 py-5 rounded-2xl hover:bg-cyan-400/10 transition"
            >
              Watch Camp Video
            </a>

          </div>

                


        </div>
      </section>
{/* COACHES SECTION */}

<section
  className="relative py-24 px-6 overflow-hidden"
  style={{
    backgroundImage:
      "linear-gradient(rgba(2,6,23,0.55), rgba(2,6,23,0.55)), url('/images/coaches-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
><div className="absolute inset-0">
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full" />
</div>

  <div className="relative max-w-7xl mx-auto">

    <h2 className="text-5xl md:text-6xl font-black text-center mb-4">
      Meet Your Coaches
    </h2>

<div className="flex justify-center mt-4">
  <span className="px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold">
    Grammy-Winning Coaches • 80+ Years Combined Industry Experience
  </span>
</div>

    <p className="text-center text-gray-200 text-xl md:text-2xl max-w-4xl mx-auto mb-16 leading-relaxed">
  Learn from experienced professionals in music production,
  voice acting, audio engineering and media creation.
</p>

    <div className="grid md:grid-cols-2 gap-10">

      {/* CARLOS */}

      <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8 text-center">

        <img
  src="/images/carlos-puchi.jpg"
  alt="Carlos Puchi"
  className="w-72 h-72 object-cover object-top rounded-full mx-auto mb-8 border-4 border-cyan-400"
/>

        <h3 className="text-3xl font-bold">
          Carlos Puchi
        </h3>

<p className="text-cyan-300 font-bold text-lg mt-2">
  🏆 Grammy Winner
</p>

<p className="text-gray-400 text-sm mt-2">
  Click photo to view full bio
</p>

        <div className="mt-6 space-y-2 text-cyan-300">

          <p>🎤 Vocal Coach</p>
          <p>🎵 Music Producer</p>
          <p>🎙 Voice Over Coach</p>
          <p>🎬 Video Production Instructor</p>

        </div>

      </div>

      {/* EDUARDO */}

      <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8 text-center">

        <div className="w-72 h-72 rounded-full mx-auto mb-8 border-4 border-cyan-400 flex items-center justify-center bg-cyan-500/10">

          <span className="text-cyan-300 text-xl">
            Photo Coming Soon
          </span>

        </div>

        <h3 className="text-3xl font-bold">
          Eduardo Stambury
        </h3>

        <p className="text-cyan-300 font-bold text-lg mt-2">
  🏆 Grammy Winner
</p>

<p className="text-gray-400 text-sm mt-2">
  Click photo to view full bio
</p>

        <div className="mt-6 space-y-2 text-cyan-300">


          <p>🎵 Music Producer</p>
          <p>🎧 Audio Engineer</p>
          <p>🎙 Dubbing Specialist</p>
          <p>🎚 Pro Tools Instructor</p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* WHAT YOU'LL LEARN */}

<section
  className="relative py-24 px-6 overflow-hidden"
  style={{
    backgroundImage:
      "linear-gradient(rgba(2,6,23,0.55), rgba(2,6,23,0.55)), url('/images/coaches-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
><div className="absolute inset-0">
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full" />
</div>

  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl md:text-6xl font-black text-center mb-4">
      What You'll Learn
    </h2>

<div className="flex justify-center mt-4 mb-6">
  <span className="px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold">
    Real Studio Experience • Real Skills • Real Projects
  </span>
</div>

    <p className="text-center text-gray-200 text-xl md:text-2xl max-w-4xl mx-auto mb-16 leading-relaxed">
  Students will gain hands-on experience in Music, Media,
  Recording, Performance and Creative Production inside a
  Professional Studio environment.
</p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-slate-900/50 backdrop-blur-md border border-cyan-500/20 rounded-3xl overflow-hidden hover:border-cyan-400 transition">

  <img
    src="/images/recording-protools.png"
    alt="Recording & Pro Tools"
    className="w-full h-56 object-cover transition duration-500 hover:scale-105"
  />

  <div className="p-8">

    <h3 className="text-2xl font-bold mb-4 text-cyan-300">
      Recording & Pro Tools
    </h3>

    <p className="text-gray-300">
      Learn professional recording, editing and mixing
      techniques using industry-standard software.
    </p>

  </div>

</div>

      <div className="bg-slate-900/50 backdrop-blur-md border border-cyan-500/20 rounded-3xl overflow-hidden hover:border-cyan-400 transition">

  <img
    src="/images/vocal-training.jpg"
    alt="Vocal Training"
    className="w-full h-56 object-cover transition duration-500 hover:scale-105"
  />

  <div className="p-8">

    <h3 className="text-2xl font-bold mb-4 text-cyan-300">
      Vocal Training
    </h3>

    <p className="text-gray-300">
      Improve confidence, microphone technique,
      breathing and vocal performance skills.
    </p>

  </div>

</div>

      <div className="bg-slate-900/50 backdrop-blur-md border border-cyan-500/20 rounded-3xl overflow-hidden hover:border-cyan-400 transition">

  <img
    src="/images/music-video.jpg"
    alt="Music Video Production"
    className="w-full h-56 object-cover transition duration-500 hover:scale-105"
  />

  <div className="p-8">

    <h3 className="text-2xl font-bold mb-4 text-cyan-300">
      Music Video Production
    </h3>

    <p className="text-gray-300">
      Plan, record and produce your own music
      videos from concept to final edit.
    </p>

  </div>

</div>

      <div className="bg-slate-900/50 backdrop-blur-md border border-cyan-500/20 rounded-3xl overflow-hidden hover:border-cyan-400 transition">

  <img
    src="/images/voice-dubbing.jpg"
    alt="Voice Acting & Dubbing"
    className="w-full h-56 object-cover transition duration-500 hover:scale-105"
  />

  <div className="p-8">

    <h3 className="text-2xl font-bold mb-4 text-cyan-300">
      Voice Acting & Dubbing
    </h3>

    <p className="text-gray-300">
      Discover professional dubbing,
      voice-over performance and
      character interpretation.
    </p>

  </div>

</div>

    </div>

  </div>

</section>
{/* TESTIMONIALS */}

<section


  className="relative py-24 px-6 overflow-hidden"
  style={{
    backgroundImage:
      "linear-gradient(rgba(2,6,23,0.55), rgba(2,6,23,0.65)), url('/images/coaches-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  <div className="relative max-w-7xl mx-auto">

    <h2 className="text-5xl md:text-6xl font-black text-center mb-4">
      Student & Parent Testimonials
    </h2>

    <div className="flex justify-center mt-4 mb-10">
      <span className="px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold">
        Real Families • Real Experiences
      </span>
    </div>

    <p className="text-center text-gray-300 text-2xl md:text-3xl font-light mb-16 max-w-4xl mx-auto">
  See what students and parents are saying about their Musicways experience.
</p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-slate-900/50 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-8">

        <div className="text-cyan-300 text-4xl mb-6">
  ⭐⭐⭐⭐⭐
</div>

        <p className="text-gray-300">
          My daughter gained confidence, learned professional recording
          techniques and absolutely loved the experience.
        </p>

        <p className="mt-6 font-bold">
          Parent Testimonial
        </p>

      </div>

      <div className="bg-slate-900/50 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-8">

        <div className="text-cyan-300 text-4xl mb-6">
  ⭐⭐⭐⭐⭐
</div>

        <p className="text-gray-300">
          Recording my own music and learning voice acting was amazing.
          I can't wait to come back next summer.
        </p>

        <p className="mt-6 font-bold">
          Student Testimonial
        </p>

      </div>

      <div className="bg-slate-900/50 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-8">

        <div className="text-cyan-300 text-4xl mb-6">
  ⭐⭐⭐⭐⭐
</div>

        <p className="text-gray-300">
          Professional coaches, small groups and real studio experience.
          Highly recommended.
        </p>

        <p className="mt-6 font-bold">
          Parent Testimonial
        </p>

      </div>

    </div>

  </div>

</section>

{/* STUDENT GALLERY */}

<section
  className="relative py-24 px-6 overflow-hidden"
  style={{
    backgroundImage:
      "linear-gradient(rgba(2,6,23,0.75), rgba(2,6,23,0.80)), url('/images/coaches-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  <div className="relative max-w-7xl mx-auto">

    <h2 className="text-5xl md:text-6xl font-black text-center mb-4 text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
      Student Gallery
    </h2>

    <div className="flex justify-center mb-6">
      <span className="px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold">
        Real Students • Real Studio Experience
      </span>
    </div>

    <p className="text-center text-gray-300 text-xl md:text-2xl mb-16 max-w-4xl mx-auto">
      Take a look inside the Musicways Summer Camp experience.
    </p>

    {/* HERO IMAGE */}

    <div className="mb-10 max-w-4xl mx-auto">
      <img
        src="/images/gallery-hero-2.jpg"
        alt="Musicways Summer Camp"
        className="w-full max-w-3xl mx-auto rounded-3xl border border-cyan-500/20 shadow-2xl"
      />
    </div>

    {/* GALLERY GRID */}

    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

      <img
        src="/images/gallery-recording.jpg"
        alt="Recording Session"
        className="rounded-3xl border border-cyan-500/20 hover:scale-105 transition duration-300"
      />

      <img
        src="/images/gallery-vocal.jpg"
        alt="Vocal Training"
        className="rounded-3xl border border-cyan-500/20 hover:scale-105 transition duration-300"
      />

      <img
        src="/images/gallery-protools.jpg"
        alt="Pro Tools Training"
        className="rounded-3xl border border-cyan-500/20 hover:scale-105 transition duration-300"
      />

      <img
        src="/images/gallery-eduardo.jpg"
        alt="Learning From The Pros"
        className="rounded-3xl border border-cyan-500/20 hover:scale-105 transition duration-300"
      />

      <img
        src="/images/gallery-dubbing.jpg"
        alt="Voice Acting & Dubbing"
        className="rounded-3xl border border-cyan-500/20 hover:scale-105 transition duration-300"
      />

      <img
        src="/images/gallery-video.jpg"
        alt="Music Video Production"
        className="rounded-3xl border border-cyan-500/20 hover:scale-105 transition duration-300"
      />

    </div>

  </div>

</section>

{/* RESERVE YOUR SPOT */}



<section
  className="relative py-24 px-6 overflow-hidden"
  style={{
    backgroundImage:
      "linear-gradient(rgba(2,6,23,0.55), rgba(2,6,23,0.65)), url('/images/coaches-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full" />
  </div>

  <div className="relative max-w-5xl mx-auto text-center">

    <h2 className="text-5xl md:text-6xl font-black mb-4">
      Reserve Your Spot
    </h2>

    <div className="flex justify-center mb-8">
      <span className="px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold">
        Summer Sessions Now Open
      </span>
    </div>

    <p className="text-gray-200 text-2xl md:text-3xl max-w-5xl mx-auto mb-12 leading-relaxed">
      Join an immersive hands-on experience in Music Production,
      Vocal performance, Video creation and Voice acting inside a
      Professional Recording Studio environment.
    </p>

    <div className="space-y-4 text-2xl text-white font-medium mb-12">

      <p> Session 1 · July 6 – July 17</p>

      <p> Session 2 · July 20 – July 31</p>

      <p> Session 3 · August 3 – August 14</p>

    </div>

    <div className="flex justify-center mb-10">
      <span className="px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold">
        Only 6 Students Per Session
      </span>
    </div>

    <a
      href="https://wa.me/13055880713?text=Hello%20Musicways%20Summer%20Camp!%20I%20would%20like%20more%20information."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-cyan-400 text-black font-bold text-xl px-12 py-6 rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:scale-105 transition"
    >
      RESERVE YOUR SPOT
    </a>

    <p className="mt-8 text-gray-400">
      Questions? Contact us directly on WhatsApp.
    </p>

  </div>


</section>

{/* PROGRAMS & TUITION */}

<section
  className="relative py-24 px-6 overflow-hidden"
  style={{
    backgroundImage:
      "linear-gradient(rgba(2,6,23,0.75), rgba(2,6,23,0.85)), url('/images/coaches-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full" />
  </div>

  <div className="relative max-w-7xl mx-auto">

    <h2 className="text-5xl md:text-6xl font-black text-center mb-4">
      Programs & Tuition
    </h2>

<div className="flex justify-center mb-8">
  <span className="px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold">
    Affordable Professional Studio Training
  </span>
</div>

<p className="text-center text-gray-200 text-2xl md:text-3xl max-w-4xl mx-auto mb-16 leading-relaxed">
  Choose the option that works best for your family.
</p>

<div className="grid md:grid-cols-3 gap-8">

  {/* 1 WEEK */}

  <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8 text-center">

    <div className="text-5xl mb-4">🎵</div>

    <h3 className="text-2xl font-bold mb-4">
      1 Week Experience
    </h3>

    <p className="text-gray-300 mb-8">
      Perfect for students who want to explore music production,
      vocal training, video creation and dubbing.
    </p>

    <div className="text-5xl font-black text-cyan-400 mb-2">
  $300
</div>

<p className="text-gray-400 mb-6">
  Per Student
</p>

<div className="flex justify-center">
  <a
  href="https://wa.me/13055880713?text=Hello%20Musicways%20Summer%20Camp!%20I%20am%20interested%20in%20the%201-Week%20Experience."
  target="_blank"
  rel="noopener noreferrer"
  className="w-48 py-3 bg-cyan-400 text-black font-bold rounded-xl hover:scale-105 transition"
>
  Reserve Now
</a>
</div>


  </div>

  {/* 2 WEEKS */}

  <div className="bg-cyan-500/10 border-2 border-cyan-400 rounded-3xl p-8 text-center shadow-[0_0_60px_rgba(34,211,238,0.35)] scale-105">

    <div className="text-5xl mb-4">⭐</div>

    <h3 className="text-2xl font-bold mb-4">
      2 Week Immersion
    </h3>

    <p className="text-gray-300 mb-8">
      Our most popular option. Gain deeper experience and complete
      more recording, performance and media projects.
    </p>

    <div className="text-5xl font-black text-cyan-400 mb-2">
  $560
</div>

<p className="text-gray-400 mb-6">
  Per Student
</p>

<div className="flex justify-center">
  <a
    href="https://wa.me/13055880713?text=Hello%20Musicways%20Summer%20Camp!%20I%20am%20interested%20in%20the%202-Week%20Immersion."
    target="_blank"
    rel="noopener noreferrer"
    className="w-48 py-3 bg-cyan-400 text-black font-bold rounded-xl hover:scale-105 transition"
  >
    Reserve Now
  </a>
</div>

  </div>

  {/* SESSIONS */}

  <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8 text-center">

    <div className="text-5xl mb-4">🎬</div>

    <h3 className="text-2xl font-bold mb-6">
      Session Availability
    </h3>

    <div className="space-y-4 text-lg">

      <p>July 6 – 17</p>

      <p>July 20 – 31</p>

      <p>August 3 – 14</p>

    </div>

    <div className="mt-8 text-cyan-300 font-semibold">
      Only 6 Students Per Session
    </div>

  </div>

</div>
  </div>

</section>

{/* FAQ */}

<section className="bg-[#020617] py-24 px-6">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-5xl md:text-6xl font-black text-center mb-4">
      Frequently Asked Questions
    </h2>

    <div className="flex justify-center mb-8">
      <span className="px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold">
        Everything You Need To Know
      </span>
    </div>

    <p className="text-center text-gray-200 text-xl md:text-2xl max-w-4xl mx-auto mb-16">
      Common questions from parents and students.
    </p>

    <div className="space-y-6">

  <details className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 group">

    <summary className="cursor-pointer text-xl font-bold text-cyan-300 list-none flex justify-between items-center">

      What ages are accepted?

      <span className="text-cyan-400 text-2xl group-open:rotate-45 transition">
        +
      </span>

    </summary>

    <p className="text-gray-300 mt-4 leading-relaxed">
      Students ages 8–20 are welcome.
    </p>

  </details>

  <details className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 group">

  <summary className="cursor-pointer text-xl font-bold text-cyan-300 list-none flex justify-between items-center">

    Do students need previous experience?

    <span className="text-cyan-400 text-2xl group-open:rotate-45 transition">
      +
    </span>

  </summary>

  <p className="text-gray-300 mt-4 leading-relaxed">
    No. Beginners and experienced students are welcome.
  </p>

</details>

<details className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 group">

  <summary className="cursor-pointer text-xl font-bold text-cyan-300 list-none flex justify-between items-center">

    Can students attend only one week?

    <span className="text-cyan-400 text-2xl group-open:rotate-45 transition">
      +
    </span>

  </summary>

  <p className="text-gray-300 mt-4 leading-relaxed">
    Yes. Students may enroll for one week ($300) or two weeks ($560).
  </p>

</details>

<details className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 group">

  <summary className="cursor-pointer text-xl font-bold text-cyan-300 list-none flex justify-between items-center">

    What will students learn?

    <span className="text-cyan-400 text-2xl group-open:rotate-45 transition">
      +
    </span>

  </summary>

  <p className="text-gray-300 mt-4 leading-relaxed">
    Students will learn recording, vocal performance, music video production,
    voice acting, dubbing and media creation in a professional studio environment.
  </p>

</details>

<details className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 group">

  <summary className="cursor-pointer text-xl font-bold text-cyan-300 list-none flex justify-between items-center">

    How many students are accepted?

    <span className="text-cyan-400 text-2xl group-open:rotate-45 transition">
      +
    </span>

  </summary>

  <p className="text-gray-300 mt-4 leading-relaxed">
    Only 6 students per session to ensure personalized instruction.
  </p>

</details>

<details className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 group">

  <summary className="cursor-pointer text-xl font-bold text-cyan-300 list-none flex justify-between items-center">

    Where is the camp located?

    <span className="text-cyan-400 text-2xl group-open:rotate-45 transition">
      +
    </span>

  </summary>

  <p className="text-gray-300 mt-4 leading-relaxed">
    Musicways Studios / 2510 NW 97th Ave Suite 130, Doral, FL 33172
  </p>

</details>

<details className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 group">

  <summary className="cursor-pointer text-xl font-bold text-cyan-300 list-none flex justify-between items-center">

    Is parking available?

    <span className="text-cyan-400 text-2xl group-open:rotate-45 transition">
      +
    </span>

  </summary>

  <p className="text-gray-300 mt-4 leading-relaxed">
    Yes. Convenient on-site parking is available for student drop-off and pick-up.
  </p>

</details>

<details className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 group">

  <summary className="cursor-pointer text-xl font-bold text-cyan-300 list-none flex justify-between items-center">

    What should students bring?

    <span className="text-cyan-400 text-2xl group-open:rotate-45 transition">
      +
    </span>

  </summary>

  <p className="text-gray-300 mt-4 leading-relaxed">
    Students only need a positive attitude, creativity and a willingness to learn.
    All professional recording studio equipment, software and learning materials
    are provided by Musicways Summer Camp.
  </p>

</details>
</div>

  </div>

</section>

{/* CONTACT US */}

<section
  className="relative py-24 px-6 overflow-hidden"
  style={{
    backgroundImage:
  "linear-gradient(rgba(2,6,23,0.55), rgba(2,6,23,0.65)), url('/images/coaches-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  <div className="absolute inset-0 pointer-events-none">
  <div className="absolute top-0 left-0 ..."/>
  <div className="absolute bottom-0 right-0 ..."/>
</div>

  <div className="relative max-w-5xl mx-auto text-center">

    <h2 className="text-5xl md:text-6xl font-black mb-4">
      Contact Us
    </h2>

    <div className="flex justify-center mb-8">
      <span className="px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold">
        We'd Love To Hear From You
      </span>
    </div>

    <p className="text-gray-200 text-xl md:text-2xl max-w-4xl mx-auto mb-16">
      Have questions? Contact us directly and we'll be happy to help.
    </p>

  </div>
<div className="space-y-6 text-xl md:text-2xl text-white mb-12">

  <p>📍 2510 NW 97th Ave Suite 130, Doral, FL 33172</p>

  <p>📱 (305) 588-0713 / (954) 210-2560</p>

  <p>📧 info@musicwayssummercamp.com</p>

  <p>🌐 musicwayssummercamp.com</p>

</div>

<a
  href="https://wa.me/13055880713?text=Hello%20Musicways%20Summer%20Camp!%20I%20would%20like%20more%20information."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-cyan-400 text-black font-bold text-xl px-12 py-6 rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:scale-105 transition"
>
  CONTACT US ON WHATSAPP
</a>

<footer className="bg-[#020617] py-12 border-t border-cyan-500/20">

  <div className="text-center">

    <p className="text-cyan-300 text-xl font-bold">
      Musicways Summer Camp
    </p>

    <p className="text-white mt-3 text-lg font-medium">
  Music Production • Voice Techniques &  Acting • Video Creation
</p>

    <p className="text-gray-300 mt-4 text-sm">
      © 2026 Musicways Studios. All Rights Reserved.
    </p>

  </div>

</footer>

</section>

    </main>
  );
}