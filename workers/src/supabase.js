import { createSupabase } from "./utils.js";

import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const secretKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createSupabase(secretKey);
// const bucketURL = `${process.env.NEXT_PUBLIC_SUPABASE_BASE_URL}/storage/v1/object/public`;

const getFromValuesTable = async (id) => {
  const { data, error } = await supabase
    .from("values")
    .select("value")
    .eq("id", id);
  if (error) {
    throw new Error(error.message);
  }
  return data[0].value;
};

const updateUserInfo = async (userInfo) => {
  // delete all of the user info
  const bulkDeleteResult = await supabase
    .from("user_info")
    .delete()
    .neq("id", 0);
  if (bulkDeleteResult.error) {
    throw new Error(
      `Error deleting user info in bulk: ${bulkDeleteResult.error.message}`,
    );
  }
  // bulk insert the new user info
  const bulkInsertResult = await supabase.from("user_info").insert(userInfo);
  if (bulkInsertResult.error) {
    throw new Error(
      `Error inserting user info in bulk: ${bulkInsertResult.error.message}`,
    );
  }
};
const updateTestimonials = async (testimonialsData) => {
  // delete the previous testimonials
  const bulkDeleteResult = await supabase
    .from("testimonials")
    .delete()
    .neq("id", 0);
  if (bulkDeleteResult.error) {
    throw new Error(
      `Error deleting testimonials in bulk: ${bulkDeleteResult.error.message}`,
    );
  }

  // bulk insert the new testimonials
  const bulkInsertResult = await supabase
    .from("testimonials")
    .insert(testimonialsData);
  if (bulkInsertResult.error) {
    throw new Error(
      `Error inserting testimonials in bulk: ${bulkInsertResult.error.message}`,
    );
  }
};

const updateBlogsData = async (blogsData) => {
  // delete the previous blogs
  const bulkDeleteResult = await supabase.from("blogs").delete().neq("id", 0);
  if (bulkDeleteResult.error) {
    throw new Error(
      `Error deleting blogs in bulk: ${bulkDeleteResult.error.message}`,
    );
  }
  // bulk insert the new blogs
  const bulkInsertResult = await supabase.from("blogs").insert(blogsData);
  if (bulkInsertResult.error) {
    throw new Error(
      `Error inserting blogs in bulk: ${bulkInsertResult.error.message}`,
    );
  }
};

export {
  getFromValuesTable,
  updateUserInfo,
  updateTestimonials,
  updateBlogsData,
};
