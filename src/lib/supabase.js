import { createSupabase } from "./utils";

const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createSupabase(anonKey);

const getProjects = async () => {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) {
    throw new Error(error.message);
  }
  const projects = [
    ...data.map((project) => {
      return {
        projectName: project.project_name,
        projectType: project.project_type,
        imagePath: `${process.env.NEXT_PUBLIC_SUPABASE_BASE_URL}/storage/v1/object/public/${project.image_path}`,
        tags: project.tags,
        urls: project.urls,
      };
    }),
    {
      projectName: "See More",
      projectType: "ui",
      imagePath: `${process.env.NEXT_PUBLIC_SUPABASE_BASE_URL}/storage/v1/object/public/images/all_ui_ux_projects.png`,
      urls: [
        "https://www.figma.com/design/OlyX6mdzVhTlZRS2MV76Aa/Muhammad-Shyed-Hassain-(Collaborator-Designer)?node-id=0-1&t=myPwzWd5qmRjswb8-1",
      ],
      tags: ["30+ designs", "figma"],
    },
  ];
  return projects;
};

export { getProjects };
