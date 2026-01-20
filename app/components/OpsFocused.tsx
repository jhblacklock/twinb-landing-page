export const OpsFocused = () => {
  const floatingTextItems = [
    "Stop the Wrong Work",
    "Decide Earlier",
    "Less Rework",
    "Fewer Open Loops",
    "Faster Direction",
    "Cleaner Hand-offs",
    "Focused Creative Effort",
    "Decisions That Stick",
    "Protected Creative Capacity",
  ];

  const howItWorksSteps = [
    { bold: "Capture", light: " the idea" },
    { bold: "Score", light: " it against what matters" },
    { bold: "Approve", light: ", constrain, or kill it" },
    {
      light1: "Approved work exits TwinB with a ",
      bold: "clear brief",
      light2: " and ",
      bold2: "execution guidance",
    },
  ];

  const outputs = [
    {
      title: "Decision Record",
      description:
        "A clear yes, no, or conditional approval for every idea that enters the system. Includes owner, rationale, constraints, and expiration if applicable.",
      emphasis: "No decision lives only in someone's head.",
    },
    {
      title: "Priority Order",
      description:
        "A ranked list of approved work. What runs now. What runs later. What does not run in parallel.",
      emphasis: "This replaces urgency-driven planning.",
    },
    {
      title: "Decision Rationale",
      description:
        "A short explanation tied to goals, brand judgment, capacity, and timing. Used to prevent re-litigation and second-guessing.",
      emphasis: "If the decision is challenged, this is the reference.",
    },
    {
      title: "Creative Brief",
      description:
        "A single-page brief created after approval, not before. Objective, audience, success criteria, constraints.",
      emphasis: "Design starts with clarity, not assumptions.",
    },
    {
      title: "Execution Guidance",
      description:
        "Tool-agnostic direction for tone, structure, emphasis, and scope. Enough to guide execution without prescribing craft.",
      emphasis: "This protects designers from thrash.",
    },
    {
      title: "Constraints & Guardrails",
      description:
        "Explicit limits for each initiative. What it is. What it is not. How far it goes. When it expires.",
      emphasis: "Constraints are documented, not implied.",
    },
    {
      title: "Kill & Deferral List",
      description:
        "A visible record of stopped or postponed work. Includes reason and review trigger.",
      emphasis: "This is how capacity is protected.",
    },
    {
      title: "Review Signal",
      description:
        "A defined rule for when a decision gets revisited, if ever. Time-based, outcome-based, or not at all.",
      emphasis: "No silent reopenings.",
    },
  ];

  return (
    <div className="bg-purple-pale min-h-screen">
      <div className="max-w-[1440px] mx-auto">
      {/* Header / Logo */}
      <header className="px-6 py-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-start gap-2">
          <div className="bg-purple-light rounded-2xl p-3 shadow-md">
            <img
              className="w-14 h-11"
              alt="TwinB Logo"
              src="https://c.animaapp.com/zPDQFhnr/img/xxebdt-1.svg"
            />
          </div>
          <p className="text-blue-900 text-xs leading-tight">
            <span className="font-extrabold">Building</span>
            <span> brands &amp; products </span>
            <span className="font-bold">since 2008</span>
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left column - Text content */}
          <div className="flex-1 max-w-md lg:max-w-sm xl:max-w-md lg:pl-8 xl:pl-16 lg:pt-12">
            <h1 className="font-['Jura'] font-bold text-black text-4xl md:text-5xl lg:text-[58px] tracking-tight leading-tight mb-6">
              Stop designing
              <br />
              the wrong things.
            </h1>
            <p className="text-blue-900 text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
              TwinB helps small teams decide what&apos;s worth working on before
              time and attention are wasted.
            </p>
            <button className="w-full sm:w-auto px-16 py-5 bg-purple-regular hover:bg-purple-700 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] font-['Jura'] font-bold text-white text-lg">
              Get early access →
            </button>
          </div>

          {/* Right column - Floating text items with logo integrated */}
          <div className="flex-1 flex flex-col gap-2 lg:gap-3 items-start">
            {/* First two items */}
            {floatingTextItems.slice(0, 2).map((text, index) => (
              <div
                key={index}
                className="px-8 py-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-black/5 shadow-sm font-['Jura'] font-light text-blue-900/40 text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight whitespace-nowrap overflow-hidden"
              >
                {text}
              </div>
            ))}

            {/* TwinB Logo in between */}
            <div className="py-2 lg:py-4 relative w-[280px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
              {/* TwinB text */}
              <img
                src="https://c.animaapp.com/zPDQFhnr/img/group-12.png"
                alt="TwinB Text"
                className="w-full h-auto"
              />
              {/* Bee overlay */}
              <img
                src="https://c.animaapp.com/zPDQFhnr/img/group-11.png"
                alt="TwinB Bee"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-auto"
              />
            </div>

            {/* Remaining items */}
            {floatingTextItems.slice(2).map((text, index) => (
              <div
                key={index + 2}
                className="px-8 py-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-black/5 shadow-sm font-['Jura'] font-light text-blue-900/40 text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight whitespace-nowrap overflow-hidden"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="flex-1 max-w-xl">
            <p className="text-blue-900 text-sm font-light mb-2">The Problem</p>
            <h2 className="text-blue-900 text-3xl md:text-4xl font-semibold leading-tight mb-8">
              Making things is easy.
              <br />
              Deciding what&apos;s worth making is not.
            </h2>
            <div className="text-blue-900 text-lg md:text-xl lg:text-[26px] leading-relaxed">
              <p className="font-light mb-6 leading-[37px]">
                Modern tools removed the friction of production. They did not
                remove the responsibility of judgment.
              </p>
              <p className="font-light mb-2 leading-[37px]">Without a decision system:</p>
              <ul className="list-disc list-inside font-light mb-6 space-y-1">
                <li className="leading-[37px]">Creative effort gets spent before value is clear</li>
                <li className="leading-[37px]">Everything feels urgent</li>
                <li className="leading-[37px]">Ideas turn into tasks too quickly</li>
                <li className="leading-[37px]">Designers work hard on the wrong things</li>
                <li className="leading-[37px]">Focus erodes and momentum stalls</li>
              </ul>
              <p className="font-bold leading-[37px]">
                This isn&apos;t a talent problem.
                <br />
                It&apos;s a judgment problem.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full max-w-[595px] h-auto aspect-[595/836] rounded-[20px] border border-black/16 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Team working"
                src="https://c.animaapp.com/zPDQFhnr/img/rectangle-97.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Internal Struggle Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24">
          <div className="flex-1 max-w-xl">
            <p className="text-blue-900 text-sm font-light mb-2">
              Internal Struggle
            </p>
            <h2 className="text-blue-900 text-3xl md:text-4xl font-semibold leading-tight mb-8">
              Too many decisions.
              <br />
              Too little confidence.
            </h2>
            <div className="text-blue-900 text-lg md:text-xl lg:text-[26px] leading-relaxed">
              <p className="font-light mb-6 leading-[37px]">
                If you&apos;re responsible for saying <em>yes</em> or{" "}
                <em>no</em> to work, you feel this every day.
              </p>
              <p className="font-light mb-6 leading-[37px]">
                Ideas stack up. Everything feels potentially important. Tools
                help you create faster, but not decide faster.
              </p>
              <p className="font-bold leading-[37px]">
                You don&apos;t need more output.
                <br />
                You need clarity, confidence, and direction before effort is spent.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full max-w-[595px] h-auto aspect-[595/836] rounded-[20px] border border-black/16 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Person thinking"
                src="https://c.animaapp.com/zPDQFhnr/img/rectangle-98.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bad Decisions Section */}
      <section className="mx-6 md:mx-12 lg:mx-24 rounded-3xl overflow-hidden">
        {/* Top purple section */}
        <div className="bg-purple-regular p-8 md:p-12 lg:p-16 pb-12 md:pb-16 lg:pb-20">
          <h2 className="text-white text-4xl md:text-5xl lg:text-[74px] font-semibold leading-tight tracking-tight mb-6">
            Bad decisions are expensive.
          </h2>
          <p className="text-light text-lg md:text-xl lg:text-[24px] leading-[39px] max-w-4xl">
            <span className="font-bold">
              Every unclear decision turns into wasted hours, rework, and
              projects that never should have existed.{" "}
            </span>
            <span className="font-normal">
              Designers execute. Teams stay busy. Budgets burn quietly.
            </span>
          </p>
        </div>
        {/* Bottom image section with purple overlay */}
        <div
          className="relative bg-cover bg-center bg-no-repeat min-h-[600px] md:min-h-[900px] lg:min-h-[1200px] xl:min-h-[1393px] flex flex-col justify-center p-8 md:p-12 lg:p-16"
          style={{
            backgroundImage:
              "url(https://c.animaapp.com/zPDQFhnr/img/rectangle-100.png)",
          }}
        >
          <div className="bg-purple-regular/75 mix-blend-multiply absolute inset-0" />
          <div className="relative z-10 text-light max-w-4xl space-y-6">
            <p className="font-semibold text-4xl md:text-6xl lg:text-[86px] leading-tight lg:leading-[84px]">
              The cost isn&apos;t just time.
            </p>
            <p className="font-semibold text-3xl md:text-5xl lg:text-[71px] leading-tight lg:leading-[84px]">
              It&apos;s payroll spent on the wrong work.
            </p>
            <p className="font-semibold text-3xl md:text-5xl lg:text-[71px] leading-tight lg:leading-[84px]">
              It&apos;s delayed launches.
            </p>
            <p className="font-semibold text-3xl md:text-5xl lg:text-[71px] leading-tight lg:leading-[84px]">
              It&apos;s opportunities crowded out by noise.
            </p>
          </div>
        </div>
      </section>

      {/* TwinB is the Missing Layer */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <h2 className="text-blue-900 text-4xl md:text-6xl lg:text-[86px] leading-tight lg:leading-[84px] mb-12">
          <span className="font-semibold">TwinB</span>
          <span className="font-normal"> is the<br />missing layer.</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="flex-1 max-w-2xl">
            <p className="text-2xl md:text-3xl lg:text-[37px] leading-relaxed lg:leading-[44px] mb-6">
              <span className="font-semibold text-blue-900">TwinB is a </span>
              <span className="font-semibold text-purple-regular">
                Creative Governance Layer
              </span>
              <span className="font-semibold text-blue-900">
                {" "}
                for small teams.
              </span>
            </p>
            <p className="text-blue-900 text-xl md:text-2xl lg:text-[37px] leading-relaxed lg:leading-[44px] font-light">
              It sits before project management tools and before design tools to
              decide what earns the right to become work.
            </p>
          </div>
          <div className="flex-1 max-w-md">
            <div className="text-blue-900 text-xl md:text-2xl lg:text-[26px] leading-relaxed lg:leading-[35px]">
              <p className="font-bold mb-2">TwinB is not:</p>
              <p className="font-medium">- a design tool</p>
              <p className="font-medium">- a project management tool</p>
              <p className="font-medium">- an AI content generator</p>
              <p className="font-medium">- a template library</p>
            </div>
          </div>
        </div>
      </section>

      {/* How TwinB Works */}
      <section className="mx-6 md:mx-12 lg:mx-24 bg-purple-medium rounded-3xl p-8 md:p-12 lg:p-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="flex-1">
            <h2 className="text-light text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8">
              How TwinB works
            </h2>
            <ol className="space-y-2 list-decimal list-inside">
              {howItWorksSteps.map((step, index) => (
                <li
                  key={index}
                  className="text-light text-xl md:text-2xl leading-relaxed font-light"
                >
                  {step.light1 && (
                    <span className="font-light">{step.light1}</span>
                  )}
                  <span className="font-bold">{step.bold}</span>
                  {step.light && (
                    <span className="font-light">{step.light}</span>
                  )}
                  {step.light2 && (
                    <span className="font-light">{step.light2}</span>
                  )}
                  {step.bold2 && <span className="font-bold">{step.bold2}</span>}
                </li>
              ))}
            </ol>
            <p className="font-['Jura'] font-bold text-light text-2xl md:text-3xl lg:text-4xl mt-8 leading-tight">
              No approved decision = no design work.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-3 items-center lg:items-start">
            <div className="bg-purple-700 rounded-xl px-6 py-4 w-full max-w-md">
              <span className="text-light text-xl font-medium">IDEA</span>
            </div>
            <div className="text-blue-900 text-2xl text-center">↓</div>
            <div className="bg-white rounded-xl px-6 py-4 shadow-md w-full max-w-md">
              <span className="text-purple-medium text-xl font-medium">
                TwinB (Decision + Direction)
              </span>
            </div>
            <div className="text-blue-900 text-2xl text-center">↓</div>
            <div className="bg-purple-700 rounded-xl px-6 py-4 w-full max-w-md">
              <span className="text-light text-xl font-medium">
                PMIS (Tracking + Ownership)
              </span>
            </div>
            <div className="text-blue-900 text-2xl text-center">↓</div>
            <div className="bg-purple-700 rounded-xl px-6 py-4 w-full max-w-md">
              <span className="text-light text-xl font-medium">
                Design / Creation Tools
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What Changes with TwinB */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="flex-1 max-w-xl">
            <p className="text-blue-900 text-sm font-light mb-2">The Value</p>
            <h2 className="text-blue-900 text-3xl md:text-4xl font-semibold leading-tight mb-8">
              What changes with TwinB
            </h2>
            <div className="text-blue-900 text-lg md:text-xl lg:text-[26px] leading-relaxed">
              <p className="font-light mb-2 leading-[37px]">With TwinB:</p>
              <ul className="list-disc list-inside font-light mb-6 space-y-1">
                <li className="leading-[37px]">Fewer wasted projects</li>
                <li className="leading-[37px]">Clear priorities</li>
                <li className="leading-[37px]">Less decision fatigue</li>
                <li className="leading-[37px]">Focused creative effort</li>
                <li className="leading-[37px]">Designers protected from thrash</li>
                <li className="leading-[37px]">A brand that feels intentional, not reactive</li>
              </ul>
              <p className="font-bold leading-[37px]">
                Decisions are made once.
                <br />
                Direction is shared.
                <br />
                Execution gets easier.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full max-w-[595px] h-auto aspect-[595/836] rounded-[20px] border border-black/16 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Creative work"
                src="https://c.animaapp.com/zPDQFhnr/img/rectangle-101.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TwinB Outputs */}
      <section className="mx-6 md:mx-12 lg:mx-24 bg-purple-medium rounded-3xl p-8 md:p-12 lg:p-16">
        <h2 className="text-white text-4xl md:text-5xl lg:text-[86px] font-semibold leading-tight mb-4">
          TwinB Outputs
        </h2>
        <p className="text-white text-lg md:text-xl lg:text-[26px] leading-relaxed max-w-2xl mb-12 tracking-tight">
          <span className="font-light">
            TwinB produces a small set of durable artifacts that govern how
            creative work enters, moves, and exits your system. These are not
            concepts.{" "}
          </span>
          <span className="font-bold">
            They are working documents your team uses every week.
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {outputs.map((output, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg"
            >
              <h3 className="text-blue-900 text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 leading-tight">
                {output.title}
              </h3>
              <p className="text-blue-900 text-base md:text-lg lg:text-xl leading-relaxed mb-4">
                {output.description}
              </p>
              <p className="text-blue-900 text-base md:text-lg lg:text-xl font-bold leading-relaxed">
                {output.emphasis}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Built by Operators */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left column: Founders image + Mission/Vision */}
          <div className="flex-1">
            <img
              className="w-full max-w-[589px] rounded-2xl object-cover mb-12"
              alt="Founders"
              src="https://c.animaapp.com/zPDQFhnr/img/group-29.png"
            />

            {/* Mission */}
            <div className="mb-12">
              <p className="text-blue-900 text-sm font-light mb-2">
                What Guides Us (Mission)
              </p>
              <h3 className="font-['Jura'] font-bold text-purple-medium text-3xl md:text-5xl lg:text-[76px] leading-tight lg:leading-[84px] tracking-[0.76px]">
                Make creative decisions early, clear, &amp; repeatable.
              </h3>
            </div>

            {/* Vision */}
            <div>
              <p className="text-blue-900 text-sm font-light mb-2">
                What Inspires Us (Vision)
              </p>
              <h3 className="font-['Jura'] font-bold text-purple-medium text-2xl md:text-4xl lg:text-[53px] leading-tight lg:leading-[64px] tracking-[0.53px]">
                A world where creative effort is spent intentionally, not accidentally.
              </h3>
            </div>
          </div>

          {/* Right column: Text + LinkedIn buttons */}
          <div className="flex-1 max-w-xl">
            <h2 className="font-['Jura'] font-bold text-black text-4xl md:text-5xl lg:text-[85px] tracking-tight lg:tracking-[-5.1px] leading-tight lg:leading-[79px] mb-8">
              Built by operators who&apos;ve lived the problem
            </h2>
            <div className="text-blue-900 text-lg md:text-xl lg:text-[26px] leading-relaxed lg:leading-[37px] mb-8">
              <p className="mb-6">
                TwinB was created by founders who&apos;ve led creative teams,
                built brands, and felt the cost of bad decisions firsthand.
              </p>
              <p className="mb-2">We&apos;ve worked inside:</p>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>fast-moving startups</li>
                <li>small teams with limited capacity</li>
                <li>environments where every creative decision mattered</li>
              </ul>
              <p className="font-bold">
                TwinB isn&apos;t theory.
                <br />
                It&apos;s the system we wished we had.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="px-6 py-4 bg-purple-regular hover:bg-purple-700 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center gap-3 w-fit"
              >
                <img
                  className="w-12 h-12 object-contain"
                  alt="LinkedIn"
                  src="https://c.animaapp.com/zPDQFhnr/img/inbug-white-2@2x.png"
                />
                <span className="font-['Jura'] font-bold text-light text-lg tracking-[0.18px]">
                  Jackson on LinkedIn
                </span>
              </a>
              <a
                href="#"
                className="px-6 py-4 bg-purple-regular hover:bg-purple-700 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center gap-3 w-fit"
              >
                <img
                  className="w-12 h-12 object-contain"
                  alt="LinkedIn"
                  src="https://c.animaapp.com/zPDQFhnr/img/inbug-white-2@2x.png"
                />
                <span className="font-['Jura'] font-bold text-light text-lg tracking-[0.18px]">
                  William on LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-6 md:mx-12 lg:mx-24 mb-16 bg-purple-medium rounded-3xl p-8 md:p-12 lg:p-16 text-center">
        <p className="text-white text-base md:text-lg font-light mb-4">
          Ready to stop designing the wrong things?
        </p>
        <h2 className="text-white text-3xl md:text-5xl lg:text-[68px] font-medium leading-tight lg:leading-[76px] tracking-tight lg:tracking-[-3.4px] mb-8 max-w-3xl mx-auto">
          Be one of the first teams to use TwinB
        </h2>
        <p className="text-light text-lg md:text-xl lg:text-[22px] font-medium leading-relaxed lg:leading-[35px] mb-8 max-w-4xl mx-auto">
          TwinB is currently being built with a small group of early users.
          <br />
          If you&apos;re responsible for deciding what work gets done and want a
          better way to do it, we&apos;d like to talk.
        </p>
        <button className="px-12 py-5 bg-gray-heavy hover:bg-black rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] font-['Jura'] font-bold text-light text-lg tracking-[0.18px]">
          Join the early access list→
        </button>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col items-start gap-6">
          <img
            className="w-14 h-11"
            alt="TwinB Logo"
            src="https://c.animaapp.com/zPDQFhnr/img/xxebdt@2x.png"
          />
          <nav className="flex flex-col gap-2 font-bold text-black text-sm tracking-[0.14px]">
            <a href="#" className="hover:text-purple-regular transition-colors leading-[54px]">
              Blog
            </a>
            <a href="#" className="hover:text-purple-regular transition-colors leading-[54px]">
              Instagram
            </a>
            <a href="#" className="hover:text-purple-regular transition-colors leading-[54px]">
              LinkedIn
            </a>
          </nav>
        </div>
      </footer>
      </div>
    </div>
  );
};
