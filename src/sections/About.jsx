import {Code2,Lightbulb,Rocket,Users}from "lucide-react";

const highlights=[
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "Write clean, maintainable, and efficient code following best practices and coding standards.",
    },
    {
        icon: Lightbulb,
        title: "Innovative Solutions",
        description:
            "Create creative and effective solutions to complex problems.",
    },
    {
        icon: Rocket,
        title: "Fast Development",
        description:
            "Deliver projects quickly without compromising quality.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
            "Working closely with teams to deliver high-quality software.",
    },
];


export const About = () => {
    return(
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 ">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/*Left Column*/}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                    Building the future,
                    <span className="font-serif italic font-normal text-white"> one component at a time.</span>
                </h2>
                {/*Details*/}
                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                    <p>
                    I am a passionate software developer with a knack for creating efficient and scalable web applications. With a strong foundation in both front-end and back-end technologies, I thrive on transforming complex problems into elegant solutions. My journey in coding has been fueled by curiosity and a relentless drive to learn and innovate.
                    </p>
                    <p>
                    Whether working independently or collaborating within a team, I am committed to delivering high-quality code that meets user needs and business goals. Let's connect and build something amazing together!
                    </p>
                    <p>
                    Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and staying updated with industry trends. When I'm not in front of a computer, you can find me reading tech blogs, attending developer meetups, or experimenting with new programming languages.
                    </p>
                </div>
                {/*Aim*/}
                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium italic text-foreground">
                        My aim is to leverage my skills and passion for technology to contribute to impactful projects that enhance user experiences and drive innovation in the tech industry.
                    </p>
                </div>
                </div>
                {/*Right Column - Highlights*/}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item,index) => (
                        <div key={index} className="glass p-6 rounded-2xl animate-fade-in"
                         style={{animationDelay: `${(index+1)*100}ms`}}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
};