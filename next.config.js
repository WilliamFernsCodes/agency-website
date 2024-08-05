const optimizedImages = require("next-optimized-images");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_BASE_URL;

const domainToAllow = supabaseUrl.replace("https://", "");
module.exports = optimizedImages({
  images: {
    disableStaticImages: true,
    domains: [domainToAllow, "images.unsplash.com"],
  },
});
