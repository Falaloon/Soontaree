const ProjectCard = ({ title, image, description, icons, link }) => {
  return (
    <div className="card ">
      <div className="justify-items-center p-1 mb-4 bg-[8ECDDD] w-[460px] h-[270px] rounded-lg ">
        <img
          className="justify-items-center rounded-lg block object-cover h-[100%] "
          src={image ?? "image-default-project.jpeg"}
          alt="project-image"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xl font-black">{title}</p>
        <p className="text-base whitespace-normal text-slate-600 ">
          {description ?? "Lorem"}
        </p>
        <div className="flex flex-row justify-end mt-[32px] gap-[16px]">
          View more
          <a href={link} target="_blank">
            {icons}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
