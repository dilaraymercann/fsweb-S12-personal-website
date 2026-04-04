const Skills = () => {
    const skills = [
        { name: 'JAVASCRIPT', icon: './public/icons/javascript.png' },
        { name: 'REACT', icon: './public/icons/react.png' },
        { name: 'REDUX', icon: './public/icons/redux.webp' },
        { name: 'NODE', icon: './public/icons/nodejs.jpg' },
        { name: 'VS CODE', icon: './public/icons/vscode.png' },
        { name: 'FIGMA', icon: './public/icons/figma.jpg' },
    ];

    return (
        <>
            <div className="min-h-[50vh] relative text-center text-4xl mt-10 text-[#0A0A14] font-[Inter] overflow-hidden">
                <div
                    className="absolute bottom-12 -left-16 w-48 h-12 bg-[#525252] rounded-full"
                ></div>
                <h1>Skills</h1>
                <div className="flex justify-center gap-8 flex-wrap mt-15">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center gap-2">
                            <div className="w-20 h-20 overflow-hidden flex items-center justify-center">
                                <img src={skill.icon} className="w-20 h-20 object-cover" />
                            </div>
                            <p className="font-[Inter] text-xs text-[#777777]">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Skills;