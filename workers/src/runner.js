import { getBlogsData, getTestimonialsData } from "./workers/index.js";
import {
  updateTestimonials,
  updateUserInfo,
  getFromValuesTable,
  updateBlogsData,
} from "./supabase.js";

const runner = async () => {
  const bountyHunters = JSON.parse(await getFromValuesTable("bounty_hunters"));
  const { replitData } = await getTestimonialsData(bountyHunters);

  const userInfo = replitData.map((user, index) => {
    return {
      ...user.userInfo,
      username: bountyHunters[index].username,
    };
  });

  await updateUserInfo(userInfo);

  const testimonials = replitData.map((user, index) => {
    return user.userBounties.map((bounty) => {
      return {
        ...bounty,
        hunter_username: bountyHunters[index].username,
      };
    });
  });

  await updateTestimonials(testimonials.flat());

  const blogsData = await getBlogsData();
  await updateBlogsData(blogsData);
};

runner();
