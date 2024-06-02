import type { Metadata } from "next";
import Navbar from "../../components/navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architecting the SKU AI Project \u2014 Dalphan | Thomas Allred",
  description: "Learn about the SKU AI project by Dalphan (Thomas Allred).",
  generator: "Next.js",
  applicationName: "Dalphan | Thomas Allred",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Dalphan",
    "Thomas Allred",
    "Developer",
    "Freelance",
    "Hire",
    "AI",
    "Python",
    "Project",
    "Image Recognition",
    "TensorFlow",
  ],
  authors: [{ name: "Thomas Allred" }, { name: "Dalphan" }],
  creator: "Dalphan | Thomas Allred",
  publisher: "Dalphan | Thomas Allred",
};

export default function SKUAIBlog() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-col justify-between items-center my-8 space-y-8 w-full px-8">
        <h2 className="font-medium text-5xl">
          Architecting the SKU AI Project
        </h2>
        <h3 className="font-medium text-3xl">Designing the Structure</h3>
        <p className="font-medium text-xl p-4 rounded-lg bg-[#0a0a20] outline outline-1 outline-white shadow-2xl shadow-black tracking-wide">
          For this project, I was tasked with designing an AI system that would
          return prediction on sneaker SKUs. The client needed support for 10+
          sneaker models, and all the recent SKUs released for those models.
          This ended up being around 500+ SKUs that the AI would need to
          predict.
          <br />
          <br />
          After doing some research and testing, I decided on using a structure
          where there was 2 models that would be used in the prediction process.
          The first model would be used to make predictions on the model of the
          sneaker, and the second model would be used to make predictions on the
          SKU of the sneaker. This was helpful, as when predicting on models,
          only the shape of the shoe was needed, and when predicting on SKUs,
          the color was also needed. This meant the first model would use
          grayscale images, and the second model would use colored images.
        </p>
        <h3 className="font-medium text-3xl">Gathering Data</h3>
        <p className="font-medium text-xl p-4 rounded-lg bg-[#0a0a20] outline outline-1 outline-white shadow-2xl shadow-black tracking-wide">
          Now to make a model that could predict on these images, I needed data.
          Since this was a unique project, there wasn&apos;t any pre-existing
          data set I could use. I had to create my own data set. I did this by
          scraping images from the internet, and then manually labeling them.
          This was a very time consuming process, but it was necessary to ensure
          that the model would be able to predict on the images.
          <br />
          <br />
          Each sku had about 100 total images spread across train, val, and test
          sets. Luckily some of these images could be used when training the
          model to predict on the sneaker model, so that saved some time. I
          gathered these images from mainly Nike and Shopify websites, as they
          had the most consistent images.
        </p>
        <h3 className="font-medium text-3xl">Technical Details</h3>
        <p className="font-medium text-xl p-4 rounded-lg bg-[#0a0a20] outline outline-1 outline-white shadow-2xl shadow-black tracking-wide">
          The information I will share in this section is not meant to be a
          tutorial, but rather a high level overview of how SKU AI works. If you
          are interested in learning more about SKU AI, I would recommend
          checking out the repository.
          <br />
          <br />
          I went through multiple iterations of the code behind the models, and
          ultimately landed on using VGG16 for the models. This was because
          VGG16 was able to predict on the images with a high accuracy rate, and
          was able to predict on the images fairly quickly. It took about 10
          minutes to train the model on the images, and the predictions were
          nearly instant.
          <br />
          <br />
          The client wanted to have this be an API where they could send images
          to and get predictions back. I decided on using Python and Django for
          the API, as I had experience with these technologies and knew they
          would be able to handle the requests. The API was able to process over
          10,000 daily predictions with a 99.99% uptime, and was able to return
          predictions in under 1 second.
        </p>
      </div>
    </main>
  );
}
