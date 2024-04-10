const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

require("dotenv").config();

async function seedAdmin() {
  mongoose.connect(process.env.MONGODB_URI);

  const userSchema = new mongoose.Schema({
    username: String,
    password: String,
  });

  mongoose.model("User", userSchema);

  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
  const adminUser = new mongoose.models.User({
    username: process.env.ADMIN_USERNAME,
    password: hashedPassword,
  });

  adminUser.save();
}

async function seedProjects() {
  mongoose.connect(process.env.MONGODB_URI);

  const projectSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    imageSrc: String,
    description: String,
    longDescription: String,
    stack: [String],
  });

  module.exports = mongoose.model("Project", projectSchema);

  const exampleProject1 = new mongoose.models.Project({
    title: "WordPlay",
    subtitle: "Turning words into programmable music",
    imageSrc: "https://cdn.midjourney.com/8df16ab3-61ab-4be6-9f04-bf0048d7b99e/0_3.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae. Amet nulla facilisi morbi tempus iaculis urna.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae. Amet nulla facilisi morbi tempus iaculis urna. Nisl vel pretium lectus quam id. Scelerisque felis imperdiet proin fermentum leo vel orci. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Diam vel quam elementum pulvinar etiam non. Tortor id aliquet lectus proin nibh nisl condimentum. Justo donec enim diam vulputate. Ultricies leo integer malesuada nunc vel risus commodo. Consequat ac felis donec et odio pellentesque. Varius duis at consectetur lorem donec massa sapien faucibus. Augue interdum velit euismod in. Quis enim lobortis scelerisque fermentum dui faucibus. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Arcu cursus euismod quis viverra. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat.",
    stack: ["React", "ToneJS", "Vite", "Vercel", "CircleCI"],
  });

  const exampleProject2 = new mongoose.models.Project({
    title: "Portfolio Website",
    subtitle: "Full-Stack with Admin Dashboard",
    imageSrc: "https://cdn.midjourney.com/267e183e-edcf-4ea9-a41b-ca9bd4186eed/0_1.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae. Amet nulla facilisi morbi tempus iaculis urna.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae. Amet nulla facilisi morbi tempus iaculis urna. Nisl vel pretium lectus quam id. Scelerisque felis imperdiet proin fermentum leo vel orci. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Diam vel quam elementum pulvinar etiam non. Tortor id aliquet lectus proin nibh nisl condimentum. Justo donec enim diam vulputate. Ultricies leo integer malesuada nunc vel risus commodo. Consequat ac felis donec et odio pellentesque. Varius duis at consectetur lorem donec massa sapien faucibus. Augue interdum velit euismod in. Quis enim lobortis scelerisque fermentum dui faucibus. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Arcu cursus euismod quis viverra. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat.",
    stack: ["NextJS", "Vercel", "MongoDB"],
  });

  const exampleProject3 = new mongoose.models.Project({
    title: "Deep Learning",
    subtitle: "Classifying Music Genres",
    imageSrc: "https://cdn.midjourney.com/af387ca2-29c5-4b61-89f6-33a341bfa80a/0_3.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae. Amet nulla facilisi morbi tempus iaculis urna.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae. Amet nulla facilisi morbi tempus iaculis urna. Nisl vel pretium lectus quam id. Scelerisque felis imperdiet proin fermentum leo vel orci. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Diam vel quam elementum pulvinar etiam non. Tortor id aliquet lectus proin nibh nisl condimentum. Justo donec enim diam vulputate. Ultricies leo integer malesuada nunc vel risus commodo. Consequat ac felis donec et odio pellentesque. Varius duis at consectetur lorem donec massa sapien faucibus. Augue interdum velit euismod in. Quis enim lobortis scelerisque fermentum dui faucibus. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Arcu cursus euismod quis viverra. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat.",
    stack: ["Python", "Tensorboard", "PyTorch"],
  });

  const exampleProject4 = new mongoose.models.Project({
    title: "Automated Trading Agents",
    subtitle: "Differential Evolution in a Simulated Stock Exchange",
    imageSrc: "https://cdn.midjourney.com/6c6992d3-0282-4ddc-8569-94843d4f09e7/0_1.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae. Amet nulla facilisi morbi tempus iaculis urna.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae. Amet nulla facilisi morbi tempus iaculis urna. Nisl vel pretium lectus quam id. Scelerisque felis imperdiet proin fermentum leo vel orci. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Diam vel quam elementum pulvinar etiam non. Tortor id aliquet lectus proin nibh nisl condimentum. Justo donec enim diam vulputate. Ultricies leo integer malesuada nunc vel risus commodo. Consequat ac felis donec et odio pellentesque. Varius duis at consectetur lorem donec massa sapien faucibus. Augue interdum velit euismod in. Quis enim lobortis scelerisque fermentum dui faucibus. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Arcu cursus euismod quis viverra. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat.",
    stack: ["Python", "AWS"],
  });

  const exampleProject5 = new mongoose.models.Project({
    title: "Time Mine",
    subtitle: "Cops and Robbers with a Time Twist",
    imageSrc: "https://cdn.midjourney.com/771ae32c-ec87-4879-a431-72756890baaa/0_1.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae. Amet nulla facilisi morbi tempus iaculis urna.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae. Amet nulla facilisi morbi tempus iaculis urna. Nisl vel pretium lectus quam id. Scelerisque felis imperdiet proin fermentum leo vel orci. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Diam vel quam elementum pulvinar etiam non. Tortor id aliquet lectus proin nibh nisl condimentum. Justo donec enim diam vulputate. Ultricies leo integer malesuada nunc vel risus commodo. Consequat ac felis donec et odio pellentesque. Varius duis at consectetur lorem donec massa sapien faucibus. Augue interdum velit euismod in. Quis enim lobortis scelerisque fermentum dui faucibus. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Arcu cursus euismod quis viverra. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat.",
    stack: ["React", "ToneJS", "Vite", "Vercel", "CircleCI"],
  });

  exampleProject1.save();
  exampleProject2.save();
  exampleProject3.save();
  exampleProject4.save();
  exampleProject5.save();
}

async function main() {
  await seedAdmin();
  await seedProjects();
}

main().catch((err) => {
  console.error("An error occurred while attempting to seed the database:", err);
});
