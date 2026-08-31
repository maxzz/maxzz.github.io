import { PrivateRepoMarker, RepoName } from "./8-shared-ui";
import { RepoPreview } from "./2-4-repo-preview";
import { Project_3_Buttons } from "./3-project-3-buttons";
import { type ProjectType, type SectionType } from "@maxzz/db-apps";

export function Repos_AsGrid({ section }: { section: SectionType; }) {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] auto-rows-[minmax(150px,1fr)] gap-2">
            {section.projects.map(
                (project, idx) => (
                    <Item project={project} key={idx} />
                )
            )}
        </div>
    );
}

function Item({ project }: { project: ProjectType; }) {
    const { id, description, } = project;
    return (
        <section className="flex flex-col">
            <RepoName name={id} />

            <div className="flex-1 p-4 text-slate-400 bg-slate-800 rounded-sm grid grid-rows-[1fr_auto] grid-cols-[1fr_auto] gap-x-4 gap-y-2">
                <div className=" min-w-0 text-sm overflow-auto">
                    {description}
                </div>

                <div className="-mb-2 flex items-center">
                    <Project_3_Buttons project={project} inListItem={false} />
                    {project.private && <PrivateRepoMarker className="ml-1.25 pb-0!" />}
                </div>

                <RepoPreview project={project} />
            </div >
        </section>
    );
}
