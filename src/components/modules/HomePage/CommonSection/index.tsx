import Title from "@/components/ui/title-common";

function CommonSection() {
  return (
    <div className="min-h-[300px]">
      <div className="container py-20">
        <Title
          title="We Provide Several Services That Help You"
          subtitle="our services"
          align="center"
          className="mb-6"
        ></Title> 
        <h3 className="font-title mb-4 text-2xl font-bold">Colors</h3>
        <div className="flex">
          <div className="h-20 w-20 bg-background" />
          <div className="h-20 w-20 bg-primary" />
          <div className="bg-primary-dark h-20 w-20" />
          <div className="bg-primary-darker h-20 w-20" />
        </div>
      </div>
    </div>
  );
}

export default CommonSection;
