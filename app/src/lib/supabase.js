import { createSupabase } from "./utils";

const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createSupabase(anonKey);
const bucketURL = `${process.env.NEXT_PUBLIC_SUPABASE_BASE_URL}/storage/v1/object/public`;

const getTestimonialsData = async () => {
  const columnsToSelect = [
    "title",
    "review",
    "poster_name",
    "amount",
    "rating",
    "avatar_url",
    "job_link",
  ];
  const { data, error } = await supabase
    .from("testimonials")
    .select(columnsToSelect.join(", "));
  if (error) {
    console.error(`Error getting Testimonials Data: ${error.message}`);
    return [];
  }
  return data;
};

const getFromValuesTable = async (id) => {
  const { data, error } = await supabase
    .from("values")
    .select("value")
    .eq("id", id);
  if (error) {
    console.error(`Error getting values data (id : ${id}): ${error.message}`);
    return [];
  }
  return data[0].value;
};

const getBountyHuntersInfo = async () => {
  const userInfo = await getFromValuesTable("bounty_hunters");
  return JSON.parse(userInfo);
};

const getHuntersStats = async () => {
  const { data, error } = await supabase.from("user_info").select("*");
  if (error) {
    console.error(`Error getting Hunters Stats: ${error.message}`);
    return [];
  }
  return data;
};
const getProjects = async () => {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) {
    console.error(`Error getting projects: ${error.message}`);
    return [];
  }
  const projects = [
    ...data.map((project) => {
      return {
        projectName: project.project_name,
        projectType: project.project_type,
        imagePath: `${bucketURL}/${project.image_path}`,
        tags: project.tags,
        urls: project.urls,
      };
    }),
    {
      projectName: "See More",
      projectType: "ui",
      imagePath: `${bucketURL}/images/projects/all_ui_ux_projects.png`,
      urls: [
        "https://www.figma.com/design/OlyX6mdzVhTlZRS2MV76Aa/Muhammad-Shyed-Hassain-(Collaborator-Designer)?node-id=0-1&t=myPwzWd5qmRjswb8-1",
      ],
      tags: ["30+ designs", "figma"],
    },
  ];
  return projects;
};

const getOurTeamData = async () => {
  const { data, error } = await supabase.from("our_team").select("*");
  if (error) {
    console.error(`Error getting team data: ${error.message}`);
    return [];
  }
  const finalData = data.map((member) => {
    const memberCopy = JSON.parse(JSON.stringify(member));
    const itemsToRemove = ["social_links", "image_path"];
    for (const item of itemsToRemove) {
      delete memberCopy[item];
    }
    return {
      ...memberCopy,
      imageURL: `${bucketURL}/${member.image_path}`,
      socialLinks: JSON.parse(
        JSON.stringify(
          member.social_links.map((linkDict) => JSON.parse(linkDict)),
        ),
      ),
    };
  });
  return finalData;
};

const getBlogs = async () => {
  const columnsToSelect = [
    "blog_title",
    "posting_date",
    "image_url",
    "blog_link",
  ];
  const { data, error } = await supabase
    .from("blogs")
    .select(columnsToSelect.join(", "))
    .order("posting_date", { ascending: false })
    .limit(6);
  if (error) {
    console.error(error.message);
    return [];
  }

  return data;
};

export {
  getBountyHuntersInfo,
  getTestimonialsData,
  getProjects,
  getOurTeamData,
  getBlogs,
  getHuntersStats,
};
