export default function SharingGoals() {
  return (
    <>
      <section className="flex flex-col justify-center pt-32 px-4">
        <h1 className="mt-6 font-montserrat uppercase text-base text-center font-bold text-black mb-2">
          Sharing Goals
        </h1>
        <p className="font-montserrat text-center font-normal mb-10">
          It is very important for us to know your goals and the <br />{" "}
          transformation you seek. Please share them by clicking <br /> here in
          the format below by Oct 28th.
        </p>
      </section>
      <section className="flex items-center justify-center md:py-12 md:px-24">
        <section className="bg-gray-200 h-[700px] w-full flex justify-center p-12">
          Google forms
        </section>
      </section>
      {/* <section className="w-full lg:w-4/5 container mx-auto flex flex-row items-center justify-center py-12">
        <p className="text-2xl font-pt-serif text-primary-accent text-center">
          To get started on your Business Transformation, <br /> connect with
          us!
        </p>
      </section> */}
    </>
  );
}
