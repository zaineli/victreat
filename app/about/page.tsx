import Head from "next/head";

export default function CancerDiagnosisPage() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-white w-full p-8">
      <main className="w-full max-w-screen-lg">
        <section className="mb-16 text-center ">
          <h1 className="text-6xl font-light leading-tight">
            Helping <span className="font-bold">Cancer Diagnosis</span><br />and Treatment
          </h1>
        </section>
        
        <section className="mb-16 text-center">
          <nav className="flex justify-center space-x-6 text-gray-600">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Linkedin</a>
            <a href="#" className="hover:underline">Twiiter</a>
          </nav>
        </section>
        
        <section className="flex flex-col md:flex-row justify-between gap-12 items-center">
          <p className="text-gray-600 max-w-md">
            Learn about different types of cancers, their symptoms, and how they are diagnosed using advanced medical technologies and procedures.
          </p>
          <p className="text-gray-600 max-w-md">
            Our team of oncologists and healthcare professionals are dedicated to providing personalized treatment plans, including surgery, chemotherapy, and radiation therapy.
          </p>
        </section>
      </main>
    </div>
  );
}
