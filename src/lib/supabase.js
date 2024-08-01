import { createSupabase } from "./utils";

const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createSupabase(anonKey);

const getProjects = async () => {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data.map((project) => {
    return {
      projectName: project.project_name,
      projectType: project.project_type,
      imagePath: `${process.env.NEXT_PUBLIC_SUPABASE_BASE_URL}/storage/v1/object/public/images/${project.image_path}`,
      tags: project.tags,
      url: project.url,
    };
  });
};

export { getProjects };
