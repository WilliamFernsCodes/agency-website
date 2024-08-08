import { createSupabase } from "./utils";

const secretKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createSupabase(secretKey);
const bucketURL = `${process.env.NEXT_PUBLIC_SUPABASE_BASE_URL}/storage/v1/object/public`;

const saveTestimonialsData = (testimonialsData) => {};

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
  const bulkDeleteResult = await supabase.from("user_info").delete().match({});
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
    .match({});
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

export {
  getFromValuesTable,
  saveTestimonialsData,
  updateUserInfo,
  updateTestimonials,
};
