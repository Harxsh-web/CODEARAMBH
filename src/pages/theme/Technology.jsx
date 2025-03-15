
import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

export function Technology() {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );

    return (
        <>
            <div className="">
                <h2 className="text-center font-bold text-2xl mt-10 md:text-left md:text-5xl mx-10">Technology Used:</h2>
                <div className="relative flex size-full items-center justify-center overflow-hidden">
                    <IconCloud images={images} />
                </div>
            </div>
        </>
    );
}
